/**
 * Композируемый хук для управления анимациями
 */

interface UseAnimationOptions {
  duration?: number
  easing?: string
  onComplete?: () => void
}

export function useAnimation() {
  const isAnimating = ref(false)
  const progress = ref(0)

  function animate(
    element: HTMLElement | null,
    animation: string,
    options: UseAnimationOptions = {}
  ) {
    if (!element) return

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

  function fadeIn(element: HTMLElement | null, duration = 300) {
    if (!element) return
    element.style.opacity = '0'
    element.style.transition = `opacity ${duration}ms ease-out`

    requestAnimationFrame(() => {
      element.style.opacity = '1'
    })
  }

  function fadeOut(element: HTMLElement | null, duration = 300) {
    if (!element) return
    element.style.opacity = '1'
    element.style.transition = `opacity ${duration}ms ease-out`

    requestAnimationFrame(() => {
      element.style.opacity = '0'
    })
  }

  function slideUp(element: HTMLElement | null, duration = 300) {
    if (!element) return
    element.style.height = `${element.scrollHeight}px`
    element.style.transition = `height ${duration}ms ease-out`
    element.style.overflow = 'hidden'

    requestAnimationFrame(() => {
      element.style.height = '0'
    })
  }

  function slideDown(element: HTMLElement | null, duration = 300) {
    if (!element) return
    element.style.height = '0'
    element.style.transition = `height ${duration}ms ease-out`
    element.style.overflow = 'hidden'

    requestAnimationFrame(() => {
      element.style.height = `${element.scrollHeight}px`
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
