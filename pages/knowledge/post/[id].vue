<script setup>
import { ref, computed, onMounted } from 'vue'
import { ArrowLeft, ArrowRight, Calendar, Tag, ChevronRight } from 'lucide-vue-next'
import { topics } from '~/data/knowledge/topics.js'
import postsData from '~/data/knowledge/posts-data.json'
import Footer from '~/components/layout/Footer.vue'
import Header from '~/components/layout/Header.vue'

const route = useRoute()
const postId = parseInt(route.params.id)

// Найти текущий пост
const post = computed(() => postsData.find(p => p.id === postId))

// Если пост не найден
if (!post.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Пост не найден',
    fatal: true
  })
}

// Первая тема из списка (основная для навигации)
const mainTopic = computed(() => {
  if (!post.value?.topics?.length) return null
  return topics.find(t => t.slug === post.value.topics[0])
})

// Смежные темы
const relatedTopics = computed(() => {
  if (!post.value?.topics?.length) return []
  return post.value.topics.slice(1).map(slug => topics.find(t => t.slug === slug)).filter(t => t)
})

// Посты из той же темы для навигации
const postsInMainTopic = computed(() => {
  if (!mainTopic.value) return []
  return mainTopic.value.posts
    .map(postId => postsData.find(p => p.id === postId))
    .filter(p => p !== undefined)
})

// Индекс текущего поста в теме
const currentIndexInTopic = computed(() => {
  return postsInMainTopic.value.findIndex(p => p.id === postId)
})

// Предыдущий и следующий посты в теме
const prevPostInTopic = computed(() => {
  if (currentIndexInTopic.value > 0) {
    return postsInMainTopic.value[currentIndexInTopic.value - 1]
  }
  return null
})

const nextPostInTopic = computed(() => {
  if (currentIndexInTopic.value < postsInMainTopic.value.length - 1) {
    return postsInMainTopic.value[currentIndexInTopic.value + 1]
  }
  return null
})

// Функция для очистки текста от HTML-тегов
function stripHtml(html) {
  if (!html) return ''
  return html.replace(/<[^>]*>/g, '').replace(/&nbsp;/g, ' ').trim()
}

// Функция для генерации description (до 160 символов без тегов)
function generateDescription(text) {
  if (!text) return ''
  const plainText = stripHtml(text)
  // Берём первые 160 символов и обрезаем по слову
  let desc = plainText.slice(0, 160)
  const lastSpace = desc.lastIndexOf(' ')
  if (lastSpace > 0 && plainText.length > 160) {
    desc = desc.slice(0, lastSpace)
  }
  return desc + (plainText.length > 160 ? '...' : '')
}

// Посты для блока «Читай также» (из смежных тем, исключая текущий)
const alsoReadPosts = computed(() => {
  if (!post.value?.topics?.length) return []
  
  const currentPostId = post.value.id
  const currentTopicSlugs = new Set(post.value.topics)
  
  // Собираем посты из смежных тем
  const relatedPosts = []
  const seenIds = new Set([currentPostId])
  
  for (const topicSlug of post.value.topics) {
    const topic = topics.find(t => t.slug === topicSlug)
    if (!topic) continue
    
    for (const postId of topic.posts) {
      if (seenIds.has(postId)) continue
      if (relatedPosts.length >= 6) break
      
      const relatedPost = postsData.find(p => p.id === postId)
      if (relatedPost) {
        relatedPosts.push(relatedPost)
        seenIds.add(postId)
      }
    }
  }
  
  return relatedPosts
})

// SEO для страницы
useSeoMeta({
  title: () => {
    const topicName = mainTopic.value?.title || 'База знаний'
    return `${post.value?.title} — ${topicName} | Нескучный Нетворкинг`
  },
  description: () => generateDescription(post.value?.text),
  keywords: () => {
    const topicKeywords = post.value?.topics?.map(t => {
      const topic = topics.find(tp => tp.slug === t)
      return topic?.title || ''
    }).filter(Boolean) || []
    return [...topicKeywords, 'база знаний', 'Нескучный Нетворкинг', 'Артём Селифанов', 'личный бренд', 'контент-маркетинг'].join(', ')
  },
  robots: 'index, follow',
  ogTitle: () => post.value?.title,
  ogDescription: () => generateDescription(post.value?.text),
  ogType: 'article',
  ogUrl: () => `https://artemselifanov.ru/knowledge/post/${postId}`,
  ogImage: 'https://artemselifanov.ru/reference/openGraph/knowledge.webp',
  twitterCard: 'summary_large_image',
  twitterTitle: () => post.value?.title,
  twitterDescription: () => generateDescription(post.value?.text),
  twitterImage: 'https://artemselifanov.ru/reference/opengraph_index.png'
})

useHead({
  link: [
    { rel: 'canonical', href: `https://artemselifanov.ru/knowledge/post/${postId}` }
  ]
})

// Schema.org разметка
useSchemaOrg([
  defineArticle({
    '@type': 'Article',
    headline: () => post.value?.title,
    datePublished: () => post.value?.date,
    description: () => post.value?.text?.slice(0, 200),
    author: definePerson({
      name: 'Артём Селифанов',
      url: 'https://artemselifanov.ru',
      sameAs: ['https://t.me/artemselifanov']
    })
  }),
  defineWebPage({
    '@type': 'WebPage',
    name: () => `${post.value?.title} — База знаний`,
    url: `https://artemselifanov.ru/knowledge/post/${postId}`
  })
])

// Скролл для хедера
const isScrolled = ref(false)

onMounted(() => {
  const handleScroll = () => {
    isScrolled.value = window.scrollY > 50
  }
  window.addEventListener('scroll', handleScroll)
  return () => window.removeEventListener('scroll', handleScroll)
})

// Меню для хедера
const menuItems = [
  { href: '/networking', label: 'Нескучный Нетворкинг' },
  { href: '/business', label: 'Бизнес Сетка' },
  { href: '/yappie', label: 'Веб-разработка' },
  { href: '/blog', label: 'Блог' }
]

// Получить название темы по slug
function getTopicName(slug) {
  const t = topics.find(topic => topic.slug === slug)
  return t?.title || slug
}

// Получить иконку темы по slug
function getTopicIcon(slug) {
  const t = topics.find(topic => topic.slug === slug)
  return t?.icon || '📄'
}

// Форматирование текста (переносы строк)
function formatText(text) {
  if (!text) return ''
  return text.split('\n').map((line, i) => ({
    type: 'paragraph',
    content: line
  }))
}

// Ссылки в тексте делаем кликабельными
function linkify(text) {
  if (!text) return ''
  const urlRegex = /(https?:\/\/[^\s]+)/g
  return text.replace(urlRegex, (url) => `<a href="${url}" target="_blank" rel="noopener" class="text-purple-600 hover:underline">${url}</a>`)
}
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50">
    <!-- Header -->
    <Header
      :menu-items="menuItems"
      logo-text="Артем Селифанов"
      cta-link="https://t.me/artemselifanov"
      cta-text="Связаться"
    />

    <!-- Хлебные крошки -->
    <nav class="pt-24 pb-6 px-4 sm:px-6 lg:px-8">
      <div class="max-w-4xl mx-auto">
        <ol class="flex items-center flex-wrap gap-2 text-sm text-gray-500">
          <li>
            <NuxtLink to="/" class="hover:text-purple-600 transition-colors">
              Главная
            </NuxtLink>
          </li>
          <li class="mx-2">/</li>
          <li>
            <NuxtLink to="/knowledge" class="hover:text-purple-600 transition-colors">
              База знаний
            </NuxtLink>
          </li>
          <template v-if="mainTopic">
            <li class="mx-2">/</li>
            <li>
              <NuxtLink :to="`/knowledge/${mainTopic.slug}`" class="hover:text-purple-600 transition-colors">
                {{ mainTopic.title }}
              </NuxtLink>
            </li>
          </template>
          <li class="mx-2">/</li>
          <li class="text-gray-900 font-medium truncate max-w-[200px] sm:max-w-none">
            {{ post?.title }}
          </li>
        </ol>
      </div>
    </nav>

    <!-- Контент поста -->
    <article class="pb-20 px-4 sm:px-6 lg:px-8">
      <div class="max-w-4xl mx-auto">
        <!-- Заголовок и мета -->
        <header class="mb-8">
          <h1 class="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-6">
            {{ post?.title }}
          </h1>

          <div class="flex flex-wrap items-center gap-4 mb-6">
            <div class="flex items-center gap-2 text-sm text-gray-500">
              <Calendar class="w-4 h-4" />
              <span>{{ new Date(post.date).toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' }) }}</span>
            </div>

            <!-- Теги тем -->
            <div v-if="post?.topics?.length" class="flex flex-wrap gap-2">
              <NuxtLink
                v-for="topicSlug in post.topics"
                :key="topicSlug"
                :to="`/knowledge/${topicSlug}`"
                class="inline-flex items-center gap-1.5 px-3 py-1.5 bg-purple-100 hover:bg-purple-200 rounded-full text-xs font-semibold text-purple-700 transition-colors"
              >
                <Tag class="w-3 h-3" />
                {{ getTopicName(topicSlug) }}
              </NuxtLink>
            </div>
          </div>
        </header>

        <!-- Текст поста -->
        <div class="prose prose-lg prose-purple max-w-none mb-12">
          <div
            class="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-gray-100 text-gray-900"
            v-html="linkify(post.text)"
          ></div>
        </div>

        <!-- Навигация: предыдущий / следующий пост -->
        <div class="flex flex-col sm:flex-row gap-4 mb-16 pt-8 border-t border-gray-200">
          <NuxtLink
            v-if="prevPostInTopic"
            :to="`/knowledge/post/${prevPostInTopic.id}`"
            class="group flex items-center gap-4 p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all hover:-translate-y-0.5 border border-gray-100 flex-1"
          >
            <div class="flex-shrink-0 w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center">
              <ArrowLeft class="w-5 h-5 text-gray-400 group-hover:text-purple-600 transition-colors" />
            </div>
            <div class="min-w-0">
              <div class="text-xs text-gray-500 mb-1">← Предыдущий в теме</div>
              <div class="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors truncate">
                {{ prevPostInTopic.title }}
              </div>
            </div>
          </NuxtLink>

          <NuxtLink
            v-if="nextPostInTopic"
            :to="`/knowledge/post/${nextPostInTopic.id}`"
            class="group flex items-center gap-4 p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all hover:-translate-y-0.5 border border-gray-100 flex-1"
          >
            <div class="min-w-0 text-right flex-1">
              <div class="text-xs text-gray-500 mb-1">Следующий в теме →</div>
              <div class="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors truncate">
                {{ nextPostInTopic.title }}
              </div>
            </div>
            <div class="flex-shrink-0 w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
              <ArrowRight class="w-5 h-5 text-purple-600" />
            </div>
          </NuxtLink>
        </div>

        <!-- Читай также -->
        <section v-if="alsoReadPosts.length">
          <h2 class="text-2xl md:text-3xl font-black text-gray-900 mb-8">
            Читайте также
          </h2>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <NuxtLink
              v-for="relatedPost in alsoReadPosts"
              :key="relatedPost.id"
              :to="`/knowledge/post/${relatedPost.id}`"
              class="group p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all hover:-translate-y-1 border border-gray-100"
            >
              <div class="flex items-start gap-3 mb-3">
                <span class="text-2xl">{{ getTopicIcon(relatedPost.topics?.[0]) }}</span>
                <div class="flex items-center gap-2 text-xs text-gray-500">
                  <Calendar class="w-3 h-3" />
                  <span>{{ new Date(relatedPost.date).toLocaleDateString('ru-RU', { day: 'numeric', month: 'short' }) }}</span>
                </div>
              </div>
              <h3 class="text-base font-bold text-gray-900 group-hover:text-purple-600 transition-colors line-clamp-2">
                {{ relatedPost.title }}
              </h3>
              <div class="flex items-center gap-1 mt-3 text-purple-600 text-sm font-semibold">
                <span>Читать</span>
                <ChevronRight class="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </NuxtLink>
          </div>
        </section>
      </div>
    </article>

    <!-- Footer -->
    <Footer
      :communities="[
        { label: 'Нескучный Нетворкинг', href: '/networking' },
        { label: 'Бизнес Сетка', href: '/business' },
        { label: 'База знаний', href: '/knowledge' }
      ]"
      :contacts="[
        { label: 'Telegram', href: 'https://t.me/artemselifanov', external: true },
        { label: 'a9535487323@yandex.ru', href: 'mailto:a9535487323@yandex.ru' },
        { label: '+7-953-548-73-23', href: 'tel:+79535487323' }
      ]"
      cta-title="Готов прокачать свой блог?"
      cta-description="Запишись на консультацию — разберём твой канал и составим план продвижения"
      cta-button-text="Записаться"
      cta-link="https://t.me/artemselifanov"
    />
  </div>
</template>

<style scoped>
/* Стили для контента поста */
.prose :deep(a) {
  color: #9333ea;
  text-decoration: underline;
  font-weight: 500;
}

.prose :deep(a:hover) {
  color: #7e22ce;
}

.prose :deep(p) {
  margin-bottom: 1.5em;
  line-height: 1.7;
}

.prose :deep(p:last-child) {
  margin-bottom: 0;
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
