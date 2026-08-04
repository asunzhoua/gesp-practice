const { initDb, db } = require('./db');

async function seedPapers() {
  await initDb();

  // Delete existing papers and questions
  console.log('Clearing existing exam papers...');
  db.exec('DELETE FROM paper_questions');
  db.exec('DELETE FROM exam_papers');

  console.log('L1 papers now created by seed-papers-l1.js (official 15+10+2 format). Skipping old L1 here.');

  // removed: old L1 papers reference deleted questions
  // removed: old L1 papers reference deleted questions
  // removed: old L1 papers reference deleted questions
  // removed: old L1 papers reference deleted questions
  // removed: old L1 papers reference deleted questions
  // removed: old L1 papers reference deleted questions
  // removed: old L1 papers reference deleted questions
  // removed: old L1 papers reference deleted questions
  // removed: old L1 papers reference deleted questions
  // removed: old L1 papers reference deleted questions

  

  console.log('\nExam papers created successfully!');

  // Verify
  const papers = db.prepare('SELECT * FROM exam_papers').all();
  papers.forEach(p => {
    const count = db.prepare('SELECT COUNT(*) as c FROM paper_questions WHERE paper_id = ?').get(p.id);
    console.log(`${p.title}: ${count.c} questions`);
  });

  // Save database
  console.log('Saving database...');
  db.save();
  console.log('Database saved.');

  const fs = require('fs');
  const path = require('path');
  const dbPath = path.join(__dirname, '..', 'data', 'gesp.db');
  console.log('Database file size:', fs.statSync(dbPath).size, 'bytes');
}

function createPaper(title, description, type, difficultyLevel, questionIds, level) {
  db.prepare('INSERT INTO exam_papers (title, description, type, total_questions, time_limit, difficulty_level, level) VALUES (?, ?, ?, ?, ?, ?, ?)').run(
    title, description, type, 30, 45, difficultyLevel.toString(), level || 1
  );

  const paperId = db.prepare('SELECT last_insert_rowid() as id').get().id;

  let addedCount = 0;
  questionIds.forEach((questionId, index) => {
    const q = db.prepare('SELECT id FROM questions WHERE id = ?').get(questionId);
    if (q) {
      db.prepare('INSERT INTO paper_questions (paper_id, question_id, sort_order) VALUES (?, ?, ?)').run(
        paperId, questionId, index + 1
      );
      addedCount++;
    }
  });

  console.log(`Created paper: ${title} with ${addedCount} questions`);
}

seedPapers().catch(console.error);
