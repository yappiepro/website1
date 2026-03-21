import { get, set, del } from 'idb-keyval'
import { getFirestore, doc, setDoc, deleteDoc, serverTimestamp } from 'firebase/firestore'
import { ensureFirebase } from './useFirebase'

let VAPID_KEY = null
let _db = null

function getVapidKey() {
  if (!VAPID_KEY) {
    VAPID_KEY = useRuntimeConfig().public.firebaseVapidKey
  }
  return VAPID_KEY
}

function getFirestoreDb() {
  if (!process.client) return null
  if (_db) return _db
  const { app } = ensureFirebase()
  if (!app) return null
  _db = getFirestore(app)
  return _db
}

function urlBase64ToUint8Array(base64String) {
  const padding = '='.repeat((4 - (base64String.length % 4)) % 4)
  const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/')
  const rawData = atob(base64)
  const outputArray = new Uint8Array(rawData.length)
  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i)
  }
  return outputArray
}

function subscriptionId(subscription) {
  const b64 = btoa(subscription.endpoint)
  return b64.replace(/=+$/g, '').replace(/\+/g, '-').replace(/\//g, '_')
}

async function getServiceWorkerRegistration() {
  if (!('serviceWorker' in navigator)) return null
  return await navigator.serviceWorker.ready
}

// Проверка поддержки уведомлений
export function isPushSupported() {
  return process.client && 'Notification' in window && 'serviceWorker' in navigator && 'PushManager' in window
}

// Диагностика поддержки push
export function getPushSupportInfo() {
  if (!process.client) {
    return {
      notification: false,
      serviceWorker: false,
      pushManager: false,
      permission: 'unsupported'
    }
  }

  const notification = 'Notification' in window
  const serviceWorker = 'serviceWorker' in navigator
  const pushManager = 'PushManager' in window
  const permission = notification ? Notification.permission : 'unsupported'

  return { notification, serviceWorker, pushManager, permission }
}

// Запрос разрешения на уведомления
export async function requestNotificationPermission() {
  if (!process.client || !('Notification' in window)) {
    return 'denied'
  }
  
  const permission = await Notification.requestPermission()
  return permission
}

// Получение подписки Web Push
export async function getPushSubscription() {
  const registration = await getServiceWorkerRegistration()
  if (!registration) {
    console.error('[Push] Service Worker не готов')
    return null
  }

  const existing = await registration.pushManager.getSubscription()
  if (existing) return existing

  try {
    const subscription = await registration.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: urlBase64ToUint8Array(getVapidKey())
    })
    return subscription
  } catch (error) {
    console.error('[Push] Ошибка подписки через PushManager:', error)
    return null
  }
}

// Сохранение подписки в IndexedDB
export async function saveSubscription(subscription) {
  await set('push-subscription', subscription.toJSON())
  await set('subscribed-at', new Date().toISOString())
}

// Сохранение подписки в Firestore
export async function saveSubscriptionToFirestore(subscription) {
  const db = getFirestoreDb()
  if (!db) {
    console.warn('[Firestore] Не инициализирован')
    return { success: false, error: 'Firestore not initialized' }
  }

  try {
    const payload = {
      endpoint: subscription.endpoint,
      keys: subscription.toJSON().keys || {},
      expirationTime: subscription.expirationTime || null,
      updatedAt: serverTimestamp(),
      createdAt: serverTimestamp(),
      userAgent: navigator.userAgent || 'unknown',
      platform: navigator.platform || 'unknown',
      language: navigator.language || 'unknown',
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || 'unknown'
    }
    const id = subscriptionId(subscription)
    await setDoc(doc(db, 'push_subscriptions', id), payload, { merge: true })
    return { success: true }
  } catch (error) {
    console.error('[Firestore] Ошибка сохранения подписки:', error)
    return { success: false, error }
  }
}

// Удаление подписки из Firestore
export async function removeSubscriptionFromFirestore(subscription) {
  const db = getFirestoreDb()
  if (!db) {
    console.warn('[Firestore] Не инициализирован')
    return { success: false, error: 'Firestore not initialized' }
  }

  try {
    const id = subscriptionId(subscription)
    await deleteDoc(doc(db, 'push_subscriptions', id))
    return { success: true }
  } catch (error) {
    console.error('[Firestore] Ошибка удаления подписки:', error)
    return { success: false, error }
  }
}

// Получение сохранённой подписки
export async function getSavedSubscription() {
  return await get('push-subscription')
}

// Удаление подписки
export async function deleteSubscription() {
  await del('push-subscription')
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

  const subscription = await getPushSubscription()
  console.log('[Push] Подписка:', subscription ? 'получена' : 'не получена')

  if (!subscription) {
    return { success: false, error: 'No subscription' }
  }

  // Сохраняем в IndexedDB (локально)
  await saveSubscription(subscription)

  // Сохраняем в Firestore
  const firestoreResult = await saveSubscriptionToFirestore(subscription)
  if (!firestoreResult.success) {
    console.error('[Push] Ошибка сохранения в Firestore:', firestoreResult.error)
  }

  return { success: true, subscription }
}

// Отписка от push-уведомлений
export async function unsubscribeFromPush() {
  const subscription = await getPushSubscription()

  if (subscription) {
    await removeSubscriptionFromFirestore(subscription)
    await subscription.unsubscribe()
  }

  await deleteSubscription()

  return { success: true }
}

// Проверка статуса подписки
export async function getSubscriptionStatus() {
  const subscription = await getSavedSubscription()
  const subscribedAt = await get('subscribed-at')
  
  return {
    subscribed: !!subscription,
    subscription,
    subscribedAt
  }
}

// Обработка входящих уведомлений в браузере
export function onForegroundMessage(callback) {
  // Web Push обрабатывается в Service Worker
  if (typeof callback === 'function') {
    callback(null)
  }
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
