-- ============================================
-- Push Subscriptions Table for Web Push
-- ============================================
-- Выполните этот скрипт в Supabase Dashboard:
-- https://supabase.com/dashboard/project/famxhijlisxdsggevcqi/sql/new
-- ============================================

-- Создаём таблицу для хранения push-подписок
CREATE TABLE IF NOT EXISTS push_subscriptions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  endpoint TEXT NOT NULL UNIQUE,
  p256dh TEXT NOT NULL,
  auth TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  user_agent TEXT,
  platform TEXT
);

-- Создаём индекс для быстрого поиска по endpoint
CREATE INDEX IF NOT EXISTS idx_push_subscriptions_endpoint ON push_subscriptions(endpoint);

-- Включаем Row Level Security (RLS)
ALTER TABLE push_subscriptions ENABLE ROW LEVEL SECURITY;

-- Политики безопасности
-- Разрешаем вставку всем (для подписки с клиента)
DROP POLICY IF EXISTS "Allow insert for all" ON push_subscriptions;
CREATE POLICY "Allow insert for all" ON push_subscriptions
  FOR INSERT
  WITH CHECK (true);

-- Разрешаем чтение всем (для Edge Function и клиента)
DROP POLICY IF EXISTS "Allow read for all" ON push_subscriptions;
CREATE POLICY "Allow read for all" ON push_subscriptions
  FOR SELECT
  USING (true);

-- Разрешаем удаление по endpoint (для отписки)
DROP POLICY IF EXISTS "Allow delete by endpoint" ON push_subscriptions;
CREATE POLICY "Allow delete by endpoint" ON push_subscriptions
  FOR DELETE
  USING (true);
