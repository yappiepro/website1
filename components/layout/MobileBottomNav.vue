<template>
  <div
    class="md:hidden fixed bottom-4 left-4 right-4 z-50 transition-all duration-300 ease-out"
    :class="menuClasses"
  >
    <!-- Контейнер навигации -->
    <nav
      class="flex items-center justify-around rounded-3xl py-0 shadow-2xl backdrop-blur-xl"
      :class="navClasses"
    >
      <NuxtLink
        v-for="(item, index) in items"
        :key="item.href"
        :to="item.href"
        :prefetch="true"
        :aria-label="item.label"
        :title="item.label"
        @touchstart="handleTouchStart(item, $event)"
        @mousedown="handleMouseDown(item, $event)"
        @click="item.action ? handleSpecialAction(item, $event) : null"
        class="group relative flex flex-col items-center justify-center flex-1 rounded-2xl py-2 touch-manipulation"
        :class="[
          isActive(item.href)
            ? activeTextClass
            : inactiveTextClass
        ]"
      >
        <!-- Фоновый эффект для активного элемента -->
        <Transition name="fade" mode="out-in">
          <div
            v-if="isActive(item.href)"
            class="absolute inset-0 -z-10"
            :class="[
              activeBgClass,
              index === 0 ? 'rounded-l-2xl rounded-r-none' : '',
              index === items.length - 1 ? 'rounded-r-2xl rounded-l-none' : '',
              index > 0 && index < items.length - 1 ? 'rounded-none' : ''
            ]"
          ></div>
        </Transition>

        <!-- Иконка -->
        <div
          class="relative w-12 h-12 flex items-center justify-center transition-all duration-75"
          :class="[
            isActive(item.href) ? 'scale-110' : 'scale-100',
            isActive(item.href) ? 'text-primary' : '',
            'active:scale-95'
          ]"
        >
          <!-- Изображение (если есть) -->
          <img
            v-if="item.image"
            :src="item.image"
            :alt="item.label"
            class="w-8 h-8 object-cover rounded-lg"
            loading="lazy"
          />

          <!-- Текст (если есть) -->
          <span
            v-else-if="item.text"
            class="text-xs font-bold"
            :class="item.textClass || 'text-current'"
          >
            {{ item.text }}
          </span>

          <!-- Иконка из компонента -->
          <component
            v-else-if="item.iconComponent"
            :is="item.iconComponent"
            class="w-6 h-6 transition-all duration-200"
            :class="isActive(item.href) ? 'stroke-2' : 'stroke-[1.5]'"
          />

          <!-- Иконка из Iconify -->
          <Icon
            v-else
            :name="item.icon"
            class="w-6 h-6 transition-all duration-200"
            :class="isActive(item.href) ? 'stroke-2' : 'stroke-[1.5]'"
          />
        </div>

        <!-- Подпись (опционально, для активных) -->
        <span
          v-if="item.showLabel"
          class="text-[10px] font-medium mt-1 transition-opacity duration-200"
          :class="isActive(item.href) ? 'opacity-100' : 'opacity-0'"
        >
          {{ item.label }}
        </span>
      </NuxtLink>
    </nav>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import { Home, Users, Briefcase, Globe, BookOpen } from 'lucide-vue-next'

const route = useRoute()

const props = defineProps({
  items: {
    type: Array,
    default: () => [
      { href: '/', label: 'Главная', iconComponent: Home, showLabel: false },
      { href: '/networking', label: 'Нетворкинг', iconComponent: Users, showLabel: false },
      { href: '/business', label: 'Бизнес', iconComponent: Briefcase, showLabel: false },
      { href: '/yappie', label: 'Веб', iconComponent: Globe, showLabel: false },
      { href: '/blog', label: 'Блог', iconComponent: BookOpen, showLabel: false }
    ]
  },
  // Тема: 'light' | 'dark'
  theme: {
    type: String,
    default: 'light',
    validator: (value) => ['light', 'dark'].includes(value)
  }
})

const lastScrollY = ref(0)
const isVisible = ref(true)

function handleScroll() {
  const currentScrollY = window.scrollY || window.pageYOffset

  // Скрываем при скролле вниз, показываем при скролле вверх
  if (currentScrollY > lastScrollY.value && currentScrollY > 100) {
    isVisible.value = false
  } else if (currentScrollY < lastScrollY.value) {
    isVisible.value = true
  }

  lastScrollY.value = currentScrollY
}

function isActive(href) {
  if (href === '/') {
    return route.path === '/'
  }
  return route.path.startsWith(href)
}

// Обработка специальных действий (якоря, scrollToTop)
function handleSpecialAction(item, event) {
  if (item.action === 'scrollToTop' || item.href.startsWith('#')) {
    event.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}

// Мгновенная обратная связь при касании (мобильные)
function handleTouchStart(item, event) {
  // Тактильная отдача сразу при касании
  if (navigator.vibrate) {
    navigator.vibrate(5)
  }
  // Визуальный feedback через CSS active state
}

// Мгновенная обратная связь при клике (десктоп)
function handleMouseDown(item, event) {
  // Визуальный feedback через CSS active state
}

// Вибрация при изменении маршрута
watch(route, (newRoute, oldRoute) => {
  if (newRoute.path !== oldRoute.path && navigator.vibrate) {
    navigator.vibrate(10)
  }
})

// Вычисляемые классы в зависимости от темы
const navClasses = computed(() => {
  if (props.theme === 'dark') {
    return 'bg-gray-900/80 text-white'
  }
  return 'bg-white/80 text-gray-900'
})

const menuClasses = computed(() => {
  if (isVisible.value) {
    return 'translate-y-0 opacity-100'
  }
  return 'translate-y-full opacity-0 pointer-events-none'
})

const activeBgClass = computed(() => {
  if (props.theme === 'dark') {
    return 'bg-white/15'
  }
  return 'bg-gray-900/10'
})

const activeTextClass = computed(() => {
  if (props.theme === 'dark') {
    return 'text-white'
  }
  return 'text-gray-900'
})

const inactiveTextClass = computed(() => {
  if (props.theme === 'dark') {
    return 'text-gray-400'
  }
  return 'text-gray-500'
})

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
/* Анимация появления/исчезновения фона - быстрая для мгновенного отклика */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Безопасная зона для iPhone с кнопкой Home */
.pb-safe {
  padding-bottom: max(0.75rem, env(safe-area-inset-bottom));
}

/* Отключаем задержку tap на мобильных */
* {
  touch-action: manipulation;
}
</style>
