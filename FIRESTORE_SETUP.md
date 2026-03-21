# Настройка Firestore для Push-уведомлений

## 1. Включить Firestore в Firebase Console

1. Открой https://console.firebase.google.com/project/artemselifanov-ru-pwa
2. **Build** → **Firestore Database**
3. Нажми **Create database**
4. Выбери **Start in test mode** (для начала)
5. Выбери регион: `europe-west` (ближайший к РФ)
6. Нажми **Enable**

## 2. Настроить правила безопасности

Для начала установи правила:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Запрет на чтение/запись для клиентов (только через Admin SDK)
    match /push_tokens/{document} {
      allow read, write: if false;
    }
  }
}
```

Это защитит базу — токены можно будет добавлять только через серверный API.

## 3. Создать сервисный аккаунт

1. **Project Settings** (⚙️) → **Service accounts**
2. Нажми **Generate new private key**
3. Скачай JSON файл
4. Переименуй его в `serviceAccountKey.json`
5. Положи в папку проекта (не коммить в git!)

## 4. Добавить SERVICE_ACCOUNT в .env

Открой `.env` и добавь:

```env
# Firebase Admin SDK
FIREBASE_SERVICE_ACCOUNT={"type":"service_account","project_id":"artemselifanov-ru-pwa",...}
```

**Важно:** Вставь содержимое `serviceAccountKey.json` как одну строку (без переносов).

### Как подготовить JSON:

```bash
# На Mac/Linux
cat serviceAccountKey.json | tr -d '\n' | pbcopy

# Затем вставь (Cmd+V) в .env после FIREBASE_SERVICE_ACCOUNT=
```

## 5. Создать индекс для запросов

При первом запросе Firestore может потребовать создать индекс.

Ссылка на создание индекса появится в логах ошибки. Или создай вручную:

1. **Firestore Database** → **Indexes**
2. Нажми **Add Index**
3. Collection ID: `push_tokens`
4. Fields to index:
   - `token` (Ascending)
5. Нажми **Create**

## 6. Проверка работы

После настройки:

1. Запусти сайт: `npm run dev`
2. Подпишись на уведомления
3. Проверь консоль — должно быть `[Firestore] Токен сохранён`
4. Проверь Firebase Console → Firestore Database — должна появиться коллекция `push_tokens`

## 7. Отправка уведомлений

Для отправки уведомлений используй Firebase Cloud Messaging API:

```bash
# Пример через curl
curl -X POST -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  https://fcm.googleapis.com/v1/projects/artemselifanov-ru-pwa/messages:send \
  -d '{
    "message": {
      "token": "FCM_TOKEN",
      "notification": {
        "title": "Заголовок",
        "body": "Текст"
      }
    }
  }'
```

Или через Firebase Console → **Cloud Messaging** → **New campaign**.
