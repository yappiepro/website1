-- Добавляем поле is_read для отслеживания прочитанных заявок
-- Выполнить в SQL Editor в Supabase Console

ALTER TABLE contact_submissions 
ADD COLUMN IF NOT EXISTS is_read BOOLEAN DEFAULT false;

-- Устанавливаем все существующие заявки как прочитанные (опционально)
-- UPDATE contact_submissions SET is_read = true WHERE created_at < NOW() - INTERVAL '1 day';

-- Индекс для быстрой фильтрации
CREATE INDEX IF NOT EXISTS idx_contact_submissions_is_read 
ON contact_submissions(is_read);

CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at 
ON contact_submissions(created_at DESC);
