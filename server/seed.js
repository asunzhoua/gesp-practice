require('dotenv').config();
const fs = require('fs');
const path = require('path');
const { initDb, db } = require('./db');

async function seed() {
  await initDb();

  // Load every level bank file that exists (js/questions.js, js/questions2.js, ...).
  const bankFiles = ['questions.js', 'questions-l1.js', 'questions-l2.js', 'questions-l3.js', 'questions-l4.js', 'questions-l5.js', 'questions-l6.js', 'questions-l7.js', 'questions-l8.js', 'questions2.js', 'questions3.js', 'questions4.js', 'questions5.js', 'questions6.js', 'questions7.js', 'questions8.js'];
  let count = 0;
  const insertQ = db.prepare(`INSERT OR REPLACE INTO questions (id, kp, type, difficulty, title, options, answer, explanation, source, is_judge, answer_text, starter_code, test_cases) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`);

  for (const f of bankFiles) {
    const questionsPath = path.join(__dirname, '..', 'js', f);
    if (!fs.existsSync(questionsPath)) continue;

    const fn = new Function(fs.readFileSync(questionsPath, 'utf-8') + '; return QUESTION_BANK;');
    const bank = fn();

    for (const [kp, data] of Object.entries(bank.knowledgePoints)) {
      for (const q of data.questions) {
        const options = q.options ? JSON.stringify(q.options) : null;
        insertQ.run(q.id, kp, q.type || 'choice', q.difficulty || 1, q.question || '', options, q.answer ?? 0, q.explanation || '', q.source || null, q.isJudge ? 1 : 0, q.answerText || null, q.starterCode || null, q.testCases ? JSON.stringify(q.testCases) : null);
        count++;
      }
    }

    for (const q of bank.mockExam) {
      const options = q.options ? JSON.stringify(q.options) : null;
      insertQ.run(q.id, 'mock', q.type || 'choice', q.difficulty || 1, q.question || '', options, q.answer ?? 0, q.explanation || '', q.source || null, q.isJudge ? 1 : 0, q.answerText || null, q.starterCode || null, q.testCases ? JSON.stringify(q.testCases) : null);
      count++;
    }

    for (const q of bank.realExam) {
      const options = q.options ? JSON.stringify(q.options) : null;
      insertQ.run(q.id, 'real', q.type || 'choice', q.difficulty || 1, q.question || '', options, q.answer ?? 0, q.explanation || '', q.source || null, q.isJudge ? 1 : 0, q.answerText || null, q.starterCode || null, q.testCases ? JSON.stringify(q.testCases) : null);
      count++;
    }
  }

  console.log(`Seeded ${count} questions.`);

  const bcrypt = require('bcryptjs');
  const randomPwd = require('crypto').randomBytes(3).toString('hex');
  const hash = bcrypt.hashSync(randomPwd, 10);
  db.prepare(`INSERT OR IGNORE INTO users (username, password, nickname, role) VALUES (?, ?, ?, ?)`).run('teacher', hash, '孙老师', 'teacher');
  console.log('Default teacher account: teacher / ' + randomPwd);

  db.save();
  console.log('Database saved.');
}

seed().catch(err => {
  console.error('Seed failed:', err);
  process.exit(1);
});
