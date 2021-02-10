<?php

    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require 'PHPMailer/src/Exception.php';
    require 'PHPMailer/src/PHPMailer.php';
    require 'PHPMailer/src/SMTP.php';

    $name = $_POST['Name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];
    
    $resultado = $name;

    

    $mail = new PHPMailer(true);

try {
    //Server settings
                        
    $mail->isSMTP();                                            
    $mail->Host       = 'smtp.gmail.com';                   
    $mail->SMTPAuth   = true;                                  
    $mail->Username   = 'sendcontac@gmail.com';                    
    $mail->Password   = '!Z$%28*TRgw';                            
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         
    $mail->Port       = 587;                                   

    //Recipients 
    $mail->setFrom('sendcontac@gmail.com', 'Destinatario');
    $mail->addAddress('lucasmeira12@outlook.com', 'remetente');     
   

    // Content
    $mail->isHTML(true);                                 
    $mail->Subject = $subject . " ". $email;
    $mail->Body    = "Name:".$name."<br>"."Email:".$email."<br>".$message;
    $mail->AltBody = "Name:".$name." "."Email:".$email." ".$message ;

    $mail->send();
    echo 'Message has been sent';
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}

?>