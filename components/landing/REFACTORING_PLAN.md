# 📐 План рефакторинга pages/index.vue

## Текущее состояние
- **Файл:** `pages/index.vue`
- **Размер:** 1595 строк
- **Проблема:** Сложно поддерживать, тестировать, переиспользовать

## Целевая структура

```
components/landing/
├── HeroSection.vue          ✅ Создан (120 строк)
├── AboutSection.vue         ✅ Создан (140 строк)
├── RoutesSection.vue        # Маршрутизатор (4 карточки направлений)
├── StatsSection.vue         # Цифры (flip cards)
├── CommunitySection.vue     # Лид-магнит (Telegram)
├── BlogTeaserSection.vue    # Тизер блога
├── ContactSection.vue       # Форма контактов
└── index.js                 # Экспорт всех компонентов
```

## Компоненты для создания

### 1. RoutesSection.vue
**Секция:** "Маршрутизатор" (строки ~200-400)
**Данные:** 4 карточки направлений
- Нескучный нетворкинг
- Бизнес-сетка
- YAPPIE (No-code)
- Фокус

### 2. StatsSection.vue
**Секция:** "Цифры" (строки ~400-600)
**Данные:** Flip cards с официальной и реальной статистикой
- 45 000 аудитория
- 750 000₽ макс. чек
- 12 000 нетворкинг
- 200+ тренингов
- 750 подписчиков

### 3. CommunitySection.vue
**Секция:** "Сообщество" (строки ~600-800)
**Данные:** Лид-магнит с кнопками Telegram

### 4. BlogTeaserSection.vue
**Секция:** "Блог" (строки ~800-1000)
**Данные:** Авто-выгрузка 3 последних статей

### 5. ContactSection.vue
**Секция:** "Контакты" (строки ~1000-1200)
**Данные:** Форма + альтернативные контакты

## Использование

После создания всех компонентов:

```vue
<!-- pages/index.vue -->
<template>
  <div class="min-h-screen bg-white text-gray-900">
    <Head>
      <link rel="preload" as="image" ... />
    </Head>
    
    <ScrollProgress />
    <Header :menu-items="headerMenuItems" cta-link="..." cta-text="..." />
    <BaseMobileMenu v-model="isMobileMenuOpen" :menu-items="mobileMenuItems" />
    
    <main role="main">
      <HeroSection />
      <AboutSection />
      <RoutesSection />
      <StatsSection />
      <CommunitySection />
      <BlogTeaserSection />
      <ContactSection />
    </main>
    
    <Footer :social-networks="socialNetworks" cta-link="..." />
    <MobileBottomNav theme="light" />
  </div>
</template>

<script setup lang="ts">
// Только данные и логика навигации
// ~100 строк вместо 1595
</script>
```

## Преимущества

| Метрика | До | После |
|---------|-----|-------|
| Размер index.vue | 1595 строк | ~100 строк |
| Переиспользование | ❌ | ✅ |
| Тестируемость | ❌ | ✅ |
| Code splitting | ❌ | ✅ |
| Читаемость | Низкая | Высокая |

## Приоритеты

1. ✅ HeroSection - готов
2. ✅ AboutSection - готов
3. ⏳ RoutesSection - следующий
4. ⏳ StatsSection
5. ⏳ CommunitySection
6. ⏳ BlogTeaserSection
7. ⏳ ContactSection
