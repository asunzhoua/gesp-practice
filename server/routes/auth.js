const express = require('express');
const bcrypt = require('bcryptjs');
const { db } = require('../db');
const { signToken } = require('../auth');

const router = express.Router();

router.post('/register', (req, res) => {
  const { username, password, nickname } = req.body;
  if (!username || !password || !nickname) {
    return res.status(400).json({ error: '请填写完整信息' });
  }
  if (username.length < 3 || password.length < 6) {
    return res.status(400).json({ error: '用户名至少3位，密码至少6位' });
  }
  if (nickname.length > 20) {
    return res.status(400).json({ error: '昵称不超过20个字符' });
  }

  const existing = db.prepare('SELECT id FROM users WHERE username = ?').get(username);
  if (existing) {
    return res.status(409).json({ error: '用户名已存在' });
  }

  const hash = bcrypt.hashSync(password, 10);
  // Always register as student — teacher accounts must be created by an existing teacher/admin
  const userRole = 'student';
  const result = db.prepare('INSERT INTO users (username, password, nickname, role) VALUES (?, ?, ?, ?)').run(username, hash, nickname, userRole);

  const user = { id: result.lastInsertRowid, username, nickname, role: userRole };
  const token = signToken(user);

  res.json({ token, user: { id: user.id, username, nickname, role: userRole } });
});

router.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ error: '请输入用户名和密码' });
  }

  const user = db.prepare('SELECT * FROM users WHERE username = ?').get(username);
  if (!user || !bcrypt.compareSync(password, user.password)) {
    return res.status(401).json({ error: '用户名或密码错误' });
  }

  const token = signToken(user);
  res.json({ token, user: { id: user.id, username: user.username, nickname: user.nickname, role: user.role } });
});

router.get('/me', require('../auth').authMiddleware, (req, res) => {
  const user = db.prepare('SELECT id, username, nickname, role, created_at FROM users WHERE id = ?').get(req.user.id);
  if (!user) return res.status(404).json({ error: '用户不存在' });
  res.json(user);
});

module.exports = router;
