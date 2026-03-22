import { useSupabase } from './useSupabase'

let VAPID_KEY = null

function getVapidKey() {
  if (!VAPID_KEY) {
    VAPID_KEY = useRuntimeConfig().public.firebaseVapidKey
  }
  return VAPID_KEY
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

// Сохранение подписки в Supabase
export async function saveSubscriptionToSupabase(subscription) {
  const supabase = useSupabase()
  
  try {
    const payload = {
      endpoint: subscription.endpoint,
      p256dh: subscription.toJSON().keys?.p256dh || '',
      auth: subscription.toJSON().keys?.auth || '',
      user_agent: navigator.userAgent || 'unknown',
      platform: navigator.platform || 'unknown'
    }
    
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
  
  try {
    const { error } = await supabase
      .from('push_subscriptions')
      .delete()
      .eq('endpoint', subscription.endpoint)
    
    if (error) {
      console.error('[Supabase] Ошибка удаления подписки:', error)
      return { success: false, error }
    }
    
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
