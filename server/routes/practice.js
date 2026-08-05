const express = require('express');
const { db } = require('../db');
const { authMiddleware } = require('../auth');
const { levelInt, kpWhere } = require('../level');

const router = express.Router();

// Ebbinghaus forgetting curve intervals in days
const EBBINGHAUS_INTERVALS = [1, 2, 4, 7, 15, 30];

router.post('/answer', authMiddleware, (req, res) => {
  const { questionId, selected, codePassed } = req.body;
  if (!questionId || selected === undefined) {
    return res.status(400).json({ error: '参数不完整' });
  }

  const q = db.prepare('SELECT type, answer, explanation FROM questions WHERE id = ?').get(questionId);
  if (!q) return res.status(404).json({ error: '题目不存在' });

  // Never trust the client's is_correct — compute it server-side from the question bank.
  let isCorrect = 0;
  if (q.type === 'coding') {
    isCorrect = codePassed === true ? 1 : 0;
  } else {
    isCorrect = selected === q.answer ? 1 : 0;
  }

  db.prepare('INSERT INTO answers (user_id, question_id, selected, is_correct) VALUES (?, ?, ?, ?)').run(
    req.user.id, questionId, selected, isCorrect
  );

  res.json({ ok: true, isCorrect, answer: q.answer, explanation: q.explanation || '' });
});

// Get review schedule based on Ebbinghaus forgetting curve
router.get('/review/schedule', authMiddleware, (req, res) => {
  const userId = req.user.id;
  const level = levelInt(req.query.level);
  const kp = kpWhere(level, 'q');
  const now = new Date();
  const today = now.toISOString().slice(0, 10);

  // 1. Get all wrong question_ids (latest answer is wrong) for this level, excluding coding
  const wrongIds = db.prepare(`
    SELECT DISTINCT a.question_id FROM answers a
    JOIN questions q ON a.question_id = q.id
    WHERE a.user_id = ? AND a.is_correct = 0 AND q.type != 'coding' AND ${kp}
    AND a.id = (
      SELECT a2.id FROM answers a2
      WHERE a2.user_id = a.user_id AND a2.question_id = a.question_id
      ORDER BY a2.answered_at DESC, a2.id DESC LIMIT 1
    )
  `).all(userId).map(r => r.question_id);

  if (wrongIds.length === 0) {
    return res.json({
      todayReview: [], overdue: [], upcoming: [],
      reviewStats: { totalWrong: 0, reviewedToday: 0, mastered: 0, streak: 0 }
    });
  }

  // 2. For each wrong question, get last wrong time and correct count
  const todayReview = [];
  const overdue = [];
  const upcoming = [];

  for (const qid of wrongIds) {
    // Last wrong answer
    const lastWrong = db.prepare(
      'SELECT answered_at FROM answers WHERE user_id = ? AND question_id = ? AND is_correct = 0 ORDER BY answered_at DESC LIMIT 1'
    ).get(userId, qid);

    // How many times answered correctly (determines current round)
    const correctCount = db.prepare(
      'SELECT COUNT(*) as c FROM answers WHERE user_id = ? AND question_id = ? AND is_correct = 1'
    ).get(userId, qid).c;

    // Question info
    const q = db.prepare('SELECT id, kp, type, title, difficulty FROM questions WHERE id = ?').get(qid);
    if (q?.type === 'coding') continue; // safety: never schedule coding questions here

    // Current round (0-based, capped at last interval)
    const round = Math.min(correctCount, EBBINGHAUS_INTERVALS.length - 1);
    const intervalDays = EBBINGHAUS_INTERVALS[round];

    // Next review time
    const lastWrongDate = new Date(lastWrong.answered_at);
    const nextReview = new Date(lastWrongDate.getTime() + intervalDays * 86400000);
    const nextReviewStr = nextReview.toISOString().slice(0, 10);

    const item = {
      questionId: qid,
      kp: q?.kp,
      type: q?.type,
      title: q?.title?.slice(0, 60),
      difficulty: q?.difficulty,
      lastWrongAt: lastWrongDate.toISOString().slice(0, 10),
      round: round + 1,
      totalRounds: EBBINGHAUS_INTERVALS.length,
      intervalDays,
      nextReview: nextReviewStr
    };

    if (nextReview <= now) {
      if (nextReviewStr === today) todayReview.push(item);
      else overdue.push(item);
    } else if (nextReview <= new Date(now.getTime() + 7 * 86400000)) {
      upcoming.push(item);
    }
  }

  // Sort by urgency
  overdue.sort((a, b) => a.nextReview.localeCompare(b.nextReview));
  todayReview.sort((a, b) => b.round - a.round); // higher round first (more important to review)

  // 3. Review stats
  // reviewedToday: distinct questions answered today that were ever wrong (non-coding),
  // which includes reviews answered correctly today
  const reviewedToday = db.prepare(`
    SELECT COUNT(DISTINCT a.question_id) as c FROM answers a
    JOIN questions q ON a.question_id = q.id
    WHERE a.user_id = ? AND q.type != 'coding' AND ${kp}
    AND date(a.answered_at) = ?
    AND a.question_id IN (
      SELECT DISTINCT question_id FROM answers WHERE user_id = ? AND is_correct = 0
    )
  `).get(userId, today, userId).c;

  // Mastered: ever-wrong questions whose LATEST answer is correct
  const mastered = db.prepare(`
    SELECT COUNT(DISTINCT a.question_id) as c FROM answers a
    JOIN questions q ON a.question_id = q.id
    WHERE a.user_id = ? AND a.is_correct = 1 AND q.type != 'coding' AND ${kp}
    AND a.id = (
      SELECT a2.id FROM answers a2
      WHERE a2.user_id = a.user_id AND a2.question_id = a.question_id
      ORDER BY a2.answered_at DESC, a2.id DESC LIMIT 1
    )
    AND a.question_id IN (
      SELECT DISTINCT question_id FROM answers WHERE user_id = ? AND is_correct = 0
    )
  `).get(userId, userId).c;

  // 4. Streak: consecutive days with at least one answer (this level)
  let streak = 0;
  const dayRows = db.prepare(`
    SELECT DISTINCT date(a.answered_at) as day FROM answers a
    JOIN questions q ON a.question_id = q.id
    WHERE a.user_id = ? AND ${kp}
    ORDER BY day DESC LIMIT 60
  `).all(userId);

  if (dayRows.length > 0) {
    const todayDate = today;
    let checkDate = todayDate;
    for (const row of dayRows) {
      if (row.day === checkDate) {
        streak++;
        // Move to previous day
        const d = new Date(checkDate + 'T00:00:00');
        d.setDate(d.getDate() - 1);
        checkDate = d.toISOString().slice(0, 10);
      } else if (row.day < checkDate) {
        break;
      }
    }
  }

  res.json({
    todayReview,
    overdue,
    upcoming: upcoming.slice(0, 10),
    reviewStats: {
      totalWrong: wrongIds.length,
      reviewedToday,
      mastered,
      streak
    }
  });
});

router.get('/wrong-ids', authMiddleware, (req, res) => {
  const level = levelInt(req.query.level);
  const kp = kpWhere(level, 'q');
  const rows = db.prepare(`
    SELECT DISTINCT a.question_id FROM answers a
    JOIN questions q ON a.question_id = q.id
    WHERE a.user_id = ? AND a.is_correct = 0 AND ${kp}
    AND a.id = (
      SELECT a2.id FROM answers a2
      WHERE a2.user_id = a.user_id AND a2.question_id = a.question_id
      ORDER BY a2.answered_at DESC, a2.id DESC LIMIT 1
    )
  `).all(req.user.id);

  res.json(rows.map(r => r.question_id));
});

router.get('/wrong-questions', authMiddleware, (req, res) => {
  const level = levelInt(req.query.level);
  const kp = kpWhere(level, 'q');
  const rows = db.prepare(`
    SELECT DISTINCT q.* FROM questions q
    JOIN answers a ON q.id = a.question_id
    WHERE a.user_id = ? AND a.is_correct = 0 AND ${kp}
    AND a.id = (
      SELECT a2.id FROM answers a2
      WHERE a2.user_id = a.user_id AND a2.question_id = a.question_id
      ORDER BY a2.answered_at DESC, a2.id DESC LIMIT 1
    )
    ORDER BY q.kp, q.id
  `).all(req.user.id);

  const questions = rows.map(q => ({
    id: q.id, kp: q.kp, type: q.type, difficulty: q.difficulty,
    title: q.title, options: q.options ? JSON.parse(q.options) : null,
    answer: q.answer, explanation: q.explanation, answer_text: q.answer_text || null,
    source: q.source, isJudge: q.is_judge === 1
  }));

  res.json(questions);
});

module.exports = router;
