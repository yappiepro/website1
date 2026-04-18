export default defineNuxtConfig({
  compatibilityDate: '2025-02-28',
  devtools: { enabled: false },
  app: {
    head: {
      htmlAttrs: { lang: 'ru' },
      title: 'Артем Селиванов | Цифровая Визитка',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@300;400;600&display=swap',
        },
      ],
    },
  },
  css: ['~/assets/css/main.css'],
})
