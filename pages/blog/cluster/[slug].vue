<template>
  <div class="min-h-screen bg-white text-gray-900 overflow-x-hidden touch-pan-y">
    <!-- Хедер -->
    <header class="fixed left-4 right-4 z-40 transition-all duration-300 rounded-2xl bg-white/20 backdrop-blur-md shadow-sm md:top-0 top-4">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div class="h-14 md:h-16 flex items-center">
          <!-- Левая зона: Логотип -->
          <NuxtLink to="/blog" class="group text-sm font-semibold tracking-tight text-gray-900 transition-all duration-300 shrink-0">
            Блог
          </NuxtLink>

          <!-- Центральная зона: Десктопное меню -->
          <nav class="hidden md:flex items-center gap-1 flex-1 justify-center transition-all duration-300">
            <NuxtLink to="/" class="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-white/50 rounded-lg transition-all">Главная</NuxtLink>
            <NuxtLink to="/networking" class="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-white/50 rounded-lg transition-all">Нескучный Нетворкинг</NuxtLink>
            <NuxtLink to="/business" class="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-white/50 rounded-lg transition-all">Бизнес Сетка</NuxtLink>
            <NuxtLink to="/yappie" class="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-white/50 rounded-lg transition-all">Веб-разработка</NuxtLink>
          </nav>

          <!-- Правая зона: CTA кнопка -->
          <div class="hidden md:block shrink-0">
            <a href="https://t.me/artemselifanov" target="_blank" class="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white bg-gray-900/90 hover:bg-gray-900 rounded-xl transition-all backdrop-blur-sm">
              <span>Связаться</span>
            </a>
          </div>
        </div>
      </div>
    </header>

    <!-- Контент страницы -->
    <main class="pt-32 pb-16 px-4 sm:px-6">
      <div class="max-w-7xl mx-auto">
        <!-- Хлебные крошки -->
        <div class="mb-8">
          <Breadcrumbs
            :items="[
              { label: 'Главная', href: '/' },
              { label: 'Блог', href: '/blog' },
              { label: clusterName }
            ]"
          />
        </div>

        <!-- Заголовок -->
        <div class="mb-12">
          <span :class="`inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4 bg-${clusterColor}-100 text-${clusterColor}-700`">
            {{ clusterName }}
          </span>
          <h1 class="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            {{ clusterName }}
          </h1>
          <p class="text-xl text-gray-600 max-w-3xl">
            Все статьи по теме «{{ clusterName.toLowerCase() }}»
          </p>
        </div>

        <!-- Сетка статей -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <NuxtLink
            v-for="article in clusterArticles"
            :key="article.slug"
            :href="`/blog/${article.slug}`"
            class="group p-6 bg-white rounded-2xl border border-gray-200 hover:border-violet-300 hover:shadow-lg transition-all"
          >
            <span class="text-xs font-medium text-violet-600 mb-3 block">
              {{ article.category }}
            </span>
            <h2 class="text-xl font-bold text-gray-900 mb-3 group-hover:text-violet-700 line-clamp-2">
              {{ article.title }}
            </h2>
            <p class="text-gray-600 text-sm line-clamp-3 mb-4">
              {{ article.description }}
            </p>
            <div class="flex items-center justify-between">
              <span class="text-xs text-gray-500">
                {{ formatDate(article.date) }}
              </span>
              <span class="text-violet-600 text-sm font-medium group-hover:translate-x-1 transition-transform">
                Читать →
              </span>
            </div>
          </NuxtLink>
        </div>

        <!-- Пустое состояние -->
        <div v-if="clusterArticles.length === 0" class="text-center py-16">
          <p class="text-gray-500 text-lg">В этом кластере пока нет статей</p>
          <NuxtLink to="/blog" class="inline-flex items-center gap-2 mt-4 text-violet-600 hover:text-violet-700 font-medium">
            ← Вернуться к блогу
          </NuxtLink>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { getArticlesByCluster, formatDate, clusterNames, clusterColors } from '~/data/blog.js'

const route = useRoute()
const clusterSlug = route.params.slug

// Получаем название и цвет кластера
const clusterName = computed(() => clusterNames[clusterSlug] || clusterSlug)
const clusterColor = computed(() => clusterColors[clusterSlug] || 'violet')

// Получаем статьи кластера
const clusterArticles = computed(() => getArticlesByCluster(clusterSlug))

// SEO
useSeoMeta({
  title: `${clusterName.value} — Статьи блога | Yappie`,
  description: `Все статьи по теме «${clusterName.value}». Практические руководства, кейсы и советы по ${clusterName.value.toLowerCase()}.`,
  keywords: `${clusterName.value}, ${clusterSlug}, блог, статьи, разработка`,
  robots: 'index, follow',
  ogTitle: `${clusterName.value} — Статьи блога | Yappie`,
  ogDescription: `Все статьи по теме «${clusterName.value}». Практические руководства и кейсы.`,
  ogType: 'website',
  ogUrl: `https://artemselifanov.ru/blog/cluster/${clusterSlug}`,
  twitterCard: 'summary_large_image',
  twitterTitle: `${clusterName.value} — Статьи блога | Yappie`,
  twitterDescription: `Все статьи по теме «${clusterName.value}». Практические руководства и кейсы.`
})

useHead({
  link: [
    { rel: 'canonical', href: `https://artemselifanov.ru/blog/cluster/${clusterSlug}` }
  ]
})

// Schema.org
useSchemaOrg([
  defineWebPage({
    '@type': 'CollectionPage',
    name: `${clusterName.value} — Статьи блога`,
    description: `Все статьи по теме «${clusterName.value}»`,
    url: `https://artemselifanov.ru/blog/cluster/${clusterSlug}`
  })
])
</script>
