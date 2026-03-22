-- ============================================
-- Update RLS Policies for Contact Submissions
-- ============================================
-- Выполните этот скрипт в Supabase Dashboard:
-- https://supabase.com/dashboard/project/famxhijlisxdsggevcqi/sql/new
-- ============================================

-- Удаляем старые политики
DROP POLICY IF EXISTS "Allow read for all" ON contact_submissions;
DROP POLICY IF EXISTS "Allow update for all" ON contact_submissions;

-- Разрешаем чтение только авторизованным
CREATE POLICY "Allow read for authenticated" ON contact_submissions
  FOR SELECT
  USING (auth.role() = 'authenticated');

-- Разрешаем обновление только авторизованным
CREATE POLICY "Allow update for authenticated" ON contact_submissions
  FOR UPDATE
  USING (auth.role() = 'authenticated');

-- Вставляем политику для анонимной вставки (форма на сайте)
-- Должна уже существовать, но на всякий случай
DROP POLICY IF EXISTS "Allow insert for all" ON contact_submissions;
CREATE POLICY "Allow insert for all" ON contact_submissions
  FOR INSERT
  WITH CHECK (true);

-- ============================================
-- Проверка политик
-- ============================================
-- После выполнения проверьте:
-- SELECT * FROM pg_policies WHERE tablename = 'contact_submissions';
-- ============================================
