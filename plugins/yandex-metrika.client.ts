export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig()
  const metrikaId = Number(config.public.yandexMetrikaId)

  if (!metrikaId || Number.isNaN(metrikaId)) {
    return
  }

  // Official snippet behavior: create stub, load tag.js once, then init.
  const w = window as unknown as {
    ym?: any
  }

  if (typeof w.ym !== 'function') {
    const ymStub: any = function (...args: any[]) {
      ;(ymStub.a = ymStub.a || []).push(args)
    }
    ymStub.l = Number(new Date())
    w.ym = ymStub
  }

  const existingScript = document.querySelector(`script[data-ym-id="${metrikaId}"]`)
  if (!existingScript) {
    const script = document.createElement('script')
    script.async = true
    script.src = `https://mc.yandex.ru/metrika/tag.js?id=${metrikaId}`
    script.dataset.ymId = String(metrikaId)
    document.head.appendChild(script)
  }

  w.ym(metrikaId, 'init', {
    clickmap: true,
    trackLinks: true,
    accurateTrackBounce: true,
    webvisor: true,
    ecommerce: 'dataLayer',
  })

  // For SPA navigation: register hits after each page render.
  nuxtApp.hook('page:finish', () => {
    try {
      w.ym?.(metrikaId, 'hit', window.location.href, { title: document.title })
    } catch {
      // ignore
    }
  })
})

