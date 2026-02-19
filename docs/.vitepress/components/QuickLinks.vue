<script setup lang="ts">
const links = [
  {
    title: 'Protocol Specification',
    description: 'Full technical specification',
    href: '/spec/overview'
  },
  {
    title: 'aai.json Schema',
    description: 'Machine-readable JSON Schema',
    href: '/public/schema/aai.schema.json'
  },
  {
    title: 'Example: Apple Mail',
    description: 'Desktop app descriptor',
    href: '/public/examples/com.apple.mail.aai.json'
  },
  {
    title: 'Example: Notion',
    description: 'Web App descriptor (OAuth + REST)',
    href: '/public/examples/com.notion.api.aai.json'
  },
  {
    title: 'AAI Gateway',
    description: 'Reference implementation',
    href: 'https://github.com/gybob/aai-gateway'
  }
]
</script>

<template>
  <section class="section quick-links">
    <h2>Quick Links</h2>
    
    <div class="links-grid">
      <a 
        v-for="link in links" 
        :key="link.href"
        :href="link.href"
        class="link-card"
        :target="link.href.startsWith('http') ? '_blank' : undefined"
        :rel="link.href.startsWith('http') ? 'noopener noreferrer' : undefined"
      >
        <div class="link-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/></svg>
        </div>
        <div class="link-content">
          <span class="link-title">{{ link.title }}</span>
          <span class="link-desc">{{ link.description }}</span>
        </div>
        <div class="link-arrow">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
        </div>
      </a>
    </div>
  </section>
</template>

<style scoped>
.section {
  margin-bottom: 3rem;
}

.section h2 {
  font-size: 1.75rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid var(--vp-c-divider);
}

.links-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1rem;
}

.link-card {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.25rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 10px;
  background: var(--vp-c-bg);
  text-decoration: none;
  color: inherit;
  transition: border-color 0.25s, box-shadow 0.25s, transform 0.25s;
}

.link-card:hover {
  border-color: var(--vp-c-brand-1);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transform: translateY(-2px);
}

.link-icon {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--vp-c-brand-soft);
  border-radius: 8px;
  color: var(--vp-c-brand-1);
  flex-shrink: 0;
}

.link-content {
  flex: 1;
  min-width: 0;
}

.link-title {
  display: block;
  font-weight: 600;
  font-size: 0.95rem;
  color: var(--vp-c-text-1);
}

.link-desc {
  display: block;
  font-size: 0.85rem;
  color: var(--vp-c-text-3);
  margin-top: 0.15rem;
}

.link-arrow {
  color: var(--vp-c-text-3);
  flex-shrink: 0;
  transition: transform 0.25s, color 0.25s;
}

.link-card:hover .link-arrow {
  color: var(--vp-c-brand-1);
  transform: translate(2px, -2px);
}
</style>
