# YAPPIE Website — Контекст проекта

## Обзор проекта

**YAPPIE** — сайт-хаб Артема Селифанова (маркетолог, no-code разработчик, создатель комьюнити). Маршрутизирует посетителей по профильным направлениям.

| Параметр | Значение |
|----------|----------|
| **Тип** | Статический сайт (Nuxt 3 + SSR) |
| **Фреймворк** | Nuxt 3.5.28 |
| **Стилизация** | Tailwind CSS v4 |
| **Деплой** | GitHub Pages (авто-деплой при push в `main`) |
| **URL** | https://yappiepro.github.io/website1/ |
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
│   │   └── README.md      # Документация компонентов
│   ├── ui/                # UI-компоненты (shadcn/vue)
│   │   ├── accordion/     # Accordion компоненты
│   │   ├── badge/         # Badge компонент
│   │   ├── button/        # Button компонент
│   │   └── card/          # Card компоненты
│   ├── BrainNetworkHero.vue # 3D-анимация нейросети (Three.js) — не используется
│   └── TgPost.vue         # Компонент поста Telegram — не используется
├── data/
│   ├── blog.js            # Реестр статей блога
│   └── blog/              # Статьи по кластерам
│       ├── razrabotka-saytov/
│       ├── sozdanie-saytov/
│       ├── mobilnye-prilozheniya/
│       ├── veb-razrabotka/
│       └── iskusstvennyy-intellekt/
├── pages/
│   ├── index.vue          # Главная лендинг-страница
│   ├── blog/
│   │   ├── index.vue      # Список статей
│   │   └── [slug].vue     # Динамическая страница статьи
│   ├── networking.vue     # Нескучный нетворкинг
│   ├── business.vue       # Бизнес-сетка
│   ├── yappie.vue         # YAPPIE (No-code)
│   ├── study.vue          # Фокус (обучение)
│   └── 404.vue            # Страница ошибки
├── public/
│   ├── favicon.ico
│   ├── fonts/             # Шрифт Syncopate
│   ├── images/            # Изображения
│   ├── robots.txt
│   └── sitemap.xml
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

### SEO
- **@nuxtjs/seo** — Sitemap, robots, OG-изображения
- **Schema.org** — Структурированные данные
- **@nuxt/image** — Оптимизация изображений

### Графика
- **Three.js** — 3D-анимация в hero-секции
- **GSAP** — Анимации

## Конфигурация

### nuxt.config.ts

```js
{
  ssr: true,
  app: {
    baseURL: '/website1/',  // Важно для GitHub Pages
  },
  nitro: {
    output: { publicDir: 'dist' },
    prerender: {
      crawlLinks: true,
      routes: [/* список всех страниц */]
    }
  },
  site: {
    url: 'https://yappiepro.github.io',
    name: 'Артем Селифанов — Личный бренд',
    defaultLocale: 'ru'
  }
}
```

## Страницы и маршруты

### Главная страница (`pages/index.vue`)

**Секции:**
1. **Навигация** — фиксированная, с выпадающим меню
2. **Hero** — заголовок, подзаголовок, CTA-кнопки, триггеры
3. **Маршрутизатор** — 4 карточки направлений
4. **Обо мне** — timeline с этапами пути
5. **Цифры** — flip cards с официальной и реальной статистикой
6. **Сообщество** — лид-магнит с кнопками Telegram
7. **Блог** — тизер статей
8. **Footer** — контакты, соцсети, документы

### Дополнительные страницы

| Страница | Маршрут | Назначение |
|----------|---------|------------|
| Networking | `/networking` | Нескучный нетворкинг |
| Business | `/business` | Бизнес-сетка |
| Yappie | `/yappie` | No-code разработка |
| Study | `/study` | Обучение и наставничество |
| Blog | `/blog` | Список статей |
| Article | `/blog/[slug]` | Страница статьи |

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
  --background: 0 0% 0%;
  --foreground: 0 0% 100%;
  --primary: 285 70% 70%;
  --secondary: 285 10% 20%;
  --muted: 285 10% 20%;
  --accent: 285 10% 20%;
  --border: 285 10% 20%;
  --ring: 285 70% 70%;
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
- Yandex Verification: `5dd84e7965966e23`

### Schema.org

- Organization
- WebSite
- WebPage

### Статические файлы

- `public/robots.txt` — директивы для поисковиков
- `public/sitemap.xml` — структура сайта

## Важные файлы

| Файл | Назначение |
|------|------------|
| `pages/index.vue` | Главная страница лендинга |
| `data/blog.js` | Реестр статей блога |
| `nuxt.config.ts` | Конфигурация (SEO, routes, baseURL) |
| `.github/workflows/deploy.yml` | CI/CD пайплайн |
| `assets/css/tailwind.css` | Глобальные стили и переменные |
| `.ai/RULES.md` | Правила для AI-агентов |

## Контакты

- **Telegram:** https://t.me/artemselifanov
- **Репозиторий:** https://github.com/yappiepro/website1

## Дополнительные ресурсы

- **Полная документация:** папка `.ai/`
- **Правила AI-агентов:** `.ai/RULES.md`
- **Архитектура:** `.ai/ARCHITECTURE.md`
- **Дизайн-система:** `.ai/DESIGN.md`
- **Управление контентом:** `.ai/CONTENT.md`
