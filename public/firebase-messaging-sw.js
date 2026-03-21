/* eslint-disable no-undef */

// Import Firebase via CDN for service worker
importScripts('https://www.gstatic.com/firebasejs/10.14.1/firebase-app-compat.js')
importScripts('https://www.gstatic.com/firebasejs/10.14.1/firebase-messaging-compat.js')

// Firebase config
firebase.initializeApp({
  apiKey: "AIzaSyCyLAxCpKNgvgRnt4z6NukP3-wG242tE2g",
  authDomain: "artemselifanov-ru-pwa.firebaseapp.com",
  projectId: "artemselifanov-ru-pwa",
  storageBucket: "artemselifanov-ru-pwa.firebasestorage.app",
  messagingSenderId: "923740459406",
  appId: "1:923740459406:web:d67a35fcb94686dd5d14df",
  measurementId: "G-GETTG73DF6"
})

const messaging = firebase.messaging()

// Обработка Web Push (без FCM)
self.addEventListener('push', (event) => {
  let payload = {}
  if (event.data) {
    try {
      payload = event.data.json()
    } catch (e) {
      payload = { title: 'Уведомление', body: event.data.text() }
    }
  }

  const title = payload.title || payload.notification?.title || 'Уведомление'
  const body = payload.body || payload.notification?.body || ''
  const image = payload.image || payload.notification?.image
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

// Обработка фоновых уведомлений
messaging.onBackgroundMessage((payload) => {
  const { title, body, image } = payload.notification
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

  self.registration.showNotification(title, notificationOptions)
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
