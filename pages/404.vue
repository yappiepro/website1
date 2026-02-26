<template>
  <div class="min-h-screen bg-white text-gray-900 flex items-center justify-center px-4 overflow-x-hidden">
    <div class="max-w-md w-full text-center">
      <h1 class="text-9xl font-bold text-violet-600 mb-4">404</h1>
      <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
        Страница не найдена
      </h2>
      <p class="text-gray-600 mb-8 leading-relaxed">
        К сожалению, страница, которую вы ищете, не существует или была перемещена.
      </p>
      
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          :href="baseURL"
          class="inline-flex items-center justify-center gap-2 px-6 py-3 bg-violet-600 text-white font-medium rounded-xl hover:bg-violet-700 transition-all duration-200 shadow-lg shadow-violet-600/25"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          На главную
        </a>
        <a
          :href="baseURL + 'blog'"
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
          Ошиблись в адресе? <a :href="baseURL" class="text-violet-600 hover:text-violet-700 font-medium">Вернуться на главную</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
const config = useRuntimeConfig()
const baseURL = config.app.baseURL

useSeoMeta({
  title: 'Страница не найдена — 404',
  description: 'Страница, которую вы ищете, не существует'
})
</script>
