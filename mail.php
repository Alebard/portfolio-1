<?php
// Проверяем тип запроса, обрабатываем только POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Получаем параметры, посланные с javascript
    $name = $_POST['name'];
    $service = $_POST['service'];
    $datepicker = $_POST['datepicker'];
    $tel = $_POST['tel'];
    $master = $_POST['master'];
    $times = $_POST['times'];

    // создаем переменную с содержанием письма
    $content = $name . ' оставил заявку на посещение салона для получения услуги ' . $service . ' мастером ' . $master . ' в '. $times . $datepicker . '. Его телефон: ' . $tel;

    $headers  = 'MIME-Version: 1.0' . "\r\n";
    $headers .= 'Content-type: text/html; charset=UTF-8' . "\r\n";

    // Первый параметр - кому отправляем письмо, второй - тема письма, третий - содержание
    $success = mail("admin@barbershop.com", 'Запрос на посещение салона', $content, $headers);

    if ($success) {
        // Отдаем 200 код ответа на http запрос
        http_response_code(200);
        echo "Письмо отправлено";
    } else {
        // Отдаем ошибку с кодом 500 (internal server error).
        http_response_code(500);
        echo "Письмо не отправлено";
    }

} else {
    // Если это не POST запрос - возвращаем код 403 (действие запрещено)
    http_response_code(403);
    echo "Данный метод запроса не поддерживается сервером";
}