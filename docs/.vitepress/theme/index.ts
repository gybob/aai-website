import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import { h } from 'vue'

import HomeContent from '../components/HomeContent.vue'
import BenefitsSection from '../components/BenefitsSection.vue'
import ProblemSection from '../components/ProblemSection.vue'
import QuickLinks from '../components/QuickLinks.vue'

export default {
  extends: DefaultTheme,
  Layout: () => h(DefaultTheme.Layout),
  enhanceApp({ app }) {
    app.component('HomeContent', HomeContent)
    app.component('BenefitsSection', BenefitsSection)
    app.component('ProblemSection', ProblemSection)
    app.component('QuickLinks', QuickLinks)
  }
} satisfies Theme
