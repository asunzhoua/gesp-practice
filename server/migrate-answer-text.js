/**
 * 迁移脚本：为 questions 表添加 answer_text 字段
 * 并填充所有编程题的完整参考答案（逐行注释版）
 *
 * 在服务器上运行: node server/migrate-answer-text.js
 */
require('dotenv').config();
const { initDb, db } = require('./db');
const CODING_ANSWERS = require('./seed-coding-answers');

async function migrate() {
  await initDb();

  console.log('=== 编程题答案迁移脚本 ===\n');

  // 1. 检查 answer_text 列是否已存在
  const tableInfo = db.prepare("PRAGMA table_info(questions)").all();
  const hasColumn = tableInfo.some(col => col.name === 'answer_text');

  if (!hasColumn) {
    console.log('添加 answer_text 列...');
    db.exec('ALTER TABLE questions ADD COLUMN answer_text TEXT');
    console.log('列添加成功。\n');
  } else {
    console.log('answer_text 列已存在，跳过添加。\n');
  }

  // 2. 填充编程题的 answer_text
  let updated = 0;
  let notFound = 0;

  for (const [questionId, data] of Object.entries(CODING_ANSWERS)) {
    const row = db.prepare('SELECT id FROM questions WHERE id = ?').get(questionId);
    if (row) {
      db.prepare('UPDATE questions SET answer_text = ? WHERE id = ?').run(data.answerText, questionId);
      updated++;
      console.log(`  ✓ ${questionId}`);
    } else {
      notFound++;
      console.log(`  ✗ ${questionId} (题目不存在于数据库中)`);
    }
  }

  // 3. 保存数据库
  db.save();

  console.log(`\n=== 迁移完成 ===`);
  console.log(`更新了 ${updated} 道编程题`);
  if (notFound > 0) {
    console.log(`${notFound} 道题目未在数据库中找到`);
  }
  console.log('数据库已保存。');
}

migrate().catch(err => {
  console.error('迁移失败:', err);
  process.exit(1);
});
