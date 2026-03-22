-- ============================================
-- Update contact_submissions table
-- Add separate email and telegram columns
-- ============================================
-- Выполните этот скрипт в Supabase Dashboard:
-- https://supabase.com/dashboard/project/famxhijlisxdsggevcqi/sql/new
-- ============================================

-- Добавляем новые колонки
ALTER TABLE contact_submissions 
  ADD COLUMN IF NOT EXISTS email TEXT,
  ADD COLUMN IF NOT EXISTS telegram TEXT;

-- Удаляем старую колонку contact (если есть данные, сначала перенесите их)
ALTER TABLE contact_submissions DROP COLUMN IF EXISTS contact;

-- Индексы для нового поиска
CREATE INDEX IF NOT EXISTS idx_contact_submissions_email ON contact_submissions(email);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_telegram ON contact_submissions(telegram);

-- ============================================
-- Проверка
-- ============================================
-- SELECT * FROM contact_submissions LIMIT 10;
-- ============================================
