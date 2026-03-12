<template>
  <div class="min-h-screen bg-white text-gray-900 overflow-x-hidden touch-pan-y">
    <Head>
      <Title>Блог о разработке сайтов, веб-приложений и AI для бизнеса | Артём Селифанов</Title>
      <Meta name="description" content="Статьи о разработке сайтов, создании веб-приложений, мобильной разработке, веб-разработке и искусственном интеллекте для бизнеса. Практические руководства и кейсы." />
      <Meta name="keywords" content="блог о разработке, создание сайтов, веб-разработка, мобильные приложения, искусственный интеллект, AI для бизнеса, программирование" />
      <Meta name="robots" content="index, follow" />
      <Meta property="og:title" content="Блог о разработке сайтов и AI для бизнеса" />
      <Meta property="og:description" content="Статьи о разработке сайтов, создании веб-приложений, мобильной разработке и искусственном интеллекте для бизнеса" />
      <Meta property="og:type" content="website" />
      <Meta property="og:url" content="https://artemselifanov.ru/blog" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="Блог о разработке сайтов и AI для бизнеса" />
      <Meta name="twitter:description" content="Статьи о разработке сайтов, создании веб-приложений, мобильной разработке и искусственном интеллекте для бизнеса" />
      <Link rel="canonical" href="https://artemselifanov.ru/blog" />
    </Head>
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
          <NuxtLink to="/" @click="isMenuOpen = false"
             class="group relative overflow-hidden p-5 bg-white/5 hover:bg-white/10 rounded-2xl transition-all backdrop-blur-sm border border-white/10 hover:border-white/20">
            <div class="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-blue-600/0 to-blue-600/0 group-hover:via-blue-600/20 group-hover:to-blue-600/20 transition-all"></div>
            <div class="relative flex items-center justify-between">
              <span class="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">Главная</span>
              <Icon name="fa-solid:arrow-right" class="w-5 h-5 text-white/30 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
            </div>
          </NuxtLink>
          <NuxtLink to="/networking" @click="isMenuOpen = false"
             class="group relative overflow-hidden p-5 bg-white/5 hover:bg-white/10 rounded-2xl transition-all backdrop-blur-sm border border-white/10 hover:border-white/20">
            <div class="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-blue-600/0 to-blue-600/0 group-hover:via-blue-600/20 group-hover:to-blue-600/20 transition-all"></div>
            <div class="relative flex items-center justify-between">
              <span class="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">Нескучный Нетворкинг</span>
              <Icon name="fa-solid:arrow-right" class="w-5 h-5 text-white/30 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
            </div>
          </NuxtLink>
          <NuxtLink to="/business" @click="isMenuOpen = false"
             class="group relative overflow-hidden p-5 bg-white/5 hover:bg-white/10 rounded-2xl transition-all backdrop-blur-sm border border-white/10 hover:border-white/20">
            <div class="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-blue-600/0 to-blue-600/0 group-hover:via-blue-600/20 group-hover:to-blue-600/20 transition-all"></div>
            <div class="relative flex items-center justify-between">
              <span class="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">Бизнес Сетка</span>
              <Icon name="fa-solid:arrow-right" class="w-5 h-5 text-white/30 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
            </div>
          </NuxtLink>
          <NuxtLink to="/yappie" @click="isMenuOpen = false"
             class="group relative overflow-hidden p-5 bg-white/5 hover:bg-white/10 rounded-2xl transition-all backdrop-blur-sm border border-white/10 hover:border-white/20">
            <div class="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-blue-600/0 to-blue-600/0 group-hover:via-blue-600/20 group-hover:to-blue-600/20 transition-all"></div>
            <div class="relative flex items-center justify-between">
              <span class="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">Веб-разработка</span>
              <Icon name="fa-solid:arrow-right" class="w-5 h-5 text-white/30 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
            </div>
          </NuxtLink>

          <a href="https://t.me/artemselifanov" target="_blank"
             class="mt-6 group relative overflow-hidden p-5 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 rounded-2xl transition-all shadow-lg shadow-blue-600/30">
            <div class="flex items-center justify-center gap-3">
              <Icon name="fa-brands:telegram" class="w-5 h-5 text-white" />
              <span class="text-base font-bold text-white">Связаться в Telegram</span>
            </div>
          </a>
        </nav>

        <!-- Декоративные элементы -->
        <div class="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div class="absolute -top-40 -right-40 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl"></div>
          <div class="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl"></div>
        </div>
      </div>
    </Transition>

    <main class="pt-24 pb-16 px-4 sm:px-6">
      <div class="max-w-4xl mx-auto w-full overflow-x-hidden">
        <header class="mb-8">
          <h1 class="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Блог
          </h1>
          <p class="text-lg text-gray-600">
            Статьи о разработке сайтов, создании веб-приложений, мобильной разработке и AI для бизнеса
          </p>
        </header>

        <!-- Фильтры по кластерам -->
        <div class="flex flex-wrap gap-2 mb-6">
          <button
            @click="selectedCluster = null"
            :class="[
              'px-4 py-2 rounded-full text-sm font-medium transition-all duration-200',
              selectedCluster === null
                ? 'bg-violet-600 text-white shadow-md'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            ]"
          >
            Все статьи
          </button>
          <button
            v-for="cluster in clusters"
            :key="cluster"
            @click="selectedCluster = cluster"
            :class="[
              'px-4 py-2 rounded-full text-sm font-medium transition-all duration-200',
              selectedCluster === cluster
                ? getClusterButtonActiveClass(cluster)
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            ]"
          >
            {{ getClusterName(cluster) }} ({{ getArticlesByCluster(cluster).length }})
          </button>
        </div>

        <!-- Поиск по статьям -->
        <div class="mb-6">
          <div class="relative">
            <input
              v-model="searchQuery"
              type="text"
              placeholder="Поиск по названию или описанию..."
              class="w-full px-4 py-3 pl-11 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all"
            />
            <svg
              class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <button
              v-if="searchQuery"
              @click="searchQuery = ''"
              class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        <!-- Счётчик статей -->
        <p class="text-sm text-gray-500 mb-6">
          Найдено статей: {{ filteredArticles.length }}
        </p>

        <div class="space-y-8">
          <article
            v-for="article in filteredArticles"
            :key="article.slug"
            class="group"
          >
            <a :href="baseURL + 'blog/' + article.slug" class="block">
              <div class="border border-gray-200 rounded-2xl p-6 sm:p-8 hover:border-violet-300 hover:shadow-lg transition-all duration-300">
                <div class="flex items-center gap-3 mb-4">
                  <span
                    v-if="article.category"
                    :class="[
                      'px-3 py-1 text-xs font-medium rounded-full',
                      getClusterColorClass(article.cluster)
                    ]"
                  >
                    {{ article.category }}
                  </span>
                  <span class="text-sm text-gray-500">
                    {{ formatDate(article.date) }}
                  </span>
                </div>

                <h2 class="text-xl sm:text-2xl font-bold text-gray-900 mb-3 group-hover:text-violet-600 transition-colors">
                  {{ article.title }}
                </h2>

                <p class="text-gray-600 leading-relaxed mb-4">
                  {{ article.description }}
                </p>

                <div class="flex items-center gap-2 text-violet-600 font-medium text-sm">
                  <span>Читать статью</span>
                  <ArrowRight class="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </a>
          </article>
        </div>

        <!-- Сообщение, если ничего не найдено -->
        <div v-if="filteredArticles.length === 0" class="text-center py-12">
          <p class="text-gray-500 text-lg">
            В этом кластере пока нет статей
          </p>
        </div>
      </div>
    </main>

    <footer class="py-8 px-4 sm:px-6 border-t border-gray-200">
      <div class="max-w-7xl mx-auto">
        <!-- Контакты -->
        <div class="flex flex-wrap justify-center gap-4 sm:gap-6 mb-4 text-sm">
          <a href="tel:+79535487323" class="text-gray-600 hover:text-gray-900 transition-colors">+7 (953) 548-73-23</a>
          <span class="text-gray-300">|</span>
          <a href="mailto:a9535487323@yandex.ru" class="text-gray-600 hover:text-gray-900 transition-colors">a9535487323@yandex.ru</a>
          <span class="text-gray-300">|</span>
          <a href="https://t.me/artemselifanov" target="_blank" class="text-gray-600 hover:text-gray-900 transition-colors">Telegram</a>
        </div>
        <div class="flex flex-col sm:flex-row justify-between items-center gap-4">
          <NuxtLink to="/blog" class="text-xl font-bold text-gray-900">
            Блог
          </NuxtLink>
          <div class="flex items-center gap-6">
            <NuxtLink to="/" class="text-sm text-gray-600 hover:text-gray-900 transition-colors">Главная</NuxtLink>
            <a href="https://t.me/artemselifanov" target="_blank" class="text-sm text-gray-600 hover:text-gray-900 transition-colors">Связаться</a>
          </div>
          <span class="text-gray-500 text-sm">© 2026 Блог</span>
        </div>
      </div>
    </footer>

    <!-- Нижняя навигация для мобильных -->
    <MobileBottomNav theme="light" />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { ArrowRight } from 'lucide-vue-next'
import { articles, formatDate, getClusters, getClusterName, getClusterColor, getRandomArticles, getArticlesByCluster } from '~/data/blog.js'
import MobileBottomNav from '~/components/layout/MobileBottomNav.vue'

const config = useRuntimeConfig()
const baseURL = import.meta.env.DEV ? '/' : config.app.baseURL

// Получаем все уникальные кластеры
const clusters = getClusters()

// Выбранный кластер (null = все статьи)
const selectedCluster = ref(null)

// Поисковый запрос
const searchQuery = ref('')

// Случайный порядок статей
const shuffledArticles = computed(() => getRandomArticles(articles.length))

// Фильтрованные статьи
const filteredArticles = computed(() => {
  let result = shuffledArticles.value

  // Фильтрация по кластеру
  if (selectedCluster.value !== null) {
    result = result.filter(a => a.cluster === selectedCluster.value)
  }

  // Поиск по названию и описанию
  if (searchQuery.value.trim()) {
    const query = searchQuery.value.toLowerCase().trim()
    result = result.filter(a =>
      a.title.toLowerCase().includes(query) ||
      a.description.toLowerCase().includes(query)
    )
  }

  return result
})

// Функция для получения класса цвета кластера
function getClusterColorClass(cluster) {
  const color = getClusterColor(cluster)
  const colorMap = {
    violet: 'bg-violet-100 text-violet-700',
    blue: 'bg-blue-100 text-blue-700',
    green: 'bg-green-100 text-green-700',
    orange: 'bg-orange-100 text-orange-700',
    pink: 'bg-pink-100 text-pink-700'
  }
  return colorMap[color] || colorMap.violet
}

// Функция для получения цвета активной кнопки кластера
function getClusterButtonActiveClass(cluster) {
  const color = getClusterColor(cluster)
  const colorMap = {
    violet: 'bg-violet-600 text-white shadow-md',
    blue: 'bg-blue-600 text-white shadow-md',
    green: 'bg-green-600 text-white shadow-md',
    orange: 'bg-orange-600 text-white shadow-md',
    pink: 'bg-pink-600 text-white shadow-md'
  }
  return colorMap[color] || colorMap.violet
}

useSeoMeta({
  title: 'Блог — Yappie',
  description: 'Статьи о разработке сайтов, чат-ботов, веб-приложений и AI для бизнеса',
  ogTitle: 'Блог — Yappie',
  ogDescription: 'Статьи о разработке сайтов, чат-ботов, веб-приложений и AI для бизнеса'
})
</script>
