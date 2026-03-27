<template>
  <div class="min-h-screen bg-white text-gray-900 antialiased overflow-x-hidden">
    <!-- Навигация -->
    <nav
      class="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-gray-200"
    >
      <div class="max-w-7xl mx-auto px-6 py-4 flex items-center">
        <!-- Левая зона: Логотип -->
        <a href="/" class="text-sm font-semibold text-gray-900 shrink-0">Артём Селифанов</a>

        <!-- Центральная зона: меню -->
        <div class="hidden md:flex items-center gap-6 flex-1 justify-center">
          <a href="/" class="text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >Главная</a
          >
          <a href="/networking" class="text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >Нескучный Нетворкинг</a
          >
          <a href="/business" class="text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >Бизнес Сетка</a
          >
          <a href="/yappie" class="text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >Веб-разработка</a
          >
          <a href="/blog" class="text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >Блог</a
          >
          <a
            href="https://t.me/artemselifanov"
            target="_blank"
            rel="noopener noreferrer"
            class="text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >Связаться</a
          >
        </div>

        <!-- Правая зона: пустая для баланса -->
        <div class="hidden md:block w-[100px] shrink-0"></div>

        <!-- Кнопка бургер-меню для мобильных -->
        <button
          class="md:hidden text-gray-700 p-2 hover:bg-gray-100 rounded-lg transition-colors absolute right-4"
          aria-label="Открыть меню"
          @click="isMobileMenuOpen = !isMobileMenuOpen"
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
            class="text-3xl font-bold text-gray-900 text-center py-4 hover:text-blue-600 transition-colors"
            @click="isMobileMenuOpen = false"
          >
            {{ item.label }}
          </a>
        </nav>
        <button
          class="mt-12 px-10 py-5 text-xl font-semibold bg-blue-600 text-white hover:bg-blue-700 w-full max-w-xs rounded-md"
          @click="isMobileMenuOpen = false"
        >
          <a href="https://t.me/artemselifanov" target="_blank" rel="noopener noreferrer"
            >Связаться</a
          >
        </button>
      </div>
      <!-- Кнопка закрытия -->
      <button
        class="absolute top-6 right-6 text-gray-700 p-3 hover:bg-gray-100 rounded-lg transition-colors"
        aria-label="Закрыть меню"
        @click="isMobileMenuOpen = false"
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
          <li class="font-bold text-gray-600">Консультация</li>
        </ol>
      </div>
    </nav>

    <!-- Основной контент -->
    <main role="main" class="pt-20">
      <!-- Hero секция -->
      <section
        class="relative min-h-[80vh] flex items-center px-4 sm:px-6 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-100"
      >
        <div class="max-w-7xl mx-auto w-full relative z-10">
          <div class="max-w-4xl mx-auto text-center">
            <div
              class="inline-flex items-center gap-2 px-4 py-2.5 bg-white border border-blue-200 rounded-2xl mb-8"
            >
              <span class="w-2.5 h-2.5 bg-blue-500 rounded-full animate-pulse"></span>
              <span class="text-sm font-medium text-blue-700">Индивидуальная работа</span>
            </div>

            <h1
              class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] mb-6"
            >
              Через 60 минут у вас будет<br />
              <span class="text-blue-600">конкретный план блога</span>
            </h1>

            <p class="text-xl text-gray-600 leading-relaxed mb-8 max-w-2xl mx-auto">
              Большинство людей месяцами «готовятся» к блогу — изучают, думают, откладывают. Потом
              запускаются хаотично и бросают через 2 недели, потому что нет системы. На консультации
              мы разберём именно вашу ситуацию и составим план, который вы начнёте выполнять уже
              завтра.
            </p>

            <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <div class="text-center">
                <div class="text-5xl font-black text-gray-900 mb-1">3 500 ₽</div>
                <div class="text-sm text-gray-500">за 60 минут</div>
              </div>
            </div>

            <a
              href="https://t.me/artemselifanov"
              target="_blank"
              rel="noopener noreferrer"
              class="group inline-flex items-center gap-3 px-10 py-5 text-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-2xl transition-all hover:-translate-y-1 shadow-lg shadow-blue-600/30"
            >
              <Icon name="fa-brands:telegram" class="w-6 h-6" />
              Получить план для моего блога
            </a>

            <p class="text-sm text-gray-500 mt-6">
              ⚡ Количество мест в месяц ограничено — беру не более 8 клиентов, чтобы уделять
              каждому максимум внимания.
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
              <span class="text-sm font-bold text-blue-700 uppercase tracking-wider"
                >Результат</span
              >
            </div>
            <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-4">
              Что вы получите за 60 минут
            </h2>
          </div>

          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <div
              v-for="(item, index) in benefits"
              :key="index"
              class="group p-8 bg-white border border-gray-200 rounded-3xl hover:border-blue-300 transition-all hover:-translate-y-1"
            >
              <div
                class="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors"
              >
                <Icon
                  :name="item.icon"
                  class="w-7 h-7 text-blue-600 group-hover:text-white transition-colors"
                />
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
              <div
                class="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-blue-800 hidden md:block"
              ></div>

              <div
                v-for="(step, index) in processSteps"
                :key="index"
                class="relative flex gap-6 mb-12 last:mb-0"
              >
                <!-- Номер -->
                <div
                  class="flex-shrink-0 w-16 h-16 bg-white border-4 border-blue-600 rounded-full flex items-center justify-center z-10 shadow-lg"
                >
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

      <!-- Отзывы клиентов -->
      <section class="py-20 md:py-28 px-4 sm:px-6 bg-gray-50">
        <div class="max-w-7xl mx-auto">
          <div class="text-center mb-16">
            <div class="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-xl mb-6">
              <Icon name="fa-solid:quote-left" class="w-5 h-5 text-blue-600" />
              <span class="text-sm font-bold text-gray-700 uppercase tracking-wider">Отзывы</span>
            </div>
            <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-4">
              Результаты клиентов после консультации
            </h2>
            <p class="text-lg text-gray-600 max-w-2xl mx-auto">
              Реальные истории людей, которые внедрили рекомендации и получили результат
            </p>
          </div>

          <div class="grid md:grid-cols-3 gap-6 lg:gap-8">
            <div
              v-for="(testimonial, index) in testimonials"
              :key="index"
              class="group p-8 bg-white border border-gray-200 rounded-3xl hover:border-blue-300 hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div class="mb-6">
                <Icon name="fa-solid:quote-left" class="w-8 h-8 text-blue-200" />
              </div>

              <h3 class="text-lg font-bold text-gray-900 mb-4">{{ testimonial.name }}</h3>

              <div class="space-y-4">
                <div>
                  <div class="text-xs font-bold text-amber-700 uppercase tracking-wide mb-1">
                    До консультации
                  </div>
                  <p class="text-sm text-gray-600">{{ testimonial.before }}</p>
                </div>
                <div class="pt-4 border-t border-gray-100">
                  <div class="flex items-center gap-2 mb-1">
                    <Icon name="fa-solid:check-circle" class="w-4 h-4 text-green-600" />
                    <div class="text-xs font-bold text-green-700 uppercase tracking-wide">
                      После
                    </div>
                  </div>
                  <p class="text-sm text-gray-700 font-medium">{{ testimonial.after }}</p>
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
                  Меня зовут <strong class="text-white">Артём Селифанов</strong>. Второй год работаю
                  с ВКонтакте, TenChat и Telegram — знаю алгоритмы изнутри.
                </p>

                <div class="space-y-4">
                  <div class="flex items-start gap-4">
                    <div
                      class="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center"
                    >
                      <Icon name="fa-solid:trophy" class="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p class="font-semibold text-white">
                        Вырастил собственный блог до 9 600 подписчиков
                      </p>
                    </div>
                  </div>

                  <div class="flex items-start gap-4">
                    <div
                      class="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center"
                    >
                      <Icon name="fa-solid:users" class="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p class="font-semibold text-white">
                        Запустил каналы с аудиторией до 12 000 человек
                      </p>
                    </div>
                  </div>

                  <div class="flex items-start gap-4">
                    <div
                      class="flex-shrink-0 w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center"
                    >
                      <Icon name="fa-solid:network-wired" class="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p class="font-semibold text-white">
                        Знаю алгоритмы ВКонтакте, TenChat и Telegram
                      </p>
                      <p class="text-sm">Изнутри понимаю, как работает органическое продвижение</p>
                    </div>
                  </div>
                </div>

                <p class="text-lg font-medium text-white mt-6">
                  Научу, как избежать ошибок, которые я сам совершал, и расти в разы быстрее.
                </p>
              </div>
            </div>

            <div class="order-1 lg:order-2 flex justify-center">
              <div class="relative">
                <div
                  class="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl"
                >
                  <img
                    src="/reference/artem.webp"
                    alt="Артём Селифанов"
                    class="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Обоснование цены -->
      <section class="py-20 md:py-28 px-4 sm:px-6 border-t border-gray-100">
        <div class="max-w-4xl mx-auto">
          <div class="text-center mb-12">
            <div class="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-xl mb-6">
              <Icon name="fa-solid:scale-balanced" class="w-5 h-5 text-blue-600" />
              <span class="text-sm font-bold text-blue-700 uppercase tracking-wider">Ценность</span>
            </div>
            <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-4">
              Почему это выгодно
            </h2>
          </div>

          <div
            class="p-8 bg-gradient-to-br from-blue-50 to-violet-50 rounded-3xl border border-blue-100"
          >
            <div class="grid md:grid-cols-2 gap-8">
              <div>
                <h3 class="text-lg font-bold text-gray-900 mb-4">Сравните:</h3>
                <ul class="space-y-3">
                  <li class="flex items-start gap-3">
                    <Icon name="fa-solid:xmark" class="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span class="text-gray-700"
                      >Рекламный пост у блогера — от 5 000 ₽ без гарантии результата</span
                    >
                  </li>
                  <li class="flex items-start gap-3">
                    <Icon name="fa-solid:xmark" class="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span class="text-gray-700"
                      >Курсы по блогингу — от 10 000 ₽ с общей информацией</span
                    >
                  </li>
                  <li class="flex items-start gap-3">
                    <Icon name="fa-solid:xmark" class="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span class="text-gray-700"
                      >SMM-специалист — от 15 000 ₽ в месяц без стратегии</span
                    >
                  </li>
                </ul>
              </div>
              <div>
                <h3 class="text-lg font-bold text-gray-900 mb-4">Что вы получаете:</h3>
                <ul class="space-y-3">
                  <li class="flex items-start gap-3">
                    <Icon
                      name="fa-solid:check"
                      class="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5"
                    />
                    <span class="text-gray-700"
                      >План действий на 14 дней с конкретными задачами</span
                    >
                  </li>
                  <li class="flex items-start gap-3">
                    <Icon
                      name="fa-solid:check"
                      class="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5"
                    />
                    <span class="text-gray-700"
                      >Разбор конкретно вашего случая, а не общая теория</span
                    >
                  </li>
                  <li class="flex items-start gap-3">
                    <Icon
                      name="fa-solid:check"
                      class="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5"
                    />
                    <span class="text-gray-700"
                      >Стратегия, которую начнёте выполнять уже завтра</span
                    >
                  </li>
                </ul>
              </div>
            </div>

            <div class="mt-8 pt-8 border-t border-blue-200 text-center">
              <p class="text-lg text-gray-700">
                <strong class="text-gray-900">3 500 ₽</strong> — это меньше, чем один рекламный
                пост, но вы получаете план на месяц вперёд и разбор конкретно вашей ситуации.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA секция -->
      <section
        class="py-20 md:py-28 px-4 sm:px-6 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white"
      >
        <div class="max-w-4xl mx-auto text-center">
          <div class="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-xl mb-6">
            <Icon name="fa-solid:fire" class="w-5 h-5 text-yellow-300" />
            <span class="text-sm font-bold uppercase tracking-wider">Ограниченное предложение</span>
          </div>

          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-6">
            Готовы получить план для вашего блога?
          </h2>

          <p class="text-xl text-white/90 leading-relaxed mb-8">
            ⚡ <strong>Количество мест в месяц ограничено</strong> — беру не более 8 клиентов, чтобы
            уделять каждому максимум внимания.<br />
            Если хотите стартовать без лишнего стресса — действуйте сейчас.
          </p>

          <a
            href="https://t.me/artemselifanov"
            target="_blank"
            rel="noopener noreferrer"
            class="group inline-flex items-center gap-3 px-10 py-5 text-lg font-semibold text-blue-600 bg-white hover:bg-gray-100 rounded-2xl transition-all hover:-translate-y-1 shadow-xl"
          >
            <Icon name="fa-brands:telegram" class="w-6 h-6" />
            Разобрать мой случай
          </a>

          <p class="text-sm text-white/70 mt-6">
            Напишите «консультация» в Telegram — я задам пару вопросов и мы подберём удобное время
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
  title: 'Консультация по запуску блога | План действий за 60 минут | Артём Селифанов',
  meta: [
    {
      name: 'description',
      content:
        'Через 60 минут у вас будет конкретный план блога на 14 дней. Позиционирование, разбор профиля, готовые темы постов. 3 500 ₽. Беру не более 8 клиентов в месяц.',
    },
    {
      name: 'keywords',
      content:
        'консультация блог, запуск блога, стратегия блога, позиционирование, Telegram, контент-план, личный бренд, план продвижения, набрать подписчиков',
    },
    { name: 'robots', content: 'index, follow' },
  ],
  link: [{ rel: 'canonical', href: 'https://artemselifanov.ru/consultation' }],
})

useSeoMeta({
  ogTitle: 'Консультация по запуску блога | План действий за 60 минут',
  ogDescription:
    'Через 60 минут у вас будет конкретный план блога на 14 дней. Без теории — только применимые к вашей ситуации шаги.',
  ogType: 'website',
  ogUrl: 'https://artemselifanov.ru/consultation',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Консультация по запуску блога | План действий за 60 минут',
  twitterDescription:
    'Через 60 минут у вас будет конкретный план блога на 14 дней. Без теории — только применимые к вашей ситуации шаги.',
})

// Меню
const mobileMenuItems = [
  { label: 'Главная', href: '/' },
  { label: 'Нескучный Нетворкинг', href: '/networking' },
  { label: 'Бизнес Сетка', href: '/business' },
  { label: 'Веб-разработка', href: '/yappie' },
  { label: 'Блог', href: '/blog' },
]

// Преимущества
const benefits = [
  {
    icon: 'fa-solid:bullseye',
    title: 'Позиционирование для вашей ниши',
    description:
      'Определите, для кого вы пишете, и найдёте свою фишку — то, за что вас будут рекомендовать коллегам.',
  },
  {
    icon: 'fa-solid:calendar-check',
    title: 'План действий на 14 дней',
    description:
      'Конкретные задачи на каждый день: от оформления профиля до первых 5 постов и привлечения подписчиков.',
  },
  {
    icon: 'fa-solid:search',
    title: 'Разбор профиля с исправлением ошибок',
    description:
      'Найду и покажу 3–5 ошибок в шапке, аватаре и описании, которые прямо сейчас отпугивают аудиторию.',
  },
  {
    icon: 'fa-solid:lightbulb',
    title: 'Готовые темы для контента',
    description:
      '10–15 тем постов, которые цепляют именно вашу целевую аудиторию и вызывают комментарии и репосты.',
  },
  {
    icon: 'fa-solid:rocket',
    title: 'Стратегия продвижения без бюджета',
    description:
      'Как набрать первых 500 подписчиков органически — через кросс-постинг, нетворкинг и взаимный пиар.',
  },
]

// Отзывы клиентов
const testimonials = [
  {
    name: 'Елена, HR-консультант',
    before: 'Не знала, с чего начать, и боялась писать «неидеальные» посты',
    after: 'Опубликовала первые 10 постов за 2 недели и получила 3 заявки на консультацию',
  },
  {
    name: 'Дмитрий, финансовый консультант',
    before: 'Вёл канал 3 месяца без системы — посты выходили хаотично',
    after: 'Запустил контент-план и набрал 300 подписчиков за первый месяц',
  },
  {
    name: 'Ольга, коуч',
    before: 'Думала, что для продвижения нужен большой бюджет на рекламу',
    after: 'Нашла свою нишу и привлекла 5 клиентов через органический охват в Telegram и TenChat',
  },
]

// Процесс
const processSteps = [
  {
    title: 'Напишите слово «консультация»',
    description: 'Так я пойму ваш запрос и смогу уделить вам максимальное внимание.',
  },
  {
    title: 'Я задам пару вопросов',
    description:
      'Напишу в личку и задам несколько вопросов по вашему блогу, чтобы разобрать ваш кейс заранее.',
  },
  {
    title: 'Согласовываем дату и время',
    description: 'Подберём удобный слот для видеозвонка продолжительностью 60 минут.',
  },
  {
    title: 'Общаемся по видеосвязи',
    description:
      'Проводим консультацию — вы получаете персональный план действий и ответы на все вопросы.',
  },
  {
    title: 'Внедряете и получаете результат',
    description:
      'Начинаете выполнять план — первые посты, подписчики или заявки не заставят себя ждать.',
  },
]
</script>
