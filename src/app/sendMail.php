<?php

switch ($_SERVER['REQUEST_METHOD']) {
    case ("OPTIONS"): //Allow preflighting to take place.
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Methods: POST");
        header("Access-Control-Allow-Headers: content-type");
        exit;
        case("POST"): //Send the email;
            header("Access-Control-Allow-Origin: *");
            // Payload is not send to $_POST Variable,
            // is send to php:input as a text
            $json = file_get_contents('php://input');
            //parse the Payload from text format to Object
            $params = json_decode($json);
    
            $email = $params->email;
            $name = $params->name;
            $message = $params->message;
            $checkbox = $params->checkbox;
    
            $recipient = 'anita.gasteiner@posteo.de';
            $subject = "Contact From <$email>";
            $message = "From:" . $name . "<br>" . $message . "<br> Checkbox:" . $checkbox;
    
            $headers   = array();
            $headers[] = 'MIME-Version: 1.0';
            $headers[] = 'Content-type: text/html; charset=utf-8';

            // Additional headers
            $headers[] = "From: noreply@anita-gasteiner.at";

            // Send the email
            mail($recipient, $subject, $message, implode("\r\n", $headers));

            // Preparing auto-reply
            $subject_reply = "Danke für Ihre Nachricht! || Thank you for your message!";
            $message_reply = "Sehr geehrte*r " . $name . ",<br><br>danke, dass Sie mich kontaktiert haben! Ich habe Ihre Nachricht erhalten und werde mich in Kürze bei Ihnen melden.<br><br>Mit freundlichen Grüßen,<br>Anita Gasteiner<br>_____<br><br>Hello " . $name . ",<br><br>thank you for contacting me! I have received your message and will get back to you shortly.<br><br>Best regards,<br>Anita Gasteiner";

            $headers_reply   = array();
            $headers_reply[] = 'MIME-Version: 1.0';
            $headers_reply[] = 'Content-type: text/html; charset=utf-8';
            $headers_reply[] = "From: noreply@anita-gasteiner.at";

            // Send auto-reply
            mail($email, $subject_reply, $message_reply, implode("\r\n", $headers_reply));
            break;
            default: //Reject any non POST or OPTIONS requests.
            header("Allow: POST", true, 405);
            exit;
    } 
