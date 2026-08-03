const express = require('express');
const { authMiddleware } = require('../auth');
const { execSync } = require('child_process');
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

// POST /api/compile-run
// Accepts: { code: string, stdin?: string, expectedOutput?: string }
// Returns: { stdout, stderr, error, passed?, timeMs }
router.post('/compile-run', authMiddleware, (req, res) => {
  const ip = req.ip;
  if (!rateLimit(ip)) {
    return res.status(429).json({ error: '编译请求过于频繁，请稍后再试' });
  }

  const { code, stdin, expectedOutput } = req.body;

  if (!code || typeof code !== 'string') {
    return res.status(400).json({ error: '请提供代码' });
  }
  if (code.length > MAX_CODE) {
    return res.status(400).json({ error: '代码过长，请精简后重试' });
  }

  // Reject dangerous includes/content (file I/O, process control, networking, assembly)
  // Normalize the source first: collapse backslash-newline line splicing and strip comments,
  // so macro/comment/line-splice tricks cannot hide banned tokens from the scan.
  const scanCode = code
    .replace(/\\\r?\n/g, '')                 // line splicing: "#include \" + <header>
    .replace(/\/\*[\s\S]*?\*\//g, '')        // block comments: fopen/**/(
    .replace(/\/\/[^\n]*/g, '');             // line comments
  const banned = [
    /#include\s*(next)?\s*[<"](sys\/|spawn\.h|unistd|windows|direct|io\.h|process\.h|fstream|filesystem|fcntl|dirent|sys\/stat|sys\/types|sys\/socket|netinet|arpa|thread|pthread)/i,
    /#include\s*[<"]\s*\//i,
    /#include_next/i,
    /\b(?:system|popen|posix_spawn|fork|vfork|exec\w*|remove|rename|unlink|rmdir|mkdir|chmod|chown|kill|setuid|setgid|mount|umount|socket|connect|bind|listen|accept|dlopen|dlsym|syscall)\s*\(/i,
    /\b(?:fopen|freopen|open|creat|ifstream|ofstream|fstream)\s*\(/i,
    /\bstd::(?:ifstream|ofstream|fstream)\b/i,
    /\b(?:ifstream|ofstream|fstream|fopen|freopen|system|popen|posix_spawn|syscall|dlopen|dlsym)\b/i,
    /\b__asm__\b|\basm\s*\(/i,
  ];
  for (const pat of banned) {
    if (pat.test(scanCode)) {
      return res.status(400).json({ error: '代码包含不允许的操作' });
    }
  }

  const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'gesp-'));
  const srcFile = path.join(tmpDir, 'main.cpp');
  const binFile = path.join(tmpDir, 'main');

  try {
    // Write source code
    fs.writeFileSync(srcFile, code, 'utf8');

    // Drop privileges for BOTH compile and run when the server is root
    const prefix = getPrivilegePrefix(tmpDir);

    // Compile (as nobody when root)
    const compileStart = Date.now();
    let compileOut = '';
    try {
      compileOut = execSync(
        `cd "${tmpDir}" && ${prefix}g++ -o main main.cpp -std=c++17 -O2 2>&1`,
        { timeout: TIMEOUT_MS, encoding: 'utf8', maxBuffer: 1024 * 1024 }
      );
    } catch (e) {
      // Compilation failed
      const stderr = e.stderr || e.stdout || e.message || '编译失败';
      return res.json({
        stdout: '',
        stderr: cleanOutput(stderr),
        error: 'compile',
        timeMs: Date.now() - compileStart
      });
    }

    try { fs.chmodSync(binFile, 0o755); } catch {}
    if (stdin) fs.writeFileSync(path.join(tmpDir, 'input.txt'), stdin, 'utf8');

    // Run with hard resource limits (memory / processes / file size / CPU)
    let stdout = '';
    let stderr = '';
    let runError = null;
    const limits = 'ulimit -v 262144; ulimit -u 20; ulimit -f 1024; ulimit -t 5; ';
    try {
      const runCmd = stdin
        ? `cd "${tmpDir}" && ${limits}timeout -k 1 5 ${prefix}./main < input.txt 2>&1`
        : `cd "${tmpDir}" && ${limits}timeout -k 1 5 ${prefix}./main 2>&1`;
      stdout = execSync(runCmd, {
        timeout: TIMEOUT_MS,
        encoding: 'utf8',
        maxBuffer: 1024 * 1024
      });
    } catch (e) {
      stdout = e.stdout || '';
      stderr = e.stderr || '';
      if (e.status === 124) {
        runError = 'timeout';
      } else if (e.status !== 0) {
        runError = 'runtime';
      }
    }

    const timeMs = Date.now() - compileStart;
    stdout = cleanOutput(stdout);
    stderr = cleanOutput(stderr);

    // Compare output if expected provided
    let passed = undefined;
    if (expectedOutput !== undefined) {
      passed = normalizeOutput(stdout) === normalizeOutput(expectedOutput);
    }

    return res.json({ stdout, stderr, error: runError, passed, timeMs });
  } catch (e) {
    return res.json({
      stdout: '',
      stderr: '系统错误: ' + e.message,
      error: 'system',
      timeMs: 0
    });
  } finally {
    // Cleanup temp files
    try {
      if (fs.existsSync(srcFile)) fs.unlinkSync(srcFile);
      if (fs.existsSync(binFile)) fs.unlinkSync(binFile);
      fs.rmdirSync(tmpDir, { recursive: true });
    } catch {}
  }
});

// POST /api/compile-run/test-cases
// Run code against all test cases from the question
// Accepts: { code: string, testCases: [{ input, expectedOutput, description }] }
// Returns: { results: [{ passed, stdout, expected, description }], allPassed, timeMs }
router.post('/compile-run/test-cases', authMiddleware, (req, res) => {
  const ip = req.ip;
  if (!rateLimit(ip)) {
    return res.status(429).json({ error: '编译请求过于频繁，请稍后再试' });
  }

  const { code, testCases } = req.body;

  if (!code || !Array.isArray(testCases) || testCases.length === 0) {
    return res.status(400).json({ error: '参数不完整' });
  }
  if (code.length > MAX_CODE) {
    return res.status(400).json({ error: '代码过长，请精简后重试' });
  }

  // Run sequentially to avoid temp dir collisions
  const results = [];
  let totalTime = 0;

  const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'gesp-'));
  const srcFile = path.join(tmpDir, 'main.cpp');
  const binFile = path.join(tmpDir, 'main');

  try {
    fs.writeFileSync(srcFile, code, 'utf8');

    // Drop privileges for BOTH compile and run
    const prefix = getPrivilegePrefix(tmpDir);

    // Compile once (as nobody when root)
    try {
      execSync(
        `cd "${tmpDir}" && ${prefix}g++ -o main main.cpp -std=c++17 -O2 2>&1`,
        { timeout: TIMEOUT_MS, encoding: 'utf8', maxBuffer: 1024 * 1024 }
      );
    } catch (e) {
      const stderr = cleanOutput(e.stderr || e.stdout || e.message || '编译失败');
      return res.json({
        results: testCases.map(tc => ({
          passed: false, stdout: '', expected: tc.expectedOutput,
          description: tc.description || '', error: 'compile', stderr
        })),
        allPassed: false,
        compileError: stderr,
        timeMs: 0
      });
    }

    try { fs.chmodSync(binFile, 0o755); } catch {}
    const limits = 'ulimit -v 262144; ulimit -u 20; ulimit -f 1024; ulimit -t 5; ';

    // Run each test case
    for (const tc of testCases) {
      const start = Date.now();
      let stdout = '';
      let error = null;
      try {
        if (tc.input) fs.writeFileSync(path.join(tmpDir, 'input.txt'), tc.input, 'utf8');
        const runCmd = tc.input
          ? `cd "${tmpDir}" && ${limits}timeout -k 1 5 ${prefix}./main < input.txt 2>&1`
          : `cd "${tmpDir}" && ${limits}timeout -k 1 5 ${prefix}./main 2>&1`;
        stdout = execSync(runCmd, {
          timeout: TIMEOUT_MS, encoding: 'utf8', maxBuffer: 1024 * 1024
        });
      } catch (e) {
        stdout = e.stdout || '';
        if (e.status === 124) error = 'timeout';
        else if (e.status !== 0) error = 'runtime';
      }

      stdout = cleanOutput(stdout);
      const passed = normalizeOutput(stdout) === normalizeOutput(tc.expectedOutput);
      const elapsed = Date.now() - start;
      totalTime += elapsed;

      results.push({
        passed,
        stdout,
        expected: tc.expectedOutput,
        description: tc.description || '',
        error,
        timeMs: elapsed
      });
    }

    return res.json({
      results,
      allPassed: results.every(r => r.passed),
      timeMs: totalTime
    });
  } catch (e) {
    return res.json({
      results: testCases.map(tc => ({
        passed: false, stdout: '', expected: tc.expectedOutput,
        description: tc.description || '', error: 'system'
      })),
      allPassed: false,
      timeMs: 0
    });
  } finally {
    try {
      if (fs.existsSync(srcFile)) fs.unlinkSync(srcFile);
      if (fs.existsSync(binFile)) fs.unlinkSync(binFile);
      fs.rmdirSync(tmpDir, { recursive: true });
    } catch {}
  }
});

// Helpers
function getPrivilegePrefix(tmpDir) {
  // When the server runs as root, run g++ and the compiled binary as "nobody"
  // so malicious code cannot read/write server files.
  if (process.getuid && process.getuid() === 0) {
    try {
      // 0777 so "nobody" can write the compiled binary inside the sandbox dir
      fs.chmodSync(tmpDir, 0o777);
      require('child_process').execSync('command -v setpriv', { encoding: 'utf8' });
      return 'setpriv --reuid=65534 --regid=65534 --clear-groups ';
    } catch { /* setpriv unavailable; fall back to current user */ }
  }
  return '';
}

function shellEscape(s) {
  // Single-quote escape for shell
  return "'" + String(s).replace(/'/g, "'\\''") + "'";
}

function cleanOutput(s) {
  if (!s) return '';
  // Remove ANSI escape codes
  return s.replace(/\x1B\[[0-9;]*[a-zA-Z]/g, '').trimEnd();
}

function normalizeOutput(s) {
  if (!s) return '';
  return s.replace(/\r\n/g, '\n').replace(/\r/g, '\n').trimEnd();
}

module.exports = router;
