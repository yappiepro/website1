# YAPPIE Website

> **AI Agent Documentation:** See `.ai/` folder

Development of websites, web applications, and chatbots for business.

## Quick Start

```bash
npm install
npm run dev
```

## Build

```bash
npm run generate
```

## Deploy

Auto-deploys to GitHub Pages on push to `main`.

```bash
git add .
git commit -m "Update"
git push origin main
```

## Documentation

| File | Purpose |
|------|---------|
| `.ai/README.md` | Project overview |
| `.ai/ARCHITECTURE.md` | File structure |
| `.ai/DESIGN.md` | Design system |
| `.ai/CONTENT.md` | Content management |
| `.ai/BUILD.md` | Development guide |
| `.ai/DEPLOY.md` | Deployment guide |
| `.ai/RULES.md` | AI agent rules |

## Tech Stack

- Nuxt 3
- Tailwind CSS v4
- Vue 3
- GitHub Pages

## Live Site

https://artemselifanov.ru/

---

## 🔍 SEO & Search Engines

### Yandex Webmaster

If you see errors like `500 - Failed to fetch dynamically imported module` in Yandex search results:

**1. Open Yandex Webmaster**
- https://webmaster.yandex.ru/
- Select site: artemselifanov.ru

**2. Check indexed pages**
- Go to: **Indexing** → **Pages in search**
- Look for pages with 500 errors

**3. Request re-crawling**
- Go to: **Indexing** → **Re-crawl pages**
- Enter URL: `https://artemselifanov.ru/`
- Click **"Send"**
- Repeat for `/blog/` and other important pages

**4. Clear cached URLs** (if needed)
- Go to: **Indexing** → **Re-crawl pages**
- Enter the problematic URL
- Click **"Clear"** to remove from cache

**5. Wait 2-5 days** for search results to update

### Google Search Console

**1. Open Search Console**
- https://search.google.com/search-console
- Select site: artemselifanov.ru

**2. Request indexing**
- Go to: **URL Inspection**
- Enter URL
- Click **"Request indexing"**

### Sitemap

- **URL:** https://artemselifanov.ru/sitemap.xml
- **Auto-generated** by Nuxt SEO module
- **Updated** on every deploy

### Robots.txt

- **URL:** https://artemselifanov.ru/robots.txt
- **Allows:** All pages (`Allow: /`)
- **Disallows:** `/_nuxt/`, `/api/` (technical files)

---

## 📄 Создание новых страниц

При создании новых страниц (например, `part1.vue`, `part2.vue`, `part3.vue`) **обязательно** выполните следующие шаги для обеспечения быстрой загрузки и правильной индексации:

### 1. Добавьте страницу в пререндеринг

Откройте `nuxt.config.ts` и добавьте путь к странице в массив `nitro.prerender.routes`:

```ts
nitro: {
  prerender: {
    routes: [
      '/',
      '/blog',
      '/business',
      '/consultation',
      '/map',
      '/mentorship',
      '/networking',
      '/study',
      '/part1', // ← Добавить новую страницу
      '/part2', // ← Добавить новую страницу
      '/part3', // ← Добавить новую страницу
    ],
  },
}
```

**Зачем это нужно:** Без этого шага страница не будет сгенерирована как статический HTML-файл во время сборки. Она будет рендериться на сервере при каждом запросе, что приведёт к медленной загрузке.

### 2. Добавьте страницу в sitemap

В том же файле `nuxt.config.ts` найдите секцию `sitemap.pages.routes` и добавьте путь к странице:

```ts
sitemap: {
  pages: {
    include: [
      '/',
      '/blog',
      '/business',
      '/consultation',
      '/map',
      '/mentorship',
      '/networking',
      '/study',
      '/part1', // ← Добавить новую страницу
      '/part2', // ← Добавить новую страницу
      '/part3', // ← Добавить новую страницу
    ],
  },
}
```

**Зачем это нужно:** Для правильной SEO-индексации поисковыми системами (Yandex, Google).

### 3. Пересоберите проект

После внесения изменений выполните:

```bash
npm run generate
```

Убедитесь, что в папке `.output/public` появились новые HTML-файлы для ваших страниц.

### 4. Задеплойте изменения

```bash
git add .
git commit -m "Add new pages to prerender and sitemap"
git push origin main
```

---
