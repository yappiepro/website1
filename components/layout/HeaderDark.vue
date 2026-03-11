<template>
  <nav class="fixed top-0 left-0 right-0 z-50 bg-[#030305]/70 backdrop-blur-2xl border-b border-white/[0.08]">
    <div class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
      <a :href="logoLink" class="text-xl font-semibold text-white flex items-center gap-2">
        <span class="font-bold text-white tracking-wider text-2xl">{{ logoText }}</span>
      </a>

      <!-- Десктопное меню -->
      <div class="hidden md:flex items-center gap-8">
        <a
          v-for="item in menuItems"
          :key="item.href"
          :href="item.href"
          class="text-sm text-gray-400 hover:text-white transition-all duration-300"
        >
          {{ item.label }}
        </a>
        <a
          :href="ctaLink"
          target="_blank"
          class="px-4 py-2 text-xs bg-white text-black hover:bg-gray-100 shadow-lg shadow-white/10 hover:shadow-white/20 transition-all rounded-md font-medium"
        >
          {{ ctaText }}
        </a>
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
          v-for="item in menuItems"
          :key="item.href"
          :href="item.href"
          @click="isMobileMenuOpen = false"
          class="text-3xl font-bold text-white text-center py-4 hover:text-violet-400 transition-colors"
        >
          {{ item.label }}
        </a>
      </nav>
      <button
        @click="isMobileMenuOpen = false"
        class="mt-12 px-10 py-5 text-xl font-semibold bg-white text-black hover:bg-gray-100 w-full max-w-xs rounded-md"
      >
        <a :href="ctaLink" target="_blank">{{ ctaText }}</a>
      </button>
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
</template>

<script setup>
import { ref } from 'vue'
import { Menu, X } from 'lucide-vue-next'

const props = defineProps({
  logoText: {
    type: String,
    default: 'Фокус'
  },
  logoLink: {
    type: String,
    default: '/study'
  },
  menuItems: {
    type: Array,
    default: () => [
      { href: '/', label: 'Главная' },
      { href: '#problems', label: 'Проблемы' },
      { href: '#services', label: 'Услуги' },
      { href: '#why-us', label: 'Почему мы' },
      { href: '#portfolio', label: 'Кейсы' },
      { href: '/blog', label: 'Блог' },
      { href: '#faq', label: 'FAQ' }
    ]
  },
  ctaLink: {
    type: String,
    default: 'https://t.me/artemselifanov'
  },
  ctaText: {
    type: String,
    default: 'Связаться'
  }
})

const isMobileMenuOpen = ref(false)
</script>
