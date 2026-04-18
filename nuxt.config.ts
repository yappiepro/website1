import tailwindcss from '@tailwindcss/vite'
import { articles } from './data/blog.js'
import { topics } from './data/knowledge/topics.js'
import { readFileSync } from 'fs'

const blogSlugs = articles.map((article) => article.slug).filter((slug) => Boolean(slug))

const blogRoutes = blogSlugs.map((slug) => `/blog/${slug}`)

const blogClusters = Array.from(
  new Set(articles.map((article) => article.cluster).filter((cluster) => Boolean(cluster)))
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
  devtools: { enabled: true },
  css: ['~/assets/css/tailwind.css'],

  // Игнорировать папку scripts при сборке
  ignore: ['scripts/**'],

  // Отключаем Nuxt Link Checker для production сборки
  // Ошибки 500 при пререндеринге — ложные (проблема проверки ссылок во время генерации)
  linkChecker: {
    enabled: false,
  },

  modules: [
    '@nuxtjs/seo',
    '@nuxt/icon',
    '@nuxtjs/fontaine',
    '@nuxt/fonts',
    '@vueuse/nuxt',
    'nuxt-delay-hydration',
    '@vite-pwa/nuxt',
  ],
  icon: {
    provider: 'iconify',
    class: '',
  },

  vite: {
    base: import.meta.env.DEV ? '/' : '/',
    plugins: [tailwindcss()],
    build: {
      sourcemap: false,
      cssCodeSplit: true,
      treeshake: true,
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['vue', 'vue-router'],
          },
        },
      },
    },
    optimizeDeps: {
      include: ['lucide-vue-next'],
    },
  },

  // Оптимизация CSS
  experimental: {
    inlineSSRStyles: true,
    appManifest: false,
    renderJsonPayloads: true,
    islands: true,
    viewTransition: true,
    // Отключаем payload pre-fetching для SSG
    payloadExtraction: false,
  },

  // Fontaine - оптимизация шрифтов без CLS
  fontaine: {
    fonts: ['Manrope'],
    fallbacks: {
      Manrope: ['Arial', 'sans-serif'],
    },
  },

  // Nuxt Fonts - оптимизация и хостинг шрифтов
  fonts: {
    defaults: {
      preload: true,
      display: 'swap',
      subset: 'cyrillic',
    },
    families: [
      {
        name: 'Manrope',
        provider: 'google',
        weights: [400, 500, 600, 700, 800],
        styles: ['normal'],
      },
    ],
  },

  // VueUse - композируемые утилиты
  vueuse: {
    prefix: '',
    disableAutoImports: false,
    // Авто-импорт популярных функций
    imports: [
      'useBreakpoints',
      'useMediaQuery',
      'useLocalStorage',
      'useSessionStorage',
      'useDark',
      'useToggle',
      'useScroll',
      'useWindowScroll',
      'useRafFn',
      'useCssVar',
      'useDebounceFn',
      'useThrottleFn',
    ],
  },

  // Delay Hydration - отложенная гидратация
  delayHydration: {
    mode: 'mount',
    delay: 2000,
  },

  alias: {
    '@': '.',
  },

  // SEO Site Configuration
  site: {
    url: 'https://artemselifanov.ru',
    name: 'Артём Селифанов — Личный бренд для предпринимателей и экспертов',
    description:
      'Помогаю предпринимателям и экспертам создать личный бренд, который продаёт. Стратегия, упаковка, контент и дистрибуция в Telegram и соцсетях.',
    defaultLocale: 'ru',
  },

  // SSG for GitHub Pages with SEO optimization
  // Включаем SSR для пререндеринга, выводим в static
  ssr: true,
  nitro: {
    output: {
      publicDir: 'dist',
    },
    prerender: {
      crawlLinks: true,
      routes: [
        '/',
        '/404',
        '/offline',
        '/_robots.txt',
        '/blog',
        '/consultation',
        '/mentorship',
        '/networking',
        '/networking-rules',
        '/business',
        '/yappie',
        '/study',
        '/knowledge',
        '/part1',
        '/part2',
        '/part3',
        ...knowledgeRoutes,
        ...knowledgePostRoutes,
        ...blogClusters,
        ...blogRoutes,
      ],
      failOnError: true,
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
          'Critical-CH': 'Sec-CH-Prefers-Color-Scheme',
        },
      },
      '/**': {
        headers: {
          'cache-control': 'public, max-age=0, must-revalidate',
          'Critical-CH': 'Sec-CH-Prefers-Color-Scheme',
        },
      },
    },
    // Копирование _headers в dist
    publicAssets: [
      {
        dir: 'public',
        maxAge: 31536000,
      },
    ],
  },

  // SEO Modules Configuration
  sitemap: {
    enabled: true,
    // Отключаем генерацию sitemap.xml (используем только sitemap_index.xml)
    sitemapsIndexEnabled: true,
    sitemapsEnabled: true,
    // Разделяем sitemap на файлы для лучшей производительности
    sitemaps: {
      pages: {
        filename: 'sitemap-pages.xml',
        routes: [
          { url: '/', priority: 1.0, changefreq: 'daily' },
          { url: '/networking', priority: 0.8, changefreq: 'weekly' },
          { url: '/business', priority: 0.8, changefreq: 'weekly' },
          { url: '/yappie', priority: 0.8, changefreq: 'weekly' },
          { url: '/study', priority: 0.8, changefreq: 'weekly' },
          { url: '/consultation', priority: 0.8, changefreq: 'weekly' },
          { url: '/mentorship', priority: 0.8, changefreq: 'weekly' },
          { url: '/knowledge', priority: 0.8, changefreq: 'weekly' },
          { url: '/part1', priority: 0.7, changefreq: 'monthly' },
          { url: '/part2', priority: 0.7, changefreq: 'monthly' },
          { url: '/part3', priority: 0.7, changefreq: 'monthly' },
          { url: '/cookie', priority: 0.3, changefreq: 'monthly' },
          { url: '/privacy', priority: 0.3, changefreq: 'monthly' },
          { url: '/offer', priority: 0.3, changefreq: 'monthly' },
          { url: '/offline', priority: 0.1, changefreq: 'monthly' },
        ],
      },
      blog: {
        filename: 'sitemap-blog.xml',
        routes: ['/blog', ...blogClusters, ...blogRoutes],
      },
    },
  },

  ogImage: {
    enabled: true,
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
        availableLanguage: ['Russian'],
      },
      email: 'a9535487323@yandex.ru',
    },
  },
  app: {
    baseURL: '/',
    head: {
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1, viewport-fit=cover' },
        { name: 'author', content: 'Артём Селифанов' },
        { name: 'yandex-verification', content: '27bf0858465d6882' },
        {
          name: 'google-site-verification',
          content: 'nkHL1rKgFkFrUT52eBMxJ6dh49idk2fFznkxXrfyrxo',
        },
        { name: 'msapplication-TileColor', content: '#7c3aed' },
        { name: 'msapplication-TileImage', content: '/favicons/mstile-144x144.png' },
        { name: 'theme-color', content: '#7c3aed' },
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
        { rel: 'dns-prefetch', href: 'https://api.iconify.design' },
        // Шрифты preload'ятся автоматически через @nuxt/fonts
        // Preload изображений hero-секции для LCP задаются на уровне страницы
      ],
      // Критический CSS инлайн - убирает блокировку рендеринга
      style: [
        {
          children: `::-webkit-scrollbar{height:6px;width:6px}::-webkit-scrollbar-track{background:transparent}::-webkit-scrollbar-thumb{background:#ffffff4d;border-radius:10px}::-webkit-scrollbar-thumb:hover{background:#ffffff80}`,
          tagPosition: 'head',
        },
      ],
      script: [
        // Telegram Web App script
        {
          src: 'https://telegram.org/js/telegram-web-app.js',
          tagPosition: 'head',
          defer: true,
        },
      ],
      htmlAttrs: {
        lang: 'ru',
      },
    },
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
      supabaseAnonKey: process.env.NUXT_PUBLIC_SUPABASE_ANON_KEY,
      supabaseServiceRoleKey: process.env.NUXT_SUPABASE_SERVICE_ROLE_KEY,
      adminPassword: process.env.NUXT_ADMIN_PASSWORD || 'Bk62li4z',
      telegramBotToken: process.env.NUXT_TELEGRAM_BOT_TOKEN,
      telegramChatId: process.env.NUXT_TELEGRAM_CHAT_ID,
    },
  },
  typescript: {
    strict: true,
    typeCheck: false,
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
      theme_color: '#7c3aed',
      orientation: 'portrait-primary',
      icons: [
        {
          src: '/favicons/android-chrome-192x192.png',
          sizes: '192x192',
          type: 'image/png',
          purpose: 'any maskable',
        },
        {
          src: '/favicons/android-chrome-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any maskable',
        },
        {
          src: '/favicons/apple-touch-icon.png',
          sizes: '180x180',
          type: 'image/png',
          purpose: 'any',
        },
      ],
      categories: ['business', 'productivity'],
      lang: 'ru-RU',
    },
    workbox: {
      navigateFallback: '/offline',
      globPatterns: ['**/*.{js,css,txt,png,ico,svg,webp,json,woff,woff2,html}'],
      maximumFileSizeToCacheInBytes: 5 * 1024 * 1024,
      // Игнорируем параметры Telegram Web App
      navigateFallbackDenylist: [
        /tgWebAppData/,
        /tgWebAppThemeParams/,
        /tgWebAppVersion/,
        /tgWebAppPlatform/,
      ],
      runtimeCaching: [
        {
          urlPattern: /^https:\/\/cdn\.iconify\.sh\/.*/i,
          handler: 'CacheFirst',
          options: {
            cacheName: 'iconify-cache',
            expiration: { maxEntries: 100, maxAgeSeconds: 86400 },
          },
        },
        {
          urlPattern: /^https:\/\/.*\.(jpg|jpeg|png|gif|webp|avif)$/i,
          handler: 'StaleWhileRevalidate',
          options: {
            cacheName: 'images-cache',
            expiration: { maxEntries: 50, maxAgeSeconds: 604800 },
          },
        },
        {
          urlPattern: /^https:\/\/fonts\.(gstatic|googleapis)\.com\/.*/i,
          handler: 'CacheFirst',
          options: {
            cacheName: 'google-fonts-cache',
            expiration: { maxEntries: 30, maxAgeSeconds: 31536000 },
          },
        },
      ],
    },
    devOptions: { enabled: false },
    registerType: 'autoUpdate',
    strategies: 'generateSW',
    injectRegister: 'script',
    includeAssets: ['favicon.ico', 'apple-touch-icon.png'],
    offlinePage: '/offline',
    client: {
      installPrompt: true,
    },
  },

  // Оптимизация загрузки CSS перенесена в единый блок nitro
})
