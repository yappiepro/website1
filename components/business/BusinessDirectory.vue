<template>
  <div class="space-y-6">
    <!-- Заголовок + кнопка добавления -->
    <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <div>
        <h3 class="text-2xl font-bold text-gray-900">Каталог участников</h3>
        <p class="text-sm text-gray-500 mt-1">Бизнесы и проекты участников клуба</p>
      </div>
      <button
        type="button"
        class="inline-flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white text-sm font-medium rounded-xl hover:from-purple-500 hover:to-fuchsia-500 transition-all shadow-lg shadow-purple-500/25"
        @click="showAddForm = !showAddForm"
      >
        <Plus class="w-4 h-4" />
        Добавить бизнес
      </button>
    </div>

    <!-- Форма добавления -->
    <div v-if="showAddForm" class="p-6 bg-white rounded-2xl border border-purple-200 shadow-lg">
      <h4 class="text-lg font-semibold text-gray-900 mb-4">Новый бизнес</h4>

      <div
        v-if="formError"
        class="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700"
      >
        {{ formError }}
      </div>

      <form class="grid grid-cols-1 sm:grid-cols-2 gap-4" @submit.prevent="addContact">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Название бизнеса *</label>
          <input
            v-model="form.business_name"
            type="text"
            required
            placeholder="Мой бизнес"
            class="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Сфера</label>
          <input
            v-model="form.category"
            type="text"
            placeholder="IT, Маркетинг, Дизайн..."
            class="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div class="sm:col-span-2">
          <label class="block text-sm font-medium text-gray-700 mb-1">Описание</label>
          <textarea
            v-model="form.description"
            rows="2"
            placeholder="Чем занимается ваш бизнес..."
            class="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Telegram</label>
          <input
            v-model="form.telegram_link"
            type="text"
            placeholder="@username или ссылка"
            class="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Сайт</label>
          <input
            v-model="form.website_url"
            type="url"
            placeholder="https://example.com"
            class="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div class="sm:col-span-2 flex gap-3">
          <button
            type="submit"
            :disabled="formLoading"
            class="px-6 py-2.5 bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white text-sm font-medium rounded-xl hover:from-purple-500 hover:to-fuchsia-500 transition-all disabled:opacity-50"
          >
            {{ formLoading ? 'Отправка...' : 'Добавить' }}
          </button>
          <button
            type="button"
            class="px-6 py-2.5 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            @click="resetForm"
          >
            Отмена
          </button>
        </div>
      </form>
    </div>

    <!-- Контент только на клиенте -->
    <ClientOnly>
      <!-- Статус загрузки -->
      <div v-if="loading" class="flex items-center justify-center py-12">
        <svg class="animate-spin w-8 h-8 text-purple-600" viewBox="0 0 24 24" fill="none">
          <circle
            class="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            stroke-width="4"
          />
          <path
            class="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
          />
        </svg>
      </div>

      <!-- Ошибка -->
      <div
        v-else-if="fetchError"
        class="p-6 bg-red-50 border border-red-200 rounded-2xl text-center"
      >
        <p class="text-red-700">{{ fetchError }}</p>
      </div>

      <!-- Пусто -->
      <div v-else-if="contacts.length === 0" class="p-6 bg-gray-50 rounded-2xl text-center">
        <p class="text-gray-500">Пока нет бизнесов в каталоге. Будьте первым!</p>
      </div>

      <!-- Список контактов -->
      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div
          v-for="contact in contacts"
          :key="contact.id"
          class="p-5 bg-white rounded-2xl border border-gray-200 hover:border-purple-200 hover:shadow-lg transition-all"
        >
          <span
            v-if="contact.category"
            class="inline-block px-2.5 py-1 text-xs font-medium text-purple-700 bg-purple-100 rounded-full"
          >
            {{ contact.category }}
          </span>

          <h4 class="text-lg font-bold text-gray-900 mt-3">{{ contact.business_name }}</h4>

          <p v-if="contact.description" class="text-sm text-gray-600 mt-2 line-clamp-3">
            {{ contact.description }}
          </p>

          <div class="flex flex-wrap gap-2 mt-4">
            <a
              v-if="contact.telegram_link"
              :href="normalizeTelegram(contact.telegram_link)"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-blue-700 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors"
            >
              <Send class="w-3.5 h-3.5" />
              Telegram
            </a>
            <a
              v-if="contact.website_url"
              :href="contact.website_url"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
            >
              <ExternalLink class="w-3.5 h-3.5" />
              Сайт
            </a>
          </div>

          <p class="text-xs text-gray-400 mt-4">
            {{ formatDate(contact.created_at) }}
          </p>
        </div>
      </div>
    </ClientOnly>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Plus, Send, ExternalLink } from 'lucide-vue-next'

const contacts = ref([])
const loading = ref(true)
const fetchError = ref('')
const showAddForm = ref(false)
const formLoading = ref(false)
const formError = ref('')
const form = ref({
  business_name: '',
  category: '',
  description: '',
  telegram_link: '',
  website_url: '',
})

let supabase = null

onMounted(() => {
  try {
    supabase = useSupabase()
  } catch (e) {
    console.warn('[BusinessDirectory] Supabase init failed:', e)
    fetchError.value = 'Supabase не настроен'
    loading.value = false
    return
  }
  fetchContacts()
})

async function fetchContacts() {
  if (!supabase) {
    fetchError.value = 'Supabase не настроен'
    loading.value = false
    return
  }

  const { data, error } = await supabase
    .from('business_contacts')
    .select('*')
    .eq('is_approved', true)
    .order('created_at', { ascending: false })

  if (error) {
    fetchError.value = 'Не удалось загрузить контакты'
    console.error('[BusinessDirectory]', error)
  } else {
    contacts.value = data || []
  }
  loading.value = false
}

async function addContact() {
  if (!supabase) {
    return
  }

  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) {
    formError.value = 'Нужно авторизоваться'
    return
  }

  formLoading.value = true
  formError.value = ''

  const { error } = await supabase.from('business_contacts').insert({
    business_name: form.value.business_name,
    category: form.value.category || null,
    description: form.value.description || null,
    telegram_link: form.value.telegram_link || null,
    website_url: form.value.website_url || null,
    owner_id: user.value.id,
  })

  if (error) {
    formError.value = error.message
    formLoading.value = false
  } else {
    resetForm()
    showAddForm.value = false
    await fetchContacts()
  }
}

function resetForm() {
  form.value = {
    business_name: '',
    category: '',
    description: '',
    telegram_link: '',
    website_url: '',
  }
  formError.value = ''
}

function normalizeTelegram(link) {
  if (!link) {
    return '#'
  }
  if (link.startsWith('http')) {
    return link
  }
  if (link.startsWith('@')) {
    return `https://t.me/${link.slice(1)}`
  }
  return `https://t.me/${link}`
}

function formatDate(dateStr) {
  if (!dateStr) {
    return ''
  }
  return new Date(dateStr).toLocaleDateString('ru-RU', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
}

onMounted(() => {
  fetchContacts()
})
</script>
