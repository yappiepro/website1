# Настройка Push-уведомлений

## ✅ Выполнено автоматически

1. **VAPID ключи сгенерированы**
   - Public Key: `BDOK37mmwYnWudfNW8wtElBqSCcs8eps68BllA1X-EXJXce8vnAnoniHa4dJrqM3yDrCHCirnln5AlkPQC0wgYeQ`
   - Private Key: `rWq1WDuGyaNARz5i2FwZcTNrEYOmSRf5jOHVegGX7kE`

2. **`.env` обновлён** — VAPID ключ добавлен

3. **Cloud Functions готовы** — `functions/index.js` содержит код отправки

4. **Firestore rules готовы** — `firestore.rules` настроен

5. **GitHub Actions готов** — `.github/workflows/deploy.yml` использует секреты

---

## 🔧 Требуется твоё участие

### Шаг 1. Установить Firebase CLI

```bash
sudo npm install -g firebase-tools
firebase login
```

### Шаг 2. Добавить GitHub Secret

В GitHub → Settings → Secrets and variables → Actions добавь:

| Secret | Значение |
|--------|----------|
| `NUXT_FIREBASE_VAPID_KEY` | `BDOK37mmwYnWudfNW8wtElBqSCcs8eps68BllA1X-EXJXce8vnAnoniHa4dJrqM3yDrCHCirnln5AlkPQC0wgYeQ` |

### Шаг 3. Настроить Firebase Functions config

После установки Firebase CLI выполни:

```bash
cd /Users/artemselifanov/qwen/лендинг\ ai
firebase functions:config:set \
  webpush.public_key="BDOK37mmwYnWudfNW8wtElBqSCcs8eps68BllA1X-EXJXce8vnAnoniHa4dJrqM3yDrCHCirnln5AlkPQC0wgYeQ" \
  webpush.private_key="rWq1WDuGyaNARz5i2FwZcTNrEYOmSRf5jOHVegGX7kE" \
  webpush.subject="mailto:a9535487323@yandex.ru" \
  webpush.api_key="твой_секретный_ключ_для_защиты_api"
```

> **Примечание:** `webpush.api_key` — это твой секретный ключ для защиты endpoint'а. Придумай сложную строку (например, UUID).

### Шаг 4. Применить Firestore Rules

1. Открой Firebase Console: https://console.firebase.google.com/project/artemselifanov-ru-pwa/firestore/rules
2. Вставь правила из файла `firestore.rules`:

```js
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /push_subscriptions/{docId} {
      allow create: if true;
      allow read, update, delete: if false;
    }
  }
}
```
3. Нажми **Publish**

### Шаг 5. Задеплоить функции

```bash
cd /Users/artemselifanov/qwen/лендинг\ ai/functions
firebase deploy --only functions
```

После деплоя ты увидишь URL функции, например:
```
https://us-central1-artemselifanov-ru-pwa.cloudfunctions.net/sendPushToAll
```

---

## 🧪 Проверка

### 1. Проверка подписки на iPhone

1. Открой PWA (добавь на домашний экран)
2. Перейди на `/notifications`
3. Нажми **«Обновить токен»**
4. Проверь Firestore Console → `push_subscriptions` — должна появиться запись

### 2. Отправка тестового пуша

```bash
curl -X POST "https://<REGION>-<PROJECT_ID>.cloudfunctions.net/sendPushToAll" \
  -H "Content-Type: application/json" \
  -H "x-api-key: твой_API_KEY" \
  -d '{
    "title": "Тест",
    "body": "Web Push работает!",
    "url": "https://artemselifanov.ru/notifications"
  }'
```

---

## 📁 Файлы

| Файл | Назначение |
|------|------------|
| `functions/index.js` | Cloud Function отправки пушей |
| `functions/package.json` | Зависимости functions |
| `firebase.json` | Конфигурация Firebase |
| `.firebaserc` | Проект Firebase |
| `firestore.rules` | Правила безопасности Firestore |
| `composables/usePushNotifications.js` | Логика подписки на фронтенде |
| `pages/notifications.vue` | Страница управления уведомлениями |
| `.env` | Переменные окружения (VAPID ключ) |

---

## 🔗 Быстрые ссылки

- Firebase Console: https://console.firebase.google.com/project/artemselifanov-ru-pwa
- GitHub Secrets: https://github.com/yappiepro/website1/settings/secrets/actions
- Firestore: https://console.firebase.google.com/project/artemselifanov-ru-pwa/firestore
