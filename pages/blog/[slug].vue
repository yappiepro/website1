<template>
  <div class="min-h-screen bg-white text-gray-900 overflow-x-hidden touch-pan-y">
    <nav class="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-gray-200">
      <div class="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
        <a :href="baseURL" class="text-xl font-bold text-gray-900 flex items-center gap-2">
          <span class="font-syncopate font-bold tracking-wider text-2xl">YAPPIE</span>
        </a>
        <div class="flex items-center gap-4">
          <a :href="baseURL + 'blog'" class="text-sm text-gray-500 hover:text-gray-900 transition-colors">
            Все статьи
          </a>
          <a :href="baseURL" class="text-sm text-gray-500 hover:text-gray-900 transition-colors">
            На главную
          </a>
        </div>
      </div>
    </nav>

    <article class="pt-24 pb-16 px-4 sm:px-6">
      <div class="max-w-3xl mx-auto w-full overflow-x-hidden touch-pan-y">
        <header class="mb-8 sm:mb-12">
          <div class="flex items-center gap-3 mb-4">
            <span
              v-if="article?.category"
              class="px-3 py-1 text-xs font-medium bg-violet-100 text-violet-700 rounded-full"
            >
              {{ article.category }}
            </span>
            <span class="text-sm text-gray-500">
              {{ formatDate(article?.date) }}
            </span>
          </div>

          <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            {{ article?.title }}
          </h1>

          <p class="text-lg sm:text-xl text-gray-600 leading-relaxed">
            {{ article?.description }}
          </p>
        </header>

        <img
          v-if="article?.image"
          :src="article.image"
          :alt="article.title"
          class="w-full rounded-2xl mb-8 sm:mb-12"
        />

        <div class="prose prose-lg prose-violet max-w-none" v-html="article?.content"></div>
      </div>
    </article>

    <footer class="py-8 px-4 sm:px-6 border-t border-gray-200">
      <div class="max-w-3xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <a :href="baseURL + 'blog'" class="text-sm text-violet-600 hover:text-violet-700 transition-colors">
          ← Все статьи
        </a>
        <span class="text-gray-500 text-sm">© 2026 Yappie</span>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { getArticleBySlug, formatDate } from '~/data/blog.js'

const config = useRuntimeConfig()
const baseURL = config.app.baseURL
const route = useRoute()

const slug = route.params.slug
const article = getArticleBySlug(Array.isArray(slug) ? slug[0] : slug)

if (!article) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Статья не найдена'
  })
}

useSeoMeta({
  title: article.title ? `${article.title} — Yappie` : 'Статья — Yappie',
  description: article.description || '',
  ogTitle: article.title || '',
  ogDescription: article.description || '',
  ogImage: article.image || '',
  articlePublishedTime: article.date || ''
})
</script>

<style>
/* Global touch actions for article pages */
.touch-pan-y {
  touch-action: pan-y;
  overflow-x: hidden !important;
}

/* Allow horizontal scroll for table wrappers - high specificity to override global overflow */
div.prose div.table-wrapper,
.prose div.table-wrapper,
.prose .table-wrapper {
  overflow-x: auto !important;
  overflow-y: hidden !important;
  -webkit-overflow-scrolling: touch;
  touch-action: pan-x pan-y !important;
}

.prose h2 {
  font-size: 1.5rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 0.75rem;
  margin-top: 2rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #e5e7eb;
}
.prose h3 {
  font-size: 1.25rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 0.5rem;
  margin-top: 1.5rem;
}
.prose p {
  color: #374151;
  line-height: 1.75;
  margin-bottom: 1rem;
}
.prose ul {
  margin: 1rem 0;
  margin-left: 1.5rem;
  list-style-type: disc;
}
.prose li {
  color: #374151;
  margin: 0.25rem 0;
}
.prose a {
  color: #7c3aed;
  text-decoration: none;
}
.prose a:hover {
  text-decoration: underline;
}

/* Code blocks styling */
.prose pre {
  background: #1e1e2e;
  border-radius: 0.75rem;
  padding: 1.25rem;
  margin: 1.5rem 0;
  overflow-x: auto;
  position: relative;
}

.prose pre code {
  color: #cdd6f4;
  font-family: 'JetBrains Mono', 'Fira Code', 'Consolas', 'Monaco', monospace;
  font-size: 0.875rem;
  line-height: 1.6;
  white-space: pre;
}

/* Inline code */
.prose :not(pre) > code {
  background: #f3f4f6;
  color: #7c3aed;
  padding: 0.2rem 0.4rem;
  border-radius: 0.25rem;
  font-family: 'JetBrains Mono', 'Fira Code', 'Consolas', monospace;
  font-size: 0.85em;
}

.prose strong {
  color: #111827;
  font-weight: 600;
}
.prose blockquote {
  border-left: 4px solid #7c3aed;
  background: #f9fafb;
  padding: 1rem 1.5rem;
  border-radius: 0 0.5rem 0.5rem 0;
  font-style: normal;
  color: #374151;
  margin: 1.5rem 0;
}

/* Таблицы с горизонтальным скроллом */
.prose .table-wrapper {
  overflow-x: auto !important;
  overflow-y: hidden !important;
  margin: 1.5rem 0;
  -webkit-overflow-scrolling: touch;
  touch-action: pan-x pan-y !important;
  display: block;
  width: 100%;
  position: relative;
  max-width: 100%;
}

.prose .table-wrapper::-webkit-scrollbar {
  height: 8px;
  display: block;
}

.prose .table-wrapper::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 4px;
}

.prose .table-wrapper::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 4px;
}

.prose .table-wrapper::-webkit-scrollbar-thumb:hover {
  background: #a1a1a1;
}

.prose table {
  width: 100% !important;
  max-width: none !important;
  margin: 0 !important;
  border-collapse: collapse;
  min-width: 600px;
  display: table !important;
}

.prose table thead {
  display: table-header-group;
}

.prose table tbody {
  display: table-row-group;
}

.prose table tr {
  display: table-row;
}

.prose th {
  background: #f3f4f6;
  text-align: left;
  padding: 0.75rem;
  font-weight: 600;
  color: #111827;
  border: 1px solid #e5e7eb;
  white-space: nowrap;
  display: table-cell;
}

.prose td {
  padding: 0.75rem;
  border: 1px solid #e5e7eb;
  color: #374151;
  display: table-cell;
}

/* CTA Block Styles */
.prose .cta-block {
  background: linear-gradient(135deg, #f5f3ff 0%, #ede9fe 100%);
  border: 2px solid #ddd6fe;
  border-radius: 1rem;
  padding: 1.5rem;
  margin: 2rem 0;
  text-align: center;
}

.prose .cta-block p {
  color: #374151;
  margin-bottom: 0.75rem;
}

.prose .cta-block p strong {
  font-size: 1.125rem;
  color: #111827;
  display: block;
  margin-bottom: 0.5rem;
}

.prose .cta-block p small {
  font-size: 0.875rem;
  color: #6b7280;
}

.prose .cta-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: #7c3aed;
  color: white !important;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 600;
  text-decoration: none !important;
  transition: all 0.3s ease;
}

.prose .cta-button:hover {
  background: #6d28d9;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(124, 58, 237, 0.3);
}

/* Article Navigation */
.prose .article-nav {
  background: linear-gradient(135deg, #f5f3ff 0%, #ede9fe 100%);
  border: 1px solid #ddd6fe;
  border-radius: 0.75rem;
  padding: 1.25rem 1.5rem;
  margin: 2rem 0 0 0;
}

.prose .article-nav p {
  margin: 0.5rem 0;
  color: #374151;
}

.prose .article-nav p:first-child {
  margin-top: 0;
}

.prose .article-nav p:last-child {
  margin-bottom: 0;
}

.prose .article-nav strong {
  color: #111827;
  font-weight: 600;
}

.prose .article-nav a {
  color: #7c3aed;
  text-decoration: none;
  transition: color 0.2s ease;
}

.prose .article-nav a:hover {
  color: #6d28d9;
  text-decoration: underline;
}
</style>
