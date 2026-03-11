export default {
  slug: 'api-razrabotka',
  title: 'Разработка API: что такое API, как создать и задокументировать',
  description: 'Полное руководство по разработке API: REST, GraphQL, gRPC, WebSocket. Проектирование, авторизация, документация и безопасность в 2026 году.',
  category: 'Веб-разработка',
  cluster: 'veb-razrabotka',
  date: '2026-02-27',
  image: null,
  content: `
    <p>API (Application Programming Interface) — это интерфейс, через который программы общаются друг с другом. Когда мобильное приложение получает список товаров, когда сайт показывает погоду, когда CRM синхронизируется с почтой — всё это работает через API. Сегодня API — основа любой цифровой инфраструктуры: от мессенджеров до банков.</p>

    <p>В этой статье разберём, что такое API, какие виды существуют, как спроектировать и разработать хорошее API и как его задокументировать.</p>

    <h2>Что такое API и зачем оно нужно</h2>

    <p>API — это набор правил и протоколов, по которым одна программа может обращаться к функциям другой. Представьте официанта в ресторане: вы (клиент) не идёте на кухню сами — вы передаёте заказ официанту (API), который доносит его до кухни (сервера) и возвращает вам результат (ответ).</p>

    <p><strong>Зачем нужно API:</strong></p>

    <ul>
      <li><strong>Разделение фронтенда и бэкенда.</strong> React-приложение, мобильное приложение и десктопный клиент могут использовать одно и то же API — не нужно дублировать логику.</li>
      <li><strong>Интеграции.</strong> Подключить платёжную систему, карты, сервис рассылок, CRM — всё это делается через их API.</li>
      <li><strong>Микросервисы.</strong> Независимые сервисы общаются между собой через API.</li>
      <li><strong>Партнёрские интеграции.</strong> Дать другим компаниям доступ к вашим данным или функциям — через публичное API.</li>
    </ul>

    <blockquote>
      <strong>«Хорошее API — как хороший инструмент: его логика очевидна, поведение предсказуемо, и ты забываешь, что пользуешься инструментом. Плохое API постоянно о себе напоминает.»</strong>
    </blockquote>

    <div class="cta-block">
      <p>Нужна разработка API для проекта?</p>
      <a href="https://t.me/artemselifanov" target="_blank" class="cta-button">
        Обсудить разработку
        <span>→</span>
      </a>
    </div>

    <h2>Виды API</h2>

    <h3>REST API</h3>

    <p><strong>REST (Representational State Transfer)</strong> — архитектурный стиль, ставший стандартом для веб-API. Основан на HTTP-протоколе.</p>

    <p><strong>Принципы REST:</strong></p>
    <ul>
      <li><strong>Единообразие интерфейса</strong> — предсказуемые URL и методы</li>
      <li><strong>Stateless</strong> — каждый запрос самодостаточен, сервер не хранит состояние сессии</li>
      <li><strong>Клиент-сервер</strong> — чёткое разделение ответственности</li>
      <li><strong>Кэшируемость</strong> — ответы могут кэшироваться</li>
    </ul>

    <div class="table-wrapper">
      <table>
        <thead>
          <tr>
            <th>Метод</th>
            <th>Действие</th>
            <th>Пример</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>GET</td>
            <td>Получить данные</td>
            <td><code>GET /api/users</code></td>
          </tr>
          <tr>
            <td>POST</td>
            <td>Создать запись</td>
            <td><code>POST /api/users</code></td>
          </tr>
          <tr>
            <td>PUT</td>
            <td>Заменить запись целиком</td>
            <td><code>PUT /api/users/42</code></td>
          </tr>
          <tr>
            <td>PATCH</td>
            <td>Обновить часть записи</td>
            <td><code>PATCH /api/users/42</code></td>
          </tr>
          <tr>
            <td>DELETE</td>
            <td>Удалить запись</td>
            <td><code>DELETE /api/users/42</code></td>
          </tr>
        </tbody>
      </table>
    </div>

    <p><strong>HTTP-статусы ответа:</strong></p>
    <ul>
      <li><code>200 OK</code> — успешно</li>
      <li><code>201 Created</code> — создано</li>
      <li><code>400 Bad Request</code> — ошибка в запросе клиента</li>
      <li><code>401 Unauthorized</code> — не авторизован</li>
      <li><code>403 Forbidden</code> — нет прав</li>
      <li><code>404 Not Found</code> — не найдено</li>
      <li><code>422 Unprocessable Entity</code> — ошибка валидации</li>
      <li><code>500 Internal Server Error</code> — ошибка сервера</li>
    </ul>

    <h3>GraphQL</h3>

    <p>Язык запросов для API, разработанный Meta. Клиент сам описывает, какие именно данные ему нужны.</p>

    <p><strong>Главное отличие от REST:</strong> в REST каждый эндпоинт возвращает фиксированную структуру. В GraphQL один эндпоинт (<code>/graphql</code>), и клиент запрашивает именно те поля, которые нужны.</p>

    <pre><code class="language-graphql"># Клиент запрашивает только нужные поля
query {
  user(id: "42") {
    name
    email
    orders {
      id
      total
    }
  }
}</code></pre>

    <p><strong>Когда выбирать GraphQL:</strong></p>
    <ul>
      <li>Сложные данные с множеством связей</li>
      <li>Несколько клиентов с разными потребностями (веб, мобильный)</li>
      <li>Нужно избежать over-fetching (лишних данных) и under-fetching (недостающих данных)</li>
    </ul>

    <p><strong>Когда REST лучше:</strong></p>
    <ul>
      <li>Простые CRUD-операции</li>
      <li>Публичное API для третьих разработчиков</li>
      <li>Кэширование критично (GraphQL сложнее кэшировать)</li>
    </ul>

    <h3>gRPC</h3>

    <p>Высокопроизводительный RPC-фреймворк от Google. Использует Protocol Buffers (бинарный формат) вместо JSON — значительно быстрее и легче.</p>

    <p><strong>Когда использовать:</strong> межсервисное взаимодействие в микросервисной архитектуре, высоконагруженные системы, где важна скорость.</p>

    <h3>WebSocket API</h3>

    <p>Двустороннее соединение в реальном времени. В отличие от REST, где клиент всегда инициирует запрос, WebSocket позволяет серверу отправлять данные клиенту без запроса.</p>

    <p><strong>Используется в:</strong> чатах, live-уведомлениях, онлайн-играх, трекинге в реальном времени, совместном редактировании.</p>

    <h2>Проектирование REST API: лучшие практики</h2>

    <h3>Именование эндпоинтов</h3>

    <pre><code class="language-bash"># Хорошо — существительные, множественное число, иерархия
GET    /api/v1/users
GET    /api/v1/users/42
GET    /api/v1/users/42/orders
POST   /api/v1/users
DELETE /api/v1/users/42

# Плохо — глаголы в URL
GET /api/getUsers
POST /api/createUser
GET /api/getUserOrders?userId=42</code></pre>

    <h3>Версионирование</h3>

    <p>Версионирование обязательно для публичного API. Изменения в API не должны ломать существующих клиентов.</p>

    <pre><code class="language-bash">/api/v1/users  — текущая версия
/api/v2/users  — новая версия с изменениями</code></pre>

    <h3>Пагинация</h3>

    <p>При возврате списков всегда используйте пагинацию:</p>

    <pre><code class="language-json">{
  "data": [...],
  "pagination": {
    "page": 1,
    "per_page": 20,
    "total": 347,
    "total_pages": 18
  }
}</code></pre>

    <h3>Фильтрация и сортировка</h3>

    <pre><code class="language-bash">GET /api/v1/orders?status=pending&amp;sort=created_at&amp;order=desc
GET /api/v1/products?category=electronics&amp;min_price=1000&amp;max_price=50000</code></pre>

    <h3>Структура ответа</h3>

    <p>Единообразная структура ответов упрощает работу клиентам:</p>

    <pre><code class="language-json">// Успешный ответ
{
  "success": true,
  "data": {
    "id": 42,
    "name": "Иван Иванов",
    "email": "ivan@example.com"
  }
}

// Ответ с ошибкой
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Email уже используется",
    "fields": {
      "email": "Пользователь с таким email уже существует"
    }
  }
}</code></pre>

    <div class="cta-block">
      <p>Хотите изучить разработку API?</p>
      <a href="https://t.me/artemselifanov" target="_blank" class="cta-button">
        Получить консультацию по обучению
        <span>→</span>
      </a>
    </div>

    <h2>Авторизация и аутентификация API</h2>

    <h3>API Keys</h3>

    <p>Простейший способ: клиент передаёт статичный ключ в заголовке.</p>

    <pre><code>Authorization: ApiKey sk_live_abc123xyz</code></pre>

    <p>Подходит для: серверных интеграций, простых публичных API.</p>
    <p>Не подходит для: пользовательской аутентификации.</p>

    <h3>JWT (JSON Web Tokens)</h3>

    <p>Стандарт для аутентификации пользователей. Токен содержит данные пользователя и подписан секретным ключом сервера.</p>

    <pre><code>Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...</code></pre>

    <p><strong>Поток аутентификации:</strong></p>
    <ol>
      <li>Пользователь вводит логин/пароль</li>
      <li>Сервер проверяет и возвращает <code>access_token</code> (короткоживущий) и <code>refresh_token</code> (долгоживущий)</li>
      <li>Клиент отправляет <code>access_token</code> в заголовке каждого запроса</li>
      <li>Когда <code>access_token</code> истекает — обновляет его через <code>refresh_token</code></li>
    </ol>

    <h3>OAuth 2.0</h3>

    <p>Стандарт для делегированного доступа. «Войти через Google / ВКонтакте» — это OAuth 2.0. Пользователь даёт вашему приложению доступ к данным стороннего сервиса.</p>

    <h2>Разработка API на практике</h2>

    <h3>Пример простого REST API на FastAPI (Python)</h3>

    <pre><code class="language-python">from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import List

app = FastAPI(title="Users API", version="1.0.0")

# Модель данных
class User(BaseModel):
    id: int
    name: str
    email: str

class UserCreate(BaseModel):
    name: str
    email: str

# Имитация базы данных
users_db = [
    User(id=1, name="Иван Иванов", email="ivan@example.com"),
    User(id=2, name="Мария Петрова", email="maria@example.com"),
]

# Получить всех пользователей
@app.get("/api/v1/users", response_model=List[User])
def get_users():
    return users_db

# Получить пользователя по ID
@app.get("/api/v1/users/{user_id}", response_model=User)
def get_user(user_id: int):
    user = next((u for u in users_db if u.id == user_id), None)
    if not user:
        raise HTTPException(status_code=404, detail="Пользователь не найден")
    return user

# Создать пользователя
@app.post("/api/v1/users", response_model=User, status_code=201)
def create_user(user_data: UserCreate):
    new_user = User(
        id=len(users_db) + 1,
        name=user_data.name,
        email=user_data.email
    )
    users_db.append(new_user)
    return new_user</code></pre>

    <p>FastAPI автоматически генерирует интерактивную документацию по этому коду — доступна на <code>/docs</code>.</p>

    <h2>Документация API</h2>

    <p>Хорошая документация — обязательная часть API. Без неё разработчики не смогут интегрироваться.</p>

    <h3>OpenAPI / Swagger</h3>

    <p>Стандарт описания REST API в формате YAML или JSON. Большинство современных фреймворков генерируют OpenAPI-схему автоматически.</p>

    <p><strong>Swagger UI</strong> — интерактивная документация, которая позволяет отправлять запросы прямо из браузера. FastAPI генерирует её автоматически на <code>/docs</code>.</p>

    <h3>Что должна содержать документация</h3>

    <ul>
      <li>Описание каждого эндпоинта: что делает, какие параметры принимает</li>
      <li>Примеры запросов и ответов</li>
      <li>Описание всех полей с типами и ограничениями</li>
      <li>Коды ошибок и их значения</li>
      <li>Руководство по аутентификации</li>
      <li>Примеры интеграции на популярных языках</li>
    </ul>

    <h3>Инструменты документирования</h3>

    <ul>
      <li><strong>Swagger / OpenAPI</strong> — стандарт для REST API. Автогенерация через FastAPI, Spring, NestJS.</li>
      <li><strong>Postman</strong> — инструмент для тестирования и документирования API. Коллекции Postman можно публиковать как документацию.</li>
      <li><strong>Redoc</strong> — красивый UI для отображения OpenAPI-схемы. Альтернатива Swagger UI.</li>
      <li><strong>Stoplight</strong> — платформа для дизайна и документирования API.</li>
    </ul>

    <h2>Тестирование API</h2>

    <h3>Ручное тестирование</h3>

    <p><strong>Postman</strong> — инструмент №1 для тестирования API. Сохраняйте запросы в коллекции, настраивайте окружения (dev/staging/prod), пишите тесты прямо в интерфейсе.</p>

    <p><strong>Insomnia</strong> — альтернатива Postman, часто удобнее для GraphQL.</p>

    <p><strong>curl</strong> — утилита командной строки для HTTP-запросов:</p>

    <pre><code class="language-bash"># GET-запрос
curl https://api.example.com/api/v1/users

# POST-запрос с JSON-телом
curl -X POST https://api.example.com/api/v1/users \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer TOKEN" \
  -d '{"name": "Иван", "email": "ivan@example.com"}'</code></pre>

    <h3>Автоматическое тестирование</h3>

    <p>Автотесты API проверяют, что эндпоинты возвращают правильные данные при правильных и неправильных входных данных.</p>

    <pre><code class="language-python"># Пример теста на pytest + httpx
import pytest
from httpx import AsyncClient

@pytest.mark.asyncio
async def test_get_user():
    async with AsyncClient(app=app, base_url="http://test") as client:
        response = await client.get("/api/v1/users/1")

    assert response.status_code == 200
    data = response.json()
    assert data["id"] == 1
    assert "email" in data

@pytest.mark.asyncio
async def test_get_nonexistent_user():
    async with AsyncClient(app=app, base_url="http://test") as client:
        response = await client.get("/api/v1/users/9999")

    assert response.status_code == 404</code></pre>

    <h2>Безопасность API</h2>

    <ul>
      <li><strong>Rate Limiting</strong> — ограничение числа запросов от одного клиента. Защищает от DDoS и брутфорса. Например: не более 100 запросов в минуту на IP.</li>
      <li><strong>Валидация входных данных</strong> — никогда не доверяйте тому, что присылает клиент. Проверяйте типы, длины, форматы, допустимые значения.</li>
      <li><strong>HTTPS</strong> — всегда. HTTP для API — недопустимо в продакшне.</li>
      <li><strong>CORS</strong> — настройте список разрешённых источников. Wildcard <code>*</code> допустим только для публичных API без аутентификации.</li>
      <li><strong>Логирование</strong> — записывайте все запросы (без чувствительных данных) для аудита и отладки.</li>
    </ul>

    <div class="cta-block">
      <p>Нужна помощь с проектированием API?</p>
      <a href="https://t.me/artemselifanov" target="_blank" class="cta-button">
        Написать в Telegram
        <span>→</span>
      </a>
    </div>

    <h2>Итог</h2>

    <p>API — основа современной разработки. REST остаётся стандартом для большинства проектов, GraphQL — для сложных данных с множеством клиентов, gRPC — для высокопроизводительных межсервисных взаимодействий.</p>

    <p>Хорошее API: предсказуемое, задокументированное, версионированное, безопасное и быстрое. Инвестиция в качество API окупается каждый раз, когда разработчик интегрируется с ним без вопросов.</p>

    <h2>Источники</h2>

    <ul>
      <li><a href="https://swagger.io/specification/" target="_blank" rel="noopener noreferrer">OpenAPI Specification</a></li>
      <li><a href="https://fastapi.tiangolo.com" target="_blank" rel="noopener noreferrer">FastAPI — документация</a></li>
      <li><a href="https://graphql.org" target="_blank" rel="noopener noreferrer">GraphQL — официальный сайт</a></li>
      <li><a href="https://learning.postman.com" target="_blank" rel="noopener noreferrer">Postman — документация</a></li>
      <li><a href="https://owasp.org/www-project-api-security/" target="_blank" rel="noopener noreferrer">OWASP API Security Top 10</a></li>
    </ul>

    <div class="article-nav">
      <p><strong>Читать далее:</strong> <a href="/blog/ii-v-it">Искусственный интеллект в IT: как ИИ меняет разработку программного обеспечения →</a></p>
      <p><strong>Назад:</strong> <a href="/blog/fullstack-razrabotka">← Fullstack-разработка: кто такой fullstack-разработчик и стоит ли им становиться</a></p>
    </div>
  `
}
