// Импорт статей из кластеров
import razrabotkaSaytaPodKlyuch from './blog/razrabotka-saytov/razrabotka-sayta-pod-klyuch.js'
import skolkoStoitRazrabotkaSayta from './blog/razrabotka-saytov/skolko-stoit-razrabotka-sayta.js'

// Массив всех статей
export const articles = [
  razrabotkaSaytaPodKlyuch,
  skolkoStoitRazrabotkaSayta,
  // Сюда добавляйте новые статьи:
  // import nazvanieStatyi from './blog/razrabotka-saytov/nazvanie-statyi.js'
  // nazvanieStatyi,
]

// Функция для получения статьи по slug
export function getArticleBySlug(slug) {
  return articles.find(a => a.slug === slug)
}

// Функция форматирования даты
export function formatDate(date) {
  if (!date) return ''
  const d = new Date(date)
  return d.toLocaleDateString('ru-RU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })
}

// Функция для получения уникальных категорий
export function getCategories() {
  const categories = [...new Set(articles.map(a => a.category))]
  return categories.filter(Boolean)
}

// Функция для получения статей по кластеру
export function getArticlesByCluster(cluster) {
  return articles.filter(a => a.cluster === cluster)
}

// Функция для получения уникальных кластеров
export function getClusters() {
  const clusters = [...new Set(articles.map(a => a.cluster))]
  return clusters.filter(Boolean)
}
