<template>
  <div class="md:hidden fixed bottom-[12px] left-[12px] right-[12px] z-50 transition-all duration-300 ease-in-out" :class="menuClasses">
    <!-- Контейнер навигации -->
    <nav
      class="flex items-center justify-around pb-safe rounded-2xl py-0 shadow-lg"
      :class="navClasses"
    >
      <a
        v-for="item in items"
        :key="item.href"
        :href="item.href"
        @click="handleClick(item, $event)"
        class="relative flex flex-col items-center justify-center py-2 px-1 flex-1"
        :class="[
          isActive(item.href)
            ? activeTextClass
            : inactiveTextClass
        ]"
      >
        <!-- Цветная подложка для активного пункта -->
        <div
          v-if="isActive(item.href)"
          class="absolute inset-0 m-1 rounded-xl bg-gray-200 -z-20"
        ></div>
        <!-- Иконка или изображение или текст -->
        <div class="relative w-10 h-10 mb-1 overflow-hidden rounded-[6px] flex items-center justify-center">
          <NuxtImg
            v-if="item.image"
            :src="item.image"
            :alt="item.label"
            quality="75"
            sizes="40px"
            class="w-full h-full object-cover rounded-[6px]"
            loading="lazy"
          />
          <span
            v-else-if="item.text"
            class="text-sm font-bold"
            :class="item.textClass || 'text-gray-700'"
          >{{ item.text }}</span>
          <Icon
            v-else
            :name="item.icon"
            class="transition-all duration-200"
            :class="[
              isActive(item.href) ? 'scale-110' : 'scale-100',
              item.icon === 'lucide:home' ? 'w-12 h-12' : 'w-6 h-6'
            ]"
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
    validator: (value) => ['light', 'dark', 'black'].includes(value)
  }
})

const currentPath = ref('/')
const lastScrollY = ref(0)
const isVisible = ref(true)

function handleScroll() {
  const currentScrollY = window.scrollY || window.pageYOffset
  
  // Скрываем при скролле вниз, показываем при скролле вверх
  if (currentScrollY > lastScrollY.value && currentScrollY > 100) {
    // Скролл вниз - скрываем
    isVisible.value = false
  } else if (currentScrollY < lastScrollY.value) {
    // Скролл вверх - показываем
    isVisible.value = true
  }
  
  lastScrollY.value = currentScrollY
}

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
const navClasses = computed(() => {
  if (props.theme === 'black') {
    return 'bg-black/80 backdrop-blur-xl text-white'
  }
  if (props.theme === 'dark') {
    return 'bg-gray-900/80 backdrop-blur-xl text-white'
  }
  return 'bg-white/80 backdrop-blur-xl text-gray-900'
})

const menuClasses = computed(() => {
  if (isVisible.value) {
    return 'translate-y-0 opacity-100'
  }
  return 'translate-y-full opacity-0 pointer-events-none'
})

const activeBgClass = computed(() => {
  return 'bg-gray-700'
})

const activeTextClass = computed(() => {
  if (props.theme === 'black') {
    return 'text-white'
  }
  if (props.theme === 'dark') {
    return 'text-white'
  }
  return 'text-gray-900'
})

const inactiveTextClass = computed(() => {
  if (props.theme === 'black') {
    return 'text-gray-400 hover:text-gray-200'
  }
  if (props.theme === 'dark') {
    return 'text-gray-400 hover:text-white'
  }
  return 'text-gray-500 hover:text-gray-700'
})

const indicatorClass = computed(() => {
  if (props.theme === 'black') {
    return 'bg-white'
  }
  if (props.theme === 'dark') {
    return 'bg-gray-400'
  }
  return 'bg-gray-600'
})

onMounted(() => {
  updatePath()
  window.addEventListener('popstate', updatePath)
  window.addEventListener('pushstate', updatePath)
  window.addEventListener('replacestate', updatePath)
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('popstate', updatePath)
  window.removeEventListener('pushstate', updatePath)
  window.removeEventListener('replacestate', updatePath)
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.pb-safe {
  padding-bottom: env(safe-area-inset-bottom, 0);
}
</style>
