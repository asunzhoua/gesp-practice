// Shared helpers for running C++ in a sandbox without blocking the event loop.
const { exec } = require('child_process');
const fs = require('fs');

// Non-blocking child_process.exec wrapped in a Promise. Resolves with
// { error, stdout, stderr } (never rejects). error.code/signal carry exit info.
function runCmd(cmd, timeoutMs) {
  return new Promise((resolve) => {
    exec(cmd, { timeout: timeoutMs, maxBuffer: 1024 * 1024 }, (error, stdout, stderr) => {
      resolve({ error, stdout: stdout || '', stderr: stderr || '' });
    });
  });
}

// Simple async semaphore to cap concurrent g++ work.
class Semaphore {
  constructor(max) { this.max = max; this.count = 0; this.waiters = []; }
  async acquire() {
    if (this.count < this.max) { this.count++; return; }
    await new Promise((r) => this.waiters.push(r));
    this.count++;
  }
  release() {
    this.count--;
    const w = this.waiters.shift();
    if (w) w();
  }
}

// At most 3 concurrent g++ processes server-wide.
const compileSem = new Semaphore(3);

let hasSetpriv = null;
// Drop g++ and the compiled binary to "nobody" when the server runs as root.
function privilegePrefix(tmpDir) {
  if (process.getuid && process.getuid() === 0) {
    try {
      fs.chmodSync(tmpDir, 0o777); // nobody must write the binary inside the sandbox dir
      if (hasSetpriv === null) {
        try { require('child_process').execSync('command -v setpriv', { encoding: 'utf8' }); hasSetpriv = true; }
        catch { hasSetpriv = false; }
      }
      return hasSetpriv ? 'setpriv --reuid=65534 --regid=65534 --clear-groups ' : '';
    } catch {}
  }
  return '';
}

// Resource limits applied to the sandboxed run (dash needs one ulimit per call).
const LIMITS = 'ulimit -v 262144; ulimit -u 20; ulimit -f 1024; ulimit -t 5; ';

module.exports = { runCmd, Semaphore, compileSem, privilegePrefix, LIMITS };
