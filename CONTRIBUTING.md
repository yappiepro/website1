# 🛠 Руководство разработчика YAPPIE Website

## Быстрый старт

```bash
npm install
npm run dev
```

## Команды

| Команда            | Описание                             |
| ------------------ | ------------------------------------ |
| `npm run dev`      | Запуск dev-сервера (localhost:3000)  |
| `npm run build`    | Сборка для production (SSR)          |
| `npm run generate` | Генерация статического сайта в dist/ |
| `npm run preview`  | Preview production сборки            |
| `npm run lint`     | Проверка кода через ESLint           |
| `npm run lint:fix` | Проверка + авто-исправление ошибок   |

## Code Quality

### ESLint + Prettier

Проект использует ESLint 9 (flat config) + Prettier для автоматического форматирования.

**Проверка:**

```bash
npm run lint
```

**Авто-исправление:**

```bash
npm run lint:fix
```

### Pre-commit хуки

Husky + lint-staged автоматически проверяют и форматируют только изменённые файлы при каждом commit:

```bash
git add .
git commit -m "feat: добавить новую фичу"
# → автоматически запускается lint-staged
```

### Правила кода

**Vue компоненты:**

```vue
<script setup lang="ts">
// 1. Импорты
import { ref } from 'vue'
import { IconName } from 'lucide-vue-next'

// 2. Пропсы
const props = defineProps<{ title: string }>()

// 3. Реактивные данные
const isOpen = ref(false)

// 4. Функции
function handleClick() {}
</script>

<template>
  <div class="...">
    <!-- Контент -->
  </div>
</template>

<style scoped>
/* Стили */
</style>
```

**TypeScript:**

- Запрещены `any` (используйте `unknown` или конкретные типы)
- Обязательны возвратимые типы для функций
- Unused переменные должны начинаться с `_`

**Форматирование:**

- 2 пробела для отступов
- 100 символов макс. длина строки
- Одинарные кавычки
- Нет semicolons в конце строк

## Структура проекта

```
лендинг ai/
├── .ai/                    # Документация для AI-агентов
├── .husky/                 # Git hooks
├── components/
│   ├── landing/           # Компоненты лендинга
│   ├── layout/            # Layout компоненты
│   └── ui/                # UI компоненты (shadcn/vue)
├── composables/           # Vue composables
├── data/                  # Данные (блог, знания)
├── pages/                 # Страницы Nuxt
├── public/                # Статические файлы
├── scripts/               # Build скрипты
└── eslint.config.js       # ESLint конфигурация
```

## Тесты

```bash
npm run test          # Запуск тестов
npm run test:watch    # Тесты в режиме watch
npm run test:coverage # Тесты с покрытием
```

## Деплой

Автоматический деплой при push в `main`:

```bash
git add .
git commit -m "feat: описание изменений"
git push origin main
```

GitHub Actions:

1. Запускает `npm ci`
2. Запускает `npm run generate`
3. Деплоит на GitHub Pages

## Устранение проблем

### Ошибки линтинга

```bash
# Авто-исправление
npm run lint:fix

# Ручное исправление конкретного файла
npx eslint pages/index.vue --fix
```

### Конфликты форматирования

```bash
# Переустановить зависимости
rm -rf node_modules package-lock.json
npm install

# Пересобрать
npm run generate
```

### Pre-commit хук не работает

```bash
# Переустановить husky
npx husky install
npx husky add .husky/pre-commit "npx lint-staged"
```

## Контакты

- **Telegram:** https://t.me/artemselifanov
- **Репозиторий:** https://github.com/yappiepro/website1
