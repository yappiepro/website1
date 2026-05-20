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
            <a href="https://t.me/artemselifanov" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white bg-gray-900/90 hover:bg-gray-900 rounded-xl transition-all backdrop-blur-sm">
              <span>Связаться</span>
            </a>
          </div>

          <!-- Кнопка бургера для мобильных -->
          <button @click="isMenuOpen = !isMenuOpen"
                  class="md:hidden p-2 bg-white/80 hover:bg-white rounded-xl transition-all backdrop-blur-sm absolute right-4"
                  aria-label="Открыть меню">
            <Icon name="fa-solid:bars" class="w-6 h-6 text-gray-700" />
          </button>
        </div>
      </div>
    </header>

    <!-- Мобильное меню -->
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 scale-95"
    >
      <div v-if="isMenuOpen" class="fixed inset-0 z-[100] bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 pt-20 px-6">
        <div class="flex justify-between items-center mb-8">
          <span class="text-white/60 text-sm font-medium">Навигация</span>
          <button @click="isMenuOpen = false" class="group p-3 bg-white hover:bg-gray-100 rounded-2xl transition-all backdrop-blur-sm shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" style="width: 24px; height: 24px;" fill="currentColor" class="text-gray-900">
              <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
            </svg>
          </button>
        </div>

        <nav class="flex flex-col gap-3 max-w-md mx-auto">
          <!-- Заголовок меню -->
          <div class="mb-2">
            <span class="text-xs font-semibold text-white/40 uppercase tracking-wider px-2">Разделы блога</span>
          </div>
          
          <!-- Фильтры блога -->
          <NuxtLink to="/blog#razrabotka-saytov" @click="isMenuOpen = false"
             class="group relative overflow-hidden p-4 bg-white/5 hover:bg-white/10 rounded-2xl transition-all backdrop-blur-sm border border-white/10 hover:border-white/20">
            <div class="relative flex items-center justify-between">
              <span class="text-base font-medium text-white">Разработка сайтов</span>
              <Icon name="fa-solid:arrow-right" class="w-4 h-4 text-white/30" />
            </div>
          </NuxtLink>
          <NuxtLink to="/blog#sozdanie-saytov" @click="isMenuOpen = false"
             class="group relative overflow-hidden p-4 bg-white/5 hover:bg-white/10 rounded-2xl transition-all backdrop-blur-sm border border-white/10 hover:border-white/20">
            <div class="relative flex items-center justify-between">
              <span class="text-base font-medium text-white">Создание сайтов</span>
              <Icon name="fa-solid:arrow-right" class="w-4 h-4 text-white/30" />
            </div>
          </NuxtLink>
          <NuxtLink to="/blog#mobilnye-prilozheniya" @click="isMenuOpen = false"
             class="group relative overflow-hidden p-4 bg-white/5 hover:bg-white/10 rounded-2xl transition-all backdrop-blur-sm border border-white/10 hover:border-white/20">
            <div class="relative flex items-center justify-between">
              <span class="text-base font-medium text-white">Мобильные приложения</span>
              <Icon name="fa-solid:arrow-right" class="w-4 h-4 text-white/30" />
            </div>
          </NuxtLink>
          <NuxtLink to="/blog#veb-razrabotka" @click="isMenuOpen = false"
             class="group relative overflow-hidden p-4 bg-white/5 hover:bg-white/10 rounded-2xl transition-all backdrop-blur-sm border border-white/10 hover:border-white/20">
            <div class="relative flex items-center justify-between">
              <span class="text-base font-medium text-white">Веб-разработка</span>
              <Icon name="fa-solid:arrow-right" class="w-4 h-4 text-white/30" />
            </div>
          </NuxtLink>
          <NuxtLink to="/blog#iskusstvennyy-intellekt" @click="isMenuOpen = false"
             class="group relative overflow-hidden p-4 bg-white/5 hover:bg-white/10 rounded-2xl transition-all backdrop-blur-sm border border-white/10 hover:border-white/20">
            <div class="relative flex items-center justify-between">
              <span class="text-base font-medium text-white">Искусственный интеллект</span>
              <Icon name="fa-solid:arrow-right" class="w-4 h-4 text-white/30" />
            </div>
          </NuxtLink>
        </nav>
      </div>
    </Transition>

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
          <span :class="[colorClasses.badge, 'inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4']">
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
            class="group p-6 bg-white rounded-2xl border border-gray-200 transition-all"
            :class="colorClasses.border"
          >
            <span :class="[colorClasses.text, 'text-xs font-medium mb-3 block']">
              {{ article.category }}
            </span>
            <h2 :class="[colorClasses.hoverText, 'text-xl font-bold text-gray-900 mb-3 line-clamp-2']">
              {{ article.title }}
            </h2>
            <p class="text-gray-600 text-sm line-clamp-3 mb-4">
              {{ article.description }}
            </p>
            <div class="flex items-center justify-between">
              <span class="text-xs text-gray-500">
                {{ formatDate(article.date) }}
              </span>
              <span :class="[colorClasses.text, 'text-sm font-medium group-hover:translate-x-1 transition-transform']">
                Читать →
              </span>
            </div>
          </NuxtLink>
        </div>

        <!-- Пустое состояние -->
        <div v-if="clusterArticles.length === 0" class="text-center py-16">
          <p class="text-gray-500 text-lg">В этом кластере пока нет статей</p>
          <NuxtLink :to="'/blog'" :class="[colorClasses.link, 'inline-flex items-center gap-2 mt-4 font-medium']">
            ← Вернуться к блогу
          </NuxtLink>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { getArticlesByCluster, formatDate, clusterNames, clusterColors } from '~/data/blog-meta.js'

const route = useRoute()
const clusterSlug = route.params.slug

// Мобильное меню
const isMenuOpen = ref(false)

// Получаем название и цвет кластера
const clusterName = computed(() => clusterNames[clusterSlug] || clusterSlug)
const clusterColor = computed(() => clusterColors[clusterSlug] || 'violet')

// Получаем статьи кластера
const clusterArticles = computed(() => getArticlesByCluster(clusterSlug))

// Функция для получения классов цвета
function getColorClasses(color) {
  const classes = {
    violet: {
      badge: 'bg-violet-100 text-violet-700',
      border: 'hover:border-violet-300',
      text: 'text-violet-600',
      hoverText: 'group-hover:text-violet-700',
      link: 'hover:text-violet-700'
    },
    blue: {
      badge: 'bg-blue-100 text-blue-700',
      border: 'hover:border-blue-300',
      text: 'text-blue-600',
      hoverText: 'group-hover:text-blue-700',
      link: 'hover:text-blue-700'
    },
    green: {
      badge: 'bg-green-100 text-green-700',
      border: 'hover:border-green-300',
      text: 'text-green-600',
      hoverText: 'group-hover:text-green-700',
      link: 'hover:text-green-700'
    },
    orange: {
      badge: 'bg-orange-100 text-orange-700',
      border: 'hover:border-orange-300',
      text: 'text-orange-600',
      hoverText: 'group-hover:text-orange-700',
      link: 'hover:text-orange-700'
    },
    pink: {
      badge: 'bg-pink-100 text-pink-700',
      border: 'hover:border-pink-300',
      text: 'text-pink-600',
      hoverText: 'group-hover:text-pink-700',
      link: 'hover:text-pink-700'
    },
    purple: {
      badge: 'bg-purple-100 text-purple-700',
      border: 'hover:border-purple-300',
      text: 'text-purple-600',
      hoverText: 'group-hover:text-purple-700',
      link: 'hover:text-purple-700'
    },
    teal: {
      badge: 'bg-teal-100 text-teal-700',
      border: 'hover:border-teal-300',
      text: 'text-teal-600',
      hoverText: 'group-hover:text-teal-700',
      link: 'hover:text-teal-700'
    },
    cyan: {
      badge: 'bg-cyan-100 text-cyan-700',
      border: 'hover:border-cyan-300',
      text: 'text-cyan-600',
      hoverText: 'group-hover:text-cyan-700',
      link: 'hover:text-cyan-700'
    },
    red: {
      badge: 'bg-red-100 text-red-700',
      border: 'hover:border-red-300',
      text: 'text-red-600',
      hoverText: 'group-hover:text-red-700',
      link: 'hover:text-red-700'
    },
    indigo: {
      badge: 'bg-indigo-100 text-indigo-700',
      border: 'hover:border-indigo-300',
      text: 'text-indigo-600',
      hoverText: 'group-hover:text-indigo-700',
      link: 'hover:text-indigo-700'
    },
    emerald: {
      badge: 'bg-emerald-100 text-emerald-700',
      border: 'hover:border-emerald-300',
      text: 'text-emerald-600',
      hoverText: 'group-hover:text-emerald-700',
      link: 'hover:text-emerald-700'
    },
    amber: {
      badge: 'bg-amber-100 text-amber-700',
      border: 'hover:border-amber-300',
      text: 'text-amber-600',
      hoverText: 'group-hover:text-amber-700',
      link: 'hover:text-amber-700'
    },
    fuchsia: {
      badge: 'bg-fuchsia-100 text-fuchsia-700',
      border: 'hover:border-fuchsia-300',
      text: 'text-fuchsia-600',
      hoverText: 'group-hover:text-fuchsia-700',
      link: 'hover:text-fuchsia-700'
    },
    sky: {
      badge: 'bg-sky-100 text-sky-700',
      border: 'hover:border-sky-300',
      text: 'text-sky-600',
      hoverText: 'group-hover:text-sky-700',
      link: 'hover:text-sky-700'
    }
  }
  return classes[color] || classes.violet
}

const colorClasses = computed(() => getColorClasses(clusterColor.value))

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
</script>
