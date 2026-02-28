<script setup>
import { ref, onMounted } from 'vue'
import { ArrowRight, Mail, MapPin, Calendar, Users, TrendingUp, Target, Zap, BookOpen, MessageCircle, Check, ExternalLink, Menu, X, Video } from 'lucide-vue-next'

const isMobileMenuOpen = ref(false)

// Для свайпов в секции Ценность (вертикальные как в Tinder)
const activeValueCardIndex = ref(0)
const touchStartY = ref(0)
const touchCurrentY = ref(0)
const isDragging = ref(false)

function handleValueTouchStart(e) {
  touchStartY.value = e.touches[0].clientY
  touchCurrentY.value = touchStartY.value
  isDragging.value = true
}

function handleValueTouchMove(e) {
  if (!isDragging.value) return
  touchCurrentY.value = e.touches[0].clientY
  // Блокируем скролл страницы во время свайпа
  e.preventDefault()
}

function handleValueTouchEnd() {
  if (!isDragging.value) return
  isDragging.value = false
  
  const diff = touchStartY.value - touchCurrentY.value
  if (Math.abs(diff) > 100 && diff > 0) {
    // Свайп вверх - следующая карточка
    if (activeValueCardIndex.value < valueItems.length - 1) {
      activeValueCardIndex.value++
    }
  }
  // Сбрасываем позицию
  touchStartY.value = 0
  touchCurrentY.value = 0
}

function resetSwipe() {
  touchStartY.value = 0
  touchCurrentY.value = 0
  isDragging.value = false
}

// Анимация появления при скролле
onMounted(() => {
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in')
      }
    })
  }, observerOptions)

  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el)
  })
})

// Акцентный цвет бренда
const accentColor = '#EA6D3A'

const mobileMenuItems = [
  { label: 'О проекте', href: '#about' },
  { label: 'Ценность', href: '#value' },
  { label: 'Для кого', href: '#audience' },
  { label: 'Философия', href: '#philosophy' },
  { label: 'Услуги', href: '#services' },
  { label: 'Формат', href: '#format' },
  { label: 'Контент', href: '#content' },
  { label: 'Автор', href: '#author' },
  { label: 'FAQ', href: '#faq' },
]

// Данные для секции услуг
const services = [
  {
    number: '01',
    title: 'Консультация по блогу',
    price: '3 500 ₽',
    period: 'в час',
    description: 'Разбор вашей текущей стратегии и рекомендации по развитию',
    features: [
      'Анализ текущего состояния блога',
      'Рекомендации по контент-стратегии',
      'Разбор конкретных кейсов',
      'Ответы на вопросы',
      'Запись встречи'
    ],
    link: 'https://t.me/m/56BWSMKAMjQ6'
  },
  {
    number: '02',
    title: 'Менторская программа',
    price: '25 000 ₽',
    period: 'в месяц',
    description: 'Персональное сопровождение развития вашего блога',
    features: [
      '4 онлайн-встречи по 1-1,5 часа',
      'Анализ целевой аудитории',
      'Разработка контент-стратегии',
      'Разбор продукта и продаж',
      'Упаковка блога',
      '1 встреча через месяц с подведением итогов'
    ],
    highlighted: true,
    link: 'https://t.me/m/Mnn-5zbTNmJi'
  },
  {
    number: '03',
    title: 'Мастермайнд группа',
    price: '15 000 ₽',
    period: 'в месяц',
    description: 'Групповая работа в формате интенсива',
    features: [
      '4 встречи по 2 часа',
      'Встречи раз в неделю',
      'Работа в мини-группе',
      'Обмен опытом с участниками',
      'Групповая динамика и поддержка',
      'Доступ в общий чат'
    ],
    link: 'https://t.me/m/56BWSMKAMjQ6'
  }
]

// Данные для секции автора
const author = {
  name: 'Артём Селифанов',
  role: 'Маркетолог, блогер, нетворкер',
  bio: 'Без личного бренда сейчас фактически не реально продвигать себя как эксперта. Единственный источник трафика — это контент-маркетинг. И если его освоить, вы всегда будете с клиентами.',
  stats: { audience: '45 000+', experience: '5+ лет', events: '10+' },
  image: '/website1/reference/artem.jpg',
  platforms: ['Сетка', 'TenChat', 'Telegram', 'Дзен', 'Threads']
}

// Словарь для перевода ключей статистики
const statLabels = {
  audience: 'В 5 соцсетях',
  experience: 'Опыта',
  events: 'Мероприятий'
}

// Данные для секции «Ценность»
const valueItems = [
  {
    icon: 'Target',
    title: 'Системный подход',
    description: 'Блог рассматривается как бизнес-инструмент для продаж и влияния, а не просто дневник'
  },
  {
    icon: 'Check',
    title: 'Честность',
    description: 'Разбор не только успехов, но и неудач, выгорания и ошибок'
  },
  {
    icon: 'TrendingUp',
    title: 'Актуальность',
    description: 'Анализ трендов 2025–2026 годов: ИИ, алгоритмы соцсетей, маркировка рекламы'
  },
  {
    icon: 'Users',
    title: 'Поддержка',
    description: 'Комьюнити, где принято помогать друг другу (принцип «Ценность выше просьб»)'
  }
]

// Данные для секции «Философия»
const philosophyItems = [
  {
    quote: 'Нетворкинг — это не просто визитки. Это построение личного бренда, чтобы люди сами тебя искали',
  },
  {
    quote: 'Регулярность важнее качества. Лучше 10 скучных встреч, чем одна идеальная, которая не состоялась',
  },
  {
    quote: 'Окружение решает. Рост происходит быстрее в среде, где движение — это норма',
  },
  {
    quote: 'Прагматизм вместо лотереи. Мы не ждем вирусного охвата, а строим системный рост через контент-маркетинг',
  }
]

// Данные для секции «Контент»
const contentItems = [
  {
    icon: 'BookOpen',
    title: 'База знаний',
    items: [
      'Продвижение в соцсетях (Сетка, TenChat, Telegram, Дзен)',
      'Личный бренд: упаковка, УТП, самопрезентация',
      'Контент-маркетинг: заголовки, планы, ИИ',
      'Продажи через блог: воронки, лид-магниты'
    ]
  },
  {
    icon: 'MessageCircle',
    title: 'Авторские серии',
    items: [
      '«Кто я? О чем я?» — путь автора (10 частей)',
      '«5 принципов нетворкинга»',
      '«Обзор соцсетей» — честный разбор площадок'
    ]
  },
  {
    icon: 'Zap',
    title: 'Кейсы и разборы',
    items: [
      '«Блог на прокачку» — реалити',
      '«Разборы блогов» — аудит каналов',
      '«Интервью с авторами» — истории успеха'
    ]
  }
]

// Данные для секций
const audienceItems = [
  {
    icon: 'briefcase',
    title: 'Предприниматели',
    description: 'Владельцы бизнеса и топ-менеджеры, которые хотят усилить личный бренд'
  },
  {
    icon: 'pen',
    title: 'Эксперты',
    description: 'Консультанты, коучи, специалисты с глубокими знаниями в своей области'
  },
  {
    icon: 'camera',
    title: 'Креаторы',
    description: 'Дизайнеры, фотографы, видеографы и другие творческие профессионалы'
  },
  {
    icon: 'trending',
    title: 'Блогеры',
    description: 'Начинающие и действующие авторы, желающие масштабировать аудиторию'
  }
]

const formatItems = [
  {
    icon: 'BookOpen',
    title: 'Текстовый блог',
    description: 'Глубокие посты, инструкции, лонгриды'
  },
  {
    icon: 'Video',
    title: 'Видео/Аудио',
    description: 'Интервью, разборы, подкасты, голосовые консультации'
  },
  {
    icon: 'Users',
    title: 'Онлайн-встречи',
    description: 'Созвоны сообщества, мозгобойни, воркшопы'
  },
  {
    icon: 'MessageCircle',
    title: 'Чат сообщества',
    description: 'Нетворкинг, взаимопиар, поддержка (100+ участников)'
  }
]

const faqs = [
  {
    question: 'Что такое личный бренд и зачем он мне?',
    answer: 'Личный бренд — это ваша репутация и узнаваемость в профессиональной среде. Сильный личный бренд привлекает клиентов, партнёров и возможности, которые иначе были бы недоступны.'
  },
  {
    question: 'Сколько времени нужно уделять контенту?',
    answer: 'Рекомендуемый минимум — 3-4 поста в неделю плюс ежедневная активность в сторис. В проекте мы разработаем систему, которая позволит делать это эффективно без выгорания.'
  },
  {
    question: 'У меня нет опыта ведения соцсетей',
    answer: 'Это не проблема. Проект создан для людей с разным уровнем подготовки. Вы получите пошаговые инструкции и поддержку на каждом этапе.'
  },
  {
    question: 'Какие социальные сети мы будем использовать?',
    answer: 'Основной фокус — Telegram и Instagram*. Также рассмотрим возможности VK и других платформ в зависимости от вашей целевой аудитории.'
  },
  {
    question: 'Что такое нетворкинг и как он поможет?',
    answer: 'Нетворкинг — это построение деловых связей. В проекте вы научитесь создавать связи через личный бренд: люди сами будут искать вас благодаря качественному контенту и экспертности.'
  },
  {
    question: 'Как попасть в комьюнити?',
    answer: 'Подпишитесь на сообщество и вступите в чат. Там вы познакомитесь с участниками, найдёте единомышленников и потенциальных партнёров. Принцип «Ценность выше просьб» помогает создавать качественные связи.'
  }
]

const openFaqIndex = ref(null)

function toggleFaq(index) {
  openFaqIndex.value = openFaqIndex.value === index ? null : index
}
</script>

<template>
  <div class="min-h-screen bg-white text-black font-mono">
    <!-- Фоновая сетка -->
    <div class="fixed inset-0 pointer-events-none opacity-20">
      <div class="grid-bg absolute inset-0"></div>
    </div>

    <!-- Навигация -->
    <nav class="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b-2 border-black">
      <div class="max-w-[1400px] mx-auto px-4 md:px-6 py-3 flex justify-between items-center">
        <!-- Логотип НН -->
        <a href="/website1/networking" class="flex items-center gap-3 group">
          <img src="/reference/Vector.svg" alt="Нескучный Нетворкинг" class="h-12 w-auto" />
        </a>

        <!-- Десктопное меню -->
        <div class="hidden md:flex items-center gap-4">
          <a href="#about" class="text-xs uppercase tracking-wider hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-200 px-3 py-1.5">О проекте</a>
          <a href="#value" class="text-xs uppercase tracking-wider hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-200 px-3 py-1.5">Ценность</a>
          <a href="#audience" class="text-xs uppercase tracking-wider hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-200 px-3 py-1.5">Для кого</a>
          <a href="#philosophy" class="text-xs uppercase tracking-wider hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-200 px-3 py-1.5">Философия</a>
          <a href="#services" class="text-xs uppercase tracking-wider hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-200 px-3 py-1.5">Услуги</a>
          <a href="#format" class="text-xs uppercase tracking-wider hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-200 px-3 py-1.5">Формат</a>
          <a href="#content" class="text-xs uppercase tracking-wider hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-200 px-3 py-1.5">Контент</a>
          <a href="#author" class="text-xs uppercase tracking-wider hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-200 px-3 py-1.5">Автор</a>
          <a href="#faq" class="text-xs uppercase tracking-wider hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-200 px-3 py-1.5">FAQ</a>
          <a href="https://t.me/+dL4aVzBkems0MTMy" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center font-medium px-4 py-2 text-xs bg-[#EA6D3A] text-white hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-3px] hover:translate-y-[-3px] transition-all duration-200 uppercase tracking-wider">
            В сообщество
            <ArrowRight class="ml-2 h-3 w-3" />
          </a>
        </div>

        <!-- Кнопка бургер-меню -->
        <button
          @click="isMobileMenuOpen = !isMobileMenuOpen"
          class="md:hidden text-black p-2 hover:bg-black/10 transition-colors"
          aria-label="Открыть меню"
        >
          <Menu v-if="!isMobileMenuOpen" class="w-6 h-6" />
          <X v-else class="w-6 h-6" />
        </button>
      </div>
    </nav>

    <!-- Мобильное меню -->
    <div v-if="isMobileMenuOpen" class="fixed inset-0 z-[100] md:hidden bg-white pt-20 px-6">
      <!-- Кнопка закрытия -->
      <button
        @click="isMobileMenuOpen = false"
        class="absolute top-6 right-6 text-black p-3 hover:bg-black/10 rounded-lg transition-colors z-[110]"
        aria-label="Закрыть меню"
      >
        <X class="w-8 h-8" />
      </button>
      
      <nav class="flex flex-col gap-2">
        <a
          v-for="item in mobileMenuItems"
          :key="item.label"
          :href="item.href"
          target="_self"
          class="text-base uppercase tracking-wider py-4 border-b-2 border-black hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-200"
          @click="isMobileMenuOpen = false"
        >
          {{ item.label }}
        </a>
      </nav>
    </div>

    <!-- Hero секция -->
    <section id="about" class="pt-24 md:pt-32 pb-12 md:pb-20 px-4 md:px-6 border-b-2 border-black animate-on-scroll">
      <div class="max-w-[1400px] mx-auto">
        <!-- Верхняя панель с мета-информацией -->
        <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8 md:mb-12 pb-4 border-b-2 border-black">
          <div class="text-xs">
            <span class="uppercase tracking-wider">ID ПРОЕКТА: НН-2026</span>
            <span class="mx-3">//</span>
            <span class="uppercase tracking-wider">ИНСТРУМЕНТЫ: СЕТКА, TENCHAT, TELEGRAM, КОНТЕНТ</span>
          </div>
          <div class="text-xs text-right flex items-center gap-2">
            <div class="w-2 h-2 rounded-full bg-[#EA6D3A] animate-pulse"></div>
            <span class="uppercase tracking-wider">СТАТУС: АКТИВЕН</span>
            <span class="mx-3">//</span>
            <span class="uppercase tracking-wider">ГОД: 2026</span>
          </div>
        </div>

        <!-- Основной заголовок -->
        <div class="grid md:grid-cols-[2fr_1fr] gap-8 md:gap-12 items-start">
          <div>
            <div class="text-xs uppercase tracking-wider mb-2">КЕЙС // 01</div>
            <h1 class="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.85] tracking-tighter mb-6">
              НЕСКУЧНЫЙ<br/>
              НЕТВОРКИНГ
            </h1>
            <p class="text-lg md:text-xl text-gray-700 max-w-xl leading-relaxed">
              Сообщество для развития личного бренда через контент-маркетинг в социальных сетях
            </p>
          </div>

          <div class="md:pl-8 md:border-l-2 border-black">
            <div class="space-y-4">
              <div class="flex items-center gap-3">
                <MapPin class="w-5 h-5 flex-shrink-0" />
                <span class="text-sm">Online</span>
              </div>
              <div class="flex items-center gap-3">
                <Calendar class="w-5 h-5 flex-shrink-0" />
                <span class="text-sm">Старт: март 2026</span>
              </div>
              <div class="flex items-center gap-3">
                <Users class="w-5 h-5 flex-shrink-0" />
                <span class="text-sm">Сообщество для развития личного бренда</span>
              </div>
            </div>

            <a href="https://t.me/+dL4aVzBkems0MTMy" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center w-full mt-6 font-medium px-6 py-4 bg-[#EA6D3A] text-white hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-4px] hover:translate-y-[-4px] transition-all duration-200 uppercase tracking-wider text-sm">
              Вступить в сообщество
              <ArrowRight class="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>

        <!-- Статистика -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-12 md:mt-16 pt-8 md:pt-12 border-t-2 border-black">
          <div>
            <div class="text-3xl md:text-4xl font-bold">750</div>
            <div class="text-xs uppercase tracking-wider mt-1 text-gray-600">В Telegram</div>
          </div>
          <div>
            <div class="text-3xl md:text-4xl font-bold">130+</div>
            <div class="text-xs uppercase tracking-wider mt-1 text-gray-600">Участников в чате</div>
          </div>
          <div>
            <div class="text-3xl md:text-4xl font-bold">10+</div>
            <div class="text-xs uppercase tracking-wider mt-1 text-gray-600">Мероприятий</div>
          </div>
          <div>
            <div class="text-3xl md:text-4xl font-bold">5+ лет</div>
            <div class="text-xs uppercase tracking-wider mt-1 text-gray-600">Опыта</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Секция "Ценность" -->
    <section id="value" class="py-12 md:py-20 px-4 md:px-6 border-b-2 border-black animate-on-scroll">
      <div class="max-w-[1400px] mx-auto">
        <div class="text-xs uppercase tracking-wider mb-6">ПУТЬ: /ЦЕННОСТЬ</div>
        <h2 class="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter mb-8 md:mb-12">
          ЦЕННОСТЬ
        </h2>

        <!-- Мобильная версия - стек как в Tinder -->
        <div 
          class="md:hidden relative h-[340px] mb-8 touch-none"
          @touchstart="handleValueTouchStart"
          @touchmove="handleValueTouchMove"
          @touchend="handleValueTouchEnd"
        >
          <div class="relative w-full h-full">
            <div
              v-for="(item, index) in valueItems"
              :key="index"
              :class="[
                'absolute inset-0 border-2 border-black p-6 bg-white transition-all duration-300 ease-out',
                index === activeValueCardIndex ? 'z-30' : 'z-20'
              ]"
              :style="{
                transform: index < activeValueCardIndex 
                  ? `translateY(-100%)` 
                  : index === activeValueCardIndex 
                    ? `translateY(${isDragging ? touchCurrentY.value - touchStartY.value : 0}px)`
                    : `translateY(${Math.min((index - activeValueCardIndex) * 12, 20)}px) scale(${1 - (index - activeValueCardIndex) * 0.08})`,
                opacity: index === activeValueCardIndex ? 1 : index < activeValueCardIndex ? 0 : 1,
                pointerEvents: index === activeValueCardIndex ? 'auto' : 'none'
              }"
            >
              <div class="w-14 h-14 border-2 border-black flex items-center justify-center mb-4">
                <component :is="item.icon" class="w-7 h-7 text-[#EA6D3A]" />
              </div>
              <h3 class="text-xl font-bold uppercase tracking-wider mb-2">{{ item.title }}</h3>
              <p class="text-sm text-gray-700 leading-relaxed">{{ item.description }}</p>
            </div>
          </div>

          <!-- Индикаторы -->
          <div class="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
            <div 
              v-for="(_, index) in valueItems" 
              :key="index"
              :class="[
                'w-2 h-2 rounded-full transition-all duration-300',
                index === activeValueCardIndex ? 'bg-[#EA6D3A] w-6' : 'bg-gray-300'
              ]"
            ></div>
          </div>
        </div>

        <!-- Десктопная версия - Bento сетка -->
        <div class="hidden md:grid md:grid-cols-2 gap-4">
          <!-- Большая карточка слева -->
          <div class="row-span-2 border-2 border-black p-8 bg-white hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-4px] hover:translate-y-[-4px] transition-all duration-200">
            <div class="w-16 h-16 border-2 border-black flex items-center justify-center mb-6">
              <component :is="valueItems[0].icon" class="w-8 h-8 text-[#EA6D3A]" />
            </div>
            <h3 class="text-2xl font-bold uppercase tracking-wider mb-3">{{ valueItems[0].title }}</h3>
            <p class="text-base text-gray-700 leading-relaxed">{{ valueItems[0].description }}</p>
          </div>

          <!-- Карточки справа -->
          <div
            v-for="(item, index) in valueItems.slice(1)"
            :key="index"
            class="border-2 border-black p-6 bg-white hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-4px] hover:translate-y-[-4px] transition-all duration-200"
          >
            <div class="w-12 h-12 border-2 border-black flex items-center justify-center mb-4">
              <component :is="item.icon" class="w-6 h-6 text-[#EA6D3A]" />
            </div>
            <h3 class="text-xl font-bold uppercase tracking-wider mb-2">{{ item.title }}</h3>
            <p class="text-sm text-gray-700 leading-relaxed">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Секция "Для кого" -->
    <section id="audience" class="py-12 md:py-20 px-4 md:px-6 border-b-2 border-black bg-gray-50 animate-on-scroll">
      <div class="max-w-[1400px] mx-auto">
        <div class="text-xs uppercase tracking-wider mb-6">ПУТЬ: /ДЛЯ_КОГО</div>
        <h2 class="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter mb-8 md:mb-12">
          ДЛЯ КОГО
        </h2>

        <div class="space-y-4">
          <div
            v-for="(item, index) in audienceItems"
            :key="index"
            class="border-2 border-black bg-white p-6 hover:shadow-[6px_6px_0px_0px_rgba(234,109,58,1)] hover:translate-x-[-3px] hover:translate-y-[-3px] transition-all duration-200 group"
          >
            <div class="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
              <!-- Номер -->
              <div class="text-5xl md:text-6xl font-black text-[#EA6D3A] flex-shrink-0">
                {{ String(index + 1).padStart(2, '0') }}
              </div>
              
              <!-- Контент -->
              <div class="flex-1">
                <h3 class="text-xl md:text-2xl font-bold uppercase tracking-wider mb-2">{{ item.title }}</h3>
                <p class="text-sm md:text-base text-gray-700 leading-relaxed">{{ item.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Секция "Философия" -->
    <section id="philosophy" class="py-12 md:py-20 px-4 md:px-6 border-b-2 border-black animate-on-scroll">
      <div class="max-w-[1400px] mx-auto">
        <div class="text-xs uppercase tracking-wider mb-6">ПУТЬ: /ФИЛОСОФИЯ</div>
        <h2 class="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter mb-8 md:mb-12">
          ПОЧЕМУ «НЕСКУЧНЫЙ»
        </h2>

        <div class="grid md:grid-cols-2 gap-6">
          <div
            v-for="(item, index) in philosophyItems"
            :key="index"
            :class="[
              'border-2 border-black p-6 md:p-8 bg-white hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-4px] hover:translate-y-[-4px] transition-all duration-200',
              index % 2 === 0 ? 'rotate-[-2deg]' : 'rotate-[2deg]'
            ]"
          >
            <p class="text-base md:text-lg leading-relaxed font-medium">{{ item.quote }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Секция "Формат" -->
    <section id="format" class="py-12 md:py-20 px-4 md:px-6 border-b-2 border-black animate-on-scroll">
      <div class="max-w-[1400px] mx-auto">
        <div class="text-xs uppercase tracking-wider mb-6">ПУТЬ: /ФОРМАТЫ</div>
        <h2 class="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter mb-8 md:mb-12">
          ФОРМАТЫ ВЗАИМОДЕЙСТВИЯ
        </h2>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div
            v-for="(item, index) in formatItems"
            :key="index"
            :class="[
              'p-6 text-center transition-all duration-200 hover:translate-y-[-8px]',
              index % 2 === 0 ? 'bg-white border-2 border-black' : 'bg-black text-white'
            ]"
          >
            <div class="w-20 h-20 mx-auto mb-4 flex items-center justify-center">
              <component :is="item.icon" :class="['w-12 h-12', index % 2 === 0 ? 'text-[#EA6D3A]' : 'text-white']" />
            </div>
            <h3 :class="['text-lg font-bold uppercase tracking-wider mb-2', index % 2 === 0 ? 'text-black' : 'text-white']">{{ item.title }}</h3>
            <p :class="['text-sm leading-relaxed', index % 2 === 0 ? 'text-gray-700' : 'text-gray-300']">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Секция "Контент" -->
    <section id="content" class="py-12 md:py-20 px-4 md:px-6 border-b-2 border-black animate-on-scroll">
      <div class="max-w-[1400px] mx-auto">
        <div class="text-xs uppercase tracking-wider mb-6">ПУТЬ: /КОНТЕНТ</div>
        <h2 class="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter mb-8 md:mb-12">
          КОНТЕНТ И РУБРИКИ
        </h2>

        <div class="grid md:grid-cols-3 gap-6">
          <div
            v-for="(item, index) in contentItems"
            :key="index"
            class="border-2 border-black p-6 md:p-8 bg-white border-t-4 border-t-[#EA6D3A] hover:bg-gray-50 transition-all duration-200"
          >
            <div class="flex items-center gap-3 mb-6">
              <component :is="item.icon" class="w-8 h-8 text-[#EA6D3A]" />
              <h3 class="text-lg font-bold uppercase tracking-wider">{{ item.title }}</h3>
            </div>
            <ul class="space-y-3">
              <li
                v-for="(subitem, subIndex) in item.items"
                :key="subIndex"
                class="flex items-start gap-3 text-sm text-gray-700"
              >
                <span class="w-1.5 h-1.5 bg-[#EA6D3A] rounded-full flex-shrink-0 mt-1.5"></span>
                <span>{{ subitem }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Секция "Автор" -->
    <section id="author" class="py-12 md:py-20 px-4 md:px-6 border-b-2 border-black animate-on-scroll">
      <div class="max-w-[1400px] mx-auto">
        <div class="text-xs uppercase tracking-wider mb-6">ПУТЬ: /АВТОР</div>
        <h2 class="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter mb-8 md:mb-12">
          АВТОР
        </h2>

        <div class="max-w-3xl">
          <div class="border-2 border-black p-6 md:p-8 bg-white">
            <div class="flex flex-col md:flex-row gap-6 md:gap-8">
              <!-- Фото -->
              <div class="flex-shrink-0">
                <div class="w-32 h-32 md:w-40 md:h-40 border-2 border-black bg-gray-100 overflow-hidden">
                  <img
                    :src="author.image"
                    :alt="author.name"
                    class="w-full h-full object-cover"
                    @error="$event.target.style.display='none'"
                  />
                </div>
              </div>

              <!-- Информация -->
              <div class="flex-1">
                <div class="mb-4">
                  <h3 class="text-2xl font-bold uppercase tracking-wider mb-1">{{ author.name }}</h3>
                  <p class="text-sm text-gray-600">{{ author.role }}</p>
                </div>
                <p class="text-sm text-gray-700 leading-relaxed mb-4">{{ author.bio }}</p>
                
                <!-- Платформы -->
                <div class="mb-4">
                  <div class="text-xs uppercase tracking-wider text-gray-500 mb-2">Платформы</div>
                  <div class="flex flex-wrap gap-2">
                    <span
                      v-for="(platform, index) in author.platforms"
                      :key="index"
                      class="text-xs px-2 py-1 bg-[#EA6D3A]/10 border border-[#EA6D3A]/30 text-[#EA6D3A] rounded"
                    >
                      {{ platform }}
                    </span>
                  </div>
                </div>
                
                <!-- Статистика -->
                <div class="flex gap-6">
                  <div v-for="(stat, key) in author.stats" :key="key">
                    <div class="text-xl font-bold">{{ stat }}</div>
                    <div class="text-xs uppercase tracking-wider text-gray-500">{{ statLabels[key] }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Секция "Услуги" -->
    <section id="services" class="py-12 md:py-20 px-4 md:px-6 border-b-2 border-black bg-gray-50 animate-on-scroll">
      <div class="max-w-[1400px] mx-auto">
        <div class="text-xs uppercase tracking-wider mb-6">ПУТЬ: /УСЛУГИ</div>
        <h2 class="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter mb-8 md:mb-12">
          УСЛУГИ
        </h2>

        <div class="grid md:grid-cols-3 gap-6">
          <div
            v-for="(service, index) in services"
            :key="index"
            :class="[
              'border-2 border-black p-6 md:p-8 flex flex-col',
              service.highlighted ? 'bg-black text-white' : 'bg-white'
            ]"
          >
            <div class="mb-6">
              <div class="text-4xl md:text-5xl font-black text-gray-300 mb-4">{{ service.number }}</div>
              <h3 class="text-xl md:text-2xl font-bold uppercase tracking-wider mb-2">{{ service.title }}</h3>
              <div class="flex items-baseline gap-2 mb-2">
                <span class="text-3xl md:text-4xl font-black">{{ service.price }}</span>
                <span :class="['text-xs uppercase tracking-wider', service.highlighted ? 'text-gray-400' : 'text-gray-600']">{{ service.period }}</span>
              </div>
              <p :class="['text-sm mt-3', service.highlighted ? 'text-gray-300' : 'text-gray-600']">{{ service.description }}</p>
            </div>

            <ul class="space-y-3 mb-8 flex-1">
              <li
                v-for="(feature, fIndex) in service.features"
                :key="fIndex"
                :class="['flex items-start gap-3 text-sm', service.highlighted ? 'text-gray-300' : 'text-gray-700']"
              >
                <Check :class="['w-4 h-4 flex-shrink-0 mt-0.5', service.highlighted ? 'text-[#EA6D3A]' : 'text-black']" />
                <span>{{ feature }}</span>
              </li>
            </ul>

            <a
              :href="service.link || 'https://t.me/m/56BWSMKAMjQ6'"
              target="_blank"
              rel="noopener noreferrer"
              :class="[
                'inline-flex items-center justify-center font-medium px-6 py-3 uppercase tracking-wider text-sm w-full transition-all duration-200 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-3px] hover:translate-y-[-3px]',
                service.highlighted
                  ? 'bg-[#EA6D3A] text-white'
                  : 'bg-black text-white'
              ]"
            >
              Записаться
              <ExternalLink :class="['w-3 h-3 ml-2', service.highlighted ? 'text-white' : 'text-white']" />
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Секция FAQ -->
    <section id="faq" class="py-12 md:py-20 px-4 md:px-6 border-b-2 border-black animate-on-scroll">
      <div class="max-w-[1400px] mx-auto">
        <div class="text-xs uppercase tracking-wider mb-6">ПУТЬ: /FAQ</div>
        <h2 class="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter mb-8 md:mb-12">
          FAQ
        </h2>

        <div class="space-y-2">
          <div
            v-for="(faq, index) in faqs"
            :key="index"
            class="border-2 border-black"
          >
            <button
              @click="toggleFaq(index)"
              class="w-full flex items-center justify-between p-6 text-left hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-3px] hover:translate-y-[-3px] transition-all duration-200"
            >
              <span class="font-bold text-sm md:text-base uppercase tracking-wider pr-4">{{ faq.question }}</span>
              <span class="text-2xl flex-shrink-0">{{ openFaqIndex === index ? '−' : '+' }}</span>
            </button>
            <div
              v-show="openFaqIndex === index"
              class="px-6 pb-6 text-sm text-gray-700 leading-relaxed border-t-2 border-black pt-4"
            >
              {{ faq.answer }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA секция -->
    <section class="py-12 md:py-20 px-4 md:px-6 bg-black text-white animate-on-scroll">
      <div class="max-w-[1400px] mx-auto">
        <div class="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 class="text-3xl md:text-4xl lg:text-5xl font-black tracking-tighter mb-4">
              ГОТОВЫ НАЧАТЬ?
            </h2>
            <p class="text-gray-400 text-sm md:text-base leading-relaxed mb-6">
              Присоединяйтесь к проекту и начните развивать свой личный бренд уже сегодня
            </p>
            <div class="flex flex-wrap gap-3">
              <a href="https://t.me/+dL4aVzBkems0MTMy" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center font-medium px-5 py-3 bg-[#EA6D3A] text-white hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] hover:translate-x-[-4px] hover:translate-y-[-4px] transition-all duration-200 uppercase tracking-wider text-sm">
                Вступить в сообщество
                <ArrowRight class="ml-2 h-4 w-4" />
              </a>
              <a href="https://t.me/artemselifanov" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center font-medium px-5 py-3 border-2 border-white hover:bg-white hover:text-black hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] hover:translate-x-[-4px] hover:translate-y-[-4px] transition-all duration-200 uppercase tracking-wider text-sm">
                На диагностику
                <ExternalLink class="ml-2 h-4 w-4" />
              </a>
              <a href="https://t.me/artemselifanov" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center font-medium px-5 py-3 bg-white text-black hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] hover:translate-x-[-4px] hover:translate-y-[-4px] transition-all duration-200 uppercase tracking-wider text-sm">
                В чат
                <ExternalLink class="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>

          <div class="border-2 border-white/30 p-6">
            <div class="text-xs uppercase tracking-wider mb-4 opacity-70">КОНТАКТЫ</div>
            <div class="space-y-4">
              <div class="flex items-center gap-3">
                <Mail class="w-5 h-5" />
                <a href="https://t.me/artemselifanov" class="hover:underline">@artemselifanov</a>
              </div>
              <div class="flex items-center gap-3">
                <MapPin class="w-5 h-5" />
                <span>Online</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="py-8 px-4 md:px-6 bg-white border-t-2 border-black">
      <div class="max-w-[1400px] mx-auto">
        <div class="flex flex-col md:flex-row justify-between items-center gap-4">
          <div class="flex items-center gap-3">
            <img src="/reference/Vector.svg" alt="Нескучный Нетворкинг" class="h-8 w-auto" />
            <span class="font-bold text-xs uppercase tracking-wider">Нескучный Нетворкинг © 2026</span>
          </div>
          <div class="text-xs text-gray-600 uppercase tracking-wider">
            ID ПРОЕКТА: НН-2026 // ИНСТРУМЕНТЫ: СЕТКА, TENCHAT, TELEGRAM, КОНТЕНТ
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
/* Фоновая сетка в стиле референсов */
.grid-bg {
  background-image:
    linear-gradient(to right, rgba(0, 0, 0, 0.1) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(0, 0, 0, 0.1) 1px, transparent 1px);
  background-size: 20px 20px;
}

@media (max-width: 768px) {
  .grid-bg {
    background-size: 15px 15px;
  }
}

/* Анимации появления */
.animate-on-scroll {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.animate-on-scroll.animate-in {
  opacity: 1;
  transform: translateY(0);
}

/* Задержка для карточек в сетке */
.animate-on-scroll .grid > div,
.animate-on-scroll .space-y-4 > div {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1), transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.animate-on-scroll.animate-in .grid > div,
.animate-on-scroll.animate-in .space-y-4 > div {
  opacity: 1;
  transform: translateY(0);
}

/* Каскадная анимация для карточек */
.animate-on-scroll.animate-in .grid > div:nth-child(1),
.animate-on-scroll.animate-in .space-y-4 > div:nth-child(1) {
  transition-delay: 0.1s;
}

.animate-on-scroll.animate-in .grid > div:nth-child(2),
.animate-on-scroll.animate-in .space-y-4 > div:nth-child(2) {
  transition-delay: 0.2s;
}

.animate-on-scroll.animate-in .grid > div:nth-child(3),
.animate-on-scroll.animate-in .space-y-4 > div:nth-child(3) {
  transition-delay: 0.3s;
}

.animate-on-scroll.animate-in .grid > div:nth-child(4),
.animate-on-scroll.animate-in .space-y-4 > div:nth-child(4) {
  transition-delay: 0.4s;
}

.animate-on-scroll.animate-in .grid > div:nth-child(5),
.animate-on-scroll.animate-in .space-y-4 > div:nth-child(5) {
  transition-delay: 0.5s;
}

.animate-on-scroll.animate-in .grid > div:nth-child(6),
.animate-on-scroll.animate-in .space-y-4 > div:nth-child(6) {
  transition-delay: 0.6s;
}
</style>
