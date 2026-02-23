# AI Agent Instructions

> **Full documentation:** `.ai/` folder

## Quick Start

| Document | Purpose |
|----------|---------|
| `.ai/README.md` | Project overview |
| `.ai/ARCHITECTURE.md` | File structure |
| `.ai/DESIGN.md` | Design system |
| `.ai/CONTENT.md` | Content management |
| `.ai/BUILD.md` | Development |
| `.ai/DEPLOY.md` | Deployment |
| `.ai/RULES.md` | Agent rules |

## Essential Commands

```bash
npm run dev        # Development server
npm run generate   # Build static site
```

## Deploy Flow

```bash
git add .
git commit -m "message"
git push origin main
```

## Key Files

- `pages/index.vue` - Main landing page
- `data/blog.js` - Blog articles
- `nuxt.config.ts` - Configuration

## Safety Rules

1. Never commit secrets
2. Test with `npm run generate` before push
3. Read `.ai/RULES.md` for full guidelines
