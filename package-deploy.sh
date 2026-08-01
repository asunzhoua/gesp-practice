#!/bin/bash
# GESP 刷题平台 - 打包部署文件
# 在本地电脑运行

set -e

LOCAL_DIR="$(cd "$(dirname "$0")" && pwd)"
OUTPUT="/tmp/gesp-deploy.tar.gz"

echo "=========================================="
echo "打包 GESP 刷题平台"
echo "=========================================="

cd "$LOCAL_DIR"

# 创建部署包（排除不需要的文件）
echo "创建部署包..."
tar -czf "$OUTPUT" \
  --exclude='node_modules' \
  --exclude='data/*.db' \
  --exclude='.env' \
  --exclude='*.html' \
  --exclude='kp*.html' \
  --exclude='mock*.html' \
  --exclude='practice.html' \
  --exclude='review.html' \
  --exclude='gesp_level1_cheatsheet.html' \
  --exclude='public/real_exam_text' \
  --exclude='deploy-*.sh' \
  --exclude='setup-*.sh' \
  --exclude='DEPLOY*.md' \
  --exclude='SERVER-CHECK-REPORT.md' \
  .

echo ""
echo "=========================================="
echo "打包完成！"
echo "=========================================="
echo ""
echo "文件位置: $OUTPUT"
echo "文件大小: $(ls -lh $OUTPUT | awk '{print $5}')"
echo ""
echo "下一步: 上传到服务器"
echo "  scp $OUTPUT root@<YOUR_SERVER_IP>:/tmp/"
echo ""
echo "然后在服务器上运行:"
echo "  ssh root@<YOUR_SERVER_IP>"
echo "  mkdir -p /opt/gesp && cd /opt/gesp"
echo "  tar -xzf /tmp/gesp-deploy.tar.gz"
echo "  bash deploy-complete.sh"
echo ""
