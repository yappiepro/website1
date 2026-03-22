<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <!-- Страница входа -->
    <div v-if="!isAuthenticated" class="min-h-screen flex items-center justify-center px-4">
      <div class="max-w-md w-full bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
        <h1 class="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
          🔐 Вход в админ-панель
        </h1>
        
        <form @submit.prevent="handleLogin" class="space-y-6">
          <div>
            <label for="password" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Пароль
            </label>
            <input
              id="password"
              v-model="password"
              type="password"
              required
              class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all"
              placeholder="Введите пароль"
            />
          </div>
          
          <button
            type="submit"
            :disabled="isLoggingIn"
            class="w-full px-6 py-4 bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white font-semibold rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {{ isLoggingIn ? 'Проверка...' : 'Войти' }}
          </button>
          
          <div v-if="loginError" class="p-4 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded-lg">
            {{ loginError }}
          </div>
        </form>
        
        <p class="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
          <a href="/" class="text-purple-600 hover:underline">← Вернуться на сайт</a>
        </p>
      </div>
    </div>

    <!-- Админ-панель -->
    <div v-else>
      <!-- Навигация -->
      <nav class="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <h1 class="text-xl font-bold text-gray-900 dark:text-white">Заявки с формы</h1>
          <button
            @click="handleLogout"
            class="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
          >
            Выйти
          </button>
        </div>
      </nav>

      <!-- Контент -->
      <main class="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <!-- Статистика -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <div class="text-sm text-gray-500 dark:text-gray-400">Всего заявок</div>
            <div class="text-3xl font-bold text-gray-900 dark:text-white">{{ stats.total }}</div>
          </div>
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <div class="text-sm text-gray-500 dark:text-gray-400">Новые</div>
            <div class="text-3xl font-bold text-blue-600">{{ stats.new }}</div>
          </div>
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <div class="text-sm text-gray-500 dark:text-gray-400">Обработано</div>
            <div class="text-3xl font-bold text-green-600">{{ stats.replied }}</div>
          </div>
        </div>
      </div>

      <!-- Таблица заявок -->
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
        <div class="px-6 py-4 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
          <h2 class="text-lg font-semibold text-gray-900 dark:text-white">Все заявки</h2>
          <button
            @click="loadSubmissions"
            :disabled="isLoading"
            class="px-4 py-2 text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors disabled:opacity-50"
          >
            {{ isLoading ? 'Обновление...' : 'Обновить' }}
          </button>
        </div>

        <div class="overflow-x-auto">
          <table class="w-full">
            <thead class="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Дата
                </th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Имя
                </th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Контакты
                </th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Статус
                </th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Действия
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
              <tr v-for="item in submissions" :key="item.id" :class="['hover:bg-gray-50 dark:hover:bg-gray-700', !item.is_read ? 'bg-blue-50 dark:bg-blue-900/20' : '']">
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                  {{ formatDate(item.created_at) }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm font-medium text-gray-900 dark:text-white">{{ item.name }}</div>
                </td>
                <td class="px-6 py-4">
                  <div class="text-sm text-gray-900 dark:text-white">{{ item.contact }}</div>
                  <div v-if="item.phone" class="text-sm text-gray-500 dark:text-gray-400">{{ item.phone }}</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span :class="['px-2 py-1 text-xs font-medium rounded-full', item.is_read ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200']">
                    {{ item.is_read ? 'Обработано' : 'Новая' }}
                  </span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm">
                  <button
                    @click="toggleReadStatus(item)"
                    :disabled="isUpdating"
                    :class="['px-3 py-1.5 text-xs font-medium rounded-lg transition-colors disabled:opacity-50', 
                      item.is_read 
                        ? 'bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-600 dark:text-gray-100 dark:hover:bg-gray-500' 
                        : 'bg-purple-600 text-white hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-400']"
                  >
                    {{ item.is_read ? '✓ Просмотрено' : '○ Отметить просмотренным' }}
                  </button>
                </td>
              </tr>
              <tr v-if="submissions.length === 0">
                <td colspan="5" class="px-6 py-8 text-center text-gray-500 dark:text-gray-400">
                  Пока нет заявок
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useSupabase } from '~/composables/useSupabase'

// Запрет индексации
useSeoMeta({
  title: 'Заявки с формы — Админ панель',
  description: 'Панель администратора для просмотра заявок',
  robots: 'noindex, nofollow'
})

useHead({
  meta: [
    { name: 'robots', content: 'noindex, nofollow' }
  ]
})

const supabase = useSupabase()
const submissions = ref([])
const isLoading = ref(false)
const isUpdating = ref(false)

// Аутентификация
const password = ref('')
const isLoggingIn = ref(false)
const loginError = ref('')
const isAuthenticated = ref(false)

// Пароль (хранится в .env или задайте здесь)
const ADMIN_PASSWORD = useRuntimeConfig().public.adminPassword || 'admin123'

// Проверка сохранения входа
onMounted(() => {
  const savedAuth = localStorage.getItem('admin_authenticated')
  if (savedAuth === 'true') {
    isAuthenticated.value = true
    loadSubmissions()
  }
})

// Вход
function handleLogin() {
  isLoggingIn.value = true
  loginError.value = ''
  
  setTimeout(() => {
    if (password.value === ADMIN_PASSWORD) {
      isAuthenticated.value = true
      localStorage.setItem('admin_authenticated', 'true')
      loadSubmissions()
    } else {
      loginError.value = 'Неверный пароль'
    }
    isLoggingIn.value = false
  }, 500)
}

// Выход
function handleLogout() {
  isAuthenticated.value = false
  localStorage.removeItem('admin_authenticated')
  password.value = ''
}

// Статистика
const stats = computed(() => {
  const total = submissions.value.length
  const newCount = submissions.value.filter(s => !s.is_read).length
  const replied = submissions.value.filter(s => s.is_read).length
  return { total, new: newCount, replied }
})

// Загрузка заявок
async function loadSubmissions() {
  isLoading.value = true
  
  try {
    // Используем service role key для обхода RLS
    const { data, error } = await supabase
      .from('contact_submissions')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) {
      console.error('Supabase error:', error)
      throw error
    }
    
    submissions.value = data || []
  } catch (error) {
    console.error('Ошибка загрузки заявок:', error.message, error.details)
    alert('Не удалось загрузить заявки: ' + error.message + '\n\nПроверьте:\n1. RLS политики в Supabase\n2. Или выполните SQL из supabase/update_contact_rls_policies.sql')
  } finally {
    isLoading.value = false
  }
}

// Переключение статуса прочтения
async function toggleReadStatus(item) {
  isUpdating.value = true
  
  try {
    const newStatus = !item.is_read
    
    const { error } = await supabase
      .from('contact_submissions')
      .update({ 
        is_read: newStatus,
        replied_at: newStatus ? new Date().toISOString() : null
      })
      .eq('id', item.id)

    if (error) throw error
    
    // Обновить локально
    item.is_read = newStatus
    if (newStatus) {
      item.replied_at = new Date().toISOString()
    } else {
      item.replied_at = null
    }
  } catch (error) {
    console.error('Ошибка обновления статуса:', error)
    alert('Не удалось обновить статус')
  } finally {
    isUpdating.value = false
  }
}

// Форматирование даты
function formatDate(dateString) {
  if (!dateString) return ''
  const date = new Date(dateString)
  return date.toLocaleDateString('ru-RU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })
}

onMounted(() => {
  loadSubmissions()
})
</script>

<style scoped>
tbody tr {
  transition: background-color 0.2s;
}
</style>
