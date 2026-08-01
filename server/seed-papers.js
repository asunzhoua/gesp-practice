const { initDb, db } = require('./db');

async function seedPapers() {
  await initDb();

  // Delete existing papers and questions
  console.log('Clearing existing exam papers...');
  db.exec('DELETE FROM paper_questions');
  db.exec('DELETE FROM exam_papers');

  console.log('Creating 5 mock exam papers...');

  // Paper 1: 综合模拟卷（一）- 混合各知识点
  createPaper(
    'GESP一级模拟卷（一）',
    '综合练习，覆盖所有知识点，适合日常练习',
    'mock',
    1,
    ['ex_q01','ex_q02','ex_q03','ex_q04','ex_q05',
     'kp01_q01','kp01_q02','kp01_q03',
     'kp02_q01','kp02_q02','kp02_q03',
     'kp03_q01','kp03_q02','kp03_q03',
     'kp04_q01','kp04_q02','kp04_q03',
     'kp05_q01','kp05_q02','kp05_q03',
     'kp06_q01','kp06_q02','kp06_q03',
     'kp07_q01','kp07_q02','kp07_q03',
     'kp08_q01','kp08_q02','kp08_q03',
     'r2403_q03','r2403_q07']
  );

  // Paper 2: 基础语法卷（二）- 侧重变量、运算、IO
  createPaper(
    'GESP一级模拟卷（二）',
    '侧重变量、数据类型、基本运算和输入输出',
    'mock',
    2,
    ['ex_q06','ex_q07','ex_q08','ex_q09','ex_q10',
     'kp01_q04','kp01_q05','kp01_q06','kp01_q07','kp01_q08',
     'kp02_q04','kp02_q05','kp02_q06','kp02_q07','kp02_q08',
     'kp03_q04','kp03_q05','kp03_q06','kp03_q07','kp03_q08',
     'kp01_q09','kp01_q10',
     'kp02_q09','kp02_q10',
     'kp03_q09','kp03_q10',
     'r2403_q08','r2403_q09',
     'r2403_tf02','r2403_tf04']
  );

  // Paper 3: 逻辑思维卷（三）- 侧重条件、循环
  createPaper(
    'GESP一级模拟卷（三）',
    '侧重条件语句、循环语句和逻辑思维',
    'mock',
    3,
    ['ex_q11','ex_q12','ex_q13','ex_q14','ex_q15',
     'kp04_q04','kp04_q05','kp04_q06','kp04_q07','kp04_q08',
     'kp05_q04','kp05_q05','kp05_q06','kp05_q07','kp05_q08',
     'kp04_q09','kp04_q10','kp04_q11',
     'kp05_q09','kp05_q10','kp05_q11',
     'kp04_q12','kp04_q13',
     'kp05_q12','kp05_q13',
     'r2406_q08','r2406_q11',
     'r2406_tf01','r2406_tf02','r2406_tf03']
  );

  // Paper 4: 数据结构卷（四）- 侧重数组、字符串、函数
  createPaper(
    'GESP一级模拟卷（四）',
    '侧重数组、字符字符串和函数基础',
    'mock',
    4,
    ['ex_q16','ex_q17','ex_q18','ex_q19','ex_q20',
     'kp06_q04','kp06_q05','kp06_q06','kp06_q07','kp06_q08',
     'kp07_q04','kp07_q05','kp07_q06','kp07_q07','kp07_q08',
     'kp08_q04','kp08_q05','kp08_q06','kp08_q07','kp08_q08',
     'kp06_q09','kp06_q10',
     'kp07_q09','kp07_q10',
     'kp08_q09','kp08_q10',
     'r2409_q02','r2409_q05',
     'r2409_tf01','r2409_tf02']
  );

  // Paper 5: 真题冲刺卷（五）- 使用真实考题
  createPaper(
    'GESP一级模拟卷（五）',
    '真实考题精选，冲刺高分',
    'mock',
    5,
    ['ex_q21','ex_q22','ex_q23','ex_q24','ex_q25',
     'r2412_q01','r2412_q02','r2412_q03','r2412_q07','r2412_q08',
     'r2412_q09','r2412_q10','r2412_q12','r2412_q13',
     'r2503_q05','r2503_q07','r2503_q13','r2503_q14',
     'r2412_tf01','r2412_tf02','r2412_tf03','r2412_tf04',
     'r2503_tf01','r2503_tf03','r2503_tf04',
     'real_2024_03_01','real_2024_06_01','real_2024_09_01','real_2024_12_01',
     'real_prog_01']
  );

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

  // Verify save
  const fs = require('fs');
  const path = require('path');
  const dbPath = path.join(__dirname, '..', 'data', 'gesp.db');
  console.log('Database file size:', fs.statSync(dbPath).size, 'bytes');
}

function createPaper(title, description, type, difficultyLevel, questionIds) {
  // Create paper
  db.prepare('INSERT INTO exam_papers (title, description, type, total_questions, time_limit, difficulty_level) VALUES (?, ?, ?, ?, ?, ?)').run(
    title, description, type, 30, 45, difficultyLevel.toString()
  );

  const paperId = db.prepare('SELECT last_insert_rowid() as id').get().id;

  // Add questions to paper
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
