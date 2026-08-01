# GESP 一级 C++ 编程练习平台

> 孙老师思维课堂 | GESP C++ Level 1 Practice System

一站式 C++ 编程学习与考试平台，专为 GESP（CCF 编程能力等级认证）一级备考设计。支持知识点练习、模拟考试（含在线代码编译运行）、错题复习、艾宾豪斯遗忘曲线智能复习计划。

**在线体验：** 请参考下方 [部署指南](#部署指南) 自行搭建

---

## 功能亮点

### 学生端

| 功能 | 说明 |
|------|------|
| **首页仪表板** | 学习进度总览、今日目标环形进度、连续学习天数、待复习提醒 |
| **知识点练习** | 8 个知识模块各 50 道题，逐题练习即时反馈，含详细解析 |
| **模拟考试** | 10 套预设试卷 + 随机组卷，45 分钟倒计时，模拟真实考试环境 |
| **在线编程** | 考试中编程题支持 C++ 代码编写、编译运行、测试用例自动比对 |
| **错题复习** | 所有错题集中展示，支持逐题巩固练习，答对即从错题库移除 |
| **艾宾豪斯复习** | 基于遗忘曲线（1/2/4/7/15/30 天间隔）自动安排复习计划 |
| **知识雷达图** | SVG 雷达图直观展示 8 个知识点掌握程度 |
| **学习趋势** | 每日做题量与正确率柱状图 + 折线图 |

### 教师端

| 功能 | 说明 |
|------|------|
| **学生管理** | 添加/删除/重置密码，支持批量创建 |
| **学生档案** | 查看个人学习数据、知识点掌握、考试记录、错题分析 |
| **班级统计** | 薄弱知识点分析、成绩排行榜、全班正确率 |
| **雷达图表** | 班级整体知识掌握分布可视化 |

---

## 题库概览

| 类别 | 数量 | 说明 |
|------|------|------|
| 知识点练习题 | 400 题 | 8 个模块 × 50 题（选择 + 判断 + 编程） |
| 模拟考试题 | 30 题 | 专属考试题库 |
| 真题收录 | 83 题 | 2023.12 ~ 2025.06 历次 GESP 一级真题 |
| 编程题 | 64 题 | 覆盖所有知识点，含测试用例 |
| 模拟试卷 | 10 套 | 每套 30 题（含至少 2 道编程题） |

### 知识点覆盖

| 编号 | 模块 | 内容 |
|------|------|------|
| kp01 | 变量与数据类型 | int/double/char/bool、sizeof、类型转换 |
| kp02 | 基本运算 | 算术/关系/逻辑运算、优先级、类型提升 |
| kp03 | 输入输出 | cin/cout/printf/scanf、格式化输出 |
| kp04 | 条件语句 | if/else、switch/case、嵌套条件 |
| kp05 | 循环语句 | for/while、break/continue、嵌套循环 |
| kp06 | 数组基础 | 数组声明/初始化、遍历、查找 |
| kp07 | 字符与字符串 | char/string、ASCII 码、字符串操作 |
| kp08 | 函数基础 | 函数定义/调用、参数传递、返回值 |

---

## 技术栈

```
┌─────────────────────────────────────────┐
│              Frontend (SPA)              │
│  HTML + CSS + Vanilla JavaScript         │
│  SVG Charts (零依赖)                     │
│  Code Editor (textarea + 行号)           │
└────────────────┬────────────────────────┘
                 │ REST API (JSON)
┌────────────────┴────────────────────────┐
│              Backend                     │
│  Node.js + Express                       │
│  JWT Authentication                      │
│  sql.js (SQLite WASM)                   │
│  g++ (C++ 编译运行)                      │
└────────────────┬────────────────────────┘
                 │
┌────────────────┴────────────────────────┐
│            Infrastructure               │
│  PM2 (进程管理)                          │
│  Nginx (反向代理 + SSL)                  │
│  Let's Encrypt (免费证书)                │
└─────────────────────────────────────────┘
```

- **前端：** 纯原生 HTML/CSS/JS，无框架依赖，零构建步骤
- **后端：** Node.js + Express，JWT 鉴权
- **数据库：** SQLite（通过 sql.js WASM 运行，无需额外安装）
- **编程题：** 服务端 g++ 编译运行，5 秒超时，沙箱隔离
- **部署：** PM2 进程守护 + Nginx 反向代理 + HTTPS

---

## 快速开始

### 本地开发

```bash
# 克隆仓库
git clone git@github.com:asunzhoua/gesp-practice.git
cd gesp-practice

# 安装依赖
npm install

# 启动开发服务器（支持热重载）
npm run dev
```

浏览器打开 `http://localhost:3000`

### 初始化数据

```bash
# 创建种子数据（教师账号 + 学生示例 + 题库）
node server/seed.js

# 创建模拟试卷
node server/seed-papers.js
```

### 默认账号

| 角色 | 用户名 | 密码 |
|------|--------|------|
| 教师 | teacher | teacher123 |
| 学生 | stu001 | 123456 |

> 首次登录后请立即修改默认密码

---

## 项目结构

```
gesp-practice/
├── public/                  # 前端静态文件
│   ├── index.html           # SPA 入口
│   ├── css/style.css        # 全部样式（含响应式）
│   └── js/
│       ├── app.js           # 核心引擎（路由/渲染/状态管理）
│       └── api.js           # API 客户端
├── server/                  # 后端
│   ├── index.js             # Express 服务入口
│   ├── db.js                # sql.js 数据库封装
│   ├── auth.js              # JWT 鉴权中间件
│   └── routes/
│       ├── auth.js          # 登录/注册
│       ├── questions.js     # 题库/知识点/统计
│       ├── practice.js      # 练习/艾宾豪斯复习
│       ├── exam.js          # 考试/试卷/提交
│       ├── teacher.js       # 教师管理面板
│       └── compiler.js      # C++ 编译运行 API
├── data/                    # 数据库文件（git忽略）
├── real_exam_text/          # 真题原文（参考）
├── .env.example             # 环境变量模板
├── ecosystem.config.js      # PM2 配置
├── package.json
└── nginx.conf               # Nginx 配置模板
```

---

## 部署指南

### 环境要求

- Node.js 20+
- g++ (用于编程题编译运行)
- Nginx (可选，用于反向代理和 HTTPS)
- PM2 (可选，用于进程守护)

### 一键部署

```bash
# 1. 在服务器上创建目录
mkdir -p /opt/gesp && cd /opt/gesp

# 2. 上传项目文件（从本地执行）
tar -czf /tmp/gesp-deploy.tar.gz \
  --exclude='node_modules' --exclude='data/*.db' --exclude='.env' .
scp /tmp/gesp-deploy.tar.gz root@<YOUR_SERVER_IP>:/tmp/

# 3. SSH 到服务器
ssh root@<YOUR_SERVER_IP>
cd /opt/gesp && tar -xzf /tmp/gesp-deploy.tar.gz

# 4. 创建环境配置
cat > .env << 'EOF'
JWT_SECRET=$(openssl rand -hex 32)
PORT=3000
DB_PATH=./data/gesp.db
NODE_ENV=production
EOF

# 5. 安装并启动
npm install --production
node server/seed.js && node server/seed-papers.js
pm2 start ecosystem.config.js && pm2 save && pm2 startup
```

### 配置 HTTPS（可选）

```bash
# 安装 Certbot
apt install certbot python3-certbot-nginx

# 配置 Nginx 反向代理（参考 nginx.conf）
# 然后申请证书
certbot --nginx -d <YOUR_DOMAIN>
```

---

## API 端点

| 方法 | 路径 | 说明 | 权限 |
|------|------|------|------|
| POST | `/api/auth/register` | 注册（仅学生） | 公开 |
| POST | `/api/auth/login` | 登录 | 公开 |
| GET | `/api/auth/me` | 当前用户信息 | 登录 |
| GET | `/api/questions/knowledge-points` | 知识点列表 | 登录 |
| GET | `/api/questions/:kp` | 某知识点题目 | 登录 |
| GET | `/api/questions/stats` | 学习统计数据 | 登录 |
| GET | `/api/exam/papers` | 试卷列表 | 登录 |
| GET | `/api/exam/paper/:id` | 试卷详情 | 登录 |
| POST | `/api/exam/submit` | 提交考试 | 登录 |
| POST | `/api/practice/answer` | 提交答题 | 登录 |
| GET | `/api/practice/review/schedule` | 艾宾豪斯复习计划 | 登录 |
| POST | `/api/compile/compile-run` | 编译运行 C++ 代码 | 登录 |
| GET | `/api/teacher/students` | 学生列表 | 教师 |
| GET | `/api/teacher/student/:id` | 学生详情 | 教师 |
| GET | `/api/teacher/stats` | 班级统计 | 教师 |

---

## 答题卡与考试

每套模拟试卷包含 **30 道题**：

- **25 道选择题**（含判断题）— 即时判分
- **2~5 道编程题** — 在线编写 C++ 代码，服务端编译运行后比对测试用例

考试流程：
1. 选择试卷 → 45 分钟倒计时开始
2. 答题卡实时显示进度（编程题用 ✎ 标记）
3. 编程题可多次"运行代码"测试
4. 提交后查看每题解析和正确答案

---

## 艾宾豪斯遗忘曲线复习

系统基于遗忘曲线自动安排复习计划：

| 轮次 | 间隔 | 说明 |
|------|------|------|
| 第 1 轮 | 1 天 | 首次答错后第 2 天复习 |
| 第 2 轮 | 2 天 | 答对后间隔 2 天 |
| 第 3 轮 | 4 天 | 答对后间隔 4 天 |
| 第 4 轮 | 7 天 | 答对后间隔 7 天 |
| 第 5 轮 | 15 天 | 答对后间隔 15 天 |
| 第 6 轮 | 30 天 | 答对后间隔 30 天，视为"已掌握" |

- 连续答对 → 间隔升级
- 再次答错 → 回到第 1 轮
- 首页显示"今日复习任务"卡片

---

## 响应式设计

| 设备 | 断点 | 布局 |
|------|------|------|
| 电脑 | >1024px | 宽屏布局，多列卡片 |
| 平板 | 641-1024px | 2-3 列自适应 |
| 手机 | ≤640px | 单列，触屏友好，大按钮 |

---

## 安全特性

- 注册仅允许学生角色（教师账号由管理员创建）
- JWT Token 鉴权，7 天有效期
- 编程题编译运行沙箱隔离（5 秒超时，禁止系统调用）
- 编译接口 IP 限频（每分钟 10 次）
- 所有用户输入 HTML 转义防 XSS
- 教师只能重置学生密码（不能重置自己或其他教师）
- `.env` 文件不纳入版本控制

---

## 常用命令

```bash
# 应用管理
pm2 status                    # 查看状态
pm2 logs gesp-practice        # 查看日志
pm2 restart gesp-practice     # 重启

# 数据库维护
node server/seed.js           # 重建种子数据
node server/seed-papers.js    # 重建试卷
cp data/gesp.db data/backup.db  # 备份数据库

# SSL 证书
certbot renew --dry-run       # 测试续期
certbot renew                 # 手动续期
```

---

## License

MIT
