// Импорт статей из кластеров
import razrabotkaSaytaPodKlyuch from './blog/razrabotka-saytov/razrabotka-sayta-pod-klyuch.js'
import skolkoStoitRazrabotkaSayta from './blog/razrabotka-saytov/skolko-stoit-razrabotka-sayta.js'
import kakZakazatRazrabotkuSayta from './blog/razrabotka-saytov/kak-zakazat-razrabotku-sayta.js'
import razrabotkaSaytaDlyaBiznesa from './blog/razrabotka-saytov/razrabotka-sayta-dlya-biznesa.js'
import tehnicheskoeZadanieNaRazrabotkuSayta from './blog/razrabotka-saytov/tehnicheskoe-zadanie-na-razrabotku-sayta.js'
import razrabotkaInternetMagazina from './blog/razrabotka-saytov/razrabotka-internet-magazina.js'
import sozdanieSaytaSNulya from './blog/sozdanie-saytov/sozdanie-sayta-s-nulya.js'
import skolkoStoitSozdatSayt from './blog/sozdanie-saytov/skolko-stoit-sozdat-sayt.js'
import sozdanieSaytaDlyaBiznesa from './blog/sozdanie-saytov/sozdanie-sayta-dlya-biznesa.js'
import platformyDlyaSozdaniyaSaytov from './blog/sozdanie-saytov/platformy-dlya-sozdaniya-saytov.js'
import sozdanieSaytaHtmlCss from './blog/sozdanie-saytov/sozdanie-sayta-html-css.js'
import iiDlyaSozdaniyaSayta from './blog/sozdanie-saytov/ii-dlya-sozdaniya-sayta.js'
import kakSozdatMobilnoePrilozhenie from './blog/mobilnye-prilozheniya/kak-sozdat-mobilnoe-prilozhenie.js'
import yazykiProgrammirovaniyaMobilnykhPrilozheniy from './blog/mobilnye-prilozheniya/yazyki-programmirovaniya-mobilnykh-prilozheniy.js'
import dizaynMobilnogoPrilozheniya from './blog/mobilnye-prilozheniya/dizayn-mobilnogo-prilozheniya.js'
import razrabotkaMobilnogoPrilozheniya from './blog/mobilnye-prilozheniya/razrabotka-mobilnogo-prilozheniya.js'
import vidyMobilnykhPrilozheniy from './blog/mobilnye-prilozheniya/vidy-mobilnykh-prilozheniy.js'
import prodvizhenieMobilnogoPrilozheniya from './blog/mobilnye-prilozheniya/prodvizhenie-mobilnogo-prilozheniya.js'
import razrabotkaVebPrilozheniy from './blog/veb-razrabotka/razrabotka-veb-prilozheniy.js'
import frontendRazrabotka from './blog/veb-razrabotka/frontend-razrabotka.js'
import backendRazrabotka from './blog/veb-razrabotka/backend-razrabotka.js'
import fullstackRazrabotka from './blog/veb-razrabotka/fullstack-razrabotka.js'
import apiRazrabotka from './blog/veb-razrabotka/api-razrabotka.js'
import iiVIt from './blog/iskusstvennyy-intellekt/ii-v-it.js'
import iiDlyaBiznesa from './blog/iskusstvennyy-intellekt/ii-dlya-biznesa.js'
import chatgptDlyaBiznesa from './blog/iskusstvennyy-intellekt/chatgpt-dlya-biznesa.js'

// Массив всех статей
export const articles = [
  razrabotkaSaytaPodKlyuch,
  skolkoStoitRazrabotkaSayta,
  kakZakazatRazrabotkuSayta,
  razrabotkaSaytaDlyaBiznesa,
  tehnicheskoeZadanieNaRazrabotkuSayta,
  razrabotkaInternetMagazina,
  sozdanieSaytaSNulya,
  skolkoStoitSozdatSayt,
  sozdanieSaytaDlyaBiznesa,
  platformyDlyaSozdaniyaSaytov,
  sozdanieSaytaHtmlCss,
  iiDlyaSozdaniyaSayta,
  kakSozdatMobilnoePrilozhenie,
  yazykiProgrammirovaniyaMobilnykhPrilozheniy,
  dizaynMobilnogoPrilozheniya,
  razrabotkaMobilnogoPrilozheniya,
  vidyMobilnykhPrilozheniy,
  prodvizhenieMobilnogoPrilozheniya,
  razrabotkaVebPrilozheniy,
  frontendRazrabotka,
  backendRazrabotka,
  fullstackRazrabotka,
  apiRazrabotka,
  iiVIt,
  iiDlyaBiznesa,
  chatgptDlyaBiznesa,
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

// Словарь названий кластеров на русском
export const clusterNames = {
  'razrabotka-saytov': 'Разработка сайтов',
  'sozdanie-saytov': 'Создание сайтов',
  'mobilnye-prilozheniya': 'Мобильные приложения',
  'veb-razrabotka': 'Веб-разработка',
  'iskusstvennyy-intellekt': 'Искусственный интеллект'
}

// Цвета для кластеров
export const clusterColors = {
  'razrabotka-saytov': 'violet',
  'sozdanie-saytov': 'blue',
  'mobilnye-prilozheniya': 'green',
  'veb-razrabotka': 'orange',
  'iskusstvennyy-intellekt': 'pink'
}

// Функция для получения названия кластера
export function getClusterName(cluster) {
  return clusterNames[cluster] || cluster
}

// Функция для получения цвета кластера
export function getClusterColor(cluster) {
  return clusterColors[cluster] || 'violet'
}

// Функция для получения случайных статей
export function getRandomArticles(count = 10) {
  const shuffled = [...articles].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, count)
}

// Функция для получения связанных статей (по тому же кластеру)
export function getRelatedArticles(currentSlug, cluster, limit = 3) {
  return articles
    .filter(a => a.slug !== currentSlug && a.cluster === cluster)
    .slice(0, limit)
}

// Функция для получения статей по категории
export function getArticlesByCategory(category) {
  return articles.filter(a => a.category === category)
}
