
const { initDb, db } = require('./db');

async function fixAll() {
  await initDb();

  // 1. Add columns if missing
  const colsResult = db.exec("PRAGMA table_info(questions)");
  const cols = colsResult.length > 0 ? colsResult[0].values.map(r => r[1]) : [];
  console.log('Columns:', cols.join(', '));

  if (!cols.includes('starter_code')) {
    db.run("ALTER TABLE questions ADD COLUMN starter_code TEXT");
    console.log('Added starter_code');
  }
  if (!cols.includes('test_cases')) {
    db.run("ALTER TABLE questions ADD COLUMN test_cases TEXT");
    console.log('Added test_cases');
  }

  // 2. Fix exam papers
  const papers = db.prepare('SELECT * FROM exam_papers ORDER BY id').all();
  const allCoding = db.prepare("SELECT id, kp FROM questions WHERE type = 'coding' ORDER BY kp, id").all();

  // Find coding IDs used in any paper
  const usedCoding = new Set();
  for (const p of papers) {
    const r = db.prepare(`SELECT pq.question_id FROM paper_questions pq JOIN questions q ON pq.question_id = q.id WHERE pq.paper_id = ? AND q.type = 'coding'`).all(p.id);
    r.forEach(row => usedCoding.add(row.question_id));
  }
  const available = allCoding.filter(q => !usedCoding.has(q.id));
  let availIdx = 0;

  for (const paper of papers) {
    const codingCount = db.prepare(`SELECT COUNT(*) as c FROM paper_questions pq JOIN questions q ON pq.question_id = q.id WHERE pq.paper_id = ? AND q.type = 'coding'`).get(paper.id).c;
    const need = 2 - codingCount;

    if (need <= 0) {
      console.log('Paper ' + paper.id + ': ' + codingCount + ' coding, OK');
      continue;
    }

    console.log('Paper ' + paper.id + ': ' + codingCount + ' coding, need ' + need);

    // Get non-coding questions sorted by order DESC (remove from end)
    const nonCoding = db.prepare(`SELECT pq.question_id, pq.sort_order FROM paper_questions pq JOIN questions q ON pq.question_id = q.id WHERE pq.paper_id = ? AND q.type != 'coding' ORDER BY pq.sort_order DESC`).all(paper.id);

    // Remove last N non-coding
    const toRemove = nonCoding.slice(0, need);
    for (const rem of toRemove) {
      db.prepare('DELETE FROM paper_questions WHERE paper_id = ? AND question_id = ?').run(paper.id, rem.question_id);
      console.log('  Removed: ' + rem.question_id);
    }

    // Add coding questions
    const maxOrder = db.prepare('SELECT MAX(sort_order) as m FROM paper_questions WHERE paper_id = ?').get(paper.id).m || 0;
    let order = maxOrder;
    for (let i = 0; i < need && availIdx < available.length; i++) {
      order++;
      db.prepare('INSERT INTO paper_questions (paper_id, question_id, sort_order) VALUES (?, ?, ?)').run(paper.id, available[availIdx].id, order);
      console.log('  Added: ' + available[availIdx].id);
      availIdx++;
    }

    // Fix total if over 30
    const totalCount = db.prepare('SELECT COUNT(*) as c FROM paper_questions WHERE paper_id = ?').get(paper.id).c;
    if (totalCount > 30) {
      const extra = db.prepare(`SELECT pq.question_id FROM paper_questions pq JOIN questions q ON pq.question_id = q.id WHERE pq.paper_id = ? AND q.type != 'coding' ORDER BY pq.sort_order DESC LIMIT ?`).all(paper.id, totalCount - 30);
      for (const ex of extra) {
        db.prepare('DELETE FROM paper_questions WHERE paper_id = ? AND question_id = ?').run(paper.id, ex.question_id);
        console.log('  Trimmed: ' + ex.question_id);
      }
    }
  }

  // 3. Save
  db.save();
  console.log('
Database saved.');

  // 4. Verify
  console.log('
=== Verification ===');
  for (const paper of papers) {
    const count = db.prepare('SELECT COUNT(*) as c FROM paper_questions WHERE paper_id = ?').get(paper.id).c;
    const codingCount = db.prepare(`SELECT COUNT(*) as c FROM paper_questions pq JOIN questions q ON pq.question_id = q.id WHERE pq.paper_id = ? AND q.type = 'coding'`).get(paper.id).c;
    console.log('Paper ' + paper.id + ': ' + count + ' total, ' + codingCount + ' coding');
  }
}

fixAll().catch(e => { console.error(e); process.exit(1); });
