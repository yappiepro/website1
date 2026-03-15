import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  css: ['~/assets/css/tailwind.css'],

  modules: [
    '@nuxtjs/seo',
    '@nuxt/image',
    '@nuxt/icon',
    '@vite-pwa/nuxt',
    '@nuxtjs/fontaine',
    'nuxt-delay-hydration'
  ],

  image: {
    format: ['webp', 'avif', 'png'],
    quality: 75,
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
      treeshake: true,
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
    appManifest: false,
    renderJsonPayloads: true,
    islands: true
  },

  // Fontaine - оптимизация шрифтов без CLS
  fontaine: {
    fonts: ['Manrope'],
    fallbacks: {
      'Manrope': ['Arial', 'sans-serif']
    }
  },

  // Delay Hydration - отложенная гидратация
  delayHydration: {
    mode: 'mount',
    delay: 2000
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
        '/404',
        '/blog',
        '/consultation',
        '/mentorship',
        '/offline',
        '/blog/cluster/razrabotka-saytov',
        '/blog/cluster/sozdanie-saytov',
        '/blog/cluster/mobilnye-prilozheniya',
        '/blog/cluster/veb-razrabotka',
        '/blog/cluster/iskusstvennyy-intellekt',
        '/blog/cluster/lichnyy-brend',
        '/blog/cluster/kontent-marketing',
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
        '/blog/razrabotka-mobilnogo-prilozheniya',
        '/blog/vidy-mobilnykh-prilozheniy',
        '/blog/prodvizhenie-mobilnogo-prilozheniya',
        '/blog/razrabotka-veb-prilozheniy',
        '/blog/frontend-razrabotka',
        '/blog/backend-razrabotka',
        '/blog/fullstack-razrabotka',
        '/blog/api-razrabotka',
        '/blog/ii-v-it',
        '/blog/ii-dlya-biznesa',
        '/blog/chatgpt-dlya-biznesa',
        '/blog/neyroseti-dlya-generatsii-izobrazheniy',
        '/blog/ii-agenty-dlya-biznesa',
        '/blog/prompt-inzhiniring',
        '/blog/avtomatizatsiya-biznesa-ii',
        '/blog/chto-takoe-lichnyy-brend',
        '/blog/kak-sozdat-lichnyy-brend',
        '/blog/upakovka-lichnogo-brenda',
        '/blog/chto-takoe-kontent-marketing',
        '/blog/strategiya-kontent-marketinga',
        '/blog/kontent-marketing-dlya-privlecheniya-klientov',
        '/blog/chto-takoe-networking',
        '/blog/kak-razvit-set-kontaktov',
        '/blog/networking-dlya-biznesa',
        '/blog/chto-takoe-chat-bot',
        '/blog/chat-bot-dlya-biznesa',
        '/blog/chat-bot-v-telegram',
        '/blog/chat-bot-vkontakte',
        '/blog/chat-bot-v-max'
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
    enabled: true,
    routes: [
      '/',
      '/networking',
      '/business',
      '/yappie',
      '/study',
      '/consultation',
      '/mentorship',
      '/offline',
      '/blog',
      '/blog/cluster/razrabotka-saytov',
      '/blog/cluster/sozdanie-saytov',
      '/blog/cluster/mobilnye-prilozheniya',
      '/blog/cluster/veb-razrabotka',
      '/blog/cluster/iskusstvennyy-intellekt',
      '/blog/cluster/lichnyy-brend',
      '/blog/cluster/kontent-marketing',
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
      '/blog/razrabotka-mobilnogo-prilozheniya',
      '/blog/vidy-mobilnykh-prilozheniy',
      '/blog/prodvizhenie-mobilnogo-prilozheniya',
      '/blog/razrabotka-veb-prilozheniy',
      '/blog/frontend-razrabotka',
      '/blog/backend-razrabotka',
      '/blog/fullstack-razrabotka',
      '/blog/api-razrabotka',
      '/blog/ii-v-it',
      '/blog/ii-dlya-biznesa',
      '/blog/chatgpt-dlya-biznesa',
      '/blog/neyroseti-dlya-generatsii-izobrazheniy',
      '/blog/ii-agenty-dlya-biznesa',
      '/blog/prompt-inzhiniring',
      '/blog/avtomatizatsiya-biznesa-ii',
      '/blog/chto-takoe-lichnyy-brend',
      '/blog/kak-sozdat-lichnyy-brend',
      '/blog/upakovka-lichnogo-brenda',
      '/blog/chto-takoe-kontent-marketing',
      '/blog/strategiya-kontent-marketinga',
      '/blog/kontent-marketing-dlya-privlecheniya-klientov',
      '/blog/chto-takoe-networking',
      '/blog/kak-razvit-set-kontaktov',
      '/blog/networking-dlya-biznesa',
      '/blog/chto-takoe-chat-bot',
      '/blog/chat-bot-dlya-biznesa',
      '/blog/chat-bot-v-telegram',
      '/blog/chat-bot-vkontakte',
      '/blog/chat-bot-v-max'
    ]
  },

  robots: {
    enabled: true,
    sitemap: [
      '/sitemap.xml',
      '/sitemap-pages.xml',
      '/sitemap-blog.xml'
    ]
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
        { name: 'yandex-verification', content: '27bf0858465d6882' },
        { name: 'google-site-verification', content: 'your-google-verification-code' },
        { name: 'msapplication-TileColor', content: '#7c3aed' },
        { name: 'msapplication-TileImage', content: '/favicons/mstile-144x144.png' },
        { name: 'theme-color', content: '#7c3aed' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'canonical', href: 'https://artemselifanov.ru' },
        // Favicon для разных устройств
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicons/apple-touch-icon.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicons/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicons/favicon-16x16.png' },
        // Manifest для PWA
        { rel: 'manifest', href: '/site.webmanifest' },
        // Preconnect для важных ресурсов
        { rel: 'preconnect', href: 'https://api.iconify.design', crossorigin: true },
        { rel: 'preconnect', href: 'https://code.jquery.com', crossorigin: true },
        { rel: 'dns-prefetch', href: 'https://api.iconify.design' },
        // Preload шрифтов Syncopate для ускорения LCP
        { rel: 'preload', href: '/fonts/Syncopate-Regular.woff2', as: 'font', type: 'font/woff2', crossorigin: true },
        { rel: 'preload', href: '/fonts/Syncopate-Bold.woff2', as: 'font', type: 'font/woff2', crossorigin: true },
        // Preload изображений hero-секции для LCP (WebP)
        { rel: 'preload', href: '/reference/IMG_7084.webp', as: 'image', type: 'image/webp', imagesizes: '90px', imagesrcset: '/reference/IMG_7084.webp 90w, /reference/IMG_7084.webp 70w, /reference/IMG_7084.webp 50w' },
        { rel: 'preload', href: '/reference/IMG_7082.webp', as: 'image', type: 'image/webp', imagesizes: '100px', imagesrcset: '/reference/IMG_7082.webp 100w, /reference/IMG_7082.webp 75w, /reference/IMG_7082.webp 55w' },
        { rel: 'preload', href: '/reference/IMG_7089.webp', as: 'image', type: 'image/webp', imagesizes: '110px', imagesrcset: '/reference/IMG_7089.webp 110w, /reference/IMG_7089.webp 85w, /reference/IMG_7089.webp 60w', fetchpriority: 'high' },
        { rel: 'preload', href: '/reference/IMG_7083.webp', as: 'image', type: 'image/webp', imagesizes: '100px', imagesrcset: '/reference/IMG_7083.webp 100w, /reference/IMG_7083.webp 75w, /reference/IMG_7083.webp 55w' },
        { rel: 'preload', href: '/reference/IMG_7090.webp', as: 'image', type: 'image/webp', imagesizes: '90px', imagesrcset: '/reference/IMG_7090.webp 90w, /reference/IMG_7090.webp 70w, /reference/IMG_7090.webp 50w' }
      ],
      // Критический CSS инлайн - убирает блокировку рендеринга
      style: [
        {
          children: `html{scroll-behavior:smooth}::-webkit-scrollbar{height:6px;width:6px}::-webkit-scrollbar-track{background:transparent}::-webkit-scrollbar-thumb{background:#ffffff4d;border-radius:10px}::-webkit-scrollbar-thumb:hover{background:#ffffff80}`,
          tagPosition: 'head'
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

  // PWA Configuration
  pwa: {
    manifest: {
      name: 'artemselifanov.ru — Личный бренд для предпринимателей и экспертов',
      short_name: 'artemselifanov',
      description: 'Помогаю предпринимателям и экспертам создать личный бренд, который продаёт',
      start_url: '/',
      display: 'standalone',
      background_color: '#ffffff',
      theme_color: '#ffffff',
      orientation: 'portrait-primary',
      icons: [
        {
          src: '/favicons/android-chrome-192x192.png',
          sizes: '192x192',
          type: 'image/png',
          purpose: 'any maskable'
        }
      ],
      categories: ['business', 'productivity'],
      lang: 'ru-RU'
    },
    workbox: {
      navigateFallback: '/offline',
      globPatterns: ['**/*.{js,css,html,txt,png,ico,svg,webp,json,woff,woff2}'],
      globIgnores: ['**/gromish.png'],
      maximumFileSizeToCacheInBytes: 5 * 1024 * 1024, // 5 MB
      runtimeCaching: [
        {
          urlPattern: /^https:\/\/cdn\.iconify\.sh\/.*/i,
          handler: 'CacheFirst',
          options: {
            cacheName: 'iconify-cache',
            expiration: { maxEntries: 100, maxAgeSeconds: 86400 }
          }
        },
        {
          urlPattern: /^https:\/\/.*\.(jpg|jpeg|png|gif|webp|avif)$/i,
          handler: 'StaleWhileRevalidate',
          options: {
            cacheName: 'images-cache',
            expiration: { maxEntries: 50, maxAgeSeconds: 604800 }
          }
        },
        {
          urlPattern: /^https:\/\/fonts\.(gstatic|googleapis)\.com\/.*/i,
          handler: 'CacheFirst',
          options: {
            cacheName: 'google-fonts-cache',
            expiration: { maxEntries: 30, maxAgeSeconds: 31536000 }
          }
        }
      ]
    },
    devOptions: { enabled: false },
    registerType: 'autoUpdate',
    strategies: 'generateSW',
    injectRegister: 'auto',
    includeAssets: ['favicon.ico', 'apple-touch-icon.png'],
    offlinePage: '/offline'
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
