<template>
  <header :class="[
    'fixed left-4 right-4 z-40 transition-all duration-300 rounded-2xl',
    scrolled ? 'bg-white/60 backdrop-blur-xl shadow-lg md:bg-white/60 md:backdrop-blur-xl md:shadow-lg' : 'bg-white/20 backdrop-blur-md shadow-sm',
    'md:top-0 top-4'
  ]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
      <div class="h-14 md:h-16 flex justify-between items-center">
        <!-- Логотип -->
        <NuxtLink to="/" class="group text-sm font-semibold tracking-tight text-gray-900 transition-all duration-300">
          {{ logoText }}
        </NuxtLink>

        <!-- Десктопное меню -->
        <nav class="hidden md:flex items-center gap-1 transition-all duration-300">
          <a
            v-for="item in menuItems"
            :key="item.href"
            :href="item.href"
            @click="handleAnchorClick($event, item.href)"
            class="px-4 py-2 text-sm rounded-lg transition-all text-gray-600 hover:text-gray-900 hover:bg-white/50"
          >
            {{ item.label }}
          </a>
        </nav>

        <!-- CTA кнопка -->
        <a
          :href="ctaLink"
          target="_blank"
          class="hidden md:inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white rounded-xl transition-all backdrop-blur-sm bg-gray-900/90 hover:bg-gray-900"
        >
          <span>{{ ctaText }}</span>
        </a>

        <!-- Кнопка бургера для мобильных -->
        <button
          @click="toggleMenu"
          class="md:hidden p-2 bg-white/80 hover:bg-white rounded-xl transition-all backdrop-blur-sm"
          aria-label="Открыть меню"
        >
          <Icon name="fa-solid:bars" class="w-6 h-6 text-gray-700" />
        </button>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  logoText: {
    type: String,
    default: 'Артем Селифанов'
  },
  menuItems: {
    type: Array,
    default: () => [
      { href: '/networking', label: 'Нескучный Нетворкинг' },
      { href: '/business', label: 'Бизнес Сетка' },
      { href: '/yappie', label: 'Веб-разработка' },
      { href: '/blog', label: 'Блог' }
    ]
  },
  ctaLink: {
    type: String,
    default: 'https://t.me/artemselifanov'
  },
  ctaText: {
    type: String,
    default: 'Связаться'
  },
  ctaBgClass: {
    type: String,
    default: 'bg-gray-900/90 hover:bg-gray-900'
  }
})

const scrolled = ref(false)

function handleScroll() {
  scrolled.value = window.scrollY > 50
}

function handleAnchorClick(event, href) {
  if (href.startsWith('#')) {
    event.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }
}

function toggleMenu() {
  // Событие для открытия мобильного меню
  window.dispatchEvent(new CustomEvent('toggle-mobile-menu'))
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
