import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'

export default withMermaid(defineConfig({
  title: 'AAI Protocol',
  description: 'An open protocol that makes any application accessible to AI Agents',

  head: [
    ['meta', { name: 'theme-color', content: '#3c8cff' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'AAI Protocol' }],
    ['meta', { property: 'og:description', content: 'An open protocol that makes any application accessible to AI Agents' }],
    ['meta', { property: 'og:image', content: '/aai-protocol-diagram.png' }],
  ],

  themeConfig: {
    siteTitle: 'AAI Protocol',

    nav: [
      { text: 'Protocol', link: '/' },
      { text: 'Guide', link: '/guide/users' },
      { text: 'GitHub', link: 'https://github.com/gybob/aai-protocol' },
    ],

    sidebar: {
      '/': [
        {
          text: 'Protocol',
          items: [
            { text: 'Overview', link: '/' },
            { text: 'Architecture', link: '/protocol/architecture' },
            { text: 'aai.json Descriptor', link: '/protocol/aai-json' },
            { text: 'Security Model', link: '/protocol/security' },
            { text: 'Discovery', link: '/protocol/discovery' },
            { text: 'Error Codes', link: '/protocol/error-codes' },
          ],
        },
        {
          text: 'Platform Guides',
          items: [
            { text: 'macOS', link: '/protocol/platforms/macos' },
            { text: 'Web', link: '/protocol/platforms/web' },
          ],
        },
      ],
      '/guide/': [
        {
          text: 'Guide',
          items: [
            { text: 'For Users', link: '/guide/users' },
            { text: 'For App Developers', link: '/guide/developers' },
            { text: 'For Gateway Contributors', link: '/guide/contributors' },
          ],
        },
      ],
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

    outline: {
      level: [2, 3],
    },
  },

  markdown: {
    theme: {
      light: 'github-light',
      dark: 'github-dark',
    },
  },

  mermaid: {
    theme: 'default',
  },
}))

