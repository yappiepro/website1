import fs from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'
import { articles } from '../data/blog.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const projectRoot = path.resolve(__dirname, '..')
const blogDir = path.join(projectRoot, 'data', 'blog')

// Рекурсивный обход папки
const walk = async (dir) => {
  const entries = await fs.readdir(dir, { withFileTypes: true })
  const files = []
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      files.push(...(await walk(fullPath)))
    } else if (entry.isFile() && entry.name.endsWith('.js')) {
      files.push(fullPath)
    }
  }
  return files
}

// Обновление файла статьи
const updateArticleFile = async (filePath, newImage) => {
  let content = await fs.readFile(filePath, 'utf8')
  
  // Находим и заменяем строку image (поддерживает null, '', и строки)
  const imageRegex = /image:\s*(null|['"][^'"]*['"])/
  const match = content.match(imageRegex)
  
  if (match) {
    const oldImage = match[0]
    const newImageLine = `image: '${newImage}'`
    content = content.replace(oldImage, newImageLine)
    await fs.writeFile(filePath, content, 'utf8')
    return true
  }
  
  return false
}

const run = async () => {
  console.log('📝 Обновление путей к изображениям в статьях...')
  
  let updated = 0
  let skipped = 0
  
  for (const article of articles) {
    const slug = article.slug
    const cluster = article.cluster
    
    if (!slug || !cluster) {
      console.log(`⏭️  Пропущено: ${slug || 'без slug'}`)
      skipped++
      continue
    }
    
    const newImagePath = `/images/blog/${cluster}/${slug}-og.svg`
    
    // Находим файл статьи
    const clusterDir = path.join(blogDir, cluster)
    const files = await walk(clusterDir)
    
    const articleFile = files.find(f => f.includes(`${slug}.js`))
    
    if (!articleFile) {
      console.log(`❌ Не найден файл для: ${slug}`)
      continue
    }
    
    const success = await updateArticleFile(articleFile, newImagePath)
    
    if (success) {
      console.log(`✅ ${slug} → ${newImagePath}`)
      updated++
    } else {
      console.log(`⏭️  ${slug} — не найдено поле image`)
      skipped++
    }
  }
  
  console.log(`\n📊 Итоги:`)
  console.log(`   Обновлено: ${updated}`)
  console.log(`   Пропущено: ${skipped}`)
}

run().catch(console.error)
