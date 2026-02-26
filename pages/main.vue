<template>
  <div class="min-h-screen bg-[#0a0a0f] text-white">
    <!-- Навигация -->
    <nav class="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0f]/80 backdrop-blur-2xl border-b border-white/[0.08]">
      <div class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="/website1/main" class="text-xl font-semibold text-white flex items-center gap-2">
          <span class="font-syncopate font-bold text-white tracking-wider text-2xl">ARTEM SELIFANOV</span>
        </a>
        
        <div class="hidden md:flex items-center gap-8">
          <a href="#about" class="text-sm text-gray-400 hover:text-white transition-all">Обо мне</a>
          <a href="#projects" class="text-sm text-gray-400 hover:text-white transition-all">Проекты</a>
          <a href="#blog" class="text-sm text-gray-400 hover:text-white transition-all">Блог</a>
          <a href="https://t.me/artemselifanov" target="_blank" class="inline-flex items-center justify-center rounded-full font-medium px-4 py-2 text-xs bg-white text-black hover:bg-gray-100 shadow-lg shadow-white/10 hover:shadow-white/20 transition-all">Связаться</a>
        </div>
        
        <button
          @click="isMobileMenuOpen = !isMobileMenuOpen"
          class="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
          aria-label="Открыть меню"
        >
          <Menu v-if="!isMobileMenuOpen" class="w-6 h-6" />
          <X v-else class="w-6 h-6" />
        </button>
      </div>
    </nav>

    <!-- Мобильное меню -->
    <div v-if="isMobileMenuOpen" class="fixed inset-0 z-[100] md:hidden bg-[#0a0a0f] flex flex-col pt-20 px-6">
      <nav class="flex flex-col gap-4">
        <a
          v-for="item in mobileMenuItems"
          :key="item.label"
          :href="item.href"
          class="text-lg text-gray-300 hover:text-white py-3 border-b border-white/10"
          @click="isMobileMenuOpen = false"
        >
          {{ item.label }}
        </a>
      </nav>
    </div>

    <!-- Hero секция - Профиль -->
    <section id="about" class="pt-32 pb-16 px-6">
      <div class="max-w-4xl mx-auto">
        <div class="flex flex-col md:flex-row items-start gap-8">
          <!-- Фотография -->
          <div class="profile-photo-wrapper">
            <div class="profile-photo">
              <img src="/website1/reference/main.jpg" alt="Артём Селифанов" class="profile-img" />
            </div>
          </div>
          
          <!-- Информация -->
          <div class="flex-1">
            <div class="flex items-center gap-2 mb-2">
              <h1 class="text-4xl md:text-5xl font-bold text-white">Артём Селифанов</h1>
              <span class="verified-badge" title="Верифицированный разработчик">✓</span>
            </div>
            
            <p class="text-xl text-violet-400 mb-4">Веб-разработчик • Создатель AI-решений</p>
            
            <div class="flex items-center gap-2 text-gray-400 mb-6">
              <span>📍 Москва, Россия</span>
              <span>•</span>
              <a href="https://artemselifanov.ru" class="text-violet-400 hover:text-violet-300">artemselifanov.ru</a>
            </div>
            
            <p class="text-gray-300 text-lg leading-relaxed mb-8 max-w-2xl">
              Разрабатываю сайты, мобильные приложения и AI-решения для бизнеса. 
              Создаю цифровые продукты, которые решают реальные задачи и приносят результат.
            </p>
            
            <!-- Кнопки действий -->
            <div class="flex flex-wrap gap-4">
              <a
                href="https://t.me/artemselifanov"
                target="_blank"
                class="inline-flex items-center gap-2 px-6 py-3 bg-violet-600 hover:bg-violet-700 text-white font-medium rounded-xl transition-all shadow-lg shadow-violet-600/25 hover:shadow-violet-600/40"
              >
                <Send class="w-5 h-5" />
                Написать в Telegram
              </a>
              
              <a
                href="mailto:artemselifanov23@gmail.com"
                class="inline-flex items-center gap-2 px-6 py-3 bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-white font-medium rounded-xl transition-all"
              >
                <Mail class="w-5 h-5" />
                Отправить email
              </a>
              
              <a
                href="https://github.com/artemselifanov"
                target="_blank"
                class="inline-flex items-center gap-2 px-6 py-3 bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-white font-medium rounded-xl transition-all"
              >
                <span class="text-lg">GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Навигационные карточки (Bento Grid) -->
    <section id="projects" class="py-16 px-6">
      <div class="max-w-7xl mx-auto">
        <h2 class="text-3xl font-bold text-white mb-8">Разделы</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <!-- BLOG - большая карточка -->
          <a
            href="/website1/blog"
            class="card card-blog group"
          >
            <div class="card-icon">
              <FileText class="w-8 h-8" />
            </div>
            <div class="card-content">
              <h3 class="card-title">Блог</h3>
              <p class="card-description">Статьи о разработке</p>
              <div class="card-stats">
                <span class="stat-badge">{{ articles.length }} статей</span>
              </div>
              <div class="card-preview">
                <p class="preview-text">Последние публикации о мобильных приложениях, веб-разработке и AI</p>
              </div>
            </div>
            <div class="card-arrow">
              <ArrowRight class="w-6 h-6" />
            </div>
          </a>
          
          <!-- DEMO - маленькая карточка -->
          <a
            href="/website1/demo"
            class="card card-demo group"
          >
            <div class="card-icon">
              <Rocket class="w-8 h-8" />
            </div>
            <div class="card-content">
              <h3 class="card-title">Проекты</h3>
              <p class="card-description">Демо работ</p>
              <div class="card-stats">
                <span class="stat-badge">5 проектов</span>
              </div>
            </div>
            <div class="card-arrow">
              <ArrowRight class="w-6 h-6" />
            </div>
          </a>
          
          <!-- TEST - маленькая карточка -->
          <a
            href="/website1/test"
            class="card card-test group"
          >
            <div class="card-icon">
              <FlaskConical class="w-8 h-8" />
            </div>
            <div class="card-content">
              <h3 class="card-title">Тесты</h3>
              <p class="card-description">Эксперименты</p>
              <div class="card-stats">
                <span class="stat-badge">Интерактивы</span>
              </div>
            </div>
            <div class="card-arrow">
              <ArrowRight class="w-6 h-6" />
            </div>
          </a>
          
          <!-- INDEX - большая карточка -->
          <a
            href="/website1/"
            class="card card-index group md:col-span-2"
          >
            <div class="card-icon">
              <User class="w-8 h-8" />
            </div>
            <div class="card-content">
              <h3 class="card-title">Обо мне</h3>
              <p class="card-description">Услуги и опыт работы</p>
              <div class="card-cta">
                <span class="cta-text">Познакомиться ближе</span>
                <ArrowRight class="w-5 h-5" />
              </div>
            </div>
            <div class="card-arrow">
              <ArrowRight class="w-6 h-6" />
            </div>
          </a>
          
          <!-- YAPPIE - большая карточка -->
          <a
            href="/website1/blog/razrabotka-veb-prilozheniy"
            class="card card-yappie group md:col-span-3"
          >
            <div class="card-icon">
              <Monitor class="w-8 h-8" />
            </div>
            <div class="card-content">
              <h3 class="card-title">YAPPIE — Веб-разработка</h3>
              <p class="card-description">Сайты и веб-приложения под ключ для вашего бизнеса</p>
              <div class="card-cta">
                <span class="cta-text">Заказать проект</span>
                <ArrowRight class="w-5 h-5" />
              </div>
            </div>
            <div class="card-arrow">
              <ArrowRight class="w-6 h-6" />
            </div>
          </a>
        </div>
      </div>
    </section>

    <!-- Лента блога -->
    <section id="blog" class="py-16 px-6 bg-white/[0.02]">
      <div class="max-w-4xl mx-auto">
        <div class="flex justify-between items-center mb-8">
          <h2 class="text-3xl font-bold text-white">Блог • Последние статьи</h2>
          <a href="/website1/blog" class="text-violet-400 hover:text-violet-300 font-medium inline-flex items-center gap-2 transition-all group">
            Все статьи
            <ArrowRight class="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
        
        <div class="space-y-6">
          <article
            v-for="article in recentArticles"
            :key="article.slug"
            class="blog-post-card group"
          >
            <div class="blog-post-header">
              <span class="blog-post-category">
                <component :is="getCategoryIcon(article.cluster)" class="w-4 h-4" />
                {{ article.category }}
              </span>
              <span class="blog-post-time">
                <Clock class="w-4 h-4" />
                {{ estimateReadingTime(article.content) }} мин
              </span>
            </div>
            
            <h3 class="blog-post-title group-hover:text-violet-400 transition-colors">
              {{ article.title }}
            </h3>
            
            <p class="blog-post-description">
              {{ article.description }}
            </p>
            
            <div class="blog-post-footer">
              <span class="blog-post-date">{{ formatDateString(article.date) }}</span>
              <a :href="`/website1/blog/${article.slug}`" class="blog-post-link group/link">
                Читать статью
                <ArrowRight class="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- Футер -->
    <footer class="py-12 px-6 border-t border-white/10">
      <div class="max-w-7xl mx-auto">
        <div class="flex flex-col md:flex-row justify-between items-center gap-6">
          <div class="text-center md:text-left">
            <p class="text-white font-bold text-lg mb-1">Артём Селифанов</p>
            <p class="text-gray-500 text-sm">© 2026 Все права защищены</p>
          </div>
          
          <div class="flex gap-6">
            <a href="https://t.me/artemselifanov" target="_blank" class="text-gray-400 hover:text-white transition-all">
              Telegram
            </a>
            <a href="https://github.com/artemselifanov" target="_blank" class="text-gray-400 hover:text-white transition-all">
              GitHub
            </a>
            <a href="mailto:artemselifanov23@gmail.com" class="text-gray-400 hover:text-white transition-all">
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { articles } from '~/data/blog.js'
import {
  Menu, X, Send, Mail, ArrowRight, FileText, Rocket,
  FlaskConical, User, Monitor, Clock, Smartphone, Code2, Globe, Bot
} from 'lucide-vue-next'

const config = useRuntimeConfig()
const baseURL = config.app.baseURL

const isMobileMenuOpen = ref(false)

// Пункты мобильного меню
const mobileMenuItems = [
  { href: '#about', label: 'Обо мне' },
  { href: '#projects', label: 'Проекты' },
  { href: '#blog', label: 'Блог' },
  { href: '/website1/', label: 'Услуги' },
  { href: 'https://t.me/artemselifanov', label: 'Связаться' }
]

// Сортируем статьи по дате (новые первыми)
const sortedArticles = computed(() => {
  return [...articles].sort((a, b) => new Date(b.date) - new Date(a.date))
})

// Последние 6 статей для ленты
const recentArticles = computed(() => {
  return sortedArticles.value.slice(0, 6)
})

// Форматирование даты
function formatDateString(dateString) {
  if (!dateString) return ''
  const date = new Date(dateString)
  return date.toLocaleDateString('ru-RU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })
}

// Оценка времени чтения (примерно 200 слов в минуту)
function estimateReadingTime(content) {
  if (!content) return 1
  const words = content.replace(/<[^>]*>/g, '').split(/\s+/).length
  return Math.ceil(words / 200)
}

// Иконки для категорий
function getCategoryIcon(cluster) {
  const iconMap = {
    'mobilnye-prilozheniya': Smartphone,
    'veb-razrabotka': Monitor,
    'razrabotka-saytov': Code2,
    'sozdanie-saytov': Globe,
    'iskusstvennyy-intellekt': Bot
  }
  return iconMap[cluster] || FileText
}
</script>

<style scoped>
/* Профиль */
.profile-photo-wrapper {
  flex-shrink: 0;
}

.profile-photo {
  width: 280px;
  height: 280px;
  border-radius: 50%;
  overflow: hidden;
  border: 4px solid rgba(139, 92, 246, 0.3);
  box-shadow: 0 0 60px rgba(139, 92, 246, 0.2);
  transition: all 0.3s ease;
}

.profile-photo:hover {
  border-color: rgba(139, 92, 246, 0.6);
  box-shadow: 0 0 80px rgba(139, 92, 246, 0.3);
}

.profile-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.verified-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  background: linear-gradient(135deg, #60a5fa, #3b82f6);
  color: white;
  border-radius: 50%;
  font-size: 16px;
  font-weight: bold;
}

/* Карточки */
.card {
  position: relative;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 1.5rem;
  padding: 2rem;
  transition: all 0.3s ease;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, transparent, rgba(139, 92, 246, 0.5), transparent);
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.card:hover {
  transform: translateY(-8px);
  border-color: rgba(139, 92, 246, 0.3);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
}

.card:hover::before {
  transform: scaleX(1);
}

.card-icon {
  width: 64px;
  height: 64px;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.card-blog .card-icon {
  background: linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(139, 92, 246, 0.1));
  color: #a78bfa;
}

.card-demo .card-icon {
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(59, 130, 246, 0.1));
  color: #60a5fa;
}

.card-test .card-icon {
  background: linear-gradient(135deg, rgba(34, 197, 94, 0.2), rgba(34, 197, 94, 0.1));
  color: #4ade80;
}

.card-index .card-icon {
  background: linear-gradient(135deg, rgba(236, 72, 153, 0.2), rgba(236, 72, 153, 0.1));
  color: #f472b6;
}

.card-yappie .card-icon {
  background: linear-gradient(135deg, rgba(139, 92, 246, 0.3), rgba(236, 72, 153, 0.2));
  color: #c084fc;
}

.card:hover .card-icon {
  transform: scale(1.1) rotate(5deg);
}

.card-content {
  flex: 1;
}

.card-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
  margin-bottom: 0.5rem;
}

.card-description {
  color: #9ca3af;
  font-size: 0.95rem;
  line-height: 1.5;
}

.card-stats {
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;
}

.stat-badge {
  display: inline-block;
  padding: 0.375rem 0.75rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 9999px;
  font-size: 0.875rem;
  color: #d1d5db;
}

.card-preview {
  margin-top: 1rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.02);
  border-radius: 0.75rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.preview-text {
  color: #9ca3af;
  font-size: 0.875rem;
  line-height: 1.5;
}

.card-cta {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1.5rem;
  padding: 0.75rem 1.25rem;
  background: rgba(139, 92, 246, 0.1);
  border: 1px solid rgba(139, 92, 246, 0.3);
  border-radius: 0.75rem;
  color: #c084fc;
  font-weight: 600;
  font-size: 0.95rem;
  transition: all 0.3s ease;
}

.card:hover .card-cta {
  background: rgba(139, 92, 246, 0.2);
  border-color: rgba(139, 92, 246, 0.5);
}

.card-arrow {
  position: absolute;
  top: 2rem;
  right: 2rem;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #9ca3af;
  opacity: 0;
  transform: translateX(-10px);
  transition: all 0.3s ease;
}

.card:hover .card-arrow {
  opacity: 1;
  transform: translateX(0);
  background: rgba(139, 92, 246, 0.2);
  color: #c084fc;
}

/* Карточки блога */
.blog-post-card {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 1.25rem;
  padding: 1.5rem;
  transition: all 0.3s ease;
}

.blog-post-card:hover {
  background: rgba(255, 255, 255, 0.03);
  border-color: rgba(139, 92, 246, 0.3);
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3);
}

.blog-post-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.blog-post-category {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.375rem 0.75rem;
  background: rgba(139, 92, 246, 0.1);
  border: 1px solid rgba(139, 92, 246, 0.2);
  border-radius: 9999px;
  font-size: 0.875rem;
  color: #c084fc;
  font-weight: 500;
}

.blog-post-time {
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  font-size: 0.875rem;
  color: #6b7280;
}

.blog-post-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: white;
  margin-bottom: 0.75rem;
  line-height: 1.4;
}

.blog-post-description {
  color: #9ca3af;
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 1rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.blog-post-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
}

.blog-post-date {
  font-size: 0.875rem;
  color: #6b7280;
}

.blog-post-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: #a78bfa;
  font-weight: 600;
  font-size: 0.95rem;
  transition: all 0.3s ease;
}

.blog-post-link:hover {
  color: #c084fc;
}

/* Адаптив */
@media (max-width: 768px) {
  .profile-photo {
    width: 200px;
    height: 200px;
  }
  
  .card {
    padding: 1.5rem;
  }
  
  .card-title {
    font-size: 1.25rem;
  }
  
  .blog-post-card {
    padding: 1.25rem;
  }
  
  .blog-post-title {
    font-size: 1.125rem;
  }
}
</style>
