import { defineConfig } from 'vitepress'

const specSidebar = [
  {
    text: 'Specification',
    items: [
      { text: 'Overview', link: '/spec/overview' },
      { text: 'Architecture', link: '/spec/architecture' },
      { text: 'aai.json Schema', link: '/spec/aai-json' },
      { text: 'Security Model', link: '/spec/security' },
      { text: 'Error Codes', link: '/spec/error-codes' },
      { text: 'Discovery Protocol', link: '/spec/discovery' },
      { text: 'Call Flow', link: '/spec/call-flow' },
      { text: 'Glossary', link: '/spec/glossary' },
    ],
  },
  {
    text: 'Platform Guides',
    items: [
      { text: 'macOS (AppleScript/JXA)', link: '/spec/platforms/macos' },
      { text: 'Windows (COM)', link: '/spec/platforms/windows' },
      { text: 'Linux (DBus)', link: '/spec/platforms/linux' },
      { text: 'Web App (REST API)', link: '/spec/platforms/web' },
    ],
  },
]

const specSidebarZh = [
  {
    text: '协议规范',
    items: [
      { text: '概述', link: '/zh-CN/spec/overview' },
      { text: '系统架构', link: '/zh-CN/spec/architecture' },
      { text: 'aai.json 描述文件', link: '/zh-CN/spec/aai-json' },
      { text: '安全模型', link: '/zh-CN/spec/security' },
      { text: '错误码', link: '/zh-CN/spec/error-codes' },
      { text: '渐进式发现', link: '/zh-CN/spec/discovery' },
      { text: '调用流程', link: '/zh-CN/spec/call-flow' },
      { text: '术语表', link: '/zh-CN/spec/glossary' },
    ],
  },
  {
    text: '平台指南',
    items: [
      { text: 'macOS (AppleScript/JXA)', link: '/zh-CN/spec/platforms/macos' },
      { text: 'Windows (COM)', link: '/zh-CN/spec/platforms/windows' },
      { text: 'Linux (DBus)', link: '/zh-CN/spec/platforms/linux' },
      { text: 'Web App (REST API)', link: '/zh-CN/spec/platforms/web' },
    ],
  },
]

export default defineConfig({
  title: 'AAI Protocol',
  description: 'Agent App Interface - Open protocol for AI Agents to directly invoke application capabilities',

  head: [
    ['meta', { name: 'theme-color', content: '#3c8cff' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'AAI Protocol' }],
    ['meta', { property: 'og:description', content: 'Open protocol for AI Agents to directly invoke application capabilities' }],
  ],

  locales: {
    root: {
      label: 'English',
      lang: 'en',
    },
    'zh-CN': {
      label: '简体中文',
      lang: 'zh-CN',
      themeConfig: {
        nav: [
          { text: '首页', link: '/zh-CN/' },
          { text: '指南', link: '/zh-CN/guide/getting-started' },
          { text: '规范', link: '/zh-CN/spec/overview' },
          { text: 'GitHub', link: 'https://github.com/gybob/aai-protocol' },
        ],
        sidebar: {
          '/zh-CN/guide/': [
            {
              text: '指南',
              items: [
                { text: '快速开始', link: '/zh-CN/guide/getting-started' },
                { text: '应用开发者', link: '/zh-CN/guide/for-app-developers' },
                { text: 'Agent 开发者', link: '/zh-CN/guide/for-agent-developers' },
              ],
            },
          ],
          '/zh-CN/spec/': specSidebarZh,
        },
      },
    },
  },

  themeConfig: {
    siteTitle: 'AAI Protocol',

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/getting-started' },
      { text: 'Specification', link: '/spec/overview' },
      { text: 'GitHub', link: 'https://github.com/gybob/aai-protocol' },
    ],

    sidebar: {
      '/guide/': [
        {
          text: 'Guide',
          items: [
            { text: 'Getting Started', link: '/guide/getting-started' },
            { text: 'For App Developers', link: '/guide/for-app-developers' },
            { text: 'For Agent Developers', link: '/guide/for-agent-developers' },
          ],
        },
      ],
      '/spec/': specSidebar,
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/gybob/aai-protocol' },
    ],

    footer: {
      message: 'Released under the Apache 2.0 License.',
      copyright: 'Copyright 2025-present AAI Protocol Contributors',
    },

    search: {
      provider: 'local',
    },
  },
})
