<template>
  <section id="approach" class="py-16 md:py-24 lg:py-32 px-4 sm:px-6 border-t border-gray-100 bg-gray-50">
    <div class="max-w-7xl mx-auto">
      <!-- Заголовок секции -->
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
        <!-- Источники трафика -->
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
            <path d="M 50 0 C 50 80 150 120 250 200" stroke="#2563EB" stroke-width="3" fill="none" opacity="0.6" />
            <path d="M 150 0 C 150 80 200 120 250 200" stroke="#2563EB" stroke-width="3" fill="none" opacity="0.6" />
            <path d="M 250 0 C 250 80 250 120 250 200" stroke="#2563EB" stroke-width="3" fill="none" opacity="0.6" />
            <path d="M 350 0 C 350 80 300 120 250 200" stroke="#2563EB" stroke-width="3" fill="none" opacity="0.6" />
            <path d="M 450 0 C 450 80 350 120 250 200" stroke="#2563EB" stroke-width="3" fill="none" opacity="0.6" />
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
            <a href="https://t.me/bussinessetka" target="_blank" rel="noopener noreferrer"
               class="relative w-24 h-24 md:w-40 md:h-40 bg-blue-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
              <svg class="w-12 h-12 md:w-20 md:h-20 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
              </svg>
            </a>
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
                <p class="text-sm text-gray-600 leading-relaxed">
                  ТенЧат, Дзен, Тредс и ВК работают на охваты. Они собирают внимание широкой аудитории и фильтруют случайных зрителей.
                </p>
              </div>

              <div class="p-6 bg-gray-50 rounded-2xl border border-gray-200">
                <div class="flex items-center gap-3 mb-4">
                  <div class="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                    <Icon name="fa-brands:telegram" class="w-6 h-6 text-white" />
                  </div>
                  <span class="font-bold text-gray-900 text-lg">Точка концентрации</span>
                </div>
                <p class="text-sm text-gray-600 leading-relaxed">
                  Telegram — это точка концентрации. Сюда попадает только «отфильтрованная» аудитория: предприниматели и эксперты, готовые к диалогу.
                </p>
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

            <!-- Статистика -->
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
            <a href="https://t.me/artemselifanov" target="_blank" rel="noopener noreferrer"
               class="group inline-flex items-center justify-center gap-2 px-6 py-4 sm:px-8 sm:py-4 text-sm sm:text-base font-semibold text-white bg-gray-900 hover:bg-gray-800 rounded-2xl transition-all hover:-translate-y-1">
              <Icon name="fa-brands:telegram" class="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Записаться в Telegram</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface TrafficSource {
  name: string
}

const trafficSources: TrafficSource[] = [
  { name: 'ТенЧат' },
  { name: 'Дзен' },
  { name: 'Тредс' },
  { name: 'ВК' },
  { name: 'Telegram' },
]
</script>

<style scoped>
.traffic-dot,
.traffic-dot-2,
.traffic-dot-3,
.traffic-dot-4,
.traffic-dot-5 {
  animation: trafficFlow 2s infinite;
}

.traffic-dot-2 { animation-delay: 0.2s; }
.traffic-dot-3 { animation-delay: 0.4s; }
.traffic-dot-4 { animation-delay: 0.6s; }
.traffic-dot-5 { animation-delay: 0.8s; }

@keyframes trafficFlow {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 1; }
}
</style>
