<template>
  <aside class="popular-articles">
    <!-- Секция: Популярное -->
    <div class="articles-section">
      <div class="section-header">
        <Icon name="fa-solid:fire" class="w-4 h-4 section-icon" />
        <span class="section-title">Популярное</span>
      </div>

      <div class="articles-list">
        <NuxtLink
          v-for="article in popularArticles"
          :key="article.slug"
          :to="`/blog/${article.slug}`"
          class="article-card"
        >
          <div class="article-badge" :class="`badge--${getClusterColor(article.cluster)}`">
            {{ getClusterName(article.cluster) }}
          </div>
          <h4 class="article-title">{{ article.title }}</h4>
          <div class="article-meta">
            <Icon name="fa-regular:eye" class="w-3.5 h-3.5 meta-icon" />
            <span class="meta-text">{{ getRandomViews(article.slug) }} просмотров</span>
          </div>
        </NuxtLink>
      </div>
    </div>

    <!-- Секция: Свежие статьи -->
    <div class="articles-section">
      <div class="section-header">
        <Icon name="fa-regular:clock" class="w-4 h-4 section-icon" />
        <span class="section-title">Свежее</span>
      </div>

      <div class="articles-list">
        <NuxtLink
          v-for="article in freshArticles"
          :key="article.slug"
          :to="`/blog/${article.slug}`"
          class="article-card article-card--compact"
        >
          <div class="article-card-header">
            <h4 class="article-title article-title--compact">{{ article.title }}</h4>
            <div class="article-badge article-badge--small" :class="`badge--${getClusterColor(article.cluster)}`">
              {{ getClusterName(article.cluster) }}
            </div>
          </div>
          <div class="article-date">
            <Icon name="fa-regular:calendar" class="w-3.5 h-3.5 meta-icon" />
            <span class="meta-text">{{ formatDate(article.date) }}</span>
          </div>
        </NuxtLink>
      </div>
    </div>

    <!-- CTA: Консультация -->
    <div class="cta-section">
      <div class="cta-content">
        <div class="cta-icon">
          <Icon name="fa-solid:lightbulb" class="w-6 h-6" />
        </div>
        <h4 class="cta-title">Нужна консультация?</h4>
        <p class="cta-description">Помогу выбрать правильное решение для вашего проекта</p>
        <a
          href="https://t.me/artemselifanov"
          target="_blank"
          rel="noopener noreferrer"
          class="cta-button"
        >
          <Icon name="fa-brands:telegram" class="w-4 h-4" />
          <span>Написать в Telegram</span>
        </a>
      </div>
    </div>
  </aside>
</template>

<script setup>
import { computed } from 'vue'
import { articles, getClusterName, getClusterColor, formatDate } from '~/data/blog.js'

const props = defineProps({
  currentSlug: {
    type: String,
    default: ''
  }
})

// Популярные статьи (исключаем текущую)
const popularArticles = computed(() => {
  // Имитация популярных по "просмотрам" - берём статьи из разных кластеров
  const allExceptCurrent = articles.filter(a => a.slug !== props.currentSlug)
  
  // Сортируем по "популярности" (можно заменить на реальную метрику)
  // Сейчас просто берём первые 5 статей с наибольшим приоритетом
  const priorityClusters = [
    'iskusstvennyy-intellekt',
    'razrabotka-saytov',
    'lichnyy-brend',
    'telegram-marketing',
    'monetizatsiya-ekspertnosti'
  ]
  
  const sorted = allExceptCurrent.sort((a, b) => {
    const aPriority = priorityClusters.indexOf(a.cluster)
    const bPriority = priorityClusters.indexOf(b.cluster)
    
    if (aPriority !== bPriority) {
      return aPriority - bPriority
    }
    
    return a.title.length - b.title.length
  })
  
  return sorted.slice(0, 5)
})

// Свежие статьи (последние добавленные)
const freshArticles = computed(() => {
  const allExceptCurrent = articles.filter(a => a.slug !== props.currentSlug)
  
  // Сортируем по дате (новые первые)
  const sorted = allExceptCurrent.sort((a, b) => {
    if (!a.date && !b.date) return 0
    if (!a.date) return 1
    if (!b.date) return -1
    return new Date(b.date) - new Date(a.date)
  })
  
  return sorted.slice(0, 4)
})

// Генерация "просмотров" на основе slug (детерминированно)
const getRandomViews = (slug) => {
  const hash = slug.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0)
  const min = 150
  const max = 2500
  return Math.floor(min + (hash % (max - min)))
}
</script>

<style scoped>
.popular-articles {
  position: fixed;
  top: 100px;
  right: 20px;
  width: 320px;
  max-height: calc(100vh - 200px);
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding-bottom: 2rem;
  z-index: 40;
}

.popular-articles::-webkit-scrollbar {
  width: 6px;
}

.popular-articles::-webkit-scrollbar-track {
  background: transparent;
}

.popular-articles::-webkit-scrollbar-thumb {
  background: #e5e7eb;
  border-radius: 3px;
}

.articles-section {
  background: white;
  border-radius: 1rem;
  border: 1px solid #e5e7eb;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.section-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 1.25rem;
  border-bottom: 1px solid #e5e7eb;
  background: #f9fafb;
}

.section-icon {
  color: #7c3aed;
}

.section-title {
  font-size: 0.875rem;
  font-weight: 700;
  color: #111827;
}

.articles-list {
  display: flex;
  flex-direction: column;
}

.article-card {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem 1.25rem;
  text-decoration: none;
  border-bottom: 1px solid #f3f4f6;
  transition: all 0.2s ease;
}

.article-card:last-child {
  border-bottom: none;
}

.article-card:hover {
  background: #f9fafb;
}

.article-card--compact {
  padding: 0.875rem 1.25rem;
}

.article-card-header {
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
}

.article-badge {
  display: inline-block;
  padding: 0.25rem 0.625rem;
  border-radius: 9999px;
  font-size: 0.6875rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.025em;
  white-space: nowrap;
  margin-bottom: 0.25rem;
}

.article-badge--small {
  font-size: 0.625rem;
  padding: 0.125rem 0.5rem;
  flex-shrink: 0;
}

.badge--violet { background: #f5f3ff; color: #7c3aed; }
.badge--cyan { background: #ecfeff; color: #0891b2; }
.badge--emerald { background: #ecfdf5; color: #059669; }
.badge--orange { background: #fff7ed; color: #ea580c; }
.badge--fuchsia { background: #fdf4ff; color: #c026d3; }
.badge--purple { background: #faf5ff; color: #9333ea; }
.badge--red { background: #fef2f2; color: #dc2626; }
.badge--teal { background: #f0fdfa; color: #14b8a6; }
.badge--blue { background: #eff6ff; color: #2563eb; }
.badge--sky { background: #f0f9ff; color: #0284c7; }
.badge--green { background: #f0fdf4; color: #16a34a; }
.badge--amber { background: #fffbeb; color: #d97706; }

.article-title {
  font-size: 0.875rem;
  font-weight: 500;
  color: #111827;
  line-height: 1.4;
  margin: 0;
}

.article-title--compact {
  font-size: 0.8125rem;
  flex: 1;
}

.article-meta,
.article-date {
  display: flex;
  align-items: center;
  gap: 0.375rem;
}

.meta-icon {
  color: #9ca3af;
}

.meta-text {
  font-size: 0.75rem;
  color: #6b7280;
}

/* CTA секция */
.cta-section {
  background: linear-gradient(135deg, #f5f3ff 0%, #ede9fe 100%);
  border-radius: 1rem;
  border: 1px solid #ddd6fe;
  padding: 1.25rem;
}

.cta-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.cta-icon {
  width: 3rem;
  height: 3rem;
  background: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.75rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.cta-icon .w-6.h-6 {
  color: #7c3aed;
}

.cta-title {
  font-size: 0.9375rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 0.375rem;
}

.cta-description {
  font-size: 0.75rem;
  color: #6b7280;
  margin-bottom: 1rem;
  line-height: 1.4;
}

.cta-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.625rem 1rem;
  background: #2563eb;
  color: white;
  border-radius: 0.5rem;
  font-size: 0.8125rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.2s ease;
  width: 100%;
  justify-content: center;
}

.cta-button:hover {
  background: #1d4ed8;
  transform: translateY(-1px);
  box-shadow: 0 4px 6px -1px rgba(37, 99, 235, 0.3);
}

/* Скрываем на экранах меньше 1440px */
@media (max-width: 1439px) {
  .popular-articles {
    display: none;
  }
}
</style>
