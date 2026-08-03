// Migrate existing question kp codes to the official GESP syllabus structure.
const { initDb, db } = require('./db');
const MAPPING = {
  kp01: 'kp1_08', kp02: 'kp1_07', kp03: 'kp1_03', kp04: 'kp1_04', kp05: 'kp1_05',
  kp06: 'kp3_04', kp07: 'kp3_05', kp08: 'kp4_01',
  kp2_01: 'kp4_03', kp2_02: 'kp5_10', kp2_03: 'kp4_09', kp2_04: 'kp3_05',
  kp2_05: 'kp4_05', kp2_06: 'kp6_13', kp2_07: 'kp6_01', kp2_08: 'kp3_02'
};
(async () => {
  await initDb();
  let moved = 0;
  for (const [oldKp, newKp] of Object.entries(MAPPING)) {
    const r = db.prepare('UPDATE questions SET kp = ? WHERE kp = ?').run(newKp, oldKp);
    moved += r.changes;
  }
  db.save();
  const byKp = db.prepare("SELECT kp, COUNT(*) c FROM questions GROUP BY kp ORDER BY kp").all();
  console.log('Moved', moved, 'questions');
  console.log('KP distribution:', byKp.map(r => r.kp + ':' + r.c).join(' '));
  process.exit(0);
})().catch(e => { console.error('ERR', e.message); process.exit(1); });
