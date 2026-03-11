<template>
  <button
    @click="scrollToTop"
    v-show="visible"
    class="fixed bottom-4 right-4 z-[9999] p-3 rounded-2xl transition-all shadow-lg backdrop-blur-sm"
    :class="buttonClass"
    aria-label="Наверх"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 384 512"
      style="width: 20px; height: 20px;"
      fill="currentColor"
      :class="iconClass"
    >
      <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"/>
    </svg>
  </button>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  // Показывать кнопку после скролла (в пикселях)
  scrollThreshold: {
    type: Number,
    default: 300
  },
  // Класс кнопки (Tailwind)
  buttonClass: {
    type: String,
    default: 'bg-gray-900/90 hover:bg-gray-900'
  },
  // Класс иконки (Tailwind)
  iconClass: {
    type: String,
    default: 'text-white'
  }
})

const visible = ref(false)

function handleScroll() {
  visible.value = window.scrollY > props.scrollThreshold
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
