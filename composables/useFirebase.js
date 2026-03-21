import { initializeApp, getApps } from 'firebase/app'
import { getMessaging, getToken, onMessage } from 'firebase/messaging'
import { getAnalytics, isSupported } from 'firebase/analytics'

const firebaseConfig = {
  apiKey: useRuntimeConfig().public.firebaseApiKey,
  authDomain: useRuntimeConfig().public.firebaseAuthDomain,
  projectId: useRuntimeConfig().public.firebaseProjectId,
  storageBucket: useRuntimeConfig().public.firebaseStorageBucket,
  messagingSenderId: useRuntimeConfig().public.firebaseMessagingSenderId,
  appId: useRuntimeConfig().public.firebaseAppId,
  measurementId: useRuntimeConfig().public.firebaseMeasurementId
}

// Инициализация Firebase
let app
let messaging = null
let analytics = null

if (!getApps().length) {
  app = initializeApp(firebaseConfig)
} else {
  app = getApps()[0]
}

// Инициализация Messaging (только на клиенте)
if (process.client && 'Notification' in window) {
  try {
    messaging = getMessaging(app)
  } catch (e) {
    console.warn('Firebase Messaging не поддерживается:', e)
  }
}

// Инициализация Analytics
if (process.client) {
  isSupported().then(supported => {
    if (supported) {
      analytics = getAnalytics(app)
    }
  })
}

export { app, messaging, analytics, getToken, onMessage }
