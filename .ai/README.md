# YAPPIE Website - AI Agent Instructions

## Project Overview

**Name:** YAPPIE Landing Page
**Type:** Static website (Nuxt 3 + SSR)
**Purpose:** Company landing page for web development/AI services
**Deploy:** GitHub Pages (auto-deploy via GitHub Actions)

## Quick Reference

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server (localhost:3000) |
| `npm run generate` | Build static site to `dist/` |
| `npm run build` | Build for production |

## Documentation Structure

```
.ai/
├── README.md      # This file - project overview
├── ARCHITECTURE.md # Project architecture & file structure
├── DESIGN.md      # Design system & styling
├── CONTENT.md     # Content management & data files
├── BUILD.md       # Development & build process
├── DEPLOY.md      # Deployment & Git workflow
└── RULES.md       # AI agent rules & constraints
```

## Tech Stack

- **Framework:** Nuxt 3 (v4.3.1)
- **Styling:** Tailwind CSS v4
- **Icons:** Lucide Vue Next
- **UI:** Radix Vue / Reka UI
- **SEO:** @nuxtjs/seo (sitemap, robots, og-image, schema-org)
- **Images:** @nuxt/image

## Important Files

| File | Purpose |
|------|---------|
| `nuxt.config.ts` | Main configuration (SEO, routes, baseURL) |
| `pages/index.vue` | Main landing page (~69KB) |
| `data/blog.js` | Blog articles registry |
| `.github/workflows/deploy.yml` | CI/CD pipeline |

## Site Structure

- `/` - Main landing page
- `/blog` - Blog listing
- `/blog/[slug]` - Individual blog articles

## Current Routes (prerendered)

```js
routes: ['/', '/blog', '/blog/skolko-stoit-razrabotka-sayta', '/blog/razrabotka-sayta-pod-klyuch']
```

## GitHub Repository

- **URL:** https://github.com/yappiepro/website1
- **Live Site:** https://yappiepro.github.io/website1/
- **baseURL:** `/website1/`
