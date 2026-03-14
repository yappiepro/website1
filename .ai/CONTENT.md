# Content Management

## Content Locations

| Content | File | Variable |
|---------|------|----------|
| Problems | `pages/index.vue` | `problems[]` |
| Services | `pages/index.vue` | hardcoded in template |
| Benefits | `pages/index.vue` | `benefits[]` |
| Automation | `pages/index.vue` | `automationItems[]` |
| Portfolio | `pages/index.vue` | `portfolio[]` |
| FAQ | `pages/index.vue` | `faqs[]` |
| Blog Articles | `data/blog.js` | `articles[]` |

## Adding Blog Articles

### 1. Create Article File

Create `data/blog/cluster-name/article-slug.js`:

```js
export default {
  slug: 'article-slug',
  title: 'Заголовок статьи',
  description: 'Краткое описание для SEO',
  category: 'Категория',
  cluster: 'razrabotka-saytov', // for grouping
  date: '2026-02-20',
  image: '/images/article.jpg',
  content: `
    <p>HTML content here...</p>
  `
}
```

### 2. Register Article

Add to `data/blog.js`:

```js
import articleSlug from './blog/cluster-name/article-slug.js'

export const articles = [
  // ...existing
  articleSlug,
]
```

### 3. Add Route

Update `nuxt.config.ts`:

```js
nitro: {
  prerender: {
    routes: [
      '/',
      '/blog',
      '/blog/article-slug', // Add new route
      // ...
    ]
  }
}
```

## Таблицы в статьях

**Важно:** Все таблицы должны быть обёрнуты в `<div class="table-wrapper">` для горизонтальной прокрутки на мобильных устройствах.

### ✅ Правильно:

```html
<div class="table-wrapper">
  <table>
    <thead>
      <tr>
        <th>Заголовок 1</th>
        <th>Заголовок 2</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Ячейка 1</td>
        <td>Ячейка 2</td>
      </tr>
    </tbody>
  </table>
</div>
```

### ❌ Неправильно:

```html
<table class="w-full border-collapse border border-border">
  <!-- без обёртки table-wrapper -->
</table>
```

### Стилизация таблиц

CSS-класс `.table-wrapper` добавлен в `pages/blog/[slug].vue` и обеспечивает:
- Горизонтальную прокрутку на мобильных
- Стили скроллбара
- Корректное отображение на всех устройствах

## Хлебные крошки

**Важно:** В хлебных крошках на странице статьи НЕ должен быть последний элемент с названием статьи.

### ✅ Правильно (3 элемента):

```vue
<Breadcrumbs
  :items="[
    { label: 'Главная', href: '/' },
    { label: 'Блог', href: '/blog' },
    { label: article?.category || 'Статья', href: article?.cluster ? `/blog#${article.cluster}` : undefined }
  ]"
/>
```

### ❌ Неправильно (4 элемента):

```vue
<Breadcrumbs
  :items="[
    { label: 'Главная', href: '/' },
    { label: 'Блог', href: '/blog' },
    { label: article?.category, href: '...' },
    { label: article?.title }  // ← НЕ добавлять
  ]"
/>
```

## Проверка перед публикацией статьи

### Чек-лист

1. **Таблицы** — все обёрнуты в `<div class="table-wrapper">`
2. **Хлебные крошки** — 3 элемента (без названия статьи)
3. **Навигация в конце** — только блок `article-nav` с «Читать далее» и «Назад»
4. **Без дублей** — не добавлять отдельный блок «Читать также» после `article-nav`

### Как проверить

1. Откройте существующую статью из `data/blog/iskusstvennyy-intellekt/` как эталон
2. Сравните структуру:
   - Таблицы с `table-wrapper`
   - Навигация в конце (только `article-nav`)
   - Хлебные крошки в `[slug].vue` (3 элемента)
3. Убедитесь, что нет дублирующихся блоков навигации

### ❌ Неправильно — дублирование навигации:

```html
<div class="article-nav">
  <p><strong>Читать далее:</strong> <a href="...">→</a></p>
  <p><strong>Назад:</strong> <a href="...">←</a></p>
</div>

<h3>Читать также</h3>  <!-- ← УДАЛИТЬ этот блок -->
<ul>
  <li><a href="...">Статья 1</a></li>
  <li><a href="...">Статья 2</a></li>
</ul>
```

### ✅ Правильно — только article-nav:

```html
<div class="article-nav">
  <p><strong>Читать далее:</strong> <a href="/blog/sleduyushhaya-statya">→</a></p>
  <p><strong>Назад:</strong> <a href="/blog/predydushhaya-statya">←</a></p>
</div>
```

## Редактирование контента на лендинге

Откройте `pages/index.vue` и найдите соответствующий массив:

### Структура массива Problems

```js
const problems = [
  {
    icon: 'AlertCircle',
    title: 'Problem Title',
    description: 'Problem description',
    solution: 'Solution description'
  },
  // ...
]
```

### Структура массива Benefits

```js
const benefits = [
  {
    icon: 'Zap',
    title: 'Benefit Title',
    description: 'Benefit description'
  },
  // ...
]
```

### Структура массива Portfolio

```js
const portfolio = [
  {
    title: 'Project Name',
    description: 'Short description',
    tags: ['Tag1', 'Tag2'],
    image: '/images/project.jpg',
    link: 'https://...'
  },
  // ...
]
```

### Структура массива FAQ

```js
const faqs = [
  {
    question: 'Question text?',
    answer: 'Answer text.'
  },
  // ...
]
```

## SEO-контент

### Мета-теги

Configured in `nuxt.config.ts` under `app.head.meta`:
- Title
- Description
- Keywords
- Open Graph
- Twitter Card
- Yandex verification

### Schema.org

Структурированные данные настроены в `nuxt.config.ts`:
- Organization schema
- WebSite schema
- WebPage schema

### Статические файлы

- `public/robots.txt` — директивы для поисковиков
- `public/sitemap.xml` — структура сайта для crawlers

## Контактная информация

- **Telegram:** https://t.me/artemselifanov
- Обновить в навигационном компоненте и секции контактов
