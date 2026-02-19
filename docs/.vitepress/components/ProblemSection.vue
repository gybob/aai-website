<script setup lang="ts">
</script>

<template>
  <section class="section problem-section">
    <h2>The Problem</h2>
    <p>
      AI Agents (Claude, GPT, Cursor, etc.) can already operate well-known applications like Apple Mail 
      or Microsoft Outlook — because LLMs have seen their AppleScript/COM interfaces in training data.
    </p>
    <p class="question">
      <strong>But what about your app?</strong>
    </p>

    <div class="problem-cards">
      <div class="problem-card">
        <div class="icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/></svg>
        </div>
        <h3>Desktop Apps</h3>
        <p>
          Even if your app supports AppleScript, COM, or DBus, LLMs have never seen your documentation. 
          They don't know your command names, your parameters, or your data model.
        </p>
        <span class="status">Your app is invisible to Agents.</span>
      </div>

      <div class="problem-card">
        <div class="icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" x2="22" y1="12" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
        </div>
        <h3>Web Apps</h3>
        <p>
          Your service has a REST API, but Agents don't know your endpoints, auth flow, or request format. 
          Without a standardized descriptor, your API is just another undiscovered URL.
        </p>
        <span class="status">Your API is undiscoverable.</span>
      </div>

      <div class="problem-card">
        <div class="icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 9v4"/><path d="M12 17h.01"/><path d="M3.6 9h16.8a1 1 0 0 1 .9 1.45l-8.4 14.48a1 1 0 0 1-1.8 0L2.7 10.45A1 1 0 0 1 3.6 9z"/></svg>
        </div>
        <h3>No Automation</h3>
        <p>
          Apps with no automation support at all are completely unreachable by AI Agents, 
          regardless of how useful they might be.
        </p>
        <span class="status">Completely unreachable.</span>
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
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid var(--vp-c-divider);
}

.question {
  font-size: 1.25rem;
  margin: 1.5rem 0;
}

.problem-cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
  margin-top: 1.5rem;
}

@media (max-width: 768px) {
  .problem-cards {
    grid-template-columns: 1fr;
  }
}

.problem-card {
  padding: 1.5rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  background: var(--vp-c-bg-soft);
  transition: border-color 0.3s, transform 0.3s;
}

.problem-card:hover {
  border-color: var(--vp-c-brand-1);
  transform: translateY(-2px);
}

.icon {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--vp-c-brand-soft);
  border-radius: 10px;
  margin-bottom: 1rem;
  color: var(--vp-c-brand-1);
}

.problem-card h3 {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
}

.problem-card p {
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
  line-height: 1.6;
  margin-bottom: 1rem;
}

.status {
  display: inline-block;
  font-size: 0.85rem;
  font-weight: 500;
  color: var(--vp-c-red-1);
  background: var(--vp-c-red-soft);
  padding: 0.25rem 0.75rem;
  border-radius: 4px;
}
</style>
