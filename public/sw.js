// Service Worker для Web Push уведомлений (без Firebase)

// Обработка push-уведомлений
self.addEventListener('push', (event) => {
  let payload = {}
  
  if (event.data) {
    try {
      payload = event.data.json()
    } catch (e) {
      payload = { 
        title: 'Уведомление', 
        body: event.data.text() 
      }
    }
  }

  const title = payload.title || 'Новое уведомление'
  const body = payload.body || ''
  const image = payload.image
  const data = payload.data || {}

  const notificationOptions = {
    body,
    icon: '/favicons/android-chrome-192x192.png',
    badge: '/favicons/android-chrome-192x192.png',
    image,
    data: {
      url: data.url || '/',
      type: data.type || 'default'
    },
    tag: data.type || 'default',
    requireInteraction: false,
    actions: [
      { action: 'open', title: 'Открыть' },
      { action: 'dismiss', title: 'Закрыть' }
    ]
  }

  event.waitUntil(self.registration.showNotification(title, notificationOptions))
})

// Обработка кликов по уведомлению
self.addEventListener('notificationclick', (event) => {
  event.notification.close()

  if (event.action === 'dismiss') {
    return
  }

  const urlToOpen = event.notification.data?.url || '/'

  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true })
      .then((windowClients) => {
        const matchingClient = windowClients.find(client =>
          client.url === urlToOpen && 'focus' in client
        )

        if (matchingClient) {
          return matchingClient.focus()
        }

        if (clients.openWindow) {
          return clients.openWindow(urlToOpen)
        }
      })
  )
})
