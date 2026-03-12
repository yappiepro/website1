<template>
  <Transition
    enter-active-class="transition duration-300 ease-out"
    enter-from-class="opacity-0 translate-x-full"
    enter-to-class="opacity-100 translate-x-0"
    leave-active-class="transition duration-200 ease-in"
    leave-from-class="opacity-100 translate-x-0"
    leave-to-class="opacity-0 translate-x-full"
  >
    <div v-if="modelValue" class="fixed inset-0 z-[100] md:hidden" :class="bgClass">
      <!-- Кнопка закрытия -->
      <div class="flex justify-between items-center pt-6 px-6">
        <span class="text-white/60 text-sm font-medium">Навигация</span>
        <button
          @click="close"
          class="group p-3 bg-white hover:bg-gray-100 rounded-2xl transition-all backdrop-blur-sm shadow-lg"
          aria-label="Закрыть меню"
        >
          <X class="w-6 h-6 text-gray-900" />
        </button>
      </div>

      <!-- Пункты меню -->
      <div class="flex-1 flex flex-col justify-center items-center px-6 mt-8">
        <nav class="flex flex-col gap-3 w-full max-w-md">
          <a
            v-for="(item, i) in menuItems"
            :key="i"
            :href="item.href"
            @click="handleClick(item.href)"
            class="group relative overflow-hidden p-3 sm:p-4 rounded-xl transition-all backdrop-blur-sm border animate-menu-item"
            :class="itemClass"
            :style="{ animationDelay: `${i * 50 + 150}ms` }"
          >
            <div class="absolute inset-0" :class="hoverClass"></div>
            <div class="relative flex items-center gap-3">
              <!-- Кружок с фото для первых двух пунктов -->
              <div v-if="i < 2 && isFeaturedItem(item.href)" class="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 border-2 border-white/20 group-hover:border-white/40 transition-colors">
                <NuxtImg :src="getFeaturedImage(item.href)" quality="75" sizes="40px" :alt="item.label" class="w-full h-full object-cover" loading="lazy" />
              </div>
              <!-- Квадратная иконка для остальных пунктов -->
              <div v-else class="w-10 h-10 rounded-lg bg-gray-200/50 flex items-center justify-center flex-shrink-0">
                <Icon name="fa-solid:arrow-right" class="w-4 h-4 text-gray-500 group-hover:text-blue-600 transition-colors" />
              </div>
              <span class="text-base font-bold" :class="textClass">{{ item.label }}</span>
            </div>
          </a>

          <!-- CTA кнопка -->
          <a
            v-if="ctaLink"
            :href="ctaLink"
            target="_blank"
            class="mt-4 group relative overflow-hidden p-3 sm:p-4 rounded-xl transition-all shadow-lg animate-menu-item"
            :class="ctaClass"
            :style="{ animationDelay: `${menuItems.length * 50 + 200}ms` }"
          >
            <div class="flex items-center justify-center gap-2">
              <Icon name="fa-brands:telegram" class="w-4 h-4 text-white" />
              <span class="text-sm font-bold text-white">{{ ctaText }}</span>
            </div>
          </a>
        </nav>
      </div>

      <!-- Декоративные элементы -->
      <div class="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div class="absolute -top-40 -right-40 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl"></div>
        <div class="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl"></div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { computed } from 'vue'
import { X } from 'lucide-vue-next'

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  },
  menuItems: {
    type: Array,
    default: () => []
  },
  featuredItems: {
    type: Array,
    default: () => ['networking', 'business']
  },
  ctaLink: {
    type: String,
    default: ''
  },
  ctaText: {
    type: String,
    default: 'Связаться'
  },
  theme: {
    type: String,
    default: 'light',
    validator: (value) => ['light', 'dark'].includes(value)
  }
})

const emit = defineEmits(['update:modelValue'])

const close = () => {
  emit('update:modelValue', false)
}

const handleClick = (href) => {
  // Если это якорная ссылка (#section), закрываем меню
  if (href.startsWith('#')) {
    close()
  }
  // Для обычных ссылок меню закроется автоматически
}

// Проверка, является ли пункт избранным (с фото)
const isFeaturedItem = (href) => {
  return props.featuredItems.some(item => href.includes(item))
}

// Получение изображения для избранного пункта
const getFeaturedImage = (href) => {
  if (href.includes('networking')) {
    return '/reference/networking.jpg'
  }
  if (href.includes('business')) {
    return '/reference/business.jpg'
  }
  return ''
}

// Вычисляемые классы в зависимости от темы
const bgClass = computed(() => {
  return props.theme === 'dark'
    ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900'
    : 'bg-gradient-to-br from-white via-gray-50 to-white'
})

const itemClass = computed(() => {
  return props.theme === 'dark'
    ? 'bg-white/5 border-white/10 hover:border-white/20'
    : 'bg-gray-100/50 border-gray-200 hover:border-gray-300'
})

const textClass = computed(() => {
  return props.theme === 'dark'
    ? 'text-white group-hover:text-blue-400 transition-colors'
    : 'text-gray-900 group-hover:text-blue-600 transition-colors'
})

const hoverClass = computed(() => {
  return props.theme === 'dark'
    ? 'bg-gradient-to-r from-blue-600/0 via-blue-600/0 to-blue-600/0 group-hover:via-blue-600/20 group-hover:to-blue-600/20 transition-all'
    : 'bg-gradient-to-r from-blue-600/0 via-blue-600/0 to-blue-600/0 group-hover:via-blue-600/10 group-hover:to-blue-600/10 transition-all'
})

const ctaClass = computed(() => {
  return props.theme === 'dark'
    ? 'bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 shadow-lg shadow-blue-600/30'
    : 'bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 shadow-lg shadow-blue-600/30'
})
</script>
