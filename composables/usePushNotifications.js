import { get, set, del } from 'idb-keyval'
import { getToken, onMessage, ensureFirebase } from './useFirebase'

let VAPID_KEY = null
let _messaging = null

function getVapidKey() {
  if (!VAPID_KEY) {
    VAPID_KEY = useRuntimeConfig().public.firebaseVapidKey
  }
  return VAPID_KEY
}

function getMessagingInstance() {
  if (!_messaging) {
    const { messaging } = ensureFirebase()
    _messaging = messaging
  }
  return _messaging
}

// Проверка поддержки уведомлений
export function isPushSupported() {
  return process.client && 'Notification' in window && 'serviceWorker' in navigator && getMessagingInstance()
}

// Запрос разрешения на уведомления
export async function requestNotificationPermission() {
  if (!process.client || !('Notification' in window)) {
    return 'denied'
  }
  
  const permission = await Notification.requestPermission()
  return permission
}

// Получение токена FCM
export async function getPushToken() {
  const msg = getMessagingInstance()
  if (!msg) {
    console.error('[Push] Messaging не инициализирован')
    return null
  }

  // Ждём активации сервис-воркера
  if ('serviceWorker' in navigator) {
    const registration = await navigator.serviceWorker.ready
    console.log('[Push] Service Worker готов:', registration.active ? 'активен' : 'не активен')
  }

  try {
    const token = await getToken(msg, {
      vapidKey: getVapidKey()
    })
    console.log('[Push] Токен получен:', token ? token.substring(0, 50) + '...' : 'null')
    return token
  } catch (error) {
    console.error('[Push] Ошибка получения токена:', error)
    return null
  }
}

// Сохранение токена в IndexedDB
export async function saveToken(token) {
  await set('fcm-token', token)
  await set('subscribed-at', new Date().toISOString())
}

// Получение сохранённого токена
export async function getSavedToken() {
  return await get('fcm-token')
}

// Удаление токена
export async function deleteToken() {
  await del('fcm-token')
  await del('subscribed-at')
  await del('notification-preferences')
}

// Подписка на push-уведомления
export async function subscribeToPush() {
  console.log('[Push] Начало подписки...')
  
  if (!isPushSupported()) {
    console.error('[Push] Не поддерживается')
    return { success: false, error: 'Not supported' }
  }

  const permission = await requestNotificationPermission()
  console.log('[Push] Разрешение:', permission)

  if (permission !== 'granted') {
    return { success: false, error: 'Permission denied' }
  }

  const token = await getPushToken()
  console.log('[Push] Токен:', token ? 'получен' : 'не получен')

  if (!token) {
    return { success: false, error: 'No token' }
  }
  
  await saveToken(token)
  
  // TODO: Отправить токен на сервер для хранения
  // await $fetch('/api/notifications/subscribe', {
  //   method: 'POST',
  //   body: { token }
  // })
  
  return { success: true, token }
}

// Отписка от push-уведомлений
export async function unsubscribeFromPush() {
  await deleteToken()
  
  // TODO: Удалить токен с сервера
  // await $fetch('/api/notifications/unsubscribe', {
  //   method: 'POST',
  //   body: { token: await getSavedToken() }
  // })
  
  return { success: true }
}

// Проверка статуса подписки
export async function getSubscriptionStatus() {
  const token = await getSavedToken()
  const subscribedAt = await get('subscribed-at')
  
  return {
    subscribed: !!token,
    token,
    subscribedAt
  }
}

// Обработка входящих уведомлений в браузере
export function onForegroundMessage(callback) {
  const msg = getMessagingInstance()
  if (!msg) return

  onMessage(msg, (payload) => {
    const { title, body, image } = payload.notification

    const notificationData = {
      title,
      body,
      data: payload.data,
      icon: '/favicons/android-chrome-192x192.png',
      badge: '/favicons/android-chrome-192x192.png',
      image,
      requireInteraction: false,
      tag: payload.data?.type || 'default'
    }

    callback(notificationData)
  })
}

// Показ уведомления
export function showNotification({ title, body, icon, badge, data, tag }) {
  if (!process.client || !('Notification' in window)) return
  
  const notification = new Notification(title, {
    body,
    icon: icon || '/favicons/android-chrome-192x192.png',
    badge: badge || '/favicons/android-chrome-192x192.png',
    data: data || {},
    tag: tag || 'default',
    requireInteraction: false
  })
  
  notification.onclick = () => {
    window.focus()
    if (data?.url) {
      window.open(data.url, '_blank')
    }
    notification.close()
  }
  
  return notification
}
