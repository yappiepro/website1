-- Добавить столбец service в таблицу contact_submissions
-- Выполнить в Supabase Dashboard: https://supabase.com/dashboard/project/famxhijlisxdsggevcqi/sql/new

ALTER TABLE contact_submissions 
ADD COLUMN IF NOT EXISTS service TEXT;

COMMENT ON COLUMN contact_submissions.service IS 'Выбранная услуга (Диагностика, Консультация, Менторство)';

-- Проверить что столбец добавлен
-- SELECT column_name, data_type, is_nullable 
-- FROM information_schema.columns 
-- WHERE table_name = 'contact_submissions' AND column_name = 'service';
