<template>
  <div class="min-h-screen bg-white text-gray-900 flex items-center justify-center px-4 overflow-x-hidden">
    <!-- Навигация -->
    <nav class="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-gray-200">
      <div class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="/" class="text-xl font-bold text-gray-900 flex items-center gap-2">
          <span class="font-syncopate font-bold tracking-wider text-2xl">YAPPIE</span>
        </a>

        <!-- Десктопное меню -->
        <div class="hidden md:flex items-center gap-8">
          <a href="/" class="text-sm text-gray-600 hover:text-gray-900 transition-colors">Главная</a>
          <a href="/#problems" class="text-sm text-gray-600 hover:text-gray-900 transition-colors">Проблемы</a>
          <a href="/#services" class="text-sm text-gray-600 hover:text-gray-900 transition-colors">Услуги</a>
          <a href="/#why-us" class="text-sm text-gray-600 hover:text-gray-900 transition-colors">Почему мы</a>
          <a href="/#portfolio" class="text-sm text-gray-600 hover:text-gray-900 transition-colors">Кейсы</a>
          <a href="/blog" class="text-sm text-gray-600 hover:text-gray-900 transition-colors">Блог</a>
          <a href="/#faq" class="text-sm text-gray-600 hover:text-gray-900 transition-colors">FAQ</a>
          <a href="https://t.me/artemselifanov" target="_blank" class="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-gray-900 hover:bg-gray-800 rounded-lg transition-colors">Связаться</a>
        </div>

        <!-- Кнопка бургер-меню для мобильных -->
        <button
          @click="isMobileMenuOpen = !isMobileMenuOpen"
          class="md:hidden text-gray-700 p-2 hover:bg-gray-100 rounded-lg transition-colors"
          aria-label="Открыть меню"
        >
          <Menu v-if="!isMobileMenuOpen" class="w-6 h-6" />
          <X v-else class="w-6 h-6" />
        </button>
      </div>
    </nav>

    <!-- Мобильное меню на весь экран -->
    <div v-if="isMobileMenuOpen" class="fixed inset-0 z-[100] md:hidden bg-white pt-20 px-6">
      <!-- Кнопка закрытия -->
      <button
        @click="isMobileMenuOpen = false"
        class="absolute top-6 right-6 text-gray-700 p-3 hover:bg-gray-100 rounded-lg transition-colors"
        aria-label="Закрыть меню"
      >
        <X class="w-8 h-8" />
      </button>

      <nav class="flex flex-col gap-3 max-w-md mx-auto mt-8">
        <a href="/" @click="isMobileMenuOpen = false" class="p-5 bg-gray-50 hover:bg-gray-100 rounded-2xl transition-all border border-gray-100">
          <span class="text-lg font-bold text-gray-900">Главная</span>
        </a>
        <a href="/#problems" @click="isMobileMenuOpen = false" class="p-5 bg-gray-50 hover:bg-gray-100 rounded-2xl transition-all border border-gray-100">
          <span class="text-lg font-bold text-gray-900">Проблемы</span>
        </a>
        <a href="/#services" @click="isMobileMenuOpen = false" class="p-5 bg-gray-50 hover:bg-gray-100 rounded-2xl transition-all border border-gray-100">
          <span class="text-lg font-bold text-gray-900">Услуги</span>
        </a>
        <a href="/#why-us" @click="isMobileMenuOpen = false" class="p-5 bg-gray-50 hover:bg-gray-100 rounded-2xl transition-all border border-gray-100">
          <span class="text-lg font-bold text-gray-900">Почему мы</span>
        </a>
        <a href="/#portfolio" @click="isMobileMenuOpen = false" class="p-5 bg-gray-50 hover:bg-gray-100 rounded-2xl transition-all border border-gray-100">
          <span class="text-lg font-bold text-gray-900">Кейсы</span>
        </a>
        <a href="/blog" @click="isMobileMenuOpen = false" class="p-5 bg-violet-50 hover:bg-violet-100 rounded-2xl transition-all border border-violet-200">
          <span class="text-lg font-bold text-violet-700">Блог</span>
        </a>
        <a href="/#faq" @click="isMobileMenuOpen = false" class="p-5 bg-gray-50 hover:bg-gray-100 rounded-2xl transition-all border border-gray-100">
          <span class="text-lg font-bold text-gray-900">FAQ</span>
        </a>
        <a href="https://t.me/artemselifanov" target="_blank"
           class="mt-6 p-5 bg-gray-900 hover:bg-gray-800 rounded-2xl transition-all shadow-lg">
          <div class="flex items-center justify-center gap-3">
            <span class="text-base font-bold text-white">Связаться</span>
          </div>
        </a>
      </nav>
    </div>

    <div class="pt-20">
      <h1 class="text-9xl font-bold text-violet-600 mb-4">404</h1>
      <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
        Страница не найдена
      </h2>
      <p class="text-gray-600 mb-8 leading-relaxed">
        К сожалению, страница, которую вы ищете, не существует или была перемещена.
      </p>

      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="/"
          class="inline-flex items-center justify-center gap-2 px-6 py-3 bg-violet-600 text-white font-medium rounded-xl hover:bg-violet-700 transition-all duration-200 shadow-lg shadow-violet-600/25"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          На главную
        </a>
        <a
          href="/blog"
          class="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-100 text-gray-700 font-medium rounded-xl hover:bg-gray-200 transition-all duration-200"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
          Блог
        </a>
      </div>

      <div class="mt-12 pt-8 border-t border-gray-200">
        <p class="text-sm text-gray-500">
          Ошиблись в адресе? <a href="/" class="text-violet-600 hover:text-violet-700 font-medium">Вернуться на главную</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Menu, X } from 'lucide-vue-next'

const isMobileMenuOpen = ref(false)

useSeoMeta({
  title: 'Страница не найдена — 404',
  description: 'Страница, которую вы ищете, не существует'
})
</script>
