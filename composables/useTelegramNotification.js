/**
 * Отправляет заявку напрямую в Edge Function Supabase
 */
export async function submitContactFormWithNotification(formData) {
  const config = useRuntimeConfig()
  const supabaseUrl = config.public.supabaseUrl
  const supabaseServiceRoleKey = config.public.supabaseServiceRoleKey

  if (!supabaseUrl || !supabaseServiceRoleKey) {
    console.error('[Supabase] URL или service role key не настроены')
    return { success: false, error: 'Supabase not configured' }
  }

  try {
    // Вызываем Edge Function напрямую через fetch
    const response = await fetch(`${supabaseUrl}/functions/v1/tg_massege`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${supabaseServiceRoleKey}`,
        'apikey': supabaseServiceRoleKey
      },
      body: JSON.stringify({
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        telegram: formData.telegram,
        service: formData.service, // Новая услуга
        source: formData.source
      })
    })

    const result = await response.json()

    if (!response.ok) {
      console.error('[Edge Function] Error:', response.status, result)
      return {
        success: false,
        error: result.error || `HTTP ${response.status}: ${response.statusText}`
      }
    }

    console.log('[Edge Function] Success:', result)
    return { success: true, data: result }

  } catch (error) {
    console.error('[Edge Function] Exception:', error)
    return { success: false, error: error.message }
  }
}
