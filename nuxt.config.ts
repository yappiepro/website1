import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  css: ['~/assets/css/tailwind.css'],

  modules: [
    '@nuxtjs/seo',
    '@nuxt/image',
    '@nuxt/icon'
  ],

  image: {
    format: ['webp', 'avif', 'png'],
    quality: 80,
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536
    }
  },

  vite: {
    base: import.meta.env.DEV ? '/' : '/website1/',
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

  app: {
    baseURL: import.meta.env.DEV ? '/' : '/website1/',
  },

  alias: {
    '@': '.'
  },

  // SEO Site Configuration
  site: {
    url: 'https://yappiepro.github.io',
    name: 'Артем Селифанов — Личный бренд для предпринимателей и экспертов',
    description: 'Помогаю предпринимателям и экспертам создать личный бренд, который продаёт. Стратегия, упаковка, контент и дистрибуция в Telegram и соцсетях.',
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
      routes: [
        '/',
        '/compare',
        '/blog',
        '/blog/razrabotka-sayta-pod-klyuch',
        '/blog/skolko-stoit-razrabotka-sayta',
        '/blog/kak-zakazat-razrabotku-sayta',
        '/blog/razrabotka-sayta-dlya-biznesa',
        '/blog/tehnicheskoe-zadanie-na-razrabotku-sayta',
        '/blog/razrabotka-internet-magazina',
        '/blog/sozdanie-sayta-s-nulya',
        '/blog/skolko-stoit-sozdat-sayt',
        '/blog/sozdanie-sayta-dlya-biznesa',
        '/blog/platformy-dlya-sozdaniya-saytov',
        '/blog/sozdanie-sayta-html-css',
        '/blog/ii-dlya-sozdaniya-sayta',
        '/blog/kak-sozdat-mobilnoe-prilozhenie',
        '/blog/yazyki-programmirovaniya-mobilnykh-prilozheniy',
        '/blog/dizayn-mobilnogo-prilozheniya',
        '/blog/razrabotka-veb-prilozheniy',
        '/networking',
        '/business',
        '/yappie',
        '/study'
      ],
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
      title: 'Артем Селифанов — Личный бренд для предпринимателей и экспертов',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no' },
        { name: 'description', content: 'Помогаю предпринимателям и экспертам создать личный бренд, который продаёт. Стратегия, упаковка, контент и дистрибуция в Telegram. Бесплатный аудит позиционирования.' },
        { name: 'keywords', content: 'личный бренд, позиционирование, Telegram, контент-стратегия, предприниматели, эксперты, консультации, наставничество, упаковка профиля' },
        { name: 'author', content: 'Артем Селифанов' },
        { name: 'robots', content: 'index, follow' },
        { name: 'yandex-verification', content: '5dd84e7965966e23' },
        // Open Graph
        { property: 'og:title', content: 'Артем Селифанов — Личный бренд для предпринимателей и экспертов' },
        { property: 'og:description', content: 'Помогаю предпринимателям и экспертам создать личный бренд, который продаёт' },
        { property: 'og:type', content: 'website' },
        { property: 'og:locale', content: 'ru_RU' },
        { property: 'og:url', content: 'https://yappiepro.github.io/website1' },
        { property: 'og:site_name', content: 'Артем Селифанов' },
        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Артем Селифанов — Личный бренд для предпринимателей и экспертов' },
        { name: 'twitter:description', content: 'Помогаю предпринимателям и экспертам создать личный бренд, который продаёт' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/website1/favicon.ico' },
        { rel: 'canonical', href: 'https://yappiepro.github.io/website1' },
      ],
      script: [
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'Person',
                '@id': 'https://yappiepro.github.io/website1/#person',
                name: 'Артем Селифанов',
                url: 'https://yappiepro.github.io/website1',
                image: {
                  '@type': 'ImageObject',
                  url: 'https://yappiepro.github.io/website1/photo.jpg'
                },
                sameAs: [
                  'https://t.me/artemselifanov'
                ],
                jobTitle: 'Специалист по личному бренду',
                description: 'Помогаю предпринимателям и экспертам создать личный бренд, который продаёт'
              },
              {
                '@type': 'WebSite',
                '@id': 'https://yappiepro.github.io/website1/#website',
                url: 'https://yappiepro.github.io/website1',
                name: 'Артем Селифанов — Личный бренд для предпринимателей и экспертов',
                description: 'Помогаю предпринимателям и экспертам создать личный бренд, который продаёт. Стратегия, упаковка, контент и дистрибуция в Telegram.',
                inLanguage: 'ru-RU',
                publisher: {
                  '@id': 'https://yappiepro.github.io/website1/#person'
                }
              },
              {
                '@type': 'WebPage',
                '@id': 'https://yappiepro.github.io/website1/#webpage',
                url: 'https://yappiepro.github.io/website1',
                name: 'Артем Селифанов — Личный бренд для предпринимателей и экспертов',
                description: 'Помогаю предпринимателям и экспертам создать личный бренд, который продаёт. Стратегия, упаковка, контент и дистрибуция в Telegram и соцсетях.',
                inLanguage: 'ru-RU',
                isPartOf: {
                  '@id': 'https://yappiepro.github.io/website1/#website'
                },
                about: {
                  '@id': 'https://yappiepro.github.io/website1/#person'
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
