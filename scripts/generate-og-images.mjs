import fs from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'
import { articles, clusterColors } from '../data/blog.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const projectRoot = path.resolve(__dirname, '..')
const publicDir = path.join(projectRoot, 'public', 'images', 'blog')

// Словарь градиентов для каждого цвета (Tailwind → HEX)
const gradientMap = {
  violet: { from: '#7c3aed', to: '#5b21b6', name: 'Фиолетовый' },
  blue: { from: '#2563eb', to: '#1e40af', name: 'Синий' },
  cyan: { from: '#06b6d4', to: '#0891b2', name: 'Голубой' },
  emerald: { from: '#10b981', to: '#047857', name: 'Изумрудный' },
  orange: { from: '#f97316', to: '#c2410c', name: 'Оранжевый' },
  fuchsia: { from: '#d946ef', to: '#a21caf', name: 'Фуксия' },
  purple: { from: '#9333ea', to: '#7e22ce', name: 'Пурпурный' },
  red: { from: '#ef4444', to: '#b91c1c', name: 'Красный' },
  teal: { from: '#14b8a6', to: '#0f766e', name: 'Бирюзовый' },
  sky: { from: '#0ea5e9', to: '#0369a1', name: 'Небесный' },
  green: { from: '#22c55e', to: '#15803d', name: 'Зелёный' },
  amber: { from: '#f59e0b', to: '#b45309', name: 'Янтарный' },
  pink: { from: '#ec4899', to: '#be185d', name: 'Розовый' },
  indigo: { from: '#6366f1', to: '#4338ca', name: 'Индиго' },
  yellow: { from: '#eab308', to: '#a16207', name: 'Жёлтый' },
  rose: { from: '#f43f5e', to: '#e11d48', name: 'Розовый (красный)' },
  slate: { from: '#64748b', to: '#334155', name: 'Грифельный' }
}

// Ограничение длины строки для заголовка (до 90 символов, чтобы влезало в 3 строки по 50 символов)
const truncateTitle = (title, maxLength = 90) => {
  if (title.length <= maxLength) return title
  return title.substring(0, maxLength - 3) + '...'
}

// Генерация SVG для статьи
const generateSvg = (article, colorKey) => {
  const color = gradientMap[colorKey] || gradientMap.violet
  const title = truncateTitle(article.title)
  const category = article.category || 'Блог'

  // Разбиваем заголовок на строки (максимум 50 символов в строке, до 3 строк)
  const words = title.split(' ')
  const lines = []
  let currentLine = ''
  const maxCharsPerLine = 50

  for (const word of words) {
    const testLine = currentLine ? `${currentLine} ${word}` : word
    if (testLine.length <= maxCharsPerLine) {
      currentLine = testLine
    } else {
      if (currentLine) lines.push(currentLine)
      currentLine = word
    }
    if (lines.length >= 3) break
  }
  if (currentLine && lines.length < 4) lines.push(currentLine)

  // Позиции строк для центрирования с правильными отступами
  const startY = 300
  const lineSpacing = 68
  const linePositions = lines.map((_, i) => startY + i * lineSpacing)

  return `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${color.from};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${color.to};stop-opacity:1" />
    </linearGradient>
    <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
      <feDropShadow dx="0" dy="4" stdDeviation="6" flood-opacity="0.3"/>
    </filter>
  </defs>
  
  <!-- Фон -->
  <rect width="1200" height="630" fill="url(#grad)"/>
  
  <!-- Декоративные элементы -->
  <circle cx="100" cy="100" r="120" fill="white" opacity="0.08"/>
  <circle cx="1100" cy="530" r="150" fill="white" opacity="0.08"/>
  <circle cx="950" cy="150" r="80" fill="white" opacity="0.06"/>
  <circle cx="200" cy="480" r="100" fill="white" opacity="0.06"/>
  
  <!-- Линия разделитель -->
  <rect x="100" y="480" width="1000" height="3" fill="white" opacity="0.3"/>
  
  <!-- Категория (с отступом сверху) -->
  <text x="600" y="160" font-family="Arial, Helvetica, sans-serif" font-size="28" font-weight="600" fill="white" text-anchor="middle" opacity="0.9">
    ${category}
  </text>
  
  <!-- Заголовок (до 3 строк, с правильными отступами) -->
  ${lines.map((line, i) => `
  <text x="600" y="${linePositions[i]}" font-family="Arial, Helvetica, sans-serif" font-size="48" font-weight="bold" fill="white" text-anchor="middle" filter="url(#shadow)">
    ${escapeXml(line)}
  </text>
  `).join('')}
  
  <!-- Подвал -->
  <text x="600" y="560" font-family="Arial, Helvetica, sans-serif" font-size="24" fill="white" text-anchor="middle" opacity="0.8">
    Артём Селифанов — YAPPIE
  </text>
</svg>`
}

// Экранирование XML-символов
const escapeXml = (text) => {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

// Основная функция
const run = async () => {
  console.log('🎨 Генерация OG-изображений для статей...')

  // Создаём папку public/images/blog если нет
  await fs.mkdir(publicDir, { recursive: true })

  let generated = 0
  let errors = 0

  for (const article of articles) {
    try {
      const cluster = article.cluster
      const slug = article.slug

      if (!cluster || !slug) {
        console.log(`⏭️  Пропущено: ${slug} (нет cluster или slug)`)
        continue
      }

      // Создаём папку для кластера
      const clusterDir = path.join(publicDir, cluster)
      await fs.mkdir(clusterDir, { recursive: true })

      // Получаем цвет кластера
      const colorKey = clusterColors[cluster] || 'violet'

      // Генерируем SVG
      const svg = generateSvg(article, colorKey)

      // Сохраняем файл
      const outputPath = path.join(clusterDir, `${slug}-og.svg`)
      await fs.writeFile(outputPath, svg, 'utf8')

      console.log(`✅ ${slug} → /images/blog/${cluster}/${slug}-og.svg`)
      generated++
    } catch (error) {
      console.error(`❌ Ошибка для ${article.slug}:`, error.message)
      errors++
    }
  }

  console.log(`\n📊 Итоги:`)
  console.log(`   Сгенерировано: ${generated}`)
  console.log(`   Ошибок: ${errors}`)
  console.log(`   Всего статей: ${articles.length}`)
}

run().catch(console.error)
