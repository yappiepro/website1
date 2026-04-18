# GEMINI.md

This file serves as the foundational mandate for all Gemini CLI interactions in this repository. It complements the existing documentation in the `.ai/` folder, which remains the primary source of truth for architectural and design details.

## Project Overview

**YAPPIE Landing Page** is a high-performance, SEO-optimized personal brand and business services website for Артём Селифанов.

- **Stack:** Nuxt 4 (`^4.3.1`), Vue 3, Tailwind CSS v4 (using Vite plugin), GSAP.
- **Key Features:** PWA support, automated SEO (sitemaps, OG images, schema.org), Telegram Web App integration, and a centralized content system.
- **Architecture:** Follows standard Nuxt 3/4 conventions with a heavy emphasis on static site generation (SSG) for GitHub Pages.

## Core Mandates & Rules

1.  **AI Documentation First:** Always consult the `.ai/` directory before making significant changes.
    - `.ai/RULES.md`: Core AI behavior and coding standards.
    - `.ai/ARCHITECTURE.md`: Detailed file structure and module usage.
    - `.ai/CONTENT.md`: How to manage blog posts and landing page data.
2.  **Language:** Primary content is in **Russian**. Documentation and code comments may be in English, but user-facing strings must remain in Russian unless otherwise specified.
3.  **Build Verification:** Every change that affects the site structure or content MUST be verified by running `npm run generate`. This ensures that the SSG process and post-build scripts (OG images, sitemaps) succeed.
4.  **Surgical Edits:** When modifying content on the landing page (`pages/index.vue`), keep edits localized to the specific data arrays (e.g., `problems`, `benefits`, `faqs`).

## Key Commands

| Command            | Description                                                                         |
| :----------------- | :---------------------------------------------------------------------------------- |
| `npm run dev`      | Start the development server (HMR enabled).                                         |
| `npm run generate` | **Crucial:** Full SSG build including blog meta, OG images, and sitemap generation. |
| `npm run build`    | Standard Nuxt production build.                                                     |
| `npm run lint:fix` | Run ESLint and apply automatic fixes.                                               |
| `npm run favicons` | Regenerate favicons from source assets.                                             |
| `npm run cleanup`  | Run `knip` to find unused files or dependencies.                                    |

## Development Conventions

- **Components:** Use `<script setup>` with a single root element in `<template>`. Group Tailwind classes logically (layout -> spacing -> typography -> colors).
- **Styling:** Use Tailwind CSS v4 utility classes. Prefer `clsx()` for conditional classes.
- **Content:** Centralized in `data/` (for blog and knowledge base) or defined as arrays within pages (for the landing page).
- **SEO:** Managed via `@nuxtjs/seo`. Configuration is found in `nuxt.config.ts`.
- **Git:** Use conventional commits (e.g., `feat:`, `fix:`, `content:`, `style:`). Never commit secrets (check `.env` and `runtimeConfig`).

## Directory Map

- `pages/`: Route-based components. `index.vue` is the main landing page.
- `components/`: UI components. Organized into `ui/`, `layout/`, `blog/`, etc.
- `data/`: The "database" of the project. Contains `blog.js`, `knowledge/`, and region data.
- `scripts/`: Critical build-time scripts for generating metadata and assets.
- `.ai/`: Specialized instructions and context for AI agents. **Read this first.**
- `assets/css/`: Global styles and Tailwind v4 entry point.

## Testing & Validation

- **Manual Check:** Verify links and transitions in `npm run dev`.
- **Build Check:** Ensure `npm run generate` exits with code 0.
- **SEO Check:** Verify `dist/sitemap.xml` and `dist/_robots.txt` are correctly generated after a full build.
