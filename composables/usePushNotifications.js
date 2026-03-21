import { get, set, del } from 'idb-keyval'
import { getToken, onMessage, ensureFirebase } from './useFirebase'
import { collection, query, where, getDocs, addDoc, deleteDoc, doc } from 'firebase/firestore'

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

function getFirestoreDb() {
  const { db } = ensureFirebase()
  if (!db) {
    console.error('[Firestore] База данных не инициализирована')
  }
  return db
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

// Сохранение токена в Firestore
export async function saveTokenToFirestore(token) {
  const db = getFirestoreDb()
  if (!db) return { success: false, error: 'Firestore not initialized' }

  try {
    const tokensRef = collection(db, 'push_tokens')
    
    // Проверяем, нет ли уже такого токена
    const q = query(tokensRef, where('token', '==', token))
    const querySnapshot = await getDocs(q)

    if (querySnapshot.empty) {
      // Сохраняем новый токен
      await addDoc(tokensRef, {
        token: token,
        createdAt: new Date().toISOString(),
        status: 'active',
        userAgent: navigator.userAgent,
        timestamp: Date.now()
      })
      console.log('[Firestore] Токен сохранён')
      return { success: true }
    } else {
      console.log('[Firestore] Токен уже существует')
      return { success: true, exists: true }
    }
  } catch (error) {
    console.error('[Firestore] Ошибка сохранения:', error)
    return { success: false, error: error.message }
  }
}

// Удаление токена из Firestore
export async function removeTokenFromFirestore(token) {
  const db = getFirestoreDb()
  if (!db) return { success: false, error: 'Firestore not initialized' }

  try {
    const tokensRef = collection(db, 'push_tokens')
    const q = query(tokensRef, where('token', '==', token))
    const querySnapshot = await getDocs(q)

    // Удаляем все найденные документы
    const deletePromises = []
    querySnapshot.forEach((docSnapshot) => {
      deletePromises.push(deleteDoc(doc(db, docSnapshot.id)))
    })

    await Promise.all(deletePromises)
    console.log('[Firestore] Токен удалён')
    return { success: true }
  } catch (error) {
    console.error('[Firestore] Ошибка удаления:', error)
    return { success: false, error: error.message }
  }
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

  // Сохраняем в IndexedDB (локально)
  await saveToken(token)

  // Сохраняем в Firestore (на сервере)
  const firestoreResult = await saveTokenToFirestore(token)
  if (!firestoreResult.success) {
    console.error('[Push] Ошибка сохранения в Firestore:', firestoreResult.error)
  }

  return { success: true, token }
}

// Отписка от push-уведомлений
export async function unsubscribeFromPush() {
  const token = await getSavedToken()
  
  // Удаляем из Firestore
  if (token) {
    await removeTokenFromFirestore(token)
  }
  
  // Удаляем из IndexedDB
  await deleteToken()

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
