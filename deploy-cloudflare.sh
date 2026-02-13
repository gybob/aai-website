#!/bin/bash

# AAI Website Cloudflare Pages 部署脚本

echo "🚀 开始部署 AAI 网站到 Cloudflare Pages..."

# 1. 检查构建状态
echo "📋 检查构建状态..."
if [ ! -d "docs/.vitepress/dist" ]; then
    echo "❌ 构建目录不存在，请先运行 npm run build"
    exit 1
fi

echo "✅ 构建完成，文件已准备就绪"

# 2. 确保代码已推送到 Git
echo "📝 检查 Git 状态..."
if [ -n "$(git status --porcelain)" ]; then
    echo "⚠️  有未提交的更改，请先提交："
    echo "   git add ."
    echo "   git commit -m '部署准备'"
    exit 1
fi

# 3. 提供部署选项
echo ""
echo "🎯 选择部署方式："
echo "1) Cloudflare Dashboard (推荐新手)"
echo "2) Wrangler CLI (命令行用户)"
echo "3) 退出"
echo ""

read -p "请选择 (1-3): " choice

case $choice in
    1)
        echo ""
        echo "📍 使用 Cloudflare Dashboard 部署："
        echo "1. 打开浏览器访问: https://dash.cloudflare.com"
        echo "2. 登录 Cloudflare 账号"
        echo "3. 左侧菜单 → Workers & Pages → Pages → Create"
        echo "4. 选择 'Connect to Git'"
        echo "5. 选择你的 GitHub 仓库"
        echo "6. 配置构建设置："
        echo "   - Production branch: main"
        echo "   - Build command: npm run build"
        echo "   - Build output directory: docs/.vitepress/dist"
        echo "7. 点击 'Save and Deploy'"
        echo "8. 等待 5-10 分钟完成部署"
        echo ""
        read -p "按 Enter 键继续..."
        open https://dash.cloudflare.com
        ;;
    2)
        echo ""
        echo "📍 使用 Wrangler CLI 部署："
        echo "1. 安装 wrangler..."
        npm install -g wrangler
        echo "2. 登录 Cloudflare..."
        wrangler login
        echo "3. 开始部署..."
        wrangler pages deploy docs/.vitepress/dist --project-name=aai-website
        ;;
    3)
        echo "退出部署"
        exit 0
        ;;
    *)
        echo "无效选择"
        exit 1
        ;;
esac

echo ""
echo "🎉 部署完成！"
echo "📖 部署指南已保存在 DEPLOY-CLOUDFLARE.md"