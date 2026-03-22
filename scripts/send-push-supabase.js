#!/usr/bin/env node
/**
 * Скрипт для отправки Web Push уведомлений через Supabase Edge Function
 * Использует VAPID ключи из .env для подписи
 */

import dotenv from 'dotenv'
import fetch from 'node-fetch'
import webPush from 'web-push'

dotenv.config()

const SUPABASE_URL = process.env.NUXT_PUBLIC_SUPABASE_URL
const SUPABASE_SERVICE_ROLE_KEY = process.env.NUXT_SUPABASE_SERVICE_ROLE_KEY
const VAPID_PUBLIC_KEY = process.env.NUXT_FIREBASE_VAPID_KEY
const VAPID_PRIVATE_KEY = process.env.VAPID_PRIVATE_KEY
const VAPID_SUBJECT = process.env.VAPID_SUBJECT || 'mailto:a9535487323@yandex.ru'

// Setup VAPID
webPush.setVapidDetails(VAPID_SUBJECT, VAPID_PUBLIC_KEY, VAPID_PRIVATE_KEY)

// Получение аргументов командной строки
const args = process.argv.slice(2)
const title = args.find((_, i) => args[i - 1] === '--title') || 'Тестовое уведомление'
const body = args.find((_, i) => args[i - 1] === '--body') || 'Проверка работы push-уведомлений'
const url = args.find((_, i) => args[i - 1] === '--url') || '/notifications'
const image = args.find((_, i) => args[i - 1] === '--image') || ''

async function main() {
  console.log('📬 Отправка push-уведомлений...\n')
  console.log(`Заголовок: ${title}`)
  console.log(`Текст: ${body}`)
  console.log(`URL: ${url}\n`)

  // Get all subscriptions from Supabase
  const response = await fetch(`${SUPABASE_URL}/rest/v1/push_subscriptions?select=endpoint,p256dh,auth`, {
    headers: {
      'apikey': SUPABASE_SERVICE_ROLE_KEY,
      'Authorization': `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
      'Prefer': 'resolution=ignore-duplicates'
    }
  })

  const { data: subscriptions } = await response.json()

  if (!subscriptions || subscriptions.length === 0) {
    console.log('⚠️ Нет активных подписок')
    return
  }

  console.log(`✅ Найдено подписок: ${subscriptions.length}\n`)

  const payload = JSON.stringify({
    title,
    body,
    data: { url },
    icon: '/favicons/android-chrome-192x192.png',
    badge: '/favicons/android-chrome-192x192.png',
    image
  })

  let successCount = 0
  let failCount = 0

  // Send to each subscription
  for (const sub of subscriptions) {
    const subscription = {
      endpoint: sub.endpoint,
      keys: {
        p256dh: sub.p256dh,
        auth: sub.auth
      }
    }

    try {
      await webPush.sendNotification(subscription, payload)
      console.log(`✅ Отправлено: ${sub.endpoint.substring(0, 50)}...`)
      successCount++
    } catch (error) {
      if (error.statusCode === 410) {
        // Subscription expired - remove from database
        await fetch(`${SUPABASE_URL}/rest/v1/push_subscriptions?endpoint=eq.${sub.endpoint}`, {
          method: 'DELETE',
          headers: {
            'apikey': SUPABASE_SERVICE_ROLE_KEY,
            'Authorization': `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`
          }
        })
        console.log(`🗑️ Удалена неактивная подписка`)
      } else {
        console.error(`❌ Ошибка: ${error.message}`)
      }
      failCount++
    }
  }

  console.log(`\n📊 Результаты:`)
  console.log(`✅ Успешно: ${successCount}`)
  console.log(`❌ Ошибки: ${failCount}`)
}

main().catch(console.error)
