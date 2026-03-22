export default defineNuxtPlugin(async () => {
  console.log('[Supabase SW] Plugin loaded')

  if (!process.client) return

  // Проверяем поддержку сервис-воркеров и уведомлений
  if (!('serviceWorker' in navigator) || !('Notification' in window)) {
    console.log('[Supabase SW] Push-уведомления не поддерживаются')
    return
  }

  try {
    // Получаем все регистрации service worker
    const registrations = await navigator.serviceWorker.getRegistrations()

    // Находим наш SW или регистрируем новый
    let registration = registrations.find(r =>
      r.active?.scriptURL?.includes('/sw.js')
    )

    if (!registration) {
      console.log('[Supabase SW] Регистрируем Service Worker...')
      registration = await navigator.serviceWorker.register('/sw.js', {
        scope: '/'
      })
      console.log('[Supabase SW] Зарегистрирован:', registration.scope)
    } else {
      console.log('[Supabase SW] Уже зарегистрирован:', registration.scope)
    }

    // Проверяем, есть ли активная подписка
    const subscription = await registration.pushManager.getSubscription()

    if (subscription) {
      console.log('[Supabase SW] Push-подписка активна')
    } else {
      console.log('[Supabase SW] Push-подписка не активна')
    }
  } catch (error) {
    console.error('[Supabase SW] Ошибка регистрации:', error)
  }
})
