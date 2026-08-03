const express = require('express');
const { authMiddleware } = require('../auth');
const { runCmd, compileSem, privilegePrefix, LIMITS } = require('../compile-util');
const fs = require('fs');
const path = require('path');
const os = require('os');

const router = express.Router();

const TIMEOUT_MS = 5000;   // 5 seconds compile+run
const MAX_CODE = 50000;    // 50KB code limit

// Simple per-IP rate limiter: max 10 compilations per minute
const compileHits = new Map();
const RATE_WINDOW = 60000;
const RATE_MAX = 10;

function rateLimit(ip) {
  const now = Date.now();
  const hits = compileHits.get(ip) || [];
  const recent = hits.filter(t => now - t < RATE_WINDOW);
  if (recent.length >= RATE_MAX) return false;
  recent.push(now);
  compileHits.set(ip, recent);
  return true;
}

// Clean up old entries every 5 minutes
setInterval(() => {
  const now = Date.now();
  for (const [ip, hits] of compileHits) {
    const recent = hits.filter(t => now - t < RATE_WINDOW);
    if (recent.length === 0) compileHits.delete(ip);
    else compileHits.set(ip, recent);
  }
}, 300000);

// Normalize source before scanning: collapse line splicing and strip comments
// so macro/comment/line-splice tricks cannot hide banned tokens.
function normalizeSource(code) {
  return code
    .replace(/\\\r?\n/g, '')
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/\/\/[^\n]*/g, '');
}

const BANNED = [
  /#include\s*(next)?\s*[<"](sys\/|spawn\.h|unistd|windows|direct|io\.h|process\.h|fstream|filesystem|fcntl|dirent|sys\/stat|sys\/types|sys\/socket|netinet|arpa|thread|pthread)/i,
  /#include\s*[<"]\s*\//i,
  /#include_next/i,
  /\b(?:system|popen|posix_spawn|fork|vfork|exec\w*|remove|rename|unlink|rmdir|mkdir|chmod|chown|kill|setuid|setgid|mount|umount|socket|connect|bind|listen|accept|dlopen|dlsym|syscall)\s*\(/i,
  /\b(?:fopen|freopen|open|creat|ifstream|ofstream|fstream)\s*\(/i,
  /\bstd::(?:ifstream|ofstream|fstream)\b/i,
  /\b(?:ifstream|ofstream|fstream|fopen|freopen|system|popen|posix_spawn|syscall|dlopen|dlsym)\b/i,
  /\b__asm__\b|\basm\s*\(/i,
];

function blocked(code) {
  const scan = normalizeSource(code);
  return BANNED.some(p => p.test(scan));
}

function cleanOutput(s) {
  if (!s) return '';
  return s.replace(/\x1B\[[0-9;]*[a-zA-Z]/g, '').trimEnd();
}

function normalizeOutput(s) {
  if (!s) return '';
  return s.replace(/\r\n/g, '\n').replace(/\r/g, '\n').trimEnd();
}

// POST /api/compile-run
router.post('/compile-run', authMiddleware, async (req, res) => {
  const ip = req.ip;
  if (!rateLimit(ip)) {
    return res.status(429).json({ error: '编译请求过于频繁，请稍后再试' });
  }

  const { code, stdin, expectedOutput } = req.body;
  if (!code || typeof code !== 'string') return res.status(400).json({ error: '请提供代码' });
  if (code.length > MAX_CODE) return res.status(400).json({ error: '代码过长，请精简后重试' });
  if (blocked(code)) return res.status(400).json({ error: '代码包含不允许的操作' });

  const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'gesp-'));
  const srcFile = path.join(tmpDir, 'main.cpp');
  const binFile = path.join(tmpDir, 'main');

  await compileSem.acquire();
  try {
    fs.writeFileSync(srcFile, code, 'utf8');
    const prefix = privilegePrefix(tmpDir);
    const compileStart = Date.now();

    const c = await runCmd(`cd "${tmpDir}" && ${prefix}g++ -o main main.cpp -std=c++17 -O2 2>&1`, TIMEOUT_MS);
    if (c.error) {
      return res.json({ stdout: '', stderr: cleanOutput(c.stderr || c.stdout || c.error.message || '编译失败'), error: 'compile', timeMs: Date.now() - compileStart });
    }

    try { fs.chmodSync(binFile, 0o755); } catch {}
    if (stdin) fs.writeFileSync(path.join(tmpDir, 'input.txt'), stdin, 'utf8');

    const runCmdStr = `cd "${tmpDir}" && ${LIMITS}timeout -k 1 5 ${prefix}./main ${stdin ? '< input.txt' : ''} 2>&1`;
    const r = await runCmd(runCmdStr, TIMEOUT_MS);
    let stdout = r.stdout || '';
    let stderr = r.stderr || '';
    let runError = null;
    if (r.error) {
      const code2 = r.error.code, sig = r.error.signal;
      if (code2 === 124 || sig === 'SIGTERM' || sig === 'SIGKILL') runError = 'timeout';
      else runError = 'runtime';
    }

    const timeMs = Date.now() - compileStart;
    stdout = cleanOutput(stdout);
    stderr = cleanOutput(stderr);
    let passed;
    if (expectedOutput !== undefined) passed = normalizeOutput(stdout) === normalizeOutput(expectedOutput);
    return res.json({ stdout, stderr, error: runError, passed, timeMs });
  } catch (e) {
    return res.json({ stdout: '', stderr: '系统错误: ' + e.message, error: 'system', timeMs: 0 });
  } finally {
    compileSem.release();
    try { if (fs.existsSync(srcFile)) fs.unlinkSync(srcFile); if (fs.existsSync(binFile)) fs.unlinkSync(binFile); fs.rmdirSync(tmpDir, { recursive: true }); } catch {}
  }
});

// POST /api/compile-run/test-cases
router.post('/compile-run/test-cases', authMiddleware, async (req, res) => {
  const ip = req.ip;
  if (!rateLimit(ip)) {
    return res.status(429).json({ error: '编译请求过于频繁，请稍后再试' });
  }

  const { code, testCases } = req.body;
  if (!code || !Array.isArray(testCases) || testCases.length === 0) return res.status(400).json({ error: '参数不完整' });
  if (code.length > MAX_CODE) return res.status(400).json({ error: '代码过长，请精简后重试' });
  if (blocked(code)) return res.status(400).json({ error: '代码包含不允许的操作' });

  const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'gesp-'));
  const srcFile = path.join(tmpDir, 'main.cpp');
  const binFile = path.join(tmpDir, 'main');

  await compileSem.acquire();
  try {
    fs.writeFileSync(srcFile, code, 'utf8');
    const prefix = privilegePrefix(tmpDir);

    const c = await runCmd(`cd "${tmpDir}" && ${prefix}g++ -o main main.cpp -std=c++17 -O2 2>&1`, TIMEOUT_MS);
    if (c.error) {
      const stderr = cleanOutput(c.stderr || c.stdout || c.error.message || '编译失败');
      return res.json({
        results: testCases.map(tc => ({ passed: false, stdout: '', expected: tc.expectedOutput, description: tc.description || '', error: 'compile', stderr })),
        allPassed: false, compileError: stderr, timeMs: 0
      });
    }

    try { fs.chmodSync(binFile, 0o755); } catch {}

    const results = [];
    let totalTime = 0;
    for (const tc of testCases) {
      const start = Date.now();
      if (tc.input) fs.writeFileSync(path.join(tmpDir, 'input.txt'), tc.input, 'utf8');
      const runCmdStr = `cd "${tmpDir}" && ${LIMITS}timeout -k 1 5 ${prefix}./main ${tc.input ? '< input.txt' : ''} 2>&1`;
      const r = await runCmd(runCmdStr, TIMEOUT_MS);
      let stdout = r.stdout || '';
      let error = null;
      if (r.error) {
        const code2 = r.error.code, sig = r.error.signal;
        if (code2 === 124 || sig === 'SIGTERM' || sig === 'SIGKILL') error = 'timeout';
        else error = 'runtime';
      }
      stdout = cleanOutput(stdout);
      const passed = normalizeOutput(stdout) === normalizeOutput(tc.expectedOutput);
      const elapsed = Date.now() - start;
      totalTime += elapsed;
      results.push({ passed, stdout, expected: tc.expectedOutput, description: tc.description || '', error, timeMs: elapsed });
    }

    return res.json({ results, allPassed: results.every(r => r.passed), timeMs: totalTime });
  } catch (e) {
    return res.json({ results: testCases.map(tc => ({ passed: false, stdout: '', expected: tc.expectedOutput, description: tc.description || '', error: 'system' })), allPassed: false, timeMs: 0 });
  } finally {
    compileSem.release();
    try { if (fs.existsSync(srcFile)) fs.unlinkSync(srcFile); if (fs.existsSync(binFile)) fs.unlinkSync(binFile); fs.rmdirSync(tmpDir, { recursive: true }); } catch {}
  }
});

module.exports = router;
