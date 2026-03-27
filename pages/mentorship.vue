<template>
  <div class="min-h-screen bg-white text-gray-900 antialiased overflow-x-hidden">
    <!-- Навигация -->
    <nav class="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-gray-200">
      <div class="max-w-7xl mx-auto px-6 py-4 flex items-center">
        <!-- Левая зона: Логотип -->
        <a href="/" class="text-sm font-semibold text-gray-900 shrink-0">Артём Селифанов</a>
        
        <!-- Центральная зона: меню -->
        <div class="hidden md:flex items-center gap-6 flex-1 justify-center">
          <a href="/" class="text-sm text-gray-600 hover:text-gray-900 transition-colors">Главная</a>
          <a href="/networking" class="text-sm text-gray-600 hover:text-gray-900 transition-colors">Нескучный Нетворкинг</a>
          <a href="/business" class="text-sm text-gray-600 hover:text-gray-900 transition-colors">Бизнес Сетка</a>
          <a href="/yappie" class="text-sm text-gray-600 hover:text-gray-900 transition-colors">Веб-разработка</a>
          <a href="/blog" class="text-sm text-gray-600 hover:text-gray-900 transition-colors">Блог</a>
          <a href="https://t.me/artemselifanov" target="_blank" rel="noopener noreferrer" class="text-sm text-gray-600 hover:text-gray-900 transition-colors">Связаться</a>
        </div>
        
        <!-- Правая зона: пустая для баланса -->
        <div class="hidden md:block w-[100px] shrink-0"></div>

        <!-- Кнопка бургер-меню для мобильных -->
        <button
          @click="isMobileMenuOpen = !isMobileMenuOpen"
          class="md:hidden text-gray-700 p-2 hover:bg-gray-100 rounded-lg transition-colors absolute right-4"
          aria-label="Открыть меню"
        >
          <Menu v-if="!isMobileMenuOpen" class="w-6 h-6" />
          <X v-else class="w-6 h-6" />
        </button>
      </div>
    </nav>

    <!-- Мобильное меню -->
    <div v-if="isMobileMenuOpen" class="fixed inset-0 z-[100] md:hidden bg-white flex flex-col">
      <div class="flex-1 flex flex-col justify-center items-center px-6">
        <nav class="flex flex-col gap-8 w-full max-w-xs">
          <a
            v-for="item in mobileMenuItems"
            :key="item.href"
            :href="item.href"
            @click="isMobileMenuOpen = false"
            class="text-3xl font-bold text-gray-900 text-center py-4 hover:text-blue-600 transition-colors"
          >
            {{ item.label }}
          </a>
        </nav>
        <button
          @click="isMobileMenuOpen = false"
          class="mt-12 px-10 py-5 text-xl font-semibold bg-blue-600 text-white hover:bg-blue-700 w-full max-w-xs rounded-md"
        >
          <a href="https://t.me/artemselifanov" target="_blank" rel="noopener noreferrer">Связаться</a>
        </button>
      </div>
      <!-- Кнопка закрытия -->
      <button
        @click="isMobileMenuOpen = false"
        class="absolute top-6 right-6 text-gray-700 p-3 hover:bg-gray-100 rounded-lg transition-colors"
        aria-label="Закрыть меню"
      >
        <X class="w-8 h-8" />
      </button>
    </div>

    <!-- Хлебные крошки -->
    <nav class="pt-24 pb-6 px-4 md:px-6" aria-label="Breadcrumb">
      <div class="max-w-7xl mx-auto">
        <ol class="flex items-center gap-2 text-xs uppercase tracking-wider text-gray-600">
          <li>
            <a href="/" class="text-gray-600 hover:underline font-bold">Главная</a>
          </li>
          <li class="mx-2 text-gray-600">/</li>
          <li class="font-bold text-gray-600">Менторство</li>
        </ol>
      </div>
    </nav>

    <!-- Основной контент -->
    <main role="main" class="pt-20">
      <!-- Hero секция -->
      <section class="relative min-h-[80vh] flex items-center px-4 sm:px-6 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-100">
        <div class="max-w-7xl mx-auto w-full relative z-10">
          <div class="max-w-4xl mx-auto text-center">
            <div class="inline-flex items-center gap-2 px-4 py-2.5 bg-white border border-blue-200 rounded-2xl mb-8">
              <span class="w-2.5 h-2.5 bg-blue-500 rounded-full animate-pulse"></span>
              <span class="text-sm font-medium text-blue-700">Персональная работа 1-на-1</span>
            </div>

            <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] mb-6">
              Менторская программа<br />
              <span class="text-blue-600">по запуску блога</span>
            </h1>

            <p class="text-xl text-gray-600 leading-relaxed mb-8 max-w-2xl mx-auto">
              5 сессий — от нуля до системы, которая приносит клиентов. За месяц работы один на один мы выстроим систему, которая работает — даже если сейчас у вас ноль подписчиков.
            </p>

            <div class="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10">
              <div class="text-center">
                <div class="text-5xl font-black text-gray-900 mb-1">35 000 ₽</div>
                <div class="text-sm text-gray-500">за программу</div>
              </div>
              <div class="text-center sm:text-left">
                <div class="text-lg font-semibold text-gray-700">5 сессий</div>
                <div class="text-sm text-gray-500">по 1–1,5 часа + поддержка в чате</div>
              </div>
            </div>

            <a href="https://t.me/artemselifanov" target="_blank" rel="noopener noreferrer" class="group inline-flex items-center gap-3 px-10 py-5 text-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-2xl transition-all hover:-translate-y-1 shadow-lg shadow-blue-600/30">
              <Icon name="fa-brands:telegram" class="w-6 h-6" />
              Написать «ментор»
            </a>

            <p class="text-sm text-gray-500 mt-6">
              ⚡ Места ограничены — работаю только с 4 людьми в месяц
            </p>
          </div>
        </div>
      </section>

      <!-- Что мы сделаем -->
      <section class="py-20 md:py-28 px-4 sm:px-6 border-t border-gray-100">
        <div class="max-w-7xl mx-auto">
          <div class="text-center mb-16">
            <div class="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-xl mb-6">
              <Icon name="fa-solid:rocket" class="w-5 h-5 text-blue-600" />
              <span class="text-sm font-bold text-blue-700 uppercase tracking-wider">Результат</span>
            </div>
            <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-4">
              Что мы сделаем за 5 сессий
            </h2>
          </div>

          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <div v-for="(item, index) in benefits" :key="index" class="group p-8 bg-white border border-gray-200 rounded-3xl hover:border-blue-300 transition-all hover:-translate-y-1">
              <div class="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                <Icon :name="item.icon" class="w-7 h-7 text-blue-600 group-hover:text-white transition-colors" />
              </div>
              <h3 class="text-xl font-bold mb-3">{{ item.title }}</h3>
              <p class="text-gray-600 leading-relaxed">{{ item.description }}</p>
            </div>
          </div>

          <div class="mt-12 max-w-3xl mx-auto">
            <blockquote class="p-8 bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl border-l-4 border-blue-600">
              <p class="text-lg font-medium text-gray-900 italic">
                Вы получите не просто план — а готовую систему, которую можно внедрять сразу после первой сессии.
              </p>
            </blockquote>
          </div>
        </div>
      </section>

      <!-- Формат работы -->
      <section class="py-20 md:py-28 px-4 sm:px-6 bg-gray-50">
        <div class="max-w-7xl mx-auto">
          <div class="text-center mb-16">
            <div class="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-xl mb-6">
              <Icon name="fa-solid:calendar-check" class="w-5 h-5 text-gray-700" />
              <span class="text-sm font-bold text-gray-700 uppercase tracking-wider">Формат</span>
            </div>
            <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-4">
              Формат работы
            </h2>
          </div>

          <div class="max-w-4xl mx-auto">
            <div class="grid sm:grid-cols-2 gap-6">
              <div v-for="(item, index) in formatItems" :key="index" class="p-8 bg-white rounded-2xl border border-gray-200">
                <div class="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                  <Icon :name="item.icon" class="w-6 h-6 text-blue-600" />
                </div>
                <h3 class="text-lg font-bold mb-2">{{ item.title }}</h3>
                <p class="text-gray-600">{{ item.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Как попасть в программу -->
      <section class="py-20 md:py-28 px-4 sm:px-6">
        <div class="max-w-7xl mx-auto">
          <div class="text-center mb-16">
            <div class="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-xl mb-6">
              <Icon name="fa-solid:door-open" class="w-5 h-5 text-blue-600" />
              <span class="text-sm font-bold text-blue-700 uppercase tracking-wider">Процесс</span>
            </div>
            <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-4">
              Как попасть в программу
            </h2>
          </div>

          <div class="max-w-3xl mx-auto">
            <div class="relative">
              <!-- Линия -->
              <div class="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-blue-800 hidden md:block"></div>

              <div v-for="(step, index) in processSteps" :key="index" class="relative flex gap-6 mb-12 last:mb-0">
                <!-- Номер -->
                <div class="flex-shrink-0 w-16 h-16 bg-white border-4 border-blue-600 rounded-full flex items-center justify-center z-10 shadow-lg">
                  <span class="text-xl font-black text-blue-600">{{ index + 1 }}</span>
                </div>

                <!-- Контент -->
                <div class="flex-1 pt-4">
                  <h3 class="text-xl font-bold mb-2">{{ step.title }}</h3>
                  <p class="text-gray-600 leading-relaxed">{{ step.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Результат -->
      <section class="py-20 md:py-28 px-4 sm:px-6 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white">
        <div class="max-w-7xl mx-auto">
          <div class="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div class="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-xl mb-6">
                <Icon name="fa-solid:trophy" class="w-5 h-5 text-yellow-300" />
                <span class="text-sm font-bold uppercase tracking-wider">Итог</span>
              </div>

              <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-8">
                Результат после программы
              </h2>

              <p class="text-xl text-white/90 leading-relaxed mb-8">
                После программы вы либо уже получаете клиентов, либо чётко понимаете, почему раньше не получалось — и знаете, что делать дальше.
              </p>

              <blockquote class="p-6 bg-white/10 rounded-2xl border-l-4 border-white/50">
                <p class="text-lg font-medium text-white italic">
                  Это не «поговорим за жизнь». Это инвестиция в ваш доход.
                </p>
              </blockquote>
            </div>

            <div class="relative">
              <div class="relative p-8 bg-white/10 backdrop-blur-sm rounded-3xl border border-white/20">
                <h3 class="text-2xl font-bold mb-6 text-center">Что вы получите</h3>
                <ul class="space-y-4">
                  <li class="flex items-start gap-3">
                    <Icon name="fa-solid:check" class="w-6 h-6 text-green-300 flex-shrink-0 mt-0.5" />
                    <span>Готовую систему привлечения клиентов</span>
                  </li>
                  <li class="flex items-start gap-3">
                    <Icon name="fa-solid:check" class="w-6 h-6 text-green-300 flex-shrink-0 mt-0.5" />
                    <span>Упакованное позиционирование</span>
                  </li>
                  <li class="flex items-start gap-3">
                    <Icon name="fa-solid:check" class="w-6 h-6 text-green-300 flex-shrink-0 mt-0.5" />
                    <span>Контент-план на месяц</span>
                  </li>
                  <li class="flex items-start gap-3">
                    <Icon name="fa-solid:check" class="w-6 h-6 text-green-300 flex-shrink-0 mt-0.5" />
                    <span>Настроенную воронку продаж</span>
                  </li>
                  <li class="flex items-start gap-3">
                    <Icon name="fa-solid:check" class="w-6 h-6 text-green-300 flex-shrink-0 mt-0.5" />
                    <span>Уверенность в продажах</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA секция -->
      <section class="py-20 md:py-28 px-4 sm:px-6 bg-gray-900 text-white">
        <div class="max-w-4xl mx-auto text-center">
          <div class="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-xl mb-6">
            <Icon name="fa-solid:fire" class="w-5 h-5 text-yellow-300" />
            <span class="text-sm font-bold uppercase tracking-wider">Ограниченное предложение</span>
          </div>

          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-6">
            Записаться в программу
          </h2>

          <p class="text-xl text-gray-300 leading-relaxed mb-8">
            ⚡ <strong>Места ограничены — работаю только с 4 людьми в месяц.</strong><br />
            Если хотите попасть в ближайший поток — напишите сейчас.
          </p>

          <a href="https://t.me/artemselifanov" target="_blank" rel="noopener noreferrer" class="group inline-flex items-center gap-3 px-10 py-5 text-lg font-semibold text-blue-600 bg-white hover:bg-gray-100 rounded-2xl transition-all hover:-translate-y-1 shadow-xl">
            <Icon name="fa-brands:telegram" class="w-6 h-6" />
            Написать «ментор» в Telegram
          </a>

          <p class="text-sm text-gray-400 mt-6">
            После сообщения я задам пару вопросов, чтобы понять ваш запрос
          </p>
        </div>
      </section>
    </main>

    <!-- Футер -->
    <Footer :show-cta="false" />

    <!-- Нижняя навигация для мобильных -->
    <MobileBottomNav theme="light" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Menu, X } from 'lucide-vue-next'
import Footer from '~/components/layout/Footer.vue'
import MobileBottomNav from '~/components/layout/MobileBottomNav.vue'

const isMobileMenuOpen = ref(false)

// SEO
useHead({
  title: 'Менторская программа по запуску блога | Артём Селифанов',
  meta: [
    { name: 'description', content: '5 сессий 1-на-1 по запуску блога за 35 000 ₽. От позиционирования до первых клиентов. Персональная работа + поддержка в чате.' },
    { name: 'keywords', content: 'менторство блог, запуск блога ментор, персональная работа, блог с нуля, клиенты из блога, Telegram канал' },
    { name: 'robots', content: 'index, follow' }
  ],
  link: [
    { rel: 'canonical', href: 'https://artemselifanov.ru/mentorship' }
  ]
})

useSeoMeta({
  ogTitle: 'Менторская программа по запуску блога | Артём Селифанов',
  ogDescription: '5 сессий 1-на-1 по запуску блога за 35 000 ₽. От позиционирования до первых клиентов.',
  ogType: 'website',
  ogUrl: 'https://artemselifanov.ru/mentorship',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Менторская программа по запуску блога | Артём Селифанов',
  twitterDescription: '5 сессий 1-на-1 по запуску блога за 35 000 ₽. От позиционирования до первых клиентов.'
})

// Меню
const mobileMenuItems = [
  { label: 'Главная', href: '/' },
  { label: 'Нескучный Нетворкинг', href: '/networking' },
  { label: 'Бизнес Сетка', href: '/business' },
  { label: 'Веб-разработка', href: '/yappie' },
  { label: 'Блог', href: '/blog' }
]

// Преимущества
const benefits = [
  {
    icon: 'fa-solid:lightbulb',
    title: 'Найдём вашу экспертную «фишку»',
    description: 'Упакуем её так, чтобы аудитория сразу сказала «это про меня» — и захотела читать дальше.'
  },
  {
    icon: 'fa-solid:calendar',
    title: 'Составим контент-план на месяц',
    description: 'Такой, от которого не выгораешь и который даёт результат, а не просто закрывает «надо что-то запостить».'
  },
  {
    icon: 'fa-solid:funnel-dollar',
    title: 'Настроим простую воронку',
    description: 'От поста — к заявке. Без сложных схем, без технических головоломок.'
  },
  {
    icon: 'fa-solid:handshake',
    title: 'Разберём страх продавать',
    description: 'Научимся назначать встречи и получать клиентов без навязчивых рассылок и спама.'
  }
]

// Формат работы
const formatItems = [
  {
    icon: 'fa-solid:users',
    title: '5 индивидуальных встреч',
    description: 'Один на один по 1–1,5 часа'
  },
  {
    icon: 'fa-brands:telegram',
    title: 'Поддержка в чате',
    description: 'Между сессиями — можно задавать вопросы по ходу внедрения'
  },
  {
    icon: 'fa-solid:clock',
    title: 'Продолжительность',
    description: '1 месяц работы'
  },
  {
    icon: 'fa-solid:calendar',
    title: 'Старт',
    description: 'По согласованию'
  }
]

// Процесс
const processSteps = [
  {
    title: 'Напишите в Telegram слово «ментор»',
    description: 'Так я пойму ваш запрос и смогу уделить вам максимальное внимание.'
  },
  {
    title: 'Я задам пару вопросов',
    description: 'Чтобы понять ваш запрос и текущую ситуацию.'
  },
  {
    title: 'Если формат подходит — согласуем дату старта',
    description: 'Подберём удобное время для первой сессии.'
  }
]
</script>
