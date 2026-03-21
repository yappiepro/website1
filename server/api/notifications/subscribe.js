import { defineEventHandler, readBody, createError } from 'h3'
import { initializeApp, getApps, cert } from 'firebase-admin/app'
import { getFirestore, collection, query, where, getDocs, addDoc } from 'firebase-admin/firestore'

// Инициализация Firebase Admin
function initFirebaseAdmin() {
  if (!getApps().length) {
    const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT || '{}')
    
    if (!serviceAccount.project_id) {
      throw createError({
        statusCode: 500,
        message: 'Firebase Admin SDK не настроен. Добавьте FIREBASE_SERVICE_ACCOUNT в .env'
      })
    }

    initializeApp({
      credential: cert(serviceAccount)
    })
  }
  
  return getFirestore()
}

export default defineEventHandler(async (event) => {
  // Только POST запросы
  if (event.method !== 'POST') {
    throw createError({
      statusCode: 405,
      message: 'Method not allowed'
    })
  }

  try {
    // Читаем тело запроса
    const body = await readBody(event)
    const { token, userAgent } = body

    // Валидация токена
    if (!token || typeof token !== 'string') {
      throw createError({
        statusCode: 400,
        message: 'Invalid token'
      })
    }

    // Инициализируем Firestore
    const db = initFirebaseAdmin()
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
        userAgent: userAgent || 'unknown',
        timestamp: Date.now()
      })

      console.log(`[API] Токен сохранён: ${token.substring(0, 50)}...`)
      
      return {
        success: true,
        message: 'Token saved successfully'
      }
    } else {
      console.log(`[API] Токен уже существует: ${token.substring(0, 50)}...`)
      
      return {
        success: true,
        exists: true,
        message: 'Token already exists'
      }
    }
  } catch (error) {
    console.error('[API] Ошибка сохранения токена:', error)
    
    throw createError({
      statusCode: 500,
      message: error.message || 'Internal server error'
    })
  }
})
