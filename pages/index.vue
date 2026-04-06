<template>
  <div class="min-h-screen bg-white text-gray-900 antialiased overflow-x-hidden">
    <!-- Preload критических ресурсов для LCP -->
    <Head>
      <link
        rel="preload"
        as="image"
        href="/reference/IMG_7089.webp"
        imagesrcset="/reference/IMG_7089.webp 110w, /reference/IMG_7089.webp 85w, /reference/IMG_7089.webp 60w"
        imagesizes="100vw"
      />
      <link
        rel="preload"
        as="image"
        href="/reference/IMG_7082.webp"
        imagesrcset="/reference/IMG_7082.webp 100w, /reference/IMG_7082.webp 75w, /reference/IMG_7082.webp 55w"
        imagesizes="100vw"
      />
      <link
        rel="preload"
        as="image"
        href="/reference/IMG_7084.webp"
        imagesrcset="/reference/IMG_7084.webp 90w, /reference/IMG_7084.webp 70w, /reference/IMG_7084.webp 50w"
        imagesizes="100vw"
      />
      <link
        rel="preload"
        as="image"
        href="/reference/IMG_7083.webp"
        imagesrcset="/reference/IMG_7083.webp 100w, /reference/IMG_7083.webp 75w, /reference/IMG_7083.webp 55w"
        imagesizes="100vw"
      />
      <link
        rel="preload"
        as="image"
        href="/reference/IMG_7090.webp"
        imagesrcset="/reference/IMG_7090.webp 90w, /reference/IMG_7090.webp 70w, /reference/IMG_7090.webp 50w"
        imagesizes="100vw"
      />
    </Head>

    <!-- Прогресс-бар скролла -->
    <ScrollProgress />

    <!-- Хедер -->
    <Header
      v-model="isMobileMenuOpen"
      :menu-items="headerMenuItems"
      cta-link="https://t.me/artemselifanov"
      cta-text="Связаться"
    />

    <!-- Мобильное меню -->
    <BaseMobileMenu
      v-model="isMobileMenuOpen"
      :menu-items="mobileMenuItems"
      cta-link="https://t.me/artemselifanov"
      cta-text="Связаться в Telegram"
      theme="light"
    />

    <!-- Основной контент -->
    <main role="main">
      <!-- 1. HERO SECTION -->
      <section
        class="relative min-h-screen flex items-center pt-20 px-4 sm:px-6 overflow-hidden bg-gray-50"
      >
        <div class="max-w-7xl mx-auto w-full relative z-10">
          <div class="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div class="lg:col-span-8">
              <h1
                class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05] mb-6"
              >
                <span class="block">Выйдите на высокий чек</span>
                <span class="block">и стабильный поток клиентов —</span>
                <span class="block text-blue-600">через личный бренд</span>
              </h1>

              <p class="text-base md:text-lg text-gray-600 leading-relaxed mb-8 max-w-2xl">
                Помогаю консультантам, коучам и предпринимателям сформулировать своё
                позиционирование, упаковать экспертизу и выстроить систему, где личный бренд
                работает на привлечение клиентов — без хаоса и бесконечного постинга.
              </p>

              <div class="flex flex-wrap gap-4 mb-10">
                <a
                  href="https://t.me/artemselifanov"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="group inline-flex items-center gap-3 px-8 py-4 text-base font-semibold text-white bg-gray-900 hover:bg-gray-800 rounded-2xl transition-all hover:-translate-y-1"
                >
                  <Icon name="fa-brands:telegram" class="w-5 h-5" />
                  Обсудить стратегию
                </a>
              </div>

              <div class="flex flex-wrap items-center gap-6 text-sm text-gray-500">
                <div class="flex items-center gap-2">
                  <Icon name="fa-solid:check-circle" class="w-5 h-5 text-green-500" />
                  <span>Получить бесплатный аудит за 30 минут</span>
                </div>
                <div class="flex items-center gap-2">
                  <Icon name="fa-solid:calendar-check" class="w-5 h-5 text-green-500" />
                  <span>Работаю с 2021 года</span>
                </div>
              </div>
            </div>

            <div class="lg:col-span-4 flex justify-center lg:justify-end">
              <div class="relative">
                <!-- Пять скриншотов рядом -->
                <div class="relative w-full max-w-sm mx-auto">
                  <div class="flex items-end justify-center gap-[6.5px]">
                    <!-- Левое фото 2 (Дзен) -->
                    <div
                      class="w-[50px] sm:w-[70px] md:w-[90px] aspect-[9/19] rounded-[12px] overflow-hidden shadow-xl"
                      data-position="left-2"
                    >
                      <img
                        src="/reference/IMG_7084.webp"
                        alt="Дзен"
                        class="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>

                    <!-- Левое фото 1 (Сетка) -->
                    <div
                      class="w-[55px] sm:w-[75px] md:w-[100px] aspect-[9/19] rounded-[12px] overflow-hidden shadow-xl"
                      data-position="left-1"
                    >
                      <img
                        src="/reference/IMG_7082.webp"
                        alt="Сетка"
                        class="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>

                    <!-- Центральное фото (IMG_7089) - LCP кандидат -->
                    <div
                      class="w-[60px] sm:w-[85px] md:w-[110px] aspect-[9/19] rounded-[12px] overflow-hidden shadow-xl"
                      data-position="center"
                    >
                      <img
                        src="/reference/IMG_7089.webp"
                        alt="Площадка"
                        class="w-full h-full object-cover"
                        fetchpriority="high"
                      />
                    </div>

                    <!-- Правое фото 1 (TenChat) -->
                    <div
                      class="w-[55px] sm:w-[75px] md:w-[100px] aspect-[9/19] rounded-[12px] overflow-hidden shadow-xl"
                      data-position="right-1"
                    >
                      <img
                        src="/reference/IMG_7083.webp"
                        alt="TenChat"
                        class="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>

                    <!-- Правое фото 2 (IMG_7090) -->
                    <div
                      class="w-[50px] sm:w-[70px] md:w-[90px] aspect-[9/19] rounded-[12px] overflow-hidden shadow-xl"
                      data-position="right-2"
                    >
                      <img
                        src="/reference/IMG_7090.webp"
                        alt="Площадка"
                        class="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>

                <!-- Подпись под веером -->
                <div class="text-center mt-6 sm:mt-8">
                  <div
                    class="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-blue-50 border border-blue-100 rounded-xl"
                  >
                    <Icon name="fa-brands:telegram" class="w-3 h-3 sm:w-4 sm:h-4 text-blue-600" />
                    <span class="text-xs sm:text-sm font-bold text-blue-700"
                      >Мультиплатформенный подход</span
                    >
                  </div>
                  <p class="text-[10px] sm:text-xs text-gray-500 mt-1.5 sm:mt-2">
                    Работаю с 5+ площадками одновременно
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 2. ОБО МНЕ -->
      <section id="about" class="py-16 md:py-24 lg:py-32 px-4 sm:px-6 border-t border-gray-100">
        <div class="max-w-7xl mx-auto">
          <div class="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div class="animate-on-scroll">
              <div class="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-100 rounded-xl mb-6">
                <span class="text-xs font-bold text-gray-700 uppercase tracking-wider"
                  >Позиционирование</span
                >
              </div>

              <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-8">
                Помогаю найти, сформулировать и<br />
                <span class="text-gray-400">упаковать вашу экспертизу</span>
              </h2>

              <div class="space-y-5 text-gray-600 leading-relaxed">
                <p class="text-lg">
                  Работаю с теми, кто продаёт свою экспертизу: консультанты, коучи, наставники,
                  владельцы бизнеса.
                </p>
                <p class="text-lg">
                  Моя задача — не писать за вас посты. Моя задача — помочь вам понять, кто вы, для
                  кого работаете и чем отличаетесь от других, а затем упаковать это в систему, где
                  личный бренд стабильно приводит заявки.
                </p>
                <p class="text-lg font-medium text-gray-900">
                  Опыт в бизнес-консалтинге позволяет мне думать категориями вашей прибыли, а не
                  просто роста подписчиков.
                </p>
              </div>

              <div class="grid grid-cols-3 gap-3 sm:gap-4 mt-10">
                <div
                  v-for="(stat, index) in aboutStats"
                  :key="index"
                  class="group relative p-3 sm:p-5 bg-white border border-gray-200 rounded-2xl hover:border-blue-300 transition-all"
                >
                  <div
                    v-if="stat.growth"
                    class="absolute top-2 right-2 text-[8px] sm:text-[10px] text-green-600 font-bold"
                  >
                    {{ stat.growth }}
                  </div>
                  <div class="text-xl sm:text-2xl md:text-3xl font-black text-gray-900 mb-1">
                    {{ stat.value }}
                  </div>
                  <div class="text-[10px] sm:text-xs text-gray-500 font-medium leading-tight">
                    {{ stat.label }}
                  </div>
                  <div
                    v-if="stat.sublabel"
                    class="text-[9px] sm:text-[10px] text-gray-400 mt-0.5 sm:mt-1 leading-tight"
                  >
                    {{ stat.sublabel }}
                  </div>
                </div>
              </div>

              <p class="text-sm text-gray-600 mt-6 italic">
                Эти же методы я применяю в работе с клиентами — и они дают измеримый результат.
              </p>
            </div>

            <div class="image-animate delay-200">
              <div class="relative">
                <div class="relative p-8 bg-white rounded-[2rem] shadow-xl border border-gray-100">
                  <h3 class="text-xl font-bold mb-6 flex items-center gap-3">
                    <span class="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                      <Icon name="fa-solid:bolt" class="w-5 h-5 text-white" />
                    </span>
                    Работаю в связке
                  </h3>
                  <div class="space-y-3">
                    <div class="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                      <div
                        class="w-12 h-12 bg-white rounded-xl flex items-center justify-center border border-gray-200"
                      >
                        <Icon name="fa-solid:pen-nib" class="w-6 h-6 text-gray-700" />
                      </div>
                      <div>
                        <div class="font-bold text-gray-900">Контент</div>
                        <div class="text-xs text-gray-500">Стратегия и производство</div>
                      </div>
                    </div>
                    <div class="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                      <div
                        class="w-12 h-12 bg-white rounded-xl flex items-center justify-center border border-gray-200"
                      >
                        <Icon name="fa-solid:globe" class="w-6 h-6 text-gray-700" />
                      </div>
                      <div>
                        <div class="font-bold text-gray-900">Веб</div>
                        <div class="text-xs text-gray-500">Сайты и приложения</div>
                      </div>
                    </div>
                    <div class="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                      <div
                        class="w-12 h-12 bg-white rounded-xl flex items-center justify-center border border-gray-200"
                      >
                        <Icon name="fa-solid:mobile" class="w-6 h-6 text-gray-700" />
                      </div>
                      <div>
                        <div class="font-bold text-gray-900">Мобильная разработка</div>
                        <div class="text-xs text-gray-500">iOS и Android</div>
                      </div>
                    </div>
                    <div class="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                      <div
                        class="w-12 h-12 bg-white rounded-xl flex items-center justify-center border border-gray-200"
                      >
                        <Icon name="fa-solid:bolt" class="w-6 h-6 text-gray-700" />
                      </div>
                      <div>
                        <div class="font-bold text-gray-900">Автоматизация</div>
                        <div class="text-xs text-gray-500">CRM и процессы</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 3. СИСТЕМА -->
      <section
        id="approach"
        class="py-16 md:py-24 lg:py-32 px-4 sm:px-6 border-t border-gray-100 bg-gray-50"
      >
        <div class="max-w-7xl mx-auto">
          <div class="text-center mb-20">
            <div
              class="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-2xl mb-6"
            >
              <span class="text-xs font-bold text-gray-700 uppercase tracking-wider">Система</span>
            </div>
            <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-4">
              Telegram — моя посадочная.<br />
              <span class="text-gray-400">Остальное — источники трафика</span>
            </h2>
            <p class="text-xl text-gray-600 max-w-2xl mx-auto">
              Системный подход к дистрибуции личного бренда
            </p>
          </div>

          <!-- Визуализация воронки -->
          <div class="relative max-w-5xl mx-auto mb-20">
            <!-- Верхний ряд: источники трафика -->
            <!-- На мобильном: вертикальный список, на десктопе: 5 в ряд -->
            <div class="relative z-10 grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-8 mb-8 md:mb-12">
              <div
                v-for="(source, index) in trafficSources"
                :key="index"
                class="group flex flex-col items-center gap-3"
              >
                <div
                  class="px-3 py-2 md:px-6 md:py-4 bg-white border border-gray-200 rounded-2xl transition-all hover:border-gray-300 w-full text-center"
                >
                  <span class="text-xs md:text-base font-bold text-gray-700">{{
                    source.name
                  }}</span>
                </div>
              </div>
            </div>

            <!-- Линии воронки -->
            <div class="relative h-40 md:h-64 mb-6 md:mb-8 -mt-6 md:-mt-8">
              <svg
                class="absolute inset-0 w-full h-full"
                viewBox="0 0 500 200"
                preserveAspectRatio="none"
              >
                <!-- 5 линий от каждого источника -->
                <path
                  d="M 50 0 C 50 80 150 120 250 200"
                  stroke="#2563EB"
                  stroke-width="3"
                  fill="none"
                  opacity="0.6"
                />
                <path
                  d="M 150 0 C 150 80 200 120 250 200"
                  stroke="#2563EB"
                  stroke-width="3"
                  fill="none"
                  opacity="0.6"
                />
                <path
                  d="M 250 0 C 250 80 250 120 250 200"
                  stroke="#2563EB"
                  stroke-width="3"
                  fill="none"
                  opacity="0.6"
                />
                <path
                  d="M 350 0 C 350 80 300 120 250 200"
                  stroke="#2563EB"
                  stroke-width="3"
                  fill="none"
                  opacity="0.6"
                />
                <path
                  d="M 450 0 C 450 80 350 120 250 200"
                  stroke="#2563EB"
                  stroke-width="3"
                  fill="none"
                  opacity="0.6"
                />

                <!-- 5 точек -->
                <circle r="5" fill="#2563EB" class="traffic-dot" />
                <circle r="5" fill="#2563EB" class="traffic-dot-2" />
                <circle r="5" fill="#2563EB" class="traffic-dot-3" />
                <circle r="5" fill="#2563EB" class="traffic-dot-4" />
                <circle r="5" fill="#2563EB" class="traffic-dot-5" />
              </svg>
            </div>

            <!-- Telegram в центре -->
            <div class="relative z-10 flex justify-center">
              <div class="relative">
                <div
                  class="absolute -inset-4 md:-inset-8 bg-blue-400/20 rounded-full blur-2xl"
                ></div>
                <a
                  href="https://t.me/bussinessetka"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="relative w-24 h-24 md:w-40 md:h-40 bg-blue-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  <svg
                    class="w-12 h-12 md:w-20 md:h-20 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"
                    />
                  </svg>
                </a>
                <div
                  class="absolute -bottom-4 left-1/2 -translate-x-1/2 px-4 py-1.5 md:px-5 md:py-2 bg-white border border-gray-200 rounded-full shadow-lg whitespace-nowrap"
                >
                  <span class="text-[10px] md:text-xs font-bold text-gray-700"
                    >Целевая аудитория</span
                  >
                </div>
              </div>
            </div>
          </div>

          <!-- Bento Grid: Модульная система -->
          <div class="max-w-6xl mx-auto">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
              <!-- Главная карточка: Telegram (2/3) -->
              <div
                class="md:col-span-2 p-6 md:p-8 rounded-[1.5rem] bg-gradient-to-br from-[#2AABEE] to-[#1E8FD5] text-white border border-[#1E8FD5]/20 shadow-lg"
              >
                <div class="flex items-center gap-3 mb-4">
                  <div
                    class="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm"
                  >
                    <Icon name="fa-brands:telegram" class="w-5 h-5 text-white" />
                  </div>
                  <span class="font-bold text-lg">Точка концентрации</span>
                </div>
                <div class="text-4xl md:text-5xl font-black mb-3">50-200</div>
                <p class="text-sm md:text-base text-white/90 leading-relaxed mb-2">
                  В Telegram ежемесячно приходят
                  <strong class="text-white">прогретые предприниматели и эксперты</strong>, готовые
                  к диалогу и сотрудничеству.
                </p>
                <p class="text-xs text-white/70">
                  Без шума алгоритмов. Только польза, кейсы и решения для роста дохода.
                </p>
              </div>

              <!-- Источники трафика (1/3) -->
              <div class="p-6 rounded-[1.5rem] bg-gray-50 border border-gray-200 shadow-sm">
                <div class="flex items-center gap-3 mb-4">
                  <div class="w-10 h-10 bg-gray-200 rounded-xl flex items-center justify-center">
                    <Icon name="fa-solid:rss" class="w-5 h-5 text-gray-700" />
                  </div>
                  <span class="font-bold text-gray-900 text-sm">Трафик</span>
                </div>
                <div class="space-y-3">
                  <div class="flex items-center gap-2">
                    <span class="w-2 h-2 rounded-full bg-green-500"></span>
                    <span class="text-sm text-gray-700">ТенЧат</span>
                  </div>
                  <div class="flex items-center gap-2">
                    <span class="w-2 h-2 rounded-full bg-red-500"></span>
                    <span class="text-sm text-gray-700">Дзен</span>
                  </div>
                  <div class="flex items-center gap-2">
                    <span class="w-2 h-2 rounded-full bg-black"></span>
                    <span class="text-sm text-gray-700">Тредс</span>
                  </div>
                  <div class="flex items-center gap-2">
                    <span class="w-2 h-2 rounded-full bg-blue-600"></span>
                    <span class="text-sm text-gray-700">ВК</span>
                  </div>
                </div>
                <p class="text-xs text-gray-500 mt-4 leading-relaxed">
                  Работают на охваты. Собирают внимание и фильтруют случайных зрителей.
                </p>
              </div>

              <!-- Охват 2000+ -->
              <div class="p-6 rounded-[1.5rem] bg-white border border-gray-200 shadow-sm">
                <div class="text-3xl md:text-4xl font-black text-gray-900 mb-2">2000+</div>
                <p class="text-sm text-gray-600 leading-relaxed">
                  подписчиков в соцсетях ежемесячно
                </p>
              </div>

              <!-- Подход -->
              <div class="p-6 rounded-[1.5rem] bg-gray-50 border border-gray-200 shadow-sm">
                <div class="flex items-start gap-3">
                  <span class="text-2xl flex-shrink-0">🎯</span>
                  <div>
                    <p class="text-sm text-gray-700 leading-relaxed font-medium mb-1">
                      Модель экономит бюджет и повышает конверсию
                    </p>
                    <p class="text-xs text-gray-500 leading-relaxed">
                      Я привожу в канал тех, кто уже прогрет и заинтересован. Каждая площадка играет
                      свою роль.
                    </p>
                  </div>
                </div>
              </div>

              <!-- CTA занимает оставшееся пространство -->
              <div class="md:col-span-3 flex justify-center pt-2">
                <a
                  href="https://t.me/artemselifanov"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="group inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-gray-900 hover:bg-gray-800 rounded-2xl transition-all hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
                >
                  <Icon name="fa-brands:telegram" class="w-5 h-5" />
                  <span>Записаться в Telegram</span>
                </a>
              </div>
            </div>
          </div>

          <!-- Раздел: Сообщества -->
          <div class="mt-20 py-12 border-t border-gray-100 animate-on-scroll">
            <div class="text-center mb-10">
              <div
                class="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50 border border-blue-100 rounded-xl mb-4 animate-on-scroll delay-100"
              >
                <Icon name="fa-brands:telegram" class="w-4 h-4 text-blue-600" />
                <span class="text-xs font-bold text-blue-700 uppercase tracking-wider"
                  >Сообщества</span
                >
              </div>
              <h3
                class="text-2xl md:text-3xl font-black text-gray-900 mb-3 animate-on-scroll delay-200"
              >
                Сообщества в Telegram
              </h3>
              <p class="text-gray-600 max-w-xl mx-auto animate-on-scroll delay-300">
                Закрытые сообщества для предпринимателей и экспертов, где вы найдёте полезные связи
                и окружение для роста
              </p>
            </div>

            <div class="flex justify-center gap-6 md:gap-8 animate-on-scroll delay-400">
              <NuxtLink to="/networking" class="group flex flex-col items-center relative">
                <!-- Карточка с цифрами справа сверху -->
                <div class="absolute -top-2 -right-2 md:-top-3 md:-right-3 z-10">
                  <div
                    class="inline-flex flex-col items-start gap-0 px-2 py-1 bg-green-50 border border-green-200 rounded-lg shadow-sm"
                  >
                    <div class="flex items-center gap-1 leading-none">
                      <svg class="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
                        />
                      </svg>
                      <span class="text-xs font-bold text-green-700">750</span>
                    </div>
                    <span class="text-[9px] text-green-600 leading-none mt-0.5">за 6 мес</span>
                  </div>
                </div>
                <div
                  class="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-gray-200 hover:border-gray-400 transition-all hover:shadow-xl hover:-translate-y-1 z-0"
                >
                  <img
                    src="/reference/networking.webp"
                    quality="75"
                    alt="Нескучный Нетворкинг"
                    class="absolute inset-0 w-full h-full object-cover pointer-events-none"
                  />
                </div>
                <div class="text-center mt-3">
                  <div class="text-sm font-bold text-gray-900">Нескучный Нетворкинг</div>
                  <div class="text-xs text-gray-500">Полезные связи</div>
                </div>
              </NuxtLink>
              <NuxtLink to="/business" class="group flex flex-col items-center relative">
                <!-- Карточка с цифрами справа сверху -->
                <div class="absolute -top-2 -right-2 md:-top-3 md:-right-3 z-10">
                  <div
                    class="inline-flex flex-col items-start gap-0 px-2 py-1 bg-blue-50 border border-blue-200 rounded-lg shadow-sm"
                  >
                    <div class="flex items-center gap-1 leading-none">
                      <svg class="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
                        />
                      </svg>
                      <span class="text-xs font-bold text-blue-700">240</span>
                    </div>
                    <span class="text-[9px] text-blue-600 leading-none mt-0.5">за 1,5 мес</span>
                  </div>
                </div>
                <div
                  class="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-gray-200 hover:border-gray-400 transition-all hover:shadow-xl hover:-translate-y-1 z-0"
                >
                  <img
                    src="/reference/business.webp"
                    quality="75"
                    alt="Бизнес Сетка"
                    class="absolute inset-0 w-full h-full object-cover pointer-events-none"
                  />
                </div>
                <div class="text-center mt-3">
                  <div class="text-sm font-bold text-gray-900">Бизнес Сетка</div>
                  <div class="text-xs text-gray-500">Закрытый клуб</div>
                </div>
              </NuxtLink>
            </div>
          </div>
        </div>
      </section>

      <!-- 4. УСЛУГИ -->
      <section id="services" class="py-16 md:py-24 lg:py-32 px-4 sm:px-6 border-t border-gray-100">
        <div class="max-w-7xl mx-auto">
          <div class="text-center mb-16">
            <div class="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-2xl mb-6">
              <span class="text-xs font-bold text-gray-700 uppercase tracking-wider">Услуги</span>
            </div>
            <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-4">
              Работа со мной
            </h2>
            <p class="text-xl text-gray-600 max-w-2xl mx-auto">Выберите формат сотрудничества</p>
          </div>

          <div class="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <!-- Карточка 1: Диагностика -->
            <div
              class="card-animate group p-8 bg-white border-2 border-gray-200 rounded-[2rem] hover:border-blue-300 transition-all hover:-translate-y-2"
            >
              <div class="mb-6">
                <div
                  class="w-14 h-14 bg-gray-100 rounded-2xl flex items-center justify-center mb-4"
                >
                  <Icon name="fa-solid:comment" class="w-7 h-7 text-gray-700" />
                </div>
                <h3 class="text-2xl font-bold mb-2">Диагностика</h3>
                <p class="text-sm text-gray-600">
                  Разберёмся, что мешает вашему каналу расти — за 30 минут
                </p>
              </div>

              <div class="mb-6">
                <div class="text-4xl font-black text-gray-900">Бесплатно</div>
                <div class="text-sm text-gray-500">30 минут</div>
              </div>

              <ul class="space-y-3 mb-8">
                <li v-for="(item, i) in service1Features" :key="i" class="flex items-start gap-3">
                  <Icon name="fa-solid:check" class="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span class="text-sm text-gray-700">{{ item }}</span>
                </li>
              </ul>

              <a
                href="#contact?service=Диагностика"
                class="group inline-flex items-center justify-center gap-2 w-full px-6 py-4 text-sm font-semibold text-gray-900 bg-gray-100 hover:bg-gray-200 rounded-2xl transition-all"
              >
                Записаться
              </a>
            </div>

            <!-- Карточка 2: Консультация -->
            <div
              class="card-animate delay-200 group p-8 bg-white border-2 border-gray-200 rounded-[2rem] hover:border-blue-300 transition-all hover:-translate-y-2"
            >
              <div class="mb-6">
                <div
                  class="w-14 h-14 bg-gray-100 rounded-2xl flex items-center justify-center mb-4"
                >
                  <Icon name="fa-solid:users" class="w-7 h-7 text-gray-700" />
                </div>
                <h3 class="text-2xl font-bold mb-2">Консультация</h3>
                <p class="text-sm text-gray-600">
                  Глубокий разбор позиционирования и конкретный план действий
                </p>
              </div>

              <div class="mb-6">
                <div class="text-4xl font-black text-gray-900">5 500 ₽</div>
                <div class="text-sm text-gray-500">за час</div>
              </div>

              <ul class="space-y-3 mb-8">
                <li v-for="(item, i) in service2Features" :key="i" class="flex items-start gap-3">
                  <Icon name="fa-solid:check" class="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span class="text-sm text-gray-700">{{ item }}</span>
                </li>
              </ul>

              <NuxtLink
                to="/consultation"
                class="group inline-flex items-center justify-center gap-2 w-full px-6 py-4 text-sm font-semibold text-gray-900 bg-gray-100 hover:bg-gray-200 rounded-2xl transition-all mb-3"
              >
                Подробнее
              </NuxtLink>
              <a
                href="#contact?service=Консультация"
                class="group inline-flex items-center justify-center gap-2 w-full px-6 py-4 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-2xl transition-all"
              >
                Записаться
              </a>
            </div>

            <!-- Карточка 3: Менторство -->
            <div
              class="card-animate delay-400 group p-8 bg-gray-900 rounded-[2rem] hover:shadow-xl transition-all hover:-translate-y-2"
            >
              <div class="mb-6">
                <div
                  class="w-14 h-14 bg-gray-800 rounded-2xl flex items-center justify-center mb-4"
                >
                  <Icon name="fa-solid:crown" class="w-7 h-7 text-white" />
                </div>
                <h3 class="text-2xl font-bold text-white mb-2">Менторство</h3>
                <p class="text-sm text-gray-400">Полное сопровождение 1 месяц</p>
              </div>

              <div class="mb-6">
                <div class="text-4xl font-black text-white">35 000 ₽</div>
                <div class="text-sm text-gray-400">за месяц</div>
              </div>

              <ul class="space-y-3 mb-8">
                <li v-for="(item, i) in service3Features" :key="i" class="flex items-start gap-3">
                  <Icon name="fa-solid:check" class="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span class="text-sm text-gray-300">{{ item }}</span>
                </li>
              </ul>

              <NuxtLink
                to="/mentorship"
                class="group inline-flex items-center justify-center gap-2 w-full px-6 py-4 text-sm font-semibold text-white bg-gray-800 hover:bg-gray-900 rounded-2xl transition-all mb-3"
              >
                Подробнее
              </NuxtLink>
              <a
                href="#contact?service=Менторство"
                class="group inline-flex items-center justify-center gap-2 w-full px-6 py-4 text-sm font-semibold text-gray-900 bg-white hover:bg-gray-100 rounded-2xl transition-all"
              >
                Начать работу
              </a>
            </div>
          </div>

          <!-- Дополнительные услуги -->
          <div class="mt-12 text-center">
            <p class="text-sm text-gray-500">
              Также предлагаю услуги по разработке:
              <NuxtLink
                to="/yappie"
                class="text-blue-600 hover:text-blue-700 font-medium underline decoration-blue-600/30 hover:decoration-blue-700 underline-offset-4 transition-all"
                >веб- и мобильная разработка</NuxtLink
              >
            </p>
          </div>
        </div>
      </section>

      <!-- 5. ЦЕЛЕВАЯ АУДИТОРИЯ -->
      <section class="py-16 md:py-24 lg:py-32 px-4 sm:px-6 border-t border-gray-100 bg-gray-50">
        <div class="max-w-7xl mx-auto">
          <div class="text-center mb-16">
            <div
              class="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-2xl mb-6"
            >
              <span class="text-xs font-bold text-gray-700 uppercase tracking-wider">Для кого</span>
            </div>
            <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-4">
              Если вы продаете свою экспертизу —<br />мы сработаемся
            </h2>
          </div>

          <div class="grid md:grid-cols-3 gap-6 mb-12">
            <div
              v-for="(audience, index) in targetAudience"
              :key="index"
              class="group p-8 bg-white border border-gray-200 rounded-[2rem] hover:border-blue-300 hover:shadow-xl transition-all hover:-translate-y-2"
            >
              <div class="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-6">
                <Icon :name="`fa-solid:${audience.icon}`" class="w-8 h-8 text-gray-700" />
              </div>
              <h3 class="text-2xl font-bold mb-4">{{ audience.title }}</h3>
              <p class="text-gray-600 leading-relaxed">{{ audience.description }}</p>
            </div>
          </div>

          <div class="p-8 bg-white rounded-[2rem] border border-gray-200">
            <h3 class="text-xl font-bold mb-6 text-center">Результат</h3>
            <div class="grid md:grid-cols-3 gap-6">
              <div
                v-for="(result, index) in workResults"
                :key="index"
                class="flex items-start gap-4 p-4 bg-gray-50 rounded-2xl"
              >
                <Icon
                  name="fa-solid:check-circle"
                  class="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5"
                />
                <div class="font-medium text-gray-900">{{ result }}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 6. ЭКОСИСТЕМА -->
      <section id="ecosystem" class="py-16 md:py-24 lg:py-32 px-4 sm:px-6 border-t border-gray-100">
        <div class="max-w-7xl mx-auto">
          <div class="text-center mb-16">
            <div class="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-2xl mb-6">
              <span class="text-xs font-bold text-gray-700 uppercase tracking-wider"
                >Инфраструктура</span
              >
            </div>
            <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-4">
              Экосистема проектов
            </h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              Для комплексного роста бизнеса я создал инфраструктуру, которая помогает моим клиентам
              масштабироваться
            </p>
          </div>

          <!-- Секция: Веб-разработка, Блог и База знаний -->
          <div class="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
            <NuxtLink
              to="/yappie"
              class="card-animate group p-8 bg-white border-2 border-gray-200 rounded-[2rem] hover:border-blue-300 hover:shadow-xl transition-all hover:-translate-y-2"
            >
              <div class="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-6">
                <Icon name="fa-solid:code" class="w-8 h-8 text-gray-700" />
              </div>
              <h3 class="text-2xl font-bold mb-3">Веб-разработка</h3>
              <p class="text-sm text-gray-600 leading-relaxed mb-6">
                Сайты, которые продают, а не просто висят
              </p>
              <div class="flex items-center gap-2 text-xs font-bold uppercase tracking-wide">
                <span>Посмотреть услуги</span>
                <Icon
                  name="fa-solid:arrow-right"
                  class="w-4 h-4 transition-transform group-hover:translate-x-2"
                />
              </div>
            </NuxtLink>

            <NuxtLink
              to="/blog"
              class="card-animate delay-200 group p-8 bg-white border-2 border-gray-200 rounded-[2rem] hover:border-blue-300 hover:shadow-xl transition-all hover:-translate-y-2"
            >
              <div class="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-6">
                <Icon name="fa-solid:newspaper" class="w-8 h-8 text-gray-700" />
              </div>
              <h3 class="text-2xl font-bold mb-3">Блог</h3>
              <p class="text-sm text-gray-600 leading-relaxed mb-6">
                Статьи о разработке, автоматизации и AI для бизнеса
              </p>
              <div class="flex items-center gap-2 text-xs font-bold uppercase tracking-wide">
                <span>Читать статьи</span>
                <Icon
                  name="fa-solid:arrow-right"
                  class="w-4 h-4 transition-transform group-hover:translate-x-2"
                />
              </div>
            </NuxtLink>

            <NuxtLink
              to="/knowledge"
              class="card-animate delay-300 group p-8 bg-white border-2 border-gray-200 rounded-[2rem] hover:border-orange-300 hover:shadow-xl transition-all hover:-translate-y-2"
            >
              <div class="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-6">
                <Icon name="fa-solid:book-open" class="w-8 h-8 text-gray-700" />
              </div>
              <h3 class="text-2xl font-bold mb-3">База знаний</h3>
              <p class="text-sm text-gray-600 leading-relaxed mb-6">
                220+ постов о личном бренде, контенте и продвижении
              </p>
              <div class="flex items-center gap-2 text-xs font-bold uppercase tracking-wide">
                <span>Изучить материалы</span>
                <Icon
                  name="fa-solid:arrow-right"
                  class="w-4 h-4 transition-transform group-hover:translate-x-2"
                />
              </div>
            </NuxtLink>
          </div>

          <!-- Секция 3: Полный цикл -->
          <div class="py-12 border-t border-gray-100 animate-on-scroll">
            <div
              class="bg-gradient-to-r from-gray-50 via-white to-gray-50 rounded-[2rem] border border-gray-200 p-8 md:p-12"
            >
              <div class="text-center mb-10">
                <div
                  class="inline-flex items-center gap-2 px-3 py-1.5 bg-green-50 border border-green-100 rounded-xl mb-4 animate-on-scroll delay-100"
                >
                  <Icon name="fa-solid:sync" class="w-4 h-4 text-green-600" />
                  <span class="text-xs font-bold text-green-700 uppercase tracking-wider"
                    >Система</span
                  >
                </div>
                <h3
                  class="text-2xl md:text-3xl font-black text-gray-900 mb-3 animate-on-scroll delay-200"
                >
                  Полный цикл работы с клиентом
                </h3>
                <p class="text-gray-600 max-w-2xl mx-auto animate-on-scroll delay-300">
                  Закрываю всю цепочку: от привлечения внимания до автоматизации продаж
                </p>
              </div>

              <!-- Квадратная схема цикла -->
              <div class="relative max-w-2xl mx-auto animate-on-scroll delay-400">
                <!-- Сетка 2x2 -->
                <div class="grid grid-cols-2 gap-2 md:gap-6">
                  <!-- Верхний левый угол: Привлек -->
                  <div class="col-span-1 relative">
                    <div
                      class="p-2 md:p-5 bg-white border-2 border-blue-200 rounded-2xl text-center shadow-lg w-full"
                    >
                      <div
                        class="w-8 h-8 md:w-12 md:h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-1 md:mb-2"
                      >
                        <Icon
                          name="fa-solid:bullhorn"
                          class="w-4 h-4 md:w-6 md:h-6 text-blue-600"
                        />
                      </div>
                      <div class="text-[10px] md:text-base font-bold text-gray-900">Привлек</div>
                      <div class="text-[9px] md:text-xs text-gray-500">Контент</div>
                    </div>
                    <!-- Стрелка вправо (на Обогрел) -->
                    <div
                      class="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10"
                    >
                      <Icon name="fa-solid:arrow-right" class="w-4 h-4 text-gray-400" />
                    </div>
                  </div>

                  <!-- Верхний правый угол: Обогрел -->
                  <div class="col-span-1 relative">
                    <div
                      class="p-2 md:p-5 bg-white border-2 border-purple-200 rounded-2xl text-center shadow-lg w-full"
                    >
                      <div
                        class="w-8 h-8 md:w-12 md:h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-1 md:mb-2"
                      >
                        <Icon name="fa-solid:heart" class="w-4 h-4 md:w-6 md:h-6 text-purple-600" />
                      </div>
                      <div class="text-[10px] md:text-base font-bold text-gray-900">Обогрел</div>
                      <div class="text-[9px] md:text-xs text-gray-500">Сообщество</div>
                    </div>
                    <!-- Стрелка вниз (на Упаковал) -->
                    <div
                      class="hidden md:block absolute -bottom-3 left-1/2 transform -translate-x-1/2 z-10 rotate-90"
                    >
                      <Icon name="fa-solid:arrow-right" class="w-4 h-4 text-gray-400" />
                    </div>
                  </div>

                  <!-- Нижний левый угол: Обработал -->
                  <div class="col-span-1 relative">
                    <div
                      class="p-2 md:p-5 bg-white border-2 border-orange-200 rounded-2xl text-center shadow-lg w-full"
                    >
                      <div
                        class="w-8 h-8 md:w-12 md:h-12 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-1 md:mb-2"
                      >
                        <Icon name="fa-solid:cog" class="w-4 h-4 md:w-6 md:h-6 text-orange-600" />
                      </div>
                      <div class="text-[10px] md:text-base font-bold text-gray-900">Обработал</div>
                      <div class="text-[9px] md:text-xs text-gray-500">Автоматизация</div>
                    </div>
                    <!-- Стрелка вверх (на Привлек) -->
                    <div
                      class="hidden md:block absolute -top-3 left-1/2 transform -translate-x-1/2 z-10 -rotate-90"
                    >
                      <Icon name="fa-solid:arrow-right" class="w-4 h-4 text-gray-400" />
                    </div>
                  </div>

                  <!-- Нижний правый угол: Упаковал -->
                  <div class="col-span-1 relative">
                    <div
                      class="p-2 md:p-5 bg-white border-2 border-green-200 rounded-2xl text-center shadow-lg w-full"
                    >
                      <div
                        class="w-8 h-8 md:w-12 md:h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-1 md:mb-2"
                      >
                        <Icon
                          name="fa-solid:laptop-code"
                          class="w-4 h-4 md:w-6 md:h-6 text-green-600"
                        />
                      </div>
                      <div class="text-[10px] md:text-base font-bold text-gray-900">Упаковал</div>
                      <div class="text-[9px] md:text-xs text-gray-500">Сайт</div>
                    </div>
                    <!-- Стрелка влево (на Обработал) -->
                    <div
                      class="hidden md:block absolute top-1/2 -left-3 transform -translate-y-1/2 z-10 rotate-180"
                    >
                      <Icon name="fa-solid:arrow-right" class="w-4 h-4 text-gray-400" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 7. КЕЙСЫ -->
      <section
        id="cases"
        class="py-16 md:py-24 lg:py-32 px-4 sm:px-6 border-t border-gray-100 bg-gray-50"
      >
        <div class="max-w-7xl mx-auto">
          <div class="text-center mb-16 animate-on-scroll">
            <div
              class="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-2xl mb-6 animate-on-scroll delay-100"
            >
              <Icon name="fa-solid:chart-line" class="w-4 h-4 text-gray-700" />
              <span class="text-xs font-bold text-gray-700 uppercase tracking-wider"
                >Результаты</span
              >
            </div>
            <h2
              class="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-4 animate-on-scroll delay-200"
            >
              Результаты: личный пример и внедрённые методики
            </h2>
          </div>

          <div class="space-y-5 max-w-5xl mx-auto">
            <div
              v-for="(caseItem, index) in cases"
              :key="index"
              :class="[
                'card-animate group p-5 md:p-8 bg-white border border-gray-200 rounded-[1.5rem] hover:border-blue-300 hover:shadow-xl transition-all hover:-translate-y-1',
                index === 1 ? 'delay-200' : index === 2 ? 'delay-400' : '',
              ]"
            >
              <!-- Badge + Заголовок -->
              <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-6">
                <div>
                  <span
                    class="inline-block px-3 py-1.5 text-xs font-bold text-blue-700 bg-blue-50 border border-blue-100 rounded-xl mb-2"
                  >
                    {{ caseItem.badge }}
                  </span>
                  <h3 class="text-lg md:text-xl font-bold leading-snug text-gray-900">
                    {{ caseItem.title }}
                  </h3>
                </div>
                <p class="text-sm text-gray-500 max-w-xs sm:text-right flex-shrink-0">
                  {{ caseItem.task }}
                </p>
              </div>

              <!-- До / После -->
              <div
                class="grid grid-cols-1 md:grid-cols-2 gap-0 border border-gray-200 rounded-xl overflow-hidden"
              >
                <!-- Было -->
                <div class="p-5 bg-gray-50">
                  <div class="flex items-center gap-2 mb-3">
                    <span class="text-lg">❌</span>
                    <span class="text-xs font-bold text-gray-500 uppercase tracking-wide"
                      >Было</span
                    >
                  </div>
                  <p class="text-sm text-gray-700 leading-relaxed">{{ caseItem.pointA }}</p>
                </div>

                <!-- Стало -->
                <div class="p-5 bg-green-50 md:border-l-2 md:border-gray-200">
                  <div class="flex items-center gap-2 mb-3">
                    <span class="text-lg">✅</span>
                    <span class="text-xs font-bold text-green-700 uppercase tracking-wide"
                      >Стало</span
                    >
                  </div>
                  <ul class="space-y-2">
                    <li v-for="(res, i) in caseItem.result" :key="i" class="flex items-start gap-2">
                      <Icon
                        name="fa-solid:check"
                        class="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5"
                      />
                      <span class="text-sm font-medium text-green-800">{{ res }}</span>
                    </li>
                  </ul>
                </div>
              </div>

              <!-- Решение (одна строка) -->
              <div class="mt-4 flex items-start gap-2 text-sm text-gray-600">
                <span class="text-blue-600 flex-shrink-0 mt-0.5">
                  <Icon name="fa-solid:lightbulb" class="w-4 h-4" />
                </span>
                <span>
                  <strong class="text-gray-800">Решение:</strong>
                  {{ caseItem.solution.join('; ') }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 7.5. ОТЗЫВЫ -->
      <section
        id="testimonials"
        class="py-16 md:py-24 lg:py-32 px-4 sm:px-6 border-t border-gray-100 bg-gray-50"
      >
        <div class="max-w-7xl mx-auto">
          <div class="text-center mb-16 animate-on-scroll">
            <div
              class="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-2xl mb-6 animate-on-scroll delay-100"
            >
              <Icon name="fa-solid:quote-left" class="w-4 h-4 text-blue-600" />
              <span class="text-xs font-bold text-gray-700 uppercase tracking-wider">Отзывы</span>
            </div>
            <h2
              class="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-4 animate-on-scroll delay-200"
            >
              Что говорят клиенты
            </h2>
            <p class="text-lg text-gray-600 max-w-2xl mx-auto animate-on-scroll delay-300">
              Реальные истории людей, которые уже внедрили мои рекомендации
            </p>
          </div>

          <div class="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            <div
              v-for="(testimonial, index) in testimonials"
              :key="index"
              :class="[
                'card-animate group p-8 bg-white border border-gray-200 rounded-[2rem] hover:border-blue-300 hover:shadow-xl transition-all hover:-translate-y-2',
                index === 1
                  ? 'delay-200'
                  : index === 2
                    ? 'delay-400'
                    : index === 3
                      ? 'delay-200'
                      : '',
              ]"
            >
              <!-- Иконка кавычек -->
              <div class="mb-6">
                <Icon name="fa-solid:quote-left" class="w-8 h-8 text-blue-200" />
              </div>

              <!-- Текст отзыва -->
              <p class="text-gray-700 leading-relaxed mb-6 text-sm md:text-base">
                {{ testimonial.text }}
              </p>

              <!-- Автор -->
              <div class="flex items-center gap-4 pt-6 border-t border-gray-100">
                <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span class="text-lg font-bold text-blue-700">{{ testimonial.initial }}</span>
                </div>
                <div>
                  <div class="font-bold text-gray-900">{{ testimonial.name }}</div>
                  <div class="text-sm text-gray-500">{{ testimonial.role }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 8. ЭТАПЫ РАБОТЫ -->
      <section class="py-16 md:py-24 lg:py-32 px-4 sm:px-6 border-t border-gray-100">
        <div class="max-w-7xl mx-auto">
          <div class="text-center mb-16 animate-on-scroll">
            <div
              class="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-2xl mb-6 animate-on-scroll delay-100"
            >
              <span class="text-xs font-bold text-gray-700 uppercase tracking-wider">Процесс</span>
            </div>
            <h2
              class="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-4 animate-on-scroll delay-200"
            >
              Этапы работы
            </h2>
          </div>

          <div class="relative max-w-5xl mx-auto">
            <div class="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gray-300"></div>

            <div class="space-y-12">
              <div
                v-for="(step, index) in workSteps"
                :key="index"
                :class="[
                  'card-animate relative flex items-center gap-8 md:gap-12',
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse',
                  index === 0
                    ? ''
                    : index === 1
                      ? 'delay-200'
                      : index === 2
                        ? 'delay-400'
                        : index === 3
                          ? 'delay-200'
                          : 'delay-400',
                ]"
              >
                <div
                  :class="[
                    'flex-1 ml-20 md:ml-0',
                    index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12',
                  ]"
                >
                  <div
                    class="p-6 bg-white border-2 border-gray-100 rounded-3xl hover:border-blue-300 transition-all"
                  >
                    <h3 class="text-xl font-bold mb-2">{{ step.title }}</h3>
                    <p class="text-gray-600">{{ step.description }}</p>
                  </div>
                </div>

                <div
                  class="absolute left-8 md:left-1/2 -translate-x-1/2 w-16 h-16 bg-gray-900 rounded-2xl flex items-center justify-center shadow-lg z-10"
                >
                  <span class="text-2xl font-black text-white">{{ index + 1 }}</span>
                </div>

                <div class="flex-1 hidden md:block"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 8. FAQ -->
      <section id="faq" class="py-16 md:py-24 lg:py-32 px-4 sm:px-6 border-t border-gray-100">
        <div class="max-w-4xl mx-auto">
          <div class="text-center mb-12 animate-on-scroll">
            <div
              class="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-2xl mb-6 animate-on-scroll delay-100"
            >
              <Icon name="fa-solid:question" class="w-4 h-4 text-gray-700" />
              <span class="text-xs font-bold text-gray-700 uppercase tracking-wider">FAQ</span>
            </div>
            <h2
              class="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-4 animate-on-scroll delay-200"
            >
              Часто задаваемые вопросы
            </h2>
            <p class="text-lg text-gray-600 max-w-2xl mx-auto animate-on-scroll delay-300">
              Ответы на популярные вопросы о личном бренде, продвижении и работе со мной
            </p>
          </div>

          <div class="space-y-4">
            <div
              v-for="(faq, index) in faqs"
              :key="index"
              :class="[
                'card-animate group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-violet-300 hover:shadow-md transition-all',
                index === 0
                  ? ''
                  : index === 1
                    ? 'delay-200'
                    : index === 2
                      ? 'delay-400'
                      : index === 3
                        ? 'delay-200'
                        : 'delay-400',
              ]"
            >
              <button
                class="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                @click="toggleFaq(index)"
              >
                <span class="text-base md:text-lg font-semibold text-gray-900 pr-4">
                  {{ faq.question }}
                </span>
                <svg
                  :class="[
                    'w-5 h-5 text-gray-500 flex-shrink-0 transition-transform duration-300',
                    openFaqIndex === index ? 'rotate-180' : '',
                  ]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                v-show="openFaqIndex === index"
                class="px-6 pb-6 text-gray-700 leading-relaxed"
                v-html="faq.answer"
              ></div>
            </div>
          </div>
        </div>
      </section>

      <!-- 9. CONTACT FORM -->
      <section
        id="contact"
        class="py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-br from-violet-50 via-white to-blue-50"
      >
        <div class="w-full flex flex-col lg:flex-row justify-center gap-6 lg:gap-8">
          <!-- Левая колонка: Текст и преимущества -->
          <div class="w-full lg:w-[40%] space-y-6">
            <div
              class="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-2xl shadow-sm"
            >
              <Icon name="fa-solid:envelope" class="w-4 h-4 text-violet-600" />
              <span class="text-xs font-bold text-gray-700 uppercase tracking-wider"
                >Связаться со мной</span
              >
            </div>

            <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
              Готовы обсудить ваш проект?
            </h2>

            <p class="text-lg text-gray-600 leading-relaxed">
              Заполните форму и я свяжусь с вами в течение 24 часов. Консультация бесплатная —
              обсудим ваши задачи и я предложу варианты решения.
            </p>

            <!-- Преимущества -->
            <div class="space-y-5">
              <div class="flex items-start gap-4">
                <div
                  class="flex-shrink-0 w-12 h-12 bg-violet-100 rounded-xl flex items-center justify-center shadow-sm"
                >
                  <Icon name="fa-solid:clock" class="w-5 h-5 text-violet-600" />
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900 mb-1">Быстрый ответ</h3>
                  <p class="text-sm text-gray-600">Отвечаю в течение 24 часов в рабочее время</p>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <div
                  class="flex-shrink-0 w-12 h-12 bg-violet-100 rounded-xl flex items-center justify-center shadow-sm"
                >
                  <Icon name="fa-solid:shield-alt" class="w-5 h-5 text-violet-600" />
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900 mb-1">Конфиденциально</h3>
                  <p class="text-sm text-gray-600">
                    Ваши данные под защитой и не передаются третьим лицам
                  </p>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <div
                  class="flex-shrink-0 w-12 h-12 bg-violet-100 rounded-xl flex items-center justify-center shadow-sm"
                >
                  <Icon name="fa-solid:lightbulb" class="w-5 h-5 text-violet-600" />
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900 mb-1">Бесплатная консультация</h3>
                  <p class="text-sm text-gray-600">Обсудим задачи и я предложу варианты решения</p>
                </div>
              </div>
            </div>

            <!-- Контакты альтернативные -->
            <div class="mt-10 pt-8 border-t border-gray-200">
              <p class="text-sm text-gray-600 mb-4 font-medium">Или напишите напрямую:</p>
              <div class="flex flex-wrap gap-3">
                <a
                  href="https://t.me/artemselifanov"
                  target="_blank"
                  rel="noopener"
                  class="inline-flex items-center gap-2 px-4 py-2.5 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-sm font-medium transition-all shadow-md hover:shadow-lg"
                >
                  <Icon name="fa-brands:telegram" class="w-4 h-4" />
                  Telegram
                </a>
                <a
                  href="mailto:a9535487323@yandex.ru"
                  class="inline-flex items-center gap-2 px-4 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-900 rounded-lg text-sm font-medium transition-all shadow-md hover:shadow-lg"
                >
                  <Icon name="fa-solid:at" class="w-4 h-4" />
                  Email
                </a>
              </div>
            </div>
          </div>

          <!-- Правая колонка: Форма -->
          <div class="w-full lg:w-[40%] bg-white rounded-2xl shadow-lg p-5 sm:p-6 lg:p-8">
            <ContactForm default-source="Главная страница" :selected-service="selectedService" />
          </div>
        </div>
      </section>

      <!-- FOOTER + CTA -->
      <Footer
        :social-networks="socialNetworks"
        :show-cta="false"
        cta-link="https://t.me/artemselifanov"
      />
    </main>

    <!-- Нижняя навигация для мобильных -->
    <MobileBottomNav theme="light" />

    <!-- Push уведомления промопт (отключено) -->
    <!-- <PushNotificationPrompt /> -->

    <!-- Кнопка наверх (фиксированная, видна при скролле) - только для десктопа -->
    <button
      v-show="scrolled"
      class="hidden md:flex p-3 bg-gray-900/90 hover:bg-gray-900 rounded-2xl transition-all shadow-lg backdrop-blur-sm items-center justify-center"
      :style="{ position: 'fixed', bottom: '16px', right: '16px', zIndex: '9999' }"
      @click="scrollToTop"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 384 512"
        class="w-5 h-5 text-white block"
        fill="currentColor"
      >
        <path
          d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
        />
      </svg>
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import ScrollProgress from '~/components/layout/ScrollProgress.vue'
import Header from '~/components/layout/Header.vue'
import BaseMobileMenu from '~/components/layout/BaseMobileMenu.vue'
import Footer from '~/components/layout/Footer.vue'
import MobileBottomNav from '~/components/layout/MobileBottomNav.vue'
// import PushNotificationPrompt from '~/components/ui/PushNotificationPrompt.vue'
import ContactForm from '~/components/ui/ContactForm.vue'

// SEO для главной страницы
useSeoMeta({
  title: 'Артём Селифанов — Личный бренд для экспертов и предпринимателей | Клиенты и высокий чек',
  description:
    'Помогаю экспертам и предпринимателям выйти на высокий чек и стабильный поток клиентов через личный бренд. Упаковка, стратегия, Telegram. Работаю с 2021 года.',
  keywords:
    'личный бренд, продвижение эксперта, контент-маркетинг, нетворкинг, позиционирование эксперта, Артём Селифанов, Telegram-канал, упаковка профиля, стратегия продвижения, личный бренд телеграм, продвижение в telegram, личный бренд для предпринимателя, упаковка эксперта, контент стратегия, личный маркетинг, продвижение услуг, эксперт телеграм, личный бренд с нуля, монетизация блога, личный бренд 2026, нетворкинг для бизнеса, личный бренд психолог, личный бренд юрист, личный бренд маркетолог, продвижение консультанта, личный бренд коуч, telegram продвижение, личный бренд цена, упаковка соцсетей, позиционирование бренда, личный бренд стратегия, контент план телеграм, личный бренд стоимость',
  author: 'Артём Селифанов',
  robots: 'index, follow',
  ogTitle:
    'Артём Селифанов — Личный бренд для экспертов и предпринимателей | Клиенты и высокий чек',
  ogDescription:
    'Помогаю экспертам и предпринимателям выйти на высокий чек и стабильный поток клиентов через личный бренд. Упаковка, стратегия, Telegram. Работаю с 2021 года.',
  ogType: 'website',
  ogLocale: 'ru_RU',
  ogUrl: 'https://artemselifanov.ru',
  ogImage: 'https://artemselifanov.ru/reference/openGraph/opengraph_index.webp',
  twitterCard: 'summary_large_image',
  twitterTitle:
    'Артём Селифанов — Личный бренд для экспертов и предпринимателей | Клиенты и высокий чек',
  twitterDescription:
    'Помогаю экспертам и предпринимателям выйти на высокий чек и стабильный поток клиентов через личный бренд. Упаковка, стратегия, Telegram. Работаю с 2021 года.',
  twitterUrl: 'https://artemselifanov.ru',
  twitterImage: 'https://artemselifanov.ru/reference/openGraph/opengraph_index.webp',
})

useHead({
  link: [{ rel: 'canonical', href: 'https://artemselifanov.ru' }],
  // Критический CSS для hero-секции - ускоряет FCP и LCP
  style: [
    {
      children: `
        .hero-critical{min-height:100vh;display:flex;align-items:center}
        @media(max-width:1024px){.lg\\:grid-cols-12{display:grid;grid-template-columns:repeat(12,minmax(0,1fr));gap:2rem}}
        @media(min-width:1024px){.lg\\:col-span-8{grid-column:span 8/span 8}}
        @media(min-width:1024px){.lg\\:col-span-4{grid-column:span 4/span 4}}
      `,
      tagPosition: 'head',
    },
  ],
})

// Schema.org разметка
useSchemaOrg([
  defineOrganization({
    name: 'Артём Селифанов',
    url: 'https://artemselifanov.ru',
    logo: 'https://artemselifanov.ru/logo.png',
    sameAs: ['https://t.me/artemselifanov'],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+7-953-548-73-23',
      contactType: 'customer service',
      areaServed: 'RU',
      availableLanguage: ['Russian'],
    },
    email: 'a9535487323@yandex.ru',
  }),
  defineWebSite({
    name: 'Артём Селифанов — Личный бренд для предпринимателей и экспертов',
    url: 'https://artemselifanov.ru',
    description: 'Помогаю предпринимателям и экспертам создать личный бренд, который продаёт',
    inLanguage: 'ru-RU',
    hasPart: [
      {
        '@type': 'WebPage',
        url: 'https://artemselifanov.ru/networking',
        name: 'Нескучный Нетворкинг',
      },
      { '@type': 'WebPage', url: 'https://artemselifanov.ru/business', name: 'Бизнес Сетка' },
      { '@type': 'WebPage', url: 'https://artemselifanov.ru/yappie', name: 'Веб-разработка' },
      { '@type': 'WebPage', url: 'https://artemselifanov.ru/study', name: 'Фокус — Обучение' },
      { '@type': 'WebPage', url: 'https://artemselifanov.ru/blog', name: 'Блог' },
      { '@type': 'WebPage', url: 'https://artemselifanov.ru/knowledge', name: 'База знаний' },
      { '@type': 'WebPage', url: 'https://artemselifanov.ru/consultation', name: 'Консультация' },
      { '@type': 'WebPage', url: 'https://artemselifanov.ru/mentorship', name: 'Менторство' },
    ],
  }),
  defineWebPage({
    '@type': 'WebPage',
    name: 'Артём Селифанов — Личный бренд для предпринимателей и экспертов',
    description:
      'Помогаю предпринимателям и экспертам создать личный бренд, который продаёт. Стратегия, упаковка, контент и дистрибуция в Telegram',
    url: 'https://artemselifanov.ru',
  }),
])

const scrolled = ref(false)
const openFaqIndex = ref(null)

// Функция для переключения FAQ
function toggleFaq(index) {
  openFaqIndex.value = openFaqIndex.value === index ? null : index
}

// FAQ данные
const faqs = ref([
  {
    question: 'Что такое личный бренд и зачем он нужен эксперту?',
    answer: `<p class="mb-3">Личный бренд — это то, что о вас думают люди, когда вас нет в комнате. Для эксперта или предпринимателя это инструмент, который работает на вас 24/7: привлекает клиентов, повышает доверие и позволяет продавать дороже конкурентов.</p><p class="mb-3">Без личного бренда вы продаёте «ещё один коучинг». С личным брендом — продаёте себя как уникальную ценность, и клиенты приходят сами, уже прогретые.</p><p>Я работаю с экспертами с 2021 года и помогаю выстроить систему, где личный бренд становится главным каналом привлечения заявок — без бесконечного постинга и хаоса.</p>`,
  },
  {
    question: 'Чем личный бренд отличается от обычного SMM?',
    answer: `<p class="mb-3">SMM — это публикации в соцсетях. Личный бренд — это смысловая система: кто вы, для кого, чем отличаетесь от других и почему вам стоит доверять.</p><p>Я не занимаюсь SMM в классическом понимании. Я помогаю найти и упаковать ваши смыслы, выстроить позиционирование и создать инфраструктуру, которая превращает подписчиков в клиентов. Контент — лишь один из инструментов в этой системе.</p>`,
  },
  {
    question: 'Нужен ли личный бренд, если у меня уже есть клиенты через сарафан?',
    answer: `<p class="mb-3">Сарафанное радио — отличный старт, но оно не масштабируется. Личный бренд позволяет выйти за рамки «знакомых знакомых» и привлекать клиентов системно, на более высокий чек и из разных источников одновременно.</p><p>Кроме того, сильный личный бренд — это защита бизнеса: когда рынок меняется или один канал перестаёт работать, ваше имя остаётся активом.</p>`,
  },
  {
    question: 'Личный бренд — это для публичных людей. Мне это подходит?',
    answer: `<p>Распространённое заблуждение. Личный бренд не требует миллионной аудитории или публичности. Даже 500–1000 целевых подписчиков в Telegram могут стабильно приносить заявки на высокий чек — если правильно выстроено позиционирование и контент.</p><p class="mb-3">Я работаю с экспертами, которые не хотят становиться «инфлюенсерами», но хотят, чтобы нужные люди знали об их экспертизе и доверяли ей.</p>`,
  },
  {
    question: 'Как выглядит процесс работы?',
    answer: `<p class="mb-3">Работа строится в 5 этапов:</p><ol class="list-decimal list-inside space-y-2 mb-3"><li><strong>Аудит и стратегия</strong> — погружаюсь в ваш бизнес, анализирую конкурентов, определяю целевую аудиторию и точки роста.</li><li><strong>Упаковка</strong> — оформляем профили, создаём визуальный стиль, прописываем позиционирование и гайдлайны.</li><li><strong>Контент-производство</strong> — разрабатываем контент-стратегию, создаём первые материалы и шаблоны.</li><li><strong>Дистрибуция</strong> — запускаем публикации в 5 площадках, выстраиваем систему кросс-постинга и нетворкинга.</li><li><strong>Аналитика и оптимизация</strong> — отслеживаем результаты, корректируем стратегию, подключаем автоматизацию.</li></ol><p>На каждом этапе вы понимаете, что происходит и зачем. Никаких «магических действий» — только системная работа с измеримым результатом.</p>`,
  },
  {
    question: 'С какими площадками вы работаете?',
    answer: `<p class="mb-3">Основной канал — <strong>Telegram</strong>: здесь концентрируется целевая, прогретая аудитория, готовая к диалогу.</p><p>Как источники трафика использую: <strong>ВКонтакте, Яндекс Дзен, TenChat, Сетка, Threads</strong>. Каждая платформа решает свою задачу: собирает охваты и фильтрует случайных зрителей, направляя заинтересованных — в Telegram.</p><p class="mb-3">Такой мультиплатформенный подход позволяет получать до 2000+ новых подписчиков в месяц органически, без рекламного бюджета.</p>`,
  },
  {
    question: 'Вы пишете посты за меня?',
    answer: `<p>Нет. Я не ghostwriter и не контент-менеджер. Моя задача — выстроить <strong>систему</strong>: помочь вам найти и сформулировать свои смыслы, создать стратегию и инфраструктуру, научить вас создавать контент эффективно.</p><p class="mb-3">В рамках менторства я разбираю каждый ваш материал, даю обратную связь и помогаю совершенствовать подачу. Со временем вы начинаете создавать контент быстрее и увереннее.</p>`,
  },
  {
    question: 'Сколько времени мне нужно тратить на личный бренд?',
    answer: `<p>Я разработал систему <strong>«30 минут в день»</strong> — методологию, при которой один смысл адаптируется под несколько площадок и форматов. Это позволяет поддерживать активное присутствие в 5+ сетях без выгорания.</p><p class="mb-3">В первый месяц работы потребуется больше времени — на упаковку и создание базы контента. Дальше система работает на потоке.</p>`,
  },
  {
    question: 'Какие форматы работы вы предлагаете?',
    answer: `<p class="mb-3">На данный момент доступны три формата:</p><ul class="list-disc list-inside space-y-2 mb-3"><li><strong>Бесплатная диагностика</strong> (30 минут) — экспресс-аудит Telegram-канала, выявление точек роста, рекомендации по улучшению.</li><li><strong>Консультация</strong> (1 час, 5 500 ₽) — глубокий разбор вашего блога, анализ позиционирования, конкретные шаги к улучшению.</li><li><strong>Менторство</strong> (1 месяц, 35 000 ₽) — полное сопровождение: еженедельные созвоны, контент-стратегия, помощь в создании продукта, настройка продаж, ежедневная обратная связь.</li></ul><p>Также оказываю услуги по <strong>веб- и мобильной разработке</strong> — подробнее на странице <a href="/yappie" class="text-violet-600 hover:underline">Веб-разработка</a>.</p>`,
  },
  {
    question: 'С чего лучше начать, если я только думаю об этом?',
    answer: `<p>Запишитесь на <strong>бесплатную диагностику</strong>. За 30 минут я посмотрю на вашу текущую ситуацию и скажу честно: есть ли смысл вкладываться в личный бренд прямо сейчас, что мешает росту и с чего стоит начать.</p><p class="mb-3">Никаких обязательств — просто полезный разговор с конкретными выводами.</p>`,
  },
  {
    question: 'Вы гарантируете результат?',
    answer: `<p>Я гарантирую качество работы и системный подход. Конечный результат — рост аудитории, заявки, доход — зависит от вас: от вашего участия, последовательности и готовности внедрять рекомендации.</p><p class="mb-3">Мой личный пример: канал «Нескучный Нетворкинг» — 500+ подписчиков за 3 месяца органически, без рекламного бюджета. Конверсия в Telegram из органических источников — до 50% на тестовых постах. Эти результаты достигнуты теми же методами, которые я применяю в работе с клиентами.</p>`,
  },
  {
    question: 'Почему именно Telegram, а не Instagram или YouTube?',
    answer: `<p class="mb-3">Telegram сегодня — наиболее конверсионная площадка для экспертного бизнеса в России. Аудитория здесь осознанная, алгоритмы не «прячут» контент, а прямой контакт с подписчиком выше, чем на любой другой платформе.</p><p>Кроме того, Telegram — это точка концентрации: сюда приходит только «отфильтрованная» аудитория из других площадок. Такие подписчики конвертируются в клиентов в 3–5 раз лучше, чем холодный трафик из рекламы.</p>`,
  },
  {
    question: 'Как быстро можно набрать первых подписчиков в Telegram без рекламы?',
    answer: `<p class="mb-3">Органический рост в Telegram требует 2–4 месяцев системной работы. Ключевые инструменты: кросс-постинг из TenChat, Дзен и Сетки, участие в тематических сообществах, нетворкинг и коллаборации с другими авторами.</p><p>На моей практике реально набрать 300–700 целевых подписчиков за первые 3 месяца без единого рубля в рекламу — при правильной стратегии и регулярном контенте.</p>`,
  },
  {
    question: 'Что такое «упаковка» Telegram-канала?',
    answer: `<p class="mb-3">Упаковка — это первое впечатление, которое производит ваш канал на нового посетителя. Включает: название и описание канала (шапка профиля), закреплённый пост, визуальный стиль публикаций, аватар и обложку.</p><p>Правильная упаковка увеличивает конверсию из «зашёл посмотреть» в «подписался» в 2–3 раза. Именно с неё начинается работа над личным брендом в Telegram.</p>`,
  },
  {
    question: 'Что такое «Нескучный Нетворкинг» и «Бизнес Сетка»?',
    answer: `<p class="mb-3">Это два закрытых Telegram-сообщества для предпринимателей и экспертов.</p><p class="mb-3"><strong>Нескучный Нетворкинг</strong> — сообщество для полезных знакомств: 750+ участников за 6 месяцев, активная аудитория авторов и экспертов.</p><p><strong>Бизнес Сетка</strong> — закрытый клуб: 240+ участников за 1,5 месяца, фокус на росте бизнеса через связи и окружение.</p><p class="mb-3">Подробнее о каждом сообществе — на отдельных страницах сайта.</p>`,
  },
])

// Состояние мобильного меню
const isMobileMenuOpen = ref(false)
const selectedService = ref('')

// Меню для хедера (без пункта "Создать свой блог")
const headerMenuItems = [
  { href: '/networking', label: 'Нескучный Нетворкинг' },
  { href: '/business', label: 'Бизнес Сетка' },
  { href: '/yappie', label: 'Веб-разработка' },
  { href: '/blog', label: 'Блог' },
  { href: '/study', label: 'Создать свой блог' },
]

// Меню для мобильного меню (якорные ссылки на разделы страницы)
const mobileMenuItems = [
  { href: '#about', label: 'Обо мне' },
  { href: '#approach', label: 'Система' },
  { href: '#services', label: 'Услуги' },
  { href: '#ecosystem', label: 'Экосистема' },
  { href: '#cases', label: 'Кейсы' },
  { href: '#testimonials', label: 'Отзывы' },
  { href: '#faq', label: 'FAQ' },
  { href: '/notifications', label: 'Push (тест)' },
]

const socialNetworks = [
  { name: 'Telegram', icon: 'telegram', link: 'https://t.me/artemselifanov' },
  { name: 'YouTube', icon: 'youtube', link: 'https://www.youtube.com/@artemselifanov' },
  { name: 'ВК', icon: 'vk', link: 'https://vk.com/karelbusiness' },
  { name: 'Instagram', icon: 'instagram', link: 'https://www.instagram.com/artselifanov/' },
  { name: 'TenChat', icon: 'linkedin', link: 'https://tenchat.ru/artselifanov' },
  { name: 'Сетка', link: 'https://set.ki/ecaPSPa' },
  {
    name: 'Max',
    link: 'https://max.ru/u/f9LHodD0cOKopHkIgQpYisJTEJU83loTzixkc45wVgsAFzhMaxRj5LG6_tY',
  },
]

// Intersection Observer для анимаций
const animatedElements = ref([])

function initScrollAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    }
  )

  // Находим все элементы с классами анимации
  const elements = document.querySelectorAll('.animate-on-scroll, .card-animate, .image-animate')
  elements.forEach((el) => {
    observer.observe(el)
    animatedElements.value.push(el)
  })
}

const trafficSources = [
  { name: 'ТенЧат' },
  { name: 'Дзен' },
  { name: 'Сетка' },
  { name: 'Тредс' },
  { name: 'ВК' },
]

const service1Features = [
  'Найдём, почему канал не растёт или плохо конвертирует',
  'Разберём упаковку и первое впечатление от профиля',
  'Выявим 2–3 конкретные точки роста',
  'Вы уйдёте с чётким планом следующих шагов',
]

const service2Features = [
  'Анализ текущего позиционирования',
  'Разбор шапки профиля и визуала',
  'Рекомендации по контенту',
  'Ответы на вопросы',
]

const service3Features = [
  'За 4 недели выстраиваем систему привлечения клиентов с нуля',
  'Еженедельные созвоны + ежедневная обратная связь в личном чате',
  'Позиционирование, упаковка и контент-стратегия под ваш продукт',
  'Помощь в создании и упаковке продукта с нужным чеком',
  'Скрипты и воронка для конвертации подписчиков в клиентов',
]

const aboutStats = [
  { value: '7+', label: 'Лет в бизнес-консалтинге' },
  { value: '5+', label: 'Лет в маркетинге' },
  { value: '45K', label: 'Подписчиков', sublabel: 'за год', growth: '+2K в мес' },
]

const targetAudience = [
  {
    icon: 'users',
    title: 'Консультанты и коучи',
    description:
      'Клиенты торгуются по цене, а вы не знаете, как обосновать чек — пора выстроить личный бренд, который продаёт за вас',
  },
  {
    icon: 'briefcase',
    title: 'Предприниматели (услуги)',
    description:
      'Реклама съедает бюджет, а сарафан нестабилен — личный бренд создаёт поток клиентов, который не зависит от рекламного кабинета',
  },
  {
    icon: 'user-tie',
    title: 'Специалисты',
    description:
      'Маркетологи, юристы, психологи — вы отличный специалист, но клиенты об этом не знают. Личный бренд делает вашу экспертность видимой для нужных людей',
  },
]

const workResults = [
  'Личный бренд работает на вас 24/7',
  'Клиенты приходят сами, потому что доверяют вашей экспертизе',
  'Вы продаете дороже, потому что вы — бренд',
]

/* eslint-disable unused-imports/no-unused-vars, @typescript-eslint/no-unused-vars */
const ecosystemItems = [
  {
    to: '/networking',
    icon: 'users',
    title: 'Нескучный Нетворкинг',
    description: 'Полезные связи и окружение для роста',
    cta: 'Узнать подробнее',
  },
  {
    to: '/networking',
    icon: 'briefcase',
    title: 'Бизнес Сетка',
    description: 'Закрытый клуб предпринимателей для обмена опытом',
    cta: 'Узнать подробнее',
  },
  {
    to: '/yappie',
    icon: 'code',
    title: 'Веб-разработка',
    description: 'Сайты, которые продают, а не просто висят',
    cta: 'Посмотреть услуги',
  },
  {
    to: '/study',
    icon: 'bolt',
    title: 'Автоматизация',
    description: 'Внедрение CRM и скриптов для лидов',
    cta: 'Узнать как внедрить',
  },
]

const cases = [
  {
    badge: 'Личный пример',
    title: 'Запуск канала «Нескучный Нетворкинг» с нуля',
    task: 'Собрать лояльное ядро аудитории (авторов/экспертов) без вложений в рекламу',
    pointA: 'Новый канал, 0 подписчиков, нет рекламного бюджета',
    solution: [
      'Внедрение контент-плана с фокусом на пользу и нетворкинг',
      'Кросс-постинг и органические методы привлечения (Сетка, TenChat)',
    ],
    result: [
      '+500+ подписчиков за 3 месяца органически',
      '555+ участников в активном комьюнити',
      'Конверсия из просмотра в подписку: до 50% (на тестовых постах)',
    ],
  },
  {
    badge: 'Методология',
    title: 'Внедрение продаж через чекапы/диагностики',
    task: 'Повысить конверсию из консультации в оплату услуг для экспертов',
    pointA:
      'Клиенты проводили бесплатные консультации, «сливали» экспертов советами, конверсия в продажу была низкой',
    solution: [
      'Переход от модели «консультация» к модели «диагностика/разбор»',
      'Внедрение скрипта: выявление болей → презентация решения → оффер',
      'Фильтрация лидов до звонка через анкетирование',
    ],
    result: [
      'Конверсия в оплату с холодного трафика: 20-25%',
      'Конверсия по теплой базе (подписчики блога): 60-80%',
      'Каждый 4-5-й звонок становится оплаченным клиентом',
    ],
  },
  {
    badge: 'Мультиплатформенность',
    title: 'Мультиплатформенная стратегия продвижения',
    task: 'Обеспечить стабильный трафик и узнаваемость эксперта на 8 площадках одновременно',
    pointA: 'Разрозненный контент, сложность в удержании темпа, разные алгоритмы площадок',
    solution: [
      'Система «30 минут в день» на создание и дистрибуцию контента',
      'Адаптация одного смысла под форматы: Сетка, Дзен, ВК, Телеграм',
    ],
    result: [
      '30 000+ общая аудитория на всех платформах',
      '+5 000 новых подписчиков органически за 3 месяца',
      'Охваты постов: 80 000+ просмотров (на примере канала в Сетке)',
    ],
  },
]

const testimonials = [
  {
    name: 'Милена',
    role: 'HR',
    initial: 'М',
    text: 'Внедрила рекомендации: разделила контент для Сетки и Telegram, вышла на регулярность и добавила больше продаж. С того момента запустила несколько крупных проектов по сопровождению. Спасибо за экспертизу и опыт.',
  },
  {
    name: 'Наталья',
    role: 'Финансовый менеджер',
    initial: 'Н',
    text: 'Создала канал в Сетке, запустила Telegram. Уже вижу живой интерес — люди подписываются, просматривают страницу. Это приятно и подстёгивает продолжать. Всё начиналось с нуля, а сейчас есть реальная аудитория и momentum.',
  },
  {
    name: 'Лина',
    role: 'Бизнес-аналитик',
    initial: 'Л',
    text: 'Иногда приходишь с одним запросом, а уходишь с совершенно противоположным — и именно это становится главным результатом. Я точно поняла, чего не хочу: воздушного контента без почвы. Хочу показывать реальные дела и опираться на свой опыт в бизнес-анализе. Для этого и нужны консультации.',
  },
  {
    name: 'Александр',
    role: 'Дизайнер',
    initial: 'А',
    text: 'Работа помогла выстроить контент, который реально продаёт. Методология адаптируется под конкретного человека и его аудиторию — неважно, запускаетесь ли вы с нуля, проходите ребрендинг или хотите усилить позиции.',
  },
]

const workSteps = [
  {
    title: 'Аудит и Стратегия',
    description: 'Погружение в бизнес, анализ конкурентов, определение ЦА',
  },
  { title: 'Упаковка', description: 'Оформление профилей, создание визуального стиля, гайдлайны' },
  { title: 'Контент-производство', description: 'Написание постов и корректировка смыслов' },
  { title: 'Дистрибуция', description: 'Публикации в 5 сетях, посевы, нетворкинг, коллаборации' },
  {
    title: 'Аналитика и допродажи',
    description: 'Подключение веб-инструментов, CRM, автоматизация',
  },
]

function handleScroll() {
  scrolled.value = window.scrollY > 20
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  initScrollAnimations()

  // Обработка hash URL для прокрутки к секции контактов
  if (typeof window !== 'undefined' && window.location.hash) {
    const hashPath = window.location.hash.split('?')[0]
    // Игнорируем параметры Telegram Web App (содержат =)
    if (hashPath && !hashPath.includes('=') && hashPath.startsWith('#')) {
      try {
        const element = document.querySelector(hashPath)
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }, 100)
        }
      } catch {
        // Игнорируем ошибки при невалидных селекторах
        console.warn('[Hash navigation] Invalid selector:', hashPath)
      }
    }
  }

  // Добавляем обработчик клика на все ссылки с #contact
  document.querySelectorAll('a[href^="#contact"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()
      const href = this.getAttribute('href')

      // Извлекаем услугу из query параметра
      const urlParams = new URLSearchParams(href.split('?')[1] || '')
      const service = urlParams.get('service')

      if (service) {
        selectedService.value = service
      }

      // Прокрутка к секции
      const hashPath = href.split('?')[0]
      const element = document.querySelector(hashPath)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    })
  })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
html {
  scroll-behavior: smooth;
}

/* Анимация для точек трафика - движение по линиям */
@keyframes trafficFlow1 {
  0% {
    offset-distance: 0%;
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    offset-distance: 100%;
    opacity: 0;
  }
}

@keyframes trafficFlow2 {
  0% {
    offset-distance: 0%;
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    offset-distance: 100%;
    opacity: 0;
  }
}

@keyframes trafficFlow3 {
  0% {
    offset-distance: 0%;
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    offset-distance: 100%;
    opacity: 0;
  }
}

@keyframes trafficFlow4 {
  0% {
    offset-distance: 0%;
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    offset-distance: 100%;
    opacity: 0;
  }
}

.traffic-dot {
  offset-path: path('M 50 0 C 50 80 150 120 250 200');
  animation: trafficFlow1 3s linear infinite;
}

.traffic-dot-2 {
  offset-path: path('M 150 0 C 150 80 200 120 250 200');
  animation: trafficFlow1 3s linear infinite;
  animation-delay: 0.6s;
}

.traffic-dot-3 {
  offset-path: path('M 250 0 C 250 80 250 120 250 200');
  animation: trafficFlow1 3s linear infinite;
  animation-delay: 1.2s;
}

.traffic-dot-4 {
  offset-path: path('M 350 0 C 350 80 300 120 250 200');
  animation: trafficFlow1 3s linear infinite;
  animation-delay: 1.8s;
}

.traffic-dot-5 {
  offset-path: path('M 450 0 C 450 80 350 120 250 200');
  animation: trafficFlow1 3s linear infinite;
  animation-delay: 2.4s;
}

/* Анимация для кнопки Буст - лёгкое подпрыгивание */
@keyframes bounce-subtle {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-3px);
  }
}

.animate-bounce-subtle {
  animation: bounce-subtle 2s ease-in-out infinite;
}

/* Анимация для кнопки Буст - пульсация */
@keyframes pulse-slow {
  0%,
  100% {
    opacity: 1;
    box-shadow: 0 10px 15px -3px rgba(59, 130, 246, 0.3);
  }
  50% {
    opacity: 0.9;
    box-shadow: 0 4px 6px -1px rgba(59, 130, 246, 0.2);
  }
}

.animate-pulse-slow {
  animation: pulse-slow 3s ease-in-out infinite;
}

* {
  scrollbar-width: thin;
  scrollbar-color: #e5e7eb #f9fafb;
}

::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-track {
  background: #f9fafb;
}

::-webkit-scrollbar-thumb {
  background: #e5e7eb;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #d1d5db;
}

/* Анимации появления при скролле */
.animate-on-scroll {
  opacity: 0;
  transform: translateY(40px);
  transition:
    opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1),
    transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.animate-on-scroll.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Задержки для дочерних элементов */
.animate-on-scroll.delay-100 {
  transition-delay: 0.1s;
}
.animate-on-scroll.delay-200 {
  transition-delay: 0.2s;
}
.animate-on-scroll.delay-300 {
  transition-delay: 0.3s;
}
.animate-on-scroll.delay-400 {
  transition-delay: 0.4s;
}
.animate-on-scroll.delay-500 {
  transition-delay: 0.5s;
}

/* Анимация для карточек */
.card-animate {
  opacity: 0;
  transform: translateY(30px) scale(0.95);
  transition:
    opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1),
    transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.card-animate.visible {
  opacity: 1;
  transform: translateY(0) scale(1);
}

/* Анимация для изображений */
.image-animate {
  opacity: 0;
  transform: scale(0.9);
  transition:
    opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1),
    transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.image-animate.visible {
  opacity: 1;
  transform: scale(1);
}

/* Анимация появления телефонов из одной точки */
.phone-animate {
  opacity: 0;
  transform-origin: center bottom;
  animation: phoneExpand 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

/* Центр - без смещения */
.phone-animate[data-position='center'] {
  animation-name: phoneExpandCenter;
  animation-delay: 0.3s;
}

/* Левые - смещение влево и вверх */
.phone-animate[data-position='left-1'] {
  animation-name: phoneExpandLeft1;
  animation-delay: 0.2s;
}

.phone-animate[data-position='left-2'] {
  animation-name: phoneExpandLeft2;
  animation-delay: 0.1s;
}

/* Правые - смещение вправо и вверх */
.phone-animate[data-position='right-1'] {
  animation-name: phoneExpandRight1;
  animation-delay: 0.4s;
}

.phone-animate[data-position='right-2'] {
  animation-name: phoneExpandRight2;
  animation-delay: 0.5s;
}

@keyframes phoneExpandCenter {
  0% {
    opacity: 0;
    transform: scale(0.3);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes phoneExpandLeft1 {
  0% {
    opacity: 0;
    transform: translateX(3.5px) scale(0.3);
  }
  100% {
    opacity: 1;
    transform: translateX(0) translateY(-12px) scale(1);
  }
}

@keyframes phoneExpandLeft2 {
  0% {
    opacity: 0;
    transform: translateX(6.5px) scale(0.3);
  }
  100% {
    opacity: 1;
    transform: translateX(0) translateY(-24px) scale(1);
  }
}

@keyframes phoneExpandRight1 {
  0% {
    opacity: 0;
    transform: translateX(-3.5px) scale(0.3);
  }
  100% {
    opacity: 1;
    transform: translateX(0) translateY(-12px) scale(1);
  }
}

@keyframes phoneExpandRight2 {
  0% {
    opacity: 0;
    transform: translateX(-6.5px) scale(0.3);
  }
  100% {
    opacity: 1;
    transform: translateX(0) translateY(-24px) scale(1);
  }
}
</style>
