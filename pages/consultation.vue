<template>
  <div class="min-h-screen bg-white text-gray-900 antialiased overflow-x-hidden">
    <Head>
      <Title>Консультация по личному бренду и позиционированию | Артём Селифанов</Title>
      <Meta name="description" content="Разберём ваш личный бренд, найдём точки роста и выстроим стратегию продвижения. Запишитесь на консультацию к Артёму Селифанову." />
      <Meta name="keywords" content="консультация по личному бренду, позиционирование эксперта, стратегия продвижения, Артём Селифанов консультация" />
      <Meta name="robots" content="index, follow" />
      <Meta property="og:title" content="Консультация по личному бренду и позиционированию | Артём Селифанов" />
      <Meta property="og:description" content="Разберём ваш личный бренд, найдём точки роста и выстроим стратегию продвижения." />
      <Meta property="og:type" content="website" />
      <Meta property="og:url" content="https://artemselifanov.ru/consultation" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="Консультация по личному бренду и позиционированию | Артём Селифанов" />
      <Meta name="twitter:description" content="Разберём ваш личный бренд, найдём точки роста и выстроим стратегию продвижения." />
      <Link rel="canonical" href="https://artemselifanov.ru/consultation" />
    </Head>
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
          <a href="https://t.me/artemselifanov" target="_blank" class="text-sm text-gray-600 hover:text-gray-900 transition-colors">Связаться</a>
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
          <a href="https://t.me/artemselifanov" target="_blank">Связаться</a>
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

    <!-- Основной контент -->
    <main role="main" class="pt-20">
      <!-- Hero секция -->
      <section class="relative min-h-[80vh] flex items-center px-4 sm:px-6 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-100">
        <div class="max-w-7xl mx-auto w-full relative z-10">
          <div class="max-w-4xl mx-auto text-center">
            <div class="inline-flex items-center gap-2 px-4 py-2.5 bg-white border border-blue-200 rounded-2xl mb-8">
              <span class="w-2.5 h-2.5 bg-blue-500 rounded-full animate-pulse"></span>
              <span class="text-sm font-medium text-blue-700">Индивидуальная работа</span>
            </div>

            <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] mb-6">
              Часовая консультация<br />
              <span class="text-blue-600">по запуску блога</span>
            </h1>

            <p class="text-xl text-gray-600 leading-relaxed mb-8 max-w-2xl mx-auto">
              Хотите запустить блог, но не знаете, с чего начать? Без лишней теории — только конкретный план, который вы начнёте выполнять уже завтра.
            </p>

            <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <div class="text-center">
                <div class="text-5xl font-black text-gray-900 mb-1">3 500 ₽</div>
                <div class="text-sm text-gray-500">за 60 минут</div>
              </div>
            </div>

            <a href="https://t.me/artemselifanov" target="_blank" class="group inline-flex items-center gap-3 px-10 py-5 text-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-2xl transition-all hover:-translate-y-1 shadow-lg shadow-blue-600/30">
              <Icon name="fa-brands:telegram" class="w-6 h-6" />
              Записаться на консультацию
            </a>

            <p class="text-sm text-gray-500 mt-6">
              ⚡ Осталось 4 из 8 свободных мест на март
            </p>
          </div>
        </div>
      </section>

      <!-- Что вы получите -->
      <section class="py-20 md:py-28 px-4 sm:px-6 border-t border-gray-100">
        <div class="max-w-7xl mx-auto">
          <div class="text-center mb-16">
            <div class="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-xl mb-6">
              <Icon name="fa-solid:gift" class="w-5 h-5 text-blue-600" />
              <span class="text-sm font-bold text-blue-700 uppercase tracking-wider">Результат</span>
            </div>
            <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-4">
              Что вы получите за 60 минут
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
        </div>
      </section>

      <!-- Как это работает -->
      <section class="py-20 md:py-28 px-4 sm:px-6 bg-gray-50">
        <div class="max-w-7xl mx-auto">
          <div class="text-center mb-16">
            <div class="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-xl mb-6">
              <Icon name="fa-solid:road" class="w-5 h-5 text-gray-700" />
              <span class="text-sm font-bold text-gray-700 uppercase tracking-wider">Процесс</span>
            </div>
            <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-4">
              Как это работает
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

      <!-- Почему это работает -->
      <section class="py-20 md:py-28 px-4 sm:px-6">
        <div class="max-w-7xl mx-auto">
          <div class="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div class="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-xl mb-6">
                <Icon name="fa-solid:lightbulb" class="w-5 h-5 text-blue-600" />
                <span class="text-sm font-bold text-blue-700 uppercase tracking-wider">Преимущества</span>
              </div>

              <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-8">
                Почему это работает
              </h2>

              <div class="space-y-6">
                <div v-for="(item, index) in whyItWorks" :key="index" class="flex gap-4">
                  <div class="flex-shrink-0 w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <Icon name="fa-solid:check" class="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 class="text-lg font-bold mb-1">{{ item.title }}</h3>
                    <p class="text-gray-600">{{ item.description }}</p>
                  </div>
                </div>
              </div>

              <blockquote class="mt-10 p-6 bg-gradient-to-r from-blue-50 to-violet-50 rounded-2xl border-l-4 border-blue-600">
                <p class="text-lg font-medium text-gray-900 italic">
                  Это не просто «разговор» — это инвестиция в ваш блог.
                </p>
              </blockquote>
            </div>

            <div class="relative">
              <div class="relative p-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl shadow-2xl text-white">
                <div class="text-center">
                  <div class="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6">
                    <Icon name="fa-solid:rocket" class="w-10 h-10 text-white" />
                  </div>
                  <h3 class="text-2xl font-bold mb-4">Результат после консультации</h3>
                  <ul class="space-y-3 text-left">
                    <li class="flex items-start gap-3">
                      <Icon name="fa-solid:check" class="w-6 h-6 text-green-300 flex-shrink-0 mt-0.5" />
                      <span>Чёткий план действий на 2 недели</span>
                    </li>
                    <li class="flex items-start gap-3">
                      <Icon name="fa-solid:check" class="w-6 h-6 text-green-300 flex-shrink-0 mt-0.5" />
                      <span>Исправленные ошибки в профиле</span>
                    </li>
                    <li class="flex items-start gap-3">
                      <Icon name="fa-solid:check" class="w-6 h-6 text-green-300 flex-shrink-0 mt-0.5" />
                      <span>Готовые идеи для контента</span>
                    </li>
                    <li class="flex items-start gap-3">
                      <Icon name="fa-solid:check" class="w-6 h-6 text-green-300 flex-shrink-0 mt-0.5" />
                      <span>Понимание своей целевой аудитории</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Почему я могу помочь -->
      <section class="py-20 md:py-28 px-4 sm:px-6 bg-gray-900 text-white">
        <div class="max-w-7xl mx-auto">
          <div class="grid lg:grid-cols-2 gap-12 items-center">
            <div class="order-2 lg:order-1">
              <div class="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-xl mb-6">
                <Icon name="fa-solid:user-graduate" class="w-5 h-5 text-white" />
                <span class="text-sm font-bold uppercase tracking-wider">Экспертиза</span>
              </div>

              <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-8">
                Почему я могу помочь
              </h2>

              <div class="space-y-6 text-gray-300">
                <p class="text-lg">
                  Меня зовут <strong class="text-white">Артём Селифанов</strong>. Второй год работаю с ВКонтакте, TenChat и Telegram — знаю алгоритмы изнутри.
                </p>

                <div class="space-y-4">
                  <div class="flex items-start gap-4">
                    <div class="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                      <Icon name="fa-solid:trophy" class="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p class="font-semibold text-white">Запустил десятки каналов и сообществ</p>
                      <p class="text-sm">с аудиторией от 100 до 12 000 человек</p>
                    </div>
                  </div>

                  <div class="flex items-start gap-4">
                    <div class="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                      <Icon name="fa-solid:chart-line" class="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p class="font-semibold text-white">Сам прошёл путь от 0 до 9 600 подписчиков</p>
                    </div>
                  </div>

                  <div class="flex items-start gap-4">
                    <div class="flex-shrink-0 w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                      <Icon name="fa-brands:telegram" class="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p class="font-semibold text-white">Вырастил Telegram-канал с нуля до 750 человек за 6 месяцев</p>
                      <p class="text-sm">через Сетку и TenChat</p>
                    </div>
                  </div>
                </div>

                <p class="text-lg font-medium text-white mt-6">
                  Научу, как избежать моих ошибок и расти в разы быстрее.
                </p>
              </div>
            </div>

            <div class="order-1 lg:order-2 flex justify-center">
              <div class="relative">
                <div class="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
                  <NuxtImg 
                    src="/images/artem.webp" 
                    quality="80" 
                    sizes="256 md:320" 
                    alt="Артём Селифанов"
                    class="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Форма заявки -->
      <section class="py-20 md:py-28 px-4 sm:px-6 bg-gray-50">
        <div class="max-w-4xl mx-auto">
          <div class="text-center mb-16">
            <div class="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-xl mb-6">
              <Icon name="fa-solid:envelope" class="w-5 h-5 text-blue-600" />
              <span class="text-sm font-bold text-blue-700 uppercase tracking-wider">Заявка</span>
            </div>
            <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-4">
              Оставить заявку на консультацию
            </h2>
            <p class="text-xl text-gray-600">
              Заполните форму ниже, и я свяжусь с вами в ближайшее время
            </p>
          </div>

          <ContactForm />
        </div>
      </section>

      <!-- CTA секция -->
      <section class="py-20 md:py-28 px-4 sm:px-6 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white">
        <div class="max-w-4xl mx-auto text-center">
          <div class="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-xl mb-6">
            <Icon name="fa-solid:fire" class="w-5 h-5 text-yellow-300" />
            <span class="text-sm font-bold uppercase tracking-wider">Ограниченное предложение</span>
          </div>

          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-6">
            Или напишите напрямую
          </h2>

          <p class="text-xl text-white/90 leading-relaxed mb-8">
            ⚡ <strong>Осталось 4 из 8 свободных мест на март.</strong><br />
            Если хотите стартовать без лишнего стресса — действуйте сейчас.
          </p>

          <a href="https://t.me/artemselifanov" target="_blank" class="group inline-flex items-center gap-3 px-10 py-5 text-lg font-semibold text-blue-600 bg-white hover:bg-gray-100 rounded-2xl transition-all hover:-translate-y-1 shadow-xl">
            <Icon name="fa-brands:telegram" class="w-6 h-6" />
            Написать «консультация» в Telegram
          </a>

          <p class="text-sm text-white/70 mt-6">
            После сообщения я напишу в личку и задам пару вопросов по вашему блогу
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
import ContactForm from '~/components/ContactForm.vue'

const isMobileMenuOpen = ref(false)

// SEO
useHead({
  title: 'Консультация по запуску блога | Артём Селифанов',
  meta: [
    { name: 'description', content: 'Часовая консультация по запуску блога за 3 500 ₽. Получите чёткий план действий, разбор ошибок и идеи для контента. Запишитесь сейчас!' },
    { name: 'keywords', content: 'консультация блог, запуск блога, стратегия блога, позиционирование, Telegram, контент-план, личный бренд' },
    { name: 'robots', content: 'index, follow' }
  ],
  link: [
    { rel: 'canonical', href: 'https://artemselifanov.ru/consultation' }
  ]
})

useSeoMeta({
  ogTitle: 'Консультация по запуску блога | Артём Селифанов',
  ogDescription: 'Часовая консультация по запуску блога за 3 500 ₽. Без теории — только конкретный план действий.',
  ogType: 'website',
  ogUrl: 'https://artemselifanov.ru/consultation',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Консультация по запуску блога | Артём Селифанов',
  twitterDescription: 'Часовая консультация по запуску блога за 3 500 ₽. Без теории — только конкретный план действий.'
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
    icon: 'fa-solid:comment',
    title: 'Чёткое позиционирование',
    description: 'Перестанете метаться между темами и найдёте свою «фишку» — то, за что вас будут читать и рекомендовать.'
  },
  {
    icon: 'fa-solid:road',
    title: 'Стратегия первых шагов',
    description: 'План действий на 2 недели, который реально выполнить даже при плотном графике.'
  },
  {
    icon: 'fa-solid:globe',
    title: 'Разбор вашего профиля',
    description: 'Исправим 3–5 критичных ошибок, которые отпугивают аудиторию прямо сейчас.'
  },
  {
    icon: 'fa-regular:lightbulb',
    title: 'Идеи для контента',
    description: 'Темы постов, которые цепляют именно вашу целевую аудиторию и вызывают реакцию.'
  },
  {
    icon: 'fa-solid:comments',
    title: 'Ответы на ваши вопросы',
    description: 'Без воды и общих слов — только советы, которые применимы к вашей ситуации.'
  },
  {
    icon: 'fa-solid:users',
    title: 'Персональный подход',
    description: 'Разбор конкретно вашего случая, а не общие рекомендации из интернета.'
  }
]

// Процесс
const processSteps = [
  {
    title: 'Напишите слово «консультация»',
    description: 'Так я пойму ваш запрос и смогу уделить вам максимальное внимание.'
  },
  {
    title: 'Я задам пару вопросов',
    description: 'Напишу в личку и задам несколько вопросов по вашему блогу, чтобы разобрать ваш кейс заранее.'
  },
  {
    title: 'Согласовываем дату и время',
    description: 'Подберём удобный слот для видеозвонка продолжительностью 60 минут.'
  },
  {
    title: 'Общаемся по видеосвязи',
    description: 'Проводим консультацию — вы получаете персональный план действий и ответы на все вопросы.'
  },
  {
    title: 'Внедряете и получаете результат',
    description: 'Начинаете выполнять план — первые посты, подписчики или заявки не заставят себя ждать.'
  }
]

// Почему это работает
const whyItWorks = [
  {
    title: 'Экономия времени',
    description: 'Вы избежите месяцев проб и ошибок, получите готовую стратегию.'
  },
  {
    title: 'Конкретика',
    description: 'Никакой теории, только применимые к вам шаги.'
  },
  {
    title: 'Поддержка',
    description: 'После консультации сможете уточнить детали в чате.'
  }
]
</script>
