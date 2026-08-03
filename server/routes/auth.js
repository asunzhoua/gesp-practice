const express = require('express');
const bcrypt = require('bcryptjs');
const { db } = require('../db');
const { signToken } = require('../auth');

const router = express.Router();

// Simple per-IP rate limiter for auth endpoints (login/register)
const authHits = new Map();
const AUTH_WINDOW = 60000;
const AUTH_MAX = 10;
function authRateLimit(req, res, next) {
  const ip = req.ip;
  const now = Date.now();
  const hits = authHits.get(ip) || [];
  const recent = hits.filter(t => now - t < AUTH_WINDOW);
  if (recent.length >= AUTH_MAX) {
    return res.status(429).json({ error: '尝试过于频繁，请稍后再试' });
  }
  recent.push(now);
  authHits.set(ip, recent);
  next();
}
setInterval(() => {
  const now = Date.now();
  for (const [ip, hits] of authHits) {
    const recent = hits.filter(t => now - t < AUTH_WINDOW);
    if (recent.length === 0) authHits.delete(ip);
    else authHits.set(ip, recent);
  }
}, 300000);

router.post('/register', authRateLimit, (req, res) => {
  const { username, password, nickname, avatar } = req.body;
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
  const safeAvatar = (avatar && typeof avatar === 'string' && avatar.length <= 8 && !/[<>"'&\\/]/.test(avatar)) ? avatar : '😊';
  const result = db.prepare('INSERT INTO users (username, password, nickname, role, avatar) VALUES (?, ?, ?, ?, ?)').run(username, hash, nickname, userRole, safeAvatar);

  const user = { id: result.lastInsertRowid, username, nickname, role: userRole, avatar: safeAvatar };
  const token = signToken(user);

  res.json({ token, user: { id: user.id, username, nickname, role: userRole, avatar: safeAvatar } });
});

router.post('/login', authRateLimit, (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ error: '请输入用户名和密码' });
  }

  const user = db.prepare('SELECT * FROM users WHERE username = ?').get(username);
  if (!user || !bcrypt.compareSync(password, user.password)) {
    return res.status(401).json({ error: '用户名或密码错误' });
  }

  const token = signToken(user);
  res.json({ token, user: { id: user.id, username: user.username, nickname: user.nickname, role: user.role, avatar: user.avatar || '😊' } });
});

// Update the current user's avatar
router.put('/avatar', require('../auth').authMiddleware, (req, res) => {
  const { avatar } = req.body;
  if (!avatar || typeof avatar !== 'string' || avatar.length > 8 || /[<>"'&\\/]/.test(avatar)) {
    return res.status(400).json({ error: '头像参数无效' });
  }
  const user = db.prepare('UPDATE users SET avatar = ? WHERE id = ?').run(avatar, req.user.id);
  if (user.changes === 0) return res.status(404).json({ error: '用户不存在' });
  db.save();
  res.json({ avatar });
});

router.get('/me', require('../auth').authMiddleware, (req, res) => {
  const user = db.prepare('SELECT id, username, nickname, role, avatar, created_at FROM users WHERE id = ?').get(req.user.id);
  if (!user) return res.status(404).json({ error: '用户不存在' });
  res.json({ ...user, avatar: user.avatar || '😊' });
});

module.exports = router;
