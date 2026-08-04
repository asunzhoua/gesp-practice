// Seed L1 papers in official GESP format: 15 single choice + 10 judge + 2 coding = 100 pts.
// Run: node server/seed-papers-l1.js  (requires questions already seeded)
const { initDb, db } = require('./db');
(async () => {
  await initDb();
  db.exec("DELETE FROM paper_questions WHERE paper_id IN (SELECT id FROM exam_papers WHERE level = 1)");
  db.exec("DELETE FROM exam_papers WHERE level = 1");

  const choices = db.prepare("SELECT id, kp FROM questions WHERE kp GLOB 'kp1_*' AND type='choice' ORDER BY RANDOM()").all();
  const judges = db.prepare("SELECT id, kp FROM questions WHERE kp GLOB 'kp1_*' AND type='judge' ORDER BY RANDOM()").all();
  const codings = db.prepare("SELECT id FROM questions WHERE kp GLOB 'kp1_*' AND type='coding' ORDER BY RANDOM()").all();
  const choiceByKp = {}; choices.forEach(r => (choiceByKp[r.kp] = choiceByKp[r.kp] || []).push(r.id));
  const judgeByKp = {}; judges.forEach(r => (judgeByKp[r.kp] = judgeByKp[r.kp] || []).push(r.id));
  const kps = Object.keys(choiceByKp);
  const codingIds = codings.map(r => r.id);

  function balancedPick(poolByKp, n, usedSet) {
    const picked = [];
    let idx = 0;
    while (picked.length < n && idx < kps.length * 30) {
      const kp = kps[idx % kps.length];
      const cand = (poolByKp[kp] || []).filter(id => !usedSet.has(id));
      if (cand.length) { picked.push(cand[0]); usedSet.add(cand[0]); }
      idx++;
    }
    return picked;
  }

  for (let i = 0; i < 10; i++) {
    const paperUsed = new Set();
    const c15 = balancedPick(choiceByKp, 15, paperUsed);
    const j10 = balancedPick(judgeByKp, 10, paperUsed);
    const c2 = [];
    for (let k = 0; k < 2 && codingIds.length; k++) c2.push(codingIds[(i * 2 + k) % codingIds.length]);
    const title = 'GESP一级模拟卷（' + ['一','二','三','四','五','六','七','八','九','十'][i] + '）';
    db.prepare('INSERT INTO exam_papers (title, description, type, total_questions, time_limit, difficulty_level, level) VALUES (?,?,?,?,?,?,?)')
      .run(title, '官方题型：15单选+10判断+2编程，共100分', 'mock', 27, 120, String(i + 1), 1);
    const paperId = db.prepare('SELECT last_insert_rowid() as id').get().id;
    const allQ = [...c15, ...j10, ...c2];
    allQ.forEach((qid, j) => db.prepare('INSERT INTO paper_questions (paper_id, question_id, sort_order) VALUES (?,?,?)').run(paperId, qid, j + 1));
    console.log(title, '15单选+10判断+2编程 =', allQ.length);
  }
  db.save();
  console.log('L1 papers seeded.');
  process.exit(0);
})().catch(e => { console.error('ERR', e.message); process.exit(1); });
