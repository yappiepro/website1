<template>
  <div class="w-full">
    <h3 class="text-xl font-bold text-gray-900 mb-4 text-center">
      Остались вопросы?
    </h3>
    <p class="text-sm text-gray-600 mb-8 text-center">
      Заполните форму и я свяжусь с вами в течение 24 часов
    </p>

    <form @submit.prevent="handleSubmit" class="space-y-5">
      <!-- Имя -->
      <div class="space-y-1">
        <label for="name" class="block text-sm font-medium text-gray-700">
          Имя *
        </label>
        <input
          id="name"
          v-model="form.name"
          type="text"
          required
          class="w-full px-4 py-3 text-base rounded-lg border border-gray-300 bg-white text-gray-900 focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all"
          placeholder="Иван Иванов"
        />
      </div>

      <!-- Телефон с маской -->
      <div class="space-y-1">
        <label for="phone" class="block text-sm font-medium text-gray-700">
          Телефон *
        </label>
        <input
          id="phone"
          v-model="form.phone"
          type="tel"
          @input="formatPhone"
          required
          class="w-full px-4 py-3 text-base rounded-lg border border-gray-300 bg-white text-gray-900 focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all"
          placeholder="+7 (999) 000-00-00"
          maxlength="18"
        />
      </div>

      <!-- Email -->
      <div class="space-y-1">
        <label for="email" class="block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          id="email"
          v-model="form.email"
          type="email"
          class="w-full px-4 py-3 text-base rounded-lg border border-gray-300 bg-white text-gray-900 focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all"
          placeholder="email@example.com"
        />
      </div>

      <!-- Telegram -->
      <div class="space-y-1">
        <label for="telegram" class="block text-sm font-medium text-gray-700">
          Telegram
        </label>
        <input
          id="telegram"
          v-model="form.telegram"
          type="text"
          class="w-full px-4 py-3 text-base rounded-lg border border-gray-300 bg-white text-gray-900 focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all"
          placeholder="@username"
        />
      </div>

      <!-- Чекбоксы согласия -->
      <div class="space-y-4 pt-6 border-t border-gray-200">
        <div class="flex items-start gap-3">
          <input
            id="consent-policy"
            v-model="form.consentPolicy"
            type="checkbox"
            class="shrink-0 w-5 h-5 text-purple-600 border-gray-300 rounded focus:ring-purple-600 mt-0.5"
          />
          <label for="consent-policy" class="text-sm text-gray-600 leading-relaxed">
            Я ознакомился(-лась) и принимаю условия
            <a href="/privacy" target="_blank" class="text-purple-600 hover:underline">Политики конфиденциальности</a>
          </label>
        </div>

        <div class="flex items-start gap-3">
          <input
            id="consent-processing"
            v-model="form.consentProcessing"
            type="checkbox"
            class="shrink-0 w-5 h-5 text-purple-600 border-gray-300 rounded focus:ring-purple-600 mt-0.5"
          />
          <label for="consent-processing" class="text-sm text-gray-600 leading-relaxed">
            Даю согласие ИП Селифанову А. на обработку моих персональных данных (имя, email, телефон) в целях обратной связи и оказания услуг
          </label>
        </div>
      </div>

      <!-- Кнопка -->
      <button
        type="submit"
        :disabled="!isFormValid || isSubmitting"
        class="w-full px-6 py-4 text-base font-semibold text-white bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl mt-6"
      >
        {{ isSubmitting ? 'Отправка...' : 'Отправить' }}
      </button>

      <!-- Сообщение об успехе/ошибке -->
      <div v-if="status.message" class="mt-4 p-4 rounded-lg text-sm" :class="status.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'">
        {{ status.message }}
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useSupabase } from '~/composables/useSupabase'
import { submitContactFormWithNotification } from '~/composables/useTelegramNotification'

const props = defineProps({
  defaultSource: {
    type: String,
    default: '' // Можно передать источник из родителя
  }
})

const route = useRoute()
const supabase = useSupabase()

const form = ref({
  name: '',
  phone: '',
  email: '',
  telegram: '',
  source: props.defaultSource || '', // Скрытое поле - источник заявки
  consentPolicy: false,
  consentProcessing: false
})

const isSubmitting = ref(false)
const status = ref({ message: '', type: '' })

// Валидация формы - имя, телефон и согласие обязательны
const isFormValid = computed(() => {
  return form.value.name.trim() !== '' &&
         form.value.phone.trim() !== '' &&
         form.value.consentPolicy &&
         form.value.consentProcessing
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
    '/blog': 'Блог'
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
    status.value = { message: 'Пожалуйста, заполните имя и телефон, а также примите согласие', type: 'error' }
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
      source: form.value.source
    })

    if (result.success) {
      status.value = { message: '✅ Спасибо! Я свяжусь с вами в ближайшее время', type: 'success' }
      
      // Очистить форму (кроме source)
      form.value = {
        name: '',
        phone: '',
        email: '',
        telegram: '',
        source: form.value.source, // Сохраняем источник
        consentPolicy: false,
        consentProcessing: false
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
    status.value = { message: '❌ Произошла ошибка. Попробуйте позже или напишите напрямую в Telegram', type: 'error' }
  } finally {
    isSubmitting.value = false
  }
}
</script>
