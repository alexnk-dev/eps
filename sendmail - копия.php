<?php
  use PHPMailer\PHPMailer\PHPMailer;
  use PHPMailer\PHPMailer\Exception;

  require './PHPMailer/src/Exception.php';
  require './PHPMailer/src/PHPMailer.php';

  $name = $_POST['name'];
  $company = $_POST['company'];
  $email = $_POST['email'];
  $phone = $_POST['phone'];
  $text = $_POST['text'];
  // $file = $_FILES['myfile'];

  $title = "Контакты - сообщение";
  $body = "
  <h2></h2>
  <h3>Имя: $name</h3>
  <h3>Компания: $company</h3>
  <h3>Почта: $email</h3>
  <h3>Телефон: $phone</h3>
  <h3>Сообщение:</h3>$text<br>
  ";


  $mail =  new PHPMailer(true);
  $mail->CharSet = "UTF-8";
  // $mail->setLanguage('ru', './PHPMailer/language/phpmailer.lang-ru.php');
  
  if (!$phone) { 
  $mail->setFrom('form1@epsilontek.ru', 'Epsilontek.footer');
  } else {
  $mail->setFrom('contacts@epsilontek.ru', 'Epsilontek.contacts');
  }
  $mail->addAddress('sh_ark@mail.ru');
  $mail->addAddress('info@epsilontek.ru');
  $mail->addAddress('hasanovroman@list.ru');
  

  // Отправка сообщения
  $mail->isHTML(true);
  $mail->Subject = $title;
  $mail->Body = $body;    

  if (!$mail->send()) {
    $message = 'Ошибка';

  } else {
    $message = 'Данные отправлены';
  }

  $response = $message;
  var_dump($response);

  header('Content-type: application/json');
  echo json_encode($response);


?>