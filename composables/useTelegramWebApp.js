/**
 * Composable для работы с Telegram Web App
 * Исправлена ошибка [Telegram.WebView] > postEvent web_app_request_safe_area
 */
export function useTelegramWebApp() {
  const isTelegramApp = ref(false)
  const telegramUser = ref(null)
  const themeParams = ref(null)
  const headerHeight = ref(0)
  const isScrolled = ref(false)
  
  onMounted(() => {
    if (typeof window === 'undefined') return
    
    // Проверяем, не загружен ли уже скрипт
    const existingScript = document.querySelector('script[src="https://telegram.org/js/telegram-web-app.js"]')
    
    const initTelegram = () => {
      if (!window.Telegram?.WebApp) return
      
      const tg = window.Telegram.WebApp
      
      // Вызываем ready() немедленно при наличии объекта
      tg.ready()
      
      // Проверяем initData для определения запуска в Telegram
      if (tg.initData && tg.initData !== '') {
        isTelegramApp.value = true
        
        // Раскрываем приложение
        tg.expand()

        // Данные пользователя
        if (tg.initDataUnsafe?.user) {
          telegramUser.value = {
            id: tg.initDataUnsafe.user.id,
            firstName: tg.initDataUnsafe.user.first_name,
            lastName: tg.initDataUnsafe.user.last_name,
            username: tg.initDataUnsafe.user.username,
            isPremium: tg.initDataUnsafe.user.is_premium,
          }
        }

        // Параметры темы
        if (tg.themeParams) {
          themeParams.value = tg.themeParams
        }

        document.body.classList.add('tg-webapp')
        
        // FIX: Явная обработка Safe Area для устранения предупреждения
        // Telegram требует явного взаимодействия с SafeArea, если мы используем его параметры
        try {
          if (tg.SafeArea) {
            // Пустой слушатель предотвращает запрос web_app_request_safe_area без необходимости
            tg.SafeArea.on('insetChanged', () => {})
          } else {
            // Если SafeArea еще не доступен, пробуем позже
            setTimeout(() => {
              if (tg.SafeArea) {
                tg.SafeArea.on('insetChanged', () => {})
              }
            }, 100)
          }
        } catch (e) {
          // Игнорируем ошибки SafeArea
        }
      }

      // Скролл
      window.addEventListener('scroll', () => {
        isScrolled.value = window.scrollY > 50
        document.body.classList.toggle('is-scrolled', isScrolled.value)
      })
    }

    if (existingScript && window.Telegram?.WebApp) {
      // Скрипт уже загружен
      initTelegram()
    } else {
      // Загружаем скрипт
      const script = document.createElement('script')
      script.src = 'https://telegram.org/js/telegram-web-app.js'
      script.async = true
      
      script.onload = () => {
        setTimeout(initTelegram, 0)
      }
      
      script.onerror = () => {
        console.warn('Telegram Web App script failed to load')
      }
      
      document.head.appendChild(script)
    }
  })

  function closeApp() {
    if (typeof window !== 'undefined' && window.Telegram?.WebApp) {
      window.Telegram.WebApp.close()
    }
  }

  function showMainButton(text, onClick) {
    if (typeof window !== 'undefined' && window.Telegram?.WebApp) {
      const tg = window.Telegram.WebApp
      tg.MainButton.setText(text)
      tg.MainButton.onClick(onClick)
      tg.MainButton.show()
    }
  }

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
