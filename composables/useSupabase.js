import { createClient } from '@supabase/supabase-js'

let supabase = null

export function useSupabase() {
  if (!supabase) {
    const config = useRuntimeConfig()
    supabase = createClient(
      config.public.supabaseUrl,
      config.public.supabaseAnonKey
    )
  }
  return supabase
}
