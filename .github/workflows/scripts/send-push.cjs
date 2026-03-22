/**
 * Скрипт отправки Web Push уведомлений через GitHub Actions
 * 
 * Использование:
 * node scripts/send-push.js --title "Заголовок" --body "Текст" --url "/blog"
 */

const webpush = require('web-push')
const admin = require('firebase-admin')

// Конфигурация из переменных окружения
const VAPID_PUBLIC_KEY = process.env.NUXT_FIREBASE_VAPID_KEY
const VAPID_PRIVATE_KEY = process.env.VAPID_PRIVATE_KEY
const VAPID_SUBJECT = process.env.VAPID_SUBJECT || 'mailto:a9535487323@yandex.ru'
const FIREBASE_SERVICE_ACCOUNT = process.env.FIREBASE_SERVICE_ACCOUNT

// Парсинг аргументов командной строки
function parseArgs() {
  const args = process.argv.slice(2)
  const result = {}

  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--title' && args[i + 1]) {
      result.title = args[++i]
    } else if (args[i] === '--body' && args[i + 1]) {
      result.body = args[++i]
    } else if (args[i] === '--url' && args[i + 1]) {
      result.url = args[++i]
    } else if (args[i] === '--image' && args[i + 1]) {
      result.image = args[++i]
    } else if (args[i] === '--type' && args[i + 1]) {
      result.type = args[++i]
    }
  }

  return result
}

// Инициализация Firebase Admin
function initFirebase() {
  if (!FIREBASE_SERVICE_ACCOUNT) {
    console.error('❌ FIREBASE_SERVICE_ACCOUNT не указан')
    process.exit(1)
  }

  try {
    // Пробуем разные способы парсинга JSON из GitHub Secrets
    let serviceAccount
    try {
      // Сначала пробуем распарсить как есть
      serviceAccount = JSON.parse(FIREBASE_SERVICE_ACCOUNT)
    } catch (e) {
      // Если не получилось, заменяем экранированные символы
      const cleanedJson = FIREBASE_SERVICE_ACCOUNT
        .replace(/\\n/g, '\n')
        .replace(/\\"/g, '"')
        .replace(/\\\\/g, '\\')
      serviceAccount = JSON.parse(cleanedJson)
    }
    
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount)
    })
    console.log('✅ Firebase Admin инициализирован')
    return admin.firestore()
  } catch (error) {
    console.error('❌ Ошибка инициализации Firebase:', error.message)
    process.exit(1)
  }
}

// Получение всех подписок из Firestore
async function getSubscriptions(db) {
  try {
    const snapshot = await db.collection('push_subscriptions').get()
    const subscriptions = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }))
    console.log(`📋 Найдено подписок: ${subscriptions.length}`)
    return subscriptions
  } catch (error) {
    console.error('❌ Ошибка получения подписок:', error.message)
    return []
  }
}

// Отправка пуша
async function sendPush(subscription, payload) {
  const sub = {
    endpoint: subscription.endpoint,
    expirationTime: subscription.expirationTime,
    keys: subscription.keys
  }
  
  try {
    await webpush.sendNotification(sub, payload)
    return { ok: true }
  } catch (error) {
    const statusCode = error.statusCode || error.status || 0
    // 404 = Not Found, 410 = Gone - удаляем подписку
    if (statusCode === 404 || statusCode === 410) {
      return { ok: false, remove: true, statusCode }
    }
    return { ok: false, statusCode }
  }
}

// Удаление невалидной подписки
async function removeSubscription(db, id) {
  try {
    await db.collection('push_subscriptions').doc(id).delete()
    return true
  } catch (error) {
    console.error(`❌ Ошибка удаления подписки ${id}:`, error.message)
    return false
  }
}

// Основная функция
async function main() {
  const options = parseArgs()
  
  if (!options.title) {
    console.error('❌ Укажите --title')
    process.exit(1)
  }
  
  if (!VAPID_PUBLIC_KEY || !VAPID_PRIVATE_KEY) {
    console.error('❌ VAPID ключи не указаны')
    process.exit(1)
  }
  
  // Настройка VAPID
  webpush.setVapidDetails(VAPID_SUBJECT, VAPID_PUBLIC_KEY, VAPID_PRIVATE_KEY)
  
  // Инициализация Firestore
  const db = initFirebase()
  
  // Получение подписок
  const subscriptions = await getSubscriptions(db)
  
  if (subscriptions.length === 0) {
    console.log('⚠️ Нет активных подписок')
    process.exit(0)
  }
  
  // Формирование payload
  const payload = JSON.stringify({
    title: options.title,
    body: options.body || '',
    image: options.image,
    data: {
      url: options.url || '/',
      type: options.type || 'default'
    }
  })
  
  console.log(`📤 Отправка уведомления: "${options.title}"`)
  
  // Отправка всем подписчикам
  const results = await Promise.allSettled(
    subscriptions.map(async (sub) => {
      const result = await sendPush(sub, payload)
      return { id: sub.id, ...result }
    })
  )
  
  // Анализ результатов
  let success = 0
  let failed = 0
  let removed = 0
  
  for (const result of results) {
    if (result.status === 'fulfilled') {
      if (result.value.ok) {
        success++
      } else if (result.value.remove) {
        removed++
        await removeSubscription(db, result.value.id)
      } else {
        failed++
      }
    } else {
      failed++
    }
  }
  
  // Итоговый отчёт
  console.log('\n📊 Результаты:')
  console.log(`✅ Успешно: ${success}`)
  console.log(`🗑️ Удалено (невалидные): ${removed}`)
  console.log(`❌ Ошибки: ${failed}`)
  console.log(`📬 Всего: ${subscriptions.length}`)
  
  // Вывод для GitHub Actions
  console.log(`\n::set-output name=success::${success}`)
  console.log(`::set-output name=failed::${failed}`)
  console.log(`::set-output name=removed::${removed}`)
}

main().catch(error => {
  console.error('❌ Критическая ошибка:', error.message)
  process.exit(1)
})
