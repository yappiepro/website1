/**
 * Утилиты для форматирования
 */

/**
 * Форматирование телефона по маске +7 (XXX) XXX-XX-XX
 */
export function formatPhone(phone: string): string {
  const cleaned = phone.replace(/\D/g, '')

  if (cleaned.length === 0) {
    return ''
  }

  let prefix = ''
  let startIndex = 0

  if (cleaned[0] === '8') {
    prefix = '8'
    startIndex = 1
  } else if (cleaned[0] === '7') {
    prefix = '+7'
    startIndex = 1
  } else {
    prefix = '+7'
    startIndex = 0
  }

  const digits = cleaned.slice(startIndex)
  let formatted = prefix

  if (digits.length > 0) {
    formatted += ` (${digits.slice(0, 3)}`
  }
  if (digits.length > 3) {
    formatted += `) ${digits.slice(3, 6)}`
  }
  if (digits.length > 6) {
    formatted += `-${digits.slice(6, 8)}`
  }
  if (digits.length > 8) {
    formatted += `-${digits.slice(8, 10)}`
  }

  return formatted
}

/**
 * Форматирование цены
 */
export function formatPrice(price: number, currency = '₽'): string {
  return new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'RUB',
    maximumFractionDigits: 0,
  })
    .format(price)
    .replace('руб.', currency)
}

/**
 * Форматирование даты
 */
export function formatDate(date: Date | string, locale = 'ru-RU'): string {
  const d = typeof date === 'string' ? new Date(date) : date

  return new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(d)
}

/**
 * Форматирование относительного времени (например, "2 часа назад")
 */
export function formatRelativeTime(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date
  const now = new Date()
  const diffMs = now.getTime() - d.getTime()
  const diffMins = Math.floor(diffMs / 60000)
  const diffHours = Math.floor(diffMins / 60)
  const diffDays = Math.floor(diffHours / 24)

  if (diffMins < 1) {
    return 'только что'
  } else if (diffMins < 60) {
    return `${diffMins} ${pluralize(diffMins, ['минуту', 'минуты', 'минут'])} назад`
  } else if (diffHours < 24) {
    return `${diffHours} ${pluralize(diffHours, ['час', 'часа', 'часов'])} назад`
  } else if (diffDays < 7) {
    return `${diffDays} ${pluralize(diffDays, ['день', 'дня', 'дней'])} назад`
  } else {
    return formatDate(d)
  }
}

/**
 * Склонение слов по числу
 */
export function pluralize(count: number, forms: [string, string, string]): string {
  const n = count % 100
  const n1 = n % 10

  if (n > 10 && n < 20) {
    return forms[2]
  }
  if (n1 > 1 && n1 < 5) {
    return forms[1]
  }
  if (n1 === 1) {
    return forms[0]
  }
  return forms[2]
}

/**
 * Сокращение чисел (1000 → 1K, 1000000 → 1M)
 */
export function abbreviateNumber(num: number): string {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M'
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K'
  }
  return num.toString()
}
