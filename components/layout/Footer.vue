<template>
  <footer class="py-16 md:py-24 px-4 sm:px-6 border-t border-gray-100" :class="bgClass">
    <div class="max-w-7xl mx-auto">
      <!-- CTA секция -->
      <div v-if="showCta" class="text-center mb-16 animate-on-scroll">
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mb-6 animate-on-scroll delay-100">
          {{ ctaTitle }}
        </h2>
        <p class="text-xl text-gray-400 max-w-2xl mx-auto mb-10 animate-on-scroll delay-200">
          {{ ctaDescription }}
        </p>
        <a
          :href="ctaLink"
          target="_blank"
          class="group inline-flex items-center gap-3 px-10 py-5 text-base font-semibold text-gray-900 bg-white hover:bg-gray-100 rounded-2xl transition-all hover:-translate-y-1 animate-on-scroll delay-300"
        >
          {{ ctaButtonText }}
        </a>
      </div>

      <div class="pt-12" :class="borderClass">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          <!-- Логотип / Название -->
          <div class="col-span-2 md:col-span-1">
            <div class="text-sm font-bold text-white mb-4">{{ siteName }}</div>
          </div>

          <!-- Сообщества -->
          <div v-if="communities && communities.length">
            <h4 class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">
              {{ communitiesTitle }}
            </h4>
            <ul class="space-y-3 text-sm">
              <li v-for="community in communities" :key="community.href">
                <NuxtLink :to="community.href" class="text-gray-400 hover:text-white transition-colors">
                  {{ community.label }}
                </NuxtLink>
              </li>
            </ul>
          </div>

          <!-- Контакты -->
          <div v-if="contacts && contacts.length">
            <h4 class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">
              {{ contactsTitle }}
            </h4>
            <ul class="space-y-3 text-sm">
              <li v-for="contact in contacts" :key="contact.href">
                <a
                  :href="contact.href"
                  :target="contact.external ? '_blank' : undefined"
                  class="text-gray-400 hover:text-white transition-colors"
                >
                  {{ contact.label }}
                </a>
              </li>
            </ul>
          </div>

          <!-- Соцсети -->
          <div v-if="socialNetworks && socialNetworks.length">
            <h4 class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">
              {{ socialTitle }}
            </h4>
            <div class="flex gap-3">
              <a
                v-for="(network, index) in socialNetworks.slice(0, 4)"
                :key="index"
                :href="network.link"
                target="_blank"
                class="w-11 h-11 bg-gray-800 hover:bg-gray-700 rounded-xl flex items-center justify-center transition-all"
              >
                <Icon :name="`fa-brands:${network.icon}`" class="w-5 h-5 text-gray-400" />
              </a>
            </div>
          </div>
        </div>

        <!-- Копирайт и документы -->
        <div class="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <div class="text-xs text-gray-500">{{ copyright }}</div>
          <div class="flex gap-6">
            <NuxtLink
              v-for="doc in legalDocs"
              :key="doc.href"
              :to="doc.href"
              class="text-xs text-gray-500 hover:text-white transition-colors"
            >
              {{ doc.label }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const props = defineProps({
  // Показывать CTA секцию
  showCta: {
    type: Boolean,
    default: true
  },
  // Заголовок CTA
  ctaTitle: {
    type: String,
    default: 'Готовы сделать имя активом?'
  },
  // Описание CTA
  ctaDescription: {
    type: String,
    default: 'Запишитесь на установочную встречу. Разберем вашу ситуацию и наметим план выхода на новый доход.'
  },
  // Ссылка CTA
  ctaLink: {
    type: String,
    default: 'https://t.me/artemselifanov'
  },
  // Текст кнопки CTA
  ctaButtonText: {
    type: String,
    default: 'Записаться на консультацию'
  },
  // Название сайта
  siteName: {
    type: String,
    default: 'Артем Селифанов'
  },
  // Сообщества
  communities: {
    type: Array,
    default: () => [
      { href: '/networking', label: 'Нескучный Нетворкинг' },
      { href: '/business', label: 'Бизнес Сетка' }
    ]
  },
  // Заголовок секции сообществ
  communitiesTitle: {
    type: String,
    default: 'Сообщества'
  },
  // Контакты
  contacts: {
    type: Array,
    default: () => [
      { href: 'https://t.me/artemselifanov', label: 'Telegram', external: true },
      { href: 'https://wa.me/79991234567', label: 'WhatsApp', external: true },
      { href: 'mailto:email@example.com', label: 'Email', external: false }
    ]
  },
  // Заголовок секции контактов
  contactsTitle: {
    type: String,
    default: 'Контакты'
  },
  // Соцсети
  socialNetworks: {
    type: Array,
    default: () => [
      { icon: 'telegram', link: 'https://t.me/artemselifanov' },
      { icon: 'whatsapp', link: 'https://wa.me/79991234567' },
      { icon: 'vk', link: 'https://vk.com' },
      { icon: 'youtube', link: 'https://youtube.com' }
    ]
  },
  // Заголовок секции соцсетей
  socialTitle: {
    type: String,
    default: 'Соцсети'
  },
  // Копирайт
  copyright: {
    type: String,
    default: '© 2025 Артем Селифанов. Все права защищены.'
  },
  // Документы
  legalDocs: {
    type: Array,
    default: () => [
      { href: '/yappie', label: 'Политика конфиденциальности' },
      { href: '/yappie', label: 'Договор оферты' }
    ]
  },
  // Цвет фона (Tailwind класс)
  bgClass: {
    type: String,
    default: 'bg-gray-900'
  },
  // Цвет границы
  borderClass: {
    type: String,
    default: 'border-t border-gray-800'
  }
})
</script>
