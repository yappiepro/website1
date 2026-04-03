import { ref, computed, onMounted, onUnmounted } from 'vue'

export function useAuth() {
  const supabase = useSupabase()
  const user = ref(null)
  const loading = ref(true)

  async function getUser() {
    if (!supabase) {
      return null
    }
    const { data } = await supabase.auth.getSession()
    return data.session?.user || null
  }

  async function register(email, password) {
    if (!supabase) {
      return { error: { message: 'Supabase не настроен' } }
    }
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    })
    return { data, error }
  }

  async function login(email, password) {
    if (!supabase) {
      return { error: { message: 'Supabase не настроен' } }
    }
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    return { data, error }
  }

  async function logout() {
    if (!supabase) {
      return
    }
    await supabase.auth.signOut()
  }

  // Подписка на изменения auth-состояния
  let authSubscription = null

  onMounted(async () => {
    user.value = await getUser()
    loading.value = false

    if (supabase) {
      const { data } = supabase.auth.onAuthStateChange((event, session) => {
        user.value = session?.user || null
        loading.value = false
      })
      authSubscription = data.subscription
    }
  })

  onUnmounted(() => {
    authSubscription?.unsubscribe()
  })

  return {
    user,
    loading,
    isAuthenticated: computed(() => !!user.value),
    register,
    login,
    logout,
  }
}
