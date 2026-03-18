<script setup>
import { ref, computed, onMounted } from 'vue'
import { ArrowLeft, ArrowRight, Clock, Tag } from 'lucide-vue-next'
import { topics } from '~/data/knowledge/topics.js'
import postsData from '~/data/knowledge/posts-data.json'
import Footer from '~/components/layout/Footer.vue'
import Header from '~/components/layout/Header.vue'

const route = useRoute()
const topicSlug = route.params.slug

// Найти текущую тему
const topic = computed(() => topics.find(t => t.slug === topicSlug))
const topicIndex = computed(() => topics.findIndex(t => t.slug === topicSlug))

// Предыдущая и следующая темы
const prevTopic = computed(() => topicIndex.value > 0 ? topics[topicIndex.value - 1] : null)
const nextTopic = computed(() => topicIndex.value < topics.length - 1 ? topics[topicIndex.value + 1] : null)

// Получить данные поста по ID
function getPostById(id) {
  return postsData.find(p => p.id === id)
}

// Список постов для текущей темы с полными данными
const topicPosts = computed(() => {
  if (!topic.value) return []
  return topic.value.posts.map(postId => {
    const post = getPostById(postId)
    // Смежные темы (кроме текущей)
    const relatedTopics = post?.topics?.filter(t => t !== topicSlug) || []
    return {
      ...post,
      relatedTopics
    }
  }).filter(p => p !== undefined)
})

// SEO для страницы
useSeoMeta({
  title: () => `${topic.value?.title} — База знаний Нескучный Нетворкинг`,
  description: () => topic.value?.description,
  keywords: () => `${topic.value?.title}, база знаний, Артем Селифанов, нетворкинг, личный бренд`,
  robots: 'index, follow',
  ogTitle: () => `${topic.value?.title} — База знаний`,
  ogDescription: () => topic.value?.description,
  ogType: 'website',
  ogUrl: () => `https://artemselifanov.ru/knowledge/${topicSlug}`,
  twitterCard: 'summary_large_image',
  twitterTitle: () => topic.value?.title,
  twitterDescription: () => topic.value?.description
})

useHead({
  link: [
    { rel: 'canonical', href: `https://artemselifanov.ru/knowledge/${topicSlug}` }
  ]
})

// Schema.org разметка
useSchemaOrg([
  defineWebPage({
    '@type': 'WebPage',
    name: () => `${topic.value?.title} — База знаний Нескучный Нетворкинг`,
    description: () => topic.value?.description,
    url: `https://artemselifanov.ru/knowledge/${topicSlug}`
  }),
  definePerson({
    name: 'Артём Селифанов',
    url: 'https://artemselifanov.ru',
    sameAs: ['https://t.me/artemselifanov'],
    jobTitle: 'Маркетолог, эксперт по личному бренду'
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
      <div class="max-w-7xl mx-auto">
        <ol class="flex items-center gap-2 text-sm text-gray-500">
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
          <li class="mx-2">/</li>
          <li class="text-gray-900 font-medium">
            {{ topic?.title }}
          </li>
        </ol>
      </div>
    </nav>

    <!-- Заголовок темы -->
    <section class="pb-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <div class="flex items-start gap-4 mb-6">
          <span class="text-6xl">{{ topic?.icon }}</span>
          <div>
            <h1 class="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-3">
              {{ topic?.title }}
            </h1>
            <p class="text-lg text-gray-600 max-w-3xl mb-4">
              {{ topic?.description }}
            </p>
            <div class="flex flex-wrap items-center gap-4">
              <div class="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 rounded-full">
                <span class="text-sm font-semibold text-purple-700">
                  {{ topicPosts.length }} материалов
                </span>
              </div>
              <p class="text-sm text-gray-500 italic">
                {{ topic?.forWhom }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Список постов -->
    <section class="pb-20 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <div class="space-y-4">
          <div
            v-for="(post, index) in topicPosts"
            :key="post.id"
            class="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
          >
            <div class="flex items-start gap-4">
              <!-- Номер поста -->
              <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-600 to-violet-600 rounded-xl flex items-center justify-center font-black text-white text-lg">
                {{ index + 1 }}
              </div>

              <!-- Контент -->
              <div class="flex-1 min-w-0">
                <div class="flex items-start justify-between gap-4 mb-2">
                  <h3 class="text-lg font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
                    {{ post.title }}
                  </h3>
                  <div class="flex items-center gap-1 text-sm text-gray-500 whitespace-nowrap">
                    <Clock class="w-4 h-4" />
                    <span>{{ new Date(post.date).toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' }) }}</span>
                  </div>
                </div>

                <!-- Смежные темы -->
                <div v-if="post.relatedTopics.length" class="flex flex-wrap gap-2 mb-4">
                  <NuxtLink
                    v-for="relatedSlug in post.relatedTopics"
                    :key="relatedSlug"
                    :to="`/knowledge/${relatedSlug}`"
                    class="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 hover:bg-purple-100 rounded-full text-xs font-medium text-gray-600 hover:text-purple-700 transition-colors"
                  >
                    <Tag class="w-3 h-3" />
                    {{ getTopicName(relatedSlug) }}
                  </NuxtLink>
                </div>

                <!-- Кнопка -->
                <NuxtLink
                  :to="`/knowledge/post/${post.id}`"
                  class="inline-flex items-center gap-2 text-purple-600 font-semibold group-hover:gap-3 transition-all"
                >
                  <span>Читать пост</span>
                  <ArrowRight class="w-4 h-4" />
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>

        <!-- Навигация между темами -->
        <div class="flex justify-between items-center mt-12 pt-8 border-t border-gray-200">
          <NuxtLink
            v-if="prevTopic"
            :to="`/knowledge/${prevTopic.slug}`"
            class="group flex items-center gap-3 px-6 py-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5 border border-gray-100"
          >
            <ArrowLeft class="w-5 h-5 text-gray-400 group-hover:text-purple-600 transition-colors" />
            <div class="text-left">
              <div class="text-xs text-gray-500 mb-0.5">Предыдущая тема</div>
              <div class="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
                {{ getTopicIcon(prevTopic.slug) }} {{ prevTopic.title }}
              </div>
            </div>
          </NuxtLink>
          <div v-else></div>

          <NuxtLink
            v-if="nextTopic"
            :to="`/knowledge/${nextTopic.slug}`"
            class="group flex items-center gap-3 px-6 py-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5 border border-gray-100"
          >
            <div class="text-right">
              <div class="text-xs text-gray-500 mb-0.5">Следующая тема</div>
              <div class="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
                {{ getTopicIcon(nextTopic.slug) }} {{ nextTopic.title }}
              </div>
            </div>
            <ArrowRight class="w-5 h-5 text-gray-400 group-hover:text-purple-600 transition-colors" />
          </NuxtLink>
          <div v-else></div>
        </div>
      </div>
    </section>

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
