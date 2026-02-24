<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'

const currentSlide = ref(0)
const isAnimating = ref(false)
const isLocked = ref(false) // Блокировка скролла для интерактивных карточек

// Блокировка горизонтального скролла и pull-to-refresh
onMounted(() => {
  let touchStartX = 0
  let touchStartY = 0
  
  const handleTouchStart = (e: TouchEvent) => {
    touchStartX = e.touches[0].clientX
    touchStartY = e.touches[0].clientY
  }
  
  const handleTouchMove = (e: TouchEvent) => {
    if (e.touches.length > 1) return
    
    const touchEndX = e.touches[0].clientX
    const touchEndY = e.touches[0].clientY
    
    const diffX = Math.abs(touchEndX - touchStartX)
    const diffY = Math.abs(touchEndY - touchStartY)
    
    // Блокируем только если горизонтальное движение значительно больше вертикального
    if (diffX > diffY * 1.5 && diffX > 10) {
      e.preventDefault()
    }
  }
  
  // Применяем обработчики только к основному контейнеру, не к slide-content
  const container = document.querySelector('.slides-container')
  if (container) {
    container.addEventListener('touchstart', handleTouchStart, { passive: true })
    container.addEventListener('touchmove', handleTouchMove, { passive: false })
  }
  
  // Блокировка зума
  document.addEventListener('gesturestart', (e) => {
    e.preventDefault()
  })
  
  onUnmounted(() => {
    if (container) {
      container.removeEventListener('touchstart', handleTouchStart)
      container.removeEventListener('touchmove', handleTouchMove)
    }
    document.removeEventListener('gesturestart', (e) => {
      e.preventDefault()
    })
  })
})

// === КАРТОЧКА 5: ТЕСТ "ПРАВДА ИЛИ МИФ" ===
const quizState = ref<'start' | 'playing' | 'result'>('start')
const currentQuestion = ref(0)
const quizScore = ref(0)
const quizAnswered = ref(false)
const selectedAnswer = ref<boolean | null>(null)

const quizQuestions = [
  {
    text: 'ЦА — это женщины 25-35 лет со средним доходом',
    correct: false,
    explanation: '❌ Это демография, а не ЦА. ЦА = конкретная боль и желание.'
  },
  {
    text: 'Одному бизнесу может быть несколько разных ЦА',
    correct: true,
    explanation: '✅ Да! У iPhone есть и бизнесмены, и студенты, и фотографы — у каждой группы своя боль.'
  },
  {
    text: 'ЦА нужно описывать через образ жизни и ценности',
    correct: true,
    explanation: '✅ Точно! Важны боли, страхи, мечты — а не просто возраст.'
  },
  {
    text: 'Чем шире ЦА, тем лучше продажи',
    correct: false,
    explanation: '❌ Наоборот! Узкая ЦА = точное попадание = выше конверсия.'
  },
  {
    text: 'ЦА можно найти в комментариях конкурентов',
    correct: true,
    explanation: '✅ Да! Там люди пишут свои боли и вопросы.'
  }
]

const handleQuizAnswer = (answer: boolean) => {
  if (quizAnswered.value) return
  
  selectedAnswer.value = answer
  quizAnswered.value = true
  
  const isCorrect = answer === quizQuestions[currentQuestion.value].correct
  if (isCorrect) {
    quizScore.value++
  }
  
  // Переход к следующему вопросу через 2.5 секунды
  setTimeout(() => {
    if (currentQuestion.value < quizQuestions.length - 1) {
      currentQuestion.value++
      quizAnswered.value = false
      selectedAnswer.value = null
    } else {
      quizState.value = 'result'
    }
  }, 2500)
}

const startQuiz = () => {
  isLocked.value = true // Блокируем скролл
  quizState.value = 'playing'
  currentQuestion.value = 0
  quizScore.value = 0
  quizAnswered.value = false
  selectedAnswer.value = null
}

const quizResult = computed(() => {
  const score = quizScore.value
  if (score >= 4) {
    return { icon: '🔥', title: 'Ты профи!', description: 'Понимаешь ЦА лучше 80% маркетологов' }
  } else if (score >= 3) {
    return { icon: '👍', title: 'Неплохо!', description: 'Ещё немного практики' }
  } else {
    return { icon: '📚', title: 'Есть куда расти!', description: 'Перечитай карточки' }
  }
})

// === КАРТОЧКА 7: ИГРА "ОПРЕДЕЛИ ТЕМПЕРАТУРУ" ===
const game2State = ref<'start' | 'playing' | 'result'>('start')
const game2Current = ref(0)
const game2Score = ref(0)
const game2Answered = ref(false)
const selectedTemp = ref<'cold' | 'warm' | 'hot' | null>(null)

const temperatureClients = [
  {
    text: 'Гуглит "как продвигать бизнес в Instagram", читает статьи, сравнивает SMM-агентства',
    correct: 'warm',
    explanation: '🔥 Тёплая — уже ищет решение, понимает проблему. Нужно показать экспертность и кейсы.'
  },
  {
    text: 'Впервые слышит о SMM-продвижении, думает "а мне это вообще надо?"',
    correct: 'cold',
    explanation: '❄️ Холодная — не знает о проблеме и ценности. Нужно образование: показать, как конкуренты используют SMM.'
  },
  {
    text: 'Написал в Direct: "Когда можем начать работу? Какой у вас прайс и условия?"',
    correct: 'hot',
    explanation: '⚡ Горячая — уже готов покупать! Не тяни с оффером, дай чёткие цены и сроки старта.'
  },
  {
    text: 'Читает отзывы об агентстве, изучает кейсы, смотрит портфолио',
    correct: 'warm',
    explanation: '🔥 Тёплая — выбирает между несколькими вариантами. Покажи отличия от конкурентов и социальные доказательства.'
  },
  {
    text: 'Счастливо продаёт через сарафанное радио, соцсети не ведёт, всё устраивает',
    correct: 'cold',
    explanation: '❄️ Холодная — даже не понимает, зачем ему digital. Нужно показать упущенную выгоду и риски.'
  },
  {
    text: 'Спрашивает: "Есть ли у вас свободные места на февраль? Хочу успеть запуститься к 8 марта"',
    correct: 'hot',
    explanation: '⚡ Горячая — есть срочность и дедлайн. Дай оффер прямо сейчас и покажи быстрый онбординг!'
  }
]

const handleTempAnswer = (temp: 'cold' | 'warm' | 'hot') => {
  if (game2Answered.value) return
  
  selectedTemp.value = temp
  game2Answered.value = true
  
  const isCorrect = temp === temperatureClients[game2Current.value].correct
  if (isCorrect) {
    game2Score.value++
  }
  
  setTimeout(() => {
    if (game2Current.value < temperatureClients.length - 1) {
      game2Current.value++
      game2Answered.value = false
      selectedTemp.value = null
    } else {
      game2State.value = 'result'
    }
  }, 3000)
}

const startGame2 = () => {
  isLocked.value = true // Блокируем скролл
  game2State.value = 'playing'
  game2Current.value = 0
  game2Score.value = 0
  game2Answered.value = false
  selectedTemp.value = null
}

const game2Result = computed(() => {
  const score = game2Score.value
  if (score >= 5) {
    return { icon: '🔥', message: 'Отличная интуиция! Ты чувствуешь температуру аудитории' }
  } else if (score >= 4) {
    return { icon: '👍', message: 'Неплохо! Ещё немного практики и будешь асом' }
  } else {
    return { icon: '💡', message: 'Изучи типы аудитории внимательнее' }
  }
})

// === КАРТОЧКА 6: АККОРДЕОН ===
const expandedType = ref<number | null>(null)

const toggleType = (index: number) => {
  expandedType.value = expandedType.value === index ? null : index
}

// === КАРТОЧКА 6A: ГДЕ ИСКАТЬ ЦА (АККОРДЕОН) ===
const expandedChannel = ref<number | null>(null)

const toggleChannelExpand = (index: number) => {
  expandedChannel.value = expandedChannel.value === index ? null : index
}

// === КАРТОЧКА 6B: ЧЕКЛИСТ "ВЫБЕРИ КАНАЛЫ" ===
const checklistState = ref<'start' | 'selecting' | 'result'>('start')
const selectedChannels = ref<number[]>([])
const checklistSubmitted = ref(false)
const checklistScore = ref(0)

const channels = [
  { text: '💬 Комментарии у конкурентов', isGood: true, feedback: '✅ Отлично! Там люди пишут реальные боли и вопросы' },
  { text: '🔍 Яндекс Вордстат', isGood: true, feedback: '✅ Супер! Видишь, что люди реально ищут' },
  { text: '📱 Тематические Telegram-чаты', isGood: true, feedback: '✅ Да! Живые обсуждения проблем = золотая жила' },
  { text: '⭐ Отзывы на Wildberries/Ozon', isGood: true, feedback: '✅ Точно! Там пишут, что НЕ устроило — это и есть боли' },
  { text: '👥 Опросы в своих соцсетях', isGood: true, feedback: '✅ Хороший вариант, но лучше опрашивать в чужих комьюнити' },
  { text: '📊 Общие соцдем данные из отчётов', isGood: false, feedback: '❌ Это слишком абстрактно! Нужны конкретные боли людей, а не статистика' }
]

const toggleChannel = (index: number) => {
  const idx = selectedChannels.value.indexOf(index)
  if (idx > -1) {
    selectedChannels.value.splice(idx, 1)
  } else {
    selectedChannels.value.push(index)
  }
}

const startChecklist = () => {
  isLocked.value = true // Блокируем скролл
  checklistState.value = 'selecting'
}

const submitChecklist = () => {
  checklistSubmitted.value = true
  // Подсчёт баллов: 1 балл за каждый правильный выбор (макс. 3)
  const goodChoices = selectedChannels.value.filter(i => channels[i].isGood).length
  checklistScore.value = Math.min(goodChoices, 3) // Максимум 3 балла
}

const nextAfterChecklistResult = () => {
  isLocked.value = false // Разблокируем скролл
  const container = document.querySelector('.slides-container')
  if (container) {
    container.scrollTo({
      top: container.clientHeight * 8, // Переход к карточке 9 (7A+7B)
      behavior: 'smooth'
    })
  }
}

// === КАРТОЧКА 7B: КВИЗ "НАЙДИ ОШИБКУ" ===
const quiz7State = ref<'start' | 'playing' | 'result'>('start')
const quiz7Current = ref(0)
const quiz7Score = ref(0)
const quiz7Answered = ref(false)
const selectedQuiz7Answer = ref<number | null>(null)

// Аккордеон для ошибок (7A)
const expandedError = ref<number | null>(null)

const toggleErrorExpand = (index: number) => {
  expandedError.value = expandedError.value === index ? null : index
}

const mistakes = [
  {
    description: '«Наша ЦА — активные девушки 25-35 лет из Москвы, которые следят за собой и любят спорт»',
    options: [
      { text: 'Слишком узко', correct: false },
      { text: 'Только демография, нет боли', correct: true },
      { text: 'Нет описания дохода', correct: false },
      { text: 'Всё правильно', correct: false }
    ],
    explanation: '❌ Это просто демография! А где боль? Что их беспокоит? Может, они хотят похудеть к лету? Или нет времени на зал?'
  },
  {
    description: '«Предприниматели, которые хотят увеличить прибыль»',
    options: [
      { text: 'Слишком широко', correct: true },
      { text: 'Нет указания города', correct: false },
      { text: 'Слишком узко', correct: false },
      { text: 'Всё правильно', correct: false }
    ],
    explanation: '❌ Слишком размыто! «Хотят увеличить прибыль» — это все предприниматели. Какая конкретная проблема? Нет клиентов? Низкий средний чек?'
  },
  {
    description: '«Мамы в декрете, которые хотят работать из дома 2-3 часа в день и зарабатывать от 50к»',
    options: [
      { text: 'Слишком узко', correct: false },
      { text: 'Нет указания возраста', correct: false },
      { text: 'Хорошее описание', correct: true },
      { text: 'Нет боли', correct: false }
    ],
    explanation: '✅ Отлично! Есть конкретная группа, потребность и желаемый результат. Это уже можно использовать!'
  }
]

const handleQuiz7Answer = (optionIndex: number) => {
  if (quiz7Answered.value) return
  
  selectedQuiz7Answer.value = optionIndex
  quiz7Answered.value = true
  
  const isCorrect = mistakes[quiz7Current.value].options[optionIndex].correct
  if (isCorrect) {
    quiz7Score.value++
  }
  
  setTimeout(() => {
    if (quiz7Current.value < mistakes.length - 1) {
      quiz7Current.value++
      quiz7Answered.value = false
      selectedQuiz7Answer.value = null
    } else {
      quiz7State.value = 'result'
    }
  }, 4000)
}

const startQuiz7 = () => {
  isLocked.value = true
  quiz7State.value = 'playing'
  quiz7Current.value = 0
  quiz7Score.value = 0
  quiz7Answered.value = false
  selectedQuiz7Answer.value = null
}

const nextAfterQuiz7 = () => {
  isLocked.value = false
  const container = document.querySelector('.slides-container')
  if (container) {
    container.scrollTo({
      top: container.clientHeight * 9, // Переход к карточке 10 (финал)
      behavior: 'smooth'
    })
  }
}

const quiz7Result = computed(() => {
  const score = quiz7Score.value
  if (score === mistakes.length) {
    return { icon: '🔥', title: 'Профи!', message: 'Видишь ошибки на расстоянии' }
  } else if (score >= 2) {
    return { icon: '👍', title: 'Хорошо!', message: 'Понимаешь основы' }
  } else {
    return { icon: '💡', title: 'Стоит повторить', message: 'Перечитай карточку 7A' }
  }
})

// === НАВИГАЦИЯ ===
const handleScroll = (e: Event) => {
  if (isLocked.value) {
    e.preventDefault()
    return
  }
  
  const container = e.target as HTMLElement
  const slideHeight = container.clientHeight
  const scrollTop = container.scrollTop
  const newIndex = Math.round(scrollTop / slideHeight)
  
  if (newIndex >= 0 && newIndex <= 9) {
    currentSlide.value = newIndex
  }
}

const goToSlide = (index: number) => {
  currentSlide.value = index
}

// Переход к следующему слайду после завершения теста
const nextAfterQuiz = () => {
  isLocked.value = false // Разблокируем скролл
  const container = document.querySelector('.slides-container')
  if (container) {
    container.scrollTo({
      top: container.clientHeight * 6, // Переход к карточке 7 (6A)
      behavior: 'smooth'
    })
  }
}

const nextAfterGame = () => {
  isLocked.value = false // Разблокируем скролл
  const container = document.querySelector('.slides-container')
  if (container) {
    container.scrollTo({
      top: container.clientHeight * 6, // Переход к карточке 7 (6A - Где искать ЦА)
      behavior: 'smooth'
    })
  }
}

const nextAfterChecklist = () => {
  isLocked.value = false // Разблокируем скролл
  const container = document.querySelector('.slides-container')
  if (container) {
    container.scrollTo({
      top: container.clientHeight * 9, // Переход к карточке 10 (финал)
      behavior: 'smooth'
    })
  }
}

useSeoMeta({
  title: 'ЦА: Как найти свою аудиторию',
  description: 'Интерактивная история про целевую аудиторию',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no'
})
</script>

<template>
  <div class="tiktok-page" :class="{ locked: isLocked }">
    <!-- Навигация -->
    <nav class="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/70 backdrop-blur-2xl border-b border-white/[0.08]">
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

    <!-- Контейнер слайдов -->
    <div class="slides-container" @scroll="handleScroll">
      
      <!-- КАРТОЧКА 1: Вводный крючок -->
      <div class="slide slide-1">
        <div class="slide-content">
          <div class="hook-icon">
            <span>?</span>
          </div>
          <h1 class="slide-title-main">А ты точно знаешь свою ЦА?</h1>
          <p class="slide-subtitle">Или просто угадываешь?</p>
        </div>
        <div class="swipe-indicator">Свайпни вверх ↑</div>
      </div>

      <!-- КАРТОЧКА 2: Большая цифра -->
      <div class="slide slide-2">
        <div class="slide-content">
          <div class="big-number">73%</div>
          <p class="slide-text">маркетологов таргетируют<br/>"всех подряд"</p>
          <p class="slide-source">По данным исследования 2024</p>
        </div>
      </div>

      <!-- КАРТОЧКА 3: ЦА = боль -->
      <div class="slide slide-3">
        <div class="slide-content">
          <h2 class="slide-title-small">ЦА — это не возраст и пол</h2>
          <div class="pain-formula">ЦА = БОЛЬ</div>
          <div class="pain-cards">
            <div class="pain-card color-orange">
              <span class="pain-emoji">💰</span>
              <span class="pain-label">Проблема</span>
            </div>
            <div class="pain-card color-purple">
              <span class="pain-emoji">🎯</span>
              <span class="pain-label">Желание</span>
            </div>
            <div class="pain-card color-lime">
              <span class="pain-emoji">💡</span>
              <span class="pain-label">Решение</span>
            </div>
          </div>
        </div>
      </div>

      <!-- КАРТОЧКА 4: Метод одного человека -->
      <div class="slide slide-4">
        <div class="slide-content">
          <h2 class="slide-title-small">Метод одного человека</h2>
          <p class="method-text">
            Забудь про сегменты и аватары.<br/><br/>
            Представь <span class="highlight">ОДНОГО</span> реального человека с конкретной проблемой.
          </p>
          <div class="questions-list">
            <div class="question-item">Что его бесит прямо сейчас?</div>
            <div class="question-item">О чём он думает в 3 часа ночи?</div>
            <div class="question-item">Какое решение он гуглит?</div>
          </div>
          <div class="method-conclusion">
            Это и есть твоя ЦА — человек с болью, а не "сегмент"
          </div>
        </div>
      </div>

      <!-- КАРТОЧКА 5: Тест "Правда или миф" -->
      <div class="slide slide-5">
        <div class="slide-content">
          <!-- Начало теста -->
          <div v-if="quizState === 'start'" class="quiz-intro">
            <h2 class="slide-title-small">Тест: Правда или миф?</h2>
            <p class="quiz-subtitle">Проверь, что ты знаешь о ЦА</p>
            <div class="quiz-info">
              <span>5 вопросов</span>
              <span>•</span>
              <span>2 минуты</span>
            </div>
            <button class="btn-start" @click="startQuiz">Начать тест →</button>
          </div>

          <!-- Процесс теста -->
          <div v-else-if="quizState === 'playing'" class="quiz-game">
            <div class="quiz-progress">Вопрос {{ currentQuestion + 1 }}/5</div>
            
            <div class="question-card">
              <p class="question-text">"{{ quizQuestions[currentQuestion].text }}"</p>
            </div>

            <div class="answer-buttons">
              <button 
                class="btn-answer btn-true" 
                :class="{ 
                  selected: selectedAnswer === true,
                  correct: quizAnswered && quizQuestions[currentQuestion].correct === true,
                  wrong: quizAnswered && selectedAnswer === true && quizQuestions[currentQuestion].correct === false
                }"
                @click="handleQuizAnswer(true)"
                :disabled="quizAnswered"
              >
                ✓ Правда
              </button>
              <button 
                class="btn-answer btn-false"
                :class="{ 
                  selected: selectedAnswer === false,
                  correct: quizAnswered && quizQuestions[currentQuestion].correct === false,
                  wrong: quizAnswered && selectedAnswer === false && quizQuestions[currentQuestion].correct === true
                }"
                @click="handleQuizAnswer(false)"
                :disabled="quizAnswered"
              >
                ✗ Миф
              </button>
            </div>

            <div v-if="quizAnswered" class="explanation-box" :class="selectedAnswer === quizQuestions[currentQuestion].correct ? 'correct' : 'wrong'">
              {{ quizQuestions[currentQuestion].explanation }}
            </div>

            <div class="quiz-score">Счёт: {{ quizScore }}/{{ currentQuestion + (quizAnswered ? 1 : 0) }} 🎯</div>
          </div>

          <!-- Результаты теста -->
          <div v-else class="quiz-result">
            <div class="result-icon">{{ quizResult.icon }}</div>
            <h3 class="result-title">{{ quizResult.title }}</h3>
            <p class="result-description">{{ quizResult.description }}</p>
            <div class="result-score">Твой счёт: {{ quizScore }}/5</div>
            <button class="btn-next" @click="nextAfterQuiz">Дальше →</button>
          </div>
        </div>
      </div>

      <!-- КАРТОЧКА 6: 3 типа аудитории (аккордеон) -->
      <div class="slide slide-6">
        <div class="slide-content">
          <h2 class="slide-title-small">3 типа твоей аудитории</h2>
          
          <div class="accordion">
            <!-- Холодная -->
            <div class="accordion-item" :class="{ expanded: expandedType === 0 }" @click="toggleType(0)">
              <div class="accordion-header audience-cold-header">
                <span class="audience-icon">❄️</span>
                <span class="audience-name">ХОЛОДНАЯ</span>
                <span class="accordion-arrow">{{ expandedType === 0 ? '−' : '+' }}</span>
              </div>
              <div class="accordion-content">
                <p class="audience-desc">Не знают о проблеме</p>
                <div class="audience-actions">
                  <strong>Что делать:</strong>
                  <ul>
                    <li>Образовывать</li>
                    <li>Показывать проблему</li>
                    <li>Давать value без продаж</li>
                  </ul>
                </div>
              </div>
            </div>

            <!-- Тёплая -->
            <div class="accordion-item" :class="{ expanded: expandedType === 1 }" @click="toggleType(1)">
              <div class="accordion-header audience-warm-header">
                <span class="audience-icon">🔥</span>
                <span class="audience-name">ТЁПЛАЯ</span>
                <span class="accordion-arrow">{{ expandedType === 1 ? '−' : '+' }}</span>
              </div>
              <div class="accordion-content">
                <p class="audience-desc">Ищут решение</p>
                <div class="audience-actions">
                  <strong>Что делать:</strong>
                  <ul>
                    <li>Показывать экспертность</li>
                    <li>Давать кейсы</li>
                    <li>Строить доверие</li>
                  </ul>
                </div>
              </div>
            </div>

            <!-- Горячая -->
            <div class="accordion-item" :class="{ expanded: expandedType === 2 }" @click="toggleType(2)">
              <div class="accordion-header audience-hot-header">
                <span class="audience-icon">⚡</span>
                <span class="audience-name">ГОРЯЧАЯ</span>
                <span class="accordion-arrow">{{ expandedType === 2 ? '−' : '+' }}</span>
              </div>
              <div class="accordion-content">
                <p class="audience-desc">Готовы купить</p>
                <div class="audience-actions">
                  <strong>Что делать:</strong>
                  <ul>
                    <li>Давать чёткий оффер</li>
                    <li>Убирать возражения</li>
                    <li>Создавать срочность</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- КАРТОЧКА 7: Где искать ЦА (6A по ТЗ) - АККОРДЕОН -->
      <div class="slide slide-7">
        <div class="slide-content">
          <h2 class="slide-title-small">Где искать ЦА прямо сейчас</h2>
          <p class="method-intro">Не выдумывай ЦА — иди туда, где она уже есть:</p>
          
          <div class="channels-accordion">
            <div class="accordion-item channel-accordion-item" 
                 :class="{ expanded: expandedChannel === 0 }" 
                 @click="toggleChannelExpand(0)">
              <div class="accordion-header channel-header">
                <span class="channel-emoji">💬</span>
                <span class="channel-name">Комментарии конкурентов</span>
                <span class="accordion-arrow">{{ expandedChannel === 0 ? '−' : '+' }}</span>
              </div>
              <div class="accordion-content channel-content">
                <p>Люди пишут свои боли</p>
              </div>
            </div>
            
            <div class="accordion-item channel-accordion-item" 
                 :class="{ expanded: expandedChannel === 1 }" 
                 @click="toggleChannelExpand(1)">
              <div class="accordion-header channel-header">
                <span class="channel-emoji">🔍</span>
                <span class="channel-name">Яндекс Вордстат</span>
                <span class="accordion-arrow">{{ expandedChannel === 1 ? '−' : '+' }}</span>
              </div>
              <div class="accordion-content channel-content">
                <p>Показывает что люди ищут</p>
              </div>
            </div>
            
            <div class="accordion-item channel-accordion-item" 
                 :class="{ expanded: expandedChannel === 2 }" 
                 @click="toggleChannelExpand(2)">
              <div class="accordion-header channel-header">
                <span class="channel-emoji">📱</span>
                <span class="channel-name">Тематические чаты</span>
                <span class="accordion-arrow">{{ expandedChannel === 2 ? '−' : '+' }}</span>
              </div>
              <div class="accordion-content channel-content">
                <p>Telegram, форумы — живые обсуждения проблем</p>
              </div>
            </div>
            
            <div class="accordion-item channel-accordion-item" 
                 :class="{ expanded: expandedChannel === 3 }" 
                 @click="toggleChannelExpand(3)">
              <div class="accordion-header channel-header">
                <span class="channel-emoji">⭐</span>
                <span class="channel-name">Отзывы на маркетплейсах</span>
                <span class="accordion-arrow">{{ expandedChannel === 3 ? '−' : '+' }}</span>
              </div>
              <div class="accordion-content channel-content">
                <p>Пишут, что НЕ устроило в товарах конкурентов</p>
              </div>
            </div>
            
            <div class="accordion-item channel-accordion-item" 
                 :class="{ expanded: expandedChannel === 4 }" 
                 @click="toggleChannelExpand(4)">
              <div class="accordion-header channel-header">
                <span class="channel-emoji">👥</span>
                <span class="channel-name">Опросы подписчиков</span>
                <span class="accordion-arrow">{{ expandedChannel === 4 ? '−' : '+' }}</span>
              </div>
              <div class="accordion-content channel-content">
                <p>Спроси напрямую: "Что тебя сейчас бесит?"</p>
              </div>
            </div>
          </div>
          
          <button class="btn-next" @click="goToSlide(8)">Дальше →</button>
        </div>
      </div>

      <!-- КАРТОЧКА 8: Чеклист "Выбери каналы" (6B по ТЗ) -->
      <div class="slide slide-8">
        <div class="slide-content">
          <!-- Начало чеклиста -->
          <div v-if="checklistState === 'start'" class="checklist-intro">
            <h2 class="slide-title-small">Где искать ЦА прямо сейчас?</h2>
            <p class="checklist-subtitle">Выбери 3 лучших места</p>
            <button class="btn-start" @click="startChecklist">Начать →</button>
          </div>

          <!-- Процесс выбора -->
          <div v-else-if="checklistState === 'selecting'" class="checklist-process">
            <div class="channels-select">
              <div v-for="(channel, index) in channels" :key="index" 
                   class="channel-option" 
                   :class="{ selected: selectedChannels.includes(index) }"
                   @click="toggleChannel(index)">
                <span class="channel-checkbox">{{ selectedChannels.includes(index) ? '✓' : '○' }}</span>
                <span class="channel-text">{{ channel.text }}</span>
              </div>
            </div>
            
            <p class="channels-count">Выбрано: {{ selectedChannels.length }}/3</p>
            
            <button class="btn-next" 
                    :disabled="selectedChannels.length < 3"
                    @click="submitChecklist">
              Проверить ответ
            </button>
          </div>

          <!-- Результаты -->
          <div v-else class="checklist-result">
            <div v-for="(channel, index) in channels" :key="index" 
                 class="result-item"
                 :class="{ 
                   'result-good': channel.isGood && selectedChannels.includes(index),
                   'result-bad': !channel.isGood && selectedChannels.includes(index),
                   'result-missed': channel.isGood && !selectedChannels.includes(index)
                 }">
              <span class="result-icon">{{ channel.isGood ? '✅' : selectedChannels.includes(index) ? '❌' : '⊘' }}</span>
              <span class="result-text">{{ channel.text }}</span>
              <span class="result-feedback">{{ channel.feedback }}</span>
            </div>
            
            <div class="checklist-verdict">
              {{ selectedChannels.filter(i => channels[i].isGood).length >= 3 
                ? '🔥 Отличный выбор! Ты знаешь, где живёт ЦА' 
                : '💡 Подумай: где люди пишут свои реальные проблемы?' }}
            </div>
            
            <button class="btn-next" @click="nextAfterChecklistResult">Дальше →</button>
          </div>
        </div>
      </div>

      <!-- КАРТОЧКА 9: Топ-3 ошибки (аккордеон) + Квиз "Найди ошибку" (7A + 7B по ТЗ) -->
      <div class="slide slide-9">
        <div class="slide-content">
          <!-- Статичная часть: Топ-3 ошибки (аккордеон) -->
          <div v-if="quiz7State === 'start'" class="errors-intro">
            <h2 class="slide-title-small">Топ-3 ошибки при поиске ЦА</h2>
            
            <div class="errors-accordion">
              <!-- Ошибка 1 -->
              <div class="accordion-item error-accordion-item" 
                   :class="{ expanded: expandedError === 0 }" 
                   @click="toggleErrorExpand(0)">
                <div class="accordion-header error-header">
                  <span class="error-number-short">❌ #1</span>
                  <span class="error-title-short">Слишком широко</span>
                  <span class="accordion-arrow">{{ expandedError === 0 ? '−' : '+' }}</span>
                </div>
                <div class="accordion-content error-content">
                  <p class="error-example">"Все, кто хочет похудеть"</p>
                  <p class="error-problem"><strong>Проблема:</strong> теряешь фокус</p>
                  <p class="error-solution"><strong>Решение:</strong> выбери ОДНУ группу (например: мамы после родов)</p>
                </div>
              </div>
              
              <!-- Ошибка 2 -->
              <div class="accordion-item error-accordion-item" 
                   :class="{ expanded: expandedError === 1 }" 
                   @click="toggleErrorExpand(1)">
                <div class="accordion-header error-header">
                  <span class="error-number-short">❌ #2</span>
                  <span class="error-title-short">Только демография</span>
                  <span class="accordion-arrow">{{ expandedError === 1 ? '−' : '+' }}</span>
                </div>
                <div class="accordion-content error-content">
                  <p class="error-example">"Женщины 25-35 лет из Москвы"</p>
                  <p class="error-problem"><strong>Проблема:</strong> это не боль</p>
                  <p class="error-solution"><strong>Решение:</strong> добавь проблему (хотят вернуть форму за 3 мес)</p>
                </div>
              </div>
              
              <!-- Ошибка 3 -->
              <div class="accordion-item error-accordion-item" 
                   :class="{ expanded: expandedError === 2 }" 
                   @click="toggleErrorExpand(2)">
                <div class="accordion-header error-header">
                  <span class="error-number-short">❌ #3</span>
                  <span class="error-title-short">Забыли про боль</span>
                  <span class="accordion-arrow">{{ expandedError === 2 ? '−' : '+' }}</span>
                </div>
                <div class="accordion-content error-content">
                  <p class="error-example">"Активные люди, любят спорт"</p>
                  <p class="error-problem"><strong>Проблема:</strong> нет мотивации купить</p>
                  <p class="error-solution"><strong>Решение:</strong> найди конкретную боль (нет времени на зал, но хотят)</p>
                </div>
              </div>
            </div>
            
            <button class="btn-start" @click="startQuiz7">Пройти тест →</button>
          </div>

          <!-- Квиз "Найди ошибку" -->
          <div v-else-if="quiz7State === 'playing'" class="quiz7-process">
            <div class="quiz7-progress">Вопрос {{ quiz7Current + 1 }}/3</div>
            
            <div class="quiz7-description">
              {{ mistakes[quiz7Current].description }}
            </div>
            
            <div class="quiz7-options">
              <button v-for="(option, idx) in mistakes[quiz7Current].options" :key="idx"
                      class="quiz7-option"
                      :class="{
                        selected: selectedQuiz7Answer === idx,
                        correct: quiz7Answered && option.correct,
                        wrong: quiz7Answered && selectedQuiz7Answer === idx && !option.correct
                      }"
                      @click="handleQuiz7Answer(idx)"
                      :disabled="quiz7Answered">
                {{ option.text }}
              </button>
            </div>
            
            <div v-if="quiz7Answered" class="quiz7-explanation" :class="selectedQuiz7Answer === mistakes[quiz7Current].options.find(o => o.correct)?.index ? 'correct' : 'wrong'">
              {{ mistakes[quiz7Current].explanation }}
            </div>
            
            <div class="quiz7-score">Правильно: {{ quiz7Score }}/{{ quiz7Current + (quiz7Answered ? 1 : 0) }}</div>
          </div>

          <!-- Результаты квиза -->
          <div v-else class="quiz7-result">
            <div class="result-icon">{{ quiz7Result.icon }}</div>
            <h3 class="result-title">{{ quiz7Result.title }}</h3>
            <p class="result-description">{{ quiz7Result.message }}</p>
            <div class="result-score">Твой счёт: {{ quiz7Score }}/3</div>
            <button class="btn-next" @click="nextAfterQuiz7">К финалу →</button>
          </div>
        </div>
      </div>

      <!-- КАРТОЧКА 10: Финал с результатами -->
      <div class="slide slide-10">
        <div class="slide-content">
          <div class="final-summary">
            <div class="final-icon">🏆</div>
            <h2 class="final-title">Ты прошёл курс по ЦА!</h2>
            
            <div class="scores-summary">
              <div class="score-item">
                <span class="score-label">Тест "Правда или миф"</span>
                <span class="score-value">{{ quizScore }}/5</span>
              </div>
              <div class="score-item">
                <span class="score-label">Игра "Температура"</span>
                <span class="score-value">{{ game2Score }}/6</span>
              </div>
              <div class="score-item">
                <span class="score-label">Чеклист "Каналы"</span>
                <span class="score-value">{{ checklistScore }}/3</span>
              </div>
              <div class="score-item">
                <span class="score-label">Квиз "Найди ошибку"</span>
                <span class="score-value">{{ quiz7Score }}/3</span>
              </div>
              <div class="score-total">
                <span class="score-label">Итого</span>
                <span class="score-value">{{ quizScore + game2Score + checklistScore + quiz7Score }}/17</span>
              </div>
            </div>
            
            <div class="final-message">
              ЦА — это человек с болью,<br/>а не сегмент в Excel
            </div>
            
            <button class="btn-cta">Получить чек-лист по ЦА</button>
            <button class="btn-share">Поделиться</button>
            <p class="author-signature">@yappie</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Индикаторы -->
    <div class="slide-indicators-vertical">
      <div v-for="index in 10" :key="index" class="indicator-dot" :class="{ active: index - 1 === currentSlide }" @click="goToSlide(index - 1)"></div>
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
  touch-action: pan-y;
}

.tiktok-page.locked {
  overflow: hidden;
}

.tiktok-page.locked .slides-container {
  overflow: hidden;
  pointer-events: none;
}

/* Разрешаем клики внутри интерактивных элементов */
.tiktok-page.locked .quiz-game,
.tiktok-page.locked .game-process,
.tiktok-page.locked .checklist-process,
.tiktok-page.locked .quiz7-process {
  pointer-events: auto;
}

.tiktok-page.locked .quiz-game *,
.tiktok-page.locked .game-process *,
.tiktok-page.locked .checklist-process *,
.tiktok-page.locked .quiz7-process * {
  pointer-events: auto;
}

.slides-container {
  height: 100vh;
  overflow-y: scroll;
  overflow-x: hidden;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  touch-action: pan-y;
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
  touch-action: pan-y;
  user-select: none;
  -webkit-user-select: none;
}

.slide-content {
  max-width: 500px;
  width: 100%;
}

/* === КАРТОЧКА 1: КРЮЧОК === */
.slide-1 {
  background: radial-gradient(circle at 50% 50%, rgba(20, 20, 25, 0.8), #0a0a0a 100%);
  padding-top: 6rem;
}

.hook-icon {
  width: 120px;
  height: 120px;
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
  padding: 10px;
  animation: pulse-icon 2s ease-in-out infinite;
}

@keyframes pulse-icon {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}

.slide-1 .slide-content {
  overflow: visible;
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
  animation: bounce-up 2s infinite;
}

@keyframes bounce-up {
  0%, 100% { transform: translateX(-50%) translateY(0); }
  50% { transform: translateX(-50%) translateY(-10px); }
}

/* === КАРТОЧКА 2: ЦИФРА === */
.slide-2 {
  background: #0a0a0a;
}

.big-number {
  font-family: 'Unbounded', sans-serif;
  font-size: clamp(5rem, 20vw, 10rem);
  font-weight: 900;
  color: #c8f060;
  text-align: center;
  line-height: 1;
  margin-bottom: 1rem;
  text-shadow: 0 0 60px rgba(200, 240, 96, 0.5);
}

.slide-text {
  font-family: 'Golos Text', sans-serif;
  font-size: 1.5rem;
  text-align: center;
  color: #ffffff;
  margin-bottom: 0.5rem;
  line-height: 1.4;
}

.slide-source {
  font-size: 0.75rem;
  color: #6b7280;
  text-align: center;
}

/* === КАРТОЧКА 3: БОЛЬ === */
.slide-3 {
  background: #0a0a0a;
}

.slide-title-small {
  font-family: 'Unbounded', sans-serif;
  font-size: clamp(1.5rem, 4vw, 2rem);
  font-weight: 700;
  text-align: center;
  margin-bottom: 1.5rem;
  color: #c8f060;
}

.pain-formula {
  font-family: 'Unbounded', sans-serif;
  font-size: clamp(3rem, 8vw, 5rem);
  font-weight: 900;
  text-align: center;
  color: #c8f060;
  margin-bottom: 3rem;
  background: linear-gradient(135deg, #c8f060, #ff6b35);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.pain-cards {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.pain-card {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.25rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 12px;
  border: 2px solid rgba(255, 255, 255, 0.1);
}

.pain-card.color-orange { border-color: rgba(255, 107, 53, 0.5); }
.pain-card.color-purple { border-color: rgba(167, 139, 250, 0.5); }
.pain-card.color-lime { border-color: rgba(200, 240, 96, 0.5); }

.pain-emoji {
  font-size: 2rem;
  flex-shrink: 0;
}

.pain-label {
  font-size: 1rem;
  font-weight: 600;
  color: #ffffff;
  margin: 0;
}

/* === КАРТОЧКА 4: МЕТОД === */
.slide-4 {
  background: #0a0a0a;
}

.method-text {
  font-size: 1.125rem;
  line-height: 1.8;
  color: #d1d5db;
  margin-bottom: 2rem;
}

.method-text .highlight {
  color: #c8f060;
  font-weight: 700;
}

.questions-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
}

.question-item {
  padding: 1rem 1.25rem;
  background: rgba(255, 255, 255, 0.03);
  border-left: 3px solid #c8f060;
  border-radius: 8px;
  font-size: 1rem;
  color: #ffffff;
}

.method-conclusion {
  padding: 1.5rem;
  background: rgba(200, 240, 96, 0.1);
  border: 1px solid rgba(200, 240, 96, 0.3);
  border-radius: 12px;
  text-align: center;
  font-weight: 600;
  color: #c8f060;
}

/* === КАРТОЧКА 5: ТЕСТ === */
.slide-5 {
  background: #0a0a0a;
}

.quiz-intro, .game-intro {
  text-align: center;
}

.quiz-subtitle, .game-subtitle {
  font-size: 1.125rem;
  color: #9ca3af;
  margin-bottom: 1.5rem;
}

.quiz-info, .game-info {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
  color: #6b7280;
}

.btn-start {
  padding: 1.25rem 2.5rem;
  background: #c8f060;
  color: #0a0a0a;
  border: none;
  border-radius: 12px;
  font-weight: 700;
  font-size: 1.125rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-start:hover {
  background: #a8d840;
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(200, 240, 96, 0.3);
}

.quiz-game, .game-process {
  width: 100%;
}

.quiz-progress, .game-progress {
  font-size: 0.875rem;
  color: #6b7280;
  margin-bottom: 1rem;
  text-align: center;
}

.question-card, .client-card {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 2rem;
  margin-bottom: 1.5rem;
}

.question-text, .client-text {
  font-size: 1.125rem;
  line-height: 1.6;
  color: #ffffff;
  margin: 0;
}

.answer-buttons {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.btn-answer {
  padding: 1.5rem;
  border-radius: 12px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.05);
  color: #ffffff;
}

.btn-answer:hover:not(:disabled) {
  background: rgba(255, 255, 255, 0.1);
}

.btn-answer:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

.btn-answer.selected {
  border-color: #c8f060;
  background: rgba(200, 240, 96, 0.2);
}

.btn-answer.correct {
  border-color: #4ade80;
  background: rgba(74, 222, 128, 0.2);
}

.btn-answer.wrong {
  border-color: #ef4444;
  background: rgba(239, 68, 68, 0.2);
}

.explanation-box, .game-explanation {
  padding: 1.25rem;
  border-radius: 12px;
  margin-bottom: 1.5rem;
  font-size: 0.95rem;
  line-height: 1.5;
}

.explanation-box.correct, .game-explanation.correct {
  background: rgba(74, 222, 128, 0.1);
  border: 1px solid rgba(74, 222, 128, 0.3);
  color: #4ade80;
}

.explanation-box.wrong, .game-explanation.wrong {
  background: rgba(239, 68, 68, 0.1);
  border: 1px solid rgba(239, 68, 68, 0.3);
  color: #ef4444;
}

.quiz-score, .game-score {
  text-align: center;
  font-size: 0.95rem;
  color: #9ca3af;
}

.quiz-result, .game-result {
  text-align: center;
}

.result-icon {
  font-size: 5rem;
  margin-bottom: 1rem;
}

.result-title {
  font-family: 'Unbounded', sans-serif;
  font-size: 1.75rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 0.5rem;
}

.result-description, .game-result .result-title {
  font-size: 1.125rem;
  color: #9ca3af;
  margin-bottom: 1.5rem;
}

.result-score {
  font-size: 1.25rem;
  color: #c8f060;
  font-weight: 600;
  margin-bottom: 2rem;
}

.btn-next {
  padding: 1.25rem 2.5rem;
  background: #c8f060;
  color: #0a0a0a;
  border: none;
  border-radius: 12px;
  font-weight: 700;
  font-size: 1.125rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-next:hover {
  background: #a8d840;
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(200, 240, 96, 0.3);
}

/* === КАРТОЧКА 6: АККОРДЕОН === */
.slide-6 {
  background: #0a0a0a;
}

.accordion {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.accordion-item {
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid;
}

.accordion-item:hover {
  transform: translateX(5px);
}

.accordion-item.expanded {
  transform: translateX(5px);
}

.accordion-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1.25rem;
  background: rgba(255, 255, 255, 0.05);
}

.audience-cold-header {
  border-color: rgba(167, 139, 250, 0.5);
  background: rgba(167, 139, 250, 0.1);
}

.audience-warm-header {
  border-color: rgba(255, 107, 53, 0.5);
  background: rgba(255, 107, 53, 0.1);
}

.audience-hot-header {
  border-color: rgba(200, 240, 96, 0.5);
  background: rgba(200, 240, 96, 0.1);
}

.accordion-arrow {
  margin-left: auto;
  font-size: 1.5rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.5);
  transition: all 0.3s ease;
}

.accordion-item.expanded .accordion-arrow {
  color: rgba(255, 255, 255, 0.8);
}

.accordion-content {
  max-height: 0;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  background: rgba(255, 255, 255, 0.02);
}

.accordion-item.expanded .accordion-content {
  max-height: 250px;
  padding: 0 1.25rem 1.25rem;
}

.audience-desc {
  font-size: 0.95rem;
  color: #9ca3af;
  margin-bottom: 1rem;
}

.audience-actions {
  font-size: 0.875rem;
  color: #d1d5db;
}

.audience-actions strong {
  color: #ffffff;
  display: block;
  margin-bottom: 0.5rem;
}

.audience-actions ul {
  margin: 0;
  padding-left: 1.25rem;
}

.audience-actions li {
  margin-bottom: 0.25rem;
}

/* === КАРТОЧКА 7: ИГРА === */
.slide-7 {
  background: #0a0a0a;
}

.temp-buttons {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;
  margin-bottom: 1.5rem;
}

.btn-temp {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 1.25rem;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid;
  background: rgba(255, 255, 255, 0.05);
  color: #ffffff;
}

.btn-temp:hover:not(:disabled) {
  transform: translateY(-2px);
}

.btn-temp:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

.btn-cold { border-color: rgba(167, 139, 250, 0.5); }
.btn-warm { border-color: rgba(255, 107, 53, 0.5); }
.btn-hot { border-color: rgba(200, 240, 96, 0.5); }

.btn-cold.selected { background: rgba(167, 139, 250, 0.2); }
.btn-warm.selected { background: rgba(255, 107, 53, 0.2); }
.btn-hot.selected { background: rgba(200, 240, 96, 0.2); }

.btn-cold.correct { background: rgba(167, 139, 250, 0.3); border-color: #a78bfa; }
.btn-warm.correct { background: rgba(255, 107, 53, 0.3); border-color: #ff6b35; }
.btn-hot.correct { background: rgba(200, 240, 96, 0.3); border-color: #c8f060; }

.btn-cold.wrong { border-color: #ef4444; }
.btn-warm.wrong { border-color: #ef4444; }
.btn-hot.wrong { border-color: #ef4444; }

.temp-icon {
  font-size: 2rem;
}

.temp-label {
  font-size: 0.875rem;
  font-weight: 600;
}

/* === КАРТОЧКА 7: ГДЕ ИСКАТЬ ЦА (АККОРДЕОН) === */
.slide-7 {
  background: #0a0a0a;
}

.channels-accordion {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 2rem;
}

.channel-accordion-item {
  border: 2px solid rgba(200, 240, 96, 0.3);
  background: rgba(200, 240, 96, 0.05);
}

.channel-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 1.25rem;
  cursor: pointer;
}

.channel-name {
  flex: 1;
  font-weight: 600;
  color: #ffffff;
  font-size: 1rem;
}

.channel-content {
  padding: 0 1.25rem;
}

.channel-content p {
  color: #9ca3af;
  font-size: 0.95rem;
  margin: 0;
  padding-bottom: 1rem;
}

/* === КАРТОЧКА 8: ЧЕКЛИСТ === */
.slide-8 {
  background: #0a0a0a;
}

.checklist-intro {
  text-align: center;
}

.checklist-subtitle {
  font-size: 1.125rem;
  color: #9ca3af;
  margin-bottom: 2rem;
}

.channels-select {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
}

.channel-option {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.25rem;
  background: rgba(255, 255, 255, 0.03);
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.channel-option:hover {
  background: rgba(255, 255, 255, 0.05);
}

.channel-option.selected {
  background: rgba(200, 240, 96, 0.1);
  border-color: #c8f060;
}

.channel-checkbox {
  font-size: 1.5rem;
  color: #c8f060;
  width: 30px;
  text-align: center;
}

.channel-text {
  flex: 1;
  font-size: 1rem;
  color: #ffffff;
}

.channels-count {
  text-align: center;
  font-size: 0.95rem;
  color: #9ca3af;
  margin-bottom: 1.5rem;
}

.checklist-result {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.result-item {
  padding: 1rem;
  border-radius: 12px;
  border: 2px solid;
}

.result-good {
  background: rgba(74, 222, 128, 0.1);
  border-color: rgba(74, 222, 128, 0.3);
}

.result-bad {
  background: rgba(239, 68, 68, 0.1);
  border-color: rgba(239, 68, 68, 0.3);
}

.result-missed {
  background: rgba(255, 255, 255, 0.03);
  border-color: rgba(255, 255, 255, 0.1);
  opacity: 0.5;
}

.result-icon {
  font-size: 1.25rem;
  margin-right: 0.5rem;
}

.result-text {
  display: block;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 0.25rem;
}

.result-feedback {
  display: block;
  font-size: 0.875rem;
  color: #9ca3af;
}

.checklist-verdict {
  text-align: center;
  font-size: 1.125rem;
  color: #c8f060;
  font-weight: 600;
  margin: 1.5rem 0;
  padding: 1rem;
  background: rgba(200, 240, 96, 0.1);
  border-radius: 12px;
}

/* === КАРТОЧКА 9: ОШИБКИ (АККОРДЕОН) + КВИЗ === */
.slide-9 {
  background: #0a0a0a;
}

.errors-intro {
  text-align: left;
}

.errors-accordion {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 2rem;
}

.error-accordion-item {
  border: 2px solid rgba(239, 68, 68, 0.3);
  background: rgba(239, 68, 68, 0.05);
}

.error-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 1.25rem;
  cursor: pointer;
}

.error-number-short {
  font-size: 0.875rem;
  font-weight: 700;
  color: #ef4444;
}

.error-title-short {
  flex: 1;
  font-weight: 600;
  color: #ffffff;
  font-size: 1rem;
}

.error-content {
  padding: 0 1.25rem;
}

.error-example {
  font-style: italic;
  color: #9ca3af;
  margin-bottom: 0.75rem;
  padding: 0.75rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  font-size: 0.95rem;
}

.error-problem, .error-solution {
  font-size: 0.875rem;
  margin-bottom: 0.5rem;
}

.error-problem strong {
  color: #ef4444;
}

.error-solution strong {
  color: #4ade80;
}

.quiz7-process {
  width: 100%;
}

.quiz7-progress {
  font-size: 0.875rem;
  color: #6b7280;
  margin-bottom: 1rem;
  text-align: center;
}

.quiz7-description {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 2rem;
  margin-bottom: 1.5rem;
  font-size: 1.125rem;
  line-height: 1.6;
  color: #ffffff;
}

.quiz7-options {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
}

.quiz7-option {
  padding: 1.25rem;
  background: rgba(255, 255, 255, 0.05);
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  color: #ffffff;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: left;
}

.quiz7-option:hover:not(:disabled) {
  background: rgba(255, 255, 255, 0.1);
}

.quiz7-option.selected {
  border-color: #c8f060;
  background: rgba(200, 240, 96, 0.2);
}

.quiz7-option.correct {
  border-color: #4ade80;
  background: rgba(74, 222, 128, 0.2);
}

.quiz7-option.wrong {
  border-color: #ef4444;
  background: rgba(239, 68, 68, 0.2);
}

.quiz7-option:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

.quiz7-explanation {
  padding: 1.25rem;
  border-radius: 12px;
  margin-bottom: 1.5rem;
  font-size: 0.95rem;
  line-height: 1.5;
}

.quiz7-explanation.correct {
  background: rgba(74, 222, 128, 0.1);
  border: 1px solid rgba(74, 222, 128, 0.3);
  color: #4ade80;
}

.quiz7-explanation.wrong {
  background: rgba(239, 68, 68, 0.1);
  border: 1px solid rgba(239, 68, 68, 0.3);
  color: #ef4444;
}

.quiz7-score {
  text-align: center;
  font-size: 0.95rem;
  color: #9ca3af;
}

.quiz7-result {
  text-align: center;
}

/* === КАРТОЧКА 10: ФИНАЛ === */
.slide-10 {
  background: linear-gradient(180deg, #0a0a0a 0%, rgba(200, 240, 96, 0.15) 100%);
}

.final-summary {
  text-align: center;
}

.final-icon {
  font-size: 5rem;
  margin-bottom: 1rem;
}

.final-title {
  font-family: 'Unbounded', sans-serif;
  font-size: 1.75rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 2rem;
}

.scores-summary {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 1.5rem;
  margin-bottom: 2rem;
}

.score-item {
  display: flex;
  justify-content: space-between;
  padding: 0.75rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.score-item:last-child {
  border-bottom: none;
}

.score-total {
  display: flex;
  justify-content: space-between;
  padding: 1rem 0 0;
  margin-top: 1rem;
  border-top: 2px solid rgba(200, 240, 96, 0.3);
  font-weight: 700;
}

.score-label {
  color: #9ca3af;
  font-size: 1rem;
}

.score-value {
  color: #c8f060;
  font-weight: 700;
  font-size: 1.125rem;
}

.score-total .score-value {
  font-size: 1.5rem;
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

/* === ИНДИКАТОРЫ === */
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
    touch-action: pan-y;
  }
  
  .slide-1 {
    padding-top: 5rem;
  }

  .slide-content {
    padding: 0 0.5rem;
    max-height: 85vh;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
  }

  .slide-indicators-vertical {
    right: 10px;
  }

  .indicator-dot {
    width: 6px;
    height: 6px;
  }

  .pain-cards {
    grid-template-columns: 1fr;
  }

  .answer-buttons, .temp-buttons {
    grid-template-columns: 1fr;
  }
  
  /* Аккордеон для карточки 3 на мобильном */
  .pain-formula {
    font-size: clamp(2rem, 6vw, 3rem);
    margin-bottom: 1.5rem;
  }
  
  /* Сжимаем текст на мобильном */
  .slide-title-main {
    font-size: clamp(1.5rem, 4vw, 2.5rem);
  }
  
  .slide-title-small {
    font-size: clamp(1.25rem, 3vw, 1.75rem);
  }
  
  .slide-subtitle {
    font-size: 1rem;
  }
  
  /* Уменьшаем отступы в аккордеоне */
  .accordion-header {
    padding: 0.75rem 1rem;
  }
  
  .accordion-item.expanded .accordion-content {
    padding: 0 1rem 1rem;
  }
  
  /* Каналы аккордеон */
  .channel-header {
    padding: 0.75rem 1rem;
  }
  
  .channel-name {
    font-size: 0.95rem;
  }
  
  .channel-content p {
    font-size: 0.85rem;
    padding-bottom: 0.75rem;
  }
  
  /* Ошибки аккордеон */
  .error-header {
    padding: 0.75rem 1rem;
  }
  
  .error-number-short {
    font-size: 0.75rem;
  }
  
  .error-title-short {
    font-size: 0.9rem;
  }
  
  .error-example {
    font-size: 0.8rem;
    padding: 0.5rem;
  }
  
  .error-problem, .error-solution {
    font-size: 0.75rem;
  }
  
  /* Сжимаем карточки с каналами */
  .channel-item {
    padding: 1rem;
  }
  
  .channel-emoji {
    font-size: 1.5rem;
  }
  
  /* Уменьшаем ошибки */
  .error-card {
    padding: 1rem;
    margin-bottom: 1rem;
  }
  
  .error-card h3 {
    font-size: 1rem;
  }
  
  .error-example {
    font-size: 0.875rem;
    padding: 0.5rem;
  }
  
  .error-problem, .error-solution {
    font-size: 0.8rem;
  }
  
  /* Сжимаем финал */
  .final-icon {
    font-size: 3rem;
  }
  
  .final-title {
    font-size: 1.25rem;
  }
  
  .score-item {
    padding: 0.5rem 0;
  }
  
  .score-label {
    font-size: 0.875rem;
  }
  
  .score-value {
    font-size: 1rem;
  }
  
  .score-total .score-value {
    font-size: 1.25rem;
  }
  
  /* Уменьшаем кнопки */
  .btn-start, .btn-next, .btn-cta {
    padding: 1rem;
    font-size: 1rem;
  }
  
  /* Сжимаем квизы */
  .quiz7-description {
    padding: 1.25rem;
    font-size: 1rem;
  }
  
  .quiz7-option {
    padding: 1rem;
    font-size: 0.95rem;
  }
  
  /* Чеклист */
  .channel-option {
    padding: 1rem;
  }
  
  .channel-text {
    font-size: 0.95rem;
  }
  
  .result-item {
    padding: 0.75rem;
  }
  
  .result-text {
    font-size: 0.9rem;
  }
  
  .result-feedback {
    font-size: 0.75rem;
  }
}
</style>
