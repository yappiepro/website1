# Настройка Supabase для Push-уведомлений

## 1. Создать таблицу push_subscriptions

Открой **SQL Editor** в Supabase и выполни:

```sql
-- Таблица для push-подписок
CREATE TABLE push_subscriptions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  endpoint TEXT NOT NULL UNIQUE,
  p256dh TEXT NOT NULL,
  auth TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  user_agent TEXT,
  platform TEXT
);

-- Индекс для быстрого поиска
CREATE INDEX idx_push_subscriptions_endpoint ON push_subscriptions(endpoint);

-- Включить Row Level Security
ALTER TABLE push_subscriptions ENABLE ROW LEVEL SECURITY;

-- Разрешить вставку всем (для подписки)
CREATE POLICY "Allow insert for all" ON push_subscriptions
  FOR INSERT WITH CHECK (true);

-- Разрешить чтение всем (для Edge Function)
CREATE POLICY "Allow read for all" ON push_subscriptions
  FOR SELECT USING (true);

-- Разрешить удаление по endpoint
CREATE POLICY "Allow delete by endpoint" ON push_subscriptions
  FOR DELETE USING (true);
```

## 2. Проверить таблицу

Открой **Table Editor** → `push_subscriptions`

Должна отображаться пустая таблица с колонками:
- id
- endpoint
- p256dh
- auth
- created_at
- user_agent
- platform

## 3. VAPID ключи для Web Push

Сгенерируй VAPID ключи:

```bash
npx web-push generate-vapid-keys
```

Сохрани:
- **Public Key** (для frontend)
- **Private Key** (для Edge Function)

## 4. Обновить .env

```bash
# VAPID Public Key
NUXT_FIREBASE_VAPID_KEY=<твой public key>
```

## 5. Создать Edge Function (следующий шаг)

Смотри `SUPABASE_EDGE_FUNCTION.md`
