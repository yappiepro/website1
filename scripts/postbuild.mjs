import { copyFileSync, existsSync, mkdirSync, readdirSync, readFileSync, statSync, writeFileSync } from 'fs'
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
  
  // Обновляем sitemap_index.xml с правильными путями
  const sitemapIndexPath = join(distDir, 'sitemap_index.xml')
  if (existsSync(sitemapIndexPath)) {
    let content = readFileSync(sitemapIndexPath, 'utf8')
    // Заменяем пути __sitemap__/pages.xml → sitemap-pages.xml
    content = content.replace(/__sitemap__\/pages\.xml/g, 'sitemap-pages.xml')
    content = content.replace(/__sitemap__\/blog\.xml/g, 'sitemap-blog.xml')
    writeFileSync(sitemapIndexPath, content)
    console.log(`✓ Updated sitemap_index.xml with correct paths`)
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

// Per-page SEO мета-теги (хардкод, т.к. ssr:false не рендерит useSeoMeta)
const pageMeta = {
  'blog': {
    title: 'Блог о разработке сайтов, веб-приложений и AI для бизнеса | Артём Селифанов',
    description: 'Статьи о разработке сайтов, создании веб-приложений, мобильной разработке, веб-разработке и искусственном интеллекте для бизнеса. Практические руководства и кейсы.',
  },
  'knowledge': {
    title: 'База знаний Нескучный Нетворкинг — 220+ материалов по личному бренду и контенту',
    description: 'Структурированная база знаний из 220+ постов Telegram-канала «Нескучный Нетворкинг». 9 тем: контент-стратегия, личный бренд, платформы, продажи, мотивация, нетворкинг.',
  },
  'networking': {
    title: 'Нескучный Нетворкинг — личный бренд и контент-маркетинг для экспертов | Артём Селифанов',
    description: 'Сообщество предпринимателей и экспертов для роста личного бренда. Продвижение в Telegram, Сетке и TenChat. Консультации, менторство, мастермайнд. Артём Селифанов.',
  },
  'business': {
    title: 'Бизнес Сетка — закрытый клуб и мастермайнд для предпринимателей | Артём Селифанов',
    description: 'Закрытый клуб предпринимателей и экспертов. Мастермайнд-группы, бизнес-разборы, нетворкинг. 250 участников. Артём Селифанов — Бизнес Сетка.',
  },
  'yappie': {
    title: 'Разработка сайтов и AI-решений для бизнеса — YAPPIE | Артём Селифанов',
    description: 'Разрабатываем сайты, Telegram-боты, CRM и веб-приложения с AI. Автоматизация бизнес-процессов под ключ. 50+ проектов, поддержка 24/7. YAPPIE — Артём Селифанов.',
  },
  'study': {
    title: 'Фокус — Тест на позиционирование личного бренда | Артём Селифанов',
    description: 'Пройдите бесплатный тест на позиционирование личного бренда. Узнайте свои сильные стороны, определите целевую аудиторию и получите персональные рекомендации по развитию.',
  },
  'mice': {
    title: 'Бизнес-миссии в Карелию | MICE Karelia — Артём Селифанов',
    description: 'Бизнес-миссии в Карелию под ключ. Прямой доступ к предприятиям, власти и инвестпроектам. 6 лет опыта, 40+ организованных миссий. Программа и расчёт за 24 часа.',
  },
}

function injectPageMeta() {
  const baseTitle = 'Личный бренд эксперта: стратегия, упаковка и поток клиентов в Telegram | Артём Селифанов'
  const baseDescription = 'Создам систему привлечения клиентов через личный бренд. Позиционирование, упаковка экспертности и продвижение в Telegram для предпринимателей. Запишитесь на аудит!'

  for (const [dir, meta] of Object.entries(pageMeta)) {
    const htmlPath = join(distDir, dir, 'index.html')
    if (!existsSync(htmlPath)) continue

    let html = readFileSync(htmlPath, 'utf8')
    // Заменяем title
    html = html.replace(
      /<title>[^<]*<\/title>/,
      `<title>${meta.title}</title>`
    )
    // Заменяем meta description
    if (html.includes('name="description"')) {
      html = html.replace(
        /<meta name="description" content="[^"]*"/,
        `<meta name="description" content="${meta.description}"`
      )
    } else {
      html = html.replace(
        /<\/title>/,
        `</title>\n    <meta name="description" content="${meta.description}">`
      )
    }
    writeFileSync(htmlPath, html)
    console.log(`✓ Injected SEO meta for /${dir}/`)
  }
}

copyPublicFiles(publicDir, distDir)
copySitemapFiles()
injectPageMeta()

if (existsSync(twoHundredHtml) && !existsSync(indexHtml)) {
  copyFileSync(twoHundredHtml, indexHtml)
  console.log('✓ Copied 200.html → index.html')
} else if (existsSync(indexHtml)) {
  console.log('✓ index.html already exists')
} else {
  console.error('✗ 200.html not found in dist/')
  process.exit(1)
}
