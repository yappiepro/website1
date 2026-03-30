<template>
  <div class="min-h-screen bg-white text-gray-900 overflow-x-hidden touch-pan-y">
    <!-- Хедер -->
    <header
      class="fixed left-4 right-4 z-40 transition-all duration-300 rounded-2xl bg-white/20 backdrop-blur-md shadow-sm md:top-0 top-4"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div class="h-14 md:h-16 flex items-center">
          <!-- Левая зона: Логотип -->
          <NuxtLink
            to="/blog"
            class="group text-sm font-semibold tracking-tight text-gray-900 transition-all duration-300 shrink-0"
          >
            Блог
          </NuxtLink>

          <!-- Центральная зона: Десктопное меню -->
          <nav
            class="hidden md:flex items-center gap-1 flex-1 justify-center transition-all duration-300"
          >
            <NuxtLink
              to="/"
              class="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-white/50 rounded-lg transition-all"
              >Главная</NuxtLink
            >
            <NuxtLink
              to="/networking"
              class="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-white/50 rounded-lg transition-all"
              >Нескучный Нетворкинг</NuxtLink
            >
            <NuxtLink
              to="/business"
              class="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-white/50 rounded-lg transition-all"
              >Бизнес Сетка</NuxtLink
            >
            <NuxtLink
              to="/yappie"
              class="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-white/50 rounded-lg transition-all"
              >Веб-разработка</NuxtLink
            >
          </nav>

          <!-- Правая зона: CTA кнопка -->
          <div class="hidden md:block shrink-0">
            <a
              href="https://t.me/artemselifanov"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white bg-gray-900/90 hover:bg-gray-900 rounded-xl transition-all backdrop-blur-sm"
            >
              <span>Связаться</span>
            </a>
          </div>

          <!-- Кнопка бургера для мобильных -->
          <button
            class="md:hidden p-2 bg-white/80 hover:bg-white rounded-xl transition-all backdrop-blur-sm absolute right-4"
            aria-label="Открыть меню"
            @click="isMenuOpen = !isMenuOpen"
          >
            <Icon name="fa-solid:bars" class="w-6 h-6 text-gray-700" />
          </button>
        </div>
      </div>
    </header>

    <!-- Мобильное меню -->
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 scale-95"
    >
      <div
        v-if="isMenuOpen"
        class="fixed inset-0 z-[100] bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 pt-20 px-6"
      >
        <div class="flex justify-between items-center mb-8">
          <span class="text-white/60 text-sm font-medium">Навигация</span>
          <button
            class="group p-3 bg-white hover:bg-gray-100 rounded-2xl transition-all backdrop-blur-sm shadow-lg"
            @click="isMenuOpen = false"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
              style="width: 24px; height: 24px"
              fill="currentColor"
              class="text-gray-900"
            >
              <path
                d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
              />
            </svg>
          </button>
        </div>

        <nav class="flex flex-col gap-3 max-w-md mx-auto">
          <!-- Заголовок меню -->
          <div class="mb-2">
            <span class="text-xs font-semibold text-white/40 uppercase tracking-wider px-2"
              >Разделы блога</span
            >
          </div>

          <!-- Фильтры блога -->
          <NuxtLink
            to="/blog#razrabotka-saytov"
            class="group relative overflow-hidden p-4 bg-white/5 hover:bg-white/10 rounded-2xl transition-all backdrop-blur-sm border border-white/10 hover:border-white/20"
            @click="isMenuOpen = false"
          >
            <div
              class="absolute inset-0 bg-gradient-to-r from-violet-600/0 via-violet-600/0 to-violet-600/0 group-hover:via-violet-600/20 group-hover:to-violet-600/20 transition-all"
            ></div>
            <div class="relative flex items-center justify-between">
              <span
                class="text-base font-medium text-white group-hover:text-violet-400 transition-colors"
                >Разработка сайтов</span
              >
              <Icon
                name="fa-solid:arrow-right"
                class="w-4 h-4 text-white/30 group-hover:text-violet-400 group-hover:translate-x-1 transition-all"
              />
            </div>
          </NuxtLink>
          <NuxtLink
            to="/blog#sozdanie-saytov"
            class="group relative overflow-hidden p-4 bg-white/5 hover:bg-white/10 rounded-2xl transition-all backdrop-blur-sm border border-white/10 hover:border-white/20"
            @click="isMenuOpen = false"
          >
            <div
              class="absolute inset-0 bg-gradient-to-r from-violet-600/0 via-violet-600/0 to-violet-600/0 group-hover:via-violet-600/20 group-hover:to-violet-600/20 transition-all"
            ></div>
            <div class="relative flex items-center justify-between">
              <span
                class="text-base font-medium text-white group-hover:text-violet-400 transition-colors"
                >Создание сайтов</span
              >
              <Icon
                name="fa-solid:arrow-right"
                class="w-4 h-4 text-white/30 group-hover:text-violet-400 group-hover:translate-x-1 transition-all"
              />
            </div>
          </NuxtLink>
          <NuxtLink
            to="/blog#mobilnye-prilozheniya"
            class="group relative overflow-hidden p-4 bg-white/5 hover:bg-white/10 rounded-2xl transition-all backdrop-blur-sm border border-white/10 hover:border-white/20"
            @click="isMenuOpen = false"
          >
            <div
              class="absolute inset-0 bg-gradient-to-r from-violet-600/0 via-violet-600/0 to-violet-600/0 group-hover:via-violet-600/20 group-hover:to-violet-600/20 transition-all"
            ></div>
            <div class="relative flex items-center justify-between">
              <span
                class="text-base font-medium text-white group-hover:text-violet-400 transition-colors"
                >Мобильные приложения</span
              >
              <Icon
                name="fa-solid:arrow-right"
                class="w-4 h-4 text-white/30 group-hover:text-violet-400 group-hover:translate-x-1 transition-all"
              />
            </div>
          </NuxtLink>
          <NuxtLink
            to="/blog#veb-razrabotka"
            class="group relative overflow-hidden p-4 bg-white/5 hover:bg-white/10 rounded-2xl transition-all backdrop-blur-sm border border-white/10 hover:border-white/20"
            @click="isMenuOpen = false"
          >
            <div
              class="absolute inset-0 bg-gradient-to-r from-violet-600/0 via-violet-600/0 to-violet-600/0 group-hover:via-violet-600/20 group-hover:to-violet-600/20 transition-all"
            ></div>
            <div class="relative flex items-center justify-between">
              <span
                class="text-base font-medium text-white group-hover:text-violet-400 transition-colors"
                >Веб-разработка</span
              >
              <Icon
                name="fa-solid:arrow-right"
                class="w-4 h-4 text-white/30 group-hover:text-violet-400 group-hover:translate-x-1 transition-all"
              />
            </div>
          </NuxtLink>
          <NuxtLink
            to="/blog#iskusstvennyy-intellekt"
            class="group relative overflow-hidden p-4 bg-white/5 hover:bg-white/10 rounded-2xl transition-all backdrop-blur-sm border border-white/10 hover:border-white/20"
            @click="isMenuOpen = false"
          >
            <div
              class="absolute inset-0 bg-gradient-to-r from-violet-600/0 via-violet-600/0 to-violet-600/0 group-hover:via-violet-600/20 group-hover:to-violet-600/20 transition-all"
            ></div>
            <div class="relative flex items-center justify-between">
              <span
                class="text-base font-medium text-white group-hover:text-violet-400 transition-colors"
                >Искусственный интеллект</span
              >
              <Icon
                name="fa-solid:arrow-right"
                class="w-4 h-4 text-white/30 group-hover:text-violet-400 group-hover:translate-x-1 transition-all"
              />
            </div>
          </NuxtLink>

          <a
            href="https://t.me/artemselifanov"
            target="_blank"
            rel="noopener noreferrer"
            class="mt-6 group relative overflow-hidden p-5 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 rounded-2xl transition-all shadow-lg shadow-blue-600/30"
          >
            <div class="flex items-center justify-center gap-3">
              <Icon name="fa-brands:telegram" class="w-5 h-5 text-white" />
              <span class="text-base font-bold text-white">Связаться в Telegram</span>
            </div>
          </a>
        </nav>

        <!-- Декоративные элементы -->
        <div class="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div
            class="absolute -top-40 -right-40 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl"
          ></div>
          <div
            class="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl"
          ></div>
        </div>
      </div>
    </Transition>

    <!-- Структура: оглавление слева | статья центр | CTA справа -->
    <div class="relative max-w-[1920px] mx-auto">
      <!-- Оглавление слева (только для десктопа) -->
      <aside class="hidden lg:block fixed left-4 top-24 bottom-4 w-[280px] overflow-y-auto z-30">
        <ArticleTableOfContents v-if="tableOfContents.length > 0" :items="tableOfContents" />
      </aside>

      <!-- Центральная колонка: Статья -->
      <article class="pt-24 pb-16 px-4 sm:px-6 lg:ml-[300px] lg:mr-[340px]">
        <div class="max-w-3xl mx-auto w-full overflow-x-hidden touch-pan-y article-content">
          <header class="mb-8 sm:mb-12">
            <!-- Хлебные крошки -->
            <div class="mb-6">
              <Breadcrumbs
                :items="[
                  { label: 'Главная', href: '/' },
                  { label: 'Блог', href: '/blog' },
                  {
                    label: article?.category || 'Статья',
                    href: article?.cluster ? `/blog?cluster=${article.cluster}` : undefined,
                  },
                ]"
              />
            </div>

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

            <h1 class="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              {{ article?.title }}
            </h1>

            <p class="text-lg sm:text-xl text-gray-600 leading-relaxed">
              {{ article?.description }}
            </p>
          </header>

          <img
            v-if="article?.image && article.image.trim()"
            :src="article.image"
            format="webp"
            quality="70"
            :alt="article.title"
            class="w-full rounded-2xl mb-8 sm:mb-12"
          />

          <div
            class="prose prose-lg prose-violet max-w-none article-content-body"
            v-html="processedContent"
          ></div>

          <!-- Блок «Читать также» -->
          <div v-if="relatedArticles.length > 0" class="mt-12 pt-8 border-t border-gray-200">
            <h2 class="text-2xl font-bold text-gray-900 mb-6">Читать также</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <NuxtLink
                v-for="related in relatedArticles"
                :key="related.slug"
                :to="`/blog/${related.slug}`"
                class="group p-4 bg-gray-50 hover:bg-gray-100 rounded-xl transition-all border border-gray-200 hover:border-violet-300"
              >
                <span class="text-xs font-medium text-violet-600 mb-2 block">
                  {{ related.category }}
                </span>
                <h3
                  class="text-base font-semibold text-gray-900 group-hover:text-violet-700 line-clamp-2"
                >
                  {{ related.title }}
                </h3>
                <p class="text-sm text-gray-500 mt-2 line-clamp-2">
                  {{ related.description }}
                </p>
              </NuxtLink>
            </div>
          </div>
        </div>
      </article>

      <!-- Правая колонка: CTA + статьи (только десктоп) -->
      <aside class="hidden lg:block fixed right-4 top-24 bottom-4 w-[320px] overflow-y-auto z-30">
        <div class="sticky top-0 space-y-4">
          <!-- Популярные статьи -->
          <div class="bg-white rounded-2xl border border-gray-200 shadow-sm p-4">
            <div class="flex items-center gap-2 mb-4 pb-3 border-b border-gray-200">
              <Icon name="fa-solid:fire" class="w-4 h-4 text-orange-500" />
              <span class="text-xs font-bold text-gray-500 uppercase tracking-wider"
                >Популярное</span
              >
            </div>
            <div class="flex flex-col gap-2">
              <NuxtLink
                v-for="post in popularArticles"
                :key="post.slug"
                :to="`/blog/${post.slug}`"
                class="group p-2 rounded-xl hover:bg-gray-50 transition-all"
              >
                <h4
                  class="text-sm font-medium text-gray-900 group-hover:text-violet-600 transition-colors line-clamp-2"
                >
                  {{ post.title }}
                </h4>
              </NuxtLink>
            </div>
          </div>

          <!-- CTA -->
          <div
            class="bg-gradient-to-br from-violet-50 to-blue-50 rounded-2xl border border-violet-200 p-6"
          >
            <div class="text-center">
              <h3 class="text-lg font-bold text-gray-900 mb-2">
                Нужна помощь в {{ article?.category?.toLowerCase() || 'проекте' }}?
              </h3>
              <p class="text-sm text-gray-600 mb-6 leading-relaxed">
                Запишитесь на консультацию — разберём вашу ситуацию и наметим план действий
              </p>
              <a
                href="https://t.me/artemselifanov"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center justify-center gap-2 w-full px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all font-medium shadow-lg shadow-blue-600/30 hover:shadow-xl hover:shadow-blue-600/40 hover:-translate-y-0.5"
              >
                <Icon name="fa-brands:telegram" class="w-5 h-5" />
                Записаться на консультацию
              </a>
              <p class="text-xs text-gray-500 mt-4">Бесплатная оценка проекта за 15 минут</p>
            </div>
          </div>
        </div>
      </aside>
    </div>

    <Footer bg-class="bg-gray-900" border-class="border-gray-800" />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { formatDate, getRelatedArticles } from '~/data/blog-meta.js'
import { loadArticleBySlug } from '~/data/blog-loaders.js'
import { articles } from '~/data/blog.js'
import ArticleTableOfContents from '~/components/blog/ArticleTableOfContents.vue'
import Footer from '~/components/layout/Footer.vue'
import { useSchemaOrg, defineArticle } from '#imports'

const route = useRoute()

const slug = route.params.slug
const resolvedSlug = Array.isArray(slug) ? slug[0] : slug
const article = await loadArticleBySlug(resolvedSlug)

// Мобильное меню
const isMenuOpen = ref(false)

// Парсинг заголовков из HTML-контента для оглавления
const tableOfContents = computed(() => {
  if (!article?.content) {
    return []
  }

  const content = article.content

  // Находим позицию каждого h2 и h3 в контенте
  const headingPositions = []

  const h2All = [...content.matchAll(/<h2>([^<]+)<\/h2>/g)]
  const h3All = [...content.matchAll(/<h3>([^<]+)<\/h3>/g)]

  h2All.forEach((m) => {
    headingPositions.push({
      index: m.index,
      type: 'h2',
      text: m[1].trim(),
      id: generateId(m[1].trim()),
    })
  })

  h3All.forEach((m) => {
    headingPositions.push({
      index: m.index,
      type: 'h3',
      text: m[1].trim(),
      id: generateId(m[1].trim()),
    })
  })

  // Сортируем по позиции
  headingPositions.sort((a, b) => a.index - b.index)

  // Строим иерархию
  const result = []
  let currentH2 = null

  headingPositions.forEach((item) => {
    if (item.type === 'h2') {
      currentH2 = {
        id: item.id,
        text: item.text,
        level: 'h2',
        children: [],
      }
      result.push(currentH2)
    } else if (item.type === 'h3' && currentH2) {
      currentH2.children.push({
        id: item.id,
        text: item.text,
        level: 'h3',
      })
    }
  })

  return result
})

// Обработанный контент с добавленными ID к заголовкам
const processedContent = computed(() => {
  if (!article?.content) {
    return ''
  }

  let content = article.content

  // Добавляем ID к h2
  content = content.replace(/<h2>([^<]+)<\/h2>/g, (match, text) => {
    const id = generateId(text.trim())
    return `<h2 id="${id}">${text}</h2>`
  })

  // Добавляем ID к h3
  content = content.replace(/<h3>([^<]+)<\/h3>/g, (match, text) => {
    const id = generateId(text.trim())
    return `<h3 id="${id}">${text}</h3>`
  })

  return content
})

// Генерация ID из текста
const generateId = (text) => {
  return text
    .toLowerCase()
    .replace(/[^а-яa-z0-9\s-]/gi, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim()
}

// Связанные статьи
const relatedArticles = computed(() => {
  if (!article) {
    return []
  }
  return getRelatedArticles(article.slug, article.cluster, 3)
})

// Популярные статьи (3 статьи, исключая текущую)
const popularArticles = computed(() => {
  const filtered = articles.filter((a) => a.slug !== article?.slug)
  const shuffled = [...filtered].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, 3)
})

if (!article) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Статья не найдена',
  })
}

// SEO для статьи
useSeoMeta({
  title: article.title ? `${article.title} — Yappie` : 'Статья — Yappie',
  description: article.description || '',
  keywords: article.category ? `${article.category}, ${article.cluster}` : '',
  author: 'Артём Селифанов',
  robots: 'index, follow',
  ogTitle: article.title || '',
  ogDescription: article.description || '',
  ogType: 'article',
  ogImage: article.image || 'https://artemselifanov.ru/reference/openGraph/blog.webp',
  articlePublishedTime: article.date || '',
  articleSection: article.category || '',
  twitterCard: 'summary_large_image',
  twitterTitle: article.title || '',
  twitterDescription: article.description || '',
})

useHead({
  link: [{ rel: 'canonical', href: `https://artemselifanov.ru/blog/${article.slug}` }],
})

// Schema.org для статьи
useSchemaOrg(
  [
    defineArticle({
      '@type': 'Article',
      headline: article.title,
      description: article.description,
      datePublished: article.date,
      dateModified: article.date,
      author: {
        '@type': 'Person',
        name: 'Артём Селифанов',
        url: 'https://artemselifanov.ru',
      },
      publisher: {
        '@type': 'Organization',
        name: 'Yappie',
        logo: {
          '@type': 'ImageObject',
          url: 'https://artemselifanov.ru/logo.png',
        },
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': `https://artemselifanov.ru/blog/${article.slug}`,
      },
      articleBody: article.content?.replace(/<[^>]*>/g, '').slice(0, 500) || '',
    }),
  ].filter(Boolean)
)
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

/* Anchor links on headings */
.prose h2,
.prose h3 {
  scroll-margin-top: 100px;
  position: relative;
}

.prose h2:hover .anchor-link,
.prose h3:hover .anchor-link {
  opacity: 1;
}

.anchor-link {
  position: absolute;
  left: -1.5rem;
  top: 50%;
  transform: translateY(-50%);
  color: #7c3aed;
  text-decoration: none;
  opacity: 0;
  transition: opacity 0.2s ease;
  font-size: 0.875rem;
}

.anchor-link:hover {
  color: #6d28d9;
}

/* Article content body styles */
.article-content-body h2 {
  font-size: 1.5rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 0.75rem;
  margin-top: 2rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #e5e7eb;
}

.article-content-body h3 {
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
  background: #1e1e2e !important;
  border-radius: 0.75rem;
  padding: 1.25rem;
  margin: 1.5rem 0;
  overflow-x: auto;
  position: relative;
  display: block;
}

.prose pre code {
  color: #cdd6f4 !important;
  font-family: 'JetBrains Mono', 'Fira Code', 'Consolas', 'Monaco', monospace;
  font-size: 0.875rem;
  line-height: 1.7;
  white-space: pre-wrap;
  word-wrap: break-word;
  display: block;
  background: transparent !important;
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

/* Якоря кластеров для навигации */
.article-cluster-anchor {
  position: absolute;
  top: -100px;
  left: 0;
}
</style>
