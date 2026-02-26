export default {
  slug: 'sozdanie-sayta-html-css',
  title: 'Создание сайта на HTML и CSS: основы, инструменты и первые шаги',
  description: 'Полное руководство по HTML и CSS для начинающих: структура сайта, основные теги, стили, инструменты и ресурсы для обучения.',
  category: 'Создание сайтов',
  cluster: 'sozdanie-saytov',
  date: '2026-02-25',
  image: null,
  content: `
<p>HTML и CSS — два языка, на которых написан весь интернет. Каждый сайт, который вы видите в браузере, в своей основе содержит HTML-разметку и CSS-стили. Освоить их с нуля реально за несколько недель — и это даёт понимание того, как работают сайты, даже если вы не планируете становиться разработчиком.</p>

<p>В этой статье разберём основы HTML и CSS, покажем структуру простого сайта с нуля, расскажем об инструментах и объясним, когда стоит создавать сайт вручную, а когда лучше выбрать конструктор или CMS.</p>

<h2>Что такое HTML и CSS</h2>

<h3>HTML — скелет сайта</h3>

<p>HTML (HyperText Markup Language) — язык разметки, который описывает структуру страницы. Он говорит браузеру: вот заголовок, вот абзац, вот изображение, вот ссылка. HTML не занимается внешним видом — только структурой и содержанием.</p>

<p>Файл HTML — это обычный текстовый файл с расширением <code>.html</code>. Браузер читает его и отображает как веб-страницу.</p>

<h3>CSS — внешний вид сайта</h3>

<p>CSS (Cascading Style Sheets) — язык стилей, который описывает, как должны выглядеть HTML-элементы. Размер шрифта, цвет фона, расположение блоков, отступы, анимации — всё это CSS.</p>

<p>Разделение структуры (HTML) и внешнего вида (CSS) — фундаментальный принцип веб-разработки. Это позволяет менять дизайн сайта, не трогая его содержание.</p>

<blockquote>«HTML — это стены и перекрытия здания. CSS — это отделка, цвет стен и расстановка мебели. JavaScript — это электричество и лифты.»</blockquote>

<h3>Зачем учить HTML и CSS в 2025 году</h3>

<p>Даже если вы не планируете становиться разработчиком, понимание HTML и CSS даёт практическую пользу:</p>

<ul>
<li>Можете самостоятельно вносить правки в готовый сайт на WordPress или другой CMS</li>
<li>Понимаете, что просите у разработчика, и можете оценить качество работы</li>
<li>Можете создать простой лендинг или портфолио без конструктора</li>
<li>Основа для изучения JavaScript и полноценной веб-разработки</li>
</ul>

<div class="cta-block">
<p><strong>Хотите научиться создавать сайты?</strong></p>
<p>Опишите задачу в Telegram — помогу выбрать оптимальный путь обучения или рассчитаю стоимость создания сайта под ключ.</p>
<a href="https://t.me/artemselifanov" target="_blank" class="cta-button">
  Получить консультацию
</a>
<p><small>Ответим в течение 2 часов. Консультация бесплатна.</small></p>
</div>

<h2>Структура HTML-документа</h2>

<p>Любая HTML-страница имеет фиксированную базовую структуру:</p>

<pre>
&lt;!DOCTYPE html&gt;
&lt;html lang="ru"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    &lt;meta name="description" content="Описание страницы для поисковиков"&gt;
    &lt;title&gt;Название страницы&lt;/title&gt;
    &lt;link rel="stylesheet" href="style.css"&gt;
&lt;/head&gt;
&lt;body&gt;

    &lt;header&gt;
        &lt;nav&gt;
            &lt;a href="/"&gt;Главная&lt;/a&gt;
            &lt;a href="/about"&gt;О нас&lt;/a&gt;
            &lt;a href="/contacts"&gt;Контакты&lt;/a&gt;
        &lt;/nav&gt;
    &lt;/header&gt;

    &lt;main&gt;
        &lt;h1&gt;Главный заголовок страницы&lt;/h1&gt;
        &lt;p&gt;Первый абзац текста.&lt;/p&gt;
    &lt;/main&gt;

    &lt;footer&gt;
        &lt;p&gt;© 2025 Название компании&lt;/p&gt;
    &lt;/footer&gt;

&lt;/body&gt;
&lt;/html&gt;
</pre>

<h3>Что означает каждая часть</h3>

<p><strong><code>&lt;!DOCTYPE html&gt;</code></strong> — объявление типа документа. Сообщает браузеру, что это HTML5.</p>

<p><strong><code>&lt;html lang="ru"&gt;</code></strong> — корневой элемент страницы. Атрибут <code>lang</code> указывает язык — важно для поисковиков и доступности.</p>

<p><strong><code>&lt;head&gt;</code></strong> — служебная часть: метаданные, которые не отображаются на странице, но важны для браузера и поисковиков. Здесь прописываются кодировка, тайтл, описание, подключение стилей.</p>

<p><strong><code>&lt;meta charset="UTF-8"&gt;</code></strong> — кодировка страницы. UTF-8 поддерживает кириллицу и все остальные символы.</p>

<p><strong><code>&lt;meta name="viewport"&gt;</code></strong> — настройка отображения на мобильных устройствах. Обязательный тег для адаптивного дизайна.</p>

<p><strong><code>&lt;title&gt;</code></strong> — заголовок страницы, который отображается во вкладке браузера и в результатах поиска. Один из важнейших SEO-элементов.</p>

<p><strong><code>&lt;body&gt;</code></strong> — всё видимое содержимое страницы.</p>

<h2>Основные HTML-теги</h2>

<h3>Заголовки</h3>

<pre>
&lt;h1&gt;Главный заголовок — один на странице&lt;/h1&gt;
&lt;h2&gt;Подзаголовок раздела&lt;/h2&gt;
&lt;h3&gt;Подзаголовок подраздела&lt;/h3&gt;
</pre>

<p>Заголовки H1–H6 образуют иерархию. H1 — один на странице, самый важный. Поисковики учитывают заголовки при определении темы страницы.</p>

<h3>Текст и форматирование</h3>

<pre>
&lt;p&gt;Обычный абзац текста.&lt;/p&gt;

&lt;strong&gt;Жирный текст — важное выделение&lt;/strong&gt;
&lt;em&gt;Курсивный текст — акцент&lt;/em&gt;

&lt;br&gt; &lt;!-- Перенос строки --&gt;
&lt;hr&gt; &lt;!-- Горизонтальная линия --&gt;
</pre>

<h3>Ссылки и изображения</h3>

<pre>
&lt;!-- Внешняя ссылка --&gt;
&lt;a href="https://example.com" target="_blank"&gt;Открыть в новой вкладке&lt;/a&gt;

&lt;!-- Внутренняя ссылка --&gt;
&lt;a href="/about"&gt;О компании&lt;/a&gt;

&lt;!-- Изображение --&gt;
&lt;img src="photo.jpg" alt="Описание изображения" width="800" height="600"&gt;
</pre>

<p>Атрибут <code>alt</code> у изображений обязателен — он описывает картинку для поисковиков и незрячих пользователей.</p>

<h3>Списки</h3>

<pre>
&lt;!-- Маркированный список --&gt;
&lt;ul&gt;
    &lt;li&gt;Первый пункт&lt;/li&gt;
    &lt;li&gt;Второй пункт&lt;/li&gt;
    &lt;li&gt;Третий пункт&lt;/li&gt;
&lt;/ul&gt;

&lt;!-- Нумерованный список --&gt;
&lt;ol&gt;
    &lt;li&gt;Первый шаг&lt;/li&gt;
    &lt;li&gt;Второй шаг&lt;/li&gt;
    &lt;li&gt;Третий шаг&lt;/li&gt;
&lt;/ol&gt;
</pre>

<h3>Формы</h3>

<pre>
&lt;form action="/send" method="POST"&gt;
    &lt;label for="name"&gt;Ваше имя:&lt;/label&gt;
    &lt;input type="text" id="name" name="name" placeholder="Введите имя" required&gt;

    &lt;label for="email"&gt;Email:&lt;/label&gt;
    &lt;input type="email" id="email" name="email" placeholder="mail@example.com" required&gt;

    &lt;label for="message"&gt;Сообщение:&lt;/label&gt;
    &lt;textarea id="message" name="message" rows="5"&gt;&lt;/textarea&gt;

    &lt;button type="submit"&gt;Отправить&lt;/button&gt;
&lt;/form&gt;
</pre>

<h3>Семантические теги HTML5</h3>

<p>Семантические теги описывают смысл содержимого, а не только его внешний вид:</p>

<pre>
&lt;header&gt;   &lt;!-- Шапка сайта или раздела --&gt;
&lt;nav&gt;      &lt;!-- Навигация --&gt;
&lt;main&gt;     &lt;!-- Основное содержимое страницы --&gt;
&lt;section&gt;  &lt;!-- Тематический раздел --&gt;
&lt;article&gt;  &lt;!-- Самостоятельная статья или материал --&gt;
&lt;aside&gt;    &lt;!-- Боковая колонка, дополнительный контент --&gt;
&lt;footer&gt;   &lt;!-- Подвал сайта или раздела --&gt;
</pre>

<p>Использование семантических тегов улучшает SEO и доступность сайта.</p>

<h2>Основы CSS</h2>

<h3>Подключение стилей</h3>

<p>CSS можно подключить тремя способами:</p>

<pre>
&lt;!-- Внешний файл стилей — правильный способ --&gt;
&lt;link rel="stylesheet" href="style.css"&gt;

&lt;!-- Встроенные стили в теге &lt;style&gt; — для небольших проектов --&gt;
&lt;style&gt;
    body { font-family: Arial, sans-serif; }
&lt;/style&gt;

&lt;!-- Инлайн-стили — только для исключений --&gt;
&lt;p style="color: red;"&gt;Красный текст&lt;/p&gt;
</pre>

<p><strong>Лучшая практика</strong> — выносить все стили в отдельный файл <code>style.css</code>. Это упрощает поддержку и позволяет использовать одни стили для всех страниц.</p>

<h3>Синтаксис CSS</h3>

<pre>
/* Это комментарий */

селектор {
    свойство: значение;
    другое-свойство: другое-значение;
}
</pre>

<h3>Селекторы</h3>

<pre>
/* Тег — применяется ко всем элементам этого типа */
p {
    color: #333;
    line-height: 1.6;
}

/* Класс — применяется к элементам с class="button" */
.button {
    background-color: #2E75B6;
    color: white;
    padding: 12px 24px;
    border-radius: 4px;
}

/* ID — применяется к одному элементу с id="header" */
#header {
    background-color: #1A1A2E;
    height: 80px;
}

/* Комбинированный — все &lt;a&gt; внутри &lt;nav&gt; */
nav a {
    text-decoration: none;
    color: #333;
}
</pre>

<h3>Блочная модель (Box Model)</h3>

<p>Каждый HTML-элемент — это прямоугольный блок с четырьмя зонами:</p>

<pre>
.box {
    width: 300px;          /* Ширина содержимого */
    height: 200px;         /* Высота содержимого */
    padding: 20px;         /* Внутренний отступ */
    border: 1px solid #ccc; /* Рамка */
    margin: 16px;          /* Внешний отступ */
}
</pre>

<p>Понимание блочной модели — основа вёрстки. Именно из-за неправильного расчёта отступов и рамок чаще всего «разъезжаются» блоки.</p>

<h3>Flexbox — современный способ выравнивания</h3>

<p>Flexbox решает задачи расположения элементов в строку или колонку:</p>

<pre>
/* Горизонтальное меню */
nav {
    display: flex;
    gap: 24px;
    align-items: center;
}

/* Карточки в ряд с переносом */
.cards {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}

.card {
    flex: 1 1 300px; /* Минимальная ширина 300px, растягивается */
}

/* Центрирование по вертикали и горизонтали */
.hero {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}
</pre>

<h3>Адаптивный дизайн через Media Queries</h3>

<pre>
/* Стили по умолчанию — для десктопа */
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* Планшеты — экраны до 1024px */
@media (max-width: 1024px) {
    .cards {
        grid-template-columns: repeat(2, 1fr);
    }
}

/* Мобильные — экраны до 768px */
@media (max-width: 768px) {
    .cards {
        grid-template-columns: 1fr;
    }

    nav {
        flex-direction: column;
    }
}
</pre>

<h2>Пример простого лендинга на HTML и CSS</h2>

<p>Минимальная структура одностраничного сайта:</p>

<pre>
&lt;!DOCTYPE html&gt;
&lt;html lang="ru"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    &lt;title&gt;Разработка сайтов — быстро и качественно&lt;/title&gt;
    &lt;link rel="stylesheet" href="style.css"&gt;
&lt;/head&gt;
&lt;body&gt;

    &lt;!-- Шапка --&gt;
    &lt;header class="header"&gt;
        &lt;div class="container"&gt;
            &lt;div class="logo"&gt;МоёАгентство&lt;/div&gt;
            &lt;nav class="nav"&gt;
                &lt;a href="#services"&gt;Услуги&lt;/a&gt;
                &lt;a href="#portfolio"&gt;Портфолио&lt;/a&gt;
                &lt;a href="#contacts"&gt;Контакты&lt;/a&gt;
            &lt;/nav&gt;
        &lt;/div&gt;
    &lt;/header&gt;

    &lt;!-- Главный экран --&gt;
    &lt;section class="hero"&gt;
        &lt;div class="container"&gt;
            &lt;h1&gt;Создаём сайты, которые продают&lt;/h1&gt;
            &lt;p&gt;Разработка под ключ за 3 недели. Гарантия 6 месяцев.&lt;/p&gt;
            &lt;a href="#contacts" class="button"&gt;Получить КП&lt;/a&gt;
        &lt;/div&gt;
    &lt;/section&gt;

    &lt;!-- Услуги --&gt;
    &lt;section class="services" id="services"&gt;
        &lt;div class="container"&gt;
            &lt;h2&gt;Наши услуги&lt;/h2&gt;
            &lt;div class="cards"&gt;
                &lt;div class="card"&gt;
                    &lt;h3&gt;Лендинг&lt;/h3&gt;
                    &lt;p&gt;Одностраничный сайт для рекламных кампаний&lt;/p&gt;
                &lt;/div&gt;
                &lt;div class="card"&gt;
                    &lt;h3&gt;Корпоративный сайт&lt;/h3&gt;
                    &lt;p&gt;Многостраничный сайт для бизнеса&lt;/p&gt;
                &lt;/div&gt;
                &lt;div class="card"&gt;
                    &lt;h3&gt;Интернет-магазин&lt;/h3&gt;
                    &lt;p&gt;Полноценный магазин с корзиной и оплатой&lt;/p&gt;
                &lt;/div&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/section&gt;

    &lt;!-- Контакты --&gt;
    &lt;section class="contacts" id="contacts"&gt;
        &lt;div class="container"&gt;
            &lt;h2&gt;Обсудим ваш проект&lt;/h2&gt;
            &lt;form class="form"&gt;
                &lt;input type="text" placeholder="Ваше имя" required&gt;
                &lt;input type="tel" placeholder="Телефон" required&gt;
                &lt;button type="submit" class="button"&gt;Отправить заявку&lt;/button&gt;
            &lt;/form&gt;
        &lt;/div&gt;
    &lt;/section&gt;

    &lt;!-- Подвал --&gt;
    &lt;footer class="footer"&gt;
        &lt;div class="container"&gt;
            &lt;p&gt;© 2025 МоёАгентство&lt;/p&gt;
        &lt;/div&gt;
    &lt;/footer&gt;

&lt;/body&gt;
&lt;/html&gt;
</pre>

<h2>Инструменты для создания сайтов на HTML и CSS</h2>

<h3>Редакторы кода</h3>

<p><strong>VS Code</strong> — самый популярный бесплатный редактор от Microsoft. Подсветка синтаксиса, автодополнение, встроенный терминал, огромная библиотека расширений. Рекомендуется для всех уровней.</p>

<p><strong>WebStorm</strong> — профессиональная IDE от JetBrains. Платная, но мощная: умное автодополнение, встроенный дебаггер, интеграция с Git. Хороший выбор для серьёзной разработки.</p>

<p><strong>Sublime Text</strong> — лёгкий и быстрый редактор. Условно бесплатный (можно использовать без лицензии с периодическими напоминаниями о покупке).</p>

<h3>Полезные расширения для VS Code</h3>

<ul>
<li><strong>Live Server</strong> — автоматически обновляет страницу в браузере при сохранении файла</li>
<li><strong>Prettier</strong> — форматирует код по единому стандарту</li>
<li><strong>Auto Rename Tag</strong> — при переименовании открывающего тега автоматически переименовывает закрывающий</li>
<li><strong>CSS Peek</strong> — позволяет просматривать CSS-стили прямо из HTML</li>
</ul>

<h3>Браузерные DevTools</h3>

<p>Инструменты разработчика, встроенные в Chrome и Firefox — незаменимый инструмент при вёрстке. Открываются по F12:</p>

<ul>
<li><strong>Elements</strong> — просмотр и редактирование HTML и CSS в реальном времени</li>
<li><strong>Console</strong> — вывод ошибок JavaScript</li>
<li><strong>Network</strong> — анализ загрузки ресурсов</li>
<li><strong>Responsive Mode</strong> — проверка адаптивности на разных экранах</li>
</ul>

<h2>Что изучить после HTML и CSS</h2>

<p>HTML и CSS — первый шаг. После их освоения логичный путь:</p>

<p><strong>JavaScript</strong> — добавляет интерактивность: слайдеры, модальные окна, валидация форм, динамическое изменение контента без перезагрузки страницы.</p>

<p><strong>Git</strong> — система контроля версий. Позволяет отслеживать изменения в коде, откатываться к предыдущим версиям, работать в команде.</p>

<p><strong>Фреймворки CSS</strong> — Bootstrap, Tailwind CSS. Готовые системы стилей, которые ускоряют вёрстку.</p>

<p><strong>Фреймворки JavaScript</strong> — React, Vue, Nuxt. Для создания сложных интерактивных интерфейсов и веб-приложений.</p>

<h2>Когда создавать сайт на чистом HTML/CSS, а когда использовать CMS</h2>

<p>Создание сайта на HTML и CSS с нуля имеет смысл в конкретных ситуациях:</p>

<p><strong>Подходит когда:</strong></p>

<ul>
<li>Сайт небольшой и статичный — портфолио, резюме, промо-страница</li>
<li>Важна максимальная скорость загрузки — нет CMS, нет лишних запросов к базе данных</li>
<li>Хотите полный контроль над кодом без ограничений платформы</li>
<li>Изучаете веб-разработку и нужна практика</li>
</ul>

<p><strong>Не подходит когда:</strong></p>

<ul>
<li>Нужно регулярно обновлять контент без знания кода</li>
<li>Проект будет расти — добавление новых страниц вручную неудобно</li>
<li>Нужен магазин, блог или другой динамический функционал</li>
<li>Несколько человек будут редактировать сайт</li>
</ul>

<h2>Ресурсы для обучения HTML и CSS</h2>

<p>Освоить базовый HTML и CSS можно бесплатно за 4–6 недель при занятиях по 1–2 часа в день:</p>

<ul>
<li><strong>MDN Web Docs</strong> (developer.mozilla.org) — самая полная документация по HTML, CSS и JavaScript на русском языке</li>
<li><strong>HTML Academy</strong> (htmlacademy.ru) — интерактивные курсы на русском языке</li>
<li><strong>CSS-Tricks</strong> (css-tricks.com) — статьи и примеры по CSS на английском</li>
<li><strong>Flexbox Froggy</strong> (flexboxfroggy.com) — игра для изучения Flexbox</li>
<li><strong>Grid Garden</strong> (cssgridgarden.com) — игра для изучения CSS Grid</li>
</ul>

<div class="cta-block">
<p><strong>Готовы обсудить ваш проект?</strong></p>
<p>Расскажите о задаче — подготовлю персональное коммерческое предложение с детальной сметой, сроками и планом работ. Это бесплатно и ни к чему не обязывает.</p>
<a href="https://t.me/artemselifanov" target="_blank" class="cta-button">
  Написать в Telegram и получить КП
</a>
<p><small>Ответим в течение 2 часов. Консультация бесплатна.</small></p>
</div>

<h2>Итог</h2>

<p>HTML и CSS — базовые технологии веба, которые не устаревают. Даже поверхностное понимание этих языков делает вас более эффективным при работе с сайтами — неважно, разрабатываете вы их сами, заказываете у студии или администрируете через CMS.</p>

<p>Для создания простого сайта с нуля достаточно одного HTML-файла и одного CSS-файла. Для сложных проектов с динамическим контентом лучше выбрать CMS или фреймворк — но понимание основ всё равно остаётся фундаментом.</p>

<h2>Источники</h2>

<ul>
<li><a href="https://developer.mozilla.org/ru/docs/Web/HTML" target="_blank">MDN Web Docs — HTML</a></li>
<li><a href="https://developer.mozilla.org/ru/docs/Web/CSS" target="_blank">MDN Web Docs — CSS</a></li>
<li><a href="https://htmlacademy.ru" target="_blank">HTML Academy — курсы по HTML и CSS</a></li>
<li><a href="https://code.visualstudio.com" target="_blank">VS Code — официальный сайт</a></li>
<li><a href="https://caniuse.com" target="_blank">Can I Use — совместимость браузеров</a></li>
</ul>

<div class="article-nav">
<p><strong>Читать далее:</strong> <a href="/website1/blog/ii-dlya-sozdaniya-sayta">ИИ для создания сайта: обзор инструментов 2025 года →</a></p>
<p><strong>Назад:</strong> <a href="/website1/blog/platformy-dlya-sozdaniya-saytov">← Платформы и конструкторы для создания сайтов</a></p>
</div>
`
}
