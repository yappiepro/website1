<template>
  <section id="about" class="py-16 md:py-24 lg:py-32 px-4 sm:px-6 border-t border-gray-100">
    <div class="max-w-7xl mx-auto">
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <!-- Левая колонка: Текст -->
        <div class="animate-on-scroll">
          <div class="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-100 rounded-xl mb-6">
            <span class="text-xs font-bold text-gray-700 uppercase tracking-wider">Позиционирование</span>
          </div>

          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-8">
            Архитектор смыслов<br />
            <span class="text-gray-400">для экспертов и предпринимателей</span>
          </h2>

          <div class="space-y-5 text-gray-600 leading-relaxed">
            <p class="text-lg">
              Я работаю с теми, кто продает свою экспертизу: консультанты, коучи, наставники, владельцы бизнеса.
            </p>
            <p class="text-lg">
              Моя задача — не писать за вас посты. Моя задача — помочь вам найти и упаковать ваши смыслы, подготовить площадки и выстроить систему, где личный бренд работает на привлечение клиентов.
            </p>
            <p class="text-lg font-medium text-gray-900">
              Бэкграунд в бизнес-консалтинге позволяет мне думать категориями прибыли, а не лайков.
            </p>
          </div>

          <!-- Статистика -->
          <div class="grid grid-cols-3 gap-3 sm:gap-4 mt-10">
            <div
              v-for="(stat, index) in stats"
              :key="index"
              class="group relative p-3 sm:p-5 bg-white border border-gray-200 rounded-2xl hover:border-blue-300 transition-all"
            >
              <div v-if="stat.growth" class="absolute top-2 right-2 text-[8px] sm:text-[10px] text-green-600 font-bold">
                {{ stat.growth }}
              </div>
              <div class="text-xl sm:text-2xl md:text-3xl font-black text-gray-900 mb-1">
                {{ stat.value }}
              </div>
              <div class="text-[10px] sm:text-xs text-gray-500 font-medium leading-tight">
                {{ stat.label }}
              </div>
              <div v-if="stat.sublabel" class="text-[9px] sm:text-[10px] text-gray-400 mt-0.5 sm:mt-1 leading-tight">
                {{ stat.sublabel }}
              </div>
            </div>
          </div>
        </div>

        <!-- Правая колонка: Карточки -->
        <div class="image-animate delay-200">
          <div class="relative">
            <div class="relative p-8 bg-white rounded-[2rem] shadow-xl border border-gray-100">
              <h3 class="text-xl font-bold mb-6 flex items-center gap-3">
                <span class="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Icon name="fa-solid:bolt" class="w-5 h-5 text-white" />
                </span>
                Работаю в связке
              </h3>
              <div class="space-y-3">
                <div
                  v-for="(item, index) in synergyItems"
                  :key="index"
                  class="flex items-center gap-4 p-4 bg-gray-50 rounded-xl"
                >
                  <div class="w-12 h-12 bg-white rounded-xl flex items-center justify-center border border-gray-200">
                    <Icon :name="item.icon" class="w-6 h-6 text-gray-700" />
                  </div>
                  <div>
                    <div class="font-bold text-gray-900">{{ item.title }}</div>
                    <div class="text-xs text-gray-500">{{ item.subtitle }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Stat, SynergyItem } from '~/types'

// Данные статистики
const stats: Stat[] = [
  { value: '45 000', label: 'аудитория', growth: '+12%', sublabel: 'в 5 соцсетях' },
  { value: '750K', label: 'макс. чек', sublabel: 'за проект' },
  { value: '12K', label: 'нетворкинг', growth: '+130', sublabel: 'активных' },
]

// Карточки синергии
const synergyItems: SynergyItem[] = [
  { icon: 'fa-solid:pen-nib', title: 'Контент', subtitle: 'Стратегия и производство' },
  { icon: 'fa-solid:globe', title: 'Веб', subtitle: 'Сайты и приложения' },
  { icon: 'fa-solid:mobile', title: 'Мобильная разработка', subtitle: 'iOS и Android' },
  { icon: 'fa-solid:bolt', title: 'Автоматизация', subtitle: 'CRM и процессы' },
]
</script>
