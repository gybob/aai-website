<script setup lang="ts">
</script>

<template>
  <div class="home-content">
    <!-- Background Section -->
    <section class="section background-section">
      <h2>Background: The Agent-Software Paradox</h2>
      <p class="intro">
        Early 2026 revealed a paradox: AI-driven market panic ($285B wiped in a day) vs. NVIDIA CEO Jensen Huang's rebuttal—
        <em>"AI will use tools, not replace them."</em>
      </p>
      <p>
        The truth lies in between: <strong>AI needs software tools, but only those it can access.</strong>
        Applications invisible to Agents face obsolescence—not because AI replaces software, 
        but because Agents will choose accessible alternatives over undiscoverable ones.
      </p>
    </section>

    <!-- Problem Section -->
    <ProblemSection />

    <!-- Solution Section -->
    <section class="section solution-section">
      <h2>The Solution</h2>
      <p>
        AAI gives every application — desktop or Web App — a <strong>standardized, machine-readable descriptor</strong> 
        (<code>aai.json</code>) that tells Agents exactly what your app can do and how to call it.
      </p>
      <div class="comparison-box">
        <div class="comparison-item without">
          <h4>Without AAI</h4>
          <ul>
            <li>Agent knows Apple Mail <span class="check">✓</span> <span class="note">(in LLM training data)</span></li>
            <li>Agent knows Microsoft Word <span class="check">✓</span> <span class="note">(in LLM training data)</span></li>
            <li>Agent knows your desktop app <span class="cross">✗</span> <span class="note">(never seen it before)</span></li>
            <li>Agent knows your Web App API <span class="cross">✗</span> <span class="note">(never seen it before)</span></li>
          </ul>
        </div>
        <div class="comparison-item with">
          <h4>With AAI</h4>
          <ul>
            <li>Agent discovers your app via aai.json <span class="check">✓</span></li>
            <li>Agent reads tool definitions <span class="check">✓</span></li>
            <li>Agent calls it directly (IPC or API) <span class="check">✓</span></li>
          </ul>
        </div>
      </div>
      <p class="highlight">
        <strong>One <code>aai.json</code> file turns your app from invisible to fully Agent-accessible.</strong>
      </p>
    </section>

    <!-- Benefits Section -->
    <BenefitsSection />

    <!-- Quick Links -->
    <QuickLinks />
  </div>
</template>

<style scoped>
.home-content {
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem 1.5rem 4rem;
}

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

.background-section .intro {
  font-size: 1.1rem;
  color: var(--vp-c-text-2);
  margin-bottom: 1rem;
}

.background-section em {
  font-style: italic;
  color: var(--vp-c-brand-1);
}

.comparison-box {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin: 1.5rem 0;
}

@media (max-width: 640px) {
  .comparison-box {
    grid-template-columns: 1fr;
  }
}

.comparison-item {
  padding: 1.25rem;
  border-radius: 8px;
  border: 1px solid var(--vp-c-divider);
}

.comparison-item.without {
  background: var(--vp-c-bg-soft);
}

.comparison-item.with {
  background: var(--vp-c-brand-soft);
  border-color: var(--vp-c-brand-1);
}

.comparison-item h4 {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
}

.comparison-item ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.comparison-item li {
  padding: 0.35rem 0;
  font-size: 0.9rem;
  line-height: 1.5;
}

.check {
  color: var(--vp-c-green-1);
  font-weight: bold;
}

.cross {
  color: var(--vp-c-red-1);
  font-weight: bold;
}

.note {
  color: var(--vp-c-text-3);
  font-size: 0.85rem;
}

.highlight {
  font-size: 1.1rem;
  text-align: center;
  padding: 1rem;
  background: var(--vp-c-bg-soft);
  border-radius: 8px;
  margin-top: 1.5rem;
}

.highlight code {
  background: var(--vp-c-brand-soft);
  padding: 0.15rem 0.4rem;
  border-radius: 4px;
  font-weight: 600;
}
</style>
