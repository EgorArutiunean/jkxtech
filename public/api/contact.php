<?php

declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');

function respond(int $status, array $payload): void
{
    http_response_code($status);
    echo json_encode($payload, JSON_UNESCAPED_UNICODE);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    respond(405, ['success' => false, 'message' => 'Method not allowed']);
}

$configPath = __DIR__ . '/config.php';
if (!file_exists($configPath)) {
    respond(500, ['success' => false, 'message' => 'SMTP config not found']);
}

$config = require $configPath;
if (!is_array($config) || empty($config['smtp_user']) || empty($config['smtp_pass']) || empty($config['to'])) {
    respond(500, ['success' => false, 'message' => 'SMTP config is invalid']);
}

$raw = file_get_contents('php://input');
$input = json_decode($raw ?: '', true);
if (!is_array($input)) {
    respond(400, ['success' => false, 'message' => 'Invalid JSON']);
}

$name = trim((string)($input['name'] ?? ''));
$email = trim((string)($input['email'] ?? ''));
$message = trim((string)($input['message'] ?? ''));

if ($name === '') {
    respond(422, ['success' => false, 'message' => 'Имя обязательно']);
}

if ($email === '' || !preg_match('/^[^\s@]+@[^\s@]+\.[^\s@]+$/', $email)) {
    respond(422, ['success' => false, 'message' => 'Некорректный email']);
}

require_once __DIR__ . '/PHPMailer/src/Exception.php';
require_once __DIR__ . '/PHPMailer/src/PHPMailer.php';
require_once __DIR__ . '/PHPMailer/src/SMTP.php';

try {
    $mail = new \PHPMailer\PHPMailer\PHPMailer(true);
    $mail->isSMTP();
    $mail->Host = 'smtp.yandex.ru';
    $mail->SMTPAuth = true;
    $mail->Username = (string)$config['smtp_user'];
    $mail->Password = (string)$config['smtp_pass'];
    $mail->SMTPSecure = \PHPMailer\PHPMailer\PHPMailer::ENCRYPTION_SMTPS;
    $mail->Port = 465;
    $mail->CharSet = 'UTF-8';
    $mail->Encoding = 'base64';

    $from = (string)$config['smtp_user'];
    $to = (string)$config['to'];

    $mail->setFrom($from);
    $mail->addAddress($to);
    $mail->Subject = 'Новое сообщение с сайта';

    $safeName = htmlspecialchars($name, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
    $safeEmail = htmlspecialchars($email, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
    $safeMessage = nl2br(htmlspecialchars($message, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8'));

    $mail->isHTML(true);
    $mail->Body = '<h2>Новое сообщение с сайта</h2>'
        . '<p><strong>Имя:</strong> ' . $safeName . '</p>'
        . '<p><strong>Email:</strong> ' . $safeEmail . '</p>'
        . '<p><strong>Сообщение:</strong><br>' . $safeMessage . '</p>';

    $mail->AltBody = "Имя: {$name}\nEmail: {$email}\nСообщение: {$message}";

    $mail->send();

    respond(200, ['success' => true]);
} catch (\Throwable $e) {
    respond(500, ['success' => false, 'message' => $e->getMessage()]);
}
