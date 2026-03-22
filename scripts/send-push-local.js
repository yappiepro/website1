#!/usr/bin/env node
/**
 * Скрипт для отправки Web Push уведомлений
 * Использует Supabase для получения подписок и VAPID для подписи
 */

import webPush from 'web-push'
import { createClient } from '@supabase/supabase-js'
import dotenv from 'dotenv'

dotenv.config()

// Конфигурация
const VAPID_PUBLIC_KEY = process.env.NUXT_FIREBASE_VAPID_KEY
const VAPID_PRIVATE_KEY = process.env.VAPID_PRIVATE_KEY
const VAPID_SUBJECT = process.env.VAPID_SUBJECT || 'mailto:a9535487323@yandex.ru'

const SUPABASE_URL = process.env.NUXT_PUBLIC_SUPABASE_URL
const SUPABASE_ANON_KEY = process.env.NUXT_PUBLIC_SUPABASE_ANON_KEY

// Конвертация base64url в Buffer для web-push
function urlBase64ToBuffer(base64String) {
  const padding = '='.repeat((4 - (base64String.length % 4)) % 4)
  const base64 = (base64String + padding)
    .replace(/-/g, '+')
    .replace(/_/g, '/')
  return Buffer.from(base64, 'base64')
}

// Настройка VAPID
webPush.setVapidDetails(
  VAPID_SUBJECT,
  VAPID_PUBLIC_KEY,
  VAPID_PRIVATE_KEY
)

// Supabase клиент
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

// Получение аргументов командной строки
const args = process.argv.slice(2)
const title = args.find((_, i) => args[i - 1] === '--title') || 'Тестовое уведомление'
const body = args.find((_, i) => args[i - 1] === '--body') || 'Проверка работы push-уведомлений'
const url = args.find((_, i) => args[i - 1] === '--url') || '/notifications'

async function main() {
  console.log('📬 Отправка push-уведомлений...\n')
  console.log(`Заголовок: ${title}`)
  console.log(`Текст: ${body}`)
  console.log(`URL: ${url}\n`)

  // Получаем все подписки из Supabase
  console.log('Получение подписок из Supabase...')
  const { data: subscriptions, error } = await supabase
    .from('push_subscriptions')
    .select('endpoint, p256dh, auth')

  if (error) {
    console.error('❌ Ошибка получения подписок:', error.message)
    process.exit(1)
  }

  if (!subscriptions || subscriptions.length === 0) {
    console.log('⚠️ Нет активных подписок')
    process.exit(0)
  }

  console.log(`✅ Найдено подписок: ${subscriptions.length}\n`)

  // Отправляем уведомление каждой подписке
  const notificationPayload = JSON.stringify({
    title,
    body,
    data: { url },
    icon: '/favicons/android-chrome-192x192.png',
    badge: '/favicons/android-chrome-192x192.png'
  })

  let successCount = 0
  let failCount = 0

  for (const sub of subscriptions) {
    const subscription = {
      endpoint: sub.endpoint,
      keys: {
        p256dh: sub.p256dh,
        auth: sub.auth
      }
    }

    try {
      await webPush.sendNotification(subscription, notificationPayload)
      console.log(`✅ Отправлено: ${sub.endpoint.substring(0, 50)}...`)
      successCount++
    } catch (error) {
      if (error.statusCode === 410) {
        // Подписка больше не действительна
        console.log(`🗑️ Удалена неактивная подписка: ${sub.endpoint.substring(0, 50)}...`)
        await supabase
          .from('push_subscriptions')
          .delete()
          .eq('endpoint', sub.endpoint)
      } else {
        console.error(`❌ Ошибка отправки: ${error.message}`)
      }
      failCount++
    }
  }

  console.log(`\n📊 Результаты:`)
  console.log(`✅ Успешно: ${successCount}`)
  console.log(`❌ Ошибки: ${failCount}`)
}

main().catch(console.error)
