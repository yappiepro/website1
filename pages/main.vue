<template>
  <div class="min-h-screen text-white">
    <!-- Фоновые эффекты - задний план -->
    <div class="fixed inset-0 overflow-hidden" style="z-index: -1 !important">
      <!-- Тёмный фон -->
      <div class="absolute inset-0 bg-[#0a0a0f]"></div>
      
      <!-- Звёздное небо -->
      <div class="stars-container">
        <div class="stars-layer stars-1"></div>
        <div class="stars-layer stars-2"></div>
        <div class="stars-layer stars-3"></div>
      </div>

      <!-- Градиентные пятна -->
      <div class="gradient-orbs">
        <div class="gradient-orb gradient-orb-1"></div>
        <div class="gradient-orb gradient-orb-2"></div>
        <div class="gradient-orb gradient-orb-3"></div>
      </div>
    </div>

    <!-- Кастомный курсор -->
    <div class="cursor-dot" ref="cursorDot"></div>

    <!-- Основной контент -->
    <div class="relative" style="z-index: 10 !important">
    <!-- Навигация -->
    <nav class="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0f]/50 backdrop-blur-2xl border-b border-white/[0.08]">
      <div class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="/website1/main" class="text-xl font-semibold text-white flex items-center gap-2">
          <span class="font-syncopate font-bold text-white tracking-wider text-2xl">АРТЁМ</span>
        </a>
        
        <div class="hidden md:flex items-center gap-8">
          <a href="#about" class="text-sm text-gray-400 hover:text-white transition-all">Обо мне</a>
          <a href="#projects" class="text-sm text-gray-400 hover:text-white transition-all">Медиа Хаб</a>
          <a href="#journey" class="text-sm text-gray-400 hover:text-white transition-all">Путь клиента</a>
          <a href="https://t.me/artemselifanov" target="_blank" class="inline-flex items-center justify-center rounded-full font-medium px-4 py-2 text-xs bg-white text-black hover:bg-gray-100 shadow-lg shadow-white/10 hover:shadow-white/20 transition-all">Связаться</a>
        </div>
        
        <button
          @click="isMobileMenuOpen = !isMobileMenuOpen"
          class="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
          aria-label="Открыть меню"
        >
          <Menu v-if="!isMobileMenuOpen" class="w-6 h-6" />
          <X v-else class="w-6 h-6" />
        </button>
      </div>
    </nav>

    <!-- Мобильное меню -->
    <div v-if="isMobileMenuOpen" class="fixed inset-0 z-[100] md:hidden bg-[#0a0a0f] flex flex-col pt-20 px-6">
      <nav class="flex flex-col gap-4">
        <a
          v-for="item in mobileMenuItems"
          :key="item.label"
          :href="item.href"
          class="text-lg text-gray-300 hover:text-white py-3 border-b border-white/10"
          @click="isMobileMenuOpen = false"
        >
          {{ item.label }}
        </a>
      </nav>
    </div>

    <!-- Hero секция - Профиль -->
    <section id="about" class="pt-32 pb-16 px-6 relative">
      <div class="max-w-7xl mx-auto">
        <!-- Bento Grid Layout -->
        <div class="hero-bento-grid">
          
          <!-- Левая колонка: Информация + Соцсети -->
          <div class="hero-left-column">
            <!-- Верхний контейнер: Роль + Локация + Заголовок + Описание -->
            <div class="hero-info-card">
              <div class="hero-info-header">
                <p class="hero-role text-sm md:text-base text-violet-400 font-mono">
                  Личный бренд • Соцсети • Бизнес • Веб-разработка
                </p>
                <div class="hero-location flex items-center gap-2 text-gray-400">
                  <MapPin class="w-4 h-4" />
                  <span>Петрозаводск, Россия</span>
                </div>
              </div>
              
              <h1 class="hero-headline text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 leading-tight">
                Помогаю развить личный бренд через контент-маркетинг
              </h1>
              
              <p class="hero-description text-gray-300 text-base md:text-lg leading-relaxed mb-4">
                Помогу создать продающий блог и воронку продаж в нём
              </p>
              
              <div class="hero-services-list">
                <div class="service-item">
                  <span class="service-bullet">▸</span>
                  <span>Личный бренд</span>
                </div>
                <div class="service-item">
                  <span class="service-bullet">▸</span>
                  <span>Обучение</span>
                </div>
                <div class="service-item">
                  <span class="service-bullet">▸</span>
                  <span>Разработка сайтов</span>
                </div>
                <div class="service-item">
                  <span class="service-bullet">▸</span>
                  <span>Автоматизация</span>
                </div>
              </div>

              <a href="https://t.me/artemselifanov" target="_blank" class="hero-cta-button">
                <Send class="w-4 h-4" />
                <span>Обсудить проект</span>
              </a>
            </div>

            <!-- Нижний контейнер: Соцсети -->
            <div class="hero-social-card">
              <button @click="toggleSocials" class="social-title-button">
                <h2 class="social-title text-sm font-semibold text-gray-400 uppercase tracking-wider">Соцсети</h2>
                <ChevronDown :class="['w-4 h-4 text-gray-400 transition-transform', isSocialsOpen ? 'rotate-180' : '']" />
              </button>
              
              <!-- Плашки с соцсетями - плитка -->
              <div v-show="isSocialsOpen" class="social-grid-wrapper" :class="{ 'social-grid-open': isSocialsOpen }">
                <div class="social-grid">
                  <a href="https://set.ki/ecaPSPa" target="_blank" class="social-grid-item" title="Сетка" :style="{ '--dock-color': '#8b5cf6' }">
                    <span class="grid-label">Сетка</span>
                  </a>
                  <a href="https://tenchat.ru/artselifanov" target="_blank" class="social-grid-item" title="Тенчат" :style="{ '--dock-color': '#dc2626' }">
                    <span class="grid-label">Тенчат</span>
                  </a>
                  <a href="https://dzen.ru/artselifanov" target="_blank" class="social-grid-item" title="Дзен" :style="{ '--dock-color': '#1a1a1a' }">
                    <span class="grid-label">Дзен</span>
                  </a>
                  <a href="https://t.me/funnetworking" target="_blank" class="social-grid-item" title="Телеграм: Нескучный Нетворкинг" :style="{ '--dock-color': '#ffffff' }">
                    <span class="grid-label">Нетворкинг</span>
                  </a>
                  <a href="https://t.me/bussinessetka" target="_blank" class="social-grid-item" title="Телеграм: Бизнес Сетка" :style="{ '--dock-color': '#a855f7' }">
                    <span class="grid-label">Бизнес Сетка</span>
                  </a>
                  <a href="https://t.me/artselifanov" target="_blank" class="social-grid-item" title="Телеграм: Артем, говорит" :style="{ '--dock-color': '#3b82f6' }">
                    <span class="grid-label">Артем, говорит</span>
                  </a>
                  <a href="https://vkontakte.ru/karelbusiness" target="_blank" class="social-grid-item" title="Вконтакте" :style="{ '--dock-color': '#0077FF' }">
                    <span class="grid-label">ВК</span>
                  </a>
                  <a href="https://www.instagram.com/artselifanov" target="_blank" class="social-grid-item" title="Инстаграм" :style="{ '--dock-color': '#e4405f' }">
                    <span class="grid-label">Insta</span>
                  </a>
                  <a href="https://youtube.com/@artemselifanov?si=H5NozCKrxIhTGmRa" target="_blank" class="social-grid-item" title="Ютуб" :style="{ '--dock-color': '#ff0000' }">
                    <span class="grid-label">YouTube</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <!-- Правая колонка: Фото + Компетенции -->
          <div class="hero-right-column">
            <!-- Фотография -->
            <div class="hero-photo-container">
              <div class="hero-photo-wrapper">
                <div class="hero-photo">
                  <img src="/reference/main.jpg" alt="Артём Селифанов" class="hero-photo-img" />
                </div>
                <!-- Градиентная обводка -->
                <div class="hero-photo-gradient-border"></div>
              </div>
            </div>

            <!-- Компетенции -->
            <div class="hero-competencies">
              <div class="competencies-grid">
                <div class="competency-card">
                  <Monitor class="w-5 h-5" />
                  <span>Веб-разработка</span>
                </div>
                <div class="competency-card">
                  <Smartphone class="w-5 h-5" />
                  <span>Мобильные приложения</span>
                </div>
                <div class="competency-card">
                  <Bot class="w-5 h-5" />
                  <span>AI-интеграции</span>
                </div>
                <div class="competency-card">
                  <Megaphone class="w-5 h-5" />
                  <span>Контент-маркетинг</span>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>

    <!-- Навигационные карточки (Bento Grid) -->
    <section id="projects" class="py-16 px-6">
      <div class="max-w-7xl mx-auto">
        <h2 class="text-3xl font-bold text-white mb-8">Медиа Хаб Артёма Селифанова</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <!-- 1. Личный бренд и соцсети - большая карточка -->
          <a
            href="/website1/blog"
            class="card card-brand group md:col-span-2"
            data-card-color="#8b5cf6"
          >
            <div class="card-gradient-corner"></div>
            <div class="card-icon">
              <Megaphone class="w-8 h-8" />
            </div>
            <div class="card-content">
              <h3 class="card-title">Личный бренд и соцсети</h3>
              <p class="card-description">Продвижение и контент</p>
              <div class="card-stats">
                <span class="stat-badge">10+ платформ</span>
              </div>
              <div class="card-preview">
                <p class="preview-text">Ведение и развитие личного бренда в социальных сетях</p>
              </div>
            </div>
            <div class="card-arrow">
              <ArrowRight class="w-6 h-6" />
            </div>
          </a>

          <!-- 2. Обучение - маленькая карточка -->
          <a
            href="/website1/test"
            class="card card-education group"
            data-card-color="#22c55e"
          >
            <div class="card-gradient-corner"></div>
            <div class="card-icon">
              <GraduationCap class="w-8 h-8" />
            </div>
            <div class="card-content">
              <h3 class="card-title">Обучение</h3>
              <p class="card-description">Курсы и материалы</p>
              <div class="card-stats">
                <span class="stat-badge">Онлайн</span>
              </div>
            </div>
            <div class="card-arrow">
              <ArrowRight class="w-6 h-6" />
            </div>
          </a>

          <!-- 3. Веб-разработка - большая карточка -->
          <a
            href="/website1/blog/razrabotka-veb-prilozheniy"
            class="card card-webdev group md:col-span-3"
            data-card-color="#06b6d4"
          >
            <div class="card-gradient-corner"></div>
            <div class="card-icon">
              <Code2 class="w-8 h-8" />
            </div>
            <div class="card-content">
              <h3 class="card-title">Веб-разработка</h3>
              <p class="card-description">Сайты и веб-приложения под ключ</p>
              <div class="card-cta">
                <span class="cta-text">Заказать проект</span>
                <ArrowRight class="w-5 h-5" />
              </div>
            </div>
            <div class="card-arrow">
              <ArrowRight class="w-6 h-6" />
            </div>
          </a>

          <!-- 4. Обо мне - большая карточка -->
          <a
            href="/website1/"
            class="card card-about group md:col-span-2"
            data-card-color="#ec4899"
          >
            <div class="card-gradient-corner"></div>
            <div class="card-icon">
              <User class="w-8 h-8" />
            </div>
            <div class="card-content">
              <h3 class="card-title">Обо мне</h3>
              <p class="card-description">Услуги и опыт работы</p>
              <div class="card-cta">
                <span class="cta-text">Познакомиться ближе</span>
                <ArrowRight class="w-5 h-5" />
              </div>
            </div>
            <div class="card-arrow">
              <ArrowRight class="w-6 h-6" />
            </div>
          </a>

          <!-- 5. Проекты - маленькая карточка -->
          <a
            href="/website1/demo"
            class="card card-projects group"
            data-card-color="#3b82f6"
          >
            <div class="card-gradient-corner"></div>
            <div class="card-icon">
              <Rocket class="w-8 h-8" />
            </div>
            <div class="card-content">
              <h3 class="card-title">Проекты</h3>
              <p class="card-description">Демо работ</p>
              <div class="card-stats">
                <span class="stat-badge">5 проектов</span>
              </div>
            </div>
            <div class="card-arrow">
              <ArrowRight class="w-6 h-6" />
            </div>
          </a>
        </div>
      </div>
    </section>

    <!-- Путь клиента -->
    <section id="journey" class="py-16 px-6 relative">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">Путь к вашему успеху</h2>
          <p class="text-gray-400 text-lg max-w-2xl mx-auto">
            От первой идеи до готового продукта — я сопровождаю вас на каждом этапе
          </p>
        </div>

        <!-- Timeline -->
        <div class="journey-timeline">
          <!-- Этап 1: Идея и стратегия -->
          <div class="journey-stage" data-stage="1">
            <div class="stage-marker">
              <span class="stage-number">1</span>
            </div>
            <div class="stage-card">
              <div class="stage-icon-wrapper">
                <Target class="w-8 h-8" />
              </div>
              <h3 class="stage-title">Идея и стратегия</h3>
              <p class="stage-description">
                Анализ ниши, изучение аудитории, позиционирование и стратегический план развития вашего проекта
              </p>
              <ul class="stage-list">
                <li>📊 Анализ рынка и конкурентов</li>
                <li>🎯 Определение целевой аудитории</li>
                <li>💡 Разработка концепции проекта</li>
                <li>📋 Дорожная карта реализации</li>
              </ul>
              <a href="https://t.me/artemselifanov" target="_blank" class="stage-cta">
                Обсудить идею
                <ArrowRight class="w-4 h-4" />
              </a>
            </div>
          </div>

          <!-- Этап 2: Контент и блог -->
          <div class="journey-stage" data-stage="2">
            <div class="stage-marker">
              <span class="stage-number">2</span>
            </div>
            <div class="stage-card">
              <div class="stage-icon-wrapper">
                <PenTool class="w-8 h-8" />
              </div>
              <h3 class="stage-title">Контент и личный бренд</h3>
              <p class="stage-description">
                Создание контента, развитие личного бренда и присутствие в социальных сетях
              </p>
              <ul class="stage-list">
                <li>✍️ Контент-стратегия для соцсетей</li>
                <li>📱 Ведение Telegram, VK, Дзен</li>
                <li>🎨 Визуальная идентификация</li>
                <li>📈 Продвижение личного бренда</li>
              </ul>
              <a href="https://t.me/artemselifanov" target="_blank" class="stage-cta">
                Начать вести блог
                <ArrowRight class="w-4 h-4" />
              </a>
            </div>
          </div>

          <!-- Этап 3: Веб-сайт -->
          <div class="journey-stage" data-stage="3">
            <div class="stage-marker">
              <span class="stage-number">3</span>
            </div>
            <div class="stage-card">
              <div class="stage-icon-wrapper">
                <Monitor class="w-8 h-8" />
              </div>
              <h3 class="stage-title">Веб-сайт или сервис</h3>
              <p class="stage-description">
                Разработка современного, быстрого и удобного сайта или веб-приложения
              </p>
              <ul class="stage-list">
                <li>🌐 Лендинги и корпоративные сайты</li>
                <li>🛒 Интернет-магазины</li>
                <li>⚙️ Веб-сервисы и платформы</li>
                <li>🎨 UI/UX дизайн и вёрстка</li>
              </ul>
              <a href="/website1/blog/razrabotka-veb-prilozheniy" class="stage-cta">
                Заказать сайт
                <ArrowRight class="w-4 h-4" />
              </a>
            </div>
          </div>

          <!-- Этап 4: Мобильное приложение -->
          <div class="journey-stage" data-stage="4">
            <div class="stage-marker">
              <span class="stage-number">4</span>
            </div>
            <div class="stage-card">
              <div class="stage-icon-wrapper">
                <Smartphone class="w-8 h-8" />
              </div>
              <h3 class="stage-title">Мобильное приложение</h3>
              <p class="stage-description">
                Нативные или кроссплатформенные приложения для iOS и Android
              </p>
              <ul class="stage-list">
                <li>📱 iOS и Android приложения</li>
                <li>🔄 Кроссплатформенная разработка</li>
                <li>🎯 Интеграция с веб-сервисами</li>
                <li>📊 Публикация в сторах</li>
              </ul>
              <a href="https://t.me/artemselifanov" target="_blank" class="stage-cta">
                Создать приложение
                <ArrowRight class="w-4 h-4" />
              </a>
            </div>
          </div>

          <!-- Этап 5: AI-автоматизация -->
          <div class="journey-stage" data-stage="5">
            <div class="stage-marker">
              <span class="stage-number">5</span>
            </div>
            <div class="stage-card">
              <div class="stage-icon-wrapper">
                <Bot class="w-8 h-8" />
              </div>
              <h3 class="stage-title">AI и автоматизация</h3>
              <p class="stage-description">
                Внедрение искусственного интеллекта для автоматизации процессов
              </p>
              <ul class="stage-list">
                <li>🤖 Чат-боты и виртуальные ассистенты</li>
                <li>🧠 AI-интеграции (Gemini, GPT)</li>
                <li>⚡ Автоматизация рутины</li>
                <li>📊 Анализ данных и отчёты</li>
              </ul>
              <a href="https://t.me/artemselifanov" target="_blank" class="stage-cta">
                Автоматизировать процессы
                <ArrowRight class="w-4 h-4" />
              </a>
            </div>
          </div>

          <!-- Этап 6: Масштабирование -->
          <div class="journey-stage" data-stage="6">
            <div class="stage-marker">
              <span class="stage-number">6</span>
            </div>
            <div class="stage-card">
              <div class="stage-icon-wrapper">
                <Rocket class="w-8 h-8" />
              </div>
              <h3 class="stage-title">Масштабирование</h3>
              <p class="stage-description">
                Поддержка, развитие и масштабирование вашего проекта
              </p>
              <ul class="stage-list">
                <li>🔧 Техническая поддержка</li>
                <li>📈 Аналитика и оптимизация</li>
                <li>🚀 Запуск новых функций</li>
                <li>🌍 Выход на новые рынки</li>
              </ul>
              <a href="https://t.me/artemselifanov" target="_blank" class="stage-cta">
                Масштабировать проект
                <ArrowRight class="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Обо мне в цифрах -->
    <section class="py-16 px-6 relative">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">Обо мне в цифрах</h2>
          <p class="text-gray-400 text-lg">
            Факты, которые говорят сами за себя
          </p>
        </div>

        <div class="stats-grid">
          <div class="stat-card">
            <div class="stat-icon-wrapper">
              <Calendar class="w-8 h-8" />
            </div>
            <div class="stat-value" data-target="8">0</div>
            <div class="stat-label">лет опыта</div>
          </div>

          <div class="stat-card">
            <div class="stat-icon-wrapper">
              <FolderCheck class="w-8 h-8" />
            </div>
            <div class="stat-value" data-target="50">0</div>
            <div class="stat-label">проектов завершено</div>
          </div>

          <div class="stat-card">
            <div class="stat-icon-wrapper">
              <Users class="w-8 h-8" />
            </div>
            <div class="stat-value" data-target="30">0</div>
            <div class="stat-label">довольных клиентов</div>
          </div>

          <div class="stat-card">
            <div class="stat-icon-wrapper">
              <Coffee class="w-8 h-8" />
            </div>
            <div class="stat-value" data-target="1000">0</div>
            <div class="stat-label">чашек кофе ☕</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Футер -->
    <footer class="py-12 px-6 border-t border-white/10">
      <div class="max-w-7xl mx-auto">
        <div class="flex flex-col md:flex-row justify-between items-center gap-6">
          <div class="text-center md:text-left">
            <p class="text-white font-bold text-lg mb-1">Артём Селифанов</p>
            <p class="text-gray-500 text-sm">© 2026 Все права защищены</p>
          </div>
          
          <div class="flex gap-6">
            <a href="https://t.me/artemselifanov" target="_blank" class="text-gray-400 hover:text-white transition-all">
              Telegram
            </a>
            <a href="https://github.com/artemselifanov" target="_blank" class="text-gray-400 hover:text-white transition-all">
              GitHub
            </a>
            <a href="mailto:artemselifanov23@gmail.com" class="text-gray-400 hover:text-white transition-all">
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { articles } from '~/data/blog.js'
import {
  Menu, X, Send, Mail, ArrowRight, FileText, Rocket,
  FlaskConical, User, Monitor, Clock, Smartphone, Code2, Globe, Bot,
  Link, Briefcase, Newspaper, Users, Network, PenTool, BookOpen, Camera, Youtube, Video, MapPin,
  Megaphone, GraduationCap, Target, Calendar, FolderCheck, Coffee, ChevronDown
} from 'lucide-vue-next'

const config = useRuntimeConfig()
const baseURL = config.app.baseURL

const isMobileMenuOpen = ref(false)
const cursorDot = ref(null)
const isSocialsOpen = ref(false)

function toggleSocials() {
  isSocialsOpen.value = !isSocialsOpen.value
}

// Пункты мобильного меню
const mobileMenuItems = [
  { href: '#about', label: 'Обо мне' },
  { href: '#projects', label: 'Медиа Хаб' },
  { href: '#journey', label: 'Путь клиента' },
  { href: '/website1/', label: 'Услуги' },
  { href: 'https://t.me/artemselifanov', label: 'Связаться' }
]

// Сортируем статьи по дате (новые первыми)
const sortedArticles = computed(() => {
  return [...articles].sort((a, b) => new Date(b.date) - new Date(a.date))
})

// Последние 6 статей для ленты
const recentArticles = computed(() => {
  return sortedArticles.value.slice(0, 6)
})

// Инициализация эффектов
onMounted(() => {
  // Кастомный курсор - точка
  if (cursorDot.value) {
    window.addEventListener('mousemove', (e) => {
      cursorDot.value.style.left = `${e.clientX}px`
      cursorDot.value.style.top = `${e.clientY}px`
    })
  }

  // Параллакс эффект для имени
  const parallaxElements = document.querySelectorAll('[data-parallax="true"]')
  if (parallaxElements.length) {
    window.addEventListener('mousemove', (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20
      const y = (e.clientY / window.innerHeight - 0.5) * 20
      parallaxElements.forEach(el => {
        el.style.transform = `translate(${x}px, ${y}px)`
      })
    })
  }

  // Установка цветов для карточек
  const cards = document.querySelectorAll('.card')
  cards.forEach(card => {
    const color = card.getAttribute('data-card-color')
    if (color) {
      card.style.setProperty('--card-color', color)
    }
  })

  // Анимация счётчиков статистики
  const statValues = document.querySelectorAll('.stat-value')
  const animateStats = () => {
    statValues.forEach(stat => {
      const target = parseInt(stat.getAttribute('data-target'))
      const duration = 2000
      const increment = target / (duration / 16)
      let current = 0

      const updateCounter = () => {
        current += increment
        if (current < target) {
          stat.textContent = Math.floor(current)
          requestAnimationFrame(updateCounter)
        } else {
          stat.textContent = target
        }
      }

      updateCounter()
    })
  }

  // Запуск анимации при появлении в viewport
  const statsSection = document.querySelector('.stats-grid')
  if (statsSection) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateStats()
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.5 })

    observer.observe(statsSection)
  }

  // Параллакс звёзд от движения мыши
  const starsContainer = document.querySelector('.stars-container')
  if (starsContainer) {
    window.addEventListener('mousemove', (e) => {
      const x = e.clientX / window.innerWidth
      const y = e.clientY / window.innerHeight

      const starsLayers = starsContainer.querySelectorAll('.stars-layer')
      starsLayers.forEach((layer, index) => {
        const speed = (index + 1) * 10
        const xOffset = (x - 0.5) * speed
        const yOffset = (y - 0.5) * speed
        layer.style.transform = `translate(${xOffset}px, ${yOffset}px)`
      })
    })
  }
})

// Форматирование даты
function formatDateString(dateString) {
  if (!dateString) return ''
  const date = new Date(dateString)
  return date.toLocaleDateString('ru-RU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })
}

// Оценка времени чтения (примерно 200 слов в минуту)
function estimateReadingTime(content) {
  if (!content) return 1
  const words = content.replace(/<[^>]*>/g, '').split(/\s+/).length
  return Math.ceil(words / 200)
}

// Иконки для категорий
function getCategoryIcon(cluster) {
  const iconMap = {
    'mobilnye-prilozheniya': Smartphone,
    'veb-razrabotka': Monitor,
    'razrabotka-saytov': Code2,
    'sozdanie-saytov': Globe,
    'iskusstvennyy-intellekt': Bot
  }
  return iconMap[cluster] || FileText
}
</script>

<style>
/* ===== ФОНОВЫЕ ЭФФЕКТЫ ===== */
.gradient-orbs {
  position: absolute;
  inset: 0;
  overflow: hidden;
  z-index: 5;
}

.gradient-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(100px);
  opacity: 0.25;
  animation: float 25s ease-in-out infinite;
}

.gradient-orb-1 {
  width: 500px;
  height: 500px;
  background: linear-gradient(135deg, #8b5cf6, #a855f7);
  top: -150px;
  left: -150px;
  animation-delay: 0s;
}

.gradient-orb-2 {
  width: 400px;
  height: 400px;
  background: linear-gradient(135deg, #ec4899, #f43f5e);
  top: 40%;
  right: -100px;
  animation-delay: -8s;
}

.gradient-orb-3 {
  width: 450px;
  height: 450px;
  background: linear-gradient(135deg, #06b6d4, #3b82f6);
  bottom: -150px;
  left: 20%;
  animation-delay: -16s;
}

@keyframes float {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(50px, -50px) scale(1.1); }
  66% { transform: translate(-30px, 30px) scale(0.9); }
}

/* ===== ЗВЁЗДНОЕ НЕБО ===== */
.stars-container {
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
  z-index: 3;
}

.stars-layer {
  position: absolute;
  inset: 0;
  background-image:
    radial-gradient(2px 2px at 20px 30px, rgba(255,255,255,0.8), transparent),
    radial-gradient(2px 2px at 40px 70px, rgba(255,255,255,0.6), transparent),
    radial-gradient(1px 1px at 90px 40px, rgba(255,255,255,0.9), transparent),
    radial-gradient(2px 2px at 130px 80px, rgba(255,255,255,0.5), transparent),
    radial-gradient(1px 1px at 160px 120px, rgba(255,255,255,0.7), transparent),
    radial-gradient(2px 2px at 200px 50px, rgba(255,255,255,0.8), transparent),
    radial-gradient(1px 1px at 250px 100px, rgba(255,255,255,0.6), transparent),
    radial-gradient(2px 2px at 300px 150px, rgba(255,255,255,0.9), transparent),
    radial-gradient(1px 1px at 350px 200px, rgba(255,255,255,0.5), transparent),
    radial-gradient(2px 2px at 400px 90px, rgba(255,255,255,0.7), transparent),
    radial-gradient(1px 1px at 450px 180px, rgba(255,255,255,0.8), transparent),
    radial-gradient(2px 2px at 500px 250px, rgba(255,255,255,0.6), transparent),
    radial-gradient(1px 1px at 550px 300px, rgba(255,255,255,0.9), transparent),
    radial-gradient(2px 2px at 600px 120px, rgba(255,255,255,0.5), transparent),
    radial-gradient(1px 1px at 650px 220px, rgba(255,255,255,0.7), transparent),
    radial-gradient(2px 2px at 700px 80px, rgba(255,255,255,0.8), transparent),
    radial-gradient(1px 1px at 750px 160px, rgba(255,255,255,0.6), transparent),
    radial-gradient(2px 2px at 800px 200px, rgba(255,255,255,0.9), transparent),
    radial-gradient(1px 1px at 850px 280px, rgba(255,255,255,0.5), transparent),
    radial-gradient(2px 2px at 900px 140px, rgba(255,255,255,0.7), transparent);
  background-repeat: repeat;
  background-size: 1000px 400px;
  animation: twinkle 8s ease-in-out infinite;
}

.stars-1 {
  opacity: 0.3;
  animation-duration: 12s;
}

.stars-2 {
  opacity: 0.5;
  animation-duration: 16s;
  animation-delay: -4s;
  background-size: 800px 300px;
}

.stars-3 {
  opacity: 0.4;
  animation-duration: 20s;
  animation-delay: -8s;
  background-size: 1200px 500px;
}

@keyframes twinkle {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 0.6; }
}

/* ===== КАСТОМНЫЙ КУРСОР ===== */
.cursor-dot {
  position: fixed;
  width: 8px;
  height: 8px;
  background: #a78bfa;
  border-radius: 50%;
  pointer-events: none;
  z-index: 10000;
  transform: translate(-50%, -50%);
  mix-blend-mode: difference;
}

</style>

<style scoped>
/* ===== HERO СЕКЦИЯ - BENTO GRID ===== */
.hero-bento-grid {
  display: grid;
  grid-template-columns: 1fr 400px;
  gap: 2rem;
  align-items: start;
}

.hero-left-column {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  text-align: left;
}

/* Контейнер информации */
.hero-info-card {
  position: relative;
  background: rgba(15, 15, 20, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 1.5rem;
  padding: 2rem;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  overflow: hidden;
}

.hero-info-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100px;
  height: 100px;
  background: radial-gradient(circle, rgba(139, 92, 246, 0.15), transparent 70%);
  border-radius: 0 0 100% 0;
  pointer-events: none;
}

.hero-info-card:hover {
  border-color: rgba(139, 92, 246, 0.2);
  box-shadow: 0 0 40px rgba(139, 92, 246, 0.1);
}

.hero-info-header {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}

.hero-info-card .hero-role {
  line-height: 1.4;
}

.hero-info-card .hero-location {
  font-size: 0.875rem;
}

.hero-info-card .hero-headline {
  line-height: 1.2;
  margin-bottom: 1rem;
}

.hero-info-card .hero-description {
  line-height: 1.6;
  color: #d4d4d4;
}

/* Список услуг */
.hero-services-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
}

.service-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #e5e5e5;
  font-size: 0.875rem;
}

.service-bullet {
  color: #a78bfa;
  font-size: 0.75rem;
  flex-shrink: 0;
}

/* Кнопка CTA */
.hero-cta-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1.25rem;
  padding: 0.625rem 1.25rem;
  background: linear-gradient(135deg, rgba(139, 92, 246, 0.9), rgba(168, 85, 247, 0.9));
  border: none;
  border-radius: 0.75rem;
  color: white;
  font-weight: 600;
  font-size: 0.8125rem;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 16px rgba(139, 92, 246, 0.3);
  width: auto;
}

.hero-cta-button:hover {
  background: linear-gradient(135deg, rgba(139, 92, 246, 1), rgba(168, 85, 247, 1));
  box-shadow: 0 6px 20px rgba(139, 92, 246, 0.5);
  transform: translateY(-2px);
}

.hero-cta-button svg {
  width: 1rem;
  height: 1rem;
  transition: transform 0.3s ease;
}

.hero-cta-button:hover svg {
  transform: translateX(3px);
}

/* Контейнер соцсетей */
.hero-social-card {
  position: relative;
  background: rgba(15, 15, 20, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 1.5rem;
  padding: 1.5rem;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  overflow: hidden;
}

.hero-social-card::before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  width: 80px;
  height: 80px;
  background: radial-gradient(circle, rgba(236, 72, 153, 0.12), transparent 70%);
  border-radius: 0 0 0 100%;
  pointer-events: none;
}

.hero-social-card:hover {
  border-color: rgba(139, 92, 246, 0.2);
  box-shadow: 0 0 40px rgba(139, 92, 246, 0.1);
}

/* Кнопка заголовка соцсетей */
.social-title-button {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0.5rem 0;
  margin-bottom: 0.75rem;
  background: transparent;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
}

.social-title-button:hover {
  opacity: 0.8;
}

.social-title-button h2 {
  margin: 0;
  padding: 0;
  font-size: 0.875rem;
  font-weight: 600;
  color: #9ca3af;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.hero-right-column {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

/* Фотография */
.hero-photo-container {
  width: 100%;
  position: relative;
}

.hero-photo-wrapper {
  position: relative;
  border-radius: 1.5rem;
  overflow: hidden;
  background: linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(236, 72, 153, 0.2));
  padding: 3px;
}

.hero-photo {
  position: relative;
  border-radius: 1.5rem;
  overflow: hidden;
  background: rgba(15, 15, 20, 0.8);
}

.hero-photo-img {
  width: 100%;
  height: auto;
  display: block;
  aspect-ratio: 4/5;
  object-fit: cover;
}

.hero-photo-gradient-border {
  position: absolute;
  inset: 0;
  border-radius: 1.5rem;
  box-shadow: 
    inset 0 0 60px rgba(139, 92, 246, 0.3),
    0 0 40px rgba(139, 92, 246, 0.2);
  pointer-events: none;
}

/* Компетенции */
.hero-competencies {
  width: 100%;
}

.competencies-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.75rem;
}

.competency-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;
  background: rgba(15, 15, 20, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 0.75rem;
  transition: all 0.3s ease;
  cursor: default;
}

.competency-card:hover {
  border-color: rgba(139, 92, 246, 0.3);
  box-shadow: 0 8px 24px rgba(139, 92, 246, 0.1);
  transform: translateY(-2px);
}

.competency-card svg {
  color: #a78bfa;
  transition: all 0.3s ease;
}

.competency-card:hover svg {
  color: #c084fc;
  transform: scale(1.1);
}

.competency-card span {
  color: #e5e5e5;
  font-size: 0.75rem;
  font-weight: 500;
  text-align: center;
}

/* Правая колонка - стили текста */
.hero-role {
  line-height: 1.4;
}

.hero-location {
  font-size: 0.875rem;
}

.hero-headline {
  line-height: 1.2;
}

.hero-description {
  line-height: 1.6;
}

/* Соцсети */
.social-title-wrapper {
  margin-top: 1rem;
}

.social-title {
  font-size: 0.875rem;
  font-weight: 700;
  color: #9ca3af;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.75rem;
}

.social-grid-wrapper {
  width: 100%;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  max-height: 0;
  opacity: 0;
}

.social-grid-wrapper.social-grid-open {
  max-height: 500px;
  opacity: 1;
}

.social-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 0.375rem;
  justify-content: flex-start;
}

.social-grid-item {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 0.75rem;
  background: rgba(15, 15, 20, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 0.375rem;
  transition: all 0.3s ease;
  text-decoration: none;
  position: relative;
  overflow: hidden;
  min-height: 38px;
  width: auto;
  cursor: pointer;
}

.social-grid-item::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, var(--dock-color, rgba(139, 92, 246, 0.15)), transparent);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.social-grid-item:hover::before {
  opacity: 1;
}

.social-grid-item:hover {
  border-color: var(--dock-color, rgba(139, 92, 246, 0.5));
  transform: translateY(-1px);
  box-shadow: 0 4px 16px var(--dock-color, rgba(139, 92, 246, 0.2));
}

/* Дзен - чёрный */
.social-grid-item[style*="--dock-color: #1a1a1a"] {
  background: rgba(30, 30, 30, 0.8);
}
.social-grid-item[style*="--dock-color: #1a1a1a"]:hover {
  border-color: rgba(0, 0, 0, 0.6);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
  background: rgba(10, 10, 10, 0.9);
}
.social-grid-item[style*="--dock-color: #1a1a1a"] .grid-label {
  color: #9ca3af;
}
.social-grid-item[style*="--dock-color: #1a1a1a"]:hover .grid-label {
  color: #ffffff;
}

/* Нетворкинг - белый */
.social-grid-item[style*="--dock-color: #ffffff"]:hover {
  border-color: rgba(255, 255, 255, 0.6);
  box-shadow: 0 4px 16px rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.1);
}
.social-grid-item[style*="--dock-color: #ffffff"]:hover .grid-label {
  color: #ffffff;
}

.grid-label {
  position: relative;
  z-index: 1;
  color: #e5e5e5;
  font-size: 0.65rem;
  font-weight: 600;
  text-align: center;
  white-space: nowrap;
}

/* ===== КНОПКИ ДЕЙСТВИЙ ===== */
.magnetic-btn {
  position: relative;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.magnetic-btn::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(255,255,255,0.1), transparent);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.magnetic-btn:hover::before {
  opacity: 1;
}

.magnetic-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 24px rgba(139, 92, 246, 0.3);
}

/* Карточки */
.card {
  position: relative;
  background: rgba(15, 15, 20, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 1.5rem;
  padding: 2rem;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

/* Градиентный уголок */
.card-gradient-corner {
  position: absolute;
  top: 0;
  right: 0;
  width: 120px;
  height: 120px;
  background: radial-gradient(circle at top right, var(--card-color, rgba(139, 92, 246, 0.3)), transparent 70%);
  opacity: 0.5;
  transition: all 0.4s ease;
  pointer-events: none;
}

.card:hover .card-gradient-corner {
  opacity: 1;
  transform: scale(1.2);
}

.card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, transparent, var(--card-color, rgba(139, 92, 246, 0.5)), transparent);
  transform: scaleX(0);
  transition: transform 0.4s ease;
}

.card:hover {
  transform: translateY(-12px) scale(1.02);
  border-color: var(--card-color, rgba(139, 92, 246, 0.3));
  box-shadow: 0 24px 48px rgba(0, 0, 0, 0.5), 0 0 40px var(--card-color, rgba(139, 92, 246, 0.2));
}

.card:hover::before {
  transform: scaleX(1);
}

.card-icon {
  width: 64px;
  height: 64px;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.card-brand .card-icon {
  background: linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(139, 92, 246, 0.1));
  color: #a78bfa;
}

.card-education .card-icon {
  background: linear-gradient(135deg, rgba(34, 197, 94, 0.2), rgba(34, 197, 94, 0.1));
  color: #4ade80;
}

.card-webdev .card-icon {
  background: linear-gradient(135deg, rgba(6, 182, 212, 0.2), rgba(6, 182, 212, 0.1));
  color: #22d3ee;
}

.card-about .card-icon {
  background: linear-gradient(135deg, rgba(236, 72, 153, 0.2), rgba(236, 72, 153, 0.1));
  color: #f472b6;
}

.card-projects .card-icon {
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(59, 130, 246, 0.1));
  color: #60a5fa;
}

.card:hover .card-icon {
  transform: scale(1.1) rotate(5deg);
}

.card-content {
  flex: 1;
}

.card-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
  margin-bottom: 0.5rem;
}

.card-description {
  color: #9ca3af;
  font-size: 0.95rem;
  line-height: 1.5;
}

.card-stats {
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;
}

.stat-badge {
  display: inline-block;
  padding: 0.375rem 0.75rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 9999px;
  font-size: 0.875rem;
  color: #d1d5db;
}

.card-preview {
  margin-top: 1rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.02);
  border-radius: 0.75rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.preview-text {
  color: #9ca3af;
  font-size: 0.875rem;
  line-height: 1.5;
}

.card-cta {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1.5rem;
  padding: 0.75rem 1.25rem;
  background: rgba(139, 92, 246, 0.1);
  border: 1px solid rgba(139, 92, 246, 0.3);
  border-radius: 0.75rem;
  color: #c084fc;
  font-weight: 600;
  font-size: 0.95rem;
  transition: all 0.3s ease;
}

.card:hover .card-cta {
  background: rgba(139, 92, 246, 0.2);
  border-color: rgba(139, 92, 246, 0.5);
}

.card-arrow {
  position: absolute;
  top: 2rem;
  right: 2rem;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #9ca3af;
  opacity: 0;
  transform: translateX(-10px);
  transition: all 0.3s ease;
}

.card:hover .card-arrow {
  opacity: 1;
  transform: translateX(0);
  background: rgba(139, 92, 246, 0.2);
  color: #c084fc;
}

/* Карточки блога */
.blog-post-card {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 1.25rem;
  padding: 1.5rem;
  transition: all 0.3s ease;
}

.blog-post-card:hover {
  background: rgba(255, 255, 255, 0.03);
  border-color: rgba(139, 92, 246, 0.3);
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3);
}

.blog-post-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.blog-post-category {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.375rem 0.75rem;
  background: rgba(139, 92, 246, 0.1);
  border: 1px solid rgba(139, 92, 246, 0.2);
  border-radius: 9999px;
  font-size: 0.875rem;
  color: #c084fc;
  font-weight: 500;
}

.blog-post-time {
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  font-size: 0.875rem;
  color: #6b7280;
}

.blog-post-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: white;
  margin-bottom: 0.75rem;
  line-height: 1.4;
}

.blog-post-description {
  color: #9ca3af;
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 1rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.blog-post-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
}

.blog-post-date {
  font-size: 0.875rem;
  color: #6b7280;
}

.blog-post-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: #a78bfa;
  font-weight: 600;
  font-size: 0.95rem;
  transition: all 0.3s ease;
}

.blog-post-link:hover {
  color: #c084fc;
}

/* Адаптив */
@media (max-width: 1024px) {
  .hero-bento-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .hero-right-column {
    max-width: 400px;
    margin: 0 auto;
    order: -1; /* Фото сверху на планшетах */
  }

  .hero-photo-container {
    margin-bottom: 0;
  }

  .hero-photo-img {
    aspect-ratio: 4/5;
  }

  .hero-info-card {
    padding: 1.5rem;
  }

  .hero-social-card {
    padding: 1.25rem;
  }
}

@media (max-width: 768px) {
  /* Скрываем кастомный курсор на мобильных */
  .cursor-dot {
    display: none;
  }

  /* Hero секция */
  .hero-bento-grid {
    gap: 1.5rem;
  }

  .hero-left-column {
    max-width: 100%;
  }

  .hero-right-column {
    max-width: 100%;
  }

  .hero-photo-img {
    aspect-ratio: 4/5;
  }

  .hero-info-card {
    padding: 1.25rem;
  }

  .hero-info-header {
    margin-bottom: 1rem;
    padding-bottom: 1rem;
  }

  .hero-info-card .hero-headline {
    font-size: 1.25rem;
  }

  .hero-info-card .hero-description {
    font-size: 0.9rem;
  }

  .hero-info-card .hero-role {
    font-size: 0.875rem !important;
  }

  .hero-services-list {
    gap: 0.375rem;
    margin-top: 0.75rem;
    padding-top: 0.75rem;
  }

  .service-item {
    font-size: 0.8rem;
  }

  .service-bullet {
    font-size: 0.7rem;
  }

  .hero-social-card {
    padding: 1rem;
  }

  .hero-cta-button {
    padding: 0.625rem 1.25rem;
    font-size: 0.8125rem;
  }

  .social-title-button {
    margin-bottom: 0.5rem;
  }

  .social-title-button h2 {
    font-size: 0.8125rem;
  }

  .social-grid-wrapper.social-grid-open {
    max-height: 500px;
  }

  .social-grid {
    gap: 0.25rem;
  }

  .social-grid-item {
    padding: 0.375rem 0.625rem;
    min-height: 34px;
  }

  .grid-label {
    font-size: 0.6rem;
  }

  /* Карточки */
  .card {
    padding: 1.5rem;
  }

  .card-title {
    font-size: 1.25rem;
  }

  .blog-post-card {
    padding: 1.25rem;
  }

  .blog-post-title {
    font-size: 1.125rem;
  }
}

/* Очень маленькие экраны */
@media (max-width: 480px) {
  .hero-headline {
    font-size: 1.125rem;
  }
}

/* ===== ПУТЬ КЛИЕНТА (TIMELINE) ===== */
.journey-timeline {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.journey-timeline::before {
  content: '';
  position: absolute;
  left: 40px;
  top: 60px;
  bottom: 60px;
  width: 2px;
  background: linear-gradient(180deg, rgba(139, 92, 246, 0.5), rgba(236, 72, 153, 0.5));
  border-radius: 2px;
}

.journey-stage {
  position: relative;
  display: flex;
  gap: 1.5rem;
  align-items: flex-start;
}

.stage-marker {
  flex-shrink: 0;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(139, 92, 246, 0.1));
  border: 2px solid rgba(139, 92, 246, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  transition: all 0.3s ease;
}

.journey-stage:hover .stage-marker {
  border-color: rgba(139, 92, 246, 0.8);
  box-shadow: 0 0 30px rgba(139, 92, 246, 0.4);
  transform: scale(1.05);
}

.stage-number {
  font-size: 1.75rem;
  font-weight: 700;
  background: linear-gradient(135deg, #a78bfa, #c084fc);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.stage-card {
  flex: 1;
  background: rgba(15, 15, 20, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 1.5rem;
  padding: 2rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.stage-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, transparent, rgba(139, 92, 246, 0.5), transparent);
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.journey-stage:hover .stage-card::before {
  transform: scaleX(1);
}

.journey-stage:hover .stage-card {
  border-color: rgba(139, 92, 246, 0.3);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4);
  transform: translateX(8px);
}

.stage-icon-wrapper {
  width: 56px;
  height: 56px;
  border-radius: 1rem;
  background: linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(139, 92, 246, 0.1));
  display: flex;
  align-items: center;
  justify-content: center;
  color: #a78bfa;
  margin-bottom: 1.5rem;
  transition: all 0.3s ease;
}

.journey-stage:hover .stage-icon-wrapper {
  transform: scale(1.1) rotate(5deg);
  background: linear-gradient(135deg, rgba(139, 92, 246, 0.3), rgba(139, 92, 246, 0.2));
}

.stage-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
  margin-bottom: 0.75rem;
}

.stage-description {
  color: #9ca3af;
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1.25rem;
}

.stage-list {
  list-style: none;
  padding: 0;
  margin: 0 0 1.5rem 0;
}

.stage-list li {
  color: #d1d5db;
  font-size: 0.9rem;
  padding: 0.5rem 0;
  padding-left: 1.5rem;
  position: relative;
}

.stage-list li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 6px;
  height: 6px;
  background: rgba(139, 92, 246, 0.6);
  border-radius: 50%;
}

.stage-cta {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: rgba(139, 92, 246, 0.1);
  border: 1px solid rgba(139, 92, 246, 0.3);
  border-radius: 0.75rem;
  color: #a78bfa;
  font-weight: 600;
  font-size: 0.9rem;
  text-decoration: none;
  transition: all 0.3s ease;
}

.stage-cta:hover {
  background: rgba(139, 92, 246, 0.2);
  border-color: rgba(139, 92, 246, 0.5);
  color: #c084fc;
  transform: translateY(-2px);
}

/* Адаптив для timeline */
@media (max-width: 768px) {
  .journey-timeline::before {
    left: 30px;
  }

  .stage-marker {
    width: 60px;
    height: 60px;
  }

  .stage-number {
    font-size: 1.25rem;
  }

  .stage-card {
    padding: 1.5rem;
  }

  .stage-title {
    font-size: 1.25rem;
  }

  .stage-icon-wrapper {
    width: 48px;
    height: 48px;
  }
}

/* ===== СТАТИСТИКА ===== */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
}

.stat-card {
  background: rgba(15, 15, 20, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 1.5rem;
  padding: 2rem;
  text-align: center;
  transition: all 0.3s ease;
}

.stat-card:hover {
  border-color: rgba(139, 92, 246, 0.3);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4);
  transform: translateY(-8px);
}

.stat-icon-wrapper {
  width: 64px;
  height: 64px;
  margin: 0 auto 1.5rem;
  border-radius: 1rem;
  background: linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(139, 92, 246, 0.1));
  display: flex;
  align-items: center;
  justify-content: center;
  color: #a78bfa;
  transition: all 0.3s ease;
}

.stat-card:hover .stat-icon-wrapper {
  transform: scale(1.1) rotate(5deg);
  background: linear-gradient(135deg, rgba(139, 92, 246, 0.3), rgba(139, 92, 246, 0.2));
}

.stat-value {
  font-size: 3rem;
  font-weight: 900;
  background: linear-gradient(135deg, #a78bfa, #c084fc);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 0.5rem;
}

.stat-label {
  color: #9ca3af;
  font-size: 0.95rem;
  font-weight: 500;
}

/* Адаптив для статистики */
@media (max-width: 1024px) {
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }

  .stat-card {
    padding: 1.5rem;
  }

  .stat-value {
    font-size: 2.5rem;
  }

  .stat-icon-wrapper {
    width: 56px;
    height: 56px;
  }
}
</style>
