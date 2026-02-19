import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  css: ['~/assets/css/tailwind.css'],
  vite: {
    plugins: [
      tailwindcss()
    ],
    build: {
      sourcemap: false
    },
    optimizeDeps: {
      include: ['lucide-vue-next']
    }
  },
  alias: {
    '@': '.'
  },
  // Static site generation for GitHub Pages
  ssr: false,
  nitro: {
    output: {
      publicDir: 'dist'
    },
    prerender: {
      routes: ['/']
    }
  },
  app: {
    baseURL: '/website1/',
    head: {
      title: 'Разработка сайтов, чат-ботов и приложений — Yappie',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Yappie — разработка сайтов, чат-ботов и веб-приложений на базе AI для бизнеса. Автоматизируем процессы, увеличиваем эффективность. Бесплатная консультация.' },
        { name: 'keywords', content: 'разработка сайтов, чат-боты, веб-приложения, AI, автоматизация, CRM, Telegram боты, WhatsApp' },
        { name: 'author', content: 'Yappie' },
        // Open Graph
        { property: 'og:title', content: 'Разработка сайтов, чат-ботов и приложений — Yappie' },
        { property: 'og:description', content: 'Yappie — разработка сайтов, чат-ботов и веб-приложений на базе AI для бизнеса' },
        { property: 'og:type', content: 'website' },
        { property: 'og:locale', content: 'ru_RU' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Syncopate:wght@400;700&display=swap' }
      ]
    }
  },
  typescript: {
    strict: false
  }
})
