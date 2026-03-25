import { copyFileSync, existsSync, mkdirSync, readdirSync, statSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const distDir = join(__dirname, '..', 'dist')
const publicDir = join(__dirname, '..', 'public')
const indexHtml = join(distDir, 'index.html')
const twoHundredHtml = join(distDir, '200.html')
const sitemapDir = join(distDir, '__sitemap__')

// Копирование sitemap файлов в корень dist с переименованием
function copySitemapFiles() {
  if (!existsSync(sitemapDir)) return

  const sitemapFiles = readdirSync(sitemapDir)
  for (const file of sitemapFiles) {
    if (file.endsWith('.xml') && file !== 'style.xsl') {
      const srcPath = join(sitemapDir, file)
      // Переименовываем pages.xml → sitemap-pages.xml, blog.xml → sitemap-blog.xml
      const newName = file.replace('.xml', '')
      const destName = `sitemap-${newName}.xml`
      const destPath = join(distDir, destName)
      copyFileSync(srcPath, destPath)
      console.log(`✓ Copied sitemap: ${file} → ${destName}`)
    }
  }
}

// Копирование файлов из public/ в dist/ (кроме уже существующих)
function copyPublicFiles(src, dest) {
  if (!existsSync(src)) return
  if (!existsSync(dest)) mkdirSync(dest, { recursive: true })

  const items = readdirSync(src)
  for (const item of items) {
    // Пропускаем .DS_Store и скрытые файлы
    if (item.startsWith('.')) continue

    const srcPath = join(src, item)
    const destPath = join(dest, item)
    const stat = statSync(srcPath)

    if (stat.isDirectory()) {
      copyPublicFiles(srcPath, destPath)
    } else if (!existsSync(destPath)) {
      copyFileSync(srcPath, destPath)
      console.log(`✓ Copied ${item}`)
    }
  }
}

copyPublicFiles(publicDir, distDir)
copySitemapFiles()

if (existsSync(twoHundredHtml) && !existsSync(indexHtml)) {
  copyFileSync(twoHundredHtml, indexHtml)
  console.log('✓ Copied 200.html → index.html')
} else if (existsSync(indexHtml)) {
  console.log('✓ index.html already exists')
} else {
  console.error('✗ 200.html not found in dist/')
  process.exit(1)
}
