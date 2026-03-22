import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Обработка CORS preflight запросов
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    // Создаём Supabase клиент
    const supabaseUrl = Deno.env.get('SUPABASE_URL') ?? ''
    const supabaseServiceRoleKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    const supabase = createClient(supabaseUrl, supabaseServiceRoleKey)

    // Парсим тело запроса
    const { name, phone, email, telegram, source } = await req.json()

    // Валидация
    if (!name) {
      return new Response(
        JSON.stringify({ error: 'Имя обязательно' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    // Сохраняем заявку в Supabase
    const { data: submission, error: dbError } = await supabase
      .from('contact_submissions')
      .insert([{
        name,
        phone: phone || null,
        email: email || null,
        telegram: telegram || null,
        source: source || 'Неизвестно',
        is_read: false
      }])
      .select()
      .single()

    if (dbError) {
      console.error('Supabase error:', dbError)
      return new Response(
        JSON.stringify({ error: dbError.message }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    // Отправляем уведомление в Telegram
    const telegramBotToken = Deno.env.get('TELEGRAM_BOT_TOKEN')
    const telegramChatId = Deno.env.get('TELEGRAM_CHAT_ID')

    if (telegramBotToken && telegramChatId) {
      const message = `🔔 *Новая заявка с сайта*\n\n` +
        `📍 *Источник:* ${source || 'Не указан'}\n` +
        `👤 *Имя:* ${name}\n` +
        (phone ? `📞 *Телефон:* ${phone}\n` : '') +
        (email ? `📧 *Email:* ${email}\n` : '') +
        (telegram ? `✈️ *Telegram:* ${telegram}\n` : '') +
        `\n📅 ${new Date().toLocaleDateString('ru-RU')}`

      try {
        const telegramResponse = await fetch(
          `https://api.telegram.org/bot${telegramBotToken}/sendMessage`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              chat_id: telegramChatId,
              text: message,
              parse_mode: 'Markdown'
            })
          }
        )

        const telegramResult = await telegramResponse.json()
        if (!telegramResult.ok) {
          console.error('Telegram error:', telegramResult)
        } else {
          console.log('Telegram notification sent successfully')
        }
      } catch (telegramError) {
        console.error('Telegram exception:', telegramError)
      }
    }

    // Возвращаем успешный ответ
    return new Response(
      JSON.stringify({ 
        success: true, 
        data: submission,
        message: 'Заявка успешно отправлена'
      }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )

  } catch (error) {
    console.error('Error:', error)
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  }
})
