/**
 * Композируемый хук для обработки ошибок
 */

interface ErrorHandlerOptions {
  silent?: boolean
  context?: string
}

export function useErrorHandler() {
  function handle(error: unknown, options: ErrorHandlerOptions = {}) {
    const { silent = false, context } = options

    if (!silent) {
      console.error('[Error]', context || '', error)
    }

    // Логирование в сервис мониторинга (например, Sentry)
    // if (import.meta.env.PROD) {
    //   Sentry.captureException(error)
    // }

    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    }
  }

  function handleApiError(error: unknown, endpoint: string) {
    return handle(error, {
      context: `API Error at ${endpoint}`,
    })
  }

  return {
    handle,
    handleApiError,
  }
}
