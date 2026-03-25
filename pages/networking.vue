<script setup>
import { ref, onMounted } from 'vue'
import { ArrowRight, Mail, MapPin, Calendar, Users, TrendingUp, Target, Zap, BookOpen, MessageCircle, Check, ExternalLink, Menu, X, Video, Tag, Clock } from 'lucide-vue-next'
import MobileBottomNav from '~/components/layout/MobileBottomNav.vue'
import BaseMobileMenu from '~/components/layout/BaseMobileMenu.vue'
import Footer from '~/components/layout/Footer.vue'

// SEO для страницы
useSeoMeta({
  title: 'Нескучный Нетворкинг — личный бренд и контент-маркетинг для экспертов | Артём Селифанов',
  description: 'Сообщество предпринимателей и экспертов для роста личного бренда. Продвижение в Telegram, Сетке и TenChat. Консультации, менторство, мастермайнд. Артём Селифанов.',
  keywords: 'личный бренд, контент-маркетинг, нетворкинг, продвижение в Telegram, продвижение в TenChat, Сетка, блог эксперта, сообщество предпринимателей',
  robots: 'index, follow',
  ogTitle: 'Нескучный Нетворкинг — личный бренд и контент-маркетинг для экспертов',
  ogDescription: 'Сообщество предпринимателей и экспертов для роста личного бренда. Продвижение в Telegram, Сетке и TenChat.',
  ogType: 'website',
  ogUrl: 'https://artemselifanov.ru/networking',
  ogImage: 'https://artemselifanov.ru/reference/openGraph/networking.webp',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Нескучный Нетворкинг — личный бренд и контент-маркетинг для экспертов',
  twitterDescription: 'Сообщество предпринимателей и экспертов для роста личного бренда',
  twitterImage: 'https://artemselifanov.ru/reference/openGraph/networking.webp'
})

useHead({
  link: [
    { rel: 'canonical', href: 'https://artemselifanov.ru/networking' }
  ]
})

// Schema.org разметка
useSchemaOrg([
  defineOrganization({
    name: 'Нескучный Нетворкинг',
    url: 'https://artemselifanov.ru/networking',
    description: 'Закрытое сообщество предпринимателей и экспертов для нетворкинга и обмена опытом'
  }),
  defineWebPage({
    '@type': 'WebPage',
    name: 'Нескучный Нетворкинг — личный бренд и контент-маркетинг для экспертов',
    description: 'Сообщество предпринимателей и экспертов для роста личного бренда. Продвижение в Telegram, Сетке и TenChat.',
    url: 'https://artemselifanov.ru/networking'
  }),
  definePerson({
    name: 'Артём Селифанов',
    url: 'https://artemselifanov.ru',
    sameAs: ['https://t.me/artemselifanov'],
    jobTitle: 'Маркетолог, эксперт по личному бренду',
    description: 'Помогаю предпринимателям и экспертам развивать личный бренд через контент-маркетинг в социальных сетях'
  })
])

const isMobileMenuOpen = ref(false)

// Скролл для хедера
const isScrolled = ref(false)

onMounted(() => {
  const handleScroll = () => {
    isScrolled.value = window.scrollY > 50
  }
  
  window.addEventListener('scroll', handleScroll)
  return () => window.removeEventListener('scroll', handleScroll)
})

// Для свайпов в секции Ценность (циклическое переключение)
const activeValueCardIndex = ref(0)
const touchStartY = ref(0)
const touchCurrentY = ref(0)
const isDragging = ref(false)
const swipeProgress = ref(0)
const nextIndex = ref(0)
const isTransitioning = ref(false)

function handleValueTouchStart(e) {
  if (isTransitioning.value) return
  touchStartY.value = e.touches[0].clientY
  touchCurrentY.value = touchStartY.value
  isDragging.value = true
  swipeProgress.value = 0
}

function handleValueTouchMove(e) {
  if (!isDragging.value || isTransitioning.value) return
  touchCurrentY.value = e.touches[0].clientY
  swipeProgress.value = (touchCurrentY.value - touchStartY.value) / 150
  e.preventDefault()
}

function handleValueTouchEnd() {
  if (!isDragging.value || isTransitioning.value) return
  isDragging.value = false
  
  const diff = touchStartY.value - touchCurrentY.value
  if (Math.abs(diff) > 50) {
    if (diff > 0) {
      // Свайп вверх - следующая карточка
      nextIndex.value = (activeValueCardIndex.value + 1) % valueItems.length
    } else {
      // Свайп вниз - предыдущая карточка
      nextIndex.value = (activeValueCardIndex.value - 1 + valueItems.length) % valueItems.length
    }
    isTransitioning.value = true
    setTimeout(() => {
      activeValueCardIndex.value = nextIndex.value
      isTransitioning.value = false
      swipeProgress.value = 0
    }, 150)
  } else {
    swipeProgress.value = 0
  }
  touchStartY.value = 0
  touchCurrentY.value = 0
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
        observer.unobserve(entry.target)
      }
    })
  }, observerOptions)

  // Наблюдаем за всеми секциями
  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    // Пропускаем первый экран - он виден сразу через CSS
    if (el.id !== 'about') {
      observer.observe(el)
    }
  })
})

// Акцентный цвет бренда
const accentColor = '#EA6D3A'

const mobileMenuItems = [
  { label: 'Главная', href: '/' },
  { label: 'О проекте', href: '#about' },
  { label: 'Ценность', href: '#value' },
  { label: 'Услуги', href: '#services' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Блог', href: '/blog' },
  { label: 'Бизнес Сетка', href: '/business' }
]

// Анимация для пунктов мобильного меню
const menuAnimationClass = `
  @keyframes menuSlideUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  .animate-menu-item {
    opacity: 0;
    animation: menuSlideUp 0.4s ease-out forwards;
  }
`

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
    link: '/consultation'
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
  image: '/images/artem.webp',
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
    icon: 'MessageCircle',
    title: 'Сила сообщества',
    description: 'Обмен опытом с другими участниками, разбор реальных кейсов и поддержка от тех, кто уже прошёл этот путь'
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
    icon: 'Target',
    title: 'Системный подход',
    description: 'Блог рассматривается как бизнес-инструмент для продаж и влияния, а не просто дневник'
  },
  {
    icon: 'Zap',
    title: 'Результат',
    description: 'Рост аудитории, вовлечённости и продаж благодаря контент-маркетингу'
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
    question: 'Что такое личный бренд и зачем он нужен предпринимателю?',
    answer: 'Личный бренд — это ваша профессиональная репутация и узнаваемость в интернете. Когда потенциальный клиент или партнёр ищет эксперта в вашей нише, сильный личный бренд гарантирует, что найдут именно вас. Для предпринимателя и эксперта личный бренд — это не опция, а основной канал привлечения клиентов через контент-маркетинг в Telegram, TenChat, Сетке и других социальных сетях. Без него вы полностью зависите от платного трафика или сарафанного радио.'
  },
  {
    question: 'Чем «Нескучный Нетворкинг» отличается от обычных SMM-курсов?',
    answer: 'Большинство курсов по SMM и контент-маркетингу дают теорию в записи и оставляют вас один на один с вопросами. «Нескучный Нетворкинг» — это живое сообщество предпринимателей и экспертов, где вы получаете обратную связь на свои конкретные посты, разбираете реальные кейсы, участвуете в онлайн-встречах и находите партнёров для взаимопиара. Мы не учим «в вакууме» — мы растём вместе, и это принципиальная разница.'
  },
  {
    question: 'Сколько времени нужно тратить на ведение блога и контент-маркетинг?',
    answer: 'Минимально эффективный режим для роста личного бренда — 3–4 поста в неделю плюс 15–20 минут в день на активность в комментариях и чатах. На старте это занимает около 2–3 часов в неделю. В сообществе мы разрабатываем персональную систему контент-плана, которая позволяет поддерживать регулярность без выгорания — даже если у вас плотный рабочий график.'
  },
  {
    question: 'Какие социальные сети лучше всего подходят для продвижения эксперта в 2026 году?',
    answer: 'В 2026 году для экспертов и предпринимателей наиболее эффективны: Telegram — для глубокого контента и прямой коммуникации с аудиторией; Сетка — российская профессиональная сеть с высоким органическим охватом; TenChat — деловая сеть с алгоритмом продвижения, лояльным к экспертному контенту. Выбор платформы зависит от вашей целевой аудитории — в сообществе мы анализируем это индивидуально.'
  },
  {
    question: 'У меня нет опыта ведения блога — с чего начать?',
    answer: 'Отсутствие опыта — это не проблема, а нормальная точка входа. В сообществе есть участники с совершенно разным уровнем подготовки: от тех, кто только создал канал, до тех, кто уже имеет аудиторию и хочет превратить её в клиентов. Вы получите пошаговый план: упаковка профиля → первые посты → контент-стратегия → монетизация через блог. На каждом этапе — поддержка от Артёма и сообщества.'
  },
  {
    question: 'Что такое нетворкинг через личный бренд и как он работает?',
    answer: 'Классический нетворкинг — это активный поиск связей: конференции, визитки, холодные сообщения. Нетворкинг через личный бренд работает иначе: вы создаёте качественный экспертный контент в социальных сетях, и люди сами находят вас через поиск, рекомендации и алгоритмы платформ. Это «входящий» нетворкинг, при котором партнёры, клиенты и инвесторы приходят к вам уже с интересом — без холодного охвата.'
  },
  {
    question: 'Как попасть в сообщество и что происходит после вступления?',
    answer: 'Нажмите кнопку «Вступить в сообщество» — вы попадёте в закрытый Telegram-чат с 130+ участниками. После вступления: познакомьтесь с участниками в треде знакомств, изучите закреплённые материалы по развитию личного бренда, посетите ближайшую онлайн-встречу сообщества. Если хотите работать индивидуально — выберите формат консультации, менторства или мастермайнда и напишите Артёму напрямую.'
  },
  {
    question: 'Чем консультация отличается от менторства и мастермайнда?',
    answer: 'Консультация (3 500 ₽/час) — разовый разбор конкретного вопроса: стратегия блога, упаковка профиля, анализ контента. Подходит, если нужен быстрый экспертный взгляд со стороны. Менторство (25 000 ₽/мес) — персональная работа 1-на-1: 4 встречи, индивидуальная контент-стратегия, разбор продукта и воронки продаж. Мастермайнд (15 000 ₽/мес) — работа в мини-группе предпринимателей: обмен опытом, групповая динамика, 4 встречи по 2 часа.'
  },
  {
    question: 'Как быстро можно увидеть первые результаты от развития личного бренда?',
    answer: 'При регулярном постинге 3–4 раза в неделю первые изменения в охватах и вовлечённости заметны через 3–4 недели. Рост подписчиков и первые обращения от потенциальных клиентов через блог — обычно через 6–10 недель системной работы. Ключевое слово — «системной»: хаотичный постинг даже при высокой частоте не даёт предсказуемого результата.'
  },
  {
    question: 'Можно ли совмещать участие в сообществе с основной работой или бизнесом?',
    answer: 'Да, и большинство участников именно так и делают. Сообщество построено на принципе системности: важна не интенсивность, а регулярность. Все встречи записываются и доступны в течение 7 дней. Контент-план составляется с учётом вашей реальной загрузки — 2–3 часа в неделю достаточно для старта и поддержания присутствия в Telegram и других сетях.'
  },
  {
    question: 'Есть ли гарантия роста аудитории и продаж через блог?',
    answer: 'Честный ответ: гарантия результата напрямую зависит от вашей регулярности и готовности внедрять систему. Участники, которые публикуют контент по плану и активно участвуют в жизни сообщества, стабильно показывают рост. Те, кто ждёт результата без действий — нет. Если вы ищете «волшебную кнопку» — это не тот проект. Если готовы работать системно над личным брендом и контент-маркетингом — результат будет.'
  },
  {
    question: 'Как происходит оплата и возможен ли возврат?',
    answer: 'Оплата консультаций и программ — через Telegram при записи. Вступление в сообщество бесплатно. Возврат по платным программам возможен в течение 24 часов после первой встречи, если формат не подошёл. Для уточнения деталей напишите напрямую: @artemselifanov.'
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
    <nav :class="[
      'fixed left-4 right-4 z-40 transition-all duration-300 md:backdrop-blur-xl md:rounded-2xl',
      isScrolled ? 'bg-transparent md:bg-white/90 md:shadow-lg' : 'bg-white/20',
      'md:top-0 top-4'
    ]">
      <div class="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
        <div class="h-14 md:h-16 flex items-center">
          <!-- Левая зона: Логотип -->
          <div :class="[
            'transition-all duration-300',
            isScrolled ? 'hidden' : 'block md:block'
          ]">
            <a href="/" class="group flex items-center gap-3" aria-label="Главная" title="Главная">
              <img src="/reference/Vector.svg" alt="Нескучный Нетворкинг — логотип сообщества" class="h-10 w-auto" />
            </a>
          </div>

          <!-- Центральная зона: Десктопное меню (центрировано) -->
          <div class="hidden md:flex items-center justify-center flex-1">
            <nav class="flex items-center gap-1">
              <a href="/" class="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-white/50 rounded-lg transition-all">Главная</a>
              <a href="#about" class="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-white/50 rounded-lg transition-all">О проекте</a>
              <a href="#services" class="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-white/50 rounded-lg transition-all">Услуги</a>
              <a href="#faq" class="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-white/50 rounded-lg transition-all">FAQ</a>
              <a href="/blog" class="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-white/50 rounded-lg transition-all">Блог</a>
              <a href="/business" class="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-white/50 rounded-lg transition-all">Бизнес Сетка</a>
            </nav>
          </div>

          <!-- Правая зона: Кнопка -->
          <div class="hidden md:flex items-center justify-end shrink-0">
            <a href="https://t.me/+dL4aVzBkems0MTMy" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white bg-[#EA6D3A] hover:bg-[#EA6D3A]/90 rounded-xl transition-all">
              <span>В сообщество</span>
            </a>
          </div>

          <!-- Кнопка бургер-меню для мобильных -->
          <button
            @click="isMobileMenuOpen = !isMobileMenuOpen"
            :class="[
              'md:hidden p-2 rounded-xl transition-all absolute right-4 z-50',
              isScrolled ? 'bg-white/90 hover:bg-white' : 'hover:bg-gray-100'
            ]"
            aria-label="Открыть меню"
          >
            <Menu v-if="!isMobileMenuOpen" class="w-6 h-6 text-gray-700" />
            <X v-else class="w-6 h-6 text-gray-700" />
          </button>
        </div>
      </div>
    </nav>

    <!-- Мобильное меню -->
    <BaseMobileMenu
      v-model="isMobileMenuOpen"
      :menu-items="mobileMenuItems"
      cta-link="https://t.me/artemselifanov"
      cta-text="Сообщество в Telegram"
      theme="brutal"
      :show-label="false"
      :show-arrows="false"
    />

    <!-- Хлебные крошки -->
    <nav class="pt-24 pb-6 px-4 md:px-6" aria-label="Breadcrumb">
      <div class="max-w-[1400px] mx-auto">
        <ol class="flex items-center gap-2 text-xs uppercase tracking-wider text-black">
          <li>
            <NuxtLink to="/" class="text-black hover:underline font-bold">Главная</NuxtLink>
          </li>
          <li class="mx-2 text-black">/</li>
          <li class="font-bold text-black">Нескучный Нетворкинг</li>
        </ol>
      </div>
    </nav>

    <!-- Основной контент -->
    <main role="main">
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
        </div>

        <!-- Основной заголовок -->
        <div class="grid md:grid-cols-[2fr_1fr] gap-8 md:gap-12 items-start">
          <div>
            <div class="text-xs uppercase tracking-wider mb-2">КЕЙС // 01</div>
            <h1 class="text-3xl md:text-4xl lg:text-5xl font-black leading-[1.2] tracking-tight mb-6">
              Нескучный нетворкинг — для тех, кто хочет быть заметным
            </h1>
            <p class="text-base md:text-lg text-gray-700 max-w-xl leading-relaxed">
              Личный бренд через контент и полезные знакомства в социальных сетях
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

        <!-- Мобильная версия - циклическое переключение -->
        <div 
          class="md:hidden relative h-[340px] mb-8 touch-none"
          @touchstart="handleValueTouchStart"
          @touchmove="handleValueTouchMove"
          @touchend="handleValueTouchEnd"
        >
          <!-- Вертикальные индикаторы справа -->
          <div class="absolute right-4 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-2">
            <div 
              v-for="(_, index) in valueItems" 
              :key="index"
              :class="[
                'h-2 w-2 rounded-full transition-all duration-300',
                index === activeValueCardIndex ? 'bg-[#EA6D3A] h-6' : 'bg-gray-300'
              ]"
            ></div>
          </div>
          
          <div class="relative w-full h-full">
            <!-- Карточки с fade переходом -->
            <div
              v-for="(item, index) in valueItems"
              :key="index"
              class="absolute inset-0 border-2 border-black p-6 bg-white transition-opacity duration-300 ease-in-out"
              :class="[
                index === activeValueCardIndex ? 'opacity-100 z-20' : 'opacity-0 z-10'
              ]"
            >
              <div class="w-14 h-14 border-2 border-black flex items-center justify-center mb-4">
                <MessageCircle v-if="item.icon === 'MessageCircle'" class="w-7 h-7 text-[#EA6D3A]" />
                <Check v-else-if="item.icon === 'Check'" class="w-7 h-7 text-[#EA6D3A]" />
                <TrendingUp v-else-if="item.icon === 'TrendingUp'" class="w-7 h-7 text-[#EA6D3A]" />
                <Target v-else-if="item.icon === 'Target'" class="w-7 h-7 text-[#EA6D3A]" />
                <Zap v-else-if="item.icon === 'Zap'" class="w-7 h-7 text-[#EA6D3A]" />
              </div>
              <h3 class="text-xl font-bold uppercase tracking-wider mb-2">{{ item.title }}</h3>
              <p class="text-sm text-gray-700 leading-relaxed">{{ item.description }}</p>
            </div>
          </div>
        </div>

        <!-- Десктопная версия - Bento сетка -->
        <div class="hidden md:grid md:grid-cols-2 gap-4">
          <!-- Большая карточка слева -->
          <div class="row-span-2 border-2 border-black p-8 bg-white hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-4px] hover:translate-y-[-4px] transition-all duration-200">
            <div class="w-16 h-16 border-2 border-black flex items-center justify-center mb-6">
              <MessageCircle class="w-8 h-8 text-[#EA6D3A]" />
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
              <Check v-if="item.icon === 'Check'" class="w-6 h-6 text-[#EA6D3A]" />
              <TrendingUp v-else-if="item.icon === 'TrendingUp'" class="w-6 h-6 text-[#EA6D3A]" />
              <Target v-else-if="item.icon === 'Target'" class="w-6 h-6 text-[#EA6D3A]" />
              <Zap v-else-if="item.icon === 'Zap'" class="w-6 h-6 text-[#EA6D3A]" />
            </div>
            <h3 class="text-xl font-bold uppercase tracking-wider mb-2">{{ item.title }}</h3>
            <p class="text-sm text-gray-700 leading-relaxed">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Секция "Как это работает" -->
    <section id="how-it-works" class="py-12 md:py-20 px-4 md:px-6 border-b-2 border-black animate-on-scroll">
      <div class="max-w-[1400px] mx-auto">
        <div class="text-xs uppercase tracking-wider mb-6">ПУТЬ: /КАК_НАЧАТЬ</div>
        <h2 class="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter mb-8 md:mb-12">
          КАК ЭТО РАБОТАЕТ
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          <div class="border-2 border-black bg-white p-6 hover:shadow-[6px_6px_0px_0px_rgba(234,109,58,1)] hover:translate-x-[-3px] hover:translate-y-[-3px] transition-all duration-200">
            <span class="text-5xl md:text-6xl font-black text-[#EA6D3A] block mb-4">01</span>
            <h3 class="text-lg md:text-xl font-bold uppercase tracking-wider mb-2">Вступаешь в сообщество</h3>
            <p class="text-sm text-gray-700 leading-relaxed">Нажимаешь кнопку → попадаешь в Telegram-чат с 130+ участниками</p>
          </div>

          <div class="border-2 border-black bg-white p-6 hover:shadow-[6px_6px_0px_0px_rgba(234,109,58,1)] hover:translate-x-[-3px] hover:translate-y-[-3px] transition-all duration-200">
            <span class="text-5xl md:text-6xl font-black text-[#EA6D3A] block mb-4">02</span>
            <h3 class="text-lg md:text-xl font-bold uppercase tracking-wider mb-2">Знакомишься и включаешься</h3>
            <p class="text-sm text-gray-700 leading-relaxed">Представляешься в чате, читаешь базу знаний, знакомишься с участниками</p>
          </div>

          <div class="border-2 border-black bg-white p-6 hover:shadow-[6px_6px_0px_0px_rgba(234,109,58,1)] hover:translate-x-[-3px] hover:translate-y-[-3px] transition-all duration-200">
            <span class="text-5xl md:text-6xl font-black text-[#EA6D3A] block mb-4">03</span>
            <h3 class="text-lg md:text-xl font-bold uppercase tracking-wider mb-2">Выбираешь свой формат</h3>
            <p class="text-sm text-gray-700 leading-relaxed">Бесплатное комьюнити, консультация, менторство или мастермайнд — в зависимости от твоих задач</p>
          </div>

          <div class="border-2 border-black bg-white p-6 hover:shadow-[6px_6px_0px_0px_rgba(234,109,58,1)] hover:translate-x-[-3px] hover:translate-y-[-3px] transition-all duration-200">
            <span class="text-5xl md:text-6xl font-black text-[#EA6D3A] block mb-4">04</span>
            <h3 class="text-lg md:text-xl font-bold uppercase tracking-wider mb-2">Растёшь системно</h3>
            <p class="text-sm text-gray-700 leading-relaxed">Публикуешь контент, получаешь обратную связь, масштабируешь аудиторию и продажи</p>
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
              'p-4 text-center flex flex-col items-center justify-center transition-all duration-200 hover:translate-y-[-8px]',
              index % 2 === 0 ? 'bg-white border-2 border-black' : 'bg-black text-white'
            ]"
          >
            <h3 :class="['text-sm font-bold uppercase tracking-wider mb-1', index % 2 === 0 ? 'text-black' : 'text-white']">{{ item.title }}</h3>
            <p :class="['text-xs leading-relaxed', index % 2 === 0 ? 'text-gray-700' : 'text-gray-300']">{{ item.description }}</p>
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
                    alt="Артём Селифанов — маркетолог, блогер, нетворкер, автор сообщества Нескучный Нетворкинг"
                    class="w-full h-full object-cover object-center"
                    style="object-position: center 10%"
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

    <!-- Секция "Отзывы" -->
    <section id="testimonials" class="py-12 md:py-20 px-4 md:px-6 border-b-2 border-black animate-on-scroll">
      <div class="max-w-[1400px] mx-auto">
        <div class="text-xs uppercase tracking-wider mb-6">ПУТЬ: /ОТЗЫВЫ</div>
        <h2 class="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter mb-8 md:mb-12">
          ЧТО ГОВОРЯТ УЧАСТНИКИ
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <div class="border-2 border-black bg-white p-6 hover:shadow-[6px_6px_0px_0px_rgba(234,109,58,1)] hover:translate-x-[-3px] hover:translate-y-[-3px] transition-all duration-200">
            <p class="text-sm text-gray-700 leading-relaxed mb-4 italic">«За 6 недель вырос с 200 до 780 подписчиков в Telegram. Главное — появилась система: теперь я знаю, что и когда публиковать»</p>
            <div class="border-t-2 border-black pt-4">
              <strong class="text-base font-bold uppercase tracking-wider">Иван К.</strong>
              <p class="text-xs text-gray-600 mt-1">IT-консультант, Москва</p>
            </div>
          </div>

          <div class="border-2 border-black bg-white p-6 hover:shadow-[6px_6px_0px_0px_rgba(234,109,58,1)] hover:translate-x-[-3px] hover:translate-y-[-3px] transition-all duration-200">
            <p class="text-sm text-gray-700 leading-relaxed mb-4 italic">«Менторство с Артёмом — это не лекции, а живая работа над моим конкретным проектом. Первые платные клиенты через блог пришли на 2-м месяце»</p>
            <div class="border-t-2 border-black pt-4">
              <strong class="text-base font-bold uppercase tracking-wider">Мария Л.</strong>
              <p class="text-xs text-gray-600 mt-1">Коуч, Санкт-Петербург</p>
            </div>
          </div>

          <div class="border-2 border-black bg-white p-6 hover:shadow-[6px_6px_0px_0px_rgba(234,109,58,1)] hover:translate-x-[-3px] hover:translate-y-[-3px] transition-all duration-200">
            <p class="text-sm text-gray-700 leading-relaxed mb-4 italic">«Думала, что для ведения блога нужен большой опыт. Оказалось — нужна только система. Сейчас пишу 4 раза в неделю и не испытываю стресса»</p>
            <div class="border-t-2 border-black pt-4">
              <strong class="text-base font-bold uppercase tracking-wider">Анна Ф.</strong>
              <p class="text-xs text-gray-600 mt-1">Дизайнер, удалённо</p>
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

            <NuxtLink
              v-if="service.link && service.link.startsWith('/')"
              :to="service.link"
              :class="[
                'inline-flex items-center justify-center font-medium px-6 py-3 uppercase tracking-wider text-sm w-full transition-all duration-200 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-3px] hover:translate-y-[-3px]',
                service.highlighted
                  ? 'bg-[#EA6D3A] text-white'
                  : 'bg-black text-white'
              ]"
            >
              Записаться
            </NuxtLink>
            <a
              v-else
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

    <!-- База знаний -->
    <section class="py-12 md:py-20 px-4 md:px-6 border-b-2 border-black">
      <div class="max-w-[1400px] mx-auto">
        <div class="text-xs uppercase tracking-wider mb-2">БОНУС</div>
        <div class="text-xs uppercase tracking-wider mb-8">БАЗА ЗНАНИЙ</div>
        
        <div class="grid md:grid-cols-[2fr_1fr] gap-8 md:gap-12 items-start">
          <div>
            <h2 class="text-3xl md:text-4xl lg:text-5xl font-black leading-[1.2] tracking-tight mb-6">
              220+ постов из Telegram-канала — структурировано и готово к изучению
            </h2>
            <p class="text-base md:text-lg text-gray-700 max-w-xl leading-relaxed mb-8">
              База знаний «Нескучного Нетворкинга» — это маршруты обучения по 9 темам: контент-стратегия, личный бренд, платформы, продажи, мотивация, нетворкинг, история автора, реалити-проекты и инструменты ИИ.
            </p>
            <p class="text-base md:text-lg text-gray-700 max-w-xl leading-relaxed mb-8">
              Каждый пост отобран, структурирован и расположен в логичном порядке — от простого к сложному. Никакой воды, только практика и реальный опыт.
            </p>
            <NuxtLink
              href="/knowledge"
              class="inline-flex items-center gap-3 px-8 py-4 bg-[#EA6D3A] hover:bg-[#EA6D3A]/90 text-white font-bold rounded-xl transition-all text-lg"
            >
              <span>ПОГРУЗИТЬСЯ В БАЗУ ЗНАНИЙ</span>
              <ArrowRight class="w-5 h-5" />
            </NuxtLink>
          </div>

          <div class="md:pl-8 md:border-l-2 border-black">
            <div class="space-y-4">
              <div class="flex items-center gap-3">
                <BookOpen class="w-5 h-5 flex-shrink-0" />
                <span class="text-sm text-gray-900">220+ материалов</span>
              </div>
              <div class="flex items-center gap-3">
                <Users class="w-5 h-5 flex-shrink-0" />
                <span class="text-sm text-gray-900">9 тем</span>
              </div>
              <div class="flex items-center gap-3">
                <Clock class="w-5 h-5 flex-shrink-0" />
                <span class="text-sm text-gray-900">Пополняется регулярно</span>
              </div>
              <div class="flex items-center gap-3">
                <Tag class="w-5 h-5 flex-shrink-0" />
                <span class="text-sm text-gray-900">Перекрёстные ссылки</span>
              </div>
            </div>
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
              <NuxtLink to="/blog" class="inline-flex items-center justify-center font-medium px-5 py-3 bg-white text-black hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] hover:translate-x-[-4px] hover:translate-y-[-4px] transition-all duration-200 uppercase tracking-wider text-sm">
                Читать блог
                <ExternalLink class="ml-2 h-4 w-4" />
              </NuxtLink>
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
    </main>

    <!-- Footer -->
    <section class="py-12 md:py-20 px-4 md:px-6">
      <div class="max-w-[1400px] mx-auto text-center">
        <div class="text-xs uppercase tracking-wider mb-4">ЕСТЬ ВОПРОСЫ?</div>
        <p class="text-base md:text-lg text-gray-700 max-w-2xl mx-auto mb-8">
          Напишите мне напрямую в Telegram — разберём вашу ситуацию и подскажу, с чего начать.
        </p>
        <a
          href="https://t.me/artemselifanov"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-3 px-8 py-4 border-2 border-black hover:bg-black hover:text-white transition-all font-bold text-lg"
        >
          <MessageCircle class="w-5 h-5" />
          <span>НАПИСАТЬ В TELEGRAM</span>
        </a>
      </div>
    </section>

    <!-- Footer -->
    <Footer :show-cta="false" bg-class="bg-white" border-class="border-t-2 border-black" />

    <!-- Нижняя навигация для мобильных -->
    <MobileBottomNav theme="light" />
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

/* Первый экран виден сразу */
#about.animate-on-scroll {
  opacity: 1;
  transform: translateY(0);
}

/* Дочерние элементы первого экрана тоже видны сразу */
#about.animate-on-scroll .grid > div,
#about.animate-on-scroll .space-y-4 > div {
  opacity: 1;
  transform: translateY(0);
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
