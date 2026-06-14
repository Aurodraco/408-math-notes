import { defineConfig } from 'vitepress'
import katex from 'markdown-it-katex'

export default defineConfig({
  title: '408 + 数学 考研笔记',
  description: '考研笔记 — 数据结构 · 组成原理 · 操作系统 · 计算机网络 · 数学',
  lang: 'zh-CN',
  lastUpdated: true,
  cleanUrls: true,
  srcExclude: ['progress.md'],
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.css' }],
  ],

  markdown: {
    config: (md) => {
      md.use(katex)
    },
  },

  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '数据结构', link: '/data-structure/' },
      { text: '组成原理', link: '/computer-organization/' },
      { text: '操作系统', link: '/operating-system/' },
      { text: '计算机网络', link: '/computer-network/' },
      { text: '数学', link: '/math/' },
    ],

    sidebar: {
      '/data-structure/': [
        {
          text: '数据结构',
          collapsed: false,
          items: [
            { text: '概述', link: '/data-structure/' },
            { text: '线性表', link: '/data-structure/linear-list' },
            { text: '栈和队列', link: '/data-structure/stack-queue' },
            { text: '树与二叉树', link: '/data-structure/tree' },
            { text: '图', link: '/data-structure/graph' },
            { text: '查找', link: '/data-structure/search' },
            { text: '排序', link: '/data-structure/sort' },
          ],
        },
      ],
      '/computer-organization/': [
        {
          text: '计算机组成原理',
          collapsed: false,
          items: [
            { text: '概述', link: '/computer-organization/' },
            { text: '数据表示与运算', link: '/computer-organization/data-representation' },
            { text: '存储层次', link: '/computer-organization/memory-hierarchy' },
            { text: '指令系统', link: '/computer-organization/instruction-set' },
            { text: '中央处理器', link: '/computer-organization/cpu' },
            { text: '总线与I/O', link: '/computer-organization/bus-io' },
            { text: '性能指标', link: '/computer-organization/performance' },
          ],
        },
      ],
      '/operating-system/': [
        {
          text: '操作系统',
          collapsed: false,
          items: [
            { text: '概述', link: '/operating-system/' },
            { text: '进程管理', link: '/operating-system/process' },
            { text: '内存管理', link: '/operating-system/memory' },
            { text: '文件系统', link: '/operating-system/file-system' },
            { text: 'I/O 管理', link: '/operating-system/io-management' },
          ],
        },
      ],
      '/computer-network/': [
        {
          text: '计算机网络',
          collapsed: false,
          items: [
            { text: '概述', link: '/computer-network/' },
            { text: '网络体系结构', link: '/computer-network/architecture' },
            { text: '物理层', link: '/computer-network/physical-layer' },
            { text: '数据链路层', link: '/computer-network/data-link-layer' },
            { text: '网络层', link: '/computer-network/network-layer' },
            { text: '传输层', link: '/computer-network/transport-layer' },
            { text: '应用层', link: '/computer-network/application-layer' },
          ],
        },
      ],
      '/math/': [
        {
          text: '考研数学',
          collapsed: false,
          items: [
            { text: '高等数学', link: '/math/' },
            { text: '线性代数', link: '/math/linear-algebra' },
            { text: '概率统计', link: '/math/probability' },
          ],
        },
      ],
    },

    search: {
      provider: 'local',
    },

    footer: {
      message: '基于 VitePress 构建 | 纯前端 · 零后端',
    },

    docFooter: {
      prev: '上一章',
      next: '下一章',
    },

    outline: {
      label: '本页目录',
      level: [2, 3],
    },

    lastUpdated: {
      text: '最后更新于',
    },
  },
})
