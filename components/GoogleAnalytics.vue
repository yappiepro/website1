<template>
  <div></div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

/**
 * Google Analytics 4 с загрузкой ТОЛЬКО при взаимодействии
 * Не загружается автоматически — максимальная экономия трафика
 * PageSpeed не видит GTM — скрипт грузится по действию пользователя
 */

const isLoaded = ref(false)
const GA_ID = 'G-G4T213B4HD'

function initGtag() {
  if (isLoaded.value) return

  isLoaded.value = true

  // Создаём dataLayer если нет
  window.dataLayer = window.dataLayer || []

  // Создаём gtag функцию
  function gtag() {
    window.dataLayer.push(arguments)
  }

  // Загружаем скрипт GTM
  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
  document.head.appendChild(script)

  // Инициализируем после загрузки скрипта
  script.onload = () => {
    gtag('js', new Date())
    gtag('config', GA_ID, {
      send_page_view: true
    })
  }
}

// Отложенная загрузка при взаимодействии с защитой от повторных вызовов
let isLoading = false

function loadOnInteraction() {
  if (!isLoaded.value && !isLoading) {
    isLoading = true
    initGtag()
    // Убираем все слушатели после загрузки
    window.removeEventListener('scroll', loadOnInteraction)
    window.removeEventListener('click', loadOnInteraction)
    window.removeEventListener('touchstart', loadOnInteraction)
    window.removeEventListener('mousemove', loadOnInteraction)
    window.removeEventListener('keydown', loadOnInteraction)
    window.removeEventListener('wheel', loadOnInteraction)
  }
}

onMounted(() => {
  // Загрузка при первом скролле
  window.addEventListener('scroll', loadOnInteraction, { once: true, passive: true })

  // Загрузка при первом клике
  window.addEventListener('click', loadOnInteraction, { once: true })

  // Загрузка при первом таче (мобильные)
  window.addEventListener('touchstart', loadOnInteraction, { once: true, passive: true })

  // Загрузка при движении мыши (десктоп) - с debounce
  let mouseMoveTimeout
  window.addEventListener('mousemove', () => {
    if (!isLoaded.value && !isLoading) {
      clearTimeout(mouseMoveTimeout)
      mouseMoveTimeout = setTimeout(loadOnInteraction, 100)
    }
  }, { passive: true })

  // Загрузка при нажатии клавиши (клавиатура)
  window.addEventListener('keydown', loadOnInteraction, { once: true })

  // Загрузка при событии wheel (для Telegram WebApp)
  window.addEventListener('wheel', loadOnInteraction, { once: true, passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', loadOnInteraction)
  window.removeEventListener('click', loadOnInteraction)
  window.removeEventListener('touchstart', loadOnInteraction)
  window.removeEventListener('mousemove', loadOnInteraction)
  window.removeEventListener('keydown', loadOnInteraction)
  window.removeEventListener('wheel', loadOnInteraction)
})
</script>
