<template>
  <div class="fixed top-0 left-0 w-full h-1 z-[60]" :class="bgClass">
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
  }
})

const progress = ref(0)

function handleScroll() {
  const winScroll = document.body.scrollTop || document.documentElement.scrollTop
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
  progress.value = height > 0 ? (winScroll / height) * 100 : 0
}

const barClass = computed(() => props.barColor)
const bgClass = computed(() => props.bgColor)

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
