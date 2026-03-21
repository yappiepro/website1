# Настройка Push-уведомлений Firebase

## 1. Установка зависимостей

```bash
npm install firebase idb-keyval
```

## 2. Настройка Firebase проекта

### Firebase Console

1. Зайди на https://console.firebase.google.com/
2. Создай новый проект или выбери существующий (`artemselifanov-ru-pwa`)
3. Включи **Cloud Messaging** в разделе Build → Cloud Messaging

### Web App

1. Project Settings → General → Your apps → Add app → Web
2. Скопируй `firebaseConfig`
3. Вставь значения в `.env` файл

### VAPID Key для Push

1. Project Settings → Cloud Messaging → Web Push certificates
2. Нажми **Generate key pair**
3. Скопируй ключ и вставь в `.env`:

```
NUXT_FIREBASE_VAPID_KEY=your-generated-vapid-key-here
```

## 3. Переменные окружения

Отредактируй `.env` файл:

```env
NUXT_FIREBASE_API_KEY=...
NUXT_FIREBASE_AUTH_DOMAIN=...
NUXT_FIREBASE_PROJECT_ID=...
NUXT_FIREBASE_STORAGE_BUCKET=...
NUXT_FIREBASE_MESSAGING_SENDER_ID=...
NUXT_FIREBASE_APP_ID=...
NUXT_FIREBASE_MEASUREMENT_ID=...
NUXT_FIREBASE_VAPID_KEY=...
```

## 4. Перезапуск сервера

```bash
npm run dev
```

## 5. Проверка работы

1. Открой http://localhost:3000
2. Через 5 секунд появится промопт с предложением подписаться
3. Нажми «Подписаться» → разреши уведомления в браузере
4. Проверь `/notifications` — должен быть статус «Активна»

## 6. Тестирование уведомлений

### Отправка тестового уведомления

В Firebase Console:
1. Cloud Messaging → New campaign
2. Выбери тип уведомления
3. Заполни title/body
4. Отправь

### Программная отправка

```javascript
// Для отправки нужен backend с Firebase Admin SDK
// Пример через REST API:

POST https://fcm.googleapis.com/fcm/send
Headers:
  Authorization: key=YOUR_SERVER_KEY
  Content-Type: application/json

Body:
{
  "to": "CLIENT_FCM_TOKEN",
  "notification": {
    "title": "Заголовок",
    "body": "Текст уведомления",
    "image": "https://..."
  },
  "data": {
    "url": "https://artemselifanov.ru/blog/novaya-statya",
    "type": "new-article"
  }
}
```

## 7. Структура файлов

```
composables/
  useFirebase.js              # Инициализация Firebase
  usePushNotifications.js     # Логика подписки/отписки

components/ui/
  PushNotificationPrompt.vue  # Промпт для подписки
  NotificationToggle.vue      # Переключатель вкл/выкл

pages/
  notifications.vue           # Страница управления

public/
  firebase-messaging-sw.js    # Service worker для FCM
```

## 8. Компоненты

### PushNotificationPrompt

Автоматически появляется через 5 секунд после загрузки страницы.

**Поведение:**
- Показывается если пользователь не подписан
- Исчезает после подписки или нажатия «Позже»
- Не показывается 30 дней после отклонения

### NotificationToggle

Переключатель на странице `/notifications`.

**Функции:**
- Вкл/выкл уведомления
- Показывает статус подписки
- Работает без перезагрузки страницы

## 9. Ограничения

### iOS Safari
- Push работают только с iOS 16.4+
- Требуется добавить сайт на домашний экран
- PWA должно быть установлено

### Android Chrome
- Работает на всех версиях Android 5+
- Требуется HTTPS

### Desktop
- Chrome/Edge: полная поддержка
- Firefox: поддержка с ограничениями
- Safari: требуется macOS 10.14+

## 10. Интеграция с блогом

Для автоматической отправки уведомлений о новых статьях:

1. Добавь вызов в `pages/blog/[slug].vue`:

```javascript
// После публикации статьи
if (process.server) {
  await sendNotificationToSubscribers({
    title: article.title,
    body: article.description,
    url: `https://artemselifanov.ru/blog/${article.slug}`,
    type: 'new-article'
  })
}
```

2. Создай API endpoint `/api/notifications/send` для отправки через Firebase Admin SDK

## 11. Firebase Admin SDK (для сервера)

```bash
npm install firebase-admin
```

```javascript
// server/utils/firebase.js
import admin from 'firebase-admin'

const serviceAccount = require('./serviceAccountKey.json')

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
})

export async function sendNotification(token, { title, body, image, url, type }) {
  return admin.messaging().send({
    token,
    notification: { title, body, image },
    data: { url, type },
    webpush: {
      fcmOptions: { link: url }
    }
  })
}
```

## 12. Метрики

Отслеживай в Firebase Console:
- Количество подписчиков
- Открытия уведомлений
- Конверсия в переходы на сайт
