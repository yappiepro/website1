# База знаний «Нескучный Нетворкинг» — Полные данные

## Структура файлов

```
data/knowledge/
├── topics.js              ← Данные тем (9 тем, маршруты)
├── posts-data.json        ← Полные данные постов (187 шт.)
└── README.md              ← Этот файл
```

## Как загружать данные в Nuxt

```javascript
// composables/useKnowledgeBase.js
export const useKnowledgeBase = () => {
  const topics = ref([])
  const posts = ref([])
  
  // Загрузка тем
  const loadTopics = () => {
    topics.value = topicsData // импортировать из topics.js
  }
  
  // Загрузка постов
  const loadPosts = async () => {
    const response = await fetch('/data/knowledge/posts-data.json')
    posts.value = await response.json()
  }
  
  // Получить посты по теме
  const getPostsByTopic = (topicSlug) => {
    const topic = topics.value.find(t => t.slug === topicSlug)
    if (!topic) return []
    
    return topic.posts
      .map(id => posts.value.find(p => p.id === id))
      .filter(Boolean)
      .sort((a, b) => a.order_in_topic[topicSlug] - b.order_in_topic[topicSlug])
  }
  
  // Получить пост по ID
  const getPostById = (id) => {
    return posts.value.find(p => p.id === id)
  }
  
  // Получить смежные посты
  const getRelatedPosts = (post, currentTopic, limit = 3) => {
    const relatedTopics = post.topics.filter(t => t !== currentTopic)
    return posts.value
      .filter(p => 
        p.topics.some(t => relatedTopics.includes(t)) && 
        p.id !== post.id
      )
      .slice(0, limit)
  }
  
  // Навигация внутри темы
  const getPostNavigation = (postId, topicSlug) => {
    const topicPosts = getPostsByTopic(topicSlug)
    const currentIndex = topicPosts.findIndex(p => p.id === postId)
    
    return {
      previous: currentIndex > 0 ? topicPosts[currentIndex - 1] : null,
      next: currentIndex < topicPosts.length - 1 ? topicPosts[currentIndex + 1] : null,
      current: topicPosts[currentIndex]
    }
  }
  
  return {
    topics,
    posts,
    loadTopics,
    loadPosts,
    getPostsByTopic,
    getPostById,
    getRelatedPosts,
    getPostNavigation
  }
}
```

## Статистика базы

| Показатель | Значение |
|------------|----------|
| Всего постов | 187 |
| Тем | 9 |
| Период | 2025-07-10 — 2026-03-16 |
| Постов с перекрёстными тегами | ~50 |

## Темы и количество материалов

| Тема | Slug | Материалов |
|------|------|------------|
| ✍️ Контент-стратегия | `content-strategy` | 40 |
| 🧲 Личный бренд | `personal-brand` | 34 |
| 🌐 Платформы и алгоритмы | `platforms` | 37 |
| 💸 Продажи через блог | `sales` | 28 |
| 🧠 Мотивация и психология | `motivation` | 26 |
| 🤝 Нетворкинг | `networking` | 22 |
| 🧬 История автора | `author-story` | 18 |
| 🎬 Реалити-проекты | `reality-projects` | 22 |
| 🤖 Инструменты и ИИ | `tools-ai` | 16 |

## Маршруты обучения

Каждая тема имеет свой порядок чтения — от простого к сложному:

1. **Контент-стратегия**: Базовые принципы → Форматы → Заголовки → Система
2. **Личный бренд**: Самоопределение → Упаковка → Видимость → Влияние
3. **Платформы**: Обзор → Специфика → Алгоритмы → Продвижение
4. **Продажи**: Психология → Воронка → Ошибки → Метрики
5. **Мотивация**: Старт → Преодоление → Выгорание → Рост
6. **Нетворкинг**: Принципы → Форматы → Среда → Мастермайнд
7. **История автора**: Хронологически (части 1-10 + контекст)
8. **Реалити-проекты**: Хронологически по проектам
9. **Инструменты и ИИ**: Обзор → Анализ → Автоматизация → Вайбкод

---

*Данные актуальны на 2026-03-16*  
*Автор: Артём Селифанов*
