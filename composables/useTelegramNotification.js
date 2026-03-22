import { useSupabase } from './useSupabase'

/**
 * Отправляет заявку через Supabase Edge Function tg-message
 */
export async function submitContactFormWithNotification(formData) {
  const supabase = useSupabase()
  
  if (!supabase) {
    console.error('[Supabase] Клиент не инициализирован')
    return { success: false, error: 'Supabase not initialized' }
  }

  try {
    // Вызываем Edge Function tg_massege
    const { data, error } = await supabase.functions.invoke('tg_massege', {
      body: {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        telegram: formData.telegram,
        source: formData.source
      }
    })

    if (error) {
      console.error('[Edge Function] Error:', error)
      return { success: false, error: error.message }
    }

    console.log('[Edge Function] Success:', data)
    return { success: true, data }

  } catch (error) {
    console.error('[Edge Function] Exception:', error)
    return { success: false, error: error.message }
  }
}
