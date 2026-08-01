const express = require('express');
const bcrypt = require('bcryptjs');
const { db } = require('../db');
const { authMiddleware, teacherOnly } = require('../auth');

const router = express.Router();

router.use(authMiddleware, teacherOnly);

// Batch create students
router.post('/students/batch', (req, res) => {
  const { students, defaultPassword } = req.body;
  const pwd = defaultPassword || '123456';
  const hash = bcrypt.hashSync(pwd, 10);
  const results = [];
  const errors = [];

  const insertUser = db.prepare('INSERT INTO users (username, password, nickname, role) VALUES (?, ?, ?, ?)');
  const insertProfile = db.prepare('INSERT INTO student_profiles (user_id, class_name, grade, parent_name, parent_phone) VALUES (?, ?, ?, ?, ?)');

  const transaction = db.transaction(() => {
    for (const s of students) {
      const username = s.username || s.studentId;
      const nickname = s.nickname || s.name || username;
      if (!username) { errors.push({ username, error: '用户名为空' }); continue; }

      const existing = db.prepare('SELECT id FROM users WHERE username = ?').get(username);
      if (existing) { errors.push({ username, error: '用户名已存在' }); continue; }

      const result = insertUser.run(username, hash, nickname, 'student');
      const userId = result.lastInsertRowid;

      insertProfile.run(userId, s.className || s.class || '', s.grade || '', s.parentName || s.parent || '', s.parentPhone || s.phone || '');

      results.push({ id: userId, username, nickname, password: pwd });
    }
  });

  transaction();
  db.save();

  res.json({ created: results, errors, defaultPassword: pwd });
});

// Create single student
router.post('/students', (req, res) => {
  const { username, nickname, className, grade, parentName, parentPhone, defaultPassword } = req.body;
  const pwd = defaultPassword || '123456';

  if (!username) return res.status(400).json({ error: '用户名不能为空' });

  const existing = db.prepare('SELECT id FROM users WHERE username = ?').get(username);
  if (existing) return res.status(409).json({ error: '用户名已存在' });

  const hash = bcrypt.hashSync(pwd, 10);
  const result = db.prepare('INSERT INTO users (username, password, nickname, role) VALUES (?, ?, ?, ?)').run(username, hash, nickname || username, 'student');

  const userId = result.lastInsertRowid;
  db.prepare('INSERT INTO student_profiles (user_id, class_name, grade, parent_name, parent_phone) VALUES (?, ?, ?, ?, ?)').run(userId, className || '', grade || '', parentName || '', parentPhone || '');

  db.save();
  res.json({ id: userId, username, nickname: nickname || username, password: pwd });
});

// Delete student
router.delete('/students/:id', (req, res) => {
  const student = db.prepare('SELECT id FROM users WHERE id = ? AND role = ?').get(req.params.id, 'student');
  if (!student) return res.status(404).json({ error: '学生不存在' });

  db.prepare('DELETE FROM study_records WHERE user_id = ?').run(req.params.id);
  db.prepare('DELETE FROM student_profiles WHERE user_id = ?').run(req.params.id);
  db.prepare('DELETE FROM answers WHERE user_id = ?').run(req.params.id);
  db.prepare('DELETE FROM exam_sessions WHERE user_id = ?').run(req.params.id);
  db.prepare('DELETE FROM users WHERE id = ?').run(req.params.id);

  db.save();
  res.json({ ok: true });
});

// Reset student password
router.post('/students/:id/reset-password', (req, res) => {
  const { newPassword } = req.body;
  const pwd = newPassword || '123456';

  // Only allow resetting passwords for students, not other teachers/admins
  const student = db.prepare('SELECT id FROM users WHERE id = ? AND role = ?').get(req.params.id, 'student');
  if (!student) return res.status(404).json({ error: '学生不存在' });

  // Prevent teachers from resetting their own password or other teachers' passwords
  if (String(req.user.id) === String(req.params.id)) {
    return res.status(400).json({ error: '不能重置自己的密码' });
  }

  const hash = bcrypt.hashSync(pwd, 10);
  db.prepare('UPDATE users SET password = ? WHERE id = ?').run(hash, req.params.id);
  db.save();

  res.json({ ok: true, newPassword: pwd });
});

// Get student profile with full learning data
router.get('/students/:id/profile', (req, res) => {
  const student = db.prepare('SELECT id, username, nickname, created_at FROM users WHERE id = ? AND role = ?').get(req.params.id, 'student');
  if (!student) return res.status(404).json({ error: '学生不存在' });

  const profile = db.prepare('SELECT * FROM student_profiles WHERE user_id = ?').get(req.params.id) || {};

  const totalAnswered = db.prepare('SELECT COUNT(DISTINCT question_id) as c FROM answers WHERE user_id = ?').get(req.params.id);
  const totalCorrect = db.prepare('SELECT COUNT(DISTINCT question_id) as c FROM answers WHERE user_id = ? AND is_correct = 1').get(req.params.id);
  const totalWrong = db.prepare('SELECT COUNT(DISTINCT question_id) as c FROM answers WHERE user_id = ? AND is_correct = 0 AND question_id NOT IN (SELECT question_id FROM answers WHERE user_id = ? AND is_correct = 1)').get(req.params.id, req.params.id);

  const byKp = db.prepare(`
    SELECT q.kp,
           COUNT(DISTINCT a.question_id) as answered,
           SUM(CASE WHEN a.is_correct = 1 THEN 1 ELSE 0 END) as correct
    FROM answers a JOIN questions q ON a.question_id = q.id
    WHERE a.user_id = ?
    GROUP BY q.kp ORDER BY q.kp
  `).all(req.params.id);

  const recentExams = db.prepare('SELECT * FROM exam_sessions WHERE user_id = ? ORDER BY started_at DESC LIMIT 10').all(req.params.id);

  const recentWrong = db.prepare(`
    SELECT q.id, q.kp, q.title, q.type, q.options, q.answer, q.explanation, a.selected, a.answered_at
    FROM answers a JOIN questions q ON a.question_id = q.id
    WHERE a.user_id = ? AND a.is_correct = 0
    AND q.id NOT IN (SELECT question_id FROM answers WHERE user_id = ? AND is_correct = 1)
    ORDER BY a.answered_at DESC LIMIT 50
  `).all(req.params.id, req.params.id);

  const recentActivity = db.prepare(`
    SELECT record_type, kp, created_at FROM study_records
    WHERE user_id = ? ORDER BY created_at DESC LIMIT 30
  `).all(req.params.id);

  const dailyStats = db.prepare(`
    SELECT date(answered_at) as day, COUNT(*) as count,
           SUM(CASE WHEN is_correct = 1 THEN 1 ELSE 0 END) as correct
    FROM answers WHERE user_id = ?
    GROUP BY date(answered_at) ORDER BY day DESC LIMIT 30
  `).all(req.params.id);

  const examBest = db.prepare('SELECT MAX(score) as best, AVG(score) as avg FROM exam_sessions WHERE user_id = ?').get(req.params.id);

  res.json({
    student, profile, totalAnswered: totalAnswered.c, totalCorrect: totalCorrect.c,
    totalWrong: totalWrong.c, byKp, recentExams, recentWrong, recentActivity,
    dailyStats, examBest: examBest.best, examAvg: examBest.avg
  });
});

// Update student profile
router.put('/students/:id/profile', (req, res) => {
  const { className, grade, parentName, parentPhone, dailyGoal } = req.body;

  const existing = db.prepare('SELECT user_id FROM student_profiles WHERE user_id = ?').get(req.params.id);
  if (existing) {
    db.prepare('UPDATE student_profiles SET class_name=?, grade=?, parent_name=?, parent_phone=?, daily_goal=?, updated_at=CURRENT_TIMESTAMP WHERE user_id=?').run(className || '', grade || '', parentName || '', parentPhone || '', dailyGoal || 20, req.params.id);
  } else {
    db.prepare('INSERT INTO student_profiles (user_id, class_name, grade, parent_name, parent_phone, daily_goal) VALUES (?, ?, ?, ?, ?, ?)').run(req.params.id, className || '', grade || '', parentName || '', parentPhone || '', dailyGoal || 20);
  }

  db.save();
  res.json({ ok: true });
});

router.get('/students', (req, res) => {
  const rows = db.prepare(`
    SELECT u.id, u.username, u.nickname, u.created_at, u.role,
           sp.class_name, sp.grade, sp.parent_name, sp.parent_phone, sp.daily_goal,
           (SELECT COUNT(DISTINCT a.question_id) FROM answers a WHERE a.user_id = u.id) as total_answered,
           (SELECT COUNT(DISTINCT a.question_id) FROM answers a WHERE a.user_id = u.id AND a.is_correct = 1) as total_correct,
           (SELECT MAX(es.score) FROM exam_sessions es WHERE es.user_id = u.id) as best_score,
           (SELECT COUNT(*) FROM exam_sessions es WHERE es.user_id = u.id) as exam_count,
           (SELECT date(a2.answered_at) FROM answers a2 WHERE a2.user_id = u.id ORDER BY a2.answered_at DESC LIMIT 1) as last_active
    FROM users u LEFT JOIN student_profiles sp ON u.id = sp.user_id
    WHERE u.role = 'student' ORDER BY u.created_at DESC
  `).all();

  res.json(rows);
});

router.get('/student/:id', (req, res) => {
  const student = db.prepare('SELECT id, username, nickname, created_at FROM users WHERE id = ? AND role = ?').get(req.params.id, 'student');
  if (!student) return res.status(404).json({ error: '学生不存在' });

  const profile = db.prepare('SELECT * FROM student_profiles WHERE user_id = ?').get(req.params.id) || {};

  const byKp = db.prepare(`
    SELECT q.kp,
           COUNT(DISTINCT a.question_id) as answered,
           SUM(CASE WHEN a.is_correct = 1 THEN 1 ELSE 0 END) as correct
    FROM answers a JOIN questions q ON a.question_id = q.id
    WHERE a.user_id = ?
    GROUP BY q.kp ORDER BY q.kp
  `).all(req.params.id);

  const recentExams = db.prepare('SELECT * FROM exam_sessions WHERE user_id = ? ORDER BY started_at DESC LIMIT 10').all(req.params.id);

  const recentWrong = db.prepare(`
    SELECT q.id, q.kp, q.title, q.type, q.options, q.answer, q.explanation, a.selected, a.answered_at
    FROM answers a JOIN questions q ON a.question_id = q.id
    WHERE a.user_id = ? AND a.is_correct = 0
    AND q.id NOT IN (SELECT question_id FROM answers WHERE user_id = ? AND is_correct = 1)
    ORDER BY a.answered_at DESC LIMIT 20
  `).all(req.params.id, req.params.id);

  const totalAnswered = db.prepare('SELECT COUNT(DISTINCT question_id) as c FROM answers WHERE user_id = ?').get(req.params.id);
  const totalCorrect = db.prepare('SELECT COUNT(DISTINCT question_id) as c FROM answers WHERE user_id = ? AND is_correct = 1').get(req.params.id);

  const dailyStats = db.prepare(`
    SELECT date(answered_at) as day, COUNT(*) as count,
           SUM(CASE WHEN is_correct = 1 THEN 1 ELSE 0 END) as correct
    FROM answers WHERE user_id = ?
    GROUP BY date(answered_at) ORDER BY day DESC LIMIT 30
  `).all(req.params.id);

  res.json({ student, profile, byKp, recentExams, recentWrong, totalAnswered: totalAnswered.c, totalCorrect: totalCorrect.c, dailyStats });
});

router.get('/stats', (req, res) => {
  const totalStudents = db.prepare('SELECT COUNT(*) as count FROM users WHERE role = ?').get('student');
  const activeToday = db.prepare(`
    SELECT COUNT(DISTINCT user_id) as count FROM answers
    WHERE date(answered_at) = date('now')
  `).get();

  const avgScore = db.prepare('SELECT AVG(score) as avg FROM exam_sessions').get();
  const topStudents = db.prepare(`
    SELECT u.nickname, AVG(es.score) as avg_score, COUNT(es.id) as exams
    FROM exam_sessions es JOIN users u ON es.user_id = u.id
    GROUP BY u.id ORDER BY avg_score DESC LIMIT 10
  `).all();

  const weakKp = db.prepare(`
    SELECT q.kp,
           COUNT(*) as total,
           SUM(CASE WHEN a.is_correct = 0 THEN 1 ELSE 0 END) as wrong
    FROM answers a JOIN questions q ON a.question_id = q.id
    GROUP BY q.kp ORDER BY wrong DESC
  `).all();

  res.json({
    totalStudents: totalStudents.count,
    activeToday: activeToday.count,
    avgScore: avgScore.avg ? Math.round(avgScore.avg) : 0,
    topStudents,
    weakKp
  });
});

module.exports = router;
