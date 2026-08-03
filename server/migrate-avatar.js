const { initDb, db } = require('./db');
(async () => {
  await initDb();
  const cols = db.prepare('PRAGMA table_info(users)').all().map(c => c.name);
  if (!cols.includes('avatar')) {
    db.exec("ALTER TABLE users ADD COLUMN avatar TEXT DEFAULT '😊'");
    console.log('added avatar column');
  } else {
    console.log('avatar column already exists');
  }
  // Backfill any NULL avatars
  db.exec("UPDATE users SET avatar = '😊' WHERE avatar IS NULL OR avatar = ''");
  db.save();
  console.log('saved');
  process.exit(0);
})().catch(e => { console.error('ERR', e.message); process.exit(1); });
