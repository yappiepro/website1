<template>
  <section class="relative min-h-screen flex items-center pt-20 px-4 sm:px-6 overflow-hidden bg-gray-50">
    <div class="max-w-7xl mx-auto w-full relative z-10">
      <div class="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        <!-- Левая колонка: Текст -->
        <div class="lg:col-span-8">
          <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05] mb-6">
            <span class="block">Личный бренд —</span>
            <span class="block">ваш главный инструмент</span>
            <span class="block text-blue-600">продаж</span>
          </h1>

          <p class="text-base md:text-lg text-gray-600 leading-relaxed mb-8 max-w-2xl">
            Я помогаю его создать. Для предпринимателей и экспертов, которые продают свои услуги. Готовлю площадки. Работаю со смыслами. Не пишу посты — выстраиваю систему.
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
              <span>Бесплатный аудит позиционирования</span>
            </div>
            <div class="flex items-center gap-2">
              <Icon name="fa-solid:calendar-check" class="w-5 h-5 text-green-500" />
              <span>Работаю с 2021 года</span>
            </div>
          </div>
        </div>

        <!-- Правая колонка: Изображения -->
        <div class="lg:col-span-4 flex justify-center lg:justify-end">
          <div class="relative">
            <div class="relative w-full max-w-sm mx-auto">
              <div class="flex items-end justify-center gap-[6.5px]">
                <div
                  v-for="(photo, index) in photos"
                  :key="index"
                  class="aspect-[9/19] rounded-[12px] overflow-hidden shadow-xl"
                  :class="photo.widthClass"
                  :data-position="photo.position"
                >
                  <img
                    :src="photo.src"
                    :alt="photo.alt"
                    class="w-full h-full object-cover"
                    :loading="photo.loading"
                    :fetchpriority="photo.priority"
                  />
                </div>
              </div>
            </div>

            <!-- Подпись -->
            <div class="text-center mt-6 sm:mt-8">
              <div class="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-blue-50 border border-blue-100 rounded-xl">
                <Icon name="fa-brands:telegram" class="w-3 h-3 sm:w-4 sm:h-4 text-blue-600" />
                <span class="text-xs sm:text-sm font-bold text-blue-700">Мультиплатформенный подход</span>
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
</template>

<script setup lang="ts">
interface Photo {
  src: string
  alt: string
  widthClass: string
  position: string
  loading?: 'lazy' | 'eager'
  priority?: 'high' | 'auto'
}

// Конфигурация фотографий
const photos: Photo[] = [
  { src: '/reference/IMG_7084.webp', alt: 'Дзен', widthClass: 'w-[50px] sm:w-[70px] md:w-[90px]', position: 'left-2', loading: 'lazy' },
  { src: '/reference/IMG_7082.webp', alt: 'Сетка', widthClass: 'w-[55px] sm:w-[75px] md:w-[100px]', position: 'left-1', loading: 'lazy' },
  { src: '/reference/IMG_7089.webp', alt: 'Площадка', widthClass: 'w-[60px] sm:w-[85px] md:w-[110px]', position: 'center', priority: 'high' },
  { src: '/reference/IMG_7083.webp', alt: 'TenChat', widthClass: 'w-[55px] sm:w-[75px] md:w-[100px]', position: 'right-1', loading: 'lazy' },
  { src: '/reference/IMG_7090.webp', alt: 'Площадка', widthClass: 'w-[50px] sm:w-[70px] md:w-[90px]', position: 'right-2', loading: 'lazy' },
]
</script>
