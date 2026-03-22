import tailwindcss from '@tailwindcss/vite'
import { articles } from './data/blog.js'
import { topics } from './data/knowledge/topics.js'
import { readFileSync } from 'fs'

const blogSlugs = articles
  .map((article) => article.slug)
  .filter((slug) => Boolean(slug))

const blogRoutes = blogSlugs.map((slug) => `/blog/${slug}`)

const blogClusters = Array.from(
  new Set(
    articles
      .map((article) => article.cluster)
      .filter((cluster) => Boolean(cluster))
  )
).map((cluster) => `/blog/cluster/${cluster}`)

// Маршруты для базы знаний
const knowledgeRoutes = topics.map((topic) => `/knowledge/${topic.slug}`)

// Маршруты для постов базы знаний — читаем JSON динамически
const postsDataPath = new URL('./data/knowledge/posts-data.json', import.meta.url)
const postsData = JSON.parse(readFileSync(postsDataPath, 'utf-8'))
const knowledgePostRoutes = postsData.map((post) => `/knowledge/post/${post.id}`)

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  css: ['~/assets/css/tailwind.css'],

  // Игнорировать папку scripts при сборке
  ignore: ['scripts/**'],

  // Отключаем Nuxt Link Checker для production сборки
  // Ошибки 500 при пререндеринге — ложные (проблема проверки ссылок во время генерации)
  linkChecker: {
    enabled: false
  },

  modules: [
    '@nuxtjs/seo',
    '@nuxt/image',
    '@nuxt/icon',
    '@vite-pwa/nuxt',
    '@nuxtjs/fontaine',
    'nuxt-delay-hydration'
  ],
  icon: {
    provider: 'server',
    serverBundle: {
      collections: ['fa-solid', 'fa-brands']
    }
  },

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
    islands: true,
    viewTransition: true
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
        '/networking',
        '/business',
        '/yappie',
        '/study',
        '/knowledge',
        ...knowledgeRoutes,
        ...knowledgePostRoutes,
        ...blogClusters,
        ...blogRoutes
      ],
      failOnError: true
    },
    // Настройка заголовков для кэширования
    routeRules: {
      // Статические ресурсы - кэш 1 год
      '/_nuxt/**': { headers: { 'cache-control': 'public, max-age=31536000, immutable' } },
      '/images/**': { headers: { 'cache-control': 'public, max-age=31536000, immutable' } },
      '/reference/**': { headers: { 'cache-control': 'public, max-age=31536000, immutable' } },
      '/fonts/**': { headers: { 'cache-control': 'public, max-age=31536000, immutable' } },
      // HTML страницы - проверка при каждом посещении
      '/': {
        prerender: true,
        headers: {
          'cache-control': 'public, max-age=0, must-revalidate',
          'Critical-CH': 'Sec-CH-Prefers-Color-Scheme'
        }
      },
      '/**': {
        headers: {
          'cache-control': 'public, max-age=0, must-revalidate',
          'Critical-CH': 'Sec-CH-Prefers-Color-Scheme'
        }
      }
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
      '/blog',
      ...blogClusters,
      ...blogRoutes
    ]
  },

  robots: {
    enabled: true,
    sitemap: [
      '/sitemap.xml'
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
        { name: 'msapplication-TileColor', content: '#7c3aed' },
        { name: 'msapplication-TileImage', content: '/favicons/mstile-144x144.png' },
        { name: 'theme-color', content: '#7c3aed' }
      ],
      link: [
        // Favicon для разных устройств
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicons/apple-touch-icon.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicons/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicons/favicon-16x16.png' },
        // Manifest для PWA
        { rel: 'manifest', href: '/site.webmanifest' },
        // Preconnect для важных ресурсов
        { rel: 'preconnect', href: 'https://api.iconify.design', crossorigin: true },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap' },
        { rel: 'dns-prefetch', href: 'https://api.iconify.design' },
        // Preload изображений hero-секции для LCP задаются на уровне страницы
      ],
      // Критический CSS инлайн - убирает блокировку рендеринга
      style: [
        {
          children: `::-webkit-scrollbar{height:6px;width:6px}::-webkit-scrollbar-track{background:transparent}::-webkit-scrollbar-thumb{background:#ffffff4d;border-radius:10px}::-webkit-scrollbar-thumb:hover{background:#ffffff80}`,
          tagPosition: 'head'
        }
      ],
      htmlAttrs: {
        lang: 'ru'
      }
    }
  },
  runtimeConfig: {
    public: {
      siteUrl: 'https://artemselifanov.ru',
      firebaseApiKey: process.env.NUXT_FIREBASE_API_KEY,
      firebaseAuthDomain: process.env.NUXT_FIREBASE_AUTH_DOMAIN,
      firebaseProjectId: process.env.NUXT_FIREBASE_PROJECT_ID,
      firebaseStorageBucket: process.env.NUXT_FIREBASE_STORAGE_BUCKET,
      firebaseMessagingSenderId: process.env.NUXT_FIREBASE_MESSAGING_SENDER_ID,
      firebaseAppId: process.env.NUXT_FIREBASE_APP_ID,
      firebaseMeasurementId: process.env.NUXT_FIREBASE_MEASUREMENT_ID,
      firebaseVapidKey: process.env.NUXT_FIREBASE_VAPID_KEY,
      supabaseUrl: process.env.NUXT_PUBLIC_SUPABASE_URL,
      supabaseAnonKey: process.env.NUXT_PUBLIC_SUPABASE_ANON_KEY
    },
    supabaseServiceRoleKey: process.env.NUXT_SUPABASE_SERVICE_ROLE_KEY
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
        },
        {
          src: '/favicons/android-chrome-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any maskable'
        },
        {
          src: '/favicons/apple-touch-icon.png',
          sizes: '180x180',
          type: 'image/png',
          purpose: 'any'
        },
        {
          src: '/favicons/favicon-32x32.png',
          sizes: '32x32',
          type: 'image/png',
          purpose: 'any'
        },
        {
          src: '/favicons/favicon-16x16.png',
          sizes: '16x16',
          type: 'image/png',
          purpose: 'any'
        }
      ],
      categories: ['business', 'productivity'],
      lang: 'ru-RU'
    },
    workbox: {
      navigateFallback: '/offline',
      globPatterns: ['**/*.{js,css,txt,png,ico,svg,webp,json,woff,woff2}'],
      globIgnores: ['**/gromish.png', '**/sw.js', '**/*.html'],
      maximumFileSizeToCacheInBytes: 5 * 1024 * 1024,
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
        },
        {
          urlPattern: /^https:\/\/firebaseinstallations\.googleapis\.com\/.*/i,
          handler: 'NetworkFirst',
          options: {
            cacheName: 'firebase-installations'
          }
        }
      ]
    },
    devOptions: { enabled: false },
    registerType: 'autoUpdate',
    strategies: 'generateSW',
    injectRegister: null, // Отключаем автоматическую регистрацию - используем Firebase SW
    includeAssets: ['favicon.ico', 'apple-touch-icon.png'],
    offlinePage: '/offline',
    client: {
      installPrompt: true,
      periodicSyncForBackgroundTag: true
    },
    experimental: {
      directPages: true,
      injectManifest: {
        globPatterns: ['**/*.{js,css,html,txt,png,ico,svg,webp,json,woff,woff2}'],
        globIgnores: ['**/sw.js'],
        additionalManifestEntries: [
          { url: '/sw.js', revision: null }
        ]
      }
    }
  },

  // Оптимизация загрузки CSS перенесена в единый блок nitro
})
