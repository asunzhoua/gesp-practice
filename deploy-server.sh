#!/bin/bash

# GESP 刷题平台 - 一键部署脚本（在服务器上运行）
# 用法: 上传此脚本到服务器后运行 bash deploy-server.sh

set -e

echo "=========================================="
echo "GESP 刷题平台 - 服务器端部署"
echo "=========================================="

# 检查 Node.js
if ! command -v node &> /dev/null; then
    echo "安装 Node.js 20.x..."
    curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
    apt-get install -y nodejs
fi

echo "Node.js 版本: $(node -v)"
echo "npm 版本: $(npm -v)"

# 安装 PM2
if ! command -v pm2 &> /dev/null; then
    echo "安装 PM2..."
    npm install -g pm2
fi

# 安装生产依赖
echo "安装依赖..."
cd /opt/gesp
npm install --production

# 初始化数据库
echo "初始化数据库..."
node server/seed.js
node server/seed-papers.js

# 启动应用
echo "启动应用..."
pm2 delete gesp-practice 2>/dev/null || true
pm2 start ecosystem.config.js
pm2 save
pm2 startup

echo ""
echo "=========================================="
echo "部署完成！"
echo "=========================================="
echo ""
echo "访问地址: http://$(curl -s ifconfig.me):3000"
echo ""
echo "默认账号: teacher / teacher123"
echo ""
echo "常用命令:"
echo "  pm2 status"
echo "  pm2 logs gesp-practice"
echo "  pm2 restart gesp-practice"
