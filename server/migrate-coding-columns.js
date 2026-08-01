/**
 * Migration: Add starter_code and test_cases columns for coding questions.
 * Run on server: node migrate-coding-columns.js
 */
const initSqlJs = require('sql.js');
const fs = require('fs');
const path = require('path');

const dbPath = process.env.DB_PATH || '/opt/gesp/data/gesp.db';

async function migrate() {
  const SQL = await initSqlJs();
  const buf = fs.readFileSync(dbPath);
  const db = new SQL.Database(buf);

  console.log('Adding columns...');

  // Check if columns already exist
  const colsResult = db.exec("PRAGMA table_info(questions)");
  const cols = colsResult.length > 0 ? colsResult[0].values.map(r => r[1]) : [];
  console.log('Existing columns:', cols.join(', '));

  if (!cols.includes('starter_code')) {
    db.run("ALTER TABLE questions ADD COLUMN starter_code TEXT");
    console.log('Added starter_code column');
  } else {
    console.log('starter_code already exists');
  }

  if (!cols.includes('test_cases')) {
    db.run("ALTER TABLE questions ADD COLUMN test_cases TEXT");
    console.log('Added test_cases column');
  } else {
    console.log('test_cases already exists');
  }

  // Find coding questions
  const codingResult = db.exec("SELECT id, title, answer_text FROM questions WHERE type = 'coding'");
  const codingQs = codingResult.length > 0 ? codingResult[0].values : [];
  console.log(`Found ${codingQs.length} coding questions`);

  // Default starter code template
  const DEFAULT_STARTER = `#include <iostream>\nusing namespace std;\n\nint main() {\n    // 在这里编写代码\n    \n    return 0;\n}`;

  // Generate appropriate starter code and test cases based on question content
  for (const [id, title, answerText] of codingQs) {
    let starterCode = DEFAULT_STARTER;
    let testCases = [];

    // Analyze the question title to determine appropriate test cases
    const lowerTitle = (title || '').toLowerCase();

    if (lowerTitle.includes('字节') || lowerTitle.includes('sizeof') || lowerTitle.includes('字节数')) {
      starterCode = `#include <iostream>\nusing namespace std;\n\nint main() {\n    // 声明四种类型的变量并输出它们各自占多少字节\n    \n    return 0;\n}`;
      testCases = [{ input: '', expectedOutput: '4\n8\n1\n1', description: '输出 int, double, char, bool 的字节数' }];
    } else if (lowerTitle.includes('和、差、积') || lowerTitle.includes('加减乘除') || lowerTitle.includes('运算')) {
      starterCode = `#include <iostream>\nusing namespace std;\n\nint main() {\n    int a = 10, b = 3;\n    \n    // 输出和、差、积、商、余数\n    \n    return 0;\n}`;
      testCases = [{ input: '', expectedOutput: '13\n7\n30\n3\n1', description: '和=13, 差=7, 积=30, 商=3, 余数=1' }];
    } else if (lowerTitle.includes('温度') || lowerTitle.includes('摄氏') || lowerTitle.includes('华氏')) {
      starterCode = `#include <iostream>\nusing namespace std;\n\nint main() {\n    double K;\n    cin >> K;\n    // 将开尔文温度转换为摄氏温度和华氏温度\n    \n    return 0;\n}`;
      testCases = [{ input: '173.56', expectedOutput: '-99.59 -147.26', description: '开尔文173.56转换为摄氏和华氏' }];
    } else if (lowerTitle.includes('奇数') && lowerTitle.includes('偶数')) {
      starterCode = `#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    // 统计奇数和偶数的个数\n    \n    return 0;\n}`;
      testCases = [{ input: '5\n1\n2\n3\n4\n5', expectedOutput: '3 2', description: '5个数中3个奇数2个偶数' }];
    } else if (lowerTitle.includes('四舍五入')) {
      starterCode = `#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    for (int i = 0; i < n; i++) {\n        int x;\n        cin >> x;\n        // 将每个数四舍五入到最接近的整十数\n    }\n    return 0;\n}`;
      testCases = [{ input: '5\n43\n58\n25\n67\n90', expectedOutput: '40\n60\n30\n70\n90', description: '四舍五入到整十数' }];
    } else if (lowerTitle.includes('星期') || lowerTitle.includes('几天后')) {
      starterCode = `#include <iostream>\nusing namespace std;\n\nint main() {\n    int nowDay, afterDays;\n    cin >> nowDay >> afterDays;\n    // 计算几天后是星期几\n    \n    return 0;\n}`;
      testCases = [{ input: '3 5', expectedOutput: '星期1', description: '星期3过5天后是星期1' }];
    } else if (lowerTitle.includes('字母') || lowerTitle.includes('大小写') || lowerTitle.includes('转换')) {
      starterCode = `#include <iostream>\nusing namespace std;\n\nint main() {\n    char c;\n    cin >> c;\n    // 字母大小写转换\n    \n    return 0;\n}`;
      testCases = [{ input: 'A', expectedOutput: 'a', description: '大写转小写' }];
    } else if (lowerTitle.includes('素数') || lowerTitle.includes('质数')) {
      starterCode = `#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    // 判断是否为素数\n    \n    return 0;\n}`;
      testCases = [{ input: '7', expectedOutput: '是素数', description: '7是素数' }];
    } else if (lowerTitle.includes('最大') && lowerTitle.includes('最小')) {
      starterCode = `#include <iostream>\nusing namespace std;\n\nint main() {\n    int a, b, c;\n    cin >> a >> b >> c;\n    // 找出最大值和最小值\n    \n    return 0;\n}`;
      testCases = [{ input: '3 7 5', expectedOutput: '7 3', description: '最大7, 最小3' }];
    } else if (lowerTitle.includes('数字') && (lowerTitle.includes('位') || lowerTitle.includes('和'))) {
      starterCode = `#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    // 计算各位数字之和\n    \n    return 0;\n}`;
      testCases = [{ input: '1234', expectedOutput: '10', description: '1+2+3+4=10' }];
    } else if (lowerTitle.includes('斐波那契')) {
      starterCode = `#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    // 输出前n个斐波那契数\n    \n    return 0;\n}`;
      testCases = [{ input: '7', expectedOutput: '0 1 1 2 3 5 8', description: '前7个斐波那契数' }];
    } else if (lowerTitle.includes('排列') || lowerTitle.includes('输出') && lowerTitle.includes('数字')) {
      starterCode = `#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    // 按要求输出\n    \n    return 0;\n}`;
      testCases = [{ input: '5', expectedOutput: '1 2 3 4 5', description: '输出1到n' }];
    }

    // Update the row
    const updateSql = "UPDATE questions SET starter_code = ?, test_cases = ? WHERE id = ?";
    db.run(updateSql, [starterCode, JSON.stringify(testCases), id]);
    console.log(`Updated ${id}: test_cases=${testCases.length}`);
  }

  // Save
  const data = db.export();
  const buffer = Buffer.from(data);
  fs.writeFileSync(dbPath, buffer);
  console.log(`\nMigration complete. Database saved to ${dbPath}`);
  console.log('File size:', fs.statSync(dbPath).size, 'bytes');
}

migrate().catch(err => {
  console.error('Migration failed:', err);
  process.exit(1);
});
