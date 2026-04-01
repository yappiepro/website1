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
              Самое активное сообщество предпринимателей и экспертов
            </p>
          </div>
        </div>
      </section>

      <!-- Цифры сообщества -->
      <section class="py-16 md:py-20 px-4 sm:px-6 bg-white border-b border-gray-100">
        <div class="max-w-6xl mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <!-- Подписчики -->
            <div
              class="group relative bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl p-8 md:p-10 text-white shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-1"
            >
              <div
                class="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              ></div>
              <div class="relative z-10">
                <div class="flex items-center gap-3 mb-4">
                  <div class="p-3 bg-white/20 rounded-2xl">
                    <Users class="w-8 h-8" />
                  </div>
                  <span class="text-sm font-semibold text-blue-100">Подписчиков</span>
                </div>
                <div class="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight">13 201</div>
                <p class="text-blue-100 mt-3 text-sm md:text-base">
                  Активных участников сообщества
                </p>
              </div>
            </div>

            <!-- Просмотры -->
            <div
              class="group relative bg-gradient-to-br from-violet-500 to-violet-600 rounded-3xl p-8 md:p-10 text-white shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-1"
            >
              <div
                class="absolute inset-0 bg-gradient-to-br from-violet-600 to-violet-700 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              ></div>
              <div class="relative z-10">
                <div class="flex items-center gap-3 mb-4">
                  <div class="p-3 bg-white/20 rounded-2xl">
                    <Eye class="w-8 h-8" />
                  </div>
                  <span class="text-sm font-semibold text-violet-100">Просмотров</span>
                </div>
                <div class="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight">
                  1 899 254
                </div>
                <p class="text-violet-100 mt-3 text-sm md:text-base">Общее количество просмотров</p>
              </div>
            </div>

            <!-- Реакции -->
            <div
              class="group relative bg-gradient-to-br from-amber-500 to-orange-500 rounded-3xl p-8 md:p-10 text-white shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-1"
            >
              <div
                class="absolute inset-0 bg-gradient-to-br from-orange-600 to-orange-700 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              ></div>
              <div class="relative z-10">
                <div class="flex items-center gap-3 mb-4">
                  <div class="p-3 bg-white/20 rounded-2xl">
                    <Heart class="w-8 h-8" />
                  </div>
                  <span class="text-sm font-semibold text-orange-100">Реакций</span>
                </div>
                <div class="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight">
                  106 483
                </div>
                <p class="text-orange-100 mt-3 text-sm md:text-base">Реакций на постах в среднем</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA: Подписка и бот -->
      <section
        class="py-20 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-blue-50 via-white to-violet-50"
      >
        <div class="max-w-5xl mx-auto">
          <div class="text-center mb-12">
            <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-4">
              Присоединяйся к сообществу
            </h2>
            <p class="text-xl text-gray-600 leading-relaxed">
              Два простых шага для участия в жизни сообщества
            </p>
          </div>

          <div class="grid md:grid-cols-2 gap-6 md:gap-8">
            <!-- Шаг 1: Подпишись на канал -->
            <a
              href="https://t.me/funnetworking"
              target="_blank"
              rel="noopener noreferrer"
              class="group block bg-white border-2 border-blue-200 rounded-3xl p-8 shadow-xl hover:shadow-2xl hover:border-blue-400 transition-all duration-300"
            >
              <div class="flex items-start gap-4">
                <div
                  class="flex-shrink-0 w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform"
                >
                  <Send class="w-7 h-7 text-white" />
                </div>
                <div class="flex-1">
                  <div class="flex items-center gap-2 mb-3">
                    <span
                      class="inline-flex items-center justify-center w-8 h-8 bg-blue-600 text-white rounded-full font-bold text-sm"
                      >1</span
                    >
                    <h3 class="text-xl font-bold text-gray-900">Подпишись на канал</h3>
                  </div>
                  <p class="text-gray-600 mb-4">
                    Телеграм-канал «Нескучный Нетворкинг» — новости, анонсы и полезные материалы
                  </p>
                  <span
                    class="inline-flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-3 transition-all"
                  >
                    Подписаться
                    <ArrowRight class="w-5 h-5" />
                  </span>
                </div>
              </div>
            </a>

            <!-- Шаг 2: Запусти бота -->
            <a
              href="https://t.me/setkaNetworking_bot"
              target="_blank"
              rel="noopener noreferrer"
              class="group block bg-white border-2 border-violet-200 rounded-3xl p-8 shadow-xl hover:shadow-2xl hover:border-violet-400 transition-all duration-300"
            >
              <div class="flex items-start gap-4">
                <div
                  class="flex-shrink-0 w-14 h-14 bg-violet-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform"
                >
                  <Bot class="w-7 h-7 text-white" />
                </div>
                <div class="flex-1">
                  <div class="flex items-center gap-2 mb-3">
                    <span
                      class="inline-flex items-center justify-center w-8 h-8 bg-violet-600 text-white rounded-full font-bold text-sm"
                      >2</span
                    >
                    <h3 class="text-xl font-bold text-gray-900">Запусти проверочного бота</h3>
                  </div>
                  <p class="text-gray-600 mb-4">
                    Бот проверит ваш профиль и откроет доступ к публикациям в сообществе
                  </p>
                  <span
                    class="inline-flex items-center gap-2 text-violet-600 font-semibold group-hover:gap-3 transition-all"
                  >
                    Запустить бота
                    <ArrowRight class="w-5 h-5" />
                  </span>
                </div>
              </div>
            </a>
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
        <div class="max-w-6xl mx-auto">
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
            <p class="text-xl text-gray-600 leading-relaxed">
              Используй хэштег <strong class="text-blue-600">#постзнакомство</strong>, чтобы тебя
              могли найти
            </p>
          </div>

          <div class="grid lg:grid-cols-2 gap-8">
            <!-- Левая колонка: Рекомендации -->
            <div class="bg-white border-2 border-blue-200 rounded-[2rem] p-8 md:p-10 shadow-xl">
              <h3 class="text-2xl font-black mb-6 text-gray-900">Структура поста</h3>

              <ol class="space-y-5">
                <li class="flex items-start gap-4">
                  <div
                    class="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg"
                  >
                    <span class="text-xl font-black text-white">1</span>
                  </div>
                  <div>
                    <h4 class="text-lg font-bold mb-1">Представься</h4>
                    <p class="text-gray-600">Имя, город, чем занимаешься</p>
                  </div>
                </li>

                <li class="flex items-start gap-4">
                  <div
                    class="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg"
                  >
                    <span class="text-xl font-black text-white">2</span>
                  </div>
                  <div>
                    <h4 class="text-lg font-bold mb-1">Расскажи о себе</h4>
                    <p class="text-gray-600">Твой опыт, навыки, сфера деятельности</p>
                  </div>
                </li>

                <li class="flex items-start gap-4">
                  <div
                    class="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg"
                  >
                    <span class="text-xl font-black text-white">3</span>
                  </div>
                  <div>
                    <h4 class="text-lg font-bold mb-1">Предложи пользу</h4>
                    <p class="text-gray-600">Чем можешь быть полезен другим участникам</p>
                  </div>
                </li>

                <li class="flex items-start gap-4">
                  <div
                    class="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg"
                  >
                    <span class="text-xl font-black text-white">4</span>
                  </div>
                  <div>
                    <h4 class="text-lg font-bold mb-1">Раскрой себя</h4>
                    <p class="text-gray-600">1-2 интересных факта о тебе</p>
                  </div>
                </li>

                <li class="flex items-start gap-4">
                  <div
                    class="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg"
                  >
                    <span class="text-xl font-black text-white">5</span>
                  </div>
                  <div>
                    <h4 class="text-lg font-bold mb-1">Добавь фото</h4>
                    <p class="text-gray-600">Посты с фото получают больше отклика 🔥</p>
                  </div>
                </li>
              </ol>
            </div>

            <!-- Правая колонка: Пример поста -->
            <div
              class="bg-gradient-to-br from-blue-500 to-violet-600 rounded-[2rem] p-8 md:p-10 text-white shadow-2xl"
            >
              <div class="flex items-center gap-3 mb-6">
                <div class="p-2 bg-white/20 rounded-xl">
                  <FileText class="w-6 h-6" />
                </div>
                <h3 class="text-2xl font-black">Пример поста</h3>
              </div>

              <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-6 space-y-4">
                <p class="text-sm text-blue-100">#постзнакомство</p>

                <div class="space-y-3 text-base leading-relaxed">
                  <p>
                    <strong class="text-white">Привет, сообщество!</strong>
                  </p>
                  <p>
                    Меня зовут <strong class="text-white">Алексей</strong>, я из
                    <strong class="text-white">Москвы</strong>.
                  </p>
                  <p>
                    <strong class="text-white">Чем занимаюсь:</strong> Разрабатываю сайты и
                    мобильные приложения уже 7 лет. Специализируюсь на e-commerce и финтех-проектах.
                  </p>
                  <p>
                    <strong class="text-white">Чем могу быть полезен:</strong>
                  </p>
                  <ul class="list-disc list-inside space-y-1 ml-2">
                    <li>Консультация по выбору стека технологий</li>
                    <li>Аудит текущего проекта</li>
                    <li>Помощь с интеграцией платежей</li>
                  </ul>
                  <p>
                    <strong class="text-white">Интересный факт:</strong> В свободное время бегаю
                    марафоны — уже 5 лет участвую в забегах по всему миру.
                  </p>
                  <p>Буду рад знакомству и полезным связям! 🤝</p>
                </div>
              </div>

              <p class="text-center text-blue-100 mt-6 text-sm">
                💡 Адаптируй пример под себя — будь искренним и открытым
              </p>
            </div>
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
              href="https://t.me/funnetworking"
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
import { Menu, X, Users, Eye, Heart, Send, Bot, ArrowRight, FileText } from 'lucide-vue-next'
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
        'Правила сообщества Нескучный Нетворкинг: 13 201 подписчик, 1 899 254 просмотров, 106 483 реакции. Как опубликовать пост, шаблон поста-знакомства.',
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
    'Самое активное сообщество: 13 201 подписчик, 1.9 млн просмотров, 106 тыс. реакций. Правила публикации и шаблон поста-знакомства.',
  ogType: 'website',
  ogUrl: 'https://artemselifanov.ru/networking-rules',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Правила сообщества Нескучный Нетворкинг',
  twitterDescription: 'Самое активное сообщество предпринимателей и экспертов.',
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
