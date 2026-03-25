/**
 * Композируемый хук для управления состоянием мобильного меню
 */

export function useMobileMenu() {
  const isOpen = ref(false)

  function toggle() {
    isOpen.value = !isOpen.value
  }

  function close() {
    isOpen.value = false
  }

  function open() {
    isOpen.value = true
  }

  return {
    isOpen,
    toggle,
    close,
    open,
  }
}
