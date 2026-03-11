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
    base: import.meta.env.DEV ? '/' : '/',
    plugins: [
      tailwindcss()
    ],
    build: {
      sourcemap: false,
      cssCodeSplit: true,
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['vue', 'vue-router']
          }
        }
      }
    },
    optimizeDeps: {
      include: ['lucide-vue-next']
    }
  },

  // Оптимизация CSS
  experimental: {
    inlineSSRStyles: true,
    appManifest: false
  },

  app: {
    baseURL: import.meta.env.DEV ? '/' : '/',
  },

  alias: {
    '@': '.'
  },

  // SEO Site Configuration
  site: {
    url: 'https://artemselifanov.ru',
    name: 'Артём Селифанов — Личный бренд для предпринимателей и экспертов',
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
        '/study',
        '/offer',
        '/privacy',
        '/cookie'
      ],
      failOnError: false
    },
    // Настройка заголовков для кэширования
    routeRules: {
      // Статические ресурсы - кэш 1 год
      '/_nuxt/**': { headers: { 'cache-control': 'public, max-age=31536000, immutable' } },
      '/images/**': { headers: { 'cache-control': 'public, max-age=31536000, immutable' } },
      '/reference/**': { headers: { 'cache-control': 'public, max-age=31536000, immutable' } },
      '/fonts/**': { headers: { 'cache-control': 'public, max-age=31536000, immutable' } },
      // HTML страницы - проверка при каждом посещении
      '/**': { headers: { 'cache-control': 'public, max-age=0, must-revalidate' } }
    },
    // Копирование _headers в dist
    publicAssets: [
      {
        dir: 'public',
        maxAge: 31536000
      }
    ]
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
      name: 'Артём Селифанов',
      url: 'https://artemselifanov.ru',
      logo: 'https://artemselifanov.ru/logo.png',
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+7-953-548-73-23',
        contactType: 'customer service',
        areaServed: 'RU',
        availableLanguage: ['Russian']
      },
      email: 'a9535487323@yandex.ru'
    }
  },
  app: {
    baseURL: '/',
    head: {
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'author', content: 'Артём Селифанов' },
        { name: 'yandex-verification', content: '27bf0858465d6882' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'canonical', href: 'https://artemselifanov.ru' },
        // Preconnect для важных ресурсов
        { rel: 'preconnect', href: 'https://api.iconify.design', crossorigin: true },
        { rel: 'preconnect', href: 'https://code.jquery.com', crossorigin: true },
        { rel: 'dns-prefetch', href: 'https://api.iconify.design' }
      ],
      script: [
        // Google Analytics 4
        {
          src: 'https://www.googletagmanager.com/gtag/js?id=G-G4T213B4HD',
          async: true
        },
        {
          innerHTML: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-G4T213B4HD');
          `,
          type: 'text/javascript'
        }
      ],
      htmlAttrs: {
        lang: 'ru'
      }
    }
  },
  typescript: {
    strict: false
  },

  // Оптимизация загрузки CSS
  nitro: {
    routeRules: {
      '/': {
        prerender: true
      },
      '/**': {
        headers: {
          'Critical-CH': 'Sec-CH-Prefers-Color-Scheme'
        }
      }
    }
  }
})
