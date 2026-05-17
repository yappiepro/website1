<template>
  <div class="min-h-screen bg-white text-slate-900 font-sans antialiased">
    <!-- Navigation -->
    <header class="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        <div class="text-2xl font-black tracking-tighter">
          <img src="/logo.svg" alt="MICE Karelia" class="h-8 w-auto" />
        </div>
        <nav class="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
          <a href="#why" class="hover:text-blue-600 transition-colors">Почему Карелия</a>
          <a href="#programs" class="hover:text-blue-600 transition-colors">Программы</a>
          <a href="#gr" class="hover:text-blue-600 transition-colors">GR и доступ</a>
          <a href="#cases" class="hover:text-blue-600 transition-colors">Кейсы</a>
          <a href="#contacts" class="px-5 py-2.5 rounded-xl border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all">Обсудить миссию</a>
          <a href="https://t.me/artemslifanov" target="_blank" class="px-5 py-2.5 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition-all font-bold">Написать в Telegram</a>
        </nav>
        <div class="md:hidden">
          <button @click="isMenuOpen = !isMenuOpen" class="p-2">
            <Icon name="fa-solid:bars" class="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>

    <!-- Mobile menu -->
    <div v-if="isMenuOpen" class="fixed inset-0 z-40 bg-white pt-20 px-4">
      <nav class="flex flex-col gap-6 text-lg font-semibold text-slate-700">
        <a href="#why" @click="isMenuOpen = false">Почему Карелия</a>
        <a href="#programs" @click="isMenuOpen = false">Программы</a>
        <a href="#gr" @click="isMenuOpen = false">GR и доступ</a>
        <a href="#cases" @click="isMenuOpen = false">Кейсы</a>
        <a href="#contacts" @click="isMenuOpen = false">Обсудить миссию</a>
        <a href="https://t.me/artemslifanov" target="_blank" class="px-5 py-3 rounded-xl bg-blue-600 text-white text-center font-bold">Написать в Telegram</a>
      </nav>
    </div>

    <main class="pt-20">
      <!-- HERO -->
      <section class="relative min-h-screen flex items-center overflow-hidden">
        <!-- Background slides -->
        <div class="absolute inset-0 z-0">
          <div class="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/70 to-transparent z-10"></div>
          <div v-for="(slide, index) in slides" :key="index"
               class="absolute inset-0 opacity-0 transition-opacity duration-1000"
               :class="{ 'opacity-100': index === currentSlide }">
            <img :src="slide"
                 :alt="'Karelia landscape ' + (index + 1)"
                 class="w-full h-full object-cover" />
          </div>
          <!-- Slide dots -->
          <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
            <button v-for="(slide, index) in slides" :key="index"
                    class="w-2.5 h-2.5 bg-white/40 rounded-full hover:bg-white/70 transition-all"
                    :class="{ 'bg-white w-6': index === currentSlide }"
                    @click="currentSlide = index"></button>
          </div>
        </div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 py-20 relative z-10 w-full">
          <div class="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div class="inline-flex items-center gap-2 px-4 py-2 bg-blue-600/20 border border-blue-500/30 rounded-full text-blue-300 text-sm font-medium mb-8">
                <span class="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
                Деловой туризм в Карелию · Под ключ
              </div>

              <h1 class="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-6">
                Карелия —<br />
                <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-cyan-300 to-blue-400">территория роста</span>
              </h1>

              <p class="text-lg text-slate-300 leading-relaxed mb-4 max-w-lg">
                Вы тратите месяцы на поиск партнёров в новом регионе.
                Мы открываем нужные двери за 3–5 дней.
              </p>
              <p class="text-base text-slate-300 leading-relaxed mb-10 max-w-lg">
                Прямой доступ к собственникам предприятий, профильным министерствам и инвестпроектам Республики Карелия.
              </p>

              <div class="flex flex-wrap gap-4 mb-12">
                <a href="#contacts" class="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-600/25">
                  Обсудить задачу
                </a>
                <a href="#programs" class="px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-bold rounded-xl transition-all border border-white/10 backdrop-blur-sm">
                  Смотреть форматы
                </a>
              </div>

              <!-- Trust badges -->
              <div class="flex flex-wrap gap-6 text-sm text-slate-300">
                <div class="flex items-center gap-2">
                  <Icon name="fa-solid:check" class="w-4 h-4 text-green-400" />
                  <span>6 лет опыта в деловом туризме</span>
                </div>
                <div class="flex items-center gap-2">
                  <Icon name="fa-solid:check" class="w-4 h-4 text-green-400" />
                  <span>40+ бизнес-миссий проведено</span>
                </div>
                <div class="flex items-center gap-2">
                  <Icon name="fa-solid:check" class="w-4 h-4 text-green-400" />
                  <span>Прямой доступ к ЛПР региона</span>
                </div>
              </div>
            </div>

            <!-- KPI Cards -->
            <div class="grid grid-cols-2 gap-4">
              <div v-for="(kpi, i) in kpis" :key="i" 
                   class="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/30 hover:bg-white/10 transition-all backdrop-blur-sm">
                <div class="text-3xl sm:text-4xl font-black text-white mb-2 group-hover:text-blue-300 transition-colors">{{ kpi.val }}</div>
                <div class="text-sm text-slate-300 font-medium">{{ kpi.label }}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- WHY KARELIA -->
      <section id="why" class="py-24 md:py-32 px-4 sm:px-6 bg-white">
        <div class="max-w-7xl mx-auto">
          <div class="text-center mb-16">
            <div class="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full text-blue-600 text-sm font-semibold mb-6">
              Экономика региона
            </div>
            <h2 class="text-3xl sm:text-5xl font-black text-slate-900 mb-6 tracking-tight">
              Почему бизнес выбирает Карелию
            </h2>
            <p class="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Индустриальный регион Северо-Запада. Здесь ещё есть пространство — рынки, которые ваши конкуренты не заметили. 107 млрд рублей инвестиций ежегодно идут в территорию с нулевым налогом на прибыль первые пять лет.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div v-for="(card, i) in advantages" :key="i" 
                 class="group rounded-2xl border border-slate-200 bg-white overflow-hidden hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/5 transition-all">
              <div class="w-full h-48 overflow-hidden">
                <img v-if="card.image" :src="card.image" :alt="card.title"
                     class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div v-else class="w-full h-full bg-slate-100 flex items-center justify-center">
                  <Icon :name="card.icon" class="w-12 h-12 text-slate-300" />
                </div>
              </div>
              <div class="p-6">
                <div class="text-3xl font-black text-slate-900 mb-2">{{ card.metric }}</div>
                <div class="text-slate-900 font-bold mb-2 text-lg">{{ card.title }}</div>
                <div class="text-sm text-slate-500 leading-relaxed">{{ card.desc }}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- VALUE PROPOSITION -->
      <section class="py-24 md:py-32 px-4 sm:px-6 bg-slate-50">
        <div class="max-w-7xl mx-auto">
          <div class="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <div class="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full text-blue-600 text-sm font-semibold mb-6">
                Наш подход
              </div>
              <h2 class="text-3xl sm:text-5xl font-black text-slate-900 mb-8 tracking-tight leading-tight">
                Не тур.<br />
                <span class="text-blue-600">Бизнес-инструмент.</span>
              </h2>

              <div class="space-y-4 mb-10">
                <div v-for="(item, i) in valueList" :key="i" 
                     class="flex items-start gap-4 p-5 rounded-xl bg-white border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all">
                  <div class="mt-0.5 w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
                    <Icon name="fa-solid:check" class="w-3 h-3 text-white" />
                  </div>
                  <span class="text-slate-700 font-medium">{{ item }}</span>
                </div>
              </div>

              <div class="p-6 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl text-white">
                <p class="text-base font-medium italic leading-relaxed mb-4">
                  «Результат — конкретные договорённости и точки роста.
                  Стоимость одной миссии кратно ниже стоимости одной ошибки при самостоятельном выходе в регион.»
                </p>
                <p class="text-sm font-semibold opacity-90">
                  — Артём Селифанов, организатор бизнес-миссий, 6 лет в системе поддержки предпринимательства Карелии
                </p>
              </div>
            </div>

            <div class="lg:sticky lg:top-28">
              <div class="space-y-6">
                <!-- How it works steps -->
                <div class="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <div class="text-sm font-bold text-blue-600 uppercase tracking-wider mb-6">Как это работает</div>
                  <div class="space-y-6">
                    <div v-for="(step, i) in steps" :key="i" class="flex gap-4">
                      <div class="flex-shrink-0 w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-sm font-black text-slate-600">
                        {{ i + 1 }}
                      </div>
                      <div>
                        <div class="font-bold text-slate-900 mb-1">{{ step.title }}</div>
                        <div class="text-sm text-slate-500">{{ step.desc }}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- PROGRAMS & PRICING -->
      <section id="programs" class="py-24 md:py-32 px-4 sm:px-6 bg-white">
        <div class="max-w-7xl mx-auto">
          <div class="text-center mb-16">
            <div class="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full text-blue-600 text-sm font-semibold mb-6">
              Форматы
            </div>
            <h2 class="text-3xl sm:text-5xl font-black text-slate-900 mb-6 tracking-tight">
              Форматы бизнес-миссий
            </h2>
            <p class="text-lg text-slate-600 max-w-3xl mx-auto">
              Прозрачная логика. Вы платите за доступ и результат — не за дни проживания и «туристическую программу»
            </p>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div v-for="(plan, i) in pricingPlans" :key="i" 
                 class="relative p-8 rounded-2xl border transition-all hover:shadow-xl"
                 :class="plan.highlight ? 'border-blue-600 bg-blue-50/50 shadow-lg shadow-blue-500/10' : 'border-slate-200 bg-white hover:border-slate-300'">
              <div v-if="plan.highlight" class="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-blue-600 text-white text-xs font-bold rounded-full uppercase tracking-wider">
                Рекомендуем
              </div>

              <div class="text-sm font-bold text-slate-500 uppercase tracking-wider mb-2">{{ plan.name }}</div>
              <div class="text-sm text-slate-400 mb-6">{{ plan.duration }}</div>
              
              <div class="mb-8">
                <span class="text-4xl font-black text-slate-900">{{ plan.price }}</span>
                <span class="text-lg text-slate-500 font-medium"> ₽ / чел</span>
              </div>

              <div class="space-y-3 mb-8">
                <div v-for="feature in plan.features" :key="feature" class="flex items-start gap-3 text-sm text-slate-600">
                  <Icon name="fa-solid:check" class="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  {{ feature }}
                </div>
              </div>

              <div class="p-4 rounded-xl mb-8" :class="plan.highlight ? 'bg-blue-100/50' : 'bg-slate-50'">
                <div class="text-xs font-bold text-slate-400 uppercase mb-1">Результат</div>
                <div class="text-sm font-bold text-slate-800">{{ plan.result }}</div>
              </div>

              <a href="#contacts" 
                 class="block w-full py-4 text-center font-bold rounded-xl transition-all"
                 :class="plan.highlight ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-600/25' : 'bg-slate-100 text-slate-900 hover:bg-slate-200'">
                Получить расчёт
              </a>
            </div>
          </div>

          <p class="text-center text-slate-500 text-sm mt-12 leading-relaxed">
            Итоговая стоимость формируется индивидуально после брифинга.<br />
            Для корпоративных групп и MICE-мероприятий (от 10 человек) — от 1,5 млн ₽.<br />
            Программа и предварительный расчёт — в течение 24 часов.
          </p>
        </div>
      </section>

      <!-- ENVIRONMENT -->
      <section class="py-24 md:py-32 px-4 sm:px-6 bg-gradient-to-b from-slate-900 to-slate-950 text-white">
        <div class="max-w-7xl mx-auto">
          <div class="text-center mb-16">
            <div class="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-blue-400 text-sm font-semibold mb-6">
              Среда для решений
            </div>
            <h2 class="text-3xl sm:text-5xl font-black mb-6">Среда, в которой принимают решения</h2>
            <p class="text-slate-400 text-lg max-w-3xl mx-auto">Переговорные и конференц-залы — для деловой части. Карельская природа — для того, что важнее</p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div v-for="(env, i) in environments" :key="i" 
                 class="group rounded-2xl bg-white/5 border border-white/10 overflow-hidden hover:border-blue-500/30 hover:bg-white/10 transition-all">
              <div class="w-full h-48 overflow-hidden">
                <img v-if="env.image" :src="env.image" :alt="env.category"
                     class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div v-else class="w-full h-full bg-white/5 flex items-center justify-center">
                  <Icon :name="env.icon" class="w-12 h-12 text-blue-400/30" />
                </div>
              </div>
              <div class="p-6">
                <div class="text-sm font-bold text-blue-400 uppercase tracking-wider mb-2">{{ env.category }}</div>
                <div class="text-lg font-bold mb-3 text-white">{{ env.places }}</div>
                <div class="text-slate-400 text-sm leading-relaxed">{{ env.desc }}</div>
              </div>
            </div>
          </div>

          <div class="mt-16 text-center">
            <div class="inline-block p-8 rounded-2xl bg-white/5 border border-white/10">
              <p class="italic text-xl text-slate-300 font-medium">
                «Люди принимают решения не в переговорных — а после них. Карелия умеет создавать это "после".»
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- GR & ACCESS -->
      <section id="gr" class="py-24 md:py-32 px-4 sm:px-6 bg-white">
        <div class="max-w-7xl mx-auto">
          <div class="text-center mb-16">
            <div class="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full text-blue-600 text-sm font-semibold mb-6">
              Прямой доступ
            </div>
            <h2 class="text-3xl sm:text-5xl font-black text-slate-900 mb-6 tracking-tight">
              Прямой доступ к власти и институтам развития
            </h2>
            <p class="text-lg text-slate-600 max-w-3xl mx-auto">
              Вы приезжаете не на экскурсию. Вы сразу садитесь за стол с теми, кто принимает решения в регионе
            </p>
          </div>

          <div class="grid lg:grid-cols-3 gap-8 mb-12">
            <!-- Official sector -->
            <div class="p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100/50 border border-blue-200">
              <div class="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center mb-6">
                <Icon name="fa-solid:university" class="w-6 h-6 text-white" />
              </div>
              <div class="text-sm font-bold text-blue-600 uppercase tracking-wider mb-4">Официальный сектор</div>
              <div class="space-y-3">
                <div v-for="partner in grPartners" :key="partner" class="text-slate-800 font-semibold text-sm flex items-center gap-2">
                  <span class="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                  {{ partner }}
                </div>
              </div>
            </div>

            <!-- Technoparks -->
            <div class="p-8 rounded-2xl bg-slate-50 border border-slate-200">
              <div class="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center mb-6">
                <Icon name="fa-solid:industry" class="w-6 h-6 text-white" />
              </div>
              <div class="text-sm font-bold text-slate-500 uppercase tracking-wider mb-4">Технопарки</div>
              <div class="flex flex-wrap gap-2">
                <span v-for="tp in techParks" :key="tp" class="px-3 py-1.5 bg-white border border-slate-200 text-slate-700 text-sm rounded-lg font-medium">
                  {{ tp }}
                </span>
              </div>
            </div>

            <!-- Experience -->
            <div class="p-8 rounded-2xl bg-slate-900 text-white">
              <div class="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center mb-6">
                <Icon name="fa-solid:chart-line" class="w-6 h-6 text-white" />
              </div>
              <div class="text-sm font-bold text-blue-400 uppercase tracking-wider mb-4">Опыт</div>
              <div class="space-y-4">
                <div>
                  <div class="text-3xl font-black text-white">6 лет</div>
                  <div class="text-sm text-slate-400">в системе поддержки предпринимательства Карелии</div>
                </div>
                <div>
                  <div class="text-3xl font-black text-white">40+</div>
                  <div class="text-sm text-slate-400">бизнес-миссий от разведки до закрытых сделок</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Anchor companies -->
          <div class="p-8 rounded-2xl bg-slate-50 border border-slate-200">
            <div class="text-sm font-bold text-slate-500 uppercase tracking-wider mb-6">Якорные предприятия региона</div>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div v-for="company in anchorCompanies" :key="company" class="flex items-center gap-3 text-sm text-slate-700 font-medium">
                <span class="w-2 h-2 bg-blue-600 rounded-full"></span>
                {{ company }}
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- IS THIS FOR YOU? -->
      <section class="py-24 md:py-32 px-4 sm:px-6 bg-slate-50">
        <div class="max-w-7xl mx-auto">
          <div class="text-center mb-16">
            <div class="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full text-blue-600 text-sm font-semibold mb-6">
              Для кого это
            </div>
            <h2 class="text-3xl sm:text-5xl font-black text-slate-900 mb-6">Это для вас?</h2>
            <p class="text-lg text-slate-600 max-w-3xl mx-auto">
              Мы работаем с теми, кто едет в Карелию за результатом — а не за фотографиями с водопадов
            </p>
          </div>

          <div class="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <!-- This is for you -->
            <div class="p-8 rounded-2xl bg-white border border-green-200 shadow-sm">
              <div class="text-lg font-black text-green-700 mb-6 flex items-center gap-3">
                <Icon name="fa-solid:check-circle" class="w-6 h-6" />
                Это для вас, если...
              </div>
              <ul class="space-y-4">
                <li v-for="item in isForYou" :key="item" class="flex items-start gap-3 text-sm text-slate-700">
                  <Icon name="fa-solid:check" class="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                  {{ item }}
                </li>
              </ul>
            </div>

            <!-- This is NOT for you -->
            <div class="p-8 rounded-2xl bg-white border border-slate-200">
              <div class="text-lg font-black text-slate-500 mb-6 flex items-center gap-3">
                <Icon name="fa-solid:times-circle" class="w-6 h-6" />
                Это не для вас, если...
              </div>
              <ul class="space-y-4">
                <li v-for="item in notForYou" :key="item" class="flex items-start gap-3 text-sm text-slate-500">
                  <Icon name="fa-solid:times" class="w-4 h-4 text-slate-400 flex-shrink-0 mt-0.5" />
                  {{ item }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- BUSINESS TASKS -->
      <section class="py-20 px-4 sm:px-6 bg-white">
        <div class="max-w-4xl mx-auto text-center">
          <div class="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full text-blue-600 text-sm font-semibold mb-6">
            Под любую задачу
          </div>
          <h2 class="text-3xl sm:text-4xl font-black text-slate-900 mb-10">Проектируем миссию под вашу цель</h2>
          <div class="flex flex-wrap justify-center gap-3">
            <span v-for="tag in taskTags" :key="tag" 
                  class="px-5 py-2.5 bg-slate-50 border border-slate-200 text-slate-700 rounded-full text-sm font-semibold hover:border-blue-600 hover:text-blue-600 transition-all cursor-default">
              {{ tag }}
            </span>
          </div>
        </div>
      </section>

      <!-- CASES -->
      <section id="cases" class="py-24 md:py-32 px-4 sm:px-6 bg-slate-50">
        <div class="max-w-7xl mx-auto">
          <div class="text-center mb-16">
            <div class="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full text-blue-600 text-sm font-semibold mb-6">
              Результаты
            </div>
            <h2 class="text-3xl sm:text-5xl font-black text-slate-900 mb-6 tracking-tight">
              Кейсы и результаты
            </h2>
            <p class="text-lg text-slate-600 max-w-3xl mx-auto">
              Мы не делаем туры. Мы создаём условия, в которых рождаются сделки
            </p>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div v-for="(caseItem, i) in cases" :key="i" 
                 class="group p-8 rounded-2xl bg-white border border-slate-200 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/5 transition-all">
              <div class="text-sm font-bold text-blue-600 uppercase tracking-wider mb-3">{{ caseItem.client }}</div>
              <div class="text-slate-700 text-sm mb-4">{{ caseItem.task }}</div>
              <div class="text-slate-900 font-bold mb-4 leading-relaxed text-sm">{{ caseItem.text }}</div>
              <div class="text-sm text-green-700 font-bold mb-4">{{ caseItem.result }}</div>
              <div class="pt-4 border-t border-slate-100">
                <p class="text-xs text-slate-500 italic">{{ caseItem.quote }}</p>
                <p class="text-xs text-slate-400 mt-1">{{ caseItem.quoteAuthor }}</p>
              </div>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div v-for="adv in expertAdv" :key="adv" class="flex items-start gap-3 p-4">
              <Icon name="fa-solid:star" class="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <span class="text-slate-700 font-medium text-sm">{{ adv }}</span>
            </div>
          </div>
        </div>
      </section>

      <!-- FAQ -->
      <section class="py-24 md:py-32 px-4 sm:px-6 bg-white">
        <div class="max-w-4xl mx-auto">
          <div class="text-center mb-16">
            <div class="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full text-blue-600 text-sm font-semibold mb-6">
              Вопросы и ответы
            </div>
            <h2 class="text-3xl sm:text-5xl font-black text-slate-900 mb-6">Частые вопросы</h2>
          </div>

          <div class="space-y-4">
            <div v-for="(faq, i) in faqs" :key="i" 
                 class="rounded-2xl border border-slate-200 bg-white overflow-hidden hover:border-blue-300 transition-all">
              <button @click="toggleFaq(i)" class="w-full text-left p-6 flex items-start justify-between gap-4">
                <span class="font-bold text-slate-900 text-base">{{ faq.q }}</span>
                <Icon :name="openFaq === i ? 'fa-solid:chevron-up' : 'fa-solid:chevron-down'" 
                      class="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5 transition-transform" />
              </button>
              <div v-show="openFaq === i" class="px-6 pb-6">
                <p class="text-slate-600 text-sm leading-relaxed">{{ faq.a }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- PROGRAM EXAMPLE -->
      <section class="py-20 md:py-24 px-4 sm:px-6 bg-slate-50">
        <div class="max-w-6xl mx-auto">
          <div class="text-center mb-12">
            <div class="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full text-blue-600 text-sm font-semibold mb-4">
              Пример программы
            </div>
            <h2 class="text-3xl sm:text-4xl font-black text-slate-900 mb-4 tracking-tight">
              Как это выглядит изнутри
            </h2>
            <p class="text-base text-slate-600 max-w-2xl mx-auto">
              Отраслевая миссия · Аквакультура · 4 дня · <span class="text-slate-400">Москва — Петрозаводск — Кондопога — Москва</span>
            </p>
          </div>

          <!-- Day tabs -->
          <div class="flex flex-wrap justify-center gap-2 mb-8">
            <button v-for="(day, i) in programDays" :key="i"
                    @click="activeDay = i"
                    class="px-4 py-2 rounded-lg text-sm font-bold transition-all"
                    :class="activeDay === i ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25' : 'bg-white text-slate-600 border border-slate-200 hover:border-blue-300'">
              День {{ day.num }}
            </button>
          </div>

          <!-- Active day content -->
          <div class="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <!-- Day header -->
            <div class="p-6 border-b border-slate-100 bg-gradient-to-r from-slate-50 to-white">
              <div class="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <div class="text-sm font-bold text-blue-600 uppercase tracking-wider">День {{ programDays[activeDay].num }}</div>
                  <div class="text-xl font-black text-slate-900 mt-1">{{ programDays[activeDay].title }}</div>
                  <div class="text-sm text-slate-500 mt-1">{{ programDays[activeDay].location }}</div>
                </div>
                <div class="flex items-center gap-3 text-sm text-slate-500">
                  <span class="flex items-center gap-1.5">
                    <Icon name="fa-solid:handshake" class="w-4 h-4 text-blue-500" />
                    {{ programDays[activeDay].meetings }} встреч
                  </span>
                  <span class="flex items-center gap-1.5">
                    <Icon name="fa-solid:utensils" class="w-4 h-4 text-orange-500" />
                    {{ programDays[activeDay].meals }} приёма пищи
                  </span>
                </div>
              </div>
            </div>

            <!-- Schedule table -->
            <div class="overflow-x-auto">
              <table class="w-full">
                <thead>
                  <tr class="border-b border-slate-100 bg-slate-50/50">
                    <th class="text-left text-xs font-bold text-slate-400 uppercase tracking-wider px-6 py-3 w-24">Время</th>
                    <th class="text-left text-xs font-bold text-slate-400 uppercase tracking-wider px-6 py-3 w-16"></th>
                    <th class="text-left text-xs font-bold text-slate-400 uppercase tracking-wider px-6 py-3">Событие</th>
                    <th class="text-left text-xs font-bold text-slate-400 uppercase tracking-wider px-6 py-3 w-48 hidden md:table-cell">Детали</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(event, j) in programDays[activeDay].events" :key="j"
                      class="border-b border-slate-50 hover:bg-blue-50/30 transition-colors">
                    <td class="px-6 py-3">
                      <span class="font-mono text-sm font-bold text-blue-600">{{ event.time }}</span>
                    </td>
                    <td class="px-6 py-3">
                      <span class="text-lg">{{ event.icon }}</span>
                    </td>
                    <td class="px-6 py-3">
                      <div class="text-sm font-semibold text-slate-900">{{ event.title }}</div>
                      <div class="text-xs text-slate-500 mt-0.5 md:hidden">{{ event.details }}</div>
                    </td>
                    <td class="px-6 py-3 hidden md:table-cell">
                      <div class="text-xs text-slate-500 leading-relaxed">{{ event.details }}</div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <!-- Day note -->
            <div v-if="programDays[activeDay].note" class="p-4 bg-blue-50 border-t border-blue-100">
              <p class="text-xs text-blue-700 italic leading-relaxed">
                <Icon name="fa-solid:lightbulb" class="w-3 h-3 inline mr-1" />
                {{ programDays[activeDay].note }}
              </p>
            </div>
          </div>

          <!-- Quick stats bar -->
          <div class="mt-8 grid grid-cols-2 md:grid-cols-5 gap-3">
            <div class="p-4 rounded-xl bg-white border border-slate-200 text-center">
              <div class="text-2xl font-black text-blue-600">5</div>
              <div class="text-xs text-slate-500 mt-1">Встреч с ЛПР</div>
            </div>
            <div class="p-4 rounded-xl bg-white border border-slate-200 text-center">
              <div class="text-2xl font-black text-blue-600">2</div>
              <div class="text-xs text-slate-500 mt-1">Выезда на объекты</div>
            </div>
            <div class="p-4 rounded-xl bg-white border border-slate-200 text-center">
              <div class="text-2xl font-black text-blue-600">4</div>
              <div class="text-xs text-slate-500 mt-1">Дня программы</div>
            </div>
            <div class="p-4 rounded-xl bg-white border border-slate-200 text-center">
              <div class="text-2xl font-black text-blue-600">1</div>
              <div class="text-xs text-slate-500 mt-1">Дистрибьютор</div>
            </div>
            <div class="p-4 rounded-xl bg-white border border-slate-200 text-center col-span-2 md:col-span-1">
              <div class="text-2xl font-black text-blue-600">PDF</div>
              <div class="text-xs text-slate-500 mt-1">Протокол + карта</div>
            </div>
          </div>

          <!-- Included / Not included -->
          <div class="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="p-5 rounded-xl bg-green-50 border border-green-200">
              <div class="text-xs font-bold text-green-700 uppercase tracking-wider mb-3 flex items-center gap-2">
                <Icon name="fa-solid:check-circle" class="w-4 h-4" />
                Включено
              </div>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                <div v-for="item in includedItems" :key="item" class="flex items-start gap-2 text-xs text-slate-700">
                  <Icon name="fa-solid:check" class="w-3 h-3 text-green-600 flex-shrink-0 mt-0.5" />
                  {{ item }}
                </div>
              </div>
            </div>
            <div class="p-5 rounded-xl bg-slate-50 border border-slate-200">
              <div class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3 flex items-center gap-2">
                <Icon name="fa-solid:times-circle" class="w-4 h-4" />
                Не включено
              </div>
              <div class="space-y-2">
                <div v-for="item in excludedItems" :key="item" class="flex items-start gap-2 text-xs text-slate-500">
                  <Icon name="fa-solid:times" class="w-3 h-3 text-slate-400 flex-shrink-0 mt-0.5" />
                  {{ item }}
                </div>
              </div>
            </div>
          </div>

          <!-- Quote -->
          <div class="mt-8 p-6 rounded-xl bg-white border border-slate-200">
            <Icon name="fa-solid:quote-left" class="w-6 h-6 text-blue-200 mb-3" />
            <p class="text-sm text-slate-700 italic leading-relaxed mb-3">
              «К концу третьего дня у нас было 5 живых контактов, понимание рынка и предварительная договорённость о пробной поставке. Я ехал разведать — уехал с конкретным планом.»
            </p>
            <p class="text-xs text-slate-500 font-semibold">— участник миссии, производитель рыбных кормов, Москва</p>
          </div>

          <!-- CTA -->
          <div class="mt-8 text-center">
            <p class="text-lg font-bold text-slate-900 mb-4">Хотите такую же программу — под вашу отрасль?</p>
            <a href="#contacts" class="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-600/25 text-sm">
              Обсудить мою миссию →
            </a>
          </div>
        </div>
      </section>

      <!-- CTA / CONTACTS -->
      <section id="contacts" class="py-24 md:py-32 px-4 sm:px-6 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 text-white overflow-hidden relative">
        <!-- Background effects -->
        <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full"></div>
        <div class="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-600/10 blur-[100px] rounded-full"></div>

        <div class="max-w-3xl mx-auto text-center relative z-10">
          <div class="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-blue-400 text-sm font-semibold mb-8">
            Свяжитесь с нами
          </div>

          <h2 class="text-3xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight">
            Обсудим вашу задачу
          </h2>

          <p class="text-slate-400 text-lg mb-12 max-w-xl mx-auto">
            Расскажите о задаче в двух словах — пришлём предварительную программу и расчёт в течение 24 часов. Без давления и обязательств.
          </p>

          <!-- Multi-step form -->
          <div class="max-w-lg mx-auto p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm text-left">
            <!-- Step indicators -->
            <div class="flex items-center gap-2 mb-8">
              <div v-for="s in 3" :key="s" class="flex items-center gap-2">
                <div class="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all"
                     :class="formStep >= s ? 'bg-blue-600 text-white' : 'bg-white/10 text-slate-400'">
                  {{ s }}
                </div>
                <div v-if="s < 3" class="w-8 h-px" :class="formStep > s ? 'bg-blue-600' : 'bg-white/10'"></div>
              </div>
            </div>

            <!-- Step 1: Format -->
            <div v-show="formStep === 1">
              <div class="text-sm font-bold text-slate-300 uppercase tracking-wider mb-4">Выберите формат</div>
              <div class="space-y-3">
                <label v-for="opt in formatOptions" :key="opt.value"
                       class="flex items-center gap-3 p-4 rounded-xl border cursor-pointer transition-all"
                       :class="formFormat === opt.value ? 'border-blue-500 bg-blue-600/10' : 'border-white/10 bg-white/5 hover:border-white/20'">
                  <input type="radio" name="format" :value="opt.value" v-model="formFormat" class="sr-only" />
                  <div class="w-4 h-4 rounded-full border-2 flex items-center justify-center flex-shrink-0"
                       :class="formFormat === opt.value ? 'border-blue-500' : 'border-white/30'">
                    <div v-if="formFormat === opt.value" class="w-2 h-2 rounded-full bg-blue-500"></div>
                  </div>
                  <span class="text-sm font-medium">{{ opt.label }}</span>
                </label>
              </div>
              <button @click="formStep = 2" class="w-full mt-6 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all">
                Далее →
              </button>
            </div>

            <!-- Step 2: Task -->
            <div v-show="formStep === 2">
              <div class="text-sm font-bold text-slate-300 uppercase tracking-wider mb-4">Ваша задача</div>
              <div class="space-y-4">
                <div>
                  <label class="text-sm text-slate-400 mb-1 block">Ваша отрасль *</label>
                  <input v-model="formIndustry" type="text" placeholder="Например: производство, IT, логистика"
                         class="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder-slate-400 outline-none focus:border-blue-500 transition-all text-sm" />
                </div>
                <div>
                  <label class="text-sm text-slate-400 mb-1 block">Опишите задачу кратко</label>
                  <textarea v-model="formTask" rows="3" placeholder="Что хотите получить от поездки?"
                            class="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder-slate-400 outline-none focus:border-blue-500 transition-all text-sm resize-none"></textarea>
                </div>
                <div>
                  <label class="text-sm text-slate-400 mb-1 block">Примерные даты или период</label>
                  <input v-model="formDates" type="text" placeholder="Например: март 2026, или «гибко»"
                         class="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder-slate-400 outline-none focus:border-blue-500 transition-all text-sm" />
                </div>
              </div>
              <div class="flex gap-3 mt-6">
                <button @click="formStep = 1" class="flex-1 py-4 bg-white/10 hover:bg-white/15 text-white font-bold rounded-xl transition-all">
                  ← Назад
                </button>
                <button @click="formStep = 3" class="flex-1 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all">
                  Далее →
                </button>
              </div>
            </div>

            <!-- Step 3: Contacts -->
            <div v-show="formStep === 3">
              <div class="text-sm font-bold text-slate-300 uppercase tracking-wider mb-4">Контакты</div>
              <div class="space-y-4">
                <div>
                  <label class="text-sm text-slate-400 mb-1 block">Ваше имя *</label>
                  <input v-model="formName" type="text" placeholder="Как к вам обращаться"
                         class="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder-slate-400 outline-none focus:border-blue-500 transition-all text-sm" />
                </div>
                <div>
                  <label class="text-sm text-slate-400 mb-1 block">Telegram или телефон *</label>
                  <input v-model="formContact" type="text" placeholder="@username или +7..."
                         class="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder-slate-400 outline-none focus:border-blue-500 transition-all text-sm" />
                </div>
                <div>
                  <label class="text-sm text-slate-400 mb-1 block">Email</label>
                  <input v-model="formEmail" type="email" placeholder="Необязательно"
                         class="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder-slate-400 outline-none focus:border-blue-500 transition-all text-sm" />
                </div>
              </div>
              <div class="flex gap-3 mt-6">
                <button @click="formStep = 2" class="flex-1 py-4 bg-white/10 hover:bg-white/15 text-white font-bold rounded-xl transition-all">
                  ← Назад
                </button>
                <button @click="submitForm" :disabled="formSubmitting" class="flex-1 py-4 bg-blue-600 hover:bg-blue-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-600/25">
                  {{ formSubmitting ? 'Отправка...' : 'Получить программу и расчёт →' }}
                </button>
              </div>
            </div>

            <!-- Success message -->
            <div v-show="formSubmitted" class="text-center py-8">
              <Icon name="fa-solid:check-circle" class="w-16 h-16 text-green-500 mx-auto mb-4" />
              <div class="text-xl font-bold mb-2">Заявка отправлена!</div>
              <p class="text-slate-400 text-sm">Отвечу лично в течение нескольких часов. Без спама и автоответов.</p>
            </div>
          </div>

          <p class="mt-6 text-sm text-slate-500 italic">
            Отвечаю лично в течение нескольких часов. Без спама и автоответов.<br />
            — Артём Селифанов
          </p>

          <p v-if="formError" class="mt-4 text-sm text-red-400 font-medium">{{ formError }}</p>

          <!-- Contact info -->
          <div class="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
            <div class="p-4">
              <div class="font-bold text-white mb-2 flex items-center justify-center gap-2">
                <Icon name="fa-solid:map-marker-alt" class="w-4 h-4 text-blue-400" />
                Локация
              </div>
              <div class="text-slate-400">г. Петрозаводск, Республика Карелия</div>
            </div>
            <div class="p-4">
              <div class="font-bold text-white mb-2 flex items-center justify-center gap-2">
                <Icon name="fa-solid:envelope" class="w-4 h-4 text-blue-400" />
                Email
              </div>
              <a href="mailto:a9535487323@yandex.ru" class="text-slate-400 hover:text-blue-400 transition-colors">a9535487323@yandex.ru</a>
            </div>
            <div class="p-4">
              <div class="font-bold text-white mb-2 flex items-center justify-center gap-2">
                <Icon name="fa-brands:telegram" class="w-4 h-4 text-blue-400" />
                Telegram
              </div>
              <a href="https://t.me/artemslifanov" target="_blank" class="text-slate-400 hover:text-blue-400 transition-colors">@artemslifanov</a>
            </div>
          </div>

          <!-- Quick contact buttons -->
          <div class="mt-12 flex flex-wrap justify-center gap-4">
            <a href="https://t.me/artemslifanov" target="_blank"
               class="px-6 py-3 rounded-xl bg-blue-600/20 border border-blue-500/30 text-blue-400 font-semibold text-sm hover:bg-blue-600/30 transition-all flex items-center gap-2">
              <Icon name="fa-brands:telegram" class="w-4 h-4" />
              Написать в Telegram
            </a>
            <a href="mailto:a9535487323@yandex.ru"
               class="px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-slate-300 font-semibold text-sm hover:bg-white/10 transition-all flex items-center gap-2">
              <Icon name="fa-solid:envelope" class="w-4 h-4" />
              Написать на Email
            </a>
            <a href="https://max.ru/u/f9LHodD0cOLO_FSLoMnfL87zUzWaeDrIUVzSccI1rSSfL24Xr81W37H7wmk" target="_blank"
               class="px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-slate-300 font-semibold text-sm hover:bg-white/10 transition-all flex items-center gap-2">
              <Icon name="fa-solid:comment-dots" class="w-4 h-4" />
              Написать в MAX
            </a>
          </div>
        </div>
      </section>
    </main>

    <footer class="py-12 bg-slate-950 text-slate-500 text-center border-t border-slate-900">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-xs uppercase tracking-widest font-bold mb-2">
          © 2026 MICE KARELIA. Все права защищены.
        </div>
        <div class="text-xs text-slate-600">
          Организатор: Артём Селифанов · г. Петрозаводск, Республика Карелия
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { submitContactFormWithNotification } from '~/composables/useTelegramNotification'

const formSubmitting = ref(false)
const formError = ref('')

useHead({
  title: 'Бизнес-миссии в Карелию | MICE Karelia — Артём Селифанов',
  meta: [
    { name: 'description', content: 'Бизнес-миссии в Карелию под ключ. Прямой доступ к предприятиям, власти и инвестпроектам. 6 лет опыта, 40+ организованных миссий. Программа и расчёт за 24 часа.' },
    { property: 'og:title', content: 'Бизнес-миссии в Карелию | MICE Karelia' },
    { property: 'og:description', content: 'Бизнес-миссии в Карелию под ключ. Прямой доступ к предприятиям, власти и инвестпроектам. 6 лет опыта, 40+ организованных миссий.' },
  ]
})

const isMenuOpen = ref(false)
const currentSlide = ref(0)
const slides = [
  '/images/hero/IMG_7319.webp',
  '/images/hero/IMG_7320.webp',
  '/images/hero/IMG_7321.webp'
]

onMounted(() => {
  setInterval(() => {
    currentSlide.value = (currentSlide.value + 1) % slides.length
  }, 5000)
})

const kpis = [
  { val: '107+ млрд ₽', label: 'Инвестиций в регион ежегодно' },
  { val: '40%', label: 'ВРП — промышленность' },
  { val: '>50%', label: 'Форели России производится здесь' },
  { val: 'Топ-17', label: 'Инвестклимат РФ (RAEX)' },
]

const advantages = [
  { metric: '~40% ВРП', title: 'Промышленность', desc: 'ЛПК, горнодобывающий сектор, машиностроение. Реальная экономика, не сервисный пузырь', icon: 'fa-solid:industry', image: '/images/why%20Karelia/wrp.webp' },
  { metric: 'до 20%', title: 'Бумаги России', desc: 'Модернизированные ЦБК с глубокой переработкой. Сегежский и Кондопожский — якоря отрасли', icon: 'fa-solid:scroll', image: '/images/why%20Karelia/paper.webp' },
  { metric: '>50%', title: 'Садковой форели', desc: 'Абсолютный лидер аквакультуры России. Растущий рынок с господдержкой и потенциалом экспорта', icon: 'fa-solid:fish', image: '/images/why%20Karelia/trout.webp' },
  { metric: '0%', title: 'Налог на прибыль', desc: 'Нулевой налог на прибыль первые 5 лет. Страховые взносы 7,5%. Таможня без НДС для резидентов ОЭЗ', icon: 'fa-solid:percent', image: '/images/why%20Karelia/tax.webp' },
]

const valueList = [
  'Встречи с собственниками и директорами — без посредников и ассистентов',
  'Переговоры с партнёрами и поставщиками, отобранными под вашу отрасль',
  'Доступ к инвестиционным проектам и промышленным паркам региона',
  'GR-сопровождение: министерства, Корпорация развития, институты поддержки',
  'Полная логистика, размещение и отчётность для центров «Мой бизнес»'
]

const steps = [
  { title: 'Брифинг', desc: 'Вы рассказываете о целях. Мы задаём 5 ключевых вопросов, чтобы понять, кто нужен и зачем' },
  { title: 'Программа под задачу', desc: 'Формируем маршрут, список встреч и GR-сессии — согласовываем с вами до старта' },
  { title: 'Реализация', desc: 'Полное сопровождение: трансфер, размещение, модерация переговоров, протоколы встреч' },
  { title: 'Результат', desc: 'Конкретные договорённости, дорожная карта и отчёт для вашей управленческой команды' },
]

const pricingPlans = [
  {
    name: 'Базовый вход',
    duration: '3 дня',
    price: 'от 70 000',
    highlight: false,
    features: [
      'Обзор экономики и инвестклимата региона',
      'Посещение 1–2 профильных предприятий',
      'Встречи с представителями отрасли',
      'Нетворкинг-сессия с локальными предпринимателями'
    ],
    result: 'Понимание рынка, первые живые контакты и ориентир для следующего шага'
  },
  {
    name: 'Отраслевая миссия',
    duration: '3–5 дней',
    price: 'от 110 000',
    highlight: true,
    features: [
      'Подбор предприятий и партнёров под вашу отраслевую задачу',
      '5–7 B2B-встреч с собственниками и директорами',
      'GR-сессия с профильным министерством или Корпорацией развития',
      'Расширенный нетворкинг в закрытом формате',
      'Протокол встреч и дорожная карта'
    ],
    result: 'Конкретные партнёры, зафиксированные договорённости и дорожная карта входа в регион'
  },
  {
    name: 'Инвестиционная VIP',
    duration: '7+ дней',
    price: 'от 250 000',
    highlight: false,
    features: [
      'Погружение во все ключевые кластеры региона',
      'Встречи с первыми лицами предприятий и институтов',
      'Индивидуальные переговоры под инвестиционную задачу',
      'Разработка стратегии входа с финансовой моделью',
      'Юридическое и GR-сопровождение на старте',
      'Постмиссионное сопровождение (1 месяц)'
    ],
    result: 'Готовая модель запуска: партнёры, юрструктура, план первых 90 дней в регионе'
  }
]

const environments = [
  { category: 'Деловая часть', places: 'Космос Петрозаводск / Питер Инн', desc: 'Конференц-залы на 10–200 человек, переговорные комнаты, высокоскоростной Wi-Fi, трансфер из аэропорта', icon: 'fa-solid:briefcase', image: '/images/why%20Karelia/business-hotel.webp' },
  { category: 'Нетворкинг', places: 'Карьяла Парк / Ладожский Фьорд', desc: 'Выездные стратсессии, закрытые форматы для команд, командообразование на природе', icon: 'fa-solid:users', image: '/images/why%20Karelia/networking.webp' },
  { category: 'Уникальный опыт', places: 'Глэмпинг 4 Стихии / Рускеала', desc: 'Гастро-ужины с карельской кухней, неформальные встречи у воды, премиальный глэмпинг', icon: 'fa-solid:mountain-sun', image: '/images/why%20Karelia/glamping.webp' },
]

const grPartners = ['Минэкономразвития РК', 'Корпорация развития РК', 'Центр «Мой бизнес»']
const techParks = ['Надвоицы', 'Карельские продукты', 'Южная промзона', 'Биотех']
const anchorCompanies = [
  'Сегежский ЦБК', 
  'Кондопожский ЦБК', 
  'АО «Карельский окатыш»', 
  'ИП Федоренко (Кондопога)', 
  'ООО «Каламар» (Костомукша)', 
  'ГК «Интеркамень»'
]

const isForYou = [
  'Вы рассматриваете Карелию как рынок сбыта, площадку для производства или объект инвестиций',
  'Вам нужны живые переговоры с собственниками, а не презентации от менеджеров',
  'Вы или ваш представитель готовы принимать решения прямо на месте',
  'Вы хотите понять регион изнутри — с реальными цифрами и без маркетинга',
  'Вы ищете отраслевые партнёрства, поставщиков или локацию для проекта'
]

const notForYou = [
  'Вы ищете туристическую поездку с культурной программой',
  'Вам нужна красивая папка с буклетами о регионе',
  'Вы не готовы к реальным переговорам и конкретным договорённостям',
  'У вас нет мандата принимать решения или представлять компанию'
]

const taskTags = [
  'найти партнёров', 'выйти на регион', 'изучить отрасль', 
  'запустить производство', 'провести стратегическую сессию', 
  'получить субсидии', 'организовать корпоративный MICE'
]

const expertAdv = [
  'Прямой доступ к ЛПР региона',
  'Понимание отраслей, тарифов и господдержки',
  'Организация под ключ + сопровождение',
  'Отчётность для KPI центров «Мой бизнес»'
]

const cases = [
  { 
    client: 'Производитель промышленного оборудования, Москва', 
    task: 'Задача: найти OEM-партнёра в сегменте ЛПК.',
    text: 'За 4 дня: 3 встречи с директорами заводов, 2 тура по производствам, GR-сессия с Минпромом РК.',
    result: 'Итог: подписан протокол намерений, сделка на финальной стадии.',
    quote: '«За 4 дня мы прошли путь, который самостоятельно занял бы год переписки»',
    quoteAuthor: '— руководитель направления развития'
  },
  { 
    client: 'Частный инвестиционный фонд', 
    task: 'Задача: оценить проект горнодобычи перед входом.',
    text: 'За 3 дня: выезд на объект, встреча с собственниками, GR-сессия с Корпорацией развития РК.',
    result: 'Итог: запущен независимый аудит проекта. Объём сделки — 1,2 млрд ₽.',
    quote: '«Мы увидели всё своими глазами и поняли, что проект реален»',
    quoteAuthor: '— партнёр фонда'
  },
  { 
    client: 'Корпоративный MICE — федеральная компания, 28 участников', 
    task: 'Задача: выездная стратегическая сессия + командообразование.',
    text: 'За 5 дней: деловая программа в Петрозаводске, стратсессия в Karjala Park, тимбилдинг на Ладоге.',
    result: 'Итог: утверждена дорожная карта на 2025 год. NPS участников — 92%.',
    quote: '«Природа Карелии сделала то, что не удалось офисным переговорам»',
    quoteAuthor: '— HR-директор'
  },
]

const faqs = [
  {
    q: 'Нужно ли заранее знать, с кем мы хотим встретиться?',
    a: 'Нет. Именно за это вы и платите. Мы сами проектируем список контактов под вашу задачу: собираем информацию об отрасли, выходим на нужных людей и согласовываем встречи заранее. Вы приезжаете к уже подтверждённой программе.'
  },
  {
    q: 'Что если мы группа 10+ человек?',
    a: 'Для корпоративных групп (MICE) мы готовим отдельную программу. Стоимость — от 1,5 млн ₽ за группу, зависит от состава, формата и задач. Напишите нам — пришлём коммерческое предложение в течение 24 часов.'
  },
  {
    q: 'Как быстро готовится программа?',
    a: 'Предварительную программу и расчёт — пришлём в течение 24 часов после брифинга. Полную согласованную программу со встречами — в течение 5–7 рабочих дней.'
  },
  {
    q: 'Есть ли гарантии, что встречи состоятся?',
    a: 'Мы согласовываем все встречи письменно до старта миссии. Если встреча по независящим от нас причинам срывается — заменяем равноценной альтернативой. Это наша репутация, и мы её защищаем.'
  },
  {
    q: 'Подходит ли это для малого бизнеса или только для крупных компаний?',
    a: 'Подходит для любых предпринимателей, готовых к серьёзным переговорам. Среди участников наших миссий — от ИП до федеральных корпораций. Главное — конкретная задача и готовность двигаться к результату.'
  }
]

const includedItems = [
  'Билеты на поезд туда и обратно (купе / СВ на выбор)',
  'Проживание 3 ночи · Cosmos Hotel Petrozavodsk 4★',
  'Все завтраки',
  '2 деловых обеда и 2 ужина (включая неформальные)',
  'Все трансферы в рамках программы (минивэн бизнес-класса)',
  'Организация и сопровождение всех 5 встреч',
  'Личное сопровождение Артёма Селифанова',
  'Протокол встреч и контакты (PDF после миссии)',
  'Дорожная карта следующих шагов',
  'Отчётность для центров «Мой бизнес» (при необходимости)',
]

const excludedItems = [
  'Авиабилеты (если вы предпочитаете самолёт)',
  'Личные расходы и мини-бар',
  'Дополнительные экскурсии сверх программы',
]

const activeDay = ref(0)

const programDays = [
  {
    num: '0 · Отправление',
    title: 'Отправление',
    location: 'Москва, Ленинградский вокзал',
    meetings: 0,
    meals: 0,
    note: 'Поезд удобен: не нужно приезжать в аэропорт за 2 часа. Ложитесь спать в Москве — просыпаетесь в Карелии.',
    events: [
      { time: '21:35', icon: '🚆', title: 'Посадка на поезд № 018А «Карелия»', details: 'Вагон СВ или купе — в зависимости от предпочтений. Билеты включены в стоимость миссии' },
    ]
  },
  {
    num: '1 · Прибытие',
    title: 'Прибытие и погружение',
    location: 'Петрозаводск',
    meetings: 2,
    meals: 2,
    note: null,
    events: [
      { time: '07:10', icon: '🚐', title: 'Прибытие на вокзал Петрозаводск', details: 'Встреча с сопровождающим на перроне — табличка с именем' },
      { time: '07:45', icon: '🏨', title: 'Заселение · Cosmos Hotel Petrozavodsk 4★', details: 'Номер готов с утра. Завтрак включён' },
      { time: '09:30', icon: '🤝', title: 'Брифинг с организатором', details: 'Артём Селифанов лично: финальная сверка программы, цели на каждую встречу' },
      { time: '11:00', icon: '🤝', title: 'Встреча 1 · Минсельхоз и рыбхоз РК', details: 'Начальник отдела аквакультуры: господдержка, открытые участки, субсидии' },
      { time: '13:00', icon: '🍽', title: 'Обед · Ресторан «Карельская горница»', details: 'Карельская кухня + нетворкинг с приглашённым местным предпринимателем' },
      { time: '15:00', icon: '🤝', title: 'Встреча 2 · Корпорация развития РК', details: 'Инвестиционная карта, льготы для резидентов, практика входа' },
      { time: '19:30', icon: '🍽', title: 'Неформальный ужин', details: 'Встреча с двумя местными форелеводами в ресторане с видом на Онежское озеро' },
    ]
  },
  {
    num: '2 · Объекты',
    title: 'Выезд на объекты',
    location: 'Петрозаводск → Кондопога → Медвежьегорский район',
    meetings: 0,
    meals: 2,
    note: null,
    events: [
      { time: '09:00', icon: '🚐', title: 'Выезд на объект 1 · Форелевое хозяйство', details: '~60 км от Петрозаводска, Кондопожский район, трансфер на минивэне' },
      { time: '10:00', icon: '🏭', title: 'Тур по садковому хозяйству', details: 'Осмотр садков, кормовой техники, системы мониторинга. Разговор с собственником о логистике кормов' },
      { time: '14:00', icon: '🍽', title: 'Обед на месте · Полевой формат', details: 'Уха на берегу, приготовленная на костре хозяевами' },
      { time: '15:00', icon: '🏭', title: 'Тур по объекту 2 · Крупное садковое хозяйство', details: 'Один из топ-5 производителей форели в России. Переговоры о возможном партнёрстве' },
      { time: '20:00', icon: '🍽', title: 'Рабочий ужин с организатором', details: 'Разбор дня: что услышали, какие сигналы важны, корректировка стратегии' },
    ]
  },
  {
    num: '3 · Переговоры',
    title: 'Переговоры и стратегия',
    location: 'Петрозаводск',
    meetings: 3,
    meals: 1,
    note: null,
    events: [
      { time: '09:30', icon: '🤝', title: 'Встреча 3 · Ассоциация форелеводов Карелии', details: 'Главные игроки рынка, консолидированный запрос отрасли на корма' },
      { time: '11:30', icon: '☕', title: 'Рабочая пауза · Кофе-пауза в коворкинге', details: 'Время на звонки и внутренние согласования' },
      { time: '14:30', icon: '🤝', title: 'Встреча 4 · Технопарк «Надвоицы»', details: 'Площадки для локализации производства, готовая инфраструктура, условия аренды' },
      { time: '16:30', icon: '🤝', title: 'Встреча 5 · Потенциальный дистрибьютор', details: 'Встреча организована по итогам неформального ужина. Обсуждение схемы дистрибуции' },
      { time: '20:00', icon: '🍽', title: 'Завершающий ужин', details: 'Подведение итогов: договорённости, следующие шаги, кто за что отвечает' },
    ]
  },
  {
    num: '4 · Отъезд',
    title: 'Отъезд',
    location: 'Петрозаводск → Москва',
    meetings: 1,
    meals: 0,
    note: null,
    events: [
      { time: '09:30', icon: '📄', title: 'Финальная встреча с организатором', details: 'Передача протокола всех встреч (PDF). Контакты всех участников. Дорожная карта на 30 дней' },
      { time: '13:30', icon: '🚐', title: 'Трансфер на вокзал', details: 'Поздний чекаут согласован заранее' },
      { time: '14:05', icon: '🚆', title: 'Отправление поезда № 017А', details: 'Петрозаводск — Москва' },
      { time: '23:00', icon: '🏁', title: 'Прибытие на Ленинградский вокзал', details: 'Москва' },
    ]
  },
]

const openFaq = ref(null)
function toggleFaq(i) {
  openFaq.value = openFaq.value === i ? null : i
}

// Form state
const formStep = ref(1)
const formFormat = ref('industry')
const formIndustry = ref('')
const formTask = ref('')
const formDates = ref('')
const formName = ref('')
const formContact = ref('')
const formEmail = ref('')
const formSubmitted = ref(false)

const formatOptions = [
  { value: 'basic', label: 'Базовый вход (3 дня, от 70 000 ₽/чел)' },
  { value: 'industry', label: 'Отраслевая миссия (3–5 дней, от 110 000 ₽/чел)' },
  { value: 'vip', label: 'Инвестиционная VIP (7+ дней, от 250 000 ₽/чел)' },
  { value: 'mice', label: 'Корпоративный MICE (группа от 10 чел)' },
  { value: 'unknown', label: 'Ещё не знаю — помогите выбрать' }
]

async function submitForm() {
  if (!formName.value || !formContact.value) {
    formError.value = 'Пожалуйста, заполните имя и контакт'
    return
  }

  formSubmitting.value = true
  formError.value = ''

  try {
    const result = await submitContactFormWithNotification({
      name: formName.value,
      phone: formContact.value,
      email: formEmail.value || '',
      telegram: formContact.value.includes('@') ? formContact.value : '',
      service: 'MICE — ' + formatOptions.find(o => o.value === formFormat.value)?.label || 'MICE',
      source: 'mice-page',
      task: formTask.value,
      industry: formIndustry.value,
      dates: formDates.value,
    })

    if (result.success) {
      formSubmitted.value = true
    } else {
      formError.value = 'Произошла ошибка. Напишите мне напрямую в Telegram'
    }
  } catch (error) {
    formError.value = 'Произошла ошибка. Напишите мне напрямую в Telegram'
  } finally {
    formSubmitting.value = false
  }
}
</script>
