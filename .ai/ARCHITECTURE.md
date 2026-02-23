# Architecture

## Directory Structure

```
project/
├── .ai/                    # AI agent instructions (this folder)
├── .github/workflows/      # GitHub Actions CI/CD
│   └── deploy.yml          # Auto-deploy to GitHub Pages
├── .nuxt/                  # Nuxt build cache (gitignored)
├── .output/                # Build output
├── assets/css/             # Global styles
│   └── tailwind.css        # Tailwind entry point
├── components/             # Vue components
│   ├── BrainNetworkHero.vue # Hero animation component
│   └── ui/                 # UI components
├── data/                   # Content data
│   ├── blog.js             # Blog articles registry
│   └── blog/               # Article data files
├── dist/                   # Generated static site
├── pages/                  # Page routes
│   ├── index.vue           # Main landing page
│   ├── demo-mindmap.vue    # Demo page
│   ├── hero-variants.vue   # Hero variants
│   └── blog/               # Blog pages
│       ├── index.vue       # Blog listing
│       └── [slug].vue      # Article page
├── public/                 # Static assets
│   ├── favicon.ico
│   ├── favicons/
│   ├── fonts/
│   ├── images/
│   ├── robots.txt
│   └── sitemap.xml
├── reference/              # Reference images
├── app.vue                 # Root component
├── nuxt.config.ts          # Nuxt configuration
├── package.json            # Dependencies
└── tsconfig.json           # TypeScript config
```

## Page Components

### pages/index.vue (Main Landing Page)

**Sections:**
1. **Navigation** (fixed) - Logo, menu, CTA button
2. **Hero** - Badge, title, subtitle, CTAs, stats, visual
3. **Problems** (`#problems`) - 6 problem cards
4. **Services** (`#services`) - Bento grid layout
5. **Why Us** (`#why-us`) - 4 benefit cards
6. **Automation** (`#automation`) - Slider with tabs
7. **Portfolio** (`#portfolio`) - Project cards grid
8. **FAQ** (`#faq`) - Accordion
9. **Contact** (`#contact`) - CTA section
10. **Footer** - Logo, nav, copyright
11. **Scroll-to-top** - Floating button

### Data Arrays in index.vue

```js
// Editable content arrays
problems[]       // 6 business problems
benefits[]       // 4 company benefits
automationItems[] // Automation solutions
portfolio[]      // Project showcase
faqs[]           // FAQ items
```

### pages/blog/index.vue

Blog listing page - reads from `data/blog.js`

### pages/blog/[slug].vue

Dynamic article page - fetches article by slug

## Component Architecture

### BrainNetworkHero.vue

Animated hero visualization using Three.js (3D neural network effect).

### UI Components (components/ui/)

Reusable UI components following shadcn/vue patterns.

## Data Flow

```
data/blog/*.js → data/blog.js → pages/blog/[slug].vue
```

Articles are stored as JS modules in `data/blog/` clusters, then imported and registered in `data/blog.js`.
