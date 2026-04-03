-- ============================================
-- Business Contacts Directory Table
-- Выполните в Supabase Dashboard → SQL Editor
-- ============================================

-- Таблица бизнес-контактов
CREATE TABLE IF NOT EXISTS business_contacts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  business_name TEXT NOT NULL,
  category TEXT,
  description TEXT,
  telegram_link TEXT,
  website_url TEXT,
  owner_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  is_approved BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Индексы
CREATE INDEX IF NOT EXISTS idx_business_contacts_owner ON business_contacts(owner_id);
CREATE INDEX IF NOT EXISTS idx_business_contacts_approved ON business_contacts(is_approved);
CREATE INDEX IF NOT EXISTS idx_business_contacts_created ON business_contacts(created_at DESC);

-- Включить RLS
ALTER TABLE business_contacts ENABLE ROW LEVEL SECURITY;

-- ============================================
-- RLS Политики
-- ============================================

-- SELECT: все аутентифицированные видят только одобренные
DROP POLICY IF EXISTS "Authenticated users can view approved" ON business_contacts;
CREATE POLICY "Authenticated users can view approved" ON business_contacts
  FOR SELECT
  USING (
    auth.role() = 'authenticated'
    AND is_approved = TRUE
  );

-- INSERT: только автор может добавлять свои контакты
DROP POLICY IF EXISTS "Users can insert own contacts" ON business_contacts;
CREATE POLICY "Users can insert own contacts" ON business_contacts
  FOR INSERT
  WITH CHECK (
    auth.uid() = owner_id
  );

-- UPDATE: только автор может редактировать свои контакты
DROP POLICY IF EXISTS "Users can update own contacts" ON business_contacts;
CREATE POLICY "Users can update own contacts" ON business_contacts
  FOR UPDATE
  USING (
    auth.uid() = owner_id
  );

-- DELETE: только автор может удалять свои контакты
DROP POLICY IF EXISTS "Users can delete own contacts" ON business_contacts;
CREATE POLICY "Users can delete own contacts" ON business_contacts
  FOR DELETE
  USING (
    auth.uid() = owner_id
  );

-- ============================================
-- Комментарий
-- ============================================
COMMENT ON TABLE business_contacts IS 'Каталог бизнесов участников закрытого клуба';
COMMENT ON COLUMN business_contacts.is_approved IS 'Премодерация: false = ожидает подтверждения';
COMMENT ON COLUMN business_contacts.owner_id IS 'Ссылка на пользователя Supabase Auth';

-- ============================================
-- Функция для автоматического обновления updated_at
-- ============================================
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_business_contacts_updated_at
  BEFORE UPDATE ON business_contacts
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- ============================================
-- Проверка
-- ============================================
-- SELECT * FROM business_contacts ORDER BY created_at DESC LIMIT 10;
-- ============================================
