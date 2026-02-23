# Development & Build

## Prerequisites

- Node.js 20+ (specified in deploy.yml)
- npm

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

Starts Nuxt dev server at `http://localhost:3000`

## Build Commands

| Command | Description |
|---------|-------------|
| `npm run build` | Build for production (SSR) |
| `npm run generate` | Generate static site to `dist/` |
| `npm run preview` | Preview production build |

## Build Output

```
dist/
├── .nojekyll           # Prevents Jekyll processing
├── index.html          # Main page
├── blog/
│   ├── index.html
│   └── [slug]/
│       └── index.html
├── _nuxt/              # JS, CSS, assets
└── ...
```

## Configuration Files

### nuxt.config.ts

Key settings:

```js
{
  ssr: true,                    // Server-side rendering
  app: {
    baseURL: '/website1/',      // GitHub Pages subpath
  },
  nitro: {
    output: {
      publicDir: 'dist'         // Output directory
    },
    prerender: {
      routes: [...]             // Pages to generate
    }
  }
}
```

### TypeScript

```js
typescript: {
  strict: false
}
```

## Dependencies

### Production

| Package | Purpose |
|---------|---------|
| `nuxt` | Framework |
| `vue` | UI library |
| `tailwindcss` | CSS framework |
| `lucide-vue-next` | Icons |
| `radix-vue` / `reka-ui` | UI components |
| `@nuxtjs/seo` | SEO modules |
| `@nuxt/image` | Image optimization |
| `three` | 3D graphics (hero) |

### Development

| Package | Purpose |
|---------|---------|
| `@nuxtjs/tailwindcss` | Tailwind integration |
| `@tailwindcss/vite` | Vite plugin |

## Common Issues

### Base URL Issues

If assets don't load, check:
- `app.baseURL` in nuxt.config.ts matches GitHub repo name
- Links use relative paths or include baseURL

### Build Errors

1. Clear cache: `rm -rf .nuxt .output`
2. Reinstall: `rm -rf node_modules && npm install`
3. Rebuild: `npm run generate`

### Prerender Routes

Add all blog article slugs to `nitro.prerender.routes` in nuxt.config.ts
