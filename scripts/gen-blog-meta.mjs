import fs from 'fs'
import path from 'path'
import { fileURLToPath, pathToFileURL } from 'url'
import { articles as fullArticles, clusterNames, clusterColors } from '../data/blog.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const projectRoot = path.resolve(__dirname, '..')
const dataDir = path.join(projectRoot, 'data')
const blogDir = path.join(dataDir, 'blog')

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true })
  const files = []
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      files.push(...walk(fullPath))
    } else if (entry.isFile() && entry.name.endsWith('.js')) {
      files.push(fullPath)
    }
  }
  return files
}

const articleFiles = walk(blogDir)
const slugToPath = {}

for (const file of articleFiles) {
  const mod = await import(pathToFileURL(file).href)
  const article = mod?.default
  if (!article?.slug) continue
  const relFromData = './' + path.relative(dataDir, file).replace(/\\/g, '/')
  slugToPath[article.slug] = relFromData
}

const articlesMeta = fullArticles.map((article) => ({
  slug: article.slug,
  title: article.title,
  description: article.description,
  category: article.category,
  cluster: article.cluster,
  date: article.date,
  image: article.image || null
}))

const metaOutput = `// Этот файл сгенерирован скриптом scripts/gen-blog-meta.mjs
// Не редактируйте вручную — правьте исходные статьи и перегенерируйте файл.

export const articles = ${JSON.stringify(articlesMeta, null, 2)}

export const clusterNames = ${JSON.stringify(clusterNames, null, 2)}

export const clusterColors = ${JSON.stringify(clusterColors, null, 2)}

export function getArticleBySlug(slug) {
  return articles.find(a => a.slug === slug)
}

export function formatDate(date) {
  if (!date) return ''
  const d = new Date(date)
  return d.toLocaleDateString('ru-RU', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  })
}

export function getCategories() {
  const categories = [...new Set(articles.map(a => a.category))]
  return categories.filter(Boolean)
}

export function getArticlesByCluster(cluster) {
  return articles.filter(a => a.cluster === cluster)
}

export function getClusters() {
  const clusters = [...new Set(articles.map(a => a.cluster))]
  return clusters.filter(Boolean)
}

export function getClusterName(cluster) {
  return clusterNames[cluster] || cluster
}

export function getClusterColor(cluster) {
  return clusterColors[cluster] || 'violet'
}

export function getRandomArticles(count = 10) {
  const shuffled = [...articles].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, count)
}

export function getRelatedArticles(currentSlug, cluster, limit = 3) {
  return articles
    .filter(a => a.slug !== currentSlug && a.cluster === cluster)
    .slice(0, limit)
}

export function getArticlesByCategory(category) {
  return articles.filter(a => a.category === category)
}
`

const loaders = fullArticles.map((article) => {
  const relPath = slugToPath[article.slug]
  if (!relPath) {
    throw new Error(`Missing article file for slug: ${article.slug}`)
  }
  return { slug: article.slug, relPath }
})

const loadersOutput = `// Этот файл сгенерирован скриптом scripts/gen-blog-meta.mjs
// Не редактируйте вручную — правьте исходные статьи и перегенерируйте файл.

export const articleLoaders = {
${loaders.map(l => `  '${l.slug}': () => import('${l.relPath}').then(m => m.default)`).join(',\n')}
}

export async function loadArticleBySlug(slug) {
  const loader = articleLoaders[slug]
  if (!loader) return null
  return loader()
}
`

fs.writeFileSync(path.join(dataDir, 'blog-meta.js'), metaOutput, 'utf8')
fs.writeFileSync(path.join(dataDir, 'blog-loaders.js'), loadersOutput, 'utf8')

console.log('Generated data/blog-meta.js and data/blog-loaders.js')
