<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
    <!-- Header -->
    <Header
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
      <!-- Hero секция -->
      <section class="pt-32 pb-16 px-4 sm:px-6">
        <div class="max-w-7xl mx-auto text-center">
          <div
            class="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-2xl shadow-sm mb-6"
          >
            <Icon name="fa-solid:map" class="w-4 h-4 text-blue-600" />
            <span class="text-xs font-bold text-gray-700 uppercase tracking-wider">География</span>
          </div>

          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-gray-900 mb-6">
            Карта присутствия
          </h1>

          <p class="text-lg text-gray-600 max-w-2xl mx-auto">
            Работаю с клиентами по всей России и СНГ. Основные направления деятельности отмечены на
            карте.
          </p>
        </div>
      </section>

      <!-- Карта России -->
      <section class="pb-24 px-4 sm:px-6" @mousemove="updateTooltipPosition">
        <div class="max-w-7xl mx-auto">
          <div
            class="bg-white rounded-3xl shadow-xl border border-gray-100 p-6 sm:p-8 overflow-hidden"
          >
            <div class="relative w-full" style="padding-bottom: 62.1%">
              <svg
                viewBox="0 0 1224.449 760.6203"
                class="absolute inset-0 w-full h-full"
                preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg"
              >
                <!-- Группа для карты России с регионами -->
                <g id="regions">
                  <path
                    v-for="region in regions"
                    :id="region.id"
                    :key="region.id"
                    :d="region.path"
                    :name="region.name"
                    class="cursor-pointer transition-all duration-300 hover:opacity-80 stroke-white stroke-[0.5]"
                    :class="getRegionClass(region.id)"
                    @mouseenter="hoveredRegion = region.id"
                    @mouseleave="hoveredRegion = ''"
                    @click="selectRegion(region.id)"
                  />
                </g>
              </svg>

              <!-- Tooltip с названием региона -->
              <div
                v-if="hoveredRegion"
                class="absolute pointer-events-none z-20 px-3 py-2 bg-gray-900 text-white text-sm font-semibold rounded-lg shadow-lg whitespace-nowrap"
                :style="{
                  left: `${tooltipPosition.left}px`,
                  top: `${tooltipPosition.top - 10}px`,
                  transform: 'translate(-50%, -100%)',
                }"
              >
                {{ hoveredRegionName }}
                <div class="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1">
                  <div
                    class="border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-900"
                  ></div>
                </div>
              </div>
            </div>

            <!-- Подсказка -->
            <p class="mt-4 text-center text-sm text-gray-500">
              <Icon name="fa-solid:hand-pointer" class="w-4 h-4 inline mr-1" />
              Нажмите на регион, чтобы увидеть информацию
            </p>
          </div>
        </div>
      </section>

      <!-- Popup с информацией о регионе -->
      <div
        v-if="selectedRegion"
        class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
        @click="closePopup"
      >
        <div
          class="bg-white rounded-3xl shadow-2xl max-w-md w-full p-6 sm:p-8 relative animate-in fade-in zoom-in duration-300"
          @click.stop
        >
          <!-- Кнопка закрытия -->
          <button
            class="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors p-2 hover:bg-gray-100 rounded-full"
            @click="closePopup"
          >
            <Icon name="fa-solid:xmark" class="w-6 h-6" />
          </button>

          <!-- Заголовок -->
          <div class="mb-6">
            <div
              class="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50 border border-blue-100 rounded-xl mb-4"
            >
              <Icon name="fa-solid:map-location-dot" class="w-4 h-4 text-blue-600" />
              <span class="text-xs font-bold text-blue-700 uppercase tracking-wider"
                >Регион России</span
              >
            </div>
            <h2 class="text-2xl sm:text-3xl font-black text-gray-900">{{ selectedRegionName }}</h2>
            <p class="text-sm text-gray-500 mt-1">{{ selectedRegionCode }}</p>
          </div>

          <!-- Описание -->
          <div class="space-y-4">
            <div class="p-4 bg-gray-50 rounded-2xl border border-gray-100">
              <p class="text-gray-700">{{ selectedRegionDescription }}</p>
            </div>

            <!-- Статистика -->
            <div class="grid grid-cols-2 gap-3">
              <div class="p-4 bg-blue-50 rounded-2xl border border-blue-100">
                <div class="text-2xl font-black text-blue-600">85+</div>
                <div class="text-xs text-blue-700 mt-1">Регионов в РФ</div>
              </div>
              <div class="p-4 bg-green-50 rounded-2xl border border-green-100">
                <div class="text-2xl font-black text-green-600">170+</div>
                <div class="text-xs text-green-700 mt-1">Народов</div>
              </div>
            </div>
          </div>

          <!-- Действия -->
          <div class="mt-6 flex gap-3">
            <a
              href="https://t.me/artemselifanov"
              target="_blank"
              rel="noopener noreferrer"
              class="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-gray-900 hover:bg-gray-800 rounded-2xl transition-all hover:-translate-y-0.5"
            >
              <Icon name="fa-brands:telegram" class="w-4 h-4" />
              Связаться
            </a>
            <button
              class="px-6 py-3 text-sm font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-2xl transition-all"
              @click="closePopup"
            >
              Закрыть
            </button>
          </div>
        </div>
      </div>

      <!-- Статистика -->
      <section class="pb-24 px-4 sm:px-6">
        <div class="max-w-6xl mx-auto">
          <div class="grid md:grid-cols-3 gap-6">
            <div class="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 text-center">
              <div class="text-4xl font-black text-blue-600 mb-2">85+</div>
              <div class="text-sm text-gray-600">Регионов присутствия</div>
            </div>
            <div class="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 text-center">
              <div class="text-4xl font-black text-blue-600 mb-2">50+</div>
              <div class="text-sm text-gray-600">Городов России</div>
            </div>
            <div class="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 text-center">
              <div class="text-4xl font-black text-blue-600 mb-2">24/7</div>
              <div class="text-sm text-gray-600">Поддержка клиентов</div>
            </div>
          </div>
        </div>
      </section>
    </main>

    <!-- Footer -->
    <Footer :show-cta="false" bg-class="bg-gray-900" />

    <!-- Нижняя навигация для мобильных -->
    <MobileBottomNav theme="light" />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import Header from '~/components/layout/Header.vue'
import BaseMobileMenu from '~/components/layout/BaseMobileMenu.vue'
import Footer from '~/components/layout/Footer.vue'
import MobileBottomNav from '~/components/layout/MobileBottomNav.vue'
import { regionsData } from '~/data/russiaRegions'

// SEO
useSeoMeta({
  title: 'Карта присутствия | География работы',
  description: 'Работаю с клиентами по всей России и СНГ. Узнайте географию моего присутствия.',
  robots: 'noindex, nofollow',
})

// Состояние
const isMobileMenuOpen = ref(false)
const hoveredRegion = ref('')
const selectedRegion = ref('')
const tooltipPosition = ref({ left: '50%', top: '50%' })

// Данные регионов с SVG путями
const regions = regionsData

// Функции
function selectRegion(regionId) {
  selectedRegion.value = regionId
}

function closePopup() {
  selectedRegion.value = ''
}

function getRegionClass(regionId) {
  if (selectedRegion.value === regionId) {
    return regionId === 'RU-KR' ? 'fill-green-600' : 'fill-blue-600'
  }
  return regionId === 'RU-KR' ? 'fill-green-400' : 'fill-blue-400'
}

function updateTooltipPosition(event) {
  if (event) {
    tooltipPosition.value = {
      left: event.clientX,
      top: event.clientY - 10, // Небольшое смещение вверх от курсора
    }
  }
}

// Вычисляемые свойства
const hoveredRegionName = computed(() => {
  const region = regions.find((r) => r.id === hoveredRegion.value)
  return region?.name || ''
})

const selectedRegionName = computed(() => {
  const region = regions.find((r) => r.id === selectedRegion.value)
  return region?.name || ''
})

const selectedRegionCode = computed(() => {
  const region = regions.find((r) => r.id === selectedRegion.value)
  return region?.id || ''
})

const selectedRegionDescription = computed(() => {
  const region = regions.find((r) => r.id === selectedRegion.value)
  return region?.description || 'Регион России'
})

// Меню
const headerMenuItems = [
  { href: '/networking', label: 'Нескучный Нетворкинг' },
  { href: '/business', label: 'Бизнес Сетка' },
  { href: '/yappie', label: 'Веб-разработка' },
  { href: '/blog', label: 'Блог' },
]

const mobileMenuItems = [
  { href: '#', label: 'О карте' },
  { href: '#', label: 'Регионы' },
  { href: '/blog', label: 'Блог' },
  { href: '/notifications', label: 'Push (тест)' },
]
</script>
