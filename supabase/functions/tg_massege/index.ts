import "jsr:@supabase/functions-js/edge-runtime.d.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

Deno.serve(async (req: Request) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  const { name, phone, email, telegram, source } = await req.json()

  // Валидация - имя и телефон обязательны
  if (!name || !phone) {
    return new Response(JSON.stringify({ error: 'Имя и телефон обязательны' }), { 
      status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    })
  }

  // Создаём Supabase клиент
  const supabaseUrl = Deno.env.get('SUPABASE_URL') || ''
  const supabaseServiceRoleKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') || ''
  const supabase = createClient(supabaseUrl, supabaseServiceRoleKey)

  // Сохраняем в таблицу
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
    return new Response(JSON.stringify({ error: dbError.message }), { 
      status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    })
  }

  // Отправляем в Telegram
  const telegramBotToken = Deno.env.get('TELEGRAM_BOT_TOKEN')
  const telegramChatId = Deno.env.get('TELEGRAM_CHAT_ID')

  if (telegramBotToken && telegramChatId) {
    const message = `Новая заявка\n\n${source || 'Неизвестно'}\n${name}\n${phone}\n${email || ''}\n${telegram || ''}`

    await fetch(`https://api.telegram.org/bot${telegramBotToken}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: telegramChatId, text: message })
    })
  }

  return new Response(JSON.stringify({ 
    success: true, 
    message: 'Отправлено!',
    data: submission
  }), { 
    status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' }
  })
})
