import { readFileSync, writeFileSync } from 'fs'
import { topics } from '../data/knowledge/topics.js'

// Читаем markdown файл
const mdContent = readFileSync('./posts_formatted.md', 'utf-8')

// Функция для конвертации markdown в HTML
function mdToHtml(text) {
  let html = text
  
  // Экранируем HTML-теги чтобы избежать XSS (но оставляем наши теги)
  html = html.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
  
  // Заголовки ### 
  html = html.replace(/^### (.+)$/gm, '<h3 class="text-xl font-bold text-gray-900 mt-6 mb-3">$1</h3>')
  
  // Жирный текст **текст**
  html = html.replace(/\*\*(.+?)\*\*/g, '<strong class="font-bold">$1</strong>')
  
  // Курсив *текст*
  html = html.replace(/\*(.+?)\*/g, '<em class="italic">$1</em>')
  
  // Списки - пункт (сначала обрабатываем списки)
  const lines = html.split('\n')
  const result = []
  let inList = false
  let listType = null
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]
    const unorderedMatch = line.match(/^\s*[-*]\s+(.+)$/)
    const orderedMatch = line.match(/^\s*\d+\.\s+(.+)$/)
    
    if (unorderedMatch) {
      if (!inList || listType !== 'ul') {
        if (inList) result.push('</' + listType + '>')
        result.push('<ul class="space-y-2 my-4 ml-4">')
        inList = true
        listType = 'ul'
      }
      result.push('<li class="list-disc">' + unorderedMatch[1] + '</li>')
    } else if (orderedMatch) {
      if (!inList || listType !== 'ol') {
        if (inList) result.push('</' + listType + '>')
        result.push('<ol class="space-y-2 my-4 ml-4 list-decimal">')
        inList = true
        listType = 'ol'
      }
      result.push('<li class="list-decimal">' + orderedMatch[1] + '</li>')
    } else {
      if (inList) {
        result.push('</' + listType + '>')
        inList = false
        listType = null
      }
      result.push(line)
    }
  }
  
  if (inList) result.push('</' + listType + '>')
  html = result.join('\n')
  
  // Цитаты > текст (обрабатываем ДО абзацев)
  html = html.replace(/^&gt;\s+(.+)$/gm, '<blockquote class="border-l-4 border-purple-600 pl-4 italic text-gray-700 my-4">$1</blockquote>')
  
  // Абзацы (двойные переносы строк)
  const paragraphs = html.split(/\n\n+/)
  html = paragraphs.map(p => {
    p = p.trim()
    if (!p) return ''
    // Не оборачиваем если это уже HTML-тег
    if (p.startsWith('<h') || p.startsWith('<ul') || p.startsWith('<ol') || p.startsWith('<li') || p.startsWith('<blockquote') || p.startsWith('</')) {
      return p
    }
    return '<p class="mb-4 leading-relaxed">' + p.replace(/\n/g, '<br>') + '</p>'
  }).join('\n')
  
  return html
}

// Парсим посты из markdown
const postsMap = new Map() // Используем Map для предотвращения дубликатов
const postBlocks = mdContent.split('<!-- POST START -->').slice(1)

console.log('Найдено блоков постов:', postBlocks.length)

for (const block of postBlocks) {
  // Извлекаем метаданные из комментария
  const metaMatch = block.match(/<!--\s*id:\s*(\d+)\s*\|\s*date:\s*([\d-]+)\s*\|\s*order_in_topic:\s*(\d+)\s*\|\s*also_in:\s*(.*?)\s*-->/)
  if (!metaMatch) {
    continue
  }

  const id = parseInt(metaMatch[1])
  const date = metaMatch[2]
  const alsoInRaw = metaMatch[4].trim()

  // Извлекаем заголовок (первая строка после ##)
  const titleMatch = block.match(/##\s+(.+?)\n/)
  if (!titleMatch) continue
  const title = titleMatch[1].trim()

  // Извлекаем текст поста (всё после заголовка до даты)
  const textMatch = block.match(/##\s+.+?\n\n([\s\S]*?)\n\n\*Дата:/)
  if (!textMatch) continue
  let text = textMatch[1].trim()

  // Определяем темы - находим ВСЕ темы которые содержат этот post_id
  const topicSlugs = []
  for (const topic of topics) {
    if (topic.posts.includes(id)) {
      topicSlugs.push(topic.slug)
    }
  }

  // Добавляем смежные темы из also_in
  if (alsoInRaw !== '—' && alsoInRaw) {
    const alsoInSlugs = alsoInRaw.replace(/`/g, '').split(',').map(s => s.trim())
    for (const slug of alsoInSlugs) {
      if (slug && !topicSlugs.includes(slug)) {
        topicSlugs.push(slug)
      }
    }
  }

  // Вычисляем order_in_topic для каждой темы
  const orderInTopicObj = {}
  for (const slug of topicSlugs) {
    const topic = topics.find(t => t.slug === slug)
    if (topic) {
      const idx = topic.posts.indexOf(id)
      if (idx !== -1) {
        orderInTopicObj[slug] = idx + 1
      }
    }
  }

  // Конвертируем markdown в HTML
  const htmlText = mdToHtml(text)

  // Если пост с таким id уже есть — объединяем темы
  if (postsMap.has(id)) {
    const existing = postsMap.get(id)
    for (const slug of topicSlugs) {
      if (!existing.topics.includes(slug)) {
        existing.topics.push(slug)
      }
    }
    Object.assign(existing.order_in_topic, orderInTopicObj)
    console.log(`  Пост ${id}: добавлены темы ${topicSlugs.filter(t => !existing.topics.includes(t)).join(', ')}`)
  } else {
    postsMap.set(id, {
      id,
      date,
      title, // JSON.stringify сам экранирует кавычки
      text: htmlText, // Сохраняем как HTML
      topics: topicSlugs,
      order_in_topic: orderInTopicObj
    })
  }
}

// Конвертируем Map в массив
const posts = Array.from(postsMap.values())

console.log('Уникальных постов:', posts.length)

// Сортируем по id для консистентности
posts.sort((a, b) => a.id - b.id)

// Записываем JSON
writeFileSync('./data/knowledge/posts-data.json', JSON.stringify(posts, null, 2), 'utf-8')

console.log('✅ posts-data.json обновлён!')

// Проверяем первый пост
const firstPost = posts[0]
console.log('\nПример поста (id:', firstPost.id, '):')
console.log('  Заголовок:', firstPost.title)
console.log('  Темы:', firstPost.topics.join(', '))
console.log('  Текст (первые 200 символов):', firstPost.text.slice(0, 200))
