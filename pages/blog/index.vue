<template>
  <div class="min-h-screen bg-white text-gray-900 overflow-x-hidden touch-pan-y">
    <!-- Хедер -->
    <header :class="[
      'fixed left-4 right-4 z-40 transition-all duration-300 rounded-2xl md:top-0 top-4',
      scrolled ? 'bg-transparent md:bg-white/60 md:backdrop-blur-xl md:shadow-lg' : 'bg-white/20 backdrop-blur-md shadow-sm'
    ]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div class="h-14 md:h-16 flex items-center">
          <!-- Левая зона: Логотип (виден только без скролла) -->
          <NuxtLink to="/blog" :class="[
            'group text-sm font-semibold tracking-tight text-gray-900 transition-all duration-300 shrink-0',
            scrolled ? 'hidden' : 'block'
          ]">
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
                  :class="[
                    'md:hidden p-2 rounded-xl transition-all backdrop-blur-sm absolute right-4',
                    scrolled ? 'bg-transparent hover:bg-white/50' : 'bg-white/80 hover:bg-white'
                  ]"
                  aria-label="Открыть меню">
            <Icon name="fa-solid:bars" class="w-6 h-6 text-gray-700" />
          </button>
        </div>
      </div>
    </header>

    <!-- Мобильное меню с фильтрами -->
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 translate-x-full"
      enter-to-class="opacity-100 translate-x-0"
      leave-active-class="transition duration-200 ease-in"
      leave-to-class="opacity-0 translate-x-full"
    >
      <div v-if="isMenuOpen" class="fixed inset-0 z-[100] bg-gradient-to-br from-white via-gray-50 to-gray-100 md:hidden pt-24 px-6 pb-12">
        <div class="flex justify-between items-center mb-10">
          <span class="text-gray-600 text-sm font-medium">Разделы блога</span>
          <button @click="isMenuOpen = false" class="group p-3 bg-gray-100 hover:bg-gray-200 rounded-2xl transition-all backdrop-blur-sm shadow-lg">
            <X class="w-6 h-6 text-gray-900" />
          </button>
        </div>

        <nav class="flex flex-col gap-4 max-w-md mx-auto">
          <button
            @click="selectCluster('razrabotka-saytov')"
            class="group relative overflow-hidden p-6 bg-gray-50 hover:bg-gray-100 rounded-2xl transition-all backdrop-blur-sm border border-gray-200 hover:border-gray-300">
            <div class="absolute inset-0 bg-gradient-to-r from-violet-600/0 via-violet-600/0 to-violet-600/0 group-hover:via-violet-600/10 group-hover:to-violet-600/10 transition-all"></div>
            <div class="relative flex items-start justify-between">
              <span class="text-lg font-semibold text-gray-900 group-hover:text-violet-600 transition-colors pt-1">Разработка сайтов</span>
              <Icon name="fa-solid:arrow-right" class="w-5 h-5 text-gray-400 group-hover:text-violet-600 group-hover:translate-x-1 transition-all mt-0.5" />
            </div>
          </button>
          <button
            @click="selectCluster('sozdanie-saytov')"
            class="group relative overflow-hidden p-6 bg-gray-50 hover:bg-gray-100 rounded-2xl transition-all backdrop-blur-sm border border-gray-200 hover:border-gray-300">
            <div class="absolute inset-0 bg-gradient-to-r from-violet-600/0 via-violet-600/0 to-violet-600/0 group-hover:via-violet-600/10 group-hover:to-violet-600/10 transition-all"></div>
            <div class="relative flex items-start justify-between">
              <span class="text-lg font-semibold text-gray-900 group-hover:text-violet-600 transition-colors pt-1">Создание сайтов</span>
              <Icon name="fa-solid:arrow-right" class="w-5 h-5 text-gray-400 group-hover:text-violet-600 group-hover:translate-x-1 transition-all mt-0.5" />
            </div>
          </button>
          <button
            @click="selectCluster('mobilnye-prilozheniya')"
            class="group relative overflow-hidden p-6 bg-gray-50 hover:bg-gray-100 rounded-2xl transition-all backdrop-blur-sm border border-gray-200 hover:border-gray-300">
            <div class="absolute inset-0 bg-gradient-to-r from-violet-600/0 via-violet-600/0 to-violet-600/0 group-hover:via-violet-600/10 group-hover:to-violet-600/10 transition-all"></div>
            <div class="relative flex items-start justify-between">
              <span class="text-lg font-semibold text-gray-900 group-hover:text-violet-600 transition-colors pt-1">Мобильные приложения</span>
              <Icon name="fa-solid:arrow-right" class="w-5 h-5 text-gray-400 group-hover:text-violet-600 group-hover:translate-x-1 transition-all mt-0.5" />
            </div>
          </button>
          <button
            @click="selectCluster('veb-razrabotka')"
            class="group relative overflow-hidden p-6 bg-gray-50 hover:bg-gray-100 rounded-2xl transition-all backdrop-blur-sm border border-gray-200 hover:border-gray-300">
            <div class="absolute inset-0 bg-gradient-to-r from-violet-600/0 via-violet-600/0 to-violet-600/0 group-hover:via-violet-600/10 group-hover:to-violet-600/10 transition-all"></div>
            <div class="relative flex items-start justify-between">
              <span class="text-lg font-semibold text-gray-900 group-hover:text-violet-600 transition-colors pt-1">Веб-разработка</span>
              <Icon name="fa-solid:arrow-right" class="w-5 h-5 text-gray-400 group-hover:text-violet-600 group-hover:translate-x-1 transition-all mt-0.5" />
            </div>
          </button>
          <button
            @click="selectCluster('iskusstvennyy-intellekt')"
            class="group relative overflow-hidden p-6 bg-gray-50 hover:bg-gray-100 rounded-2xl transition-all backdrop-blur-sm border border-gray-200 hover:border-gray-300">
            <div class="absolute inset-0 bg-gradient-to-r from-violet-600/0 via-violet-600/0 to-violet-600/0 group-hover:via-violet-600/10 group-hover:to-violet-600/10 transition-all"></div>
            <div class="relative flex items-start justify-between">
              <span class="text-lg font-semibold text-gray-900 group-hover:text-violet-600 transition-colors pt-1">Искусственный интеллект</span>
              <Icon name="fa-solid:arrow-right" class="w-5 h-5 text-gray-400 group-hover:text-violet-600 group-hover:translate-x-1 transition-all mt-0.5" />
            </div>
          </button>

          <a href="https://t.me/artemselifanov" target="_blank" rel="noopener noreferrer"
             class="mt-8 group relative overflow-hidden p-6 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 rounded-2xl transition-all shadow-lg shadow-blue-600/30">
            <div class="flex items-center justify-center gap-3">
              <Icon name="fa-brands:telegram" class="w-6 h-6 text-white" />
              <span class="text-lg font-bold text-white">Связаться в Telegram</span>
            </div>
          </a>
        </nav>

        <!-- Декоративные элементы -->
        <div class="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div class="absolute -top-40 -right-40 w-80 h-80 bg-violet-600/10 rounded-full blur-3xl"></div>
          <div class="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl"></div>
        </div>
      </div>
    </Transition>

    <main class="pt-24 pb-16 px-4 sm:px-6 lg:pl-[320px] lg:pr-[360px]">
      <!-- Левая колонка: Навигация по кластерам (только десктоп) -->
      <aside class="hidden lg:block fixed left-4 top-24 bottom-4 w-[280px] overflow-y-auto bg-white rounded-2xl border border-gray-200 shadow-sm p-4 z-30">
        <div class="nav-header mb-4 pb-3 border-b border-gray-200">
          <span class="nav-title text-xs font-bold text-gray-500 uppercase tracking-wider">Разделы блога</span>
        </div>
        <nav class="flex flex-col gap-1">
          <button
            @click="selectCluster(null)"
            :class="[
              'w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 flex items-center justify-between',
              selectedCluster === null
                ? 'bg-gray-900 text-white'
                : 'text-gray-700 hover:bg-gray-100'
            ]"
          >
            <span class="flex items-center gap-2">
              <Icon name="fa-solid:grid" class="w-4 h-4" />
              Все статьи
            </span>
            <span :class="selectedCluster === null ? 'text-white/70' : 'text-gray-400'">
              {{ articles.length }}
            </span>
          </button>
          <button
            v-for="cluster in clusters"
            :key="cluster"
            @click="selectCluster(cluster)"
            :class="[
              'w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 flex items-center justify-between',
              selectedCluster === cluster
                ? getClusterButtonActiveClass(cluster)
                : 'text-gray-700 hover:bg-gray-100'
            ]"
          >
            <span>{{ getClusterName(cluster) }}</span>
            <span :class="selectedCluster === cluster ? 'text-white/70' : 'text-gray-400'">
              {{ getArticlesByCluster(cluster).length }}
            </span>
          </button>
        </nav>
      </aside>

      <!-- Центральная колонка: Статьи -->
      <div class="max-w-3xl mx-auto w-full">
          <header class="mb-8">
            <h1 class="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Блог о личном бренде, веб-разработке и AI для бизнеса
            </h1>
            <p class="text-lg text-gray-600">
              Статьи о разработке сайтов, создании веб-приложений, мобильной разработке и AI для бизнеса
            </p>
          </header>

          <!-- Мобильные фильтры -->
          <div class="lg:hidden flex flex-wrap gap-2 mb-6">
            <button
            @click="selectCluster(null)"
            :class="[
              'px-3 py-2 rounded-full text-xs font-medium transition-all duration-200',
              selectedCluster === null
                ? 'bg-gray-900 text-white'
                : 'bg-gray-100 text-gray-600'
            ]"
          >
            Все ({{ articles.length }})
          </button>
          <button
            v-for="cluster in clusters"
            :key="cluster"
            @click="selectCluster(cluster)"
            :class="[
              'px-3 py-2 rounded-full text-xs font-medium transition-all duration-200',
              selectedCluster === cluster
                ? getClusterButtonActiveClass(cluster)
                : 'bg-gray-100 text-gray-600'
            ]"
          >
            {{ getClusterName(cluster) }} ({{ getArticlesByCluster(cluster).length }})
          </button>
        </div>

        <!-- Поиск по статьям -->
        <div class="mb-6 px-2">
          <div class="relative">
            <input
              v-model="searchQuery"
              type="text"
              placeholder="Поиск по названию или описанию..."
              class="w-full px-4 py-3 pl-11 border border-gray-300 rounded-xl text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all"
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

        <div id="articles-section" class="space-y-8">
          <TransitionGroup
            enter-active-class="transition duration-150 ease-out"
            enter-from-class="opacity-0 translate-y-4"
            enter-to-class="opacity-100 translate-y-0"
            leave-active-class="transition duration-100 ease-in"
            leave-from-class="opacity-100 translate-y-0"
            leave-to-class="opacity-0 -translate-y-4"
          >
            <article
              v-for="article in filteredArticles"
              :key="article.slug"
              class="group"
            >
              <NuxtLink :to="`/blog/${article.slug}`" class="block">
                <div class="border border-gray-200 rounded-2xl p-4 sm:p-5 hover:border-violet-300 hover:shadow-lg transition-all duration-300">
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
                    <span class="text-xs text-gray-500">
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
              </NuxtLink>
            </article>
          </TransitionGroup>
        </div>

        <!-- Сообщение, если ничего не найдено -->
        <div v-if="filteredArticles.length === 0" class="text-center py-12">
          <div class="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
            <Icon name="fa-solid:search" class="w-8 h-8 text-gray-400" />
          </div>
          <p class="text-gray-500 text-lg mb-2">
            Ничего не найдено
          </p>
          <p class="text-gray-400 text-sm">
            Попробуйте изменить параметры поиска или фильтра
          </p>
          <button
            @click="selectedCluster = null; searchQuery = ''"
            class="mt-4 px-4 py-2 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition-colors text-sm font-medium"
          >
            Сбросить фильтры
          </button>
        </div>
      </div>

      <!-- Правая колонка: Популярное (только десктоп) -->
      <aside class="hidden lg:block fixed right-4 top-24 bottom-4 w-[320px] overflow-y-auto bg-white rounded-2xl border border-gray-200 shadow-sm p-4 z-30">
        <!-- Популярное -->
        <div class="mb-4 pb-4 border-b border-gray-200">
          <div class="flex items-center gap-2 mb-3">
            <Icon name="fa-solid:fire" class="w-4 h-4 text-orange-500" />
            <span class="text-xs font-bold text-gray-500 uppercase tracking-wider">Популярное</span>
          </div>
          <div class="flex flex-col gap-2">
            <NuxtLink
              v-for="article in popularArticles.slice(0, 3)"
              :key="article.slug"
              :to="`/blog/${article.slug}`"
              class="group p-2 rounded-xl hover:bg-gray-50 transition-all"
            >
              <h4 class="text-sm font-medium text-gray-900 group-hover:text-violet-600 transition-colors line-clamp-2">
                {{ article.title }}
              </h4>
            </NuxtLink>
          </div>
        </div>

        <!-- Свежее -->
        <div class="mb-4 pb-4 border-b border-gray-200">
          <div class="flex items-center gap-2 mb-3">
            <Icon name="fa-regular:clock" class="w-4 h-4 text-blue-500" />
            <span class="text-xs font-bold text-gray-500 uppercase tracking-wider">Свежее</span>
          </div>
          <div class="flex flex-col gap-3">
            <NuxtLink
              v-for="article in freshArticles"
              :key="article.slug"
              :to="`/blog/${article.slug}`"
              class="group p-3 rounded-xl hover:bg-gray-50 transition-all"
            >
              <h4 class="text-sm font-medium text-gray-900 group-hover:text-violet-600 transition-colors line-clamp-2">
                {{ article.title }}
              </h4>
              <div class="flex items-center gap-2 mt-1">
                <Icon name="fa-regular:calendar" class="w-3 h-3 text-gray-400" />
                <span class="text-xs text-gray-500">{{ formatDate(article.date) }}</span>
              </div>
            </NuxtLink>
          </div>
        </div>

        <!-- CTA -->
        <div class="bg-gradient-to-br from-violet-50 to-blue-50 rounded-2xl border border-violet-200 p-6 text-center">
          <div class="text-center">
            <h4 class="text-lg font-bold text-gray-900 mb-2">Нужна консультация?</h4>
            <p class="text-sm text-gray-600 mb-6">Помогу выбрать правильное решение</p>
            <a
              href="https://t.me/artemselifanov"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center justify-center gap-2 w-full px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all font-medium shadow-lg shadow-blue-600/30 hover:shadow-xl hover:shadow-blue-600/40 hover:-translate-y-0.5"
            >
              <Icon name="fa-brands:telegram" class="w-5 h-5" />
              Записаться на консультацию
            </a>
            <p class="text-xs text-gray-500 mt-4">
              Бесплатная оценка проекта за 15 минут
            </p>
          </div>
        </div>
      </aside>
    </main>

    <Footer bg-class="bg-gray-900" border-class="border-gray-800" />

    <!-- Нижняя навигация для мобильных -->
    <MobileBottomNav theme="light" />
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
import { ArrowRight, X } from 'lucide-vue-next'
import { articles, formatDate, getClusters, getClusterName, getClusterColor, getArticlesByCluster } from '~/data/blog-meta.js'
import MobileBottomNav from '~/components/layout/MobileBottomNav.vue'
import Footer from '~/components/layout/Footer.vue'

const route = useRoute()
const router = useRouter()

// Получаем все уникальные кластеры
const clusters = getClusters()

// Выбранный кластер из query параметра
const getClusterFromQuery = () => {
  const cluster = route.query.cluster
  if (cluster && clusters.includes(cluster)) {
    return cluster
  }
  return null
}

// Выбранный кластер (null = все статьи)
const selectedCluster = ref(getClusterFromQuery())

// Поисковый запрос
const searchQuery = ref('')

// Мобильное меню
const isMenuOpen = ref(false)
const scrolled = ref(false)

// Обработчик скролла
function handleScroll() {
  scrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

// Синхронизация с URL
watch(selectedCluster, (newCluster) => {
  if (newCluster) {
    router.push({ query: { cluster: newCluster } })
  } else {
    router.push({ query: {} })
  }
})

// Функция для выбора кластера
function selectCluster(cluster) {
  selectedCluster.value = cluster
  // Закрываем меню
  isMenuOpen.value = false
  // Прокрутка к статьям (на 120px выше)
  nextTick(() => {
    const articlesSection = document.querySelector('#articles-section')
    if (articlesSection) {
      const elementPosition = articlesSection.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - 120
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
    }
  })
}

// Случайный порядок статей — перемешиваем один раз при загрузке
const shuffledArticles = ref([...articles].sort(() => Math.random() - 0.5))

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

// Популярные статьи (исключаем текущую)
const popularArticles = computed(() => {
  const priorityClusters = [
    'iskusstvennyy-intellekt',
    'razrabotka-saytov',
    'lichnyy-brend',
    'telegram-marketing',
    'monetizatsiya-ekspertnosti'
  ]
  
  const sorted = [...articles].sort((a, b) => {
    const aPriority = priorityClusters.indexOf(a.cluster)
    const bPriority = priorityClusters.indexOf(b.cluster)
    if (aPriority !== bPriority) return aPriority - bPriority
    return a.title.length - b.title.length
  })
  
  return sorted.slice(0, 5)
})

// Свежие статьи
const freshArticles = computed(() => {
  const sorted = [...articles].sort((a, b) => {
    if (!a.date && !b.date) return 0
    if (!a.date) return 1
    if (!b.date) return -1
    return new Date(b.date) - new Date(a.date)
  })
  return sorted.slice(0, 4)
})

// Функция для получения класса цвета кластера
function getClusterColorClass(cluster) {
  const color = getClusterColor(cluster)
  const colorMap = {
    violet: 'bg-violet-100 text-violet-700',
    blue: 'bg-blue-100 text-blue-700',
    green: 'bg-green-100 text-green-700',
    orange: 'bg-orange-100 text-orange-700',
    pink: 'bg-pink-100 text-pink-700',
    teal: 'bg-teal-100 text-teal-700',
    cyan: 'bg-cyan-100 text-cyan-700',
    red: 'bg-red-100 text-red-700',
    purple: 'bg-purple-100 text-purple-700',
    indigo: 'bg-indigo-100 text-indigo-700',
    emerald: 'bg-emerald-100 text-emerald-700',
    amber: 'bg-amber-100 text-amber-700',
    fuchsia: 'bg-fuchsia-100 text-fuchsia-700',
    sky: 'bg-sky-100 text-sky-700'
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
    pink: 'bg-pink-600 text-white shadow-md',
    teal: 'bg-teal-600 text-white shadow-md',
    cyan: 'bg-cyan-600 text-white shadow-md',
    red: 'bg-red-600 text-white shadow-md',
    purple: 'bg-purple-600 text-white shadow-md',
    indigo: 'bg-indigo-600 text-white shadow-md',
    emerald: 'bg-emerald-600 text-white shadow-md',
    amber: 'bg-amber-600 text-white shadow-md',
    fuchsia: 'bg-fuchsia-600 text-white shadow-md',
    sky: 'bg-sky-600 text-white shadow-md'
  }
  return colorMap[color] || colorMap.violet
}

useHead({
  link: [
    { rel: 'canonical', href: 'https://artemselifanov.ru/blog' }
  ]
})

useSeoMeta({
  title: 'Блог о разработке сайтов, веб-приложений и AI для бизнеса | Артём Селифанов',
  description: 'Статьи о разработке сайтов, создании веб-приложений, мобильной разработке, веб-разработке и искусственном интеллекте для бизнеса. Практические руководства и кейсы.',
  keywords: 'блог о разработке, создание сайтов, веб-разработка, мобильные приложения, искусственный интеллект, AI для бизнеса, программирование',
  robots: 'index, follow',
  ogTitle: 'Блог о разработке сайтов и AI для бизнеса',
  ogDescription: 'Статьи о разработке сайтов, создании веб-приложений, мобильной разработке и искусственном интеллекте для бизнеса',
  ogType: 'website',
  ogUrl: 'https://artemselifanov.ru/blog',
  ogImage: 'https://artemselifanov.ru/reference/openGraph/blog.webp',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Блог о разработке сайтов и AI для бизнеса',
  twitterDescription: 'Статьи о разработке сайтов, создании веб-приложений, мобильной разработке и искусственном интеллекте для бизнеса',
  twitterImage: 'https://artemselifanov.ru/reference/openGraph/blog.webp'
})
</script>
