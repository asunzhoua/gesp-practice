const initSqlJs = require('sql.js');
const path = require('path');
const fs = require('fs');

const dbDir = path.join(__dirname, '..', 'data');
if (!fs.existsSync(dbDir)) fs.mkdirSync(dbDir, { recursive: true });

const dbPath = process.env.DB_PATH || path.join(dbDir, 'gesp.db');

let sqlDb = null;

async function initDb() {
  const SQL = await initSqlJs();

  if (fs.existsSync(dbPath)) {
    const buf = fs.readFileSync(dbPath);
    sqlDb = new SQL.Database(buf);
  } else {
    sqlDb = new SQL.Database();
  }

  sqlDb.run('PRAGMA journal_mode = WAL');
  sqlDb.run('PRAGMA foreign_keys = ON');

  sqlDb.run(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT UNIQUE NOT NULL,
      password TEXT NOT NULL,
      nickname TEXT NOT NULL,
      role TEXT NOT NULL DEFAULT 'student',
      avatar TEXT DEFAULT '😊',
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);

  sqlDb.run(`
    CREATE TABLE IF NOT EXISTS questions (
      id TEXT PRIMARY KEY,
      kp TEXT NOT NULL,
      type TEXT NOT NULL DEFAULT 'choice',
      difficulty INTEGER DEFAULT 1,
      title TEXT NOT NULL,
      options TEXT,
      answer INTEGER,
      explanation TEXT,
      source TEXT,
      is_judge INTEGER DEFAULT 0,
      answer_text TEXT,
      starter_code TEXT,
      test_cases TEXT
    )
  `);

  sqlDb.run(`
    CREATE TABLE IF NOT EXISTS answers (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER NOT NULL,
      question_id TEXT NOT NULL,
      selected INTEGER,
      is_correct INTEGER NOT NULL,
      answered_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);

  sqlDb.run(`CREATE INDEX IF NOT EXISTS idx_answers_user_q ON answers(user_id, question_id, answered_at)`);

  sqlDb.run(`
    CREATE TABLE IF NOT EXISTS exam_sessions (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER NOT NULL,
      paper_id INTEGER,
      exam_type TEXT NOT NULL DEFAULT 'mock',
      total INTEGER NOT NULL,
      correct INTEGER DEFAULT 0,
      score REAL DEFAULT 0,
      time_spent INTEGER DEFAULT 0,
      started_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      finished_at DATETIME,
      answers TEXT
    )
  `);

  sqlDb.run(`
    CREATE TABLE IF NOT EXISTS exam_papers (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      description TEXT,
      type TEXT NOT NULL DEFAULT 'mock',
      total_questions INTEGER DEFAULT 30,
      time_limit INTEGER DEFAULT 45,
      difficulty_level TEXT,
      level INTEGER DEFAULT 1,
      is_active INTEGER DEFAULT 1,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);

  sqlDb.run(`
    CREATE TABLE IF NOT EXISTS paper_questions (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      paper_id INTEGER NOT NULL,
      question_id TEXT NOT NULL,
      sort_order INTEGER DEFAULT 0,
      FOREIGN KEY (paper_id) REFERENCES exam_papers(id),
      FOREIGN KEY (question_id) REFERENCES questions(id)
    )
  `);

  sqlDb.run(`
    CREATE TABLE IF NOT EXISTS student_profiles (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER UNIQUE NOT NULL,
      class_name TEXT,
      grade TEXT,
      parent_phone TEXT,
      parent_name TEXT,
      total_study_time INTEGER DEFAULT 0,
      streak_days INTEGER DEFAULT 0,
      last_active_date TEXT,
      daily_goal INTEGER DEFAULT 20,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (user_id) REFERENCES users(id)
    )
  `);

  sqlDb.run(`
    CREATE TABLE IF NOT EXISTS study_records (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER NOT NULL,
      record_type TEXT NOT NULL,
      kp TEXT,
      question_id TEXT,
      details TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (user_id) REFERENCES users(id)
    )
  `);

  sqlDb.run('CREATE INDEX IF NOT EXISTS idx_answers_user ON answers(user_id)');
  sqlDb.run('CREATE INDEX IF NOT EXISTS idx_answers_question ON answers(question_id)');
  sqlDb.run('CREATE INDEX IF NOT EXISTS idx_questions_kp ON questions(kp)');
  sqlDb.run('CREATE INDEX IF NOT EXISTS idx_exam_sessions_user ON exam_sessions(user_id)');

  // Migration: add `level` to exam_papers on pre-existing databases
  const paperCols = db.prepare('PRAGMA table_info(exam_papers)').all().map(c => c.name);
  if (!paperCols.includes('level')) {
    sqlDb.run('ALTER TABLE exam_papers ADD COLUMN level INTEGER DEFAULT 1');
    sqlDb.run('UPDATE exam_papers SET level = 1 WHERE level IS NULL');
  }

  return db;
}

// Wrapper providing better-sqlite3-like API
const db = {
  prepare(sql) {
    return {
      run(...params) {
        sqlDb.run(sql, params);
        const lastId = sqlDb.exec('SELECT last_insert_rowid() as id');
        return { lastInsertRowid: lastId[0]?.values[0]?.[0] || 0, changes: sqlDb.getRowsModified() };
      },
      get(...params) {
        const stmt = sqlDb.prepare(sql);
        stmt.bind(params);
        if (stmt.step()) {
          const row = stmt.getAsObject();
          stmt.free();
          return row;
        }
        stmt.free();
        return undefined;
      },
      all(...params) {
        const stmt = sqlDb.prepare(sql);
        stmt.bind(params);
        const rows = [];
        while (stmt.step()) rows.push(stmt.getAsObject());
        stmt.free();
        return rows;
      }
    };
  },
  exec(sql) {
    sqlDb.run(sql);
  },
  transaction(fn) {
    return function (...args) {
      sqlDb.run('BEGIN TRANSACTION');
      try {
        const result = fn(...args);
        sqlDb.run('COMMIT');
        return result;
      } catch (e) {
        sqlDb.run('ROLLBACK');
        throw e;
      }
    };
  },
  save() {
    if (sqlDb) {
      const data = sqlDb.export();
      const buffer = Buffer.from(data);
      fs.writeFileSync(dbPath, buffer);
    }
  }
};

module.exports = { initDb, db };
