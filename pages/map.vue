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
          <div class="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-2xl shadow-sm mb-6">
            <Icon name="fa-solid:map" class="w-4 h-4 text-blue-600" />
            <span class="text-xs font-bold text-gray-700 uppercase tracking-wider">География</span>
          </div>
          
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-gray-900 mb-6">
            Карта присутствия
          </h1>
          
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">
            Работаю с клиентами по всей России и СНГ. Основные направления деятельности отмечены на карте.
          </p>
        </div>
      </section>

      <!-- Карта России -->
      <section class="pb-24 px-4 sm:px-6">
        <div class="max-w-6xl mx-auto">
          <div class="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 sm:p-12">
            <div class="relative w-full" style="padding-bottom: 52.5%;">
              <svg
                viewBox="0 0 1280 786"
                class="absolute inset-0 w-full h-full"
                preserveAspectRatio="xMidYMid meet"
              >
                <!-- Группа для карты России -->
                <g transform="scale(1.2307692307692304) translate(0, 0)">
                  <!-- Регионы России - упрощенная карта -->
                  <!-- Центральный регион (выделен) -->
                  <path
                    d="M 100 280 L 120 275 L 140 280 L 150 290 L 145 310 L 130 320 L 110 315 L 95 300 Z"
                    class="cursor-pointer transition-all duration-300 hover:opacity-80"
                    :class="activeRegion === 'central' ? 'fill-blue-600' : 'fill-blue-400'"
                    @mouseenter="activeRegion = 'central'"
                    @mouseleave="activeRegion = ''"
                  />
                  
                  <!-- Северо-Западный регион -->
                  <path
                    d="M 60 200 L 90 195 L 110 200 L 115 230 L 100 250 L 75 245 L 55 230 Z"
                    class="cursor-pointer transition-all duration-300 hover:opacity-80"
                    :class="activeRegion === 'northwest' ? 'fill-blue-600' : 'fill-blue-300'"
                    @mouseenter="activeRegion = 'northwest'"
                    @mouseleave="activeRegion = ''"
                  />
                  
                  <!-- Южный регион -->
                  <path
                    d="M 80 320 L 110 315 L 130 325 L 125 350 L 100 355 L 75 345 Z"
                    class="cursor-pointer transition-all duration-300 hover:opacity-80"
                    :class="activeRegion === 'south' ? 'fill-blue-600' : 'fill-blue-300'"
                    @mouseenter="activeRegion = 'south'"
                    @mouseleave="activeRegion = ''"
                  />
                  
                  <!-- Приволжский регион -->
                  <path
                    d="M 140 285 L 170 280 L 180 310 L 170 340 L 145 335 L 135 310 Z"
                    class="cursor-pointer transition-all duration-300 hover:opacity-80"
                    :class="activeRegion === 'volga' ? 'fill-blue-600' : 'fill-blue-300'"
                    @mouseenter="activeRegion = 'volga'"
                    @mouseleave="activeRegion = ''"
                  />
                  
                  <!-- Уральский регион -->
                  <path
                    d="M 180 250 L 220 245 L 230 280 L 220 320 L 185 315 L 175 280 Z"
                    class="cursor-pointer transition-all duration-300 hover:opacity-80"
                    :class="activeRegion === 'ural' ? 'fill-blue-600' : 'fill-blue-300'"
                    @mouseenter="activeRegion = 'ural'"
                    @mouseleave="activeRegion = ''"
                  />
                  
                  <!-- Сибирский регион -->
                  <path
                    d="M 230 240 L 350 235 L 360 290 L 350 340 L 235 335 L 225 285 Z"
                    class="cursor-pointer transition-all duration-300 hover:opacity-80"
                    :class="activeRegion === 'siberia' ? 'fill-blue-600' : 'fill-blue-300'"
                    @mouseenter="activeRegion = 'siberia'"
                    @mouseleave="activeRegion = ''"
                  />
                  
                  <!-- Дальневосточный регион -->
                  <path
                    d="M 360 230 L 520 225 L 530 280 L 520 335 L 365 330 L 355 280 Z"
                    class="cursor-pointer transition-all duration-300 hover:opacity-80"
                    :class="activeRegion === 'far_east' ? 'fill-blue-600' : 'fill-blue-300'"
                    @mouseenter="activeRegion = 'far_east'"
                    @mouseleave="activeRegion = ''"
                  />
                </g>
              </svg>
            </div>

            <!-- Легенда -->
            <div class="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
              <div
                v-for="region in regions"
                :key="region.id"
                class="flex items-center gap-3 p-3 rounded-xl transition-all cursor-pointer"
                :class="activeRegion === region.id ? 'bg-blue-50 border-blue-200' : 'bg-gray-50 border-gray-100'"
                @mouseenter="activeRegion = region.id"
                @mouseleave="activeRegion = ''"
              >
                <div
                  class="w-4 h-4 rounded-full"
                  :class="getRegionColor(region.id)"
                ></div>
                <div>
                  <div class="text-sm font-semibold text-gray-900">{{ region.name }}</div>
                  <div class="text-xs text-gray-500">{{ region.cities }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
    <Footer
      :show-cta="false"
      bg-class="bg-gray-900"
    />

    <!-- Нижняя навигация для мобильных -->
    <MobileBottomNav theme="light" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Header from '~/components/layout/Header.vue'
import BaseMobileMenu from '~/components/layout/BaseMobileMenu.vue'
import Footer from '~/components/layout/Footer.vue'
import MobileBottomNav from '~/components/layout/MobileBottomNav.vue'

// SEO
useSeoMeta({
  title: 'Карта присутствия | География работы',
  description: 'Работаю с клиентами по всей России и СНГ. Узнайте географию моего присутствия.',
  robots: 'index, follow'
})

// Состояние
const isMobileMenuOpen = ref(false)
const activeRegion = ref('')

// Регионы
const regions = [
  { id: 'central', name: 'Центральный', cities: 'Москва, область', color: 'bg-blue-600' },
  { id: 'northwest', name: 'Северо-Запад', cities: 'Санкт-Петербург', color: 'bg-blue-400' },
  { id: 'south', name: 'Южный', cities: 'Краснодар, Сочи', color: 'bg-blue-400' },
  { id: 'volga', name: 'Приволжский', cities: 'Казань, Нижний', color: 'bg-blue-400' },
  { id: 'ural', name: 'Уральский', cities: 'Екатеринбург', color: 'bg-blue-400' },
  { id: 'siberia', name: 'Сибирский', cities: 'Новосибирск', color: 'bg-blue-400' },
  { id: 'far_east', name: 'Дальний Восток', cities: 'Владивосток', color: 'bg-blue-400' },
]

const getRegionColor = (regionId) => {
  const region = regions.find(r => r.id === regionId)
  return activeRegion.value === regionId ? 'bg-blue-600' : region?.color || 'bg-blue-300'
}

// Меню
const headerMenuItems = [
  { href: '/networking', label: 'Нескучный Нетворкинг' },
  { href: '/business', label: 'Бизнес Сетка' },
  { href: '/yappie', label: 'Веб-разработка' },
  { href: '/blog', label: 'Блог' }
]

const mobileMenuItems = [
  { href: '#', label: 'О карте' },
  { href: '#', label: 'Регионы' },
  { href: '/blog', label: 'Блог' },
  { href: '/notifications', label: 'Push (тест)' }
]
</script>
