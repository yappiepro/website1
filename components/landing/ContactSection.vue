<template>
  <section id="contact" class="py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-br from-violet-50 via-white to-blue-50">
    <div class="w-full flex flex-col lg:flex-row justify-center gap-6 lg:gap-8">
      <!-- Левая колонка: Текст и преимущества -->
      <div class="w-full lg:w-[40%] space-y-6">
        <div class="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-2xl shadow-sm">
          <Icon name="fa-solid:envelope" class="w-4 h-4 text-violet-600" />
          <span class="text-xs font-bold text-gray-700 uppercase tracking-wider">Связаться со мной</span>
        </div>

        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
          Готовы обсудить ваш проект?
        </h2>

        <p class="text-lg text-gray-600 leading-relaxed">
          Заполните форму и я свяжусь с вами в течение 24 часов. Консультация бесплатная — обсудим ваши задачи и я предложу варианты решения.
        </p>

        <!-- Преимущества -->
        <div class="space-y-5">
          <div class="flex items-start gap-4">
            <div class="flex-shrink-0 w-12 h-12 bg-violet-100 rounded-xl flex items-center justify-center shadow-sm">
              <Icon name="fa-solid:clock" class="w-5 h-5 text-violet-600" />
            </div>
            <div>
              <h3 class="font-semibold text-gray-900 mb-1">Быстрый ответ</h3>
              <p class="text-sm text-gray-600">Отвечаю в течение 24 часов в рабочее время</p>
            </div>
          </div>

          <div class="flex items-start gap-4">
            <div class="flex-shrink-0 w-12 h-12 bg-violet-100 rounded-xl flex items-center justify-center shadow-sm">
              <Icon name="fa-solid:shield-alt" class="w-5 h-5 text-violet-600" />
            </div>
            <div>
              <h3 class="font-semibold text-gray-900 mb-1">Конфиденциально</h3>
              <p class="text-sm text-gray-600">Ваши данные под защитой и не передаются третьим лицам</p>
            </div>
          </div>

          <div class="flex items-start gap-4">
            <div class="flex-shrink-0 w-12 h-12 bg-violet-100 rounded-xl flex items-center justify-center shadow-sm">
              <Icon name="fa-solid:lightbulb" class="w-5 h-5 text-violet-600" />
            </div>
            <div>
              <h3 class="font-semibold text-gray-900 mb-1">Бесплатная консультация</h3>
              <p class="text-sm text-gray-600">Обсудим задачи и я предложу варианты решения</p>
            </div>
          </div>
        </div>

        <!-- Контакты альтернативные -->
        <div class="mt-10 pt-8 border-t border-gray-200">
          <p class="text-sm text-gray-600 mb-4 font-medium">Или напишите напрямую:</p>
          <div class="flex flex-wrap gap-3">
            <a
              href="https://t.me/artemselifanov"
              target="_blank"
              rel="noopener"
              class="inline-flex items-center gap-2 px-4 py-2.5 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-sm font-medium transition-all shadow-md hover:shadow-lg"
            >
              <Icon name="fa-brands:telegram" class="w-4 h-4" />
              Telegram
            </a>
            <a
              href="mailto:a9535487323@yandex.ru"
              class="inline-flex items-center gap-2 px-4 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-900 rounded-lg text-sm font-medium transition-all shadow-md hover:shadow-lg"
            >
              <Icon name="fa-solid:at" class="w-4 h-4" />
              Email
            </a>
          </div>
        </div>
      </div>

      <!-- Правая колонка: Форма -->
      <div class="w-full lg:w-[40%] bg-white rounded-2xl shadow-lg p-5 sm:p-6 lg:p-8">
        <ContactForm default-source="Главная страница" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ContactForm from '~/components/ui/ContactForm.vue'
</script>
