# YAPPIE Website — Архитектура проекта

## Обзор

**YAPPIE** — сайт-хаб Артёма Селифанова (маркетолог, no-code разработчик). Маршрутизирует посетителей по профильным направлениям.

| Параметр | Значение |
|----------|----------|
| **Тип** | Статический сайт (Nuxt 3 + SSR) |
| **Фреймворк** | Nuxt 3.5.28 |
| **Стилизация** | Tailwind CSS v4 |
| **Деплой** | GitHub Pages (авто-деплой при push в `main`) |
| **URL** | https://artemselifanov.ru |
| **Язык** | Русский (ru-RU) |

## Структура проекта

```
project/
├── .ai/                    # Документация для AI-агентов
│   ├── README.md          # Обзор проекта
│   ├── ARCHITECTURE.md    # Этот файл
│   ├── DESIGN.md          # Дизайн-система
│   ├── CONTENT.md         # Управление контентом
│   ├── BUILD.md           # Сборка и разработка
│   ├── DEPLOY.md          # Деплой
│   └── RULES.md           # Правила для AI-агентов
├── .github/workflows/
│   └── deploy.yml         # CI/CD пайплайн
├── assets/css/
│   ├── tailwind.css       # Глобальные стили и CSS-переменные
│   ├── typography.css     # Типографика
│   └── fonts.css          # @font-face для Manrope
├── components/
│   ├── layout/            # Layout-компоненты
│   │   ├── Header.vue     # Светлый хедер (главная)
│   │   ├── Footer.vue     # Футер
│   │   ├── ScrollProgress.vue # Прогресс-бар скролла
│   │   ├── LoadingBar.vue # Индикатор загрузки
│   │   ├── CookieBanner.vue # Cookie уведомление
│   │   ├── MobileBottomNav.vue # Мобильная навигация
│   │   └── BaseMobileMenu.vue # Мобильное меню
│   ├── ui/                # UI-компоненты (shadcn/vue)
│   │   ├── accordion/     # Accordion компоненты
│   │   ├── button/        # Button компонент
│   │   ├── card/          # Card компоненты
│   │   ├── ContactForm.vue # Форма контактов
│   │   └── NotificationToggle.vue # Переключатель уведомлений
│   ├── Breadcrumbs.vue    # Хлебные крошки
│   ├── GoogleAnalytics.vue # Google Analytics
│   └── YandexMetrica.vue  # Яндекс.Метрика
├── composables/
│   ├── useFirebase.js     # Firebase инициализация
│   ├── usePushNotifications.js # Push-уведомления
│   ├── useSupabase.js     # Supabase клиент
│   └── useTelegramNotification.js # Telegram уведомления
├── data/
│   ├── blog.js            # Реестр статей блога
│   ├── blog-loaders.js    # Загрузчики статей
│   ├── blog-meta.js       # Meta-данные блога
│   ├── knowledge/         # База знаний
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
│   ├── knowledge/
│   │   ├── index.vue      # База знаний
│   │   ├── [slug].vue     # Страница раздела
│   │   └── post/[id].vue  # Страница поста
│   ├── networking.vue     # Нескучный нетворкинг
│   ├── business.vue       # Бизнес-сетка
│   ├── yappie.vue         # YAPPIE (No-code)
│   ├── study.vue          # Обучение и наставничество
│   ├── consultation.vue   # Консультация
│   ├── mentorship.vue     # Менторство
│   ├── cookie.vue         # Cookie политика
│   ├── privacy.vue        # Политика конфиденциальности
│   ├── offer.vue          # Публичная оферта
│   ├── notifications.vue  # Управление уведомлениями
│   ├── admin/
│   │   └── contacts.vue   # Админ-панель заявок
│   ├── test.vue           # Тестовая страница (песочница)
│   ├── 404.vue            # Страница ошибки
│   └── offline.vue        # Страница офлайн
├── public/
│   ├── favicon.ico
│   ├── favicons/          # Favicon для разных устройств
│   ├── fonts/             # Шрифты (Manrope, Syncopate)
│   ├── images/            # Изображения
│   ├── reference/         # Референсы и OpenGraph
│   ├── robots.txt
│   ├── site.webmanifest
│   ├── firebase-messaging-sw.js # Firebase Service Worker
│   └── sw.js              # PWA Service Worker
├── scripts/
│   ├── postbuild.mjs      # Пост-обработка сборки
│   ├── gen-favicons.mjs   # Генерация favicon
│   ├── gen-blog-meta.mjs  # Генерация meta блога
│   └── convert-*.mjs      # Конвертация контента
├── app.vue                # Корневой компонент
├── nuxt.config.ts         # Конфигурация Nuxt
├── package.json           # Зависимости
└── tsconfig.json          # Конфигурация TypeScript
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
| Consultation | `/consultation` | Консультация |
| Mentorship | `/mentorship` | Менторство |
| Blog | `/blog` | Список статей |
| Article | `/blog/[slug]` | Страница статьи |
| Knowledge | `/knowledge` | База знаний |
| Knowledge Post | `/knowledge/post/[id]` | Пост базы знаний |
| Notifications | `/notifications` | Управление push-уведомлениями |
| Admin Contacts | `/admin/contacts` | Админ-панель заявок |
| Test | `/test` | Тестовая песочница |

### Блог

**Кластеры статей:**
- `razrabotka-saytov` — Разработка сайтов
- `sozdanie-saytov` — Создание сайтов
- `mobilnye-prilozheniya` — Мобильные приложения
- `veb-razrabotka` — Веб-разработка
- `iskusstvennyy-intellekt` — Искусственный интеллект
- `lichnyy-brend` — Личный бренд
- `kontent-marketing` — Контент-маркетинг
- `networking` — Нетворкинг
- `chat-boty` — Чат-боты
- `telegram-marketing` — Telegram маркетинг
- `seo` — SEO
- `monetizatsiya-ekspertnosti` — Монетизация экспертности

## Технологии

### Основные
- **Nuxt 3** — Vue-фреймворк с SSR
- **Vue 3** — UI-библиотека
- **Tailwind CSS v4** — Утилитарные стили
- **TypeScript** — Типизация (строгость: `false`)

### UI и иконки
- **Lucide Vue Next** — Иконки
- **Reka UI** — UI примитивы
- **shadcn-vue** — Паттерны компонентов

### SEO
- **@nuxtjs/seo** — Sitemap, robots, OG-изображения
- **Schema.org** — Структурированные данные

### PWA
- **@vite-pwa/nuxt** — PWA функциональность
- **Workbox** — Кэширование

### Оптимизация
- **@nuxtjs/fontaine** — Оптимизация шрифтов
- **nuxt-delay-hydration** — Отложенная гидратация

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
  image: '/images/preview.webp',
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

## Сборка и деплой

### Команды

```bash
npm install      # Установка зависимостей
npm run dev      # Запуск dev-сервера (localhost:3000)
npm run generate # Сборка статического сайта в dist/
```

### Деплой

Автоматический деплой при push в ветку `main`:
```
Push → GitHub Actions → npm ci → npm run generate → GitHub Pages
```

### Пост-обработка

`scripts/postbuild.mjs`:
- Копирует файлы из `public/` в `dist/`
- Создаёт `index.html` из `200.html`

## Изображения

Все изображения в формате **WebP**:
- `/reference/` — референсы и OpenGraph
- `/images/` — основные изображения
- `/favicons/` — favicon для разных устройств

**Исключения:**
- `.svg` — логотипы (Vector.svg, YAPPIE.svg)
- `.png` — favicon (требуются для совместимости)

## Шрифты

- **Manrope** — основной шрифт (локальные файлы в `/fonts/`)
- **Syncopate** — декоративный шрифт

## Контакты

- **Telegram:** https://t.me/artemselifanov
- **Репозиторий:** https://github.com/yappiepro/website1

## Дополнительные ресурсы

- **Полная документация:** папка `.ai/`
- **Правила AI-агентов:** `.ai/RULES.md`
- **Дизайн-система:** `.ai/DESIGN.md`
- **Управление контентом:** `.ai/CONTENT.md`
