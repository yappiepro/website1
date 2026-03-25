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
  <YandexMetrica />
</template>

<script setup>
import LoadingBar from '~/components/layout/LoadingBar.vue'
import CookieBanner from '~/components/layout/CookieBanner.vue'
import GoogleAnalytics from '~/components/GoogleAnalytics.vue'
import YandexMetrica from '~/components/YandexMetrica.vue'

const route = useRoute()
const config = useRuntimeConfig()
const siteUrl = computed(() => (config.public.siteUrl || '').replace(/\/+$/, ''))
const canonicalUrl = computed(() => {
  if (!siteUrl.value) return null
  const path = route.path || '/'
  return `${siteUrl.value}${path === '/' ? '' : path}`
})

useHead(() => ({
  link: canonicalUrl.value ? [{ rel: 'canonical', href: canonicalUrl.value }] : []
}))

// Яндекс.Метрика
useHead({
  meta: [
    // Theme color для PWA - адаптируется под тему устройства
    { name: 'theme-color', content: '#ffffff', media: '(prefers-color-scheme: light)' },
    { name: 'theme-color', content: '#1a1a1a', media: '(prefers-color-scheme: dark)' },
    // Favicon meta tags для лучшей видимости в поисковиках
    { name: 'msapplication-TileColor', content: '#7c3aed' },
    { name: 'msapplication-TileImage', content: '/favicons/mstile-144x144.png' }
  ],
  link: [
    // Manifest для PWA
    { rel: 'manifest', href: '/site.webmanifest' },
    // Дополнительные ссылки на favicon для поисковиков
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicons/favicon-16x16.png' },
    { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicons/favicon-32x32.png' },
    { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicons/apple-touch-icon.png' }
  ],
  script: [
    {
      innerHTML: `
        (function(m,e,t,r,i,k,a){
          m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
          m[i].l=1*new Date();
          for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return m[i].a=m[i].a[m[i].a.length-1];};}
          k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
          (window, document, "script", "https://mc.yandex.ru/metrika/tag.js?id=107703484", "ym");

        ym(107703484, "init", {
          webvisor: true,
          clickmap: true,
          ecommerce: "dataLayer",
          accurateTrackBounce: true,
          trackLinks: true
        });
      `,
      type: 'text/javascript',
      charset: 'utf-8'
    }
  ]
})
</script>
