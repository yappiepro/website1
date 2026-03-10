<template>
  <div class="min-h-screen bg-white text-gray-900 antialiased overflow-x-hidden">
    <!-- Прогресс-бар -->
    <div class="fixed top-0 left-0 w-full h-1 z-[60] bg-gray-100">
      <div class="h-full bg-blue-600 transition-all duration-150 ease-out" :style="{ width: scrollProgress + '%' }"></div>
    </div>

    <!-- Хедер -->
    <header :class="[
      'fixed left-4 right-4 z-40 transition-all duration-300 rounded-2xl',
      scrolled ? 'bg-transparent backdrop-blur-none shadow-none md:bg-white/60 md:backdrop-blur-xl md:shadow-lg' : 'bg-white/20 backdrop-blur-md shadow-sm',
      'md:top-0 top-4'
    ]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div class="h-14 md:h-16 flex justify-between items-center">
          <NuxtLink to="/" :class="[
            'group text-sm font-semibold tracking-tight text-gray-900 transition-all duration-300',
            scrolled ? 'opacity-0 pointer-events-none md:opacity-100' : 'opacity-100'
          ]">
            Артем Селифанов
          </NuxtLink>

          <nav :class="[
            'hidden md:flex items-center gap-1 transition-all duration-300',
            scrolled ? 'opacity-0 pointer-events-none md:opacity-100' : 'opacity-100'
          ]">
            <NuxtLink to="/networking" class="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-white/50 rounded-lg transition-all">Нескучный Нетворкинг</NuxtLink>
            <NuxtLink to="/business" class="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-white/50 rounded-lg transition-all">Бизнес Сетка</NuxtLink>
            <NuxtLink to="/yappie" class="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-white/50 rounded-lg transition-all">Веб-разработка</NuxtLink>
            <NuxtLink to="/blog" class="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-white/50 rounded-lg transition-all">Блог</NuxtLink>
            <NuxtLink to="#services" class="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-white/50 rounded-lg transition-all">Создать свой блог</NuxtLink>
          </nav>

          <a href="https://t.me/artemselifanov" target="_blank" :class="[
            'hidden md:inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white bg-gray-900/90 hover:bg-gray-900 rounded-xl transition-all backdrop-blur-sm',
            scrolled ? 'opacity-0 pointer-events-none md:opacity-100' : 'opacity-100'
          ]">
            <span>Связаться</span>
          </a>

          <!-- Пустой блок для мобильных чтобы сохранить структуру -->
          <div class="md:hidden w-10"></div>
        </div>
      </div>
    </header>

    <!-- Кнопка бургера для мобильных (фиксированная, всегда видна) -->
    <button @click="isMenuOpen = !isMenuOpen" 
            class="md:hidden fixed top-[28px] right-4 z-50 p-2 bg-white/80 hover:bg-white rounded-xl transition-all backdrop-blur-sm">
      <Icon name="fa-solid:bars" class="w-6 h-6 text-gray-700" />
    </button>

    <!-- Мобильное меню -->
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 scale-95"
      leave-to-class="opacity-0 scale-95"
    >
      <div v-if="isMenuOpen" class="fixed inset-0 z-[100] bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 pt-20 px-6">
        <div class="flex justify-between items-center mb-8">
          <span class="text-white/60 text-sm font-medium">Навигация</span>
          <button @click="isMenuOpen = false" class="group p-3 bg-white hover:bg-gray-100 rounded-2xl transition-all backdrop-blur-sm shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" style="width: 24px; height: 24px;" fill="currentColor" class="text-gray-900">
              <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
            </svg>
          </button>
        </div>
        
        <nav class="flex flex-col gap-3 max-w-md mx-auto">
          <NuxtLink v-for="(item, i) in menuItems" :key="i" :to="item.href" @click="isMenuOpen = false"
             class="group relative overflow-hidden p-5 bg-white/5 hover:bg-white/10 rounded-2xl transition-all backdrop-blur-sm border border-white/10 hover:border-white/20">
            <div class="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-blue-600/0 to-blue-600/0 group-hover:via-blue-600/20 group-hover:to-blue-600/20 transition-all"></div>
            <div class="relative flex items-center justify-between">
              <span class="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">{{ item.label }}</span>
              <Icon name="fa-solid:arrow-right" class="w-5 h-5 text-white/30 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
            </div>
          </NuxtLink>

          <a href="https://t.me/artemselifanov" target="_blank"
             class="mt-6 group relative overflow-hidden p-5 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 rounded-2xl transition-all shadow-lg shadow-blue-600/30">
            <div class="flex items-center justify-center gap-3">
              <Icon name="fa-brands:telegram" class="w-5 h-5 text-white" />
              <span class="text-base font-bold text-white">Связаться в Telegram</span>
            </div>
          </a>
        </nav>
        
        <!-- Декоративные элементы -->
        <div class="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div class="absolute -top-40 -right-40 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl"></div>
          <div class="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl"></div>
        </div>
      </div>
    </Transition>

    <!-- 1. HERO SECTION -->
    <section class="relative min-h-screen flex items-center pt-20 px-4 sm:px-6 overflow-hidden bg-gray-50">
      <div class="max-w-7xl mx-auto w-full relative z-10">
        <div class="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div class="lg:col-span-8 animate-on-scroll">
            <div class="inline-flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-200 rounded-2xl mb-8 animate-on-scroll delay-100">
              <span class="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></span>
              <span class="text-sm font-medium text-gray-700">Открыт для новых проектов</span>
            </div>

            <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05] mb-6 animate-on-scroll delay-200">
              <span class="block">Личный бренд —</span>
              <span class="block">ваш главный инструмент</span>
              <span class="block text-blue-600">продаж</span>
            </h1>

            <p class="text-base md:text-lg text-gray-600 leading-relaxed mb-8 max-w-2xl animate-on-scroll delay-300">
              Я помогаю его создать. Для предпринимателей и экспертов, которые продают свои услуги. Готовлю площадки. Работаю со смыслами. Не пишу посты — выстраиваю систему.
            </p>

            <div class="flex flex-wrap gap-4 mb-10 animate-on-scroll delay-400">
              <a href="https://t.me/artemselifanov" target="_blank" class="group inline-flex items-center gap-3 px-8 py-4 text-base font-semibold text-white bg-gray-900 hover:bg-gray-800 rounded-2xl transition-all hover:-translate-y-1">
                <Icon name="fa-brands:telegram" class="w-5 h-5" />
                Обсудить стратегию
              </a>
            </div>

            <div class="flex flex-wrap items-center gap-6 text-sm text-gray-500">
              <div class="flex items-center gap-2">
                <Icon name="fa-solid:check-circle" class="w-5 h-5 text-green-500" />
                <span>Бесплатный аудит позиционирования</span>
              </div>
              <div class="flex items-center gap-2">
                <Icon name="fa-solid:calendar-check" class="w-5 h-5 text-green-500" />
                <span>Работаю с 2021 года</span>
              </div>
            </div>
          </div>

          <div class="lg:col-span-4 flex justify-center lg:justify-end image-animate">
            <div class="relative">
              <!-- Три скриншота рядом -->
              <div class="relative w-full max-w-xs mx-auto">
                <div class="flex items-end justify-center gap-1 sm:gap-2">
                  <!-- Левое фото (Дзен) -->
                  <div class="w-[70px] sm:w-[100px] md:w-[132px] aspect-[9/19] rounded-[12px] overflow-hidden transform -translate-y-4 shadow-xl">
                    <img src="/reference/IMG_7084.jpg" alt="Дзен" class="w-full h-full object-cover" />
                  </div>

                  <!-- Центральное фото (TenChat) -->
                  <div class="w-[84px] sm:w-[120px] md:w-[154px] aspect-[9/19] rounded-[12px] overflow-hidden shadow-xl">
                    <img src="/reference/IMG_7083.jpg" alt="TenChat" class="w-full h-full object-cover" />
                  </div>

                  <!-- Правое фото (Сетка) -->
                  <div class="w-[70px] sm:w-[100px] md:w-[132px] aspect-[9/19] rounded-[12px] overflow-hidden transform -translate-y-4 shadow-xl">
                    <img src="/reference/IMG_7082.jpg" alt="Сетка" class="w-full h-full object-cover" />
                  </div>
                </div>
              </div>

              <!-- Подпись под веером -->
              <div class="text-center mt-6 sm:mt-8">
                <div class="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-blue-50 border border-blue-100 rounded-xl">
                  <Icon name="fa-brands:telegram" class="w-3 h-3 sm:w-4 sm:h-4 text-blue-600" />
                  <span class="text-xs sm:text-sm font-bold text-blue-700">Мультиплатформенный подход</span>
                </div>
                <p class="text-[10px] sm:text-xs text-gray-500 mt-1.5 sm:mt-2">Работаю с 5+ площадками одновременно</p>
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
              <span class="text-xs font-bold text-gray-700 uppercase tracking-wider">Позиционирование</span>
            </div>
            
            <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-8">
              Архитектор смыслов<br />
              <span class="text-gray-400">для экспертов и предпринимателей</span>
            </h2>
            
            <div class="space-y-5 text-gray-600 leading-relaxed">
              <p class="text-lg">Я работаю с теми, кто продает свою экспертизу: консультанты, коучи, наставники, владельцы бизнеса.</p>
              <p class="text-lg">Моя задача — не писать за вас посты. Моя задача — помочь вам найти и упаковать ваши смыслы, подготовить площадки и выстроить систему, где личный бренд работает на привлечение клиентов.</p>
              <p class="text-lg font-medium text-gray-900">Бэкграунд в бизнес-консалтинге позволяет мне думать категориями прибыли, а не лайков.</p>
            </div>

            <div class="grid grid-cols-3 gap-3 sm:gap-4 mt-10">
              <div v-for="(stat, index) in aboutStats" :key="index" class="group relative p-3 sm:p-5 bg-white border border-gray-200 rounded-2xl hover:border-blue-300 transition-all">
                <div v-if="stat.growth" class="absolute top-2 right-2 text-[8px] sm:text-[10px] text-green-600 font-bold">{{ stat.growth }}</div>
                <div class="text-xl sm:text-2xl md:text-3xl font-black text-gray-900 mb-1">{{ stat.value }}</div>
                <div class="text-[10px] sm:text-xs text-gray-500 font-medium leading-tight">{{ stat.label }}</div>
                <div v-if="stat.sublabel" class="text-[9px] sm:text-[10px] text-gray-400 mt-0.5 sm:mt-1 leading-tight">{{ stat.sublabel }}</div>
              </div>
            </div>
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
                    <div class="w-12 h-12 bg-white rounded-xl flex items-center justify-center border border-gray-200">
                      <Icon name="fa-solid:pen-nib" class="w-6 h-6 text-gray-700" />
                    </div>
                    <div>
                      <div class="font-bold text-gray-900">Контент</div>
                      <div class="text-xs text-gray-500">Стратегия и производство</div>
                    </div>
                  </div>
                  <div class="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                    <div class="w-12 h-12 bg-white rounded-xl flex items-center justify-center border border-gray-200">
                      <Icon name="fa-solid:globe" class="w-6 h-6 text-gray-700" />
                    </div>
                    <div>
                      <div class="font-bold text-gray-900">Веб</div>
                      <div class="text-xs text-gray-500">Сайты и приложения</div>
                    </div>
                  </div>
                  <div class="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                    <div class="w-12 h-12 bg-white rounded-xl flex items-center justify-center border border-gray-200">
                      <Icon name="fa-solid:mobile" class="w-6 h-6 text-gray-700" />
                    </div>
                    <div>
                      <div class="font-bold text-gray-900">Мобильная разработка</div>
                      <div class="text-xs text-gray-500">iOS и Android</div>
                    </div>
                  </div>
                  <div class="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                    <div class="w-12 h-12 bg-white rounded-xl flex items-center justify-center border border-gray-200">
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
    <section id="approach" class="py-16 md:py-24 lg:py-32 px-4 sm:px-6 border-t border-gray-100 bg-gray-50">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-20">
          <div class="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-2xl mb-6">
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
            <div v-for="(source, index) in trafficSources" :key="index"
                 class="group flex flex-col items-center gap-3">
              <div class="px-3 py-2 md:px-6 md:py-4 bg-white border border-gray-200 rounded-2xl transition-all hover:border-gray-300 w-full text-center">
                <span class="text-xs md:text-base font-bold text-gray-700">{{ source.name }}</span>
              </div>
            </div>
          </div>

          <!-- Линии воронки -->
          <div class="relative h-40 md:h-64 mb-6 md:mb-8 -mt-6 md:-mt-8">
            <svg class="absolute inset-0 w-full h-full" viewBox="0 0 500 200" preserveAspectRatio="none">
              <!-- 5 линий от каждого источника -->
              <path d="M 50 0 C 50 80 150 120 250 200" stroke="#2563EB" stroke-width="3" fill="none" opacity="0.6" />
              <path d="M 150 0 C 150 80 200 120 250 200" stroke="#2563EB" stroke-width="3" fill="none" opacity="0.6" />
              <path d="M 250 0 C 250 80 250 120 250 200" stroke="#2563EB" stroke-width="3" fill="none" opacity="0.6" />
              <path d="M 350 0 C 350 80 300 120 250 200" stroke="#2563EB" stroke-width="3" fill="none" opacity="0.6" />
              <path d="M 450 0 C 450 80 350 120 250 200" stroke="#2563EB" stroke-width="3" fill="none" opacity="0.6" />

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
              <div class="absolute -inset-4 md:-inset-8 bg-blue-400/20 rounded-full blur-2xl"></div>
              <div class="relative w-24 h-24 md:w-40 md:h-40 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                <svg class="w-12 h-12 md:w-20 md:h-20 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
              </div>
              <div class="absolute -bottom-4 left-1/2 -translate-x-1/2 px-4 py-1.5 md:px-5 md:py-2 bg-white border border-gray-200 rounded-full shadow-lg whitespace-nowrap">
                <span class="text-[10px] md:text-xs font-bold text-gray-700">Целевая аудитория</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Текстовый блок -->
        <div class="max-w-6xl mx-auto">
          <div class="p-8 md:p-12 bg-white border border-gray-200 rounded-[2rem] shadow-lg">
            <div class="space-y-8 text-gray-600 leading-relaxed">
              <p class="text-lg md:text-xl">
                Я не распыляюсь на пять площадок одновременно. Я выстроил <span class="font-bold text-gray-900">модульную систему</span>, где каждая сеть играет свою роль.
              </p>
              
              <div class="grid md:grid-cols-2 gap-6">
                <div class="p-6 bg-gray-50 rounded-2xl border border-gray-200">
                  <div class="flex items-center gap-3 mb-4">
                    <div class="w-12 h-12 bg-gray-200 rounded-xl flex items-center justify-center">
                      <Icon name="fa-solid:rss" class="w-6 h-6 text-gray-700" />
                    </div>
                    <span class="font-bold text-gray-900 text-lg">Источники трафика</span>
                  </div>
                  <p class="text-sm text-gray-600 leading-relaxed">ТенЧат, Дзен, Тредс и ВК работают на охваты. Они собирают внимание широкой аудитории и фильтруют случайных зрителей.</p>
                </div>
                
                <div class="p-6 bg-gray-50 rounded-2xl border border-gray-200">
                  <div class="flex items-center gap-3 mb-4">
                    <div class="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                      <Icon name="fa-brands:telegram" class="w-6 h-6 text-white" />
                    </div>
                    <span class="font-bold text-gray-900 text-lg">Точка концентрации</span>
                  </div>
                  <p class="text-sm text-gray-600 leading-relaxed">Telegram — это точка концентрации. Сюда попадает только «отфильтрованная» аудитория: предприниматели и эксперты, готовые к диалогу.</p>
                </div>
              </div>
              
              <p class="text-lg md:text-xl">
                Здесь нет шума алгоритмов. Только польза, кейсы и решения для роста вашего дохода.
              </p>
              
              <div class="p-6 bg-gray-50 rounded-2xl border border-gray-200">
                <p class="text-sm text-gray-700 leading-relaxed">
                  <span class="font-bold">🎯 Эта модель экономит бюджет и повышает конверсию.</span> Я привожу в свой канал тех, кто уже прогрет и заинтересован.
                </p>
              </div>
              
              <!-- Статистика по подписчикам -->
              <div class="grid grid-cols-2 gap-4 mt-8">
                <div class="p-4 md:p-6 bg-gray-50 rounded-2xl border border-gray-200">
                  <div class="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 mb-2">2000+</div>
                  <div class="text-xs sm:text-sm text-gray-600 font-medium">подписчиков в соцсетях ежемесячно</div>
                </div>
                <div class="p-4 md:p-6 bg-blue-50 rounded-2xl border border-blue-100">
                  <div class="text-2xl sm:text-3xl md:text-4xl font-black text-blue-600 mb-2">50-200</div>
                  <div class="text-xs sm:text-sm text-blue-700 font-medium">в Telegram ежемесячно</div>
                </div>
              </div>
            </div>

            <!-- CTA кнопка -->
            <div class="mt-10 text-center">
              <a href="https://t.me/artemselifanov" target="_blank" class="group inline-flex items-center justify-center gap-2 px-6 py-4 sm:px-8 sm:py-4 text-sm sm:text-base font-semibold text-white bg-gray-900 hover:bg-gray-800 rounded-2xl transition-all hover:-translate-y-1">
                <Icon name="fa-brands:telegram" class="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Записаться в Telegram</span>
              </a>
            </div>
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
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Выберите формат сотрудничества
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <!-- Карточка 1: Диагностика -->
          <div class="card-animate group p-8 bg-white border-2 border-gray-200 rounded-[2rem] hover:border-blue-300 transition-all hover:-translate-y-2">

            <div class="mb-6">
              <div class="w-14 h-14 bg-gray-100 rounded-2xl flex items-center justify-center mb-4">
                <Icon name="fa-solid:comment" class="w-7 h-7 text-gray-700" />
              </div>
              <h3 class="text-2xl font-bold mb-2">Диагностика</h3>
              <p class="text-sm text-gray-600">30-минутная диагностика Telegram канала</p>
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

            <a href="https://t.me/artemselifanov" target="_blank" class="group inline-flex items-center justify-center gap-2 w-full px-6 py-4 text-sm font-semibold text-gray-900 bg-gray-100 hover:bg-gray-200 rounded-2xl transition-all">
              Записаться
            </a>
          </div>

          <!-- Карточка 2: Консультация -->
          <div class="card-animate delay-200 group p-8 bg-white border-2 border-gray-200 rounded-[2rem] hover:border-blue-300 transition-all hover:-translate-y-2">

            <div class="mb-6">
              <div class="w-14 h-14 bg-gray-100 rounded-2xl flex items-center justify-center mb-4">
                <Icon name="fa-solid:users" class="w-7 h-7 text-gray-700" />
              </div>
              <h3 class="text-2xl font-bold mb-2">Консультация</h3>
              <p class="text-sm text-gray-600">Разбор вашего блога с рекомендациями</p>
            </div>

            <div class="mb-6">
              <div class="text-4xl font-black text-gray-900">3 500 ₽</div>
              <div class="text-sm text-gray-500">за час</div>
            </div>

            <ul class="space-y-3 mb-8">
              <li v-for="(item, i) in service2Features" :key="i" class="flex items-start gap-3">
                <Icon name="fa-solid:check" class="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span class="text-sm text-gray-700">{{ item }}</span>
              </li>
            </ul>

            <a href="https://t.me/artemselifanov" target="_blank" class="group inline-flex items-center justify-center gap-2 w-full px-6 py-4 text-sm font-semibold text-gray-900 bg-gray-100 hover:bg-gray-200 rounded-2xl transition-all">
              Записаться
            </a>
          </div>

          <!-- Карточка 3: Менторство -->
          <div class="card-animate delay-400 group p-8 bg-gray-900 rounded-[2rem] hover:shadow-xl transition-all hover:-translate-y-2">

            <div class="mb-6">
              <div class="w-14 h-14 bg-gray-800 rounded-2xl flex items-center justify-center mb-4">
                <Icon name="fa-solid:crown" class="w-7 h-7 text-white" />
              </div>
              <h3 class="text-2xl font-bold text-white mb-2">Менторство</h3>
              <p class="text-sm text-gray-400">Полное сопровождение 1 месяц</p>
            </div>

            <div class="mb-6">
              <div class="text-4xl font-black text-white">25 000 ₽</div>
              <div class="text-sm text-gray-400">за месяц</div>
            </div>

            <ul class="space-y-3 mb-8">
              <li v-for="(item, i) in service3Features" :key="i" class="flex items-start gap-3">
                <Icon name="fa-solid:check" class="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span class="text-sm text-gray-300">{{ item }}</span>
              </li>
            </ul>

            <a href="https://t.me/artemselifanov" target="_blank" class="group inline-flex items-center justify-center gap-2 w-full px-6 py-4 text-sm font-semibold text-gray-900 bg-white hover:bg-gray-100 rounded-2xl transition-all">
              Начать работу
            </a>
          </div>
        </div>

        <!-- Дополнительные услуги -->
        <div class="mt-12 text-center">
          <p class="text-sm text-gray-500">
            Также предлагаю услуги по разработке:
            <NuxtLink to="/yappie" class="text-blue-600 hover:text-blue-700 font-medium underline decoration-blue-600/30 hover:decoration-blue-700 underline-offset-4 transition-all">веб- и мобильная разработка</NuxtLink>
          </p>
        </div>
      </div>
    </section>

    <!-- 5. ЦЕЛЕВАЯ АУДИТОРИЯ -->
    <section class="py-16 md:py-24 lg:py-32 px-4 sm:px-6 border-t border-gray-100 bg-gray-50">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <div class="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-2xl mb-6">
            <span class="text-xs font-bold text-gray-700 uppercase tracking-wider">Для кого</span>
          </div>
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-4">
            Если вы продаете свою экспертизу —<br />мы сработаемся
          </h2>
        </div>

        <div class="grid md:grid-cols-3 gap-6 mb-12">
          <div v-for="(audience, index) in targetAudience" :key="index"
               class="group p-8 bg-white border border-gray-200 rounded-[2rem] hover:border-blue-300 hover:shadow-xl transition-all hover:-translate-y-2">
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
            <div v-for="(result, index) in workResults" :key="index" class="flex items-start gap-4 p-4 bg-gray-50 rounded-2xl">
              <Icon name="fa-solid:check-circle" class="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
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
            <span class="text-xs font-bold text-gray-700 uppercase tracking-wider">Инфраструктура</span>
          </div>
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-4">
            Больше, чем просто маркетинг
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Для комплексного роста бизнеса я создал инфраструктуру, которая помогает моим клиентам масштабироваться
          </p>
        </div>

        <!-- Секция 1: Telegram сообщества -->
        <div class="py-12 border-t border-gray-100 animate-on-scroll">
          <div class="text-center mb-10">
            <div class="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50 border border-blue-100 rounded-xl mb-4 animate-on-scroll delay-100">
              <Icon name="fa-brands:telegram" class="w-4 h-4 text-blue-600" />
              <span class="text-xs font-bold text-blue-700 uppercase tracking-wider">Сообщества</span>
            </div>
            <h3 class="text-2xl md:text-3xl font-black text-gray-900 mb-3 animate-on-scroll delay-200">Сообщества в Telegram</h3>
            <p class="text-gray-600 max-w-xl mx-auto animate-on-scroll delay-300">Закрытые сообщества для предпринимателей и экспертов, где вы найдёте полезные связи и окружение для роста</p>
          </div>

          <div class="flex justify-center gap-6 md:gap-8 animate-on-scroll delay-400">
            <NuxtLink
              to="/networking"
              class="group flex flex-col items-center"
            >
              <div class="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-gray-200 hover:border-gray-400 transition-all hover:shadow-xl hover:-translate-y-1">
                <img src="/reference/networking.jpg" alt="Нескучный Нетворкинг" class="absolute inset-0 w-full h-full object-cover" />
              </div>
              <div class="text-center mt-3">
                <div class="text-sm font-bold text-gray-900">Нескучный Нетворкинг</div>
                <div class="text-xs text-gray-500">Полезные связи</div>
              </div>
            </NuxtLink>
            <NuxtLink
              to="/networking"
              class="group flex flex-col items-center"
            >
              <div class="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-gray-200 hover:border-gray-400 transition-all hover:shadow-xl hover:-translate-y-1">
                <img src="/reference/Frame 697.jpg" alt="Бизнес Сетка" class="absolute inset-0 w-full h-full object-cover" />
              </div>
              <div class="text-center mt-3">
                <div class="text-sm font-bold text-gray-900">Бизнес Сетка</div>
                <div class="text-xs text-gray-500">Закрытый клуб</div>
              </div>
            </NuxtLink>
          </div>
        </div>

        <!-- Секция 2: Услуги -->
        <div class="py-12 border-t border-gray-100 animate-on-scroll">
          <div class="text-center mb-10">
            <div class="inline-flex items-center gap-2 px-3 py-1.5 bg-purple-50 border border-purple-100 rounded-xl mb-4 animate-on-scroll delay-100">
              <Icon name="fa-solid:code" class="w-4 h-4 text-purple-600" />
              <span class="text-xs font-bold text-purple-700 uppercase tracking-wider">Услуги</span>
            </div>
            <h3 class="text-2xl md:text-3xl font-black text-gray-900 mb-3 animate-on-scroll delay-200">Услуги для роста вашего бизнеса</h3>
            <p class="text-gray-600 max-w-xl mx-auto animate-on-scroll delay-300">Разработка и автоматизация для масштабирования вашего бизнеса</p>
          </div>

          <div class="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <NuxtLink
              to="/yappie"
              class="card-animate group p-8 bg-white border-2 border-gray-200 rounded-[2rem] hover:border-blue-300 hover:shadow-xl transition-all hover:-translate-y-2"
            >
              <div class="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-6">
                <Icon name="fa-solid:code" class="w-8 h-8 text-gray-700" />
              </div>
              <h3 class="text-2xl font-bold mb-3">Веб-разработка</h3>
              <p class="text-sm text-gray-600 leading-relaxed mb-6">Сайты, которые продают, а не просто висят</p>
              <div class="flex items-center gap-2 text-xs font-bold uppercase tracking-wide">
                <span>Посмотреть услуги</span>
                <Icon name="fa-solid:arrow-right" class="w-4 h-4 transition-transform group-hover:translate-x-2" />
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
              <p class="text-sm text-gray-600 leading-relaxed mb-6">Статьи о разработке, автоматизации и AI для бизнеса</p>
              <div class="flex items-center gap-2 text-xs font-bold uppercase tracking-wide">
                <span>Читать статьи</span>
                <Icon name="fa-solid:arrow-right" class="w-4 h-4 transition-transform group-hover:translate-x-2" />
              </div>
            </NuxtLink>
          </div>
        </div>

        <!-- Секция 3: Полный цикл -->
        <div class="py-12 border-t border-gray-100 animate-on-scroll">
          <div class="bg-gradient-to-r from-gray-50 via-white to-gray-50 rounded-[2rem] border border-gray-200 p-8 md:p-12">
            <div class="text-center mb-10">
              <div class="inline-flex items-center gap-2 px-3 py-1.5 bg-green-50 border border-green-100 rounded-xl mb-4 animate-on-scroll delay-100">
                <Icon name="fa-solid:rotate" class="w-4 h-4 text-green-600" />
                <span class="text-xs font-bold text-green-700 uppercase tracking-wider">Система</span>
              </div>
              <h3 class="text-2xl md:text-3xl font-black text-gray-900 mb-3 animate-on-scroll delay-200">Полный цикл работы с клиентом</h3>
              <p class="text-gray-600 max-w-2xl mx-auto animate-on-scroll delay-300">Закрываю всю цепочку: от привлечения внимания до автоматизации продаж</p>
            </div>

            <!-- Квадратная схема цикла -->
            <div class="relative max-w-2xl mx-auto animate-on-scroll delay-400">
              <!-- Сетка 2x2 для мобильных, 3x3 для десктопа -->
              <div class="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-6">
                <!-- Верхний левый угол: Привлек -->
                <div class="col-span-1">
                  <div class="p-2 md:p-5 bg-white border-2 border-blue-200 rounded-2xl text-center shadow-lg w-full">
                    <div class="w-8 h-8 md:w-12 md:h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-1 md:mb-2">
                      <Icon name="fa-solid:bullhorn" class="w-4 h-4 md:w-6 md:h-6 text-blue-600" />
                    </div>
                    <div class="text-[10px] md:text-base font-bold text-gray-900">Привлек</div>
                    <div class="text-[9px] md:text-xs text-gray-500">Контент</div>
                  </div>
                </div>

                <!-- Верхний правый угол: Обогрел -->
                <div class="col-span-1">
                  <div class="p-2 md:p-5 bg-white border-2 border-purple-200 rounded-2xl text-center shadow-lg w-full">
                    <div class="w-8 h-8 md:w-12 md:h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-1 md:mb-2">
                      <Icon name="fa-solid:heart" class="w-4 h-4 md:w-6 md:h-6 text-purple-600" />
                    </div>
                    <div class="text-[10px] md:text-base font-bold text-gray-900">Обогрел</div>
                    <div class="text-[9px] md:text-xs text-gray-500">Сообщество</div>
                  </div>
                </div>

                <!-- Нижний левый угол: Обработал -->
                <div class="col-span-1">
                  <div class="p-2 md:p-5 bg-white border-2 border-orange-200 rounded-2xl text-center shadow-lg w-full">
                    <div class="w-8 h-8 md:w-12 md:h-12 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-1 md:mb-2">
                      <Icon name="fa-solid:cog" class="w-4 h-4 md:w-6 md:h-6 text-orange-600" />
                    </div>
                    <div class="text-[10px] md:text-base font-bold text-gray-900">Обработал</div>
                    <div class="text-[9px] md:text-xs text-gray-500">Автоматизация</div>
                  </div>
                </div>

                <!-- Нижний правый угол: Упаковал -->
                <div class="col-span-1">
                  <div class="p-2 md:p-5 bg-white border-2 border-green-200 rounded-2xl text-center shadow-lg w-full">
                    <div class="w-8 h-8 md:w-12 md:h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-1 md:mb-2">
                      <Icon name="fa-solid:laptop-code" class="w-4 h-4 md:w-6 md:h-6 text-green-600" />
                    </div>
                    <div class="text-[10px] md:text-base font-bold text-gray-900">Упаковал</div>
                    <div class="text-[9px] md:text-xs text-gray-500">Сайт</div>
                  </div>
                </div>
              </div>

              <!-- Подпись цикла -->
              <div class="flex justify-center items-center gap-2 text-gray-500 mt-4 md:mt-10">
                <Icon name="fa-solid:rotate" class="w-4 h-4 md:w-5 md:h-5" />
                <span class="text-[10px] md:text-sm font-medium">цикл замыкается → клиент возвращается</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 7. КЕЙСЫ -->
    <section id="cases" class="py-16 md:py-24 lg:py-32 px-4 sm:px-6 border-t border-gray-100 bg-gray-50">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16 animate-on-scroll">
          <div class="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-2xl mb-6 animate-on-scroll delay-100">
            <Icon name="fa-solid:chart-line" class="w-4 h-4 text-gray-700" />
            <span class="text-xs font-bold text-gray-700 uppercase tracking-wider">Результаты</span>
          </div>
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-4 animate-on-scroll delay-200">
            Результаты моих клиентов
          </h2>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="(caseItem, index) in cases" :key="index"
               :class="[
                 'card-animate group p-6 md:p-8 bg-white border border-gray-200 rounded-[2rem] hover:border-blue-300 hover:shadow-xl transition-all hover:-translate-y-2',
                 index === 1 ? 'delay-200' : index === 2 ? 'delay-400' : ''
               ]">
            
            <!-- Badge -->
            <div class="flex items-center gap-3 mb-6">
              <span class="px-3 py-1.5 text-xs font-bold text-blue-700 bg-blue-50 border border-blue-100 rounded-xl">
                {{ caseItem.badge }}
              </span>
            </div>
            
            <!-- Заголовок -->
            <h3 class="text-lg md:text-xl font-bold mb-4 leading-snug text-gray-900">
              {{ caseItem.title }}
            </h3>
            
            <!-- Задача -->
            <div class="mb-4">
              <div class="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Задача</div>
              <p class="text-sm text-gray-700">{{ caseItem.task }}</p>
            </div>
            
            <!-- Точка А -->
            <div class="mb-4 p-3 bg-amber-50 rounded-xl border border-amber-100">
              <div class="text-xs font-bold text-amber-700 uppercase tracking-wide mb-1">Точка А</div>
              <p class="text-sm text-amber-900">{{ caseItem.pointA }}</p>
            </div>
            
            <!-- Решение -->
            <div class="mb-4">
              <div class="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Решение</div>
              <ul class="space-y-1.5">
                <li v-for="(sol, i) in caseItem.solution" :key="i" class="flex items-start gap-2">
                  <span class="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-1.5"></span>
                  <span class="text-sm text-gray-700">{{ sol }}</span>
                </li>
              </ul>
            </div>
            
            <!-- Результат -->
            <div class="p-4 bg-green-50 rounded-xl border border-green-100">
              <div class="flex items-center gap-2 mb-3">
                <Icon name="fa-solid:chart-line" class="w-4 h-4 text-green-600" />
                <span class="text-xs font-bold text-green-700 uppercase">Результат</span>
              </div>
              <ul class="space-y-1.5">
                <li v-for="(res, i) in caseItem.result" :key="i" class="flex items-start gap-2">
                  <Icon name="fa-solid:check" class="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <span class="text-sm font-medium text-green-800">{{ res }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 8. ЭТАПЫ РАБОТЫ -->
    <section class="py-16 md:py-24 lg:py-32 px-4 sm:px-6 border-t border-gray-100">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16 animate-on-scroll">
          <div class="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-2xl mb-6 animate-on-scroll delay-100">
            <span class="text-xs font-bold text-gray-700 uppercase tracking-wider">Процесс</span>
          </div>
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-4 animate-on-scroll delay-200">
            Этапы работы
          </h2>
        </div>

        <div class="relative max-w-5xl mx-auto">
          <div class="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gray-300"></div>

          <div class="space-y-12">
            <div v-for="(step, index) in workSteps" :key="index"
                 :class="[
                   'card-animate relative flex items-center gap-8 md:gap-12',
                   index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse',
                   index === 0 ? '' : index === 1 ? 'delay-200' : index === 2 ? 'delay-400' : index === 3 ? 'delay-200' : 'delay-400'
                 ]">
              <div :class="[
                'flex-1 ml-20 md:ml-0',
                index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'
              ]">
                <div class="p-6 bg-white border-2 border-gray-100 rounded-3xl hover:border-blue-300 transition-all">
                  <h3 class="text-xl font-bold mb-2">{{ step.title }}</h3>
                  <p class="text-gray-600">{{ step.description }}</p>
                </div>
              </div>

              <div class="absolute left-8 md:left-1/2 -translate-x-1/2 w-16 h-16 bg-gray-900 rounded-2xl flex items-center justify-center shadow-lg z-10">
                <span class="text-2xl font-black text-white">{{ index + 1 }}</span>
              </div>

              <div class="flex-1 hidden md:block"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 9. FOOTER + CTA -->
    <footer id="contact" class="py-16 md:py-24 px-4 sm:px-6 border-t border-gray-100 bg-gray-900">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16 animate-on-scroll">
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mb-6 animate-on-scroll delay-100">
            Готовы сделать имя активом?
          </h2>
          <p class="text-xl text-gray-400 max-w-2xl mx-auto mb-10 animate-on-scroll delay-200">
            Запишитесь на установочную встречу. Разберем вашу ситуацию и наметим план выхода на новый доход.
          </p>
          <a href="https://t.me/artemselifanov" target="_blank" class="group inline-flex items-center gap-3 px-10 py-5 text-base font-semibold text-gray-900 bg-white hover:bg-gray-100 rounded-2xl transition-all hover:-translate-y-1 animate-on-scroll delay-300">
            Записаться на консультацию
          </a>
        </div>

        <div class="pt-12 border-t border-gray-800">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
            <div class="col-span-2 md:col-span-1">
              <div class="text-sm font-bold text-white mb-4">Артем Селифанов</div>
            </div>

            <div>
              <h4 class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">Сообщества</h4>
              <ul class="space-y-3 text-sm">
                <li><NuxtLink to="/networking" class="text-gray-400 hover:text-white transition-colors">Нескучный Нетворкинг</NuxtLink></li>
                <li><NuxtLink to="/business" class="text-gray-400 hover:text-white transition-colors">Бизнес Сетка</NuxtLink></li>
              </ul>
            </div>

            <div>
              <h4 class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">Контакты</h4>
              <ul class="space-y-3 text-sm">
                <li><a href="https://t.me/artemselifanov" target="_blank" class="text-gray-400 hover:text-white transition-colors">Telegram</a></li>
                <li><a href="https://wa.me/79991234567" target="_blank" class="text-gray-400 hover:text-white transition-colors">WhatsApp</a></li>
                <li><a href="mailto:email@example.com" class="text-gray-400 hover:text-white transition-colors">Email</a></li>
              </ul>
            </div>

            <div>
              <h4 class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">Соцсети</h4>
              <div class="flex gap-3">
                <a v-for="(network, index) in socialNetworks.slice(0, 4)" :key="index"
                   :href="network.link" target="_blank"
                   class="w-11 h-11 bg-gray-800 hover:bg-gray-700 rounded-xl flex items-center justify-center transition-all">
                  <Icon :name="`fa-brands:${network.icon}`" class="w-5 h-5 text-gray-400" />
                </a>
              </div>
            </div>
          </div>

          <div class="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-6">
            <div class="text-xs text-gray-500">© 2025 Артем Селифанов. Все права защищены.</div>
            <div class="flex gap-6">
              <NuxtLink to="/yappie" class="text-xs text-gray-500 hover:text-white transition-colors">Политика конфиденциальности</NuxtLink>
              <NuxtLink to="/yappie" class="text-xs text-gray-500 hover:text-white transition-colors">Договор оферты</NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </footer>

    <!-- Кнопка наверх (фиксированная, видна при скролле) -->
    <button @click="scrollToTop"
            v-show="scrolled"
            :style="{ position: 'fixed', bottom: '16px', right: '16px', zIndex: '9999' }"
            class="p-3 bg-gray-900/90 hover:bg-gray-900 rounded-2xl transition-all shadow-lg backdrop-blur-sm">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" style="width: 20px; height: 20px;" fill="currentColor" class="text-white">
        <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"/>
      </svg>
    </button>

  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isMenuOpen = ref(false)
const scrolled = ref(false)
const scrollProgress = ref(0)

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
      rootMargin: '0px 0px -50px 0px'
    }
  )

  // Находим все элементы с классами анимации
  const elements = document.querySelectorAll('.animate-on-scroll, .card-animate, .image-animate')
  elements.forEach((el) => {
    observer.observe(el)
    animatedElements.value.push(el)
  })
}

const menuItems = [
  { href: '/networking', label: 'Нескучный Нетворкинг' },
  { href: '/business', label: 'Бизнес Сетка' },
  { href: '/yappie', label: 'Веб-разработка' },
  { href: '/blog', label: 'Блог' },
  { href: '#services', label: 'Создать свой блог' }
]

const socialNetworks = [
  { name: 'Telegram', icon: 'telegram', link: 'https://t.me/artemselifanov' },
  { name: 'YouTube', icon: 'youtube', link: 'https://youtube.com' },
  { name: 'ВК', icon: 'vk', link: 'https://vk.com' },
  { name: 'Instagram', icon: 'instagram', link: 'https://instagram.com' },
  { name: 'TenChat', icon: 'linkedin', link: 'https://tenchat.ru' }
]

const trafficSources = [
  { name: 'ТенЧат' },
  { name: 'Дзен' },
  { name: 'Сетка' },
  { name: 'Тредс' },
  { name: 'ВК' }
]

const service1Features = [
  'Экспресс-аудит Telegram канала',
  'Оценка упаковки и контента',
  'Выявление точек роста',
  'Рекомендации по улучшению'
]

const service2Features = [
  'Анализ текущего позиционирования',
  'Разбор шапки профиля и визуала',
  'Рекомендации по контенту',
  'Ответы на вопросы'
]

const service3Features = [
  'Полное сопровождение 4 недели',
  'Еженедельные созвоны',
  'Разработка контент-стратегии',
  'Помощь в создании продукта',
  'Настройка продаж',
  'Личный чат со мной',
  'Разбор полётов ежедневно'
]

const aboutStats = [
  { value: '7+', label: 'Лет в бизнес-консалтинге' },
  { value: '5+', label: 'Лет в маркетинге' },
  { value: '45K', label: 'Подписчиков', sublabel: 'за год', growth: '+2K в мес' }
]

const targetAudience = [
  {
    icon: 'users',
    title: 'Консультанты и коучи',
    description: 'Хотите выйти на высокий чек и стать узнаваемым в нише'
  },
  {
    icon: 'briefcase',
    title: 'Предприниматели (услуги)',
    description: 'Хотите привлекать клиентов через личный бренд, а не только рекламу'
  },
  {
    icon: 'user-tie',
    title: 'Специалисты',
    description: 'Маркетологи, юристы, психологи и др. Хотите масштабировать доход через личный бренд и сарафан'
  }
]

const workResults = [
  'Личный бренд работает на вас 24/7',
  'Клиенты приходят сами, потому что доверяют вашей экспертизе',
  'Вы продаете дороже, потому что вы — бренд'
]

const ecosystemItems = [
  {
    to: '/networking',
    icon: 'users',
    title: 'Нескучный Нетворкинг',
    description: 'Полезные связи и окружение для роста',
    cta: 'Узнать подробнее'
  },
  {
    to: '/networking',
    icon: 'briefcase',
    title: 'Бизнес Сетка',
    description: 'Закрытый клуб предпринимателей для обмена опытом',
    cta: 'Узнать подробнее'
  },
  {
    to: '/yappie',
    icon: 'code',
    title: 'Веб-разработка',
    description: 'Сайты, которые продают, а не просто висят',
    cta: 'Посмотреть услуги'
  },
  {
    to: '/study',
    icon: 'bolt',
    title: 'Автоматизация',
    description: 'Внедрение CRM и скриптов для лидов',
    cta: 'Узнать как внедрить'
  }
]

const cases = [
  {
    badge: 'Личный пример',
    title: 'Запуск канала «Нескучный Нетворкинг» с нуля',
    task: 'Собрать лояльное ядро аудитории (авторов/экспертов) без вложений в рекламу',
    pointA: 'Новый канал, 0 подписчиков, нет рекламного бюджета',
    solution: [
      'Внедрение контент-плана с фокусом на пользу и нетворкинг',
      'Кросс-постинг и органические методы привлечения (Сетка, TenChat)'
    ],
    result: [
      '+500+ подписчиков за 3 месяца органически',
      '555+ участников в активном комьюнити',
      'Конверсия из просмотра в подписку: до 50% (на тестовых постах)'
    ]
  },
  {
    badge: 'Методология',
    title: 'Внедрение продаж через чекапы/диагностики',
    task: 'Повысить конверсию из консультации в оплату услуг для экспертов',
    pointA: 'Клиенты проводили бесплатные консультации, «сливали» экспертов советами, конверсия в продажу была низкой',
    solution: [
      'Переход от модели «консультация» к модели «диагностика/разбор»',
      'Внедрение скрипта: выявление болей → презентация решения → оффер',
      'Фильтрация лидов до звонка через анкетирование'
    ],
    result: [
      'Конверсия в оплату с холодного трафика: 20-25%',
      'Конверсия по теплой базе (подписчики блога): 60-80%',
      'Каждый 4-5-й звонок становится оплаченным клиентом'
    ]
  },
  {
    badge: 'Мультиплатформенность',
    title: 'Мультиплатформенная стратегия продвижения',
    task: 'Обеспечить стабильный трафик и узнаваемость эксперта на 8 площадках одновременно',
    pointA: 'Разрозненный контент, сложность в удержании темпа, разные алгоритмы площадок',
    solution: [
      'Система «30 минут в день» на создание и дистрибуцию контента',
      'Адаптация одного смысла под форматы: Сетка, Дзен, ВК, Телеграм'
    ],
    result: [
      '30 000+ общая аудитория на всех платформах',
      '+5 000 новых подписчиков органически за 3 месяца',
      'Охваты постов: 80 000+ просмотров (на примере канала в Сетке)'
    ]
  }
]

const workSteps = [
  { title: 'Аудит и Стратегия', description: 'Погружение в бизнес, анализ конкурентов, определение ЦА' },
  { title: 'Упаковка', description: 'Оформление профилей, создание визуального стиля, гайдлайны' },
  { title: 'Контент-производство', description: 'Съемки, написание постов, сценарии для Reels/YouTube' },
  { title: 'Дистрибуция', description: 'Публикации в 5 сетях, посевы, нетворкинг, коллаборации' },
  { title: 'Аналитика и допродажи', description: 'Подключение веб-инструментов, CRM, автоматизация' }
]

function handleScroll() {
  scrolled.value = window.scrollY > 20
  const scrollTop = window.scrollY
  const docHeight = document.documentElement.scrollHeight - window.innerHeight
  scrollProgress.value = (scrollTop / docHeight) * 100
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  initScrollAnimations()
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
  0% { offset-distance: 0%; opacity: 0; }
  10% { opacity: 1; }
  90% { opacity: 1; }
  100% { offset-distance: 100%; opacity: 0; }
}

@keyframes trafficFlow2 {
  0% { offset-distance: 0%; opacity: 0; }
  10% { opacity: 1; }
  90% { opacity: 1; }
  100% { offset-distance: 100%; opacity: 0; }
}

@keyframes trafficFlow3 {
  0% { offset-distance: 0%; opacity: 0; }
  10% { opacity: 1; }
  90% { opacity: 1; }
  100% { offset-distance: 100%; opacity: 0; }
}

@keyframes trafficFlow4 {
  0% { offset-distance: 0%; opacity: 0; }
  10% { opacity: 1; }
  90% { opacity: 1; }
  100% { offset-distance: 100%; opacity: 0; }
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
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-3px); }
}

.animate-bounce-subtle {
  animation: bounce-subtle 2s ease-in-out infinite;
}

/* Анимация для кнопки Буст - пульсация */
@keyframes pulse-slow {
  0%, 100% { opacity: 1; box-shadow: 0 10px 15px -3px rgba(59, 130, 246, 0.3); }
  50% { opacity: 0.9; box-shadow: 0 4px 6px -1px rgba(59, 130, 246, 0.2); }
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
  transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.animate-on-scroll.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Задержки для дочерних элементов */
.animate-on-scroll.delay-100 { transition-delay: 0.1s; }
.animate-on-scroll.delay-200 { transition-delay: 0.2s; }
.animate-on-scroll.delay-300 { transition-delay: 0.3s; }
.animate-on-scroll.delay-400 { transition-delay: 0.4s; }
.animate-on-scroll.delay-500 { transition-delay: 0.5s; }

/* Анимация для карточек */
.card-animate {
  opacity: 0;
  transform: translateY(30px) scale(0.95);
  transition: opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1), transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.card-animate.visible {
  opacity: 1;
  transform: translateY(0) scale(1);
}

/* Анимация для изображений */
.image-animate {
  opacity: 0;
  transform: scale(0.9);
  transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.image-animate.visible {
  opacity: 1;
  transform: scale(1);
}
</style>
