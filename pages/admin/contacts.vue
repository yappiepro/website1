<template>
  <div class="min-h-screen bg-white">
    <!-- Страница входа -->
    <div v-if="!isAuthenticated" class="min-h-screen flex items-center justify-center px-4">
      <div class="max-w-md w-full bg-white rounded-xl shadow-xl p-8 border border-gray-200">
        <h1 class="text-2xl font-bold text-gray-900 mb-6 text-center">
          🔐 Вход в админ-панель
        </h1>

        <form @submit.prevent="handleLogin" class="space-y-6">
          <div>
            <label for="password" class="block text-sm font-medium text-gray-700 mb-2">
              Пароль
            </label>
            <input
              id="password"
              v-model="password"
              type="password"
              required
              class="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all"
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

          <div v-if="loginError" class="p-4 bg-red-50 text-red-800 rounded-lg border border-red-200">
            {{ loginError }}
          </div>
        </form>

        <p class="mt-6 text-center text-sm text-gray-500">
          <a href="/" class="text-purple-600 hover:underline">← Вернуться на сайт</a>
        </p>
      </div>
    </div>

    <!-- Админ-панель -->
    <div v-else>
      <!-- Навигация -->
      <nav class="bg-white shadow-sm border-b border-gray-200">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <h1 class="text-xl font-bold text-gray-900">Заявки с формы</h1>
          <button
            @click="handleLogout"
            class="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 transition-all"
          >
            Выйти
          </button>
        </div>
      </nav>

      <!-- Контент -->
      <main class="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <!-- Статистика -->
        <div v-if="contacts.length > 0" class="mb-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div class="bg-white border border-gray-200 rounded-xl shadow-sm p-6">
            <div class="text-sm text-gray-500">Всего заявок</div>
            <div class="text-3xl font-bold text-gray-900 mt-2">{{ contacts.length }}</div>
          </div>
          <div class="bg-white border border-gray-200 rounded-xl shadow-sm p-6">
            <div class="text-sm text-gray-500">Новых</div>
            <div class="text-3xl font-bold text-gray-900 mt-2">{{ newCount }}</div>
          </div>
          <div class="bg-white border border-gray-200 rounded-xl shadow-sm p-6">
            <div class="text-sm text-gray-500">Обработано</div>
            <div class="text-3xl font-bold text-gray-900 mt-2">{{ readCount }}</div>
          </div>
        </div>

        <!-- Панель управления -->
        <div class="mb-6 flex items-center justify-between gap-4">
          <!-- Фильтры -->
          <div class="flex gap-2">
            <button
              @click="filter = 'all'"
              :class="filter === 'all' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'"
              class="px-4 py-2 rounded-lg text-sm font-medium transition-all"
            >
              Все
            </button>
            <button
              @click="filter = 'new'"
              :class="filter === 'new' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'"
              class="px-4 py-2 rounded-lg text-sm font-medium transition-all"
            >
              Новые
            </button>
            <button
              @click="filter = 'read'"
              :class="filter === 'read' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'"
              class="px-4 py-2 rounded-lg text-sm font-medium transition-all"
            >
              Обработанные
            </button>
          </div>

          <!-- Кнопка обновления -->
          <button
            @click="loadContacts"
            :disabled="isLoading"
            class="flex items-center gap-2 px-4 py-2 bg-gray-900 hover:bg-gray-800 text-white rounded-lg font-medium transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <svg v-if="isLoading" class="animate-spin h-4 w-4" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none"/>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
            </svg>
            <svg v-else class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
            </svg>
            {{ isLoading ? 'Загрузка...' : 'Обновить' }}
          </button>
        </div>

        <div v-if="isLoading" class="text-center py-12">
          <div class="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
        </div>

        <div v-else-if="filteredContacts.length === 0" class="text-center py-12">
          <p class="text-gray-500">Заявок нет</p>
        </div>

        <div v-else class="overflow-x-auto bg-white border border-gray-200 rounded-xl shadow-sm">
          <table class="min-w-full">
            <thead class="bg-gray-900">
              <tr>
                <th class="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                  Дата
                </th>
                <th class="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                  Имя
                </th>
                <th class="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                  Телефон
                </th>
                <th class="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                  Email
                </th>
                <th class="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                  Telegram
                </th>
                <th class="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                  Источник
                </th>
                <th class="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                  Статус
                </th>
                <th class="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                  Действия
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
              <tr 
                v-for="contact in filteredContacts" 
                :key="contact.id" 
                :class="[
                  'hover:bg-gray-50 transition-all',
                  !contact.is_read ? 'bg-gray-50' : ''
                ]"
              >
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {{ formatDate(contact.created_at) }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {{ contact.name }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <a v-if="contact.phone" :href="'tel:' + contact.phone" class="hover:text-gray-900 hover:underline transition-all" target="_blank" rel="noopener">
                    {{ contact.phone }}
                  </a>
                  <span v-else>—</span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <a v-if="contact.email" :href="'mailto:' + contact.email" class="hover:text-gray-900 hover:underline transition-all" target="_blank" rel="noopener">
                    {{ contact.email }}
                  </a>
                  <span v-else>—</span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <a v-if="contact.telegram" :href="'https://t.me/' + contact.telegram.replace('@', '')" class="hover:text-gray-900 hover:underline transition-all" target="_blank" rel="noopener">
                    {{ contact.telegram }}
                  </a>
                  <span v-else>—</span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {{ contact.source || '—' }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span 
                    :class="contact.is_read ? 'bg-gray-100 text-gray-800' : 'bg-gray-900 text-white'"
                    class="px-3 py-1 rounded-full text-xs font-medium uppercase"
                  >
                    {{ contact.is_read ? 'done' : 'new' }}
                  </span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm">
                  <button
                    @click="toggleReadStatus(contact)"
                    :disabled="isUpdating.includes(contact.id)"
                    :class="contact.is_read ? 'bg-gray-100 hover:bg-gray-200 text-gray-800' : 'bg-gray-900 hover:bg-gray-800 text-white'"
                    class="px-4 py-2 rounded-lg font-medium transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {{ isUpdating.includes(contact.id) ? '...' : (contact.is_read ? 'Вернуть в новые' : 'Обработан') }}
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useSupabase } from '~/composables/useSupabase'

const supabase = useSupabase()
const isAuthenticated = ref(false)
const isLoggingIn = ref(false)
const isLoading = ref(false)
const isUpdating = ref([])
const password = ref('')
const loginError = ref('')
const contacts = ref([])
const filter = ref('all') // all, new, read

const ADMIN_PASSWORD = useRuntimeConfig().public.adminPassword || 'Bk62li4z'

const filteredContacts = computed(() => {
  if (filter.value === 'all') return contacts.value
  if (filter.value === 'new') return contacts.value.filter(c => !c.is_read)
  if (filter.value === 'read') return contacts.value.filter(c => c.is_read)
  return contacts.value
})

const newCount = computed(() => contacts.value.filter(c => !c.is_read).length)
const readCount = computed(() => contacts.value.filter(c => c.is_read).length)

function handleLogin() {
  isLoggingIn.value = true
  loginError.value = ''

  setTimeout(() => {
    if (password.value === ADMIN_PASSWORD) {
      isAuthenticated.value = true
      localStorage.setItem('admin_authenticated', 'true')
    } else {
      loginError.value = 'Неверный пароль'
    }
    isLoggingIn.value = false
  }, 500)
}

function handleLogout() {
  isAuthenticated.value = false
  localStorage.removeItem('admin_authenticated')
  password.value = ''
}

async function loadContacts() {
  if (!supabase) return

  isLoading.value = true

  const { data, error } = await supabase
    .from('contact_submissions')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Error loading contacts:', error)
  } else {
    contacts.value = data || []
  }

  isLoading.value = false
}

async function toggleReadStatus(contact) {
  if (!supabase) return

  const newStatus = !contact.is_read
  isUpdating.value.push(contact.id)

  const { error } = await supabase
    .from('contact_submissions')
    .update({ is_read: newStatus })
    .eq('id', contact.id)

  if (error) {
    console.error('Error updating status:', error)
  } else {
    contact.is_read = newStatus
  }

  isUpdating.value = isUpdating.value.filter(id => id !== contact.id)
}

function formatDate(dateString) {
  const date = new Date(dateString)
  return date.toLocaleDateString('ru-RU', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit'
  })
}

onMounted(() => {
  const authenticated = localStorage.getItem('admin_authenticated') === 'true'
  if (authenticated) {
    isAuthenticated.value = true
    loadContacts()
  }
})
</script>
