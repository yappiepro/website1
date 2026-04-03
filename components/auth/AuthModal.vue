<template>
  <Teleport to="body">
    <Transition name="modal-fade">
      <div
        v-if="modelValue"
        class="fixed inset-0 z-[100] flex items-center justify-center p-4"
        @click.self="emit('update:modelValue', false)"
      >
        <!-- Оверлей -->
        <div class="absolute inset-0 bg-black/60 backdrop-blur-sm" />

        <!-- Модалка -->
        <div class="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden">
          <!-- Заголовок + кнопка закрытия -->
          <div class="flex items-center justify-between px-6 py-4 border-b border-gray-100">
            <h2 class="text-lg font-bold text-gray-900">
              {{ activeTab === 'login' ? 'Вход' : 'Регистрация' }}
            </h2>
            <button
              class="p-1 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Закрыть"
              @click="emit('update:modelValue', false)"
            >
              <X class="w-5 h-5 text-gray-500" />
            </button>
          </div>

          <!-- Табы -->
          <div class="flex border-b border-gray-100">
            <button
              :class="[
                'flex-1 py-3 text-sm font-medium transition-colors',
                activeTab === 'login'
                  ? 'text-purple-600 border-b-2 border-purple-600'
                  : 'text-gray-500 hover:text-gray-700',
              ]"
              @click="switchTab('login')"
            >
              Вход
            </button>
            <button
              :class="[
                'flex-1 py-3 text-sm font-medium transition-colors',
                activeTab === 'register'
                  ? 'text-purple-600 border-b-2 border-purple-600'
                  : 'text-gray-500 hover:text-gray-700',
              ]"
              @click="switchTab('register')"
            >
              Регистрация
            </button>
          </div>

          <!-- Контент формы -->
          <div class="p-6">
            <!-- Ошибка -->
            <div
              v-if="error"
              class="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700"
            >
              {{ error }}
            </div>

            <!-- Успех регистрации -->
            <div
              v-if="successMessage"
              class="mb-4 p-3 bg-green-50 border border-green-200 rounded-lg text-sm text-green-700"
            >
              {{ successMessage }}
            </div>

            <!-- Форма -->
            <form class="space-y-4" @submit.prevent="handleSubmit">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  v-model="email"
                  type="email"
                  required
                  placeholder="your@email.com"
                  class="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  :disabled="loading"
                />
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Пароль</label>
                <input
                  v-model="password"
                  type="password"
                  required
                  minlength="6"
                  :placeholder="activeTab === 'register' ? 'Минимум 6 символов' : 'Введите пароль'"
                  class="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  :disabled="loading"
                />
              </div>

              <!-- Доп. поле для регистрации -->
              <div v-if="activeTab === 'register'">
                <label class="block text-sm font-medium text-gray-700 mb-1">Повторите пароль</label>
                <input
                  v-model="passwordConfirm"
                  type="password"
                  required
                  minlength="6"
                  placeholder="Повторите пароль"
                  class="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  :disabled="loading"
                />
              </div>

              <button
                type="submit"
                :disabled="loading"
                class="w-full py-3 bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white font-medium rounded-xl hover:from-purple-500 hover:to-fuchsia-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span v-if="!loading">{{
                  activeTab === 'login' ? 'Войти' : 'Зарегистрироваться'
                }}</span>
                <span v-else class="inline-flex items-center gap-2">
                  <svg class="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
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
                  Подождите...
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { ref, watch } from 'vue'
import { X } from 'lucide-vue-next'

const props = defineProps({
  modelValue: Boolean,
  defaultTab: { type: String, default: 'login' },
})

const emit = defineEmits(['update:modelValue'])

const { login, register } = useAuth()

const activeTab = ref(props.defaultTab)
const email = ref('')
const password = ref('')
const passwordConfirm = ref('')
const error = ref('')
const successMessage = ref('')
const loading = ref(false)

function switchTab(tab) {
  activeTab.value = tab
  error.value = ''
  successMessage.value = ''
}

async function handleSubmit() {
  error.value = ''
  successMessage.value = ''

  if (activeTab.value === 'register') {
    if (password.value !== passwordConfirm.value) {
      error.value = 'Пароли не совпадают'
      return
    }
    if (password.value.length < 6) {
      error.value = 'Пароль должен быть минимум 6 символов'
      return
    }
  }

  loading.value = true

  try {
    if (activeTab.value === 'login') {
      const { error: authError } = await login(email.value, password.value)
      if (authError) {
        error.value =
          authError.message === 'Invalid login credentials'
            ? 'Неверный email или пароль'
            : authError.message
      } else {
        emit('update:modelValue', false)
      }
    } else {
      const { error: authError, data } = await register(email.value, password.value)
      if (authError) {
        error.value =
          authError.message === 'User already registered'
            ? 'Пользователь с таким email уже существует'
            : authError.message
      } else {
        successMessage.value = 'Регистрация успешна! Проверьте email для подтверждения.'
        if (data?.user) {
          // Если email не требует подтверждения — сразу закрываем
          if (!data.user.email_confirmed_at) {
            // Ждём подтверждения email
          } else {
            emit('update:modelValue', false)
          }
        }
      }
    }
  } finally {
    loading.value = false
  }
}

// Сброс формы при открытии
watch(
  () => props.modelValue,
  (open) => {
    if (open) {
      activeTab.value = props.defaultTab
      email.value = ''
      password.value = ''
      passwordConfirm.value = ''
      error.value = ''
      successMessage.value = ''
    }
  }
)
</script>

<style scoped>
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.2s ease;
}
.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}
</style>
