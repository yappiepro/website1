<template>
  <div class="demo-page overflow-x-hidden">
    <!-- Навигация -->
    <nav class="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-2xl border-b border-gray-200">
      <div class="max-w-7xl mx-auto px-6 py-4 flex items-center">
        <!-- Левая зона: Логотип -->
        <a href="/study" class="text-xl font-semibold text-gray-900 flex items-center gap-2 shrink-0">
          <span class="font-bold text-gray-900 tracking-wider text-2xl">Фокус</span>
        </a>

        <!-- Центральная зона: Десктопное меню -->
        <div class="hidden md:flex items-center gap-8 flex-1 justify-center">
          <a href="/" class="text-sm text-gray-600 hover:text-gray-900 transition-all duration-300">Главная</a>
          <a href="#problems" class="text-sm text-gray-600 hover:text-gray-900 transition-all duration-300">Проблемы</a>
          <a href="#services" class="text-sm text-gray-600 hover:text-gray-900 transition-all duration-300">Услуги</a>
          <a href="#why-us" class="text-sm text-gray-600 hover:text-gray-900 transition-all duration-300">Почему мы</a>
          <a href="#portfolio" class="text-sm text-gray-600 hover:text-gray-900 transition-all duration-300">Кейсы</a>
          <a href="/blog" class="text-sm text-gray-600 hover:text-gray-900 transition-all duration-300">Блог</a>
          <a href="#faq" class="text-sm text-gray-600 hover:text-gray-900 transition-all duration-300">FAQ</a>
          <a href="https://t.me/artemselifanov" target="_blank" rel="noopener noreferrer" class="px-4 py-2 text-xs bg-gray-900 text-white hover:bg-gray-800 shadow-lg shadow-gray-900/20 hover:shadow-gray-900/30 transition-all rounded-md font-medium shrink-0">Связаться</a>
        </div>

        <!-- Правая зона: пустая для баланса -->
        <div class="hidden md:block w-[100px] shrink-0"></div>

        <!-- Кнопка бургер-меню для мобильных -->
        <button
          @click="isMobileMenuOpen = !isMobileMenuOpen"
          class="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors absolute right-4"
          aria-label="Открыть меню"
        >
          <Menu v-if="!isMobileMenuOpen" class="w-6 h-6" />
          <X v-else class="w-6 h-6" />
        </button>
      </div>
    </nav>

    <!-- Мобильное меню -->
    <BaseMobileMenu
      v-model="isMobileMenuOpen"
      :menu-items="mobileMenuItems"
      cta-link="https://t.me/artemselifanov"
      cta-text="Связаться"
      theme="light"
      :show-label="false"
      accent-color="violet"
    />

    <!-- Старый header скрыт
    <header class="demo-header" v-if="isUnlocked">
      <nav class="demo-header-inner">
        <a href="#problems" class="nav-link">Проблемы</a>
        <a href="#services" class="nav-link">Услуги</a>
        <a href="#why-us" class="nav-link">Почему мы</a>
        <a href="#portfolio" class="nav-link">Кейсы</a>
        <a href="/blog" class="nav-link">Блог</a>
        <a href="#faq" class="nav-link">FAQ</a>
        <a href="https://t.me/artemselifanov" target="_blank" rel="noopener noreferrer" class="nav-btn">Связаться</a>
      </nav>
    </header>
    -->

    <main>
      <!-- Статичный H1 для SEO (видим только поисковым ботам) -->
      <h1 class="sr-only">Фокус — Тест на позиционирование личного бренда | Узнайте, как правильно выстроить личный бренд</h1>
      
      <section class="hero-stage">
        <div class="typewriter-container">
          <svg class="typewriter-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.35-4.35"></path>
          </svg>
          <div class="typewriter-content">
            <div class="typing-line">
              <span class="typing-text">{{ currentText }}</span>
              <span class="typing-cursor" :class="{ frozen: isStopped }"></span>
            </div>
          </div>
          <button class="search-btn" @click="unlockPage">
            <span class="btn-text-desktop">НАЧАТЬ</span>
            <span class="btn-text-mobile">GO</span>
          </button>
        </div>
      </section>

      <section class="system-title-wrap">
        <div class="typing-system-title">
          <div class="typing-line-system">
            <span class="typing-text-system">{{ systemTitleText }}</span>
            <span class="typing-cursor-system" v-if="!systemTitleFinished"></span>
          </div>
        </div>
      </section>

      <!-- Блок с призывом -->
      <section class="cta-blog-wrap">
        <div class="cta-blog">
          <span class="cta-text">Давай </span>
          <span class="cta-text">делать </span>
          <span class="cta-blog-word">{{ blogWordText }}</span>
        </div>
      </section>

      <!-- Распаковка личности -->
      <section class="unpack-section">
        <div class="unpack-container">
          <h2 class="unpack-title">РАСПАКОВКА ЛИЧНОСТИ</h2>
          <p class="unpack-subtitle">Для распаковки личности нам потребуется сделать два шага</p>
          
          <div class="unpack-toggle-wrapper">
            <label class="unpack-toggle">
              <input type="checkbox" v-model="isUnpackExpanded" />
              <span class="toggle-slider"></span>
              <span class="toggle-text">{{ isUnpackExpanded ? 'Свернуть' : 'Развернуть' }}</span>
            </label>
          </div>

          <div class="unpack-steps" :class="{ 'expanded': isUnpackExpanded }">
            <!-- Шаг 1: Промпт -->
            <div class="unpack-step unpack-step-prompt">
              <div class="step-number">01</div>
              <div class="step-content">
                <h3 class="step-title">Бриф — Распаковка личности</h3>
                <div class="prompt-box" ref="promptContent">
                  <div class="brief-intro">
                    <p class="brief-intro-text">Этот бриф — основа для создания твоего экспертного образа в блоге. Чем честнее и конкретнее ты заполнишь каждый пункт, тем точнее и сильнее получится итоговый документ.</p>

                    <div class="brief-info-grid">
                      <div class="brief-info-item">
                        <div class="brief-info-icon">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="20" height="20">
                            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                          </svg>
                        </div>
                        <div class="brief-info-content">
                          <strong>Как заполнять</strong>
                          <p>Пиши так, как говоришь — без официоза. Первая мысль часто самая точная. Если пункт вызывает затруднение — напиши приблизительный ответ.</p>
                        </div>
                      </div>

                      <div class="brief-info-item">
                        <div class="brief-info-icon">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="20" height="20">
                            <line x1="12" y1="1" x2="12" y2="23"></line>
                            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                          </svg>
                        </div>
                        <div class="brief-info-content">
                          <strong>Что важно</strong>
                          <p>Конкретика бьёт общие слова. «Помог вырасти с 0 до 1200 за 3 месяца» работает в 10 раз лучше, чем «помогаю развивать блог».</p>
                        </div>
                      </div>

                      <div class="brief-info-item">
                        <div class="brief-info-icon">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="20" height="20">
                            <circle cx="12" cy="12" r="10"></circle>
                            <polyline points="12 6 12 12 16 14"></polyline>
                          </svg>
                        </div>
                        <div class="brief-info-content">
                          <strong>Сколько времени</strong>
                          <p>30–45 минут, если вдумчиво. Можно разбить на два подхода.</p>
                        </div>
                      </div>

                      <div class="brief-info-item">
                        <div class="brief-info-icon">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="20" height="20">
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                            <polyline points="22 4 12 14.01 9 11.01"></polyline>
                          </svg>
                        </div>
                        <div class="brief-info-content">
                          <strong>Что получишь</strong>
                          <p>Готовый документ с биографией, темами блога, стилем общения, контент-планом и рекомендациями по позиционированию.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p class="prompt-intro">Заполни все поля ниже — ответы автоматически подставятся в промпт для нейросети:</p>
                  
                  <p class="prompt-goal">Моя цель — создать в блоге чёткий, живой, доверительный образ, который:<br/>
                  – вызывает отклик у моей целевой аудитории (молодые аналитики, предприниматели, HR, тренеры),<br/>
                  – подчёркивает мой опыт и методологию,<br/>
                  – демонстрирует реальные результаты,<br/>
                  – мягко ведёт подписчиков к моим услугам (менторство, консультации, автоматизация).</p>
                  
                  <p class="prompt-task">Используй ответы на вопросы ниже, чтобы сформировать:</p>
                  <ul class="prompt-list">
                    <li>Краткую, но ёмкую «биографию эксперта» (до 3–4 предложений)</li>
                    <li>Список из 5–7 ключевых тем, которые я могу освещать в блоге, чтобы укреплять свой авторитет</li>
                    <li>Уникальную «точку опоры» — то, что отличает меня от других в моей нише</li>
                    <li>Рекомендации по тону и стилю общения в постах</li>
                  </ul>
                  
                  <div class="prompt-questions">
                    <!-- Индикатор прогресса -->
                    <div class="quiz-progress">
                      <div class="progress-bar">
                        <div class="progress-fill" :style="{ width: ((currentStep - 1) / 5 * 100) + '%' }"></div>
                      </div>
                      <div class="step-indicator">
                        <span v-for="step in 5" :key="step" class="step-dot" :class="{ active: currentStep >= step }">
                          {{ step }}
                        </span>
                      </div>
                    </div>

                    <!-- БЛОК 1 — ЧТО ТЫ ДЕЛАЕШЬ И КАК -->
                    <div class="question-block" v-show="currentStep === 1">
                      <div class="block-title">БЛОК 1 — ЧТО ТЫ ДЕЛАЕШЬ И КАК</div>
                      
                      <div class="question-item">
                        <strong>1.1 Уникальность подхода</strong>
                        <p class="question-hint">2–3 вещи, которые делают твою методику или подход особенными.</p>
                        <textarea v-model="answers.q2_1" class="question-input" placeholder="Твой ответ..." rows="3"></textarea>
                      </div>
                      
                      <div class="question-item">
                        <strong>1.2 Боли, которые ты закрываешь</strong>
                        <p class="question-hint">Перечисли 3–5 реальных проблем, с которыми к тебе приходят. Для каждой — как именно ты её решаешь.</p>
                        <textarea v-model="answers.q2_2" class="question-input" placeholder="→ Боль 1 → решение:&#10;→ Боль 2 → решение:&#10;→ Боль 3 → решение:" rows="5"></textarea>
                      </div>
                      
                      <div class="question-item">
                        <strong>1.3 Инструменты и фреймворки</strong>
                        <p class="question-hint">Какие методы, системы, принципы ты используешь чаще всего? Назови 3–7 с коротким пояснением.</p>
                        <textarea v-model="answers.q2_3" class="question-input" placeholder="Твой ответ..." rows="4"></textarea>
                      </div>
                      
                      <div class="question-item">
                        <strong>1.4 Чего ты НЕ делаешь</strong>
                        <p class="question-hint">Твои принципиальные «нет» — в работе, в контенте, в обещаниях клиентам.</p>
                        <textarea v-model="answers.q2_4" class="question-input" placeholder="Твой ответ..." rows="2"></textarea>
                      </div>
                    </div>

                    <!-- БЛОК 2 — КТО ТЫ -->
                    <div class="question-block" v-show="currentStep === 2">
                      <div class="block-title">БЛОК 2 — КТО ТЫ</div>
                      
                      <div class="question-item">
                        <strong>2.1 Лифт-питч (15 секунд, без должностей)</strong>
                        <p class="question-hint">Как бы ты объяснил суть того, чем занимаешься, случайному человеку в лифте?</p>
                        <textarea v-model="answers.q1_1" class="question-input" placeholder="Твой ответ..." rows="3"></textarea>
                      </div>
                      
                      <div class="question-item">
                        <strong>2.2 Твой путь (кратко)</strong>
                        <p class="question-hint">Откуда пришёл, через что прошёл, что изменило твою точку зрения? Не резюме — живая история.</p>
                        <textarea v-model="answers.q1_2" class="question-input" placeholder="Твой ответ..." rows="3"></textarea>
                      </div>
                      
                      <div class="question-item">
                        <strong>2.3 Кто твоя аудитория</strong>
                        <p class="question-hint">Опиши своего идеального читателя/клиента: кто он, где застрял, о чём мечтает?</p>
                        <textarea v-model="answers.q1_3" class="question-input" placeholder="Твой ответ..." rows="3"></textarea>
                      </div>
                    </div>

                    <!-- БЛОК 3 — ДОКАЗАТЕЛЬСТВА -->
                    <div class="question-block" v-show="currentStep === 3">
                      <div class="block-title">БЛОК 3 — ДОКАЗАТЕЛЬСТВА</div>
                      
                      <div class="question-item">
                        <strong>3.1 Кейсы (1–3 штуки)</strong>
                        <p class="question-hint">Для каждого: ситуация ДО → что ты сделал → результат ПОСЛЕ. Цифры и детали приветствуются.</p>
                        <textarea v-model="answers.q3_1" class="question-input" placeholder="→ Кейс 1:&#10;→ Кейс 2:" rows="5"></textarea>
                      </div>
                      
                      <div class="question-item">
                        <strong>3.2 Твои личные результаты</strong>
                        <p class="question-hint">Что ты сам построил, запустил, изменил — что могло бы вдохновить аудиторию?</p>
                        <textarea v-model="answers.q3_2" class="question-input" placeholder="Твой ответ..." rows="3"></textarea>
                      </div>
                    </div>

                    <!-- БЛОК 4 — ГОЛОС И ОБРАЗ -->
                    <div class="question-block" v-show="currentStep === 4">
                      <div class="block-title">БЛОК 4 — ГОЛОС И ОБРАЗ</div>
                      
                      <div class="question-item">
                        <strong>4.1 Стиль общения</strong>
                        <p class="question-hint">Выбери ближайшее (можно несколько) и поясни: Наставник / Коллега / Друг / Провокатор / Системный мыслитель.</p>
                        <textarea v-model="answers.q4_1" class="question-input" placeholder="Твой ответ..." rows="3"></textarea>
                      </div>
                      
                      <div class="question-item">
                        <strong>4.2 Личные качества, которые работают на бренд</strong>
                        <p class="question-hint">Что в тебе как в человеке усиливает доверие и авторитет?</p>
                        <textarea v-model="answers.q4_2" class="question-input" placeholder="Твой ответ..." rows="2"></textarea>
                      </div>
                      
                      <div class="question-item">
                        <strong>4.3 Эмоция, которую хочешь вызывать</strong>
                        <p class="question-hint">Что должен чувствовать человек после прочтения твоего поста?</p>
                        <textarea v-model="answers.q4_3" class="question-input" placeholder="Твой ответ..." rows="2"></textarea>
                      </div>
                      
                      <div class="question-item">
                        <strong>4.4 Главный месседж</strong>
                        <p class="question-hint">Одна фраза — то, что ты хочешь, чтобы о тебе запомнили.</p>
                        <textarea v-model="answers.q4_4" class="question-input" placeholder="Твой ответ..." rows="2"></textarea>
                      </div>
                    </div>

                    <!-- БЛОК 5 — ПРОДУКТЫ И МОНЕТИЗАЦИЯ -->
                    <div class="question-block" v-show="currentStep === 5">
                      <div class="block-title">БЛОК 5 — ПРОДУКТЫ И МОНЕТИЗАЦИЯ</div>
                      
                      <div class="question-item">
                        <strong>5.1 Что ты продаёшь (или планируешь)</strong>
                        <p class="question-hint">Менторство, консультации, курсы, автоматизация — опиши форматы и для кого они.</p>
                        <textarea v-model="answers.q5_1" class="question-input" placeholder="Твой ответ..." rows="3"></textarea>
                      </div>
                      
                      <div class="question-item">
                        <strong>5.2 Как блог должен вести к продаже</strong>
                        <p class="question-hint">Мягко прогревать? Закрывать возражения? Демонстрировать экспертизу? Что важнее всего?</p>
                        <textarea v-model="answers.q5_2" class="question-input" placeholder="Твой ответ..." rows="2"></textarea>
                      </div>
                    </div>

                    <!-- Навигация -->
                    <div class="quiz-navigation">
                      <button v-if="currentStep > 1" class="nav-btn nav-btn-back" @click="prevStep">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="18" height="18">
                          <path d="M19 12H5M12 19l-7-7 7-7"/>
                        </svg>
                        Назад
                      </button>
                      <button v-if="currentStep < 5" class="nav-btn nav-btn-next" @click="nextStep">
                        Далее
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="18" height="18">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </button>
                      <button v-if="currentStep === 5" class="nav-btn nav-btn-copy" @click="copyPrompt" :class="{ 'copied': isCopied }">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="18" height="18">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        {{ isCopied ? 'Скопировано!' : 'Скопировать промпт' }}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Шаг 2: Выбрать нейросеть -->
            <div class="unpack-step">
              <div class="step-number">02</div>
              <div class="step-content">
                <h3>Выбирай любимую нейросеть</h3>
                <div class="ai-networks">
                  <a href="https://chat.openai.com" target="_blank" rel="noopener" class="network-badge">ChatGPT <span class="badge-note">(с впн)</span></a>
                  <a href="https://claude.ai" target="_blank" rel="noopener" class="network-badge">Claude <span class="badge-note">(с впн)</span></a>
                  <a href="https://grok.x.ai" target="_blank" rel="noopener" class="network-badge">Grok <span class="badge-note">(с впн)</span></a>
                  <a href="https://gemini.google.com" target="_blank" rel="noopener" class="network-badge">Gemini <span class="badge-note">(с впн)</span></a>
                  <a href="https://kimi.moonshot.cn" target="_blank" rel="noopener" class="network-badge">Kimi</a>
                  <a href="https://gigachat.ai" target="_blank" rel="noopener" class="network-badge">GigaChat</a>
                  <a href="https://mistral.ai" target="_blank" rel="noopener" class="network-badge">Mistral</a>
                  <a href="https://deepseek.com" target="_blank" rel="noopener" class="network-badge">DeepSeek</a>
                  <a href="https://chat.qwen.ai" target="_blank" rel="noopener" class="network-badge">Qwen</a>
                </div>
                <p class="network-instruction">Заполни 5 блоков и нажми «Скопировать промпт» — он будет в буфере обмена</p>
              </div>
            </div>

            <!-- Шаг 3: Завершить -->
            <div class="unpack-step">
              <div class="step-number">03</div>
              <div class="step-content">
                <button class="finish-btn" @click="finishUnpack">
                  Завершить распаковку
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Мотивационный блок -->
        <div class="unpack-motivation" v-if="showMotivation" :class="{ 'animate-show': showMotivation }">
          <h4 class="motivation-text">Ты только что сделал то, что большинство экспертов откладывает годами — честно посмотрел на себя и сформулировал свою ценность. Это уже половина работы.</h4>
          <h4 class="motivation-text">Но эксперт без понимания своей аудитории — как навигатор без карты. Следующий шаг превратит твой опыт в контент, который читают, сохраняют и по которому приходят именно к тебе.</h4>
          <h4 class="motivation-highlight">Переходим к анализу целевой аудитории 👇</h4>
        </div>

        <!-- Анализ целевой аудитории -->
        <div class="unpack-container unpack-container-secondary unpack-container-wip">
          <div class="wip-badge">В разработке</div>
          <h2 class="unpack-title">АНАЛИЗ ЦЕЛЕВОЙ АУДИТОРИИ</h2>
          <p class="unpack-subtitle">Пойми, для кого ты создаёшь контент</p>

          <div class="unpack-toggle-wrapper">
            <label class="unpack-toggle">
              <input type="checkbox" v-model="isTargetExpanded" disabled />
              <span class="toggle-slider"></span>
              <span class="toggle-text">В разработке</span>
            </label>
          </div>

          <div class="unpack-steps" :class="{ 'expanded': isTargetExpanded }">
            <!-- Содержимое будет добавлено -->
          </div>
        </div>
      </section>

      <section class="problems-cascade" id="problems">
        <div class="section-head animate-fade-in-up">
          <p class="eyebrow">Проблема блога</p>
          <h3>Почему блог не приносит клиентов — даже если ты уже пишешь</h3>
        </div>

        <div class="problem-grid">
          <article class="problem-card fade-in-up" style="--delay: 0">
            <span class="problem-index">01</span>
            <h4>Контент есть. Заявок нет.</h4>
            <p>Публикации выходят регулярно, но между постом и покупкой — пустота. Нет выстроенного пути, по которому читатель становится клиентом.</p>
          </article>
          <article class="problem-card wide fade-in-up" style="--delay: 1">
            <span class="problem-index">02</span>
            <h4>Непонятно, кто ты и чем можешь помочь</h4>
            <p>Человек заходит в профиль, читает несколько постов — и уходит. Не потому что неинтересно. Потому что непонятно, к кому он попал и что делать дальше.</p>
          </article>
          <article class="problem-card fade-in-up" style="--delay: 2">
            <span class="problem-index">03</span>
            <h4>Площадок много — стратегии нет</h4>
            <p>Telegram, TenChat, Threads, Дзен — у каждой своя логика и аудитория. Без понимания этого блог превращается в хаотичный постинг, который утомляет, а не масштабирует.</p>
          </article>
          <article class="problem-card fade-in-up" style="--delay: 3">
            <span class="problem-index">04</span>
            <h4>Личный бренд работает на узнаваемость, но не на доход</h4>
            <p>Тебя читают, сохраняют, советуют другим. Но до сделки не доходит — потому что экспертность не упакована в понятное предложение.</p>
          </article>
          <article class="problem-card accent fade-in-up" style="--delay: 4">
            <span class="problem-index">05</span>
            <h4>Время уходит на создание контента, а не на рост</h4>
            <p>Часы на написание, редактуру, публикацию. А отдача не соответствует вложениям. Потому что без системы даже хороший контент не работает как инструмент.</p>
          </article>
        </div>
        
        <div class="problem-bridge">
          <p>Всё это решаемо. Я работаю именно с этим — и покажу, как выглядит блог, который приводит клиентов сам.</p>
        </div>
      </section>

      <section class="services-lab" id="services">
        <div class="section-head alt">
          <p class="eyebrow">Как это работает</p>
          <h3>Личный бренд — это фундамент. Всё остальное строится на нём.</h3>
        </div>

        <div class="service-grid">
          <article class="service-item fade-in-up" style="--delay: 0">
            <span class="service-number">01</span>
            <h4>Личный бренд</h4>
            <p>Сначала разбираемся, кто ты, для кого и чем отличаешься от других экспертов в своей нише. Без этого любой контент — это шум. С этим — каждый пост работает на тебя, даже когда ты не в сети.</p>
          </article>
          <article class="service-item fade-in-up" style="--delay: 1">
            <span class="service-number">02</span>
            <h4>Блог и контент</h4>
            <p>Когда есть позиционирование, выстраиваем присутствие на площадках. Telegram, TenChat, Threads, Дзен — не везде сразу, а там, где живёт твоя аудитория. Контент со смыслом, который ведёт читателя к решению работать именно с тобой.</p>
          </article>
          <article class="service-item fade-in-up" style="--delay: 2">
            <span class="service-number">03</span>
            <h4>Веб-разработка</h4>
            <p>Сайт, который продолжает логику блога. Не визитка — а точка входа с понятным следующим шагом для каждого, кто зашёл: эксперт, предприниматель или фрилансер.</p>
          </article>
          <article class="service-item fade-in-up" style="--delay: 3">
            <span class="service-number">04</span>
            <h4>Сопровождение</h4>
            <p>Мастермайнды, бизнес-разборы, консультации по блогу. Работаем вместе, пока система не начнёт приводить клиентов без твоего постоянного участия.</p>
          </article>
        </div>
        
        <div class="service-bridge">
          <p>Можно начать с одного. Но система даёт результат, когда все части говорят в одну сторону.</p>
        </div>
      </section>

      <section class="why-split" id="why-us">
        <div class="why-photo-wrap">
          <NuxtImg :src="`${baseURL}images/artem.jpg`" format="webp" quality="70" sizes="320px sm:480px md:600px" alt="Артем Селифанов" class="author-photo" />
        </div>

        <div class="why-content">
          <p class="eyebrow">Почему я делаю именно так</p>
          <h3>Я сам прошёл через это</h3>
          <p>
            Писал без стратегии, делал сайты без логики, строил бренд без понимания для кого.
            Работало — случайно. Не работало — непонятно почему.
          </p>
          <p>
            В какой-то момент я перестал делать всё по отдельности. Собрал в одну систему — и увидел, как меняется результат.
            Не сразу. Но стабильно.
          </p>
          <p>
            Сейчас я работаю только так: сначала понять тебя и твою аудиторию, потом выстраивать всё остальное.
            Без этого — любой инструмент будет работать вполсилы.
          </p>
          <div class="why-principles">
            <div class="principle-item">
              <h4>Честность важнее красоты</h4>
              <p>Скажу, если что-то не нужно — даже если это то, за чем ты пришёл.</p>
            </div>
            <div class="principle-item">
              <h4>Твой голос — не мой шаблон</h4>
              <p>Не подгоняю под формат. Ищу то, что работает именно для тебя.</p>
            </div>
            <div class="principle-item">
              <h4>Результат важнее процесса</h4>
              <p>Не веду работу ради работы. Если нет движения — меняем подход.</p>
            </div>
          </div>
        </div>
      </section>

      <section class="portfolio-zigzag" id="portfolio">
        <div class="section-head">
          <p class="eyebrow">Кейсы и трекшн</p>
          <h3>Формат: запуск, измерение, масштабирование</h3>
        </div>
        <div class="case-track">
          <article class="case-card">
            <p class="case-meta">Fintech · 11 недель</p>
            <h4>Новый сайт + контент-воронка</h4>
            <p class="case-result">+43% квалифицированных заявок</p>
          </article>
          <article class="case-card shifted">
            <p class="case-meta">EdTech · 8 недель</p>
            <h4>Пересборка личного бренда founder</h4>
            <p class="case-result">x2.1 рост входящих запросов</p>
          </article>
          <article class="case-card">
            <p class="case-meta">B2B SaaS · 13 недель</p>
            <h4>Система контента + блоговая структура</h4>
            <p class="case-result">-37% стоимость лида</p>
          </article>
        </div>
      </section>

      <section class="faq-field" id="faq">
        <div class="section-head alt">
          <p class="eyebrow">FAQ</p>
          <h3>Коротко о главном</h3>
        </div>

        <div class="faq-accordion">
          <div class="faq-item" v-for="(faq, index) in faqs" :key="index">
            <button class="faq-trigger" @click="toggleFaq(index)" :class="{ 'active': openFaqIndex === index }">
              <span>{{ faq.question }}</span>
              <svg class="faq-icon" :class="{ 'rotated': openFaqIndex === index }" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="m6 9 6 6 6-6"/>
              </svg>
            </button>
            <div class="faq-content" :class="{ 'open': openFaqIndex === index }">
              <p>{{ faq.answer }}</p>
            </div>
          </div>
        </div>
      </section>

      <section class="work-cta" id="work">
        <p class="eyebrow">Готовы собрать систему</p>
        <h3>Давайте соберем ваш цифровой контур роста</h3>
        <p>
          Вместо набора случайных действий — понятная карта, этапы и измеримый результат.
        </p>
        <a href="https://t.me/artemselifanov" target="_blank" rel="noopener noreferrer">Обсудить проект</a>
      </section>
    </main>

    <!-- Footer -->
    <footer class="py-8 px-6 border-t border-white/10">
      <div class="max-w-7xl mx-auto">
        <!-- Контакты -->
        <div class="flex flex-wrap justify-center gap-4 sm:gap-6 mb-6 text-sm">
          <a href="tel:+79535487323" class="text-gray-400 hover:text-white transition-colors">+7 (953) 548-73-23</a>
          <span class="text-gray-600">|</span>
          <a href="mailto:a9535487323@yandex.ru" class="text-gray-400 hover:text-white transition-colors">a9535487323@yandex.ru</a>
          <span class="text-gray-600">|</span>
          <a href="https://t.me/artemselifanov" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-white transition-colors">Telegram</a>
        </div>
        <div class="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <span>© 2026 Фокус. Все права защищены.</span>
          <div class="flex gap-6">
            <a href="/" class="hover:text-white transition-colors">Главная</a>
            <a href="/blog" class="hover:text-white transition-colors">Блог</a>
          </div>
        </div>
      </div>
    </footer>

    <!-- Нижняя навигация для мобильных -->
    <MobileBottomNav theme="light" />
  </div>
</template>

<script setup lang="ts">
import { Menu, X } from 'lucide-vue-next'
import { ref, computed, onMounted, onUnmounted } from 'vue'
import MobileBottomNav from '~/components/layout/MobileBottomNav.vue'
import BaseMobileMenu from '~/components/layout/BaseMobileMenu.vue'

const config = useRuntimeConfig()
const baseURL = config.app.baseURL

const scrambleChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?'

// Мобильное меню
const isMobileMenuOpen = ref(false)

const mobileMenuItems = [
  { href: '/', label: 'Главная' },
  { href: '#problems', label: 'Проблемы' },
  { href: '#services', label: 'Услуги' },
  { href: '#why-us', label: 'Почему мы' },
  { href: '#portfolio', label: 'Кейсы' },
  { href: '/blog', label: 'Блог' },
  { href: '#faq', label: 'FAQ' },
  { href: '/yappie', label: 'Yappie' }
]

// FAQ данные
const faqs = ref([
  { question: 'Что такое «Фокус» и какую проблему он решает?', answer: '«Фокус» — это система построения личного бренда для предпринимателей и экспертов. Решает главную проблему: блог есть, контент выходит, но клиентов из него нет. Причина почти всегда одна — нет системы: понятного позиционирования, стратегии контента и связи между постами и продажами. «Фокус» выстраивает эту систему поэтапно: от распаковки личности до сайта, который конвертирует читателей в клиентов.' },
  { question: 'Что такое «распаковка личности» и как ею пользоваться?', answer: 'Распаковка личности — бесплатный инструмент на этой странице. Это структурированный бриф из 5 блоков: что вы делаете и как, кто вы, ваши доказательства экспертности, голос и образ, продукты и монетизация. Заполняете поля (30–45 минут) → нажимаете «Скопировать промпт» → вставляете в любую нейросеть (ChatGPT, Claude, Grok, GigaChat). На выходе — готовые биография эксперта, темы для блога, уникальная точка отличия и рекомендации по стилю общения с аудиторией.' },
  { question: 'С чего начинается работа над личным брендом?', answer: 'С диагностики: где сейчас теряются внимание аудитории, деньги и скорость роста. Затем — позиционирование: кто вы, для кого и чем отличаетесь от других экспертов в своей нише. Без чёткого позиционирования любой контент в Telegram, TenChat или Сетке — это шум. После — выстраивается контент-стратегия и присутствие на платформах. Начать можно с бесплатного инструмента «Распаковка личности» прямо на этой странице.' },
  { question: 'Нужен ли сайт, если у меня уже есть Telegram-канал с аудиторией?', answer: 'Telegram-канал — это трафик и аудитория. Сайт — это конверсия. Канал приводит людей, сайт объясняет им: кто вы, что предлагаете, сколько это стоит и что нужно сделать прямо сейчас. Без сайта значительная часть заинтересованных читателей просто уходит, не зная, как с вами работать. Особенно критично это для экспертов с услугами от 10 000 ₽ — здесь сайт напрямую влияет на конверсию в заявку.' },
  { question: 'Можно ли улучшить результаты блога без полной переделки всего?', answer: 'Да, и в большинстве случаев именно так и правильно. Принцип Парето работает и здесь: достаточно пересобрать 20% ключевых элементов, чтобы получить 80% улучшения результата. Это может быть исправление позиционирования в шапке профиля, добавление одного конверсионного поста в цепочку контента или переупаковка описания услуги. Диагностика показывает, что именно блокирует рост в вашем конкретном случае.' },
  { question: 'Когда виден результат от работы над личным брендом и контент-стратегией?', answer: 'Первые измеримые сигналы — обычно через 2–4 недели: рост охватов, увеличение вовлечённости, первые новые подписчики из целевой аудитории. Системный эффект — рост входящих запросов от потенциальных клиентов — проявляется в горизонте 2–3 месяцев при регулярной работе. Важно понимать: личный бренд — это не спринт, а марафон. Но в отличие от платной рекламы, он работает на вас постоянно, даже когда вы не в сети.' },
  { question: 'Какие форматы работы предлагает «Фокус»?', answer: 'Работа строится поэтапно, и начать можно с любого уровня: Инструмент «Распаковка личности» — бесплатно, самостоятельно. Консультация по блогу — 3 500 ₽/час, разовый разбор стратегии. Менторская программа — 25 000 ₽/мес, персональная работа 1-на-1, 4 встречи. Мастермайнд — 15 000 ₽/мес, групповая работа, 4 встречи по 2 часа. Разработка сайта — от 30 000 ₽, точка конверсии для вашего бренда. Подробнее о каждом формате — на страницах Нескучный Нетворкинг и Yappie.' },
  { question: 'Артём работает один или с командой специалистов?', answer: 'Артём ведёт стратегию, архитектуру личного бренда и контент-консультации лично. Для проектов, требующих дополнительных компетенций — дизайн, веб-разработка, копирайтинг, SEO-продвижение — подключаются проверенные специалисты из сети. Клиент всегда работает напрямую с Артёмом как с основным контактом, без передачи «менеджерам».' },
  { question: 'Подходит ли «Фокус» для тех, кто только начинает вести блог?', answer: 'Да, и это один из лучших моментов для начала работы — строить систему с нуля проще и дешевле, чем переделывать сложившийся хаос. Инструмент «Распаковка личности» создан именно как точка входа: он помогает сформулировать экспертный образ до того, как вы написали первый пост. Это экономит месяцы проб и ошибок с неправильным позиционированием.' },
  { question: 'В чём уникальность подхода Артёма Селифанова к личному бренду?', answer: 'Три принципа, которые отличают этот подход: Честность важнее красоты — Артём скажет, если что-то не нужно, даже если это то, за чем вы пришли. Ваш голос — не чужой шаблон — никакого универсального контент-плана «под всех», только то, что работает для вашей личности и аудитории. Результат важнее процесса — если нет измеримого движения, меняется подход, а не продолжается работа ради работы.' },
  { question: 'Сколько стоит работа с Артёмом и как записаться?', answer: 'Бесплатно: инструмент «Распаковка личности» на этой странице. Консультация по блогу: 3 500 ₽/час. Менторская программа: 25 000 ₽/месяц. Мастермайнд-группа: 15 000 ₽/месяц. Разработка личного сайта: от 30 000 ₽. Для записи — напишите в Telegram @artemselifanov. Первый диагностический разговор — бесплатно.' },
  { question: 'Как контент в блоге может приводить клиентов на автопилоте?', answer: 'Контент приводит клиентов автоматически, когда каждый пост встроен в логику пути читателя: осознание проблемы → интерес к решению → доверие к автору → желание работать с вами → заявка. Большинство экспертов пишут «в воздух» без этой логики. В «Фокусе» выстраивается контентная воронка: разные типы постов — образовательные, кейсовые, продающие — работают в связке и ведут читателя к нужному действию без давления и прямых продаж в каждом посте.' },
])

// Открытый элемент FAQ
const openFaqIndex = ref(null)

function toggleFaq(index: number) {
  openFaqIndex.value = openFaqIndex.value === index ? null : index
}

// Копирование промпта
const isCopied = ref(false)
const promptContent = ref(null)

// Текущий шаг квиза
const currentStep = ref(1)

// Развёрнут ли блок распаковки
const isUnpackExpanded = ref(false)

// Показан ли мотивационный блок
const showMotivation = ref(false)

// Развёрнут ли блок целевой аудитории
const isTargetExpanded = ref(false)

// Ответы на вопросы
const answers = ref({
  // Блок 1
  q1_1: '', q1_2: '', q1_3: '',
  // Блок 2
  q2_1: '', q2_2: '', q2_3: '', q2_4: '',
  // Блок 3
  q3_1: '', q3_2: '',
  // Блок 4
  q4_1: '', q4_2: '', q4_3: '', q4_4: '',
  // Блок 5
  q5_1: '', q5_2: ''
})

function nextStep() {
  if (currentStep.value < 5) {
    currentStep.value++
    scrollToTop()
  }
}

function prevStep() {
  if (currentStep.value > 1) {
    currentStep.value--
    scrollToTop()
  }
}

function scrollToTop() {
  setTimeout(() => {
    const currentBlock = document.querySelector('.question-block:not([style*="display: none"])')
    if (currentBlock) {
      const offset = 100
      const elementPosition = currentBlock.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }, 50)
}

function finishUnpack() {
  // Показываем мотивационный блок
  showMotivation.value = true

  // Скроллим к мотивационному тексту
  setTimeout(() => {
    const motivationBlock = document.querySelector('.unpack-motivation')
    if (motivationBlock) {
      const offset = 100
      const elementPosition = motivationBlock.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }, 300)
}

function getPromptText() {
  return `Ты — эксперт по личному бренду и контент-стратегии с 10-летним опытом. Твоя задача — создать чёткий, живой, доверительный образ эксперта в блоге, который:
– вызывает отклик у целевой аудитории (молодые аналитики, предприниматели, HR, тренеры),
– подчёркивает опыт и методологию,
– демонстрирует реальные результаты,
– мягко ведёт подписчиков к услугам (менторство, консультации, автоматизация).

Используй ответы на вопросы ниже, чтобы сформировать:
1. Краткую, но ёмкую «биографию эксперта» (до 3–4 предложений)
2. Список из 5–7 ключевых тем блога для укрепления авторитета
3. Уникальную «точку опоры» — то, что отличает от других в нише
4. Рекомендации по тону и стилю общения в постах

=== ЗАПОЛНЕННЫЙ БРИФ ===

Этот бриф — основа для создания экспертного образа в блоге. Чем честнее и конкретнее заполнен каждый пункт, тем точнее и сильнее получится итоговый документ.

КАК ЗАПОЛНЯТЬ:
Пиши так, как говоришь — без официоза и «причёсывания». Не думай долго над формулировками, первая мысль часто самая точная. Если какой-то пункт вызывает затруднение — напиши даже приблизительный ответ.

ЧТО ВАЖНО:
Конкретика бьёт общие слова. «Помог аналитику вырасти с 0 до 1200 подписчиков за 3 месяца» работает в 10 раз лучше, чем «помогаю людям развивать блог». Цифры, детали, живые примеры превращают шаблонный текст в настоящий документ.

=== ОТВЕТЫ НА ВОПРОСЫ ===

=== БЛОК 1 — ЧТО ТЫ ДЕЛАЕШЬ И КАК ===

1.1 Уникальность подхода:
${answers.value.q2_1 || '[ответ]'}

1.2 Боли и решения:
${answers.value.q2_2 || '[ответ]'}

1.3 Инструменты и фреймворки:
${answers.value.q2_3 || '[ответ]'}

1.4 Чего ты НЕ делаешь:
${answers.value.q2_4 || '[ответ]'}

=== БЛОК 2 — КТО ТЫ ===

2.1 Лифт-питч:
${answers.value.q1_1 || '[ответ]'}

2.2 Твой путь:
${answers.value.q1_2 || '[ответ]'}

2.3 Твоя аудитория:
${answers.value.q1_3 || '[ответ]'}

=== БЛОК 3 — ДОКАЗАТЕЛЬСТВА ===

3.1 Кейсы:
${answers.value.q3_1 || '[ответ]'}

3.2 Личные результаты:
${answers.value.q3_2 || '[ответ]'}

=== БЛОК 4 — ГОЛОС И ОБРАЗ ===

4.1 Стиль общения:
${answers.value.q4_1 || '[ответ]'}

4.2 Личные качества:
${answers.value.q4_2 || '[ответ]'}

4.3 Эмоция:
${answers.value.q4_3 || '[ответ]'}

4.4 Главный месседж:
${answers.value.q4_4 || '[ответ]'}

=== БЛОК 5 — ПРОДУКТЫ И МОНЕТИЗАЦИЯ ===

5.1 Что продаёшь:
${answers.value.q5_1 || '[ответ]'}

5.2 Как блог ведёт к продаже:
${answers.value.q5_2 || '[ответ]'}`
}

async function copyPrompt() {
  try {
    await navigator.clipboard.writeText(getPromptText())
    isCopied.value = true
    setTimeout(() => {
      isCopied.value = false
    }, 2000)
  } catch (err) {
    console.error('Failed to copy:', err)
  }
}

function fillExample() {
  answers.value = {
    // Блок 1 (теперь ЧТО ТЫ ДЕЛАЕШЬ И КАК)
    q2_1: 'Система 5-платформ, backcasting для целеполагания, анализ через нейросети.',
    q2_2: '«Нет заявок» → выстраиваю воронку. «Нет времени» → автоматизирую. «Не вижу результата» → ввожу метрики.',
    q2_3: 'Анализ через нейросети, система 5-платформ, правило 30 минут на контент, backcasting.',
    q2_4: 'Не обещаю 10K за месяц. Не использую агрессивные призывы. Не пишу личное ради вовлечения.',
    // Блок 2 (теперь КТО ТЫ)
    q1_1: 'Я помогаю предпринимателям превратить хаос в соцсетях в систему, которая приносит клиентов.',
    q1_2: 'Пришёл из аналитики, сам вёл блоги 5 лет. Понял, что система важнее вдохновения.',
    q1_3: 'Предприниматели 30-45 лет, эксперты, которые устали от хаоса в контенте и хотят систему.',
    // Блок 3
    q3_1: 'HR-консультант: 2-3 заявки/мес → 15+ за 6 недель. EdTech: x2.1 рост входящих за 8 недель.',
    q3_2: 'Построил сообщество 45K+, запустил 6 платформ, создал систему без рекламы.',
    // Блок 4
    q4_1: 'Наставник-коллега. Прямо, но с поддержкой. Метафоры + факты.',
    q4_2: 'Дисциплина, системность, скорость, эксперименты.',
    q4_3: '«Я тоже могу» + энергия действия.',
    q4_4: 'Система побеждает хаос.',
    // Блок 5
    q5_1: 'Менторство (индивидуально), консультации, автоматизация процессов.',
    q5_2: 'Демонстрировать экспертизу через кейсы, мягко вести к консультации.'
  }
}

const typingPhrases = ref([
  { text: 'Твои клиенты уже читают чужой блог.', delay: 90, pause: 300 },
  { text: '', delay: 30, pause: 300, isDelete: true },
  { text: 'Пока ты думаешь — они пишут.', delay: 70, pause: 200 },
  { text: '', delay: 20, pause: 200, isDelete: true },
  { text: 'Начни сегодня.', delay: 40, pause: 0, isFinal: true }
])

const currentText = ref('')
const currentPhraseIndex = ref(0)
const currentCharIndex = ref(0)
const isStopped = ref(false)
const isUnlocked = ref(false)

// Для печати заголовка
const systemTitleText = ref('')
const systemTitleFinished = ref(false)
const systemTitleStarted = ref(false)
const blogWordText = ref('')
let systemTitleTimeout: ReturnType<typeof setTimeout> | null = null

let typingTimeout: ReturnType<typeof setTimeout> | null = null
let scrambleInterval: ReturnType<typeof setInterval> | null = null
let systemTitleObserver: IntersectionObserver | null = null
let blogWordObserver: IntersectionObserver | null = null

function unlockPage() {
  isUnlocked.value = true

  // Очищаем предыдущий текст заголовка
  systemTitleText.value = ''
  systemTitleFinished.value = false
  systemTitleStarted.value = false
  blogWordText.value = ''
  blogWordAnimated = false
  systemTitleIndex = 0
  systemTitleCharIndex = 0

  if (scrambleInterval) {
    clearInterval(scrambleInterval)
    scrambleInterval = null
  }

  setTimeout(() => {
    const cursor = document.querySelector('.typing-cursor') as HTMLElement | null
    if (cursor) {
      cursor.style.animation = 'none'
      cursor.style.opacity = '1'
    }
  }, 700)

  // Плавный скролл к секции с заголовком
  setTimeout(() => {
    const systemTitleSection = document.querySelector('.system-title-wrap')
    if (systemTitleSection) {
      systemTitleSection.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }, 300)

  // Запускаем печать заголовка при скролле (Intersection Observer)
  // При клике на кнопку просто скроллим к секции
}

// Флаг для анимации слова "блог"
let blogWordAnimated = false

// Функция для печати заголовка
const systemTitlePhrases = [
  { text: 'БЛОГ', delay: 100, pause: 0 },
  { text: '\nНАЧИНАЕТСЯ', delay: 100, pause: 0 },
  { text: '\nС ТЕБЯ', delay: 100, pause: 0 },
  { text: '\nКто ты и что любишь?', delay: 100, pause: 0, isFinal: true }
]

let systemTitleIndex = 0
let systemTitleCharIndex = 0

function typeSystemTitle() {
  if (systemTitleIndex >= systemTitlePhrases.length) {
    systemTitleFinished.value = true
    return
  }

  const phrase = systemTitlePhrases[systemTitleIndex]

  if (systemTitleCharIndex < phrase.text.length) {
    systemTitleText.value += phrase.text[systemTitleCharIndex]
    systemTitleCharIndex++
    systemTitleTimeout = setTimeout(typeSystemTitle, phrase.delay)
  } else {
    if (phrase.isFinal) {
      systemTitleFinished.value = true
      systemTitleIndex = 0
      systemTitleCharIndex = 0
    } else {
      systemTitleTimeout = setTimeout(() => {
        systemTitleIndex++
        systemTitleCharIndex = 0
        typeSystemTitle()
      }, phrase.pause)
    }
  }
}

// Анимация scramble для слова "блог"
function startBlogWordAnimation() {
  const targetWord = 'блог'
  let iterations = 0

  if (scrambleInterval) {
    clearInterval(scrambleInterval)
  }

  scrambleInterval = setInterval(() => {
    const scrambled = targetWord
      .split('')
      .map((_, index) => {
        if (index < iterations) {
          return targetWord[index]
        }
        return scrambleChars[Math.floor(Math.random() * scrambleChars.length)]
      })
      .join('')

    blogWordText.value = scrambled

    iterations += 0.15

    if (iterations >= targetWord.length) {
      if (scrambleInterval) {
        clearInterval(scrambleInterval)
      }
      blogWordText.value = targetWord
      scrambleInterval = null
    }
  }, 60)
}

function typeWriter() {
  if (isStopped.value) {
    return
  }

  const phrase = typingPhrases.value[currentPhraseIndex.value]

  if (phrase.isDelete) {
    if (currentText.value.length > 0) {
      currentText.value = ''
      typingTimeout = setTimeout(() => {
        currentPhraseIndex.value = (currentPhraseIndex.value + 1) % typingPhrases.value.length
        currentCharIndex.value = 0
        typeWriter()
      }, phrase.pause)
    }
    return
  }

  if (currentCharIndex.value < phrase.text.length) {
    currentText.value += phrase.text[currentCharIndex.value]
    currentCharIndex.value += 1
    typingTimeout = setTimeout(typeWriter, phrase.delay)
    return
  }

  if (phrase.isFinal) {
    isStopped.value = true
    return
  }

  typingTimeout = setTimeout(() => {
    currentPhraseIndex.value = (currentPhraseIndex.value + 1) % typingPhrases.value.length
    currentCharIndex.value = 0
    typeWriter()
  }, phrase.pause)
}

onMounted(() => {
  window.scrollTo(0, 0)
  typeWriter()

  // Intersection Observer для анимации карточек
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const delay = parseInt(entry.target.style.getPropertyValue('--delay')) || 0
        setTimeout(() => {
          entry.target.classList.add('visible')
        }, delay * 100)
        observer.unobserve(entry.target)
      }
    })
  }, observerOptions)

  // Наблюдаем за всеми карточками проблем
  const problemCards = document.querySelectorAll('.problem-card')
  problemCards.forEach(card => observer.observe(card))

  // Наблюдаем за карточками сервисов
  const serviceItems = document.querySelectorAll('.service-item')
  serviceItems.forEach(item => observer.observe(item))

  // Intersection Observer для запуска печатной машинки 2 при скролле
  systemTitleObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !systemTitleStarted.value) {
        systemTitleStarted.value = true
        // Запускаем печать заголовка
        typeSystemTitle()
      }
    })
  }, { threshold: 0.5 })

  // Наблюдаем за секцией с заголовком
  const systemTitleSection = document.querySelector('.system-title-wrap')
  if (systemTitleSection) {
    systemTitleObserver.observe(systemTitleSection)
  }

  // Intersection Observer для запуска анимации слова "блог"
  const blogWordObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !blogWordAnimated && systemTitleFinished.value) {
        blogWordAnimated = true
        // Запускаем анимацию слова "блог"
        startBlogWordAnimation()
        blogWordObserver.disconnect()
      }
    })
  }, { threshold: 0.5 })

  // Наблюдаем за CTA блоком
  const ctaBlogSection = document.querySelector('.cta-blog-wrap')
  if (ctaBlogSection) {
    blogWordObserver.observe(ctaBlogSection)
  }
})

onUnmounted(() => {
  if (typingTimeout) {
    clearTimeout(typingTimeout)
  }
  if (scrambleInterval) {
    clearInterval(scrambleInterval)
  }
  if (systemTitleTimeout) {
    clearTimeout(systemTitleTimeout)
  }
  // Очищаем observer при размонтировании
  if (systemTitleObserver) {
    systemTitleObserver.disconnect()
  }
  if (blogWordObserver) {
    blogWordObserver.disconnect()
  }
})

useHead({
  link: [
    { rel: 'canonical', href: 'https://artemselifanov.ru/study' }
  ]
})

useSeoMeta({
  title: 'Фокус — Тест на позиционирование личного бренда | Артём Селифанов',
  description: 'Пройдите бесплатный тест на позиционирование личного бренда. Узнайте свои сильные стороны, определите целевую аудиторию и получите персональные рекомендации по развитию.',
  keywords: 'тест позиционирования, личный бренд тест, позиционирование эксперта, аудит личного бренда, бесплатная диагностика',
  robots: 'index, follow',
  ogTitle: 'Фокус — Тест на позиционирование личного бренда',
  ogDescription: 'Пройдите бесплатный тест на позиционирование личного бренда и получите персональные рекомендации',
  ogType: 'website',
  ogUrl: 'https://artemselifanov.ru/study',
  ogImage: 'https://artemselifanov.ru/reference/openGraph/study.webp',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Фокус — Тест на позиционирование личного бренда',
  twitterDescription: 'Пройдите бесплатный тест на позиционирование личного бренда и получите персональные рекомендации'
})
</script>

<style scoped>
/* ==================================
   TYPOGRAPHY SYSTEM
   Scale: Major Third (1.250)
   Base: 16px (Desktop)
   ================================== */

:root {
  /* Font sizes - Desktop */
  --text-xs: 0.8rem;      /* 12.8px */
  --text-sm: 0.889rem;    /* 14.2px */
  --text-base: 1rem;      /* 16px */
  --text-lg: 1.25rem;     /* 20px */
  --text-xl: 1.563rem;    /* 25px */
  --text-2xl: 1.953rem;   /* 31px */
  --text-3xl: 2.441rem;   /* 39px */
  --text-4xl: 3.052rem;   /* 49px */
  
  /* Line heights */
  --leading-tight: 1.1;
  --leading-normal: 1.5;
  --leading-relaxed: 1.625;
  
  /* Font weights */
  --font-normal: 400;
  --font-medium: 500;
  --font-semibold: 600;
  --font-bold: 700;
  --font-extrabold: 800;
}

@keyframes pulse-slow {
  0%, 100% {
    opacity: 0.5;
    transform: scale(1);
  }
  50% {
    opacity: 0.8;
    transform: scale(1.1);
  }
}

.animate-pulse-slow {
  animation: pulse-slow 4s ease-in-out infinite;
}

/* ==================================
   FADE IN UP ANIMATION
   ================================== */

@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fade-in-up 0.8s ease-out forwards;
}

.demo-page {
  --bg: #ffffff;
  --paper: #ffffff;
  --ink: #111827;
  --muted: #6b7280;
  --line: rgba(0, 0, 0, 0.12);
  --card: #ffffff;
  --accent-a: #7c3aed;
  --accent-b: #db2777;
  min-height: 100vh;
  color: var(--ink);
  background: var(--bg);
  overflow-x: hidden;
  overflow-y: scroll;
}

.demo-header {
  display: none;
}

main {
  width: min(1320px, 100%);
  margin: 0 auto;
  padding: 0 2rem 8rem;
  display: grid;
  gap: 150px;
  background: #ffffff;
}

.hero-stage {
  position: relative;
  display: grid;
  place-content: center;
  gap: 1.2rem;
  width: 100%;
  height: 100vh;
  padding: 2rem;
  overflow: hidden;
  background: #ffffff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
}

.hero-stage::before {
  content: none;
}

.hero-stage::after {
  content: none;
}

/* Печатная машинка - стилизация под поисковую строку */
.typewriter-container {
  width: 800px;
  max-width: 800px;
  min-width: 800px;
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: space-between;
  z-index: 2;
  position: relative;
  background: rgba(0, 0, 0, 0.03);
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 24px;
  padding: 1.25rem 2rem;
  box-sizing: border-box;
  backdrop-filter: blur(10px);
  margin: 0 auto;
}

.typewriter-icon {
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  color: rgba(0, 0, 0, 0.5);
}

/* Печатная машинка 1 - стили для текста */
.typing-line {
  display: inline;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  font-size: clamp(1.25rem, 2.5vw, 1.75rem);
  font-weight: 400;
  line-height: 1.4;
  color: #111827;
  padding: 0;
  min-height: auto;
  text-align: left;
  white-space: pre-wrap;
  word-break: normal;
}

.typewriter-content {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  min-width: 0;
  overflow: hidden;
}

.typing-text {
  white-space: pre-wrap;
  display: inline;
  overflow: hidden;
  text-overflow: ellipsis;
}

.typing-cursor {
  display: inline-block;
  width: 2px;
  height: 1.2em;
  background: #111827;
  animation: blink 1s infinite;
  opacity: 0.8;
  vertical-align: text-bottom;
  margin-left: 2px;
}

.typing-cursor.frozen {
  animation: none;
  opacity: 1;
}

@keyframes blink {
  0%,
  48% { opacity: 0.8; }
  49%,
  100% { opacity: 0; }
}

/* Кнопка запуска */
.search-btn {
  flex-shrink: 0;
  padding: 0.75rem 1.5rem;
  background: transparent;
  color: #111827;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.search-btn .btn-text-mobile {
  display: none;
}

.search-btn:hover {
  background: linear-gradient(135deg, rgba(167, 139, 250, 0.8), rgba(232, 121, 249, 0.8));
  border-color: transparent;
  box-shadow: none;
}

.search-btn:active {
  transform: scale(0.98);
}

/* Печатная машинка 2 - для заголовка (фиксированная, текст вправо) */
.typing-system-title {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  padding-left: 2rem;
  box-sizing: border-box;
}

.typing-line-system {
  font-size: clamp(2.9rem, 10vw, 9.8rem);
  line-height: 0.9;
  letter-spacing: 0.02em;
  font-weight: 800;
  white-space: pre-wrap;
  color: #374151;
  text-align: left;
}

.typing-cursor-system {
  display: inline-block;
  width: 3px;
  height: 1em;
  background: #111827;
  font-weight: 300;
  animation: blink-system 2s infinite;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-left: 2px;
  vertical-align: text-bottom;
}

@keyframes blink-system {
  0%, 48% { opacity: 0.8; }
  49%, 100% { opacity: 0; }
}

/* ==================================
   BUTTONS
   ================================== */

.tg-link {
  color: #a78bfa;
  text-decoration: none;
}

.tg-link:hover {
  text-decoration: underline;
}

.system-title-wrap {
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 1.8rem 0;
  background: #ffffff;
}

/* ==================================
   CTA BLOG (Давай делать блог)
   ================================== */

.cta-blog-wrap {
  padding: 3rem 2rem;
  background: #ffffff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  animation: fade-in-up 0.8s ease-out forwards;
}

.cta-blog {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5rem;
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  font-weight: 600;
  color: #374151;
}

.cta-text {
  color: #6b7280;
}

.cta-blog-word {
  color: #111827;
  font-weight: 700;
  text-shadow: 0 0 20px rgba(167, 139, 250, 0.5);
  display: inline-block;
  min-width: 80px;
}

.cta-blog-word::before {
  content: 'блог';
  color: rgba(0, 0, 0, 0.3);
}

.cta-blog-word:not(:empty)::before {
  content: none;
}

/* ==================================
   UNPACK SECTION (Распаковка личности)
   ================================== */

.unpack-section {
  padding: 4rem 2rem;
  background: #ffffff;
  border: none;
  border-radius: 30px;
  box-shadow: none;
  border: 1px solid rgba(0, 0, 0, 0.08);
}

.unpack-container {
  max-width: 100%;
  margin: 0;
  padding: 24px 0;
}

.unpack-container-secondary {
  margin-top: 2rem;
  padding-top: 24px;
  padding-bottom: 24px;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
}

.unpack-container-wip {
  background: rgba(0, 0, 0, 0.03);
  border-radius: 16px;
  padding: 32px 24px 24px;
  position: relative;
  border: 1px solid rgba(0, 0, 0, 0.08);
}

.wip-badge {
  position: absolute;
  top: 16px;
  right: 24px;
  background: rgba(0, 0, 0, 0.1);
  color: rgba(0, 0, 0, 0.5);
  font-size: 12px;
  font-weight: 500;
  padding: 4px 12px;
  border-radius: 12px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
}

.unpack-motivation {
  padding: 0 2rem;
  background: linear-gradient(135deg, rgba(167, 139, 250, 0.05), rgba(232, 121, 249, 0.03));
  border: 1px solid rgba(167, 139, 250, 0.2);
  border-radius: 16px;
  margin: 0;
  opacity: 0;
  transform: translateY(20px);
  max-height: 0;
  overflow: hidden;
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: none;
}

.unpack-motivation.animate-show {
  opacity: 1;
  transform: translateY(0);
  max-height: 500px;
  padding: 2rem;
  margin: 0 0 2rem 0;
}

.unpack-motivation h4 {
  margin: 0 0 1rem;
  font-size: var(--text-base);
  font-weight: 500;
  line-height: var(--leading-relaxed);
  max-width: 50%;
}

.unpack-motivation h4:last-of-type {
  margin-bottom: 1.5rem;
}

.motivation-text {
  color: #111827;
}

.motivation-highlight {
  color: #a78bfa;
  font-weight: 600;
  margin: 0;
}

.unpack-title {
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 800;
  color: #111827;
  margin: 0 0 0.5rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  background: linear-gradient(135deg, #a78bfa 0%, #e879f9 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.unpack-subtitle {
  font-size: var(--text-lg);
  color: #6b7280;
  margin: 0 0 1.5rem;
  line-height: var(--leading-relaxed);
}

.unpack-toggle-wrapper {
  margin-bottom: 1.5rem;
}

.unpack-toggle {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  cursor: pointer;
  user-select: none;
}

.unpack-toggle input {
  display: none;
}

.toggle-slider {
  position: relative;
  width: 51px;
  height: 31px;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 31px;
  transition: background 0.3s ease;
  flex-shrink: 0;
}

.toggle-slider::before {
  content: '';
  position: absolute;
  top: 3px;
  left: 3px;
  width: 25px;
  height: 25px;
  background: #ffffff;
  border-radius: 50%;
  transition: transform 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.unpack-toggle input:checked + .toggle-slider {
  background: linear-gradient(135deg, rgba(167, 139, 250, 0.5), rgba(232, 121, 249, 0.5));
}

.unpack-toggle input:checked + .toggle-slider::before {
  transform: translateX(20px);
}

.toggle-text {
  color: #6b7280;
  font-size: var(--text-sm);
  font-weight: 500;
  transition: color 0.3s ease;
}

.unpack-toggle input:checked ~ .toggle-text {
  color: #a78bfa;
}

.unpack-steps {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.unpack-steps.expanded {
  display: flex;
}

.unpack-steps:not(.expanded) {
  display: none;
}

.unpack-step {
  display: flex;
  gap: 1.5rem;
  align-items: center;
  padding: 1.5rem;
  background: rgba(0, 0, 0, 0.02);
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 16px;
}

.unpack-step-prompt {
  align-items: flex-start;
  flex-direction: column;
}

.unpack-step:hover {
  background: rgba(0, 0, 0, 0.03);
  border-color: rgba(167, 139, 250, 0.2);
}

.step-number {
  flex-shrink: 0;
  width: 56px;
  height: 56px;
  border-radius: 12px;
  background: linear-gradient(135deg, rgba(167, 139, 250, 0.2), rgba(232, 121, 249, 0.2));
  border: 1px solid rgba(167, 139, 250, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  font-weight: 700;
  color: #a78bfa;
}

.step-content {
  width: 100%;
}

.step-content h3.step-title {
  margin: 0 0 1rem;
  font-size: var(--text-lg);
  font-weight: 700;
  color: #111827;
}

.step-content h3 {
  margin: 0 0 0.5rem;
  font-size: var(--text-lg);
  font-weight: 600;
  color: #111827;
}

.step-content p {
  margin: 0;
  color: #111827;
  font-size: var(--text-base);
  line-height: var(--leading-relaxed);
}

/* AI Networks Badges */
.ai-networks {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.75rem;
}

.network-badge {
  display: inline-flex;
  align-items: center;
  padding: 0.5rem 1rem;
  background: rgba(0, 0, 0, 0.03);
  border: 1px solid rgba(167, 139, 250, 0.3);
  border-radius: 999px;
  font-size: var(--text-sm);
  color: #111827;
  white-space: nowrap;
  text-decoration: none;
  transition: all 0.2s ease;
}

.network-badge:hover {
  background: rgba(167, 139, 250, 0.15);
  border-color: rgba(167, 139, 250, 0.5);
  transform: translateY(-2px);
  color: #a78bfa;
}

.badge-note {
  color: #6b7280;
  font-size: 0.7rem;
  margin-left: 0.25rem;
}

.network-instruction {
  color: #111827;
  font-size: 0.8rem;
  margin-top: 1rem;
  font-style: italic;
}

.finish-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: rgba(0, 0, 0, 0.1);
  color: #111827;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 999px;
  font-size: var(--text-sm);
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: none;
  margin-left: 0;
}

.finish-btn:hover {
  background: rgba(0, 0, 0, 0.15);
  border-color: rgba(0, 0, 0, 0.2);
  transform: translateY(-2px);
}

/* Prompt Box */
.prompt-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
}

.prompt-header h3 {
  margin: 0;
}

.prompt-actions {
  display: flex;
  gap: 0.5rem;
  align-items: center;
}

.brief-intro {
  padding: 1.25rem 1.5rem 3rem;
  background: rgba(167, 139, 250, 0.08);
  border: 1px solid rgba(167, 139, 250, 0.15);
  border-radius: 12px;
}

.brief-intro-text {
  color: #111827;
  font-size: var(--text-sm);
  line-height: var(--leading-relaxed);
  margin: 0 0 3rem;
  font-weight: 500;
  padding: 0 0.5rem;
}

.brief-info-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.brief-info-item {
  display: flex;
  gap: 0.75rem;
  align-items: flex-start;
}

.brief-info-icon {
  flex-shrink: 0;
  width: 36px;
  height: 36px;
  border-radius: 8px;
  background: rgba(167, 139, 250, 0.15);
  border: 1px solid rgba(167, 139, 250, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #a78bfa;
}

.brief-info-content {
  min-width: 0;
}

.brief-info-content strong {
  display: block;
  color: #111827;
  font-size: 0.75rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
}

.brief-info-content p {
  color: #111827;
  font-size: 0.7rem;
  line-height: 1.4;
  margin: 0;
}

.fill-example-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  padding: 0.5rem 0.875rem;
  background: rgba(232, 121, 249, 0.1);
  border: 1px solid rgba(232, 121, 249, 0.3);
  border-radius: 999px;
  color: #e879f9;
  font-size: 0.75rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}

.fill-example-btn:hover {
  background: rgba(232, 121, 249, 0.15);
  border-color: rgba(232, 121, 249, 0.5);
  transform: translateY(-1px);
}

.copy-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  padding: 0.5rem 0.875rem;
  background: rgba(167, 139, 250, 0.1);
  border: 1px solid rgba(167, 139, 250, 0.3);
  border-radius: 999px;
  color: #a78bfa;
  font-size: 0.75rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}

.copy-btn:hover {
  background: rgba(167, 139, 250, 0.15);
  border-color: rgba(167, 139, 250, 0.5);
  transform: translateY(-1px);
}

.copy-btn.copied {
  background: rgba(34, 197, 94, 0.15);
  border-color: rgba(34, 197, 94, 0.4);
  color: #22c55e;
}

.prompt-box {
  background: rgba(167, 139, 250, 0.05);
  border: 1px solid rgba(167, 139, 250, 0.2);
  border-radius: 16px;
  padding: 1.5rem;
  margin-top: 0.75rem;
}

.prompt-intro {
  color: #111827;
  font-size: var(--text-sm);
  line-height: var(--leading-relaxed);
  margin: 2rem 0;
  padding: 0.75rem 0.5rem;
  font-weight: 500;
  background: rgba(0, 0, 0, 0.03);
  border-radius: 12px;
  border: 1px solid rgba(0, 0, 0, 0.05);
}

.prompt-goal {
  color: #111827;
  font-size: var(--text-sm);
  line-height: var(--leading-relaxed);
  margin: 0 0 1rem !important;
  padding: 1rem;
  background: rgba(167, 139, 250, 0.1);
  border-radius: 12px;
  border-left: 3px solid #a78bfa;
}

.prompt-task {
  color: #111827;
  font-size: var(--text-sm);
  font-weight: 600;
  margin: 0 0 0.75rem;
}

.prompt-list {
  margin: 1rem 0 !important;
  padding-left: 0.75rem !important;
  color: #111827;
  font-size: var(--text-sm);
  line-height: var(--leading-relaxed);
}

.prompt-list li {
  margin-bottom: 0.5rem;
  color: #111827;
  line-height: 1.5;
}

.prompt-questions {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.question-item {
  padding: 1rem;
  background: rgba(0, 0, 0, 0.02);
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 12px;
  margin-bottom: 1rem;
}

.question-item strong {
  display: block;
  color: #e879f9;
  font-size: var(--text-sm);
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.question-hint {
  color: #374151;
  font-size: 0.75rem;
  line-height: var(--leading-relaxed);
  margin: 0 0 0.75rem;
  font-style: normal;
}

.question-input {
  width: 100%;
  background: rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(167, 139, 250, 0.2);
  border-radius: 8px;
  padding: 0.875rem;
  color: #111827;
  font-size: 1rem;
  font-family: inherit;
  resize: vertical;
  transition: border-color 0.2s ease;
}

.question-input:focus {
  outline: none;
  border-color: rgba(167, 139, 250, 0.5);
}

.question-input::placeholder {
  color: #4b5563;
}

.question-block {
  margin-bottom: 2rem;
  padding: 0;
  background: transparent;
  border: none;
  border-radius: 16px;
}

.block-title {
  font-size: var(--text-base);
  font-weight: 700;
  color: #a78bfa;
  margin-bottom: 1.25rem;
  padding: 0 0.5rem 0.75rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

/* Quiz Progress */
.quiz-progress {
  margin-bottom: 2rem;
}

.progress-bar {
  height: 4px;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 2px;
  overflow: hidden;
  margin-bottom: 1rem;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #a78bfa, #e879f9);
  transition: width 0.3s ease;
}

.step-indicator {
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
}

.step-dot {
  flex: 1;
  min-width: 50px;
  height: 36px;
  border-radius: 8px;
  background: rgba(0, 0, 0, 0.1);
  border: 2px solid rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: 600;
  color: #6b7280;
  transition: all 0.3s ease;
}

.step-dot.active {
  background: linear-gradient(135deg, rgba(167, 139, 250, 0.2), rgba(232, 121, 249, 0.2));
  border-color: #a78bfa;
  color: #a78bfa;
}

/* Quiz Navigation */
.quiz-navigation {
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
}

.nav-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border-radius: 999px;
  font-size: var(--text-sm);
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  border: none;
}

.nav-btn-back {
  background: rgba(0, 0, 0, 0.05);
  color: #6b7280;
  border: 1px solid rgba(0, 0, 0, 0.1);
}

.nav-btn-back:hover {
  background: rgba(0, 0, 0, 0.1);
  color: #111827;
  transform: translateX(-2px);
}

.nav-btn-next {
  background: linear-gradient(135deg, rgba(167, 139, 250, 0.2), rgba(232, 121, 249, 0.2));
  color: #a78bfa;
  border: 1px solid rgba(167, 139, 250, 0.3);
  margin-left: auto;
}

.nav-btn-next:hover {
  background: linear-gradient(135deg, rgba(167, 139, 250, 0.3), rgba(232, 121, 249, 0.3));
  border-color: rgba(167, 139, 250, 0.5);
  color: #e879f9;
  transform: translateX(2px);
}

.nav-btn-finish {
  background: linear-gradient(135deg, #22c55e, #16a34a);
  color: #111827;
  border: none;
  margin-left: auto;
  box-shadow: 0 4px 12px rgba(34, 197, 94, 0.3);
}

.nav-btn-finish:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(34, 197, 94, 0.4);
}

.problem-card p,
.service-block p,
.case-card p,
.faq-grid p,
.why-content p,
.work-cta p,
.photo-caption {
  color: var(--muted);
  line-height: var(--leading-relaxed);
}

/* ==================================
   SYSTEM TITLE (Typewriter)
   ================================== */

.typing-line-system {
  font-size: clamp(2.9rem, 10vw, 9.8rem);
  line-height: 0.9;
  letter-spacing: 0.02em;
  font-weight: 800;
  white-space: pre-wrap;
  color: #374151;
  text-align: left;
}

.typing-cursor-system {
  display: inline-block;
  width: 3px;
  height: 1em;
  background: #111827;
  font-weight: 300;
  animation: blink 2s infinite;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-left: 2px;
  vertical-align: text-bottom;
}

.section-head {
  display: grid;
  gap: 0.75rem;
  margin-bottom: 1.7rem;
}

/* ==================================
   HEADINGS
   ================================== */

h1 {
  font-size: var(--text-3xl);
  line-height: var(--leading-tight);
  font-weight: var(--font-extrabold);
  margin-bottom: 1rem;
}

h2 {
  font-size: var(--text-2xl);
  line-height: var(--leading-tight);
  font-weight: var(--font-extrabold);
  margin-bottom: 0.75rem;
}

h3 {
  font-size: var(--text-xl);
  line-height: var(--leading-tight);
  font-weight: var(--font-bold);
  margin-bottom: 0.5rem;
}

h4 {
  font-size: var(--text-lg);
  line-height: var(--leading-tight);
  font-weight: var(--font-semibold);
  margin-bottom: 0.5rem;
}

/* ==================================
   BODY TEXT
   ================================== */

p {
  font-size: var(--text-base);
  line-height: var(--leading-relaxed);
  font-weight: var(--font-normal);
  margin-bottom: 1rem;
}

/* ==================================
   SPECIFIC ELEMENTS
   ================================== */

.section-head h3 {
  margin: 0;
  font-size: clamp(1.8rem, 4vw, 3.8rem);
  line-height: 0.95;
  color: #111827;
  max-width: 100%;
}

.section-head.alt h3 {
  max-width: 100%;
}

.eyebrow {
  margin: 0;
  font-size: var(--text-xs);
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: #6b7280;
  font-weight: var(--font-medium);
}

.problems-cascade,
.services-lab,
.why-split,
.portfolio-zigzag,
.faq-field,
.work-cta {
  border: none;
  border-radius: 30px;
  background: #ffffff;
  padding: clamp(1.4rem, 3vw, 2.3rem);
  box-shadow: 0 18px 42px rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(0, 0, 0, 0.05);
}

.problem-grid {
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

.problem-card {
  grid-column: span 4;
  padding: 1.5rem;
  border-radius: 16px;
  border: 1px solid rgba(0, 0, 0, 0.08);
  background: #ffffff;
  box-shadow: none;
}

.problem-card.visible {
  opacity: 1;
  transform: translateY(0);
}

.problem-card.tall {
  grid-column: span 3;
}

.problem-card.wide {
  grid-column: span 6;
}

.problem-card h4 {
  margin: 0 0 0.75rem;
  font-size: clamp(1.1rem, 2vw, 1.4rem);
  line-height: 1.2;
  font-weight: 700;
}

.problem-card p {
  margin: 0;
  color: var(--muted);
  line-height: 1.6;
  font-size: 0.95rem;
}

.problem-card.accent {
  background: linear-gradient(140deg, rgba(167, 139, 250, 0.08), rgba(232, 121, 249, 0.05));
  box-shadow: none;
}

.problem-bridge {
  margin-top: 2rem;
  padding: 1.5rem 2rem;
  background: linear-gradient(135deg, rgba(167, 139, 250, 0.05), rgba(232, 121, 249, 0.03));
  border-radius: 16px;
  border: 1px solid rgba(0, 0, 0, 0.08);
  text-align: center;
  box-shadow: none;
}

.problem-bridge p {
  margin: 0;
  font-size: clamp(1rem, 2vw, 1.2rem);
  line-height: 1.6;
  color: #111827;
  font-weight: 500;
}

.problem-index {
  display: inline-block;
  margin-bottom: 0.75rem;
  font-size: 0.75rem;
  letter-spacing: 0.16em;
  color: #a78bfa;
  font-weight: 700;
}

.problem-card h4,
.service-block h4,
.case-card h4,
.faq-grid h4,
.why-content h3,
.work-cta h3 {
  margin: 0;
  font-size: var(--text-lg);
  line-height: var(--leading-tight);
}

.service-item h4 {
  margin: 0 0 0.75rem;
  font-size: var(--text-lg);
  line-height: var(--leading-tight);
  font-weight: var(--font-bold);
}

.work-cta h3 {
  margin: 0;
  max-width: 18ch;
  font-size: var(--text-3xl);
  line-height: var(--leading-tight);
  letter-spacing: -0.01em;
}

.work-cta p {
  margin: 0;
  max-width: 54ch;
  font-size: var(--text-base);
  line-height: var(--leading-relaxed);
}

.service-ribbons {
  display: flex;
  gap: 0.65rem;
  flex-wrap: wrap;
  margin-bottom: 1.2rem;
}

.service-ribbons span {
  border: none;
  border-radius: 999px;
  padding: 0.45rem 0.9rem;
  font-size: 0.78rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  background: rgba(167, 139, 250, 0.1);
  color: #a78bfa;
  border: 1px solid rgba(167, 139, 250, 0.2);
}

/* Новая сетка сервисов */
.service-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  margin-top: 2rem;
}

.service-item {
  padding: 1.5rem;
  border-radius: 16px;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow: none;
}

.service-item.visible {
  opacity: 1;
  transform: translateY(0);
}

.service-number {
  display: inline-block;
  margin-bottom: 0.75rem;
  font-size: 0.75rem;
  letter-spacing: 0.16em;
  color: #a78bfa;
  font-weight: 700;
}

.service-item h4 {
  margin: 0 0 0.75rem;
  font-size: clamp(1.1rem, 2vw, 1.4rem);
  line-height: 1.2;
  font-weight: 700;
}

.service-item p {
  margin: 0;
  color: var(--muted);
  line-height: 1.6;
  font-size: 0.95rem;
}

.service-bridge {
  margin-top: 2rem;
  padding: 1.5rem 2rem;
  background: linear-gradient(135deg, rgba(167, 139, 250, 0.05), rgba(232, 121, 249, 0.03));
  border-radius: 16px;
  border: 1px solid rgba(0, 0, 0, 0.08);
  text-align: center;
  box-shadow: none;
}

.service-bridge p {
  margin: 0;
  font-size: clamp(1rem, 2vw, 1.2rem);
  line-height: 1.6;
  color: #111827;
  font-weight: 500;
}

.why-split {
  display: grid;
  gap: 2rem;
  grid-template-columns: 0.9fr 1.1fr;
}

.why-photo-wrap {
  position: relative;
  max-width: 50%;
  margin: 0 auto;
}

.author-photo {
  width: 100%;
  display: block;
  border-radius: 22px;
  border: none;
}

.photo-caption {
  margin-top: 0.7rem;
  font-size: 0.82rem;
  color: #6b7280;
}

.why-content {
  display: grid;
  align-content: center;
  gap: 1rem;
}

.why-points {
  display: flex;
  gap: 0.6rem;
  flex-wrap: wrap;
}

.why-points span {
  border-radius: 999px;
  border: none;
  padding: 0.45rem 0.8rem;
  font-size: 0.82rem;
  color: #a78bfa;
  background: rgba(167, 139, 250, 0.1);
  border: 1px solid rgba(167, 139, 250, 0.2);
}

/* ==================================
   WHY PRINCIPLES
   ================================== */

.why-principles {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.principle-item {
  padding: 1.25rem;
  border-radius: 16px;
  background: rgba(0, 0, 0, 0.02);
  border: 1px solid rgba(0, 0, 0, 0.05);
}

.principle-item h4 {
  margin: 0 0 0.5rem;
  font-size: var(--text-base);
  font-weight: var(--font-semibold);
  color: #111827;
}

.principle-item p {
  margin: 0;
  color: var(--muted);
  line-height: var(--leading-relaxed);
  font-size: var(--text-sm);
}

.case-track {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.case-card {
  border-radius: 20px;
  border: 1px solid rgba(0, 0, 0, 0.08);
  padding: 1.2rem;
  background: #ffffff;
  box-shadow: none;
}

.case-card.shifted {
  transform: translateY(22px);
  background: linear-gradient(160deg, rgba(167, 139, 250, 0.1), rgba(232, 121, 249, 0.05));
}

.case-meta {
  margin: 0 0 0.6rem;
  font-size: 0.78rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #a78bfa;
}

.case-result {
  margin-top: 0.9rem;
  font-size: 1.05rem;
  color: #e879f9;
}

.faq-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
}

/* ==================================
   FAQ ACCORDION
   ================================== */

.faq-accordion {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.faq-item {
  border-radius: 18px;
  border: 1px solid rgba(0, 0, 0, 0.08);
  background: #ffffff;
  overflow: hidden;
}

.faq-trigger {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.25rem 1.5rem;
  background: transparent;
  border: none;
  color: #111827;
  font-size: var(--text-base);
  font-weight: var(--font-medium);
  text-align: left;
  cursor: pointer;
  transition: all 0.2s ease;
}

.faq-trigger:hover {
  background: rgba(0, 0, 0, 0.02);
}

.faq-trigger.active {
  color: #a78bfa;
}

.faq-icon {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  margin-left: 1rem;
  transition: transform 0.3s ease;
  color: #6b7280;
}

.faq-icon.rotated {
  transform: rotate(180deg);
  color: #a78bfa;
}

.faq-content {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
}

.faq-content.open {
  max-height: 300px;
}

.faq-content p {
  margin: 0;
  padding: 0 1.5rem 1.25rem;
  color: var(--muted);
  line-height: var(--leading-relaxed);
}

.work-cta {
  display: grid;
  gap: 0.9rem;
  text-align: center;
  justify-items: center;
  padding-top: clamp(2rem, 4vw, 3rem);
  padding-bottom: clamp(2rem, 4vw, 3rem);
  background: radial-gradient(circle at 50% 0%, rgba(167, 139, 250, 0.12), #030305 60%);
  border: 1px solid rgba(0, 0, 0, 0.05);
}

.work-cta h3 {
  margin: 0;
  max-width: 18ch;
  font-size: var(--text-2xl);
  line-height: var(--leading-tight);
  letter-spacing: -0.01em;
}

.work-cta p {
  margin: 0;
  max-width: 54ch;
  font-size: var(--text-base);
  line-height: var(--leading-relaxed);
}

.work-cta a {
  margin-top: 1rem;
  text-decoration: none;
  border-radius: 999px;
  padding: 0.95rem 1.6rem;
  color: #0f1220;
  font-weight: 700;
  background: linear-gradient(115deg, #a78bfa, #e879f9);
  box-shadow: none;
  border: 1px solid rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, border-color 0.2s ease;
}

.work-cta a:hover {
  transform: translateY(-2px);
  border-color: rgba(0, 0, 0, 0.2);
}

@media (max-width: 1080px) {
  main {
    padding: 0 1.25rem 6rem;
    gap: 150px;
  }

  .problem-card,
  .problem-card.tall,
  .problem-card.wide {
    grid-column: span 12;
  }

  .service-block,
  .service-block.large,
  .service-block.long {
    grid-column: span 6;
  }

  .why-split,
  .case-track,
  .faq-grid {
    grid-template-columns: 1fr;
  }

  .case-card.shifted {
    transform: none;
  }
}

@media (max-width: 720px) {
  /* ==================================
     MOBILE TYPOGRAPHY
     Scale adjusted for smaller screens
     ================================== */

  html {
    font-size: 15px; /* Slightly smaller base for mobile */
  }

  /* Основные отступы только по краям экрана */
  main {
    padding: 0 1rem 4rem;
  }

  section {
    padding-left: 0 !important;
    padding-right: 0 !important;
  }

  .demo-header-inner {
    gap: 1rem;
    overflow-x: auto;
    justify-content: flex-start;
    padding: 0.9rem 1rem;
  }

  .typing-line {
    font-size: 1rem;
    line-height: 1.3;
    min-height: auto;
    width: 100%;
    max-width: none;
  }
  
  .typing-line-system {
    font-size: clamp(2rem, 12vw, 4rem); /* Увеличенный размер для мобильных */
    line-height: 0.9;
  }

  .typewriter-container {
    width: 100%;
    max-width: 100%;
    min-width: 100%;
    margin: 0;
    padding: 0.75rem 24px;
    height: 60px;
    box-sizing: border-box;
  }

  .typewriter-icon {
    width: 20px;
    height: 20px;
  }

  .search-btn {
    padding: 0.5rem 1rem;
    font-size: 0.75rem;
  }

  .search-btn .btn-text-desktop {
    display: none;
  }

  .search-btn .btn-text-mobile {
    display: inline;
  }

  .typewriter-content {
    max-width: none;
    width: 100%;
    overflow: hidden;
  }

  .typing-line {
    width: 100%;
    max-width: none;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .problem-card,
  .service-block {
    grid-column: span 12;
  }

  .service-grid {
    grid-template-columns: 1fr;
  }

  .service-item {
    grid-column: span 1;
  }

  .section-head h3 {
    max-width: 100%; /* Full width on mobile */
  }
  
  .why-photo-wrap {
    max-width: 100%;
    margin: 0;
  }
  
  .author-photo {
    width: 100%;
  }
  
  .faq-grid {
    grid-template-columns: 1fr;
  }
  
  .faq-trigger {
    padding: 1rem 1.25rem;
    font-size: var(--text-base);
  }
  
  .faq-content p {
    padding: 0 1.25rem 1rem;
  }
  
  .unpack-section {
    padding: 2rem 1rem;
  }
  
  .unpack-container-secondary {
    margin-top: 1.5rem;
    padding-top: 1.5rem;
  }

  .unpack-container-wip {
    padding: 24px 16px 16px;
  }

  .wip-badge {
    top: 12px;
    right: 16px;
    font-size: 11px;
    padding: 3px 10px;
  }

  .unpack-motivation {
    padding: 1.5rem;
    margin: 1.5rem 0;
  }
  
  .unpack-motivation h4 {
    max-width: 100%;
  }
  
  .motivation-text,
  .motivation-highlight {
    font-size: var(--text-sm);
  }
  
  .unpack-subtitle {
    font-size: var(--text-base);
  }
  
  .unpack-toggle {
    gap: 0.5rem;
  }
  
  .toggle-slider {
    width: 45px;
    height: 27px;
  }
  
  .toggle-slider::before {
    width: 21px;
    height: 21px;
  }
  
  .unpack-toggle input:checked + .toggle-slider::before {
    transform: translateX(18px);
  }
  
  .unpack-container {
    padding: 1rem 0;
  }

  .unpack-container-secondary {
    margin-top: 1.5rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }

  .unpack-motivation {
    padding: 1rem;
  }

  .unpack-toggle-wrapper {
    margin: 0.75rem 0;
  }

  .unpack-toggle {
    padding: 0.75rem 1rem;
  }

  .toggle-text {
    font-size: 0.75rem;
  }
  
  .unpack-step {
    flex-direction: column;
    gap: 0.75rem;
    padding: 0;
    align-items: flex-start;
  }

  .step-number {
    width: 44px;
    height: 44px;
    font-size: 1.1rem;
    flex-shrink: 0;
    margin-bottom: 0.5rem;
  }

  .step-content {
    width: 100%;
    padding-left: 0;
  }

  .finish-btn {
    margin-left: 0;
    width: 100%;
    justify-content: center;
  }

  .step-content h3.step-title {
    font-size: 1.1rem;
    margin-bottom: 1rem;
    color: #111827;
    font-weight: 700;
  }

  .brief-intro {
    padding: 1rem 0;
  }

  .brief-intro-text {
    font-size: 0.9rem;
    margin-bottom: 1.5rem;
    color: #ffffff !important;
    line-height: 1.5;
    padding: 0 0.5rem;
  }

  .brief-info-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
    margin-top: 1.5rem;
  }

  .brief-info-item {
    gap: 0.75rem;
    padding: 0.75rem;
    background: rgba(0, 0, 0, 0.03);
    border-radius: 12px;
    border: 1px solid rgba(0, 0, 0, 0.05);
  }

  .brief-info-icon {
    width: 32px;
    height: 32px;
    flex-shrink: 0;
    color: #a78bfa;
  }

  .brief-info-content strong {
    font-size: 0.85rem;
    color: #111827;
    display: block;
    margin-bottom: 0.25rem;
  }

  .brief-info-content p {
    font-size: 0.8rem;
    color: #374151;
    line-height: 1.4;
    margin: 0;
  }

  .prompt-intro,
  .prompt-goal,
  .prompt-task {
    font-size: 0.9rem;
    color: #ffffff !important;
    line-height: 1.5;
    padding: 0 0.5rem;
  }

  .prompt-intro {
    margin-top: 1.5rem !important;
    margin-bottom: 1rem !important;
  }

  .prompt-goal {
    margin: 1rem 0;
    padding: 1rem;
    background: rgba(167, 139, 250, 0.1);
    border-radius: 12px;
    border: 1px solid rgba(167, 139, 250, 0.2);
  }

  .prompt-list {
    padding-left: 1rem !important;
    margin: 1rem 0;
  }

  .prompt-list li {
    font-size: 0.85rem;
    color: #ffffff !important;
    margin-bottom: 0.5rem;
    line-height: 1.4;
  }

  .prompt-box {
    padding: 1rem 0;
  }

  .question-block {
    padding: 1rem 0;
    margin-bottom: 1.5rem;
  }

  .block-title {
    font-size: 0.75rem;
    margin-bottom: 1rem;
    padding-bottom: 0.75rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    color: #a78bfa;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .question-item {
    margin-bottom: 1.25rem;
    padding: 1rem;
    background: rgba(0, 0, 0, 0.02);
    border-radius: 12px;
    border: 1px solid rgba(0, 0, 0, 0.05);
  }

  .question-item strong {
    font-size: 0.85rem;
    display: block;
    margin-bottom: 0.5rem;
    color: #111827;
    font-weight: 600;
  }

  .question-hint {
    font-size: 0.75rem;
    margin-bottom: 0.75rem;
    color: #6b7280;
    line-height: 1.4;
  }

  .question-input {
    font-size: 16px;
    padding: 0.875rem;
    width: 100%;
    background: rgba(0, 0, 0, 0.05);
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    color: #111827;
    resize: vertical;
  }

  .question-input::placeholder {
    color: rgba(0, 0, 0, 0.4);
  }

  .quiz-navigation {
    flex-direction: column;
    gap: 0.75rem;
    padding: 1rem 0;
    margin-top: 1rem;
  }

  .nav-btn {
    width: 100%;
    justify-content: center;
    font-size: 0.85rem;
    padding: 0.875rem 1.25rem;
    font-weight: 600;
    border-radius: 12px;
    transition: all 0.3s ease;
  }

  .nav-btn-next,
  .nav-btn-finish {
    background: rgba(0, 0, 0, 0.1);
    color: #111827;
    border: 1px solid rgba(0, 0, 0, 0.15);
    box-shadow: none;
  }

  .nav-btn-next:hover,
  .nav-btn-finish:hover {
    background: rgba(0, 0, 0, 0.15);
    border-color: rgba(0, 0, 0, 0.2);
    transform: translateY(-2px);
    box-shadow: none;
  }

  .nav-btn-copy {
    background: linear-gradient(135deg, #a78bfa, #e879f9);
    color: #111827;
    border: 1px solid rgba(167, 139, 250, 0.4);
    font-weight: 600;
    box-shadow: none;
  }

  .nav-btn-copy:hover {
    background: linear-gradient(135deg, #9367f5, #d95fe8);
    border-color: rgba(167, 139, 250, 0.5);
    transform: translateY(-2px);
    box-shadow: none;
  }

  .nav-btn-copy.copied {
    background: rgba(167, 139, 250, 0.3);
    border-color: rgba(167, 139, 250, 0.5);
    color: #c4b5fd;
  }

  .nav-btn-back {
    background: rgba(0, 0, 0, 0.1);
    color: #111827;
    border: 1px solid rgba(0, 0, 0, 0.1);
  }

  .nav-btn-back:hover {
    background: rgba(0, 0, 0, 0.15);
  }

  .nav-btn-next,
  .nav-btn-finish {
    margin-left: 0;
  }
  
  .system-title {
    line-height: var(--leading-tight);
  }
}
</style>
