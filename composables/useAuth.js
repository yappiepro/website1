import { ref, computed } from 'vue'

const _user = ref(null)
let _initialized = false

export function useAuth() {
  function getSupabase() {
    try {
      return useSupabase()
    } catch {
      return null
    }
  }

  async function getUser() {
    const supabase = getSupabase()
    if (!supabase) {
      return null
    }
    const { data } = await supabase.auth.getSession()
    return data.session?.user || null
  }

  async function register(email, password) {
    const supabase = getSupabase()
    if (!supabase) {
      return { error: { message: 'Supabase не настроен' } }
    }
    const { data, error } = await supabase.auth.signUp({ email, password })
    if (!error && data?.session) {
      _user.value = data.session.user
    }
    return { data, error }
  }

  async function login(email, password) {
    const supabase = getSupabase()
    if (!supabase) {
      return { error: { message: 'Supabase не настроен' } }
    }
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    if (!error && data?.session) {
      _user.value = data.session.user
    }
    return { data, error }
  }

  async function logout() {
    const supabase = getSupabase()
    if (!supabase) {
      return
    }
    await supabase.auth.signOut()
    _user.value = null
  }

  async function ensureUser() {
    if (!_initialized) {
      _user.value = await getUser()
      _initialized = true
    }
  }

  return {
    user: computed(() => _user.value),
    isAuthenticated: computed(() => !!_user.value),
    register,
    login,
    logout,
    ensureUser,
  }
}
