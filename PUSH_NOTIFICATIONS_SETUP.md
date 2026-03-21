# Настройка Push-уведомлений (Web Push для iOS + Android)

## 1. Установка зависимостей

```bash
npm install firebase idb-keyval
```

## 2. Настройка Firebase проекта

### Firebase Console

1. Зайди на https://console.firebase.google.com/
2. Создай новый проект или выбери существующий (`artemselifanov-ru-pwa`)
3. Включи **Firestore** и **Cloud Messaging** (для аналитики и общего доступа)

### Web App

1. Project Settings → General → Your apps → Add app → Web
2. Скопируй `firebaseConfig`
3. Вставь значения в `.env` файл

### VAPID Key для Push (Web Push)

1. Сгенерируй VAPID ключи для Web Push (публичный и приватный):

```bash
cd functions
npm install
npx web-push generate-vapid-keys
```

2. Публичный ключ вставь в `.env`:

```
NUXT_FIREBASE_VAPID_KEY=your-public-vapid-key-here
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

### Отправка тестового уведомления (Web Push)

Для Web Push нужен backend (Cloud Functions). После деплоя функции можно отправлять так:

```bash
curl -X POST "https://<REGION>-<PROJECT_ID>.cloudfunctions.net/sendPushToAll" \
  -H "Content-Type: application/json" \
  -H "x-api-key: YOUR_PUSH_API_KEY" \
  -d '{
    "title": "Тест",
    "body": "Проверка Web Push",
    "url": "https://artemselifanov.ru/notifications",
    "type": "test"
  }'
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
  firebase-messaging-sw.js    # Service worker для Web Push
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

## 11. Cloud Functions (для отправки Web Push)

Функция `sendPushToAll` находится в `functions/index.js`.

Нужно задать переменные окружения через Firebase Functions config:

```bash
firebase functions:config:set \
  webpush.public_key="PUBLIC_VAPID_KEY" \
  webpush.private_key="PRIVATE_VAPID_KEY" \
  webpush.subject="mailto:you@domain.com" \
  webpush.api_key="YOUR_PUSH_API_KEY"
```

Затем деплой функций:

```bash
cd functions
npm install
firebase deploy --only functions
```
```
PUBLIC_VAPID_KEY / PRIVATE_VAPID_KEY берутся из генерации выше.
```

## 12. Метрики

Отслеживай в Firebase Console:
- Количество подписчиков
- Открытия уведомлений
- Конверсия в переходы на сайт
