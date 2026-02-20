<template>
  <div class="min-h-screen bg-white text-gray-900">
    <nav class="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-gray-200">
      <div class="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
        <a :href="baseURL" class="text-xl font-bold text-gray-900 flex items-center gap-2">
          <span class="font-syncopate font-bold tracking-wider text-2xl">YAPPIE</span>
        </a>
        <a :href="baseURL" class="text-sm text-gray-500 hover:text-gray-900 transition-colors">
          На главную
        </a>
      </div>
    </nav>

    <main class="pt-24 pb-16 px-4 sm:px-6">
      <div class="max-w-4xl mx-auto">
        <header class="mb-12">
          <h1 class="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Блог
          </h1>
          <p class="text-lg text-gray-600">
            Статьи о разработке, автоматизации и AI для бизнеса
          </p>
        </header>

        <div class="space-y-8">
          <article
            v-for="article in articles"
            :key="article.slug"
            class="group"
          >
            <a :href="baseURL + 'blog/' + article.slug" class="block">
              <div class="border border-gray-200 rounded-2xl p-6 sm:p-8 hover:border-violet-300 hover:shadow-lg transition-all duration-300">
                <div class="flex items-center gap-3 mb-4">
                  <span
                    v-if="article.category"
                    class="px-3 py-1 text-xs font-medium bg-violet-100 text-violet-700 rounded-full"
                  >
                    {{ article.category }}
                  </span>
                  <span class="text-sm text-gray-500">
                    {{ formatDate(article.date) }}
                  </span>
                </div>

                <h2 class="text-xl sm:text-2xl font-bold text-gray-900 mb-3 group-hover:text-violet-600 transition-colors">
                  {{ article.title }}
                </h2>

                <p class="text-gray-600 leading-relaxed mb-4">
                  {{ article.description }}
                </p>

                <div class="flex items-center gap-2 text-violet-600 font-medium text-sm">
                  <span>Читать статью</span>
                  <ArrowRight class="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </a>
          </article>
        </div>
      </div>
    </main>

    <footer class="py-8 px-4 sm:px-6 border-t border-gray-200">
      <div class="max-w-4xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <span class="font-syncopate font-bold text-gray-900 tracking-wider">YAPPIE</span>
        <span class="text-gray-500 text-sm">© 2026 Yappie</span>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ArrowRight } from 'lucide-vue-next'
import { articles, formatDate } from '~/data/blog.js'

const config = useRuntimeConfig()
const baseURL = config.app.baseURL

useSeoMeta({
  title: 'Блог — Yappie',
  description: 'Статьи о разработке сайтов, чат-ботов, веб-приложений и AI для бизнеса',
  ogTitle: 'Блог — Yappie',
  ogDescription: 'Статьи о разработке сайтов, чат-ботов, веб-приложений и AI для бизнеса'
})
</script>
