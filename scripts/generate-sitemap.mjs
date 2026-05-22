import { articles } from '../data/blog.js'
import { topics } from '../data/knowledge/topics.js'
import { readFileSync, writeFileSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const distDir = join(__dirname, '..', 'dist')

// Генерация маршрутов
const blogSlugs = articles.map((article) => article.slug).filter(Boolean)
const blogRoutes = blogSlugs.map((slug) => `/blog/${slug}`)
const blogClusters = Array.from(
  new Set(articles.map((article) => article.cluster).filter(Boolean))
).map((cluster) => `/blog/cluster/${cluster}`)

const knowledgeRoutes = topics.map((topic) => `/knowledge/${topic.slug}`)
const postsData = JSON.parse(readFileSync(new URL('../data/knowledge/posts-data.json', import.meta.url), 'utf-8'))
const knowledgePostRoutes = postsData
  .map((post) => post?.id)
  .filter((id) => id !== null && id !== undefined)
  .map((id) => `/knowledge/post/${id}`)

// Страницы
const pages = [
  { path: '/', priority: '1.0', changefreq: 'daily' },
  { path: '/networking', priority: '0.8', changefreq: 'weekly' },
  { path: '/business', priority: '0.8', changefreq: 'weekly' },
  { path: '/yappie', priority: '0.8', changefreq: 'weekly' },
  { path: '/study', priority: '0.8', changefreq: 'weekly' },
  { path: '/consultation', priority: '0.8', changefreq: 'weekly' },
  { path: '/mentorship', priority: '0.8', changefreq: 'weekly' },
  { path: '/knowledge', priority: '0.8', changefreq: 'weekly' },
  { path: '/mice', priority: '0.8', changefreq: 'weekly' },
  { path: '/cookie', priority: '0.3', changefreq: 'monthly' },
  { path: '/privacy', priority: '0.3', changefreq: 'monthly' },
  { path: '/offer', priority: '0.3', changefreq: 'monthly' },
  { path: '/offline', priority: '0.1', changefreq: 'monthly' },
  ...knowledgeRoutes.map((path) => ({ path, priority: '0.7', changefreq: 'weekly' })),
  ...knowledgePostRoutes.map((path) => ({ path, priority: '0.6', changefreq: 'weekly' })),
]

// Блог
const blogPages = ['/blog', ...blogClusters, ...blogRoutes]

const baseUrl = 'https://artemselifanov.ru'
const lastmod = new Date().toISOString().split('T')[0]

// Генерация sitemap-pages.xml
const pagesXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${baseUrl}${page.path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`

// Генерация sitemap-blog.xml
const blogXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${blogPages.map(path => `  <url>
    <loc>${baseUrl}${path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
  </url>`).join('\n')}
</urlset>`

// Генерация sitemap.xml — sitemap index, ссылающийся на оба файла
const sitemapIndexXml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${baseUrl}/sitemap-pages.xml</loc>
    <lastmod>${lastmod}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${baseUrl}/sitemap-blog.xml</loc>
    <lastmod>${lastmod}</lastmod>
  </sitemap>
</sitemapindex>`

// Запись файлов
writeFileSync(join(distDir, 'sitemap-pages.xml'), pagesXml)
writeFileSync(join(distDir, 'sitemap-blog.xml'), blogXml)
writeFileSync(join(distDir, 'sitemap.xml'), sitemapIndexXml)

console.log('✓ Generated sitemap-pages.xml with', pages.length, 'URLs')
console.log('✓ Generated sitemap-blog.xml with', blogPages.length, 'URLs')
console.log('✓ Generated sitemap.xml (sitemap index)')
