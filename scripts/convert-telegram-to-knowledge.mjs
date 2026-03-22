import { readFileSync, writeFileSync } from 'fs'
import { topics } from '../data/knowledge/topics.js'

// Читаем оригинальный экспорт Telegram
const telegramExport = JSON.parse(readFileSync('./HH.json', 'utf-8'))

// Получаем все сообщения (посты)
const messages = telegramExport.messages.filter(m => m.type === 'message' && m.text)

// Функция для извлечения чистого текста из text поля (может быть строкой или массивом)
function extractText(textField) {
  if (!textField) return ''
  if (typeof textField === 'string') return textField
  if (Array.isArray(textField)) {
    return textField.map(entity => {
      if (typeof entity === 'string') return entity
      if (entity.text) {
        if (typeof entity.text === 'string') return entity.text
        if (Array.isArray(entity.text)) return extractText(entity.text)
      }
      return ''
    }).join('')
  }
  return String(textField)
}

// Функция для получения заголовка (первая строка или жирный текст)
function extractTitle(textField) {
  if (!textField) return 'Без заголовка'
  if (typeof textField === 'string') {
    const firstLine = textField.split('\n')[0]
    return firstLine.slice(0, 100)
  }
  if (Array.isArray(textField)) {
    // Ищем жирный текст в начале
    const boldEntity = textField.find(e => typeof e === 'object' && e.type === 'bold')
    if (boldEntity && boldEntity.text) {
      return typeof boldEntity.text === 'string' ? boldEntity.text : extractText(boldEntity.text)
    }
    // Или первую строку
    const firstText = textField.find(e => typeof e === 'string' || (typeof e === 'object' && e.text))
    if (firstText) {
      const text = typeof firstText === 'string' ? firstText : extractText(firstText.text)
      return text.split('\n')[0].slice(0, 100)
    }
  }
  return 'Без заголовка'
}

// Собираем все посты в нужный формат
const postsData = messages.map(msg => {
  const text = extractText(msg.text)
  const title = extractTitle(msg.text)
  
  // Находим темы для этого поста (по post_id из topics.js)
  const postTopics = []
  for (const topic of topics) {
    if (topic.posts.includes(msg.id)) {
      postTopics.push(topic.slug)
    }
  }
  
  // Вычисляем order_in_topic
  const orderInTopic = {}
  for (const topicSlug of postTopics) {
    const topic = topics.find(t => t.slug === topicSlug)
    const index = topic.posts.indexOf(msg.id)
    if (index !== -1) {
      orderInTopic[topicSlug] = index + 1
    }
  }
  
  return {
    id: msg.id,
    date: msg.date.split('T')[0], // YYYY-MM-DD
    title: title.replace(/"/g, '\\"'), // Экранируем кавычки в заголовке
    text: text.replace(/"/g, '\\"'), // Экранируем кавычки в тексте
    topics: postTopics,
    order_in_topic: orderInTopic
  }
}).filter(post => post.topics.length > 0) // Только посты, которые есть в темах

console.log(`Всего постов в экспорте: ${messages.length}`)
console.log(`Постов в темах: ${postsData.length}`)

// Записываем валидный JSON
writeFileSync('./data/knowledge/posts-data.json', JSON.stringify(postsData, null, 2), 'utf-8')

console.log('✅ posts-data.json создан успешно!')
