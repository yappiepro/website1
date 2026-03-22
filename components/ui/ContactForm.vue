<template>
  <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 md:p-8">
    <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">
      Остались вопросы?
    </h3>
    <p class="text-gray-600 dark:text-gray-400 mb-6">
      Заполните форму и я свяжусь с вами в течение 24 часов
    </p>

    <form @submit.prevent="handleSubmit" class="space-y-4">
      <!-- Имя -->
      <div>
        <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Имя *
        </label>
        <input
          id="name"
          v-model="form.name"
          type="text"
          required
          class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all"
          placeholder="Иван Иванов"
        />
      </div>

      <!-- Телефон с маской -->
      <div>
        <label for="phone" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Телефон
        </label>
        <input
          id="phone"
          v-model="form.phone"
          type="tel"
          @input="formatPhone"
          class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all"
          placeholder="+7 (999) 000-00-00"
          maxlength="18"
        />
      </div>

      <!-- Email -->
      <div>
        <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Email
        </label>
        <input
          id="email"
          v-model="form.email"
          type="email"
          class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all"
          placeholder="email@example.com"
        />
      </div>

      <!-- Telegram -->
      <div>
        <label for="telegram" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Telegram
        </label>
        <input
          id="telegram"
          v-model="form.telegram"
          type="text"
          class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all"
          placeholder="@username"
        />
      </div>

      <!-- Чекбоксы согласия -->
      <div class="space-y-3">
        <div class="flex items-start gap-2.5">
          <input
            id="consent-policy"
            v-model="form.consentPolicy"
            type="checkbox"
            class="shrink-0 w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-600 mt-1"
          />
          <label for="consent-policy" class="text-sm text-gray-600 dark:text-gray-400 leading-snug">
            Я ознакомился(-лась) и принимаю условия
            <a href="/privacy" target="_blank" class="text-purple-600 hover:underline">Политики конфиденциальности</a>
          </label>
        </div>

        <div class="flex items-start gap-2.5">
          <input
            id="consent-processing"
            v-model="form.consentProcessing"
            type="checkbox"
            class="shrink-0 w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-600 mt-1"
          />
          <label for="consent-processing" class="text-sm text-gray-600 dark:text-gray-400 leading-snug">
            Даю согласие ИП Селифанову А. на обработку моих персональных данных (имя, email, телефон) в целях обратной связи и оказания услуг
          </label>
        </div>
      </div>

      <!-- Кнопка -->
      <button
        type="submit"
        :disabled="!isFormValid || isSubmitting"
        class="w-full px-6 py-4 bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white font-semibold rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none transform hover:-translate-y-0.5"
      >
        {{ isSubmitting ? 'Отправка...' : 'Отправить' }}
      </button>

      <!-- Сообщение об успехе/ошибке -->
      <div v-if="status.message" :class="['mt-4 p-4 rounded-lg', status.type === 'success' ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200' : 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200']">
        {{ status.message }}
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useSupabase } from '~/composables/useSupabase'
import { submitContactFormWithNotification } from '~/composables/useTelegramNotification'

const supabase = useSupabase()

const form = ref({
  name: '',
  phone: '',
  email: '',
  telegram: '',
  consentPolicy: false,
  consentProcessing: false
})

const isSubmitting = ref(false)
const status = ref({ message: '', type: '' })

// Валидация формы - хотя бы email или telegram должны быть заполнены
const isFormValid = computed(() => {
  return form.value.name.trim() !== '' &&
         (form.value.email.trim() !== '' || form.value.telegram.trim() !== '') &&
         form.value.consentPolicy &&
         form.value.consentProcessing
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
    status.value = { message: 'Пожалуйста, заполните все обязательные поля', type: 'error' }
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
      telegram: form.value.telegram
    })

    if (result.success) {
      status.value = { message: '✅ Спасибо! Я свяжусь с вами в ближайшее время', type: 'success' }
      
      // Очистить форму
      form.value = {
        name: '',
        phone: '',
        email: '',
        telegram: '',
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
