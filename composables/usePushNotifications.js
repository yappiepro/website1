import { get, set, del } from 'idb-keyval'
import { messaging, getToken, onMessage } from './useFirebase'

const VAPID_KEY = useRuntimeConfig().public.firebaseVapidKey
const NOTIFICATION_STORE = 'push-notifications'

// Проверка поддержки уведомлений
export function isPushSupported() {
  return process.client && 'Notification' in window && 'serviceWorker' in navigator && messaging
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
  if (!messaging) return null
  
  try {
    const token = await getToken(messaging, {
      vapidKey: VAPID_KEY
    })
    return token
  } catch (error) {
    console.error('Ошибка получения токена:', error)
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
  if (!isPushSupported()) {
    return { success: false, error: 'Not supported' }
  }
  
  const permission = await requestNotificationPermission()
  
  if (permission !== 'granted') {
    return { success: false, error: 'Permission denied' }
  }
  
  const token = await getPushToken()
  
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
  if (!messaging) return
  
  onMessage(messaging, (payload) => {
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
