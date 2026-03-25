# 🧹 Гигиена кода YAPPIE Website

## Инструменты "самоочистки"

Этот проект настроен так, чтобы автоматически предотвращать появление мусора в коде.

---

## 📋 Быстрые команды

```bash
# Проверка и исправление мусора
npm run lint:fix      # ESLint: авто-исправление
npm run cleanup:fix   # Knip: поиск неиспользуемого кода
npm run deps:check    # Depcheck: поиск лишних зависимостей

# Анализ проекта
npm run analyze       # Bundle Analyzer: анализ размера бандла
npm run deps:ui       # Nuxt DevTools: UI для анализа
```

---

## 🛠 Настроенные инструменты

### 1. Zero-Waste ESLint

**Плагин:** `eslint-plugin-unused-imports`

**Правила:**
- ❌ Запрещены неиспользуемые импорты
- ❌ Запрещены неиспользуемые переменные
- ❌ Запрещён `console.log` (разрешены только `warn` и `error`)
- ✅ Авто-удаление при сохранении/коммите

**Конфигурация:** `eslint.config.js`

```javascript
'unused-imports/no-unused-imports': 'error',
'unused-imports/no-unused-vars': ['error', {
  varsIgnorePattern: '^_|^h$',
  argsIgnorePattern: '^_',
}],
'no-console': ['error', { allow: ['warn', 'error'] }]
```

---

### 2. Knip — поиск "мёртвых душ"

**Пакет:** `knip`

**Что находит:**
- 📁 Неиспользуемые файлы
- 🔗 Неиспользуемые экспорты
- 📦 Неиспользуемые зависимости
- 🔁 Дубликаты

**Команды:**
```bash
npm run cleanup        # Проверка
npm run cleanup:fix    # Исправление (где возможно)
```

**Конфигурация:** `knip.json`

**Сканирует:**
- `components/`
- `composables/`
- `pages/`
- `plugins/`
- `server/`
- `types/`

---

### 3. Husky + lint-staged

**Pre-commit хук запускает:**

1. **ESLint** — авто-исправление мусора в изменённых файлах
2. **TypeScript typecheck** — проверка типов
3. **Блокировка коммита** при ошибках

**Файл:** `.husky/pre-commit`

```bash
#!/usr/bin/env sh
npx lint-staged      # ESLint --fix
npx nuxi typecheck   # TypeScript проверка
```

---

### 4. Depcheck — ревизия зависимостей

**Пакет:** `depcheck`

**Команда:**
```bash
npm run deps:check
```

**Игнорирует:**
- `@types/*` — типы TypeScript

---

### 5. Bundle Analyzer

**Инструмент:** Nuxt DevTools + `nuxt analyze`

**Команды:**
```bash
npm run analyze    # Анализ сборки
npm run deps:ui    # DevTools UI
```

**Что показывает:**
- 📊 Размер каждого модуля
- 🔁 Дубликаты библиотек
- ⚠️ Огромные зависимости

---

## 🎯 Правила разработки

### Принцип "Zero-Waste"

> Если функция или компонент не используется более одного раза — не делай их глобальными.

> Если ты удаляешь часть логики, ты обязан удалить все связанные с ней импорты, переменные и стили.

> Весь неиспользуемый код — это технический долг, который ты не имеешь права создавать.

### Чек-лист перед коммитом

- [ ] Нет неиспользуемых импортов
- [ ] Нет `console.log` (только `warn`/`error`)
- [ ] Нет мёртвого кода (проверить через `npm run cleanup`)
- [ ] TypeScript проверка прошла
- [ ] ESLint не показывает ошибок

---

## 🚨 Типичные проблемы и решения

### "ESlint показывает unused import"

**Решение:**
```bash
npm run lint:fix  # Авто-удаление
```

Или вручную удалите неиспользуемый импорт.

---

### "Knip показывает неиспользуемый файл"

**Решение:**
1. Проверьте, действительно ли файл не используется
2. Если не используется — удалите файл
3. Если используется — добавьте в `knip.json` → `ignore`

---

### "Depcheck показывает лишнюю зависимость"

**Решение:**
1. Проверьте через grep, где используется зависимость
2. Если не используется — удалите:
   ```bash
   npm uninstall название-пакета
   ```

---

### "Husky блокирует коммит"

**Причина:** ESLint или TypeScript нашли ошибки

**Решение:**
```bash
npm run lint:fix  # Исправить ошибки
npm run lint      # Проверить
git add .         # Добавить исправления
git commit        # Повторить коммит
```

---

## 📊 Метрики чистоты

| Метрика | Цель | Текущее |
|---------|------|---------|
| Unused imports | 0 | ✅ 0 |
| Dead files | 0 | ✅ 0 |
| Unused dependencies | 0 | ✅ 0 |
| console.log | 0 | ✅ 0 |
| TypeScript errors | 0 | ✅ 0 |

---

## 🔗 Полезные ссылки

- [ESLint документация](https://eslint.org/docs/)
- [Knip документация](https://knip.dev/)
- [Depcheck документация](https://github.com/depcheck/depcheck)
- [Nuxt DevTools](https://devtools.nuxt.com/)
- [Husky документация](https://typicode.github.io/husky/)

---

**Помни:** Чистый код — это ответственность каждого разработчика. 🧹
