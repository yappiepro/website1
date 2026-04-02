/**
 * Composable для работы с Telegram Web App
 */
export function useTelegramWebApp() {
  const isTelegramApp = ref(false)
  const telegramUser = ref(null)
  const themeParams = ref(null)
  const headerHeight = ref(0)
  const isScrolled = ref(false)

  onMounted(() => {
    // Проверяем, что мы в Telegram Web App
    if (
      typeof window !== 'undefined' &&
      window.Telegram?.WebApp &&
      window.Telegram.WebApp.initData !== ''
    ) {
      const tg = window.Telegram.WebApp

      // Инициализируем Telegram Web App
      tg.ready()
      tg.expand()

      isTelegramApp.value = true

      // Получаем данные пользователя
      if (tg.initDataUnsafe?.user) {
        telegramUser.value = {
          id: tg.initDataUnsafe.user.id,
          firstName: tg.initDataUnsafe.user.first_name,
          lastName: tg.initDataUnsafe.user.last_name,
          username: tg.initDataUnsafe.user.username,
          isPremium: tg.initDataUnsafe.user.is_premium,
        }
      }

      // Получаем параметры темы
      if (tg.themeParams) {
        themeParams.value = tg.themeParams
      }

      // Добавляем класс для Telegram Web App
      document.body.classList.add('tg-webapp')

      // Отслеживаем скролл для навигации
      window.addEventListener('scroll', () => {
        isScrolled.value = window.scrollY > 50
        if (isScrolled.value) {
          document.body.classList.add('is-scrolled')
        } else {
          document.body.classList.remove('is-scrolled')
        }
      })
    }
  })

  // Функция для закрытия Web App
  function closeApp() {
    if (typeof window !== 'undefined' && window.Telegram?.WebApp) {
      window.Telegram.WebApp.close()
    }
  }

  // Функция для показа главной кнопки
  function showMainButton(text, onClick) {
    if (typeof window !== 'undefined' && window.Telegram?.WebApp) {
      const tg = window.Telegram.WebApp
      tg.MainButton.setText(text)
      tg.MainButton.onClick(onClick)
      tg.MainButton.show()
    }
  }

  // Функция для скрытия главной кнопки
  function hideMainButton() {
    if (typeof window !== 'undefined' && window.Telegram?.WebApp) {
      window.Telegram.WebApp.MainButton.hide()
    }
  }

  return {
    isTelegramApp,
    telegramUser,
    themeParams,
    headerHeight,
    closeApp,
    showMainButton,
    hideMainButton,
  }
}
