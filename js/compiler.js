/* ============================================================
   GESP C++ Compiler Service - Wandbox API Wrapper
   ============================================================ */
const Compiler = (() => {
  const API = 'https://wandbox.org/api/compile.json';
  const DEFAULT_OPTIONS = '-std=c++17 -O2 -Wall';

  async function compile(code, stdin = '', compiler = 'gcc-head') {
    try {
      const resp = await fetch(API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ compiler, code, stdin, options: DEFAULT_OPTIONS })
      });
      if (!resp.ok) throw new Error('HTTP ' + resp.status);
      const r = await resp.json();
      return {
        ok: r.status === '0',
        output: r.output || '',
        error: r.compiler_message || r.error || ''
      };
    } catch (e) {
      return { ok: false, output: '', error: '编译服务暂不可用 (' + e.message + ')' };
    }
  }

  return { compile };
})();
