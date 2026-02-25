<template>
  <div class="min-h-screen bg-white text-gray-900">
    <nav class="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-gray-200">
      <div class="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
        <a :href="baseURL" class="text-xl font-bold text-gray-900 flex items-center gap-2">
          <span class="font-syncopate font-bold tracking-wider text-2xl">YAPPIE</span>
        </a>
        <a :href="baseURL" class="text-sm text-gray-500 hover:text-gray-900 transition-colors">
          На главную
        </a>
      </div>
    </nav>

    <main class="pt-24 pb-16 px-4 sm:px-6">
      <div class="max-w-4xl mx-auto">
        <header class="mb-8">
          <h1 class="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Блог
          </h1>
          <p class="text-lg text-gray-600">
            Статьи о разработке, автоматизации и AI для бизнеса
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
            {{ getClusterName(cluster) }}
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
      <div class="max-w-4xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <span class="font-syncopate font-bold text-gray-900 tracking-wider">YAPPIE</span>
        <span class="text-gray-500 text-sm">© 2026 Yappie</span>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ArrowRight } from 'lucide-vue-next'
import { articles, formatDate, getClusters, getClusterName, getClusterColor, getRandomArticles } from '~/data/blog.js'

const config = useRuntimeConfig()
const baseURL = config.app.baseURL

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
