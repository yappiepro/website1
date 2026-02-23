# Design System

## Color Palette

Primary colors are defined via Tailwind CSS. Check `assets/css/tailwind.css` for custom variables.

## Typography

- **Font Family:** System fonts + custom fonts in `public/fonts/`
- **Language:** Russian (ru-RU)

## Layout Patterns

### Section Structure

```vue
<section id="section-id" class="py-20 px-4">
  <div class="max-w-6xl mx-auto">
    <!-- Badge (optional) -->
    <span class="badge">Label</span>
    
    <!-- Section Header -->
    <h2 class="text-3xl font-bold">Title</h2>
    <p class="text-muted">Description</p>
    
    <!-- Content -->
  </div>
</section>
```

### Bento Grid (Services Section)

Used for services showcase - mixed large and small cards.

### Card Pattern

```vue
<div class="card p-6 rounded-xl border bg-card">
  <icon class="w-10 h-10" />
  <h3 class="font-semibold">Title</h3>
  <p class="text-muted">Description</p>
</div>
```

## Navigation

**Fixed navigation** with:
- Logo (left)
- Menu links (center)
- CTA button (right)

**Menu Items:**
- Проблемы → #problems
- Услуги → #services
- Почему мы → #why-us
- Кейсы → #portfolio
- Блог → /blog
- FAQ → #faq

**CTA:** "Связаться" → Telegram link

## Icons

Using **Lucide Vue Next** for icons.

```vue
<script setup>
import { IconName } from 'lucide-vue-next'
</script>

<template>
  <IconName class="w-6 h-6" />
</template>
```

## Animations

- **Hero:** Three.js neural network animation (BrainNetworkHero.vue)
- **Scroll-to-top:** Floating button, appears on scroll
- **FAQ:** Accordion expand/collapse

## Responsive Design

Mobile-first approach with Tailwind breakpoints:
- `sm:` - 640px
- `md:` - 768px
- `lg:` - 1024px
- `xl:` - 1280px

## Styling Guidelines

1. Use Tailwind utility classes
2. Follow existing patterns in index.vue
3. Use `clsx()` and `tailwind-merge` for conditional classes
4. Use `class-variance-authority` for component variants

## Reference Images

Design references stored in `reference/` folder.
