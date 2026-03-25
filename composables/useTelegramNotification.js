/**
 * Отправляет заявку напрямую в Telegram через Telegram Bot API
 */
export async function submitContactFormWithNotification(formData) {
  const config = useRuntimeConfig()
  const botToken = config.public.telegramBotToken
  const chatId = config.public.telegramChatId

  if (!botToken || !chatId) {
    console.error('[Telegram] Bot token или chat ID не настроены')
    return { success: false, error: 'Telegram not configured' }
  }

  try {
    // Формируем сообщение
    const message = `
📬 *Новая заявка с сайта*

👤 *Имя:* ${formData.name}
📱 *Телефон:* ${formData.phone}
${formData.email ? `📧 *Email:* ${formData.email}` : ''}
${formData.telegram ? `✈️ *Telegram:* ${formData.telegram}` : ''}
🌐 *Источник:* ${formData.source}
`.trim()

    // Отправляем в Telegram
    const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: 'Markdown'
      })
    })

    const result = await response.json()

    if (!result.ok) {
      console.error('[Telegram] API Error:', result)
      return { success: false, error: result.description || 'Telegram API error' }
    }

    console.log('[Telegram] Message sent successfully')
    return { success: true, data: result }

  } catch (error) {
    console.error('[Telegram] Exception:', error)
    return { success: false, error: error.message }
  }
}
