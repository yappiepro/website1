/**
 * Композируемый хук для отслеживания скролла
 * Использует VueUse useWindowScroll и useScroll
 */

interface UseScrollOptions {
  throttle?: number
  onBottom?: () => void
  bottomOffset?: number
}

export function useScroll(options: UseScrollOptions = {}) {
  const { onBottom, bottomOffset = 100 } = options

  // Базовый скролл из VueUse
  const { x, y } = useWindowScroll({ behavior: 'smooth' })

  // Вычисление позиции скролла
  const scrollPosition = computed(() => ({ x: x.value, y: y.value }))

  // Проверка достижения низа страницы
  const reachedBottom = computed(() => {
    const scrollHeight = document.documentElement.scrollHeight
    const scrollTop = y.value
    const clientHeight = document.documentElement.clientHeight

    return scrollHeight - scrollTop - clientHeight <= bottomOffset
  })

  // Авто-вызов callback при достижении низа
  watch(reachedBottom, (reached) => {
    if (reached && onBottom) {
      onBottom()
    }
  })

  // Функции прокрутки
  function scrollToTop() {
    y.value = 0
  }

  function scrollToBottom() {
    y.value = document.documentElement.scrollHeight
  }

  function scrollToElement(selector: string) {
    const element = document.querySelector(selector)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // Прогресс скролла (0-100%)
  const scrollProgress = computed(() => {
    const scrollHeight =
      document.documentElement.scrollHeight - document.documentElement.clientHeight
    return scrollHeight > 0 ? (y.value / scrollHeight) * 100 : 0
  })

  return {
    x,
    y,
    position: scrollPosition,
    reachedBottom,
    scrollProgress,
    scrollToTop,
    scrollToBottom,
    scrollToElement,
  }
}
