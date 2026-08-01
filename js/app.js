/**
 * GESP Level 1 C++ Practice System - Core Engine
 * Hash-based SPA with localStorage persistence
 */

/* ============================================================
   Constants
   ============================================================ */
const STORAGE_KEY = 'gesp_l1_progress';
const XP_CORRECT = 10, XP_CODING = 20, XP_STREAK_BONUS = 5;
const LEVEL_XP = [0, 100, 300, 600, 1000, 1500, 2200, 3000, 4000, 5200];
const EXAM_TIME = 45 * 60; // 45 minutes in seconds
const KP_LABELS = {
  kp01: '01', kp02: '02', kp03: '03', kp04: '04',
  kp05: '05', kp06: '06', kp07: '07', kp08: '08'
};

/* ============================================================
   State / Storage
   ============================================================ */
let state = loadState();

function defaultState() {
  return {
    xp: 0,
    streak: 0,
    lastStudyDate: null,
    answers: {},       // { qId: { correct: bool, attempts: n } }
    wrongIds: [],      // unique wrong question ids
    examHistory: [],   // [{ date, score, total }]
    sessions: 0
  };
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultState();
    const s = JSON.parse(raw);
    return { ...defaultState(), ...s };
  } catch { return defaultState(); }
}

function saveState() { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }

/* ============================================================
   XP & Level
   ============================================================ */
function getLevel() {
  for (let i = LEVEL_XP.length - 1; i >= 0; i--) {
    if (state.xp >= LEVEL_XP[i]) return i + 1;
  }
  return 1;
}

function getLevelProgress() {
  const lv = getLevel();
  const cur = LEVEL_XP[lv - 1] || 0;
  const next = LEVEL_XP[lv] || LEVEL_XP[LEVEL_XP.length - 1] + 2000;
  return { level: lv, current: state.xp - cur, needed: next - cur, pct: Math.min(100, Math.round((state.xp - cur) / (next - cur) * 100)) };
}

function awardXP(amount) {
  state.xp += amount;
  updateStreak();
  saveState();
}

function updateStreak() {
  const today = new Date().toISOString().slice(0, 10);
  if (state.lastStudyDate === today) return;
  const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
  state.streak = (state.lastStudyDate === yesterday) ? state.streak + 1 : 1;
  state.lastStudyDate = today;
}

/* ============================================================
   Question Helpers
   ============================================================ */
function getAllQuestions() {
  const all = [];
  for (const kp of Object.values(QUESTION_BANK.knowledgePoints)) {
    all.push(...kp.questions);
  }
  all.push(...QUESTION_BANK.mockExam);
  all.push(...QUESTION_BANK.realExam);
  return all;
}

function getQuestionById(id) {
  return getAllQuestions().find(q => q.id === id) || null;
}

function recordAnswer(qId, correct) {
  const prev = state.answers[qId];
  state.answers[qId] = {
    correct,
    attempts: (prev ? prev.attempts : 0) + 1
  };
  if (!correct && !state.wrongIds.includes(qId)) {
    state.wrongIds.push(qId);
  }
  if (correct && state.wrongIds.includes(qId)) {
    // Remove from wrong list after 3 correct in a row
    const recent = getAllQuestions().filter(q => q.id === qId);
    state.wrongIds = state.wrongIds.filter(id => id !== qId);
  }
  saveState();
}

function getKPProgress(kpKey) {
  const kp = QUESTION_BANK.knowledgePoints[kpKey];
  if (!kp) return { total: 0, correct: 0, pct: 0 };
  const total = kp.questions.length;
  let correct = 0;
  for (const q of kp.questions) {
    if (state.answers[q.id]?.correct) correct++;
  }
  return { total, correct, pct: total ? Math.round(correct / total * 100) : 0 };
}

function getTotalStats() {
  let total = 0, correct = 0;
  for (const [, a] of Object.entries(state.answers)) {
    total++;
    if (a.correct) correct++;
  }
  return { total, correct, pct: total ? Math.round(correct / total * 100) : 0 };
}

/* ============================================================
   Router
   ============================================================ */
function navigate(hash) { location.hash = hash; }

function handleRoute() {
  const hash = location.hash || '#/';
  const [path, ...rest] = hash.replace(/^#\/?/, '').split('/');
  state.sessions++;
  saveState();

  switch (path) {
    case '': case 'index': renderDashboard(); break;
    case 'practice': renderPractice(rest[0] || 'kp01'); break;
    case 'mock': renderMock(); break;
    case 'review': renderReview(); break;
    default: renderDashboard();
  }
}

/* ============================================================
   Dashboard
   ============================================================ */
function renderDashboard() {
  const stats = getTotalStats();
  const lp = getLevelProgress();
  document.getElementById('app').innerHTML = `
    <div class="hero animate-in">
      <h1>GESP 一级 C++ 编程练习</h1>
      <p class="subtitle">孙老师思维课堂 - 系统化备考训练</p>
      <div class="tags">
        <span class="tag tag-primary">CCF 认证</span>
        <span class="tag tag-accent">${QUESTION_BANK.meta.totalQuestions} 题</span>
        <span class="tag tag-success">Lv.${lp.level}</span>
      </div>
    </div>

    <div class="stats-grid animate-in">
      <div class="stat-card">
        <div class="stat-icon">📝</div>
        <div class="stat-value">${stats.total}</div>
        <div class="stat-label">已练习</div>
      </div>
      <div class="stat-card">
        <div class="stat-icon">✅</div>
        <div class="stat-value">${stats.pct}%</div>
        <div class="stat-label">正确率</div>
      </div>
      <div class="stat-card">
        <div class="stat-icon">🔥</div>
        <div class="stat-value">${state.streak}</div>
        <div class="stat-label">连续天数</div>
      </div>
      <div class="stat-card">
        <div class="stat-icon">⭐</div>
        <div class="stat-value">${state.xp}</div>
        <div class="stat-label">经验值</div>
      </div>
    </div>

    <div class="card mb-md animate-in">
      <div class="xp-bar">
        <div class="xp-bar-label"><span>Lv.${lp.level}</span><span>${lp.current}/${lp.needed} XP</span></div>
        <div class="xp-track"><div class="xp-fill" style="width:${lp.pct}%"></div></div>
      </div>
    </div>

    <div class="section-title">学习路径</div>
    <div class="kp-path animate-in" id="kpPath"></div>

    <div class="quick-actions animate-in">
      <a class="quick-action" href="#/practice/kp01">
        <div class="qa-icon">📖</div>
        <div class="qa-title">知识点练习</div>
        <div class="qa-desc">8 个知识点逐个突破</div>
      </a>
      <a class="quick-action" href="#/mock">
        <div class="qa-icon">🏆</div>
        <div class="qa-title">模拟考试</div>
        <div class="qa-desc">30 题 45 分钟</div>
      </a>
      <a class="quick-action" href="#/review">
        <div class="qa-icon">❌</div>
        <div class="qa-title">错题复习</div>
        <div class="qa-desc">${state.wrongIds.length} 题待复习</div>
      </a>
    </div>

    ${renderExamHistory()}

    <div class="footer">GESP Level 1 C++ Practice System v2.0</div>
  `;

  renderKPPath();
  setActiveNav('');
}

function renderKPPath() {
  const el = document.getElementById('kpPath');
  let html = '';
  for (const [key, kp] of Object.entries(QUESTION_BANK.knowledgePoints)) {
    const prog = getKPProgress(key);
    const num = KP_LABELS[key];
    const cls = prog.pct >= 80 ? 'completed' : prog.pct > 0 ? 'in-progress' : '';
    html += `
      <a class="kp-node ${cls} card-clickable" href="#/practice/${key}">
        <div class="kp-num">${num}</div>
        <div class="kp-name">${kp.title}</div>
        <div class="kp-meta">${kp.questions.length} 题 · 正确率 ${prog.pct}%</div>
        <div class="kp-progress"><div class="kp-progress-fill" style="width:${prog.pct}%"></div></div>
        <div class="kp-status">${prog.pct >= 80 ? '✓' : prog.pct > 0 ? '•' : ''}</div>
      </a>`;
  }
  el.innerHTML = html;
}

function renderExamHistory() {
  if (!state.examHistory.length) return '';
  const recent = state.examHistory.slice(-5).reverse();
  let rows = recent.map(h => `
    <div class="breakdown-item">
      <span class="breakdown-num ${h.pct >= 60 ? 'correct' : 'wrong'}">${h.pct}%</span>
      <span>${h.date} · ${h.score}/${h.total} 题</span>
    </div>`).join('');
  return `
    <div class="section-title">最近成绩</div>
    <div class="card animate-in" style="padding:16px 20px">${rows}</div>`;
}

/* ============================================================
   Practice Page
   ============================================================ */
let practiceState = { kpKey: 'kp01', filter: 'all', idx: 0, answered: false, selected: null };

function renderPractice(kpKey) {
  practiceState = { kpKey, filter: 'all', idx: 0, answered: false, selected: null };
  const kp = QUESTION_BANK.knowledgePoints[kpKey];
  if (!kp) { renderDashboard(); return; }
  const prog = getKPProgress(kpKey);

  document.getElementById('app').innerHTML = `
    <div class="practice-nav">
      <a class="back-btn" href="#/">← 返回</a>
      <span style="font-weight:700;font-size:1.05em">知识点 ${KP_LABELS[kpKey]}：${kp.title}</span>
      <div class="filter-tabs" id="filterTabs">
        <button class="filter-tab active" data-f="all">全部</button>
        <button class="filter-tab" data-f="choice">选择题</button>
        <button class="filter-tab" data-f="coding">编程题</button>
      </div>
    </div>

    <div class="theory-card" id="theoryCard">
      <h3>📖 知识要点</h3>
      ${kp.theory}
    </div>

    <div id="questionArea"></div>

    <div class="q-nav" id="qNav"></div>
  `;

  // Filter tabs
  document.getElementById('filterTabs').addEventListener('click', e => {
    const btn = e.target.closest('.filter-tab');
    if (!btn) return;
    document.querySelectorAll('.filter-tab').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    practiceState.filter = btn.dataset.f;
    practiceState.idx = 0;
    practiceState.answered = false;
    practiceState.selected = null;
    renderPracticeQuestion();
  });

  renderPracticeQuestion();
  setActiveNav('practice');
}

function getFilteredQuestions() {
  const kp = QUESTION_BANK.knowledgePoints[practiceState.kpKey];
  let qs = kp.questions;
  if (practiceState.filter !== 'all') qs = qs.filter(q => q.type === practiceState.filter);
  return qs;
}

function renderPracticeQuestion() {
  const qs = getFilteredQuestions();
  if (!qs.length) {
    document.getElementById('questionArea').innerHTML = '<div class="card text-center" style="padding:40px"><p class="text-muted">该类别暂无题目</p></div>';
    document.getElementById('qNav').innerHTML = '';
    return;
  }
  const q = qs[practiceState.idx];
  const total = qs.length;
  const diffLabel = { 1: '基础', 2: '进阶', 3: '挑战' };
  const diffClass = { 1: 'easy', 2: 'medium', 3: 'hard' };
  const typeLabel = q.type === 'coding' ? '编程题' : (q.isJudge ? '判断题' : '选择题');

  let bodyHtml = `<div class="q-body">${formatQuestion(q.question)}</div>`;

  if (q.type === 'choice' && q.options) {
    const labels = 'ABCD';
    bodyHtml += '<div class="options">';
    q.options.forEach((opt, i) => {
      let cls = 'option';
      if (practiceState.answered) {
        cls += ' disabled';
        if (i === q.answer) cls += ' correct';
        else if (i === practiceState.selected) cls += ' incorrect';
      } else if (i === practiceState.selected) {
        cls += ' selected';
      }
      bodyHtml += `<div class="${cls}" data-idx="${i}">
        <span>${labels[i]}.</span> <span class="option-text">${opt}</span>
      </div>`;
    });
    bodyHtml += '</div>';
  } else if (q.type === 'coding') {
    bodyHtml += renderCodingEditor(q);
  }

  // Feedback
  bodyHtml += `<div class="feedback" id="feedback"></div>`;

  document.getElementById('questionArea').innerHTML = `
    <div class="question-card animate-in">
      <div class="question-header">
        <div class="q-number">${practiceState.idx + 1}</div>
        <span class="q-diff ${diffClass[q.difficulty]}">${diffLabel[q.difficulty]}</span>
        <span class="q-type">${typeLabel}</span>
        ${q.source ? `<span class="q-type" style="background:#e8f5e9;color:#2e7d32">真题 ${q.source}</span>` : ''}
      </div>
      ${bodyHtml}
      <div class="btn-group" id="btnGroup">
        ${practiceState.answered
          ? `<button class="btn btn-outline" id="btnNext">下一题 →</button>`
          : q.type === 'choice'
            ? `<button class="btn btn-primary" id="btnSubmit" ${practiceState.selected === null ? 'disabled' : ''}>提交答案</button>`
            : `<button class="btn btn-accent" id="btnRun">运行代码</button>
               <button class="btn btn-primary" id="btnSubmit">提交代码</button>`
        }
      </div>
    </div>`;

  // Bind events
  if (q.type === 'choice') {
    document.querySelectorAll('.option:not(.disabled)').forEach(el => {
      el.addEventListener('click', () => {
        practiceState.selected = parseInt(el.dataset.idx);
        renderPracticeQuestion();
      });
    });
  }

  const btnSubmit = document.getElementById('btnSubmit');
  if (btnSubmit) btnSubmit.addEventListener('click', () => submitPracticeAnswer(q));

  const btnNext = document.getElementById('btnNext');
  if (btnNext) btnNext.addEventListener('click', () => {
    practiceState.idx = (practiceState.idx + 1) % total;
    practiceState.answered = false;
    practiceState.selected = null;
    renderPracticeQuestion();
  });

  if (q.type === 'coding') {
    initCodeEditor(q);
    const btnRun = document.getElementById('btnRun');
    if (btnRun) btnRun.addEventListener('click', () => runCoding(q));
  }

  renderPracticeNav(qs);
}

function submitPracticeAnswer(q) {
  if (q.type === 'choice') {
    if (practiceState.selected === null) return;
    const correct = practiceState.selected === q.answer;
    recordAnswer(q.id, correct);
    practiceState.answered = true;
    if (correct) awardXP(XP_CORRECT);
    renderPracticeQuestion();
    showFeedback(correct, q.explanation);
  } else if (q.type === 'coding') {
    // Handled by runCoding
    runCoding(q, true);
  }
}

function showFeedback(correct, explanation) {
  const fb = document.getElementById('feedback');
  if (!fb) return;
  fb.className = `feedback show ${correct ? 'ok' : 'fail'}`;
  fb.innerHTML = `
    <span class="fb-icon">${correct ? '✓' : '✗'}</span>
    <strong>${correct ? '回答正确！' : '回答错误'}</strong>
    <div class="explanation">${explanation || ''}</div>`;
}

function renderPracticeNav(qs) {
  const pct = Math.round((practiceState.idx + 1) / qs.length * 100);
  document.getElementById('qNav').innerHTML = `
    <button class="btn btn-sm btn-outline" id="prevQ" ${practiceState.idx === 0 ? 'disabled' : ''}>← 上一题</button>
    <div class="q-progress">
      <div class="q-progress-bar"><div class="q-progress-fill" style="width:${pct}%"></div></div>
      <div class="q-progress-text">${practiceState.idx + 1} / ${qs.length}</div>
    </div>
    <button class="btn btn-sm btn-outline" id="nextQ" ${practiceState.idx >= qs.length - 1 ? 'disabled' : ''}>下一题 →</button>`;
  document.getElementById('prevQ')?.addEventListener('click', () => {
    if (practiceState.idx > 0) { practiceState.idx--; practiceState.answered = false; practiceState.selected = null; renderPracticeQuestion(); }
  });
  document.getElementById('nextQ')?.addEventListener('click', () => {
    if (practiceState.idx < qs.length - 1) { practiceState.idx++; practiceState.answered = false; practiceState.selected = null; renderPracticeQuestion(); }
  });
}

/* ============================================================
   Coding Editor (textarea-based, no CodeMirror dependency)
   ============================================================ */
function renderCodingEditor(q) {
  return `
    <div class="editor-wrap">
      <div class="editor-toolbar">
        <button class="btn btn-sm btn-outline" id="resetCode">重置代码</button>
        <span class="text-muted" style="font-size:.78em">可直接编辑代码</span>
      </div>
      <textarea id="codeEditor" spellcheck="false" style="
        width:100%;min-height:220px;padding:14px;
        background:#1e1e2e;color:#cdd6f4;
        font-family:var(--font-code);font-size:14px;
        border:none;outline:none;resize:vertical;line-height:1.6;
        tab-size:4;
      ">${escapeHtml(q.starterCode)}</textarea>
    </div>
    <div class="io-grid">
      <div><label>标准输入 (stdin)</label>
        <textarea class="stdin-input" id="stdinInput" rows="2">${q.testCases?.[0]?.input || ''}</textarea>
      </div>
      <div><label>输出 (stdout)</label>
        <div class="output-box" id="outputBox">等待运行...</div>
      </div>
    </div>
    <div class="tc-table" id="tcTable">
      <h4>测试用例</h4>
      <table><thead><tr><th>输入</th><th>期望输出</th><th>结果</th></tr></thead>
      <tbody id="tcBody"></tbody></table>
    </div>
    <div class="solution" id="solutionPanel">
      <h4 style="color:var(--brand-primary);margin-bottom:6px">参考答案</h4>
      <pre>${escapeHtml(q.referenceCode)}</pre>
    </div>`;
}

function initCodeEditor(q) {
  const editor = document.getElementById('codeEditor');
  if (!editor) return;
  // Tab support
  editor.addEventListener('keydown', e => {
    if (e.key === 'Tab') {
      e.preventDefault();
      const s = editor.selectionStart;
      editor.value = editor.value.substring(0, s) + '    ' + editor.value.substring(editor.selectionEnd);
      editor.selectionStart = editor.selectionEnd = s + 4;
    }
  });
  document.getElementById('resetCode')?.addEventListener('click', () => {
    editor.value = q.starterCode;
    document.getElementById('outputBox').textContent = '等待运行...';
    document.getElementById('outputBox').className = 'output-box';
  });
}

function escapeHtml(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

/* ============================================================
   Compiler (Wandbox)
   ============================================================ */
async function runCoding(q, isSubmit = false) {
  const code = document.getElementById('codeEditor').value;
  const stdin = document.getElementById('stdinInput').value;
  const outBox = document.getElementById('outputBox');
  outBox.textContent = '编译运行中...';
  outBox.className = 'output-box running';

  try {
    const result = await Compiler.compile(code, stdin);
    if (!result.ok) {
      outBox.textContent = result.error;
      outBox.className = 'output-box err';
      if (isSubmit) recordAnswer(q.id, false);
      return;
    }
    outBox.textContent = result.output || '(无输出)';
    outBox.className = 'output-box';

    if (isSubmit) {
      // Check against test cases
      const allPass = q.testCases.every(tc => {
        const userOut = result.output.replace(/\r/g, '').trimEnd();
        const expected = tc.expectedOutput.replace(/\r/g, '').trimEnd();
        return userOut === expected;
      });
      recordAnswer(q.id, allPass);
      if (allPass) awardXP(XP_CODING);
      practiceState.answered = true;
      renderPracticeQuestion();
      showFeedback(allPass, allPass ? q.explanation : '未通过所有测试用例，请检查代码。');
      renderTestCaseTable(q, result.output);
    }
  } catch (err) {
    outBox.textContent = '网络错误: ' + err.message;
    outBox.className = 'output-box err';
    if (isSubmit) recordAnswer(q.id, false);
  }
}

function renderTestCaseTable(q, output) {
  const table = document.getElementById('tcTable');
  const body = document.getElementById('tcBody');
  if (!table || !body) return;
  table.classList.add('show');
  body.innerHTML = q.testCases.map(tc => {
    const pass = output.replace(/\r/g, '').trimEnd() === tc.expectedOutput.replace(/\r/g, '').trimEnd();
    return `<tr>
      <td><code>${escapeHtml(tc.input)}</code></td>
      <td><code>${escapeHtml(tc.expectedOutput)}</code></td>
      <td class="${pass ? 'pass' : 'fail'}">${pass ? '✓ 通过' : '✗ 未通过'}</td>
    </tr>`;
  }).join('');
}

/* ============================================================
   Mock Exam
   ============================================================ */
let mockState = { questions: [], answers: {}, current: 0, timer: null, timeLeft: EXAM_TIME, started: false };

function renderMock() {
  if (mockState.started) { renderMockExam(); return; }

  document.getElementById('app').innerHTML = `
    <div class="start-screen animate-in">
      <div class="card">
        <h2>模拟考试</h2>
        <p class="text-muted">模拟真实 GESP 一级考试环境</p>
        <div class="rules">
          <li>共 ${QUESTION_BANK.mockExam.length} 题（选择 + 编程）</li>
          <li>时间限制：${EXAM_TIME / 60} 分钟</li>
          <li>选择题即时评分，编程题需提交代码运行</li>
          <li>时间到自动提交</li>
          <li>中途离开页面不保存进度</li>
        </div>
        <button class="btn btn-primary" id="startExam" style="margin-top:16px">开始考试</button>
      </div>
    </div>`;

  document.getElementById('startExam').addEventListener('click', startMockExam);
  setActiveNav('mock');
}

function startMockExam() {
  mockState = {
    questions: shuffle([...QUESTION_BANK.mockExam]),
    answers: {},
    current: 0,
    timer: null,
    timeLeft: EXAM_TIME,
    started: true
  };
  mockState.timer = setInterval(tickTimer, 1000);
  renderMockExam();
}

function tickTimer() {
  mockState.timeLeft--;
  const timerEl = document.getElementById('timerValue');
  if (timerEl) {
    const m = Math.floor(mockState.timeLeft / 60);
    const s = mockState.timeLeft % 60;
    timerEl.textContent = `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
    if (mockState.timeLeft <= 300) timerEl.classList.add('warn');
  }
  if (mockState.timeLeft <= 0) submitMockExam();
}

function renderMockExam() {
  const q = mockState.questions[mockState.current];
  const labels = 'ABCD';
  const diffLabel = { 1: '基础', 2: '进阶', 3: '挑战' };
  const diffClass = { 1: 'easy', 2: 'medium', 3: 'hard' };
  const m = Math.floor(mockState.timeLeft / 60);
  const s = mockState.timeLeft % 60;

  let optionsHtml = '';
  if (q.type === 'choice' && q.options) {
    optionsHtml = '<div class="options">';
    q.options.forEach((opt, i) => {
      let cls = 'option';
      if (mockState.answers[q.id] !== undefined) {
        cls += ' disabled';
        if (i === q.answer) cls += ' correct';
        else if (i === mockState.answers[q.id]) cls += ' incorrect';
      } else if (i === mockState.answers[q.id]) {
        cls += ' selected';
      }
      optionsHtml += `<div class="${cls}" data-idx="${i}">
        <span>${labels[i]}.</span> <span class="option-text">${opt}</span>
      </div>`;
    });
    optionsHtml += '</div>';
  } else if (q.type === 'coding') {
    optionsHtml = renderCodingEditor(q);
  }

  document.getElementById('app').innerHTML = `
    <div class="exam-timer">
      <div>
        <span style="font-weight:700">模拟考试</span>
        <span class="text-muted" style="margin-left:8px">第 ${mockState.current + 1}/${mockState.questions.length} 题</span>
      </div>
      <div class="timer-value ${mockState.timeLeft <= 300 ? 'warn' : ''}" id="timerValue">
        ${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}
      </div>
    </div>
    <div class="exam-layout active">
      <div>
        <div class="question-card animate-in">
          <div class="question-header">
            <div class="q-number">${mockState.current + 1}</div>
            <span class="q-diff ${diffClass[q.difficulty]}">${diffLabel[q.difficulty]}</span>
            <span class="q-type">${q.type === 'coding' ? '编程题' : '选择题'}</span>
          </div>
          <div class="q-body">${formatQuestion(q.question)}</div>
          ${optionsHtml}
          <div class="feedback" id="feedback"></div>
          <div class="btn-group">
            ${q.type === 'coding'
              ? `<button class="btn btn-accent" id="btnRun">运行</button>
                 <button class="btn btn-primary" id="btnSave">保存并继续</button>`
              : `<button class="btn btn-primary" id="btnSave">保存并继续</button>`
            }
          </div>
        </div>
      </div>
      <div class="exam-sidebar">
        <div class="card">
          <div style="font-weight:700;margin-bottom:10px;font-size:.85em">答题卡</div>
          <div class="palette" id="palette"></div>
          <div style="margin-top:14px">
            <button class="btn btn-success" id="btnSubmitExam" style="width:100%">交卷</button>
          </div>
        </div>
      </div>
    </div>`;

  // Bind events
  if (q.type === 'choice') {
    document.querySelectorAll('.option:not(.disabled)').forEach(el => {
      el.addEventListener('click', () => {
        const idx = parseInt(el.dataset.idx);
        mockState.answers[q.id] = idx;
        if (idx === q.answer) awardXP(XP_CORRECT);
        renderMockExam();
      });
    });
  }

  if (q.type === 'coding') {
    initCodeEditor(q);
    document.getElementById('btnRun')?.addEventListener('click', () => runCoding(q, false));
  }

  document.getElementById('btnSave')?.addEventListener('click', () => {
    if (mockState.current < mockState.questions.length - 1) {
      mockState.current++;
      renderMockExam();
    }
  });

  document.getElementById('btnSubmitExam')?.addEventListener('click', () => {
    if (confirm('确认交卷？')) submitMockExam();
  });

  renderPalette();
}

function renderPalette() {
  const el = document.getElementById('palette');
  if (!el) return;
  el.innerHTML = mockState.questions.map((q, i) => {
    let cls = 'pal-btn';
    if (i === mockState.current) cls += ' current';
    else if (mockState.answers[q.id] !== undefined) cls += ' done';
    return `<div class="${cls}" data-idx="${i}">${i + 1}</div>`;
  }).join('');
  el.querySelectorAll('.pal-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      mockState.current = parseInt(btn.dataset.idx);
      renderMockExam();
    });
  });
}

function submitMockExam() {
  clearInterval(mockState.timer);
  let correct = 0;
  const details = mockState.questions.map((q, i) => {
    const ans = mockState.answers[q.id];
    const isCorrect = ans === q.answer;
    if (isCorrect) correct++;
    return { q, ans, isCorrect, idx: i };
  });

  const total = mockState.questions.length;
  const score = correct;
  const pct = Math.round(correct / total * 100);

  state.examHistory.push({ date: new Date().toLocaleDateString('zh-CN'), score, total, pct });
  saveState();

  const detailRows = details.map(d => `
    <div class="breakdown-item">
      <span class="breakdown-num ${d.isCorrect ? 'correct' : 'wrong'}">${d.idx + 1}</span>
      <span style="flex:1;font-size:.85em">${truncate(stripHtml(d.q.question), 40)}</span>
      <span style="font-size:.8em;color:${d.isCorrect ? 'var(--success)' : 'var(--error)'}">${d.isCorrect ? '正确' : '错误'}</span>
    </div>`).join('');

  mockState.started = false;

  document.getElementById('app').innerHTML = `
    <div class="results active animate-in">
      <div class="card results-header">
        <h2>考试结束</h2>
        <div class="score-big">${score} / ${total}</div>
        <div class="results-detail">正确率 ${pct}% · 用时 ${formatTime(EXAM_TIME - mockState.timeLeft)}</div>
      </div>
      <div class="card" style="padding:16px 20px;margin-top:16px">
        <div class="section-title">答题详情</div>
        ${detailRows}
      </div>
      <div class="btn-group" style="justify-content:center;margin-top:20px">
        <button class="btn btn-primary" onclick="location.hash='#/mock'">重新考试</button>
        <button class="btn btn-outline" onclick="location.hash='#/'">返回首页</button>
      </div>
    </div>`;
}

/* ============================================================
   Review Page
   ============================================================ */
let reviewFilter = 'all';

function renderReview() {
  const wrongQs = state.wrongIds.map(id => getQuestionById(id)).filter(Boolean);

  document.getElementById('app').innerHTML = `
    <div class="practice-nav">
      <a class="back-btn" href="#/">← 返回</a>
      <span style="font-weight:700;font-size:1.05em">错题复习</span>
      <span class="wrong-count">❌ ${wrongQs.length} 题</span>
    </div>
    <div class="review-filters" id="reviewFilters">
      <button class="filter-tab active" data-f="all">全部</button>
      <button class="filter-tab" data-f="kp">按知识点</button>
    </div>
    <div id="reviewContent"></div>`;

  document.getElementById('reviewFilters').addEventListener('click', e => {
    const btn = e.target.closest('.filter-tab');
    if (!btn) return;
    document.querySelectorAll('#reviewFilters .filter-tab').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    reviewFilter = btn.dataset.f;
    renderReviewContent(wrongQs);
  });

  renderReviewContent(wrongQs);
  setActiveNav('review');
}

function renderReviewContent(wrongQs) {
  const el = document.getElementById('reviewContent');
  if (!wrongQs.length) {
    el.innerHTML = `<div class="review-empty"><div class="empty-icon">🎉</div><h3>太棒了！</h3><p class="text-muted mt-sm">没有错题，继续加油！</p></div>`;
    return;
  }

  let html = '';
  if (reviewFilter === 'kp') {
    // Group by knowledge point
    const groups = {};
    for (const q of wrongQs) {
      const kp = findKP(q.id);
      if (!groups[kp]) groups[kp] = [];
      groups[kp].push(q);
    }
    for (const [kp, qs] of Object.entries(groups)) {
      const info = QUESTION_BANK.knowledgePoints[kp];
      html += `<div class="section-title">${info ? info.title : kp} (${qs.length} 题)</div>`;
      html += qs.map(q => renderReviewCard(q)).join('');
    }
  } else {
    html = wrongQs.map(q => renderReviewCard(q)).join('');
  }
  el.innerHTML = html;
}

function renderReviewCard(q) {
  const labels = 'ABCD';
  let optionsHtml = '';
  if (q.options) {
    optionsHtml = '<div class="options">' + q.options.map((opt, i) => {
      let cls = 'option disabled';
      if (i === q.answer) cls += ' correct';
      return `<div class="${cls}"><span>${labels[i]}.</span> <span class="option-text">${opt}</span></div>`;
    }).join('') + '</div>';
  }

  return `
    <div class="question-card" style="border-top-color:var(--error)">
      <div class="question-header">
        <span class="q-type">${q.type === 'coding' ? '编程题' : (q.isJudge ? '判断题' : '选择题')}</span>
        ${q.source ? `<span class="q-type" style="background:#e8f5e9;color:#2e7d32">真题</span>` : ''}
      </div>
      <div class="q-body">${formatQuestion(q.question)}</div>
      ${optionsHtml}
      <div class="explanation" style="margin-top:10px;padding:10px;background:#f8f9ff;border-radius:6px;font-size:.88em;color:#555">
        <strong>解析：</strong>${q.explanation || ''}
      </div>
    </div>`;
}

function findKP(qId) {
  for (const [key, kp] of Object.entries(QUESTION_BANK.knowledgePoints)) {
    if (kp.questions.some(q => q.id === qId)) return key;
  }
  return 'mock';
}

/* ============================================================
   Utility
   ============================================================ */
function formatQuestion(text) {
  // Convert \n to <br>, keep <pre>/<code> tags intact
  return text.replace(/\n/g, '<br>');
}

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function formatTime(seconds) {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return m > 0 ? `${m}分${s}秒` : `${s}秒`;
}

function truncate(str, len) {
  return str.length > len ? str.slice(0, len) + '...' : str;
}

function stripHtml(html) {
  const tmp = document.createElement('div');
  tmp.innerHTML = html;
  return tmp.textContent || tmp.innerText || '';
}

function setActiveNav(section) {
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.classList.toggle('active', a.dataset.section === section);
  });
}

/* ============================================================
   Navigation HTML (injected by each page)
   ============================================================ */
function renderNav() {
  return `
    <nav class="nav">
      <a class="nav-brand" href="#/">GESP <span class="badge">L1</span></a>
      <div class="nav-links">
        <a href="#/" data-section="">首页</a>
        <a href="#/practice/kp01" data-section="practice">练习</a>
        <a href="#/mock" data-section="mock">考试</a>
        <a href="#/review" data-section="review">错题</a>
      </div>
      <div class="nav-user">
        <span class="xp-badge">Lv.${getLevel()}</span>
        <span class="xp-badge">${state.xp} XP</span>
      </div>
    </nav>`;
}

/* ============================================================
   Init
   ============================================================ */
function init() {
  // Inject nav
  document.body.insertAdjacentHTML('afterbegin', renderNav());
  document.body.classList.add('page-body');

  // Route
  window.addEventListener('hashchange', () => {
    document.getElementById('app').innerHTML = '';
    const oldNav = document.querySelector('.nav');
    if (oldNav) oldNav.outerHTML = renderNav();
    handleRoute();
  });
  handleRoute();
}

document.addEventListener('DOMContentLoaded', init);
