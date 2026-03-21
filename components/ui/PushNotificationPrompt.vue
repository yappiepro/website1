<template>
  <Transition
    enter-active-class="transition duration-300 ease-out"
    enter-from-class="translate-y-full opacity-0"
    enter-to-class="translate-y-0 opacity-100"
    leave-active-class="transition duration-200 ease-in"
    leave-from-class="translate-y-0 opacity-100"
    leave-to-class="translate-y-full opacity-0"
  >
    <div
      v-if="showPrompt && !isSubscribed && permission !== 'denied'"
      class="fixed bottom-24 left-4 right-4 md:bottom-8 md:left-auto md:right-8 md:w-96 z-40"
    >
      <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-4">
        <div class="flex items-start gap-3">
          <!-- Иконка -->
          <div class="flex-shrink-0 w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
            <svg class="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </div>
          
          <!-- Контент -->
          <div class="flex-1 min-w-0">
            <h3 class="text-sm font-semibold text-gray-900 dark:text-white">
              Получайте уведомления
            </h3>
            <p class="mt-1 text-xs text-gray-500 dark:text-gray-400">
              Новые статьи, анонсы мероприятий и важные обновления
            </p>
            
            <!-- Кнопки -->
            <div class="mt-3 flex gap-2">
              <button
                @click="handleSubscribe"
                :disabled="isSubscribing"
                class="flex-1 px-3 py-2 text-xs font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {{ isSubscribing ? 'Подписка...' : 'Подписаться' }}
              </button>
              <button
                @click="handleDismiss"
                class="px-3 py-2 text-xs font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition-colors"
              >
                Позже
              </button>
            </div>
          </div>
          
          <!-- Кнопка закрытия -->
          <button
            @click="handleDismiss"
            class="flex-shrink-0 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { 
  isPushSupported, 
  subscribeToPush, 
  getSubscriptionStatus,
  requestNotificationPermission 
} from '~/composables/usePushNotifications'

const showPrompt = ref(false)
const isSubscribed = ref(false)
const isSubscribing = ref(false)
const permission = ref('default')

// Проверка статуса подписки при загрузке
onMounted(async () => {
  if (!isPushSupported()) return
  
  const status = await getSubscriptionStatus()
  isSubscribed.value = status.subscribed
  
  // Показываем промопт через 5 секунд если не подписан
  if (!status.subscribed) {
    permission.value = Notification.permission
    setTimeout(() => {
      showPrompt.value = true
    }, 5000)
  }
})

// Подписка на уведомления
async function handleSubscribe() {
  isSubscribing.value = true
  
  const result = await subscribeToPush()
  
  if (result.success) {
    showPrompt.value = false
    isSubscribed.value = true
  } else {
    console.error('Ошибка подписки:', result.error)
  }
  
  isSubscribing.value = false
}

// Закрытие промопта
function handleDismiss() {
  showPrompt.value = false
  
  // Запоминаем, что пользователь отклонил (30 дней)
  localStorage.setItem('push-prompt-dismissed', Date.now().toString())
}
</script>
