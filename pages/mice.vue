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
        </nav>
        <div class="md:hidden">
          <button @click="isMenuOpen = !isMenuOpen" class="p-2">
            <Icon name="fa-solid:bars" class="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>

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
              <div class="inline-flex items-center gap-2 px-4 py-2 bg-blue-600/20 border border-blue-500/30 rounded-full text-blue-400 text-sm font-medium mb-8">
                <span class="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
                Бизнес-миссии под ключ
              </div>

              <h1 class="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-6">
                Карелия —<br />
                <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500">территория роста</span>
              </h1>

              <p class="text-lg text-slate-400 leading-relaxed mb-10 max-w-lg">
                Организуем деловые поездки с прямым доступом к предприятиям, власти и инвестпроектам. Не тур — бизнес-инструмент.
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
              <div class="flex flex-wrap gap-6 text-sm text-slate-500">
                <div class="flex items-center gap-2">
                  <Icon name="fa-solid:check" class="w-4 h-4 text-green-500" />
                  <span>6 лет опыта</span>
                </div>
                <div class="flex items-center gap-2">
                  <Icon name="fa-solid:check" class="w-4 h-4 text-green-500" />
                  <span>40+ миссий</span>
                </div>
                <div class="flex items-center gap-2">
                  <Icon name="fa-solid:check" class="w-4 h-4 text-green-500" />
                  <span>Прямой доступ к ЛПР</span>
                </div>
              </div>
            </div>

            <!-- KPI Cards -->
            <div class="grid grid-cols-2 gap-4">
              <div v-for="(kpi, i) in kpis" :key="i" 
                   class="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/30 hover:bg-white/10 transition-all backdrop-blur-sm">
                <div class="text-3xl sm:text-4xl font-black text-white mb-2 group-hover:text-blue-400 transition-colors">{{ kpi.val }}</div>
                <div class="text-sm text-slate-400 font-medium">{{ kpi.label }}</div>
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
            <p class="text-lg text-slate-600 max-w-2xl mx-auto">
              Индустриальный регион Северо-Запада с прозрачными льготами и работающей инфраструктурой
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
                <p class="text-base font-medium italic leading-relaxed">
                  «Результат — конкретные договорённости и точки роста. Стоимость миссии кратно ниже стоимости ошибки при выходе в регион.»
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
            <p class="text-lg text-slate-600 max-w-2xl mx-auto">
              Прозрачная логика. Оплата за результат доступа, а не за «дни проживания»
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
                <div v-for="feature in plan.features" :key="feature" class="flex items-center gap-3 text-sm text-slate-600">
                  <Icon name="fa-solid:check" class="w-4 h-4 text-blue-600 flex-shrink-0" />
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

          <p class="text-center text-slate-500 text-sm mt-12 italic">
            Итоговая стоимость формируется индивидуально. Для корпоративных групп (MICE) — от 1,5 млн ₽.
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
            <h2 class="text-3xl sm:text-5xl font-black mb-6">Подбираем среду под задачи бизнеса</h2>
            <p class="text-slate-400 text-lg max-w-2xl mx-auto">Окружение, которое способствует принятию решений</p>
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
                «Люди принимают решения не в переговорных, а после них.»
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
              Ваш канал к власти и институтам развития
            </h2>
            <p class="text-lg text-slate-600 max-w-2xl mx-auto">
              Вы не ищете контакты — вы сразу работаете с ними
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
                  <div class="text-sm text-slate-400">в системе поддержки предпринимательства</div>
                </div>
                <div>
                  <div class="text-3xl font-black text-white">40+</div>
                  <div class="text-sm text-slate-400">организованных миссий</div>
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

      <!-- BUSINESS TASKS -->
      <section class="py-20 px-4 sm:px-6 bg-slate-50">
        <div class="max-w-4xl mx-auto text-center">
          <div class="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full text-blue-600 text-sm font-semibold mb-6">
            Под любую задачу
          </div>
          <h2 class="text-3xl sm:text-4xl font-black text-slate-900 mb-10">Проектируем миссию под вашу цель</h2>
          <div class="flex flex-wrap justify-center gap-3">
            <span v-for="tag in taskTags" :key="tag" 
                  class="px-5 py-2.5 bg-white border border-slate-200 text-slate-700 rounded-full text-sm font-semibold hover:border-blue-600 hover:text-blue-600 transition-all cursor-default">
              {{ tag }}
            </span>
          </div>
        </div>
      </section>

      <!-- CASES -->
      <section id="cases" class="py-24 md:py-32 px-4 sm:px-6 bg-white">
        <div class="max-w-7xl mx-auto">
          <div class="text-center mb-16">
            <div class="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full text-blue-600 text-sm font-semibold mb-6">
              Результаты
            </div>
            <h2 class="text-3xl sm:text-5xl font-black text-slate-900 mb-6 tracking-tight">
              Кейсы и результаты
            </h2>
            <p class="text-lg text-slate-600 max-w-2xl mx-auto">
              Мы не делаем туры. Мы создаём условия для сделок.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div v-for="(caseItem, i) in cases" :key="i" 
                 class="group p-8 rounded-2xl bg-white border border-slate-200 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/5 transition-all">
              <div class="text-sm font-bold text-blue-600 uppercase tracking-wider mb-4">{{ caseItem.client }}</div>
              <div class="text-slate-900 font-bold mb-6 leading-relaxed">{{ caseItem.text }}</div>
              <div class="flex items-center gap-2 pt-4 border-t border-slate-100">
                <Icon name="fa-solid:chart-line" class="w-4 h-4 text-green-600" />
                <span class="text-sm font-bold text-green-600">{{ caseItem.result }}</span>
              </div>
            </div>
          </div>

          <div class="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div v-for="adv in expertAdv" :key="adv" class="flex items-start gap-3 p-4">
              <Icon name="fa-solid:star" class="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <span class="text-slate-700 font-medium text-sm">{{ adv }}</span>
            </div>
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
            Организуем бизнес-миссию,<br />
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">которая даст результат</span>
          </h2>

          <p class="text-slate-400 text-lg mb-12 max-w-xl mx-auto">
            Пришлём программу и расчёт под вашу отрасль в течение 24 часов
          </p>

          <div class="max-w-md mx-auto p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
              <input type="text" placeholder="Имя / Компания" class="px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder-slate-400 outline-none focus:border-blue-500 transition-all text-sm" />
              <input type="text" placeholder="Email / Telegram" class="px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder-slate-400 outline-none focus:border-blue-500 transition-all text-sm" />
            </div>
            <button class="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-600/25">
              Получить программу
            </button>
          </div>

          <div class="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
            <div class="p-4">
              <div class="font-bold text-white mb-2 flex items-center justify-center gap-2">
                <Icon name="fa-solid:location-dot" class="w-4 h-4 text-blue-400" />
                Локация
              </div>
              <div class="text-slate-400">г. Петрозаводск, Республика Карелия</div>
            </div>
            <div class="p-4">
              <div class="font-bold text-white mb-2 flex items-center justify-center gap-2">
                <Icon name="fa-solid:envelope" class="w-4 h-4 text-blue-400" />
                Email
              </div>
              <div class="text-slate-400">your@email.ru</div>
            </div>
            <div class="p-4">
              <div class="font-bold text-white mb-2 flex items-center justify-center gap-2">
                <Icon name="fa-brands:telegram" class="w-4 h-4 text-blue-400" />
                Telegram
              </div>
              <div class="text-slate-400">@your_handle</div>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer class="py-12 bg-slate-950 text-slate-500 text-center border-t border-slate-900">
      <div class="max-w-7xl mx-auto px-4 text-xs uppercase tracking-widest font-bold">
        © 2026 MICE KARELIA. Все права защищены.
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

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
  { val: '107+ млрд ₽', label: 'Инвестиций в год' },
  { val: '40%', label: 'ВРП — промышленность' },
  { val: '>50%', label: 'Форели России' },
  { val: 'Топ-17', label: 'Инвестклимат РФ' },
]

const advantages = [
  { metric: '~40% ВРП', title: 'Промышленность', desc: 'ЛПК, горнопром, машиностроение — реальный сектор экономики', icon: 'fa-solid:industry', image: '/images/why%20Karelia/wrp.webp' },
  { metric: 'до 20%', title: 'Бумаги России', desc: 'Модернизированные ЦБК, глубокая переработка сырья', icon: 'fa-solid:scroll', image: '/images/why%20Karelia/paper.webp' },
  { metric: '>50%', title: 'Садковой форели', desc: 'Лидер аквакультуры, локализация кормов', icon: 'fa-solid:fish', image: '/images/why%20Karelia/trout.webp' },
  { metric: '0%', title: 'Налог на прибыль', desc: 'Льгота 5 лет + страховые 7,5% + таможня без НДС', icon: 'fa-solid:percent', image: '/images/why%20Karelia/tax.webp' },
]

const valueList = [
  'Встречи с собственниками и директорами заводов',
  'Переговоры с потенциальными партнёрами и поставщиками',
  'Доступ к инвестиционным проектам и промпаркам',
  'GR-сопровождение (министерства, Корпорация развития)',
  'Полная логистика, размещение и отчётность для центров «Мой бизнес»'
]

const steps = [
  { title: 'Брифинг', desc: 'Определяем ваши бизнес-цели и задачи' },
  { title: 'Подбор программы', desc: 'Формируем маршрут, встречи, GR-сессии' },
  { title: 'Реализация', desc: 'Полное сопровождение на месте' },
  { title: 'Результат', desc: 'Конкретные договорённости и дорожная карта' },
]

const pricingPlans = [
  {
    name: 'Базовый вход',
    duration: '3 дня',
    price: 'от 70 000',
    highlight: false,
    features: ['Обзор экономики региона', '1–2 предприятия', 'Базовые встречи', 'Нетворкинг-сессия'],
    result: 'Понимание рынка + первые контакты'
  },
  {
    name: 'Отраслевая миссия',
    duration: '3–5 дней',
    price: 'от 110 000',
    highlight: true,
    features: ['Подбор заводов под задачу', '5–7 B2B-встреч', 'GR-сессия с властью', 'Расширенный нетворкинг'],
    result: 'Конкретные партнёры + дорожная карта'
  },
  {
    name: 'Инвестиционная VIP',
    duration: '7+ дней',
    price: 'от 250 000',
    highlight: false,
    features: ['Все кластеры региона', 'Встречи с руководством', 'Стратегия входа', 'Индивидуальные переговоры'],
    result: 'Готовая модель запуска в регионе'
  }
]

const environments = [
  { category: 'Деловая часть', places: 'Cosmos Petrozavodsk / Piter Inn', desc: 'Конференц-залы, переговорные, Wi-Fi, трансфер', icon: 'fa-solid:briefcase', image: '/images/why%20Karelia/business-hotel.webp' },
  { category: 'Нетворкинг', places: 'Karjala Park / Ladoga Fjord', desc: 'Стратегические сессии, выезды, закрытые форматы', icon: 'fa-solid:users', image: '/images/why%20Karelia/networking.webp' },
  { category: 'Уникальный опыт', places: 'WelT Glamping / Рускеала', desc: 'Гастро-ужины, неформальные встречи, премиальный комфорт', icon: 'fa-solid:mountain-sun', image: '/images/why%20Karelia/glamping.webp' },
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
  { client: 'Производитель оборудования', text: '3 встречи с заводами, подписан протокол намерений.', result: 'Сделка в процессе' },
  { client: 'Инвестфонд', text: 'Выезд на карьер, GR-встреча, запущен аудит проекта.', result: 'Объём 1.2 млрд ₽' },
  { client: 'Корпорация (28 чел.)', text: 'Стратсессия + тимбилдинг, утверждена дорожная карта.', result: 'NPS 92%' },
]
</script>
