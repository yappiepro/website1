<template>
  <header :class="[
    'fixed left-4 right-4 z-40 transition-all duration-300 rounded-2xl',
    scrolled ? 'bg-transparent md:bg-white/60 md:backdrop-blur-xl md:shadow-lg' : 'bg-white/20 backdrop-blur-md shadow-sm',
    'md:top-0 top-4'
  ]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
      <div class="h-14 md:h-16 flex items-center">
        <!-- Левая зона: Логотип -->
        <div :class="[
          'transition-all duration-300 shrink-0',
          scrolled ? 'hidden md:block' : 'block'
        ]">
          <NuxtLink to="/" class="group transition-all duration-300">
            <img src="/logo.svg" alt="Артем Селифанов" class="h-8 w-auto" />
          </NuxtLink>
        </div>

        <!-- Десктопное меню -->
        <nav class="hidden md:flex items-center gap-1 flex-1 justify-center transition-all duration-300">
          <NuxtLink
            v-for="item in menuItems"
            :key="item.href"
            :to="item.href"
            :prefetch="true"
            @click="handleAnchorClick($event, item.href)"
            @touchstart="handleTouchStart(item.href)"
            :class="[
              'px-4 py-2 text-sm rounded-lg transition-all',
              activeItem === item.href
                ? 'text-gray-900 bg-white/80'
                : 'text-gray-600 hover:text-gray-900 hover:bg-white/50'
            ]"
          >
            {{ item.label }}
          </NuxtLink>
        </nav>

        <!-- CTA кнопка -->
        <div class="hidden md:block shrink-0">
          <a
            :href="ctaLink"
            target="_blank"
            class="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white rounded-xl transition-all backdrop-blur-sm bg-gray-900/90 hover:bg-gray-900"
          >
            <span>{{ ctaText }}</span>
          </a>
        </div>

        <!-- Кнопка бургера -->
        <button
          @click="toggleMenu"
          class="md:hidden p-2 hover:bg-white/50 rounded-xl transition-all absolute right-4"
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
import { useRoute } from 'vue-router'

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
    default: ''
  },
  modelValue: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['update:modelValue'])

const route = useRoute()
const scrolled = ref(false)
const activeItem = ref(null)

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
  activeItem.value = href
}

function handleTouchStart(href) {
  activeItem.value = href
}

function toggleMenu() {
  emit('update:modelValue', !props.modelValue)
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  activeItem.value = route.path
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
