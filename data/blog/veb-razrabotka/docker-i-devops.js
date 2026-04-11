export default {
  slug: 'docker-i-devops',
  title: 'Docker и DevOps: базовое руководство для начинающих в 2026',
  description:
    'Что такое Docker и DevOps, зачем они нужны, как работают, основные инструменты и с чего начать изучение. Простое объяснение сложных концепций.',
  category: 'Веб-разработка',
  cluster: 'veb-razrabotka',
  date: '2026-04-09',
  image: '/images/blog/veb-razrabotka/docker-i-devops-og.svg',
  content: `
<p>«У меня на компьютере работает» — фраза, от которой у DevOps-инженеров дергается глаз. Потому что в продакшне — не работает.</p>

<p>Docker и DevOps — это ответ на эту проблему. Но что это такое, если без модных слов?</p>

<p>Объясню на примерах.</p>

<h2>Проблема: «У меня работает!»</h2>

<p>Разработчик написал приложение. На его компьютере — Node.js 22, PostgreSQL 16, macOS. Отправил на сервер — там Node.js 18, PostgreSQL 14, Ubuntu. Приложение не запускается.</p>

<p>Начинается: «Какая у тебя версия?», «А какие пакеты установлены?», «А переменные окружения?» — и так каждый раз.</p>

<h2>Решение: Docker</h2>

<p><strong>Docker</strong> — это контейнеризация. Вы упаковываете приложение <strong>со всем окружением</strong>: Node.js, базы данных, библиотеки, конфиги — в один «контейнер».</p>

<p>Контейнер работает одинаково везде: на MacBook разработчика, на сервере в Москве, в облаке AWS. Однажды собранный — всегда работает.</p>

<h3>Аналогия из жизни</h3>

<p>До контейнеров в грузоперевозках каждый товар грузили отдельно: мешки, ящики, бочки. Долго, сложно, что-то портилось.</p>

<p>Потом придумали <strong>стандартные контейнеры</strong>. Неважно, что внутри — контейнер одинаковый, краны и корабли работают с ним одинаково.</p>

<p>Docker — тот же принцип для приложений.</p>

<h2>Основные понятия Docker</h2>

<h3>Image (образ)</h3>

<p><strong>Образ</strong> — шаблон, «рецепт» вашего приложения. Файл <code>Dockerfile</code> описывает, что нужно:</p>

<p>Это как рецепт: возьми Node.js 22, скопируй файлы, установи зависимости, запусти.</p>

<h3>Container (контейнер)</h3>

<p><strong>Контейнер</strong> — запущенный образ. Как блюдо, приготовленное по рецепту. Один образ = много контейнеров.</p>

<h3>Docker Compose</h3>

<p><strong>Compose</strong> — файл для запуска нескольких контейнеров вместе. Например: приложение + база данных + Redis — одной командой <code>docker compose up</code>.</p>

<h2>Зачем Docker веб-разработчику</h2>

<div class="table-wrapper"><table>
<thead>
<tr><th>Проблема без Docker</th><th>Решение с Docker</th></tr>
</thead>
<tbody>
<tr><td>«У меня работает, у тебя нет»</td><td>Одинаковое окружение у всех</td></tr>
<tr><td>Часы на настройку сервера</td><td>5 минут: <code>docker compose up</code></td></tr>
<tr><td>Конфликты версий (Node 18 vs 22)</td><td>Каждый проект в своём контейнере</td></tr>
<tr><td>Сложный деплой</td><td>Собрал образ → запустил на сервере</td></tr>
<tr><td>Новый разработчик 2 дня настраивает окружение</td><td>Клонировал репозиторий → <code>docker compose up</code> → готово</td></tr>
</tbody>
</table></div>

<h2>Что такое DevOps</h2>

<p><strong>DevOps</strong> — это не инструмент. Это <strong>культура и практика</strong>, которая объединяет разработку (Development) и эксплуатацию (Operations).</p>

<p>Без DevOps: разработчики пишут код → «перебрасывают через забор» → админы разворачивают → что-то ломается → разработчики говорят «у нас работало» → админы говорят «у вас кривой код».</p>

<p>С DevOps: одна команда, общие инструменты, автоматизация всего: тестов, сборки, деплоя, мониторинга.</p>

<h2>Основные практики DevOps</h2>

<h3>1. CI/CD (Continuous Integration / Continuous Delivery)</h3>

<p><strong>CI:</strong> при каждом коммите автоматически запускаются тесты. Если тесты провалились — коммит отклоняется.</p>

<p><strong>CD:</strong> если тесты прошли — приложение автоматически собирается и разворачивается на сервере.</p>

<p><strong>Инструменты:</strong> GitHub Actions, GitLab CI, Jenkins, CircleCI.</p>

<h3>2. Инфраструктура как код (IaC)</h3>

<p>Серверы настраиваются не вручную, а через код. Файл описывает, какие серверы нужны, какие порты открыты, какие сервисы запущены.</p>

<p><strong>Инструменты:</strong> Terraform, Ansible, Pulumi.</p>

<h3>3. Мониторинг и логирование</h3>

<p>Вы узнаёте о проблеме до того, как позвонит клиент:</p>

<ul>
<li><strong>Мониторинг:</strong> Grafana, Prometheus, Datadog — графики CPU, памяти, запросов</li>
<li><strong>Логирование:</strong> ELK Stack (Elasticsearch, Logstash, Kibana), Loki — логи всех сервисов в одном месте</li>
<li><strong>Оповещения:</strong> Slack, Telegram, PagerDuty — уведомление при падении</li>
</ul>

<h3>4. Оркестрация контейнеров</h3>

<p>Когда у вас 50 контейнеров на 10 серверах — вручную ими не управлять. Нужен <strong>оркестратор</strong>.</p>

<p><strong>Kubernetes (K8s)</strong> — стандарт индустрии. Автоматически запускает, останавливает, масштабирует контейнеры.</p>

<p><strong>Для малого бизнеса:</strong> Kubernetes — оверкилл. Docker Compose + один сервер — достаточно для 95% проектов.</p>

<h2>DevOps-инструменты: что нужно знать</h2>

<div class="table-wrapper"><table>
<thead>
<tr><th>Инструмент</th><th>Зачем</th><th>Сложность</th></tr>
</thead>
<tbody>
<tr><td><strong>Docker</strong></td><td>Контейнеризация приложений</td><td>Низкая</td></tr>
<tr><td><strong>Docker Compose</strong></td><td>Запуск нескольких контейнеров</td><td>Низкая</td></tr>
<tr><td><strong>GitHub Actions</strong></td><td>CI/CD: автотесты, автодеплой</td><td>Средняя</td></tr>
<tr><td><strong>Nginx</strong></td><td>Веб-сервер, обратный прокси</td><td>Средняя</td></tr>
<tr><td><strong>PostgreSQL / Redis</strong></td><td>Базы данных в контейнерах</td><td>Низкая</td></tr>
<tr><td><strong>Terraform</strong></td><td>Инфраструктура как код</td><td>Высокая</td></tr>
<tr><td><strong>Kubernetes</strong></td><td>Оркестрация контейнеров</td><td>Высокая</td></tr>
<tr><td><strong>Grafana + Prometheus</strong></td><td>Мониторинг</td><td>Средняя</td></tr>
</tbody>
</table></div>

<h2>С чего начать изучение DevOps</h2>

<ol>
<li><strong>Docker:</strong> научитесь упаковывать приложения в контейнеры. Это база всего.</li>
<li><strong>Docker Compose:</strong> запускайте приложение + БД + Redis одной командой.</li>
<li><strong>GitHub Actions:</strong> автоматизируйте тесты и деплой при push в main.</li>
<li><strong>Nginx:</strong> настройте обратный прокси и HTTPS.</li>
<li><strong>Мониторинг:</strong> подключите базовый мониторинг (UptimeRobot, Sentry).</li>
</ol>

<p>Kubernetes, Terraform и Ansible — потом, когда проект вырастет.</p>

<h2>Пример: DevOps для небольшого проекта</h2>

<p>Вот минимальный DevOps-стек для сайта на Nuxt/React:</p>

<ol>
<li><strong>Docker</strong> — приложение в контейнере</li>
<li><strong>Docker Compose</strong> — приложение + PostgreSQL + Redis</li>
<li><strong>GitHub Actions</strong> — при push в main: тесты → сборка → деплой</li>
<li><strong>Nginx</strong> — обратный прокси + HTTPS (Let's Encrypt)</li>
<li><strong>UptimeRobot</strong> — мониторинг доступности (бесплатно)</li>
<li><strong>Sentry</strong> — отслеживание ошибок (бесплатно до 5 000 ошибок/мес)</li>
</ol>

<p>Итого: разработчик делает push → через 5 минут код на продакшне с тестами, HTTPS и мониторингом. Без ручного вмешательства.</p>

<div class="cta-block">
<p><strong>Нужна настройка DevOps?</strong></p>
<p>Настрою Docker, CI/CD, деплой и мониторинг для вашего проекта. Автоматизирую всё, что можно автоматизировать.</p>
<a href="https://t.me/artemselifanov" target="_blank" class="cta-button">
  Обсудить DevOps
</a>
<p><small>Консультация бесплатна. Отвечаю в течение 2 часов.</small></p>
</div>

<h2>Типичные ошибки</h2>

<p><strong>Kubernetes для лендинга.</strong> Не нужен K8s для сайта на 100 посетителей в день. Docker Compose хватит.</p>

<p><strong>Нет CI/CD.</strong> Деплой вручную через FTP — это не DevOps. Автоматизируйте с первого дня.</p>

<p><strong>Нет мониторинга.</strong> «Узнал от клиента, что сайт упал» — это провал. Настройте оповещения.</p>

<p><strong>Docker без пользы.</strong> Если у вас один проект на одном сервере и всё работает — Docker не обязателен. Он полезен, когда проектов много или окружение сложное.</p>

<h2>Итог</h2>

<p>Docker — решает проблему «у меня работает». DevOps — решает проблему «как доставить код до продакшна без боли».</p>

<p>Начните с Docker и GitHub Actions — это даст 80% пользы при 20% усилий. Остальное добавляйте по мере роста проекта.</p>

<h2>Источники</h2>

<ul>
<li><a href="https://www.docker.com/" target="_blank">Docker.com — Официальная документация</a></li>
<li><a href="https://docs.github.com/en/actions" target="_blank">GitHub Actions — Документация</a></li>
<li><a href="https://kubernetes.io/" target="_blank">Kubernetes.io — Официальный сайт</a></li>
<li><a href="https://about.gitlab.com/topics/devops/" target="_blank">GitLab — Что такое DevOps</a></li>
</ul>

<div class="article-nav">
<p><strong>Читать далее:</strong> <a href="/blog/bezopasnost-sayta">Безопасность сайта: как защитить от взлома →</a></p>
<p><strong>Назад:</strong> <a href="/blog/bazy-dannyh">← Базы данных: SQL vs NoSQL для веб-разработки</a></p>
</div>
`,
}
