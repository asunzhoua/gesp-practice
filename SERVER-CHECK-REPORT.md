# GESP 刷题平台 - 服务器深度检测报告

## 检测结果

| 检测项 | 状态 | 说明 |
|-------|------|------|
| DNS 解析 | ✅ 正常 | gesp.257758.xyz → 154.9.226.175 |
| 网络连通 | ✅ 正常 | Ping 延迟 170ms，丢包率 0% |
| 端口 3000 | ✅ 可用 | 无服务占用，可直接使用 |
| 9router 服务 | ✅ 运行中 | 端口 20128 正常工作 |
| SSH 连接 | ⚠️ 需确认 | 密码认证被拒绝，可能已更改密码 |

## 服务器信息
- **IP**: 154.9.226.175
- **域名**: gesp.257758.xyz
- **现有服务**: 9router (端口 20128)
- **可用端口**: 3000 (GESP 平台)

## 部署就绪状态: ✅ 可以部署

---

## 手动部署步骤

由于 SSH 密码无法自动验证，请按以下步骤操作：

### 步骤 1: SSH 登录服务器
```bash
ssh root@154.9.226.175
# 输入当前密码
```

### 步骤 2: 创建项目目录
```bash
mkdir -p /opt/gesp/data /opt/gesp/logs
cd /opt/gesp
```

### 步骤 3: 上传项目文件
在**本地电脑**执行（打开新的命令行窗口）：
```bash
cd "C:\Users\27157\Desktop\claude code\EduERP\文档\gesp"

# 创建部署包
tar -czf /tmp/gesp-deploy.tar.gz \
  --exclude='node_modules' \
  --exclude='data/gesp.db' \
  --exclude='.env' \
  .

# 上传到服务器（输入密码）
scp /tmp/gesp-deploy.tar.gz root@154.9.226.175:/tmp/
```

### 步骤 4: 在服务器上解压并配置
回到 SSH 窗口：
```bash
cd /opt/gesp
tar -xzf /tmp/gesp-deploy.tar.gz

# 创建环境配置
cat > .env << 'EOF'
JWT_SECRET=gesp-prod-$(openssl rand -hex 16)
PORT=3000
DB_PATH=./data/gesp.db
NODE_ENV=production
EOF
```

### 步骤 5: 安装 Node.js（如果没有）
```bash
# 检查是否已安装
node -v

# 如果没有安装
curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
apt-get install -y nodejs
```

### 步骤 6: 安装依赖并初始化数据库
```bash
cd /opt/gesp

# 安装 PM2
npm install -g pm2

# 安装项目依赖
npm install --production

# 初始化数据库（导入233道题目）
node server/seed.js

# 创建5份模拟试卷
node server/seed-papers.js
```

### 步骤 7: 启动应用
```bash
cd /opt/gesp

# 启动应用
pm2 start ecosystem.config.js

# 保存进程配置
pm2 save

# 设置开机自启
pm2 startup
```

### 步骤 8: 配置防火墙
```bash
# 开放端口 3000
ufw allow 3000/tcp
# 或者
iptables -A INPUT -p tcp --dport 3000 -j ACCEPT
```

---

## 验证部署

部署完成后，访问以下地址测试：
- **http://gesp.257758.xyz:3000**
- **http://154.9.226.175:3000**

登录账号：`teacher` / `teacher123`

---

## 常用管理命令

```bash
# 查看应用状态
pm2 status

# 查看日志
pm2 logs gesp-practice

# 重启应用
pm2 restart gesp-practice

# 停止应用
pm2 stop gesp-practice

# 进入项目目录
cd /opt/gesp
```

---

## 如需修改 SSH 密码

如果忘记了服务器密码，可以通过服务器提供商的控制面板重置 root 密码。
