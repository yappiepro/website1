# YAPPIE Website — Контекст проекта

## Обзор проекта

**YAPPIE** — сайт-хаб Артема Селифанова (маркетолог, no-code разработчик, создатель комьюнити). Маршрутизирует посетителей по профильным направлениям.

| Параметр | Значение |
|----------|----------|
| **Тип** | Статический сайт (Nuxt 3 + SSR) |
| **Фреймворк** | Nuxt 3.5.28+ |
| **Стилизация** | Tailwind CSS v4 |
| **Деплой** | GitHub Pages (авто-деплой при push в `main`) |
| **URL** | https://artemselifanov.ru |
| **Язык** | Русский (ru-RU) |

## Быстрый старт

```bash
npm install      # Установка зависимостей
npm run dev      # Запуск dev-сервера (localhost:3000)
npm run generate # Сборка статического сайта в dist/
```

## Структура проекта

```
лендинг ai/
├── .ai/                    # Документация для AI-агентов
│   ├── README.md          # Обзор проекта
│   ├── ARCHITECTURE.md    # Архитектура и структура
│   ├── DESIGN.md          # Дизайн-система
│   ├── CONTENT.md         # Управление контентом
│   ├── BUILD.md           # Сборка и разработка
│   ├── DEPLOY.md          # Деплой
│   └── RULES.md           # Правила для AI-агентов
├── .github/workflows/
│   └── deploy.yml         # CI/CD пайплайн
├── assets/css/
│   ├── tailwind.css       # Глобальные стили и CSS-переменные
│   └── typography.css     # Типографика
├── components/
│   ├── layout/            # Переиспользуемые layout-компоненты
│   │   ├── Header.vue     # Светлый хедер (главная)
│   │   ├── HeaderDark.vue # Тёмный хедер (study)
│   │   ├── HeaderLight.vue # Светлый хедер (блог)
│   │   ├── MobileMenu.vue # Мобильное меню
│   │   ├── Footer.vue     # Футер
│   │   ├── ScrollProgress.vue # Прогресс-бар скролла
│   │   ├── ScrollToTop.vue # Кнопка наверх
│   │   └── LoadingBar.vue # Индикатор загрузки
│   ├── ui/                # UI-компоненты (shadcn/vue)
│   │   ├── accordion/     # Accordion компоненты
│   │   ├── badge/         # Badge компонент
│   │   ├── button/        # Button компонент
│   │   └── card/          # Card компоненты
│   ├── BrainNetworkHero.vue # 3D-анимация нейросети (Three.js)
│   ├── Breadcrumbs.vue    # Хлебные крошки
│   ├── GoogleAnalytics.vue # GA4
│   └── YandexMetrica.vue  # Яндекс.Метрика
├── data/
│   ├── blog.js            # Реестр статей блога
│   ├── blog-loaders.js    # Загрузчики статей
│   ├── blog-meta.js       # Мета-данные блога
│   ├── blog/              # Статьи по кластерам
│   │   ├── razrabotka-saytov/
│   │   ├── sozdanie-saytov/
│   │   ├── mobilnye-prilozheniya/
│   │   ├── veb-razrabotka/
│   │   └── iskusstvennyy-intellekt/
│   └── knowledge/         # База знаний
│       ├── topics.js      # Темы базы знаний
│       └── posts-data.json # Посты базы знаний
├── pages/
│   ├── index.vue          # Главная лендинг-страница (~1500 строк)
│   ├── 404.vue            # Страница ошибки
│   ├── offline.vue        # Страница офлайн
│   ├── consultation.vue   # Консультация
│   ├── mentorship.vue     # Наставничество
│   ├── networking.vue     # Нескучный нетворкинг
│   ├── business.vue       # Бизнес-сетка
│   ├── yappie.vue         # YAPPIE (No-code)
│   ├── study.vue          # Фокус (обучение)
│   ├── cookie.vue         # Cookie-политика
│   ├── offer.vue          # Публичная оферта
│   ├── privacy.vue        # Политика конфиденциальности
│   ├── notifications.vue  # Push-уведомления
│   └── blog/
│       ├── index.vue      # Список статей
│       └── [slug].vue     # Динамическая страница статьи
├── public/
│   ├── favicon.ico
│   ├── favicons/          # Favicon для разных устройств
│   ├── fonts/             # Шрифт Manrope
│   ├── images/            # Изображения
│   ├── reference/         # Референсные изображения
│   ├── robots.txt
│   ├── sitemap.xml
│   └── site.webmanifest   # PWA manifest
├── scripts/
│   └── postbuild.mjs      # Пост-обработка сборки
├── app.vue                # Корневой компонент
├── nuxt.config.ts         # Конфигурация Nuxt (SEO, routes, baseURL)
├── package.json           # Зависимости
├── tsconfig.json          # Конфигурация TypeScript
└── components.json        # Настройки shadcn-vue
```

## Технологии

### Основные
- **Nuxt 3** — Vue-фреймворк с SSR
- **Vue 3** — UI-библиотека
- **Tailwind CSS v4** — Утилитарные стили
- **TypeScript** — Типизация (строгость: `false`)

### UI и иконки
- **Lucide Vue Next** — Иконки
- **Radix Vue / Reka UI** — Примитивы компонентов
- **shadcn-vue** — Паттерны компонентов
- **@nuxt/icon** — Иконки Iconify

### SEO
- **@nuxtjs/seo** — Sitemap, robots, OG-изображения
- **Schema.org** — Структурированные данные
- **@nuxt/image** — Оптимизация изображений

### Графика
- **Three.js** — 3D-анимация в hero-секции
- **GSAP** — Анимации

### Интеграции
- **Firebase** — Push-уведомления, Firestore
- **Supabase** — База данных для push-подписок
- **Яндекс.Метрика** — Аналитика
- **Google Analytics 4** — Аналитика

### PWA
- **@vite-pwa/nuxt** — Progressive Web App
- **Workbox** — Кэширование
- **IndexedDB** — Хранение подписок

## Конфигурация

### nuxt.config.ts

```js
{
  ssr: true,
  app: {
    baseURL: '/',
  },
  nitro: {
    output: { publicDir: 'dist' },
    prerender: {
      crawlLinks: true,
      routes: [
        '/',
        '/blog',
        '/knowledge',
        '/consultation',
        '/mentorship',
        '/networking',
        '/business',
        '/yappie',
        '/study',
        // + динамические маршруты блога и базы знаний
      ]
    },
    routeRules: {
      // Кэширование статических ресурсов
      '/_nuxt/**': { 'cache-control': 'public, max-age=31536000, immutable' },
      '/images/**': { 'cache-control': 'public, max-age=31536000, immutable' },
      // HTML страницы - проверка при каждом посещении
      '/': { 'cache-control': 'public, max-age=0, must-revalidate' },
      '/**': { 'cache-control': 'public, max-age=0, must-revalidate' }
    }
  },
  site: {
    url: 'https://artemselifanov.ru',
    name: 'Артём Селифанов — Личный бренд для предпринимателей и экспертов',
    defaultLocale: 'ru'
  }
}
```

## Страницы и маршруты

### Главная страница (`pages/index.vue`)

**Секции:**
1. **Навигация** — фиксированная, с выпадающим меню
2. **Hero** — заголовок, подзаголовок, CTA-кнопки, триггеры
3. **Проблемы** — карточки проблем бизнеса
4. **Услуги** — Bento grid layout
5. **Почему мы** — карточки преимуществ
6. **Автоматизация** — слайдер с решениями
7. **Портфолио** — проекты
8. **FAQ** — аккордеон
9. **Контакты** — CTA-секция
10. **Footer** — контакты, соцсети, документы

### Дополнительные страницы

| Страница | Маршрут | Назначение |
|----------|---------|------------|
| Networking | `/networking` | Нескучный нетворкинг |
| Business | `/business` | Бизнес-сетка |
| Yappie | `/yappie` | No-code разработка |
| Study | `/study` | Обучение и наставничество |
| Consultation | `/consultation` | Консультация |
| Mentorship | `/mentorship` | Наставничество |
| Blog | `/blog` | Список статей |
| Article | `/blog/[slug]` | Страница статьи |
| Knowledge | `/knowledge` | База знаний |
| Knowledge Post | `/knowledge/post/[id]` | Пост базы знаний |

### Блог

**Кластеры статей:**
- `razrabotka-saytov` — Разработка сайтов
- `sozdanie-saytov` — Создание сайтов
- `mobilnye-prilozheniya` — Мобильные приложения
- `veb-razrabotka` — Веб-разработка
- `iskusstvennyy-intellekt` — Искусственный интеллект

## Управление контентом

### Добавление статьи в блог

1. **Создать файл** в `data/blog/<кластер>/<slug>.js`:
```js
export default {
  slug: 'nazvanie-stati',
  title: 'Заголовок',
  description: 'SEO-описание',
  category: 'Категория',
  cluster: 'razrabotka-saytov',
  date: '2026-02-28',
  image: '/images/preview.jpg',
  content: `<p>HTML-контент...</p>`
}
```

2. **Зарегистрировать** в `data/blog.js`:
```js
import nazvanieStati from './blog/razrabotka-saytov/nazvanie-stati.js'

export const articles = [
  // ...существующие
  nazvanieStati,
]
```

3. **Добавить маршрут** в `nuxt.config.ts`:
```js
nitro: {
  prerender: {
    routes: ['/blog/nazvanie-stati']
  }
}
```

### Важные правила для статей

**Таблицы:** Все таблицы должны быть обёрнуты в `<div class="table-wrapper">`:
```html
<div class="table-wrapper">
  <table>
    <thead>...</thead>
    <tbody>...</tbody>
  </table>
</div>
```

**Хлебные крошки:** Только 3 элемента (без названия статьи):
```vue
<Breadcrumbs
  :items="[
    { label: 'Главная', href: '/' },
    { label: 'Блог', href: '/blog' },
    { label: article?.category, href: `/blog#${article.cluster}` }
  ]"
/>
```

### Редактирование лендинга

Массивы данных в `pages/index.vue`:
- `problems[]` — проблемы бизнеса
- `benefits[]` — преимущества компании
- `automationItems[]` — решения автоматизации
- `portfolio[]` — проекты
- `faqs[]` — вопросы и ответы

## Стилевые соглашения

### Tailwind CSS

- Утилитарные классы
- Группировка: layout → spacing → typography → colors → conditional
- Для условных классов: `clsx()` и `tailwind-merge`

### Компоненты Vue

```vue
<script setup>
// Импорты
import { ref } from 'vue'
import { IconName } from 'lucide-vue-next'

// Пропсы
const props = defineProps({ title: String })

// Реактивные данные
const isOpen = ref(false)

// Функции
function handleClick() {}
</script>

<template>
  <div class="...">
    <!-- Контент с одним корнем -->
  </div>
</template>
```

### Цветовая палитра

```css
:root {
  --background: 0 0% 100%;
  --foreground: 0 0% 0%;
  --primary: 226 89% 58%;
  --secondary: 226 10% 20%;
  --muted: 226 10% 90%;
  --accent: 226 89% 58%;
  --border: 226 10% 90%;
  --ring: 226 89% 58%;
}
```

## Деплой

### Автоматический (GitHub Actions)

При push в ветку `main`:
```
Push → Actions → npm ci → npm run generate → GitHub Pages
```

### Ручной деплой

```bash
git add .
git commit -m "тип: описание"  # тип: feat/fix/content/style/refactor/chore
git push origin main
```

### Проверка перед деплоем

```bash
npm run generate  # Убедиться, что сборка проходит без ошибок
ls dist/          # Проверить наличие output-файлов
```

## SEO

### Мета-теги (nuxt.config.ts)

- Title, Description, Keywords
- Open Graph (og:title, og:description, og:image)
- Twitter Card
- Yandex Verification: `27bf0858465d6882`

### Schema.org

- Organization
- WebSite
- WebPage

### Статические файлы

- `public/robots.txt` — директивы для поисковиков
- `public/sitemap.xml` — структура сайта

## Push-уведомления

### Настройка

1. **Firestore** — хранение подписок
2. **Supabase** — альтернативное хранилище
3. **VAPID ключи** — аутентификация push

### Отправка уведомлений

```bash
curl -X POST "https://<REGION>-<PROJECT_ID>.cloudfunctions.net/sendPushToAll" \
  -H "Content-Type: application/json" \
  -H "x-api-key: YOUR_PUSH_API_KEY" \
  -d '{
    "title": "Заголовок",
    "body": "Текст",
    "url": "https://artemselifanov.ru/notifications"
  }'
```

## Важные файлы

| Файл | Назначение |
|------|------------|
| `pages/index.vue` | Главная страница лендинга |
| `data/blog.js` | Реестр статей блога |
| `nuxt.config.ts` | Конфигурация (SEO, routes, baseURL) |
| `.github/workflows/deploy.yml` | CI/CD пайплайн |
| `assets/css/tailwind.css` | Глобальные стили и переменные |
| `.ai/RULES.md` | Правила для AI-агентов |
| `app.vue` | Корневой компонент с метриками |

## Контакты

- **Telegram:** https://t.me/artemselifanov
- **Репозиторий:** https://github.com/yappiepro/website1

## Дополнительные ресурсы

- **Полная документация:** папка `.ai/`
- **Правила AI-агентов:** `.ai/RULES.md`
- **Архитектура:** `.ai/ARCHITECTURE.md`
- **Дизайн-система:** `.ai/DESIGN.md`
- **Управление контентом:** `.ai/CONTENT.md`
- **Сборка и разработка:** `.ai/BUILD.md`
- **Деплой:** `.ai/DEPLOY.md`
