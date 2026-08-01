const express = require('express');
const { db } = require('../db');
const { authMiddleware } = require('../auth');

const router = express.Router();

// Ebbinghaus forgetting curve intervals in days
const EBBINGHAUS_INTERVALS = [1, 2, 4, 7, 15, 30];

router.post('/answer', authMiddleware, (req, res) => {
  const { questionId, selected, isCorrect } = req.body;
  if (!questionId || selected === undefined) {
    return res.status(400).json({ error: '参数不完整' });
  }

  db.prepare('INSERT INTO answers (user_id, question_id, selected, is_correct) VALUES (?, ?, ?, ?)').run(
    req.user.id, questionId, selected, isCorrect ? 1 : 0
  );

  res.json({ ok: true });
});

// Get review schedule based on Ebbinghaus forgetting curve
router.get('/review/schedule', authMiddleware, (req, res) => {
  const userId = req.user.id;
  const now = new Date();
  const today = now.toISOString().slice(0, 10);

  // 1. Get all wrong question_ids (not yet corrected)
  const wrongIds = db.prepare(`
    SELECT DISTINCT question_id FROM answers
    WHERE user_id = ? AND is_correct = 0
    AND question_id NOT IN (
      SELECT question_id FROM answers WHERE user_id = ? AND is_correct = 1
    )
  `).all(userId, userId).map(r => r.question_id);

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
  const reviewedToday = db.prepare(`
    SELECT COUNT(DISTINCT question_id) as c FROM answers
    WHERE user_id = ? AND is_correct = 0
    AND question_id IN (SELECT question_id FROM answers WHERE user_id = ? AND is_correct = 0)
    AND date(answered_at) = ?
  `).get(userId, userId, today).c;

  // Mastered: wrong questions that have been answered correctly 3+ times
  const mastered = db.prepare(`
    SELECT COUNT(*) as c FROM (
      SELECT question_id, SUM(CASE WHEN is_correct = 1 THEN 1 ELSE 0 END) as correct_count
      FROM answers WHERE user_id = ? AND question_id IN (
        SELECT DISTINCT question_id FROM answers WHERE user_id = ? AND is_correct = 0
        AND question_id NOT IN (SELECT question_id FROM answers WHERE user_id = ? AND is_correct = 1)
      )
      GROUP BY question_id HAVING correct_count >= 3
    )
  `).get(userId, userId, userId).c;

  // 4. Streak: consecutive days with at least one answer
  let streak = 0;
  const dayRows = db.prepare(`
    SELECT DISTINCT date(answered_at) as day FROM answers
    WHERE user_id = ? ORDER BY day DESC LIMIT 60
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
  const rows = db.prepare(`
    SELECT DISTINCT question_id FROM answers
    WHERE user_id = ? AND is_correct = 0
    AND question_id NOT IN (
      SELECT question_id FROM answers WHERE user_id = ? AND is_correct = 1
    )
  `).all(req.user.id, req.user.id);

  res.json(rows.map(r => r.question_id));
});

router.get('/wrong-questions', authMiddleware, (req, res) => {
  const rows = db.prepare(`
    SELECT DISTINCT q.* FROM questions q
    JOIN answers a ON q.id = a.question_id
    WHERE a.user_id = ? AND a.is_correct = 0
    AND q.id NOT IN (
      SELECT question_id FROM answers WHERE user_id = ? AND is_correct = 1
    )
    ORDER BY q.kp, q.id
  `).all(req.user.id, req.user.id);

  const questions = rows.map(q => ({
    id: q.id, kp: q.kp, type: q.type, difficulty: q.difficulty,
    title: q.title, options: q.options ? JSON.parse(q.options) : null,
    answer: q.answer, explanation: q.explanation, answer_text: q.answer_text || null,
    source: q.source, isJudge: q.is_judge === 1
  }));

  res.json(questions);
});

module.exports = router;
