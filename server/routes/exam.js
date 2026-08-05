const express = require('express');
const fs = require('fs');
const os = require('os');
const path = require('path');
const { db } = require('../db');
const { authMiddleware } = require('../auth');
const { runCmd, compileSem, privilegePrefix, LIMITS } = require('../compile-util');
const { levelInt, kpWhere } = require('../level');

const router = express.Router();

// Server-side verification of a submitted C++ coding answer: compile + run the
// student's code against the question's stored test cases. Returns true only if
// every test case passes. Async + bounded by compileSem, so it never blocks the
// event loop.
async function verifyCoding(code, testCasesJson) {
  let testCases = [];
  if (testCasesJson) { try { testCases = JSON.parse(testCasesJson); } catch { testCases = []; } }
  if (!Array.isArray(testCases) || testCases.length === 0) return false;

  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'gesp-v-'));
  const src = path.join(tmp, 'main.cpp');
  fs.writeFileSync(src, code, 'utf8');
  const prefix = privilegePrefix(tmp);

  await compileSem.acquire();
  try {
    const c = await runCmd(`cd "${tmp}" && ${prefix}g++ -o main main.cpp -std=c++17 -O2 2>&1`, 8000);
    if (c.error) return false;
    const norm = (s) => String(s || '').replace(/\r\n/g, '\n').replace(/\r/g, '\n').trimEnd();
    for (const tc of testCases) {
      if (tc.input) fs.writeFileSync(path.join(tmp, 'in.txt'), tc.input, 'utf8');
      const r = await runCmd(`cd "${tmp}" && ${LIMITS}timeout -k 1 5 ${prefix}./main ${tc.input ? '< in.txt' : ''} 2>&1`, 8000);
      if (norm(r.stdout || '') !== norm(tc.expectedOutput)) return false;
    }
    return true;
  } catch { return false; }
  finally {
    compileSem.release();
    try { fs.rmSync(tmp, { recursive: true, force: true }); } catch {}
  }
}

// Get all available exam papers for a level
router.get('/papers', authMiddleware, (req, res) => {
  const level = levelInt(req.query.level);
  const papers = db.prepare('SELECT * FROM exam_papers WHERE is_active = 1 AND (level IS NULL OR level = ?) ORDER BY id').all(level);
  res.json(papers);
});

// Get paper by ID
router.get('/papers/:id', authMiddleware, (req, res) => {
  const paper = db.prepare('SELECT * FROM exam_papers WHERE id = ?').get(req.params.id);
  if (!paper) {
    return res.status(404).json({ error: '试卷不存在' });
  }
  res.json(paper);
});

// Get questions for a specific paper
router.get('/paper/:id', authMiddleware, (req, res) => {
  const paperId = req.params.id;

  // Check if paper exists
  const paper = db.prepare('SELECT * FROM exam_papers WHERE id = ?').get(paperId);
  if (!paper) {
    return res.status(404).json({ error: '试卷不存在' });
  }

  // Get questions for this paper
  const rows = db.prepare(`
    SELECT q.* FROM questions q
    JOIN paper_questions pq ON q.id = pq.question_id
    WHERE pq.paper_id = ?
    ORDER BY pq.sort_order
  `).all(paperId);

  const questions = rows.map(q => ({
    id: q.id, type: q.type, difficulty: q.difficulty,
    title: q.title, options: q.options ? JSON.parse(q.options) : null,
    starter_code: q.starter_code || null,
    test_cases: q.test_cases ? JSON.parse(q.test_cases) : null,
    isJudge: q.is_judge === 1
  }));

  res.json({ paper, questions });
});

// Get random paper (for quick start) - follows official GESP format: 15 choice, 10 judge, 2 coding
router.get('/paper', authMiddleware, (req, res) => {
  const level = levelInt(req.query.level);
  // Pick random questions per official GESP type order: 单选 → 判断 → 编程
  const choiceQs = db.prepare(`
    SELECT * FROM questions WHERE type = 'choice' AND ${kpWhere(level)} ORDER BY RANDOM() LIMIT 15
  `).all();
  const judgeQs = db.prepare(`
    SELECT * FROM questions WHERE type = 'judge' AND ${kpWhere(level)} ORDER BY RANDOM() LIMIT 10
  `).all();
  const codingQs = db.prepare(`
    SELECT * FROM questions WHERE type = 'coding' AND ${kpWhere(level)} ORDER BY RANDOM() LIMIT 2
  `).all();

  // Concatenate in official order (no cross-type shuffle)
  const all = [...choiceQs, ...judgeQs, ...codingQs];

  const questions = all.map(q => ({
    id: q.id, type: q.type, difficulty: q.difficulty,
    title: q.title, options: q.options ? JSON.parse(q.options) : null,
    starter_code: q.starter_code || null,
    test_cases: q.test_cases ? JSON.parse(q.test_cases) : null,
    isJudge: q.is_judge === 1
  }));

  res.json({ paper: { id: 0, title: '随机组卷', description: `按官方题型随机抽取${questions.length}道题` }, questions });
});

router.post('/submit', authMiddleware, async (req, res) => {
  const { paperId, answers, timeSpent } = req.body;
  if (!answers || !Array.isArray(answers)) {
    return res.status(400).json({ error: '参数不完整' });
  }

  // Async server-side verification of coding answers (bounded by compileSem).
  const codingPassed = new Map();
  await Promise.all(answers.map(async (a) => {
    if (!a || !a.questionId) return;
    const q = db.prepare('SELECT type, test_cases FROM questions WHERE id = ?').get(a.questionId);
    if (q && q.type === 'coding') {
      const submittedCode = (typeof a.code === 'string' && a.code.trim()) ? a.code : '';
      codingPassed.set(a.questionId, submittedCode ? await verifyCoding(submittedCode, q.test_cases) : false);
    }
  }));

  let correct = 0;
  let earnedPoints = 0;
  let totalPoints = 0;
  const total = answers.length;
  const results = [];

  const insertAnswer = db.prepare('INSERT INTO answers (user_id, question_id, selected, is_correct) VALUES (?, ?, ?, ?)');
  const transaction = db.transaction(() => {
    for (const a of answers) {
      const q = db.prepare('SELECT answer, type, is_judge, explanation, answer_text FROM questions WHERE id = ?').get(a.questionId);
      let isCorrect;
      if (q && q.type === 'coding') {
        isCorrect = codingPassed.get(a.questionId) ? 1 : 0;
        totalPoints += 25; // GESP: coding = 25 points each
        if (isCorrect) { correct++; earnedPoints += 25; }
      } else {
        isCorrect = q && q.answer === a.selected ? 1 : 0;
        totalPoints += 2; // GESP: choice/judge = 2 points each
        if (isCorrect) { correct++; earnedPoints += 2; }
      }
      insertAnswer.run(req.user.id, a.questionId, a.selected, isCorrect);
      results.push({
        questionId: a.questionId,
        correct: isCorrect,
        answer: q ? q.answer : -1,
        explanation: q ? (q.explanation || '') : '',
        answer_text: q && q.type === 'coding' ? (q.answer_text || null) : null
      });
    }

    // Score = earnedPoints / totalPoints * 100, capped at 100
    const score = totalPoints > 0 ? Math.min(100, Math.round(earnedPoints / totalPoints * 100)) : 0;
    db.prepare('INSERT INTO exam_sessions (user_id, paper_id, exam_type, total, correct, score, time_spent, answers, finished_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, CURRENT_TIMESTAMP)').run(
      req.user.id, paperId || null, 'mock', total, correct, score, timeSpent || 0, JSON.stringify(answers)
    );

    return { total, correct, score, earnedPoints, totalPoints, results };
  });

  const result = transaction();
  db.save(); // persist exam + answers immediately (avoid data loss on restart)
  res.json(result);
});

router.get('/history', authMiddleware, (req, res) => {
  const rows = db.prepare('SELECT * FROM exam_sessions WHERE user_id = ? ORDER BY started_at DESC').all(req.user.id);
  res.json(rows);
});

module.exports = router;
