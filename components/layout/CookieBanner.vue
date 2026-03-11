<template>
  <Transition
    enter-active-class="transition ease-out duration-300"
    enter-from-class="translate-y-full opacity-0"
    enter-to-class="translate-y-0 opacity-100"
    leave-active-class="transition ease-in duration-300"
    leave-from-class="translate-y-0 opacity-100"
    leave-to-class="translate-y-full opacity-0"
  >
    <div
      v-if="isVisible && !isAccepted"
      class="fixed bottom-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-md border-t border-gray-700 shadow-2xl"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
        <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <!-- Текст -->
          <div class="flex-1">
            <p class="text-sm sm:text-base text-gray-200 leading-relaxed">
              Мы используем файлы <strong>cookies</strong> и сервис <strong>Яндекс.Метрика</strong> для анализа посещаемости и улучшения работы сайта.
              Продолжая использовать сайт, вы соглашаетесь с нашей
              <a href="/cookie" class="text-violet-400 hover:text-violet-300 underline">политикой cookies</a>.
            </p>
          </div>

          <!-- Кнопки -->
          <div class="flex items-center gap-3 flex-shrink-0">
            <button
              @click="acceptCookies"
              class="px-5 py-2.5 text-sm font-semibold text-white bg-violet-600 hover:bg-violet-500 rounded-lg transition-all whitespace-nowrap"
            >
              Принять все
            </button>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const isVisible = ref(false)
const isAccepted = ref(false)

const COOKIE_ACCEPTED_KEY = 'cookie-accepted'

onMounted(() => {
  // Проверяем, было ли уже дано согласие
  const accepted = localStorage.getItem(COOKIE_ACCEPTED_KEY)
  
  if (!accepted) {
    // Показываем баннер с задержкой
    setTimeout(() => {
      isVisible.value = true
    }, 1000)
  } else {
    isAccepted.value = true
  }
})

function acceptCookies() {
  localStorage.setItem(COOKIE_ACCEPTED_KEY, 'true')
  isAccepted.value = true
  isVisible.value = false
  
  // Уведомляем Яндекс.Метрику о согласии (если нужно)
  if (window.ym) {
    // Метрика уже инициализирована, но можно отправить событие
    window.ym('98765432', 'userParams', { cookiesAccepted: true })
  }
}
</script>

<style scoped>
/* Адаптация для мобильных */
@media (max-width: 640px) {
  .fixed {
    padding: 1rem;
  }
}
</style>
