const jwt = require('jsonwebtoken');

// NEVER fall back to a hard-coded secret. If JWT_SECRET is missing, use a random
// per-boot secret (safe but invalidates sessions on restart) and warn loudly.
const SECRET = process.env.JWT_SECRET || require('crypto').randomBytes(32).toString('hex');
if (!process.env.JWT_SECRET) {
  console.warn('[auth] JWT_SECRET is not set — using a random per-boot secret. Set JWT_SECRET in .env for production.');
}

function signToken(user) {
  return jwt.sign(
    { id: user.id, username: user.username, role: user.role },
    SECRET,
    { expiresIn: '7d' }
  );
}

function authMiddleware(req, res, next) {
  const header = req.headers.authorization;
  if (!header || !header.startsWith('Bearer ')) {
    return res.status(401).json({ error: '未登录' });
  }
  try {
    const decoded = jwt.verify(header.slice(7), SECRET);
    req.user = decoded;
    next();
  } catch {
    return res.status(401).json({ error: '登录已过期' });
  }
}

function teacherOnly(req, res, next) {
  if (req.user.role !== 'teacher' && req.user.role !== 'admin') {
    return res.status(403).json({ error: '无权限' });
  }
  next();
}

module.exports = { signToken, authMiddleware, teacherOnly };
