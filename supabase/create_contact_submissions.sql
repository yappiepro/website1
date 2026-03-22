-- ============================================
-- Contact Form Submissions Table
-- ============================================
-- Выполните этот скрипт в Supabase Dashboard:
-- https://supabase.com/dashboard/project/famxhijlisxdsggevcqi/sql/new
-- ============================================

-- Создаём таблицу для заявок с формы обратной связи
CREATE TABLE IF NOT EXISTS contact_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  contact TEXT NOT NULL,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  is_read BOOLEAN DEFAULT FALSE,
  replied_at TIMESTAMPTZ
);

-- Индекс для сортировки по дате
CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at ON contact_submissions(created_at DESC);

-- Индекс для фильтрации по статусу прочтения
CREATE INDEX IF NOT EXISTS idx_contact_submissions_is_read ON contact_submissions(is_read);

-- Включить Row Level Security
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Политики безопасности
-- Разрешаем вставку всем (для формы на сайте)
DROP POLICY IF EXISTS "Allow insert for all" ON contact_submissions;
CREATE POLICY "Allow insert for all" ON contact_submissions
  FOR INSERT
  WITH CHECK (true);

-- Чтение только для авторизованных (админов)
-- DROP POLICY IF EXISTS "Allow read for authenticated" ON contact_submissions;
-- CREATE POLICY "Allow read for authenticated" ON contact_submissions
--   FOR SELECT
--   USING (auth.role() = 'authenticated');

-- Для начала разрешаем чтение всем (можно изменить позже)
DROP POLICY IF EXISTS "Allow read for all" ON contact_submissions;
CREATE POLICY "Allow read for all" ON contact_submissions
  FOR SELECT
  USING (true);

-- Разрешаем обновление (для отметки о прочтении)
DROP POLICY IF EXISTS "Allow update for all" ON contact_submissions;
CREATE POLICY "Allow update for all" ON contact_submissions
  FOR UPDATE
  USING (true);

-- Комментарий к таблице
COMMENT ON TABLE contact_submissions IS 'Заявки с формы обратной связи на сайте';
COMMENT ON COLUMN contact_submissions.is_read IS 'Флаг: прочитано ли сообщение';
COMMENT ON COLUMN contact_submissions.replied_at IS 'Дата ответа клиенту';

-- ============================================
-- Проверка создания
-- ============================================
-- После выполнения скрипта проверьте:
-- SELECT * FROM contact_submissions ORDER BY created_at DESC LIMIT 10;
-- ============================================
