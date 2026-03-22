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
