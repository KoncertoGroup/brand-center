import { defineConfig } from 'vitepress'
import tailwindcss from '@tailwindcss/vite'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Koncerto Group Handbook",
  description: "Branding guidelines and usage examples for the Koncerto Group and its sub-brands",
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  vite: {
    plugins: [
      tailwindcss(),
      vueDevTools()
    ],
  },
  markdown: {
    // https://vitepress.dev/reference/markdown-config
    lineNumbers: true
  },
  vue: {
    // https://vitepress.dev/reference/vue-config
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      // { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      // {
      //   text: 'Examples',
      //   items: [
      //     { text: 'Markdown Examples', link: '/markdown-examples' },
      //     { text: 'Runtime API Examples', link: '/api-examples' }
      //   ]
      // },
      {
        text: 'Logos',
        items: [
          { text: 'Master Brand Logo', link: '/logos/master-brand-logo' },
          { text: 'Sub-Brand Logos', link: '/logos/sub-brand-logos' }
        ]
      },
      {
        text: 'Color Palettes',
        items: [
          { text: 'Primary Colors', link: '/color-palettes/primary-colors' },
          { text: 'Secondary Colors', link: '/color-palettes/secondary-colors' },
          { text: 'Neutral Colors', link: '/color-palettes/neutral-colors' }
        ]
      },
      {
        text: 'Typography',
        items: [
          { text: 'Font Families', link: '/typography/font-families' },
          { text: 'Font Sizes', link: '/typography/font-sizes' },
          { text: 'Font Weights', link: '/typography/font-weights' }
        ]
      },
      {
        text: 'Imagery',
        items: [
          { text: 'Photography Style', link: '/imagery/photography-style' },
          { text: 'Iconography', link: '/imagery/iconography' }
        ]
      },
    ],

    socialLinks: [
      { icon: 'x', link: 'https://x.com/koncertogroup' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/company/koncertogroup/' },
      { icon: 'github', link: 'https://github.com/koncertogroup' }
    ]
  }
})
