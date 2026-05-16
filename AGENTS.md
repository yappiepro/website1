# AGENTS.md

## Developer Commands
- `npm run dev`: Start development server.
- `npm run generate`: Full production build pipeline (Meta → OG Images → Nuxt Gen → Postbuild → Sitemap). **Do not use `nuxt generate` directly** if you need updated metadata or sitemaps.
- `npm run lint`: Run ESLint.
- `npm run lint:fix`: Run ESLint with auto-fix.
- `npm run cleanup`: Detect unused files and dependencies (via Knip).
- `npm run cleanup:fix`: Auto-fix unused files and dependencies.
- `npm run deps:check`: Verify dependency usage (via Depcheck).
- `npm run favicons`: Regenerate favicons from source.
- `npm run analyze`: Run Nuxt bundle analyzer.

## Setup
- **Node**: 20 (pinned in CI).
- **Env**: Copy `.env.example` to `.env` and fill in Firebase, Supabase, and Telegram keys. The dev server reads these via `runtimeConfig.public`.
- **Husky**: Runs on `npm install` via the `prepare` script. Pre-commit hook triggers `lint-staged`.

## Architecture & Pipeline
- **Framework**: Nuxt 4 (SSR → SSG for GitHub Pages), Tailwind CSS 4, Vue 3.
- **Deploy**: Push to `main` triggers `.github/workflows/deploy.yml` which runs `npm run generate`, copies `.output/public` → `dist`, and deploys to GitHub Pages.
- **Content Pipeline** (`/scripts`, ignored during build):
  - `gen-blog-meta.mjs`: Generates `data/blog-meta.js` and `data/blog-loaders.js`. **Must run after adding new blog articles** (or use `npm run generate` which runs it first).
  - `generate-og-images.mjs`: Generates OG images for all blog articles.
  - `convert-md-to-json.mjs` / `convert-telegram-to-knowledge.mjs`: Populate `data/knowledge/posts-data.json`.
  - `postbuild.mjs`: Copies sitemap files and public assets to `dist`.
  - `generate-sitemap.mjs`: Generates sitemap XML files.
- **Integrations**: Supabase (DB/auth), Firebase (PWA push notifications), Telegram bot (form notifications).
- **Path alias**: `@/*` maps to project root (see `tsconfig.json`).

## Content Management
- **Blog Articles**: Add as JS files in `data/blog/[cluster]/`, import in `data/blog.js`, then run `npm run generate`.
- **Knowledge Base**: Content in `data/knowledge/posts-data.json` (generated). Topics defined in `data/knowledge/topics.js`.
- **Pages**: File-based routing under `pages/`. Main routes: `/`, `/blog`, `/knowledge`, `/consultation`, `/mentorship`, `/networking`, `/business`, `/yappie`, `/study`, `/part1-3`.

## Conventions & Quirks
- **Build order matters**: `generate` is a sequential pipeline; failure in any early step (e.g. `gen-blog-meta`) breaks the rest.
- **Link Checker**: Disabled in production (`nuxt.config.ts:33-35`) to avoid false 500 errors during prerendering.
- **TypeScript**: Strict mode on but `typeCheck: false` (`nuxt.config.ts:326-328`). No separate `tsconfig` — extends `.nuxt/tsconfig.json`.
- **No separate config files**: ESLint, Knip, and Prettier use defaults (no `.eslintrc`, `knip.json`, etc. in repo).
- **Nitro output**: `dist/` is the final deploy artifact, generated from `.output/public` by the CI workflow. Locally, `nuxt generate` outputs to `.output/public` and `postbuild.mjs` handles the copy.
- **Font**: Manrope with Cyrillic subset, preloaded via `@nuxt/fonts` + Fontaine for CLS prevention.
- **PWA**: Configured via `@vite-pwa/nuxt` with Iconify caching, offline support disabled (`navigateFallback` commented out).
