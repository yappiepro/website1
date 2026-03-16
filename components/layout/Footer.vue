<template>
  <footer class="py-16 md:py-24 px-4 sm:px-6 border-t border-gray-200" :class="bgClass">
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
        <div class="grid grid-cols-2 md:grid-cols-5 gap-10 mb-12">
          <!-- Логотип / Название + ИП -->
          <div class="col-span-2 md:col-span-1">
            <div class="text-sm font-bold text-white mb-4">{{ siteName }}</div>
            <div class="text-xs text-gray-300 space-y-1">
              <p>ИП Селифанов А.В.</p>
              <p>ОГРНИП: 323100000003767</p>
              <p>ИНН: 100123594893</p>
            </div>
          </div>

          <!-- Сообщества -->
          <div v-if="communities && communities.length">
            <h3 class="text-xs font-bold uppercase tracking-wider mb-4" :class="headingColor">
              {{ communitiesTitle }}
            </h3>
            <ul class="space-y-3 text-sm">
              <li v-for="community in communities" :key="community.href">
                <NuxtLink :to="community.href" class="transition-colors" :class="linkColor">
                  {{ community.label }}
                </NuxtLink>
              </li>
            </ul>
          </div>

          <!-- Контакты -->
          <div v-if="contacts && contacts.length">
            <h3 class="text-xs font-bold uppercase tracking-wider mb-4" :class="headingColor">
              {{ contactsTitle }}
            </h3>
            <ul class="space-y-3 text-sm">
              <li v-for="contact in contacts" :key="contact.href">
                <a
                  :href="contact.href"
                  :target="contact.external ? '_blank' : undefined"
                  class="transition-colors"
                  :class="linkColor"
                >
                  {{ contact.label }}
                </a>
              </li>
            </ul>
          </div>

          <!-- Соцсети -->
          <div v-if="socialNetworks && socialNetworks.length" class="md:col-span-2">
            <h3 class="text-xs font-bold uppercase tracking-wider mb-4" :class="headingColor">
              {{ socialTitle }}
            </h3>
            <div class="flex flex-wrap gap-3">
              <a
                v-for="(network, index) in socialNetworks.slice(0, 7)"
                :key="index"
                :href="network.link"
                target="_blank"
                :aria-label="network.name || getSocialLabel(network.icon)"
                class="inline-flex items-center justify-center px-4 py-2.5 bg-gray-800 hover:bg-gray-700 rounded-xl transition-all whitespace-nowrap"
                :class="iconColor"
              >
                <span v-if="network.name" class="text-xs font-bold">{{ network.name }}</span>
                <Icon v-else :name="`fa-brands:${network.icon}`" class="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <!-- Копирайт и документы -->
        <div class="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <div class="text-xs" :class="copyrightColor">{{ copyright }}</div>
          <div class="flex gap-6">
            <NuxtLink
              v-for="doc in legalDocs"
              :key="doc.href"
              :to="doc.href"
              class="transition-colors"
              :class="docColor"
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
import { computed } from 'vue'

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
      { href: 'tel:+79535487323', label: '+7 (953) 548-73-23', external: false },
      { href: 'https://t.me/artemselifanov', label: 'Telegram', external: true },
      { href: 'mailto:a9535487323@yandex.ru', label: 'a9535487323@yandex.ru', external: false }
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
      { icon: 'vk', link: 'https://vk.com/karelbusiness' },
      { icon: 'youtube', link: 'https://www.youtube.com/@artemselifanov' },
      { icon: 'whatsapp', link: 'https://wa.me/79535487323' },
      { name: 'TenChat', link: 'https://tenchat.ru/artselifanov' },
      { name: 'Сетка', link: 'https://set.ki/ecaPSPa' },
      { name: 'Max', link: 'https://max.ru/u/f9LHodD0cOKopHkIgQpYisJTEJU83loTzixkc45wVgsAFzhMaxRj5LG6_tY' }
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
    default: '© 2026 Артем Селифанов. Все права защищены.'
  },
  // Документы
  legalDocs: {
    type: Array,
    default: () => [
      { href: '/privacy', label: 'Политика конфиденциальности' },
      { href: '/offer', label: 'Договор оферты' },
      { href: '/cookie', label: 'Cookie политика' }
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

// Вычисляем, тёмный ли фон
const isDarkBg = computed(() => {
  return props.bgClass && props.bgClass.includes('gray-900')
})

// Цвета для текста в зависимости от фона
const headingColor = computed(() => isDarkBg.value ? 'text-gray-200' : 'text-gray-700')
const linkColor = computed(() => isDarkBg.value ? 'text-gray-300' : 'text-gray-600')
const iconColor = computed(() => isDarkBg.value ? 'text-gray-300' : 'text-gray-600')
const copyrightColor = computed(() => isDarkBg.value ? 'text-gray-300' : 'text-gray-500')
const docColor = computed(() => isDarkBg.value ? 'text-gray-300' : 'text-gray-500')

function getSocialLabel(icon) {
  const labels = {
    telegram: 'Telegram',
    whatsapp: 'WhatsApp',
    vk: 'ВКонтакте',
    youtube: 'YouTube',
    instagram: 'Instagram'
  }
  return `Мы в ${labels[icon] || icon}`
}
</script>
