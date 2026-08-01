require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const { initDb, db } = require('./db');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json({ limit: '1mb' }));
app.use(express.static(path.join(__dirname, '..', 'public')));

async function start() {
  await initDb();
  console.log('Database initialized.');

  app.use('/api/auth', require('./routes/auth'));
  app.use('/api/questions', require('./routes/questions'));
  app.use('/api/practice', require('./routes/practice'));
  app.use('/api/exam', require('./routes/exam'));
  app.use('/api/teacher', require('./routes/teacher'));
  app.use('/api/compile', require('./routes/compiler'));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
  });

  // Auto-save db every 30 seconds
  setInterval(() => db.save(), 30000);

  app.listen(PORT, () => {
    console.log(`GESP Practice Server running at http://localhost:${PORT}`);
  });
}

start().catch(err => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
