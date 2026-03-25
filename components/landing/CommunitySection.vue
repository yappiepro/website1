<template>
  <section class="py-12 border-t border-gray-100 animate-on-scroll">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-10">
        <div class="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50 border border-blue-100 rounded-xl mb-4">
          <Icon name="fa-brands:telegram" class="w-4 h-4 text-blue-600" />
          <span class="text-xs font-bold text-blue-700 uppercase tracking-wider">Сообщества</span>
        </div>
        <h3 class="text-2xl md:text-3xl font-black text-gray-900 mb-3">
          Сообщества в Telegram
        </h3>
        <p class="text-gray-600 max-w-xl mx-auto">
          Закрытые сообщества для предпринимателей и экспертов, где вы найдёте полезные связи и окружение для роста
        </p>
      </div>

      <div class="flex justify-center gap-6 md:gap-8">
        <!-- Нескучный Нетворкинг -->
        <NuxtLink to="/networking" class="group flex flex-col items-center relative">
          <div class="absolute -top-2 -right-2 md:-top-3 md:-right-3 z-10">
            <div class="inline-flex flex-col items-start gap-0 px-2 py-1 bg-green-50 border border-green-200 rounded-lg shadow-sm">
              <div class="flex items-center gap-1 leading-none">
                <svg class="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"/>
                </svg>
                <span class="text-xs font-bold text-green-700">750</span>
              </div>
              <span class="text-[9px] text-green-600 leading-none mt-0.5">за 6 мес</span>
            </div>
          </div>
          <div class="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-gray-200 hover:border-gray-400 transition-all hover:shadow-xl hover:-translate-y-1">
            <img src="/reference/networking.webp" alt="Нескучный Нетворкинг" class="absolute inset-0 w-full h-full object-cover" />
          </div>
          <div class="text-center mt-3">
            <div class="text-sm font-bold text-gray-900">Нескучный Нетворкинг</div>
            <div class="text-xs text-gray-500">Полезные связи</div>
          </div>
        </NuxtLink>

        <!-- Бизнес Сетка -->
        <NuxtLink to="/business" class="group flex flex-col items-center relative">
          <div class="absolute -top-2 -right-2 md:-top-3 md:-right-3 z-10">
            <div class="inline-flex flex-col items-start gap-0 px-2 py-1 bg-blue-50 border border-blue-200 rounded-lg shadow-sm">
              <div class="flex items-center gap-1 leading-none">
                <svg class="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"/>
                </svg>
                <span class="text-xs font-bold text-blue-700">240</span>
              </div>
              <span class="text-[9px] text-blue-600 leading-none mt-0.5">за 1,5 мес</span>
            </div>
          </div>
          <div class="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-gray-200 hover:border-gray-400 transition-all hover:shadow-xl hover:-translate-y-1">
            <img src="/reference/business.webp" alt="Бизнес Сетка" class="absolute inset-0 w-full h-full object-cover" />
          </div>
          <div class="text-center mt-3">
            <div class="text-sm font-bold text-gray-900">Бизнес Сетка</div>
            <div class="text-xs text-gray-500">Закрытый клуб</div>
          </div>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Компонент сообщества в Telegram
</script>
