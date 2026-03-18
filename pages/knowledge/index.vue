<script setup>
import { ref, onMounted, computed } from 'vue'
import { BookOpen, Users, Clock, ArrowRight } from 'lucide-vue-next'
import { topics } from '~/data/knowledge/topics.js'
import Footer from '~/components/layout/Footer.vue'
import Header from '~/components/layout/Header.vue'

// SEO для страницы
useSeoMeta({
  title: 'База знаний Нескучный Нетворкинг — 220+ материалов по личному бренду и контенту',
  description: 'Структурированная база знаний из 220+ постов Telegram-канала «Нескучный Нетворкинг». 9 тем: контент-стратегия, личный бренд, платформы, продажи, мотивация, нетворкинг.',
  keywords: 'база знаний, личный бренд, контент-стратегия, продвижение в Telegram, блог эксперта, нетворкинг, Артем Селифанов',
  robots: 'index, follow',
  ogTitle: 'База знаний Нескучный Нетворкинг — 220+ материалов',
  ogDescription: 'Структурированная база знаний для авторов и экспертов. Найди ответ на свой вопрос.',
  ogType: 'website',
  ogUrl: 'https://artemselifanov.ru/knowledge',
  ogImage: 'https://artemselifanov.ru/reference/openGraph/knowledge.webp',
  twitterCard: 'summary_large_image',
  twitterTitle: 'База знаний Нескучный Нетворкинг',
  twitterDescription: '220+ постов → структурированные маршруты обучения',
  twitterImage: 'https://artemselifanov.ru/reference/opengraph_index.png'
})

useHead({
  link: [
    { rel: 'canonical', href: 'https://artemselifanov.ru/knowledge' }
  ]
})

// Schema.org разметка
useSchemaOrg([
  defineOrganization({
    name: 'Нескучный Нетворкинг',
    url: 'https://artemselifanov.ru/knowledge',
    description: 'База знаний для авторов и экспертов по личному бренду и контент-маркетингу'
  }),
  defineWebPage({
    '@type': 'WebPage',
    name: 'База знаний Нескучный Нетворкинг',
    description: '220+ постов Telegram-канала, структурированных по 9 темам с маршрутами обучения',
    url: 'https://artemselifanov.ru/knowledge'
  }),
  definePerson({
    name: 'Артём Селифанов',
    url: 'https://artemselifanov.ru',
    sameAs: ['https://t.me/artemselifanov'],
    jobTitle: 'Маркетолог, эксперт по личному бренду',
    description: 'Помогаю предпринимателям и экспертам развивать личный бренд через контент-маркетинг'
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

// Статистика
const stats = [
  { value: '220+', label: 'материалов', icon: BookOpen },
  { value: '9', label: 'тем', icon: Users },
  { value: '∞', label: 'Пополняется регулярно', icon: Clock }
]

// Как пользоваться
const howToUse = [
  { step: '1', title: 'Выбери тему', description: 'Найди интересующую тему в облаке выше' },
  { step: '2', title: 'Читай по порядку', description: 'Посты идут от простого к сложному' },
  { step: '3', title: 'Изучай смежные темы', description: 'Один пост может быть в нескольких темах' },
  { step: '4', title: 'Возвращайся', description: 'База пополняется новыми постами из Telegram' }
]

// Меню для хедера
const menuItems = [
  { href: '/networking', label: 'Нескучный Нетворкинг' },
  { href: '/business', label: 'Бизнес Сетка' },
  { href: '/yappie', label: 'Веб-разработка' },
  { href: '/blog', label: 'Блог' }
]
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

    <!-- Hero секция -->
    <section class="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <!-- Декоративные элементы -->
      <div class="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div class="absolute top-40 right-10 w-72 h-72 bg-violet-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div class="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-gray-900 mb-6">
          База знаний
          <span class="block bg-gradient-to-r from-purple-600 via-violet-600 to-pink-600 bg-clip-text text-transparent">
            Нескучного Нетворкинга
          </span>
        </h1>

        <p class="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8">
          220+ постов → структурированные маршруты обучения. Найди ответ на свой вопрос.
        </p>

        <p class="text-sm md:text-base text-gray-500 mb-12">
          <strong>Артем Селифанов</strong> — интернет-маркетолог · блогер · no-code разработчик
        </p>

        <!-- Статистика -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <div
            v-for="(stat, index) in stats"
            :key="index"
            class="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
          >
            <div class="flex items-center justify-center mb-3">
              <component :is="stat.icon" class="w-8 h-8 text-purple-600" />
            </div>
            <div class="text-3xl md:text-4xl font-black text-gray-900 mb-1">
              {{ stat.value }}
            </div>
            <div class="text-sm text-gray-600">
              {{ stat.label }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Облако тем -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl md:text-4xl font-black text-center text-gray-900 mb-12">
          Темы базы знаний
        </h2>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <NuxtLink
            v-for="topic in topics"
            :key="topic.slug"
            :to="`/knowledge/${topic.slug}`"
            class="group relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 overflow-hidden"
          >
            <!-- Градиентный фон при наведении -->
            <div class="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-violet-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div class="relative">
              <!-- Иконка и заголовок -->
              <div class="flex items-start gap-4 mb-4">
                <span class="text-5xl">{{ topic.icon }}</span>
                <div>
                  <h3 class="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
                    {{ topic.title }}
                  </h3>
                  <div class="inline-flex items-center gap-1.5 mt-1 px-3 py-1 bg-purple-100 rounded-full">
                    <span class="text-sm font-semibold text-purple-700">
                      {{ topic.count }} материалов
                    </span>
                  </div>
                </div>
              </div>

              <!-- Описание -->
              <p class="text-gray-600 text-sm leading-relaxed mb-6">
                {{ topic.description }}
              </p>

              <!-- Для кого -->
              <p class="text-xs text-gray-500 italic mb-6">
                {{ topic.forWhom }}
              </p>

              <!-- Кнопка -->
              <div class="flex items-center gap-2 text-purple-600 font-semibold group-hover:gap-3 transition-all">
                <span>Изучать тему</span>
                <ArrowRight class="w-4 h-4" />
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Как пользоваться -->
    <section class="py-20 bg-gradient-to-br from-purple-50 via-white to-violet-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl md:text-4xl font-black text-center text-gray-900 mb-16">
          Как пользоваться базой знаний
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div
            v-for="(item, index) in howToUse"
            :key="index"
            class="relative group"
          >
            <!-- Номер шага -->
            <div class="w-16 h-16 bg-gradient-to-br from-purple-600 to-violet-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <span class="text-2xl font-black text-white">{{ item.step }}</span>
            </div>

            <!-- Контент -->
            <h3 class="text-xl font-bold text-gray-900 mb-2">
              {{ item.title }}
            </h3>
            <p class="text-gray-600">
              {{ item.description }}
            </p>

            <!-- Линия между шагами (для десктопа) -->
            <div
              v-if="index < howToUse.length - 1"
              class="hidden lg:block absolute top-8 -right-4 w-8 h-0.5 bg-gradient-to-r from-purple-300 to-violet-300"
            ></div>
          </div>
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

<style scoped>
/* Анимация blob */
@keyframes blob {
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  33% {
    transform: translate(30px, -50px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
}

.animate-blob {
  animation: blob 7s infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}
</style>
