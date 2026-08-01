#!/bin/bash

# GESP 刷题平台 - 美国服务器部署脚本
# 服务器: <YOUR_SERVER_IP>
# 用法: 在本地运行此脚本，会自动上传并部署

set -e

SERVER="<YOUR_SERVER_IP>"
USER="root"
REMOTE_DIR="/opt/gesp"
LOCAL_DIR="$(cd "$(dirname "$0")" && pwd)"

echo "=========================================="
echo "GESP 刷题平台 - 美国服务器部署"
echo "=========================================="
echo "服务器: $SERVER"
echo "远程目录: $REMOTE_DIR"
echo ""

# 1. 在服务器上创建目录
echo "[1/6] 创建远程目录..."
ssh $USER@$SERVER "mkdir -p $REMOTE_DIR/data $REMOTE_DIR/logs"

# 2. 上传项目文件
echo "[2/6] 上传项目文件..."
rsync -avz --progress \
  --exclude 'node_modules' \
  --exclude 'data/*.db' \
  --exclude '.env' \
  "$LOCAL_DIR/" $USER@$SERVER:$REMOTE_DIR/

# 3. 创建环境配置
echo "[3/6] 创建环境配置..."
ssh $USER@$SERVER "cat > $REMOTE_DIR/.env << 'EOF'
JWT_SECRET=gesp-us-server-secret-$(openssl rand -hex 16)
PORT=3000
DB_PATH=./data/gesp.db
NODE_ENV=production
EOF"

# 4. 安装依赖
echo "[4/6] 安装 Node.js 依赖..."
ssh $USER@$SERVER "cd $REMOTE_DIR && npm install --production"

# 5. 初始化数据库
echo "[5/6] 初始化数据库..."
ssh $USER@$SERVER "cd $REMOTE_DIR && node server/seed.js && node server/seed-papers.js"

# 6. 使用 PM2 启动
echo "[6/6] 启动应用..."
ssh $USER@$SERVER "cd $REMOTE_DIR && npm install -g pm2 2>/dev/null || true"
ssh $USER@$SERVER "cd $REMOTE_DIR && pm2 delete gesp-practice 2>/dev/null || true"
ssh $USER@$SERVER "cd $REMOTE_DIR && pm2 start ecosystem.config.js"
ssh $USER@$SERVER "pm2 save"

echo ""
echo "=========================================="
echo "部署完成！"
echo "=========================================="
echo ""
echo "访问地址: http://$SERVER:3000"
echo ""
echo "默认账号:"
echo "  教师: teacher / teacher123"
echo ""
echo "管理命令:"
echo "  ssh $USER@$SERVER"
echo "  cd $REMOTE_DIR"
echo "  pm2 status          # 查看状态"
echo "  pm2 logs            # 查看日志"
echo "  pm2 restart all     # 重启应用"
echo ""
