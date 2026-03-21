<template>
  <div class="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
    <div class="flex items-center gap-3">
      <!-- Иконка -->
      <div 
        class="w-10 h-10 rounded-full flex items-center justify-center transition-colors"
        :class="isSubscribed ? 'bg-blue-100 dark:bg-blue-900' : 'bg-gray-200 dark:bg-gray-700'"
      >
        <svg 
          class="w-5 h-5" 
          :class="isSubscribed ? 'text-blue-600 dark:text-blue-400' : 'text-gray-500 dark:text-gray-400'"
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
      </div>
      
      <!-- Текст -->
      <div>
        <h3 class="text-sm font-medium text-gray-900 dark:text-white">
          Push-уведомления
        </h3>
        <p class="text-xs text-gray-500 dark:text-gray-400">
          {{ statusText }}
        </p>
      </div>
    </div>
    
    <!-- Переключатель -->
    <button
      @click="toggleSubscription"
      :disabled="isProcessing"
      class="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none"
      :class="isSubscribed ? 'bg-blue-600' : 'bg-gray-300 dark:bg-gray-600'"
      role="switch"
      :aria-checked="isSubscribed"
    >
      <span
        class="pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
        :class="isSubscribed ? 'translate-x-5' : 'translate-x-0'"
      />
    </button>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { 
  isPushSupported, 
  subscribeToPush, 
  unsubscribeFromPush,
  getSubscriptionStatus 
} from '~/composables/usePushNotifications'

const isSubscribed = ref(false)
const isProcessing = ref(false)
const supported = ref(false)

const statusText = computed(() => {
  if (!supported.value) return 'Не поддерживается'
  if (isProcessing.value) return 'Обработка...'
  return isSubscribed.value ? 'Включены' : 'Отключены'
})

onMounted(async () => {
  supported.value = isPushSupported()
  
  if (supported.value) {
    const status = await getSubscriptionStatus()
    isSubscribed.value = status.subscribed
  }
})

async function toggleSubscription() {
  if (isProcessing.value) return
  
  isProcessing.value = true
  
  if (isSubscribed.value) {
    await unsubscribeFromPush()
    isSubscribed.value = false
  } else {
    const result = await subscribeToPush()
    if (result.success) {
      isSubscribed.value = true
    }
  }
  
  isProcessing.value = false
}
</script>
