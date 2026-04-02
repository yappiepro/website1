/**
 * Composable для работы с Telegram Web App
 */
export function useTelegramWebApp() {
  const isTelegramApp = ref(false)
  const telegramUser = ref(null)
  const themeParams = ref(null)
  const headerHeight = ref(0)

  onMounted(() => {
    if (typeof window !== 'undefined' && window.Telegram?.WebApp) {
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

      // Получаем высоту хедера Telegram
      headerHeight.value = tg.headerColor ? 0 : 0

      // Настраиваем цвета под тему Telegram
      if (themeParams.value) {
        const root = document.documentElement
        const params = themeParams.value

        if (params.bg_color) {
          root.style.setProperty('--tg-bg-color', params.bg_color)
        }
        if (params.text_color) {
          root.style.setProperty('--tg-text-color', params.text_color)
        }
        if (params.hint_color) {
          root.style.setProperty('--tg-hint-color', params.hint_color)
        }
        if (params.link_color) {
          root.style.setProperty('--tg-link-color', params.link_color)
        }
        if (params.button_color) {
          root.style.setProperty('--tg-button-color', params.button_color)
        }
        if (params.button_text_color) {
          root.style.setProperty('--tg-button-text-color', params.button_text_color)
        }
        if (params.secondary_bg_color) {
          root.style.setProperty('--tg-secondary-bg-color', params.secondary_bg_color)
        }
      }

      // Добавляем класс для Telegram Web App
      document.documentElement.classList.add('tg-webapp')
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
