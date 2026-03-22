# Supabase Edge Function для отправки заявок в Telegram

## 📁 Структура

```
supabase/
└── functions/
    └── send-contact/
        └── index.ts  # Edge Function
```

## 🚀 Деплой

### 1. Установи Supabase CLI (если нет)

```bash
npm install -g supabase
```

### 2. Авторизуйся в Supabase

```bash
supabase login
```

### 3. Создай секреты в Supabase

Открой [Supabase Dashboard](https://supabase.com/dashboard) → твой проект → Settings → Edge Functions → Secrets

Добавь секреты:

| Ключ | Значение |
|------|----------|
| `TELEGRAM_BOT_TOKEN` | `6765466291:AAEUbSdrHjviCqM8Nj-36I16lJ1UYseF-jw` |
| `TELEGRAM_CHAT_ID` | `151457626` |
| `SUPABASE_URL` | `https://your-project.supabase.co` |
| `SUPABASE_SERVICE_ROLE_KEY` | `eyJhbG...` (из Settings → API) |

Или через CLI:

```bash
supabase secrets set TELEGRAM_BOT_TOKEN=6765466291:AAEUbSdrHjviCqM8Nj-36I16lJ1UYseF-jw
supabase secrets set TELEGRAM_CHAT_ID=151457626
```

### 4. Задеплой функцию

```bash
cd supabase/functions/send-contact
supabase functions deploy send-contact
```

### 5. Проверь работу

```bash
curl -X POST 'https://your-project.supabase.co/functions/v1/send-contact' \
  -H 'Authorization: Bearer YOUR_ANON_KEY' \
  -H 'Content-Type: application/json' \
  -d '{
    "name": "Тест",
    "phone": "+7 (999) 123-45-67",
    "email": "test@example.com",
    "source": "Тест"
  }'
```

## 🔒 Безопасность

### Настрой CORS (опционально)

В Supabase Dashboard → Authentication → URL Configuration:

- Site URL: `https://artemselifanov.ru`
- Redirect URLs: `https://artemselifanov.ru/**`

### Добавь RLS политики

В SQL Editor выполни:

```sql
-- Разрешить анонимную вставку только в contact_submissions
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow anonymous insert" ON contact_submissions
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow authenticated read" ON contact_submissions
  FOR SELECT USING (auth.role() = 'authenticated');
```

## 📝 Использование на сайте

Функция автоматически вызывается из `ContactForm.vue` через composable `useTelegramNotification.js`.

## 🧪 Тестирование

1. Открой сайт: http://localhost:3000
2. Заполни форму контактов
3. Отправь
4. Проверь консоль: должно быть `[Edge Function] Success: {...}`
5. Проверь Telegram — должно прийти уведомление
6. Проверь Supabase → Table Editor → `contact_submissions`

## 🛠️ Отладка

### Логи функции

```bash
supabase functions logs send-contact
```

### Проверка секретов

```bash
supabase secrets list
```

### Перезапуск функции

```bash
supabase functions delete send-contact
supabase functions deploy send-contact
```

## 📊 Мониторинг

В Supabase Dashboard → Functions → send-contact → Logs

## 🔗 Ссылки

- [Supabase Functions Docs](https://supabase.com/docs/guides/functions)
- [Deno Deploy Docs](https://deno.com/deploy/docs)
