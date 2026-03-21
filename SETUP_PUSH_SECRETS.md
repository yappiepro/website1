# 🔑 Настройка GitHub Secrets для Push-уведомлений

## Шаг 1. Открой GitHub Secrets

Перейди: https://github.com/yappiepro/website1/settings/secrets/actions

---

## Шаг 2. Добавь 3 секрета

### 1️⃣ `NUXT_FIREBASE_VAPID_KEY` (Public ключ)

```
BDOK37mmwYnWudfNW8wtElBqSCcs8eps68BllA1X-EXJXce8vnAnoniHa4dJrqM3yDrCHCirnln5AlkPQC0wgYeQ
```

### 2️⃣ `VAPID_PRIVATE_KEY` (Private ключ)

```
rWq1WDuGyaNARz5i2FwZcTNrEYOmSRf5jOHVegGX7kE
```

### 3️⃣ `FIREBASE_SERVICE_ACCOUNT` (JSON сервисного аккаунта)

#### Как получить:

1. **Firebase Console:** https://console.firebase.google.com/project/artemselifanov-ru-pwa/settings/serviceaccounts/adminsdk

2. Нажми **"Generate new private key"**

3. Скачается файл `serviceaccountkey.json`

4. **Конвертируй в одну строку:**
   ```bash
   # macOS/Linux
   cat serviceAccountKey.json | tr -d '\n' | pbcopy
   
   # Windows PowerShell
   Get-Content serviceAccountKey.json -Raw | Set-Clipboard
   ```

5. Вставь в GitHub Secret (должна получиться одна длинная строка)

---

## Шаг 3. Проверка

После добавления секретов:

1. GitHub → Actions → **Send Push Notification**
2. **Run workflow**
3. Заполни тестовые данные:
   - Title: `Тест пуша`
   - Body: `Проверка работы`
   - URL: `/notifications`
4. Запусти

---

## 📋 Чек-лист

- [ ] `NUXT_FIREBASE_VAPID_KEY` добавлен
- [ ] `VAPID_PRIVATE_KEY` добавлен
- [ ] `FIREBASE_SERVICE_ACCOUNT` добавлен (в одну строку!)
- [ ] Firestore имеет коллекцию `push_subscriptions`
- [ ] Есть хотя бы одна тестовая подписка

---

## ⚠️ Важно

- **Никогда не коммить** `serviceAccountKey.json` в репозиторий
- Файл уже добавлен в `.gitignore`
- Храни секреты только в GitHub Secrets
