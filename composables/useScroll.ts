/**
 * Композируемый хук для отслеживания скролла
 */

interface ScrollPosition {
  x: number
  y: number
}

interface UseScrollOptions {
  throttle?: number
  onBottom?: () => void
  bottomOffset?: number
}

export function useScroll(options: UseScrollOptions = {}) {
  const { throttle = 100, onBottom, bottomOffset = 100 } = options

  const position = ref<ScrollPosition>({ x: 0, y: 0 })
  const isScrolling = ref(false)
  const reachedBottom = ref(false)

  let scrollTimeout: ReturnType<typeof setTimeout> | null = null
  let rafId: number | null = null

  function checkBottom() {
    const scrollHeight = document.documentElement.scrollHeight
    const scrollTop = document.documentElement.scrollTop
    const clientHeight = document.documentElement.clientHeight

    reachedBottom.value = scrollHeight - scrollTop - clientHeight <= bottomOffset

    if (reachedBottom.value && onBottom) {
      onBottom()
    }
  }

  function onScroll() {
    position.value = {
      x: window.scrollX,
      y: window.scrollY,
    }

    checkBottom()

    isScrolling.value = true

    if (scrollTimeout) {
      clearTimeout(scrollTimeout)
    }

    scrollTimeout = setTimeout(() => {
      isScrolling.value = false
      scrollTimeout = null
    }, throttle)
  }

  function onScrollRaf() {
    onScroll()
    rafId = requestAnimationFrame(onScrollRaf)
  }

  function scrollToTop(smooth = true) {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: smooth ? 'smooth' : 'auto',
    })
  }

  function scrollToBottom(smooth = true) {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      left: 0,
      behavior: smooth ? 'smooth' : 'auto',
    })
  }

  onMounted(() => {
    if (typeof window !== 'undefined') {
      rafId = requestAnimationFrame(onScrollRaf)
    }
  })

  onUnmounted(() => {
    if (rafId) {
      cancelAnimationFrame(rafId)
    }
    if (scrollTimeout) {
      clearTimeout(scrollTimeout)
    }
  })

  return {
    position,
    isScrolling,
    reachedBottom,
    scrollToTop,
    scrollToBottom,
  }
}
