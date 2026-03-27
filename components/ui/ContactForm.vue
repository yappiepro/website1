<template>
  <div class="w-full">
    <h3 class="text-base font-bold text-gray-900 mb-2 text-center">Онлайн запись</h3>
    <p class="text-xs text-gray-600 mb-4 text-center">
      Заполните форму и я свяжусь с вами в течение 24 часов
    </p>

    <!-- Выбор услуги (облако тегов) -->
    <div class="mb-4">
      <label class="block text-xs font-medium text-gray-700 mb-2">Выберите услугу:</label>
      <div class="flex flex-wrap gap-2">
        <button
          v-for="service in services"
          :key="service.value"
          type="button"
          @click="selectService(service.value)"
          :class="[
            'px-3 py-1.5 text-xs rounded-lg border transition-all',
            form.service === service.value
              ? 'bg-purple-600 text-white border-purple-600'
              : 'bg-gray-50 text-gray-700 border-gray-200 hover:border-purple-300 hover:bg-purple-50'
          ]"
        >
          {{ service.label }}
        </button>
      </div>
    </div>

    <form class="space-y-3" @submit.prevent="handleSubmit">
      <!-- Имя -->
      <div class="space-y-1">
        <label for="name" class="block text-xs font-medium text-gray-700"> Имя * </label>
        <input
          id="name"
          v-model="form.name"
          type="text"
          required
          class="w-full px-2.5 py-2 text-sm rounded-lg border border-gray-300 bg-white text-gray-900 focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all"
          placeholder="Иван Иванов"
        />
      </div>

      <!-- Телефон с маской -->
      <div class="space-y-1">
        <label for="phone" class="block text-xs font-medium text-gray-700"> Телефон * </label>
        <input
          id="phone"
          v-model="form.phone"
          type="tel"
          required
          class="w-full px-2.5 py-2 text-sm rounded-lg border border-gray-300 bg-white text-gray-900 focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all"
          placeholder="+7 (999) 000-00-00"
          maxlength="18"
          @input="formatPhone"
        />
      </div>

      <!-- Email -->
      <div class="space-y-1">
        <label for="email" class="block text-xs font-medium text-gray-700"> Email </label>
        <input
          id="email"
          v-model="form.email"
          type="email"
          class="w-full px-2.5 py-2 text-sm rounded-lg border border-gray-300 bg-white text-gray-900 focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all"
          placeholder="email@example.com"
        />
      </div>

      <!-- Telegram -->
      <div class="space-y-1">
        <label for="telegram" class="block text-xs font-medium text-gray-700"> Telegram </label>
        <input
          id="telegram"
          v-model="form.telegram"
          type="text"
          class="w-full px-2.5 py-2 text-sm rounded-lg border border-gray-300 bg-white text-gray-900 focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all"
          placeholder="@username"
        />
      </div>

      <!-- Чекбоксы согласия -->
      <div class="space-y-2 pt-3 border-t border-gray-200">
        <div class="flex items-start gap-2">
          <input
            id="consent-policy"
            v-model="form.consentPolicy"
            type="checkbox"
            class="shrink-0 w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-600 mt-0.5"
          />
          <label for="consent-policy" class="text-xs text-gray-600 leading-tight">
            Я ознакомился(-лась) и принимаю условия
            <a href="/privacy" target="_blank" class="text-purple-600 hover:underline"
              >Политики конфиденциальности</a
            >
          </label>
        </div>

        <div class="flex items-start gap-2">
          <input
            id="consent-processing"
            v-model="form.consentProcessing"
            type="checkbox"
            class="shrink-0 w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-600 mt-0.5"
          />
          <label for="consent-processing" class="text-xs text-gray-600 leading-tight">
            Даю согласие ИП Селифанову А. на обработку моих персональных данных (имя, email,
            телефон) в целях обратной связи и оказания услуг
          </label>
        </div>
      </div>

      <!-- Кнопка -->
      <button
        type="submit"
        :disabled="!isFormValid || isSubmitting"
        class="w-full px-4 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl mt-3"
      >
        {{ isSubmitting ? 'Отправка...' : 'Отправить' }}
      </button>

      <!-- Сообщение об успехе/ошибке -->
      <div
        v-if="status.message"
        class="mt-2 p-2 rounded-lg text-xs"
        :class="
          status.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
        "
      >
        {{ status.message }}
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { submitContactFormWithNotification } from '~/composables/useTelegramNotification'

const props = defineProps({
  defaultSource: {
    type: String,
    default: '', // Можно передать источник из родителя
  },
})

const route = useRoute()

// Услуги для выбора (из блока услуг на главной)
const services = [
  { label: 'Диагностика', value: 'Диагностика' },
  { label: 'Консультация', value: 'Консультация' },
  { label: 'Менторство', value: 'Менторство' }
]

const form = ref({
  name: '',
  phone: '',
  email: '',
  telegram: '',
  service: '', // Выбранная услуга
  source: props.defaultSource || '', // Скрытое поле - источник заявки
  consentPolicy: false,
  consentProcessing: false,
})

const isSubmitting = ref(false)
const status = ref({ message: '', type: '' })

// Функция выбора услуги
function selectService(serviceValue) {
  form.value.service = serviceValue
}

// Валидация формы - имя, телефон и согласие обязательны
const isFormValid = computed(() => {
  return (
    form.value.name.trim() !== '' &&
    form.value.phone.trim() !== '' &&
    form.value.consentPolicy &&
    form.value.consentProcessing
  )
})

// Определяем источник заявки при загрузке
onMounted(() => {
  // Если источник передан из родителя - используем его
  if (props.defaultSource) {
    form.value.source = props.defaultSource
    return
  }

  // Иначе определяем по маршруту
  const path = route.path
  const pageNames = {
    '/': 'Главная страница',
    '/consultation': 'Консультация',
    '/mentorship': 'Менторство',
    '/yappie': 'Веб-разработка',
    '/networking': 'Нетворкинг',
    '/business': 'Бизнес-сетка',
    '/study': 'Обучение',
    '/blog': 'Блог',
  }

  form.value.source = pageNames[path] || `Страница: ${path}`
})

// Форматирование телефона по маске +7 (XXX) XXX-XX-XX или 8 (XXX) XXX-XX-XX
function formatPhone(event) {
  let value = event.target.value.replace(/\D/g, '')

  if (value.length === 0) {
    form.value.phone = ''
    return
  }

  // Если начинается с 8, оставляем 8
  // Если начинается с 7, оставляем 7
  // Если с другого, добавляем 7

  // Ограничиваем длину (11 цифр для полного номера)
  if (value.length > 11) {
    value = value.slice(0, 11)
  }

  // Определяем префикс
  let prefix = ''
  let startIndex = 0

  if (value[0] === '8') {
    prefix = '8'
    startIndex = 1
  } else if (value[0] === '7') {
    prefix = '+7'
    startIndex = 1
  } else {
    // Если ввели без префикса, считаем что это +7
    prefix = '+7'
    startIndex = 0
  }

  // Форматируем остальную часть
  let formatted = prefix
  const digits = value.slice(startIndex)

  if (digits.length > 0) {
    formatted += ' (' + digits.slice(0, 3)
  }
  if (digits.length > 3) {
    formatted += ') ' + digits.slice(3, 6)
  }
  if (digits.length > 6) {
    formatted += '-' + digits.slice(6, 8)
  }
  if (digits.length > 8) {
    formatted += '-' + digits.slice(8, 10)
  }

  form.value.phone = formatted
}

async function handleSubmit() {
  if (!isFormValid.value) {
    status.value = {
      message: 'Пожалуйста, заполните имя и телефон, а также примите согласие',
      type: 'error',
    }
    return
  }

  isSubmitting.value = true
  status.value = { message: '', type: '' }

  try {
    // Используем новую функцию с уведомлением в Telegram
    const result = await submitContactFormWithNotification({
      name: form.value.name,
      phone: form.value.phone,
      email: form.value.email,
      telegram: form.value.telegram,
      service: form.value.service, // Добавляем услугу
      source: form.value.source,
    })

    if (result.success) {
      status.value = { message: '✅ Спасибо! Я свяжусь с вами в ближайшее время', type: 'success' }

      // Очистить форму (кроме source)
      form.value = {
        name: '',
        phone: '',
        email: '',
        telegram: '',
        service: '', // Очищаем услугу
        source: form.value.source, // Сохраняем источник
        consentPolicy: false,
        consentProcessing: false,
      }

      // Скрыть сообщение через 5 секунд
      setTimeout(() => {
        status.value = { message: '', type: '' }
      }, 5000)
    } else {
      throw new Error(result.error)
    }
  } catch (error) {
    console.error('Ошибка отправки формы:', error)
    status.value = {
      message: '❌ Произошла ошибка. Попробуйте позже или напишите напрямую в Telegram',
      type: 'error',
    }
  } finally {
    isSubmitting.value = false
  }
}
</script>
