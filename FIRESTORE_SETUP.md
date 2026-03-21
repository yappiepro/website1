# Настройка Firestore для Web Push-уведомлений

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
    // Разрешаем только создание подписки с клиента
    match /push_subscriptions/{document} {
      allow create: if true;
      allow read, update, delete: if false;
    }
  }
}
```

Это защитит базу — токены можно будет добавлять только через серверный API.

## 3. Проверка работы

После настройки:

1. Запусти сайт: `npm run dev`
2. Подпишись на уведомления
3. Проверь Firebase Console → Firestore Database — должна появиться коллекция `push_subscriptions`

## 4. Отправка уведомлений

Для отправки уведомлений используй Cloud Function `sendPushToAll`.

```bash
curl -X POST "https://<REGION>-<PROJECT_ID>.cloudfunctions.net/sendPushToAll" \
  -H "Content-Type: application/json" \
  -H "x-api-key: YOUR_PUSH_API_KEY" \
  -d '{
    "title": "Заголовок",
    "body": "Текст",
    "url": "https://artemselifanov.ru/notifications"
  }'
```
