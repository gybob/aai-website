import { defineConfig, HeadConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'

const SITE_URL = 'https://aai-protocol.org'
const SITE_TITLE = 'AAI Protocol - Agent App Interface'
const SITE_DESCRIPTION = 'An open protocol that makes any application accessible to AI Agents. Connect Claude, GPT, OpenClaw, CoWork and other AI agents to any desktop or web app through standardized descriptors.'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareSourceCode',
  name: 'AAI Protocol',
  description: SITE_DESCRIPTION,
  url: SITE_URL,
  codeRepository: 'https://github.com/gybob/aai-protocol',
  license: 'https://www.apache.org/licenses/LICENSE-2.0',
  programmingLanguage: 'TypeScript',
  applicationCategory: 'DeveloperApplication',
  operatingSystem: 'macOS, Windows, Linux, Web',
  keywords: [
    'AAI', 'Agent App Interface', 'AI Agent', 'MCP', 'Model Context Protocol',
    'OpenClaw', 'CoWork', 'Claude', 'GPT', 'Agent Protocol', 'App Automation',
    'Desktop Automation', 'Web API', 'OAuth', 'AppleScript', 'AI Tools', 'LLM Integration'
  ],
  author: {
    '@type': 'Organization',
    name: 'AAI Protocol Contributors',
    url: SITE_URL
  }
}

export default withMermaid(defineConfig({
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,

  head: [
    ['meta', { charset: 'utf-8' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }],
    ['meta', { name: 'theme-color', content: '#3c8cff' }],
    ['meta', { name: 'keywords', content: 'AAI, Agent App Interface, AI Agent, MCP, Model Context Protocol, OpenClaw, CoWork, Claude, GPT, Agent Protocol, App Automation, Desktop Automation, Web API, OAuth, AppleScript, AI Tools, LLM Integration' }],
    ['meta', { name: 'author', content: 'AAI Protocol Contributors' }],
    ['meta', { name: 'robots', content: 'index, follow' }],
    ['script', { type: 'application/ld+json' }, JSON.stringify(jsonLd)],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:url', content: SITE_URL }],
    ['meta', { property: 'og:title', content: SITE_TITLE }],
    ['meta', { property: 'og:description', content: SITE_DESCRIPTION }],
    ['meta', { property: 'og:image', content: `${SITE_URL}/aai-protocol-diagram.png` }],
    ['meta', { property: 'og:site_name', content: 'AAI Protocol' }],
    ['meta', { property: 'og:locale', content: 'en_US' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:url', content: SITE_URL }],
    ['meta', { name: 'twitter:title', content: SITE_TITLE }],
    ['meta', { name: 'twitter:description', content: SITE_DESCRIPTION }],
    ['meta', { name: 'twitter:image', content: `${SITE_URL}/aai-protocol-diagram.png` }],
    ['link', { rel: 'icon', type: 'image/png', href: '/aai-protocol-diagram.png' }],
    ['link', { rel: 'apple-touch-icon', href: '/aai-protocol-diagram.png' }],
  ],

  transformHead({ pageData }) {
    const path = pageData.relativePath
      .replace(/index\.md$/, '')
      .replace(/\.md$/, '')
    const canonicalUrl = path ? `${SITE_URL}/${path}` : SITE_URL
    return [['link', { rel: 'canonical', href: canonicalUrl }]]
  },

  sitemap: {
    hostname: SITE_URL,
    lastmodDateOnly: true,
  },

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
      '/protocol/': [
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