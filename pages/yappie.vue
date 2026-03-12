<template>
  <div class="min-h-screen bg-[#030305] text-white overflow-x-hidden">

    <!-- Навигация -->
    <nav class="fixed top-0 left-0 right-0 z-50 bg-[#030305]/70 backdrop-blur-2xl border-b border-white/[0.08]">
      <div class="max-w-7xl mx-auto px-6 py-4 flex items-center">
        <!-- Левая зона: Логотип -->
        <a href="/yappie" class="text-xl font-semibold text-white flex items-center gap-2 group shrink-0">
          <span class="font-syncopate font-bold text-white tracking-wider text-2xl">YAPPIE</span>
        </a>

        <!-- Центральная зона: Десктопное меню -->
        <div class="hidden md:flex items-center gap-8 flex-1 justify-center">
          <a href="/" class="text-sm text-gray-400 hover:text-white transition-all duration-300">Главная</a>
          <a href="#problems" class="text-sm text-gray-400 hover:text-white transition-all duration-300 hover:translate-y-[-1px]">Проблемы</a>
          <a href="#services" class="text-sm text-gray-400 hover:text-white transition-all duration-300 hover:translate-y-[-1px]">Услуги</a>
          <a href="#why-us" class="text-sm text-gray-400 hover:text-white transition-all duration-300 hover:translate-y-[-1px]">Почему мы</a>
          <a href="#portfolio" class="text-sm text-gray-400 hover:text-white transition-all duration-300 hover:translate-y-[-1px]">Кейсы</a>
          <a href="/blog" class="text-sm text-gray-400 hover:text-white transition-all duration-300 hover:translate-y-[-1px]">Блог</a>
          <a href="#faq" class="text-sm text-gray-400 hover:text-white transition-all duration-300 hover:translate-y-[-1px]">FAQ</a>
          <a href="https://t.me/artemselifanov" target="_blank" class="inline-flex items-center justify-center rounded-full font-medium px-4 py-2 text-xs bg-white text-black hover:bg-gray-100 shadow-lg shadow-white/10 hover:shadow-white/20 transition-all shrink-0">Связаться</a>
        </div>

        <!-- Правая зона: пустая для баланса -->
        <div class="hidden md:block w-[100px] shrink-0"></div>

        <!-- Кнопка бургер-меню для мобильных -->
        <button
          @click="isMobileMenuOpen = !isMobileMenuOpen"
          class="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors absolute right-4"
          aria-label="Открыть меню"
        >
          <Menu v-if="!isMobileMenuOpen" class="w-6 h-6" />
          <X v-else class="w-6 h-6" />
        </button>
      </div>
    </nav>

    <!-- Мобильное меню на весь экран -->
    <div v-if="isMobileMenuOpen" class="fixed inset-0 z-[100] md:hidden bg-black flex flex-col">
      <div class="flex-1 flex flex-col justify-center items-center px-6">
        <nav class="flex flex-col gap-8 w-full max-w-xs">
          <a
            v-for="item in mobileMenuItems"
            :key="item.href"
            :href="item.href"
            @click="isMobileMenuOpen = false"
            class="text-3xl font-bold text-white text-center py-4 hover:text-violet-400 transition-colors"
          >
            {{ item.label }}
          </a>
        </nav>
        <a href="https://t.me/artemselifanov" target="_blank" class="inline-flex items-center justify-center rounded-full font-medium px-10 py-5 text-xl font-semibold bg-white text-black hover:bg-gray-100 w-full max-w-xs transition-all">Связаться</a>
      </div>
      <!-- Кнопка закрытия -->
      <button
        @click="isMobileMenuOpen = false"
        class="absolute top-6 right-6 text-white p-3 hover:bg-white/10 rounded-lg transition-colors"
        aria-label="Закрыть меню"
      >
        <X class="w-8 h-8" />
      </button>
    </div>

    <!-- Hero секция с улучшенными анимациями -->
    <section class="min-h-screen flex items-center relative pt-24 px-4 sm:px-6 overflow-hidden">
      <!-- Фоновые градиентные пятна только в хедере -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div class="absolute top-0 left-0 w-[300px] sm:w-[400px] md:w-[500px] lg:w-[600px] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] bg-violet-600/15 sm:bg-violet-600/20 rounded-full blur-[80px] sm:blur-[100px] md:blur-[120px] lg:blur-[150px] animate-pulse-slow"></div>
        <div class="absolute bottom-0 right-0 w-[200px] sm:w-[300px] md:w-[400px] lg:w-[500px] h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] bg-fuchsia-600/15 sm:bg-fuchsia-600/20 rounded-full blur-[60px] sm:blur-[80px] md:blur-[100px] lg:blur-[130px] animate-pulse-slow animation-delay-1000"></div>
        <div class="absolute top-1/3 right-1/4 w-[180px] sm:w-[250px] md:w-[320px] lg:w-[400px] h-[180px] sm:h-[250px] md:h-[320px] lg:h-[400px] bg-purple-600/10 sm:bg-purple-600/15 rounded-full blur-[80px] sm:blur-[100px] md:blur-[140px] lg:blur-[180px]"></div>
      </div>

      <div class="max-w-7xl mx-auto w-full relative z-10">
        <div class="grid lg:grid-cols-[45%_55%] gap-8 lg:gap-12 items-center">
          <!-- Левая часть - текст и кнопки -->
          <div class="text-left">
            <!-- Badge с glow -->
            <div class="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-white/[0.05] border border-white/15 text-xs sm:text-sm text-gray-200 mb-6 sm:mb-8 animate-fade-in shadow-lg shadow-violet-500/10 backdrop-blur-sm">
              <div class="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-[0_0_10px_rgba(74,222,128,0.5)]"></div>
              <span class="hidden sm:inline">Доступны для новых проектов</span>
              <span class="sm:hidden">Доступны для проектов</span>
            </div>

            <!-- Заголовок с улучшенным градиентом -->
            <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-[1.2] animate-fade-in-up">
              <span class="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">Разработка сайтов,</span>
              <br />
              <span class="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">веб-приложений</span>
              <br />
              <span class="bg-gradient-to-r from-fuchsia-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">и чат-ботов с AI для бизнеса</span>
            </h1>

            <p class="text-base sm:text-lg text-gray-400 max-w-xl mb-6 sm:mb-10 leading-relaxed animate-fade-in-up animation-delay-200">
              Превращаем сложные бизнес-задачи в элегантные
              <span class="text-violet-300 font-medium">автоматизированные решения</span> с помощью AI
            </p>

            <!-- Кнопки -->
            <div class="flex flex-row gap-3 animate-fade-in-up animation-delay-400 flex-wrap">
              <a href="https://t.me/artemselifanov" target="_blank" class="inline-flex items-center justify-center rounded-full font-medium px-4 sm:px-6 py-3 sm:py-3.5 text-xs sm:text-sm bg-white text-black hover:bg-gray-100 shadow-xl shadow-white/10 hover:shadow-white/20 transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 whitespace-nowrap flex-1 sm:flex-none">
                <span class="whitespace-nowrap">Обсудить проект</span>
                <ArrowRight class="ml-2 h-3.5 w-3.5 flex-shrink-0" />
              </a>
              <a href="#portfolio" class="inline-flex items-center justify-center rounded-full font-medium px-4 sm:px-6 py-3 sm:py-3.5 text-xs sm:text-sm border-white/20 hover:bg-white/10 hover:border-white/40 backdrop-blur-sm transition-all duration-300 hover:scale-105 whitespace-nowrap flex-1 sm:flex-none">
                <span class="whitespace-nowrap">Смотреть работы</span>
              </a>
            </div>

            <!-- Stats -->
            <div class="flex justify-center sm:justify-start gap-4 sm:gap-6 lg:gap-8 mt-8 sm:mt-12 animate-fade-in-up animation-delay-600">
              <div class="text-center sm:text-left">
                <div class="text-2xl sm:text-3xl font-bold text-white">50+</div>
                <div class="text-xs sm:text-sm text-gray-500">Проектов</div>
              </div>
              <div class="text-center sm:text-left">
                <div class="text-2xl sm:text-3xl font-bold text-white">98%</div>
                <div class="text-xs sm:text-sm text-gray-500">Довольных</div>
              </div>
              <div class="text-center sm:text-left">
                <div class="text-2xl sm:text-3xl font-bold text-white">24/7</div>
                <div class="text-xs sm:text-sm text-gray-500">Поддержка</div>
              </div>
            </div>
          </div>

          <!-- Правая часть - CRM Dashboard и Код -->
          <div class="flex gap-4 lg:gap-6 h-[360px] sm:h-[400px] lg:h-[420px]">
            
            <!-- CRM Dashboard -->
            <div class="flex flex-col gap-2 sm:gap-3 flex-[2] w-full lg:flex-[2]">

              <!-- Dashboard (верхний) -->
              <div class="w-full flex-1 rounded-lg sm:rounded-xl border border-white/15 p-3 sm:p-4 backdrop-blur-xl bg-gradient-to-br from-white/[0.06] to-white/[0.03] shadow-2xl overflow-hidden">
                  <!-- Header -->
                  <div class="mb-2 sm:mb-3">
                    <div class="flex gap-1.5 sm:gap-2 mb-2">
                      <div class="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500/80"></div>
                      <div class="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500/80"></div>
                      <div class="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500/80"></div>
                    </div>
                    <h3 class="text-[10px] sm:text-xs font-semibold text-white">CRM Dashboard</h3>
                    <p class="text-[8px] sm:text-[9px] text-gray-500">Real-time</p>
                  </div>

                  <!-- Stats Row -->
                  <div class="grid grid-cols-3 gap-2 sm:gap-2.5 mb-2 sm:mb-3">
                    <div class="p-2 sm:p-2.5 rounded bg-white/[0.03] border border-white/5">
                      <div class="text-sm sm:text-base font-bold text-white">1.3K</div>
                      <div class="text-[8px] sm:text-[9px] text-gray-500">Клиентов</div>
                      <div class="flex items-center gap-1 mt-1">
                        <TrendingUp class="w-2 h-2 sm:w-2.5 sm:h-2.5 text-green-500" />
                        <span class="text-[7px] sm:text-[8px] text-green-400">+12%</span>
                      </div>
                    </div>
                    <div class="p-2 sm:p-2.5 rounded bg-white/[0.03] border border-white/5">
                      <div class="text-sm sm:text-base font-bold text-white">856</div>
                      <div class="text-[8px] sm:text-[9px] text-gray-500">Сделок</div>
                      <div class="flex items-center gap-1 mt-1">
                        <TrendingUp class="w-2 h-2 sm:w-2.5 sm:h-2.5 text-green-500" />
                        <span class="text-[7px] sm:text-[8px] text-green-400">+8%</span>
                      </div>
                    </div>
                    <div class="p-2 sm:p-2.5 rounded bg-gradient-to-br from-violet-500/15 to-fuchsia-500/15 border border-violet-500/25">
                      <div class="text-sm sm:text-base font-bold text-white">2.4M</div>
                      <div class="text-[8px] sm:text-[9px] text-gray-400">Выручка</div>
                      <div class="flex items-center gap-1 mt-1">
                        <TrendingUp class="w-2 h-2 sm:w-2.5 sm:h-2.5 text-violet-400" />
                        <span class="text-[7px] sm:text-[8px] text-violet-400">+24%</span>
                      </div>
                    </div>
                  </div>

                  <!-- Chart -->
                  <div class="h-10 sm:h-12 flex items-end gap-1">
                    <div class="flex-1 bg-gradient-to-t from-violet-500/60 to-violet-500/15 rounded-sm" style="height: 35%"></div>
                    <div class="flex-1 bg-gradient-to-t from-fuchsia-500/60 to-fuchsia-500/15 rounded-sm" style="height: 55%"></div>
                    <div class="flex-1 bg-gradient-to-t from-violet-500/60 to-violet-500/15 rounded-sm" style="height: 42%"></div>
                    <div class="flex-1 bg-gradient-to-t from-fuchsia-500/60 to-fuchsia-500/15 rounded-sm" style="height: 75%"></div>
                    <div class="flex-1 bg-gradient-to-t from-violet-500/60 to-violet-500/15 rounded-sm" style="height: 58%"></div>
                    <div class="flex-1 bg-gradient-to-t from-fuchsia-500/60 to-fuchsia-500/15 rounded-sm" style="height: 88%"></div>
                    <div class="flex-1 bg-gradient-to-t from-violet-500/60 to-violet-500/15 rounded-sm" style="height: 70%"></div>
                    <div class="flex-1 bg-gradient-to-t from-fuchsia-500/70 to-violet-500/25 rounded-sm" style="height: 100%"></div>
                  </div>
                </div>

                <!-- Клиенты (нижний) -->
                <div class="w-full flex-1 rounded-lg border border-white/10 p-3 sm:p-4 backdrop-blur-xl bg-[#0a0a0f]/95 shadow-2xl overflow-hidden">
                  <div class="flex items-center justify-between mb-3 sm:mb-4">
                    <div>
                      <div class="flex items-center gap-2">
                        <span class="text-sm sm:text-base font-semibold text-white">Клиенты</span>
                        <span class="text-[10px] sm:text-xs text-green-400 bg-green-500/10 px-1.5 sm:px-2 py-0.5 rounded-full border border-green-500/30 flex-shrink-0">Live</span>
                      </div>
                      <div class="text-[10px] sm:text-xs text-gray-500">Активных пользователей</div>
                    </div>
                    <div class="text-right flex-shrink-0">
                      <div class="text-base sm:text-lg font-bold text-white">2,847</div>
                      <div class="text-[10px] text-green-400 flex items-center justify-end gap-0.5">
                        <div class="w-2 h-2 sm:w-3 sm:h-3 border-l border-b border-green-400 rotate-45"></div>
                        +18%
                      </div>
                    </div>
                  </div>
                  <div class="grid grid-cols-3 gap-2 sm:gap-3">
                    <div class="flex flex-col gap-1.5 sm:gap-2 p-2 sm:p-3 rounded-lg bg-white/[0.02] border border-white/5">
                      <div class="flex items-center gap-1.5">
                        <div class="w-5 h-5 sm:w-6 sm:h-6 rounded bg-violet-500/20 border border-violet-500/30 flex items-center justify-center flex-shrink-0">
                          <div class="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-violet-400"></div>
                        </div>
                        <div class="min-w-0">
                          <div class="text-base sm:text-lg font-bold text-white">1,234</div>
                          <div class="text-[9px] sm:text-xs text-gray-500 truncate">Активных</div>
                        </div>
                      </div>
                      <div class="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                        <div class="h-full w-[75%] bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full"></div>
                      </div>
                    </div>
                    <div class="flex flex-col gap-1.5 sm:gap-2 p-2 sm:p-3 rounded-lg bg-white/[0.02] border border-white/5">
                      <div class="flex items-center gap-1.5">
                        <div class="w-5 h-5 sm:w-6 sm:h-6 rounded bg-fuchsia-500/20 border border-fuchsia-500/30 flex items-center justify-center flex-shrink-0">
                          <div class="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-fuchsia-400"></div>
                        </div>
                        <div class="min-w-0">
                          <div class="text-base sm:text-lg font-bold text-white">856</div>
                          <div class="text-[9px] sm:text-xs text-gray-500 truncate">В ожидании</div>
                        </div>
                      </div>
                      <div class="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                        <div class="h-full w-[45%] bg-gradient-to-r from-fuchsia-500 to-purple-500 rounded-full"></div>
                      </div>
                    </div>
                    <div class="flex flex-col gap-1.5 sm:gap-2 p-2 sm:p-3 rounded-lg bg-white/[0.02] border border-white/5">
                      <div class="flex items-center gap-1.5">
                        <div class="w-5 h-5 sm:w-6 sm:h-6 rounded bg-purple-500/20 border border-purple-500/30 flex items-center justify-center flex-shrink-0">
                          <div class="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-purple-400"></div>
                        </div>
                        <div class="min-w-0">
                          <div class="text-base sm:text-lg font-bold text-white">757</div>
                          <div class="text-[9px] sm:text-xs text-gray-500 truncate">VIP клиентов</div>
                        </div>
                      </div>
                      <div class="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                        <div class="h-full w-[60%] bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            <!-- Код -->
            <div class="hidden lg:block lg:flex-[1] h-full rounded-lg sm:rounded-xl border border-white/10 p-3 sm:p-4 backdrop-blur-xl bg-[#0d0d12]/95 shadow-2xl overflow-hidden">
              <div class="flex items-center justify-between mb-3 sm:mb-4 pb-2.5 sm:pb-3 border-b border-white/5">
                <div class="flex items-center gap-2 sm:gap-2.5">
                  <div class="flex gap-1.5 sm:gap-2 flex-shrink-0">
                    <div class="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500/80 flex-shrink-0"></div>
                    <div class="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500/80 flex-shrink-0"></div>
                    <div class="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500/80 flex-shrink-0"></div>
                  </div>
                  <span class="text-[8px] sm:text-[9px] text-gray-500 font-mono whitespace-nowrap">ai-processor.js</span>
                </div>
                <span class="text-[6px] sm:text-[7px] text-violet-400 bg-violet-500/10 px-1.5 sm:px-2 py-0.5 rounded-full border border-violet-500/20 flex-shrink-0">AI Core</span>
              </div>
              <pre class="text-[7px] sm:text-[8px] lg:text-[9px] leading-relaxed font-mono text-gray-400"><code><span class="text-violet-400">class</span> <span class="text-amber-400">CRMProcessor</span> {
  <span class="text-violet-400">async</span> <span class="text-blue-400">process</span>(<span class="text-blue-400">data</span>) {
    <span class="text-gray-500">// AI анализ данных</span>
    <span class="text-blue-400">const</span> <span class="text-blue-400">insights</span> = <span class="text-violet-400">await</span> <span class="text-amber-400">analyzeAI</span>(<span class="text-blue-400">data</span>);

    <span class="text-violet-400">const</span> <span class="text-blue-400">metrics</span> = {
      <span class="text-green-400">revenue</span>: <span class="text-blue-400">insights</span>.<span class="text-blue-400">revenue</span> * <span class="text-orange-400">1.24</span>,
      <span class="text-green-400">customers</span>: <span class="text-blue-400">insights</span>.<span class="text-blue-400">count</span>,
      <span class="text-green-400">conversion</span>: <span class="text-blue-400">insights</span>.<span class="text-blue-400">rate</span> + <span class="text-orange-400">0.12</span>
    };

    <span class="text-violet-400">return</span> <span class="text-amber-400">optimize</span>(<span class="text-blue-400">metrics</span>);
  }
}

<span class="text-violet-400">const</span> <span class="text-blue-400">crm</span> = <span class="text-violet-400">new</span> <span class="text-amber-400">CRMProcessor</span>();
<span class="text-blue-400">crm</span>.<span class="text-blue-400">process</span>(<span class="text-blue-400">analytics</span>);</code></pre>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Секция Проблемы бизнеса - Единый стиль сайта -->
    <section id="problems" ref="problemsSection" class="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 relative">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-12 sm:mb-16 lg:mb-20">
          <div class="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm text-gray-300 mb-4 sm:mb-6 backdrop-blur-sm">
            <AlertCircle class="w-3.5 h-3.5 sm:w-4 sm:h-4 text-violet-400" />
            Диагностика
          </div>
          <h2 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            <span class="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">Узнаёте свой</span>
            <span class="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent"> бизнес?</span>
          </h2>
          <p class="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg leading-relaxed px-2">
            Эти проблемы знакомы большинству компаний, которые хотят масштабироваться
          </p>
        </div>

        <!-- Карточки проблем в едином стиле -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <div v-for="(problem, index) in problems" :key="index"
               :ref="(el) => problemRefs[index] = el"
               class="group relative rounded-2xl bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] p-5 sm:p-6 lg:p-8 hover:border-violet-500/30 hover:bg-white/[0.04] transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-violet-500/10 overflow-hidden">
            <!-- Градиентный фон при наведении -->
            <div class="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-fuchsia-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <!-- Номер проблемы -->
            <div class="absolute top-4 sm:top-6 right-4 sm:right-6 text-4xl sm:text-5xl lg:text-6xl font-bold text-white/[0.08] group-hover:text-violet-400/20 transition-colors select-none">
              {{ String(index + 1).padStart(2, '0') }}
            </div>

            <div class="relative z-10">
              <!-- Иконка с белой обводкой -->
              <div class="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl border border-white/30 bg-transparent flex items-center justify-center mb-4 sm:mb-6 group-hover:border-white/50 group-hover:scale-110 transition-all duration-300">
                <component :is="problem.icon" class="h-6 w-6 sm:h-7 sm:w-7 text-white" />
              </div>

              <!-- Заголовок -->
              <h3 class="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 group-hover:text-violet-200 transition-colors">
                {{ problem.title }}
              </h3>

              <!-- Описание -->
              <p class="text-sm sm:text-base text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                {{ problem.description }}
              </p>

              <!-- Решение -->
              <div class="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-white/5">
                <div class="flex items-center gap-2 text-xs sm:text-sm">
                  <CheckCircle2 class="w-3.5 h-3.5 sm:w-4 sm:h-4 text-violet-400 flex-shrink-0" />
                  <span class="text-violet-300">{{ problem.solution }}</span>
                </div>
              </div>
            </div>

            <!-- Декоративная линия снизу -->
            <div class="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-500 to-fuchsia-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Секция Услуги с улучшенным Bento Grid -->
    <section id="services" class="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 relative">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            <span class="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">Наши</span>
            <span class="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent"> услуги</span>
          </h2>
          <p class="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg leading-relaxed px-2">Комплексные решения для цифровизации вашего бизнеса</p>
        </div>

        <!-- Bento Grid с улучшенным дизайном -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          <!-- Большая карточка -->
          <div class="md:col-span-2 rounded-2xl bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] p-6 sm:p-8 hover:border-violet-500/40 hover:bg-white/[0.04] transition-all duration-500 group overflow-hidden relative hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-500/10">
            <div class="absolute top-0 right-0 w-60 h-60 sm:w-80 sm:h-80 bg-gradient-to-br from-violet-600/30 to-fuchsia-600/30 rounded-full blur-[80px] sm:blur-[100px] group-hover:scale-110 transition-all duration-700"></div>
            <div class="relative z-10">
              <div class="flex items-start justify-between flex-wrap gap-4">
                <div class="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br from-violet-500 via-fuchsia-500 to-purple-600 flex items-center justify-center shadow-lg shadow-violet-500/30 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <Monitor class="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                </div>
                <div class="hidden md:flex gap-2">
                  <span class="px-3 sm:px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/30 text-xs text-violet-300">Nuxt</span>
                  <span class="px-3 sm:px-4 py-1.5 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/30 text-xs text-fuchsia-300">Vue</span>
                  <span class="px-3 sm:px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-xs text-purple-300">React</span>
                </div>
              </div>
              <h3 class="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-3 sm:mb-4 mt-4 sm:mt-0">Веб-сайты</h3>
              <p class="text-gray-400 mb-4 sm:mb-6 text-sm sm:text-base lg:text-lg leading-relaxed">
                От лендингов до корпоративных порталов. Современный дизайн, адаптивность,
                SEO-оптимизация и высокая конверсия
              </p>
              <p class="text-violet-300 text-sm sm:text-base">от <strong>30 000 ₽</strong> · срок от 5 дней</p>
            </div>
          </div>

          <!-- Маленькая карточка чат-боты -->
          <div class="rounded-2xl bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] p-6 sm:p-8 hover:border-fuchsia-500/40 hover:bg-white/[0.04] transition-all duration-500 group overflow-hidden relative hover:-translate-y-1 hover:shadow-xl hover:shadow-fuchsia-500/10">
            <div class="absolute top-0 right-0 w-40 h-40 sm:w-60 sm:h-60 bg-gradient-to-br from-fuchsia-600/30 to-violet-600/30 rounded-full blur-[60px] sm:blur-[80px] group-hover:scale-110 transition-all duration-700"></div>
            <div class="relative z-10">
              <div class="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br from-fuchsia-500 via-violet-500 to-purple-600 flex items-center justify-center shadow-lg shadow-fuchsia-500/30 mb-4 sm:mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <Bot class="h-6 w-6 sm:h-7 sm:w-7 text-white" />
              </div>
              <h3 class="text-xl sm:text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-2 sm:mb-3">AI чат-боты</h3>
              <p class="text-gray-400 text-sm sm:text-base leading-relaxed">
                Умные боты для Telegram, VK и MAX с интеграцией AI. Автоматизация продаж и поддержки
              </p>
              <p class="text-fuchsia-300 text-sm sm:text-base mt-2">от <strong>50 000 ₽</strong> · срок от 7 дней</p>
              <div class="mt-3 sm:mt-4 flex gap-2 flex-wrap">
                <span class="px-2.5 sm:px-3 py-1 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/30 text-[10px] sm:text-xs text-fuchsia-300">Telegram</span>
                <span class="px-2.5 sm:px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/30 text-[10px] sm:text-xs text-violet-300">VK</span>
                <span class="px-2.5 sm:px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-[10px] sm:text-xs text-purple-300">MAX</span>
              </div>
            </div>
          </div>

          <!-- Маленькая карточка веб-приложения -->
          <div class="rounded-2xl bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] p-6 sm:p-8 hover:border-violet-500/40 hover:bg-white/[0.04] transition-all duration-500 group overflow-hidden relative hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-500/10">
            <div class="absolute top-0 right-0 w-40 h-40 sm:w-60 sm:h-60 bg-gradient-to-br from-violet-600/30 to-indigo-600/30 rounded-full blur-[60px] sm:blur-[80px] group-hover:scale-110 transition-all duration-700"></div>
            <div class="relative z-10">
              <div class="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br from-violet-500 via-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-violet-500/30 mb-4 sm:mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <Code2 class="h-6 w-6 sm:h-7 sm:w-7 text-white" />
              </div>
              <h3 class="text-xl sm:text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-2 sm:mb-3">Веб-приложения</h3>
              <p class="text-gray-400 text-sm sm:text-base leading-relaxed">
                CRM, личные кабинеты, сервисы с AI-функционалом
              </p>
              <p class="text-violet-300 text-sm sm:text-base mt-2">от <strong>150 000 ₽</strong> · срок от 4 недель</p>
            </div>
          </div>

          <!-- Большая карточка автоматизация -->
          <div class="md:col-span-2 rounded-2xl bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] p-6 sm:p-8 hover:border-violet-500/40 hover:bg-white/[0.04] transition-all duration-500 group overflow-hidden relative hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-500/10">
            <div class="absolute top-0 right-0 w-60 h-60 sm:w-80 sm:h-80 bg-gradient-to-br from-violet-600/30 to-fuchsia-600/30 rounded-full blur-[80px] sm:blur-[100px] group-hover:scale-110 transition-all duration-700"></div>
            <div class="relative z-10 flex flex-col md:flex-row gap-6 sm:gap-8 items-start">
              <div class="flex-1">
                <div class="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br from-violet-500 via-fuchsia-500 to-purple-600 flex items-center justify-center shadow-lg shadow-violet-500/30 mb-4 sm:mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <Zap class="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                </div>
                <h3 class="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-3 sm:mb-4">Автоматизация</h3>
                <p class="text-gray-400 mb-4 sm:mb-6 text-sm sm:text-base lg:text-lg leading-relaxed">
                  Интеграция систем, автоматические воронки, триггерные рассылки.
                  Освободим время для важных задач
                </p>
                <p class="text-violet-300 text-sm sm:text-base">от <strong>40 000 ₽</strong> · индивидуально</p>
                <div class="flex gap-2 flex-wrap">
                  <span class="px-3 sm:px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/30 text-xs text-violet-300">API</span>
                  <span class="px-3 sm:px-4 py-1.5 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/30 text-xs text-fuchsia-300">CRM</span>
                  <span class="px-3 sm:px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-xs text-purple-300">AI</span>
                </div>
              </div>
              <!-- Code snippet с улучшенным стилем -->
              <div class="w-full md:w-72 lg:w-80 bg-[#0a0a0f] rounded-lg sm:rounded-xl p-3 sm:p-5 border border-white/[0.08] shadow-xl font-mono text-xs sm:text-sm overflow-x-auto">
                <div class="flex items-center gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                  <div class="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500/80"></div>
                  <div class="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500/80"></div>
                  <div class="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500/80"></div>
                  <span class="ml-1 sm:ml-2 text-[10px] sm:text-xs text-gray-600">automate.js</span>
                </div>
                <pre class="text-gray-400 overflow-x-auto"><code><span class="text-purple-400">const</span> <span class="text-blue-400">result</span> = <span class="text-purple-400">await</span> <span class="text-yellow-400">automate</span>({
  <span class="text-green-400">efficiency</span>: <span class="text-orange-400">'+90%'</span>,
  <span class="text-green-400">timeSaved</span>: <span class="text-orange-400">'-80%'</span>,
  <span class="text-green-400">roi</span>: <span class="text-orange-400">'300%'</span>
})</code></pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Секция Почему мы с улучшенными карточками -->
    <section id="why-us" class="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 relative">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            <span class="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">Почему выбирают</span>
            <span class="font-syncopate font-bold text-white tracking-wider text-xl sm:text-2xl md:text-3xl lg:text-4xl"> YAPPIE</span>
          </h2>
          <p class="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg leading-relaxed px-2">Решения, которые экономят время и деньги вашего бизнеса</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <div v-for="(benefit, index) in benefits" :key="index"
               class="group flex flex-col sm:flex-row gap-4 sm:gap-6 p-5 sm:p-6 lg:p-8 rounded-2xl bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] hover:border-white/30 hover:bg-white/[0.04] transition-all duration-500 hover:-translate-y-1">
            <div class="w-14 h-14 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl border border-white/30 bg-transparent flex items-center justify-center flex-shrink-0 group-hover:border-white/50 group-hover:scale-110 transition-all duration-500">
              <component :is="benefit.icon" class="h-7 w-7 sm:h-8 sm:w-8 text-white" />
            </div>
            <div>
              <h4 class="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">{{ benefit.title }}</h4>
              <p class="text-sm sm:text-base text-gray-400 leading-relaxed">{{ benefit.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Секция Автоматизация и заработок -->
    <section id="automation" class="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 relative">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-12 sm:mb-16">
          <h2 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            <span class="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">Наши решения</span>
          </h2>
          <p class="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg leading-relaxed px-2">
            Автоматизация, веб-сервисы и мобильные приложения для роста вашего бизнеса
          </p>
        </div>

        <!-- Линия с названиями -->
        <div class="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12 lg:mb-16 border-b border-white/10 pb-3 sm:pb-4">
          <button
            v-for="(item, index) in automationItems"
            :key="index"
            @click="activeSlide = index"
            class="text-base sm:text-lg transition-all duration-300 pb-3 sm:pb-4 relative"
            :class="activeSlide === index ? 'text-white' : 'text-gray-500 hover:text-gray-300'"
          >
            {{ item.shortTitle }}
            <span
              v-if="activeSlide === index"
              class="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-violet-500 to-fuchsia-500"
            ></span>
          </button>
        </div>

        <!-- Слайдер -->
        <div class="relative min-h-[450px] sm:min-h-[500px] overflow-hidden rounded-2xl sm:rounded-3xl bg-white/[0.02] backdrop-blur-xl border border-white/[0.08]">
          <div
            class="flex transition-transform duration-500 ease-out h-full"
            :style="{ transform: `translateX(-${activeSlide * 100}%)` }"
          >
            <div
              v-for="(item, index) in automationItems"
              :key="index"
              class="w-full flex-shrink-0 flex flex-col lg:flex-row h-full"
            >
              <!-- Левая часть - текст -->
              <div class="lg:w-1/2 p-6 sm:p-8 lg:p-12 flex flex-col justify-center">
                <div class="mb-4 sm:mb-6">
                  <span class="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-violet-500/10 border border-violet-500/30 text-xs sm:text-sm text-violet-300 mb-3 sm:mb-4">
                    <Zap class="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    {{ item.category || 'Решение' }}
                  </span>
                </div>
                <h3 class="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">{{ item.title }}</h3>
                <p class="text-gray-400 text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8">{{ item.description }}</p>

                <div class="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                  <div class="flex items-center gap-2 sm:gap-3">
                    <div class="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 flex items-center justify-center">
                      <TrendingUp class="w-4 h-4 sm:w-5 sm:h-5 text-violet-400" />
                    </div>
                    <div>
                      <div class="text-white font-semibold text-sm sm:text-base">Прибыль</div>
                      <div class="text-gray-500 text-xs sm:text-sm">{{ item.profit }}</div>
                    </div>
                  </div>
                  <div class="flex items-center gap-2 sm:gap-3">
                    <div class="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 flex items-center justify-center">
                      <Clock class="w-4 h-4 sm:w-5 sm:h-5 text-violet-400" />
                    </div>
                    <div>
                      <div class="text-white font-semibold text-sm sm:text-base">Экономия времени</div>
                      <div class="text-gray-500 text-xs sm:text-sm">{{ item.timeSaved }}</div>
                    </div>
                  </div>
                </div>

                <a href="https://t.me/artemselifanov" target="_blank" class="inline-flex items-center justify-center rounded-full font-medium px-5 sm:px-6 py-3 sm:py-3.5 text-xs sm:text-sm bg-white text-black hover:bg-gray-100 whitespace-nowrap transition-all">
                  <span class="whitespace-nowrap">Обсудить внедрение</span>
                  <ArrowRight class="ml-2 h-3.5 w-3.5 flex-shrink-0" />
                </a>
              </div>

              <!-- Правая часть - референс/картинка -->
              <div class="lg:w-1/2 p-6 sm:p-8 flex items-center justify-center">
                <div class="relative w-full max-w-sm sm:max-w-lg">
                  <div class="absolute inset-0 bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 rounded-2xl blur-2xl"></div>
                  <div class="relative bg-gradient-to-br from-white/[0.05] to-white/[0.02] rounded-2xl p-6 sm:p-8 border border-white/[0.08] backdrop-blur-xl">
                    <component
                      :is="item.icon"
                      class="w-24 h-24 sm:w-32 sm:h-32 mx-auto text-white/20 mb-4 sm:mb-6"
                    />
                    <div class="text-center">
                      <div class="text-xl sm:text-2xl font-bold text-white mb-1 sm:mb-2">{{ item.metric }}</div>
                      <div class="text-gray-500 text-xs sm:text-sm">{{ item.metricLabel }}</div>
                    </div>
                    <div class="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-white/10">
                      <div class="flex justify-between items-center text-xs sm:text-sm">
                        <span class="text-gray-500">ROI</span>
                        <span class="text-violet-400 font-semibold">{{ item.roi }}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Индикаторы слайдов -->
        <div class="flex justify-center gap-2 sm:gap-3 mt-6 sm:mt-8">
          <button
            v-for="(item, index) in automationItems"
            :key="index"
            @click="activeSlide = index"
            class="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300"
            :class="activeSlide === index ? 'bg-violet-500 w-6 sm:w-8' : 'bg-white/20 hover:bg-white/40'"
          ></button>
        </div>
      </div>
    </section>

    <!-- Секция Портфолио с улучшенными карточками -->
    <section id="portfolio" class="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 relative">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            <span class="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">Наши</span>
            <span class="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent"> проекты</span>
          </h2>
          <p class="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg leading-relaxed px-2">Реальные кейсы с измеримыми результатами</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <div v-for="(project, index) in portfolio" :key="index"
               class="group relative rounded-2xl overflow-hidden border border-white/[0.08] hover:border-violet-500/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-violet-500/20 bg-white/[0.02] backdrop-blur-xl">
            <div class="aspect-video flex items-center justify-center relative overflow-hidden"
                 :class="project.hasImage ? 'p-0' : 'bg-gradient-to-br from-violet-600/20 to-fuchsia-600/20'">
              <NuxtImg v-if="project.hasImage" :src="project.image" :alt="project.title" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" format="webp" quality="70" sizes="320px sm:640px md:768px lg:1024px" />
              <template v-else>
                <div class="absolute inset-0 bg-gradient-to-t from-[#030305] via-transparent to-transparent opacity-60"></div>
                <component :is="project.icon" class="h-16 w-16 sm:h-20 sm:w-20 text-white/30 group-hover:scale-110 group-hover:text-white/50 transition-all duration-500" />
              </template>
            </div>
            <div class="p-4 sm:p-6">
              <h3 class="text-lg sm:text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-2">{{ project.title }}</h3>
              <p class="text-gray-400 text-sm sm:text-base mb-3 sm:mb-4 leading-relaxed">{{ project.description }}</p>
              <div class="flex flex-wrap gap-2">
                <span v-for="tag in project.tags" :key="tag"
                      class="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-gradient-to-r from-violet-500/10 to-fuchsia-500/10 border border-violet-500/30 text-[10px] sm:text-xs text-violet-300">
                  {{ tag }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Секция FAQ с улучшенным дизайном -->
    <section id="faq" class="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 relative">
      <div class="max-w-4xl mx-auto">
        <div class="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            <span class="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">Частые</span>
            <span class="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent"> вопросы</span>
          </h2>
        </div>

        <Accordion type="single" collapsible class="space-y-3 sm:space-y-4">
          <AccordionItem v-for="(faq, index) in faqs" :key="index" :value="`item-${index}`"
                        class="rounded-xl sm:rounded-2xl bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] px-4 sm:px-6 hover:border-violet-500/30 data-[state=open]:border-violet-500/40 data-[state=open]:bg-white/[0.04] transition-all duration-300">
            <AccordionTrigger class="text-left text-white hover:text-violet-300 py-4 sm:py-6 text-sm sm:text-lg font-medium">
              {{ faq.question }}
            </AccordionTrigger>
            <AccordionContent class="text-gray-400 pb-4 sm:pb-6 text-sm sm:text-base leading-relaxed">
              {{ faq.answer }}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>

    <!-- Секция Контакты с улучшенным CTA -->
    <section id="contact" class="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 relative">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
          <span class="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">Готовы</span>
          <span class="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent"> начать проект?</span>
        </h2>
        <p class="text-gray-400 mb-8 sm:mb-12 max-w-xl mx-auto text-base sm:text-lg lg:text-xl leading-relaxed px-2">
          Расскажите о вашей задаче — мы предложим решение и рассчитаем стоимость бесплатно
        </p>

        <a href="https://t.me/artemselifanov" target="_blank" class="inline-flex items-center justify-center rounded-full font-medium px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base bg-white text-black hover:bg-gray-100 shadow-2xl shadow-white/15 hover:shadow-white/25 transition-all duration-300 hover:scale-105 whitespace-nowrap">
          <Send class="mr-2 sm:mr-3 h-4 sm:h-5 w-4 sm:w-5 flex-shrink-0" />
          <span class="whitespace-nowrap">Написать в Telegram</span>
          <ArrowRight class="ml-2 sm:ml-3 h-4 sm:h-5 w-4 sm:w-5 flex-shrink-0" />
        </a>

        <p class="text-gray-500 mt-6 sm:mt-8 text-xs sm:text-sm sm:px-2">Бесплатная консультация и расчёт стоимости в течение 24 часов</p>
      </div>
    </section>

    <!-- Footer с улучшенным стилем -->
    <footer class="py-8 sm:py-12 px-4 sm:px-6 border-t border-white/[0.08]">
      <div class="max-w-7xl mx-auto">
        <!-- Контакты -->
        <div class="flex flex-wrap justify-center gap-4 sm:gap-6 mb-6 text-sm">
          <a href="tel:+79535487323" class="text-gray-400 hover:text-white transition-colors">+7 (953) 548-73-23</a>
          <span class="text-gray-600">|</span>
          <a href="mailto:a9535487323@yandex.ru" class="text-gray-400 hover:text-white transition-colors">a9535487323@yandex.ru</a>
          <span class="text-gray-600">|</span>
          <a href="https://t.me/artemselifanov" target="_blank" class="text-gray-400 hover:text-white transition-colors">Telegram</a>
        </div>
        <div class="flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6">
          <div class="flex items-center gap-2">
            <span class="font-syncopate font-bold text-white tracking-wider text-lg sm:text-xl">YAPPIE</span>
          </div>
          <div class="flex flex-wrap justify-center gap-4 sm:gap-8 text-xs sm:text-sm text-gray-500">
            <a href="#services" class="hover:text-white transition-colors hover:text-violet-300">Услуги</a>
            <a href="#portfolio" class="hover:text-white transition-colors hover:text-violet-300">Кейсы</a>
            <a href="#faq" class="hover:text-white transition-colors hover:text-violet-300">FAQ</a>
            <a href="#contact" class="hover:text-white transition-colors hover:text-violet-300">Контакты</a>
          </div>
          <div class="text-gray-600 text-xs sm:text-sm">© 2026 Yappie</div>
        </div>
      </div>
    </footer>

    <!-- Кнопка "Наверх" -->
    <Transition
      enter-active-class="transition ease-out duration-300"
      enter-from-class="opacity-0 scale-75"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="transition ease-in duration-200"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-75"
    >
      <button
        v-show="showScrollTop"
        @click="scrollToTop"
        class="hidden md:block fixed bottom-6 right-6 z-50 w-12 h-12 bg-gradient-to-br from-violet-500 to-fuchsia-500 text-white rounded-full shadow-lg shadow-violet-500/30 hover:shadow-violet-500/50 hover:scale-110 transition-all duration-300 flex items-center justify-center"
        aria-label="Наверх"
      >
        <ChevronUp class="w-6 h-6" />
      </button>
    </Transition>

    <!-- Нижняя навигация для мобильных (тёмная тема) -->
    <MobileBottomNav
      theme="dark"
      :items="[
        { href: '/', label: 'Главная', icon: 'lucide:home' },
        { href: '/networking', label: 'Нетворкинг', image: '/reference/networking.jpg' },
        { href: '/business', label: 'Бизнес', image: '/reference/business.jpg' },
        { href: '/yappie', label: 'Веб', text: 'веб' },
        { href: '/blog', label: 'Блог', text: 'блог' },
        { href: '#top', label: 'Наверх', icon: 'lucide:arrow-up', action: 'scrollToTop' }
      ]"
    />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import Button from '~/components/ui/button/Button.vue'
import MobileBottomNav from '~/components/layout/MobileBottomNav.vue'

// SEO Meta Tags with useSeoMeta
useSeoMeta({
  title: 'Yappie — разработка сайтов, чат-ботов и AI-автоматизация для бизнеса',
  description: 'Разрабатываем сайты, Telegram-боты, CRM и веб-приложения с AI. Автоматизация бизнес-процессов под ключ. 50+ проектов, поддержка 24/7. Yappie — Артём Селифанов.',
  keywords: 'разработка сайтов, чат-бот Telegram, AI автоматизация, веб-приложение, CRM разработка, разработка бота для бизнеса, Yappie',
  author: 'Артём Селифанов',
  robots: 'index, follow',
  ogTitle: 'Yappie — разработка сайтов, чат-ботов и AI-автоматизация для бизнеса',
  ogDescription: 'Разрабатываем сайты, Telegram-боты, CRM и веб-приложения с AI. Автоматизация бизнес-процессов под ключ.',
  ogImage: 'https://artemselifanov.ru/og-image.jpg',
  ogUrl: 'https://artemselifanov.ru/yappie',
  ogType: 'website',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Yappie — разработка сайтов, чат-ботов и AI-автоматизация для бизнеса',
  twitterDescription: 'Разрабатываем сайты, Telegram-боты, CRM и веб-приложения с AI. Автоматизация бизнес-процессов под ключ.',
  twitterImage: 'https://artemselifanov.ru/og-image.jpg'
})

useHead({
  link: [
    { rel: 'canonical', href: 'https://artemselifanov.ru/yappie' }
  ]
})

// Schema.org Organization markup
useSchemaOrg([
  defineOrganization({
    name: 'Yappie',
    url: 'https://artemselifanov.ru/yappie',
    description: 'Разработка сайтов, чат-ботов и веб-приложений на базе AI для бизнеса',
    sameAs: [
      'https://t.me/artemselifanov'
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      availableLanguage: ['Russian'],
      url: 'https://t.me/artemselifanov',
      telephone: '+79535487323',
      email: 'a9535487323@yandex.ru'
    },
    founder: {
      '@type': 'Person',
      name: 'Артём Селифанов',
      url: 'https://artemselifanov.ru'
    }
  }),
  defineWebSite({
    name: 'Yappie - Разработка сайтов, чат-ботов и приложений',
    url: 'https://artemselifanov.ru/yappie',
    description: 'Разработка сайтов, чат-ботов и веб-приложений на базе AI для бизнеса',
    inLanguage: 'ru-RU'
  }),
  defineWebPage({
    '@type': 'WebPage',
    name: 'Разработка сайтов, чат-ботов и приложений — Yappie',
    description: 'Yappie — разработка сайтов, чат-ботов и веб-приложений на базе AI для бизнеса',
    url: 'https://artemselifanov.ru/yappie'
  })
])
import Accordion from '~/components/ui/accordion/Accordion.vue'
import AccordionItem from '~/components/ui/accordion/AccordionItem.vue'
import AccordionTrigger from '~/components/ui/accordion/AccordionTrigger.vue'
import AccordionContent from '~/components/ui/accordion/AccordionContent.vue'
import {
  ArrowRight, Send, Monitor, Bot, Code2, Zap,
  TrendingDown, Users, AlertCircle, Clock, Database, Smartphone,
  CheckCircle2, Shield, Headphones, Rocket, Sparkles,
  MessageSquare, Globe, TrendingUp, Mail, Calendar, ShoppingCart, FileText,
  LayoutDashboard, Menu, X, ChevronUp
} from 'lucide-vue-next'

const activeSlide = ref(0)
const isMobileMenuOpen = ref(false)
const showScrollTop = ref(false)

// Refs для отслеживания видимости элементов
const problemsSection = ref(null)
const problemRefs = ref([])

// Пункты мобильного меню
const mobileMenuItems = [
  { href: '/', label: 'Главная' },
  { href: '#problems', label: 'Проблемы' },
  { href: '#services', label: 'Услуги' },
  { href: '#why-us', label: 'Почему мы' },
  { href: '#portfolio', label: 'Кейсы' },
  { href: '/blog', label: 'Блог' },
  { href: '#faq', label: 'FAQ' },
  { href: '/study', label: 'Study' }
]

// Обработчик скролла для показа кнопки "Наверх"
const handleScroll = () => {
  showScrollTop.value = window.scrollY > window.innerHeight
}

// Прокрутка наверх
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

// Добавляем слушатель скролла
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const automationItems = ref([
  {
    shortTitle: 'Поддержка',
    category: 'Автоматизация',
    title: 'Автоматизация клиентской поддержки',
    description: 'AI-чатботы обрабатывают до 80% типовых вопросов 24/7. Мгновенные ответы, персонализация, передача сложных случаев операторам.',
    profit: '+40% к конверсии',
    timeSaved: '30 часов в неделю',
    metric: '80%',
    metricLabel: 'Запросов автоматизировано',
    roi: '300% за 3 месяца',
    icon: Headphones
  },
  {
    shortTitle: 'Продажи',
    category: 'Автоматизация',
    title: 'Автоматизация продаж и воронки',
    description: 'Автоматические email-цепочки, напоминания, сегментация клиентов. Ни один лид не потерян, каждый получает персональное внимание.',
    profit: '+65% к продажам',
    timeSaved: '25 часов в неделю',
    metric: '3x',
    metricLabel: 'Рост конверсии',
    roi: '450% за 6 месяцев',
    icon: ShoppingCart
  },
  {
    shortTitle: 'Рассылки',
    category: 'Автоматизация',
    title: 'Умные email и мессенджеры',
    description: 'Триггерные рассылки на основе поведения клиентов. Персональные предложения в нужный момент увеличивают открываемость в 2-3 раза.',
    profit: '+50% открываемости',
    timeSaved: '15 часов в неделю',
    metric: '45%',
    metricLabel: 'Средний Open Rate',
    roi: '280% за 4 месяца',
    icon: Mail
  },
  {
    shortTitle: 'Документы',
    category: 'Автоматизация',
    title: 'Автоматизация документооборота',
    description: 'Генерация договоров, счетов, отчетов. Интеграция с электронной подписью и бухгалтерией. Никакой рутинной работы с бумагами.',
    profit: '-90% ошибок',
    timeSaved: '20 часов в неделю',
    metric: '5x',
    metricLabel: 'Ускорение процессов',
    roi: '200% за 3 месяца',
    icon: FileText
  },
  {
    shortTitle: 'Запись',
    category: 'Автоматизация',
    title: 'Онлайн-запись и бронирование',
    description: 'Клиенты записываются сами через сайт или чат-бота. Автоматические напоминания снижают количество неявок на 60%.',
    profit: '-60% неявок',
    timeSaved: '10 часов в неделю',
    metric: '70%',
    metricLabel: 'Самозапись клиентов',
    roi: '350% за 4 месяца',
    icon: Calendar
  },
  {
    shortTitle: 'CRM',
    category: 'Веб-сервис',
    title: 'Веб-сервис: CRM-система',
    description: 'Персональная CRM под ваши процессы. Учет клиентов, сделок, задач. Интеграция с телефонией, мессенджерами и почтой в одном окне.',
    profit: '+55% эффективности',
    timeSaved: '35 часов в неделю',
    metric: '100%',
    metricLabel: 'Контроль процессов',
    roi: '400% за 6 месяцев',
    icon: Monitor
  },
  {
    shortTitle: 'Личный кабинет',
    category: 'Веб-сервис',
    title: 'Веб-сервис: Личный кабинет клиента',
    description: 'Клиенты видят историю заказов, баланс, документы. Уменьшает нагрузку на поддержку и повышает лояльность.',
    profit: '-50% запросов в поддержку',
    timeSaved: '20 часов в неделю',
    metric: '85%',
    metricLabel: 'Клиентов используют',
    roi: '320% за 5 месяцев',
    icon: Users
  },
  {
    shortTitle: 'Маркетплейс',
    category: 'Веб-сервис',
    title: 'Веб-сервис: Платформа услуг',
    description: 'Свой маркетплейс с поиском исполнителей, заказами, оплатой и рейтингами. Масштабируемая архитектура под рост бизнеса.',
    profit: '+200% к обороту',
    timeSaved: '40 часов в неделю',
    metric: '10x',
    metricLabel: 'Рост аудитории',
    roi: '500% за год',
    icon: Globe
  },
  {
    shortTitle: 'Мобильное',
    category: 'Мобильное приложение',
    title: 'PWA: Мобильное приложение',
    description: 'Прогрессивное веб-приложение работает как нативное. Push-уведомления, офлайн-режим, установка на главный экран без App Store.',
    profit: '+120% мобильных заказов',
    timeSaved: '0 часов',
    metric: '3x',
    metricLabel: 'Рост вовлеченности',
    roi: '280% за 4 месяца',
    icon: Smartphone
  },
  {
    shortTitle: 'Доставка',
    category: 'Мобильное приложение',
    title: 'Мобильное: Приложение курьера',
    description: 'Приложение для курьеров с маршрутами, уведомлениями, сканированием. GPS-трекинг и интеграция с основным сервисом.',
    profit: '+70% скорости доставки',
    timeSaved: '15 часов в неделю',
    metric: '95%',
    metricLabel: 'Доставок в срок',
    roi: '380% за 6 месяцев',
    icon: Zap
  }
])

const problems = ref([
  { 
    icon: TrendingDown, 
    title: 'Низкая конверсия', 
    description: 'Сайт есть, но заявок мало? Посетители уходят, не совершив целевого действия',
    solution: 'Увеличим конверсию в 2-3 раза'
  },
  { 
    icon: Users, 
    title: 'Перегружена поддержка', 
    description: 'Менеджеры тонут в однотипных вопросах и не успевают закрывать сделки',
    solution: 'AI-бот возьмёт 80% обращений'
  },
  { 
    icon: AlertCircle, 
    title: 'Ручные процессы', 
    description: 'Тратите часы на рутину вместо развития бизнеса и работы с клиентами',
    solution: 'Автоматизируем до 90% задач'
  },
  { 
    icon: Clock, 
    title: 'Медленная обработка', 
    description: 'Клиенты ждут ответа часами и уходят к более оперативным конкурентам',
    solution: 'Мгновенная обработка 24/7'
  },
  { 
    icon: Database, 
    title: 'Разрозненные данные', 
    description: 'Информация разбросана по разным системам, нет единой картины бизнеса',
    solution: 'Единая CRM с AI-аналитикой'
  },
  { 
    icon: Smartphone, 
    title: 'Нет мобильной версии', 
    description: 'Теряете мобильных клиентов из-за неудобного отображения на телефонах',
    solution: 'Адаптация под все устройства'
  },
])

const benefits = ref([
  { icon: CheckCircle2, title: 'Полный цикл', description: 'От анализа задачи до запуска и поддержки. Не бросаем после релиза — сопровождаем и развиваем проект' },
  { icon: Shield, title: 'Прозрачность', description: 'Фиксированная смета, чёткие дедлайны, еженедельные отчёты. Никаких скрытых платежей и сюрпризов' },
  { icon: Headphones, title: 'Поддержка 24/7', description: 'Техническая поддержка, быстрые правки, развитие функционала. Всегда на связи в мессенджерах' },
  { icon: Rocket, title: 'AI-экспертиза', description: 'Глубокая интеграция искусственного интеллекта. Используем GPT, Claude и другие современные модели' },
])

const portfolio = ref([
  { image: '/reference/lost.png', title: 'Сервис по поиску пропавших животных', description: 'Платформа для быстрого поиска потерянных питомцев', tags: ['Bubble', 'JS', 'Figma', 'API Яндекс Карт'], hasImage: true, alt: 'Сервис по поиску пропавших животных — веб-платформа на Bubble с интеграцией Яндекс Карт' },
  { image: '/reference/chatbot.png', title: 'Бот для управляющих компаний', description: 'Telegram-бот для приёма и обработки обращений граждан, оповещения о стадиях ремонтных/гарантийных работ, взаимодействия с базой данных сервисной компании', tags: ['n8n', 'JS', 'Telegram API', 'Postgres', 'Веб-приложения', 'Telegram miniapp'], hasImage: true, alt: 'Telegram-бот для управляющих компаний — приём обращений граждан, интеграция с PostgreSQL' },
  { image: '/reference/gromish.png', title: 'Интернет-магазин для Instagram-блогера', description: 'Онлайн-магазин изделий из янтаря с интеграцией WhatsApp для связи с клиентами', tags: ['Bubble', 'AWS', 'WhatsApp', 'Веб-приложения'], hasImage: true, alt: 'Интернет-магазин янтарных изделий для Instagram-блогера — Bubble, AWS, WhatsApp интеграция' },
  { image: '/reference/carusel.png', title: 'Генератор каруселей для Instagram', description: 'Инструмент для быстрой генерации каруселей и обложек для соцсетей с использованием AI', tags: ['HTML', 'JS', 'CSS', 'Веб-приложения'], hasImage: true, alt: 'Генератор каруселей для Instagram с AI — HTML, JS, CSS инструмент для соцсетей' },
  { icon: Bot, title: 'AI-транскрибация аудио', description: 'Python-скрипт для транскрибации аудио любой продолжительности в текст с использованием Whisper AI. Поддержка русского языка, автоматическая разбивка на абзацы.', tags: ['Python', 'AI', 'Whisper', 'Transcription'], hasImage: false },
  { icon: Globe, title: 'Веб-парсер для Яндекс.Поиска', description: 'Инструмент для SEO-аналитиков: парсинг выдачи Яндекса, подбор ключей, определение позиций, анализ текста конкурентов, проверка на контактные данные, выгрузка в CSV.', tags: ['Python', 'Parsing', 'SEO'], hasImage: false },
])

const faqs = ref([
  { question: 'Сколько стоит разработка сайта или чат-бота под ключ?', answer: 'Стоимость разработки зависит от сложности задачи и функционала. Ориентировочные цены: лендинг — от 30 000 ₽ (срок 5–10 дней); корпоративный сайт — от 80 000 ₽ (срок 2–4 недели); Telegram-бот с AI — от 50 000 ₽ (срок 1–3 недели); CRM-система или веб-приложение — от 150 000 ₽ (срок от 4 недель). Точную смету рассчитываем бесплатно — напишите в Telegram с описанием задачи.' },
  { question: 'Какие сроки разработки сайта, чат-бота или веб-приложения?', answer: 'Сроки зависят от объёма проекта и фиксируются в договоре. Ориентиры: лендинг — 5–10 рабочих дней; корпоративный сайт — 2–4 недели; Telegram-бот для бизнеса — 1–3 недели; CRM или личный кабинет — 4–8 недель; маркетплейс или сложное веб-приложение — 8–16 недель. Срок начинается после подписания договора и получения предоплаты. Все этапы и дедлайны прописаны заранее.' },
  { question: 'Работаете ли вы по договору? Какие документы предоставляете?', answer: 'Да, работаем строго по договору оказания услуг. В договоре фиксируются: подробное техническое задание, этапы работ, сроки каждого этапа, стоимость и порядок оплаты. Работаем как с физическими лицами, так и с юридическими (ИП, ООО). Предоставляем полный пакет закрывающих документов: акт выполненных работ, счёт, при необходимости — УПД.' },
  { question: 'Что происходит, если результат не соответствует ожиданиям?', answer: 'Мы выстраиваем процесс так, чтобы неожиданностей не было: каждый этап работы согласовывается с клиентом до перехода к следующему. Вы видите промежуточный результат — дизайн, прототип, тестовая версия — и утверждаете его. Правки в рамках согласованного ТЗ включены в стоимость. Если в финальном результате есть расхождения с утверждённым ТЗ — устраняем бесплатно в приоритетном порядке.' },
  { question: 'Предоставляете ли поддержку и доработку после запуска проекта?', answer: 'Да. После сдачи проекта включён 1 месяц бесплатной технической поддержки: исправление багов, консультации по использованию, мелкие правки. Дальнейшее сопровождение — по отдельному договору на техническую поддержку. Мы не бросаем проекты после релиза: доступны в мессенджерах для оперативного решения вопросов и готовы развивать функционал по мере роста вашего бизнеса.' },
  { question: 'Можно ли оплатить разработку в рассрочку или поэтапно?', answer: 'Да. Стандартная схема оплаты: 50% предоплата при старте, 50% после финальной сдачи проекта. Для крупных проектов от 100 000 ₽ предусмотрена поэтапная оплата по вехам: оплата каждого этапа после его согласования и приёмки. Это снижает риски для обеих сторон и сохраняет прозрачность на всём протяжении разработки.' },
  { question: 'С какими технологиями и платформами вы работаете?', answer: 'Стек выбирается под конкретную задачу, а не навязывается. Фронтенд: Nuxt, Vue, React. Боты и автоматизация: Telegram API, n8n, Make (Integromat). AI-интеграции: GPT-4, Claude, Whisper. Базы данных: PostgreSQL, Supabase. No-code: Bubble, Webflow — для задач, где это быстрее и дешевле кода. Хостинг: AWS, VPS. Если ваш проект использует другие технологии — обсудим на этапе консультации.' },
  { question: 'Беретесь ли вы за доработку и поддержку чужих проектов?', answer: 'Да, если проект построен на технологиях, с которыми мы работаем. Процесс: сначала проводим бесплатный аудит кода и задачи (обычно 1–2 дня), затем даём честную оценку — стоит ли дорабатывать существующее решение или эффективнее переписать критические части. Если берёмся — заключаем стандартный договор с фиксированным ТЗ.' },
  { question: 'Как работает AI-чат-бот для бизнеса и что он умеет?', answer: 'AI-чат-бот для бизнеса — это автоматизированный ассистент в Telegram, VK или MAX, интегрированный с языковыми моделями (GPT-4, Claude). Он умеет: отвечать на вопросы клиентов на основе вашей базы знаний, квалифицировать входящие заявки, записывать клиентов на услуги, передавать сложные обращения операторам, работать 24/7 без выходных. Типичный результат внедрения: 70–80% обращений обрабатывается автоматически без участия менеджера.' },
  { question: 'Разрабатываете ли вы мобильные приложения?', answer: 'Разрабатываем PWA (прогрессивные веб-приложения) — они работают как нативные мобильные приложения: устанавливаются на главный экран смартфона, получают push-уведомления, работают в офлайн-режиме. Для большинства бизнес-задач PWA — оптимальный выбор: быстрее и дешевле нативной разработки, не требует размещения в App Store и Google Play. Нативные приложения для iOS/Android — по запросу, рассматриваем индивидуально.' },
  { question: 'Как начать работу? Опишите процесс от первого контакта до запуска?', answer: 'Шаг 1: Напишите в Telegram с описанием задачи — отвечаем в течение 24 часов. Шаг 2: Бесплатная консультация (15–30 минут) — обсуждаем задачу, предлагаем решение, рассчитываем смету. Шаг 3: Договор и техническое задание — фиксируем объём, сроки, стоимость. Шаг 4: Разработка с еженедельными отчётами и поэтапным согласованием. Шаг 5: Запуск, обучение вашей команды, 1 месяц поддержки.' },
  { question: 'Какой ROI от внедрения автоматизации и AI-решений?', answer: 'По нашим проектам: автоматизация клиентской поддержки даёт ROI 300% за 3 месяца за счёт снижения нагрузки на операторов; автоматизация воронки продаж — ROI 450% за 6 месяцев за счёт роста конверсии лидов; внедрение онлайн-записи — ROI 350% за 4 месяца за счёт снижения неявок и ручной работы с расписанием. Конкретные цифры зависят от вашего бизнеса — на консультации рассчитаем экономику под вашу задачу.' },
])
</script>

<style>
/* 3D perspective for dashboard stack */
.perspective-1000 {
  perspective: 1000px;
}

@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(14px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes pulse-slow {
  0% {
    opacity: 0.42;
  }
  50% {
    opacity: 0.6;
  }
  100% {
    opacity: 0.42;
  }
}

.animate-fade-in {
  animation: fade-in 0.9s cubic-bezier(0.22, 1, 0.36, 1) both;
  will-change: opacity, transform;
}

.animate-fade-in-up {
  animation: fade-in-up 1s cubic-bezier(0.22, 1, 0.36, 1) both;
  will-change: opacity, transform;
}

.animate-pulse-slow {
  animation: pulse-slow 14s ease-in-out infinite;
}

.animation-delay-200 {
  animation-delay: 0.12s;
}

.animation-delay-400 {
  animation-delay: 0.24s;
}

.animation-delay-600 {
  animation-delay: 0.36s;
}

.animation-delay-1000 {
  animation-delay: 1s;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

@media (prefers-reduced-motion: reduce) {
  .animate-fade-in,
  .animate-fade-in-up,
  .animate-pulse-slow {
    animation: none !important;
  }
}

html {
  scroll-behavior: smooth;
}

/* Custom scrollbar - macOS style */
::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.3);
  border-radius: 10px;
  transition: background 0.2s ease;
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.5);
}

/* Selection color */
::selection {
  background: rgba(139, 92, 246, 0.3);
  color: white;
}
</style>
