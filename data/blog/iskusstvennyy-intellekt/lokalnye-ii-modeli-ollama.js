export default {
  slug: 'lokalnye-ii-modeli-ollama',
  title: 'Локальные ИИ-модели: как запустить Ollama на своём компьютере',
  description:
    'Полное руководство по Ollama — инструменту для запуска локальных ИИ-моделей. Установка, настройка, лучшие модели, интеграция с Open WebUI. Запустите DeepSeek, Llama и Mistral без интернета и без подписок.',
  category: 'Искусственный интеллект',
  cluster: 'iskusstvennyy-intellekt',
  date: '2026-04-23',
  image: null,
  h1: 'Локальные ИИ-модели — полное руководство по Ollama',
  keywords: 'ollama, локальные ии модели, локальный ии, запустить ии локально, ollama установка, deepseek локально, llama локально, ии без интернета, open webui, локальный чат бот, бесплатный ии, нейросеть локально',
  content: `
    <p>Представьте ChatGPT, который работает полностью на вашем компьютере: без интернета, без подписок, без передачи данных на чужие серверы. Именно это даёт Ollama — инструмент, который сделал запуск локальных языковых моделей настолько простым, что с ним справляется любой, кто умеет пользоваться терминалом.</p>
    
    <p>В этом руководстве — всё, что нужно знать: от установки до тонкой настройки моделей.</p>
    
    <h2>Что такое Ollama и зачем запускать ИИ локально</h2>
    
    <p><strong>Ollama</strong> — это инструмент с открытым исходным кодом, который позволяет скачивать, управлять и запускать большие языковые модели (LLM) прямо на вашем компьютере. По сути, это пакетный менеджер для ИИ-моделей — примерно как <code>apt</code> для пакетов в Ubuntu или <code>brew</code> для macOS.</p>
    
    <p>Одна команда в терминале — и у вас работает DeepSeek, Llama, Mistral или десятки других моделей.</p>
    
    <h3>Почему локальный ИИ, а не облачный?</h3>
    
    <p>Есть несколько весомых причин запускать модели локально, а не через ChatGPT или Claude.</p>
    
    <p><strong>Конфиденциальность.</strong> Всё, что вы пишете в облачный ИИ, уходит на серверы компании. Условия использования OpenAI, Anthropic и Google позволяют им использовать данные для улучшения моделей (если не отключить эту опцию). Для корпоративных документов, медицинских данных, юридических материалов или просто личной переписки — это неприемлемо. Локальная модель не передаёт ничего никуда.</p>
    
    <p><strong>Независимость.</strong> Облачные сервисы могут уйти с рынка, изменить ценообразование, ввести цензуру, заблокировать аккаунт. Локальная модель лежит у вас на диске и работает вне зависимости от решений компаний.</p>
    
    <p><strong>Стоимость.</strong> ChatGPT Plus — $20 в месяц. API GPT-4o — от $2.50 за миллион токенов. При активном использовании счета за API могут составлять сотни долларов. Ollama — бесплатно навсегда. Вы платите только железом и электричеством.</p>
    
    <p><strong>Скорость (при хорошем железе).</strong> Мощная локальная GPU генерирует токены быстрее, чем облачный API под нагрузкой. Никаких задержек сети, никакой очереди запросов.</p>
    
    <p><strong>Кастомизация.</strong> Хотите дообучить модель на собственных данных? Поменять системный промпт навсегда? Встроить ИИ в своё приложение без лимитов на запросы? Локальная модель даёт полный контроль.</p>
    
    <p><strong>Работа офлайн.</strong> В самолёте, на даче, в стране с нестабильным интернетом — локальный ИИ работает всегда.</p>
    
    <h2>Системные требования</h2>
    
    <p>Прежде чем устанавливать Ollama, честно оцените своё железо. От этого зависит, какие модели вы сможете запускать.</p>
    
    <h3>Оперативная память (RAM) — главный параметр</h3>
    
    <p>Языковые модели загружаются целиком в память. Размер модели в RAM примерно соответствует размеру файла модели на диске (в формате GGUF с квантизацией).</p>
    
    <div class="table-wrapper"><table><thead><tr><th>Доступная RAM</th><th>Что можно запустить</th></tr></thead><tbody><tr><td>8 ГБ</td><td>Модели до 7B параметров (7B, 3B, 1B)</td></tr><tr><td>16 ГБ</td><td>Модели до 13–14B параметров</td></tr><tr><td>32 ГБ</td><td>Модели до 30–34B параметров</td></tr><tr><td>64 ГБ</td><td>Модели до 70B параметров</td></tr><tr><td>128+ ГБ</td><td>Модели 100B+ (Llama 3.1 405B и подобные)</td></tr></tbody></table></div>
    
    <p>Цифры приблизительные и зависят от квантизации. Модель 7B в формате Q4_K_M занимает около 4.1 ГБ, в Q8_0 — около 7.7 ГБ.</p>
    
    <h3>GPU — для скорости</h3>
    
    <p>Без GPU модель работает на CPU — медленно (2–5 токенов в секунду для 7B на обычном ноутбуке). С GPU — в 10–50 раз быстрее.</p>
    
    <p><strong>NVIDIA GPU</strong> — лучший выбор. Ollama использует CUDA, поддерживается любая карта начиная с GTX 10xx серии. Для комфортной работы нужно минимум 8 ГБ VRAM под 7B-модели.</p>
    
    <p><strong>AMD GPU</strong> — поддерживается через ROCm на Linux. Менее стабильно, чем NVIDIA, но работает.</p>
    
    <p><strong>Apple Silicon (M1/M2/M3/M4)</strong> — отличный выбор. Унифицированная память позволяет эффективно использовать большие модели. M2 Pro с 32 ГБ памяти уверенно тянет 34B-модели.</p>
    
    <p><strong>Встроенная графика (Intel/AMD iGPU)</strong> — практически не даёт ускорения. Работаете на CPU.</p>
    
    <h3>Место на диске</h3>
    
    <p>Модели занимают место:</p>
    <ul>
      <li>3B модель — около 2 ГБ</li>
      <li>7B модель — 4–8 ГБ</li>
      <li>13B модель — 8–16 ГБ</li>
      <li>34B модель — 20–40 ГБ</li>
      <li>70B модель — 40–80 ГБ</li>
    </ul>
    
    <p>Рекомендую держать под модели отдельный SSD с запасом минимум 50 ГБ.</p>
    
    <h2>Установка Ollama</h2>
    
    <p>Ollama поддерживает macOS, Linux и Windows. Установка везде занимает меньше минуты.</p>
    
    <h3>macOS</h3>
    
    <p>Скачайте установщик с официального сайта <a href="https://ollama.com" target="_blank" rel="noopener noreferrer">ollama.com</a> и запустите <code>.dmg</code>, или через Homebrew:</p>
    
    <pre><code class="language-bash">brew install ollama</code></pre>
    
    <p>После установки Ollama появится в статус-баре как фоновый сервис. Он запускается автоматически при старте системы.</p>
    
    <h3>Linux</h3>
    
    <p>Официальный скрипт установки:</p>
    
    <pre><code class="language-bash">curl -fsSL https://ollama.com/install.sh | sh</code></pre>
    
    <p>Скрипт автоматически определяет вашу систему, устанавливает нужные зависимости и настраивает systemd-сервис. После установки Ollama работает как демон и доступен по адресу <code>http://localhost:11434</code>.</p>
    
    <p>Проверьте статус сервиса:</p>
    
    <pre><code class="language-bash">sudo systemctl status ollama</code></pre>
    
    <p>Если нужно запустить вручную:</p>
    
    <pre><code class="language-bash">sudo systemctl start ollama</code></pre>
    
    <h3>Windows</h3>
    
    <p>Скачайте установщик <code>OllamaSetup.exe</code> с <a href="https://ollama.com/download/windows" target="_blank" rel="noopener noreferrer">ollama.com</a> и запустите. Ollama установится как системный сервис и будет доступен в трее.</p>
    
    <p>Альтернатива для тех, кто использует WSL2 (Windows Subsystem for Linux):</p>
    
    <pre><code class="language-bash"># В WSL2 Ubuntu
    curl -fsSL https://ollama.com/install.sh | sh</code></pre>
    
    <p>При наличии NVIDIA GPU убедитесь, что установлены актуальные драйверы и CUDA toolkit.</p>
    
    <h3>Проверка установки</h3>
    
    <p>После установки откройте терминал и выполните:</p>
    
    <pre><code class="language-bash">ollama --version</code></pre>
    
    <p>Должна появиться версия, например: <code>ollama version is 0.6.x</code></p>
    
    <h2>Первый запуск — скачиваем и запускаем модель</h2>
    
    <p>Самое интересное. Одна команда скачает модель и сразу запустит интерактивный чат:</p>
    
    <pre><code class="language-bash">ollama run llama3.2</code></pre>
    
    <p>Ollama скачает модель Llama 3.2 (3B, около 2 ГБ) и откроет чат прямо в терминале:</p>
    
    <pre><code>pulling manifest
    pulling dde5aa3fc5ff... 100% ▕████████████████▏ 2.0 GB
    pulling 966de95ca8a6... 100% ▕████████████████▏ 1.4 KB
    verifying sha256 digest
    writing manifest
    success
    &gt;&gt;&gt; Send a message (/? for help)</code></pre>
    
    <p>Теперь вы можете общаться с моделью как с обычным чат-ботом. Для выхода — <code>/bye</code> или Ctrl+D.</p>
    
    <h3>Запуск DeepSeek локально</h3>
    
    <p>DeepSeek R1 доступен в нескольких размерах. Начните с 7B:</p>
    
    <pre><code class="language-bash"># DeepSeek R1 7B — рекомендуется для 8+ ГБ RAM
    ollama run deepseek-r1:7b
    
    # DeepSeek R1 14B — для 16+ ГБ RAM
    ollama run deepseek-r1:14b
    
    # DeepSeek R1 32B — для 32+ ГБ RAM
    ollama run deepseek-r1:32b
    
    # DeepSeek R1 70B — для 64+ ГБ RAM
    ollama run deepseek-r1:70b</code></pre>
    
    <p>Модель скачается один раз и сохранится локально. Последующие запуски — мгновенные.</p>
    
    <p>DeepSeek R1 покажет процесс «размышления» перед ответом — это нормально и является фичей модели, а не багом.</p>
    
    <h3>Раздельные команды — скачать и запустить</h3>
    
    <p>Если хотите сначала скачать модель, а запустить позже:</p>
    
    <pre><code class="language-bash"># Только скачать (удобно для медленного интернета — можно скачать ночью)
    ollama pull deepseek-r1:7b
    
    # Запустить уже скачанную модель
    ollama run deepseek-r1:7b</code></pre>
    
    <h2>Какие модели доступны в Ollama</h2>
    
    <p>На момент написания статьи в библиотеке Ollama доступно более 100 моделей. Вот самые важные категории.</p>
    
    <h3>Флагманские универсальные модели</h3>
    
    <p><strong>Llama 3.3 (Meta)</strong> Актуальное поколение открытых моделей от Meta. Llama 3.3 70B по качеству вплотную приближается к GPT-4 при значительно меньших требованиях к ресурсам, чем предыдущие 70B-модели.</p>
    
    <pre><code class="language-bash">ollama run llama3.3        # 70B — для мощных машин
    ollama run llama3.2        # 3B — для слабого железа
    ollama run llama3.2:1b     # 1B — работает даже на Raspberry Pi</code></pre>
    
    <p><strong>Mistral и Mixtral</strong> Французские модели с отличным соотношением качество/размер. Mistral 7B — один из лучших вариантов для машин с 8 ГБ RAM.</p>
    
    <pre><code class="language-bash">ollama run mistral          # 7B
    ollama run mixtral          # 8x7B MoE — качество уровня 40B при затратах 7B
    ollama run mistral-large    # 123B — для серьёзного железа</code></pre>
    
    <p><strong>Gemma 3 (Google)</strong> Компактные, но мощные модели от Google. Gemma 3 4B — впечатляющее качество для своего размера, хорошо работает на ноутбуках.</p>
    
    <pre><code class="language-bash">ollama run gemma3           # 4B по умолчанию
    ollama run gemma3:12b       # 12B — отличный баланс
    ollama run gemma3:27b       # 27B — почти флагманское качество</code></pre>
    
    <p><strong>Phi-4 (Microsoft)</strong> Серия моделей от Microsoft с упором на рассуждение при компактных размерах. Phi-4-mini работает даже на слабом железе.</p>
    
    <pre><code class="language-bash">ollama run phi4             # 14B
    ollama run phi4-mini        # 3.8B — быстро, хорошее качество</code></pre>
    
    <p><strong>Qwen3 (Alibaba)</strong> Китайские модели с отличной поддержкой русского и других не-английских языков. Qwen 2.5 72B конкурирует с лучшими западными моделями.</p>
    
    <pre><code class="language-bash">ollama run qwen3            # 8B по умолчанию
    ollama run qwen3:14b
    ollama run qwen3:32b
    ollama run qwen2.5:72b      # Флагман — для мощных машин</code></pre>
    
    <h3>Специализированные модели для кода</h3>
    
    <p><strong>Qwen2.5-Coder</strong> Лучший вариант для программирования среди доступных open-source моделей. Поддерживает 80+ языков программирования.</p>
    
    <pre><code class="language-bash">ollama run qwen2.5-coder:7b   # Быстрый, для повседневного кода
    ollama run qwen2.5-coder:32b  # Флагманский, для сложных задач</code></pre>
    
    <p><strong>DeepSeek-Coder-V2</strong> Специализированная кодовая модель от DeepSeek с архитектурой MoE.</p>
    
    <pre><code class="language-bash">ollama run deepseek-coder-v2</code></pre>
    
    <p><strong>CodeLlama</strong> Классика от Meta для работы с кодом, хорошо работает с большинством популярных языков.</p>
    
    <pre><code class="language-bash">ollama run codellama:7b
    ollama run codellama:34b</code></pre>
    
    <h3>Модели с поддержкой изображений (мультимодальные)</h3>
    
    <p>Ряд моделей умеет анализировать изображения — это называется vision capability.</p>
    
    <pre><code class="language-bash"># Llava — классическая мультимодальная модель
    ollama run llava:7b
    ollama run llava:34b
    
    # Llama 3.2 Vision
    ollama run llama3.2-vision
    
    # Запуск с передачей изображения
    ollama run llava "Что изображено на этой картинке?" --image /path/to/image.jpg</code></pre>
    
    <h3>Модели для работы с русским языком</h3>
    
    <p>Русский язык большинство моделей понимает, но некоторые справляются лучше:</p>
    
    <ul>
      <li><strong>Qwen2.5 / Qwen3</strong> — отличный русский, обучены на многоязычных данных</li>
      <li><strong>Llama 3.x</strong> — хороший русский на крупных версиях (70B)</li>
      <li><strong>Mistral</strong> — приемлемый русский</li>
      <li><strong>DeepSeek</strong> — хороший русский, особенно на версиях 14B+</li>
    </ul>
    
    <p>Специализированных русскоязычных моделей в Ollama пока немного, но Qwen2.5 72B — достойная замена облачным сервисам для русскоязычных задач.</p>
    
    <h2>Как выбрать модель под своё железо</h2>
    
    <p>Практическое руководство без лишней теории.</p>
    
    <h3>MacBook / iMac на Apple Silicon</h3>
    
    <p>Apple Silicon — лучшее железо для локального ИИ среди ноутбуков. Унифицированная память используется как для CPU, так и для GPU, что позволяет эффективно запускать большие модели.</p>
    
    <pre><code>M1 / M2 8 ГБ    → llama3.2:3b, phi4-mini, gemma3:4b
    M1 / M2 16 ГБ   → mistral:7b, llama3.2:3b, deepseek-r1:7b, gemma3:12b
    M2 Pro 32 ГБ    → deepseek-r1:14b, gemma3:27b, qwen3:14b
    M3 Max 64 ГБ    → deepseek-r1:32b, qwen2.5:72b, llama3.3:70b (медленно)
    M3 Ultra 192 ГБ → deepseek-r1:70b, llama3.3:70b — полный комфорт</code></pre>
    
    <h3>Windows / Linux с NVIDIA GPU</h3>
    
    <pre><code>RTX 3060 12 ГБ VRAM  → deepseek-r1:7b, mistral:7b (в VRAM)
    RTX 3090 24 ГБ VRAM  → deepseek-r1:14b, gemma3:27b (в VRAM)
    RTX 4090 24 ГБ VRAM  → то же, но быстрее
    2x RTX 3090 48 ГБ    → deepseek-r1:32b (в VRAM)
    A100 80 ГБ           → deepseek-r1:70b (в VRAM)</code></pre>
    
    <p>Если модель не помещается в VRAM, Ollama автоматически выгружает часть слоёв в RAM — это работает, но медленнее.</p>
    
    <h3>Бюджетный ноутбук (8–16 ГБ RAM, нет дискретной GPU)</h3>
    
    <p>На CPU работает медленно, но работает. Ожидайте 2–8 токенов в секунду.</p>
    
    <pre><code class="language-bash"># Самые быстрые варианты на CPU
    ollama run llama3.2:1b    # Очень быстро, базовое качество
    ollama run phi4-mini       # Быстро, хорошее качество
    ollama run gemma3:4b       # Хороший баланс</code></pre>
    
    <h2>Open WebUI — красивый интерфейс для локального ИИ</h2>
    
    <p>Терминальный интерфейс Ollama удобен для разработчиков, но не для повседневного использования. <strong>Open WebUI</strong> — это веб-интерфейс, который выглядит как ChatGPT, но работает поверх вашего локального Ollama.</p>
    
    <h3>Установка через Docker</h3>
    
    <p>Самый простой способ — Docker:</p>
    
    <pre><code class="language-bash">docker run -d \
      -p 3000:8080 \
      --add-host=host.docker.internal:host-gateway \
      -v open-webui:/app/backend/data \
      --name open-webui \
      --restart always \
      ghcr.io/open-webui/open-webui:main</code></pre>
    
    <p>После запуска откройте браузер: <code>http://localhost:3000</code></p>
    
    <p>При первом входе создайте аккаунт администратора. Open WebUI автоматически обнаружит запущенный Ollama и покажет все скачанные модели.</p>
    
    <h3>Установка через pip</h3>
    
    <p>Если Docker не установлен:</p>
    
    <pre><code class="language-bash">pip install open-webui
    open-webui serve</code></pre>
    
    <h3>Что умеет Open WebUI</h3>
    
    <ul>
      <li>Переключение между моделями в одном чате</li>
      <li>История диалогов с поиском</li>
      <li>Загрузка файлов (PDF, Word, таблицы) для анализа</li>
      <li>Системные промпты и персонажи</li>
      <li>Голосовой ввод и озвучка ответов</li>
      <li>RAG (Retrieval-Augmented Generation) — поиск по своей базе знаний</li>
      <li>Командная работа — несколько пользователей на одном сервере</li>
      <li>Интеграция с внешними API (можно добавить Claude или GPT для сравнения)</li>
    </ul>
    
    <p>По функциональности Open WebUI уже превосходит интерфейс ChatGPT в ряде аспектов — и всё это бесплатно на вашем железе.</p>
    
    <h2>Ollama API — интеграция в свои приложения</h2>
    
    <p>Ollama поднимает REST API на <code>http://localhost:11434</code>. API совместим с форматом OpenAI, что позволяет подключать любые инструменты, написанные под OpenAI, без изменения кода — достаточно поменять базовый URL.</p>
    
    <h3>Простой запрос через curl</h3>
    
    <pre><code class="language-bash">curl http://localhost:11434/api/chat \
      -H "Content-Type: application/json" \
      -d '{
        "model": "deepseek-r1:7b",
        "messages": [
          {"role": "user", "content": "Объясни, что такое рекурсия, простыми словами"}
        ]
      }'</code></pre>
    
    <h3>Python — через официальную библиотеку ollama</h3>
    
    <pre><code class="language-bash">pip install ollama</code></pre>
    
    <pre><code class="language-python">import ollama
    
    # Простой запрос
    response = ollama.chat(
        model='deepseek-r1:7b',
        messages=[{
            'role': 'user',
            'content': 'Напиши функцию на Python для сортировки пузырьком'
        }]
    )
    print(response['message']['content'])
    
    # Стриминг ответа (токен за токеном)
    stream = ollama.chat(
        model='llama3.2',
        messages=[{'role': 'user', 'content': 'Расскажи историю про робота'}],
        stream=True
    )
    
    for chunk in stream:
        print(chunk['message']['content'], end='', flush=True)</code></pre>
    
    <h3>Python — через OpenAI SDK (если уже используете его)</h3>
    
    <pre><code class="language-python">from openai import OpenAI
    
    # Меняем только base_url — всё остальное как с ChatGPT
    client = OpenAI(
        base_url='http://localhost:11434/v1',
        api_key='ollama'  # Любая строка — API-ключ не нужен
    )
    
    response = client.chat.completions.create(
        model='deepseek-r1:7b',
        messages=[
            {'role': 'system', 'content': 'Ты полезный ассистент.'},
            {'role': 'user', 'content': 'Что такое контекстное окно в LLM?'}
        ]
    )
    
    print(response.choices[0].message.content)</code></pre>
    
    <h3>JavaScript / Node.js</h3>
    
    <pre><code class="language-javascript">import ollama from 'ollama'
    
    // Стриминговый ответ
    const stream = await ollama.chat({
      model: 'llama3.2',
      messages: [{ role: 'user', content: 'Привет! Как дела?' }],
      stream: true,
    })
    
    for await (const part of stream) {
      process.stdout.write(part.message.content)
    }</code></pre>
    
    <h3>Генерация эмбеддингов</h3>
    
    <p>Ollama умеет генерировать векторные эмбеддинги — это нужно для семантического поиска, RAG и классификации текстов:</p>
    
    <pre><code class="language-python">import ollama
    
    embeddings = ollama.embeddings(
        model='nomic-embed-text',
        prompt='Ollama — лучший инструмент для локального ИИ'
    )
    
    print(embeddings['embedding'])  # Вектор из 768 чисел</code></pre>
    
    <p>Рекомендуемые модели для эмбеддингов: <code>nomic-embed-text</code>, <code>mxbai-embed-large</code>, <code>all-minilm</code>.</p>
    
    <h2>Полезные команды Ollama</h2>
    
    <p>Шпаргалка по основным командам.</p>
    
    <pre><code class="language-bash"># Список скачанных моделей
    ollama list
    
    # Информация о конкретной модели
    ollama show deepseek-r1:7b
    
    # Скачать модель (без запуска)
    ollama pull mistral
    
    # Запустить модель в интерактивном режиме
    ollama run llama3.2
    
    # Запустить с системным промптом
    ollama run llama3.2 --system "Ты опытный Python-разработчик. Отвечай кратко и по делу."
    
    # Запустить мультимодальную модель с изображением
    ollama run llava "Что на картинке?" --image screenshot.png
    
    # Удалить модель (освободить место на диске)
    ollama rm mistral:7b
    
    # Скопировать модель под новым именем
    ollama cp llama3.2 my-custom-llama
    
    # Посмотреть запущенные модели (что сейчас в памяти)
    ollama ps
    
    # Отправить запрос напрямую (без интерактивного режима)
    echo "Что такое Docker?" | ollama run llama3.2
    
    # Запустить сервер вручную (если не работает как сервис)
    ollama serve</code></pre>
    
    <h3>Параметры при запуске</h3>
    
    <pre><code class="language-bash"># Изменить количество используемых потоков CPU
    OLLAMA_NUM_PARALLEL=4 ollama serve
    
    # Указать, сколько GPU использовать
    OLLAMA_NUM_GPU=1 ollama run deepseek-r1:7b
    
    # Задать размер контекстного окна
    ollama run llama3.2 --num-ctx 8192
    
    # Выгрузить модель из памяти через N секунд бездействия (по умолчанию 5 мин)
    OLLAMA_KEEP_ALIVE=10m ollama serve
    
    # Хранить модели в другом месте
    OLLAMA_MODELS=/data/ollama/models ollama serve</code></pre>
    
    <h2>Тонкая настройка — Modelfile</h2>
    
    <p>Modelfile — это конфигурационный файл, который позволяет создать собственную версию модели с нужными настройками: системным промптом, температурой, размером контекста и другими параметрами.</p>
    
    <h3>Создание кастомной модели</h3>
    
    <p>Создайте файл <code>Modelfile</code>:</p>
    
    <pre><code class="language-dockerfile"># Базовая модель
    FROM deepseek-r1:7b
    
    # Системный промпт — задаёт роль и поведение
    SYSTEM """
    Ты опытный технический редактор и SEO-специалист.
    Пишешь на русском языке. Стиль — профессиональный, но доступный.
    Всегда предлагаешь конкретные улучшения, а не общие советы.
    При анализе текста указываешь конкретные строки и примеры.
    """
    
    # Температура (0.0 = детерминированно, 1.0 = творчески)
    PARAMETER temperature 0.7
    
    # Размер контекстного окна (в токенах)
    PARAMETER num_ctx 16384
    
    # Top-p семплирование
    PARAMETER top_p 0.9
    
    # Штраф за повторения
    PARAMETER repeat_penalty 1.1</code></pre>
    
    <p>Создайте модель из Modelfile:</p>
    
    <pre><code class="language-bash">ollama create seo-assistant -f Modelfile</code></pre>
    
    <p>Запустите:</p>
    
    <pre><code class="language-bash">ollama run seo-assistant</code></pre>
    
    <p>Теперь у вас есть персонализированный ассистент, который при каждом запуске уже «знает» свою роль — не нужно каждый раз объяснять контекст.</p>
    
    <h3>Пример Modelfile для кодинга</h3>
    
    <pre><code class="language-dockerfile">FROM qwen2.5-coder:7b
    
    SYSTEM """
    Ты senior Python-разработчик с 10-летним опытом.
    Пишешь чистый, читаемый код согласно PEP 8.
    Всегда добавляешь docstrings и type hints.
    Объясняешь нетривиальные решения в комментариях.
    Предупреждаешь об edge cases и потенциальных ошибках.
    """
    
    PARAMETER temperature 0.2
    PARAMETER num_ctx 32768</code></pre>
    
    <h3>Шаблон для мультиходового диалога</h3>
    
    <p>Если нужно задать конкретный формат разговора:</p>
    
    <pre><code class="language-dockerfile">FROM llama3.2
    
    TEMPLATE """{{ if .System }}&lt;|start_header_id|&gt;system&lt;|end_header_id|&gt;
    
    {{ .System }}&lt;|eot_id|&gt;{{ end }}{{ if .Prompt }}&lt;|start_header_id|&gt;user&lt;|end_header_id|&gt;
    
    {{ .Prompt }}&lt;|eot_id|&gt;{{ end }}&lt;|start_header_id|&gt;assistant&lt;|end_header_id|&gt;
    
    {{ .Response }}&lt;|eot_id|&gt;"""
    
    PARAMETER stop "&lt;|start_header_id|&gt;"
    PARAMETER stop "&lt;|end_header_id|&gt;"
    PARAMETER stop "&lt;|eot_id|&gt;"</code></pre>
    
    <h2>Частые проблемы и их решения</h2>
    
    <h3>Модель работает очень медленно</h3>
    
    <p><strong>Причина:</strong> Модель не помещается в VRAM и работает на CPU или через системную RAM.</p>
    
    <p><strong>Решение:</strong> Проверьте, сколько памяти использует модель:</p>
    
    <pre><code class="language-bash">ollama ps</code></pre>
    
    <p>Колонка <code>SIZE</code> покажет объём занятой памяти. Если модель не входит в VRAM — переключитесь на меньшую версию или уменьшите квантизацию:</p>
    
    <pre><code class="language-bash"># Q4 вместо Q8 — в два раза меньше памяти, небольшая потеря качества
    ollama pull deepseek-r1:7b-q4_K_M</code></pre>
    
    <h3>Ollama не видит GPU</h3>
    
    <p><strong>На Linux с NVIDIA:</strong></p>
    
    <pre><code class="language-bash"># Проверить, видит ли система GPU
    nvidia-smi
    
    # Проверить, установлен ли CUDA
    nvcc --version
    
    # Переустановить ollama после обновления драйверов
    curl -fsSL https://ollama.com/install.sh | sh</code></pre>
    
    <p><strong>На Windows:</strong> Убедитесь, что установлены актуальные драйверы NVIDIA (не только GeForce Experience — именно studio или game ready drivers с сайта nvidia.com).</p>
    
    <h3>Ошибка "model not found"</h3>
    
    <pre><code class="language-bash"># Убедитесь, что модель скачана
    ollama list
    
    # Проверьте точное название тега
    ollama pull deepseek-r1:7b  # не "deepseek-r1" без тега</code></pre>
    
    <h3>Модель отвечает на английском, хотя спрашиваете по-русски</h3>
    
    <p>Добавьте в системный промпт явное указание:</p>
    
    <pre><code class="language-bash">ollama run llama3.2 --system "Всегда отвечай на русском языке, независимо от языка вопроса."</code></pre>
    
    <p>Или создайте Modelfile с этим системным промптом как описано выше.</p>
    
    <h3>Недостаточно места на диске</h3>
    
    <p>По умолчанию Ollama хранит модели в:</p>
    <ul>
      <li>macOS/Linux: <code>~/.ollama/models</code></li>
      <li>Windows: <code>C:\Users\<user>\.ollama\models</code></li>
    </ul>
    
    <p>Чтобы перенести на другой диск:</p>
    
    <pre><code class="language-bash"># Linux/macOS — задать через переменную окружения
    export OLLAMA_MODELS=/path/to/big/disk/ollama-models
    ollama serve
    
    # Или добавить в ~/.bashrc / ~/.zshrc для постоянного эффекта
    echo 'export OLLAMA_MODELS=/path/to/big/disk/ollama-models' &gt;&gt; ~/.zshrc</code></pre>
    
    <h3>Ollama не запускается на порту 11434</h3>
    
    <pre><code class="language-bash"># Проверить, что занимает порт
    lsof -i :11434
    
    # Задать другой порт
    OLLAMA_HOST=0.0.0.0:11435 ollama serve</code></pre>
    
    <h3>Высокое потребление RAM в простое</h3>
    
    <p>По умолчанию Ollama держит модель в памяти 5 минут после последнего запроса. Чтобы выгружать немедленно:</p>
    
    <pre><code class="language-bash">OLLAMA_KEEP_ALIVE=0 ollama serve</code></pre>
    
    <p>Или выгрузить конкретную модель вручную:</p>
    
    <pre><code class="language-bash">curl -X POST http://localhost:11434/api/generate \
      -d '{"model": "deepseek-r1:7b", "keep_alive": 0}'</code></pre>
    
    <h2>Вывод</h2>
    
    <p>Ollama превратила запуск локальных ИИ-моделей из задачи для системных администраторов в простую операцию для любого пользователя. Одна команда — и у вас работает DeepSeek, Llama или Mistral без подписок, без передачи данных и без зависимости от облачных сервисов.</p>
    
    <p>Если вы только начинаете — установите Ollama, запустите <code>ollama run deepseek-r1:7b</code> и поставьте Open WebUI для удобного интерфейса. Этого достаточно, чтобы получить полноценный локальный аналог ChatGPT.</p>
    
    <p>Если нужна интеграция в приложение — API Ollama совместим с OpenAI SDK, что делает переход практически бесшовным.</p>
    
    <p>Локальный ИИ — это не компромисс между качеством и конфиденциальностью. Современные open-source модели вплотную подошли к уровню закрытых флагманов, а в ряде задач — обошли их. Разница всё больше не в качестве, а в удобстве экосистемы.</p>
    
    <h2>Источники</h2>
    
    <ol>
      <li><a href="https://ollama.com" target="_blank" rel="noopener noreferrer">Ollama официальный сайт и документация</a> — установка, команды, API</li>
      <li><a href="https://github.com/ollama/ollama" target="_blank" rel="noopener noreferrer">Ollama GitHub репозиторий</a> — открытый исходный код</li>
      <li><a href="https://github.com/open-webui/open-webui" target="_blank" rel="noopener noreferrer">Open WebUI GitHub</a> — установка и документация интерфейса</li>
      <li><a href="https://ollama.com/library" target="_blank" rel="noopener noreferrer">Ollama библиотека моделей</a> — полный список доступных моделей</li>
      <li><a href="https://arxiv.org/abs/2501.12948" target="_blank" rel="noopener noreferrer">DeepSeek технический отчёт R1</a> — архитектура и возможности</li>
      <li><a href="https://llama.meta.com" target="_blank" rel="noopener noreferrer">Meta Llama 3 документация</a> — официальная документация Llama 3.x</li>
      <li><a href="https://docs.mistral.ai" target="_blank" rel="noopener noreferrer">Mistral AI документация</a> — модели Mistral и Mixtral</li>
      <li><a href="https://huggingface.co/docs/hub/gguf" target="_blank" rel="noopener noreferrer">Hugging Face GGUF форматы</a> — форматы квантизации моделей</li>
      <li><a href="https://lmarena.ai" target="_blank" rel="noopener noreferrer">LMSYS Chatbot Arena</a> — актуальные бенчмарки открытых моделей</li>
      <li><a href="https://github.com/ollama/ollama-python" target="_blank" rel="noopener noreferrer">Ollama Python библиотека</a> — SDK для Python</li>
    </ol>
    
    <p><em>Статья актуальна на апрель 2026 года. Версии моделей и команды могут меняться — сверяйтесь с официальной документацией Ollama.</em></p>
  `
}
