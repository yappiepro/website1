/* eslint-disable no-undef */

import { initializeApp } from 'firebase/app'
import { getMessaging, onBackgroundMessage } from 'firebase/messaging/sw'

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCyLAxCpKNgvgRnt4z6NukP3-wG242tE2g",
  authDomain: "artemselifanov-ru-pwa.firebaseapp.com",
  projectId: "artemselifanov-ru-pwa",
  storageBucket: "artemselifanov-ru-pwa.firebasestorage.app",
  messagingSenderId: "923740459406",
  appId: "1:923740459406:web:d67a35fcb94686dd5d14df",
  measurementId: "G-GETTG73DF6"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const messaging = getMessaging(app)

// Обработка фоновых уведомлений
onBackgroundMessage(messaging, (payload) => {
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
        // Проверяем, есть ли уже открытая вкладка с нашим сайтом
        const matchingClient = windowClients.find(client => 
          client.url === urlToOpen && 'focus' in client
        )
        
        if (matchingClient) {
          return matchingClient.focus()
        }
        
        // Открываем новую вкладку
        if (clients.openWindow) {
          return clients.openWindow(urlToOpen)
        }
      })
  )
})
