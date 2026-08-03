require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const { initDb, db } = require('./db');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({ origin: false }));
app.use(express.json({ limit: '1mb' }));

// Minimal security headers middleware (before static and routes, so all responses are covered)
app.use((req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('Referrer-Policy', 'no-referrer');
  res.removeHeader('X-Powered-By');
  next();
});

app.use(express.static(path.join(__dirname, '..', 'public')));

const DB_PATH = process.env.DB_PATH || path.join(__dirname, '..', 'data', 'gesp.db');

function backupDb() {
  try {
    const backupDir = path.join(__dirname, '..', 'data', 'backup');
    fs.mkdirSync(backupDir, { recursive: true });
    const d = new Date();
    const ts = d.getFullYear() +
      String(d.getMonth() + 1).padStart(2, '0') +
      String(d.getDate()).padStart(2, '0') + '-' +
      String(d.getHours()).padStart(2, '0') +
      String(d.getMinutes()).padStart(2, '0') +
      String(d.getSeconds()).padStart(2, '0');
    const dest = path.join(backupDir, 'gesp-' + ts + '.db');
    fs.copyFileSync(DB_PATH, dest);
    console.log('Database backed up to ' + dest);
  } catch (err) {
    console.log('Database backup failed: ' + err.message);
  }
}

async function start() {
  await initDb();
  console.log('Database initialized.');

  backupDb();
  setInterval(backupDb, 24 * 60 * 60 * 1000);

  app.use('/api/auth', require('./routes/auth'));
  app.use('/api/questions', require('./routes/questions'));
  app.use('/api/practice', require('./routes/practice'));
  app.use('/api/exam', require('./routes/exam'));
  app.use('/api/teacher', require('./routes/teacher'));
  app.use('/api/compile', require('./routes/compiler'));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
  });

  // Auto-save db every 10 seconds (sql.js is in-memory; persist frequently)
  setInterval(() => db.save(), 10000);

  app.listen(PORT, () => {
    console.log(`GESP Practice Server running at http://localhost:${PORT}`);
  });
}

start().catch(err => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
