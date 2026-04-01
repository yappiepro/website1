<template>
  <div class="min-h-screen bg-white text-gray-900 antialiased overflow-x-hidden">
    <!-- Навигация -->
    <nav
      class="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-gray-200"
    >
      <div class="max-w-7xl mx-auto px-6 py-4 flex items-center">
        <a href="/" class="text-sm font-semibold text-gray-900 shrink-0">Артём Селифанов</a>

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

        <div class="hidden md:block w-[100px] shrink-0"></div>

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
          <li><a href="/" class="text-gray-600 hover:underline font-bold">Главная</a></li>
          <li class="mx-2 text-gray-600">/</li>
          <li>
            <a href="/networking" class="text-gray-600 hover:underline font-bold"
              >Нескучный Нетворкинг</a
            >
          </li>
          <li class="mx-2 text-gray-600">/</li>
          <li class="font-bold text-gray-600">Правила</li>
        </ol>
      </div>
    </nav>

    <!-- Основной контент -->
    <main role="main" class="pt-20">
      <!-- Hero секция -->
      <section
        class="relative py-20 md:py-28 px-4 sm:px-6 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-100"
      >
        <div class="max-w-4xl mx-auto w-full relative z-10">
          <div class="text-center">
            <div
              class="inline-flex items-center gap-2 px-4 py-2.5 bg-white border border-blue-200 rounded-2xl mb-8"
            >
              <span class="w-2.5 h-2.5 bg-blue-500 rounded-full animate-pulse"></span>
              <span class="text-sm font-medium text-blue-700">Правила сообщества</span>
            </div>

            <h1
              class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] mb-6"
            >
              Нескучный Нетворкинг
            </h1>

            <p class="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Частное сообщество для живого и полезного обмена контактами, знаниями и поддержкой
            </p>
          </div>
        </div>
      </section>

      <!-- Приветствие -->
      <section class="py-20 md:py-28 px-4 sm:px-6 border-t border-gray-100">
        <div class="max-w-4xl mx-auto">
          <div class="bg-white border-2 border-blue-200 rounded-[2rem] p-8 md:p-12 shadow-xl">
            <h2 class="text-3xl font-black mb-6">Добро пожаловать в "Нескучный Нетворкинг"!</h2>

            <p class="text-lg text-gray-700 leading-relaxed mb-6">
              Рад, что ты с нами! Мы — частное сообщество для живого и полезного обмена контактами,
              знаниями и поддержкой. У нас уже более
              <strong class="text-blue-600">13 000 участников</strong> со всей России и не только:
              дизайнеры, маркетологи, предприниматели, художники, разработчики, руководители и
              многие другие.
            </p>

            <p class="text-lg text-gray-700 leading-relaxed">
              Наша главная ценность — комфортная и уважительная атмосфера. Чтобы ее сохранить, мы
              ввели обязательную модерацию всех публикаций.
            </p>
          </div>
        </div>
      </section>

      <!-- Как опубликовать пост -->
      <section
        class="py-20 md:py-28 px-4 sm:px-6 bg-gradient-to-br from-violet-50 via-white to-blue-50"
      >
        <div class="max-w-4xl mx-auto">
          <div class="text-center mb-12">
            <div
              class="inline-flex items-center gap-2 px-4 py-2 bg-white border border-violet-200 rounded-2xl mb-6"
            >
              <Icon name="lucide:file-text" class="w-5 h-5 text-violet-600" />
              <span class="text-sm font-bold text-violet-700 uppercase tracking-wider"
                >Обязательно</span
              >
            </div>
            <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-4">
              Как опубликовать свой пост
            </h2>
          </div>

          <div class="bg-white border-2 border-violet-200 rounded-[2rem] p-8 md:p-12 shadow-xl">
            <p class="text-lg text-gray-700 leading-relaxed mb-8">
              Все посты проходят обязательную предварительную модерацию через бота.
            </p>

            <ol class="space-y-6">
              <li class="flex items-start gap-4">
                <div
                  class="flex-shrink-0 w-10 h-10 bg-violet-600 rounded-2xl flex items-center justify-center shadow-lg"
                >
                  <span class="text-xl font-black text-white">1</span>
                </div>
                <div>
                  <h3 class="text-xl font-bold mb-2">Подпишись на канал</h3>
                  <p class="text-gray-600">Телеграм «Нескучный Нетворкинг»</p>
                </div>
              </li>

              <li class="flex items-start gap-4">
                <div
                  class="flex-shrink-0 w-10 h-10 bg-violet-600 rounded-2xl flex items-center justify-center shadow-lg"
                >
                  <span class="text-xl font-black text-white">2</span>
                </div>
                <div>
                  <h3 class="text-xl font-bold mb-2">Запусти проверочного бота</h3>
                  <p class="text-gray-600">Нажми /start в боте сообщества</p>
                </div>
              </li>

              <li class="flex items-start gap-4">
                <div
                  class="flex-shrink-0 w-10 h-10 bg-violet-600 rounded-2xl flex items-center justify-center shadow-lg"
                >
                  <span class="text-xl font-black text-white">3</span>
                </div>
                <div>
                  <h3 class="text-xl font-bold mb-2">Отправь команду</h3>
                  <p class="text-gray-600">
                    Напиши боту слово <strong class="text-violet-600">пост</strong> или перезапусти
                    бота командой <strong class="text-violet-600">/start</strong>
                  </p>
                </div>
              </li>

              <li class="flex items-start gap-4">
                <div
                  class="flex-shrink-0 w-10 h-10 bg-violet-600 rounded-2xl flex items-center justify-center shadow-lg"
                >
                  <span class="text-xl font-black text-white">4</span>
                </div>
                <div>
                  <h3 class="text-xl font-bold mb-2">Отправь текст поста</h3>
                  <p class="text-gray-600">Перешли боту текст своего поста</p>
                </div>
              </li>

              <li class="flex items-start gap-4">
                <div
                  class="flex-shrink-0 w-10 h-10 bg-violet-600 rounded-2xl flex items-center justify-center shadow-lg"
                >
                  <span class="text-xl font-black text-white">5</span>
                </div>
                <div>
                  <h3 class="text-xl font-bold mb-2">Дождись вердикта</h3>
                  <div class="space-y-2 mt-3">
                    <div class="flex items-center gap-2">
                      <span class="text-green-600">✅</span>
                      <span class="text-gray-700"
                        ><strong>Пост прошел</strong> — можешь публиковать его в ленту</span
                      >
                    </div>
                    <div class="flex items-center gap-2">
                      <span class="text-red-600">⛔️</span>
                      <span class="text-gray-700"
                        ><strong>Пост не прошел</strong> — нужно исправить замечания по
                        правилам</span
                      >
                    </div>
                  </div>
                  <p class="text-gray-600 mt-3">
                    <strong>⏳ Время модерации</strong> — от 1 до 12 часов
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </section>

      <!-- Что можно и нельзя -->
      <section class="py-20 md:py-28 px-4 sm:px-6 border-t border-gray-100">
        <div class="max-w-6xl mx-auto">
          <div class="grid md:grid-cols-2 gap-8">
            <!-- Можно -->
            <div class="bg-white border-2 border-green-200 rounded-[2rem] p-8 md:p-10 shadow-xl">
              <div class="inline-flex items-center gap-2 px-4 py-2 bg-green-50 rounded-xl mb-6">
                <Icon name="lucide:thumbs-up" class="w-5 h-5 text-green-600" />
                <span class="text-sm font-bold text-green-700 uppercase tracking-wider"
                  >Можно и нужно</span
                >
              </div>

              <ul class="space-y-4">
                <li class="flex items-start gap-3">
                  <Icon name="lucide:check" class="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong class="text-gray-900">Знакомиться:</strong>
                    <span class="text-gray-600">
                      Создавать посты-визитки с хэштегом #постзнакомство</span
                    >
                  </div>
                </li>
                <li class="flex items-start gap-3">
                  <Icon name="lucide:check" class="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong class="text-gray-900">Спрашивать:</strong>
                    <span class="text-gray-600">
                      Задавать вопросы и просить совета у сообщества</span
                    >
                  </div>
                </li>
                <li class="flex items-start gap-3">
                  <Icon name="lucide:check" class="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong class="text-gray-900">Делиться:</strong>
                    <span class="text-gray-600">
                      Писать авторские посты с полезной информацией</span
                    >
                  </div>
                </li>
                <li class="flex items-start gap-3">
                  <Icon name="lucide:check" class="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong class="text-gray-900">Обсуждать:</strong>
                    <span class="text-gray-600">
                      Активно комментировать, участвовать в опросах</span
                    >
                  </div>
                </li>
                <li class="flex items-start gap-3">
                  <Icon name="lucide:check" class="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong class="text-gray-900">Предлагать:</strong>
                    <span class="text-gray-600"> Делиться идеями по развитию сообщества!</span>
                  </div>
                </li>
              </ul>
            </div>

            <!-- Нельзя -->
            <div class="bg-white border-2 border-red-200 rounded-[2rem] p-8 md:p-10 shadow-xl">
              <div class="inline-flex items-center gap-2 px-4 py-2 bg-red-50 rounded-xl mb-6">
                <Icon name="lucide:circle-x" class="w-5 h-5 text-red-600" />
                <span class="text-sm font-bold text-red-700 uppercase tracking-wider"
                  >Строго запрещено</span
                >
              </div>

              <p class="text-sm text-red-600 mb-4">
                Нарушение = удаление контента и/или блокировка
              </p>

              <ul class="space-y-4">
                <li class="flex items-start gap-3">
                  <Icon name="lucide:x" class="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                  <span class="text-gray-700">Реклама, спам и флуд</span>
                </li>
                <li class="flex items-start gap-3">
                  <Icon name="lucide:x" class="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                  <span class="text-gray-700"><strong>РЕПОСТЫ</strong></span>
                </li>
                <li class="flex items-start gap-3">
                  <Icon name="lucide:x" class="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                  <span class="text-gray-700">Ненормативная лексика и оскорбления</span>
                </li>
                <li class="flex items-start gap-3">
                  <Icon name="lucide:x" class="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                  <span class="text-gray-700">Попытки обойти проверку бота при публикации</span>
                </li>
                <li class="flex items-start gap-3">
                  <Icon name="lucide:x" class="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                  <span class="text-gray-700">Контекстные ссылки (даже в комментариях)</span>
                </li>
              </ul>

              <div class="mt-6 p-4 bg-red-50 rounded-xl">
                <p class="text-sm text-red-800">
                  <strong>➡️</strong> Администратор оставляет за собой право удалять любой контент
                  без объяснения причин.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Как создать хороший пост-знакомство -->
      <section
        class="py-20 md:py-28 px-4 sm:px-6 bg-gradient-to-br from-blue-50 via-white to-violet-50"
      >
        <div class="max-w-4xl mx-auto">
          <div class="text-center mb-12">
            <div
              class="inline-flex items-center gap-2 px-4 py-2 bg-white border border-blue-200 rounded-2xl mb-6"
            >
              <Icon name="lucide:user-plus" class="w-5 h-5 text-blue-600" />
              <span class="text-sm font-bold text-blue-700 uppercase tracking-wider">Шаблон</span>
            </div>
            <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-4">
              Как создать хороший пост-знакомство
            </h2>
          </div>

          <div class="bg-white border-2 border-blue-200 rounded-[2rem] p-8 md:p-12 shadow-xl">
            <p class="text-lg text-gray-700 leading-relaxed mb-8">
              Используй хэштег <strong class="text-blue-600">#постзнакомство</strong>, чтобы тебя
              могли найти.
            </p>

            <ol class="space-y-6">
              <li class="flex items-start gap-4">
                <div
                  class="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg"
                >
                  <span class="text-xl font-black text-white">1</span>
                </div>
                <div>
                  <h3 class="text-xl font-bold mb-2">Представься</h3>
                  <p class="text-gray-600">Имя, город</p>
                </div>
              </li>

              <li class="flex items-start gap-4">
                <div
                  class="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg"
                >
                  <span class="text-xl font-black text-white">2</span>
                </div>
                <div>
                  <h3 class="text-xl font-bold mb-2">Расскажи о себе</h3>
                  <p class="text-gray-600">Чем занимаешься?</p>
                </div>
              </li>

              <li class="flex items-start gap-4">
                <div
                  class="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg"
                >
                  <span class="text-xl font-black text-white">3</span>
                </div>
                <div>
                  <h3 class="text-xl font-bold mb-2">Предложи пользу</h3>
                  <p class="text-gray-600">Чем можешь быть полезен другим?</p>
                </div>
              </li>

              <li class="flex items-start gap-4">
                <div
                  class="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg"
                >
                  <span class="text-xl font-black text-white">4</span>
                </div>
                <div>
                  <h3 class="text-xl font-bold mb-2">Раскрой себя</h3>
                  <p class="text-gray-600">1-2 интересных факта</p>
                </div>
              </li>

              <li class="flex items-start gap-4">
                <div
                  class="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg"
                >
                  <span class="text-xl font-black text-white">5</span>
                </div>
                <div>
                  <h3 class="text-xl font-bold mb-2">Добавь фото</h3>
                  <p class="text-gray-600">С фото 🔥</p>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </section>

      <!-- Контакты -->
      <section class="py-20 md:py-28 px-4 sm:px-6 border-t border-gray-100">
        <div class="max-w-4xl mx-auto">
          <div
            class="bg-gradient-to-br from-violet-600 to-blue-600 rounded-[2rem] p-8 md:p-12 text-white shadow-2xl"
          >
            <div class="text-center mb-8">
              <Icon name="lucide:message-circle" class="w-16 h-16 mx-auto mb-6 opacity-90" />
              <h2 class="text-3xl font-black mb-4">Есть вопросы или предложения?</h2>
              <p class="text-xl text-violet-100 mb-8">
                Пиши создателю сообщества — Артём Селифанов
              </p>
            </div>

            <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://t.me/artemselifanov"
                target="_blank"
                rel="noopener noreferrer"
                class="group inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-white/20 hover:bg-white/30 rounded-2xl transition-all backdrop-blur-sm"
              >
                <Icon name="lucide:send" class="w-5 h-5" />
                Написать в Telegram
              </a>
            </div>

            <p class="text-center text-violet-100 mt-8">
              Давайте делать наше общение еще полезнее и интереснее!
            </p>
          </div>
        </div>
      </section>

      <!-- CTA: Телеграм канал -->
      <section class="py-16 px-4 sm:px-6 bg-gradient-to-br from-gray-50 via-white to-gray-100">
        <div class="max-w-4xl mx-auto">
          <div
            class="bg-white border-2 border-gray-200 rounded-[2rem] p-8 md:p-10 shadow-xl text-center"
          >
            <Icon name="lucide:send" class="w-12 h-12 mx-auto mb-4 text-blue-600" />
            <h3 class="text-2xl font-bold mb-4">Наш Телеграм канал</h3>
            <p class="text-lg text-gray-600 mb-6">
              Развитие Личного бренда через соцсети — заходи, там есть гайд по развитию Сетки
            </p>
            <a
              href="https://t.me/artemselifanov"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-2xl transition-all shadow-lg hover:shadow-xl"
            >
              Подписаться на канал
              <Icon name="lucide:arrow-right" class="w-5 h-5" />
            </a>
          </div>
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

definePageMeta({
  path: '/networking-rules',
})

const isMobileMenuOpen = ref(false)

// SEO
useHead({
  title: 'Правила сообщества Нескучный Нетворкинг | Артём Селифанов',
  meta: [
    {
      name: 'description',
      content:
        'Правила сообщества Нескучный Нетворкинг: как опубликовать пост, что можно и нельзя делать, шаблон поста-знакомства. 13 000+ участников.',
    },
    {
      name: 'keywords',
      content:
        'нескучный нетворкинг, правила сообщества, телеграм канал, нетворкинг для бизнеса, публикация поста, пост знакомство',
    },
    { name: 'robots', content: 'index, follow' },
  ],
  link: [{ rel: 'canonical', href: 'https://artemselifanov.ru/networking-rules' }],
})

useSeoMeta({
  ogTitle: 'Правила сообщества Нескучный Нетворкинг',
  ogDescription:
    'Частное сообщество для живого и полезного обмена контактами, знаниями и поддержкой. 13 000+ участников.',
  ogType: 'website',
  ogUrl: 'https://artemselifanov.ru/networking-rules',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Правила сообщества Нескучный Нетворкинг',
  twitterDescription:
    'Частное сообщество для живого и полезного обмена контактами, знаниями и поддержкой.',
})

// Меню
const mobileMenuItems = [
  { label: 'Главная', href: '/' },
  { label: 'Нескучный Нетворкинг', href: '/networking' },
  { label: 'Бизнес Сетка', href: '/business' },
  { label: 'Веб-разработка', href: '/yappie' },
  { label: 'Блог', href: '/blog' },
]
</script>
