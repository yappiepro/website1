<template>
  <div class="min-h-screen bg-white text-gray-900">
    <!-- Навигация -->
    <nav class="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        <a href="/" class="text-xl font-bold text-gray-900">Артём Селифанов</a>
        <div class="hidden md:flex items-center gap-6">
          <a href="/" class="text-sm text-gray-600 hover:text-gray-900 transition-colors">Главная</a>
          <a href="/blog" class="text-sm text-gray-600 hover:text-gray-900 transition-colors">Блог</a>
          <a href="https://t.me/artemselifanov" target="_blank" class="text-sm text-gray-600 hover:text-gray-900 transition-colors">Связаться</a>
        </div>
      </div>
    </nav>

    <!-- Контент -->
    <article class="pt-32 pb-20 px-4 sm:px-6">
      <div class="max-w-4xl mx-auto">
        <!-- Секция 1: Согласие на обработку ПД -->
        <section class="mb-16">
          <header class="mb-8">
            <h1 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">Согласие на обработку персональных данных</h1>
            <p class="text-gray-500">Последнее обновление: март 2026 г.</p>
          </header>

          <div class="prose prose-lg max-w-none">
            <div class="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8 rounded-r-lg">
              <p class="text-gray-700 italic m-0">
                Этот текст размещается рядом с чекбоксом при добавлении формы обратной связи на сайт. 
                Пользователь обязан поставить галочку перед отправкой формы.
              </p>
            </div>

            <h2 class="text-2xl font-bold text-gray-900 mb-4">Текст согласия для чекбокса</h2>
            <div class="bg-gray-50 p-6 rounded-lg mb-8">
              <p class="text-gray-800 font-medium">
                Я ознакомился(-ась) с <a href="/privacy" class="text-blue-600 hover:underline">Политикой обработки персональных данных</a> 
                и даю согласие ИП Селифанову А. на обработку моих персональных данных (имя, email, телефон) в целях 
                обратной связи и оказания услуг.
              </p>
            </div>

            <h2 class="text-2xl font-bold text-gray-900 mb-4">Полный текст согласия</h2>
            <div class="space-y-4 text-gray-700">
              <p><strong>Субъект персональных данных:</strong> физическое лицо, заполнившее форму на сайте artemselifanov.ru.</p>
              <p><strong>Оператор:</strong> ИП Селифанов Артем Викторович, ИНН 100123594893, ОГРНИП 323100000003767.</p>
              
              <p>Настоящим даю согласие Оператору на обработку следующих персональных данных:</p>
              <ul class="list-disc pl-6 space-y-2">
                <li>Имя</li>
                <li>Адрес электронной почты</li>
                <li>Номер телефона</li>
                <li>Иные данные, добровольно указанные в форме</li>
              </ul>

              <p><strong>Цели обработки:</strong></p>
              <ul class="list-disc pl-6 space-y-2">
                <li>Ответ на обращение и установление контакта</li>
                <li>Оказание услуг согласно публичной оферте</li>
                <li>Направление информационных материалов (при отдельном согласии)</li>
              </ul>

              <p><strong>Перечень действий:</strong> сбор, запись, систематизация, накопление, хранение, уточнение, 
              использование, передача (в сервисы-обработчики при наличии договора), обезличивание, уничтожение.</p>

              <p><strong>Срок хранения:</strong> 5 лет с момента последней операции или до отзыва согласия.</p>

              <p>Согласие может быть отозвано путём направления письменного заявления на email Оператора. 
              Отзыв не влияет на законность ранее произведённой обработки.</p>
            </div>
          </div>
        </section>

        <!-- Секция 2: Cookie политика -->
        <section class="border-t border-gray-200 pt-12">
          <header class="mb-8">
            <h1 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">Политика использования файлов Cookie</h1>
            <p class="text-gray-500">Сайт artemselifanov.ru</p>
            <p class="text-gray-500">Последнее обновление: март 2026 г.</p>
          </header>

          <div class="prose prose-lg max-w-none">
            <section class="mb-10">
              <h2 class="text-2xl font-bold text-gray-900 mb-4">Что такое файлы cookie?</h2>
              <p class="text-gray-700">
                Файлы cookie — небольшие текстовые файлы, которые сохраняются в браузере при посещении сайта. 
                Они позволяют сайту запоминать ваши действия и предпочтения.
              </p>
            </section>

            <section class="mb-10">
              <h2 class="text-2xl font-bold text-gray-900 mb-4">Какие cookies мы используем?</h2>
              
              <div class="mb-6">
                <h3 class="text-xl font-semibold text-gray-900 mb-3">Технически необходимые (обязательные)</h3>
                <p class="text-gray-700">
                  Обеспечивают работу сайта. Без них сайт не будет корректно функционировать. 
                  Эти cookies не требуют вашего согласия.
                </p>
              </div>

              <div class="mb-6">
                <h3 class="text-xl font-semibold text-gray-900 mb-3">Аналитические</h3>
                <p class="text-gray-700 mb-3">
                  Помогают понять, как пользователи взаимодействуют с сайтом. Мы используем:
                </p>
                <ul class="list-disc pl-6 space-y-2 text-gray-700">
                  <li><strong>Яндекс.Метрика</strong> — анализ посещаемости, карта кликов, вебвизор</li>
                  <li><strong>Google Analytics</strong> — анализ трафика и источников переходов (при наличии)</li>
                </ul>
                <p class="text-gray-700 mt-3">
                  Данные аналитики анонимизированы и не позволяют идентифицировать конкретного пользователя.
                </p>
              </div>

              <div class="mb-6">
                <h3 class="text-xl font-semibold text-gray-900 mb-3">Маркетинговые</h3>
                <p class="text-gray-700">
                  Используются для показа релевантной рекламы. На текущий момент маркетинговые cookies на сайте не применяются.
                </p>
              </div>
            </section>

            <section class="mb-10">
              <h2 class="text-2xl font-bold text-gray-900 mb-4">Как управлять cookies?</h2>
              <p class="text-gray-700 mb-4">
                Вы можете настроить или отключить cookies в настройках браузера:
              </p>
              <ul class="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Chrome:</strong> Настройки → Конфиденциальность → Файлы cookie</li>
                <li><strong>Firefox:</strong> Настройки → Приватность и защита</li>
                <li><strong>Safari:</strong> Настройки → Конфиденциальность</li>
                <li><strong>Yandex Browser:</strong> Настройки → Сайты → Расширенные настройки</li>
              </ul>
              <p class="text-gray-700 mt-4">
                Отключение технических cookies может нарушить работу сайта.
              </p>
            </section>

            <section class="mb-10">
              <h2 class="text-2xl font-bold text-gray-900 mb-4">Срок хранения cookies</h2>
              <p class="text-gray-700">
                Сессионные cookies удаляются при закрытии браузера. Постоянные cookies хранятся до 2 лет 
                или до их ручного удаления.
              </p>
            </section>

            <section class="mb-10">
              <h2 class="text-2xl font-bold text-gray-900 mb-4">Согласие с использованием cookies</h2>
              <p class="text-gray-700">
                При первом посещении сайта отображается баннер с запросом согласия на использование необязательных cookies. 
                Продолжение использования сайта после закрытия баннера означает согласие с технически необходимыми cookies.
              </p>
            </section>

            <section class="mb-10">
              <h2 class="text-2xl font-bold text-gray-900 mb-4">Контакты</h2>
              <div class="bg-gray-50 p-6 rounded-lg">
                <p class="text-gray-700">
                  По вопросам использования cookies обращайтесь: 
                  <a href="mailto:a9535487323@yandex.ru" class="text-blue-600 hover:underline">a9535487323@yandex.ru</a>
                </p>
              </div>
            </section>
          </div>
        </section>
      </div>
    </article>

    <!-- Footer -->
    <footer class="py-8 px-4 sm:px-6 border-t border-gray-200">
      <div class="max-w-7xl mx-auto">
        <div class="flex flex-wrap justify-center gap-4 sm:gap-6 mb-4 text-sm">
          <a href="tel:+79535487323" class="text-gray-600 hover:text-gray-900 transition-colors">+7 (953) 548-73-23</a>
          <span class="text-gray-300">|</span>
          <a href="mailto:a9535487323@yandex.ru" class="text-gray-600 hover:text-gray-900 transition-colors">a9535487323@yandex.ru</a>
          <span class="text-gray-300">|</span>
          <a href="https://t.me/artemselifanov" target="_blank" class="text-gray-600 hover:text-gray-900 transition-colors">Telegram</a>
        </div>
        <div class="flex flex-col sm:flex-row justify-between items-center gap-4">
          <a href="/" class="text-xl font-bold text-gray-900">Артём Селифанов</a>
          <div class="flex items-center gap-6">
            <a href="/offer" class="text-sm text-gray-600 hover:text-gray-900 transition-colors">Оферта</a>
            <a href="/privacy" class="text-sm text-gray-600 hover:text-gray-900 transition-colors">Конфиденциальность</a>
            <a href="/cookie" class="text-sm text-gray-600 hover:text-gray-900 transition-colors">Cookie</a>
          </div>
          <span class="text-gray-500 text-sm">© 2026 Все права защищены</span>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
useHead({
  title: 'Согласие на обработку ПД и Cookie политика — Артём Селифанов',
  meta: [
    { name: 'description', content: 'Согласие на обработку персональных данных и политика использования cookies на сайте artemselifanov.ru.' }
  ]
})
</script>

<style scoped>
.prose h2 {
  margin-top: 2rem;
  margin-bottom: 1rem;
}
.prose h3 {
  margin-top: 1.5rem;
  margin-bottom: 0.75rem;
}
.prose ul {
  margin: 0.5rem 0;
}
.prose p {
  margin: 0.5rem 0;
}
</style>
