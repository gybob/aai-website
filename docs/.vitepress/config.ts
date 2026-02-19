import { defineConfig } from 'vitepress'

const specSidebar = [
  {
    text: 'Core Documents',
    items: [
      { text: 'Specification Index', link: '/spec/' },
      { text: 'Architecture', link: '/spec/architecture' },
      { text: 'aai.json Descriptor', link: '/spec/aai-json' },
      { text: 'Security Model', link: '/spec/security' },
      { text: 'Error Codes', link: '/spec/error-codes' },
      { text: 'Discovery', link: '/spec/discovery' },
    ],
  },
  {
    text: 'Platform Guides',
    items: [
      { text: 'macOS (Apple Events)', link: '/spec/platforms/macos' },
      { text: 'Web (HTTP + OAuth 2.1)', link: '/spec/platforms/web' },
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

  themeConfig: {
    siteTitle: 'AAI Protocol',

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/getting-started' },
      { text: 'Specification', link: '/spec/' },
      { text: 'GitHub', link: 'https://github.com/gybob/aai-protocol' },
    ],

    sidebar: {
      '/guide/': [
        {
          text: 'Guide',
          items: [
            { text: 'Getting Started', link: '/guide/getting-started' },
            { text: 'For Users', link: '/guide/for-users' },
            { text: 'For App Developers', link: '/guide/for-app-developers' },
            { text: 'For Gateway Contributors', link: '/guide/for-gateway-contributors' },
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

