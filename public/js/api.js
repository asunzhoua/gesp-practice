/* ============================================================
   API Client - Handles auth and data fetching
   ============================================================ */
const API = (() => {
  const BASE = '/api';
  let token = localStorage.getItem('gesp_token') || null;
  let currentUser = null;

  function setToken(t) {
    token = t;
    if (t) localStorage.setItem('gesp_token', t);
    else localStorage.removeItem('gesp_token');
  }

  function setUser(u) {
    currentUser = u;
    if (u) localStorage.setItem('gesp_user', JSON.stringify(u));
    else localStorage.removeItem('gesp_user');
  }

  async function request(path, opts = {}) {
    const headers = { 'Content-Type': 'application/json' };
    if (token) headers['Authorization'] = 'Bearer ' + token;

    const resp = await fetch(BASE + path, { ...opts, headers: { ...headers, ...opts.headers } });
    const data = await resp.json();
    if (!resp.ok) throw new Error(data.error || '请求失败');
    return data;
  }

  return {
    isLoggedIn: () => !!token,
    getUser: () => currentUser || JSON.parse(localStorage.getItem('gesp_user') || 'null'),
    getRole: () => { const u = currentUser || JSON.parse(localStorage.getItem('gesp_user') || 'null'); return u?.role; },

    async login(username, password) {
      const data = await request('/auth/login', { method: 'POST', body: JSON.stringify({ username, password }) });
      setToken(data.token);
      setUser(data.user);
      return data.user;
    },

    async register(username, password, nickname, role, avatar) {
      const data = await request('/auth/register', { method: 'POST', body: JSON.stringify({ username, password, nickname, role, avatar }) });
      setToken(data.token);
      setUser(data.user);
      return data.user;
    },

    async updateAvatar(avatar) {
      const data = await request('/auth/avatar', { method: 'PUT', body: JSON.stringify({ avatar }) });
      // keep the in-memory user and localStorage in sync
      if (currentUser) currentUser.avatar = data.avatar;
      const saved = JSON.parse(localStorage.getItem('gesp_user') || 'null');
      if (saved) { saved.avatar = data.avatar; localStorage.setItem('gesp_user', JSON.stringify(saved)); }
      return data;
    },

    logout() {
      setToken(null);
      setUser(null);
    },

    async getKnowledgePoints() { return request('/questions/knowledge-points'); },
    async getQuestions(kp) { return request('/questions/' + kp); },
    async getCodingKPs() { return request('/questions/coding-kps'); },
    async getCodingQuestions(kp) { return request('/questions/coding/' + kp); },
    async getStats() { return request('/questions/stats'); },
    async getExamPaper() { return request('/exam/paper'); },
    async getExamPapers() { return request('/exam/papers'); },
    async getExamPaperById(id) { return request('/exam/paper/' + id); },
    async submitExam(paperId, answers, timeSpent) { return request('/exam/submit', { method: 'POST', body: JSON.stringify({ paperId, answers, timeSpent }) }); },
    async submitAnswer(questionId, selected, isCorrect) {
      return request('/practice/answer', { method: 'POST', body: JSON.stringify({ questionId, selected, isCorrect }) });
    },
    async getWrongIds() { return request('/practice/wrong-ids'); },
    async getWrongQuestions() { return request('/practice/wrong-questions'); },
    async getReviewSchedule() { return request('/practice/review/schedule'); },
    async getTeacherStudents() { return request('/teacher/students'); },
    async getTeacherStudent(id) { return request('/teacher/student/' + id); },
    async getTeacherStats() { return request('/teacher/stats'); },
    async getStudentProfile(id) { return request('/teacher/students/' + id + '/profile'); },
    async updateStudentProfile(id, data) { return request('/teacher/students/' + id + '/profile', { method: 'PUT', body: JSON.stringify(data) }); },
    async createStudent(data) { return request('/teacher/students', { method: 'POST', body: JSON.stringify(data) }); },
    async batchCreateStudents(students, defaultPassword) { return request('/teacher/students/batch', { method: 'POST', body: JSON.stringify({ students, defaultPassword }) }); },
    async deleteStudent(id) { return request('/teacher/students/' + id, { method: 'DELETE' }); },
    async resetStudentPassword(id, newPassword) { return request('/teacher/students/' + id + '/reset-password', { method: 'POST', body: JSON.stringify({ newPassword }) }); },

    async compileAndRun(code, stdin, expectedOutput) {
      return request('/compile/compile-run', { method: 'POST', body: JSON.stringify({ code, stdin, expectedOutput }) });
    },
    async compileAndRunTestCases(code, testCases) {
      return request('/compile/compile-run/test-cases', { method: 'POST', body: JSON.stringify({ code, testCases }) });
    },
    async tryRestore() {
      const saved = localStorage.getItem('gesp_user');
      if (saved && token) {
        try {
          currentUser = JSON.parse(saved);
          await request('/auth/me');
          return true;
        } catch { setToken(null); setUser(null); return false; }
      }
      return false;
    }
  };
})();
