const express = require('express');
const { db } = require('../db');
const { authMiddleware } = require('../auth');

const router = express.Router();

router.get('/knowledge-points', authMiddleware, (req, res) => {
  const rows = db.prepare(`
    SELECT kp, COUNT(*) as count FROM questions GROUP BY kp ORDER BY kp
  `).all();

  const labels = {
    kp01: '变量与数据类型', kp02: '基本运算', kp03: '输入输出',
    kp04: '条件语句', kp05: '循环语句', kp06: '数组基础',
    kp07: '字符与字符串', kp08: '函数基础'
  };

  const result = rows.map(r => ({
    id: r.kp,
    title: labels[r.kp] || r.kp,
    count: r.count
  }));

  res.json(result);
});

// /stats must come before /:kp to avoid being caught by the wildcard
router.get('/stats', authMiddleware, (req, res) => {
  const userId = req.user.id;
  const today = new Date().toISOString().slice(0, 10);

  const totalAnswered = db.prepare('SELECT COUNT(DISTINCT question_id) as count FROM answers WHERE user_id = ?').get(userId);
  const totalCorrect = db.prepare('SELECT COUNT(DISTINCT question_id) as count FROM answers WHERE user_id = ? AND is_correct = 1').get(userId);
  const totalWrong = db.prepare('SELECT COUNT(DISTINCT question_id) as count FROM answers WHERE user_id = ? AND is_correct = 0 AND question_id NOT IN (SELECT question_id FROM answers WHERE user_id = ? AND is_correct = 1)').get(userId, userId);

  const byKp = db.prepare(`
    SELECT q.kp, COUNT(DISTINCT a.question_id) as answered,
           COUNT(DISTINCT CASE WHEN a.is_correct = 1 THEN a.question_id END) as correct
    FROM answers a JOIN questions q ON a.question_id = q.id
    WHERE a.user_id = ?
    GROUP BY q.kp ORDER BY q.kp
  `).all(userId);

  const dailyStats = db.prepare(`
    SELECT date(answered_at) as day, COUNT(*) as count,
           SUM(CASE WHEN is_correct = 1 THEN 1 ELSE 0 END) as correct
    FROM answers WHERE user_id = ?
    GROUP BY date(answered_at) ORDER BY day DESC LIMIT 30
  `).all(userId);

  const examHistory = db.prepare('SELECT * FROM exam_sessions WHERE user_id = ? ORDER BY started_at DESC LIMIT 10').all(userId);

  // Total questions in bank
  const totalQuestions = db.prepare('SELECT COUNT(*) as count FROM questions').get().count;

  // Completed KPs (answered >= 10 questions in that KP)
  const completedKPs = byKp.filter(k => k.answered >= 10).length;

  // Daily goal from profile
  const profile = db.prepare('SELECT daily_goal FROM student_profiles WHERE user_id = ?').get(userId);
  const dailyGoal = profile?.daily_goal || 20;

  // Today's activity
  const todayRow = db.prepare(`
    SELECT COUNT(*) as total,
           SUM(CASE WHEN is_correct = 1 THEN 1 ELSE 0 END) as correct
    FROM answers WHERE user_id = ? AND date(answered_at) = ?
  `).get(userId, today);

  // Review streak (consecutive days with answers)
  let reviewStreak = 0;
  const dayRows = db.prepare(`
    SELECT DISTINCT date(answered_at) as day FROM answers
    WHERE user_id = ? ORDER BY day DESC LIMIT 60
  `).all(userId);
  if (dayRows.length > 0) {
    let checkDate = today;
    for (const row of dayRows) {
      if (row.day === checkDate) {
        reviewStreak++;
        const d = new Date(checkDate + 'T00:00:00');
        d.setDate(d.getDate() - 1);
        checkDate = d.toISOString().slice(0, 10);
      } else if (row.day < checkDate) {
        break;
      }
    }
  }

  res.json({
    totalAnswered: totalAnswered.count,
    totalCorrect: totalCorrect.count,
    totalWrong: totalWrong.count,
    byKp,
    dailyStats,
    kpCounts: db.prepare("SELECT kp, COUNT(*) as count FROM questions WHERE kp LIKE 'kp%' GROUP BY kp").all().reduce((o, r) => { o[r.kp] = r.count; return o; }, {}),
    examHistory,
    totalQuestions,
    completedKPs,
    dailyGoal,
    todayAnswered: todayRow?.total || 0,
    todayCorrect: todayRow?.correct || 0,
    reviewStreak
  });
});

// Get KPs that have coding questions (for coding practice grid)
router.get('/coding-kps', authMiddleware, (req, res) => {
  const labels = {
    kp01: '变量与数据类型', kp02: '基本运算', kp03: '输入输出',
    kp04: '条件语句', kp05: '循环语句', kp06: '数组基础',
    kp07: '字符与字符串', kp08: '函数基础'
  };
  const rows = db.prepare(`
    SELECT kp, COUNT(*) as count FROM questions
    WHERE type = 'coding' AND kp LIKE 'kp%'
    GROUP BY kp ORDER BY kp
  `).all();
  res.json(rows.map(r => ({ id: r.kp, title: labels[r.kp] || r.kp, count: r.count })));
});

// Get coding questions for a specific KP
router.get('/coding/:kp', authMiddleware, (req, res) => {
  const kp = req.params.kp;
  const rows = db.prepare(`
    SELECT * FROM questions WHERE kp = ? AND type = 'coding' ORDER BY difficulty, id
  `).all(kp);
  const questions = rows.map(q => ({
    id: q.id, type: q.type, difficulty: q.difficulty,
    title: q.title, options: q.options ? JSON.parse(q.options) : null,
    answer: q.answer, explanation: q.explanation,
    answer_text: q.answer_text || null,
    starter_code: q.starter_code || null,
    test_cases: q.test_cases ? JSON.parse(q.test_cases) : null,
    source: q.source, isJudge: q.is_judge === 1
  }));
  res.json(questions);
});

router.get('/:kp', authMiddleware, (req, res) => {
  const kp = req.params.kp;
  const rows = db.prepare('SELECT * FROM questions WHERE kp = ? ORDER BY id').all(kp);

  const questions = rows.map(q => ({
    id: q.id,
    type: q.type,
    difficulty: q.difficulty,
    title: q.title,
    options: q.options ? JSON.parse(q.options) : null,
    starter_code: q.starter_code || null,
    test_cases: q.test_cases ? JSON.parse(q.test_cases) : null,
    source: q.source,
    isJudge: q.is_judge === 1
  }));

  res.json(questions);
});

module.exports = router;
