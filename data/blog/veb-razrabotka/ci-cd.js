export default {
  slug: 'ci-cd',
  title: 'CI/CD: что такое непрерывная интеграция и непрерывная доставка, зачем нужна в 2026',
  description:
    'CI/CD: что такое непрерывная интеграция и непрерывная доставка, как настроить автоматизацию тестов и деплоя, GitHub Actions, GitLab CI, инструменты и лучшие практики.',
  h1: 'CI/CD: что такое непрерывная интеграция и зачем она нужна',
  keywords:
    'ci cd что это, непрерывная интеграция, непрерывная доставка, автоматизация деплоя, github actions, gitlab ci, ci/cd пайплайн, автоматическое тестирование, devops',
  date: '2026-04-13',
  category: 'Веб-разработка',
  cluster: 'veb-razrabotka',
  image: '/images/blog/veb-razrabotka/ci-cd-og.svg',
  schema_question: 'Что такое CI/CD?',
  schema_answer:
    'CI/CD — практика автоматизации: непрерывная интеграция (CI) автоматически тестирует каждый коммит, непрерывная доставка/деплой (CD) автоматически разворачивает код на сервере.',
  content: `
<p>Раньше: разработчик писал код неделю → собирал «большой релиз» → тестировщики две недели искали баги → админ вручную deployил на сервер → что-то ломалось → откат → снова цикл.</p>

<p>Сейчас: разработчик нажал «Сохранить» → через 3 минуты код на продакшне, протестированный, с отчётами и уведомлениями. Без участия человека.</p>

<p>Это и есть CI/CD. Разберёмся, как это работает и зачем нужно даже для небольших проектов.</p>

<h2>Что такое CI/CD</h2>

<p><strong>CI/CD</strong> — набор практик для автоматизации процесса от написания кода до его развёртывания на сервере.</p>

<p><strong>CI (Continuous Integration) — непрерывная интеграция:</strong> при каждом изменении кода (коммите) автоматически запускаются тесты, проверка стиля кода (lint) и сборка. Если что-то сломалось — разработчик узнаёт мгновенно.</p>

<p><strong>CD (Continuous Delivery / Deployment) — непрерывная доставка/доставка:</strong></p>

<ul>
<li><strong>Continuous Delivery</strong> — код автоматически собирается и подготавливается к развёртыванию. Но на продакшн — вручную (кнопка «Deploy»).</li>
<li><strong>Continuous Deployment</strong> — код автоматически развёртывается на продакшне без участия человека. Каждый прошедший тесты коммит — сразу в продакшн.</li>
</ul>

<h2>Аналогия из жизни</h2>

<p>Представьте фабрику по производству автомобилей:</p>

<ul>
<li><strong>Без CI/CD:</strong> собрали 100 автомобилей → привезли на проверку → обнаружили брак в тормозах → переделали все 100. Дорого и долго.</li>
<li><strong>С CI:</strong> каждый автомобиль проверяется на конвейере. Бракованная деталь → остановка линии → исправление сразу. Дёшево и быстро.</li>
<li><strong>С CI/CD:</strong> каждый автомобиль проверяется на конвейере (CI) → прошедшие проверку автоматически отправляются дилерам (CD).</li>
</ul>

<h2>Как работает CI/CD пайплайн</h2>

<p><strong>Пайплайн (pipeline)</strong> — последовательность шагов, которые выполняются автоматически при каждом изменении кода.</p>

<pre><code>Разработчик делает push в Git
        ↓
    [1] Lint — проверка стиля кода
        ↓ (если OK)
    [2] Тесты — юнит-тесты, интеграционные тесты
        ↓ (если OK)
    [3] Сборка — компиляция, оптимизация, Docker-образ
        ↓ (если OK)
    [4] Тестирование сборки — E2E-тесты, smoke-тесты
        ↓ (если OK)
    [5] Деплой на staging — тестовый сервер
        ↓ (если OK)
    [6] Деплой на продакшн (автоматически или вручную)
        ↓
    [7] Уведомление — Slack, Telegram, email</code></pre>

<p>Если на любом этапе ошибка — пайплайн останавливается, разработчик получает уведомление. Плохой код не попадает на продакшн.</p>

<h2>Зачем нужен CI/CD</h2>

<h3>1. Раннее обнаружение ошибок</h3>

<p>Баг найден через 3 минуты после коммита — исправить 5 минут. Баг найден через месяц — исправить 5 часов (нужно вспомнить, разобраться, не сломать остальное).</p>

<h3>2. Быстрая доставка фич</h3>

<p>Без CI/CD: релиз раз в месяц. С CI/CD: релиз 10 раз в день. Amazon deployит код каждые 11 секунд. Netflix — тысячи раз в день.</p>

<h3>3. Воспроизводимость</h3>

<p>«У меня работает» — не аргумент. CI/CD собирает код в одинаковом окружении каждый раз. Результат предсказуем.</p>

<h3>4. Документирование процесса</h3>

<p>Файл пайплайна (<code>.github/workflows/deploy.yml</code>) — это документация: «как мы собираем, тестируем и deployим код». Новый разработчик видит — понимает.</p>

<h3>5. Безопасность</h3>

<p>Автоматические проверки: уязвимости в зависимостях, секретные ключи в коде, политики безопасности. До того, как код попадёт на сервер.</p>

<h2>Инструменты CI/CD</h2>

<h3>GitHub Actions</h3>

<p>Самый популярный CI/CD-инструмент для проектов на GitHub. Бесплатен для публичных репозиториев и до 2 000 минут/мес для приватных.</p>

<div class="table-wrapper"><table>
<thead>
<tr><th>Плюсы</th><th>Минусы</th></tr>
</thead>
<tbody>
<tr><td>Бесплатный для open-source</td><td>Ограниченное время для приватных репозиториев</td></tr>
<tr><td>Интегрирован с GitHub</td><td>Меньше гибкости, чем у Jenkins</td></tr>
<tr><td>Огромный маркетплейс готовых action</td><td>Привязка к экосистеме GitHub</td></tr>
<tr><td>Простой синтаксис YAML</td><td>Медленнее, чем self-hosted раннеры</td></tr>
<tr><td>Поддержка Docker, кэширования, матриц</td><td></td></tr>
</tbody>
</table></div>

<p><strong>Пример пайплайна для Nuxt.js:</strong></p>

<pre><code class="language-yaml">name: Build and Deploy

on:
  push:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 22

      - name: Install dependencies
        run: npm ci

      - name: Run tests
        run: npm test

      - name: Build
        run: npm run generate

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: $\x7b\x7b secrets.GITHUB_TOKEN \x7d\x7d
          publish_dir: ./dist</code></pre>

<h3>GitLab CI/CD</h3>

<p>Встроенный CI/CD в GitLab. Мощный, гибкий, с встроенным реестром Docker-образов.</p>

<div class="table-wrapper"><table>
<thead>
<tr><th>Плюсы</th><th>Минусы</th></tr>
</thead>
<tbody>
<tr><td>Бесплатные минуты (400/мес)</td><td>Сложнее в настройке, чем GitHub Actions</td></tr>
<tr><td>Self-hosted раннеры бесплатно</td><td>Привязка к GitLab</td></tr>
<tr><td>Встроенный Docker Registry</td><td></td></tr>
<tr><td>Review Apps — автоматический деплой для каждого MR</td><td></td></tr>
</tbody>
</table></div>

<p><strong>Пример .gitlab-ci.yml:</strong></p>

<pre><code class="language-yaml">stages:
  - test
  - build
  - deploy

test:
  stage: test
  image: node:22
  script:
    - npm ci
    - npm test

build:
  stage: build
  image: node:22
  script:
    - npm ci
    - npm run generate
  artifacts:
    paths:
      - dist/

deploy:
  stage: deploy
  image: alpine
  script:
    - apk add openssh
    - scp -r dist/ user@server:/var/www/site
  only:
    - main</code></pre>

<h3>Jenkins</h3>

<p>Классический CI/CD-инструмент с открытым кодом. Работает с 2005 года, самый гибкий, но самый сложный в настройке.</p>

<div class="table-wrapper"><table>
<thead>
<tr><th>Плюсы</th><th>Минусы</th></tr>
</thead>
<tbody>
<tr><td>Полная свобода настройки</td><td>Сложный в установке и поддержке</td></tr>
<tr><td>2 000+ плагинов</td><td>Устаревший UI</td></tr>
<tr><td>Self-hosted, бесплатно</td><td>Нужен отдельный сервер</td></tr>
<tr><td>Поддержка любых языков и платформ</td><td>Требует Jenkins-администратора</td></tr>
</tbody>
</table></div>

<p><strong>Для кого:</strong> энтерпрайз, крупные компании с уникальными требованиями, проекты, которым нужна полная свобода настройки.</p>

<h3>Другие инструменты</h3>

<ul>
<li><strong>CircleCI</strong> — облачный CI/CD, прост в настройке, бесплатный для open-source</li>
<li><strong>Travis CI</strong> — один из первых облачных CI, сейчас менее популярен</li>
<li><strong>TeamCity</strong> — от JetBrains, хорош для Java/.NET проектов</li>
<li><strong>Azure DevOps</strong> — CI/CD от Microsoft, интеграция с Azure</li>
<li><strong>Vercel / Netlify CI</strong> — встроенный CI/CD для фронтенд-проектов</li>
</ul>

<h2>Что проверять в CI-пайплайне</h2>

<h3>Минимальный набор (обязательно)</h3>

<ul>
<li><strong>Lint</strong> — проверка стиля кода (ESLint, Prettier, flake8)</li>
<li><strong>Юнит-тесты</strong> — тесты отдельных функций и компонентов</li>
<li><strong>Сборка</strong> — код компилируется/собирается без ошибок</li>
</ul>

<h3>Рекомендуемый набор</h3>

<ul>
<li><strong>Интеграционные тесты</strong> — тесты взаимодействия компонентов</li>
<li><strong>E2E-тесты</strong> — тесты полного пользовательского сценария (Playwright, Cypress)</li>
<li><strong>Проверка зависимостей</strong> — уязвимости в npm-пакетах (npm audit, Snyk)</li>
<li><strong>Проверка секретов</strong> — ключи API в коде (git-secrets, gitleaks)</li>
</ul>

<h3>Продвинутый набор</h3>

<ul>
<li><strong>Нагрузочные тесты</strong> — выдержит ли сервер пик трафика</li>
<li><strong>Accessibility-тесты</strong> — доступен ли сайт для людей с ограниченными возможностями</li>
<li><strong>SEO-тесты</strong> — правильные ли meta-теги, schema.org</li>
<li><strong>Lighthouse</strong> — производительность, SEO, доступность, best practices</li>
</ul>

<h2>CD: стратегии деплоя</h2>

<h3>Blue-Green Deployment</h3>

<p>Две идентичные среды: «синяя» (текущая) и «зелёная» (новая). Деплоите на «зелёную», тестируете, переключаете трафик. Если что-то не так — мгновенный откат на «синюю».</p>

<h3>Canary Deployment</h3>

<p>Новая версия разворачивается для 5% пользователей. Если всё OK — для 25%, затем для 100%. Если ошибки — автоматический откат.</p>

<h3>Rolling Deployment</h3>

<p>Серверы обновляются по очереди: сервер 1 → сервер 2 → сервер 3. Сервис не прерывается — часть серверов всегда работает.</p>

<h3>Для небольших проектов</h3>

<p>Blue-Green и Canary — для крупных. Для лендинга или блога: автосборка → автотесты → деплой на продакшн. Если тесты провалились — деплой отменяется.</p>

<h2>Типичные ошибки при настройке CI/CD</h2>

<p><strong>Нет тестов.</strong> CI без тестов — просто автоматическая сборка. Тесты — суть CI. Начните с 3–5 ключевых юнит-тестов.</p>

<p><strong>Слишком сложный пайплайн с первого дня.</strong> Не нужно настраивать E2E, нагрузочные, accessibility-тесты для нового проекта. Начните с lint + тесты + сборка. Добавляйте по мере роста.</p>

<p><strong>Секреты в коде.</strong> API-ключи, пароли, токены — НИКОГДА в репозитории. Используйте Secrets в GitHub Actions / GitLab CI / переменные окружения.</p>

<p><strong>Нет уведомления о провале.</strong> Пайплайн упал, а вы узнали через день — бессмысленно. Настройте уведомления в Slack, Telegram или email.</p>

<p><strong>Медленный пайплайн.</strong> Сборка 30 минут демотивирует разработчиков. Кэшируйте зависимости, используйте параллельные джобы, оптимизируйте.</p>

<div class="cta-block">
<p><strong>Нужна настройка CI/CD?</strong></p>
<p>Настрою GitHub Actions или GitLab CI: тесты, сборка, деплой, мониторинг. С Docker и уведомлениями в Telegram.</p>
<a href="https://t.me/artemselifanov" target="_blank" class="cta-button">
  Обсудить CI/CD
</a>
<p><small>Консультация бесплатна. Отвечаю в течение 2 часов.</small></p>
</div>

<h2>CI/CD для маленького проекта: минимальный набор</h2>

<p>Для проекта на Nuxt.js / Next.js на GitHub Pages / Vercel:</p>

<ol>
<li><strong>GitHub Actions</strong> — бесплатно, просто</li>
<li><strong>Lint (ESLint)</strong> — 30 секунд</li>
<li><strong>Тесты (Vitest / Jest)</strong> — 1–2 минуты</li>
<li><strong>Сборка (npm run generate / build)</strong> — 2–3 минуты</li>
<li><strong>Деплой</strong> — автоматически на GitHub Pages / Vercel</li>
<li><strong>Уведомление</strong> — если сборка провалилась</li>
</ol>

<p>Итого: ~5 минут от коммита до продакшна. Без участия человека.</p>

<h2>Итог</h2>

<p>CI/CD — не «для больших компаний». Это практика, которая окупается с первого дня даже для одного разработчика:</p>

<ul>
<li><strong>CI</strong> — каждый коммит тестируется автоматически</li>
<li><strong>CD</strong> — каждый прошедший тесты коммит deployится автоматически</li>
<li><strong>Результат</strong> — меньше багов, быстрее релизы, предсказуемый процесс</li>
</ul>

<p>Начните с GitHub Actions: lint + тесты + сборка + деплой. Это 80% пользы при 20% усилий. Остальное добавляйте по мере роста проекта.</p>

<h2>Источники</h2>

<ul>
<li><a href="https://docs.github.com/en/actions" target="_blank" rel="noopener">GitHub Actions — Документация</a></li>
<li><a href="https://docs.gitlab.com/ee/ci/" target="_blank" rel="noopener">GitLab CI/CD — Документация</a></li>
<li><a href="https://www.jenkins.io/" target="_blank" rel="noopener">Jenkins — Официальный сайт</a></li>
<li><a href="https://circleci.com/" target="_blank" rel="noopener">CircleCI — Официальный сайт</a></li>
<li><a href="https://about.gitlab.com/topics/ci-cd/" target="_blank" rel="noopener">GitLab — Что такое CI/CD</a></li>
</ul>

<div class="article-nav">
<p><strong>Читать далее:</strong> <a href="/blog/fullstack-razrabotka">Fullstack-разработка: кто такой fullstack-разработчик →</a></p>
<p><strong>Назад:</strong> <a href="/blog/hosting-vybrat">← Как выбрать хостинг для сайта: VPS, shared, облако</a></p>
</div>
`,
}
