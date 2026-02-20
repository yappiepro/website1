import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  css: ['~/assets/css/tailwind.css'],
  
  modules: [
    '@nuxtjs/seo',
    '@nuxt/image'
  ],
  
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
  
  // SEO Site Configuration
  site: {
    url: 'https://yappiepro.github.io/website1',
    name: 'Yappie - Разработка сайтов, чат-ботов и приложений',
    description: 'Yappie — разработка сайтов, чат-ботов и веб-приложений на базе AI для бизнеса. Автоматизируем процессы, увеличиваем эффективность.',
    defaultLocale: 'ru'
  },
  
  // SSG for GitHub Pages with SEO optimization
  ssr: true,
  nitro: {
    output: {
      publicDir: 'dist'
    },
    prerender: {
      crawlLinks: true,
      routes: ['/', '/blog', '/blog/avtomatizaciya-biznesa-s-ai', '/blog/chat-boty-dlya-biznesa', '/blog/kak-vybrat-crm'],
      failOnError: false
    }
  },
  
  // SEO Modules Configuration
  sitemap: {
    enabled: false, // Using static sitemap.xml
  },
  
  robots: {
    enabled: false, // Using static robots.txt
  },
  
  ogImage: {
    enabled: true
  },
  
  schemaOrg: {
    enabled: true,
    identity: {
      type: 'Organization',
      name: 'Yappie',
      url: 'https://yappie.ru',
      logo: 'https://yappie.ru/logo.png'
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
        { name: 'robots', content: 'index, follow' },
        // Open Graph
        { property: 'og:title', content: 'Разработка сайтов, чат-ботов и приложений — Yappie' },
        { property: 'og:description', content: 'Yappie — разработка сайтов, чат-ботов и веб-приложений на базе AI для бизнеса' },
        { property: 'og:type', content: 'website' },
        { property: 'og:locale', content: 'ru_RU' },
        { property: 'og:url', content: 'https://yappie.ru' },
        { property: 'og:site_name', content: 'Yappie' },
        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Разработка сайтов, чат-ботов и приложений — Yappie' },
        { name: 'twitter:description', content: 'Yappie — разработка сайтов, чат-ботов и веб-приложений на базе AI для бизнеса' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' },
        { rel: 'canonical', href: 'https://yappiepro.github.io/website1' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Syncopate:wght@400;700&display=swap' }
      ],
      script: [
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'Organization',
                '@id': 'https://yappiepro.github.io/website1/#organization',
                name: 'Yappie',
                url: 'https://yappiepro.github.io/website1',
                logo: {
                  '@type': 'ImageObject',
                  url: 'https://yappiepro.github.io/website1/logo.png'
                },
                sameAs: [
                  'https://t.me/artemselifanov'
                ],
                contactPoint: {
                  '@type': 'ContactPoint',
                  contactType: 'customer service',
                  availableLanguage: ['Russian']
                }
              },
              {
                '@type': 'WebSite',
                '@id': 'https://yappiepro.github.io/website1/#website',
                url: 'https://yappiepro.github.io/website1',
                name: 'Yappie - Разработка сайтов, чат-ботов и приложений',
                description: 'Yappie — разработка сайтов, чат-ботов и веб-приложений на базе AI для бизнеса',
                inLanguage: 'ru-RU',
                publisher: {
                  '@id': 'https://yappiepro.github.io/website1/#organization'
                }
              },
              {
                '@type': 'WebPage',
                '@id': 'https://yappiepro.github.io/website1/#webpage',
                url: 'https://yappiepro.github.io/website1',
                name: 'Разработка сайтов, чат-ботов и приложений — Yappie',
                description: 'Yappie — разработка сайтов, чат-ботов и веб-приложений на базе AI для бизнеса. Автоматизируем процессы, увеличиваем эффективность.',
                inLanguage: 'ru-RU',
                isPartOf: {
                  '@id': 'https://yappiepro.github.io/website1/#website'
                },
                about: {
                  '@id': 'https://yappiepro.github.io/website1/#organization'
                }
              }
            ]
          })
        }
      ],
      htmlAttrs: {
        lang: 'ru'
      }
    }
  },
  typescript: {
    strict: false
  }
})
