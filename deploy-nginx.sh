#!/bin/bash
# GESP 刷题平台 - 美国服务器一键部署脚本
# 域名: <YOUR_DOMAIN>
# 服务器: <YOUR_SERVER_IP>

set -e

DOMAIN="<YOUR_DOMAIN>"
APP_DIR="/opt/gesp"
NODE_VERSION="20"

echo "=========================================="
echo "GESP 刷题平台 - 服务器部署"
echo "域名: $DOMAIN"
echo "=========================================="

# 1. 系统更新和依赖安装
echo "[1/8] 安装系统依赖..."
apt-get update -qq
apt-get install -y -qq curl wget gnupg2 ca-certificates lsb-release

# 2. 安装 Node.js
echo "[2/8] 安装 Node.js $NODE_VERSION..."
if ! command -v node &> /dev/null || [[ $(node -v | cut -d'.' -f1 | tr -d 'v') -lt $NODE_VERSION ]]; then
    curl -fsSL https://deb.nodesource.com/setup_${NODE_VERSION}.x | bash -
    apt-get install -y -qq nodejs
fi
echo "Node.js: $(node -v)"

# 3. 安装 Nginx
echo "[3/8] 安装 Nginx..."
if ! command -v nginx &> /dev/null; then
    apt-get install -y -qq nginx
fi
systemctl enable nginx

# 4. 安装 Certbot (Let's Encrypt)
echo "[4/8] 安装 Certbot..."
if ! command -v certbot &> /dev/null; then
    apt-get install -y -qq certbot python3-certbot-nginx
fi

# 5. 安装 PM2
echo "[5/8] 安装 PM2..."
if ! command -v pm2 &> /dev/null; then
    npm install -g pm2
fi

# 6. 配置 Nginx
echo "[6/8] 配置 Nginx..."
cat > /etc/nginx/sites-available/gesp << 'NGINX_CONF'
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
NGINX_CONF

ln -sf /etc/nginx/sites-available/gesp /etc/nginx/sites-enabled/
rm -f /etc/nginx/sites-enabled/default
nginx -t
systemctl restart nginx

# 7. 配置防火墙
echo "[7/8] 配置防火墙..."
if command -v ufw &> /dev/null; then
    ufw allow 80/tcp
    ufw allow 443/tcp
    ufw allow 22/tcp
    ufw --force enable
fi

# 8. 启动应用
echo "[8/8] 启动应用..."
cd $APP_DIR

# 安装依赖
npm install --production

# 初始化数据库
if [ ! -f "data/gesp.db" ]; then
    echo "初始化数据库..."
    node server/seed.js
    node server/seed-papers.js
fi

# 启动 PM2
pm2 delete gesp-practice 2>/dev/null || true
pm2 start ecosystem.config.js
pm2 save
pm2 startup

echo ""
echo "=========================================="
echo "部署完成！"
echo "=========================================="
echo ""
echo "HTTP 访问: http://$DOMAIN"
echo ""
echo "下一步: 申请 SSL 证书"
echo "  certbot --nginx -d $DOMAIN"
echo ""
echo "默认账号: teacher / teacher123"
echo ""
