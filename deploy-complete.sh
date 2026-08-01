#!/bin/bash
# GESP 刷题平台 - 完整部署脚本（一键执行）
# 在服务器上运行: bash deploy-complete.sh

set -e

DOMAIN="<YOUR_DOMAIN>"
EMAIL="admin@<YOUR_DOMAIN>"
APP_DIR="/opt/gesp"

echo "=========================================="
echo "GESP 刷题平台 - 完整部署"
echo "域名: $DOMAIN"
echo "服务器: $(curl -s ifconfig.me)"
echo "=========================================="

# 1. 系统更新
echo "[1/10] 系统更新..."
apt-get update -qq

# 2. 安装基础依赖
echo "[2/10] 安装基础依赖..."
apt-get install -y -qq curl wget gnupg2 ca-certificates lsb-release nginx ufw

# 3. 安装 Node.js 20
echo "[3/10] 安装 Node.js..."
if ! command -v node &> /dev/null; then
    curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
    apt-get install -y -qq nodejs
fi
echo "Node.js: $(node -v), npm: $(npm -v)"

# 4. 安装 PM2
echo "[4/10] 安装 PM2..."
npm install -g pm2 2>/dev/null || true

# 5. 安装 Certbot
echo "[5/10] 安装 Certbot..."
apt-get install -y -qq certbot python3-certbot-nginx

# 6. 配置 Nginx (HTTP)
echo "[6/10] 配置 Nginx..."
cat > /etc/nginx/sites-available/gesp << 'NGINX_HTTP'
server {
    listen 80;
    server_name <YOUR_DOMAIN>;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
NGINX_HTTP

ln -sf /etc/nginx/sites-available/gesp /etc/nginx/sites-enabled/
rm -f /etc/nginx/sites-enabled/default
nginx -t
systemctl restart nginx
systemctl enable nginx

# 7. 配置防火墙
echo "[7/10] 配置防火墙..."
ufw allow 80/tcp
ufw allow 443/tcp
ufw allow 22/tcp
ufw --force enable

# 8. 准备应用目录
echo "[8/10] 准备应用..."
mkdir -p $APP_DIR/data $APP_DIR/logs

# 9. 安装依赖并初始化
echo "[9/10] 初始化应用..."
cd $APP_DIR

# 安装生产依赖
npm install --production

# 初始化数据库（如果不存在）
if [ ! -f "data/gesp.db" ]; then
    echo "创建数据库..."
    node server/seed.js
    node server/seed-papers.js
fi

# 创建环境配置
cat > .env << EOF
JWT_SECRET=gesp-prod-$(openssl rand -hex 16)
PORT=3000
DB_PATH=./data/gesp.db
NODE_ENV=production
EOF

# 启动应用
pm2 delete gesp-practice 2>/dev/null || true
pm2 start ecosystem.config.js
pm2 save

# 设置开机自启
pm2 startup -u root --hp /root 2>/dev/null || true

# 10. 申请 SSL 证书
echo "[10/10] 申请 SSL 证书..."
certbot --nginx -d $DOMAIN --non-interactive --agree-tos --email $EMAIL || {
    echo "警告: SSL 证书申请失败，请稍后手动运行:"
    echo "  certbot --nginx -d $DOMAIN"
}

echo ""
echo "=========================================="
echo "部署完成！"
echo "=========================================="
echo ""
echo "访问地址:"
echo "  HTTP:  http://$DOMAIN"
echo "  HTTPS: https://$DOMAIN"
echo ""
echo "默认账号: teacher / teacher123"
echo ""
echo "管理命令:"
echo "  pm2 status              # 查看状态"
echo "  pm2 logs gesp-practice  # 查看日志"
echo "  pm2 restart gesp-practice  # 重启"
echo ""
echo "证书续期已自动配置"
echo ""
