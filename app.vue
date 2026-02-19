<template>
  <div class="min-h-screen bg-[#030305] text-white overflow-x-hidden">

    <!-- Навигация с улучшенным glassmorphism -->
    <nav class="fixed top-0 left-0 right-0 z-50 bg-[#030305]/70 backdrop-blur-2xl border-b border-white/[0.08]">
      <div class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="/website1/" @click.prevent="window.scrollTo({ top: 0, behavior: 'smooth' })" class="text-xl font-semibold text-white flex items-center gap-2 group">
          <span class="font-syncopate font-bold text-white tracking-wider text-2xl">YAPPIE</span>
        </a>

        <!-- Десктопное меню -->
        <div class="hidden md:flex items-center gap-8">
          <a href="#problems" class="text-sm text-gray-400 hover:text-white transition-all duration-300 hover:translate-y-[-1px]">Проблемы</a>
          <a href="#services" class="text-sm text-gray-400 hover:text-white transition-all duration-300 hover:translate-y-[-1px]">Услуги</a>
          <a href="#why-us" class="text-sm text-gray-400 hover:text-white transition-all duration-300 hover:translate-y-[-1px]">Почему мы</a>
          <a href="#portfolio" class="text-sm text-gray-400 hover:text-white transition-all duration-300 hover:translate-y-[-1px]">Кейсы</a>
          <a href="#faq" class="text-sm text-gray-400 hover:text-white transition-all duration-300 hover:translate-y-[-1px]">FAQ</a>
          <Button as-child class="px-4 py-2 text-xs bg-white text-black hover:bg-gray-100 shadow-lg shadow-white/10 hover:shadow-white/20 transition-all">
            <a href="https://t.me/artemselifanov" target="_blank">Связаться</a>
          </Button>
        </div>

        <!-- Кнопка бургер-меню для мобильных -->
        <button
          @click="isMobileMenuOpen = !isMobileMenuOpen"
          class="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
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
        <Button
          as-child
          class="mt-12 px-10 py-5 text-xl font-semibold bg-white text-black hover:bg-gray-100 w-full max-w-xs"
          @click="isMobileMenuOpen = false"
        >
          <a href="https://t.me/artemselifanov" target="_blank">Связаться</a>
        </Button>
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
    <section class="min-h-screen flex items-center relative pt-24 px-6 overflow-hidden">
      <!-- Фоновые градиентные пятна только в хедере -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div class="absolute top-0 left-0 w-[600px] h-[600px] bg-violet-600/20 rounded-full blur-[150px] animate-pulse-slow"></div>
        <div class="absolute bottom-0 right-0 w-[500px] h-[500px] bg-fuchsia-600/20 rounded-full blur-[130px] animate-pulse-slow animation-delay-1000"></div>
        <div class="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-purple-600/15 rounded-full blur-[180px]"></div>
      </div>
      
      <div class="max-w-7xl mx-auto w-full relative z-10">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <!-- Левая часть - текст и кнопки -->
          <div class="text-left">
            <!-- Badge с glow -->
            <div class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.05] border border-white/15 text-sm text-gray-200 mb-8 animate-fade-in shadow-lg shadow-violet-500/10 backdrop-blur-sm">
              <div class="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-[0_0_10px_rgba(74,222,128,0.5)]"></div>
              Доступны для новых проектов
            </div>

            <!-- Заголовок с улучшенным градиентом -->
            <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-[1.2] animate-fade-in-up">
              <span class="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">Разработка сайтов,</span>
              <br />
              <span class="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">веб приложений</span>
              <br />
              <span class="bg-gradient-to-r from-fuchsia-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">и чат-ботов.</span>
            </h1>

            <p class="text-lg text-gray-400 max-w-xl mb-10 leading-relaxed animate-fade-in-up animation-delay-200">
              Превращаем сложные бизнес-задачи в элегантные 
              <span class="text-violet-300 font-medium">автоматизированные решения</span> с помощью AI
            </p>

            <!-- Кнопки -->
            <div class="flex flex-col sm:flex-row gap-3 animate-fade-in-up animation-delay-400">
              <Button as-child class="px-5 sm:px-6 py-3 sm:py-3.5 text-xs sm:text-sm bg-white text-black hover:bg-gray-100 shadow-xl shadow-white/10 hover:shadow-white/20 transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 whitespace-nowrap">
                <a href="https://t.me/artemselifanov" target="_blank" class="flex items-center justify-center">
                  <span class="whitespace-nowrap">Обсудить проект</span>
                  <ArrowRight class="ml-2 h-3.5 w-3.5 flex-shrink-0" />
                </a>
              </Button>
              <Button as-child variant="outline" class="px-5 sm:px-6 py-3 sm:py-3.5 text-xs sm:text-sm border-white/20 hover:bg-white/10 hover:border-white/40 backdrop-blur-sm transition-all duration-300 hover:scale-105 whitespace-nowrap">
                <a href="#portfolio" class="whitespace-nowrap">Смотреть работы</a>
              </Button>
            </div>

            <!-- Stats -->
            <div class="flex gap-8 mt-12 animate-fade-in-up animation-delay-600">
              <div>
                <div class="text-3xl font-bold text-white">50+</div>
                <div class="text-sm text-gray-500">Проектов</div>
              </div>
              <div>
                <div class="text-3xl font-bold text-white">98%</div>
                <div class="text-sm text-gray-500">Довольных</div>
              </div>
              <div>
                <div class="text-3xl font-bold text-white">24/7</div>
                <div class="text-sm text-gray-500">Поддержка</div>
              </div>
            </div>
          </div>

          <!-- Правая часть - Dashboard CRM Stack -->
          <div class="relative h-auto lg:h-[500px] animate-fade-in-up animation-delay-300 flex items-center justify-center overflow-x-auto">
            <div class="flex gap-3 w-full justify-center p-4">
              
              <!-- Левая колонка: Dashboard + Клиенты -->
              <div class="flex flex-col gap-3 h-auto lg:h-[420px] flex-shrink-0">
                
                <!-- Dashboard (верхний) -->
                <div class="w-[320px] lg:w-[420px] flex-1 rounded-xl border border-white/15 p-3 lg:p-4 backdrop-blur-xl bg-gradient-to-br from-white/[0.06] to-white/[0.03] shadow-2xl">
                  <!-- Header -->
                  <div class="mb-3">
                    <div class="flex gap-1.5 mb-2">
                      <div class="w-2 h-2 rounded-full bg-red-500/80"></div>
                      <div class="w-2 h-2 rounded-full bg-yellow-500/80"></div>
                      <div class="w-2 h-2 rounded-full bg-green-500/80"></div>
                    </div>
                    <h3 class="text-xs font-semibold text-white">CRM Dashboard</h3>
                    <p class="text-[9px] text-gray-500">Real-time</p>
                  </div>

                  <!-- Stats Row -->
                  <div class="grid grid-cols-3 gap-2 mb-3">
                    <div class="p-2 rounded-lg bg-white/[0.03] border border-white/5">
                      <div class="text-sm lg:text-base font-bold text-white">1.3K</div>
                      <div class="text-[8px] lg:text-[9px] text-gray-500">Клиентов</div>
                      <div class="flex items-center gap-1 mt-1">
                        <TrendingUp class="w-2 h-2 text-green-500" />
                        <span class="text-[7px] lg:text-[8px] text-green-400">+12%</span>
                      </div>
                    </div>
                    <div class="p-2 rounded-lg bg-white/[0.03] border border-white/5">
                      <div class="text-sm lg:text-base font-bold text-white">856</div>
                      <div class="text-[8px] lg:text-[9px] text-gray-500">Сделок</div>
                      <div class="flex items-center gap-1 mt-1">
                        <TrendingUp class="w-2 h-2 text-green-500" />
                        <span class="text-[7px] lg:text-[8px] text-green-400">+8%</span>
                      </div>
                    </div>
                    <div class="p-2 rounded-lg bg-gradient-to-br from-violet-500/15 to-fuchsia-500/15 border border-violet-500/25">
                      <div class="text-sm lg:text-base font-bold text-white">2.4M</div>
                      <div class="text-[8px] lg:text-[9px] text-gray-400">Выручка</div>
                      <div class="flex items-center gap-1 mt-1">
                        <TrendingUp class="w-2 h-2 text-violet-400" />
                        <span class="text-[7px] lg:text-[8px] text-violet-400">+24%</span>
                      </div>
                    </div>
                  </div>

                  <!-- Chart -->
                  <div class="h-10 lg:h-12 flex items-end gap-1">
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
                <div class="w-[320px] lg:w-[420px] h-[120px] lg:h-[140px] rounded-lg border border-white/10 p-2 lg:p-3 backdrop-blur-xl bg-[#0a0a0f]/95 shadow-2xl">
                  <div class="flex items-center gap-2 mb-2">
                    <div class="w-4 h-4 lg:w-5 lg:h-5 rounded bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center">
                      <Users class="w-2.5 h-2.5 lg:w-3 lg:h-3 text-white" />
                    </div>
                    <span class="text-xs text-gray-300 font-medium">Клиенты</span>
                    <span class="text-[8px] lg:text-[9px] text-green-400 bg-green-500/10 px-2 py-0.5 rounded-full border border-green-500/20 ml-auto">Live</span>
                  </div>
                  <div class="grid grid-cols-3 gap-2">
                    <div class="flex items-center gap-1.5 lg:gap-2 p-1.5 lg:p-2 rounded bg-white/[0.02] border border-white/5">
                      <div class="w-4 h-4 lg:w-5 lg:h-5 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 class="w-2 h-2 lg:w-2.5 lg:h-2.5 text-white" />
                      </div>
                      <div class="min-w-0">
                        <div class="h-1 lg:h-1.5 w-10 lg:w-12 bg-white/15 rounded-full mb-1"></div>
                        <div class="h-1 w-6 lg:w-8 bg-white/8 rounded-full"></div>
                      </div>
                    </div>
                    <div class="flex items-center gap-1.5 lg:gap-2 p-1.5 lg:p-2 rounded bg-white/[0.02] border border-white/5">
                      <div class="w-4 h-4 lg:w-5 lg:h-5 rounded-full bg-gradient-to-br from-fuchsia-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                        <Clock class="w-2 h-2 lg:w-2.5 lg:h-2.5 text-white" />
                      </div>
                      <div class="min-w-0">
                        <div class="h-1 lg:h-1.5 w-8 lg:w-10 bg-white/15 rounded-full mb-1"></div>
                        <div class="h-1 w-5 lg:w-6 bg-white/8 rounded-full"></div>
                      </div>
                    </div>
                    <div class="flex items-center gap-1.5 lg:gap-2 p-1.5 lg:p-2 rounded bg-white/[0.02] border border-white/5">
                      <div class="w-4 h-4 lg:w-5 lg:h-5 rounded-full bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center flex-shrink-0">
                        <Sparkles class="w-2 h-2 lg:w-2.5 lg:h-2.5 text-white" />
                      </div>
                      <div class="min-w-0">
                        <div class="h-1 lg:h-1.5 w-12 lg:w-14 bg-white/15 rounded-full mb-1"></div>
                        <div class="h-1 w-6 lg:w-8 bg-white/8 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Правая колонка: Код (на всю высоту, скрыта на мобильных) -->
              <div class="hidden lg:block w-[280px] h-[420px] rounded-xl border border-white/10 p-3 backdrop-blur-xl bg-[#0d0d12]/95 shadow-2xl flex-shrink-0">
                <div class="flex items-center gap-2 mb-2 pb-2 border-b border-white/5">
                  <div class="w-5 h-5 rounded bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center">
                    <Code2 class="w-3 h-3 text-white" />
                  </div>
                  <span class="text-[10px] text-gray-500 font-mono">ai-processor.js</span>
                  <span class="text-[8px] text-violet-400 bg-violet-500/10 px-1.5 py-0.5 rounded-full border border-violet-500/20 ml-auto">AI Core</span>
                </div>
                <pre class="text-[8px] leading-relaxed font-mono text-gray-400"><code><span class="text-violet-400">class</span> <span class="text-amber-400">CRMProcessor</span> {
  <span class="text-violet-400">async</span> <span class="text-blue-400">process</span>(<span class="text-blue-400">data</span>) {
    <span class="text-gray-500">// AI анализ</span>
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
      </div>
    </section>

    <!-- Секция Проблемы бизнеса - Единый стиль сайта -->
    <section id="problems" ref="problemsSection" class="py-32 px-6 relative">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-20">
          <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 mb-6 backdrop-blur-sm">
            <AlertCircle class="w-4 h-4 text-violet-400" />
            Диагностика
          </div>
          <h2 class="text-4xl md:text-6xl font-bold mb-6">
            <span class="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">Узнаёте свой</span>
            <span class="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent"> бизнес?</span>
          </h2>
          <p class="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Эти проблемы знакомы большинству компаний, которые хотят масштабироваться
          </p>
        </div>

        <!-- Карточки проблем в едином стиле -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="(problem, index) in problems" :key="index"
               :ref="(el) => problemRefs[index] = el"
               :class="['group relative rounded-2xl backdrop-blur-xl border p-8 transition-all duration-500 hover:-translate-y-2 overflow-hidden',
                        activeProblemIndex === index
                          ? 'bg-white/[0.08] border-violet-500/50 shadow-xl shadow-violet-500/20'
                          : 'bg-white/[0.02] border-white/[0.08] opacity-60']">
            <!-- Градиентный фон при наведении -->
            <div class="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-fuchsia-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <!-- Номер проблемы -->
            <div :class="['absolute top-6 right-6 text-6xl font-bold transition-colors select-none',
                          activeProblemIndex === index ? 'text-violet-500/20' : 'text-white/[0.03]']">
              {{ String(index + 1).padStart(2, '0') }}
            </div>
            
            <div class="relative z-10">
              <!-- Иконка с белой обводкой -->
              <div :class="['w-14 h-14 rounded-2xl border flex items-center justify-center mb-6 transition-all duration-500',
                           activeProblemIndex === index ? 'border-white/60 scale-110 bg-white/[0.05]' : 'border-white/30']">
                <component :is="problem.icon" :class="['h-7 w-7 transition-colors duration-500',
                           activeProblemIndex === index ? 'text-white' : 'text-white/70']" />
              </div>

              <!-- Заголовок -->
              <h3 :class="['text-xl font-bold mb-3 transition-all duration-500',
                           activeProblemIndex === index ? 'text-white' : 'text-white/70']">
                {{ problem.title }}
              </h3>

              <!-- Описание -->
              <p :class="['leading-relaxed transition-all duration-500',
                          activeProblemIndex === index ? 'text-gray-200' : 'text-gray-500']">
                {{ problem.description }}
              </p>

              <!-- Решение -->
              <div class="mt-6 pt-6 border-t border-white/5">
                <div class="flex items-center gap-2 text-sm">
                  <CheckCircle2 :class="['w-4 h-4 transition-colors duration-500',
                              activeProblemIndex === index ? 'text-violet-400' : 'text-violet-400/50']" />
                  <span :class="['transition-colors duration-500',
                              activeProblemIndex === index ? 'text-violet-300' : 'text-violet-300/50']">{{ problem.solution }}</span>
                </div>
              </div>
            </div>

            <!-- Декоративная линия снизу -->
            <div :class="['absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-500 to-fuchsia-500 transition-transform duration-500 origin-left',
                          activeProblemIndex === index ? 'scale-x-100' : 'scale-x-0']"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Секция Услуги с улучшенным Bento Grid -->
    <section id="services" class="py-32 px-6 relative">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-20">
          <h2 class="text-4xl md:text-6xl font-bold mb-6">
            <span class="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">Наши</span>
            <span class="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent"> услуги</span>
          </h2>
          <p class="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">Комплексные решения для цифровизации вашего бизнеса</p>
        </div>

        <!-- Bento Grid с улучшенным дизайном -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <!-- Большая карточка -->
          <div class="md:col-span-2 rounded-2xl bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] p-8 hover:border-violet-500/40 hover:bg-white/[0.04] transition-all duration-500 group overflow-hidden relative hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-500/10">
            <div class="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-violet-600/30 to-fuchsia-600/30 rounded-full blur-[100px] group-hover:scale-110 transition-all duration-700"></div>
            <div class="relative z-10">
              <div class="flex items-start justify-between">
                <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500 via-fuchsia-500 to-purple-600 flex items-center justify-center shadow-lg shadow-violet-500/30 mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <Monitor class="h-7 w-7 text-white" />
                </div>
                <div class="hidden md:flex gap-2">
                  <span class="px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/30 text-xs text-violet-300">Nuxt</span>
                  <span class="px-4 py-1.5 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/30 text-xs text-fuchsia-300">Vue</span>
                  <span class="px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-xs text-purple-300">React</span>
                </div>
              </div>
              <h3 class="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-4">Веб-сайты</h3>
              <p class="text-gray-400 mb-6 max-w-md text-lg leading-relaxed">
                От лендингов до корпоративных порталов. Современный дизайн, адаптивность, 
                SEO-оптимизация и высокая конверсия
              </p>
            </div>
          </div>

          <!-- Маленькая карточка чат-боты -->
          <div class="rounded-2xl bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] p-8 hover:border-fuchsia-500/40 hover:bg-white/[0.04] transition-all duration-500 group overflow-hidden relative hover:-translate-y-1 hover:shadow-xl hover:shadow-fuchsia-500/10">
            <div class="absolute top-0 right-0 w-60 h-60 bg-gradient-to-br from-fuchsia-600/30 to-violet-600/30 rounded-full blur-[80px] group-hover:scale-110 transition-all duration-700"></div>
            <div class="relative z-10">
              <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-fuchsia-500 via-violet-500 to-purple-600 flex items-center justify-center shadow-lg shadow-fuchsia-500/30 mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <Bot class="h-7 w-7 text-white" />
              </div>
              <h3 class="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-3">AI чат-боты</h3>
              <p class="text-gray-400 leading-relaxed">
                Умные боты для Telegram, VK и MAX с интеграцией AI. Автоматизация продаж и поддержки
              </p>
              <div class="mt-4 flex gap-2 flex-wrap">
                <span class="px-3 py-1 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/30 text-xs text-fuchsia-300">Telegram</span>
                <span class="px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/30 text-xs text-violet-300">VK</span>
                <span class="px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-xs text-purple-300">MAX</span>
              </div>
            </div>
          </div>

          <!-- Маленькая карточка веб-приложения -->
          <div class="rounded-2xl bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] p-8 hover:border-violet-500/40 hover:bg-white/[0.04] transition-all duration-500 group overflow-hidden relative hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-500/10">
            <div class="absolute top-0 right-0 w-60 h-60 bg-gradient-to-br from-violet-600/30 to-indigo-600/30 rounded-full blur-[80px] group-hover:scale-110 transition-all duration-700"></div>
            <div class="relative z-10">
              <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500 via-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-violet-500/30 mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <Code2 class="h-7 w-7 text-white" />
              </div>
              <h3 class="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-3">Веб-приложения</h3>
              <p class="text-gray-400 leading-relaxed">
                CRM, личные кабинеты, сервисы с AI-функционалом
              </p>
            </div>
          </div>

          <!-- Большая карточка автоматизация -->
          <div class="md:col-span-2 rounded-2xl bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] p-8 hover:border-violet-500/40 hover:bg-white/[0.04] transition-all duration-500 group overflow-hidden relative hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-500/10">
            <div class="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-violet-600/30 to-fuchsia-600/30 rounded-full blur-[100px] group-hover:scale-110 transition-all duration-700"></div>
            <div class="relative z-10 flex flex-col md:flex-row gap-8 items-start">
              <div class="flex-1">
                <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500 via-fuchsia-500 to-purple-600 flex items-center justify-center shadow-lg shadow-violet-500/30 mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <Zap class="h-7 w-7 text-white" />
                </div>
                <h3 class="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-4">Автоматизация</h3>
                <p class="text-gray-400 mb-6 text-lg leading-relaxed">
                  Интеграция систем, автоматические воронки, триггерные рассылки. 
                  Освободим время для важных задач
                </p>
                <div class="flex gap-2">
                  <span class="px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/30 text-xs text-violet-300">API</span>
                  <span class="px-4 py-1.5 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/30 text-xs text-fuchsia-300">CRM</span>
                  <span class="px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-xs text-purple-300">AI</span>
                </div>
              </div>
              <!-- Code snippet с улучшенным стилем -->
              <div class="w-full md:w-80 bg-[#0a0a0f] rounded-xl p-5 border border-white/[0.08] shadow-xl font-mono text-sm">
                <div class="flex items-center gap-2 mb-4">
                  <div class="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div class="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div class="w-3 h-3 rounded-full bg-green-500/80"></div>
                  <span class="ml-2 text-xs text-gray-600">automate.js</span>
                </div>
                <pre class="text-gray-400"><code><span class="text-purple-400">const</span> <span class="text-blue-400">result</span> = <span class="text-purple-400">await</span> <span class="text-yellow-400">automate</span>({
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
    <section id="why-us" class="py-32 px-6 relative">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-20">
          <h2 class="text-4xl md:text-6xl font-bold mb-6">
            <span class="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">Почему выбирают</span>
            <span class="font-syncopate font-bold text-white tracking-wider"> YAPPIE</span>
          </h2>
          <p class="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">Решения, которые экономят время и деньги вашего бизнеса</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div v-for="(benefit, index) in benefits" :key="index" 
               class="group flex gap-6 p-8 rounded-2xl bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] hover:border-white/30 hover:bg-white/[0.04] transition-all duration-500 hover:-translate-y-1">
            <div class="w-16 h-16 rounded-2xl border border-white/30 bg-transparent flex items-center justify-center flex-shrink-0 group-hover:border-white/50 group-hover:scale-110 transition-all duration-500">
              <component :is="benefit.icon" class="h-8 w-8 text-white" />
            </div>
            <div>
              <h4 class="text-xl font-bold text-white mb-3">{{ benefit.title }}</h4>
              <p class="text-gray-400 leading-relaxed">{{ benefit.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Секция Автоматизация и заработок -->
    <section id="automation" class="py-32 px-6 relative">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-6xl font-bold mb-6">
            <span class="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">Наши решения</span>
          </h2>
          <p class="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Автоматизация, веб-сервисы и мобильные приложения для роста вашего бизнеса
          </p>
        </div>

        <!-- Линия с названиями -->
        <div class="flex flex-wrap justify-center gap-8 mb-16 border-b border-white/10 pb-4">
          <button
            v-for="(item, index) in automationItems"
            :key="index"
            @click="activeSlide = index"
            class="text-lg transition-all duration-300 pb-4 relative"
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
        <div class="relative min-h-[500px] overflow-hidden rounded-3xl bg-white/[0.02] backdrop-blur-xl border border-white/[0.08]">
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
              <div class="lg:w-1/2 p-12 flex flex-col justify-center">
                <div class="mb-6">
                  <span class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/30 text-sm text-violet-300 mb-4">
                    <Zap class="w-4 h-4" />
                    {{ item.category || 'Решение' }}
                  </span>
                </div>
                <h3 class="text-3xl md:text-4xl font-bold text-white mb-6">{{ item.title }}</h3>
                <p class="text-gray-400 text-lg leading-relaxed mb-8">{{ item.description }}</p>
                
                <div class="space-y-4 mb-8">
                  <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 flex items-center justify-center">
                      <TrendingUp class="w-5 h-5 text-violet-400" />
                    </div>
                    <div>
                      <div class="text-white font-semibold">Прибыль</div>
                      <div class="text-gray-500 text-sm">{{ item.profit }}</div>
                    </div>
                  </div>
                  <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 flex items-center justify-center">
                      <Clock class="w-5 h-5 text-violet-400" />
                    </div>
                    <div>
                      <div class="text-white font-semibold">Экономия времени</div>
                      <div class="text-gray-500 text-sm">{{ item.timeSaved }}</div>
                    </div>
                  </div>
                </div>

                <Button as-child class="w-fit px-5 sm:px-6 py-3 sm:py-3.5 text-xs sm:text-sm bg-white text-black hover:bg-gray-100 whitespace-nowrap">
                  <a href="https://t.me/artemselifanov" target="_blank" class="flex items-center">
                    <span class="whitespace-nowrap">Обсудить внедрение</span>
                    <ArrowRight class="ml-2 h-3.5 w-3.5 flex-shrink-0" />
                  </a>
                </Button>
              </div>

              <!-- Правая часть - референс/картинка -->
              <div class="lg:w-1/2 p-8 flex items-center justify-center">
                <div class="relative w-full max-w-lg">
                  <div class="absolute inset-0 bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 rounded-2xl blur-2xl"></div>
                  <div class="relative bg-gradient-to-br from-white/[0.05] to-white/[0.02] rounded-2xl p-8 border border-white/[0.08] backdrop-blur-xl">
                    <component 
                      :is="item.icon" 
                      class="w-32 h-32 mx-auto text-white/20 mb-6"
                    />
                    <div class="text-center">
                      <div class="text-2xl font-bold text-white mb-2">{{ item.metric }}</div>
                      <div class="text-gray-500">{{ item.metricLabel }}</div>
                    </div>
                    <div class="mt-6 pt-6 border-t border-white/10">
                      <div class="flex justify-between items-center text-sm">
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
        <div class="flex justify-center gap-3 mt-8">
          <button
            v-for="(item, index) in automationItems"
            :key="index"
            @click="activeSlide = index"
            class="w-3 h-3 rounded-full transition-all duration-300"
            :class="activeSlide === index ? 'bg-violet-500 w-8' : 'bg-white/20 hover:bg-white/40'"
          ></button>
        </div>
      </div>
    </section>

    <!-- Секция Портфолио с улучшенными карточками -->
    <section id="portfolio" class="py-32 px-6 relative">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-20">
          <h2 class="text-4xl md:text-6xl font-bold mb-6">
            <span class="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">Наши</span>
            <span class="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent"> проекты</span>
          </h2>
          <p class="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">Реальные кейсы с измеримыми результатами</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="(project, index) in portfolio" :key="index"
               class="group relative rounded-2xl overflow-hidden border border-white/[0.08] hover:border-violet-500/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-violet-500/20 bg-white/[0.02] backdrop-blur-xl">
            <div class="aspect-video bg-gradient-to-br from-violet-600/20 to-fuchsia-600/20 flex items-center justify-center relative overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-t from-[#030305] via-transparent to-transparent opacity-60"></div>
              <component :is="project.icon" class="h-20 w-20 text-white/30 group-hover:scale-110 group-hover:text-white/50 transition-all duration-500" />
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-2">{{ project.title }}</h3>
              <p class="text-gray-400 mb-4 leading-relaxed">{{ project.description }}</p>
              <div class="flex flex-wrap gap-2">
                <span v-for="tag in project.tags" :key="tag" 
                      class="px-3 py-1.5 rounded-full bg-gradient-to-r from-violet-500/10 to-fuchsia-500/10 border border-violet-500/30 text-xs text-violet-300">
                  {{ tag }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Секция FAQ с улучшенным дизайном -->
    <section id="faq" class="py-32 px-6 relative">
      <div class="max-w-4xl mx-auto">
        <div class="text-center mb-20">
          <h2 class="text-4xl md:text-6xl font-bold mb-6">
            <span class="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">Частые</span>
            <span class="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent"> вопросы</span>
          </h2>
        </div>

        <Accordion type="single" collapsible class="space-y-4">
          <AccordionItem v-for="(faq, index) in faqs" :key="index" :value="`item-${index}`"
                        class="rounded-2xl bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] px-6 hover:border-violet-500/30 data-[state=open]:border-violet-500/40 data-[state=open]:bg-white/[0.04] transition-all duration-300">
            <AccordionTrigger class="text-left text-white hover:text-violet-300 py-6 text-lg font-medium">
              {{ faq.question }}
            </AccordionTrigger>
            <AccordionContent class="text-gray-400 pb-6 leading-relaxed">
              {{ faq.answer }}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>

    <!-- Секция Контакты с улучшенным CTA -->
    <section id="contact" class="py-32 px-6 relative">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-4xl md:text-6xl font-bold mb-6">
          <span class="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">Готовы</span>
          <span class="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent"> начать проект?</span>
        </h2>
        <p class="text-gray-400 mb-12 max-w-xl mx-auto text-xl leading-relaxed">
          Расскажите о вашей задаче — мы предложим решение и рассчитаем стоимость бесплатно
        </p>

        <Button as-child class="px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base bg-white text-black hover:bg-gray-100 shadow-2xl shadow-white/15 hover:shadow-white/25 transition-all duration-300 hover:scale-105 whitespace-nowrap">
          <a href="https://t.me/artemselifanov" target="_blank" class="flex items-center">
            <Send class="mr-2 sm:mr-3 h-4 sm:h-5 w-4 sm:w-5 flex-shrink-0" />
            <span class="whitespace-nowrap">Написать в Telegram</span>
            <ArrowRight class="ml-2 sm:ml-3 h-4 sm:h-5 w-4 sm:w-5 flex-shrink-0" />
          </a>
        </Button>

        <p class="text-gray-500 mt-8 text-base">Бесплатная консультация и расчёт стоимости в течение 24 часов</p>
      </div>
    </section>

    <!-- Footer с улучшенным стилем -->
    <footer class="py-12 px-6 border-t border-white/[0.08]">
      <div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div class="flex items-center gap-2">
          <span class="font-syncopate font-bold text-white tracking-wider text-xl">YAPPIE</span>
        </div>
        <div class="flex gap-8 text-sm text-gray-500">
          <a href="#services" class="hover:text-white transition-colors hover:text-violet-300">Услуги</a>
          <a href="#portfolio" class="hover:text-white transition-colors hover:text-violet-300">Кейсы</a>
          <a href="#faq" class="hover:text-white transition-colors hover:text-violet-300">FAQ</a>
          <a href="#contact" class="hover:text-white transition-colors hover:text-violet-300">Контакты</a>
        </div>
        <div class="text-gray-600 text-sm">© 2026 Yappie</div>
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
        class="fixed bottom-6 right-6 z-50 w-12 h-12 bg-gradient-to-br from-violet-500 to-fuchsia-500 text-white rounded-full shadow-lg shadow-violet-500/30 hover:shadow-violet-500/50 hover:scale-110 transition-all duration-300 flex items-center justify-center"
        aria-label="Наверх"
      >
        <ChevronUp class="w-6 h-6" />
      </button>
    </Transition>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import Button from '@/components/ui/button/Button.vue'

// SEO Meta Tags with useSeoMeta
useSeoMeta({
  title: 'Разработка сайтов, чат-ботов и приложений — Yappie',
  ogTitle: 'Разработка сайтов, чат-ботов и приложений — Yappie',
  description: 'Yappie — разработка сайтов, чат-ботов и веб-приложений на базе AI для бизнеса. Автоматизируем процессы, увеличиваем эффективность. Бесплатная консультация.',
  ogDescription: 'Yappie — разработка сайтов, чат-ботов и веб-приложений на базе AI для бизнеса. Автоматизируем процессы, увеличиваем эффективность.',
  ogImage: 'https://yappie.ru/og-image.jpg',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Разработка сайтов, чат-ботов и приложений — Yappie',
  twitterDescription: 'Yappie — разработка сайтов, чат-ботов и веб-приложений на базе AI для бизнеса',
  twitterImage: 'https://yappie.ru/og-image.jpg',
  keywords: 'разработка сайтов, чат-боты, веб-приложения, AI, автоматизация, CRM, Telegram боты, WhatsApp, Nuxt, Vue.js, React',
  author: 'Yappie',
  robots: 'index, follow'
})

// Schema.org Organization markup
useSchemaOrg([
  defineOrganization({
    name: 'Yappie',
    url: 'https://yappie.ru',
    logo: 'https://yappie.ru/logo.png',
    sameAs: [
      'https://t.me/artemselifanov'
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      availableLanguage: ['Russian']
    }
  }),
  defineWebSite({
    name: 'Yappie - Разработка сайтов, чат-ботов и приложений',
    url: 'https://yappie.ru',
    description: 'Yappie — разработка сайтов, чат-ботов и веб-приложений на базе AI для бизнеса',
    inLanguage: 'ru-RU'
  }),
  defineWebPage({
    '@type': 'WebPage',
    name: 'Разработка сайтов, чат-ботов и приложений — Yappie',
    description: 'Yappie — разработка сайтов, чат-ботов и веб-приложений на базе AI для бизнеса',
    url: 'https://yappie.ru'
  })
])
import Accordion from '@/components/ui/accordion/Accordion.vue'
import AccordionItem from '@/components/ui/accordion/AccordionItem.vue'
import AccordionTrigger from '@/components/ui/accordion/AccordionTrigger.vue'
import AccordionContent from '@/components/ui/accordion/AccordionContent.vue'
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
const activeProblemIndex = ref(-1)

// Intersection Observer для отслеживания видимости карточек
let observer = null
let lastScrollTop = 0
let scrollDirection = 1 // 1 = вниз, -1 = вверх

// Пункты мобильного меню
const mobileMenuItems = [
  { href: '#problems', label: 'Проблемы' },
  { href: '#services', label: 'Услуги' },
  { href: '#why-us', label: 'Почему мы' },
  { href: '#portfolio', label: 'Кейсы' },
  { href: '#faq', label: 'FAQ' }
]

// Обработчик скролла для показа кнопки "Наверх" и определения направления
const handleScroll = () => {
  const scrollTop = window.scrollY
  scrollDirection = scrollTop > lastScrollTop ? 1 : -1 // 1 = вниз, -1 = вверх
  lastScrollTop = scrollTop
  showScrollTop.value = scrollTop > window.innerHeight
}

// Прокрутка наверх
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

// Добавляем слушатель скролла и настраиваем Observer
onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  
  // Настраиваем Intersection Observer для карточек
  observer = new IntersectionObserver((entries) => {
    const viewportCenter = window.innerHeight / 2
    let closestDistance = Infinity
    let activeIndex = -1
    
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const rect = entry.target.getBoundingClientRect()
        const elementCenter = rect.top + rect.height / 2
        const distance = Math.abs(viewportCenter - elementCenter)
        
        // Выбираем карточку, центр которой ближе к центру экрана
        if (distance < closestDistance) {
          closestDistance = distance
          activeIndex = problemRefs.value.indexOf(entry.target)
        }
      }
    })
    
    if (activeIndex !== -1) {
      activeProblemIndex.value = activeIndex
    }
  }, {
    threshold: [0.5],
    rootMargin: '0px'
  })
  
  // Наблюдаем за каждой карточкой
  setTimeout(() => {
    problemRefs.value.forEach(ref => {
      if (ref) observer.observe(ref)
    })
  }, 100)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  if (observer) observer.disconnect()
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
  { icon: MessageSquare, title: 'AI-бот для e-commerce', description: 'Автоматизировал 85% обращений в поддержку', tags: ['Telegram', 'GPT-4', 'E-commerce'] },
  { icon: Monitor, title: 'CRM для логистики', description: 'Сократили время обработки заказов на 60%', tags: ['Vue.js', 'Node.js', 'AI'] },
  { icon: Globe, title: 'Маркетплейс услуг', description: 'Платформа с AI-подбором исполнителей', tags: ['Nuxt', 'Python', 'ML'] },
  { icon: Bot, title: 'Бот для онлайн-школы', description: 'Увеличил конверсию в покупку на 40%', tags: ['Telegram', 'Payments', 'CRM'] },
  { icon: Code2, title: 'Портал для клиники', description: 'Запись пациентов + AI-консультант', tags: ['React', 'AI', 'Healthcare'] },
  { icon: Smartphone, title: 'PWA для доставки', description: 'Рост мобильных заказов на 120%', tags: ['PWA', 'Mobile', 'API'] },
])

const faqs = ref([
  { question: 'Сколько стоит разработка?', answer: 'Стоимость зависит от сложности проекта. Лендинг — от 50 000₽, чат-бот — от 30 000₽, веб-приложение — от 100 000₽. Точную сумму назовём после обсуждения задачи.' },
  { question: 'Какие сроки разработки?', answer: 'Лендинг — 5-10 дней, чат-бот — 3-7 дней, веб-приложение — 2-6 недель. Срочные проекты обсуждаются индивидуально.' },
  { question: 'Работаете по договору?', answer: 'Да, работаем официально по договору с ИП или ООО. Предоставляем все закрывающие документы для бухгалтерии.' },
  { question: 'Что если мне не понравится результат?', answer: 'Вносим правки в рамках ТЗ бесплатно. Если результат не устроит после всех правок — вернём деньги за вычетом фактических затрат.' },
  { question: 'Предоставляете поддержку после запуска?', answer: 'Да, первый месяц поддержки бесплатно. Далее — от 5 000₽/месяц в зависимости от объёма работ.' },
  { question: 'Можно ли оплатить в рассрочку?', answer: 'Да, возможна рассрочка до 6 месяцев без процентов для проектов от 100 000₽.' },
])
</script>

<style>
/* Syncopate font for logo */
.font-syncopate {
  font-family: 'Syncopate', sans-serif;
}

/* 3D perspective for dashboard stack */
.perspective-1000 {
  perspective: 1000px;
}

@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes pulse-slow {
  0%, 100% {
    opacity: 0.5;
    transform: scale(1);
  }
  50% {
    opacity: 0.8;
    transform: scale(1.05);
  }
}

.animate-fade-in {
  animation: fade-in 0.8s ease-out forwards;
}

.animate-fade-in-up {
  animation: fade-in-up 0.8s ease-out forwards;
}

.animate-pulse-slow {
  animation: pulse-slow 8s ease-in-out infinite;
}

.animation-delay-200 {
  animation-delay: 0.2s;
}

.animation-delay-400 {
  animation-delay: 0.4s;
}

.animation-delay-600 {
  animation-delay: 0.6s;
}

.animation-delay-1000 {
  animation-delay: 1s;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

html {
  scroll-behavior: smooth;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #030305;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(180deg, #8b5cf6, #d946ef);
  border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(180deg, #a78bfa, #e879f9);
}

/* Selection color */
::selection {
  background: rgba(139, 92, 246, 0.3);
  color: white;
}
</style>
