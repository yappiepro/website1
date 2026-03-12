<template>
  <div class="min-h-screen bg-gradient-to-br from-violet-50 via-white to-blue-50 flex items-center justify-center px-4">
    <div class="max-w-md w-full text-center">
      <!-- Иконка офлайн -->
      <div class="mb-8">
        <div class="inline-flex items-center justify-center w-24 h-24 bg-gray-100 rounded-full mb-4">
          <Icon name="fa-solid:wifi" class="w-12 h-12 text-gray-400" />
        </div>
      </div>

      <!-- Заголовок -->
      <h1 class="text-3xl sm:text-4xl font-black text-gray-900 mb-4">
        Нет подключения
      </h1>

      <!-- Описание -->
      <p class="text-lg text-gray-600 mb-8 leading-relaxed">
        Похоже, у вас нет подключения к интернету. Проверьте соединение и попробуйте снова.
      </p>

      <!-- Кнопка перезагрузки -->
      <button
        @click="reloadPage"
        class="group inline-flex items-center gap-3 px-8 py-4 text-base font-semibold text-white bg-violet-600 hover:bg-violet-700 rounded-2xl transition-all hover:-translate-y-1 shadow-lg shadow-violet-600/30"
      >
        <Icon name="fa-solid:rotate" class="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
        Попробовать снова
      </button>

      <!-- Подсказка -->
      <p class="text-sm text-gray-500 mt-8">
        Некоторые страницы могут быть доступны офлайн
      </p>

      <!-- Ссылка на главную -->
      <div class="mt-6">
        <NuxtLink to="/" class="text-sm font-medium text-violet-600 hover:text-violet-700 transition-colors">
          ← Вернуться на главную
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
// SEO
useHead({
  title: 'Нет подключения к интернету | artemselifanov.ru',
  meta: [
    { name: 'robots', content: 'noindex, nofollow' }
  ]
})

// Функция перезагрузки
function reloadPage() {
  window.location.reload()
}
</script>
