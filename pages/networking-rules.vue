<template>
  <div class="min-h-screen bg-white text-black font-mono">
    <!-- Фоновая сетка -->
    <div class="fixed inset-0 pointer-events-none opacity-20">
      <div class="grid-bg absolute inset-0"></div>
    </div>

    <!-- Навигация -->
    <nav
      :class="[
        'fixed left-4 right-4 z-40 transition-all duration-300 md:backdrop-blur-xl md:rounded-2xl',
        isScrolled ? 'bg-white/90 md:bg-white/90 md:shadow-lg' : 'bg-white/90 md:bg-transparent',
        'md:top-0 top-4',
      ]"
    >
      <div class="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
        <div class="h-14 md:h-16 flex items-center">
          <!-- Левая зона: Логотип -->
          <div class="block">
            <a href="/" class="group flex items-center gap-3" aria-label="Главная" title="Главная">
              <img
                src="/reference/Vector.svg"
                alt="Нескучный Нетворкинг — логотип сообщества"
                class="h-10 w-auto"
              />
            </a>
          </div>

          <!-- Центральная зона: Десктопное меню -->
          <div class="hidden md:flex items-center justify-center flex-1">
            <nav class="flex items-center gap-1">
              <a
                href="/"
                class="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-white/50 rounded-lg transition-all"
                >Главная</a
              >
              <a
                href="/networking"
                class="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-white/50 rounded-lg transition-all"
                >Нескучный Нетворкинг</a
              >
              <a
                href="/business"
                class="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-white/50 rounded-lg transition-all"
                >Бизнес Сетка</a
              >
              <a
                href="/yappie"
                class="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-white/50 rounded-lg transition-all"
                >Веб-разработка</a
              >
              <a
                href="/blog"
                class="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-white/50 rounded-lg transition-all"
                >Блог</a
              >
              <a
                href="/networking-rules"
                class="px-4 py-2 text-sm text-gray-900 font-semibold hover:bg-white/50 rounded-lg transition-all"
                >Правила</a
              >
            </nav>
          </div>

          <!-- Правая зона: Кнопка -->
          <div class="hidden md:flex items-center justify-end shrink-0">
            <a
              href="https://t.me/funnetworking"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white bg-[#EA6D3A] hover:bg-[#EA6D3A]/90 rounded-xl transition-all"
            >
              <span>В сообщество</span>
            </a>
          </div>

          <!-- Кнопка бургер-меню -->
          <button
            :class="[
              'md:hidden p-2 rounded-xl transition-all absolute right-4 z-50',
              isScrolled ? 'bg-white/90 hover:bg-white' : 'hover:bg-gray-100',
            ]"
            aria-label="Открыть меню"
            @click="isMobileMenuOpen = !isMobileMenuOpen"
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
      cta-link="https://t.me/funnetworking"
      cta-text="В сообщество"
      theme="brutal"
      :show-label="false"
      :show-arrows="false"
    />

    <!-- Основной контент -->
    <main role="main" class="pt-20">
      <!-- Hero секция -->
      <section class="pt-12 pb-16 md:pt-20 md:pb-24 px-4 sm:px-6">
        <div class="max-w-[1400px] mx-auto">
          <div class="text-center mb-12">
            <div
              class="inline-flex items-center gap-2 px-4 py-2 bg-[#EA6D3A]/10 border border-[#EA6D3A]/20 rounded-xl mb-6"
            >
              <span class="w-2 h-2 bg-[#EA6D3A] rounded-full animate-pulse"></span>
              <span class="text-xs font-semibold text-[#EA6D3A] uppercase tracking-wider"
                >Правила сообщества</span
              >
            </div>
            <h1
              class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] mb-6"
            >
              Нескучный Нетворкинг
            </h1>
            <p class="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Самое активное сообщество предпринимателей и экспертов
            </p>
          </div>
        </div>
      </section>

      <!-- Цифры сообщества -->
      <section class="py-16 md:py-20 px-4 sm:px-6 border-t-2 border-b-2 border-black bg-white">
        <div class="max-w-[1400px] mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <!-- Подписчики -->
            <div
              class="group relative bg-[#EA6D3A] rounded-3xl p-8 md:p-10 text-white border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all hover:-translate-y-1"
            >
              <div class="flex items-center gap-3 mb-4">
                <div class="p-3 bg-white/20 rounded-xl border-2 border-black">
                  <Users class="w-8 h-8" />
                </div>
                <span class="text-sm font-semibold">Подписчиков</span>
              </div>
              <div class="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight">13 201</div>
              <p class="text-white/90 mt-3 text-sm md:text-base">Активных участников сообщества</p>
            </div>

            <!-- Просмотры -->
            <div
              class="group relative bg-violet-600 rounded-3xl p-8 md:p-10 text-white border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all hover:-translate-y-1"
            >
              <div class="flex items-center gap-3 mb-4">
                <div class="p-3 bg-white/20 rounded-xl border-2 border-black">
                  <Eye class="w-8 h-8" />
                </div>
                <span class="text-sm font-semibold">Просмотров</span>
              </div>
              <div class="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight">
                1 899 254
              </div>
              <p class="text-white/90 mt-3 text-sm md:text-base">Общее количество просмотров</p>
            </div>

            <!-- Реакции -->
            <div
              class="group relative bg-amber-500 rounded-3xl p-8 md:p-10 text-white border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all hover:-translate-y-1"
            >
              <div class="flex items-center gap-3 mb-4">
                <div class="p-3 bg-white/20 rounded-xl border-2 border-black">
                  <Heart class="w-8 h-8" />
                </div>
                <span class="text-sm font-semibold">Реакций</span>
              </div>
              <div class="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight">106 483</div>
              <p class="text-white/90 mt-3 text-sm md:text-base">Реакций на постах в среднем</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Как опубликовать пост -->
      <section class="py-20 md:py-28 px-4 sm:px-6 border-t-2 border-black">
        <div class="max-w-[1400px] mx-auto">
          <div class="text-center mb-12">
            <div
              class="inline-flex items-center gap-2 px-4 py-2 bg-violet-100 border border-violet-300 rounded-xl mb-6"
            >
              <Icon name="lucide:file-text" class="w-5 h-5 text-violet-600" />
              <span class="text-sm font-bold text-violet-700 uppercase tracking-wider"
                >Обязательно</span
              >
            </div>
            <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-4">
              Как опубликовать свой пост
            </h2>
            <p class="text-xl text-gray-600">Два простых шага для участия в жизни сообщества</p>
          </div>

          <!-- CTA карточки -->
          <div class="grid md:grid-cols-2 gap-6 md:gap-8 mb-12">
            <!-- Шаг 1: Подпишись на канал -->
            <a
              href="https://t.me/funnetworking"
              target="_blank"
              rel="noopener noreferrer"
              class="group block bg-white border-2 border-black rounded-3xl p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all hover:-translate-y-1"
            >
              <div class="flex items-start gap-4">
                <div
                  class="flex-shrink-0 w-14 h-14 bg-[#EA6D3A] rounded-2xl border-2 border-black flex items-center justify-center group-hover:scale-110 transition-transform"
                >
                  <Send class="w-7 h-7 text-white" />
                </div>
                <div class="flex-1">
                  <div class="flex items-center gap-2 mb-3">
                    <span
                      class="inline-flex items-center justify-center w-8 h-8 bg-[#EA6D3A] text-white rounded-full font-bold text-sm border-2 border-black"
                      >1</span
                    >
                    <h3 class="text-xl font-bold">Подпишись на канал</h3>
                  </div>
                  <p class="text-gray-600 mb-4">
                    Телеграм-канал «Нескучный Нетворкинг» — новости, анонсы и полезные материалы
                  </p>
                  <span
                    class="inline-flex items-center gap-2 text-[#EA6D3A] font-semibold group-hover:gap-3 transition-all"
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
              class="group block bg-white border-2 border-black rounded-3xl p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all hover:-translate-y-1"
            >
              <div class="flex items-start gap-4">
                <div
                  class="flex-shrink-0 w-14 h-14 bg-violet-600 rounded-2xl border-2 border-black flex items-center justify-center group-hover:scale-110 transition-transform"
                >
                  <Bot class="w-7 h-7 text-white" />
                </div>
                <div class="flex-1">
                  <div class="flex items-center gap-2 mb-3">
                    <span
                      class="inline-flex items-center justify-center w-8 h-8 bg-violet-600 text-white rounded-full font-bold text-sm border-2 border-black"
                      >2</span
                    >
                    <h3 class="text-xl font-bold">Запусти проверочного бота</h3>
                  </div>
                  <p class="text-gray-600 mb-4">
                    Бот проверит ваш профиль и откроет доступ к публикациям
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

          <!-- Подробные шаги -->
          <div
            class="bg-white border-2 border-black rounded-3xl p-8 md:p-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
          >
            <p class="text-lg text-gray-700 mb-8">
              Все посты проходят обязательную предварительную модерацию через бота.
            </p>

            <ol class="space-y-6">
              <li class="flex items-start gap-4">
                <div
                  class="flex-shrink-0 w-10 h-10 bg-violet-600 rounded-xl border-2 border-black flex items-center justify-center"
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
                  class="flex-shrink-0 w-10 h-10 bg-violet-600 rounded-xl border-2 border-black flex items-center justify-center"
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
                  class="flex-shrink-0 w-10 h-10 bg-violet-600 rounded-xl border-2 border-black flex items-center justify-center"
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
                  class="flex-shrink-0 w-10 h-10 bg-violet-600 rounded-xl border-2 border-black flex items-center justify-center"
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
                  class="flex-shrink-0 w-10 h-10 bg-violet-600 rounded-xl border-2 border-black flex items-center justify-center"
                >
                  <span class="text-xl font-black text-white">5</span>
                </div>
                <div>
                  <h3 class="text-xl font-bold mb-2">Дождись вердикта</h3>
                  <div class="space-y-2 mt-3">
                    <div class="flex items-center gap-2">
                      <span class="text-green-600">✅</span>
                      <span class="text-gray-700">
                        <strong>Пост прошел</strong> — можешь публиковать его в ленту
                      </span>
                    </div>
                    <div class="flex items-center gap-2">
                      <span class="text-red-600">⛔️</span>
                      <span class="text-gray-700">
                        <strong>Пост не прошел</strong> — нужно исправить замечания по правилам
                      </span>
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
      <section class="py-20 md:py-28 px-4 sm:px-6 border-t-2 border-black">
        <div class="max-w-[1400px] mx-auto">
          <div class="grid md:grid-cols-2 gap-8">
            <!-- Можно -->
            <div
              class="bg-white border-2 border-black rounded-3xl p-8 md:p-10 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
            >
              <div
                class="inline-flex items-center gap-2 px-4 py-2 bg-green-100 border border-green-300 rounded-xl mb-6"
              >
                <Icon name="lucide:thumbs-up" class="w-5 h-5 text-green-600" />
                <span class="text-sm font-bold text-green-700 uppercase tracking-wider"
                  >Можно и нужно</span
                >
              </div>

              <ul class="space-y-4">
                <li class="flex items-start gap-3">
                  <Icon name="lucide:check" class="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong>Знакомиться:</strong>
                    <span class="text-gray-600">
                      Создавать посты-визитки с хэштегом #постзнакомство
                    </span>
                  </div>
                </li>
                <li class="flex items-start gap-3">
                  <Icon name="lucide:check" class="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong>Спрашивать:</strong>
                    <span class="text-gray-600">
                      Задавать вопросы и просить совета у сообщества
                    </span>
                  </div>
                </li>
                <li class="flex items-start gap-3">
                  <Icon name="lucide:check" class="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong>Делиться:</strong>
                    <span class="text-gray-600">
                      Писать авторские посты с полезной информацией
                    </span>
                  </div>
                </li>
                <li class="flex items-start gap-3">
                  <Icon name="lucide:check" class="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong>Обсуждать:</strong>
                    <span class="text-gray-600">
                      Активно комментировать, участвовать в опросах
                    </span>
                  </div>
                </li>
                <li class="flex items-start gap-3">
                  <Icon name="lucide:check" class="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong>Предлагать:</strong>
                    <span class="text-gray-600"> Делиться идеями по развитию сообщества!</span>
                  </div>
                </li>
              </ul>
            </div>

            <!-- Нельзя -->
            <div
              class="bg-white border-2 border-black rounded-3xl p-8 md:p-10 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
            >
              <div
                class="inline-flex items-center gap-2 px-4 py-2 bg-red-100 border border-red-300 rounded-xl mb-6"
              >
                <Icon name="lucide:circle-x" class="w-5 h-5 text-red-600" />
                <span class="text-sm font-bold text-red-700 uppercase tracking-wider"
                  >Строго запрещено</span
                >
              </div>

              <p class="text-sm text-red-600 mb-4 font-semibold">
                Нарушение = удаление контента и/или блокировка
              </p>

              <ul class="space-y-4">
                <li class="flex items-start gap-3">
                  <Icon name="lucide:x" class="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                  <span>Реклама, спам и флуд</span>
                </li>
                <li class="flex items-start gap-3">
                  <Icon name="lucide:x" class="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                  <span><strong>РЕПОСТЫ</strong></span>
                </li>
                <li class="flex items-start gap-3">
                  <Icon name="lucide:x" class="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                  <span>Ненормативная лексика и оскорбления</span>
                </li>
                <li class="flex items-start gap-3">
                  <Icon name="lucide:x" class="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                  <span>Попытки обойти проверку бота при публикации</span>
                </li>
                <li class="flex items-start gap-3">
                  <Icon name="lucide:x" class="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                  <span>Контекстные ссылки (даже в комментариях)</span>
                </li>
              </ul>

              <div class="mt-6 p-4 bg-red-50 border-2 border-red-200 rounded-xl">
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
      <section class="py-20 md:py-28 px-4 sm:px-6 border-t-2 border-black">
        <div class="max-w-[1400px] mx-auto">
          <div class="text-center mb-12">
            <div
              class="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 border border-blue-300 rounded-xl mb-6"
            >
              <Icon name="lucide:user-plus" class="w-5 h-5 text-blue-600" />
              <span class="text-sm font-bold text-blue-700 uppercase tracking-wider">Шаблон</span>
            </div>
            <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-4">
              Как создать хороший пост-знакомство
            </h2>
            <p class="text-xl text-gray-600">
              Используй хэштег <strong class="text-blue-600">#постзнакомство</strong>, чтобы тебя
              могли найти
            </p>
          </div>

          <div class="grid lg:grid-cols-2 gap-8">
            <!-- Левая колонка: Рекомендации -->
            <div
              class="bg-white border-2 border-black rounded-3xl p-8 md:p-10 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
            >
              <h3 class="text-2xl font-black mb-6">Структура поста</h3>

              <ol class="space-y-5">
                <li class="flex items-start gap-4">
                  <div
                    class="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-xl border-2 border-black flex items-center justify-center"
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
                    class="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-xl border-2 border-black flex items-center justify-center"
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
                    class="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-xl border-2 border-black flex items-center justify-center"
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
                    class="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-xl border-2 border-black flex items-center justify-center"
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
                    class="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-xl border-2 border-black flex items-center justify-center"
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
              class="bg-gradient-to-br from-blue-600 to-violet-600 rounded-3xl p-8 md:p-10 text-white border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
            >
              <div class="flex items-center gap-3 mb-6">
                <div class="p-2 bg-white/20 rounded-xl border-2 border-black">
                  <FileText class="w-6 h-6" />
                </div>
                <h3 class="text-2xl font-black">Пример поста</h3>
              </div>

              <div
                class="bg-white/10 backdrop-blur-sm rounded-2xl border-2 border-black p-6 space-y-4"
              >
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
      <section class="py-20 md:py-28 px-4 sm:px-6 border-t-2 border-black">
        <div class="max-w-[1400px] mx-auto">
          <div
            class="bg-gradient-to-br from-violet-600 to-blue-600 rounded-3xl p-8 md:p-12 text-white border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
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
                class="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-white/20 hover:bg-white/30 rounded-2xl border-2 border-black transition-all"
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
      <section class="py-16 px-4 sm:px-6 border-t-2 border-black">
        <div class="max-w-[1400px] mx-auto">
          <div
            class="bg-white border-2 border-black rounded-3xl p-8 md:p-10 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-center"
          >
            <Icon name="lucide:send" class="w-12 h-12 mx-auto mb-4 text-[#EA6D3A]" />
            <h3 class="text-2xl font-bold mb-4">Наш Телеграм канал</h3>
            <p class="text-lg text-gray-600 mb-6">
              Развитие Личного бренда через соцсети — заходи, там есть гайд по развитию Сетки
            </p>
            <a
              href="https://t.me/funnetworking"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-[#EA6D3A] hover:bg-[#EA6D3A]/90 rounded-2xl border-2 border-black transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
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
import { ref, onMounted } from 'vue'
import { Menu, X, Users, Eye, Heart, Send, Bot, ArrowRight, FileText } from 'lucide-vue-next'
import Footer from '~/components/layout/Footer.vue'
import MobileBottomNav from '~/components/layout/MobileBottomNav.vue'
import BaseMobileMenu from '~/components/layout/BaseMobileMenu.vue'

definePageMeta({
  path: '/networking-rules',
})

const isMobileMenuOpen = ref(false)
const isScrolled = ref(false)

onMounted(() => {
  const handleScroll = () => {
    isScrolled.value = window.scrollY > 50
  }
  window.addEventListener('scroll', handleScroll)
  return () => window.removeEventListener('scroll', handleScroll)
})

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
