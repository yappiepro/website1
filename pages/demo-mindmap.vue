<template>
  <div class="demo-page" :class="{ 'scroll-locked': !isUnlocked }">
    <!-- Навигация как на главной -->
    <nav class="fixed top-0 left-0 right-0 z-50 bg-[#030305]/70 backdrop-blur-2xl border-b border-white/[0.08]" v-if="isUnlocked">
      <div class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="/website1/" class="text-xl font-semibold text-white flex items-center gap-2">
          <span class="font-bold text-white tracking-wider text-2xl">YAPPIE</span>
        </a>

        <!-- Десктопное меню -->
        <div class="hidden md:flex items-center gap-8">
          <a href="#problems" class="text-sm text-gray-400 hover:text-white transition-all duration-300">Проблемы</a>
          <a href="#services" class="text-sm text-gray-400 hover:text-white transition-all duration-300">Услуги</a>
          <a href="#why-us" class="text-sm text-gray-400 hover:text-white transition-all duration-300">Почему мы</a>
          <a href="#portfolio" class="text-sm text-gray-400 hover:text-white transition-all duration-300">Кейсы</a>
          <a href="/website1/blog" class="text-sm text-gray-400 hover:text-white transition-all duration-300">Блог</a>
          <a href="#faq" class="text-sm text-gray-400 hover:text-white transition-all duration-300">FAQ</a>
          <a href="https://t.me/artemselifanov" target="_blank" class="px-4 py-2 text-xs bg-white text-black hover:bg-gray-100 shadow-lg shadow-white/10 hover:shadow-white/20 transition-all rounded-md font-medium">Связаться</a>
        </div>
      </div>
    </nav>

    <!-- Старый header скрыт
    <header class="demo-header" v-if="isUnlocked">
      <nav class="demo-header-inner">
        <a href="#problems" class="nav-link">Проблемы</a>
        <a href="#services" class="nav-link">Услуги</a>
        <a href="#why-us" class="nav-link">Почему мы</a>
        <a href="#portfolio" class="nav-link">Кейсы</a>
        <a href="/website1/blog" class="nav-link">Блог</a>
        <a href="#faq" class="nav-link">FAQ</a>
        <a href="https://t.me/artemselifanov" target="_blank" class="nav-btn">Связаться</a>
      </nav>
    </header>
    -->

    <main>
      <section class="hero-stage">
        <div class="typewriter-container">
          <svg class="typewriter-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.35-4.35"></path>
          </svg>
          <div class="typewriter-content">
            <div class="typing-line">
              <span class="typing-text">{{ currentText }}</span>
              <span class="typing-cursor" :class="{ frozen: isStopped }"></span>
            </div>
          </div>
        </div>

        <div v-if="isStopped" class="buttons-container">
          <div class="start-btn btn-start" @click="unlockPage">СЕГОДНЯ</div>
          <div class="start-btn btn-cancel" @click="changeButtonText($event)">
            <span class="text-front">НЕТ СПАСИБО</span>
          </div>
        </div>
      </section>

      <section class="system-title-wrap" v-show="isUnlocked">
        <div class="typing-system-title">
          <div class="typing-line-system">
            <span class="typing-text-system">{{ systemTitleText }}</span>
            <span class="typing-cursor-system" v-if="!systemTitleFinished">|</span>
          </div>
        </div>
      </section>

      <section class="problems-cascade" id="problems" v-show="isUnlocked">
        <div class="section-head animate-fade-in-up">
          <p class="eyebrow">Проблема блога</p>
          <h3>Почему блог не приносит клиентов — даже если ты уже пишешь</h3>
        </div>

        <div class="problem-grid">
          <article class="problem-card tall fade-in-up" style="--delay: 0">
            <span class="problem-index">01</span>
            <h4>Контент есть. Заявок нет.</h4>
            <p>Публикации выходят регулярно, но между постом и покупкой — пустота. Нет выстроенного пути, по которому читатель становится клиентом.</p>
          </article>
          <article class="problem-card wide fade-in-up" style="--delay: 1">
            <span class="problem-index">02</span>
            <h4>Непонятно, кто ты и чем можешь помочь</h4>
            <p>Человек заходит в профиль, читает несколько постов — и уходит. Не потому что неинтересно. Потому что непонятно, к кому он попал и что делать дальше.</p>
          </article>
          <article class="problem-card fade-in-up" style="--delay: 2">
            <span class="problem-index">03</span>
            <h4>Площадок много — стратегии нет</h4>
            <p>Telegram, TenChat, Threads, Дзен — у каждой своя логика и аудитория. Без понимания этого блог превращается в хаотичный постинг, который утомляет, а не масштабирует.</p>
          </article>
          <article class="problem-card fade-in-up" style="--delay: 3">
            <span class="problem-index">04</span>
            <h4>Личный бренд работает на узнаваемость, но не на доход</h4>
            <p>Тебя читают, сохраняют, советуют другим. Но до сделки не доходит — потому что экспертность не упакована в понятное предложение.</p>
          </article>
          <article class="problem-card accent fade-in-up" style="--delay: 4">
            <span class="problem-index">05</span>
            <h4>Время уходит на создание контента, а не на рост</h4>
            <p>Часы на написание, редактуру, публикацию. А отдача не соответствует вложениям. Потому что без системы даже хороший контент не работает как инструмент.</p>
          </article>
        </div>
        
        <div class="problem-bridge">
          <p>Всё это решаемо. Я работаю именно с этим — и покажу, как выглядит блог, который приводит клиентов сам.</p>
        </div>
      </section>

      <section class="services-lab" id="services" v-show="isUnlocked">
        <div class="section-head alt">
          <p class="eyebrow">Как это работает</p>
          <h3>Личный бренд — это фундамент. Всё остальное строится на нём.</h3>
        </div>

        <div class="service-grid">
          <article class="service-item fade-in-up" style="--delay: 0">
            <span class="service-number">01</span>
            <h4>Личный бренд</h4>
            <p>Сначала разбираемся, кто ты, для кого и чем отличаешься от других экспертов в своей нише. Без этого любой контент — это шум. С этим — каждый пост работает на тебя, даже когда ты не в сети.</p>
          </article>
          <article class="service-item fade-in-up" style="--delay: 1">
            <span class="service-number">02</span>
            <h4>Блог и контент</h4>
            <p>Когда есть позиционирование, выстраиваем присутствие на площадках. Telegram, TenChat, Threads, Дзен — не везде сразу, а там, где живёт твоя аудитория. Контент со смыслом, который ведёт читателя к решению работать именно с тобой.</p>
          </article>
          <article class="service-item fade-in-up" style="--delay: 2">
            <span class="service-number">03</span>
            <h4>Веб-разработка</h4>
            <p>Сайт, который продолжает логику блога. Не визитка — а точка входа с понятным следующим шагом для каждого, кто зашёл: эксперт, предприниматель или фрилансер.</p>
          </article>
          <article class="service-item fade-in-up" style="--delay: 3">
            <span class="service-number">04</span>
            <h4>Сопровождение</h4>
            <p>Мастермайнды, бизнес-разборы, консультации по блогу. Работаем вместе, пока система не начнёт приводить клиентов без твоего постоянного участия.</p>
          </article>
        </div>
        
        <div class="service-bridge">
          <p>Можно начать с одного. Но система даёт результат, когда все части говорят в одну сторону.</p>
        </div>
      </section>

      <section class="why-split" id="why-us" v-show="isUnlocked">
        <div class="why-photo-wrap">
          <img :src="`${baseURL}images/artem.jpg`" alt="Артем Селифанов" class="author-photo" />
        </div>

        <div class="why-content">
          <p class="eyebrow">Почему я делаю именно так</p>
          <h3>Я сам прошёл через это</h3>
          <p>
            Писал без стратегии, делал сайты без логики, строил бренд без понимания для кого.
            Работало — случайно. Не работало — непонятно почему.
          </p>
          <p>
            В какой-то момент я перестал делать всё по отдельности. Собрал в одну систему — и увидел, как меняется результат.
            Не сразу. Но стабильно.
          </p>
          <p>
            Сейчас я работаю только так: сначала понять тебя и твою аудиторию, потом выстраивать всё остальное.
            Без этого — любой инструмент будет работать вполсилы.
          </p>
          <div class="why-principles">
            <div class="principle-item">
              <h4>Честность важнее красоты</h4>
              <p>Скажу, если что-то не нужно — даже если это то, за чем ты пришёл.</p>
            </div>
            <div class="principle-item">
              <h4>Твой голос — не мой шаблон</h4>
              <p>Не подгоняю под формат. Ищу то, что работает именно для тебя.</p>
            </div>
            <div class="principle-item">
              <h4>Результат важнее процесса</h4>
              <p>Не веду работу ради работы. Если нет движения — меняем подход.</p>
            </div>
          </div>
        </div>
      </section>

      <section class="portfolio-zigzag" id="portfolio" v-show="isUnlocked">
        <div class="section-head">
          <p class="eyebrow">Кейсы и трекшн</p>
          <h3>Формат: запуск, измерение, масштабирование</h3>
        </div>
        <div class="case-track">
          <article class="case-card">
            <p class="case-meta">Fintech · 11 недель</p>
            <h4>Новый сайт + контент-воронка</h4>
            <p class="case-result">+43% квалифицированных заявок</p>
          </article>
          <article class="case-card shifted">
            <p class="case-meta">EdTech · 8 недель</p>
            <h4>Пересборка личного бренда founder</h4>
            <p class="case-result">x2.1 рост входящих запросов</p>
          </article>
          <article class="case-card">
            <p class="case-meta">B2B SaaS · 13 недель</p>
            <h4>Система контента + блоговая структура</h4>
            <p class="case-result">-37% стоимость лида</p>
          </article>
        </div>
      </section>

      <section class="faq-field" id="faq" v-show="isUnlocked">
        <div class="section-head alt">
          <p class="eyebrow">FAQ</p>
          <h3>Коротко о главном</h3>
        </div>

        <div class="faq-accordion">
          <div class="faq-item" v-for="(faq, index) in faqs" :key="index">
            <button class="faq-trigger" @click="toggleFaq(index)" :class="{ 'active': openFaqIndex === index }">
              <span>{{ faq.question }}</span>
              <svg class="faq-icon" :class="{ 'rotated': openFaqIndex === index }" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="m6 9 6 6 6-6"/>
              </svg>
            </button>
            <div class="faq-content" :class="{ 'open': openFaqIndex === index }">
              <p>{{ faq.answer }}</p>
            </div>
          </div>
        </div>
      </section>

      <section class="work-cta" id="work" v-show="isUnlocked">
        <p class="eyebrow">Готовы собрать систему</p>
        <h3>Давайте соберем ваш цифровой контур роста</h3>
        <p>
          Вместо набора случайных действий — понятная карта, этапы и измеримый результат.
        </p>
        <a href="https://t.me/artemselifanov" target="_blank" rel="noopener noreferrer">Обсудить проект</a>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()
const baseURL = config.app.baseURL

const scrambleChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?'

// FAQ данные
const faqs = ref([
  { question: 'С чего начинается работа?', answer: 'С диагностики текущей системы: где теряются деньги, внимание и скорость.' },
  { question: 'Можно без полной переделки?', answer: 'Да. Часто достаточно пересобрать 20% ключевых узлов, чтобы получить 80% эффекта.' },
  { question: 'Когда виден результат?', answer: 'Первые сигналы обычно в 2–4 недели, системный эффект в горизонте 2–3 месяцев.' },
  { question: 'Вы работаете один или командой?', answer: 'Я веду стратегию и архитектуру, подключая нужных специалистов под конкретный этап.' },
])

// Открытый элемент FAQ
const openFaqIndex = ref(null)

function toggleFaq(index: number) {
  openFaqIndex.value = openFaqIndex.value === index ? null : index
}

const typingPhrases = ref([
  { text: 'Твои клиенты уже читают чужой блог.', delay: 90, pause: 300 },
  { text: '', delay: 30, pause: 300, isDelete: true },
  { text: 'Пока ты думаешь — они пишут.', delay: 70, pause: 200 },
  { text: '', delay: 20, pause: 200, isDelete: true },
  { text: 'Начни сегодня.', delay: 40, pause: 0, isFinal: true }
])

const currentText = ref('')
const currentPhraseIndex = ref(0)
const currentCharIndex = ref(0)
const isStopped = ref(false)
const isUnlocked = ref(false)

// Для печати заголовка
const systemTitleText = ref('')
const systemTitleFinished = ref(false)
let systemTitleTimeout: ReturnType<typeof setTimeout> | null = null

let typingTimeout: ReturnType<typeof setTimeout> | null = null
let scrambleInterval: ReturnType<typeof setInterval> | null = null

function unlockPage() {
  isUnlocked.value = true
  
  // Очищаем предыдущий текст заголовка
  systemTitleText.value = ''
  systemTitleFinished.value = false
  systemTitleIndex = 0
  systemTitleCharIndex = 0
  
  setTimeout(() => {
    const cursor = document.querySelector('.typing-cursor') as HTMLElement | null
    if (cursor) {
      cursor.style.animation = 'none'
      cursor.style.opacity = '1'
    }
  }, 700)
  
  // Плавный скролл к секции с заголовком
  setTimeout(() => {
    const systemTitleSection = document.querySelector('.system-title-wrap')
    if (systemTitleSection) {
      systemTitleSection.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }, 300)
  
  // Запускаем печать заголовка через 500мс после разблокировки
  setTimeout(() => {
    typeSystemTitle()
  }, 500)
}

// Функция для печати заголовка
const systemTitlePhrases = [
  { text: 'КОНТЕНТ', delay: 100, pause: 0 },
  { text: '\nСИСТЕМА', delay: 100, pause: 0 },
  { text: '\nДАЕТ РОСТ', delay: 100, pause: 0 },
  { text: '\nБЛОГА', delay: 100, pause: 0, isFinal: true }
]

let systemTitleIndex = 0
let systemTitleCharIndex = 0

function typeSystemTitle() {
  if (systemTitleIndex >= systemTitlePhrases.length) {
    systemTitleFinished.value = true
    return
  }
  
  const phrase = systemTitlePhrases[systemTitleIndex]
  
  if (systemTitleCharIndex < phrase.text.length) {
    systemTitleText.value += phrase.text[systemTitleCharIndex]
    systemTitleCharIndex++
    systemTitleTimeout = setTimeout(typeSystemTitle, phrase.delay)
  } else {
    if (phrase.isFinal) {
      systemTitleFinished.value = true
      systemTitleIndex = 0
      systemTitleCharIndex = 0
    } else {
      systemTitleTimeout = setTimeout(() => {
        systemTitleIndex++
        systemTitleCharIndex = 0
        typeSystemTitle()
      }, phrase.pause)
    }
  }
}

function typeWriter() {
  if (isStopped.value) {
    return
  }

  const phrase = typingPhrases.value[currentPhraseIndex.value]

  if (phrase.isDelete) {
    if (currentText.value.length > 0) {
      currentText.value = ''
      typingTimeout = setTimeout(() => {
        currentPhraseIndex.value = (currentPhraseIndex.value + 1) % typingPhrases.value.length
        currentCharIndex.value = 0
        typeWriter()
      }, phrase.pause)
    }
    return
  }

  if (currentCharIndex.value < phrase.text.length) {
    currentText.value += phrase.text[currentCharIndex.value]
    currentCharIndex.value += 1
    typingTimeout = setTimeout(typeWriter, phrase.delay)
    return
  }

  if (phrase.isFinal) {
    isStopped.value = true
    return
  }

  typingTimeout = setTimeout(() => {
    currentPhraseIndex.value = (currentPhraseIndex.value + 1) % typingPhrases.value.length
    currentCharIndex.value = 0
    typeWriter()
  }, phrase.pause)
}

function changeButtonText(event: MouseEvent) {
  const element = event.currentTarget as HTMLElement
  const textElement = element.querySelector('.text-front') as HTMLElement | null
  const targetText = 'СЕГОДНЯ'
  let iterations = 0

  if (scrambleInterval) {
    clearInterval(scrambleInterval)
  }

  scrambleInterval = setInterval(() => {
    const scrambled = targetText
      .split('')
      .map((_, index) => {
        if (index < iterations) {
          return targetText[index]
        }
        return scrambleChars[Math.floor(Math.random() * scrambleChars.length)]
      })
      .join('')

    if (textElement) {
      textElement.textContent = scrambled
    }

    iterations += 0.2

    if (iterations >= targetText.length) {
      if (scrambleInterval) {
        clearInterval(scrambleInterval)
      }
      if (textElement) {
        textElement.textContent = targetText
      }
      scrambleInterval = null
      unlockPage()
    }
  }, 60)
}

onMounted(() => {
  window.scrollTo(0, 0)
  typeWriter()

  // Intersection Observer для анимации карточек
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  }
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const delay = parseInt(entry.target.style.getPropertyValue('--delay')) || 0
        setTimeout(() => {
          entry.target.classList.add('visible')
        }, delay * 100)
        observer.unobserve(entry.target)
      }
    })
  }, observerOptions)
  
  // Наблюдаем за всеми карточками проблем
  const problemCards = document.querySelectorAll('.problem-card')
  problemCards.forEach(card => observer.observe(card))
  
  // Наблюдаем за карточками сервисов
  const serviceItems = document.querySelectorAll('.service-item')
  serviceItems.forEach(item => observer.observe(item))
})

onUnmounted(() => {
  if (typingTimeout) {
    clearTimeout(typingTimeout)
  }
  if (scrambleInterval) {
    clearInterval(scrambleInterval)
  }
  if (systemTitleTimeout) {
    clearTimeout(systemTitleTimeout)
  }
})

useSeoMeta({
  title: 'Demo: Mind Карта Артема Селифанова',
  description: 'Нестандартная демо-страница о системности в бизнесе: стратегия, бренд, сайт, контент.'
})
</script>

<style scoped>
/* ==================================
   TYPOGRAPHY SYSTEM
   Scale: Major Third (1.250)
   Base: 16px (Desktop)
   ================================== */

:root {
  /* Font sizes - Desktop */
  --text-xs: 0.8rem;      /* 12.8px */
  --text-sm: 0.889rem;    /* 14.2px */
  --text-base: 1rem;      /* 16px */
  --text-lg: 1.25rem;     /* 20px */
  --text-xl: 1.563rem;    /* 25px */
  --text-2xl: 1.953rem;   /* 31px */
  --text-3xl: 2.441rem;   /* 39px */
  --text-4xl: 3.052rem;   /* 49px */
  
  /* Line heights */
  --leading-tight: 1.1;
  --leading-normal: 1.5;
  --leading-relaxed: 1.625;
  
  /* Font weights */
  --font-normal: 400;
  --font-medium: 500;
  --font-semibold: 600;
  --font-bold: 700;
  --font-extrabold: 800;
}

@keyframes pulse-slow {
  0%, 100% {
    opacity: 0.5;
    transform: scale(1);
  }
  50% {
    opacity: 0.8;
    transform: scale(1.1);
  }
}

.animate-pulse-slow {
  animation: pulse-slow 4s ease-in-out infinite;
}

/* ==================================
   FADE IN UP ANIMATION
   ================================== */

@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fade-in-up 0.8s ease-out forwards;
}

.demo-page {
  --bg: #030305;
  --paper: #0a0a0a;
  --ink: #ffffff;
  --muted: #9ca3af;
  --line: rgba(255, 255, 255, 0.08);
  --card: #111111;
  --accent-a: #a78bfa;
  --accent-b: #e879f9;
  min-height: 100vh;
  color: var(--ink);
  background: var(--bg);
  overflow-x: hidden;
  overflow-y: scroll;
}

.demo-page.scroll-locked {
  background: #030305;
}

.demo-header {
  display: none;
}

main {
  width: min(1320px, 100%);
  margin: 0 auto;
  padding: 0 2rem 8rem;
  display: grid;
  gap: 150px;
  background: #0a0a0a;
}

.demo-page.scroll-locked main {
  width: 100%;
  max-width: none;
  padding: 0;
  overflow: hidden;
  background: #0a0a0a;
}

.hero-stage {
  position: relative;
  display: grid;
  place-content: center;
  gap: 1.2rem;
  width: 100%;
  height: 100vh;
  padding: 2rem;
  overflow: hidden;
  background: #030305;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.hero-stage::before {
  content: '';
  position: absolute;
  top: -100px;
  left: -100px;
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(167, 139, 250, 0.15), transparent 70%);
  border-radius: 50%;
  filter: blur(80px);
  pointer-events: none;
}

.hero-stage::after {
  content: '';
  position: absolute;
  bottom: -100px;
  right: -100px;
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, rgba(232, 121, 249, 0.1), transparent 70%);
  border-radius: 50%;
  filter: blur(80px);
  pointer-events: none;
}

.demo-page.scroll-locked .hero-stage {
  height: auto;
  padding: 0;
  background: #030305;
}

/* Печатная машинка - стилизация под поисковую строку */
.typewriter-container {
  width: min(720px, 92vw);
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: flex-start;
  z-index: 2;
  position: relative;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  padding: 1.25rem 1.5rem;
  box-sizing: border-box;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(10px);
}

.typewriter-icon {
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  color: rgba(255, 255, 255, 0.5);
}

.demo-page.scroll-locked .typewriter-container {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: min(720px, 92vw);
  min-height: auto;
  pointer-events: none;
}

/* Печатная машинка 2 - для заголовка (фиксированная, текст вправо) */
.typing-system-title {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  padding-left: 2rem;
  box-sizing: border-box;
}

.typing-line {
  display: inline;
  max-width: min(720px, 88vw);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  font-size: clamp(1.25rem, 2.5vw, 1.75rem);
  font-weight: 400;
  line-height: 1.4;
  color: #ffffff;
  padding: 0;
  min-height: auto;
  text-align: left;
  white-space: pre-wrap;
  word-break: normal;
}

.typing-text {
  white-space: pre-wrap;
  display: inline;
}

.typing-cursor {
  display: inline-block;
  width: 2px;
  height: 1.2em;
  background: #ffffff;
  animation: blink 1s infinite;
  opacity: 0.8;
  vertical-align: text-bottom;
  margin-left: 2px;
}

.typing-cursor.frozen {
  animation: none;
  opacity: 1;
}

@keyframes blink {
  0%,
  48% { opacity: 0.8; }
  49%,
  100% { opacity: 0; }
}

.buttons-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  z-index: 2;
}

.demo-page.scroll-locked .buttons-container {
  position: fixed;
  left: 50%;
  top: calc(50% + 150px);
  transform: translateX(-50%);
  width: min(560px, 92vw);
  justify-content: flex-start;
}

.start-btn {
  font-size: clamp(1rem, 1.8vw, 1.25rem);
  font-weight: 700;
  padding: 0.95rem 1.8rem;
  border-radius: 999px;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
  letter-spacing: 0.08em;
  min-width: 230px;
  width: 230px;
  text-align: center;
}

.btn-start {
  color: #000000;
  background: #ffffff;
  border: none;
  box-shadow: 0 4px 16px rgba(255, 255, 255, 0.2);
}

.btn-cancel {
  color: #ffffff;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.start-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(255, 255, 255, 0.3);
}

.system-title-wrap {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding: 1.8rem 0;
  background: #0a0a0a;
}

.problem-card p,
.service-block p,
.case-card p,
.faq-grid p,
.why-content p,
.work-cta p,
.photo-caption {
  color: var(--muted);
  line-height: var(--leading-relaxed);
}

/* ==================================
   SYSTEM TITLE (Typewriter)
   ================================== */

.typing-line-system {
  font-size: clamp(2.9rem, 10vw, 9.8rem);
  line-height: 0.9;
  letter-spacing: 0.02em;
  font-weight: 800;
  white-space: pre-wrap;
  color: #d1d5db;
  text-align: left;
}

.typing-cursor-system {
  display: inline-block;
  width: 3px;
  background: #ffffff;
  font-weight: 300;
  animation: blink 2s infinite;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
  margin-left: 2px;
}

.section-head {
  display: grid;
  gap: 0.75rem;
  margin-bottom: 1.7rem;
}

/* ==================================
   HEADINGS
   ================================== */

h1 {
  font-size: var(--text-3xl);
  line-height: var(--leading-tight);
  font-weight: var(--font-extrabold);
  margin-bottom: 1rem;
}

h2 {
  font-size: var(--text-2xl);
  line-height: var(--leading-tight);
  font-weight: var(--font-extrabold);
  margin-bottom: 0.75rem;
}

h3 {
  font-size: var(--text-xl);
  line-height: var(--leading-tight);
  font-weight: var(--font-bold);
  margin-bottom: 0.5rem;
}

h4 {
  font-size: var(--text-lg);
  line-height: var(--leading-tight);
  font-weight: var(--font-semibold);
  margin-bottom: 0.5rem;
}

/* ==================================
   BODY TEXT
   ================================== */

p {
  font-size: var(--text-base);
  line-height: var(--leading-relaxed);
  font-weight: var(--font-normal);
  margin-bottom: 1rem;
}

/* ==================================
   SPECIFIC ELEMENTS
   ================================== */

.section-head h3 {
  margin: 0;
  font-size: clamp(1.8rem, 4vw, 3.8rem);
  line-height: 0.95;
  color: #ffffff;
  max-width: 60%;
}

.section-head.alt h3 {
  max-width: 17ch;
}

.eyebrow {
  margin: 0;
  font-size: var(--text-xs);
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: #9ca3af;
  font-weight: var(--font-medium);
}

.problems-cascade,
.services-lab,
.why-split,
.portfolio-zigzag,
.faq-field,
.work-cta {
  border: none;
  border-radius: 30px;
  background: #0a0a0a;
  padding: clamp(1.4rem, 3vw, 2.3rem);
  box-shadow: 0 18px 42px rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.problem-grid {
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  gap: 1rem;
}

.problem-card {
  grid-column: span 4;
  padding: 1.25rem;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  background: #0a0a0a;
}

.problem-card.visible {
  opacity: 1;
  transform: translateY(0);
}

.problem-card.tall {
  grid-column: span 3;
}

.problem-card.wide {
  grid-column: span 6;
}

.problem-card.accent {
  background: linear-gradient(140deg, rgba(167, 139, 250, 0.15), rgba(232, 121, 249, 0.1));
}

.problem-bridge {
  margin-top: 2rem;
  padding: 1.5rem 2rem;
  background: linear-gradient(135deg, rgba(167, 139, 250, 0.08), rgba(232, 121, 249, 0.06));
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
}

.problem-bridge p {
  margin: 0;
  font-size: clamp(1rem, 2vw, 1.2rem);
  line-height: 1.6;
  color: #ffffff;
  font-weight: 500;
}

.problem-index {
  display: inline-block;
  margin-bottom: 0.6rem;
  font-size: 0.72rem;
  letter-spacing: 0.16em;
  color: #a78bfa;
}

.problem-card h4,
.service-block h4,
.case-card h4,
.faq-grid h4,
.why-content h3,
.work-cta h3 {
  margin: 0;
  font-size: var(--text-lg);
  line-height: var(--leading-tight);
}

.service-item h4 {
  margin: 0 0 0.75rem;
  font-size: var(--text-lg);
  line-height: var(--leading-tight);
  font-weight: var(--font-bold);
}

.work-cta h3 {
  margin: 0;
  max-width: 18ch;
  font-size: var(--text-3xl);
  line-height: var(--leading-tight);
  letter-spacing: -0.01em;
}

.work-cta p {
  margin: 0;
  max-width: 54ch;
  font-size: var(--text-base);
  line-height: var(--leading-relaxed);
}

.service-ribbons {
  display: flex;
  gap: 0.65rem;
  flex-wrap: wrap;
  margin-bottom: 1.2rem;
}

.service-ribbons span {
  border: none;
  border-radius: 999px;
  padding: 0.45rem 0.9rem;
  font-size: 0.78rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  background: rgba(167, 139, 250, 0.1);
  color: #a78bfa;
  border: 1px solid rgba(167, 139, 250, 0.2);
}

/* Новая сетка сервисов */
.service-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  margin-top: 2rem;
}

.service-item {
  padding: 1.5rem;
  border-radius: 16px;
  background: #0a0a0a;
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.service-item.visible {
  opacity: 1;
  transform: translateY(0);
}

.service-number {
  display: inline-block;
  margin-bottom: 0.75rem;
  font-size: 0.75rem;
  letter-spacing: 0.16em;
  color: #a78bfa;
  font-weight: 700;
}

.service-item h4 {
  margin: 0 0 0.75rem;
  font-size: clamp(1.1rem, 2vw, 1.4rem);
  line-height: 1.2;
  font-weight: 700;
}

.service-item p {
  margin: 0;
  color: var(--muted);
  line-height: 1.6;
  font-size: 0.95rem;
}

.service-bridge {
  margin-top: 2rem;
  padding: 1.5rem 2rem;
  background: linear-gradient(135deg, rgba(167, 139, 250, 0.08), rgba(232, 121, 249, 0.06));
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
}

.service-bridge p {
  margin: 0;
  font-size: clamp(1rem, 2vw, 1.2rem);
  line-height: 1.6;
  color: #ffffff;
  font-weight: 500;
}

.why-split {
  display: grid;
  gap: 2rem;
  grid-template-columns: 0.9fr 1.1fr;
}

.why-photo-wrap {
  position: relative;
  max-width: 50%;
  margin: 0 auto;
}

.author-photo {
  width: 100%;
  display: block;
  border-radius: 22px;
  border: none;
}

.photo-caption {
  margin-top: 0.7rem;
  font-size: 0.82rem;
  color: #9ca3af;
}

.why-content {
  display: grid;
  align-content: center;
  gap: 1rem;
}

.why-points {
  display: flex;
  gap: 0.6rem;
  flex-wrap: wrap;
}

.why-points span {
  border-radius: 999px;
  border: none;
  padding: 0.45rem 0.8rem;
  font-size: 0.82rem;
  color: #a78bfa;
  background: rgba(167, 139, 250, 0.1);
  border: 1px solid rgba(167, 139, 250, 0.2);
}

/* ==================================
   WHY PRINCIPLES
   ================================== */

.why-principles {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.principle-item {
  padding: 1.25rem;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.principle-item h4 {
  margin: 0 0 0.5rem;
  font-size: var(--text-base);
  font-weight: var(--font-semibold);
  color: #ffffff;
}

.principle-item p {
  margin: 0;
  color: var(--muted);
  line-height: var(--leading-relaxed);
  font-size: var(--text-sm);
}

.case-track {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.case-card {
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  padding: 1.2rem;
  background: #0a0a0a;
}

.case-card.shifted {
  transform: translateY(22px);
  background: linear-gradient(160deg, rgba(167, 139, 250, 0.15), #0a0a0a);
}

.case-meta {
  margin: 0 0 0.6rem;
  font-size: 0.78rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #a78bfa;
}

.case-result {
  margin-top: 0.9rem;
  font-size: 1.05rem;
  color: #e879f9;
}

.faq-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
}

/* ==================================
   FAQ ACCORDION
   ================================== */

.faq-accordion {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.faq-item {
  border-radius: 18px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: #0a0a0a;
  overflow: hidden;
}

.faq-trigger {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.25rem 1.5rem;
  background: transparent;
  border: none;
  color: #ffffff;
  font-size: var(--text-base);
  font-weight: var(--font-medium);
  text-align: left;
  cursor: pointer;
  transition: all 0.2s ease;
}

.faq-trigger:hover {
  background: rgba(255, 255, 255, 0.02);
}

.faq-trigger.active {
  color: #a78bfa;
}

.faq-icon {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  margin-left: 1rem;
  transition: transform 0.3s ease;
  color: #9ca3af;
}

.faq-icon.rotated {
  transform: rotate(180deg);
  color: #a78bfa;
}

.faq-content {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
}

.faq-content.open {
  max-height: 300px;
}

.faq-content p {
  margin: 0;
  padding: 0 1.5rem 1.25rem;
  color: var(--muted);
  line-height: var(--leading-relaxed);
}

.work-cta {
  display: grid;
  gap: 0.9rem;
  text-align: center;
  justify-items: center;
  padding-top: clamp(2rem, 4vw, 3rem);
  padding-bottom: clamp(2rem, 4vw, 3rem);
  background: radial-gradient(circle at 50% 0%, rgba(167, 139, 250, 0.12), #030305 60%);
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.work-cta h3 {
  margin: 0;
  max-width: 18ch;
  font-size: var(--text-2xl);
  line-height: var(--leading-tight);
  letter-spacing: -0.01em;
}

.work-cta p {
  margin: 0;
  max-width: 54ch;
  font-size: var(--text-base);
  line-height: var(--leading-relaxed);
}

.work-cta a {
  margin-top: 1rem;
  text-decoration: none;
  border-radius: 999px;
  padding: 0.95rem 1.6rem;
  color: #0f1220;
  font-weight: 700;
  background: linear-gradient(115deg, #a78bfa, #e879f9);
  box-shadow: 0 12px 28px rgba(167, 139, 250, 0.3);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.work-cta a:hover {
  transform: translateY(-2px);
  box-shadow: 0 16px 36px rgba(167, 139, 250, 0.4);
}

@media (max-width: 1080px) {
  main {
    padding: 0 1.25rem 6rem;
    gap: 150px;
  }

  .problem-card,
  .problem-card.tall,
  .problem-card.wide {
    grid-column: span 12;
  }

  .service-block,
  .service-block.large,
  .service-block.long {
    grid-column: span 6;
  }

  .why-split,
  .case-track,
  .faq-grid {
    grid-template-columns: 1fr;
  }

  .case-card.shifted {
    transform: none;
  }
}

@media (max-width: 720px) {
  /* ==================================
     MOBILE TYPOGRAPHY
     Scale adjusted for smaller screens
     ================================== */
  
  html {
    font-size: 15px; /* Slightly smaller base for mobile */
  }
  
  .demo-header-inner {
    gap: 1rem;
    overflow-x: auto;
    justify-content: flex-start;
    padding: 0.9rem 1rem;
  }

  .typing-line {
    font-size: var(--text-lg);
    min-height: 96px;
  }
  
  .typing-line-system {
    font-size: clamp(2rem, 12vw, 4rem); /* Увеличенный размер для мобильных */
    line-height: 0.9;
  }

  .start-btn {
    min-width: 180px;
    width: calc(100% - 2rem);
  }

  .demo-page.scroll-locked .buttons-container {
    top: calc(50% + 126px);
    width: min(420px, 96vw);
    justify-content: center;
  }

  .problem-card,
  .service-block {
    grid-column: span 12;
  }

  .service-grid {
    grid-template-columns: 1fr;
  }

  .service-item {
    grid-column: span 1;
  }

  .section-head h3 {
    max-width: 100%; /* Full width on mobile */
  }
  
  .why-photo-wrap {
    max-width: 100%;
    margin: 0;
  }
  
  .author-photo {
    width: 100%;
  }
  
  .faq-grid {
    grid-template-columns: 1fr;
  }
  
  .faq-trigger {
    padding: 1rem 1.25rem;
    font-size: var(--text-base);
  }
  
  .faq-content p {
    padding: 0 1.25rem 1rem;
  }
  
  .system-title {
    line-height: var(--leading-tight);
  }
}
</style>
