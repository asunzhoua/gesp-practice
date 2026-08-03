# GESP 一级 C++ 编程练习平台

> 孙老师思维课堂 | GESP C++ Level 1 Practice System

一站式 C++ 编程学习与考试平台，专为 GESP（CCF 编程能力等级认证）一级备考设计：知识点练习、模拟考试（含在线 C++ 编译运行）、错题复习、艾宾豪斯遗忘曲线复习计划。

---

## 功能亮点

### 学生端
- **星空冒险风 UI**：深空蓝主题、全页星星、火箭/宇航员装饰，小学生友好
- **卡通头像系统**：注册即得默认头像，点导航头像即可更换（女生款/男生款两组）
- **情绪价值鼓励系统**：答对随机夸赞，答错安慰 + 成长型提示，练习完成按正确率总结
- **首页仪表板**：学习进度、今日目标环形进度、连续学习天数、知识掌握雷达图
- **知识点练习**：8 个模块，逐题作答即时反馈（服务端判分）
- **模拟考试**：10 套试卷 + 随机组卷，45 分钟倒计时，含编程题在线编译判分
- **错题复习**：全部错题集中展示 + 逐题巩固（答对即移出错题库）
- **艾宾豪斯复习**：1/2/4/7/15/30 天间隔自动安排复习计划

### 教师端
- 学生管理：添加/删除/批量创建/重置密码
- 学生档案：学习数据、知识点掌握、考试记录、错题分析
- 班级统计：薄弱知识点、成绩排行榜、平均正确率

---

## 题库

| 类别 | 数量 | 说明 |
|------|------|------|
| 知识点题 | 400 题 | 8 模块 × 50 题 |
| 模拟题 | 30 题 | 专属考试题库 |
| 真题 | 83 题 | 2023.12 ~ 2025.06 历次 GESP 一级真题 |
| 编程题 | 64 题 | 含测试用例与参考代码 |
| 模拟试卷 | 10 套 | 每套 30 题，≥2 道编程题 |

> 全部 513 题答案已人工逐一审核，解析统一为【解题思路 / 逐步推理 / 其他选项为何错】三段式。

---

## 技术栈

```
┌────────────────────────────────────────┐
│  Frontend (SPA)                        │
│  HTML + CSS + Vanilla JS（零依赖）      │
│  SVG 图表 / emoji 头像 / 深空主题        │
└────────────────┬───────────────────────┘
                 │ REST API (JSON + JWT)
┌────────────────┴───────────────────────┐
│  Backend                              │
│  Node.js + Express                    │
│  sql.js (SQLite WASM)                 │
│  g++（编译运行，异步 + 并发限制）        │
└────────────────┬───────────────────────┘
                 │
┌────────────────┴───────────────────────┐
│  Infrastructure                       │
│  PM2 / Nginx / Let's Encrypt           │
└────────────────────────────────────────┘
```

---

## 快速开始

```bash
# 克隆并安装
git clone git@github.com:asunzhoua/gesp-practice.git
cd gesp-practice
npm install

# 初始化数据（题库 + 教师账号 + 试卷）
node server/seed.js
node server/seed-papers.js

# 启动
npm run dev   # 或 node server/index.js
```

浏览器打开 `http://localhost:3000`

### ⚠️ 默认账号（重要）

- **教师账号**：用户名 `teacher`，**密码为随机生成**。运行 `node server/seed.js` 时，日志会打印：
  ```
  Default teacher account: teacher / <随机密码>
  ```
  > 出于安全考虑，不再使用公开的固定密码。生产部署后请用「改密接口」或直接修改数据库密码。

- **学生账号**：教师创建学生时设置默认密码（默认 `123456`，创建后可改）。

---

## 项目结构

```
gesp-practice/
├── public/                  # 前端 SPA
│   ├── index.html
│   ├── css/style.css        # 深空主题
│   └── js/
│       ├── app.js           # 核心引擎（路由/渲染/状态）
│       └── api.js           # API 客户端
├── server/                  # 后端
│   ├── index.js             # Express 入口（含 DB 自动备份）
│   ├── compile-util.js      # 编译沙箱工具（async exec + 信号量）
│   ├── db.js                # sql.js 封装
│   ├── auth.js              # JWT 鉴权（回查用户）
│   └── routes/
│       ├── auth.js          # 登录/注册/改头像/改密码
│       ├── questions.js     # 题库/知识点/统计
│       ├── practice.js      # 练习/艾宾豪斯复习
│       ├── exam.js          # 试卷/提交（服务端判分）
│       ├── teacher.js       # 教师管理
│       └── compiler.js      # C++ 编译运行（沙箱）
├── data/                    # 数据库 + 自动备份
├── js/                      # 独立静态页题库（旧版）
└── ecosystem.config.js      # PM2 配置
```

---

## API 端点

所有接口除注册/登录外均需 `Authorization: Bearer <token>`。

### 认证（/api/auth）
| 方法 | 路径 | 说明 |
|------|------|------|
| POST | `/register` | 注册（仅学生，限流） |
| POST | `/login` | 登录（限流） |
| GET | `/me` | 当前用户信息 |
| PUT | `/avatar` | 更换头像（emoji） |
| PUT | `/password` | 修改密码（需旧密码） |

### 题库与统计（/api/questions）
| 方法 | 路径 | 说明 |
|------|------|------|
| GET | `/knowledge-points` | 知识点列表 |
| GET | `/stats` | 学习统计（含每日趋势） |
| GET | `/coding-kps` | 含编程题的知识点 |
| GET | `/coding/:kp` | 某知识点编程题 |
| GET | `/:kp` | 某知识点题目（**不含答案**，作答后经 /practice/answer 返回反馈） |

### 练习（/api/practice）
| 方法 | 路径 | 说明 |
|------|------|------|
| POST | `/answer` | 提交答案（服务端判分，返回正确答案+解析） |
| GET | `/review/schedule` | 艾宾豪斯复习计划 |
| GET | `/wrong-ids` | 错题 ID 列表 |
| GET | `/wrong-questions` | 错题详情 |

### 考试（/api/exam）
| 方法 | 路径 | 说明 |
|------|------|------|
| GET | `/papers` | 试卷列表 |
| GET | `/papers/:id` | 试卷元信息 |
| GET | `/paper/:id` | 试卷题目（**不含答案**） |
| GET | `/paper` | 随机组卷 |
| POST | `/submit` | 交卷（服务端判分，返回逐题结果） |
| GET | `/history` | 考试历史 |

### 教师（/api/teacher，需教师角色）
| 方法 | 路径 | 说明 |
|------|------|------|
| POST | `/students` | 创建学生 |
| POST | `/students/batch` | 批量创建 |
| DELETE | `/students/:id` | 删除学生 |
| POST | `/students/:id/reset-password` | 重置密码 |
| GET | `/students/:id/profile` | 学生档案 |
| PUT | `/students/:id/profile` | 更新档案 |
| GET | `/students` | 学生列表 |
| GET | `/student/:id` | 学生详情 |
| GET | `/stats` | 班级统计 |

### 编译（/api/compile）
| 方法 | 路径 | 说明 |
|------|------|------|
| POST | `/compile-run` | 编译运行 C++（沙箱，限流） |
| POST | `/compile-run/test-cases` | 跑测试用例 |

---

## 安全特性

- **编译器沙箱**：编译+运行均降权为 `nobody`，源码规范化防宏/行拼接/注释绕过，黑名单拦截文件/进程/网络/汇编，`ulimit` 限制内存/进程/CPU/文件大小，`timeout -k` 终止，全局并发上限 3
- **认证**：JWT 随机密钥（不硬编码），中间件回查用户存在性（删号即失效），登录/注册/编译限流
- **防作弊**：考试/练习接口不下发答案；交卷后服务端编译验证编程题
- **数据安全**：DB 启动+每日自动备份到 `data/backup/`；交卷即时落盘
- **HTTP 加固**：CORS 同源、nosniff/DENY/no-referrer 安全头、移除 X-Powered-By
- **XSS**：所有用户输入渲染前 `escapeHtml`，头像/昵称白名单校验

---

## 部署指南

### 环境要求
Node.js 20+、g++、Nginx（可选）、PM2（可选）

```bash
# 一键部署
mkdir -p /opt/gesp && cd /opt/gesp
tar -czf /tmp/gesp-deploy.tar.gz --exclude='node_modules' --exclude='data/*.db' --exclude='.env' .
scp /tmp/gesp-deploy.tar.gz root@<YOUR_SERVER>:/tmp/
ssh root@<YOUR_SERVER>
cd /opt/gesp && tar -xzf /tmp/gesp-deploy.tar.gz

# 环境配置（JWT_SECRET 必填）
cat > .env << 'EOF'
JWT_SECRET=$(openssl rand -hex 32)
PORT=3000
DB_PATH=./data/gesp.db
NODE_ENV=production
EOF

npm install --production
node server/seed.js        # 题库 + 教师账号（记录日志里的随机密码）
node server/seed-papers.js # 试卷
pm2 start ecosystem.config.js && pm2 save && pm2 startup
```

---

## 常用命令

```bash
# 进程
pm2 status / pm2 restart gesp-practice / pm2 logs gesp-practice

# 数据
node server/seed.js            # 重建题库（会重置题目数据）
node server/seed-papers.js     # 重建试卷
ls data/backup/                # 自动备份文件

# 权限（生产必做）
chmod 600 .env data/gesp.db
```

---

## 复用指南（给 AI / 二次开发）

1. **改题库**：编辑 `js/questions.js`（QUESTION_BANK 结构），重跑 `node server/seed.js`
2. **改试卷**：编辑 `server/seed-papers.js`，重跑 `node server/seed-papers.js`
3. **加接口**：在 `server/routes/` 对应文件加路由，前端 `public/js/api.js` 加方法
4. **换主题**：改 `public/css/style.css` 的 `:root` 色板变量即可全局换肤
5. **备份/恢复**：`data/backup/` 下按时间戳选备份文件恢复
6. **安全改动后**：先 `node --check` 所有改动文件，再起本地服务测试，最后部署

---

## License

MIT
