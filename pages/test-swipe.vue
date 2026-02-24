<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const currentSlide = ref(0)
const touchStartX = ref(0)
const touchEndX = ref(0)
const isAnimating = ref(false)

// Контент для слайдов
const slides = [
  {
    title: 'Экран 1',
    text: 'Это первый экран тестовой страницы. Прочитайте текст и сделайте свайп справа налево для перехода к следующему экрану.'
  },
  {
    title: 'Экран 2',
    text: 'Второй экран. Свайп работает как на мобильных устройствах (тач), так и на десктопе (мышь).'
  },
  {
    title: 'Экран 3',
    text: 'Третий экран. Анимация перехода плавная и естественная.'
  },
  {
    title: 'Экран 4',
    text: 'Четвёртый экран. Это последний слайд в демо-версии.'
  },
  {
    title: 'Финал',
    text: 'Вы дошли до конца! Свайпните справа налево ещё раз, чтобы начать сначала.'
  }
]

// Обработка свайпов
const handleTouchStart = (e: TouchEvent | MouseEvent) => {
  if (isAnimating.value) return
  touchStartX.value = 'touches' in e ? e.touches[0].clientX : e.clientX
}

const handleTouchMove = (e: TouchEvent | MouseEvent) => {
  if (isAnimating.value) return
  touchEndX.value = 'touches' in e ? e.touches[0].clientX : e.clientX
}

const handleTouchEnd = () => {
  if (isAnimating.value) return
  
  const swipeThreshold = 50
  const diff = touchStartX.value - touchEndX.value
  
  if (diff > swipeThreshold) {
    // Свайп влево (справа налево) - следующий слайд
    nextSlide()
  } else if (diff < -swipeThreshold) {
    // Свайп вправо (слева направо) - предыдущий слайд
    prevSlide()
  }
  
  touchStartX.value = 0
  touchEndX.value = 0
}

const nextSlide = () => {
  if (currentSlide.value < slides.length - 1) {
    isAnimating.value = true
    currentSlide.value++
    setTimeout(() => {
      isAnimating.value = false
    }, 500)
  } else {
    // Циклический переход к началу
    isAnimating.value = true
    currentSlide.value = 0
    setTimeout(() => {
      isAnimating.value = false
    }, 500)
  }
}

const prevSlide = () => {
  if (currentSlide.value > 0) {
    isAnimating.value = true
    currentSlide.value--
    setTimeout(() => {
      isAnimating.value = false
    }, 500)
  }
}

// Клавиатура
const handleKeydown = (e: KeyboardEvent) => {
  if (e.key === 'ArrowLeft') {
    nextSlide()
  } else if (e.key === 'ArrowRight') {
    prevSlide()
  }
}

onMounted(() => {
  document.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown)
})

useSeoMeta({
  title: 'Тест свайпов',
  description: 'Тестовая страница со свайпами'
})
</script>

<template>
  <div class="test-swipe-page">
    <!-- Навигация -->
    <nav class="fixed top-0 left-0 right-0 z-50 bg-[#030305]/70 backdrop-blur-2xl border-b border-white/[0.08]">
      <div class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="/website1/" class="text-xl font-semibold text-white flex items-center gap-2">
          <span class="font-bold text-white tracking-wider text-2xl">YAPPIE</span>
        </a>
        <div class="flex gap-4">
          <a href="/website1/test-tiktok" class="text-sm text-violet-400 hover:text-violet-300 transition-all">
            TikTok-скролл →
          </a>
          <a href="/website1/demo-mindmap" class="text-sm text-gray-400 hover:text-white transition-all">
            ← Назад к демо
          </a>
        </div>
      </div>
    </nav>

    <!-- Контейнер слайдов -->
    <div class="slides-container">
      <div 
        class="slides-wrapper" 
        :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
        @touchstart="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
        @mousedown="handleTouchStart"
        @mousemove="handleTouchMove"
        @mouseup="handleTouchEnd"
        @mouseleave="handleTouchEnd"
      >
        <div v-for="(slide, index) in slides" :key="index" class="slide">
          <div class="slide-content">
            <h1 class="slide-title">{{ slide.title }}</h1>
            <p class="slide-text">{{ slide.text }}</p>
            <div class="slide-hint">
              <span v-if="index < slides.length - 1">Свайпните справа налево →</span>
              <span v-else>Начните сначала ↺</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Индикаторы -->
    <div class="slide-indicators">
      <div 
        v-for="(slide, index) in slides" 
        :key="index" 
        class="indicator"
        :class="{ active: index === currentSlide }"
        @click="currentSlide = index"
      ></div>
    </div>
  </div>
</template>

<style scoped>
.test-swipe-page {
  min-height: 100vh;
  background: #030305;
  color: #ffffff;
  overflow: hidden;
}

/* Контейнер слайдов */
.slides-container {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.slides-wrapper {
  display: flex;
  width: 100%;
  height: 100%;
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: grab;
}

.slides-wrapper:active {
  cursor: grabbing;
}

.slide {
  min-width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6rem 2rem 4rem;
  box-sizing: border-box;
}

.slide-content {
  max-width: 800px;
  text-align: center;
}

.slide-title {
  font-size: clamp(2rem, 5vw, 4rem);
  font-weight: 800;
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, #a78bfa, #e879f9);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.slide-text {
  font-size: clamp(1.125rem, 2.5vw, 1.5rem);
  line-height: 1.6;
  color: #d1d5db;
  margin-bottom: 2rem;
}

.slide-hint {
  font-size: 0.875rem;
  color: #6b7280;
  margin-top: 3rem;
}

/* Индикаторы */
.slide-indicators {
  position: absolute;
  bottom: 100px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 0.75rem;
  z-index: 10;
}

.indicator {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

.indicator:hover {
  background: rgba(255, 255, 255, 0.4);
}

.indicator.active {
  background: #a78bfa;
  border-color: #a78bfa;
  transform: scale(1.2);
}

/* Мобильная версия */
@media (max-width: 720px) {
  .slide {
    padding: 5rem 1.5rem 3rem;
  }

  .slide-content {
    padding: 0 1rem;
  }

  .slide-indicators {
    bottom: 80px;
  }
}
</style>
