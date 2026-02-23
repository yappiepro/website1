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

## Editing Landing Page Content

Open `pages/index.vue` and find the corresponding array:

### Problems Array Structure

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

### Benefits Array Structure

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

### Portfolio Array Structure

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

### FAQ Array Structure

```js
const faqs = [
  {
    question: 'Question text?',
    answer: 'Answer text.'
  },
  // ...
]
```

## SEO Content

### Meta Tags

Configured in `nuxt.config.ts` under `app.head.meta`:
- Title
- Description
- Keywords
- Open Graph
- Twitter Card
- Yandex verification

### Schema.org

Structured data configured in `nuxt.config.ts`:
- Organization schema
- WebSite schema
- WebPage schema

### Static Files

- `public/robots.txt` - Search engine directives
- `public/sitemap.xml` - Site structure for crawlers

## Contact Information

- **Telegram:** https://t.me/artemselifanov
- Update in navigation component and contact section
