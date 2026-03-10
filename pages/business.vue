<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { ArrowRight, Users, Target, Lightbulb, Calendar, MessageCircle, TrendingUp, CheckCircle, Mail, Linkedin, Twitter, Instagram, ExternalLink, Menu, X, ChevronDown } from 'lucide-vue-next'
import gsap from 'gsap'

const isMenuOpen = ref(false)
const scrolled = ref(false)

// Прогресс-бар скролла
const scrollProgress = ref(0)

function handleScroll() {
  const winScroll = document.body.scrollTop || document.documentElement.scrollTop
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
  scrollProgress.value = (winScroll / height) * 100
  scrolled.value = winScroll > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  
  const progressBar = document.querySelector('.progress-bar')
  
  // Анимация прогресс-бара
  if (progressBar) {
    gsap.to(progressBar, {
      width: '100%',
      duration: 2,
      ease: 'power2.out',
      delay: 0.5
    })
  }
  
  // GSAP анимация прыгающего мяча внутри карточки ФОКУС
  const ball = document.querySelector('.bounce-ball')
  if (ball) {
    // Простая анимация подпрыгивания на месте
    gsap.to(ball, {
      y: -15,
      duration: 0.6,
      ease: 'power1.out',
      repeat: -1,
      yoyo: true
    })
  }
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

// Данные для Bento-сетки
const bentoItems = [
  {
    type: 'identity',
    title: 'БИЗНЕС СЕТКА',
    subtitle: 'v2.0',
    description: 'Сообщество предпринимателей и экспертов'
  },
  {
    type: 'navigation',
    items: ['УЧАСТИЕ', 'СОБЫТИЯ', 'ПРОЕКТЫ']
  },
  {
    type: 'cta',
    title: 'ВСТУПИТЬ',
    href: 'https://t.me/artemselifanov',
    external: true
  },
  {
    type: 'metric',
    value: '10k+',
    label: 'участников',
    footer: 'ОТЧЁТ 2026',
    highlighted: true
  },
  {
    type: 'manifesto',
    title: 'БЫСТРЫЙ РОСТ',
    subtitle: 'Операционная система для современных бизнес-сообществ',
    highlighted: true
  },
  {
    type: 'focus',
    title: 'ФОКУС',
    subtitle: 'АБСТРАКТНАЯ ЛОГИКА'
  },
  {
    type: 'connect',
    title: 'КОНТАКТЫ',
    socials: [
      { name: 'Telegram', href: 'https://t.me/artemselifanov', icon: 'fa-brands:telegram' },
      { name: 'WhatsApp', href: 'https://wa.me/79991234567', icon: 'fa-brands:whatsapp' },
      { name: 'VK', href: 'https://vk.com', icon: 'fa-brands:vk' }
    ],
    email: 'hello@businessgrid.io'
  },
  {
    type: 'access',
    title: 'ПОЛУЧИТЬ РАННИЙ ДОСТУП',
    progress: 40,
    footer: '40% мест занято'
  }
]

// Направления сообщества
const directions = [
  {
    icon: Users,
    title: 'Поддержка',
    description: 'Комьюнити предпринимателей и экспертов для взаимопомощи и роста',
    features: [
      'Нетворкинг с единомышленниками',
      'Обмен опытом и лучшими практиками',
      'Закрытый чат сообщества',
      'Регулярные онлайн-встречи'
    ]
  },
  {
    icon: Target,
    title: 'Бизнес-разборы',
    description: 'Практические разборы реальных бизнес-кейсов',
    stats: '3 разбора проведено',
    features: [
      'Разбор бизнес-стратегии',
      'Аудит сайтов и воронок',
      'Индивидуальные консультации',
      'Рекомендации по улучшению'
    ]
  },
  {
    icon: Lightbulb,
    title: 'Мастермайнд группа',
    description: 'Интенсивная работа в мини-группе предпринимателей',
    price: '35 000 ₽',
    period: '2 месяца',
    highlighted: true,
    features: [
      '8 групповых сессий по 2 часа',
      'Разбор стратегии каждого участника',
      'Групповая динамика и поддержка',
      'Доступ к базе знаний',
      'Закрытый чат участников',
      'Персональные рекомендации'
    ]
  }
]

// Для кого сообщество
const audience = [
  {
    icon: TrendingUp,
    title: 'Предприниматели',
    description: 'Владельцы малого и среднего бизнеса, которые хотят масштабироваться'
  },
  {
    icon: MessageCircle,
    title: 'Эксперты',
    description: 'Консультанты, коучи, специалисты с глубокими знаниями в своей области'
  },
  {
    icon: Users,
    title: 'Руководители',
    description: 'Топ-менеджеры и руководители направлений, стремящиеся к развитию'
  }
]

// FAQ
const faqs = [
  {
    question: 'Что такое Бизнес Сетка?',
    answer: 'Бизнес Сетка — это сообщество предпринимателей и экспертов, где участники обмениваются опытом, получают поддержку и совместно решают бизнес-задачи через регулярные встречи и мастермайнд-группы.'
  },
  {
    question: 'Как проходит участие в мастермайнде?',
    answer: 'Мастермайнд длится 2 месяца. Встречи проходят 4 раза в неделю по 2 часа в формате онлайн. Каждый участник получает персональный разбор своего бизнеса, обратную связь от группы и рекомендации по развитию.'
  },
  {
    question: 'Кто может присоединиться к сообществу?',
    answer: 'Сообщество открыто для предпринимателей, экспертов и руководителей, которые готовы делиться опытом и развиваться вместе с единомышленниками.'
  },
  {
    question: 'Какая польза от участия?',
    answer: 'Вы получите доступ к опыту других предпринимателей, найдете новых партнеров и клиентов, улучшите свой бизнес благодаря разбору кейсов и рекомендациям сообщества.'
  },
  {
    question: 'Как записаться на мастермайнд?',
    answer: 'Напишите в Telegram или заполните форму на странице. Мы свяжемся с вами для уточнения деталей и подтверждения участия.'
  }
]

const activeFaqIndex = ref(null)

function toggleFaq(index) {
  activeFaqIndex.value = activeFaqIndex.value === index ? null : index
}
</script>

<template>
  <div class="min-h-screen bg-white text-gray-900 antialiased">
    <!-- Прогресс-бар -->
    <div class="fixed top-0 left-0 w-full h-1 z-[60] bg-gray-100">
      <div class="h-full bg-purple-600 transition-all duration-150 ease-out" :style="{ width: scrollProgress + '%' }"></div>
    </div>

    <!-- Хедер -->
    <header :class="[
      'fixed left-4 right-4 z-40 transition-all duration-300 rounded-2xl',
      scrolled ? 'bg-white/80 backdrop-blur-xl shadow-lg' : 'bg-transparent backdrop-blur-none shadow-none',
      'md:top-0 top-4'
    ]">
      <div class="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8">
        <div class="h-14 md:h-16 flex justify-between items-center">
          <a href="/" class="group flex items-center gap-3">
            <img src="/reference/Frame 697.jpg" alt="Бизнес Сетка" class="w-10 h-10 rounded-lg" />
            <span class="text-sm font-bold tracking-tight text-gray-900">БИЗНЕС СЕТКА</span>
          </a>

          <nav class="hidden md:flex items-center gap-8">
            <a href="/" class="text-xs font-semibold tracking-wider text-gray-600 hover:text-gray-900 transition-colors">Главная</a>
            <a href="#membership" class="text-xs font-semibold tracking-wider text-gray-600 hover:text-gray-900 transition-colors">УЧАСТИЕ</a>
            <a href="#events" class="text-xs font-semibold tracking-wider text-gray-600 hover:text-gray-900 transition-colors">СОБЫТИЯ</a>
            <a href="#ventures" class="text-xs font-semibold tracking-wider text-gray-600 hover:text-gray-900 transition-colors">ПРОЕКТЫ</a>
            <a href="/blog" class="text-xs font-semibold tracking-wider text-gray-600 hover:text-gray-900 transition-colors">Блог</a>
            <a href="/networking" class="text-xs font-semibold tracking-wider text-gray-600 hover:text-gray-900 transition-colors">Нескучный Нетворкинг</a>
            <a href="/yappie" class="text-xs font-semibold tracking-wider text-violet-600 hover:text-violet-700 transition-colors">Веб-разработка</a>
          </nav>

          <a href="https://t.me/+mFUh7ye6U6NjNzli" target="_blank" class="hidden md:inline-flex items-center gap-2 px-5 py-2.5 text-sm font-bold text-white bg-purple-600 hover:bg-purple-700 rounded-xl transition-all">
            <span>ВСТУПИТЬ</span>
            <ArrowRight class="w-4 h-4" />
          </a>

          <!-- Бургер для мобильных -->
          <button @click="isMenuOpen = !isMenuOpen" class="md:hidden p-2 hover:bg-gray-100 rounded-xl transition-all">
            <Menu v-if="!isMenuOpen" class="w-6 h-6 text-gray-700" />
            <X v-else class="w-6 h-6 text-gray-700" />
          </button>
        </div>
      </div>
    </header>

    <!-- Мобильное меню -->
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 scale-95"
      leave-to-class="opacity-0 scale-95"
    >
      <div v-if="isMenuOpen" class="fixed inset-0 z-[100] bg-white pt-20 px-6">
        <div class="flex justify-between items-center mb-8">
          <span class="text-gray-500 text-sm font-medium">Навигация</span>
          <button @click="isMenuOpen = false" class="p-3 bg-gray-100 hover:bg-gray-200 rounded-2xl transition-all">
            <X class="w-6 h-6 text-gray-700" />
          </button>
        </div>
        <nav class="flex flex-col gap-3 max-w-md mx-auto mt-8">
          <a href="/" @click="isMenuOpen = false" class="p-5 bg-gray-50 hover:bg-purple-50 rounded-2xl transition-all border border-gray-100">
            <span class="text-lg font-bold text-gray-900">Главная</span>
          </a>
          <a v-for="item in ['УЧАСТИЕ', 'СОБЫТИЯ', 'ПРОЕКТЫ']" :key="item" :href="'#' + item.toLowerCase()" @click="isMenuOpen = false"
             class="p-5 bg-gray-50 hover:bg-purple-50 rounded-2xl transition-all border border-gray-100">
            <span class="text-lg font-bold text-gray-900">{{ item }}</span>
          </a>
          <a href="/blog" @click="isMenuOpen = false" class="p-5 bg-gray-50 hover:bg-purple-50 rounded-2xl transition-all border border-gray-100">
            <span class="text-lg font-bold text-gray-900">Блог</span>
          </a>
          <a href="/networking" @click="isMenuOpen = false" class="p-5 bg-gray-50 hover:bg-purple-50 rounded-2xl transition-all border border-gray-100">
            <span class="text-lg font-bold text-gray-900">Нескучный Нетворкинг</span>
          </a>
          <a href="/yappie" @click="isMenuOpen = false" class="p-5 bg-gray-50 hover:bg-purple-50 rounded-2xl transition-all border border-gray-100">
            <span class="text-lg font-bold text-gray-900">Веб-разработка</span>
          </a>
          <a href="https://t.me/+mFUh7ye6U6NjNzli" target="_blank"
             class="mt-6 p-5 bg-purple-600 hover:bg-purple-500 rounded-2xl transition-all shadow-lg shadow-purple-600/30">
            <div class="flex items-center justify-center gap-3">
              <span class="text-base font-bold text-white">ВСТУПИТЬ</span>
              <ArrowRight class="w-5 h-5 text-white" />
            </div>
          </a>
        </nav>
      </div>
    </Transition>

    <!-- Hero: Bento Grid -->
    <section class="pt-24 md:pt-32 pb-16 px-4 sm:px-6 bg-gradient-to-br from-gray-50 to-white relative" id="bento-section">
      <div class="max-w-[1600px] mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">

          <!-- Identity -->
          <div class="md:col-span-1 lg:col-span-1 p-6 md:p-8 bg-white rounded-3xl border border-gray-200 hover:border-purple-200 hover:shadow-lg hover:shadow-purple-100/50 transition-all duration-300">
            <div class="flex items-center gap-2 mb-4">
              <span class="text-[10px] font-semibold tracking-wider text-gray-400">БРЕНД</span>
            </div>
            <h1 class="text-2xl md:text-3xl font-bold text-gray-900 mb-2">БИЗНЕС СЕТКА</h1>
            <div class="relative w-full h-8 mb-3">
              <div class="absolute inset-0 bg-gray-100 rounded-full overflow-hidden">
                <div class="absolute left-0 top-0 h-full w-0 bg-gradient-to-r from-purple-600 to-purple-400 rounded-full progress-bar"></div>
              </div>
              <span class="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-semibold text-white">развивать бизнес вместе</span>
            </div>
            <p class="text-sm text-gray-500">Сообщество предпринимателей и экспертов</p>
          </div>

          <!-- Navigation -->
          <div class="md:col-span-1 lg:col-span-2 p-6 md:p-8 bg-white rounded-3xl border border-gray-200 hover:border-purple-200 hover:shadow-lg transition-all duration-300">
            <nav class="flex flex-wrap items-center justify-center gap-6 md:gap-12 h-full">
              <a href="#membership" class="group flex items-center gap-2">
                <span class="text-lg md:text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors">УЧАСТИЕ</span>
                <ArrowRight class="w-4 h-4 text-gray-300 group-hover:text-purple-600 transition-colors opacity-0 group-hover:opacity-100" />
              </a>
              <span class="hidden md:block w-px h-6 bg-gray-200"></span>
              <a href="#events" class="group flex items-center gap-2">
                <span class="text-lg md:text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors">СОБЫТИЯ</span>
                <ArrowRight class="w-4 h-4 text-gray-300 group-hover:text-purple-600 transition-colors opacity-0 group-hover:opacity-100" />
              </a>
              <span class="hidden md:block w-px h-6 bg-gray-200"></span>
              <a href="#ventures" class="group flex items-center gap-2">
                <span class="text-lg md:text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors">ПРОЕКТЫ</span>
                <ArrowRight class="w-4 h-4 text-gray-300 group-hover:text-purple-600 transition-colors opacity-0 group-hover:opacity-100" />
              </a>
            </nav>
          </div>

          <!-- CTA -->
          <div class="md:col-span-1 lg:col-span-1 p-6 md:p-8 bg-white rounded-3xl border border-gray-200 hover:border-purple-200 hover:shadow-lg transition-all duration-300 group cursor-pointer" @click="window.open('https://t.me/+mFUh7ye6U6NjNzli', '_blank')">
            <div class="flex items-center justify-between h-full">
              <div>
                <span class="text-[10px] font-semibold tracking-wider text-gray-400">ДЕЙСТВИЕ</span>
                <h3 class="text-2xl md:text-3xl font-bold text-gray-900 mt-2">ВСТУПИТЬ</h3>
              </div>
              <ArrowRight class="w-6 h-6 text-gray-300 group-hover:text-purple-600 group-hover:translate-x-1 transition-all" />
            </div>
          </div>

          <!-- Metric -->
          <div class="md:col-span-1 lg:col-span-1 p-6 md:p-8 bg-gradient-to-br from-purple-600 via-purple-500 to-purple-400 rounded-3xl text-white hover:shadow-xl hover:shadow-purple-500/30 transition-all duration-300">
            <span class="text-[10px] font-semibold tracking-wider text-purple-200">МЕТРИКА</span>
            <div class="mt-4">
              <div class="text-5xl md:text-6xl font-bold">238</div>
              <p class="text-purple-100 mt-2 text-sm md:text-base">участников</p>
            </div>
            <div class="mt-6 pt-4 border-t border-white/20">
              <span class="text-xs font-semibold text-purple-200">ОТЧЁТ 2026</span>
            </div>
          </div>

          <!-- Manifesto -->
          <div class="md:col-span-1 lg:col-span-2 p-6 md:p-8 bg-white rounded-3xl border border-gray-200 hover:border-purple-200 hover:shadow-lg transition-all duration-300">
            <span class="text-[10px] font-semibold tracking-wider text-gray-400">МАНИФЕСТ</span>
            <div class="mt-4">
              <h2 class="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-400 leading-none">
                БЫСТРЫЙ<br/>РОСТ
              </h2>
              <p class="text-gray-600 mt-4 text-base md:text-lg max-w-md">Операционная система для современных бизнес-сообществ</p>
            </div>
          </div>

          <!-- Focus -->
          <div class="md:col-span-1 lg:col-span-1 p-6 md:p-8 bg-white rounded-3xl border border-gray-200 hover:border-purple-200 hover:shadow-lg transition-all duration-300 overflow-hidden relative min-h-[200px] md:min-h-[250px]">
            <span class="text-[10px] font-semibold tracking-wider text-gray-400">ФОКУС</span>
            <div class="absolute inset-0 overflow-hidden">
              <div class="absolute bottom-3 right-3 w-9 h-9 md:w-12 md:h-12 bg-gradient-to-br from-purple-500 to-purple-300 rounded-full bounce-ball"></div>
            </div>
            <span class="text-[10px] font-semibold tracking-wider text-gray-400 mt-auto block">АБСТРАКТНАЯ ЛОГИКА</span>
          </div>

          <!-- Connect -->
          <div class="md:col-span-1 lg:col-span-1 p-6 md:p-8 bg-white rounded-3xl border border-gray-200 hover:border-purple-200 hover:shadow-lg transition-all duration-300">
            <span class="text-[10px] font-semibold tracking-wider text-gray-400">КОНТАКТЫ</span>
            <div class="flex flex-wrap gap-2 mt-4">
              <a href="https://t.me/+mFUh7ye6U6NjNzli" target="_blank" class="px-3 py-1.5 text-xs font-semibold text-gray-700 bg-gray-100 hover:bg-purple-100 hover:text-purple-700 rounded-full transition-all border border-gray-200">Telegram</a>
              <a href="https://wa.me/79991234567" target="_blank" class="px-3 py-1.5 text-xs font-semibold text-gray-700 bg-gray-100 hover:bg-green-100 hover:text-green-700 rounded-full transition-all border border-gray-200">WhatsApp</a>
              <a href="https://vk.com" target="_blank" class="px-3 py-1.5 text-xs font-semibold text-gray-700 bg-gray-100 hover:bg-blue-100 hover:text-blue-700 rounded-full transition-all border border-gray-200">VK</a>
            </div>
            <a href="mailto:hello@businessgrid.io" class="mt-4 block text-sm text-gray-500 hover:text-purple-600 transition-colors">hello@businessgrid.io</a>
          </div>

          <!-- Purple spacer -->
          <div class="md:col-span-1 lg:col-span-2 p-6 md:p-8 bg-gradient-to-br from-purple-600 to-purple-500 rounded-3xl hover:shadow-xl hover:shadow-purple-500/30 transition-all duration-300 flex items-end justify-between">
            <div class="text-white">
              <span class="text-[10px] font-semibold tracking-wider text-purple-200">СООБЩЕСТВО</span>
              <h3 class="text-2xl md:text-3xl font-bold mt-2">Объединяем лучших</h3>
            </div>
            <div class="text-white/80 text-sm font-semibold">S1 2026</div>
          </div>

          <!-- Access -->
          <div class="md:col-span-1 lg:col-span-1 p-6 md:p-8 bg-white rounded-3xl border border-gray-200 hover:border-purple-200 hover:shadow-lg transition-all duration-300 group cursor-pointer" @click="window.open('https://t.me/+mFUh7ye6U6NjNzli', '_blank')">
            <span class="text-[10px] font-semibold tracking-wider text-gray-400">ДОСТУП</span>
            <h3 class="text-lg md:text-xl font-bold text-gray-900 mt-3 group-hover:text-purple-600 transition-colors">ПОЛУЧИТЬ<br/>РАННИЙ ДОСТУП</h3>
            <div class="mt-4">
              <div class="relative w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                <div class="absolute left-0 top-0 h-full w-[40%] bg-gradient-to-r from-purple-600 to-purple-400 rounded-full"></div>
              </div>
              <span class="text-xs font-semibold text-purple-600 mt-2 block">40% мест занято</span>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- Направления -->
    <section id="membership" class="py-16 md:py-24 px-4 sm:px-6 bg-white">
      <div class="max-w-[1600px] mx-auto">
        <div class="text-center mb-12">
          <span class="text-xs font-semibold tracking-wider text-purple-600">НАПРАВЛЕНИЯ</span>
          <h2 class="text-3xl md:text-5xl font-bold text-gray-900 mt-3">Что мы предлагаем</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div v-for="(direction, index) in directions" :key="index" 
               :class="[
                 'p-6 md:p-8 rounded-3xl border transition-all duration-300 hover:shadow-xl',
                 direction.highlighted 
                   ? 'bg-gradient-to-br from-purple-600 via-purple-500 to-purple-400 border-purple-400 text-white hover:shadow-purple-500/30' 
                   : 'bg-white border-gray-200 hover:border-purple-200'
               ]">
            <component :is="direction.icon" 
                       :class="[
                         'w-10 h-10 mb-4',
                         direction.highlighted ? 'text-white/80' : 'text-purple-600'
                       ]" />
            
            <h3 :class="['text-xl md:text-2xl font-bold mb-2', direction.highlighted ? 'text-white' : 'text-gray-900']">
              {{ direction.title }}
            </h3>
            <p :class="['text-sm mb-4', direction.highlighted ? 'text-purple-100' : 'text-gray-600']">
              {{ direction.description }}
            </p>

            <div v-if="direction.stats" 
                 :class="['inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4', 
                         direction.highlighted ? 'bg-white/20 text-white' : 'bg-purple-100 text-purple-700']">
              {{ direction.stats }}
            </div>

            <div v-if="direction.price" 
                 :class="['mb-4 p-4 rounded-2xl', direction.highlighted ? 'bg-white/10' : 'bg-purple-50']">
              <div :class="['text-2xl md:text-3xl font-bold', direction.highlighted ? 'text-white' : 'text-purple-600']">
                {{ direction.price }}
              </div>
              <div :class="['text-xs', direction.highlighted ? 'text-purple-200' : 'text-gray-500']">
                {{ direction.period }}
              </div>
            </div>

            <ul :class="['space-y-2']">
              <li v-for="(feature, i) in direction.features" :key="i" 
                  :class="['flex items-start gap-2 text-sm', direction.highlighted ? 'text-purple-100' : 'text-gray-600']">
                <CheckCircle :class="['w-4 h-4 mt-0.5 flex-shrink-0', direction.highlighted ? 'text-white/60' : 'text-purple-400']" />
                <span>{{ feature }}</span>
              </li>
            </ul>

            <a v-if="direction.highlighted" 
               href="https://t.me/artemselifanov" 
               target="_blank"
               class="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-white text-purple-600 hover:bg-purple-50 rounded-xl font-semibold transition-all w-full justify-center">
              <span>Подать заявку</span>
              <ArrowRight class="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Для кого -->
    <section class="py-16 md:py-24 px-4 sm:px-6 bg-gray-50">
      <div class="max-w-[1600px] mx-auto">
        <div class="text-center mb-12">
          <span class="text-xs font-semibold tracking-wider text-purple-600">АУДИТОРИЯ</span>
          <h2 class="text-3xl md:text-5xl font-bold text-gray-900 mt-3">Для кого сообщество</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div v-for="(item, index) in audience" :key="index" 
               class="p-6 md:p-8 bg-white rounded-3xl border border-gray-200 hover:border-purple-200 hover:shadow-lg transition-all duration-300">
            <component :is="item.icon" class="w-10 h-10 text-purple-600 mb-4" />
            <h3 class="text-xl font-bold text-gray-900 mb-2">{{ item.title }}</h3>
            <p class="text-gray-600 text-sm">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section id="events" class="py-16 md:py-24 px-4 sm:px-6 bg-white">
      <div class="max-w-3xl mx-auto">
        <div class="text-center mb-12">
          <span class="text-xs font-semibold tracking-wider text-purple-600">FAQ</span>
          <h2 class="text-3xl md:text-5xl font-bold text-gray-900 mt-3">Частые вопросы</h2>
        </div>

        <div class="space-y-3">
          <div v-for="(faq, index) in faqs" :key="index" 
               class="border border-gray-200 rounded-2xl overflow-hidden hover:border-purple-200 transition-colors">
            <button @click="toggleFaq(index)"
                    class="w-full px-6 py-4 md:py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors">
              <span class="text-sm md:text-base font-semibold text-gray-900 pr-4">{{ faq.question }}</span>
              <ChevronDown :class="['w-5 h-5 text-gray-400 transition-transform flex-shrink-0', activeFaqIndex === index ? 'rotate-180 text-purple-600' : '']" />
            </button>
            <div v-show="activeFaqIndex === index" 
                 class="px-6 pb-4 md:pb-5 text-sm text-gray-600 leading-relaxed">
              {{ faq.answer }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section id="ventures" class="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-purple-600 via-purple-500 to-purple-400">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl md:text-5xl font-bold text-white mb-4">Готовы присоединиться?</h2>
        <p class="text-purple-100 text-base md:text-lg mb-8 max-w-xl mx-auto">
          Оставьте заявку и мы свяжемся с вами для обсуждения деталей участия в сообществе
        </p>
        <a href="https://t.me/+mFUh7ye6U6NjNzli"
           target="_blank"
           class="inline-flex items-center gap-3 px-8 py-4 bg-white text-purple-600 hover:bg-purple-50 rounded-2xl font-bold text-lg transition-all shadow-xl shadow-purple-900/20 hover:shadow-2xl hover:shadow-purple-900/30 hover:scale-105">
          <span>Связаться в Telegram</span>
          <ArrowRight class="w-5 h-5" />
        </a>
      </div>
    </section>

    <!-- Footer -->
    <footer class="py-8 px-4 sm:px-6 bg-gray-900 border-t border-gray-800">
      <div class="max-w-[1600px] mx-auto">
        <div class="flex flex-col md:flex-row items-center justify-between gap-4">
          <div class="flex items-center gap-3">
            <img src="/reference/Frame 697.jpg" alt="Бизнес Сетка" class="w-6 h-6 rounded-md" />
            <span class="text-sm font-bold text-white">БИЗНЕС СЕТКА</span>
          </div>
          <div class="flex items-center gap-6">
            <a href="/" class="text-xs text-gray-400 hover:text-white transition-colors">Главная</a>
            <a href="#membership" class="text-xs text-gray-400 hover:text-white transition-colors">Участие</a>
            <a href="#events" class="text-xs text-gray-400 hover:text-white transition-colors">События</a>
            <a href="https://t.me/+mFUh7ye6U6NjNzli" target="_blank" class="text-xs text-gray-400 hover:text-white transition-colors">Контакты</a>
          </div>
          <span class="text-xs text-gray-500">© 2026 Бизнес Сетка. Все права защищены.</span>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
/* Плавная прокрутка для якорных ссылок */
html {
  scroll-behavior: smooth;
}

/* Скрытие скроллбара для чистого дизайна */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #c4b5fd;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #a78bfa;
}
</style>
