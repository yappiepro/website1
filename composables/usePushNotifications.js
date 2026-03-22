import { useSupabase } from './useSupabase'

let VAPID_KEY = null

function getVapidKey() {
  if (!VAPID_KEY) {
    VAPID_KEY = useRuntimeConfig().public.firebaseVapidKey
  }
  return VAPID_KEY
}

function urlBase64ToUint8Array(base64String) {
  // Очищаем ключ от лишних символов
  let base64 = base64String.trim()
  
  // Заменяем base64url на base64
  base64 = base64.replace(/-/g, '+').replace(/_/g, '/')
  
  // Добавляем padding если нужно
  const padding = '='.repeat((4 - (base64.length % 4)) % 4)
  base64 = base64 + padding
  
  try {
    const rawData = atob(base64)
    const outputArray = new Uint8Array(rawData.length)
    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i)
    }
    console.log('[Push] urlBase64ToUint8Array: decoded length =', outputArray.length)
    return outputArray
  } catch (error) {
    console.error('[Push] Ошибка декодирования VAPID ключа:', error.message)
    console.error('[Push] Исходный ключ:', base64String.substring(0, 20) + '...')
    console.error('[Push] После обработки:', base64.substring(0, 20) + '...')
    throw error
  }
}

async function getServiceWorkerRegistration() {
  if (!('serviceWorker' in navigator)) {
    console.error('[Push] Service Worker не поддерживается')
    return null
  }

  // Проверяем, есть ли уже активный service worker
  const activeWorker = navigator.serviceWorker.controller
  if (activeWorker) {
    console.log('[Push] Service Worker уже активен')
    const registration = await navigator.serviceWorker.ready
    return registration
  }

  // Если нет активного, регистрируем наш Service Worker
  console.log('[Push] Регистрируем Service Worker...')
  try {
    const registration = await navigator.serviceWorker.register('/sw.js', {
      scope: '/'
    })
    console.log('[Push] Service Worker зарегистрирован:', registration.scope)

    // Ждём, пока service worker станет активным
    if (registration.installing) {
      console.log('[Push] Ждём активации Service Worker...')
      await new Promise((resolve) => {
        registration.installing.addEventListener('statechange', (e) => {
          if (e.target.state === 'activated') {
            console.log('[Push] Service Worker активирован')
            resolve()
          }
        })
      })
    }

    return registration
  } catch (error) {
    console.error('[Push] Ошибка регистрации Service Worker:', error)
    return null
  }
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

  console.log('[Push] Service Worker готов:', registration.scope)

  const existing = await registration.pushManager.getSubscription()
  if (existing) {
    console.log('[Push] Найдена существующая подписка')
    return existing
  }

  console.log('[Push] Существующей подписки нет, создаём новую...')
  
  const vapidKey = getVapidKey()
  console.log('[Push] VAPID ключ:', vapidKey ? 'присутствует' : 'отсутствует')
  console.log('[Push] VAPID ключ (первые 20 символов):', vapidKey ? vapidKey.substring(0, 20) : 'N/A')
  console.log('[Push] VAPID ключ длина:', vapidKey ? vapidKey.length : 0)

  try {
    if (!vapidKey) {
      console.error('[Push] VAPID ключ не найден в конфигурации')
      return null
    }

    // Проверяем формат ключа - должен быть base64url без padding
    const cleanVapidKey = vapidKey.trim()
    console.log('[Push] Очищенный VAPID ключ длина:', cleanVapidKey.length)

    const applicationServerKey = urlBase64ToUint8Array(cleanVapidKey)
    console.log('[Push] applicationServerKey создан, длина:', applicationServerKey.length)
    console.log('[Push] applicationServerKey первый байт:', applicationServerKey[0])

    const subscription = await registration.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey
    })
    console.log('[Push] Подписка успешно создана:', subscription.endpoint)
    return subscription
  } catch (error) {
    console.error('[Push] Ошибка подписки через PushManager:', error.message, error)
    console.error('[Push] Stack:', error.stack)
    return null
  }
}

// Сохранение подписки в Supabase
export async function saveSubscriptionToSupabase(subscription) {
  const supabase = useSupabase()
  if (!supabase) {
    console.warn('[Supabase] Клиент не инициализирован')
    return { success: false, error: 'Supabase not initialized' }
  }

  try {
    const payload = {
      endpoint: subscription.endpoint,
      p256dh: subscription.toJSON().keys?.p256dh || '',
      auth: subscription.toJSON().keys?.auth || '',
      user_agent: navigator.userAgent || 'unknown',
      platform: navigator.platform || 'unknown'
    }

    console.log('[Supabase] Сохраняем подписку:', payload.endpoint)

    const { data, error } = await supabase
      .from('push_subscriptions')
      .upsert(payload, { onConflict: 'endpoint' })
      .select()

    if (error) {
      console.error('[Supabase] Ошибка сохранения подписки:', error)
      return { success: false, error }
    }

    console.log('[Supabase] Подписка сохранена:', data)
    return { success: true, data }
  } catch (error) {
    console.error('[Supabase] Ошибка сохранения подписки:', error)
    return { success: false, error }
  }
}

// Удаление подписки из Supabase
export async function removeSubscriptionFromSupabase(subscription) {
  const supabase = useSupabase()
  if (!supabase) {
    console.warn('[Supabase] Клиент не инициализирован')
    return { success: false, error: 'Supabase not initialized' }
  }

  try {
    console.log('[Supabase] Удаляем подписку:', subscription.endpoint)
    
    const { error } = await supabase
      .from('push_subscriptions')
      .delete()
      .eq('endpoint', subscription.endpoint)

    if (error) {
      console.error('[Supabase] Ошибка удаления подписки:', error)
      return { success: false, error }
    }

    console.log('[Supabase] Подписка удалена')
    return { success: true }
  } catch (error) {
    console.error('[Supabase] Ошибка удаления подписки:', error)
    return { success: false, error }
  }
}

// Получение сохранённой подписки из Supabase
export async function getSavedSubscription() {
  const supabase = useSupabase()
  if (!supabase) {
    console.warn('[Supabase] Клиент не инициализирован')
    return null
  }

  try {
    // Получаем последнюю подписку с конкретными колонками
    const { data, error } = await supabase
      .from('push_subscriptions')
      .select('endpoint, p256dh, auth')
      .order('created_at', { ascending: false })
      .limit(1)
      .single()

    if (error || !data) {
      console.log('[Supabase] Подписка не найдена')
      return null
    }

    console.log('[Supabase] Подписка найдена:', data.endpoint.substring(0, 30) + '...')

    return {
      endpoint: data.endpoint,
      keys: {
        p256dh: data.p256dh,
        auth: data.auth
      }
    }
  } catch (error) {
    console.error('[Supabase] Ошибка получения подписки:', error.message)
    return null
  }
}

// Удаление подписки
export async function deleteSubscription() {
  // IndexedDB больше не используется
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

  // Сохраняем в Supabase
  const supabaseResult = await saveSubscriptionToSupabase(subscription)
  if (!supabaseResult.success) {
    console.error('[Push] Ошибка сохранения в Supabase:', supabaseResult.error)
  }

  return { success: true, subscription }
}

// Отписка от push-уведомлений
export async function unsubscribeFromPush() {
  const subscription = await getPushSubscription()

  if (subscription) {
    await removeSubscriptionFromSupabase(subscription)
    await subscription.unsubscribe()
  }

  await deleteSubscription()

  return { success: true }
}

// Проверка статуса подписки
export async function getSubscriptionStatus() {
  const subscription = await getSavedSubscription()

  return {
    subscribed: !!subscription,
    subscription,
    subscribedAt: subscription ? new Date().toISOString() : null
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
