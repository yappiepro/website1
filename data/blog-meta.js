// Утилиты для работы с блогом

export function formatDate(dateString) {
  const date = new Date(dateString)
  return date.toLocaleDateString('ru-RU', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

export const clusters = [
  { id: 'kontent-marketing', name: 'Контент-маркетинг', color: '#7c3aed' },
  { id: 'iskusstvennyy-intellekt', name: 'Искусственный интеллект', color: '#EA6D3A' },
  { id: 'email-marketing', name: 'Email-маркетинг', color: '#2563eb' },
  { id: 'chat-boty', name: 'Чат-боты', color: '#10b981' },
  { id: 'analitika', name: 'Аналитика', color: '#f59e0b' },
  { id: 'kontekstnaya-reklama', name: 'Контекстная реклама', color: '#ef4444' }
]

export function getClusters() {
  return clusters
}

export function getClusterName(clusterId) {
  const cluster = clusters.find(c => c.id === clusterId)
  return cluster ? cluster.name : clusterId
}

export function getClusterColor(clusterId) {
  const cluster = clusters.find(c => c.id === clusterId)
  return cluster ? cluster.color : '#7c3aed'
}

export function getArticlesByCluster(clusterId, articles) {
  return articles.filter(article => article.cluster === clusterId)
}

export function getRelatedArticles(currentArticle, articles, limit = 3) {
  return articles
    .filter(article => article.slug !== currentArticle.slug && article.cluster === currentArticle.cluster)
    .slice(0, limit)
}

export default {
  formatDate,
  clusters,
  getClusters,
  getClusterName,
  getClusterColor,
  getArticlesByCluster,
  getRelatedArticles
}
