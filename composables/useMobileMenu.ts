/**
 * Композируемый хук для управления мобильным меню
 * Использует VueUse useToggle и useMediaQuery
 */

export function useMobileMenu() {
  // Автоматическое переключение состояний
  const [isOpen, toggleMenu] = useToggle(false)

  // Проверка мобильного viewport
  const isMobile = useMediaQuery('(max-width: 768px)')

  // Закрыть меню при изменении размера на десктоп
  watch(isMobile, (mobile) => {
    if (!mobile) {
      isOpen.value = false
    }
  })

  // Сохранение состояния в localStorage
  const menuState = useLocalStorage('mobile-menu-state', false)

  function close() {
    isOpen.value = false
    menuState.value = false
  }

  function open() {
    if (isMobile.value) {
      isOpen.value = true
      menuState.value = true
    }
  }

  // Восстановление состояния при загрузке
  onMounted(() => {
    if (menuState.value && isMobile.value) {
      isOpen.value = true
    }
  })

  return {
    isOpen,
    isMobile,
    toggle: toggleMenu,
    close,
    open,
  }
}
