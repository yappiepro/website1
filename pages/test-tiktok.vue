<script setup lang="ts">
import { ref } from 'vue'

const currentSlide = ref(0)
const exerciseText = ref('')
const expandedError = ref<number | null>(null)
const selectedChannels = ref<number[]>([])

// Контент для слайдов — история про ЦА
const slides = [
  {
    type: 'hook',
    title: 'А ты точно знаешь свою ЦА?',
    subtitle: 'Или просто угадываешь?',
    icon: 'question'
  },
  {
    type: 'problem',
    number: '73%',
    text: 'маркетологов таргетируют "всех подряд"',
    source: 'По данным исследования 2024'
  },
  {
    type: 'pain',
    title: 'ЦА — это не возраст и пол',
    main: 'ЦА = БОЛЬ',
    icons: [
      { emoji: '💰', label: 'Проблема', color: 'orange' },
      { emoji: '🎯', label: 'Желание', color: 'purple' },
      { emoji: '💡', label: 'Решение', color: 'lime' }
    ]
  },
  {
    type: 'method',
    title: 'Метод одного человека',
    text: 'Придумайте имя\nОпишите день из жизни\nКакие боли мешают спать?\nО чём мечтает?\nЧто мешает достичь?',
    exercise: '✍️ Упражнение: Опиши одного реального клиента',
    placeholder: 'Введите описание...'
  },
  {
    type: 'types',
    title: '3 типа твоей аудитории',
    types: [
      { name: 'Холодная', color: 'purple', desc: 'Не знают о проблеме', full: 'Люди, которые ещё не осознали свою боль. Они не ищут решение, потому что не понимают проблему. Контент для них: образовательные посты, статистика, истории "было/стало".' },
      { name: 'Тёплая', color: 'orange', desc: 'Ищут решение', full: 'Аудитория активно ищет решение своей проблемы. Сравнивают варианты, читают отзывы, изучают рынок. Контент: кейсы, сравнения, доказательства экспертности.' },
      { name: 'Горячая', color: 'lime', desc: 'Готовы купить', full: 'Уже всё изучили и готовы к покупке. Им нужно только правильное предложение. Контент: офферы, акции, призывы к действию, консультации.' }
    ]
  },
  {
    type: 'where',
    title: 'Где искать ЦА прямо сейчас',
    places: [
      { emoji: '💬', text: 'Комментарии конкурентов' },
      { emoji: '🔍', text: 'Поисковые запросы' },
      { emoji: '📱', text: 'Тематические чаты' },
      { emoji: '⭐', text: 'Отзывы на маркетплейсах' }
    ],
    task: 'Выбери 2 канала для старта'
  },
  {
    type: 'errors',
    title: 'Топ-3 ошибки при поиске ЦА',
    errors: [
      { title: 'Слишком широко', desc: '«Все женщины 25-45» — это не ЦА' },
      { title: 'Только демография', desc: 'Возраст и пол не описывают боль' },
      { title: 'Забыли про боль', desc: 'ЦА покупает решение проблемы, не продукт' }
    ],
    question: 'Какую ошибку делаешь ты?'
  },
  {
    type: 'final',
    message: 'ЦА — это человек с болью, а не сегмент в Excel',
    cta: 'Получить чек-лист по ЦА',
    share: 'Поделиться',
    author: '@yappie'
  }
]

const toggleError = (index: number) => {
  expandedError.value = expandedError.value === index ? null : index
}

const toggleChannel = (index: number) => {
  const idx = selectedChannels.value.indexOf(index)
  if (idx > -1) {
    selectedChannels.value.splice(idx, 1)
  } else {
    selectedChannels.value.push(index)
  }
}

const expandedType = ref<number | null>(null)

const toggleType = (index: number) => {
  expandedType.value = expandedType.value === index ? null : index
}

// Отслеживание текущего слайда при скролле
const handleScroll = (e: Event) => {
  const container = e.target as HTMLElement
  const slideHeight = container.clientHeight
  const scrollTop = container.scrollTop
  const newIndex = Math.round(scrollTop / slideHeight)
  
  if (newIndex >= 0 && newIndex < slides.length) {
    currentSlide.value = newIndex
  }
}

useSeoMeta({
  title: 'ЦА: Как найти свою аудиторию',
  description: 'История про целевую аудиторию в формате TikTok'
})
</script>

<template>
  <div class="tiktok-page">
    <!-- Навигация -->
    <nav class="fixed top-0 left-0 right-0 z-50 bg-[#030305]/70 backdrop-blur-2xl border-b border-white/[0.08]">
      <div class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="/website1/" class="text-xl font-semibold text-white flex items-center gap-2">
          <span class="font-bold text-white tracking-wider text-2xl">YAPPIE</span>
        </a>
        <div class="flex gap-4">
          <a href="/website1/test-swipe" class="text-sm text-gray-400 hover:text-white transition-all">
            ← Свайпы
          </a>
          <a href="/website1/demo-mindmap" class="text-sm text-gray-400 hover:text-white transition-all">
            Демо
          </a>
        </div>
      </div>
    </nav>

    <!-- Контейнер слайдов с вертикальным скроллом -->
    <div class="slides-container" @scroll="handleScroll">
      <!-- Слайд 1: Вводный крючок -->
      <div class="slide slide-hook">
        <div class="slide-content">
          <div class="hook-icon">?</div>
          <h1 class="slide-title-main">{{ slides[0].title }}</h1>
          <p class="slide-subtitle">{{ slides[0].subtitle }}</p>
        </div>
        <div class="swipe-indicator">← Свайп →</div>
      </div>

      <!-- Слайд 2: Проблема в данных -->
      <div class="slide slide-problem">
        <div class="slide-content">
          <div class="big-number animate-pulse">{{ slides[1].number }}</div>
          <p class="slide-text">{{ slides[1].text }}</p>
          <p class="slide-source">{{ slides[1].source }}</p>
        </div>
      </div>

      <!-- Слайд 3: ЦА = боль -->
      <div class="slide slide-pain">
        <div class="slide-content">
          <h2 class="slide-title-small">{{ slides[2].title }}</h2>
          <div class="pain-main">{{ slides[2].main }}</div>
          <div class="pain-icons">
            <div v-for="icon in slides[2].icons" :key="icon.label" class="pain-icon" :class="'color-' + icon.color">
              <span class="emoji">{{ icon.emoji }}</span>
              <span class="label">{{ icon.label }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Слайд 4: Метод одного человека -->
      <div class="slide slide-method">
        <div class="slide-content">
          <h2 class="slide-title-small">{{ slides[3].title }}</h2>
          <p class="method-text">{{ slides[3].text }}</p>
          <div class="exercise-box">
            <p class="exercise-title">{{ slides[3].exercise }}</p>
            <textarea v-model="exerciseText" :placeholder="slides[3].placeholder" class="exercise-input"></textarea>
            <button class="btn-try">Попробовать</button>
          </div>
        </div>
      </div>

      <!-- Слайд 5: Три типа аудитории -->
      <div class="slide slide-types">
        <div class="slide-content">
          <h2 class="slide-title-small">{{ slides[4].title }}</h2>
          <div class="types-grid">
            <div v-for="(type, index) in slides[4].types" :key="type.name" class="type-card" :class="['color-' + type.color, { expanded: expandedType === index }]" @click="toggleType(index)">
              <div class="type-header">
                <div class="type-name">{{ type.name }}</div>
                <div class="type-toggle">{{ expandedType === index ? '−' : '+' }}</div>
              </div>
              <div class="type-desc">{{ type.desc }}</div>
              <div class="type-full">{{ type.full }}</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Слайд 6: Где искать ЦА -->
      <div class="slide slide-where">
        <div class="slide-content">
          <h2 class="slide-title-small">{{ slides[5].title }}</h2>
          <div class="places-list">
            <div v-for="(place, index) in slides[5].places" :key="index" class="place-item" :class="{ selected: selectedChannels.includes(index) }" @click="toggleChannel(index)">
              <span class="place-emoji">{{ place.emoji }}</span>
              <span class="place-text">{{ place.text }}</span>
              <span v-if="selectedChannels.includes(index)" class="checkmark">✓</span>
            </div>
          </div>
          <p class="task-text">{{ slides[5].task }}: {{ selectedChannels.length }}/2</p>
        </div>
      </div>

      <!-- Слайд 7: 3 главные ошибки -->
      <div class="slide slide-errors">
        <div class="slide-content">
          <h2 class="slide-title-small">{{ slides[6].title }}</h2>
          <div class="errors-list">
            <div v-for="(error, index) in slides[6].errors" :key="index" class="error-item" :class="{ expanded: expandedError === index }" @click="toggleError(index)">
              <div class="error-header">
                <span class="error-icon">❌</span>
                <span class="error-title">{{ error.title }}</span>
                <span class="error-arrow">{{ expandedError === index ? '−' : '+' }}</span>
              </div>
              <div class="error-content">{{ error.desc }}</div>
            </div>
          </div>
          <p class="error-question">{{ slides[6].question }}</p>
        </div>
      </div>

      <!-- Слайд 8: Финал + CTA -->
      <div class="slide slide-final">
        <div class="slide-content">
          <div class="final-message">{{ slides[7].message }}</div>
          <button class="btn-cta">{{ slides[7].cta }}</button>
          <button class="btn-share">{{ slides[7].share }}</button>
          <p class="author-signature">{{ slides[7].author }}</p>
        </div>
      </div>
    </div>

    <!-- Вертикальные индикаторы -->
    <div class="slide-indicators-vertical">
      <div v-for="(slide, index) in slides" :key="index" class="indicator-dot" :class="{ active: index === currentSlide }" @click="currentSlide = index"></div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Unbounded:wght@400;700;900&family=Golos+Text:wght@400;500;600;700&display=swap');

.tiktok-page {
  height: 100vh;
  background: #0a0a0a;
  color: #ffffff;
  overflow: hidden;
  font-family: 'Golos Text', sans-serif;
}

/* Контейнер слайдов с вертикальным scroll snap */
.slides-container {
  height: 100vh;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
}

.slide {
  height: 100vh;
  width: 100%;
  scroll-snap-align: start;
  scroll-snap-stop: always;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5rem 1.5rem 3rem;
  box-sizing: border-box;
  position: relative;
}

.slide-content {
  max-width: 500px;
  width: 100%;
}

/* === СЛАЙД 1: КРЮЧОК === */
.slide-hook {
  background: radial-gradient(circle at 50% 50%, rgba(20, 20, 25, 0.8), #0a0a0a 100%);
}

.hook-icon {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: rgba(200, 240, 96, 0.15);
  border: 3px solid #c8f060;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  font-weight: 900;
  color: #c8f060;
  font-family: 'Unbounded', sans-serif;
  margin: 0 auto 2rem;
}

.slide-title-main {
  font-family: 'Unbounded', sans-serif;
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 900;
  text-align: center;
  margin-bottom: 1rem;
  color: #ffffff;
}

.slide-subtitle {
  font-family: 'Golos Text', sans-serif;
  font-size: 1.25rem;
  text-align: center;
  color: #9ca3af;
  margin-bottom: 3rem;
}

.swipe-indicator {
  position: absolute;
  bottom: 80px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 0.875rem;
  color: #6b7280;
  animation: swipe-bounce 2s infinite;
}

@keyframes swipe-bounce {
  0%, 100% { transform: translateX(-50%); }
  50% { transform: translateX(-50%) translateX(10px); }
}

/* === СЛАЙД 2: ПРОБЛЕМА === */
.slide-problem {
  background: #0a0a0a;
}

.big-number {
  font-family: 'Unbounded', sans-serif;
  font-size: clamp(8rem, 25vw, 15rem);
  font-weight: 900;
  color: #c8f060;
  text-align: center;
  line-height: 1;
  margin-bottom: 1rem;
}

.big-number.animate-pulse {
  animation: pulse-lime 2s ease-in-out infinite;
}

@keyframes pulse-lime {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.05); opacity: 0.9; }
}

.slide-text {
  font-family: 'Golos Text', sans-serif;
  font-size: 1.5rem;
  text-align: center;
  color: #ffffff;
  margin-bottom: 0.5rem;
}

.slide-source {
  font-size: 0.75rem;
  color: #6b7280;
  text-align: center;
}

/* === СЛАЙД 3: БОЛЬ === */
.slide-pain {
  background: #0a0a0a;
}

.slide-title-small {
  font-family: 'Unbounded', sans-serif;
  font-size: clamp(1.5rem, 4vw, 2rem);
  font-weight: 700;
  text-align: center;
  margin-bottom: 1.5rem;
  color: #ffffff;
}

.pain-main {
  font-family: 'Unbounded', sans-serif;
  font-size: clamp(3rem, 8vw, 5rem);
  font-weight: 900;
  text-align: center;
  color: #c8f060;
  margin-bottom: 3rem;
}

.pain-icons {
  display: flex;
  justify-content: space-around;
  gap: 1rem;
}

.pain-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.pain-icon .emoji {
  font-size: 3rem;
}

.pain-icon .label {
  font-size: 0.875rem;
  font-weight: 600;
}

.pain-icon.color-lime { color: #c8f060; }
.pain-icon.color-purple { color: #a78bfa; }
.pain-icon.color-orange { color: #ff8c53; }

/* === СЛАЙД 4: МЕТОД === */
.slide-method {
  background: #0a0a0a;
}

.method-text {
  font-size: 1.125rem;
  line-height: 1.8;
  color: #d1d5db;
  white-space: pre-line;
  margin-bottom: 2rem;
}

.exercise-box {
  background: rgba(200, 240, 96, 0.1);
  border: 1px solid rgba(200, 240, 96, 0.3);
  border-radius: 16px;
  padding: 1.5rem;
}

.exercise-title {
  font-weight: 600;
  color: #c8f060;
  margin-bottom: 1rem;
}

.exercise-input {
  width: 100%;
  min-height: 100px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 1rem;
  color: #ffffff;
  font-family: 'Golos Text', sans-serif;
  font-size: 1rem;
  resize: vertical;
  margin-bottom: 1rem;
}

.exercise-input::placeholder {
  color: rgba(255, 255, 255, 0.4);
}

.btn-try {
  width: 100%;
  padding: 1rem;
  background: #c8f060;
  color: #0a0a0a;
  border: none;
  border-radius: 12px;
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-try:hover {
  background: #a8d840;
  transform: translateY(-2px);
}

/* === СЛАЙД 5: ТИПЫ === */
.slide-types {
  background: #0a0a0a;
}

.types-grid {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.type-card {
  padding: 1.25rem;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  cursor: pointer;
  transition: all 0.3s ease;
  overflow: hidden;
}

.type-card:hover {
  transform: translateX(5px);
}

.type-card.expanded {
  transform: translateX(5px);
}

.type-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}

.type-toggle {
  font-size: 1.5rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.5);
  transition: all 0.3s ease;
}

.type-card.expanded .type-toggle {
  color: rgba(255, 255, 255, 0.8);
}

.type-card.color-purple {
  background: rgba(167, 139, 250, 0.1);
  border-color: rgba(167, 139, 250, 0.3);
}

.type-card.color-orange {
  background: rgba(255, 140, 83, 0.1);
  border-color: rgba(255, 140, 83, 0.3);
}

.type-card.color-lime {
  background: rgba(200, 240, 96, 0.1);
  border-color: rgba(200, 240, 96, 0.3);
}

.type-name {
  font-family: 'Unbounded', sans-serif;
  font-size: 1.125rem;
  font-weight: 700;
}

.type-card.color-purple .type-name { color: #a78bfa; }
.type-card.color-orange .type-name { color: #ff8c53; }
.type-card.color-lime .type-name { color: #c8f060; }

.type-desc {
  font-size: 0.875rem;
  color: #9ca3af;
  margin-bottom: 0;
}

.type-full {
  max-height: 0;
  overflow: hidden;
  font-size: 0.875rem;
  color: #d1d5db;
  line-height: 1.6;
  margin-top: 0.75rem;
  padding-top: 0;
  border-top: 0 solid rgba(255, 255, 255, 0.1);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.type-card.expanded .type-full {
  max-height: 200px;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top-width: 1px;
}

.type-card.color-purple .type-full { border-top-color: rgba(167, 139, 250, 0.3); }
.type-card.color-orange .type-full { border-top-color: rgba(255, 140, 83, 0.3); }
.type-card.color-lime .type-full { border-top-color: rgba(200, 240, 96, 0.3); }

/* === СЛАЙД 6: ГДЕ ИСКАТЬ === */
.slide-where {
  background: #0a0a0a;
}

.places-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
}

.place-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.place-item:hover {
  background: rgba(255, 255, 255, 0.05);
}

.place-item.selected {
  background: rgba(200, 240, 96, 0.15);
  border-color: #c8f060;
}

.place-emoji {
  font-size: 1.5rem;
}

.place-text {
  flex: 1;
  font-size: 1rem;
  color: #ffffff;
}

.checkmark {
  color: #c8f060;
  font-size: 1.25rem;
  font-weight: 700;
}

.task-text {
  text-align: center;
  font-size: 0.875rem;
  color: #9ca3af;
}

/* === СЛАЙД 7: ОШИБКИ === */
.slide-errors {
  background: #0a0a0a;
}

.errors-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
}

.error-item {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;
}

.error-item:hover {
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(255, 82, 82, 0.3);
}

.error-item.expanded {
  background: rgba(255, 82, 82, 0.1);
  border-color: rgba(255, 82, 82, 0.5);
}

.error-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem;
}

.error-icon {
  font-size: 1.25rem;
}

.error-title {
  flex: 1;
  font-weight: 600;
  color: #ffffff;
}

.error-arrow {
  font-size: 1.5rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.5);
  transition: all 0.3s ease;
}

.error-item.expanded .error-arrow {
  color: #ff5252;
}

.error-content {
  max-height: 0;
  overflow: hidden;
  font-size: 0.875rem;
  color: #9ca3af;
  line-height: 1.6;
  padding: 0 1rem;
  opacity: 0;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.error-item.expanded .error-content {
  max-height: 150px;
  padding: 0 1rem 1rem;
  opacity: 1;
}

.error-question {
  text-align: center;
  font-size: 1rem;
  color: #c8f060;
  font-weight: 600;
}

/* === СЛАЙД 8: ФИНАЛ === */
.slide-final {
  background: linear-gradient(180deg, #0a0a0a 0%, rgba(200, 240, 96, 0.15) 100%);
}

.final-message {
  font-family: 'Unbounded', sans-serif;
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  font-weight: 900;
  text-align: center;
  color: #ffffff;
  margin-bottom: 2rem;
  line-height: 1.4;
}

.btn-cta {
  width: 100%;
  padding: 1.25rem;
  background: #c8f060;
  color: #0a0a0a;
  border: none;
  border-radius: 12px;
  font-weight: 700;
  font-size: 1.125rem;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-bottom: 1rem;
}

.btn-cta:hover {
  background: #a8d840;
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(200, 240, 96, 0.3);
}

.btn-share {
  width: 100%;
  padding: 1rem;
  background: transparent;
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-share:hover {
  background: rgba(255, 255, 255, 0.1);
}

.author-signature {
  margin-top: 2rem;
  font-size: 0.875rem;
  color: #6b7280;
  text-align: center;
}

/* === ВЕРТИКАЛЬНЫЕ ИНДИКАТОРЫ === */
.slide-indicators-vertical {
  position: fixed;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  z-index: 50;
}

.indicator-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  cursor: pointer;
  transition: all 0.3s ease;
}

.indicator-dot.active {
  background: #c8f060;
  transform: scale(1.3);
  box-shadow: 0 0 10px rgba(200, 240, 96, 0.5);
}

/* Мобильная версия */
@media (max-width: 720px) {
  .slide {
    padding: 4rem 1rem 2rem;
  }

  .slide-content {
    padding: 0 0.5rem;
  }

  .slide-indicators-vertical {
    right: 10px;
  }

  .indicator-dot {
    width: 6px;
    height: 6px;
  }
}
</style>
