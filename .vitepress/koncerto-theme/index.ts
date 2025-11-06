// https://vitepress.dev/guide/custom-theme
// import { h } from 'vue'?
// import type { Theme } from 'vitepress'
import Layout from './Layout.vue'
// import KoncertoTheme from 'koncerto'
import './style.css'

export default {
  // extends: KoncertoTheme,
  Layout,
  enhanceApp({ app, router, siteData }) {
    console.log('Using Koncerto VitePress Theme')
  }
}
// } satisfies Theme
