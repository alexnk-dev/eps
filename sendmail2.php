<?php


  require './PHPMailer/src/Exception.php';
  require './PHPMailer/src/PHPMailer.php';
  require './PHPMailer/src/SMTP.php';

  use PHPMailer\PHPMailer\PHPMailer;
  use PHPMailer\PHPMailer\Exception;
  use PHPMailer\PHPMailer\SMTP;

  //ini_set('display_errors', 'On');
  //error_reporting('E_ALL');

  //$name = $_POST['name'];
  //$company = $_POST['company'];
  $email = $_POST['email'];
  //$phone = $_POST['phone'];
  $text = $_POST['text'];
  //$agreement = $_POST['agreement'];
  //$h1 = $_POST['title'];
  // $file = $_FILES['myfile'];
  //echo $email;
  //echo $agreement;
  //echo $text;
//<h3>Имя: $name</h3>
//  <h3>Компания: $company</h3>
//<h3>Телефон: $phone</h3>
  $title = "Контакты - сообщение";
  $body = "
  <h2></h2>
  <h3>Почта: $email</h3>
  <h3>Сообщение:</h3>$text<br>
  ";


  //$mail =  new PHPMailer(true);
  //require 'PHPMailerAutoload.php';
  $mail = new PHPMailer();
  $mail->isSMTP();
  $mail->SMTPDebug = SMTP::DEBUG_LOWLEVEL;
  $mail->Host = "tls://smtp.gmail.com";
  $mail->Port = 587;
  // $mail->SMTPSecure = 'ssl';
  // $mail->SMTPAuth = true;
  // $mail->Host = "smtp.yandex.ru";
  // $mail->Port = 465;
  $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
  // $mail->SMTPAuth = true;
  // $mail->SMTPOptions = array (
  //   'ssl' => array(
  //   'verify_peer' => false,
  //   'verify_peer_name' => false,
  //   'allow_self_signed' => true)
  //   );
  // $mail->Username = "epsilontek.ru";
  // $mail->Password = "Galaxy@S21";

  $mail->Username = "alexnk.dev@gmail.com";
  $mail->Password = "IPhone11Pro";
  

  $mail->CharSet = "UTF-8";
  $mail->setLanguage('ru', './PHPMailer/language/phpmailer.lang-ru.php');
  
  // if (!$phone) { 
  // $mail->setFrom('form1@epsilontek.ru', 'Epsilontek.footer');
  // } else {
  // $mail->setFrom('contacts@epsilontek.ru', 'Epsilontek.contacts');
  // }

  if (!$phone) { 
  $mail->setFrom('alexnk.dev@gmail.com', 'Epsilontek.footer');
  } else {
  $mail->setFrom('alexnk.dev@gmail.com', 'Epsilontek.contacts');
  }

  $mail->addAddress('alexnikolayev.dev@gmail.com');
  $mail->addAddress('sh_ark@mail.ru');
  $mail->addAddress('info@epsilontek.ru');
  $mail->addAddress('hasanovroman@list.ru');
  

  // Отправка сообщения
  $mail->isHTML(true);
  // $mail->SMTPDebug = 2;
  $mail->Subject = $title;
  $mail->Body = $body;    
  
  try {
    $mail->send();
    $message = 'Data send';
    echo "Message has been sent succesfully";

  } catch (Exception $e) {
    echo "Mailer Error: " . $mail->ErrorInfo;
  //  $message = 'Data not send';
  }

  $response = $message;
  //var_dump($response);
  header('Content-type: application/json');
  echo json_encode($response);
  


?>