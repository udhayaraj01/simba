<?php

if (!isset($_POST['career_detail'])) {

    $name = $_POST["name"];

    $email = $_POST["email"];

    $phone = $_POST["phone"];
    
    $mail_from = $email;

    $mail_to = "raandroidi7@gmail.com";

    $subject = 'Message from a site visitor ' . $name;


    $body_message = "";

    $body_message = 'Name: ' . $name . "\n";

    $body_message .= 'Mobile: ' . $phone . "\n";

    $body_message .= 'Email: ' . $email . "\n";
    
    $headers = 'From: ' . $mail_from . "\r\n";

    $headers .= 'Reply-To: ' . $email . "\r\n";

    $mail_status = mail($mail_to, $subject, $body_message, $headers);

    if ($mail_status) {

        echo "success";
    } else {

        echo "error";
    }
}

?>