import { defineEventHandler, readBody, createError } from 'h3'
import { initializeApp, getApps, cert } from 'firebase-admin/app'
import { getFirestore, collection, query, where, getDocs, deleteDoc, doc } from 'firebase-admin/firestore'

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
    const { token } = body

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

    // Находим токен
    const q = query(tokensRef, where('token', '==', token))
    const querySnapshot = await getDocs(q)

    if (querySnapshot.empty) {
      return {
        success: true,
        message: 'Token not found'
      }
    }

    // Удаляем все найденные документы
    const deletePromises = []
    querySnapshot.forEach((docSnapshot) => {
      deletePromises.push(deleteDoc(doc(db, docSnapshot.id)))
    })

    await Promise.all(deletePromises)

    console.log(`[API] Токен удалён: ${token.substring(0, 50)}...`)

    return {
      success: true,
      message: 'Token deleted successfully'
    }
  } catch (error) {
    console.error('[API] Ошибка удаления токена:', error)

    throw createError({
      statusCode: 500,
      message: error.message || 'Internal server error'
    })
  }
})
