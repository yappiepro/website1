-- ============================================
-- Update contact_submissions table structure
-- Replace 'contact' with 'email' and 'telegram'
-- ============================================
-- Выполните этот скрипт в Supabase Dashboard:
-- https://supabase.com/dashboard/project/famxhijlisxdsggevcqi/sql/new
-- ============================================

-- 1. Добавляем новые колонки
ALTER TABLE contact_submissions 
  ADD COLUMN IF NOT EXISTS email TEXT,
  ADD COLUMN IF NOT EXISTS telegram TEXT,
  ADD COLUMN IF NOT EXISTS source TEXT;

-- 2. Переносим данные из старой колонки contact
-- Если contact содержит @ но не начинается с @ - это email
UPDATE contact_submissions 
SET email = contact 
WHERE contact LIKE '%@%' AND contact NOT LIKE '@%';

-- Если contact начинается с @ - это telegram
UPDATE contact_submissions 
SET telegram = contact 
WHERE contact LIKE '@%';

-- 3. Удаляем старую колонку contact
ALTER TABLE contact_submissions DROP COLUMN IF EXISTS contact;

-- 4. Создаём индексы для быстрого поиска
CREATE INDEX IF NOT EXISTS idx_contact_submissions_email ON contact_submissions(email);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_telegram ON contact_submissions(telegram);

-- 5. Проверяем результат
SELECT id, name, phone, email, telegram, created_at, is_read 
FROM contact_submissions 
ORDER BY created_at DESC 
LIMIT 10;

-- ============================================
-- Готово! Теперь таблица имеет структуру:
-- - id (UUID)
-- - name (TEXT)
-- - phone (TEXT)
-- - email (TEXT)
-- - telegram (TEXT)
-- - created_at (TIMESTAMPTZ)
-- - is_read (BOOLEAN)
-- - replied_at (TIMESTAMPTZ)
-- ============================================
