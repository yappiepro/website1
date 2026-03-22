-- Таблица для push-подписок
CREATE TABLE IF NOT EXISTS push_subscriptions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  endpoint TEXT NOT NULL UNIQUE,
  p256dh TEXT NOT NULL,
  auth TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  user_agent TEXT,
  platform TEXT
);

-- Индекс для быстрого поиска
CREATE INDEX IF NOT EXISTS idx_push_subscriptions_endpoint ON push_subscriptions(endpoint);

-- Включить Row Level Security
ALTER TABLE push_subscriptions ENABLE ROW LEVEL SECURITY;

-- Разрешить вставку всем (для подписки с клиента)
CREATE POLICY "Allow insert for all" ON push_subscriptions
  FOR INSERT WITH CHECK (true);

-- Разрешить чтение всем (для Edge Function и клиента)
CREATE POLICY "Allow read for all" ON push_subscriptions
  FOR SELECT USING (true);

-- Разрешить удаление по endpoint (для отписки)
CREATE POLICY "Allow delete by endpoint" ON push_subscriptions
  FOR DELETE USING (true);

-- Комментарий к таблице
COMMENT ON TABLE push_subscriptions IS 'Хранилище Web Push подписок для уведомлений пользователей';
