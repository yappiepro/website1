<script setup>
import { ref, computed, onMounted } from 'vue'
import { ArrowLeft, ArrowRight, Clock, Tag, Menu, X, BookOpen } from 'lucide-vue-next'
import { topics } from '~/data/knowledge/topics.js'
import postsData from '~/data/knowledge/posts-data.json'
import Footer from '~/components/layout/Footer.vue'
import BaseMobileMenu from '~/components/layout/BaseMobileMenu.vue'

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
  ogImage: 'https://artemselifanov.ru/reference/openGraph/knowledge.webp',
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
const menuItems = [
  { href: '/networking', label: 'Нескучный Нетворкинг' },
  { href: '/business', label: 'Бизнес Сетка' },
  { href: '/yappie', label: 'Веб-разработка' },
  { href: '/blog', label: 'Блог' }
]

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
        <ol class="flex items-center gap-2 text-xs uppercase tracking-wider">
          <li>
            <NuxtLink to="/" class="hover:underline">Главная</NuxtLink>
          </li>
          <li class="mx-2">/</li>
          <li>
            <NuxtLink to="/knowledge" class="hover:underline">База знаний</NuxtLink>
          </li>
          <li class="mx-2">/</li>
          <li class="font-bold">
            {{ topic?.title }}
          </li>
        </ol>
      </div>
    </nav>

    <!-- Заголовок темы -->
    <section class="pb-12 px-4 md:px-6 border-b-2 border-black">
      <div class="max-w-[1400px] mx-auto">
        <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8 pb-4 border-b-2 border-black">
          <div class="text-xs">
            <span class="uppercase tracking-wider">ID ТЕМЫ: {{ topicSlug.toUpperCase() }}</span>
            <span class="mx-3">//</span>
            <span class="uppercase tracking-wider">МАТЕРИАЛОВ: {{ topicPosts.length }}</span>
          </div>
        </div>

        <div class="grid md:grid-cols-[2fr_1fr] gap-8 md:gap-12 items-start">
          <div>
            <div class="text-xs uppercase tracking-wider mb-2">ТЕМА // {{ String(topicIndex + 1).padStart(2, '0') }}</div>
            <div class="flex items-start gap-4 mb-6">
              <span class="text-5xl">{{ topic?.icon }}</span>
              <div>
                <h1 class="text-3xl md:text-4xl lg:text-5xl font-black leading-[1.2] tracking-tight mb-4">
                  {{ topic?.title }}
                </h1>
              </div>
            </div>
            <p class="text-base md:text-lg text-gray-700 max-w-xl leading-relaxed mb-6">
              {{ topic?.description }}
            </p>
            <p class="text-sm uppercase tracking-wider">
              {{ topic?.forWhom }}
            </p>
          </div>

          <div class="md:pl-8 md:border-l-2 border-black">
            <div class="space-y-4">
              <div class="flex items-center gap-3">
                <BookOpen class="w-5 h-5 flex-shrink-0" />
                <span class="text-sm">{{ topicPosts.length }} материалов</span>
              </div>
              <div class="flex items-center gap-3">
                <Clock class="w-5 h-5 flex-shrink-0" />
                <span class="text-sm">Маршрут обучения</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Список постов -->
    <section class="py-12 md:py-20 px-4 md:px-6 border-b-2 border-black">
      <div class="max-w-[1400px] mx-auto">
        <div class="text-xs uppercase tracking-wider mb-8">МАТЕРИАЛЫ ПО ТЕМЕ</div>

        <div class="space-y-4">
          <div
            v-for="(post, index) in topicPosts"
            :key="post.id"
            class="group p-6 border-2 border-black hover:bg-black hover:text-white transition-all duration-300"
          >
            <div class="flex items-start gap-4">
              <!-- Номер поста -->
              <div class="flex-shrink-0 w-10 h-10 bg-black text-white group-hover:bg-white group-hover:text-black flex items-center justify-center font-black text-sm border-2 border-current">
                {{ String(index + 1).padStart(2, '0') }}
              </div>

              <!-- Контент -->
              <div class="flex-1 min-w-0">
                <div class="flex items-start justify-between gap-4 mb-3">
                  <h3 class="text-lg font-bold">
                    {{ post.title }}
                  </h3>
                  <div class="flex items-center gap-2 text-xs whitespace-nowrap">
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
                    class="inline-flex items-center gap-1 px-3 py-1 border border-current rounded-full text-xs font-medium"
                  >
                    <Tag class="w-3 h-3" />
                    {{ getTopicName(relatedSlug) }}
                  </NuxtLink>
                </div>

                <!-- Кнопка -->
                <NuxtLink
                  :to="`/knowledge/post/${post.id}`"
                  class="inline-flex items-center gap-2 text-sm font-semibold"
                >
                  <span>ЧИТАТЬ ПОСТ</span>
                  <ArrowRight class="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>

        <!-- Навигация между темами -->
        <div class="flex justify-between items-center mt-12 pt-8 border-t-2 border-black">
          <NuxtLink
            v-if="prevTopic"
            :to="`/knowledge/${prevTopic.slug}`"
            class="group flex items-center gap-3 px-6 py-4 border-2 border-black hover:bg-black hover:text-white transition-all"
          >
            <ArrowLeft class="w-5 h-5" />
            <div class="text-left">
              <div class="text-xs uppercase mb-0.5">Предыдущая тема</div>
              <div class="font-bold">
                {{ getTopicIcon(prevTopic.slug) }} {{ prevTopic.title }}
              </div>
            </div>
          </NuxtLink>
          <div v-else></div>

          <NuxtLink
            v-if="nextTopic"
            :to="`/knowledge/${nextTopic.slug}`"
            class="group flex items-center gap-3 px-6 py-4 border-2 border-black hover:bg-black hover:text-white transition-all"
          >
            <div class="text-right">
              <div class="text-xs uppercase mb-0.5">Следующая тема</div>
              <div class="font-bold">
                {{ getTopicIcon(nextTopic.slug) }} {{ nextTopic.title }}
              </div>
            </div>
            <ArrowRight class="w-5 h-5" />
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
