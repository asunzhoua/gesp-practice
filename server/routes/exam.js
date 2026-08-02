const express = require('express');
const { db } = require('../db');
const { authMiddleware } = require('../auth');

const router = express.Router();

// Get all available exam papers
router.get('/papers', authMiddleware, (req, res) => {
  const papers = db.prepare('SELECT * FROM exam_papers WHERE is_active = 1 ORDER BY id').all();
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
    answer: q.answer, explanation: q.explanation, answer_text: q.answer_text || null,
    starter_code: q.starter_code || null,
    test_cases: q.test_cases ? JSON.parse(q.test_cases) : null,
    isJudge: q.is_judge === 1
  }));

  res.json({ paper, questions });
});

// Get random paper (for quick start) - guaranteed at least 2 coding questions
router.get('/paper', authMiddleware, (req, res) => {
  // Step 1: Pick 2 random coding questions
  const codingQs = db.prepare(`
    SELECT * FROM questions WHERE type = 'coding' ORDER BY RANDOM() LIMIT 2
  `).all();
  const codingIds = new Set(codingQs.map(q => q.id));

  // Step 2: Fill remaining 28 with choice/judge questions
  const remaining = db.prepare(`
    SELECT * FROM questions WHERE type != 'coding' ORDER BY RANDOM() LIMIT 30
  `).all();

  // Step 3: Combine and shuffle
  const all = [...codingQs, ...remaining.slice(0, 30 - codingQs.length)];
  for (let i = all.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [all[i], all[j]] = [all[j], all[i]];
  }

  const questions = all.map(q => ({
    id: q.id, type: q.type, difficulty: q.difficulty,
    title: q.title, options: q.options ? JSON.parse(q.options) : null,
    answer: q.answer, explanation: q.explanation, answer_text: q.answer_text || null,
    starter_code: q.starter_code || null,
    test_cases: q.test_cases ? JSON.parse(q.test_cases) : null,
    isJudge: q.is_judge === 1
  }));

  res.json({ paper: { id: 0, title: '随机组卷', description: '从题库随机抽取30道题' }, questions });
});

router.post('/submit', authMiddleware, (req, res) => {
  const { paperId, answers, timeSpent } = req.body;
  if (!answers || !Array.isArray(answers)) {
    return res.status(400).json({ error: '参数不完整' });
  }

  let correct = 0;
  let earnedPoints = 0;
  let totalPoints = 0;
  const total = answers.length;

  const insertAnswer = db.prepare('INSERT INTO answers (user_id, question_id, selected, is_correct) VALUES (?, ?, ?, ?)');
  const transaction = db.transaction(() => {
    for (const a of answers) {
      const q = db.prepare('SELECT answer, type, is_judge FROM questions WHERE id = ?').get(a.questionId);
      let isCorrect;
      if (q && q.type === 'coding') {
        // For coding questions, use the codePassed flag from the client
        isCorrect = a.codePassed ? 1 : 0;
        totalPoints += 25; // GESP: coding = 25 points each
        if (isCorrect) { correct++; earnedPoints += 25; }
      } else {
        isCorrect = q && q.answer === a.selected ? 1 : 0;
        totalPoints += 2; // GESP: choice/judge = 2 points each
        if (isCorrect) { correct++; earnedPoints += 2; }
      }
      insertAnswer.run(req.user.id, a.questionId, a.selected, isCorrect);
    }

    // Score = earnedPoints / totalPoints * 100, capped at 100
    const score = totalPoints > 0 ? Math.min(100, Math.round(earnedPoints / totalPoints * 100)) : 0;
    db.prepare('INSERT INTO exam_sessions (user_id, paper_id, exam_type, total, correct, score, time_spent, answers, finished_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, CURRENT_TIMESTAMP)').run(
      req.user.id, paperId || null, 'mock', total, correct, score, timeSpent || 0, JSON.stringify(answers)
    );

    return { total, correct, score, earnedPoints, totalPoints };
  });

  const result = transaction();
  res.json(result);
});

router.get('/history', authMiddleware, (req, res) => {
  const rows = db.prepare('SELECT * FROM exam_sessions WHERE user_id = ? ORDER BY started_at DESC').all(req.user.id);
  res.json(rows);
});

module.exports = router;
