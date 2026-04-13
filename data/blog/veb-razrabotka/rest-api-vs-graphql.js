export default {
  slug: 'rest-api-vs-graphql',
  title: 'REST API vs GraphQL: в чём разница и что выбрать для проекта в 2026',
  description:
    'REST API и GraphQL: подробное сравнение подходов к созданию API, плюсы и минусы каждого, когда что выбирать. Примеры запросов и архитектура.',
  h1: 'REST API vs GraphQL: в чём разница и что выбрать',
  keywords:
    'rest api vs graphql, разница rest graphql, выбрать api, rest api, graphql, архитектура api, rest или graphql, сравнение api 2026',
  date: '2026-04-13',
  category: 'Веб-разработка',
  cluster: 'veb-razrabotka',
  image: '/images/blog/veb-razrabotka/rest-api-vs-graphql-og.svg',
  schema_question: 'В чём разница между REST API и GraphQL?',
  schema_answer:
    'REST API использует фиксированные эндпоинты с готовой структурой ответа. GraphQL позволяет клиенту запрашивать только нужные поля через один эндпоинт. REST проще для кэширования, GraphQL гибче для сложных данных.',
  content: `
<p>Вы проектируете API для своего приложения. Два основных варианта: REST и GraphQL. Оба работают, оба популярны, но решают задачи по-разному. Разберёмся, в чём разница и что выбрать.</p>

<h2>Что такое REST API</h2>

<p><strong>REST (Representational State Transfer)</strong> — архитектурный стиль для построения веб-API. Основан на HTTP-протоколе и использует стандартные методы: GET, POST, PUT, PATCH, DELETE.</p>

<p>Каждый ресурс — отдельный URL (эндпоинт):</p>

<pre><code>GET    /api/users          — получить всех пользователей
GET    /api/users/42       — получить пользователя с ID 42
POST   /api/users          — создать пользователя
PUT    /api/users/42       — обновить пользователя
DELETE /api/users/42       — удалить пользователя</code></pre>

<p><strong>Ключевые принципы REST:</strong></p>

<ul>
<li><strong>Stateless</strong> — каждый запрос независим, сервер не хранит состояние</li>
<li><strong>Единообразие</strong> — предсказуемые URL и методы HTTP</li>
<li><strong>Клиент-сервер</strong> — разделение ответственности</li>
<li><strong>Кэшируемость</strong> — ответы можно кэшировать на уровне HTTP</li>
<li><strong>Многоуровневость</strong> — клиент не знает, сколько серверов за ответом</li>
</ul>

<h2>Что такое GraphQL</h2>

<p><strong>GraphQL</strong> — язык запросов для API, разработанный Meta (Facebook) в 2012 году, открытый в 2015. Вместо множества эндпоинтов — один URL (<code>/graphql</code>), и клиент сам описывает, какие данные ему нужны.</p>

<pre><code class="language-graphql">query {
  user(id: "42") {
    name
    email
    orders {
      id
      total
      products {
        name
        price
      }
    }
  }
}</code></pre>

<p><strong>Ключевые принципы GraphQL:</strong></p>

<ul>
<li><strong>Один эндпоинт</strong> — все запросы идут на <code>/graphql</code></li>
<li><strong>Клиент выбирает поля</strong> — получает только то, что запросил</li>
<li><strong>Строгая типизация</strong> — схема описывает все типы данных</li>
<li><strong>Три типа операций</strong> — Query (чтение), Mutation (запись), Subscription (подписка на изменения)</li>
</ul>

<h2>Главная проблема: over-fetching и under-fetching</h2>

<p>Это ключевое различие между REST и GraphQL.</p>

<h3>Over-fetching (избыточные данные)</h3>

<p>REST: запросили список пользователей — получили все поля: имя, email, телефон, адрес, дату регистрации. А нужно было только имя. 90% данных — лишние.</p>

<pre><code>// REST: запросили имя, получили всё
GET /api/users/42

// Ответ:
{
  "id": 42,
  "name": "Иван",           // ← нужно
  "email": "ivan@mail.ru",   // ← не нужно
  "phone": "+79001234567",  // ← не нужно
  "address": "Москва, ...",  // ← не нужно
  "created_at": "2024-01-15" // ← не нужно
}

// GraphQL: запросили только имя
query {
  user(id: "42") {
    name   // ← только это
  }
}

// Ответ:
{
  "name": "Иван"
}</code></pre>

<h3>Under-fetching (недостаточные данные)</h3>

<p>REST: чтобы получить пользователя и его заказы — нужно два запроса: <code>GET /api/users/42</code> и <code>GET /api/users/42/orders</code>. Это проблема N+1.</p>

<p>GraphQL: один запрос получает пользователя, заказы и товары в заказе — всё за одно обращение.</p>

<h2>Прямое сравнение REST и GraphQL</h2>

<div class="table-wrapper"><table>
<thead>
<tr><th>Критерий</th><th>REST API</th><th>GraphQL</th></tr>
</thead>
<tbody>
<tr><td>Структура</td><td>Множество эндпоинтов</td><td>Один эндпоинт</td></tr>
<tr><td>Ответы</td><td>Фиксированная структура</td><td>Клиент выбирает поля</td></tr>
<tr><td>Запрос связанных данных</td><td>Несколько запросов (N+1)</td><td>Один запрос с вложенностью</td></tr>
<tr><td>Кэширование</td><td>Встроенное (HTTP cache)</td><td>Нужны дополнительные решения (Apollo, Relay)</td></tr>
<tr><td>Версионирование</td><td>/api/v1/, /api/v2/</td><td>Эволюция схемы без версий</td></tr>
<tr><td>Документация</td><td>Swagger / OpenAPI</td><td>Автогенерация из схемы</td></tr>
<tr><td>Обучение</td><td>Проще (HTTP методы)</td><td>Сложнее (язык запросов)</td></tr>
<tr><td>Мониторинг</td><td>Проще (по эндпоинтам)</td><td>Сложнее (один эндпоинт, разные запросы)</td></tr>
<tr><td>Rate limiting</td><td>Простой (по URL)</td><td>Сложный (по стоимости запроса)</td></tr>
<tr><td>Экосистема</td><td>Огромная</td><td>Растущая (Apollo, urql, Relay)</td></tr>
</tbody>
</table></div>

<h2>Когда выбирать REST API</h2>

<p><strong>Простые CRUD-операции.</strong> Создать, прочитать, обновить, удалить — REST идеален. Эндпоинты интуитивны, HTTP-методы понятны.</p>

<p><strong>Публичное API для третьих разработчиков.</strong> REST — стандарт де-факто. Любой разработчик знает, как работать с REST. GraphQL — нужно изучать.</p>

<p><strong>Кэширование критично.</strong> HTTP-кэш работает из коробки для REST. Каждый URL — отдельный кэш. Для GraphQL нужны дополнительные решения.</p>

<p><strong>Простые данные.</strong> Если данные не связаны — REST проще. Пользователь, товар, заказ — отдельные ресурсы без сложной вложенности.</p>

<p><strong>Микросервисы.</strong> Каждый сервис со своим REST API — проверенная архитектура. GraphQL поверх микросервисов — сложнее (нужен API Gateway).</p>

<h2>Когда выбирать GraphQL</h2>

<p><strong>Сложные связанные данные.</strong> Пользователь → заказы → товары → отзывы → категории. В REST это 5 запросов. В GraphQL — один.</p>

<p><strong>Несколько клиентов с разными потребностями.</strong> Мобильное приложение хочет минимум данных (экономия трафика). Веб-дашборд — максимум. С REST нужно либо два эндпоинта, либо over-fetching. GraphQL — один запрос, клиент сам выбирает.</p>

<p><strong>Быстрые итерации фронтенда.</strong> Фронтенд-разработчику не нужно просить бэкенд добавить новый эндпоинт. Допишите нужный запрос — схема уже описывает все поля.</p>

<p><strong>Real-time данные.</strong> GraphQL Subscriptions — подписка на изменения данных. Чат, уведомления, live-обновления — без WebSocket-кода.</p>

<h2>Производительность: кто быстрее</h2>

<p>Нет однозначного ответа — зависит от сценария.</p>

<p><strong>REST быстрее при:</strong></p>
<ul>
<li>Простых запросах (один ресурс)</li>
<li>Активном кэшировании (HTTP cache, CDN)</li>
<li>Малом количестве связанных данных</li>
</ul>

<p><strong>GraphQL быстрее при:</strong></p>
<ul>
<li>Запросе нескольких связанных ресурсов</li>
<li>Необходимости минимизировать трафик (мобильные)</li>
<li>Сложных данных с множеством полей</li>
</ul>

<p><strong>Проблема N+1 в GraphQL:</strong> если сервер не оптимизирован, запрос «пользователи + их заказы» может выполнить 1 запрос для пользователей + N запросов для заказов каждого. Решается DataLoader (батчинг запросов).</p>

<h2>Безопасность: REST vs GraphQL</h2>

<div class="table-wrapper"><table>
<thead>
<tr><th>Аспект</th><th>REST</th><th>GraphQL</th></tr>
</thead>
<tbody>
<tr><td>Rate limiting</td><td>Простой: по URL и IP</td><td>Сложный: нужно считать «стоимость» запроса</td></tr>
<tr><td>Глубина запросов</td><td>Не проблема (фиксированные эндпоинты)</td><td>Риск: вложенные запросы до 100 уровней (DoS)</td></tr>
<tr><td>Авторизация</td><td>На уровне эндпоинта</td><td>На уровне каждого поля в схеме</td></tr>
<tr><td>Валидация</td><td>На уровне контроллера</td><td>Автоматическая через схему типов</td></tr>
</tbody>
</table></div>

<p><strong>GraphQL требует дополнительных мер:</strong> ограничение глубины запросов, лимит сложности, ограничение количества запросов в единицу времени. Библиотеки: graphql-depth-limit, graphql-validation-complexity.</p>

<h2>Пример: один и тот же запрос в REST и GraphQL</h2>

<p><strong>Задача:</strong> получить страницу блога с автором, комментариями и их авторами.</p>

<p><strong>REST (3 запроса):</strong></p>
<pre><code>GET /api/posts/1
GET /api/posts/1/comments
GET /api/users?ids=2,3,5,7</code></pre>

<p><strong>GraphQL (1 запрос):</strong></p>
<pre><code class="language-graphql">query {
  post(id: "1") {
    title
    content
    author {
      name
      avatar
    }
    comments {
      text
      createdAt
      author {
        name
        avatar
      }
    }
  }
}</code></pre>

<p>Один запрос, одна сеть, один ответ — ровно те данные, которые нужны.</p>

<h2>Можно ли использовать оба подхода</h2>

<p>Да, и это распространённая практика:</p>

<ul>
<li><strong>REST для публичного API</strong> — третьим разработчикам, партнёрам</li>
<li><strong>GraphQL для внутреннего фронтенда</strong> — ваши веб- и мобильные приложения</li>
</ul>

<p>Ещё вариант: <strong>GraphQL как агрегатор над REST</strong>. GraphQL-сервер делает запросы к существующим REST-эндпоинтам и собирает ответ для клиента. Это позволяет постепенно мигрировать с REST на GraphQL.</p>

<h2>Инструменты и экосистема</h2>

<p><strong>REST:</strong></p>
<ul>
<li>Swagger / OpenAPI — документация</li>
<li>Postman — тестирование</li>
<li>Express, FastAPI, Spring Boot — фреймворки</li>
</ul>

<p><strong>GraphQL:</strong></p>
<ul>
<li>Apollo Server / Client — полная экосистема</li>
<li>GraphQL Playground / GraphiQL — интерактивная документация</li>
<li>Relay (Meta), urql — клиенты</li>
<li>Hasura — автогенерация GraphQL над PostgreSQL</li>
<li>AWS AppSync — управляемый GraphQL от Amazon</li>
</ul>

<div class="cta-block">
<p><strong>Нужна помощь с выбором API?</strong></p>
<p>Опишите проект — помогу выбрать архитектуру API, разработаю бэкенд и фронтенд. С учётом масштаба и планов.</p>
<a href="https://t.me/artemselifanov" target="_blank" class="cta-button">
  Получить консультацию
</a>
<p><small>Консультация бесплатна. Отвечаю в течение 2 часов.</small></p>
</div>

<h2>Тренды 2026: что происходит с API</h2>

<p><strong>REST никуда не уходит.</strong> 70% новых API по-прежнему REST. Он прост, понятен и работает.</p>

<p><strong>GraphQL растёт в энтерпрайзе.</strong> Крупные компании с несколькими клиентами и сложными данными переходят на GraphQL.</p>

<p><strong>gRPC для микросервисов.</strong> Внутри серверов — gRPC (быстрее REST и GraphQL). REST/GraphQL — только для внешних клиентов.</p>

<p><strong>tRPC — типобезопасный API.</strong> Для TypeScript-стека (Next.js): один файл описывает API, и фронтенд получает автодополнение типов.</p>

<h2>Итог</h2>

<p>Нет «лучшего» подхода. Есть правильный для вашего проекта:</p>

<ul>
<li><strong>REST</strong> — по умолчанию для большинства проектов. Простой, понятный, кэшируемый, документированный.</li>
<li><strong>GraphQL</strong> — когда данные сложные и связаны, когда несколько клиентов с разными потребностями, когда фронтенд часто меняется.</li>
<li><strong>Оба вместе</strong> — REST для внешних, GraphQL для внутренних потребителей.</li>
</ul>

<p>Начните с REST. Если упрётесь в over-fetching, N+1 запросы или боль фронтенд-разработчиков — рассмотрите GraphQL. Или начните с GraphQL, если заранее знаете, что данные сложные.</p>

<h2>Источники</h2>

<ul>
<li><a href="https://graphql.org/" target="_blank" rel="noopener">GraphQL.org — Официальный сайт</a></li>
<li><a href="https://restfulapi.net/" target="_blank" rel="noopener">RESTful API Design</a></li>
<li><a href="https://www.apollographql.com/" target="_blank" rel="noopener">Apollo GraphQL — Экосистема</a></li>
<li><a href="https://hasura.io/" target="_blank" rel="noopener">Hasura — GraphQL из коробки</a></li>
<li><a href="https://2026.stateofjs.com/en-US/features/data-layer/" target="_blank" rel="noopener">State of JS 2026 — Data Layer</a></li>
</ul>

<div class="article-nav">
<p><strong>Читать далее:</strong> <a href="/blog/veb-server">Что такое веб-сервер и как он работает →</a></p>
<p><strong>Назад:</strong> <a href="/blog/chto-takoe-react">← React: что такое и для каких проектов подходит</a></p>
</div>
`,
}
