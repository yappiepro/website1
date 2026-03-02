<template>
  <div class="h-screen w-screen bg-[#FAFAF9] text-[#0A0A0A] overflow-hidden">

    <!-- Хедер -->
    <header class="h-[50px] flex-shrink-0 px-4 sm:px-6 flex items-center border-b border-black/10">
      <div class="flex justify-between items-center w-full">
        <a href="/website1/" class="text-sm font-bold tracking-wide">Артем Селифанов</a>
        <button
          @click="isMenuOpen = !isMenuOpen"
          class="flex items-center gap-2 text-xs font-medium hover:text-orange-600 transition-colors"
        >
          <span>МЕНЮ</span>
          <Menu class="w-4 h-4" />
        </button>
      </div>
    </header>

    <!-- Основной контент - 3 колонки (desktop) -->
    <main class="flex-1 flex overflow-hidden">

      <!-- Левая колонка: Текст и меню (скрыта на мобильных) -->
      <div class="hidden md:flex w-1/3 flex-col px-6 py-6 overflow-y-auto border-r border-black/10 animate-slide-left-init">
        
        <!-- Заголовок -->
        <div class="mb-6">
          <h1 class="text-2xl sm:text-3xl font-bold leading-[0.9] tracking-tight">
            Решения для бизнеса<br />
            от блога и личного бренда<br />
            до сайта и приложения
          </h1>
        </div>

        <!-- Текст от автора -->
        <div class="mb-6 overflow-hidden">
          <div class="marquee-container">
            <div class="marquee-track marquee-top">
              <span class="marquee-tag">Сайты</span>
              <span class="marquee-tag">Блог</span>
              <span class="marquee-tag">Чат боты</span>
              <span class="marquee-tag">Консультации</span>
              <span class="marquee-tag">Веб приложения</span>
              <span class="marquee-tag">Телеграм</span>
              <span class="marquee-tag">Обучение</span>
              <span class="marquee-tag">Мастермайнд</span>
              <span class="marquee-tag">Бизнес разборы</span>
              <span class="marquee-tag">Сайты</span>
              <span class="marquee-tag">Блог</span>
              <span class="marquee-tag">Чат боты</span>
              <span class="marquee-tag">Консультации</span>
              <span class="marquee-tag">Веб приложения</span>
              <span class="marquee-tag">Телеграм</span>
              <span class="marquee-tag">Обучение</span>
              <span class="marquee-tag">Мастермайнд</span>
              <span class="marquee-tag">Бизнес разборы</span>
              <span class="marquee-tag">Сайты</span>
              <span class="marquee-tag">Блог</span>
              <span class="marquee-tag">Чат боты</span>
              <span class="marquee-tag">Консультации</span>
              <span class="marquee-tag">Веб приложения</span>
              <span class="marquee-tag">Телеграм</span>
              <span class="marquee-tag">Обучение</span>
              <span class="marquee-tag">Мастермайнд</span>
              <span class="marquee-tag">Бизнес разборы</span>
            </div>
            <div class="marquee-track marquee-bottom">
              <span class="marquee-tag">Бизнес разборы</span>
              <span class="marquee-tag">Телеграм</span>
              <span class="marquee-tag">Веб приложения</span>
              <span class="marquee-tag">Блог</span>
              <span class="marquee-tag">Мастермайнд</span>
              <span class="marquee-tag">Сайты</span>
              <span class="marquee-tag">Консультации</span>
              <span class="marquee-tag">Чат боты</span>
              <span class="marquee-tag">Обучение</span>
              <span class="marquee-tag">Бизнес разборы</span>
              <span class="marquee-tag">Телеграм</span>
              <span class="marquee-tag">Веб приложения</span>
              <span class="marquee-tag">Блог</span>
              <span class="marquee-tag">Мастермайнд</span>
              <span class="marquee-tag">Сайты</span>
              <span class="marquee-tag">Консультации</span>
              <span class="marquee-tag">Чат боты</span>
              <span class="marquee-tag">Обучение</span>
              <span class="marquee-tag">Бизнес разборы</span>
              <span class="marquee-tag">Телеграм</span>
              <span class="marquee-tag">Веб приложения</span>
              <span class="marquee-tag">Блог</span>
              <span class="marquee-tag">Мастермайнд</span>
              <span class="marquee-tag">Сайты</span>
              <span class="marquee-tag">Консультации</span>
              <span class="marquee-tag">Чат боты</span>
              <span class="marquee-tag">Обучение</span>
            </div>
          </div>
        </div>

        <!-- Навигация -->
        <nav class="flex flex-col gap-3 mb-4">
          <a
            href="/website1/networking"
            class="group flex items-center justify-between py-2 border-b border-black/10 hover:border-black transition-all"
          >
            <div class="flex items-center gap-3">
              <span class="text-xs font-mono text-gray-400">01</span>
              <span class="text-sm font-medium group-hover:translate-x-2 transition-transform">Нескучный нетворкинг</span>
            </div>
            <ArrowRight class="w-4 h-4 text-gray-300 group-hover:text-black transition-colors" />
          </a>

          <a
            href="/website1/main3"
            class="group flex items-center justify-between py-2 border-b border-black/10 hover:border-black transition-all"
          >
            <div class="flex items-center gap-3">
              <span class="text-xs font-mono text-gray-400">02</span>
              <span class="text-sm font-medium group-hover:translate-x-2 transition-transform">Бизнес консалтинг</span>
            </div>
            <ArrowRight class="w-4 h-4 text-gray-300 group-hover:text-black transition-colors" />
          </a>

          <a
            href="/website1/yappie"
            class="group flex items-center justify-between py-2 border-b border-black/10 hover:border-black transition-all"
          >
            <div class="flex items-center gap-3">
              <span class="text-xs font-mono text-gray-400">03</span>
              <span class="text-sm font-medium group-hover:translate-x-2 transition-transform">Веб-разработка и автоматизация</span>
            </div>
            <ArrowRight class="w-4 h-4 text-gray-300 group-hover:text-black transition-colors" />
          </a>

          <a
            href="/website1/blog"
            class="group flex items-center justify-between py-2 border-b border-black/10 hover:border-black transition-all"
          >
            <div class="flex items-center gap-3">
              <span class="text-xs font-mono text-gray-400">04</span>
              <span class="text-sm font-medium group-hover:translate-x-2 transition-transform">Блог</span>
            </div>
            <ArrowRight class="w-4 h-4 text-gray-300 group-hover:text-black transition-colors" />
          </a>

          <a
            href="/website1/study"
            class="group flex items-center justify-between py-2 border-b border-black/10 hover:border-black transition-all"
          >
            <div class="flex items-center gap-3">
              <span class="text-xs font-mono text-gray-400">05</span>
              <span class="text-sm font-medium group-hover:translate-x-2 transition-transform">Обучение блогингу</span>
            </div>
            <ArrowRight class="w-4 h-4 text-gray-300 group-hover:text-black transition-colors" />
          </a>
        </nav>

        <!-- Соцсети -->
        <div class="mb-6 flex items-center gap-2">
          <a
            href="https://t.me/artemselifanov"
            target="_blank"
            class="w-8 h-8 flex items-center justify-center border border-black/10 hover:bg-black hover:text-white transition-all"
            aria-label="Telegram"
          >
            <Send class="w-3.5 h-3.5" />
          </a>
          <a
            href="https://tenchat.ru"
            target="_blank"
            class="w-8 h-8 flex items-center justify-center border border-black/10 hover:bg-black hover:text-white transition-all"
            aria-label="TenChat"
          >
            <Users class="w-3.5 h-3.5" />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            class="w-8 h-8 flex items-center justify-center border border-black/10 hover:bg-black hover:text-white transition-all"
            aria-label="YouTube"
          >
            <Youtube class="w-3.5 h-3.5" />
          </a>
          <a
            href="https://dzen.ru"
            target="_blank"
            class="w-8 h-8 flex items-center justify-center border border-black/10 hover:bg-black hover:text-white transition-all"
            aria-label="Дзен"
          >
            <BookOpen class="w-3.5 h-3.5" />
          </a>
        </div>

      </div>

      <!-- Средняя колонка: Фото (скрыта на мобильных) -->
      <div class="hidden md:block w-1/3 flex-shrink-0 border-r border-black/10 animate-fade-in-delay-init">
        <div class="h-full w-full bg-black/5 overflow-hidden">
          <img
            src="/reference/artem.jpg"
            alt="Артем Селифанов"
            class="w-full h-full object-cover"
          />
        </div>
      </div>

      <!-- Правая колонка: Текст (на мобильных - весь контент) -->
      <div class="flex-1 md:w-1/3 flex flex-col px-4 sm:px-6 py-6 overflow-y-auto animate-slide-right-init">
        
        <!-- Мобильная версия: Заголовок и текст -->
        <div class="md:hidden mb-6">
          <h1 class="text-2xl sm:text-3xl font-bold leading-[0.9] tracking-tight">
            Решения для бизнеса<br />
            от блога и личного бренда<br />
            до сайта и приложения
          </h1>
        </div>

        <!-- Мобильная версия: Текст от автора -->
        <div class="md:hidden mb-6 overflow-hidden">
          <div class="marquee-container">
            <div class="marquee-track marquee-top">
              <span class="marquee-tag">Сайты</span>
              <span class="marquee-tag">Блог</span>
              <span class="marquee-tag">Чат боты</span>
              <span class="marquee-tag">Консультации</span>
              <span class="marquee-tag">Веб приложения</span>
              <span class="marquee-tag">Телеграм</span>
              <span class="marquee-tag">Обучение</span>
              <span class="marquee-tag">Мастермайнд</span>
              <span class="marquee-tag">Бизнес разборы</span>
              <span class="marquee-tag">Сайты</span>
              <span class="marquee-tag">Блог</span>
              <span class="marquee-tag">Чат боты</span>
              <span class="marquee-tag">Консультации</span>
              <span class="marquee-tag">Веб приложения</span>
              <span class="marquee-tag">Телеграм</span>
              <span class="marquee-tag">Обучение</span>
              <span class="marquee-tag">Мастермайнд</span>
              <span class="marquee-tag">Бизнес разборы</span>
              <span class="marquee-tag">Сайты</span>
              <span class="marquee-tag">Блог</span>
              <span class="marquee-tag">Чат боты</span>
              <span class="marquee-tag">Консультации</span>
              <span class="marquee-tag">Веб приложения</span>
              <span class="marquee-tag">Телеграм</span>
              <span class="marquee-tag">Обучение</span>
              <span class="marquee-tag">Мастермайнд</span>
              <span class="marquee-tag">Бизнес разборы</span>
            </div>
            <div class="marquee-track marquee-bottom">
              <span class="marquee-tag">Бизнес разборы</span>
              <span class="marquee-tag">Телеграм</span>
              <span class="marquee-tag">Веб приложения</span>
              <span class="marquee-tag">Блог</span>
              <span class="marquee-tag">Мастермайнд</span>
              <span class="marquee-tag">Сайты</span>
              <span class="marquee-tag">Консультации</span>
              <span class="marquee-tag">Чат боты</span>
              <span class="marquee-tag">Обучение</span>
              <span class="marquee-tag">Бизнес разборы</span>
              <span class="marquee-tag">Телеграм</span>
              <span class="marquee-tag">Веб приложения</span>
              <span class="marquee-tag">Блог</span>
              <span class="marquee-tag">Мастермайнд</span>
              <span class="marquee-tag">Сайты</span>
              <span class="marquee-tag">Консультации</span>
              <span class="marquee-tag">Чат боты</span>
              <span class="marquee-tag">Обучение</span>
              <span class="marquee-tag">Бизнес разборы</span>
              <span class="marquee-tag">Телеграм</span>
              <span class="marquee-tag">Веб приложения</span>
              <span class="marquee-tag">Блог</span>
              <span class="marquee-tag">Мастермайнд</span>
              <span class="marquee-tag">Сайты</span>
              <span class="marquee-tag">Консультации</span>
              <span class="marquee-tag">Чат боты</span>
              <span class="marquee-tag">Обучение</span>
            </div>
          </div>
        </div>

        <!-- Мобильная версия: Навигация -->
        <nav class="md:hidden flex flex-col gap-3 mb-6">
          <a
            href="/website1/networking"
            class="group flex items-center justify-between py-3 px-4 bg-white border border-black/10 rounded-lg hover:border-black transition-all"
          >
            <div class="flex items-center gap-3">
              <span class="text-xs font-mono text-gray-400">01</span>
              <span class="text-sm font-medium">Нескучный нетворкинг</span>
            </div>
            <ArrowRight class="w-4 h-4 text-gray-300 group-hover:text-black transition-colors" />
          </a>

          <a
            href="https://t.me/artemselifanov"
            class="group flex items-center justify-between py-3 px-4 bg-white border border-black/10 rounded-lg hover:border-black transition-all"
          >
            <div class="flex items-center gap-3">
              <span class="text-xs font-mono text-gray-400">02</span>
              <span class="text-sm font-medium">Бизнес консалтинг</span>
            </div>
            <ArrowRight class="w-4 h-4 text-gray-300 group-hover:text-black transition-colors" />
          </a>

          <a
            href="/website1/yappie"
            class="group flex items-center justify-between py-3 px-4 bg-white border border-black/10 rounded-lg hover:border-black transition-all"
          >
            <div class="flex items-center gap-3">
              <span class="text-xs font-mono text-gray-400">03</span>
              <span class="text-sm font-medium">Веб-разработка и автоматизация</span>
            </div>
            <ArrowRight class="w-4 h-4 text-gray-300 group-hover:text-black transition-colors" />
          </a>

          <a
            href="/website1/blog"
            class="group flex items-center justify-between py-3 px-4 bg-white border border-black/10 rounded-lg hover:border-black transition-all"
          >
            <div class="flex items-center gap-3">
              <span class="text-xs font-mono text-gray-400">04</span>
              <span class="text-sm font-medium">Блог</span>
            </div>
            <ArrowRight class="w-4 h-4 text-gray-300 group-hover:text-black transition-colors" />
          </a>

          <a
            href="/website1/study"
            class="group flex items-center justify-between py-3 px-4 bg-white border border-black/10 rounded-lg hover:border-black transition-all"
          >
            <div class="flex items-center gap-3">
              <span class="text-xs font-mono text-gray-400">05</span>
              <span class="text-sm font-medium">Обучение блогингу</span>
            </div>
            <ArrowRight class="w-4 h-4 text-gray-300 group-hover:text-black transition-colors" />
          </a>
        </nav>

        <!-- CTA -->
        <div class="mb-6">
          <h2 class="text-lg font-bold mb-3">Давайте работать вместе</h2>
          <p class="text-sm text-gray-600 leading-relaxed mb-4">
            Готов обсудить ваш проект и предложить решение, которое даст результат.
          </p>
          <a
            href="https://t.me/artemselifanov"
            target="_blank"
            class="inline-flex items-center justify-center gap-2 w-full px-4 py-3 border-2 border-black text-sm font-medium hover:bg-black hover:text-white transition-all"
          >
            <Send class="w-4 h-4" />
            Написать в Telegram
          </a>
        </div>

        <!-- Услуги (только desktop) -->
        <div class="hidden md:block">
          <h3 class="text-sm font-bold mb-3 uppercase tracking-wide">Направления работы</h3>
          <ul class="space-y-2 text-sm text-gray-600">
            <li class="flex items-start gap-2">
              <span class="text-green-500 mt-1">✓</span>
              <span>Разработка сайтов под ключ</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-green-500 mt-1">✓</span>
              <span>Создание чат-ботов для бизнеса</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-green-500 mt-1">✓</span>
              <span>Автоматизация бизнес-процессов</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-green-500 mt-1">✓</span>
              <span>Консалтинг по личному бренду</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-green-500 mt-1">✓</span>
              <span>Обучение ведению блога</span>
            </li>
          </ul>
        </div>

        <!-- Мобильная версия: Соцсети -->
        <div class="md:hidden mt-6 flex items-center gap-2 pt-6 border-t border-black/10">
          <a
            href="https://t.me/artemselifanov"
            target="_blank"
            class="w-10 h-10 flex items-center justify-center border border-black/10 hover:bg-black hover:text-white transition-all"
            aria-label="Telegram"
          >
            <Send class="w-4 h-4" />
          </a>
          <a
            href="https://tenchat.ru"
            target="_blank"
            class="w-10 h-10 flex items-center justify-center border border-black/10 hover:bg-black hover:text-white transition-all"
            aria-label="TenChat"
          >
            <Users class="w-4 h-4" />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            class="w-10 h-10 flex items-center justify-center border border-black/10 hover:bg-black hover:text-white transition-all"
            aria-label="YouTube"
          >
            <Youtube class="w-4 h-4" />
          </a>
          <a
            href="https://dzen.ru"
            target="_blank"
            class="w-10 h-10 flex items-center justify-center border border-black/10 hover:bg-black hover:text-white transition-all"
            aria-label="Дзен"
          >
            <BookOpen class="w-4 h-4" />
          </a>
        </div>

      </div>

    </main>

    <!-- Футер -->
    <footer class="h-[30px] flex-shrink-0 px-6 flex items-center border-t border-black/10 text-[10px] text-gray-400">
      © 2026 Артем Селифанов
    </footer>

    <!-- Мобильное меню -->
    <div v-if="isMenuOpen" class="fixed inset-0 z-[100] bg-[#FAFAF9] flex flex-col">
      <div class="flex-1 flex flex-col justify-center items-center px-6">
        <nav class="flex flex-col gap-6 w-full max-w-xs">
          <a
            v-for="(item, index) in menuItems"
            :key="index"
            :href="item.href"
            @click="isMenuOpen = false"
            class="text-3xl font-bold text-black text-center hover:text-orange-600 transition-colors"
          >
            {{ item.label }}
          </a>
        </nav>
      </div>
      <button
        @click="isMenuOpen = false"
        class="absolute top-6 right-6 text-black p-3 hover:bg-black/10 rounded-lg transition-colors"
      >
        <X class="w-6 h-6" />
      </button>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Menu, X, Send, Users, Youtube, BookOpen, ArrowRight } from 'lucide-vue-next'

const isMenuOpen = ref(false)

const menuItems = [
  { label: 'Нескучный нетворкинг', href: '/website1/networking' },
  { label: 'Бизнес консалтинг', href: 'https://t.me/artemselifanov' },
  { label: 'Веб-разработка и автоматизация', href: '/website1/yappie' },
  { label: 'Блог', href: '/website1/blog' },
  { label: 'Обучение блогингу', href: '/website1/study' },
]
</script>

<style scoped>
@keyframes slideFromLeft {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideFromRight {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes marqueeRight {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

@keyframes marqueeLeft {
  0% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(0);
  }
}

.animate-slide-left-init {
  opacity: 0;
  animation: slideFromLeft 0.7s ease-out 0.1s forwards;
}

.animate-slide-right-init {
  opacity: 0;
  animation: slideFromRight 0.7s ease-out 0.5s forwards;
}

.animate-fade-in-delay-init {
  opacity: 0;
  animation: fadeIn 0.8s ease-out 0.3s forwards;
}

/* Marquee стили */
.marquee-container {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.marquee-track {
  display: flex;
  gap: 8px;
  white-space: nowrap;
}

.marquee-top {
  animation: marqueeRight 30s linear infinite;
}

.marquee-bottom {
  animation: marqueeLeft 30s linear infinite;
}

.marquee-tag {
  flex-shrink: 0;
  padding: 6px 12px;
  background: rgba(0, 0, 0, 0.05);
  border-radius: 9999px;
  font-size: 11px;
  font-weight: 500;
}
</style>
