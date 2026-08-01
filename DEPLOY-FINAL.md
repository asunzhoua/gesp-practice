# GESP 刷题平台 - 美国服务器部署指南

## 部署信息

| 项目 | 值 |
|------|-----|
| 域名 | <YOUR_DOMAIN> |
| 服务器IP | <YOUR_SERVER_IP> |
| 访问地址 | https://<YOUR_DOMAIN> |
| 默认账号 | teacher / teacher123 |
| 默认学生密码 | 123456 |

---

## 一、部署前准备

### 1.1 本地打包

在本地电脑（Windows）打开 Git Bash 或 PowerShell：

```bash
cd "C:\Users\27157\Desktop\claude code\EduERP\文档\gesp"

# 创建部署包
bash package-deploy.sh
```

### 1.2 上传到服务器

```bash
# 使用 SCP 上传
scp /tmp/gesp-deploy.tar.gz root@<YOUR_SERVER_IP>:/tmp/
```

---

## 二、服务器部署

### 2.1 SSH 登录服务器

```bash
ssh root@<YOUR_SERVER_IP>
```

### 2.2 解压项目

```bash
mkdir -p /opt/gesp
cd /opt/gesp
tar -xzf /tmp/gesp-deploy.tar.gz
```

### 2.3 一键部署

```bash
bash deploy-complete.sh
```

脚本会自动完成：
- 安装 Node.js 20.x
- 安装 Nginx
- 安装 PM2
- 安装 Certbot (SSL)
- 配置防火墙
- 初始化数据库
- 启动应用
- 申请 SSL 证书

---

## 三、验证部署

### 3.1 访问测试

浏览器打开：**https://<YOUR_DOMAIN>**

### 3.2 登录测试

1. 教师登录：`teacher` / `teacher123`
2. 测试批量添加学生
3. 测试学生登录：`stu001` / `123456`

---

## 四、常用管理命令

### 4.1 应用管理

```bash
# 查看状态
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

### 4.2 SSL 证书管理

```bash
# 测试证书续期
certbot renew --dry-run

# 手动续期
certbot renew

# 查看证书状态
certbot certificates
```

### 4.3 Nginx 管理

```bash
# 测试配置
nginx -t

# 重启 Nginx
systemctl restart nginx

# 查看状态
systemctl status nginx
```

### 4.4 数据库备份

```bash
# 备份数据库
cp /opt/gesp/data/gesp.db /opt/gesp/data/gesp.db.backup.$(date +%Y%m%d)

# 恢复数据库
cp /opt/gesp/data/gesp.db.backup.20260801 /opt/gesp/data/gesp.db
pm2 restart gesp-practice
```

---

## 五、功能清单

### 5.1 学生端

| 功能 | 说明 |
|------|------|
| 登录/注册 | 用户名密码登录 |
| 首页仪表板 | 统计数据、知识点卡片 |
| 知识点练习 | 8个知识点，逐题练习 |
| 模拟考试 | 5份预设试卷 + 随机组卷 |
| 错题复习 | 查看所有错题及解析 |

### 5.2 教师端

| 功能 | 说明 |
|------|------|
| 学生管理 | 添加、删除、重置密码 |
| 批量添加 | 一次创建多个学生 |
| 学生档案 | 查看详细学习数据 |
| 薄弱分析 | 全班薄弱知识点统计 |
| 成绩排行 | 学生成绩排名 |

### 5.3 响应式设计

| 设备 | 断点 | 布局 |
|------|------|------|
| 电脑 | >1024px | 宽屏布局，4列卡片 |
| 平板 | 641-1024px | 2-3列卡片 |
| 手机 | ≤640px | 单列，触屏友好 |

---

## 六、SSL 证书说明

### 6.1 证书信息

- **颁发机构**: Let's Encrypt (免费)
- **有效期**: 90天（自动续期）
- **加密等级**: 企业级 TLS 1.2/1.3

### 6.2 自动续期

Certbot 已配置自动续期，每12小时检查一次：
```bash
# 查看续期定时任务
cat /etc/cron.d/certbot-renew
```

### 6.3 手动续期

```bash
# 测试续期
certbot renew --dry-run

# 实际续期
certbot renew
systemctl reload nginx
```

---

## 七、故障排查

### 7.1 应用无法启动

```bash
# 查看日志
pm2 logs gesp-practice --lines 50

# 检查端口
lsof -i :3000

# 重启应用
pm2 restart gesp-practice
```

### 7.2 SSL 证书问题

```bash
# 检查证书状态
certbot certificates

# 重新申请
certbot --nginx -d <YOUR_DOMAIN>

# 强制续期
certbot renew --force-renewal
```

### 7.3 Nginx 问题

```bash
# 测试配置
nginx -t

# 查看错误日志
tail -50 /var/log/nginx/error.log

# 重启 Nginx
systemctl restart nginx
```

### 7.4 数据库问题

```bash
# 进入项目目录
cd /opt/gesp

# 重新初始化数据库
rm data/gesp.db
node server/seed.js
node server/seed-papers.js
pm2 restart gesp-practice
```

---

## 八、安全建议

1. **修改默认密码**: 首次登录后立即修改教师密码
2. **定期备份**: 建议每周备份一次数据库
3. **监控日志**: 定期查看应用和Nginx日志
4. **更新系统**: 定期更新服务器系统和软件包

---

## 九、联系支持

如遇问题，请检查：
1. 服务器是否正常运行
2. 域名 DNS 是否正确解析
3. 防火墙是否开放80/443端口
4. Nginx 和 PM2 状态是否正常
