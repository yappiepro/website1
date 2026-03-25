/**
 * Композируемый хук для управления анимациями
 * Использует VueUse useRafFn и useCssVar
 */

interface UseAnimationOptions {
  duration?: number
  easing?: string
  onComplete?: () => void
}

export function useAnimation() {
  const isAnimating = ref(false)
  const progress = ref(0)

  // Анимация через requestAnimationFrame
  function animate(
    element: HTMLElement | null,
    animation: string,
    options: UseAnimationOptions = {}
  ) {
    if (!element) {
      return
    }

    const { duration = 300, easing = 'ease-out', onComplete } = options

    isAnimating.value = true
    progress.value = 0

    element.style.animation = `${animation} ${duration}ms ${easing}`

    const handleAnimationEnd = () => {
      isAnimating.value = false
      progress.value = 100
      element.style.animation = ''
      onComplete?.()
    }

    element.addEventListener('animationend', handleAnimationEnd, { once: true })
  }

  // Плавное появление
  function fadeIn(element: HTMLElement | null, duration = 300) {
    if (!element) {
      return
    }

    const opacity = useCssVar('--fade-opacity', element)
    opacity.value = '0'

    useRafFn(({ delta }) => {
      const current = parseFloat(opacity.value) || 0
      const newValue = Math.min(current + delta / duration, 1)
      opacity.value = newValue.toString()

      if (newValue >= 1) {
        isAnimating.value = false
        return false // stop animation
      }

      isAnimating.value = true
      progress.value = newValue * 100
      return true // continue animation
    })
  }

  // Плавное исчезновение
  function fadeOut(element: HTMLElement | null, duration = 300) {
    if (!element) {
      return
    }

    const opacity = useCssVar('--fade-opacity', element)
    opacity.value = '1'

    useRafFn(({ delta }) => {
      const current = parseFloat(opacity.value) || 1
      const newValue = Math.max(current - delta / duration, 0)
      opacity.value = newValue.toString()

      if (newValue <= 0) {
        isAnimating.value = false
        return false
      }

      isAnimating.value = true
      progress.value = (1 - newValue) * 100
      return true
    })
  }

  // Slide up с использованием VueUse
  function slideUp(element: HTMLElement | null, duration = 300) {
    if (!element) {
      return
    }

    const height = useCssVar('--slide-height', element)
    const initialHeight = element.scrollHeight

    height.value = `${initialHeight}px`
    element.style.overflow = 'hidden'
    element.style.transition = `height ${duration}ms ease-out`

    requestAnimationFrame(() => {
      height.value = '0'
    })
  }

  // Slide down
  function slideDown(element: HTMLElement | null, duration = 300) {
    if (!element) {
      return
    }

    const height = useCssVar('--slide-height', element)
    const targetHeight = element.scrollHeight

    height.value = '0'
    element.style.overflow = 'hidden'
    element.style.transition = `height ${duration}ms ease-out`

    requestAnimationFrame(() => {
      height.value = `${targetHeight}px`
    })
  }

  return {
    isAnimating,
    progress,
    animate,
    fadeIn,
    fadeOut,
    slideUp,
    slideDown,
  }
}
