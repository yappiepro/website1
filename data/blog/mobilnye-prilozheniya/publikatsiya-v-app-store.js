export default {
  slug: 'publikatsiya-v-app-store',
  title: 'Как опубликовать приложение в App Store и Google Play: полное руководство',
  description:
    'Пошаговое руководство по публикации мобильного приложения в App Store и Google Play в 2026 году: требования, процесс, типичные ошибки.',
  category: 'Мобильные приложения',
  cluster: 'mobilnye-prilozheniya',
  date: '2026-04-09',
  image: '/images/blog/mobilnye-prilozheniya/publikatsiya-v-app-store-og.svg',
  content: `
<p>Вы создали приложение. Протестировали. Исправили баги. И тут начинается самое интересное — публикация в App Store и Google Play.</p>

<p>Каждый стор — это свои правила, требования, ревью и подводные камни. Разберём весь процесс от регистрации аккаунта до одобрения.</p>

<h2>Подготовка к публикации</h2>

<p>Прежде чем загружать приложение, подготовьте:</p>

<div class="table-wrapper"><table>
<thead>
<tr><th>Что нужно</th><th>App Store</th><th>Google Play</th></tr>
</thead>
<tbody>
<tr><td>Аккаунт разработчика</td><td>$99/год (Apple Developer)</td><td>$25 (разово, Google Play Console)</td></tr>
<tr><td>Иконка приложения</td><td>1024×1024 px</td><td>512×512 px</td></tr>
<tr><td>Скриншоты</td><td>6.5" и 5.5" (мин. 2 на каждый)</td><td>Мин. 2, до 8 скриншотов</td></tr>
<tr><td>Описание</td><td>До 4000 символов</td><td>До 4000 символов</td></tr>
<tr><td>Краткое описание</td><td>До 170 символов</td><td>До 80 символов</td></tr>
<tr><td>Политика конфиденциальности</td><td>Обязательно (URL)</td><td>Обязательно (URL)</td></tr>
<tr><td>Возрастной рейтинг</td><td>Заполняется в App Store Connect</td><td>Опросник в Google Play Console</td></tr>
<tr><td>Информация о данных</td><td>App Privacy (что собираете)</td><td>Data Safety (что собираете)</td></tr>
</tbody>
</table></div>

<h2>Публикация в Google Play</h2>

<h3>Шаг 1. Регистрация Google Play Console</h3>

<ol>
<li>Перейдите на <a href="https://play.google.com/console/" target="_blank">play.google.com/console</a></li>
<li>Войдите через Google-аккаунт</li>
<li>Оплатите регистрационный взнос $25 (разово)</li>
<li>Заполните данные разработчика (имя, email, сайт)</li>
</ol>

<h3>Шаг 2. Создание приложения</h3>

<ol>
<li>Нажмите «Создать приложение»</li>
<li>Укажите название, язык, тип (приложение/игра)</li>
<li>Заполните разделы:
  <ul>
    <li><strong>Цена и распространение:</strong> бесплатно или платно, страны</li>
    <li><strong>Контент приложения:</strong> возрастной рейтинг (опросник)</li>
    <li><strong>Безопасность данных:</strong> какие данные собираете, как используете</li>
    <li><strong>Реклама:</strong> есть ли реклама в приложении</li>
  </ul>
</li>
</ol>

<h3>Шаг 3. Подготовка билда</h3>

<ul>
<li>Соберите <strong>Android App Bundle (.aab)</strong> — не APK</li>
<li>Подпишите приложение ключом (keystore)</li>
<li>Убедитесь, что <code>versionCode</code> и <code>versionName</code> указаны</li>
<li>Google Play App Signing включён (обязательно для новых приложений)</li>
</ul>

<h3>Шаг 4. Тестирование</h3>

<p>Перед публикацией — запустите тестирование:</p>

<ul>
<li><strong>Internal Testing:</strong> до 100 тестировщиков (по email)</li>
<li><strong>Closed Testing:</strong> ограниченная группа</li>
<li><strong>Open Testing:</strong> публичная бета-версия</li>
</ul>

<p>Google рекомендует минимум 14 дней тестирования перед продакшном.</p>

<h3>Шаг 5. Публикация</h3>

<ol>
<li>Загрузите .aab в раздел «Продакшн»</li>
<li>Заполните описание, скриншоты, иконку</li>
<li>Нажмите «Отправить на ревью»</li>
<li>Ждите одобрения (обычно 1–3 дня, иногда до 7 дней)</li>
</ol>

<h2>Публикация в App Store</h2>

<h3>Шаг 1. Регистрация Apple Developer</h3>

<ol>
<li>Перейдите на <a href="https://developer.apple.com/" target="_blank">developer.apple.com</a></li>
<li>Зарегистрируйтесь как индивидуальное лицо или организация</li>
<li>Оплатите $99/год</li>
<li><strong>Важно для России в 2026:</strong> оплата через российские карты не работает. Используйте карту иностранного банка или посредника (МТС, некоторые сервисы помогают)</li>
</ol>

<h3>Шаг 2. Подготовка в Xcode</h3>

<ul>
<li>Соберите архив через <strong>Product → Archive</strong></li>
<li>Убедитесь, что <strong>Build Version</strong> и <strong>Version</strong> указаны</li>
<li>Проверьте через <strong>Validate App</strong> перед отправкой</li>
<li><strong>Важно:</strong> с апреля 2026 года все приложения должны быть собраны через Xcode 26+ с SDK последних платформ</li>
</ul>

<h3>Шаг 3. App Store Connect</h3>

<ol>
<li>Войдите в <a href="https://appstoreconnect.apple.com/" target="_blank">appstoreconnect.apple.com</a></li>
<li>Создайте новое приложение</li>
<li>Заполните:
  <ul>
    <li><strong>Информация:</strong> название, SKU, Bundle ID</li>
    <li><strong>Цена и доступность:</strong> бесплатно/платно, страны</li>
    <li><strong>Версия приложения:</strong> описание, скриншоты, иконка</li>
    <li><strong>Конфиденциальность:</strong> какие данные собираете</li>
    <li><strong>Возрастной рейтинг:</strong> опросник по категориям контента</li>
  </ul>
</li>
</ol>

<h3>Шаг 4. TestFlight (бета-тест)</h3>

<ul>
<li><strong>Internal Testing:</strong> до 100 членов команды</li>
<li><strong>External Testing:</strong> до 10 000 тестировщиков (по ссылке)</li>
</ul>

<p>External Testing требует ревью Apple (1–2 дня). Internal — без ревью.</p>

<h3>Шаг 5. Отправка на ревью</h3>

<ol>
<li>Загрузите билд через Xcode или Transporter</li>
<li>Выберите билд в App Store Connect</li>
<li>Заполните информацию о версии</li>
<li>Отправьте на ревью</li>
<li>Ждите (обычно 24–48 часов)</li>
</ol>

<p><strong>Частые причины отклонения:</strong></p>

<ul>
<li>Баги и вылеты (Guideline 2.1)</li>
<li>Неполная информация о конфиденциальности (Guideline 5.1)</li>
<li>Некорректные покупки (Guideline 3.1)</li>
<li>Несоответствие описанию (Guideline 2.1)</li>
<li>Скрытые функции (Guideline 2.5)</li>
</ul>

<h2>Сравнение процессов</h2>

<div class="table-wrapper"><table>
<thead>
<tr><th>Параметр</th><th>Google Play</th><th>App Store</th></tr>
</thead>
<tbody>
<tr><td>Стоимость</td><td>$25 (разово)</td><td>$99/год</td></tr>
<tr><td>Время ревью</td><td>1–3 дня (иногда 7)</td><td>24–48 часов</td></tr>
<tr><td>Формат</td><td>AAB (App Bundle)</td><td>IPA (через Xcode)</td></tr>
<tr><td>OTA-обновления</td><td>Да (CodePush для RN)</td><td>Нет</td></tr>
<tr><td>Строгость ревью</td><td>Мягче</td><td>Строже</td></tr>
<tr><td>Оплата из России</td><td>Работает</td><td>Не работает (нужен посредник)</td></tr>
</tbody>
</table></div>

<h2>Типичные ошибки при публикации</h2>

<p><strong>Неполная информация о данных.</strong> Если вы собираете email, местоположение или аналитику — укажите это в App Privacy / Data Safety. Неполнота = отклонение.</p>

<p><strong>Отсутствует политика конфиденциальности.</strong> Обязательна для обоих сторов. Без неё — отклонение.</p>

<p><strong>Приложение вылетает.</strong> Протестируйте на минимум 5 устройствах перед отправкой. Один краш — и ревью отклонён.</p>

<p><strong>Скриншоты не по размеру.</strong> App Store требует скриншоты конкретных размеров. Неправильный размер = отклонение.</p>

<p><strong>Забыли обновить версию.</strong> Если отправляете обновление — <code>versionCode</code> (Android) и <strong>Build Number</strong> (iOS) должны быть выше предыдущей.</p>

<div class="cta-block">
<p><strong>Нужна помощь с публикацией?</strong></p>
<p>Подготовлю приложение, заполню все формы, пройдусь по ревью. С обоих сторов — App Store и Google Play.</p>
<a href="https://t.me/artemselifanov" target="_blank" class="cta-button">
  Получить помощь
</a>
<p><small>Консультация бесплатна. Отвечаю в течение 2 часов.</small></p>
</div>

<h2>Что делать после публикации</h2>

<ul>
<li><strong>Мониторьте отзывы:</strong> отвечайте на негативные, благодарите за позитивные</li>
<li><strong>Следите за крашами:</strong> Firebase Crashlytics, Sentry</li>
<li><strong>Обновляйте регулярно:</strong> каждые 2–4 недели</li>
<li><strong>ASO (App Store Optimization):</strong> оптимизируйте название, описание, скриншоты для поиска в сторах</li>
<li><strong>Собирайте метрики:</strong> установки, retention, конверсия</li>
</ul>

<h2>Итог</h2>

<p>Публикация — не финиш, а старт. Подготовьте все материалы заранее, пройдите тестирование, заполните информацию о данных — и получите одобрение с первого раза.</p>

<p>Google Play — проще и дешевле. App Store — строже, но необходим для iOS-аудитории. Публикуйте в обоих — для максимального охвата.</p>

<h2>Источники</h2>

<ul>
<li><a href="https://www.inspiringapps.com/blog/how-to-submit-app-to-google-play-store" target="_blank">Inspiring Apps — How To Submit an Android App to Google Play Store (2026)</a></li>
<li><a href="https://vc.ru/id5677533/2796078-kak-opublikovat-prilozhenie-v-app-store-iz-rossii" target="_blank">VC.ru — Как опубликовать приложение в App Store из России в 2026</a></li>
<li><a href="https://www.theasoproject.com/blog/apple-sets-new-app-store-submission-requirement-for-2026/" target="_blank">The ASO Project — Apple Sets New App Store Submission Requirement for 2026</a></li>
<li><a href="https://kokoc.com/blog/kak-sozdat-mobilnoe-prilozhenie/" target="_blank">Kokoc — Как создать мобильное приложение за 13 шагов</a></li>
</ul>

<div class="article-nav">
<p><strong>Читать далее:</strong> <a href="/blog/monetizatsiya-mobilnogo-prilozheniya">Монетизация мобильного приложения: модели и стратегии →</a></p>
<p><strong>Назад:</strong> <a href="/blog/pwa-prilozhenie">← PWA: что такое прогрессивное веб-приложение</a></p>
</div>
`,
}
