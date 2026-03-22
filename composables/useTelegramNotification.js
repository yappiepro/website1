import { useSupabase } from './useSupabase'

/**
 * Отправляет уведомление в Telegram бот при новой заявке
 */
export async function sendTelegramNotification(formData) {
  const config = useRuntimeConfig()
  const telegramBotToken = config.public.telegramBotToken
  const telegramChatId = config.public.telegramChatId

  if (!telegramBotToken || !telegramChatId) {
    console.warn('[Telegram] Bot token or chat ID not configured')
    return { success: false, error: 'Not configured' }
  }

  // Формируем сообщение
  let message = `🔔 *Новая заявка с сайта*\n\n`
  message += `👤 *Имя:* ${formData.name}\n`
  
  if (formData.phone) {
    message += `📞 *Телефон:* ${formData.phone}\n`
  }
  
  if (formData.email) {
    message += `📧 *Email:* ${formData.email}\n`
  }
  
  if (formData.telegram) {
    message += `✈️ *Telegram:* ${formData.telegram}\n`
  }

  message += `\n📅 ${new Date().toLocaleDateString('ru-RU')}`

  // Отправляем в Telegram
  try {
    const response = await fetch(
      `https://api.telegram.org/bot${telegramBotToken}/sendMessage`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          chat_id: telegramChatId,
          text: message,
          parse_mode: 'Markdown'
        })
      }
    )

    const result = await response.json()

    if (result.ok) {
      console.log('[Telegram] Notification sent successfully')
      return { success: true }
    } else {
      console.error('[Telegram] API error:', result)
      return { success: false, error: result.description }
    }
  } catch (error) {
    console.error('[Telegram] Send error:', error)
    return { success: false, error: error.message }
  }
}

/**
 * Обновлённая функция отправки формы с уведомлением в Telegram
 */
export async function submitContactFormWithNotification(formData) {
  const supabase = useSupabase()

  // 1. Сохраняем в Supabase
  const { data, error: dbError } = await supabase
    .from('contact_submissions')
    .insert([{
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      telegram: formData.telegram,
      created_at: new Date().toISOString()
    }])
    .select()
    .single()

  if (dbError) {
    console.error('[Supabase] Error:', dbError)
    return { success: false, error: dbError.message }
  }

  // 2. Отправляем уведомление в Telegram (не блокируя основной поток)
  sendTelegramNotification(formData).catch(err => {
    console.error('[Telegram] Background notification failed:', err)
  })

  return { success: true, data }
}
