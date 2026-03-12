<template>
  <div class="md:hidden fixed bottom-[6px] left-[12px] right-[12px] z-50">
    <!-- Верхняя граница с тенью -->
    <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>

    <!-- Контейнер навигации -->
    <nav class="flex items-center justify-around bg-white/95 backdrop-blur-xl border-t border-gray-200 pb-safe rounded-2xl py-0"
         :class="themeClasses">
      <a
        v-for="item in items"
        :key="item.href"
        :href="item.href"
        @click="handleClick(item, $event)"
        class="relative flex flex-col items-center justify-center py-2 px-1 flex-1 transition-all duration-200"
        :class="[
          isActive(item.href)
            ? activeTextClass
            : inactiveTextClass
        ]"
      >
        <!-- Цветная подложка для активного пункта -->
        <div
          v-if="isActive(item.href)"
          class="absolute inset-0 rounded-xl -z-10"
          :class="activeBgClass"
        ></div>
        <!-- Иконка или изображение или текст -->
        <div class="relative w-10 h-10 mb-1 overflow-hidden rounded-[6px] flex items-center justify-center">
          <img
            v-if="item.image"
            :src="item.image"
            :alt="item.label"
            class="w-full h-full object-cover rounded-[6px]"
          />
          <span
            v-else-if="item.text"
            class="text-sm font-bold"
            :class="item.textClass || 'text-gray-700'"
          >{{ item.text }}</span>
          <Icon
            v-else
            :name="item.icon"
            class="w-6 h-6 transition-all duration-200"
            :class="isActive(item.href) ? 'scale-110' : 'scale-100'"
          />
          <!-- Индикатор активной страницы -->
          <div
            v-if="isActive(item.href)"
            class="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
            :class="indicatorClass"
          ></div>
        </div>
      </a>
    </nav>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'

const props = defineProps({
  items: {
    type: Array,
    default: () => [
      { href: '/', label: 'Главная', icon: 'lucide:home' },
      { href: '/networking', label: 'Нетворкинг', image: '/reference/networking.jpg' },
      { href: '/business', label: 'Бизнес', image: '/reference/business.jpg' },
      { href: '/yappie', label: 'Веб', text: 'веб' },
      { href: '/blog', label: 'Блог', text: 'блог' },
      { href: '#top', label: 'Наверх', icon: 'lucide:arrow-up', action: 'scrollToTop' }
    ]
  },
  theme: {
    type: String,
    default: 'light',
    validator: (value) => ['light', 'dark'].includes(value)
  }
})

const currentPath = ref('/')

function isActive(href) {
  if (href === '/') {
    return currentPath.value === '/'
  }
  return currentPath.value.startsWith(href)
}

function updatePath() {
  currentPath.value = window.location.pathname
}

function handleClick(item, event) {
  if (item.action === 'scrollToTop' || item.href.startsWith('#')) {
    event.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}

// Вычисляемые классы в зависимости от темы
const themeClasses = computed(() => {
  return props.theme === 'dark'
    ? 'bg-gray-900/95 border-gray-800'
    : 'bg-white/95 border-gray-200'
})

const activeBgClass = computed(() => {
  return props.theme === 'dark'
    ? 'bg-purple-600/30'
    : 'bg-blue-100'
})

const activeTextClass = computed(() => {
  return props.theme === 'dark'
    ? 'text-purple-400'
    : 'text-blue-600'
})

const inactiveTextClass = computed(() => {
  return props.theme === 'dark'
    ? 'text-gray-400 hover:text-gray-200'
    : 'text-gray-500 hover:text-gray-700'
})

const indicatorClass = computed(() => {
  return props.theme === 'dark'
    ? 'bg-purple-400'
    : 'bg-blue-600'
})

onMounted(() => {
  updatePath()
  window.addEventListener('popstate', updatePath)
  window.addEventListener('pushstate', updatePath)
  window.addEventListener('replacestate', updatePath)
})

onUnmounted(() => {
  window.removeEventListener('popstate', updatePath)
  window.removeEventListener('pushstate', updatePath)
  window.removeEventListener('replacestate', updatePath)
})
</script>

<style scoped>
.pb-safe {
  padding-bottom: env(safe-area-inset-bottom, 0);
}
</style>
