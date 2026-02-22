<template>
  <div class="min-h-screen bg-[#07070b] text-white">
    <header class="sticky top-0 z-20 border-b border-white/10 bg-[#07070b]/85 backdrop-blur-xl">
      <div class="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4">
        <div class="flex items-center gap-3">
          <span class="font-syncopate text-xl tracking-wider">YAPPIE</span>
          <span class="rounded-full border border-white/15 px-3 py-1 text-xs text-gray-300">Hero Lab</span>
        </div>
        <a :href="baseURL" class="rounded-full border border-white/20 px-4 py-2 text-sm text-gray-200 transition hover:bg-white/10">
          На главную
        </a>
      </div>
    </header>

    <main class="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-8 sm:px-6 lg:gap-10">
      <section class="variant-shell">
        <div class="grid gap-8 lg:grid-cols-[52%_48%]">
          <div>
            <p class="pill">Minimal Conversion</p>
            <h1 class="variant-title">
              Разработка сайта под ключ
              <br />
              и AI-автоматизация
            </h1>
            <p class="variant-sub">
              Запускаем решения для бизнеса за 2–6 недель: от лендинга до CRM и ботов.
            </p>
            <div class="mt-8 flex flex-wrap gap-3">
              <a href="https://t.me/artemselifanov" target="_blank" class="btn-primary">Обсудить проект</a>
              <a :href="baseURL + '#portfolio'" class="btn-secondary">Смотреть кейсы</a>
            </div>
            <p class="mt-4 text-sm text-gray-400">Ответим в Telegram в течение 15 минут</p>
            <p class="mt-7 text-sm text-gray-300">50+ проектов • 98% довольных клиентов • поддержка после релиза</p>
          </div>
          <div class="result-card">
            <p class="result-label">Кейс: B2B услуги</p>
            <p class="result-main">+37% заявок</p>
            <p class="result-sub">за 45 дней после запуска нового лендинга и автоматизации воронки</p>
          </div>
        </div>
      </section>

      <section class="variant-shell">
        <div class="grid gap-8 lg:grid-cols-[52%_48%]">
          <div>
            <p class="pill">Premium Studio</p>
            <h2 class="variant-title">
              Цифровые продукты,
              <br />
              которые продают и автоматизируют
            </h2>
            <p class="variant-sub">
              Проектируем, разрабатываем и внедряем: сайт, бот, CRM, аналитика.
            </p>
            <div class="mt-8 flex flex-wrap gap-3">
              <a href="https://t.me/artemselifanov" target="_blank" class="btn-primary">Запросить аудит</a>
              <a :href="baseURL + '#portfolio'" class="btn-secondary">Портфолио</a>
            </div>
            <div class="mt-6 flex flex-wrap gap-2 text-xs">
              <span class="chip">Договор</span>
              <span class="chip">Фикс-смета</span>
              <span class="chip">Этапная оплата</span>
            </div>
          </div>
          <div class="workflow-card">
            <p class="result-label">Workflow</p>
            <ol class="mt-3 space-y-3 text-gray-200">
              <li class="flow-item"><span>1</span> Аудит и стратегия</li>
              <li class="flow-item"><span>2</span> Прототип и дизайн</li>
              <li class="flow-item"><span>3</span> Разработка и интеграции</li>
              <li class="flow-item"><span>4</span> Запуск и рост</li>
            </ol>
          </div>
        </div>
      </section>

      <section class="variant-shell">
        <div class="grid gap-8 lg:grid-cols-[52%_48%]">
          <div>
            <p class="pill">Performance First</p>
            <h2 class="variant-title">
              Увеличиваем лиды
              <br />
              и сокращаем ручные процессы с AI
            </h2>
            <p class="variant-sub">
              Строим систему: сайт + автоворонка + чат-бот + интеграции с CRM.
            </p>
            <div class="mt-8 flex flex-wrap gap-3">
              <a href="https://t.me/artemselifanov" target="_blank" class="btn-primary">Получить расчёт</a>
              <a :href="baseURL + '#services'" class="btn-secondary">Как это работает</a>
            </div>
          </div>
          <div class="grid grid-cols-1 gap-3 sm:grid-cols-3">
            <div class="metric-card">
              <p class="metric-value">+28%</p>
              <p class="metric-name">конверсия</p>
            </div>
            <div class="metric-card">
              <p class="metric-value">-42%</p>
              <p class="metric-name">ручных операций</p>
            </div>
            <div class="metric-card">
              <p class="metric-value">x2.1</p>
              <p class="metric-name">скорость обработки</p>
            </div>
          </div>
        </div>
      </section>

      <section class="variant-shell">
        <div class="grid gap-8 lg:grid-cols-[50%_50%]">
          <div>
            <p class="pill">Current Style + Proof Dashboard</p>
            <h2 class="variant-title">
              Разработка сайтов
              <br />
              веб приложений
              <br />
              и чат-ботов
            </h2>
            <p class="variant-sub">
              Превращаем сложные бизнес-задачи в элегантные автоматизированные решения с помощью AI.
            </p>
            <div class="mt-8 flex flex-wrap gap-3">
              <a href="https://t.me/artemselifanov" target="_blank" class="btn-primary">Обсудить проект</a>
              <a :href="baseURL + '#portfolio'" class="btn-secondary">Смотреть работы</a>
            </div>
            <div class="mt-8 flex gap-6 text-sm text-gray-300">
              <div><span class="text-3xl font-bold text-white">50+</span><br>Проектов</div>
              <div><span class="text-3xl font-bold text-white">98%</span><br>Довольных</div>
              <div><span class="text-3xl font-bold text-white">24/7</span><br>Поддержка</div>
            </div>
          </div>

          <div class="proof-grid">
            <article class="proof-card">
              <div class="proof-head">
                <div>
                  <p class="result-label">Воронка лидов (30 дней)</p>
                  <p class="proof-sub">Источник: сайт + AI-бот</p>
                </div>
                <span class="proof-badge">+31% MoM</span>
              </div>
              <div class="funnel-row">
                <div><strong>2 840</strong><span>Посетители</span></div>
                <div><strong>612</strong><span>Лиды</span></div>
                <div><strong>184</strong><span>SQL</span></div>
                <div><strong>73</strong><span>Сделки</span></div>
              </div>
              <div class="bars">
                <div style="height: 34%"></div>
                <div style="height: 52%"></div>
                <div style="height: 74%"></div>
                <div style="height: 96%"></div>
              </div>
              <div class="bars-labels"><span>W1</span><span>W2</span><span>W3</span><span>W4</span></div>
            </article>

            <article class="proof-card">
              <p class="result-label">Эффект автоматизации</p>
              <div class="kpi-row">
                <span>Время ответа</span>
                <strong>18 мин → 3 мин</strong>
              </div>
              <div class="kpi-row">
                <span>Ручные задачи</span>
                <strong>64% → 21%</strong>
              </div>
              <div class="kpi-row">
                <span>Стоимость лида</span>
                <strong>-22%</strong>
              </div>
            </article>

            <article class="proof-card">
              <p class="result-label">Система в работе</p>
              <div class="status-list">
                <p><i class="ok-dot"></i> Бот online</p>
                <p><i class="ok-dot"></i> CRM синхронизирована</p>
                <p><i class="ok-dot"></i> Интеграции: 6/6 OK</p>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()
const baseURL = config.app.baseURL

useSeoMeta({
  title: 'Hero Variants — Yappie',
  description: 'Preview of three hero concepts for Yappie landing page'
})
</script>

<style scoped>
.variant-shell {
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: radial-gradient(circle at 20% 0%, rgba(124, 58, 237, 0.22), rgba(3, 3, 10, 0.98) 46%);
  border-radius: 24px;
  padding: 28px;
}

.pill {
  width: fit-content;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.03);
  border-radius: 999px;
  color: #d1d5db;
  font-size: 12px;
  padding: 8px 14px;
}

.variant-title {
  margin-top: 18px;
  font-size: clamp(2rem, 4.4vw, 4.1rem);
  line-height: 1.06;
  font-weight: 800;
  letter-spacing: -0.02em;
  background: linear-gradient(90deg, #ffffff, #c4b5fd 48%, #f472b6);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.variant-sub {
  margin-top: 16px;
  max-width: 42ch;
  font-size: clamp(1rem, 1.5vw, 1.35rem);
  line-height: 1.5;
  color: #c9c9d3;
}

.btn-primary {
  background: #ffffff;
  color: #0a0a0a;
  border-radius: 999px;
  padding: 13px 20px;
  font-weight: 600;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.btn-primary:hover {
  transform: translateY(-1px);
  box-shadow: 0 8px 24px rgba(255, 255, 255, 0.2);
}

.btn-secondary {
  border: 1px solid rgba(255, 255, 255, 0.28);
  border-radius: 999px;
  padding: 13px 20px;
  color: #e5e7eb;
  transition: background-color 0.2s ease;
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.08);
}

.result-card,
.workflow-card,
.metric-card {
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 20px;
  background: rgba(4, 4, 10, 0.75);
  padding: 20px;
}

.result-label {
  color: #9ca3af;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.result-main {
  margin-top: 8px;
  font-size: clamp(1.8rem, 3vw, 3rem);
  font-weight: 800;
}

.result-sub {
  margin-top: 8px;
  color: #c5c6d0;
  line-height: 1.45;
}

.chip {
  border: 1px solid rgba(255, 255, 255, 0.18);
  color: #d1d5db;
  border-radius: 999px;
  padding: 6px 10px;
  background: rgba(255, 255, 255, 0.03);
}

.flow-item {
  display: flex;
  align-items: center;
  gap: 10px;
}

.flow-item span {
  width: 24px;
  height: 24px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.22);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  color: #d1d5db;
}

.metric-value {
  font-size: 2rem;
  font-weight: 800;
  color: #fafafa;
}

.metric-name {
  margin-top: 4px;
  color: #b2b4c2;
  font-size: 14px;
}

.proof-grid {
  display: grid;
  gap: 12px;
}

.proof-card {
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 16px;
  background: linear-gradient(180deg, rgba(20, 14, 40, 0.7), rgba(7, 7, 15, 0.86));
  padding: 16px;
}

.proof-head {
  display: flex;
  justify-content: space-between;
  gap: 12px;
}

.proof-sub {
  color: #9ca3af;
  font-size: 12px;
  margin-top: 4px;
}

.proof-badge {
  height: fit-content;
  border: 1px solid rgba(236, 72, 153, 0.35);
  background: rgba(236, 72, 153, 0.12);
  color: #fbcfe8;
  border-radius: 999px;
  padding: 4px 10px;
  font-size: 12px;
  font-weight: 600;
}

.funnel-row {
  margin-top: 14px;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 10px;
}

.funnel-row div {
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 8px;
  background: rgba(255, 255, 255, 0.02);
}

.funnel-row strong {
  display: block;
  font-size: 20px;
  line-height: 1;
}

.funnel-row span {
  font-size: 11px;
  color: #a8acbd;
}

.bars {
  margin-top: 12px;
  height: 68px;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 8px;
  align-items: end;
}

.bars div {
  border-radius: 6px 6px 4px 4px;
  background: linear-gradient(180deg, rgba(217, 70, 239, 0.9), rgba(139, 92, 246, 0.6));
}

.bars-labels {
  margin-top: 6px;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  color: #9094a6;
  font-size: 11px;
  text-align: center;
}

.kpi-row {
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  gap: 10px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  padding-bottom: 10px;
}

.kpi-row span {
  color: #afb4c8;
  font-size: 14px;
}

.kpi-row strong {
  color: #f3f4f6;
  font-size: 14px;
}

.status-list {
  margin-top: 12px;
  display: grid;
  gap: 9px;
  color: #e5e7eb;
  font-size: 14px;
}

.ok-dot {
  width: 8px;
  height: 8px;
  border-radius: 999px;
  background: #10b981;
  display: inline-block;
  margin-right: 8px;
  box-shadow: 0 0 8px rgba(16, 185, 129, 0.6);
}

@media (max-width: 640px) {
  .variant-shell {
    padding: 18px;
    border-radius: 18px;
  }
}
</style>
