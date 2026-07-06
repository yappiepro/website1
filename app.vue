<template>
  <NuxtPage>
    <template #default="{ Component }">
      <Transition name="page" mode="out-in">
        <Component :is="Component" />
      </Transition>
    </template>
  </NuxtPage>
  <LoadingBar />
  <CookieBanner />
  <GoogleAnalytics />
</template>

<script setup>
import LoadingBar from '~/components/layout/LoadingBar.vue'
import CookieBanner from '~/components/layout/CookieBanner.vue'
import GoogleAnalytics from '~/components/GoogleAnalytics.vue'

const config = useRuntimeConfig()

// Метрики и аналитика подключаются через клиентские плагины/компоненты.
useHead({
  meta: [
    // Theme color для PWA - адаптируется под тему устройства
    { name: 'theme-color', content: '#ffffff', media: '(prefers-color-scheme: light)' },
    { name: 'theme-color', content: '#1a1a1a', media: '(prefers-color-scheme: dark)' },
    // Favicon meta tags для лучшей видимости в поисковиках
    { name: 'msapplication-TileColor', content: '#7c3aed' },
    { name: 'msapplication-TileImage', content: '/favicons/mstile-144x144.png' },
  ],
  link: [
    // Manifest для PWA
    { rel: 'manifest', href: '/site.webmanifest' },
    // Дополнительные ссылки на favicon для поисковиков
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicons/favicon-16x16.png' },
    { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicons/favicon-32x32.png' },
    { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicons/apple-touch-icon.png' },
  ],
})
</script>
