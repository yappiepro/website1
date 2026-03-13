<?php
/**
 * Telegram Form Handler
 * Отправляет заявки с сайта в Telegram
 * 
 * Разместить на Beget: /api/telegram.php
 */

// Разрешаем CORS для GitHub Pages
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: https://artemselifanov.ru');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// Preflight запрос (браузер проверяет CORS)
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Только POST запросы
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    exit(json_encode(['error' => 'Method not allowed']));
}

// Токен и Chat ID (хранятся на сервере!)
$BOT_TOKEN = '6765466291:AAEUbSdrHjviCqM8Nj-36I16lJ1UYseF-jw';
$CHAT_ID = '151457626';

// Получаем данные из формы
$data = json_decode(file_get_contents('php://input'), true);

// Проверка обязательных полей
if (empty($data['email']) || empty($data['message'])) {
    http_response_code(400);
    exit(json_encode(['error' => 'Email и сообщение обязательны']));
}

// Формируем сообщение
$message = "📨 Новая заявка с artemselifanov.ru\n\n";
$message .= "📧 Email: " . htmlspecialchars($data['email']) . "\n";
$message .= "👤 Имя: " . htmlspecialchars($data['name'] ?? 'Не указано') . "\n";
$message .= "💬 Сообщение:\n" . htmlspecialchars($data['message']);
$message .= "\n\n🕐 " . date('d.m.Y H:i');

// Отправляем в Telegram
$ch = curl_init("https://api.telegram.org/bot{$BOT_TOKEN}/sendMessage");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode([
    'chat_id' => $CHAT_ID,
    'text' => $message
]));
curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);

$result = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

// Ответ клиенту
if ($httpCode === 200) {
    echo json_encode(['success' => true]);
} else {
    http_response_code(500);
    echo json_encode(['error' => 'Ошибка отправки в Telegram']);
}
?>
