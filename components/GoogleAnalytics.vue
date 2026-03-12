<template>
  <div></div>
</template>

<script setup>
/**
 * Google Analytics 4 с отложенной загрузкой
 * Загружается после первого взаимодействия пользователя или через 3 секунды
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

// Отложенная загрузка при взаимодействии
function loadOnInteraction() {
  if (!isLoaded.value) {
    initGtag()
    // Убираем слушатели после загрузки
    window.removeEventListener('scroll', loadOnInteraction)
    window.removeEventListener('click', loadOnInteraction)
    window.removeEventListener('touchstart', loadOnInteraction)
    clearTimeout(loadTimeout)
  }
}

// Таймер для загрузки через 3 секунды
let loadTimeout

onMounted(() => {
  // Загрузка по таймеру (3 секунды)
  loadTimeout = setTimeout(() => {
    if (!isLoaded.value) {
      initGtag()
    }
  }, 3000)
  
  // Загрузка при первом скролле
  window.addEventListener('scroll', loadOnInteraction, { once: true, passive: true })
  
  // Загрузка при первом клике
  window.addEventListener('click', loadOnInteraction, { once: true })
  
  // Загрузка при первом таче (мобильные)
  window.addEventListener('touchstart', loadOnInteraction, { once: true, passive: true })
})

onUnmounted(() => {
  clearTimeout(loadTimeout)
  window.removeEventListener('scroll', loadOnInteraction)
  window.removeEventListener('click', loadOnInteraction)
  window.removeEventListener('touchstart', loadOnInteraction)
})
</script>
