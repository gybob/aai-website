# AGENTS.md

Guide for AI coding agents working in the AAI Protocol documentation website repository.

## Project Overview

This is the documentation website for **AAI Protocol** (Agent App Interface), built with **VitePress 1.x**. The site provides technical specifications, guides, and examples for the AAI protocol.

- **Type**: Static documentation site (VitePress)
- **Primary Content**: Markdown documentation + Vue components
- **Languages**: English (root) and Chinese (zh-CN)
- **No tests**: Documentation-only project

---

## Build & Development Commands

```bash
# Install dependencies
npm install

# Start development server with hot reload
npm run dev

# Build for production (outputs to docs/.vitepress/dist/)
npm run build

# Preview production build locally
npm run preview
```

### Single File Operations

- **Preview specific page**: `npm run dev` then navigate to the URL
- **Build and check**: `npm run build && ls docs/.vitepress/dist/`

---

## Project Structure

```
aai-website/
├── docs/
│   ├── .vitepress/
│   │   ├── config.ts          # VitePress configuration
│   │   ├── theme/
│   │   │   └── index.ts       # Custom theme (extends default)
│   │   ├── components/        # Vue components
│   │   │   ├── HomeContent.vue
│   │   │   ├── BenefitsSection.vue
│   │   │   ├── ProblemSection.vue
│   │   │   └── QuickLinks.vue
│   │   └── cache/             # Build cache (gitignored)
│   │   └── dist/              # Build output (gitignored)
│   ├── guide/                 # User guides (English)
│   ├── spec/                  # Technical specifications (English)
│   ├── zh-CN/                 # Chinese translations
│   │   ├── guide/
│   │   └── spec/
│   └── index.md               # Homepage
├── package.json
└── README.md
```

---

## Code Style Guidelines

### Markdown Documentation

```markdown
---
title: "Page Title"
---

# Main Heading

Content here...

## Section Heading

| Column1 | Column2 |
|---------|---------|
| Value1  | Value2  |

- Bullet point
- Another point

`inline code` and [links](/path)

\`\`\`
Code blocks for ASCII diagrams
\`\`\`

<!-- Use relative links for internal pages -->
[Internal Link](./other-page.md)

<!-- Back navigation at end of spec pages -->
---
[Back to Spec Index](./README.md)
```

**Markdown Rules**:
- Always include `title` in frontmatter
- Use ATX-style headings (`#`, `##`, `###`)
- Use tables for structured comparisons
- Use code blocks for ASCII architecture diagrams
- Add `[Back to Spec Index](./README.md)` at end of spec pages
- Keep lines under 80 characters where practical

### Vue Components

```vue
<script setup lang="ts">
// Imports first
import { ref } from 'vue'

// Type definitions
interface Link {
  title: string
  href: string
}

// Reactive state
const links = ref<Link[]>([])
</script>

<template>
  <section class="section component-name">
    <h2>Section Title</h2>
    <!-- Content -->
  </section>
</template>

<style scoped>
.component-name {
  /* VitePress CSS variables for theming */
  --vp-c-brand-1: #3c8cff;
  --vp-c-brand-soft: rgba(60, 140, 255, 0.14);
  --vp-c-bg: var(--vp-c-bg);
  --vp-c-divider: var(--vp-c-divider);
  
  /* Component-specific styles */
}
</style>
```

**Vue Component Rules**:
- Use `<script setup lang="ts">` (Composition API)
- Define TypeScript interfaces for complex data
- Always use `scoped` styles
- Use VitePress CSS variables for theming compatibility
- Responsive design: use CSS Grid/Flexbox with media queries
- Mobile breakpoint: `@media (max-width: 640px)` or `900px`

### VitePress Config (TypeScript)

```typescript
// docs/.vitepress/config.ts
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Site Title',
  description: 'Site description',
  
  locales: {
    root: { label: 'English', lang: 'en' },
    'zh-CN': { label: '简体中文', lang: 'zh-CN' }
  },
  
  themeConfig: {
    nav: [...],
    sidebar: {...},
    socialLinks: [...]
  }
})
```

### CSS Conventions

- Use VitePress CSS variables for colors (supports light/dark mode):
  - `--vp-c-brand-1`: Primary brand color
  - `--vp-c-brand-soft`: Lighter brand background
  - `--vp-c-text-1`, `--vp-c-text-2`, `--vp-c-text-3`: Text hierarchy
  - `--vp-c-divider`: Border/divider color
  - `--vp-c-bg`, `--vp-c-bg-soft`: Background colors
  - `--vp-c-green-1`, `--vp-c-red-1`: Status colors
- Use `rem` for font sizes, `px` for borders/margins is acceptable
- Mobile-first responsive design with `@media (max-width: ...)`

---

## Bilingual Content

The site supports English (default) and Chinese (zh-CN):

| English Path | Chinese Path |
|--------------|--------------|
| `/guide/...` | `/zh-CN/guide/...` |
| `/spec/...` | `/zh-CN/spec/...` |

**When adding new content**:
1. Create English version first in `docs/guide/` or `docs/spec/`
2. Create Chinese translation in `docs/zh-CN/guide/` or `docs/zh-CN/spec/`
3. Update both sidebars in `config.ts` (`specSidebar` and `specSidebarZh`)

---

## Common Tasks

### Adding a New Documentation Page

1. Create `docs/spec/new-topic.md` with frontmatter
2. Create `docs/zh-CN/spec/new-topic.md` translation
3. Add to `specSidebar` array in `config.ts`
4. Add to `specSidebarZh` array in `config.ts`
5. Update `docs/spec/README.md` index if needed

### Adding a Vue Component

1. Create in `docs/.vitepress/components/ComponentName.vue`
2. Import and register in `docs/.vitepress/theme/index.ts`:
   ```typescript
   import ComponentName from '../components/ComponentName.vue'
   
   export default {
     extends: DefaultTheme,
     enhanceApp({ app }) {
       app.component('ComponentName', ComponentName)
     }
   } satisfies Theme
   ```
3. Use in markdown: `<ComponentName />`

---

## Error Handling

- Build errors: Check markdown syntax, frontmatter, and Vue component imports
- Missing pages: Verify sidebar links match actual file paths
- Component errors: Check TypeScript types and template syntax

---

## Key Files to Know

| File | Purpose |
|------|---------|
| `docs/.vitepress/config.ts` | Site configuration, navigation, sidebars |
| `docs/.vitepress/theme/index.ts` | Custom theme, component registration |
| `docs/index.md` | Homepage with hero section |
| `docs/spec/README.md` | Specification index |

---

## Notes

- No linting or formatting tools configured - follow existing patterns
- No test suite - manual verification via `npm run dev`
- Build output goes to `docs/.vitepress/dist/`
- VitePress cache in `docs/.vitepress/cache/` (gitignored)
