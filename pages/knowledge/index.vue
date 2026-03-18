<script setup>
import { ref, computed, onMounted } from 'vue'
import { BookOpen, Users, Clock, ArrowRight, Menu, X } from 'lucide-vue-next'
import { topics } from '~/data/knowledge/topics.js'
import Footer from '~/components/layout/Footer.vue'
import BaseMobileMenu from '~/components/layout/BaseMobileMenu.vue'

// SEO для страницы
useSeoMeta({
  title: 'База знаний Нескучный Нетворкинг — 220+ материалов по личному бренду и контенту',
  description: 'Структурированная база знаний из 220+ постов Telegram-канала «Нескучный Нетворкинг». 9 тем: контент-стратегия, личный бренд, платформы, продажи, мотивация, нетворкинг.',
  keywords: 'база знаний, личный бренд, контент-стратегия, продвижение в Telegram, блог эксперта, нетворкинг, Артем Селифанов',
  robots: 'index, follow',
  ogTitle: 'База знаний Нескучный Нетворкинг — 220+ материалов',
  ogDescription: 'Структурированная база знаний для авторов и экспертов. Найди ответ на свой вопрос.',
  ogType: 'website',
  ogUrl: 'https://artemselifanov.ru/knowledge',
  ogImage: 'https://artemselifanov.ru/reference/openGraph/knowledge.webp',
  twitterCard: 'summary_large_image',
  twitterTitle: 'База знаний Нескучный Нетворкинг',
  twitterDescription: '220+ постов → структурированные маршруты обучения',
  twitterImage: 'https://artemselifanov.ru/reference/opengraph_index.png'
})

useHead({
  link: [
    { rel: 'canonical', href: 'https://artemselifanov.ru/knowledge' }
  ]
})

// Schema.org разметка
useSchemaOrg([
  defineOrganization({
    name: 'Нескучный Нетворкинг',
    url: 'https://artemselifanov.ru/knowledge',
    description: 'База знаний для авторов и экспертов по личному бренду и контент-маркетингу'
  }),
  defineWebPage({
    '@type': 'WebPage',
    name: 'База знаний Нескучный Нетворкинг',
    description: '220+ постов Telegram-канала, структурированных по 9 темам с маршрутами обучения',
    url: 'https://artemselifanov.ru/knowledge'
  }),
  definePerson({
    name: 'Артём Селифанов',
    url: 'https://artemselifanov.ru',
    sameAs: ['https://t.me/artemselifanov'],
    jobTitle: 'Маркетолог, эксперт по личному бренду',
    description: 'Помогаю предпринимателям и экспертам развивать личный бренд через контент-маркетинг'
  })
])

const isMobileMenuOpen = ref(false)
const isScrolled = ref(false)

onMounted(() => {
  const handleScroll = () => {
    isScrolled.value = window.scrollY > 50
  }
  window.addEventListener('scroll', handleScroll)
  return () => window.removeEventListener('scroll', handleScroll)
})

// Статистика
const stats = [
  { value: '220+', label: 'МАТЕРИАЛОВ', icon: BookOpen },
  { value: '9', label: 'ТЕМ', icon: Users },
  { value: '∞', label: 'ПОПОЛНЯЕТСЯ РЕГУЛЯРНО', icon: Clock }
]

// Как пользоваться
const howToUse = [
  { step: '01', title: 'ВЫБЕРИ ТЕМУ', description: 'Найди интересующую тему в облаке выше' },
  { step: '02', title: 'ЧИТАЙ ПО ПОРЯДКУ', description: 'Посты идут от простого к сложному' },
  { step: '03', title: 'ИЗУЧАЙ СМЕЖНЫЕ ТЕМЫ', description: 'Один пост может быть в нескольких темах' },
  { step: '04', title: 'ВОЗВРАЩАЙСЯ', description: 'База пополняется новыми постами из Telegram' }
]

// Меню для хедера
const menuItems = [
  { href: '/networking', label: 'Нескучный Нетворкинг' },
  { href: '/business', label: 'Бизнес Сетка' },
  { href: '/yappie', label: 'Веб-разработка' },
  { href: '/blog', label: 'Блог' }
]

const mobileMenuItems = [
  { href: '/', label: 'Главная' },
  { href: '/networking', label: 'Нескучный Нетворкинг' },
  { href: '/business', label: 'Бизнес Сетка' },
  { href: '/yappie', label: 'Веб-разработка' },
  { href: '/blog', label: 'Блог' },
  { href: '/knowledge', label: 'База знаний' }
]
</script>

<template>
  <div class="min-h-screen bg-white">
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
              <img src="/reference/Vector.svg" alt="Нескучный Нетворкинг — логотип" class="h-10 w-auto" />
            </a>
          </div>

          <!-- Центральная зона: Десктопное меню (центрировано) -->
          <div class="hidden md:flex items-center justify-center flex-1">
            <nav class="flex items-center gap-1">
              <a href="/" class="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-white/50 rounded-lg transition-all">Главная</a>
              <a href="/networking" class="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-white/50 rounded-lg transition-all">Нескучный Нетворкинг</a>
              <a href="/business" class="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-white/50 rounded-lg transition-all">Бизнес Сетка</a>
              <a href="/yappie" class="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-white/50 rounded-lg transition-all">Веб-разработка</a>
              <a href="/blog" class="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-white/50 rounded-lg transition-all">Блог</a>
            </nav>
          </div>

          <!-- Правая зона: Кнопка -->
          <div class="hidden md:flex items-center justify-end shrink-0">
            <a href="https://t.me/artemselifanov" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white bg-[#EA6D3A] hover:bg-[#EA6D3A]/90 rounded-xl transition-all">
              <span>Связаться</span>
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

    <!-- Hero секция -->
    <section class="pt-24 md:pt-32 pb-12 md:pb-20 px-4 md:px-6 border-b-2 border-black">
      <div class="max-w-[1400px] mx-auto">
        <!-- Верхняя панель с мета-информацией -->
        <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8 md:mb-12 pb-4 border-b-2 border-black">
          <div class="text-xs">
            <span class="uppercase tracking-wider">ID ПРОЕКТА: БЗ-2026</span>
            <span class="mx-3">//</span>
            <span class="uppercase tracking-wider">ИНСТРУМЕНТЫ: TELEGRAM, AI, КОНТЕНТ</span>
          </div>
          <div class="text-xs uppercase tracking-wider">
            КЕЙС // 02
          </div>
        </div>

        <!-- Основной заголовок -->
        <div class="grid md:grid-cols-[2fr_1fr] gap-8 md:gap-12 items-start">
          <div>
            <div class="text-xs uppercase tracking-wider mb-2">БАЗА ЗНАНИЙ</div>
            <h1 class="text-3xl md:text-4xl lg:text-5xl font-black leading-[1.2] tracking-tight mb-6">
              Нескучный Нетворкинг — для тех, кто хочет учиться системно
            </h1>
            <p class="text-base md:text-lg text-gray-700 max-w-xl leading-relaxed">
              220+ постов из Telegram-канала, структурированных по 9 темам. Маршруты обучения от простого к сложному.
            </p>
          </div>

          <div class="md:pl-8 md:border-l-2 border-black">
            <div class="space-y-4">
              <div class="flex items-center gap-3">
                <BookOpen class="w-5 h-5 flex-shrink-0" />
                <span class="text-sm">220+ материалов</span>
              </div>
              <div class="flex items-center gap-3">
                <Users class="w-5 h-5 flex-shrink-0" />
                <span class="text-sm">9 тем</span>
              </div>
              <div class="flex items-center gap-3">
                <Clock class="w-5 h-5 flex-shrink-0" />
                <span class="text-sm">Пополняется регулярно</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Облако тем -->
    <section class="py-12 md:py-20 px-4 md:px-6 border-b-2 border-black">
      <div class="max-w-[1400px] mx-auto">
        <div class="text-xs uppercase tracking-wider mb-8">ТЕМЫ</div>
        
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <NuxtLink
            v-for="topic in topics"
            :key="topic.slug"
            :to="`/knowledge/${topic.slug}`"
            class="group p-6 border-2 border-black hover:bg-black hover:text-white transition-all duration-300"
          >
            <div class="flex items-start gap-4 mb-4">
              <span class="text-4xl">{{ topic.icon }}</span>
              <div class="flex-1">
                <h3 class="text-lg font-bold mb-2">
                  {{ topic.title }}
                </h3>
                <div class="inline-block px-3 py-1 border border-current rounded-full">
                  <span class="text-xs font-semibold">
                    {{ topic.count }} МАТЕРИАЛОВ
                  </span>
                </div>
              </div>
            </div>
            <p class="text-sm text-gray-900 mb-4">
              {{ topic.description }}
            </p>
            <div class="flex items-center gap-2 text-sm font-semibold">
              <span>ИЗУЧАТЬ ТЕМУ</span>
              <ArrowRight class="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Как пользоваться -->
    <section class="py-12 md:py-20 px-4 md:px-6">
      <div class="max-w-[1400px] mx-auto">
        <div class="text-xs uppercase tracking-wider mb-8">КАК ЭТИМ ПОЛЬЗОВАТЬСЯ</div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            v-for="(item, index) in howToUse"
            :key="index"
            class="p-6 border-2 border-black"
          >
            <div class="text-3xl font-black mb-4">{{ item.step }}</div>
            <h3 class="text-lg font-bold mb-3 uppercase text-black">
              {{ item.title }}
            </h3>
            <p class="text-sm text-gray-900">
              {{ item.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <Footer
      :communities="[
        { label: 'Нескучный Нетворкинг', href: '/networking' },
        { label: 'Бизнес Сетка', href: '/business' },
        { label: 'База знаний', href: '/knowledge' }
      ]"
      :contacts="[
        { label: 'Telegram', href: 'https://t.me/artemselifanov', external: true },
        { label: 'a9535487323@yandex.ru', href: 'mailto:a9535487323@yandex.ru' },
        { label: '+7-953-548-73-23', href: 'tel:+79535487323' }
      ]"
      cta-title="Готов прокачать свой блог?"
      cta-description="Запишись на консультацию — разберём твой канал и составим план продвижения"
      cta-button-text="Записаться"
      cta-link="https://t.me/artemselifanov"
    />
  </div>
</template>
