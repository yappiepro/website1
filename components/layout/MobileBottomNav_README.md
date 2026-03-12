# MobileBottomNav — Компонент нижней навигации

## Быстрое использование

### Базовое подключение

```vue
<template>
  <div>
    <!-- Контент страницы -->
    <MobileBottomNav />
  </div>
</template>

<script setup>
import MobileBottomNav from '~/components/layout/MobileBottomNav.vue'
</script>
```

## Пропсы

### `items` — Массив пунктов меню

Тип: `Array`  
По умолчанию: 6 пунктов (Главная, Нетворкинг, Бизнес, Веб, Блог, Наверх)

#### Структура пункта меню

```js
{
  href: '/networking',           // Ссылка
  label: 'Нетворкинг',           // Метка (для accessibility)
  image: '/reference/...jpg',    // Изображение (опционально)
  text: 'веб',                   // Текст вместо иконки (опционально)
  icon: 'lucide:home',           // Иконка из Lucide (опционально)
  action: 'scrollToTop'          // Действие (опционально)
}
```

#### Типы пунктов

1. **С иконкой**:
   ```js
   { href: '/', label: 'Главная', icon: 'lucide:home' }
   ```

2. **С изображением**:
   ```js
   { href: '/networking', label: 'Нетворкинг', image: '/reference/networking.jpg' }
   ```

3. **С текстом**:
   ```js
   { href: '/yappie', label: 'Веб', text: 'веб' }
   ```

4. **С действием** (скролл вверх):
   ```js
   { href: '#top', label: 'Наверх', icon: 'lucide:arrow-up', action: 'scrollToTop' }
   ```

## Примеры использования

### Пример 1: Базовое меню (по умолчанию)

```vue
<MobileBottomNav />
```

### Пример 2: Кастомное меню

```vue
<MobileBottomNav
  :items="[
    { href: '/', label: 'Главная', icon: 'lucide:home' },
    { href: '/about', label: 'О нас', icon: 'lucide:user' },
    { href: '/services', label: 'Услуги', icon: 'lucide:briefcase' },
    { href: '/contact', label: 'Контакты', text: 'связь' },
    { href: '#top', label: 'Наверх', icon: 'lucide:arrow-up', action: 'scrollToTop' }
  ]"
/>
```

### Пример 3: Меню только со ссылками

```vue
<MobileBottomNav
  :items="[
    { href: '/', label: 'Главная', icon: 'lucide:home' },
    { href: '/catalog', label: 'Каталог', icon: 'lucide:grid' },
    { href: '/cart', label: 'Корзина', icon: 'lucide:shopping-cart' },
    { href: '/profile', label: 'Профиль', icon: 'lucide:user' }
  ]"
/>
```

### Пример 4: Меню с изображениями

```vue
<MobileBottomNav
  :items="[
    { href: '/products', label: 'Товары', image: '/images/products.jpg' },
    { href: '/services', label: 'Услуги', image: '/images/services.jpg' },
    { href: '/about', label: 'О нас', icon: 'lucide:info' },
    { href: '/contact', label: 'Контакты', icon: 'lucide:phone' }
  ]"
/>
```

## Особенности

- **Только для мобильных**: Компонент скрыт на экранах ≥768px (`md:hidden`)
- **Фиксированное позиционирование**: Прижат к низу экрана
- **Автоматическая подсветка**: Активный пункт выделяется синим фоном
- **Плавный скролл**: Кнопка "Наверх" прокручивает страницу плавно
- **Безопасная зона**: Поддержка `safe-area-inset-bottom` для iPhone

## Стили

Компонент использует Tailwind CSS. Основные классы:

- `fixed bottom-[6px] left-[12px] right-[12px]` — позиционирование с отступами
- `bg-white/95 backdrop-blur-xl` — полупрозрачный фон с размытием
- `rounded-2xl` — скругление контейнера
- `bg-blue-100 rounded-xl` — подложка активного пункта

## Доступность (Accessibility)

- `label` используется для `alt` у изображений
- Семантическая разметка `<nav>`
- Поддержка клавиатурной навигации

## Интеграция с другими страницами

Для добавления меню на другую страницу:

1. Импортируйте компонент
2. Добавьте после основного контента (вне `<main>`)
3. При необходимости передайте кастомный `items`

```vue
<template>
  <div>
    <Header />
    
    <main>
      <!-- Контент страницы -->
    </main>
    
    <MobileBottomNav />
  </div>
</template>
```
