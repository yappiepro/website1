import { articles } from '../data/blog.js'
import { topics } from '../data/knowledge/topics.js'
import { writeFileSync } from 'fs'
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

// Страницы
const pages = [
  '/',
  '/networking',
  '/business',
  '/yappie',
  '/study',
  '/consultation',
  '/mentorship',
  '/knowledge',
  '/cookie',
  '/privacy',
  '/offer',
  '/offline',
  '/404',
  '/test',
  '/admin/contacts'
]

// Блог
const blogPages = ['/blog', ...blogClusters, ...blogRoutes]

const baseUrl = 'https://artemselifanov.ru'
const lastmod = new Date().toISOString().split('T')[0]

// Генерация sitemap-pages.xml
const pagesXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(path => `  <url>
    <loc>${baseUrl}${path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
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

// Запись файлов
writeFileSync(join(distDir, 'sitemap-pages.xml'), pagesXml)
writeFileSync(join(distDir, 'sitemap-blog.xml'), blogXml)

console.log('✓ Generated sitemap-pages.xml with', pages.length, 'URLs')
console.log('✓ Generated sitemap-blog.xml with', blogPages.length, 'URLs')
