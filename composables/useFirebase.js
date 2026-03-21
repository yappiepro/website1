import { initializeApp, getApps } from 'firebase/app'
import { getMessaging, getToken, onMessage } from 'firebase/messaging'
import { getAnalytics, isSupported } from 'firebase/analytics'
import { getFirestore } from 'firebase/firestore'

// Инициализация Firebase
let app
let messaging = null
let analytics = null
let db = null
let initialized = false

function getFirebaseConfig() {
  const config = useRuntimeConfig()
  return {
    apiKey: config.public.firebaseApiKey,
    authDomain: config.public.firebaseAuthDomain,
    projectId: config.public.firebaseProjectId,
    storageBucket: config.public.firebaseStorageBucket,
    messagingSenderId: config.public.firebaseMessagingSenderId,
    appId: config.public.firebaseAppId,
    measurementId: config.public.firebaseMeasurementId
  }
}

function initFirebase() {
  if (initialized || !process.client) return

  const firebaseConfig = getFirebaseConfig()

  if (!getApps().length) {
    app = initializeApp(firebaseConfig)
  } else {
    app = getApps()[0]
  }

  // Инициализация Messaging (только на клиенте)
  if ('Notification' in window) {
    try {
      messaging = getMessaging(app)
    } catch (e) {
      console.warn('Firebase Messaging не поддерживается:', e)
    }
  }

  // Инициализация Analytics
  isSupported().then(supported => {
    if (supported) {
      analytics = getAnalytics(app)
    }
  })

  // Инициализация Firestore
  db = getFirestore(app)

  initialized = true
}

// Ленивая инициализация при первом вызове
export function ensureFirebase() {
  initFirebase()
  return { app, messaging, analytics, db }
}

export { getToken, onMessage }
