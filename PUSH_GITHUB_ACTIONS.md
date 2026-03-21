# Web Push через GitHub Actions

> 💡 Полностью бесплатная альтернатива Firebase Cloud Functions

---

## 📋 Обзор

Система отправляет Web Push уведомления через GitHub Actions:
- **Хранение подписок:** Firestore
- **Отправка:** GitHub Actions workflow
- **Триггеры:** вручную или по расписанию

---

## 🔧 Настройка

### 1. GitHub Secrets

В GitHub → Settings → Secrets and variables → Actions добавь:

| Secret | Значение |
|--------|----------|
| `NUXT_FIREBASE_VAPID_KEY` | Public VAPID ключ |
| `VAPID_PRIVATE_KEY` | Private VAPID ключ |
| `FIREBASE_SERVICE_ACCOUNT` | JSON сервисного аккаунта Firebase (в одну строку) |

#### Как получить FIREBASE_SERVICE_ACCOUNT:

1. Firebase Console → Project Settings → Service accounts
2. **Generate new private key**
3. Скачай JSON файл
4. Конвертируй в одну строку:
   ```bash
   cat serviceAccountKey.json | tr -d '\n' | pbcopy
   ```
5. Вставь в GitHub Secret

---

## 🚀 Использование

### Отправка через GitHub UI

1. GitHub → Actions → **Send Push Notification**
2. **Run workflow**
3. Заполни параметры:
   - **Title:** Заголовок уведомления
   - **Body:** Текст
   - **URL:** Ссылка (например, `/blog/novaya-statya`)
   - **Image:** URL картинки (опционально)
   - **Type:** Тип (`new-article`, `event`, `promo`)
4. **Run workflow**

### Отправка через GitHub CLI

```bash
gh workflow run send-push.yml \
  -f title="Новая статья!" \
  -f body="Читайте свежий пост в блоге" \
  -f url="/blog/novaya-statya" \
  -f type="new-article"
```

### Отправка через API GitHub

```bash
curl -L \
  -X POST \
  -H "Accept: application/vnd.github+json" \
  -H "Authorization: Bearer $GH_TOKEN" \
  -H "X-GitHub-Api-Version: 2022-11-28" \
  https://api.github.com/repos/yappiepro/website1/actions/workflows/send-push.yml/dispatches \
  -d '{
    "ref": "main",
    "inputs": {
      "title": "Новая статья!",
      "body": "Читайте свежий пост в блоге",
      "url": "/blog/novaya-statya",
      "type": "new-article"
    }
  }'
```

---

## 📁 Файлы

| Файл | Назначение |
|------|------------|
| `.github/workflows/send-push.yml` | Workflow отправки пушей |
| `scripts/send-push.js` | Скрипт отправки |
| `scripts/package.json` | Зависимости скрипта |

---

## 🧪 Локальное тестирование

```bash
cd scripts
npm install

# Запуск с параметрами
node send-push.js \
  --title "Тест" \
  --body "Проверка работы" \
  --url "/notifications"

# Или через npm script
npm run send-push -- \
  --title "Тест" \
  --body "Проверка работы" \
  --url "/notifications"
```

---

## ⚙️ Автоматизация по расписанию

Открой `.github/workflows/send-push.yml` и добавь cron:

```yaml
on:
  schedule:
    - cron: '0 9 * * 1' # Каждый понедельник в 9:00 UTC
```

### Примеры cron:

| Cron | Описание |
|------|----------|
| `0 9 * * 1` | Каждый понедельник в 9:00 UTC |
| `0 12 * * *` | Каждый день в 12:00 UTC |
| `0 9 * * 1-5` | Пн-Пт в 9:00 UTC |
| `0 */6 * * *` | Каждые 6 часов |

---

## 📊 Ограничения GitHub Actions

| План | Лимит |
|------|-------|
| Free | 2,000 минут/месяц |
| Pro | 3,000 минут/месяц |
| Team | 3,000 минут/месяц |

**Одна отправка пуша:** ~30-60 секунд

**Итого:** ~30-60 отправок в месяц бесплатно

---

## 🔗 Интеграция с другими системами

### Отправка при публикации статьи

Создай workflow, который триггерится на изменения в `data/blog/`:

```yaml
on:
  push:
    paths:
      - 'data/blog/**/*.js'
```

### Отправка из Telegram бота

Используй GitHub API для триггера workflow по команде из бота.

---

## 🛠️ Troubleshooting

### ❌ "No subscriptions found"

Проверь, что подписки сохранены в Firestore:
- Firebase Console → Firestore → коллекция `push_subscriptions`

### ❌ "VAPID keys not configured"

Проверь GitHub Secrets:
- `NUXT_FIREBASE_VAPID_KEY`
- `VAPID_PRIVATE_KEY`

### ❌ "Firebase Admin initialization failed"

Проверь `FIREBASE_SERVICE_ACCOUNT`:
- JSON должен быть в одну строку (без `\n`)
- Все поля должны быть на месте

---

## 📈 Метрики

После каждого запуска в логах Actions:
- ✅ Успешно доставлено
- 🗑️ Удалено невалидных подписок
- ❌ Ошибки доставки

---

## 💡 Советы

1. **Тестируй локально** перед запуском в Actions
2. **Следи за лимитами** — 2000 минут/месяц
3. **Удаляй невалидные подписки** — скрипт делает это автоматически
4. **Персонализируй** — используй разные `type` для сегментации
5. **A/B тесты** — создай несколько workflow с разными текстами

---

## 🔗 Ссылки

- GitHub Actions: https://github.com/yappiepro/website1/actions
- Firebase Console: https://console.firebase.google.com/project/artemselifanov-ru-pwa
- Web Push Spec: https://w3c.github.io/push-api/
