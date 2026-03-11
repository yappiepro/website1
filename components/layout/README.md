# Layout Компоненты

## Обзор

В этой папке находятся переиспользуемые layout-компоненты для общих элементов сайта.

## Компоненты

### 1. ScrollProgress.vue

**Назначение:** Прогресс-бар скролла страницы (тонкая полоска вверху экрана).

**Использование:**
```vue
<template>
  <ScrollProgress />
</template>

<script setup>
import ScrollProgress from '~/components/layout/ScrollProgress.vue'
</script>
```

**Пропсы:**
| Пропс | Тип | По умолчанию | Описание |
|-------|-----|--------------|----------|
| `barColor` | String | `'bg-blue-600'` | Цвет прогресс-бара (Tailwind класс) |
| `bgColor` | String | `'bg-gray-100'` | Цвет фона (Tailwind класс) |

**Пример:**
```vue
<ScrollProgress bar-color="bg-violet-600" bg-color="bg-gray-200" />
```

---

### 2. Header.vue

**Назначение:** Светлый хедер для главной страницы (index.vue).

**Использование:**
```vue
<template>
  <Header
    :menu-items="menuItems"
    cta-link="https://t.me/artemselifanov"
    cta-text="Связаться"
  />
</template>

<script setup>
import Header from '~/components/layout/Header.vue'

const menuItems = [
  { href: '/networking', label: 'Нескучный Нетворкинг' },
  { href: '/business', label: 'Бизнес Сетка' },
  { href: '/yappie', label: 'Веб-разработка' },
  { href: '/blog', label: 'Блог' }
]
</script>
```

**Пропсы:**
| Пропс | Тип | По умолчанию | Описание |
|-------|-----|--------------|----------|
| `logoText` | String | `'Артем Селифанов'` | Текст логотипа |
| `menuItems` | Array | `[{...}]` | Массив пунктов меню `{href, label}` |
| `ctaLink` | String | `'https://t.me/artemselifanov'` | Ссылка CTA-кнопки |
| `ctaText` | String | `'Связаться'` | Текст CTA-кнопки |
| `ctaBgClass` | String | `'bg-gray-900/90'` | Класс фона CTA (Tailwind) |

---

### 3. MobileMenu.vue

**Назначение:** Мобильное меню с бургер-кнопкой (выпадающее на весь экран).

**Использование:**
```vue
<template>
  <MobileMenu
    :menu-items="menuItems"
    cta-link="https://t.me/artemselifanov"
    cta-text="Связаться в Telegram"
  />
</template>

<script setup>
import MobileMenu from '~/components/layout/MobileMenu.vue'
</script>
```

**Пропсы:**
| Пропс | Тип | По умолчанию | Описание |
|-------|-----|--------------|----------|
| `menuItems` | Array | `[{...}]` | Массив пунктов меню `{href, label}` |
| `ctaLink` | String | `'https://t.me/artemselifanov'` | Ссылка CTA-кнопки |
| `ctaText` | String | `'Связаться в Telegram'` | Текст CTA-кнопки |

---

### 4. Footer.vue

**Назначение:** Футер сайта с CTA-секцией, навигацией и контактами.

**Использование:**
```vue
<template>
  <Footer
    :social-networks="socialNetworks"
    cta-link="https://t.me/artemselifanov"
  />
</template>

<script setup>
import Footer from '~/components/layout/Footer.vue'

const socialNetworks = [
  { name: 'Telegram', icon: 'telegram', link: 'https://t.me/artemselifanov' },
  { name: 'YouTube', icon: 'youtube', link: 'https://youtube.com' }
]
</script>
```

**Пропсы:**
| Пропс | Тип | По умолчанию | Описание |
|-------|-----|--------------|----------|
| `showCta` | Boolean | `true` | Показывать CTA-секцию |
| `ctaTitle` | String | `'Готовы сделать имя активом?'` | Заголовок CTA |
| `ctaDescription` | String | `''` | Описание CTA |
| `ctaLink` | String | `'https://t.me/artemselifanov'` | Ссылка CTA |
| `ctaButtonText` | String | `'Записаться на консультацию'` | Текст кнопки CTA |
| `siteName` | String | `'Артем Селифанов'` | Название сайта |
| `communities` | Array | `[{...}]` | Сообщества `{href, label}` |
| `communitiesTitle` | String | `'Сообщества'` | Заголовок секции сообществ |
| `contacts` | Array | `[{...}]` | Контакты `{href, label, external}` |
| `contactsTitle` | String | `'Контакты'` | Заголовок секции контактов |
| `socialNetworks` | Array | `[{...}]` | Соцсети `{icon, link}` |
| `socialTitle` | String | `'Соцсети'` | Заголовок секции соцсетей |
| `copyright` | String | `'© 2025 Артем Селифанов...'` | Копирайт |
| `legalDocs` | Array | `[{...}]` | Документы `{href, label}` |
| `bgClass` | String | `'bg-gray-900'` | Класс фона (Tailwind) |
| `borderClass` | String | `'border-t border-gray-800'` | Класс границы |

---

### 5. HeaderDark.vue

**Назначение:** Тёмный хедер для страницы study.vue.

**Использование:**
```vue
<template>
  <HeaderDark
    logo-text="Фокус"
    :menu-items="menuItems"
    cta-link="https://t.me/artemselifanov"
    cta-text="Связаться"
  />
</template>

<script setup>
import HeaderDark from '~/components/layout/HeaderDark.vue'
</script>
```

**Пропсы:**
| Пропс | Тип | По умолчанию | Описание |
|-------|-----|--------------|----------|
| `logoText` | String | `'Фокус'` | Текст логотипа |
| `logoLink` | String | `'/study'` | Ссылка логотипа |
| `menuItems` | Array | `[{...}]` | Массив пунктов меню |
| `ctaLink` | String | `'https://t.me/artemselifanov'` | Ссылка CTA |
| `ctaText` | String | `'Связаться'` | Текст CTA |

---

### 6. HeaderLight.vue

**Назначение:** Светлый хедер для страниц блога.

**Использование:**
```vue
<template>
  <HeaderLight
    logo-text="Блог"
    :menu-items="menuItems"
  />
</template>

<script setup>
import HeaderLight from '~/components/layout/HeaderLight.vue'
</script>
```

**Пропсы:**
| Пропс | Тип | По умолчанию | Описание |
|-------|-----|--------------|----------|
| `logoText` | String | `'Блог'` | Текст логотипа |
| `logoLink` | String | `'/blog'` | Ссылка логотипа |
| `menuItems` | Array | `[{...}]` | Массив пунктов меню |
| `ctaLink` | String | `'https://t.me/artemselifanov'` | Ссылка CTA |
| `ctaText` | String | `'Связаться'` | Текст CTA |

---

### 7. ScrollToTop.vue

**Назначение:** Кнопка прокрутки наверх страницы.

**Использование:**
```vue
<template>
  <ScrollToTop />
</template>

<script setup>
import ScrollToTop from '~/components/layout/ScrollToTop.vue'
</script>
```

**Пропсы:**
| Пропс | Тип | По умолчанию | Описание |
|-------|-----|--------------|----------|
| `scrollThreshold` | Number | `300` | Показывать после скролла (px) |
| `buttonClass` | String | `'bg-gray-900/90'` | Класс кнопки (Tailwind) |
| `iconClass` | String | `'text-white'` | Класс иконки (Tailwind) |

**Пример:**
```vue
<ScrollToTop :scroll-threshold="500" button-class="bg-violet-600" />
```

---

## Структура папки

```
components/layout/
├── ScrollProgress.vue      # Прогресс-бар скролла
├── Header.vue              # Светлый хедер (главная)
├── HeaderDark.vue          # Тёмный хедер (study)
├── HeaderLight.vue         # Светлый хедер (блог)
├── MobileMenu.vue          # Мобильное меню
├── Footer.vue              # Футер
└── ScrollToTop.vue         # Кнопка наверх
```

---

## Рекомендации по использованию

1. **Импортируйте компоненты в script setup**
2. **Передавайте пропсы в kebab-case** (Vue автоматически конвертирует)
3. **Для кастомизации используйте Tailwind классы** в пропсах
4. **Не дублируйте код навигации** в страницах — используйте компоненты

## Пример полного использования

```vue
<template>
  <div class="min-h-screen">
    <ScrollProgress />
    <Header :menu-items="headerMenu" />
    <MobileMenu :menu-items="mobileMenu" />
    
    <main>
      <!-- Контент страницы -->
    </main>
    
    <Footer :social-networks="socials" />
    <ScrollToTop />
  </div>
</template>

<script setup>
import ScrollProgress from '~/components/layout/ScrollProgress.vue'
import Header from '~/components/layout/Header.vue'
import MobileMenu from '~/components/layout/MobileMenu.vue'
import Footer from '~/components/layout/Footer.vue'
import ScrollToTop from '~/components/layout/ScrollToTop.vue'

const headerMenu = [...]
const mobileMenu = [...]
const socials = [...]
</script>
```
