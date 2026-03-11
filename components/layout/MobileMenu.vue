<template>
  <div>
    <!-- Мобильное меню -->
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 scale-95"
      leave-to-class="opacity-0 scale-95"
    >
      <div v-if="isOpen" class="fixed inset-0 z-[100] bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 pt-20 px-6">
        <div class="flex justify-between items-center mb-8">
          <span class="text-white/60 text-sm font-medium">Навигация</span>
          <button
            @click="isOpen = false"
            class="group p-3 bg-white hover:bg-gray-100 rounded-2xl transition-all backdrop-blur-sm shadow-lg"
            aria-label="Закрыть меню"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
              style="width: 24px; height: 24px;"
              fill="currentColor"
              class="text-gray-900"
            >
              <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
            </svg>
          </button>
        </div>

        <nav class="flex flex-col gap-3 max-w-md mx-auto">
          <a
            v-for="(item, i) in menuItems"
            :key="i"
            :href="item.href"
            @click="handleClick(item.href)"
            class="group relative overflow-hidden p-5 bg-white/5 hover:bg-white/10 rounded-2xl transition-all backdrop-blur-sm border border-white/10 hover:border-white/20"
          >
            <div class="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-blue-600/0 to-blue-600/0 group-hover:via-blue-600/20 group-hover:to-blue-600/20 transition-all"></div>
            <div class="relative flex items-center justify-between">
              <span class="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">{{ item.label }}</span>
              <Icon name="fa-solid:arrow-right" class="w-5 h-5 text-white/30 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
            </div>
          </a>

          <a
            :href="ctaLink"
            target="_blank"
            class="mt-6 group relative overflow-hidden p-5 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 rounded-2xl transition-all shadow-lg shadow-blue-600/30"
          >
            <div class="flex items-center justify-center gap-3">
              <Icon name="fa-brands:telegram" class="w-5 h-5 text-white" />
              <span class="text-base font-bold text-white">{{ ctaText }}</span>
            </div>
          </a>
        </nav>

        <!-- Декоративные элементы -->
        <div class="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div class="absolute -top-40 -right-40 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl"></div>
          <div class="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl"></div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  menuItems: {
    type: Array,
    default: () => [
      { href: '/', label: 'Главная' },
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
    default: 'Связаться в Telegram'
  }
})

const isOpen = ref(false)

function handleClick(href) {
  if (href.startsWith('#')) {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }
  isOpen.value = false
}

function handleToggleMenu() {
  isOpen.value = !isOpen.value
}

onMounted(() => {
  window.addEventListener('toggle-mobile-menu', handleToggleMenu)
})

onUnmounted(() => {
  window.removeEventListener('toggle-mobile-menu', handleToggleMenu)
})
</script>
