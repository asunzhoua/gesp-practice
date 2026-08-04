/**
 * GESP Level 1 C++ Practice System - Core Engine v2
 * Backend-integrated SPA with JWT auth
 */

/* ============================================================
   Constants
   ============================================================ */
const EXAM_TIME = 45 * 60;
const KP_NAMES = {
  // Level 1 (official GESP syllabus)
  kp1_01: '计算机基础知识', kp1_02: '集成开发环境', kp1_03: '程序的基本语句',
  kp1_04: '分支结构', kp1_05: '循环结构', kp1_06: '程序的基本概念',
  kp1_07: '基本运算', kp1_08: '基本数据类型',
  // Level 2
  kp2_01: '计算机存储与网络', kp2_02: '程序设计语言', kp2_03: '流程图',
  kp2_04: 'ASCII编码', kp2_05: '数据类型转换', kp2_06: '多层分支结构',
  kp2_07: '多层循环语句', kp2_08: '数学函数',
  // Level 3
  kp3_01: '数据编码与进制转换', kp3_02: '位运算', kp3_03: '算法的概念与描述',
  kp3_04: '一维数组', kp3_05: '字符串及函数', kp3_06: '枚举法', kp3_07: '模拟法',
  // Level 4
  kp4_01: '函数', kp4_02: '形参实参与作用域', kp4_03: '指针', kp4_04: '函数参数传递',
  kp4_05: '结构体', kp4_06: '二维及多维数组', kp4_07: '递推', kp4_08: '排序概念',
  kp4_09: '排序算法', kp4_10: '算法复杂度', kp4_11: '文件读写', kp4_12: '异常处理',
  // Level 5
  kp5_01: '初等数论', kp5_02: '高精度运算', kp5_03: '链表', kp5_04: '辗转相除法',
  kp5_05: '素数筛法', kp5_06: '唯一分解定理', kp5_07: '二分查找', kp5_08: '贪心算法',
  kp5_09: '分治算法', kp5_10: '递归', kp5_11: '算法复杂度',
  // Level 6
  kp6_01: '树的定义与遍历', kp6_02: '哈夫曼树', kp6_03: '完全二叉树',
  kp6_04: '二叉排序树', kp6_05: '哈夫曼编码', kp6_06: '格雷编码', kp6_07: '深度优先搜索',
  kp6_08: '宽度优先搜索', kp6_09: '二叉树搜索', kp6_10: '简单动态规划',
  kp6_11: '面向对象思想', kp6_12: '类', kp6_13: '栈、队列、循环队列',
  // Level 7
  kp7_01: '数学库函数', kp7_02: '复杂动态规划', kp7_03: '图的定义及遍历',
  kp7_04: '图论基本算法', kp7_05: '哈希表',
  // Level 8
  kp8_01: '计数原理', kp8_02: '排列与组合', kp8_03: '杨辉三角', kp8_04: '倍增法',
  kp8_05: '代数与平面几何', kp8_06: '图论算法综合', kp8_07: '算法优化',
  mock: '模拟考试'
};
const EXAM_TYPE_MAP = { mock: '模拟测试', formal: '正式考试' };

/* GESP multi-level state (L1-L8 in one site) */
let currentLevel = parseInt(localStorage.getItem('gesp_level') || '1', 10) || 1;
function setLevel(n) {
  currentLevel = n;
  localStorage.setItem('gesp_level', String(n));
  if (location.hash === '#/' || location.hash === '') {
    document.getElementById('app').innerHTML = '';
    handleRoute();
  } else {
    location.hash = '#/';
  }
}
// Official kp codes for a level (variable count per level)
function levelKps(level) {
  const perLevel = {
    1: ['kp1_01','kp1_02','kp1_03','kp1_04','kp1_05','kp1_06','kp1_07','kp1_08'],
    2: ['kp2_01','kp2_02','kp2_03','kp2_04','kp2_05','kp2_06','kp2_07','kp2_08'],
    3: ['kp3_01','kp3_02','kp3_03','kp3_04','kp3_05','kp3_06','kp3_07'],
    4: ['kp4_01','kp4_02','kp4_03','kp4_04','kp4_05','kp4_06','kp4_07','kp4_08','kp4_09','kp4_10','kp4_11','kp4_12'],
    5: ['kp5_01','kp5_02','kp5_03','kp5_04','kp5_05','kp5_06','kp5_07','kp5_08','kp5_09','kp5_10','kp5_11'],
    6: ['kp6_01','kp6_02','kp6_03','kp6_04','kp6_05','kp6_06','kp6_07','kp6_08','kp6_09','kp6_10','kp6_11','kp6_12','kp6_13'],
    7: ['kp7_01','kp7_02','kp7_03','kp7_04','kp7_05'],
    8: ['kp8_01','kp8_02','kp8_03','kp8_04','kp8_05','kp8_06','kp8_07']
  };
  return perLevel[level] || perLevel[1];
}
function kpLabelOf(kp) {
  if (kp === 'mock') return '模拟';
  const idx = String(kp).split('_')[1] || String(kp).slice(2);
  return idx;
}

/* Cartoon avatar sets (girl / boy) */
const AVATARS = {
  girl: ['👧', '🧚‍♀️', '🐰', '🦄', '🦋', '👑', '🎀', '🌸', '🍓', '🧁'],
  boy: ['👦', '🦸‍♂️', '🧑‍🚀', '🦖', '🐯', '🚀', '⚽', '🤖', '🎮', '🦁']
};
function getAvatar(user) { return (user && user.avatar) || '😊'; }

/* --- Emotional encouragement (answer feedback) --- */
const CHEER_CORRECT = ['🎉 太棒了，完全正确！', '🌟 你真厉害！', '💪 答对了，继续保持！', '🚀 又拿下了一题，冲呀！', '✨ 完美，你越来越棒了！', '🎯 漂亮，轻松搞定！'];
const CHEER_WRONG = ['💪 没关系，看看解析就懂了！', '🌈 别灰心，错一题多学一招！', '🍀 记住这个知识点，下次就对啦！', '📖 失败是成功之母，看完解析再来一次！', '😊 别着急，慢慢来，你一定能掌握！', '🧠 这个有点难，多练几次就会了！'];
function cheer(isCorrect) {
  const pool = isCorrect ? CHEER_CORRECT : CHEER_WRONG;
  return pool[Math.floor(Math.random() * pool.length)];
}
function completeCheer(acc) {
  if (acc >= 90) return '🎉 太棒了，你几乎全对！继续保持！';
  if (acc >= 70) return '🌟 很不错，正确率很高，继续加油！';
  if (acc >= 50) return '💪 不错哦，再多练练会更棒！';
  return '🌈 别灰心，每一次练习都在进步，加油！';
}

/* ============================================================
   Exam State
   ============================================================ */
let mockState = { questions: [], answers: {}, codeAnswers: {}, codeResults: {}, current: 0, timer: null, timeLeft: EXAM_TIME, started: false, submitting: false };
let practiceState = { questions: [], current: 0, answers: {}, kp: '', selectedIdx: -1 };
let reviewFilter = 'all';

/* ============================================================
   Router
   ============================================================ */
function navigate(hash) { location.hash = hash; }

// Navigate to a hash; if we are already on it (no hashchange fires), force a re-render.
// Fixes exits/backs from modes entered directly (e.g. today review from the dashboard).
function exitTo(hash, msg) {
  if (msg && !confirm(msg)) return;
  if (location.hash === hash) {
    document.getElementById('app').innerHTML = '';
    handleRoute();
  } else {
    location.hash = hash;
  }
}

function handleRoute() {
  const nav = document.querySelector('.nav');

  // Prevent silently leaving an active exam
  if (mockState.started && mockState.timeLeft > 0 && !mockState.submitting && location.hash !== '#/mock') {
    if (!confirm('考试还在进行中，离开会丢失答题进度，确定离开吗？')) {
      location.hash = '#/mock';
      return;
    }
  }

  // Clean up exam timer if navigating away
  if (mockState.timer && location.hash !== '#/mock') {
    clearInterval(mockState.timer);
    mockState.timer = null;
    if (mockState.started && mockState.timeLeft > 0) {
      mockState.started = false;
    }
  }

  if (!API.isLoggedIn()) {
    if (nav) nav.style.display = 'none';
    renderLogin();
    return;
  }

  if (nav) nav.style.display = '';

  const hash = location.hash || '#/';
  const [path, ...rest] = hash.replace(/^#\/?/, '').split('/');

  switch (path) {
    case '': renderDashboard(); break;
    case 'practice': renderPractice(rest[0] || 'kp01'); break;
    case 'coding': rest[0] ? renderCodingPractice(rest[0]) : renderCodingHome(); break;
    case 'mock': renderMock(); break;
    case 'review': renderReview(); break;
    case 'teacher': renderTeacher(); break;
    case 'logout': API.logout(); renderLogin(); return;
    default: renderDashboard();
  }
}

/* ============================================================
   Login / Register
   ============================================================ */
function renderLogin() {
  document.getElementById('app').innerHTML = `
    <div class="auth-page">
      <div class="auth-card animate-in">
        <div class="auth-logo">
          <h1>GESP <span class="badge">L1</span></h1>
          <p class="text-muted">C++ 编程练习平台</p>
          <p class="text-muted" style="font-size:0.85em">孙老师思维课堂</p>
        </div>
        <div id="authForm">
          <div class="form-group">
            <input type="text" id="authUsername" placeholder="用户名" class="form-input" autocomplete="username">
          </div>
          <div class="form-group">
            <input type="password" id="authPassword" placeholder="密码" class="form-input" autocomplete="current-password">
          </div>
          <div id="authNicknameGroup" class="form-group" style="display:none">
            <input type="text" id="authNickname" placeholder="你的昵称（显示名）" class="form-input">
          </div>
          <div id="authError" class="auth-error" style="display:none"></div>
          <button id="authSubmit" class="btn btn-primary btn-block" onclick="doLogin()">登录</button>
          <div class="auth-toggle">
            <span id="authToggleText">没有账号？</span>
            <a href="javascript:void(0)" id="authToggleLink" onclick="toggleAuthMode()">注册新账号</a>
          </div>
        </div>
      </div>
    </div>`;
}

let isRegisterMode = false;
function toggleAuthMode() {
  isRegisterMode = !isRegisterMode;
  document.getElementById('authNicknameGroup').style.display = isRegisterMode ? 'block' : 'none';
  document.getElementById('authSubmit').textContent = isRegisterMode ? '注册' : '登录';
  document.getElementById('authToggleText').textContent = isRegisterMode ? '已有账号？' : '没有账号？';
  document.getElementById('authToggleLink').textContent = isRegisterMode ? '去登录' : '注册新账号';
  document.getElementById('authError').style.display = 'none';
}

async function doLogin() {
  const username = document.getElementById('authUsername').value.trim();
  const password = document.getElementById('authPassword').value;
  const errEl = document.getElementById('authError');

  if (!username || !password) { errEl.textContent = '请填写用户名和密码'; errEl.style.display = 'block'; return; }

  try {
    if (isRegisterMode) {
      const nickname = document.getElementById('authNickname').value.trim();
      if (!nickname) { errEl.textContent = '请填写昵称'; errEl.style.display = 'block'; return; }
      await API.register(username, password, nickname);
    } else {
      await API.login(username, password);
    }
    location.hash = '#/';
    handleRoute();
  } catch (e) {
    errEl.textContent = e.message;
    errEl.style.display = 'block';
  }
}

/* ============================================================
   Dashboard
   ============================================================ */
async function renderDashboard() {
  const user = API.getUser();
  const app = document.getElementById('app');
  app.innerHTML = `<div class="hero animate-in"><p class="text-muted">加载中...</p></div>`;

  let stats = { totalAnswered: 0, totalCorrect: 0, totalWrong: 0, byKp: [], examHistory: [],
    totalQuestions: 513, completedKPs: 0, dailyGoal: 20, todayAnswered: 0, todayCorrect: 0, reviewStreak: 0 };
  let schedule = { todayReview: [], overdue: [], upcoming: [], reviewStats: { totalWrong: 0, reviewedToday: 0, mastered: 0, streak: 0 } };
  try {
    [stats, schedule] = await Promise.all([API.getStats(currentLevel), API.getReviewSchedule(currentLevel)]);
  } catch {}

  const progressPct = stats.totalAnswered > 0 ? Math.round(stats.totalCorrect / stats.totalAnswered * 100) : 0;
  const goalPct = Math.min(100, Math.round(stats.todayAnswered / stats.dailyGoal * 100));
  const reviewDue = schedule.todayReview.length + schedule.overdue.length;
  const reviewDone = schedule.reviewStats.reviewedToday;
  const reviewTotal = reviewDue + reviewDone;
  const reviewPct = reviewTotal > 0 ? Math.round(reviewDone / reviewTotal * 100) : 0;

  // Daily goal ring SVG
  const ringR = 56, ringC = 2 * Math.PI * ringR;
  const ringOffset = ringC * (1 - goalPct / 100);
  const goalRing = `<svg width="140" height="140" viewBox="0 0 140 140">
    <circle cx="70" cy="70" r="${ringR}" fill="none" stroke="rgba(255,255,255,.2)" stroke-width="8"/>
    <circle cx="70" cy="70" r="${ringR}" fill="none" stroke="${goalPct >= 100 ? '#4ade80' : '#fff'}"
      stroke-width="8" stroke-linecap="round" stroke-dasharray="${ringC}" stroke-dashoffset="${ringOffset}"
      transform="rotate(-90 70 70)" style="transition: stroke-dashoffset .6s"/>
    <text x="70" y="64" text-anchor="middle" font-size="32" font-weight="800" fill="#fff">${stats.todayAnswered}</text>
    <text x="70" y="84" text-anchor="middle" font-size="15" font-weight="600" fill="rgba(255,255,255,.75)">/ ${stats.dailyGoal} 题</text>
  </svg>`;

  // Streak badge
  const streakBadge = stats.reviewStreak > 0
    ? `<span class="streak-badge">🔥 连续 ${stats.reviewStreak} 天</span>`
    : '';

  // KP cards
  let kpCards = '';
  const kps8 = levelKps(currentLevel);
  kps8.forEach((k, i) => {
    const kpStat = stats.byKp.find(x => x.kp === k);
    const done = kpStat ? kpStat.answered : 0;
    const correct = kpStat ? kpStat.correct : 0;
    const total = stats.kpCounts?.[k] || 0;
    const pct = total > 0 ? Math.round(done / total * 100) : 0;
    kpCards += `
      <div class="kp-card animate-in ${pct >= 100 ? 'completed' : ''}" data-kp="${k}" onclick="navigate('#/practice/${k}')" style="animation-delay:${i * 0.05}s">
        <div class="kp-card-header">
          <span class="kp-num">${kpLabelOf(k)}</span>
          ${pct >= 100 ? '<span class="kp-star">⭐</span>' : `<span class="kp-progress-text">${pct}%</span>`}
        </div>
        <div class="kp-card-title">${KP_NAMES[k]}</div>
        <div class="kp-progress-bar"><div class="kp-progress-fill" style="width:${pct}%"></div></div>
        <div class="kp-card-stats">${done}/${total} 题</div>
      </div>`;
  });

  // Review task card
  let reviewCard = '';
  if (reviewDue > 0) {
    reviewCard = `
      <div class="review-task-card animate-in" onclick="startTodayReview()">
        <div class="review-task-header">
          <div class="review-task-icon">📖</div>
          <div class="review-task-info">
            <h3>今日复习任务</h3>
            <p>艾宾豪斯遗忘曲线提醒你复习这些题目</p>
          </div>
        </div>
        <div class="review-task-stats">
          <div class="review-stat"><span class="review-stat-num">${reviewDue}</span><span class="review-stat-label">待复习</span></div>
          <div class="review-stat"><span class="review-stat-num text-success">${reviewDone}</span><span class="review-stat-label">已完成</span></div>
          <div class="review-stat"><span class="review-stat-num">${schedule.reviewStats.mastered}</span><span class="review-stat-label">已掌握</span></div>
        </div>
        <div class="review-progress-bar"><div class="review-progress-fill" style="width:${reviewPct}%"></div></div>
        ${schedule.upcoming?.length ? `<div class="review-upcoming">
          <div class="review-upcoming-title">接下来 7 天还有 ${schedule.upcoming.length} 题复习</div>
          ${schedule.upcoming.slice(0, 3).map(u => `
            <div class="review-upcoming-item">
              <span class="q-kp">${KP_NAMES[u.kp] || u.kp}</span>
              <span class="review-upcoming-text">${escapeHtml(u.title || '')}</span>
              <span class="review-upcoming-date">${u.nextReview}</span>
            </div>`).join('')}
        </div>` : ''}
        <button class="btn btn-primary btn-block" style="margin-top:12px">开始今日复习 →</button>
      </div>`;
  } else if (schedule.reviewStats.totalWrong > 0) {
    reviewCard = `
      <div class="review-task-card review-task-done animate-in">
        <div class="review-task-header">
          <div class="review-task-icon">🎉</div>
          <div class="review-task-info">
            <h3>今日复习已完成！</h3>
            <p>太棒了，所有待复习题目都已完成</p>
          </div>
        </div>
        <div class="review-task-stats">
          <div class="review-stat"><span class="review-stat-num text-success">${schedule.reviewStats.mastered}</span><span class="review-stat-label">已掌握</span></div>
          <div class="review-stat"><span class="review-stat-num">${schedule.reviewStats.totalWrong - schedule.reviewStats.mastered}</span><span class="review-stat-label">复习中</span></div>
        </div>
      </div>`;
  } else {
    reviewCard = `
      <div class="review-task-card review-task-empty animate-in">
        <div class="review-task-header">
          <div class="review-task-icon">✨</div>
          <div class="review-task-info">
            <h3>暂无错题</h3>
            <p>继续保持，所有题目都答对了！</p>
          </div>
        </div>
      </div>`;
  }

  // Radar chart
  const radarHtml = renderRadarChart(stats.byKp || [], { accuracyMode: true });

  // Simple week summary (clear for kids): last active days + total questions, no chart
  const weekData = (stats.dailyStats || []).slice(0, 7); // newest first
  const weekTotal = weekData.reduce((s, d) => s + (d.count || 0), 0);
  const trendHtml = weekData.length ? `<div class="section section-week animate-in">
    <h2 class="section-title">📚 本周学习</h2>
    <div class="week-card">
      <p class="week-summary">这 <b>${weekData.length}</b> 天你一共做了 <b>${weekTotal}</b> 道题${weekTotal > 0 ? '，真棒，继续加油！🎉' : '，从今天开始吧！'}</p>
      <div class="week-row">
        ${weekData.map(d => `<div class="week-day">
          <div class="week-day-date">${(d.day || '').slice(5)}</div>
          <div class="week-day-count">${d.count || 0}<span> 题</span></div>
        </div>`).join('')}
      </div>
    </div>
  </div>` : '';

  // Exam history
  let examHtml = '';
  if (stats.examHistory.length > 0) {
    const last = stats.examHistory[0];
    examHtml = `<div class="stat-card"><div class="stat-icon">📊</div><div class="stat-value">${last.score}%</div><div class="stat-label">最近考试</div></div>`;
  }

  app.innerHTML = `
    <div class="dashboard-hero animate-in">
      <div class="dashboard-hero-text">
        <div class="hero-avatar-row">
          <span class="hero-avatar" title="点击更换头像" onclick="openAvatarPicker()">${escapeHtml(getAvatar(user))}</span>
          <h1>Hi, ${escapeHtml(user?.nickname || '同学')}！👋</h1>
        </div>
        <p class="subtitle">今天继续挑战吧 ${streakBadge}</p>
        <div class="hero-stats">
          <div class="hero-stat"><span class="hero-stat-val">${stats.totalAnswered}</span><span class="hero-stat-lbl">已做题</span></div>
          <div class="hero-stat"><span class="hero-stat-val">${progressPct}%</span><span class="hero-stat-lbl">正确率</span></div>
          <div class="hero-stat"><span class="hero-stat-val">${stats.totalWrong}</span><span class="hero-stat-lbl">待复习</span></div>
          <div class="hero-stat"><span class="hero-stat-val">${stats.todayAnswered}</span><span class="hero-stat-lbl">今日已做</span></div>
        </div>
        <div class="tags">
          <span class="tag tag-primary">CCF 认证</span>
          <span class="tag tag-accent">${stats.totalAnswered}/${stats.totalQuestions} 题</span>
          ${stats.completedKPs > 0 ? `<span class="tag tag-success">${stats.completedKPs}/8 知识点</span>` : ''}
        </div>
      </div>
      <div class="dashboard-hero-ring">
        ${goalRing}
        <span class="ring-label">今日目标</span>
      </div>
    </div>

    ${reviewCard}

    <div class="dashboard-grid animate-in">
      <div class="section">
        <h2 class="section-title">知识掌握</h2>
        ${radarHtml ? `<div class="radar-chart">${radarHtml}</div>` : '<p class="text-muted text-center" style="padding:40px">暂无数据</p>'}
      </div>
    </div>

    ${trendHtml}

    <div class="section animate-in">
      <h2 class="section-title">知识点练习</h2>
      <div class="kp-grid">${kpCards}</div>
    </div>
    <div class="section animate-in">
      <div class="quick-actions">
        <a href="#/mock" class="action-card"><div class="action-icon">🎓</div><div class="action-title">模拟考试</div><div class="action-desc">30题 · 45分钟</div></a>
        <a href="#/coding" class="action-card"><div class="action-icon">💻</div><div class="action-title">编程练习</div><div class="action-desc">8个模块 · 在线编译</div></a>
        <a href="#/review" class="action-card"><div class="action-icon">📖</div><div class="action-title">错题复习</div><div class="action-desc">${stats.totalWrong} 题待复习</div></a>
        ${user?.role === 'teacher' ? '<a href="#/teacher" class="action-card"><div class="action-icon">👩‍🏫</div><div class="action-title">教师面板</div><div class="action-desc">查看学生进度</div></a>' : ''}
      </div>
    </div>`;
  setActiveNav('');
  renderBottomTab('');
}

/* ============================================================
   Ebbinghaus Review Mode
   ============================================================ */
let reviewState = { questions: [], current: 0, answers: {}, finished: false };

async function startTodayReview() {
  const app = document.getElementById('app');
  app.innerHTML = `<div class="practice-nav"><a class="back-btn" href="javascript:void(0)" onclick="exitTo('#/')">← 返回</a><span style="font-weight:700">今日复习</span></div><div class="text-center" style="padding:40px"><p class="text-muted">加载复习题目...</p></div>`;

  let schedule = {};
  try { schedule = await API.getReviewSchedule(currentLevel); } catch {}
  window._lastSchedule = schedule;

  // Combine overdue + todayReview, then fetch full question data
  const reviewIds = [...(schedule.overdue || []), ...(schedule.todayReview || [])].map(r => r.questionId);
  if (reviewIds.length === 0) {
    app.innerHTML = `<div class="practice-nav"><a class="back-btn" href="javascript:void(0)" onclick="exitTo('#/')">← 返回</a><span style="font-weight:700">今日复习</span></div>
      <div class="review-empty"><div class="empty-icon">🎉</div><h3>太棒了！</h3><p class="text-muted">今天没有需要复习的题目，继续加油！</p></div>`;
    return;
  }

  // Fetch wrong questions and filter to those in our review list
  let allWrong = [];
  try { allWrong = await API.getWrongQuestions(currentLevel); } catch {}
  // Filter out coding questions (no code editor in review mode)
  const reviewQuestions = allWrong.filter(q => reviewIds.includes(q.id) && q.type !== 'coding');

  if (reviewQuestions.length === 0) {
    app.innerHTML = `<div class="practice-nav"><a class="back-btn" href="javascript:void(0)" onclick="exitTo('#/')">← 返回</a><span style="font-weight:700">今日复习</span></div>
      <div class="review-empty"><div class="empty-icon">🎉</div><h3>太棒了！</h3><p class="text-muted">所有待复习题目都已完成！</p></div>`;
    return;
  }

  reviewState = { questions: reviewQuestions, current: 0, answers: {}, finished: false };
  renderBottomTab('review');
  renderReviewQuestion();
}

function renderReviewQuestion() {
  const app = document.getElementById('app');
  const { questions, current, finished } = reviewState;

  if (finished) {
    // Show summary
    const total = Object.keys(reviewState.answers).length;
    const correct = Object.values(reviewState.answers).filter(a => a).length;
    app.innerHTML = `
      <div class="practice-nav"><a class="back-btn" href="javascript:void(0)" onclick="exitTo('#/')">← 返回</a><span style="font-weight:700">复习完成</span></div>
      <div class="review-summary animate-in">
        <div class="review-summary-icon">🎉</div>
        <h2>今日复习完成！</h2>
        <div class="stats-grid" style="margin:20px 0;max-width:400px;margin-left:auto;margin-right:auto">
          <div class="stat-card"><div class="stat-icon">📝</div><div class="stat-value">${total}</div><div class="stat-label">复习题数</div></div>
          <div class="stat-card"><div class="stat-icon">✅</div><div class="stat-value">${correct}</div><div class="stat-label">答对</div></div>
          <div class="stat-card"><div class="stat-icon">${correct === total ? '🌟' : '📖'}</div><div class="stat-value">${total > 0 ? Math.round(correct/total*100) : 0}%</div><div class="stat-label">正确率</div></div>
        </div>
        <p class="text-muted" style="margin:16px 0">${correct === total ? completeCheer(100) : completeCheer(Math.round(correct / total * 100)) + ' 错题已安排到下次复习，记得再来哦！'}</p>
        <button class="btn btn-primary" onclick="navigate('#/')">返回首页</button>
      </div>`;
    return;
  }

  const q = questions[current];
  const labels = 'ABCD';
  const isAnswered = reviewState.answers[q.id] !== undefined;
  const selectedIdx = reviewState.answers[q.id]?.selected;
  const isCorrect = reviewState.answers[q.id]?.correct;
  const scheduleItem = [...(window._lastSchedule?.overdue || []), ...(window._lastSchedule?.todayReview || [])].find(r => r.questionId === q.id);

  let optionsHtml = '';
  if (q.options) {
    optionsHtml = '<div class="options">' + q.options.map((opt, i) => {
      let cls = 'option';
      if (isAnswered) {
        cls += ' disabled';
        if (i === q.answer) cls += ' correct';
        if (i === selectedIdx && !isCorrect) cls += ' incorrect';
      } else if (i === selectedIdx) {
        cls += ' selected';
      }
      return `<div class="${cls}" onclick="selectReviewOption(${i})"><span>${labels[i]}.</span> <span class="option-text">${escapeHtml(decodeHtmlEntities(opt))}</span></div>`;
    }).join('') + '</div>';
  }

  let feedbackHtml = '';
  if (isAnswered) {
    const fbClass = isCorrect ? 'ok' : 'fail';
    const fbIcon = isCorrect ? '✓' : '✗';
    const fbText = isCorrect ? cheer(true) : cheer(false) + ' 正确答案是 ' + (labels[q.answer] ?? '?');
    feedbackHtml = `<div class="feedback show ${fbClass}">
      <span class="fb-icon">${fbIcon}</span> ${fbText}
      ${q.explanation ? `<div class="explanation">${escapeHtml(q.explanation)}</div>` : ''}
    </div>`;
  }

  const progressPct = Math.round((current / questions.length) * 100);

  app.innerHTML = `
    <div class="practice-nav">
      <a class="back-btn" href="javascript:void(0)" onclick="exitTo('#/', '确定退出复习？')">← 退出</a>
      <span style="font-weight:700">📖 复习 (${current + 1}/${questions.length})</span>
      ${scheduleItem ? `<span class="review-round-badge">第${scheduleItem.round}轮</span>` : ''}
    </div>
    <div class="q-progress"><div class="q-progress-bar"><div class="q-progress-fill" style="width:${progressPct}%"></div></div></div>
    <div class="question-card animate-in">
      <div class="question-header">
        <span class="q-type">${q.type === 'coding' ? '编程题' : (q.isJudge ? '判断题' : '选择题')}</span>
        <span class="q-kp">${KP_NAMES[q.kp] || q.kp}</span>
        ${q.source ? `<span class="q-source">真题</span>` : ''}
      </div>
      <div class="question-title">${formatQuestionTitle(q.title)}</div>
      ${optionsHtml}
      ${feedbackHtml}
    </div>
    <div class="q-nav">
      ${isAnswered ? `<button class="btn btn-primary" onclick="nextReviewQuestion()">${current < questions.length - 1 ? '下一题 →' : '完成复习'}</button>` : ''}
    </div>`;
}

function selectReviewOption(idx) {
  if (reviewState.answers[reviewState.questions[reviewState.current].id] !== undefined) return;
  const q = reviewState.questions[reviewState.current];
  const isCorrect = idx === q.answer;
  reviewState.answers[q.id] = { selected: idx, correct: isCorrect };
  API.submitAnswer(q.id, idx, isCorrect).catch(() => {});
  renderReviewQuestion();
}

function nextReviewQuestion() {
  if (reviewState.current < reviewState.questions.length - 1) {
    reviewState.current++;
    renderReviewQuestion();
  } else {
    reviewState.finished = true;
    renderReviewQuestion();
  }
}

/* ============================================================
   Coding Answer Formatter
   ============================================================ */
function formatCodingAnswer(text) {
  if (!text) return '';
  const parts = text.split(/```(?:cpp|c\+\+)?\n?([\s\S]*?)```/);
  let html = '';
  for (let i = 0; i < parts.length; i++) {
    if (i % 2 === 0 && parts[i].trim()) {
      const escaped = parts[i].replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
      const lines = escaped.split('\n');
      const processed = lines.map(line => {
        if (line.trim().startsWith('//') || line.trim().startsWith('*') || line.trim().startsWith('/*')) {
          return '<span class="code-comment">' + line + '</span>';
        }
        return line;
      }).join('\n');
      html += '<pre class="code-block">' + processed + '</pre>';
    } else if (i % 2 === 1 && parts[i].trim()) {
      const escaped = parts[i].replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
      const lines = escaped.split('\n');
      const processed = lines.map(line => {
        if (line.trim().startsWith('//') || line.trim().startsWith('*') || line.trim().startsWith('/*')) {
          return '<span class="code-comment">' + line + '</span>';
        }
        return line;
      }).join('\n');
      html += '<pre class="code-block">' + processed + '</pre>';
    }
  }
  return html;
}

// Render a question title that may contain <pre><code> code blocks (read-the-code
// questions) as proper multi-line code, instead of escaping the tags and collapsing
// every newline into one long line. Titles store pre-escaped HTML (e.g. &lt;&lt;),
// so decode entities first, then re-escape for insertion.
function decodeHtmlEntities(s) {
  return String(s || '')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&amp;/g, '&');
}
function formatQuestionTitle(html) {
  if (!html) return '';
  let out = '';
  const parts = html.split(/<pre><code>([\s\S]*?)<\/code><\/pre>/);
  for (let i = 0; i < parts.length; i++) {
    if (i % 2 === 1) {
      out += '<pre class="question-code">' + escapeHtml(decodeHtmlEntities(parts[i])) + '</pre>';
    } else {
      let seg = parts[i].replace(/<p>/g, '').replace(/<\/p>/g, '').replace(/<br\s*\/?>/gi, '\n');
      seg = seg.split(/<code>([\s\S]*?)<\/code>/).map((s, j) =>
        j % 2 === 1 ? '<code>' + escapeHtml(decodeHtmlEntities(s)) + '</code>' : escapeHtml(decodeHtmlEntities(s))
      ).join('');
      out += seg;
    }
  }
  return out;
}

/* ============================================================
   Practice
   ============================================================ */
async function renderPractice(kp) {
  const app = document.getElementById('app');
  app.innerHTML = `<div class="practice-nav"><a class="back-btn" href="javascript:void(0)" onclick="exitTo('#/')">← 返回</a><span style="font-weight:700">${KP_NAMES[kp] || kp}</span></div><div class="text-center" style="padding:40px"><p class="text-muted">加载中...</p></div>`;

  let questions = [];
  try { questions = await API.getQuestions(kp); } catch {}
  // Skip coding questions in practice mode (no code editor available)
  questions = questions.filter(q => q.type !== 'coding');

  practiceState = { questions, current: 0, answers: {}, kp, selectedIdx: -1 };
  renderBottomTab('practice');
  renderPracticeQuestion();
}

function renderPracticeQuestion() {
  const { questions, current, answers, kp } = practiceState;
  if (current >= questions.length) { renderPracticeComplete(); return; }

  const q = questions[current];
  const a = answers[q.id];
  const labels = 'ABCD';
  const diffLabel = { 1: '基础', 2: '进阶', 3: '挑战' };
  const diffClass = { 1: 'easy', 2: 'medium', 3: 'hard' };

  let optionsHtml = '';
  if (q.options) {
    const answered = a !== undefined;
    const tmpSel = practiceState.selectedIdx;
    optionsHtml = '<div class="options">' + q.options.map((opt, i) => {
      let cls = 'option';
      if (answered) {
        cls += ' disabled';
        if (i === a.answer) cls += ' correct';
        else if (i === a.selected && !a.isCorrect) cls += ' incorrect';
      } else if (tmpSel === i) {
        cls += ' selected';
      }
      return `<div class="${cls}" data-idx="${i}" onclick="selectPracticeAnswer(${i})"><span>${labels[i]}.</span> <span class="option-text">${escapeHtml(decodeHtmlEntities(opt))}</span></div>`;
    }).join('') + '</div>';
  }

  const explanation = a !== undefined
    ? (q.options && q.options.length > 0
      ? `<div class="explanation ${a.isCorrect ? 'correct' : 'incorrect'}">
          <strong>${cheer(a.isCorrect)}</strong>
          <p>${escapeHtml(a.explanation || '')}</p>
        </div>`
      : `<div class="explanation correct">
          <strong>📖 参考解析</strong>
          ${q.answer_text ? `<div class="coding-solution">${formatCodingAnswer(q.answer_text)}</div>` : ''}
        </div>`)
    : '';

  document.getElementById('app').innerHTML = `
    <div class="practice-nav">
      <a class="back-btn" href="javascript:void(0)" onclick="exitTo('#/')">← 返回</a>
      <span style="font-weight:700">${KP_NAMES[kp] || kp}</span>
      <span class="practice-count">${current + 1}/${questions.length}</span>
    </div>
    <div class="question-card animate-in">
      <div class="question-header">
        <span class="q-type">${q.type === 'coding' ? '编程题' : (q.isJudge ? '判断题' : '选择题')}</span>
        <span class="q-diff ${diffClass[q.difficulty] || ''}">${diffLabel[q.difficulty] || ''}</span>
        ${q.source ? `<span class="q-source">真题</span>` : ''}
      </div>
      <div class="question-title">${formatQuestionTitle(q.title)}</div>
      ${optionsHtml}
      ${explanation}
      <div class="question-nav">
        <button class="btn btn-secondary" onclick="practicePrev()" ${current === 0 ? 'disabled' : ''}>上一题</button>
        ${answers[q.id] !== undefined
          ? `<button class="btn btn-primary" onclick="practiceNext()">${current < questions.length - 1 ? '下一题' : '完成'}</button>`
          : `<button class="btn btn-primary" onclick="practiceCheck()" id="checkBtn" ${(!q.options || q.options.length === 0) ? '' : (practiceState.selectedIdx < 0 ? 'disabled' : '')}>检查答案</button>`
        }
      </div>
    </div>
    <div class="answer-palette">
      ${questions.map((qq, i) => {
        let cls = 'palette-item';
        if (i === current) cls += ' current';
        if (answers[qq.id] !== undefined) cls += (answers[qq.id] && answers[qq.id].isCorrect) ? ' correct' : ' wrong';
        return `<div class="${cls}" onclick="practiceJump(${i})">${i + 1}</div>`;
      }).join('')}
    </div>`;
}

function selectPracticeAnswer(idx) {
  const q = practiceState.questions[practiceState.current];
  if (practiceState.answers[q.id] !== undefined) return;

  practiceState.selectedIdx = idx;
  document.querySelectorAll('.option').forEach(el => el.classList.remove('selected'));
  const opts = document.querySelectorAll('.option');
  if (opts[idx]) opts[idx].classList.add('selected');
  const checkBtn = document.getElementById('checkBtn');
  if (checkBtn) checkBtn.disabled = false;
}

async function practiceCheck() {
  const q = practiceState.questions[practiceState.current];
  if (practiceState.answers[q.id] !== undefined) return; // prevent double-check race
  const hasOptions = q.options && q.options.length > 0;
  const selected = hasOptions ? practiceState.selectedIdx : -1;
  const isCorrect = hasOptions ? (selected === q.answer) : false;

  practiceState.selectedIdx = -1;
  try {
    const res = await API.submitAnswer(q.id, selected, isCorrect);
    practiceState.answers[q.id] = {
      selected,
      isCorrect: res.isCorrect === 1 || res.isCorrect === true,
      answer: res.answer,
      explanation: res.explanation
    };
  } catch {
    practiceState.answers[q.id] = { selected, isCorrect: false, answer: null, explanation: '' };
  }
  renderPracticeQuestion();
}

function practiceNext() {
  practiceState.current++;
  practiceState.selectedIdx = -1;
  renderPracticeQuestion();
}

function practicePrev() {
  if (practiceState.current > 0) {
    practiceState.current--;
    practiceState.selectedIdx = -1;
    renderPracticeQuestion();
  }
}

function practiceJump(idx) {
  practiceState.current = idx;
  practiceState.selectedIdx = -1;
  renderPracticeQuestion();
}

function renderPracticeComplete() {
  const { answers, questions } = practiceState;
  let correct = 0;
  questions.forEach(q => { if (answers[q.id] && answers[q.id].isCorrect) correct++; });
  const acc = questions.length > 0 ? Math.round(correct / questions.length * 100) : 0;

  document.getElementById('app').innerHTML = `
    <div class="practice-nav"><a class="back-btn" href="javascript:void(0)" onclick="exitTo('#/')">← 返回</a><span style="font-weight:700">${KP_NAMES[practiceState.kp]}</span></div>
    <div class="start-screen animate-in">
      <div class="card">
        <h2>🎉 练习完成！</h2>
        <div class="stats-grid" style="margin:20px 0">
          <div class="stat-card"><div class="stat-value">${correct}</div><div class="stat-label">正确</div></div>
          <div class="stat-card"><div class="stat-value">${questions.length - correct}</div><div class="stat-label">错误</div></div>
          <div class="stat-card"><div class="stat-value">${acc}%</div><div class="stat-label">正确率</div></div>
        </div>
        <p class="complete-cheer">${completeCheer(acc)}</p>
        <button class="btn btn-primary" onclick="navigate('#/practice/${practiceState.kp}')">再练一次</button>
        <button class="btn btn-secondary" onclick="navigate('#/')" style="margin-left:8px">返回首页</button>
      </div>
    </div>`;
}

/* ============================================================
   Coding Practice (编程题专项)
   ============================================================ */
let codingState = { questions: [], current: 0, kp: '', codes: {}, results: {} };

async function renderCodingHome() {
  const app = document.getElementById('app');
  app.innerHTML = `<div class="practice-nav"><a class="back-btn" href="javascript:void(0)" onclick="exitTo('#/')">← 返回</a><span style="font-weight:700">编程题练习</span></div><div class="text-center" style="padding:40px"><p class="text-muted">加载中...</p></div>`;

  let kps = [];
  try { kps = await API.getCodingKPs(currentLevel); } catch {}

  const grid = kps.map((kp, i) => `
    <div class="kp-card animate-in" data-kp="${kp.id}" onclick="navigate('#/coding/${kp.id}')" style="animation-delay:${i * 0.05}s">
      <div class="kp-card-header">
        <span class="kp-num">${kpLabelOf(kp.id)}</span>
        <span class="kp-progress-text">💻</span>
      </div>
      <div class="kp-card-title">${escapeHtml(kp.title)}</div>
      <div class="kp-card-stats">${kp.count} 道编程题</div>
    </div>
  `).join('');

  app.innerHTML = `
    <div class="practice-nav"><a class="back-btn" href="javascript:void(0)" onclick="exitTo('#/')">← 返回</a><span style="font-weight:700">编程题练习</span></div>
    <div class="section animate-in">
      <h2 class="section-title">选择知识点</h2>
      <p class="text-muted" style="margin-bottom:16px">每个模块精选编程题，编写代码后在线编译运行</p>
      <div class="kp-grid">${grid}</div>
    </div>`;
  setActiveNav('coding');
  renderBottomTab('coding');
}

async function renderCodingPractice(kp) {
  const app = document.getElementById('app');
  app.innerHTML = `<div class="practice-nav"><a class="back-btn" href="javascript:void(0)" onclick="exitTo('#/coding')">← 返回</a><span style="font-weight:700">${KP_NAMES[kp] || kp} · 编程</span></div><div class="text-center" style="padding:40px"><p class="text-muted">加载中...</p></div>`;

  let questions = [];
  try { questions = await API.getCodingQuestions(kp); } catch {}

  if (questions.length === 0) {
    app.innerHTML = `<div class="practice-nav"><a class="back-btn" href="javascript:void(0)" onclick="exitTo('#/coding')">← 返回</a><span style="font-weight:700">编程题练习</span></div>
      <div class="review-empty"><div class="empty-icon">📝</div><h3>暂无编程题</h3><p class="text-muted">该模块暂无编程题目</p></div>`;
    return;
  }

  codingState = { questions, current: 0, kp, codes: {}, results: {} };
  renderBottomTab('coding');
  renderCodingQuestion();
}

function parseCodingTitle(rawTitle) {
  if (!rawTitle) return { description: '', inputExample: '', outputExample: '' };
  // Decode HTML entities first
  let html = rawTitle
    .replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&').replace(/&quot;/g, '"');
  // Plain-text GESP format: no <p> tags, but uses 【输入描述】/【输入格式】/【输出描述】/【输出格式】
  // or "输入格式："/"输出格式：" labels. Split them into clean sections.
  if (!/<p>/i.test(html)) {
    const inputMatch = html.match(/【输入描述】\s*([\s\S]*?)(?=【输出描述】|【样例】|样例输入|$)/)
      || html.match(/【输入格式】\s*([\s\S]*?)(?=【输出格式】|【样例】|样例输入|$)/)
      || html.match(/输入格式[：:]\s*([\s\S]*?)(?=输出格式|样例输入|$)/);
    const outputMatch = html.match(/【输出描述】\s*([\s\S]*?)(?=$)/)
      || html.match(/【输出格式】\s*([\s\S]*?)(?=$)/)
      || html.match(/输出格式[：:]\s*([\s\S]*?)(?=$)/);
    let description = html;
    if (inputMatch) description = description.replace(inputMatch[0], '');
    if (outputMatch) description = description.replace(outputMatch[0], '');
    return {
      description: description.replace(/^【题目描述】\s*/, '').trim(),
      inputExample: inputMatch ? inputMatch[1].trim() : '',
      outputExample: outputMatch ? outputMatch[1].trim() : ''
    };
  }
  // Split on <p> tags
  const parts = html.split(/<p>/);
  let description = parts[0].replace(/<[^>]+>/g, '').trim();
  let inputExample = '', outputExample = '';
  for (let i = 1; i < parts.length; i++) {
    const p = parts[i].replace(/<\/p>/g, '').trim();
    // Extract text from <pre><code>...</code></pre> or just <code>...</code>
    const codeMatch = p.match(/<pre><code>([\s\S]*?)<\/code><\/pre>/) || p.match(/<code>([\s\S]*?)<\/code>/);
    const text = codeMatch ? codeMatch[1].trim() : p.replace(/<[^>]+>/g, '').replace(/^[^：:]*[：:]/, '').trim();
    if (/^输入|^测试输入|^输入格式|^输入样例/.test(p)) {
      inputExample = text;
    } else if (/^输出|^预期输出|^输出格式|^输出样例/.test(p)) {
      outputExample = text;
    }
  }
  return { description, inputExample, outputExample };
}

function renderCodingQuestion() {
  const { questions, current, kp } = codingState;
  if (current >= questions.length) { renderCodingComplete(); return; }

  const q = questions[current];
  const result = codingState.results[q.id];
  const diffLabel = { 1: '基础', 2: '进阶', 3: '挑战' };
  const diffClass = { 1: 'easy', 2: 'medium', 3: 'hard' };
  const progressPct = Math.round((current / questions.length) * 100);

  const defaultCode = '#include <iostream>\nusing namespace std;\n\nint main() {\n    // 在这里编写代码\n    \n    return 0;\n}';
  const savedCode = codingState.codes[q.id] || q.starter_code || defaultCode;
  const testCases = q.test_cases ? (typeof q.test_cases === 'string' ? safeParse(q.test_cases, []) : q.test_cases) : [];

  // Parse title into exam-style sections
  const parsed = parseCodingTitle(q.title);

  // Build problem statement HTML (exam format)
  let problemHtml = '';
  if (parsed.description) {
    problemHtml += `<div class="coding-problem-desc">${escapeHtml(parsed.description)}</div>`;
  }
  if (parsed.inputExample || parsed.outputExample) {
    problemHtml += `<div class="coding-problem-io">`;
    if (parsed.inputExample) {
      problemHtml += `<div class="coding-io-section"><div class="coding-io-label">输入格式</div><pre class="coding-io-example">${escapeHtml(parsed.inputExample)}</pre></div>`;
    }
    if (parsed.outputExample) {
      problemHtml += `<div class="coding-io-section"><div class="coding-io-label">输出格式</div><pre class="coding-io-example">${escapeHtml(parsed.outputExample)}</pre></div>`;
    }
    problemHtml += `</div>`;
  }
  // Show test case sample if available
  if (testCases.length > 0 && testCases[0].input !== undefined) {
    problemHtml += `<div class="coding-problem-io">`;
    problemHtml += `<div class="coding-io-section"><div class="coding-io-label">样例</div>`;
    problemHtml += `<div class="coding-sample"><div class="coding-sample-label">输入</div><pre>${escapeHtml(testCases[0].input || '(无输入)')}</pre></div>`;
    problemHtml += `<div class="coding-sample"><div class="coding-sample-label">输出</div><pre>${escapeHtml(testCases[0].expectedOutput || '')}</pre></div>`;
    problemHtml += `</div></div>`;
  }

  // Answer section: only show AFTER code has been run
  let answerHtml = '';
  if (result) {
    answerHtml = `<div class="coding-answer-reveal animate-in">`;
    if (q.explanation) {
      answerHtml += `<div class="explanation"><strong>解析：</strong>${escapeHtml(q.explanation)}</div>`;
    }
    if (q.answer_text) {
      answerHtml += `<div class="coding-solution"><strong>参考代码：</strong>${formatCodingAnswer(q.answer_text)}</div>`;
    }
    answerHtml += `</div>`;
  }

  const app = document.getElementById('app');
  app.innerHTML = `
    <div class="practice-nav">
      <a class="back-btn" href="javascript:void(0)" onclick="exitTo('#/coding', '确定退出练习？')">← 退出</a>
      <span style="font-weight:700">${KP_NAMES[kp] || kp} · 编程</span>
      <span class="practice-count">${current + 1}/${questions.length}</span>
    </div>
    <div class="q-progress"><div class="q-progress-bar"><div class="q-progress-fill" style="width:${progressPct}%"></div></div></div>
    <div class="question-card animate-in">
      <div class="question-header">
        <span class="q-num">${current + 1}</span>
        <span class="q-type">编程题</span>
        <span class="q-diff ${diffClass[q.difficulty] || ''}">${diffLabel[q.difficulty] || ''}</span>
        ${q.source ? `<span class="q-source">真题</span>` : ''}
      </div>

      <!-- Problem Statement (exam format) -->
      <div class="coding-problem">${problemHtml}</div>

      <!-- Code Editor -->
      <div class="coding-editor-section">
        <div class="coding-editor-header">
          <span class="coding-editor-title">📝 代码</span>
          <button class="btn btn-run" onclick="runCodingCode()" id="btnCodingRun">
            <span class="run-icon">▶</span> 运行代码
          </button>
        </div>
        <div class="code-editor-wrap">
          <div class="line-numbers" id="codingLineNumbers"></div>
          <textarea class="code-editor" id="codingCodeEditor"
            spellcheck="false" autocomplete="off" autocorrect="off" autocapitalize="off"
            oninput="onCodingCodeChange(this)"
            onscroll="syncCodingLineNumbers(this)">${escapeHtml(savedCode)}</textarea>
        </div>
        ${result ? `
        <div class="run-result ${result.error ? 'error' : (result.passed ? 'success' : 'fail')}">
          <div class="run-result-header">
            ${result.error === 'compile' ? '❌ 编译错误' :
              result.error === 'timeout' ? '⏰ 运行超时' :
              result.error === 'runtime' ? '⚠️ 运行时错误' :
              result.passed === true ? '✅ 测试通过！' :
              result.passed === false ? '❌ 输出不匹配' :
              '✅ 运行完成'}
            ${result.timeMs ? `<span class="run-time">耗时 ${result.timeMs}ms</span>` : ''}
          </div>
          ${result.stderr ? `<pre class="run-stderr">${escapeHtml(result.stderr)}</pre>` : ''}
          ${result.stdout !== undefined ? `
            <div class="run-io-row">
              <span class="run-io-label">你的输出：</span>
              <pre class="run-stdout">${escapeHtml(result.stdout) || '(无输出)'}</pre>
            </div>` : ''}
          ${result.passed === false && result.expected ? `
            <div class="run-io-row">
              <span class="run-io-label">正确输出：</span>
              <pre class="run-expected">${escapeHtml(result.expected)}</pre>
            </div>` : ''}
          ${result.results ? result.results.map((r, i) => `
            <div class="tc-result ${r.passed ? 'pass' : 'fail'}">
              <span class="tc-result-icon">${r.passed ? '✅' : '❌'}</span>
              <span class="tc-result-desc">用例 ${i + 1}: ${escapeHtml(r.description || '')}</span>
              ${!r.passed ? `<span class="tc-result-detail">你的输出: ${escapeHtml(r.stdout || '(空)')}</span>` : ''}
            </div>
          `).join('') : ''}
        </div>` : `
        <div class="coding-editor-footer">
          <span class="coding-hint">💡 编写代码后点击"运行代码"测试，运行后可查看解析和参考代码</span>
        </div>`}
      </div>

      <!-- Answer reveal (only after running code) -->
      ${answerHtml}

      <div class="question-nav">
        <button class="btn btn-secondary" onclick="codingPrev()" ${current === 0 ? 'disabled' : ''}>上一题</button>
        <button class="btn btn-primary" onclick="codingNext()" ${!result ? 'disabled title="请先运行代码"' : ''}>${current < questions.length - 1 ? '下一题' : '完成'}</button>
      </div>
    </div>`;

  requestAnimationFrame(() => updateCodingLineNumbers());
}

function onCodingCodeChange(textarea) {
  const q = codingState.questions[codingState.current];
  if (q) codingState.codes[q.id] = textarea.value;
  updateCodingLineNumbers();
}

function updateCodingLineNumbers() {
  const editor = document.getElementById('codingCodeEditor');
  const ln = document.getElementById('codingLineNumbers');
  if (!editor || !ln) return;
  const lines = editor.value.split('\n').length;
  ln.innerHTML = Array.from({ length: lines }, (_, i) => `<div>${i + 1}</div>`).join('');
}

function syncCodingLineNumbers(textarea) {
  const ln = document.getElementById('codingLineNumbers');
  if (ln) ln.scrollTop = textarea.scrollTop;
}

async function runCodingCode() {
  const editor = document.getElementById('codingCodeEditor');
  if (!editor) return;
  const code = editor.value.trim();
  if (!code) { alert('请先编写代码'); return; }

  const btn = document.getElementById('btnCodingRun');
  if (btn) { btn.disabled = true; btn.innerHTML = '<span class="run-icon">⏳</span> 运行中...'; }

  const q = codingState.questions[codingState.current];
  const testCases = q.test_cases ? (typeof q.test_cases === 'string' ? safeParse(q.test_cases, []) : q.test_cases) : [];

  try {
    if (testCases.length > 0) {
      codingState.results[q.id] = await API.compileAndRunTestCases(code, testCases);
    } else {
      codingState.results[q.id] = await API.compileAndRun(code, '', undefined);
    }
    renderCodingQuestion();
  } catch (e) {
    alert('运行失败: ' + e.message);
  } finally {
    codingState.codes[q.id] = editor.value; // preserve code across re-render
    if (btn) { btn.disabled = false; btn.innerHTML = '<span class="run-icon">▶</span> 运行代码'; }
  }
}

function codingPrev() {
  if (codingState.current > 0) {
    codingState.current--;
    renderCodingQuestion();
  }
}

function codingNext() {
  // Must run code at least once before advancing
  if (!codingState.results[codingState.questions[codingState.current].id]) {
    alert('请先运行代码测试');
    return;
  }
  if (codingState.current < codingState.questions.length - 1) {
    codingState.current++;
    renderCodingQuestion();
  } else {
    codingState.current = codingState.questions.length;
    renderCodingComplete();
  }
}

function renderCodingComplete() {
  const { questions, kp } = codingState;
  renderBottomTab('coding');
  document.getElementById('app').innerHTML = `
    <div class="practice-nav"><a class="back-btn" href="javascript:void(0)" onclick="exitTo('#/coding')">← 返回</a><span style="font-weight:700">${KP_NAMES[kp] || kp} · 编程</span></div>
    <div class="start-screen animate-in">
      <div class="card">
        <h2>🎉 编程练习完成！</h2>
        <p class="text-muted" style="margin:12px 0">共完成 ${questions.length} 道编程题</p>
        <button class="btn btn-primary" onclick="navigate('#/coding/${kp}')">再练一次</button>
        <button class="btn btn-secondary" onclick="navigate('#/coding')" style="margin-left:8px">换个模块</button>
        <button class="btn btn-secondary" onclick="navigate('#/')" style="margin-left:8px">返回首页</button>
      </div>
    </div>`;
}

/* ============================================================
   Mock Exam
   ============================================================ */
let examPapers = [];

async function renderMock() {
  if (mockState.started) { renderMockExam(); return; }

  // Load available papers
  try { examPapers = await API.getExamPapers(currentLevel); } catch {}

  const papersHtml = examPapers.map(p => `
    <div class="paper-card" onclick="selectExamPaper(${p.id})">
      <div class="paper-title">${escapeHtml(p.title)}</div>
      <div class="paper-desc text-muted">${escapeHtml(p.description)}</div>
      <div class="paper-info">
        <span>${p.total_questions} 题</span>
        <span>${p.time_limit} 分钟</span>
        <span>难度 ${p.difficulty_level}</span>
      </div>
    </div>
  `).join('');

  document.getElementById('app').innerHTML = `
    <div class="start-screen animate-in">
      <div class="card">
        <h2>模拟考试</h2>
        <p class="text-muted">模拟真实 GESP L${currentLevel} 考试环境</p>
        <div class="rules">
          <li>共 30 题（选择 + 编程）</li>
          <li>时间限制：45 分钟</li>
          <li>选择题即时评分，编程题需提交代码运行</li>
          <li>时间到自动提交</li>
        </div>

        <div class="paper-list">
          <h3 style="margin:20px 0 12px">选择试卷</h3>
          <div class="paper-grid">
            <div class="paper-card random" onclick="selectExamPaper(0)">
              <div class="paper-title">🎲 随机组卷</div>
              <div class="paper-desc text-muted">从题库随机抽取30道题</div>
            </div>
            ${papersHtml}
          </div>
        </div>
      </div>
    </div>`;
  setActiveNav('mock');
  renderBottomTab('mock');
}

async function selectExamPaper(paperId) {
  mockState.paperId = paperId;
  await startMockExam();
}

async function startMockExam() {
  if (mockState.started) return; // prevent double-start (double interval)
  let questions = [];
  let paperInfo = { title: '模拟考试' };

  try {
    if (mockState.paperId && mockState.paperId > 0) {
      const data = await API.getExamPaperById(mockState.paperId);
      questions = data.questions || [];
      paperInfo = data.paper || paperInfo;
    } else {
      const data = await API.getExamPaper(currentLevel);
      questions = data.questions || [];
      paperInfo = data.paper || paperInfo;
    }
  } catch {}

  if (questions.length === 0) {
    alert('试卷加载失败，请重试');
    mockState.started = false;
    renderMock();
    return;
  }

  mockState = { ...mockState, questions, paperInfo, answers: {}, codeAnswers: {}, codeResults: {}, current: 0, timer: null, timeLeft: EXAM_TIME, started: true, submitting: false };
  mockState.timer = setInterval(tickTimer, 1000);
  // Hide bottom tab during exam
  const bt = document.querySelector('.bottom-tab');
  if (bt) bt.style.display = 'none';
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
  if (mockState.timeLeft <= 0 && !mockState.submitting) submitMockExam();
}

function renderMockExam() {
  const q = mockState.questions[mockState.current];
  const labels = 'ABCD';
  const diffLabel = { 1: '基础', 2: '进阶', 3: '挑战' };
  const diffClass = { 1: 'easy', 2: 'medium', 3: 'hard' };
  const m = Math.floor(mockState.timeLeft / 60);
  const s = mockState.timeLeft % 60;

  let optionsHtml = '';
  let codingEditorHtml = '';

  if (q.type === 'coding') {
    // Coding question: show code editor
    const savedCode = mockState.codeAnswers?.[q.id] || '';
    // NEVER show the answer - only use a minimal blank template
    const defaultCode = '#include <iostream>\nusing namespace std;\n\nint main() {\n    // 在这里编写代码\n    \n    return 0;\n}';
    const code = savedCode || defaultCode;
    const testCases = q.test_cases ? (typeof q.test_cases === 'string' ? safeParse(q.test_cases, []) : q.test_cases) : [];

    // Store default code if not yet stored
    if (!mockState.codeAnswers) mockState.codeAnswers = {};
    if (!mockState.codeAnswers[q.id] && !savedCode) mockState.codeAnswers[q.id] = defaultCode;

    const result = mockState.codeResults?.[q.id];

    codingEditorHtml = `
      <div class="coding-editor-section">
        <div class="coding-editor-header">
          <span class="coding-editor-title">📝 C++ 代码编辑器</span>
          <button class="btn btn-run" onclick="runExamCode()" id="btnRunCode">
            <span class="run-icon">▶</span> 运行代码
          </button>
        </div>
        <div class="code-editor-wrap">
          <div class="line-numbers" id="lineNumbers"></div>
          <textarea class="code-editor" id="examCodeEditor"
            spellcheck="false" autocomplete="off" autocorrect="off" autocapitalize="off"
            oninput="onExamCodeChange(this)"
            onscroll="syncLineNumbers(this)">${escapeHtml(code)}</textarea>
        </div>
        ${testCases.length > 0 ? `
        <div class="test-cases-info">
          <div class="test-cases-title">测试用例</div>
          ${testCases.map((tc, i) => `
            <div class="test-case-item">
              <span class="test-case-num">用例 ${i + 1}</span>
              <span class="test-case-desc">${escapeHtml(tc.description || '')}</span>
              ${tc.input ? `<span class="test-case-input">输入: <code>${escapeHtml(tc.input)}</code></span>` : ''}
            </div>
          `).join('')}
        </div>` : ''}
        ${result ? `
        <div class="run-result ${result.error ? 'error' : (result.passed ? 'success' : 'fail')}">
          <div class="run-result-header">
            ${result.error === 'compile' ? '❌ 编译错误' :
              result.error === 'timeout' ? '⏰ 运行超时（超过5秒）' :
              result.error === 'runtime' ? '⚠️ 运行时错误' :
              result.passed === true ? '✅ 测试通过！' :
              result.passed === false ? '❌ 输出不匹配' :
              '✅ 运行完成'}
            ${result.timeMs ? `<span class="run-time">耗时 ${result.timeMs}ms</span>` : ''}
          </div>
          ${result.stderr ? `<pre class="run-stderr">${escapeHtml(result.stderr)}</pre>` : ''}
          ${result.stdout !== undefined ? `
            <div class="run-io-row">
              <span class="run-io-label">输出：</span>
              <pre class="run-stdout">${escapeHtml(result.stdout) || '(无输出)'}</pre>
            </div>` : ''}
          ${result.passed === false && result.expected ? `
            <div class="run-io-row">
              <span class="run-io-label">期望：</span>
              <pre class="run-expected">${escapeHtml(result.expected)}</pre>
            </div>` : ''}
          ${result.results ? result.results.map((r, i) => `
            <div class="tc-result ${r.passed ? 'pass' : 'fail'}">
              <span class="tc-result-icon">${r.passed ? '✅' : '❌'}</span>
              <span class="tc-result-desc">用例 ${i + 1}: ${escapeHtml(r.description || '')}</span>
              ${!r.passed ? `<span class="tc-result-detail">输出: ${escapeHtml(r.stdout || '(空)')}</span>` : ''}
            </div>
          `).join('') : ''}
        </div>` : ''}
        <div class="coding-editor-footer">
          <span class="coding-hint">💡 写好代码后点击"运行代码"测试，考试结束后将根据代码运行结果评分</span>
        </div>
      </div>`;
  } else if (q.options) {
    optionsHtml = '<div class="options">' + q.options.map((opt, i) => {
      let cls = 'option';
      if (i === mockState.answers[q.id]) {
        cls += ' selected';
      }
      return `<div class="${cls}" data-idx="${i}" onclick="selectExamAnswer(${i})"><span>${labels[i]}.</span> <span class="option-text">${escapeHtml(decodeHtmlEntities(opt))}</span></div>`;
    }).join('') + '</div>';
  }

  document.getElementById('app').innerHTML = `
    <div class="exam-header">
      <div class="exam-title">${escapeHtml(mockState.paperInfo?.title) || '模拟考试'}</div>
      <div class="exam-progress">第 ${mockState.current + 1}/${mockState.questions.length} 题</div>
      <div class="exam-timer" id="timerValue">${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}</div>
    </div>
    <div class="exam-content">
      <div class="question-card animate-in">
        <div class="question-header">
          <span class="q-num">${mockState.current + 1}</span>
          <span class="q-diff ${diffClass[q.difficulty] || ''}">${diffLabel[q.difficulty] || ''}</span>
          <span class="q-type">${q.type === 'coding' ? '编程题' : (q.isJudge ? '判断题' : '选择题')}</span>
        </div>
        ${q.type === 'coding' ? (() => {
          const p = parseCodingTitle(q.title);
          let probHtml = '';
          if (p.description) probHtml += `<div class="coding-problem-desc">${escapeHtml(p.description)}</div>`;
          if (p.inputExample || p.outputExample) {
            probHtml += '<div class="coding-problem-io">';
            if (p.inputExample) probHtml += `<div class="coding-io-section"><div class="coding-io-label">输入格式</div><pre class="coding-io-example">${escapeHtml(p.inputExample)}</pre></div>`;
            if (p.outputExample) probHtml += `<div class="coding-io-section"><div class="coding-io-label">输出格式</div><pre class="coding-io-example">${escapeHtml(p.outputExample)}</pre></div>`;
            probHtml += '</div>';
          }
          return `<div class="coding-problem">${probHtml}</div>`;
        })() : `<div class="question-title">${formatQuestionTitle(q.title)}</div>`}
        ${codingEditorHtml}
        ${optionsHtml}
        <div class="exam-nav">
          <button class="btn btn-secondary" onclick="examPrev()" ${mockState.current === 0 ? 'disabled' : ''}>上一题</button>
          <button class="btn btn-primary" onclick="${mockState.current < mockState.questions.length - 1 ? 'examNext()' : 'confirmSubmitExam()'}">${mockState.current < mockState.questions.length - 1 ? '下一题' : '完成并交卷'}</button>
        </div>
      </div>
      <div class="answer-palette" id="examPalette">
        <div class="palette-title">答题卡</div>
        <div class="exam-progress-bar"><div class="exam-progress-fill" style="width:${(() => {
          const choiceCount = Object.keys(mockState.answers).length;
          const codingCount = mockState.questions.filter(qq => qq.type === 'coding' && isCodingAnswered(qq)).length;
          return (choiceCount + codingCount) / mockState.questions.length * 100;
        })()}%"></div></div>
        <div class="palette-items">
        ${mockState.questions.map((qq, i) => {
          let cls = 'palette-item';
          if (qq.type === 'coding') cls += ' coding-q';
          if (i === mockState.current) cls += ' current';
          if (mockState.answers[qq.id] !== undefined || (qq.type === 'coding' && isCodingAnswered(qq))) cls += ' answered';
          return `<div class="${cls}" onclick="examJump(${i})">${i + 1}</div>`;
        }).join('')}
        </div>
        <div class="exam-summary">已答 <strong>${(() => {
          const choiceCount = Object.keys(mockState.answers).length;
          const codingCount = mockState.questions.filter(qq => qq.type === 'coding' && isCodingAnswered(qq)).length;
          return choiceCount + codingCount;
        })()}</strong> / ${mockState.questions.length} 题</div>
        <button class="btn-submit-exam" onclick="confirmSubmitExam()">交 卷</button>
      </div>
    </div>`;

  // Init line numbers for code editor if present
  if (q.type === 'coding') {
    requestAnimationFrame(() => updateLineNumbers());
  }
}

function selectExamAnswer(idx) {
  const q = mockState.questions[mockState.current];
  if (mockState.answers[q.id] === idx) {
    delete mockState.answers[q.id];
  } else {
    mockState.answers[q.id] = idx;
  }
  renderMockExam();
}

function examNext() {
  if (mockState.current < mockState.questions.length - 1) {
    mockState.current++;
    renderMockExam();
  }
}
function examPrev() {
  if (mockState.current > 0) {
    mockState.current--;
    renderMockExam();
  }
}
function examJump(idx) {
  if (idx >= 0 && idx < mockState.questions.length) {
    mockState.current = idx;
    renderMockExam();
  }
}

/* --- Coding Editor Helpers --- */
function escapeHtml(s) {
  if (!s) return '';
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

function safeParse(s, fallback) {
  try { return JSON.parse(s); } catch { return fallback; }
}

function onExamCodeChange(textarea) {
  const q = mockState.questions[mockState.current];
  if (!mockState.codeAnswers) mockState.codeAnswers = {};
  mockState.codeAnswers[q.id] = textarea.value;
  updateLineNumbers();
}

function updateLineNumbers() {
  const editor = document.getElementById('examCodeEditor');
  const ln = document.getElementById('lineNumbers');
  if (!editor || !ln) return;
  const lines = editor.value.split('\n').length;
  ln.innerHTML = Array.from({ length: lines }, (_, i) => `<div>${i + 1}</div>`).join('');
}

function syncLineNumbers(textarea) {
  const ln = document.getElementById('lineNumbers');
  if (ln) ln.scrollTop = textarea.scrollTop;
}

async function runExamCode() {
  const q = mockState.questions[mockState.current];
  const editor = document.getElementById('examCodeEditor');
  if (!editor) return;

  const code = editor.value.trim();
  if (!code) { alert('请先编写代码'); return; }

  const btn = document.getElementById('btnRunCode');
  if (btn) { btn.disabled = true; btn.innerHTML = '<span class="run-icon">⏳</span> 运行中...'; }

  const testCases = q.test_cases ? (typeof q.test_cases === 'string' ? safeParse(q.test_cases, []) : q.test_cases) : [];

  try {
    let result;
    if (testCases.length > 0) {
      result = await API.compileAndRunTestCases(code, testCases);
    } else {
      result = await API.compileAndRun(code, '', undefined);
    }
    if (!mockState.codeResults) mockState.codeResults = {};
    mockState.codeResults[q.id] = result;
    renderMockExam();
  } catch (e) {
    alert('运行失败: ' + e.message);
  } finally {
    if (btn) { btn.disabled = false; btn.innerHTML = '<span class="run-icon">▶</span> 运行代码'; }
  }
}

function isCodingAnswered(q) {
  // A coding question is considered "answered" only if the student wrote meaningful code
  // (not just the default template)
  const code = mockState.codeAnswers?.[q.id] || '';
  if (!code.trim()) return false;
  const template = '#include <iostream>\nusing namespace std;\n\nint main() {\n    // 在这里编写代码\n    \n    return 0;\n}';
  if (code.trim() === template.trim()) return false;
  // Strip comments and the main() skeleton; if any real statement remains, it is answered.
  const stripped = code
    .replace(/\/\/.*$/gm, '')
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/int\s+main\s*\([^)]*\)\s*\{/, '')
    .replace(/\}\s*$/, '')
    .trim();
  return stripped.length > 0;
}

function confirmSubmitExam() {
  const total = mockState.questions.length;
  const choiceAnswered = Object.keys(mockState.answers).length;
  const codingTotal = mockState.questions.filter(q => q.type === 'coding').length;
  const codingAnswered = mockState.questions.filter(q => q.type === 'coding' && isCodingAnswered(q)).length;
  const answered = choiceAnswered + codingAnswered;
  const unanswered = total - answered;

  if (unanswered === 0) {
    if (confirm('已完成全部 ' + total + ' 题，确定要交卷吗？')) submitMockExam();
  } else {
    if (confirm('还有 ' + unanswered + ' 题未作答，确定要交卷吗？')) submitMockExam();
  }
}

async function submitMockExam() {
  if (mockState.submitting) return; // Prevent double submission
  mockState.submitting = true;
  if (mockState.timer) { clearInterval(mockState.timer); mockState.timer = null; }

  // Show a "judging" overlay while the server verifies coding answers
  const judging = document.createElement('div');
  judging.id = 'judgingOverlay';
  judging.className = 'judging-overlay';
  judging.innerHTML = '<div class="judging-box">⏳ 正在判题，请稍候...</div>';
  document.body.appendChild(judging);

  const answers = mockState.questions.map(q => {
    if (q.type === 'coding') {
      // Send the student's actual code so the server re-verifies it against test cases
      return { questionId: q.id, selected: -1, code: mockState.codeAnswers?.[q.id] || '' };
    }
    return { questionId: q.id, selected: mockState.answers[q.id] ?? -1 };
  });

  const timeSpent = EXAM_TIME - mockState.timeLeft;
  let result = { total: 30, correct: 0, score: 0 };

  try {
    result = await API.submitExam(mockState.paperId, answers, timeSpent);
  } catch (e) {
    // Submission failed: keep the exam data so the student can retry
    if (judging.parentNode) judging.remove();
    alert('提交失败：' + (e.message || '网络错误') + '，请重新交卷');
    mockState.submitting = false;
    if (mockState.timeLeft > 0) mockState.timer = setInterval(tickTimer, 1000);
    return;
  }

  if (judging.parentNode) judging.remove();
  mockState.started = false;

  const resultMap = new Map((result.results || []).map(r => [r.questionId, r]));
  const labels = 'ABCD';
  let detailHtml = mockState.questions.map((q, i) => {
    const selected = mockState.answers[q.id];
    const isCoding = q.type === 'coding';
    const rr = resultMap.get(q.id);

    let statusHtml, detailBody, isCorrect;
    if (isCoding) {
      isCorrect = rr ? rr.correct === 1 : false;
      statusHtml = isCorrect ? '✅ 测试通过' : '❌ 未通过';
      detailBody = rr && rr.answer_text ? `<div class="coding-solution" style="margin-top:8px"><strong>参考代码：</strong>${formatCodingAnswer(rr.answer_text)}</div>` : '';
    } else {
      const answer = rr ? rr.answer : -1;
      isCorrect = rr ? rr.correct === 1 : false;
      statusHtml = isCorrect ? '✅ 正确' : '❌ 错误';
      detailBody = `<div class="exam-detail-options">${q.options.map((opt, j) => {
        let cls = 'exam-opt';
        if (j === answer) cls += ' answer';
        if (j === selected && !isCorrect) cls += ' wrong';
        return `<div class="${cls}">${labels[j]}. ${escapeHtml(decodeHtmlEntities(opt))}</div>`;
      }).join('')}</div>`;
    }

    return `
      <div class="exam-detail-item ${isCoding ? '' : (isCorrect ? 'correct' : 'incorrect')}">
        <div class="exam-detail-header">
          <span>第 ${i + 1} 题 · ${isCoding ? '编程题' : (q.isJudge ? '判断题' : '选择题')}</span>
          <span class="${isCoding ? '' : (isCorrect ? 'text-success' : 'text-error')}">${statusHtml}</span>
        </div>
        <div class="exam-detail-title">${formatQuestionTitle(q.title)}</div>
        ${detailBody}
        ${rr && rr.explanation ? `<div class="exam-detail-explain"><strong>解析：</strong>${escapeHtml(rr.explanation)}</div>` : ''}
      </div>`;
  }).join('');

  document.getElementById('app').innerHTML = `
    <div class="start-screen animate-in">
      <div class="card">
        <h2>考试结束</h2>
        <div class="stats-grid" style="margin:20px 0">
          <div class="stat-card"><div class="stat-value">${result.score}%</div><div class="stat-label">得分</div></div>
          <div class="stat-card"><div class="stat-value">${result.correct}/${result.total}</div><div class="stat-label">正确/总题</div></div>
          <div class="stat-card"><div class="stat-value">${Math.floor(timeSpent / 60)}分${timeSpent % 60}秒</div><div class="stat-label">用时</div></div>
        </div>
        <p class="complete-cheer">${completeCheer(Math.round(result.score || 0))}</p>
        <button class="btn btn-primary" onclick="navigate('#/mock')">再考一次</button>
        <button class="btn btn-secondary" onclick="navigate('#/')" style="margin-left:8px">返回首页</button>
      </div>
    </div>
    <div class="section animate-in">
      <h2 class="section-title">答题详情</h2>
      ${detailHtml}
    </div>`;
  setActiveNav('');
  renderBottomTab('');
}

/* ============================================================
   Review (Wrong Answers)
   ============================================================ */
let wrongPractice = { questions: [], current: 0, answers: {}, finished: false };

async function renderReview() {
  const app = document.getElementById('app');
  app.innerHTML = `<div class="practice-nav"><a class="back-btn" href="javascript:void(0)" onclick="exitTo('#/')">← 返回</a><span style="font-weight:700">错题复习</span></div><div class="text-center" style="padding:40px"><p class="text-muted">加载中...</p></div>`;

  let questions = [];
  try { questions = await API.getWrongQuestions(currentLevel); } catch {}
  // Skip coding questions (no code editor in review mode)
  questions = questions.filter(q => q.type !== 'coding');

  if (questions.length === 0) {
    app.innerHTML = `<div class="practice-nav"><a class="back-btn" href="javascript:void(0)" onclick="exitTo('#/')">← 返回</a><span style="font-weight:700">错题复习</span></div>
      <div class="review-empty"><div class="empty-icon">🎉</div><h3>太棒了！</h3><p class="text-muted">没有错题，继续加油！</p></div>`;
    setActiveNav('review');
    renderBottomTab('review');
    return;
  }

  const labels = 'ABCD';
  let html = questions.map(q => `
    <div class="question-card animate-in">
      <div class="question-header">
        <span class="q-type">${q.type === 'coding' ? '编程题' : (q.isJudge ? '判断题' : '选择题')}</span>
        <span class="q-kp">${KP_NAMES[q.kp] || q.kp}</span>
        ${q.source ? `<span class="q-source">真题</span>` : ''}
      </div>
      <div class="question-title">${formatQuestionTitle(q.title)}</div>
      ${q.options ? '<div class="options">' + q.options.map((opt, i) => {
        let cls = 'option disabled';
        if (i === q.answer) cls += ' correct';
        return `<div class="${cls}"><span>${labels[i]}.</span> <span class="option-text">${escapeHtml(decodeHtmlEntities(opt))}</span></div>`;
      }).join('') + '</div>' : ''}
      ${q.answer_text ? `<div class="coding-solution">${formatCodingAnswer(q.answer_text)}</div>` : (q.explanation ? `<div class="explanation correct"><strong>解析：</strong><p>${escapeHtml(q.explanation)}</p></div>` : '')}
    </div>`).join('');

  app.innerHTML = `
    <div class="practice-nav">
      <a class="back-btn" href="javascript:void(0)" onclick="exitTo('#/')">← 返回</a>
      <span style="font-weight:700">错题复习</span>
      <span class="wrong-count">共 ${questions.length} 题</span>
    </div>
    <div class="wrong-practice-banner animate-in">
      <div class="wrong-practice-info">
        <h3>错题巩固练习</h3>
        <p>逐题作答，答对即可从错题库中移除</p>
      </div>
      <button class="btn btn-primary" onclick="startWrongPractice()">开始练习</button>
    </div>
    <div class="section">${html}</div>`;
  setActiveNav('review');
  renderBottomTab('review');
}

async function startWrongPractice() {
  const app = document.getElementById('app');
  app.innerHTML = `<div class="practice-nav"><a class="back-btn" href="javascript:void(0)" onclick="exitTo('#/', '确定退出练习？')">← 退出</a><span style="font-weight:700">错题巩固练习</span></div><div class="text-center" style="padding:40px"><p class="text-muted">加载中...</p></div>`;

  let questions = [];
  try { questions = await API.getWrongQuestions(currentLevel); } catch {}
  // Skip coding questions (no code editor in practice mode)
  questions = questions.filter(q => q.type !== 'coding');

  if (questions.length === 0) {
    app.innerHTML = `<div class="practice-nav"><a class="back-btn" href="javascript:void(0)" onclick="exitTo('#/')">← 返回</a><span style="font-weight:700">错题巩固练习</span></div>
      <div class="review-empty"><div class="empty-icon">🎉</div><h3>太棒了！</h3><p class="text-muted">没有错题，继续加油！</p></div>`;
    return;
  }

  wrongPractice = { questions, current: 0, answers: {}, finished: false };
  renderBottomTab('review');
  renderWrongPracticeQuestion();
}

function renderWrongPracticeQuestion() {
  const { questions, current, answers, finished } = wrongPractice;
  const app = document.getElementById('app');
  const labels = 'ABCD';

  if (finished) {
    const total = questions.length;
    const mastered = Object.values(answers).filter(a => a.correct).length;
    const remaining = total - mastered;
    app.innerHTML = `
      <div class="practice-nav"><a class="back-btn" href="javascript:void(0)" onclick="exitTo('#/')">← 返回</a><span style="font-weight:700">练习完成</span></div>
      <div class="review-summary animate-in">
        <div class="summary-icon">${mastered === total ? '🎉' : '📖'}</div>
        <h2>${mastered === total ? '全部掌握！' : '练习完成'}</h2>
        <div class="summary-stats">
          <div class="summary-stat"><span class="summary-val text-success">${mastered}</span><span class="summary-lbl">已掌握</span></div>
          <div class="summary-stat"><span class="summary-val text-error">${total - mastered}</span><span class="summary-lbl">仍需复习</span></div>
          <div class="summary-stat"><span class="summary-val">${total}</span><span class="summary-lbl">总题数</span></div>
        </div>
        <p class="text-muted" style="margin:16px 0">答对的题目已从错题库中移除</p>
        <button class="btn btn-primary" onclick="navigate('#/')">返回首页</button>
        ${remaining > 0 ? `<button class="btn btn-secondary" onclick="startWrongPractice()" style="margin-left:8px">继续练习</button>` : ''}
      </div>`;
    return;
  }

  const q = questions[current];
  const isAnswered = answers[q.id] !== undefined;
  const selectedIdx = isAnswered ? answers[q.id].selected : -1;
  const isCorrect = isAnswered ? answers[q.id].correct : false;

  let optionsHtml = '';
  if (q.options) {
    optionsHtml = '<div class="options">' + q.options.map((opt, i) => {
      let cls = 'option';
      if (isAnswered) {
        cls += ' disabled';
        if (i === q.answer) cls += ' correct';
        if (i === selectedIdx && !isCorrect) cls += ' incorrect';
      } else if (i === selectedIdx) {
        cls += ' selected';
      }
      const onclick = isAnswered ? '' : `onclick="selectWrongOption(${i})"`;
      return `<div class="${cls}" ${onclick}><span>${labels[i]}.</span> <span class="option-text">${escapeHtml(decodeHtmlEntities(opt))}</span></div>`;
    }).join('') + '</div>';
  }

  let feedbackHtml = '';
  if (isAnswered) {
    const fbClass = isCorrect ? 'ok' : 'fail';
    const fbIcon = isCorrect ? '✓' : '✗';
    const fbText = isCorrect ? cheer(true) + ' 已从错题库移除' : cheer(false) + ' 正确答案是 ' + (labels[q.answer] ?? '?');
    feedbackHtml = `<div class="feedback show ${fbClass}">
      <span class="fb-icon">${fbIcon}</span> ${fbText}
      ${!isCorrect && q.explanation ? `<div class="explanation">${escapeHtml(q.explanation)}</div>` : ''}
    </div>`;
  }

  const progressPct = Math.round((current / questions.length) * 100);

  app.innerHTML = `
    <div class="practice-nav">
      <a class="back-btn" href="javascript:void(0)" onclick="exitTo('#/', '确定退出练习？')">← 退出</a>
      <span style="font-weight:700">错题巩固 (${current + 1}/${questions.length})</span>
    </div>
    <div class="q-progress"><div class="q-progress-bar"><div class="q-progress-fill" style="width:${progressPct}%"></div></div></div>
    <div class="question-card animate-in">
      <div class="question-header">
        <span class="q-type">${q.type === 'coding' ? '编程题' : (q.isJudge ? '判断题' : '选择题')}</span>
        <span class="q-kp">${KP_NAMES[q.kp] || q.kp}</span>
        ${q.source ? `<span class="q-source">真题</span>` : ''}
      </div>
      <div class="question-title">${formatQuestionTitle(q.title)}</div>
      ${optionsHtml}
      ${feedbackHtml}
    </div>
    ${isAnswered ? `<div style="text-align:center;margin-top:20px">
      <button class="btn btn-primary" onclick="nextWrongQuestion()">${current < questions.length - 1 ? '下一题' : '查看结果'}</button>
    </div>` : ''}`;
}

function selectWrongOption(idx) {
  if (wrongPractice.answers[wrongPractice.questions[wrongPractice.current].id] !== undefined) return;
  const q = wrongPractice.questions[wrongPractice.current];
  const isCorrect = idx === q.answer;
  wrongPractice.answers[q.id] = { selected: idx, correct: isCorrect };
  API.submitAnswer(q.id, idx, isCorrect).catch(() => {});
  renderWrongPracticeQuestion();
}

function nextWrongQuestion() {
  if (wrongPractice.current < wrongPractice.questions.length - 1) {
    wrongPractice.current++;
    renderWrongPracticeQuestion();
  } else {
    wrongPractice.finished = true;
    renderWrongPracticeQuestion();
  }
}

/* ============================================================
   SVG Chart Components (Zero Dependencies)
   ============================================================ */

/**
 * Render an SVG radar chart for knowledge point mastery.
 * @param {Array} data - [{kp, answered, correct, ...}] or [{kp, total, wrong, ...}]
 * @param {Object} opts - {size, accuracyMode}
 *   accuracyMode: true = data has {correct,answered}, false = data has {wrong,total}
 */
function renderRadarChart(data, opts = {}) {
  const size = opts.size || 300;
  const cx = size / 2, cy = size / 2;
  const r = size * 0.35;
  const kps = levelKps(currentLevel);
  const n = kps.length;

  // Calculate accuracy for each KP
  const values = kps.map(kp => {
    const item = data?.find(d => d.kp === kp);
    if (!item) return 0;
    if (opts.accuracyMode) {
      return item.answered > 0 ? (item.correct / item.answered) : 0;
    } else {
      return item.total > 0 ? (1 - item.wrong / item.total) : 0;
    }
  });

  // Grid lines (concentric pentagons)
  let gridSvg = '';
  for (let level = 1; level <= 4; level++) {
    const pts = [];
    for (let i = 0; i < n; i++) {
      const angle = (Math.PI * 2 * i / n) - Math.PI / 2;
      const lr = r * level / 4;
      pts.push(`${cx + lr * Math.cos(angle)},${cy + lr * Math.sin(angle)}`);
    }
    gridSvg += `<polygon points="${pts.join(' ')}" class="radar-grid"/>`;
  }

  // Axis lines
  let axisSvg = '';
  for (let i = 0; i < n; i++) {
    const angle = (Math.PI * 2 * i / n) - Math.PI / 2;
    axisSvg += `<line x1="${cx}" y1="${cy}" x2="${cx + r * Math.cos(angle)}" y2="${cy + r * Math.sin(angle)}" class="radar-axis"/>`;
  }

  // Data polygon
  const dataPts = [];
  for (let i = 0; i < n; i++) {
    const angle = (Math.PI * 2 * i / n) - Math.PI / 2;
    const vr = r * Math.min(values[i], 1);
    dataPts.push(`${cx + vr * Math.cos(angle)},${cy + vr * Math.sin(angle)}`);
  }
  const dataPolygon = `<polygon points="${dataPts.join(' ')}" class="radar-area"/>`;

  // Dots + labels
  let dotsSvg = '';
  for (let i = 0; i < n; i++) {
    const angle = (Math.PI * 2 * i / n) - Math.PI / 2;
    const vr = r * Math.min(values[i], 1);
    const dx = cx + vr * Math.cos(angle);
    const dy = cy + vr * Math.sin(angle);
    dotsSvg += `<circle cx="${dx}" cy="${dy}" r="3.5" class="radar-dot"/>`;

    // Label position (outside the radar)
    const lx = cx + (r + 28) * Math.cos(angle);
    const ly = cy + (r + 28) * Math.sin(angle);
    const pct = Math.round(values[i] * 100);
    dotsSvg += `<text x="${lx}" y="${ly - 6}" class="radar-label">${KP_NAMES[kps[i]]?.slice(0,4) || kps[i]}</text>`;
    dotsSvg += `<text x="${lx}" y="${ly + 8}" class="radar-value">${pct}%</text>`;
  }

  return `<svg viewBox="0 0 ${size} ${size}">${gridSvg}${axisSvg}${dataPolygon}${dotsSvg}</svg>`;
}

/**
 * Render an SVG line chart for exam score trends.
 * @param {Array} exams - [{score, started_at}] (newest first, will be reversed)
 */
function renderTrendChart(exams) {
  if (!exams || exams.length < 2) return '';
  const sorted = [...exams].reverse();
  const w = 500, h = 180;
  const pad = { top: 20, right: 20, bottom: 30, left: 40 };
  const cw = w - pad.left - pad.right;
  const ch = h - pad.top - pad.bottom;

  const scores = sorted.map(e => e.score);
  const minS = Math.max(0, Math.min(...scores) - 10);
  const maxS = Math.min(100, Math.max(...scores) + 10);

  // Points
  const pts = sorted.map((e, i) => {
    const x = pad.left + (i / (sorted.length - 1)) * cw;
    const y = pad.top + ch - ((e.score - minS) / (maxS - minS)) * ch;
    return { x, y, score: e.score, date: e.started_at?.slice(5, 10) || '' };
  });

  const linePath = pts.map((p, i) => `${i === 0 ? 'M' : 'L'}${p.x},${p.y}`).join(' ');
  const areaPath = `${linePath} L${pts[pts.length-1].x},${pad.top + ch} L${pts[0].x},${pad.top + ch} Z`;

  // Grid lines
  let gridSvg = '';
  for (let i = 0; i <= 4; i++) {
    const y = pad.top + (ch * i / 4);
    const val = Math.round(maxS - (maxS - minS) * i / 4);
    gridSvg += `<line x1="${pad.left}" y1="${y}" x2="${w - pad.right}" y2="${y}" class="trend-grid"/>`;
    gridSvg += `<text x="${pad.left - 8}" y="${y + 4}" class="trend-axis-label" text-anchor="end">${val}</text>`;
  }

  // X labels (show every Nth)
  const labelStep = Math.max(1, Math.floor(sorted.length / 6));
  let xLabels = '';
  pts.forEach((p, i) => {
    if (i % labelStep === 0 || i === pts.length - 1) {
      xLabels += `<text x="${p.x}" y="${h - 4}" class="trend-label" text-anchor="middle">${p.date}</text>`;
    }
  });

  // Dots
  const dotsSvg = pts.map(p =>
    `<circle cx="${p.x}" cy="${p.y}" r="4" class="trend-dot"><title>${p.score}%</title></circle>`
  ).join('');

  return `<div class="trend-chart"><svg viewBox="0 0 ${w} ${h}">
    <defs><linearGradient id="trendGradient" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="var(--brand-primary)" stop-opacity=".4"/>
      <stop offset="100%" stop-color="var(--brand-primary)" stop-opacity="0"/>
    </linearGradient></defs>
    ${gridSvg}
    <path d="${areaPath}" class="trend-area"/>
    <path d="${linePath}" class="trend-line"/>
    ${dotsSvg}${xLabels}
  </svg></div>`;
}

/**
 * Render an SVG bar+line chart for daily practice with accuracy overlay.
 * @param {Array} dailyStats - [{day, count, correct}] (oldest first)
 */
function renderAccuracyChart(dailyStats) {
  if (!dailyStats || dailyStats.length === 0) return '';
  const data = [...dailyStats].reverse().slice(-14);
  const w = 760, h = 220;
  const pad = { top: 28, right: 52, bottom: 34, left: 52 };
  const cw = w - pad.left - pad.right;
  const ch = h - pad.top - pad.bottom;

  // Round the count axis up to a nice multiple of 5 so the left labels are friendly
  const maxCount = Math.max(...data.map(d => d.count), 1);
  const countCeil = Math.max(5, Math.ceil(maxCount / 5) * 5);
  const barW = Math.min(30, (cw / data.length) * 0.55);
  const gap = cw / data.length;

  // Bars (left axis = number of questions done)
  let barsSvg = '';
  data.forEach((d, i) => {
    const x = pad.left + i * gap + (gap - barW) / 2;
    const bh = (d.count / countCeil) * ch;
    const y = pad.top + ch - bh;
    barsSvg += `<rect x="${x}" y="${y}" width="${barW}" height="${bh > 0 ? bh : 1}" class="accuracy-bar"><title>${(d.day || '').slice(5)}: ${d.count}题</title></rect>`;
  });

  // Accuracy line (right axis = percentage)
  const linePts = data.map((d, i) => {
    const x = pad.left + i * gap + gap / 2;
    const acc = d.count > 0 ? d.correct / d.count : 0;
    const y = pad.top + ch - acc * ch;
    return { x, y, acc, day: (d.day || '').slice(5) };
  });
  const linePath = linePts.map((p, i) => `${i === 0 ? 'M' : 'L'}${p.x},${p.y}`).join(' ');
  const dotsSvg = linePts.map(p =>
    `<circle cx="${p.x}" cy="${p.y}" r="4" class="accuracy-dot"><title>${p.day}: ${Math.round(p.acc * 100)}%</title></circle>`
  ).join('');

  // Gridlines
  let gridSvg = '';
  for (let i = 0; i <= 4; i++) {
    const y = pad.top + ch * i / 4;
    gridSvg += `<line x1="${pad.left}" y1="${y}" x2="${w - pad.right}" y2="${y}" class="trend-grid"/>`;
  }

  // Left axis (题数)
  let leftAxisSvg = '';
  for (let i = 0; i <= 4; i++) {
    const y = pad.top + ch * i / 4;
    const val = Math.round(countCeil - countCeil * i / 4);
    leftAxisSvg += `<text x="${pad.left - 10}" y="${y + 4}" class="trend-axis-label" text-anchor="end">${val}</text>`;
  }
  leftAxisSvg += `<text x="${pad.left - 10}" y="${pad.top - 10}" class="trend-axis-label" text-anchor="end">题数</text>`;

  // Right axis (正确率 %)
  let rightAxisSvg = '';
  for (let i = 0; i <= 4; i++) {
    const y = pad.top + ch * i / 4;
    const val = 100 - i * 25;
    rightAxisSvg += `<text x="${w - pad.right + 10}" y="${y + 4}" class="trend-axis-label" text-anchor="start">${val}%</text>`;
  }
  rightAxisSvg += `<text x="${w - pad.right + 10}" y="${pad.top - 10}" class="trend-axis-label" text-anchor="start">正确率</text>`;

  // X labels
  const labelStep = Math.max(1, Math.floor(data.length / 8));
  let xLabels = '';
  linePts.forEach((p, i) => {
    if (i % labelStep === 0 || i === linePts.length - 1) {
      xLabels += `<text x="${p.x}" y="${h - 8}" class="trend-label" text-anchor="middle">${p.day}</text>`;
    }
  });

  return `<div class="accuracy-chart"><svg viewBox="0 0 ${w} ${h}">
    ${gridSvg}${leftAxisSvg}${rightAxisSvg}
    ${barsSvg}
    <path d="${linePath}" class="accuracy-line"/>
    ${dotsSvg}${xLabels}
  </svg></div>`;
}

/* ============================================================
   Teacher Dashboard
   ============================================================ */
async function renderTeacher() {
  if (API.getRole() !== 'teacher' && API.getRole() !== 'admin') { navigate('#/'); return; }

  const app = document.getElementById('app');
  app.innerHTML = `<div class="practice-nav"><a class="back-btn" href="javascript:void(0)" onclick="exitTo('#/')">← 返回</a><span style="font-weight:700">教师面板</span></div><div class="text-center" style="padding:40px"><p class="text-muted">加载中...</p></div>`;

  let students = [], stats = {};
  try {
    [students, stats] = await Promise.all([API.getTeacherStudents(), API.getTeacherStats()]);
  } catch {}

  // Compute class-wide totals
  const totalAnswered = students.reduce((sum, s) => sum + (s.total_answered || 0), 0);
  const totalExams = stats.topStudents?.reduce((sum, s) => sum + (s.exams || 0), 0) || 0;
  const classAccuracy = totalAnswered > 0
    ? Math.round(students.reduce((sum, s) => sum + (s.total_correct || 0), 0) / totalAnswered * 100)
    : 0;

  // Student cards
  let studentCards = students.map(s => {
    const acc = s.total_answered > 0 ? Math.round(s.total_correct / s.total_answered * 100) : 0;
    const accColor = acc >= 80 ? 'var(--success)' : acc >= 50 ? 'var(--warning)' : 'var(--error)';
    return `
    <div class="stu-card" onclick="viewStudent(${s.id})">
      <div class="stu-card-head">
        <div class="stu-avatar">${escapeHtml(s.avatar) || '😊'}</div>
        <div class="stu-info">
          <div class="stu-name">${escapeHtml(s.nickname)}</div>
          <div class="stu-id">@${escapeHtml(s.username)}</div>
        </div>
        <div class="stu-actions" onclick="event.stopPropagation()">
          <button class="btn-icon" data-action="resetPwd" data-id="${s.id}" data-name="${escapeHtml(s.nickname)}" title="重置密码">🔑</button>
          <button class="btn-icon btn-danger-icon" data-action="deleteStudent" data-id="${s.id}" data-name="${escapeHtml(s.nickname)}" title="删除">🗑</button>
        </div>
      </div>
      <div class="stu-stats-row">
        <div class="stu-stat"><span class="stu-stat-val">${s.total_answered}</span><span class="stu-stat-lbl">已做</span></div>
        <div class="stu-stat"><span class="stu-stat-val" style="color:${accColor}">${s.total_answered > 0 ? acc + '%' : '-'}</span><span class="stu-stat-lbl">正确率</span></div>
        <div class="stu-stat"><span class="stu-stat-val">${s.best_score != null ? s.best_score + '%' : '-'}</span><span class="stu-stat-lbl">最高分</span></div>
        <div class="stu-stat"><span class="stu-stat-val">${s.exam_count}</span><span class="stu-stat-lbl">考试</span></div>
      </div>
      ${s.class_name ? `<div class="stu-tag">${escapeHtml(s.class_name)}</div>` : ''}
      ${s.last_active ? `<div class="stu-last">最近活跃: ${s.last_active}</div>` : '<div class="stu-last">尚未活跃</div>'}
    </div>`;
  }).join('');

  // Weak KP list
  let weakHtml = stats.weakKp?.filter(x => x.kp.startsWith('kp')).map(x => {
    const pct = x.total > 0 ? Math.round(x.wrong / x.total * 100) : 0;
    return `<div class="weak-item"><span>${KP_NAMES[x.kp] || x.kp}</span><div class="weak-bar"><div class="weak-fill" style="width:${pct}%"></div></div><span>${pct}% 错误</span></div>`;
  }).join('') || '';

  // Radar chart for class-wide KP mastery
  const radarHtml = renderRadarChart(stats.weakKp || [], { accuracyMode: false });

  // Top students ranking
  let rankHtml = '';
  if (stats.topStudents?.length) {
    const rankRows = stats.topStudents.map((s, i) => {
      const rankClass = i === 0 ? 'gold' : i === 1 ? 'silver' : i === 2 ? 'bronze' : 'normal';
      return `<tr>
        <td><span class="rank-num ${rankClass}">${i + 1}</span></td>
        <td>${escapeHtml(s.nickname)}</td>
        <td class="rank-score">${Math.round(s.avg_score)}%</td>
        <td class="rank-exams">${s.exams}次</td>
      </tr>`;
    }).join('');
    rankHtml = `<div class="section animate-in">
      <h2 class="section-title">成绩排行榜</h2>
      <div class="table-wrap"><table class="rank-table">
        <thead><tr><th>排名</th><th>学生</th><th>平均分</th><th>考试次数</th></tr></thead>
        <tbody>${rankRows}</tbody>
      </table></div>
    </div>`;
  }

  app.innerHTML = `
    <div class="practice-nav"><a class="back-btn" href="javascript:void(0)" onclick="exitTo('#/')">← 返回</a><span style="font-weight:700">👩‍🏫 教师面板</span></div>
    <div class="stats-grid animate-in" style="margin:16px 0">
      <div class="stat-card"><div class="stat-icon">👥</div><div class="stat-value">${stats.totalStudents || 0}</div><div class="stat-label">学生总数</div></div>
      <div class="stat-card"><div class="stat-icon">📈</div><div class="stat-value">${stats.activeToday || 0}</div><div class="stat-label">今日活跃</div></div>
      <div class="stat-card"><div class="stat-icon">📊</div><div class="stat-value">${stats.avgScore || 0}%</div><div class="stat-label">平均分</div></div>
      <div class="stat-card"><div class="stat-icon">📝</div><div class="stat-value">${totalAnswered}</div><div class="stat-label">总做题</div></div>
      <div class="stat-card"><div class="stat-icon">🎯</div><div class="stat-value">${totalExams}</div><div class="stat-label">总考试</div></div>
      <div class="stat-card"><div class="stat-icon">✅</div><div class="stat-value">${classAccuracy}%</div><div class="stat-label">平均正确率</div></div>
    </div>

    <div class="dashboard-grid animate-in">
      <div class="section">
        <h2 class="section-title">知识掌握分布</h2>
        ${radarHtml ? `<div class="radar-chart">${radarHtml}</div>` : '<p class="text-muted text-center" style="padding:40px">暂无数据</p>'}
      </div>
      <div class="section">
        <h2 class="section-title">薄弱知识点</h2>
        ${weakHtml ? `<div class="weak-list">${weakHtml}</div>` : '<p class="text-muted text-center" style="padding:40px">暂无数据</p>'}
      </div>
    </div>

    ${rankHtml}

    <div class="section animate-in">
      <div class="section-header">
        <h2 class="section-title">学生管理</h2>
        <div class="section-actions">
          <button class="btn btn-sm btn-primary" onclick="showAddStudent()">+ 添加学生</button>
          <button class="btn btn-sm btn-secondary" onclick="showBatchAdd()">+ 批量添加</button>
        </div>
      </div>
      <div class="student-grid">${studentCards || '<p class="text-center text-muted" style="grid-column:1/-1;padding:40px">暂无学生，点击上方按钮添加</p>'}</div>
    </div>`;
  setActiveNav('teacher');
}

function showAddStudent() {
  showModal(`
    <div class="form-group"><label class="form-label">用户名 *</label><input type="text" id="addStuUsername" class="form-input" placeholder="如：zhangsan"></div>
    <div class="form-group"><label class="form-label">昵称 *</label><input type="text" id="addStuNickname" class="form-input" placeholder="如：张三"></div>
    <div class="form-group"><label class="form-label">班级</label><input type="text" id="addStuClass" class="form-input" placeholder="如：1班"></div>
    <div class="form-group"><label class="form-label">年级</label><input type="text" id="addStuGrade" class="form-input" placeholder="如：四年级"></div>
    <div class="form-group"><label class="form-label">家长姓名</label><input type="text" id="addStuParent" class="form-input"></div>
    <div class="form-group"><label class="form-label">家长电话</label><input type="text" id="addStuPhone" class="form-input"></div>
    <div class="form-group"><label class="form-label">默认密码</label><input type="text" id="addStuPwd" class="form-input" value="123456"></div>
    <div id="addStuError" class="auth-error" style="display:none"></div>
    <button class="btn btn-primary btn-block" onclick="doAddStudent()">确认添加</button>
  `, '添加学生');
}

async function doAddStudent() {
  const data = {
    username: document.getElementById('addStuUsername').value.trim(),
    nickname: document.getElementById('addStuNickname').value.trim(),
    className: document.getElementById('addStuClass').value.trim(),
    grade: document.getElementById('addStuGrade').value.trim(),
    parentName: document.getElementById('addStuParent').value.trim(),
    parentPhone: document.getElementById('addStuPhone').value.trim(),
    defaultPassword: document.getElementById('addStuPwd').value || '123456'
  };
  if (!data.username || !data.nickname) {
    document.getElementById('addStuError').textContent = '用户名和昵称必填'; document.getElementById('addStuError').style.display = 'block'; return;
  }
  try {
    await API.createStudent(data);
    hideModal(); renderTeacher();
  } catch (e) {
    document.getElementById('addStuError').textContent = e.message; document.getElementById('addStuError').style.display = 'block';
  }
}

function showBatchAdd() {
  showModal(`
    <p class="text-muted" style="font-size:13px;margin-bottom:16px">每行一个，格式：用户名 昵称 班级（可选）<br>例如：<code>zhangsan 张三 1班</code></p>
    <div class="form-group"><textarea id="batchInput" class="form-input" rows="8" placeholder="zhangsan 张三 1班&#10;lisi 李四 2班&#10;wangwu 王五 1班"></textarea></div>
    <div class="form-group"><label class="form-label">默认密码</label><input type="text" id="batchPwd" class="form-input" value="123456"></div>
    <div id="batchResult" style="display:none;margin-top:12px"></div>
    <button class="btn btn-primary btn-block" onclick="doBatchAdd()">批量创建</button>
  `, '批量添加学生');
}

async function doBatchAdd() {
  const text = document.getElementById('batchInput').value.trim();
  const pwd = document.getElementById('batchPwd').value || '123456';
  if (!text) return;

  const lines = text.split('\n').filter(l => l.trim());
  const students = lines.map(line => {
    const parts = line.trim().split(/\s+/);
    return { username: parts[0], nickname: parts[1] || parts[0], className: parts[2] || '' };
  });

  const resultEl = document.getElementById('batchResult');
  resultEl.style.display = 'block';
  resultEl.innerHTML = '<p class="text-muted">创建中...</p>';

  try {
    const result = await API.batchCreateStudents(students, pwd);
    let html = `<div class="batch-result"><p style="color:var(--success)">成功创建 ${result.created.length} 个学生</p>`;
    if (result.errors.length > 0) {
      html += `<p style="color:var(--error)">${result.errors.length} 个失败</p>`;
    }
    html += `<p>默认密码: <code>${result.defaultPassword}</code></p>`;
    html += '<div class="batch-list">' + result.created.map(s => `<span class="batch-item">${escapeHtml(s.nickname)}(@${escapeHtml(s.username)})</span>`).join('') + '</div>';
    html += `<button class="btn btn-primary" style="margin-top:12px" onclick="hideModal();renderTeacher()">完成</button></div>`;
    resultEl.innerHTML = html;
  } catch (e) {
    resultEl.innerHTML = `<p style="color:var(--error)">${escapeHtml(e.message)}</p>`;
  }
}

async function resetPwd(id, name) {
  if (!confirm(`确认重置 "${name}" 的密码为 123456？`)) return;
  try {
    await API.resetStudentPassword(id, '123456');
    alert('密码已重置为 123456');
  } catch (e) { alert(e.message); }
}

async function deleteStudent(id, name) {
  if (!confirm(`确认删除学生 "${name}"？此操作不可恢复！`)) return;
  try {
    await API.deleteStudent(id);
    renderTeacher();
  } catch (e) { alert(e.message); }
}

async function viewStudent(id) {
  const app = document.getElementById('app');
  app.innerHTML = `<div class="practice-nav"><a class="back-btn" href="#/teacher">← 返回</a><span style="font-weight:700">学生学习档案</span></div><div class="text-center" style="padding:40px"><p class="text-muted">加载中...</p></div>`;

  let data = {};
  try { data = await API.getStudentProfile(id); } catch {}

  const { student, profile, byKp, recentExams, recentWrong, totalAnswered, totalCorrect, dailyStats } = data;
  const totalWrong = totalAnswered - totalCorrect;
  const accuracy = totalAnswered > 0 ? Math.round(totalCorrect / totalAnswered * 100) : 0;

  // Knowledge point progress bars
  let kpHtml = byKp?.map(k => {
    const pct = k.answered > 0 ? Math.round(k.correct / k.answered * 100) : 0;
    const color = pct >= 80 ? 'var(--success)' : pct >= 50 ? 'var(--warning)' : 'var(--error)';
    return `<div class="weak-item">
      <span class="weak-kp-name">${KP_NAMES[k.kp] || k.kp}</span>
      <div class="weak-bar"><div class="weak-fill" style="width:${pct}%;background:${color}"></div></div>
      <span class="weak-kp-val">${k.correct}/${k.answered} (${pct}%)</span>
    </div>`;
  }).join('') || '';

  // Radar chart for student KP mastery
  const radarHtml = byKp?.length ? renderRadarChart(byKp, { accuracyMode: true }) : '';

  // Exam score trend chart
  const trendHtml = renderTrendChart(recentExams || []);

  // Daily accuracy chart
  const accuracyHtml = renderAccuracyChart(dailyStats || []);

  // Exam history list
  let examHtml = recentExams?.map(e => {
    const d = new Date(e.started_at);
    const typeLabel = EXAM_TYPE_MAP[e.exam_type] || e.exam_type || '模拟测试';
    return `<div class="exam-history-item">
      <span class="exam-type-badge">${typeLabel}</span>
      <span class="exam-score ${e.score >= 80 ? 'text-success' : e.score >= 60 ? '' : 'text-error'}">${e.score}%</span>
      <span>${e.correct}/${e.total}题</span>
      <span>${e.time_spent ? Math.floor(e.time_spent/60) + '分' + e.time_spent%60 + '秒' : '-'}</span>
      <span>${d.toLocaleDateString()}</span>
    </div>`;
  }).join('') || '';

  // Wrong questions
  let wrongHtml = recentWrong?.slice(0, 10).map(w => {
    const labels = 'ABCD';
    const opts = safeParse(w.options, []);
    return `<div class="wrong-item">
      <div class="wrong-q">${formatQuestionTitle(w.title)}</div>
      <div class="wrong-detail">
        <span class="text-error">你的答案: ${labels[w.selected] || '-'}</span>
        <span class="text-success">正确答案: ${labels[w.answer] || '-'}</span>
      </div>
    </div>`;
  }).join('') || '';

  // Old daily bar chart (kept for compatibility)
  let dailyHtml = dailyStats?.slice(0, 14).reverse().map(d => {
    const barH = Math.min(d.count * 4, 80);
    return `<div class="daily-bar-wrap">
      <div class="daily-bar" style="height:${barH}px" title="${d.count}题 正确${d.correct}"></div>
      <div class="daily-label">${d.day?.slice(5)}</div>
    </div>`;
  }).join('') || '';

  app.innerHTML = `
    <div class="practice-nav"><a class="back-btn" href="#/teacher">← 返回</a><span style="font-weight:700">${escapeHtml(student?.nickname) || '学生'} 的学习档案</span></div>

    <div class="profile-header animate-in">
      <div class="profile-avatar">${escapeHtml(student?.avatar) || '😊'}</div>
      <div class="profile-info">
        <h2>${escapeHtml(student?.nickname)}</h2>
        <p>@${escapeHtml(student?.username)} · ${escapeHtml(profile?.class_name || '未分班')} · ${escapeHtml(profile?.grade || '')}</p>
        ${profile?.parent_name ? `<p>家长: ${escapeHtml(profile.parent_name)} ${escapeHtml(profile.parent_phone || '')}</p>` : ''}
        <p>注册时间: ${student?.created_at?.slice(0,10)}</p>
      </div>
    </div>

    <div class="stats-grid animate-in" style="margin:16px 0">
      <div class="stat-card"><div class="stat-icon">📝</div><div class="stat-value">${totalAnswered || 0}</div><div class="stat-label">总做题</div></div>
      <div class="stat-card"><div class="stat-icon">✅</div><div class="stat-value">${totalCorrect || 0}</div><div class="stat-label">正确数</div></div>
      <div class="stat-card"><div class="stat-icon">❌</div><div class="stat-value">${totalWrong || 0}</div><div class="stat-label">错题数</div></div>
      <div class="stat-card"><div class="stat-icon">📊</div><div class="stat-value">${accuracy}%</div><div class="stat-label">正确率</div></div>
      <div class="stat-card"><div class="stat-icon">🎯</div><div class="stat-value">${recentExams?.length || 0}</div><div class="stat-label">考试次数</div></div>
      <div class="stat-card"><div class="stat-icon">⭐</div><div class="stat-value">${data.examBest != null ? data.examBest + '%' : '-'}</div><div class="stat-label">最高分</div></div>
    </div>

    <div class="dashboard-grid animate-in">
      <div class="section">
        <h2 class="section-title">知识掌握雷达</h2>
        ${radarHtml ? `<div class="radar-chart">${radarHtml}</div>` : '<p class="text-muted text-center" style="padding:40px">暂无数据</p>'}
      </div>
      <div class="section">
        <h2 class="section-title">知识点详情</h2>
        ${kpHtml ? `<div class="weak-list">${kpHtml}</div>` : '<p class="text-muted text-center" style="padding:40px">暂无数据</p>'}
      </div>
    </div>

    ${trendHtml ? `<div class="section animate-in"><h2 class="section-title">考试分数趋势</h2>${trendHtml}</div>` : ''}

    ${accuracyHtml ? `<div class="section animate-in"><h2 class="section-title">每日做题与正确率</h2>${accuracyHtml}</div>` : ''}

    ${examHtml ? `<div class="section animate-in"><h2 class="section-title">考试记录</h2><div class="exam-history">${examHtml}</div></div>` : ''}

    ${wrongHtml ? `<div class="section animate-in"><h2 class="section-title">最近错题</h2><div class="wrong-list">${wrongHtml}</div></div>` : ''}`;
}

function showModal(html, title) {
  let overlay = document.getElementById('modalOverlay');
  if (!overlay) { overlay = document.createElement('div'); overlay.id = 'modalOverlay'; document.body.appendChild(overlay); }
  const header = title ? `<div class="modal-header"><h3>${title}</h3><button class="modal-close" onclick="hideModal()">&times;</button></div>` : '';
  overlay.innerHTML = `<div class="modal-mask" onclick="hideModal()"></div><div class="modal-content">${header}<div class="modal-body">${html}</div></div>`;
  overlay.classList.add('show');
}

function hideModal() {
  const overlay = document.getElementById('modalOverlay');
  if (overlay) overlay.classList.remove('show');
}

/* ============================================================
   Navigation
   ============================================================ */
function renderBottomTab(section) {
  const isMobile = window.matchMedia('(max-width: 640px)').matches;
  if (!isMobile) {
    // Remove bottom tab on desktop
    const existing = document.querySelector('.bottom-tab');
    if (existing) existing.remove();
    document.body.style.paddingBottom = '';
    return;
  }

  const tabs = [
    { id: '', icon: '🏠', label: '首页' },
    { id: 'practice', icon: '📖', label: '练习' },
    { id: 'coding', icon: '💻', label: '编程' },
    { id: 'mock', icon: '🎓', label: '考试' },
    { id: 'review', icon: '📝', label: '错题' },
  ];

  const html = `<div class="bottom-tab">
    ${tabs.map(t => `<a href="#/${t.id || ''}" class="${t.id === section ? 'active' : ''}" data-tab="${t.id}">
      <span class="tab-icon">${t.icon}</span>
      <span>${t.label}</span>
    </a>`).join('')}
  </div>`;

  let el = document.querySelector('.bottom-tab');
  if (el) {
    el.style.display = ''; // restore if it was hidden during an exam
    el.innerHTML = tabs.map(t => `<a href="#/${t.id || ''}" class="${t.id === section ? 'active' : ''}" data-tab="${t.id}">
      <span class="tab-icon">${t.icon}</span>
      <span>${t.label}</span>
    </a>`).join('');
  } else {
    document.body.insertAdjacentHTML('beforeend', html);
  }
}
function setActiveNav(section) {
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.classList.toggle('active', a.dataset.section === section);
  });
}

function renderNav() {
  const user = API.getUser();
  return `
    <nav class="nav">
      <a class="nav-brand" href="#/">GESP <span class="badge">L${currentLevel}</span></a>
      <div class="level-switch">
        <select onchange="setLevel(+this.value)" aria-label="选择等级" title="切换考级等级">
          ${Array.from({ length: 8 }, (_, i) => `<option value="${i + 1}" ${i + 1 === currentLevel ? 'selected' : ''}>L${i + 1}</option>`).join('')}
        </select>
      </div>
      <div class="nav-links">
        <a href="#/" data-section="">首页</a>
        <a href="#/practice/kp01" data-section="practice">练习</a>
        <a href="#/coding" data-section="coding">编程</a>
        <a href="#/mock" data-section="mock">考试</a>
        <a href="#/review" data-section="review">错题</a>
        ${user?.role === 'teacher' ? '<a href="#/teacher" data-section="teacher">管理</a>' : ''}
      </div>
      <div class="nav-user">
        <button class="nav-avatar" onclick="openAvatarPicker()" title="更换头像" aria-label="更换头像">
          <span class="nav-avatar-emoji">${escapeHtml(getAvatar(user))}</span>
        </button>
        <span class="xp-badge">${escapeHtml(user?.nickname || '')}</span>
        <a class="nav-logout" onclick="confirmLogout(event)" title="退出登录" role="button" aria-label="退出登录">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
            <polyline points="16 17 21 12 16 7"/>
            <line x1="21" y1="12" x2="9" y2="12"/>
          </svg>
          <span>退出</span>
        </a>
      </div>
    </nav>`;
}

function confirmLogout(e) {
  if (e) e.preventDefault();
  if (!confirm('确定要退出登录吗？')) return;
  API.logout();
  handleRoute(); // hides nav + renders login
}

/* --- Avatar picker --- */
function openAvatarPicker() {
  const user = API.getUser();
  const current = getAvatar(user);
  const groups = [
    { label: '👧 女生款', key: 'girl', list: AVATARS.girl },
    { label: '👦 男生款', key: 'boy', list: AVATARS.boy }
  ];
  const body = `<div class="avatar-picker">
    <p class="avatar-picker-hint">点击选一个喜欢的头像，立刻生效！</p>
    ${groups.map(g => `
      <p class="avatar-group-label">${g.label}</p>
      <div class="avatar-grid">
        ${g.list.map(a => `<button class="avatar-option ${a === current ? 'active' : ''}" onclick="selectAvatar('${a}')">${a}</button>`).join('')}
      </div>`).join('')}
  </div>`;
  showModal(body, '🎭 我的头像');
}

async function selectAvatar(a) {
  try {
    await API.updateAvatar(a);
    hideModal();
    // Update only the visible avatar(s) — do NOT re-render the current route,
    // otherwise an in-progress practice/exam loses its state and restarts.
    const navEmoji = document.querySelector('.nav-avatar-emoji');
    if (navEmoji) navEmoji.textContent = a;
    const heroEmoji = document.querySelector('.hero-avatar');
    if (heroEmoji) heroEmoji.textContent = a;
  } catch (e) {
    alert('更换头像失败：' + e.message);
  }
}

/* ============================================================
   Init
   ============================================================ */
async function init() {
  document.body.insertAdjacentHTML('afterbegin', renderNav());
  document.body.classList.add('page-body');

  await API.tryRestore();

  window.addEventListener('hashchange', () => {
    document.getElementById('app').innerHTML = '';
    const oldNav = document.querySelector('.nav');
    if (oldNav) oldNav.outerHTML = renderNav();
    handleRoute();
  });

  // Force re-render when clicking a nav link that matches the current hash.
  // Skip while a practice/exam session is active so it does not silently lose progress.
  document.addEventListener('click', (e) => {
    const link = e.target.closest('.nav-links a');
    if (!link) return;
    const href = link.getAttribute('href');
    const inSession = (practiceState.questions && practiceState.current > 0 && practiceState.current < practiceState.questions.length) || mockState.started;
    if (href && location.hash === href && !inSession) {
      e.preventDefault();
      document.getElementById('app').innerHTML = '';
      handleRoute();
    }
  });

  // Delegate teacher action buttons (reset/delete) via data attributes
  // to avoid inline-onclick injection through student nicknames.
  // Use capture phase so it fires before the card's stopPropagation handlers.
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-action]');
    if (!btn) return;
    const { action, id, name } = btn.dataset;
    if (action === 'resetPwd') resetPwd(id, name);
    else if (action === 'deleteStudent') deleteStudent(id, name);
  }, true);

  handleRoute();
}

document.addEventListener('DOMContentLoaded', init);
