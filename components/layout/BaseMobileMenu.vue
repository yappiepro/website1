<template>
  <Transition
    enter-active-class="transition duration-300 ease-out"
    enter-from-class="opacity-0 translate-x-full"
    enter-to-class="opacity-100 translate-x-0"
    leave-active-class="transition duration-200 ease-in"
    leave-from-class="opacity-100 translate-x-0"
    leave-to-class="opacity-0 translate-x-full"
  >
    <div v-if="modelValue" class="fixed inset-0 z-[100] md:hidden" :class="containerClass">
      <!-- Верхняя панель с кнопкой закрытия -->
      <div class="flex justify-between items-center pt-6 px-6" :class="headerClass">
        <span v-if="showLabel" class="text-sm font-medium" :class="labelClass">Навигация</span>
        <button
          @click="close"
          class="group p-3 rounded-2xl transition-all backdrop-blur-sm"
          :class="closeButtonClass"
          aria-label="Закрыть меню"
        >
          <X class="w-6 h-6" :class="closeIconClass" />
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
            :class="getItemClass(item)"
            :style="{ animationDelay: `${i * 50 + 150}ms` }"
          >
            <div class="absolute inset-0" :class="getHoverClass(item)"></div>
            <div class="relative flex items-center justify-between">
              <span class="text-base font-bold" :class="getTextClass(item)">{{ item.label }}</span>
              <Icon v-if="showArrows" name="fa-solid:arrow-right" class="w-4 h-4 transition-all" :class="getArrowClass(item)" />
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

      <!-- Декоративные элементы для светлых тем -->
      <div v-if="theme === 'light'" class="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
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
  ctaLink: {
    type: String,
    default: ''
  },
  ctaText: {
    type: String,
    default: 'Связаться'
  },
  // Тема меню: 'light' (белый градиент), 'dark' (чёрный), 'brutal' (белый с чёрными границами)
  theme: {
    type: String,
    default: 'light',
    validator: (value) => ['light', 'dark', 'brutal'].includes(value)
  },
  // Показывать ли метку "Навигация"
  showLabel: {
    type: Boolean,
    default: true
  },
  // Показывать ли стрелки
  showArrows: {
    type: Boolean,
    default: true
  },
  // Акцентный цвет для hover-эффектов (hex или tailwind class)
  accentColor: {
    type: String,
    default: 'blue' // blue, purple, violet, etc.
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

// Вычисляемые классы контейнера
const containerClass = computed(() => {
  if (props.theme === 'dark') {
    return 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900'
  }
  if (props.theme === 'brutal') {
    return 'bg-white'
  }
  return 'bg-gradient-to-br from-white via-gray-50 to-white'
})

// Классы хедера
const headerClass = computed(() => {
  if (props.theme === 'dark') {
    return ''
  }
  return ''
})

// Классы метки
const labelClass = computed(() => {
  if (props.theme === 'dark') {
    return 'text-white/60'
  }
  if (props.theme === 'brutal') {
    return 'text-gray-500'
  }
  return 'text-gray-400'
})

// Классы кнопки закрытия
const closeButtonClass = computed(() => {
  if (props.theme === 'dark') {
    return 'bg-white hover:bg-gray-100 shadow-lg'
  }
  if (props.theme === 'brutal') {
    return 'bg-black hover:bg-gray-900 text-white'
  }
  return 'bg-white hover:bg-gray-100 shadow-lg border border-gray-200'
})

// Классы иконки закрытия
const closeIconClass = computed(() => {
  if (props.theme === 'dark') {
    return 'text-gray-900'
  }
  if (props.theme === 'brutal') {
    return 'text-white'
  }
  return 'text-gray-900'
})

// Получение класса цвета акцента
const getAccentClasses = () => {
  const accentMap = {
    blue: {
      hover: 'from-blue-600/0 via-blue-600/0 to-blue-600/0 group-hover:via-blue-600/10 group-hover:to-blue-600/10',
      text: 'text-gray-900 group-hover:text-blue-600',
      arrow: 'text-gray-400 group-hover:text-blue-600',
      border: 'border-gray-200 hover:border-blue-200',
      bg: 'bg-white hover:bg-gray-50'
    },
    purple: {
      hover: 'from-purple-600/0 via-purple-600/0 to-purple-600/0 group-hover:via-purple-600/10 group-hover:to-purple-600/10',
      text: 'text-gray-900 group-hover:text-purple-600',
      arrow: 'text-gray-400 group-hover:text-purple-600',
      border: 'border-gray-200 hover:border-purple-200',
      bg: 'bg-white hover:bg-gray-50'
    },
    violet: {
      hover: 'from-violet-600/0 via-violet-600/0 to-violet-600/0 group-hover:via-violet-600/10 group-hover:to-violet-600/10',
      text: 'text-gray-900 group-hover:text-violet-600',
      arrow: 'text-gray-400 group-hover:text-violet-600',
      border: 'border-gray-200 hover:border-violet-200',
      bg: 'bg-white hover:bg-gray-50'
    }
  }
  return accentMap[props.accentColor] || accentMap.blue
}

// Получение класса элемента меню
const getItemClass = (item) => {
  const accent = getAccentClasses()
  
  if (props.theme === 'dark') {
    return 'bg-white/5 border-white/10 hover:border-white/20'
  }
  if (props.theme === 'brutal') {
    return 'border-2 border-black hover:bg-black hover:text-white hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px]'
  }
  return `${accent.bg} ${accent.border}`
}

// Получение класса hover-эффекта
const getHoverClass = (item) => {
  const accent = getAccentClasses()
  
  if (props.theme === 'dark') {
    return 'bg-gradient-to-r from-blue-600/0 via-blue-600/0 to-blue-600/0 group-hover:via-blue-600/20 group-hover:to-blue-600/20 transition-all'
  }
  if (props.theme === 'brutal') {
    return ''
  }
  return `bg-gradient-to-r ${accent.hover} transition-all`
}

// Получение класса текста
const getTextClass = (item) => {
  const accent = getAccentClasses()
  
  if (props.theme === 'dark') {
    return 'text-white group-hover:text-blue-400 transition-colors'
  }
  if (props.theme === 'brutal') {
    return 'text-base uppercase tracking-wider text-gray-900 group-hover:text-white transition-colors'
  }
  return `text-base font-bold ${accent.text} transition-colors`
}

// Получение класса стрелки
const getArrowClass = () => {
  const accent = getAccentClasses()
  
  if (props.theme === 'dark') {
    return 'text-white/40 group-hover:text-blue-400 group-hover:translate-x-1 transition-all'
  }
  if (props.theme === 'brutal') {
    return 'text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all'
  }
  return `${accent.arrow} group-hover:translate-x-1 transition-all`
}

// Классы CTA кнопки
const ctaClass = computed(() => {
  if (props.theme === 'dark') {
    return 'bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 shadow-lg shadow-blue-600/30'
  }
  if (props.theme === 'brutal') {
    return 'bg-[#EA6D3A] text-white hover:bg-[#EA6D3A]/90 shadow-none border-2 border-black'
  }
  return 'bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 shadow-lg shadow-blue-600/30'
})
</script>
