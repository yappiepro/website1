export default defineNuxtPlugin(async () => {
  console.log('[Firebase SW] Plugin loaded')
  
  if (!process.client) return

  // Проверяем поддержку сервис-воркеров и уведомлений
  if (!('serviceWorker' in navigator) || !('Notification' in window)) {
    console.log('[Firebase SW] Push-уведомления не поддерживаются')
    return
  }

  try {
    // Регистрируем Firebase Messaging сервис-воркер
    const registration = await navigator.serviceWorker.register('/firebase-messaging-sw.js', {
      scope: '/'
    })

    console.log('[Firebase SW] Зарегистрирован:', registration.scope)

    // Проверяем, есть ли активная подписка
    const subscription = await registration.pushManager.getSubscription()
    
    if (subscription) {
      console.log('[Firebase SW] Push-подписка активна')
    } else {
      console.log('[Firebase SW] Push-подписка не активна')
    }
  } catch (error) {
    console.error('[Firebase SW] Ошибка регистрации:', error)
  }
})
