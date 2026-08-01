#!/bin/bash
# GESP 刷题平台 - SSL 证书配置脚本
# 使用 Let's Encrypt 免费证书

set -e

DOMAIN="gesp.257758.xyz"
EMAIL="admin@257758.xyz"  # 建议修改为真实邮箱

echo "=========================================="
echo "配置 SSL 证书 (Let's Encrypt)"
echo "域名: $DOMAIN"
echo "=========================================="

# 1. 申请证书
echo "[1/3] 申请 SSL 证书..."
certbot --nginx -d $DOMAIN --non-interactive --agree-tos --email $EMAIL || {
    echo "证书申请失败，尝试 standalone 模式..."
    systemctl stop nginx
    certbot certonly --standalone -d $DOMAIN --non-interactive --agree-tos --email $EMAIL
    systemctl start nginx
}

# 2. 配置自动续期
echo "[2/3] 配置自动续期..."
echo "0 0,12 * * * root certbot renew --quiet --post-hook 'systemctl reload nginx'" > /etc/cron.d/certbot-renew
chmod 644 /etc/cron.d/certbot-renew

# 3. 更新 Nginx 配置（启用 HTTPS）
echo "[3/3] 更新 Nginx 配置..."
cat > /etc/nginx/sites-available/gesp << 'NGINX_SSL'
server {
    listen 80;
    server_name gesp.257758.xyz;
    return 301 https://$host$request_uri;
}

server {
    listen 443 ssl http2;
    server_name gesp.257758.xyz;

    # SSL 证书路径
    ssl_certificate /etc/letsencrypt/live/gesp.257758.xyz/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/gesp.257758.xyz/privkey.pem;

    # SSL 优化配置
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_prefer_server_ciphers on;
    ssl_ciphers ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384;
    ssl_session_cache shared:SSL:10m;
    ssl_session_timeout 10m;

    # 安全头
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
    add_header X-Frame-Options SAMEORIGIN always;
    add_header X-Content-Type-Options nosniff always;
    add_header X-XSS-Protection "1; mode=block" always;

    # Gzip 压缩
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml;

    # 代理到 Node.js
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
NGINX_SSL

nginx -t
systemctl reload nginx

echo ""
echo "=========================================="
echo "SSL 证书配置完成！"
echo "=========================================="
echo ""
echo "HTTPS 访问: https://$DOMAIN"
echo ""
echo "证书自动续期已配置"
echo ""
