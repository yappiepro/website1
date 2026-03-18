<script setup>
import { ref, computed, onMounted } from 'vue'
import { ArrowLeft, ArrowRight, Calendar, Tag, Menu, X, BookOpen } from 'lucide-vue-next'
import { topics } from '~/data/knowledge/topics.js'
import postsData from '~/data/knowledge/posts-data.json'
import Footer from '~/components/layout/Footer.vue'
import BaseMobileMenu from '~/components/layout/BaseMobileMenu.vue'

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

// Посты для блока «Читай также»
const alsoReadPosts = computed(() => {
  if (!post.value?.topics?.length) return []
  
  const currentPostId = post.value.id
  const relatedPosts = []
  const seenIds = new Set([currentPostId])
  
  for (const topicSlug of post.value.topics) {
    const topic = topics.find(t => t.slug === topicSlug)
    if (!topic) continue
    
    for (const pid of topic.posts) {
      if (seenIds.has(pid)) continue
      if (relatedPosts.length >= 6) break
      
      const relatedPost = postsData.find(p => p.id === pid)
      if (relatedPost) {
        relatedPosts.push(relatedPost)
        seenIds.add(pid)
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
  description: () => {
    const text = post.value?.text || ''
    const plainText = text.replace(/<[^>]*>/g, '').replace(/&nbsp;/g, ' ').trim()
    let desc = plainText.slice(0, 160)
    const lastSpace = desc.lastIndexOf(' ')
    if (lastSpace > 0 && plainText.length > 160) {
      desc = desc.slice(0, lastSpace)
    }
    return desc + (plainText.length > 160 ? '...' : '')
  },
  keywords: () => {
    const topicKeywords = post.value?.topics?.map(t => {
      const topic = topics.find(tp => tp.slug === t)
      return topic?.title || ''
    }).filter(Boolean) || []
    return [...topicKeywords, 'база знаний', 'Нескучный Нетворкинг', 'Артём Селифанов', 'личный бренд', 'контент-маркетинг'].join(', ')
  },
  robots: 'index, follow',
  ogTitle: () => post.value?.title,
  ogDescription: () => {
    const text = post.value?.text || ''
    const plainText = text.replace(/<[^>]*>/g, '').replace(/&nbsp;/g, ' ').trim()
    return plainText.slice(0, 200) + '...'
  },
  ogType: 'article',
  ogUrl: () => `https://artemselifanov.ru/knowledge/post/${postId}`,
  ogImage: 'https://artemselifanov.ru/reference/openGraph/knowledge.webp',
  twitterCard: 'summary_large_image',
  twitterTitle: () => post.value?.title,
  twitterDescription: () => {
    const text = post.value?.text || ''
    const plainText = text.replace(/<[^>]*>/g, '').replace(/&nbsp;/g, ' ').trim()
    return plainText.slice(0, 200) + '...'
  },
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

const isMobileMenuOpen = ref(false)
const isScrolled = ref(false)

onMounted(() => {
  const handleScroll = () => {
    isScrolled.value = window.scrollY > 50
  }
  window.addEventListener('scroll', handleScroll)
  return () => window.removeEventListener('scroll', handleScroll)
})

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

// Меню для хедера
const mobileMenuItems = [
  { href: '/', label: 'Главная' },
  { href: '/networking', label: 'Нескучный Нетворкинг' },
  { href: '/business', label: 'Бизнес Сетка' },
  { href: '/yappie', label: 'Веб-разработка' },
  { href: '/blog', label: 'Блог' },
  { href: '/knowledge', label: 'База знаний' }
]
</script>

<template>
  <div class="min-h-screen bg-white">
    <!-- Навигация -->
    <nav :class="[
      'fixed left-4 right-4 z-40 transition-all duration-300 md:backdrop-blur-xl md:rounded-2xl',
      isScrolled ? 'bg-transparent md:bg-white/90 md:shadow-lg' : 'bg-white/20',
      'md:top-0 top-4'
    ]">
      <div class="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
        <div class="h-14 md:h-16 flex items-center">
          <!-- Левая зона: Логотип -->
          <div :class="[
            'transition-all duration-300',
            isScrolled ? 'hidden' : 'block md:block'
          ]">
            <a href="/" class="group flex items-center gap-3" aria-label="Главная" title="Главная">
              <img src="/reference/Vector.svg" alt="Нескучный Нетворкинг — логотип" class="h-10 w-auto" />
            </a>
          </div>

          <!-- Центральная зона: Десктопное меню -->
          <div class="hidden md:flex items-center justify-center flex-1">
            <nav class="flex items-center gap-1">
              <a href="/" class="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-white/50 rounded-lg transition-all">Главная</a>
              <a href="/networking" class="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-white/50 rounded-lg transition-all">Нескучный Нетворкинг</a>
              <a href="/business" class="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-white/50 rounded-lg transition-all">Бизнес Сетка</a>
              <a href="/yappie" class="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-white/50 rounded-lg transition-all">Веб-разработка</a>
              <a href="/blog" class="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-white/50 rounded-lg transition-all">Блог</a>
            </nav>
          </div>

          <!-- Правая зона: Кнопка -->
          <div class="hidden md:flex items-center justify-end shrink-0">
            <a href="https://t.me/artemselifanov" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white bg-[#EA6D3A] hover:bg-[#EA6D3A]/90 rounded-xl transition-all">
              <span>Связаться</span>
            </a>
          </div>

          <!-- Кнопка бургер-меню -->
          <button
            @click="isMobileMenuOpen = !isMobileMenuOpen"
            :class="[
              'md:hidden p-2 rounded-xl transition-all absolute right-4 z-50',
              isScrolled ? 'bg-white/90 hover:bg-white' : 'hover:bg-gray-100'
            ]"
            aria-label="Открыть меню"
          >
            <Menu v-if="!isMobileMenuOpen" class="w-6 h-6 text-gray-700" />
            <X v-else class="w-6 h-6 text-gray-700" />
          </button>
        </div>
      </div>
    </nav>

    <!-- Мобильное меню -->
    <BaseMobileMenu
      v-model="isMobileMenuOpen"
      :menu-items="mobileMenuItems"
      cta-link="https://t.me/artemselifanov"
      cta-text="Сообщество в Telegram"
      theme="brutal"
      :show-label="false"
      :show-arrows="false"
    />

    <!-- Хлебные крошки -->
    <nav class="pt-24 pb-6 px-4 md:px-6">
      <div class="max-w-[1400px] mx-auto">
        <ol class="flex items-center justify-center gap-2 text-xs uppercase tracking-wider text-black">
          <li>
            <NuxtLink to="/" class="text-black hover:underline font-bold">Главная</NuxtLink>
          </li>
          <li class="mx-2 text-black">/</li>
          <li>
            <NuxtLink to="/knowledge" class="text-black hover:underline font-bold">База знаний</NuxtLink>
          </li>
          <template v-if="mainTopic">
            <li class="mx-2 text-black">/</li>
            <li>
              <NuxtLink :to="`/knowledge/${mainTopic.slug}`" class="text-black hover:underline font-bold">
                {{ mainTopic.title }}
              </NuxtLink>
            </li>
          </template>
          <li class="mx-2 text-black">/</li>
          <li class="font-bold text-black truncate max-w-[200px] sm:max-w-none">
            {{ post?.title }}
          </li>
        </ol>
      </div>
    </nav>

    <!-- Контент поста -->
    <article class="pb-20 px-4 md:px-6 border-b-2 border-black">
      <div class="max-w-[900px] mx-auto">
        <!-- Заголовок и мета -->
        <header class="mb-8 pb-8 border-b-2 border-black">
          <div class="text-xs uppercase tracking-wider mb-4">
            МАТЕРИАЛ // {{ String(currentIndexInTopic + 1).padStart(2, '0') }}
          </div>
          <h1 class="text-3xl md:text-4xl lg:text-5xl font-black leading-[1.2] tracking-tight mb-6 text-black">
            {{ post?.title }}
          </h1>

          <div class="flex flex-wrap items-center gap-4">
            <div class="flex items-center gap-2 text-sm text-gray-900">
              <Calendar class="w-4 h-4" />
              <span>{{ new Date(post.date).toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' }) }}</span>
            </div>

            <!-- Теги тем -->
            <div v-if="post?.topics?.length" class="flex flex-wrap gap-2">
              <NuxtLink
                v-for="topicSlug in post.topics"
                :key="topicSlug"
                :to="`/knowledge/${topicSlug}`"
                class="inline-flex items-center gap-1.5 px-3 py-1 border border-black rounded-full text-xs font-semibold text-black hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-200"
              >
                <Tag class="w-3 h-3" />
                {{ getTopicName(topicSlug) }}
              </NuxtLink>
            </div>
          </div>
        </header>

        <!-- Текст поста -->
        <div class="prose prose-lg max-w-none mb-12">
          <div
            class="text-base md:text-lg leading-relaxed space-y-4"
            v-html="post.text"
          ></div>
        </div>

        <!-- Навигация: предыдущий / следующий пост -->
        <div class="flex flex-col sm:flex-row gap-4 mt-12 pt-8 border-t-2 border-black">
          <NuxtLink
            v-if="prevPostInTopic"
            :to="`/knowledge/post/${prevPostInTopic.id}`"
            class="group flex items-center gap-4 p-6 border-2 border-black hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-3px] hover:translate-y-[-3px] transition-all duration-200 flex-1"
          >
            <ArrowLeft class="w-5 h-5 flex-shrink-0" />
            <div class="min-w-0">
              <div class="text-xs uppercase mb-1 text-gray-900">← Предыдущий</div>
              <div class="font-bold text-black truncate">
                {{ prevPostInTopic.title }}
              </div>
            </div>
          </NuxtLink>

          <NuxtLink
            v-if="nextPostInTopic"
            :to="`/knowledge/post/${nextPostInTopic.id}`"
            class="group flex items-center gap-4 p-6 border-2 border-black hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-3px] hover:translate-y-[-3px] transition-all duration-200 flex-1"
          >
            <div class="min-w-0 text-right flex-1">
              <div class="text-xs uppercase mb-1 text-gray-900">Следующий →</div>
              <div class="font-bold text-black truncate">
                {{ nextPostInTopic.title }}
              </div>
            </div>
            <ArrowRight class="w-5 h-5 flex-shrink-0" />
          </NuxtLink>
        </div>

        <!-- Читай также -->
        <section v-if="alsoReadPosts.length" class="mt-12 pt-8 border-t-2 border-black">
          <div class="text-xs uppercase tracking-wider mb-6">ЧИТАЙТЕ ТАКЖЕ</div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <NuxtLink
              v-for="relatedPost in alsoReadPosts"
              :key="relatedPost.id"
              :to="`/knowledge/post/${relatedPost.id}`"
              class="group p-6 border-2 border-black hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-3px] hover:translate-y-[-3px] transition-all duration-200"
            >
              <div class="flex items-start gap-3 mb-3">
                <span class="text-2xl">{{ getTopicIcon(relatedPost.topics?.[0]) }}</span>
                <div class="flex items-center gap-2 text-xs">
                  <Calendar class="w-3 h-3" />
                  <span>{{ new Date(relatedPost.date).toLocaleDateString('ru-RU', { day: 'numeric', month: 'short' }) }}</span>
                </div>
              </div>
              <h3 class="text-base font-bold text-black line-clamp-2">
                {{ relatedPost.title }}
              </h3>
              <div class="flex items-center gap-1 mt-3 text-sm font-semibold text-black">
                <span>ЧИТАТЬ</span>
                <ArrowRight class="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
.prose :deep(a) {
  color: #000;
  text-decoration: underline;
  font-weight: 600;
}

.prose :deep(a:hover) {
  background-color: #000;
  color: #fff;
}

.prose :deep(p) {
  margin-bottom: 1.5em;
  line-height: 1.7;
}

.prose :deep(h3) {
  font-size: 1.25rem;
  font-weight: 700;
  margin-top: 2em;
  margin-bottom: 1em;
}

.prose :deep(ul), .prose :deep(ol) {
  margin-bottom: 1.5em;
  padding-left: 1.5em;
}

.prose :deep(li) {
  margin-bottom: 0.5em;
}

.prose :deep(blockquote) {
  border-left: 4px solid #000;
  padding-left: 1em;
  font-style: italic;
  margin: 1.5em 0;
}

.prose :deep(strong) {
  font-weight: 700;
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
