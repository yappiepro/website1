# Данные постов для базы знаний «Нескучный Нетворкинг»

## Источник

Экспорт Telegram-канала «Нескучный Нетворкинг» (июль 2025 — март 2026)

**Всего постов:** 223  
**Период:** 2025-07-10 — 2026-03-16

---

## Структура данных

Каждый пост содержит следующие поля:

```json
{
  "id": 33,                    // Уникальный ID поста (post_id)
  "date": "2025-07-10",        // Дата публикации
  "title": "Заголовок поста",  // Первая строка текста или заголовок
  "text": "Полный текст...",   // Полный текст поста
  "topics": ["networking"],    // Массив тем, к которым относится пост
  "order_in_topic": {          // Порядок чтения в каждой теме
    "networking": 1
  }
}
```

---

## Темы и количество материалов

| Тема | Slug | Материалы |
|------|------|-----------|
| Контент-стратегия | `content-strategy` | 40 |
| Личный бренд | `personal-brand` | 34 |
| Платформы и алгоритмы | `platforms` | 38 |
| Продажи через блог | `sales` | 28 |
| Мотивация и психология | `motivation` | 26 |
| Нетворкинг | `networking` | 22 |
| История автора | `author-story` | 18 |
| Реалити-проекты | `reality-projects` | 22 |
| Инструменты и ИИ | `tools-ai` | 16 |

---

## Посты с несколькими темами (перекрёстные)

Посты, которые относятся к 2–3 темам одновременно:

| post_id | Темы |
|---------|------|
| 150 | content-strategy, personal-brand, sales |
| 80 | content-strategy, motivation |
| 169 | content-strategy, motivation |
| 207 | content-strategy, motivation |
| 148 | content-strategy, motivation |
| 184 | content-strategy, personal-brand |
| 263 | content-strategy, personal-brand |
| 316 | content-strategy, personal-brand, platforms |
| 319 | content-strategy, platforms, tools-ai |
| 304 | content-strategy, platforms, tools-ai |
| 277 | content-strategy, motivation |
| 278 | content-strategy, sales |
| 216 | content-strategy, sales |
| 199 | content-strategy, sales |
| 270 | sales, platforms |
| 239 | sales, platforms |
| 266 | sales, personal-brand |
| 342 | sales, personal-brand |
| 267 | sales, personal-brand |
| 286 | platforms, personal-brand |
| 303 | platforms, content-strategy, tools-ai |
| 336 | platforms, tools-ai |
| 350 | platforms, tools-ai |
| 289 | platforms, tools-ai |
| 335 | platforms, personal-brand |
| 326 | platforms, tools-ai |
| 212 | networking, personal-brand |
| 185 | networking, motivation, reality-projects |
| 187 | networking, motivation, reality-projects |
| 224 | networking, reality-projects |
| 313 | networking, motivation, personal-brand |
| 338 | networking, personal-brand, motivation |
| 341 | networking, motivation, personal-brand |
| 288 | author-story, motivation |
| 146 | author-story, motivation |
| 112 | author-story, motivation |
| 96 | author-story, personal-brand |
| 36 | author-story, networking |
| 38 | author-story, networking |
| 131 | author-story, networking |
| 295 | tools-ai, content-strategy |
| 252 | tools-ai, content-strategy |
| 347 | tools-ai, content-strategy |
| 262 | tools-ai, content-strategy |
| 298 | tools-ai, content-strategy |
| 330 | tools-ai, personal-brand |
| 240 | tools-ai, networking |
| 90 | reality-projects, personal-brand |
| 203 | reality-projects, personal-brand |
| 273 | reality-projects, content-strategy |
| 215 | reality-projects, sales |
| 296 | reality-projects, sales |

---

## JSON с данными постов

Полные данные всех 223 постов находятся в файле: `posts-data.json`

### Пример использования в Nuxt:

```javascript
// composables/useKnowledgeBase.js
export const useKnowledgeBase = () => {
  const posts = ref([])
  
  // Загрузка данных
  const loadPosts = async () => {
    const response = await fetch('/data/posts-data.json')
    posts.value = await response.json()
  }
  
  // Получить посты по теме
  const getPostsByTopic = (topicSlug) => {
    return posts.value
      .filter(post => post.topics.includes(topicSlug))
      .sort((a, b) => a.order_in_topic[topicSlug] - b.order_in_topic[topicSlug])
  }
  
  // Получить пост по ID
  const getPostById = (id) => {
    return posts.value.find(post => post.id === id)
  }
  
  // Получить смежные посты
  const getRelatedPosts = (post, currentTopic) => {
    const relatedTopics = post.topics.filter(t => t !== currentTopic)
    return posts.value.filter(p => 
      p.topics.some(t => relatedTopics.includes(t)) && p.id !== post.id
    ).slice(0, 3)
  }
  
  return {
    posts,
    loadPosts,
    getPostsByTopic,
    getPostById,
    getRelatedPosts
  }
}
```

---

## Рекомендации по интеграции

### 1. Структура данных в Nuxt

```
data/
  knowledge/
    posts-data.json        // Все посты
    topics.js              // Метаданные тем
```

### 2. Маршруты

```
/knowledge                 // Главная страница базы знаний
/knowledge/[slug]          // Страница темы
/knowledge/post/[id]       // Страница поста
```

### 3. SEO для каждой страницы

- **Главная:** Title: «База знаний Нескучного Нетворкинга | 220+ материалов»
- **Тема:** Title: «[Название темы] | База знаний Нескучного Нетворкинга»
- **Пост:** Title: «[Заголовок поста] | Нескучный Нетворкинг»

### 4. Навигация между постами

Для каждой темы реализовать:
- ← Предыдущий пост в теме
- → Следующий пост в теме
- Блок «Читай также» из смежных тем

---

## Как добавлять новые посты

1. **Получить post_id:** Следующий после последнего (сейчас 353 → следующий 354)
2. **Выбрать темы:** 1–3 темы из списка
3. **Определить порядок:** Обычно в конец списка темы
4. **Сохранить в JSON:** Добавить объект в массив posts-data.json
5. **Обновить маршруты:** Добавить в `nuxt.config.ts` для prerender

---

*Данные актуальны на 2026-03-16*  
*Автор: Артём Селифанов*
