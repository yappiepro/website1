<template>
  <div class="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
    <!-- Хедер -->
    <header class="sticky top-0 z-40 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800">
      <div class="max-w-3xl mx-auto px-4 py-4">
        <h1 class="text-2xl font-bold">Уведомления</h1>
      </div>
    </header>

    <main class="max-w-3xl mx-auto px-4 py-8">
      <!-- Push-уведомления -->
      <section class="mb-8">
        <h2 class="text-lg font-semibold mb-4">Push-уведомления</h2>
        <NotificationToggle />
        <p class="mt-3 text-sm text-gray-500 dark:text-gray-400">
          Получайте уведомления о новых статьях и мероприятиях прямо в браузер или на устройство
        </p>
      </section>

      <!-- Типы уведомлений -->
      <section class="mb-8">
        <h2 class="text-lg font-semibold mb-4">Типы уведомлений</h2>
        <div class="space-y-3">
          <div class="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                <svg class="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-9-3h19m-6-3v6m-3-3v6" />
                </svg>
              </div>
              <div>
                <h3 class="text-sm font-medium">Новые статьи</h3>
                <p class="text-xs text-gray-500 dark:text-gray-400">Публикации в блоге</p>
              </div>
            </div>
            <div class="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
              <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>

          <div class="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center">
                <svg class="w-5 h-5 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 class="text-sm font-medium">Мероприятия</h3>
                <p class="text-xs text-gray-500 dark:text-gray-400">Анонсы встреч и нетворкингов</p>
              </div>
            </div>
            <div class="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
              <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      <!-- Статистика -->
      <section v-if="subscriptionInfo" class="mb-8">
        <h2 class="text-lg font-semibold mb-4">Информация о подписке</h2>
        <div class="p-4 bg-gray-50 dark:bg-gray-800 rounded-xl space-y-3 text-sm">
          <div class="flex justify-between">
            <span class="text-gray-500 dark:text-gray-400">Статус:</span>
            <span :class="subscriptionInfo.subscribed ? 'text-green-600' : 'text-gray-600'">
              {{ subscriptionInfo.subscribed ? 'Активна' : 'Не активна' }}
            </span>
          </div>
          <div class="flex justify-between">
            <span class="text-gray-500 dark:text-gray-400">Разрешение:</span>
            <span class="text-gray-600">{{ permissionText }}</span>
          </div>
          <div v-if="subscriptionInfo.subscribedAt" class="flex justify-between">
            <span class="text-gray-500 dark:text-gray-400">Дата подписки:</span>
            <span>{{ formatDate(subscriptionInfo.subscribedAt) }}</span>
          </div>
          <div v-if="subscriptionInfo.token" class="space-y-2">
            <div class="flex justify-between items-center">
              <span class="text-gray-500 dark:text-gray-400">FCM токен:</span>
              <button
                @click="copyToken"
                class="px-2 py-1 text-xs font-medium text-blue-600 hover:text-blue-700"
              >
                {{ copied ? 'Скопировано' : 'Скопировать' }}
              </button>
            </div>
            <div class="p-2 bg-white dark:bg-gray-900 rounded-lg text-xs break-all">
              {{ subscriptionInfo.token }}
            </div>
          </div>
          <div class="flex gap-2 pt-1">
            <button
              @click="refreshToken"
              :disabled="isRefreshing"
              class="px-3 py-2 text-xs font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {{ isRefreshing ? 'Обновление...' : 'Обновить токен' }}
            </button>
            <button
              @click="clearToken"
              :disabled="isRefreshing"
              class="px-3 py-2 text-xs font-medium text-gray-700 dark:text-gray-300 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Сбросить подписку
            </button>
          </div>
        </div>
      </section>

      <!-- Инструкция -->
      <section class="mb-8">
        <h2 class="text-lg font-semibold mb-4">Как это работает</h2>
        <div class="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
          <ol class="space-y-3 text-sm text-gray-700 dark:text-gray-300">
            <li class="flex gap-3">
              <span class="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">1</span>
              <span>Нажмите «Подписаться» для разрешения уведомлений</span>
            </li>
            <li class="flex gap-3">
              <span class="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">2</span>
              <span>Подтвердите разрешение в браузере</span>
            </li>
            <li class="flex gap-3">
              <span class="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">3</span>
              <span>Получайте уведомления о новых статьях и событиях</span>
            </li>
          </ol>
        </div>
      </section>

      <!-- Диагностика -->
      <section class="mb-8">
        <h2 class="text-lg font-semibold mb-4">Диагностика</h2>
        <div class="p-4 bg-gray-50 dark:bg-gray-800 rounded-xl space-y-2 text-sm">
          <div class="flex justify-between">
            <span class="text-gray-500 dark:text-gray-400">Notification API:</span>
            <span>{{ supportInfo.notification ? 'Да' : 'Нет' }}</span>
          </div>
          <div class="flex justify-between">
            <span class="text-gray-500 dark:text-gray-400">Service Worker:</span>
            <span>{{ supportInfo.serviceWorker ? 'Да' : 'Нет' }}</span>
          </div>
          <div class="flex justify-between">
            <span class="text-gray-500 dark:text-gray-400">PushManager:</span>
            <span>{{ supportInfo.pushManager ? 'Да' : 'Нет' }}</span>
          </div>
          <div class="flex justify-between">
            <span class="text-gray-500 dark:text-gray-400">Firebase Messaging:</span>
            <span>{{ supportInfo.messaging ? 'Да' : 'Нет' }}</span>
          </div>
          <div class="flex justify-between">
            <span class="text-gray-500 dark:text-gray-400">Permission:</span>
            <span>{{ supportInfo.permission }}</span>
          </div>
          <div class="pt-2">
            <button
              @click="requestPermissionOnly"
              class="px-3 py-2 text-xs font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
            >
              Запросить разрешение
            </button>
          </div>
          <p v-if="!supportInfo.messaging" class="text-xs text-gray-500 dark:text-gray-400 pt-1">
            Firebase Messaging не инициализируется в этом браузере. На iOS push через FCM обычно не поддерживается.
          </p>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { getSubscriptionStatus, subscribeToPush, unsubscribeFromPush, requestNotificationPermission, getPushSupportInfo } from '~/composables/usePushNotifications'
import NotificationToggle from '~/components/ui/NotificationToggle.vue'

const subscriptionInfo = ref(null)
const isRefreshing = ref(false)
const copied = ref(false)
const permissionText = ref('unknown')
const supportInfo = ref({
  notification: false,
  serviceWorker: false,
  pushManager: false,
  messaging: false,
  permission: 'unknown'
})

onMounted(async () => {
  const status = await getSubscriptionStatus()
  subscriptionInfo.value = status
  if (process.client && 'Notification' in window) {
    permissionText.value = Notification.permission
  }
  supportInfo.value = getPushSupportInfo()
})

function formatDate(dateString) {
  if (!dateString) return ''
  return new Date(dateString).toLocaleDateString('ru-RU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })
}

async function refreshToken() {
  if (isRefreshing.value) return
  isRefreshing.value = true
  try {
    await unsubscribeFromPush()
    const result = await subscribeToPush()
    if (result.success) {
      const status = await getSubscriptionStatus()
      subscriptionInfo.value = status
    }
  } finally {
    isRefreshing.value = false
  }
}

async function clearToken() {
  if (isRefreshing.value) return
  isRefreshing.value = true
  try {
    await unsubscribeFromPush()
    const status = await getSubscriptionStatus()
    subscriptionInfo.value = status
  } finally {
    isRefreshing.value = false
  }
}

async function copyToken() {
  if (!process.client || !subscriptionInfo.value?.token) return
  try {
    await navigator.clipboard.writeText(subscriptionInfo.value.token)
    copied.value = true
    setTimeout(() => {
      copied.value = false
    }, 1500)
  } catch (e) {
    console.error('Не удалось скопировать токен', e)
  }
}

async function requestPermissionOnly() {
  const permission = await requestNotificationPermission()
  if (process.client && 'Notification' in window) {
    permissionText.value = Notification.permission
  }
  supportInfo.value = getPushSupportInfo()
  return permission
}

// SEO
useSeoMeta({
  title: 'Уведомления | Артём Селифанов',
  description: 'Настройка push-уведомлений о новых статьях и мероприятиях'
})
</script>
