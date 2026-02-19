<script setup lang="ts">
</script>

<template>
  <section class="section benefits-section">
    <h2>Who Benefits</h2>
    
    <div class="benefits-grid">
      <!-- App Developers -->
      <div class="benefit-card">
        <div class="icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 17.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/><path d="M3 17.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/><path d="M21 17.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/><path d="M5.5 12V7a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v5"/><path d="M7.5 21v-4.5"/><path d="M16.5 21v-4.5"/></svg>
        </div>
        <h3>App Developers</h3>
        <p class="tagline">Make Your App Agent-Ready</p>
        
        <div class="comparison-table">
          <div class="table-row">
            <span class="label">Well-known desktop app</span>
            <span class="value">Already known → Formal discovery</span>
          </div>
          <div class="table-row highlight">
            <span class="label">Desktop app, unknown to LLMs</span>
            <span class="value bad">Can't find it</span>
            <span class="arrow">→</span>
            <span class="value good">Discovers and calls it</span>
          </div>
          <div class="table-row highlight">
            <span class="label">Web App with REST API</span>
            <span class="value bad">Doesn't know endpoints</span>
            <span class="arrow">→</span>
            <span class="value good">Discovers via aai.json</span>
          </div>
          <div class="table-row highlight">
            <span class="label">No automation / no API</span>
            <span class="value bad">Unreachable</span>
            <span class="arrow">→</span>
            <span class="value good">Add interface + aai.json</span>
          </div>
        </div>
        
        <p class="insight">
          <strong>Key insight:</strong> Having an API is not enough. Without a standardized descriptor, 
          Agents have no way to discover your app's capabilities.
        </p>
      </div>

      <!-- Agent Developers -->
      <div class="benefit-card">
        <div class="icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>
        </div>
        <h3>Agent Developers</h3>
        <p class="tagline">Zero Integration Work</p>
        
        <ul class="feature-list">
          <li>
            <span class="check">✓</span>
            Connect to any AAI-enabled app through standard MCP
          </li>
          <li>
            <span class="check">✓</span>
            No per-app custom code required
          </li>
          <li>
            <span class="check">✓</span>
            No scraping documentation
          </li>
          <li>
            <span class="check">✓</span>
            No hardcoding commands
          </li>
          <li>
            <span class="check">✓</span>
            Works for both desktop apps and Web Apps
          </li>
        </ul>
      </div>

      <!-- Users -->
      <div class="benefit-card">
        <div class="icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/></svg>
        </div>
        <h3>Users</h3>
        <p class="tagline">Milliseconds, Not Seconds</p>
        
        <div class="perf-comparison">
          <div class="perf-item slow">
            <span class="label">GUI automation</span>
            <span class="flow">Screenshot → OCR → Click → Wait</span>
            <span class="time">2-4 seconds per action</span>
          </div>
          <div class="perf-arrow">↓</div>
          <div class="perf-item fast">
            <span class="label">AAI</span>
            <span class="flow">MCP → Gateway → IPC/API → Done</span>
            <span class="time">1-10 milliseconds</span>
          </div>
        </div>
      </div>
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

.benefits-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

@media (max-width: 900px) {
  .benefits-grid {
    grid-template-columns: 1fr;
  }
}

.benefit-card {
  padding: 1.5rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  background: var(--vp-c-bg);
  transition: box-shadow 0.3s, border-color 0.3s;
}

.benefit-card:hover {
  border-color: var(--vp-c-brand-1);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.icon {
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--vp-c-brand-soft);
  border-radius: 12px;
  margin-bottom: 1rem;
  color: var(--vp-c-brand-1);
}

.benefit-card h3 {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
}

.tagline {
  color: var(--vp-c-brand-1);
  font-weight: 500;
  font-size: 0.95rem;
  margin-bottom: 1rem;
}

/* Comparison table for App Developers */
.comparison-table {
  font-size: 0.85rem;
  margin-bottom: 1rem;
}

.table-row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 0.5rem 0;
  border-bottom: 1px solid var(--vp-c-divider-light);
  gap: 0.5rem;
}

.table-row.highlight {
  background: var(--vp-c-bg-soft);
  margin: 0 -0.5rem;
  padding: 0.5rem;
  border-radius: 4px;
}

.label {
  flex: 1;
  min-width: 120px;
  color: var(--vp-c-text-2);
}

.value {
  font-size: 0.8rem;
}

.value.bad {
  color: var(--vp-c-red-1);
}

.value.good {
  color: var(--vp-c-green-1);
  font-weight: 500;
}

.arrow {
  color: var(--vp-c-brand-1);
  font-weight: bold;
}

.insight {
  font-size: 0.85rem;
  color: var(--vp-c-text-2);
  padding: 0.75rem;
  background: var(--vp-c-bg-soft);
  border-radius: 6px;
  border-left: 3px solid var(--vp-c-brand-1);
}

/* Feature list for Agent Developers */
.feature-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.feature-list li {
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  padding: 0.5rem 0;
  font-size: 0.9rem;
}

.check {
  color: var(--vp-c-green-1);
  font-weight: bold;
  flex-shrink: 0;
}

/* Performance comparison for Users */
.perf-comparison {
  text-align: center;
}

.perf-item {
  padding: 0.75rem;
  border-radius: 8px;
}

.perf-item.slow {
  background: var(--vp-c-red-soft);
}

.perf-item.fast {
  background: var(--vp-c-green-soft);
}

.perf-item .label {
  font-weight: 600;
  display: block;
  margin-bottom: 0.25rem;
}

.perf-item .flow {
  display: block;
  font-size: 0.8rem;
  color: var(--vp-c-text-2);
  font-family: monospace;
}

.perf-item .time {
  display: block;
  font-size: 0.9rem;
  font-weight: 500;
  margin-top: 0.25rem;
}

.perf-item.slow .time {
  color: var(--vp-c-red-1);
}

.perf-item.fast .time {
  color: var(--vp-c-green-1);
}

.perf-arrow {
  font-size: 1.5rem;
  color: var(--vp-c-brand-1);
  padding: 0.25rem;
}
</style>
