import { createClient } from '@supabase/supabase-js'

let supabase = null

export function useSupabase() {
  if (!supabase) {
    const config = useRuntimeConfig()
    const supabaseUrl = config.public.supabaseUrl
    const supabaseAnonKey = config.public.supabaseAnonKey

    if (!supabaseUrl || !supabaseAnonKey) {
      console.warn('[Supabase] URL или ключ не настроены')
      return null
    }

    supabase = createClient(supabaseUrl, supabaseAnonKey)
  }

  return supabase
}
