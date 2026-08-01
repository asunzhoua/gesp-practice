#!/bin/bash

# GESP Practice Platform Deployment Script
# Run this on your server (Ubuntu/Debian)

set -e

echo "=== GESP Practice Platform Deployment ==="

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

# Check if running as root
if [ "$EUID" -ne 0 ]; then
  echo -e "${RED}Please run as root (sudo)${NC}"
  exit 1
fi

# Update system
echo -e "${YELLOW}Updating system...${NC}"
apt update && apt upgrade -y

# Install Node.js 20.x
echo -e "${YELLOW}Installing Node.js...${NC}"
curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
apt install -y nodejs

# Install PM2 globally
echo -e "${YELLOW}Installing PM2...${NC}"
npm install -y pm2 -g

# Install Nginx
echo -e "${YELLOW}Installing Nginx...${NC}"
apt install -y nginx

# Create app directory
echo -e "${YELLOW}Setting up application...${NC}"
mkdir -p /var/www/gesp
mkdir -p /var/www/gesp/data
mkdir -p /var/www/gesp/logs

# Copy files (assuming you've uploaded the project)
# scp -r ./* user@server:/var/www/gesp/
cd /var/www/gesp

# Install dependencies
echo -e "${YELLOW}Installing dependencies...${NC}"
npm install --production

# Initialize database
echo -e "${YELLOW}Initializing database...${NC}"
node server/seed.js

# Setup Nginx
echo -e "${YELLOW}Configuring Nginx...${NC}"
cp nginx.conf /etc/nginx/sites-available/gesp
ln -sf /etc/nginx/sites-available/gesp /etc/nginx/sites-enabled/
rm -f /etc/nginx/sites-enabled/default

# Test Nginx config
nginx -t

# Restart Nginx
systemctl restart nginx
systemctl enable nginx

# Start application with PM2
echo -e "${YELLOW}Starting application...${NC}"
pm2 start ecosystem.config.js
pm2 save
pm2 startup

# Setup firewall
echo -e "${YELLOW}Configuring firewall...${NC}"
ufw allow 80/tcp
ufw allow 443/tcp
ufw allow 22/tcp
ufw --force enable

echo ""
echo -e "${GREEN}=== Deployment Complete ===${NC}"
echo ""
echo "Next steps:"
echo "1. Point your domain DNS to this server's IP"
echo "2. Update 'your-domain.com' in /etc/nginx/sites-available/gesp"
echo "3. Run: certbot --nginx -d your-domain.com"
echo "4. Access the app at https://your-domain.com"
echo ""
echo "Default teacher account:"
echo "  Username: teacher"
echo "  Password: teacher123"
echo ""
echo "Useful commands:"
echo "  pm2 status          - Check app status"
echo "  pm2 logs            - View logs"
echo "  pm2 restart all     - Restart app"
echo "  pm2 monit           - Monitor app"
