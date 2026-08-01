# GESP 刷题平台 - 美国服务器部署指南

## 部署信息
- **服务器**: 154.9.226.175
- **访问地址**: http://154.9.226.175:3000
- **默认账号**: teacher / teacher123

## 部署步骤

### 方式一：手动部署（推荐）

#### 1. 打包项目
在本地电脑运行：
```bash
cd "C:\Users\27157\Desktop\claude code\EduERP\文档\gesp"

# 创建部署包（排除不需要的文件）
tar -czf gesp-deploy.tar.gz \
  --exclude='node_modules' \
  --exclude='data/*.db' \
  --exclude='.env' \
  .
```

#### 2. 上传到服务器
使用 SCP 或其他工具上传 `gesp-deploy.tar.gz` 到服务器：
```bash
scp gesp-deploy.tar.gz root@154.9.226.175:/tmp/
```

#### 3. 在服务器上部署
```bash
# SSH 登录服务器
ssh root@154.9.226.175

# 创建目录
mkdir -p /opt/gesp
cd /opt/gesp

# 解压项目
tar -xzf /tmp/gesp-deploy.tar.gz

# 创建环境配置
cat > .env << 'EOF'
JWT_SECRET=gesp-us-$(openssl rand -hex 16)
PORT=3000
DB_PATH=./data/gesp.db
NODE_ENV=production
EOF

# 安装 Node.js（如果没有）
curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
apt-get install -y nodejs

# 安装 PM2
npm install -g pm2

# 安装依赖
npm install --production

# 初始化数据库
node server/seed.js
node server/seed-papers.js

# 启动应用
pm2 start ecosystem.config.js
pm2 save
pm2 startup
```

### 方式二：使用部署脚本

```bash
# 上传部署脚本到服务器
scp deploy-server.sh root@154.9.226.175:/tmp/

# 在服务器上运行
ssh root@154.9.226.175
bash /tmp/deploy-server.sh
```

## 部署后验证

1. 访问 http://154.9.226.175:3000
2. 使用账号 `teacher` / `teacher123` 登录
3. 测试练习和考试功能

## 管理命令

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

## 数据备份

数据库文件位于 `/opt/gesp/data/gesp.db`，建议定期备份：

```bash
# 备份数据库
cp /opt/gesp/data/gesp.db /opt/gesp/data/gesp.db.backup.$(date +%Y%m%d)
```

## 防火墙配置

确保端口 3000 开放：

```bash
# 如果使用 ufw
ufw allow 3000/tcp

# 如果使用 iptables
iptables -A INPUT -p tcp --dport 3000 -j ACCEPT
```

## 常见问题

### Q: 端口被占用？
```bash
# 查找占用端口的进程
lsof -i :3000

# 杀死进程
kill -9 <PID>
```

### Q: 应用无法启动？
```bash
# 查看详细日志
pm2 logs gesp-practice --lines 50
```

### Q: 数据库损坏？
```bash
# 重新初始化数据库
cd /opt/gesp
rm data/gesp.db
node server/seed.js
node server/seed-papers.js
pm2 restart gesp-practice
```

## 注意事项

1. 服务器同时运行着 9router 服务（端口 20128），不会冲突
2. 建议定期备份数据库
3. 生产环境建议配置 HTTPS（使用 Let's Encrypt）
4. 如果需要域名访问，配置 DNS 指向 154.9.226.175
