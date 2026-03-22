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

      <!-- Телефон -->
      <div>
        <label for="phone" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Телефон
        </label>
        <input
          id="phone"
          v-model="form.phone"
          type="tel"
          class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all"
          placeholder="+7 (999) 000-00-00"
        />
      </div>

      <!-- Email или Telegram -->
      <div>
        <label for="contact" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Email или Telegram *
        </label>
        <input
          id="contact"
          v-model="form.contact"
          type="text"
          required
          class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all"
          placeholder="email@example.com или @username"
        />
      </div>

      <!-- Согласие 1 -->
      <div class="flex items-start gap-2">
        <input
          id="consent-read"
          v-model="form.consentRead"
          type="checkbox"
          required
          class="mt-1 w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-600"
        />
        <label for="consent-read" class="text-sm text-gray-600 dark:text-gray-400">
          Я ознакомился(-лась) с
          <a href="/privacy" target="_blank" class="text-purple-600 hover:underline">Политикой обработки персональных данных</a>
        </label>
      </div>

      <!-- Согласие 2 -->
      <div class="flex items-start gap-2">
        <input
          id="consent-give"
          v-model="form.consentGive"
          type="checkbox"
          required
          class="mt-1 w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-600"
        />
        <label for="consent-give" class="text-sm text-gray-600 dark:text-gray-400">
          Даю согласие ИП Селифанову А. на обработку моих персональных данных (имя, email, телефон) в целях обратной связи и оказания услуг
        </label>
      </div>

      <!-- Кнопка -->
      <button
        type="submit"
        :disabled="isSubmitting"
        class="w-full px-6 py-4 bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white font-semibold rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed transform hover:-translate-y-0.5"
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
import { ref } from 'vue'
import { useSupabase } from '~/composables/useSupabase'

const supabase = useSupabase()

const form = ref({
  name: '',
  phone: '',
  contact: '',
  consentRead: false,
  consentGive: false
})

const isSubmitting = ref(false)
const status = ref({ message: '', type: '' })

async function handleSubmit() {
  if (!form.value.consentRead || !form.value.consentGive) {
    status.value = { message: 'Пожалуйста, подтвердите оба согласия на обработку данных', type: 'error' }
    return
  }

  isSubmitting.value = true
  status.value = { message: '', type: '' }

  try {
    const { data, error } = await supabase
      .from('contact_submissions')
      .insert([{
        name: form.value.name,
        phone: form.value.phone,
        contact: form.value.contact,
        created_at: new Date().toISOString()
      }])
      .select()
      .single()

    if (error) throw error

    status.value = { message: '✅ Спасибо! Я свяжусь с вами в ближайшее время', type: 'success' }
    
    // Очистить форму
    form.value = {
      name: '',
      phone: '',
      contact: '',
      consentRead: false,
      consentGive: false
    }

    // Скрыть сообщение через 5 секунд
    setTimeout(() => {
      status.value = { message: '', type: '' }
    }, 5000)

  } catch (error) {
    console.error('Ошибка отправки формы:', error)
    status.value = { message: '❌ Произошла ошибка. Попробуйте позже или напишите напрямую в Telegram', type: 'error' }
  } finally {
    isSubmitting.value = false
  }
}
</script>
