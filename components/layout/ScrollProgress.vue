<template>
  <div v-if="isVisible" class="fixed top-0 left-0 w-full h-1 z-[60]" :class="bgClass">
    <div
      class="h-full transition-all duration-150 ease-out"
      :class="barClass"
      :style="{ width: progress + '%' }"
    ></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'

const props = defineProps({
  // Цвет прогресс-бара (Tailwind класс)
  barColor: {
    type: String,
    default: 'bg-blue-600'
  },
  // Цвет фона (Tailwind класс)
  bgColor: {
    type: String,
    default: 'bg-gray-100'
  },
  // Показывать только после скролла
  lazy: {
    type: Boolean,
    default: true
  }
})

const progress = ref(0)
const isVisible = ref(false)

function handleScroll() {
  const winScroll = document.body.scrollTop || document.documentElement.scrollTop
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
  progress.value = height > 0 ? (winScroll / height) * 100 : 0
  
  // Показываем только после скролла > 50px
  if (props.lazy && !isVisible.value && winScroll > 50) {
    isVisible.value = true
  }
}

const barClass = computed(() => props.barColor)
const bgClass = computed(() => props.bgColor)

onMounted(() => {
  // Для lazy режима не подписываемся на скролл сразу
  if (props.lazy) {
    // Используем requestIdleCallback для отложенной инициализации
    if ('requestIdleCallback' in window) {
      requestIdleCallback(() => {
        window.addEventListener('scroll', handleScroll, { passive: true })
      })
    } else {
      setTimeout(() => {
        window.addEventListener('scroll', handleScroll, { passive: true })
      }, 3000)
    }
  } else {
    window.addEventListener('scroll', handleScroll, { passive: true })
  }
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
