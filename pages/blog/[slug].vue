<template>
  <div class="min-h-screen bg-white text-gray-900 overflow-x-hidden touch-pan-y">
    <!-- Хедер -->
    <header class="fixed left-4 right-4 z-40 transition-all duration-300 rounded-2xl bg-white/20 backdrop-blur-md shadow-sm md:top-0 top-4">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div class="h-14 md:h-16 flex justify-between items-center">
          <NuxtLink to="/blog" class="group text-sm font-semibold tracking-tight text-gray-900 transition-all duration-300">
            Блог
          </NuxtLink>

          <nav class="hidden md:flex items-center gap-1 transition-all duration-300">
            <NuxtLink to="/" class="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-white/50 rounded-lg transition-all">Главная</NuxtLink>
            <NuxtLink to="/networking" class="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-white/50 rounded-lg transition-all">Нескучный Нетворкинг</NuxtLink>
            <NuxtLink to="/business" class="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-white/50 rounded-lg transition-all">Бизнес Сетка</NuxtLink>
            <NuxtLink to="/yappie" class="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-white/50 rounded-lg transition-all">Веб-разработка</NuxtLink>
          </nav>

          <a href="https://t.me/artemselifanov" target="_blank" class="hidden md:inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white bg-gray-900/90 hover:bg-gray-900 rounded-xl transition-all backdrop-blur-sm">
            <span>Связаться</span>
          </a>

          <!-- Пустой блок для мобильных чтобы сохранить структуру -->
          <div class="md:hidden w-10"></div>
        </div>
      </div>
    </header>

    <!-- Кнопка бургера для мобильных (фиксированная, всегда видна) -->
    <button @click="isMenuOpen = !isMenuOpen"
            class="md:hidden fixed top-[28px] right-4 z-50 p-2 bg-white/80 hover:bg-white rounded-xl transition-all backdrop-blur-sm">
      <Icon name="fa-solid:bars" class="w-6 h-6 text-gray-700" />
    </button>

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

    <article class="pt-24 pb-16 px-4 sm:px-6">
      <div class="max-w-3xl mx-auto w-full overflow-x-hidden touch-pan-y">
        <header class="mb-8 sm:mb-12">
          <div class="flex items-center gap-3 mb-4">
            <span
              v-if="article?.category"
              class="px-3 py-1 text-xs font-medium bg-violet-100 text-violet-700 rounded-full"
            >
              {{ article.category }}
            </span>
            <span class="text-sm text-gray-500">
              {{ formatDate(article?.date) }}
            </span>
          </div>

          <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            {{ article?.title }}
          </h1>

          <p class="text-lg sm:text-xl text-gray-600 leading-relaxed">
            {{ article?.description }}
          </p>
        </header>

        <img
          v-if="article?.image"
          :src="article.image"
          :alt="article.title"
          class="w-full rounded-2xl mb-8 sm:mb-12"
        />

        <div class="prose prose-lg prose-violet max-w-none" v-html="article?.content"></div>
      </div>
    </article>

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
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { getArticleBySlug, formatDate } from '~/data/blog.js'

const config = useRuntimeConfig()
const baseURL = config.app.baseURL
const route = useRoute()

const slug = route.params.slug
const article = getArticleBySlug(Array.isArray(slug) ? slug[0] : slug)

if (!article) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Статья не найдена'
  })
}

useSeoMeta({
  title: article.title ? `${article.title} — Yappie` : 'Статья — Yappie',
  description: article.description || '',
  ogTitle: article.title || '',
  ogDescription: article.description || '',
  ogImage: article.image || '',
  articlePublishedTime: article.date || ''
})
</script>

<style>
/* Global touch actions for article pages */
.touch-pan-y {
  touch-action: pan-y;
  overflow-x: hidden !important;
}

/* Allow horizontal scroll for table wrappers - high specificity to override global overflow */
div.prose div.table-wrapper,
.prose div.table-wrapper,
.prose .table-wrapper {
  overflow-x: auto !important;
  overflow-y: hidden !important;
  -webkit-overflow-scrolling: touch;
  touch-action: pan-x pan-y !important;
}

.prose h2 {
  font-size: 1.5rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 0.75rem;
  margin-top: 2rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #e5e7eb;
}
.prose h3 {
  font-size: 1.25rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 0.5rem;
  margin-top: 1.5rem;
}
.prose p {
  color: #374151;
  line-height: 1.75;
  margin-bottom: 1rem;
}
.prose ul {
  margin: 1rem 0;
  margin-left: 1.5rem;
  list-style-type: disc;
}
.prose li {
  color: #374151;
  margin: 0.25rem 0;
}
.prose a {
  color: #7c3aed;
  text-decoration: none;
}
.prose a:hover {
  text-decoration: underline;
}

/* Code blocks styling */
.prose pre {
  background: #1e1e2e !important;
  border-radius: 0.75rem;
  padding: 1.25rem;
  margin: 1.5rem 0;
  overflow-x: auto;
  position: relative;
  display: block;
}

.prose pre code {
  color: #cdd6f4 !important;
  font-family: 'JetBrains Mono', 'Fira Code', 'Consolas', 'Monaco', monospace;
  font-size: 0.875rem;
  line-height: 1.7;
  white-space: pre-wrap;
  word-wrap: break-word;
  display: block;
  background: transparent !important;
}

/* Inline code */
.prose :not(pre) > code {
  background: #f3f4f6;
  color: #7c3aed;
  padding: 0.2rem 0.4rem;
  border-radius: 0.25rem;
  font-family: 'JetBrains Mono', 'Fira Code', 'Consolas', monospace;
  font-size: 0.85em;
}

.prose strong {
  color: #111827;
  font-weight: 600;
}
.prose blockquote {
  border-left: 4px solid #7c3aed;
  background: #f9fafb;
  padding: 1rem 1.5rem;
  border-radius: 0 0.5rem 0.5rem 0;
  font-style: normal;
  color: #374151;
  margin: 1.5rem 0;
}

/* Таблицы с горизонтальным скроллом */
.prose .table-wrapper {
  overflow-x: auto !important;
  overflow-y: hidden !important;
  margin: 1.5rem 0;
  -webkit-overflow-scrolling: touch;
  touch-action: pan-x pan-y !important;
  display: block;
  width: 100%;
  position: relative;
  max-width: 100%;
}

.prose .table-wrapper::-webkit-scrollbar {
  height: 8px;
  display: block;
}

.prose .table-wrapper::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 4px;
}

.prose .table-wrapper::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 4px;
}

.prose .table-wrapper::-webkit-scrollbar-thumb:hover {
  background: #a1a1a1;
}

.prose table {
  width: 100% !important;
  max-width: none !important;
  margin: 0 !important;
  border-collapse: collapse;
  min-width: 600px;
  display: table !important;
}

.prose table thead {
  display: table-header-group;
}

.prose table tbody {
  display: table-row-group;
}

.prose table tr {
  display: table-row;
}

.prose th {
  background: #f3f4f6;
  text-align: left;
  padding: 0.75rem;
  font-weight: 600;
  color: #111827;
  border: 1px solid #e5e7eb;
  white-space: nowrap;
  display: table-cell;
}

.prose td {
  padding: 0.75rem;
  border: 1px solid #e5e7eb;
  color: #374151;
  display: table-cell;
}

/* CTA Block Styles */
.prose .cta-block {
  background: linear-gradient(135deg, #f5f3ff 0%, #ede9fe 100%);
  border: 2px solid #ddd6fe;
  border-radius: 1rem;
  padding: 1.5rem;
  margin: 2rem 0;
  text-align: center;
}

.prose .cta-block p {
  color: #374151;
  margin-bottom: 0.75rem;
}

.prose .cta-block p strong {
  font-size: 1.125rem;
  color: #111827;
  display: block;
  margin-bottom: 0.5rem;
}

.prose .cta-block p small {
  font-size: 0.875rem;
  color: #6b7280;
}

.prose .cta-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: #7c3aed;
  color: white !important;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 600;
  text-decoration: none !important;
  transition: all 0.3s ease;
}

.prose .cta-button:hover {
  background: #6d28d9;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(124, 58, 237, 0.3);
}

/* Article Navigation */
.prose .article-nav {
  background: linear-gradient(135deg, #f5f3ff 0%, #ede9fe 100%);
  border: 1px solid #ddd6fe;
  border-radius: 0.75rem;
  padding: 1.25rem 1.5rem;
  margin: 2rem 0 0 0;
}

.prose .article-nav p {
  margin: 0.5rem 0;
  color: #374151;
}

.prose .article-nav p:first-child {
  margin-top: 0;
}

.prose .article-nav p:last-child {
  margin-bottom: 0;
}

.prose .article-nav strong {
  color: #111827;
  font-weight: 600;
}

.prose .article-nav a {
  color: #7c3aed;
  text-decoration: none;
  transition: color 0.2s ease;
}

.prose .article-nav a:hover {
  color: #6d28d9;
  text-decoration: underline;
}
</style>
