<?php
  use PHPMailer\PHPMailer\PHPMailer;
  use PHPMailer\PHPMailer\Exception;

  require './PHPMailer/src/Exception.php';
  require './PHPMailer/src/PHPMailer.php';

  $mail =  new PHPMailer(true);
  $mail->Charset = 'UTF-8';
  $mail->setLanguage('ru', './PHPMailer/language/');
  $mail->IsHTML(true);

  $mail->setFrom('test@epsilontek.ru', 'Форма');

  $mail->addAddress('sh_ark@mail.ru');

  $mail->Subject = 'Тестовое сообщение';

  $body = '<h1>Тестовое сообщение</h1>';

  if(trim(!empty($_POST['email']))){
    $body.='<p><strong>Сообщение:</strong> '.$_POST['email'].'</p>';
  }

  if(trim(!empty($_POST['message']))){
    $body.='<p><strong>Сообщение:</strong> '.$_POST['message'].'</p>';
  }

  $mail->Body = $body;

  if (!$mail->send()) {
    $message = 'Ошибка';

  } else {
    $message = 'Данные отправлены';
  }

  $response = $message;

  header('Content-type: application/json');
  echo json_encode($response);


?>