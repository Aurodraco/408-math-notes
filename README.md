# 408 + 数学 考研笔记

在线阅读：**[aurodraco.github.io/408-math-notes](https://aurodraco.github.io/408-math-notes)**

基于 [VitePress](https://vitepress.dev) 构建的考研教程，**纯前端、零后端**。

[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

## 内容

| 科目 | 章节 | 状态 |
|------|:--:|:--:|
| 计算机组成原理 | 7 章 | ✅ |
| 操作系统 | 5 章 | ✅ |
| 计算机网络 | 7 章 | ✅ |
| 数据结构 | 7 章 | ✅ |
| 高等数学 | 8 章 | ✅ |
| 线性代数 | 1 章 | ✅ |
| 概率统计 | 1 章 | ✅ |

## 本地运行

```bash
git clone https://github.com/Aurodraco/408-math-notes.git
cd 408-math-notes
npm install
npm run docs:dev      # 开发预览 http://localhost:5173
npm run docs:build    # 构建纯静态文件到 .vitepress/dist/
```

## 特点

- **考研导向**：每章标注分值占比、常见题型
- **技术生命周期标记**：🔥 广泛应用 / ⚠️ 逐渐淘汰 / 💀 过时
- **公式渲染**：MathJax 3，支持 `$...$` 和 `$$...$$` 语法
- **流程图**：Mermaid 内置支持
- **纯静态**：构建产物为纯 HTML/CSS/JS，无任何后端依赖

## 部署

构建后的 `.vitepress/dist/` 目录可直接部署到：

- GitHub Pages
- nginx
- Vercel / Netlify
- 任意静态文件托管

## 许可

MIT
