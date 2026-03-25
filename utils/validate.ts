/**
 * Утилиты для валидации
 */

/**
 * Валидация email
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

/**
 * Валидация телефона (российские номера)
 */
export function isValidPhone(phone: string): boolean {
  const cleaned = phone.replace(/\D/g, '')
  return /^7\d{10}$/.test(cleaned) || /^8\d{10}$/.test(cleaned)
}

/**
 * Валидация Telegram username
 */
export function isValidTelegramUsername(username: string): boolean {
  const usernameRegex = /^@[a-zA-Z0-9_]{5,32}$/
  return usernameRegex.test(username)
}

/**
 * Валидация пароля
 */
export function isValidPassword(password: string, minLength = 8): boolean {
  if (password.length < minLength) {
    return false
  }

  const hasUppercase = /[A-Z]/.test(password)
  const hasLowercase = /[a-z]/.test(password)
  const hasNumbers = /\d/.test(password)

  return hasUppercase && hasLowercase && hasNumbers
}

/**
 * Валидация URL
 */
export function isValidUrl(url: string): boolean {
  try {
    new URL(url)
    return true
  } catch {
    return false
  }
}

/**
 * Валидация длины строки
 */
export function isValidLength(value: string, min: number, max: number): boolean {
  return value.length >= min && value.length <= max
}

/**
 * Валидация обязательного поля
 */
export function isRequired(value: string | null | undefined): boolean {
  if (typeof value === 'string') {
    return value.trim().length > 0
  }
  return value !== null && value !== undefined
}
