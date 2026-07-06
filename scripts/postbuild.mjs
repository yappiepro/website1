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

const SITE = 'https://artemselifanov.ru'

// Per-page SEO мета-теги (хардкод, т.к. ssr:false не рендерит useSeoMeta/useHead)
const pageMeta = {
  index: {
    title: 'Личный бренд эксперта: стратегия, упаковка и поток клиентов в Telegram | Артём Селифанов',
    description: 'Создам систему привлечения клиентов через личный бренд. Позиционирование, упаковка экспертности и продвижение в Telegram для предпринимателей. Запишитесь на аудит!',
    canonical: SITE,
    ogTitle: 'Личный бренд эксперта: стратегия, упаковка и поток клиентов в Telegram | Артём Селифанов',
    ogDescription: 'Создам систему привлечения клиентов через личный бренд. Позиционирование, упаковка экспертности и продвижение в Telegram для предпринимателей. Запишитесь на аудит!',
    ogImage: SITE + '/reference/openGraph/opengraph_index.webp',
    twitterTitle: 'Личный бренд эксперта: стратегия, упаковка и поток клиентов в Telegram | Артём Селифанов',
    twitterDescription: 'Создам систему привлечения клиентов через личный бренд. Позиционирование, упаковка экспертности и продвижение в Telegram для предпринимателей. Запишитесь на аудит!',
    twitterImage: SITE + '/reference/openGraph/opengraph_index.webp',
  },
  blog: {
    title: 'Блог о разработке сайтов, веб-приложений и AI для бизнеса | Артём Селифанов',
    description: 'Статьи о разработке сайтов, создании веб-приложений, мобильной разработке, веб-разработке и искусственном интеллекте для бизнеса. Практические руководства и кейсы.',
    canonical: SITE + '/blog',
    ogTitle: 'Блог о разработке сайтов и AI для бизнеса',
    ogDescription: 'Статьи о разработке сайтов, создании веб-приложений, мобильной разработке и искусственном интеллекте для бизнеса',
    ogImage: SITE + '/reference/openGraph/blog.webp',
    twitterTitle: 'Блог о разработке сайтов и AI для бизнеса',
    twitterDescription: 'Статьи о разработке сайтов, создании веб-приложений, мобильной разработке и искусственном интеллекте для бизнеса',
    twitterImage: SITE + '/reference/openGraph/blog.webp',
  },
  knowledge: {
    title: 'База знаний Нескучный Нетворкинг — 220+ материалов по личному бренду и контенту',
    description: 'Структурированная база знаний из 220+ постов Telegram-канала «Нескучный Нетворкинг». 9 тем: контент-стратегия, личный бренд, платформы, продажи, мотивация, нетворкинг.',
    canonical: SITE + '/knowledge',
    ogTitle: 'База знаний Нескучный Нетворкинг — 220+ материалов',
    ogDescription: 'Структурированная база знаний для авторов и экспертов. Найди ответ на свой вопрос.',
    ogImage: SITE + '/reference/openGraph/knowledge.webp',
    twitterTitle: 'База знаний Нескучный Нетворкинг',
    twitterDescription: '220+ постов → структурированные маршруты обучения',
    twitterImage: SITE + '/reference/openGraph/knowledge.webp',
  },
  networking: {
    title: 'Нескучный Нетворкинг — личный бренд и контент-маркетинг для экспертов | Артём Селифанов',
    description: 'Сообщество предпринимателей и экспертов для роста личного бренда. Продвижение в Telegram, Сетке и TenChat. Консультации, менторство, мастермайнд. Артём Селифанов.',
    canonical: SITE + '/networking',
    ogTitle: 'Нескучный Нетворкинг — личный бренд и контент-маркетинг для экспертов',
    ogDescription: 'Сообщество предпринимателей и экспертов для роста личного бренда. Продвижение в Telegram, Сетке и TenChat.',
    ogImage: SITE + '/reference/openGraph/networking.webp',
    twitterTitle: 'Нескучный Нетворкинг — личный бренд и контент-маркетинг для экспертов',
    twitterDescription: 'Сообщество предпринимателей и экспертов для роста личного бренда',
    twitterImage: SITE + '/reference/openGraph/networking.webp',
  },
  business: {
    title: 'Бизнес Сетка — закрытый клуб и мастермайнд для предпринимателей | Артём Селифанов',
    description: 'Закрытый клуб предпринимателей и экспертов. Мастермайнд-группы, бизнес-разборы, нетворкинг. 250 участников. Артём Селифанов — Бизнес Сетка.',
    canonical: SITE + '/business',
    ogTitle: 'Бизнес Сетка — закрытый клуб и мастермайнд для предпринимателей',
    ogDescription: 'Закрытый клуб предпринимателей и экспертов. Мастермайнд-группы, бизнес-разборы, нетворкинг.',
    ogImage: SITE + '/reference/openGraph/business.webp',
    twitterTitle: 'Бизнес Сетка — закрытый клуб и мастермайнд для предпринимателей',
    twitterDescription: 'Закрытый клуб предпринимателей и экспертов. Мастермайнд-группы, бизнес-разборы, нетворкинг.',
    twitterImage: SITE + '/reference/openGraph/business.webp',
  },
  yappie: {
    title: 'Разработка сайтов и AI-решений для бизнеса — YAPPIE | Артём Селифанов',
    description: 'Разрабатываем сайты, Telegram-боты, CRM и веб-приложения с AI. Автоматизация бизнес-процессов под ключ. 50+ проектов, поддержка 24/7. YAPPIE — Артём Селифанов.',
    canonical: SITE + '/yappie',
    ogTitle: 'Разработка сайтов и AI-решений для бизнеса — YAPPIE | Артём Селифанов',
    ogDescription: 'Разрабатываем сайты, Telegram-боты, CRM и веб-приложения с AI. Автоматизация бизнес-процессов под ключ.',
    ogImage: SITE + '/reference/openGraph/yappie.webp',
    twitterTitle: 'Разработка сайтов и AI-решений для бизнеса — YAPPIE | Артём Селифанов',
    twitterDescription: 'Разрабатываем сайты, Telegram-боты, CRM и веб-приложения с AI. Автоматизация бизнес-процессов под ключ.',
    twitterImage: SITE + '/reference/openGraph/yappie.webp',
  },
  study: {
    title: 'Фокус — Тест на позиционирование личного бренда | Артём Селифанов',
    description: 'Пройдите бесплатный тест на позиционирование личного бренда. Узнайте свои сильные стороны, определите целевую аудиторию и получите персональные рекомендации по развитию.',
    canonical: SITE + '/study',
    ogTitle: 'Фокус — Тест на позиционирование личного бренда',
    ogDescription: 'Пройдите бесплатный тест на позиционирование личного бренда и получите персональные рекомендации',
    ogImage: SITE + '/reference/openGraph/study.webp',
    twitterTitle: 'Фокус — Тест на позиционирование личного бренда',
    twitterDescription: 'Пройдите бесплатный тест на позиционирование личного бренда и получите персональные рекомендации',
    twitterImage: SITE + '/reference/openGraph/study.webp',
  },
  mice: {
    title: 'Бизнес-миссии в Карелию | MICE Karelia — Артём Селифанов',
    description: 'Бизнес-миссии в Карелию под ключ. Прямой доступ к предприятиям, власти и инвестпроектам. 6 лет опыта, 40+ организованных миссий. Программа и расчёт за 24 часа.',
    canonical: SITE + '/mice',
    ogTitle: 'Бизнес-миссии в Карелию | MICE Karelia',
    ogDescription: 'Бизнес-миссии в Карелию под ключ. Прямой доступ к предприятиям, власти и инвестпроектам. 6 лет опыта, 40+ организованных миссий.',
    ogImage: SITE + '/reference/openGraph/mice.webp',
    twitterTitle: 'Бизнес-миссии в Карелию | MICE Karelia',
    twitterDescription: 'Бизнес-миссии в Карелию под ключ. Прямой доступ к предприятиям, власти и инвестпроектам. 6 лет опыта, 40+ организованных миссий.',
    twitterImage: SITE + '/reference/openGraph/mice.webp',
  },
}

function escapeHtml(str) {
  return str.replace(/"/g, '&quot;').replace(/'/g, '&#39;')
}

function injectMeta(html, meta) {
  // Используем index OG image как fallback для страниц без своей OG картинки
  const ogImage = meta.ogImage && existsSync(join(distDir, 'reference', 'openGraph', (meta.ogImage.split('/').pop() || '')))
    ? meta.ogImage
    : (SITE + '/reference/openGraph/opengraph_index.webp')

  const tags = `
    <link rel="canonical" href="${escapeHtml(meta.canonical)}">
    <meta property="og:title" content="${escapeHtml(meta.ogTitle)}">
    <meta property="og:description" content="${escapeHtml(meta.ogDescription)}">
    <meta property="og:image" content="${escapeHtml(ogImage)}">
    <meta property="og:url" content="${escapeHtml(meta.canonical)}">
    <meta property="og:type" content="website">
    <meta property="og:locale" content="ru_RU">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${escapeHtml(meta.twitterTitle)}">
    <meta name="twitter:description" content="${escapeHtml(meta.twitterDescription)}">
    <meta name="twitter:image" content="${escapeHtml(meta.twitterImage || ogImage)}">`

  // Вставляем после title
  html = html.replace(/<\/title>/, '</title>' + tags)
  return html
}

function injectPageMeta() {
  // Сначала index.html
  const indexPath = join(distDir, 'index.html')
  if (existsSync(indexPath)) {
    let html = readFileSync(indexPath, 'utf8')
    html = html.replace(/<title>[^<]*<\/title>/, `<title>${pageMeta.index.title}</title>`)
    html = injectMeta(html, pageMeta.index)
    writeFileSync(indexPath, html)
    console.log('✓ Injected SEO meta for /')
  }

  for (const [dir, meta] of Object.entries(pageMeta)) {
    if (dir === 'index') continue
    const htmlPath = join(distDir, dir, 'index.html')
    if (!existsSync(htmlPath)) continue

    let html = readFileSync(htmlPath, 'utf8')
    html = html.replace(/<title>[^<]*<\/title>/, `<title>${meta.title}</title>`)
    html = injectMeta(html, meta)
    writeFileSync(htmlPath, html)
    console.log(`✓ Injected SEO meta for /${dir}/`)
  }
}

copyPublicFiles(publicDir, distDir)
copySitemapFiles()
// injectPageMeta() — отключено: SSR (ssr:true) корректно рендерит useHead/useSeoMeta

if (existsSync(twoHundredHtml) && !existsSync(indexHtml)) {
  copyFileSync(twoHundredHtml, indexHtml)
  console.log('✓ Copied 200.html → index.html')
} else if (existsSync(indexHtml)) {
  console.log('✓ index.html already exists')
} else {
  console.error('✗ 200.html not found in dist/')
  process.exit(1)
}
