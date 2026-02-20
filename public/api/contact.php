<?php
header('Content-Type: application/json; charset=utf-8');

if (!function_exists('json_encode')) {
    header('Content-Type: text/plain; charset=utf-8');
    echo 'JSON extension is not available';
    exit;
}

function respond($status, $payload)
{
    if (!headers_sent()) {
        http_response_code((int)$status);
    }
    echo json_encode($payload, JSON_UNESCAPED_UNICODE);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    respond(405, array('success' => false, 'message' => 'Method not allowed'));
}

$configPath = __DIR__ . '/config.php';
if (!file_exists($configPath)) {
    respond(500, array('success' => false, 'message' => 'SMTP config not found'));
}

$config = require $configPath;
if (!is_array($config)) {
    respond(500, array('success' => false, 'message' => 'SMTP config is invalid'));
}

$smtpUser = isset($config['smtp_user']) ? trim((string)$config['smtp_user']) : '';
$smtpPass = isset($config['smtp_pass']) ? trim((string)$config['smtp_pass']) : '';
$to = isset($config['to']) ? trim((string)$config['to']) : '';

if ($smtpUser === '' || $smtpPass === '' || $to === '') {
    respond(500, array('success' => false, 'message' => 'SMTP config is invalid'));
}

$raw = file_get_contents('php://input');
$input = json_decode($raw ? $raw : '', true);
if (!is_array($input)) {
    respond(400, array('success' => false, 'message' => 'Invalid JSON'));
}

$name = isset($input['name']) ? trim((string)$input['name']) : '';
$email = isset($input['email']) ? trim((string)$input['email']) : '';
$message = isset($input['message']) ? trim((string)$input['message']) : '';

if ($name === '') {
    respond(422, array('success' => false, 'message' => 'Имя обязательно'));
}

if ($email === '' || !preg_match('/^[^\s@]+@[^\s@]+\.[^\s@]+$/', $email)) {
    respond(422, array('success' => false, 'message' => 'Некорректный email'));
}

require_once __DIR__ . '/PHPMailer/src/Exception.php';
require_once __DIR__ . '/PHPMailer/src/PHPMailer.php';
require_once __DIR__ . '/PHPMailer/src/SMTP.php';

try {
    $mail = new \PHPMailer\PHPMailer\PHPMailer(true);
    $mail->isSMTP();
    $mail->Host = 'smtp.yandex.ru';
    $mail->SMTPAuth = true;
    $mail->Username = $smtpUser;
    $mail->Password = $smtpPass;
    $mail->SMTPSecure = 'ssl';
    $mail->Port = 465;
    $mail->CharSet = 'UTF-8';
    $mail->Encoding = 'base64';

    $mail->setFrom($smtpUser);
    $mail->addAddress($to);
    $mail->Subject = 'Новое сообщение с сайта';

    $safeName = htmlspecialchars($name, ENT_QUOTES, 'UTF-8');
    $safeEmail = htmlspecialchars($email, ENT_QUOTES, 'UTF-8');
    $safeMessage = nl2br(htmlspecialchars($message, ENT_QUOTES, 'UTF-8'));

    $mail->isHTML(true);
    $mail->Body = '<h2>Новое сообщение с сайта</h2>'
        . '<p><strong>Имя:</strong> ' . $safeName . '</p>'
        . '<p><strong>Email:</strong> ' . $safeEmail . '</p>'
        . '<p><strong>Сообщение:</strong><br>' . $safeMessage . '</p>';

    $mail->AltBody = "Имя: {$name}\nEmail: {$email}\nСообщение: {$message}";

    $mail->send();

    respond(200, array('success' => true));
} catch (\PHPMailer\PHPMailer\Exception $e) {
    respond(500, array('success' => false, 'message' => $e->getMessage()));
} catch (\Exception $e) {
    respond(500, array('success' => false, 'message' => $e->getMessage()));
}
