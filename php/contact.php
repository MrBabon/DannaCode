<?php
    header('Content-Type: application/json');
    $array = array(
        "firstname" => verifyInput($_POST["firstname"]),
        "name" => verifyInput($_POST["name"]),
        "email" => verifyInput($_POST["email"]),
        "phone" => verifyInput($_POST["phone"]),
        "message" => verifyInput($_POST["message"]),
        "firstnameError" => "",
        "nameError" => "",
        "emailError" => "",
        "phoneError" => "",
        "messageError" => "",
        "isSuccess" => true
    );
    $emailTo = "contact@dannacode.com";
    $emailText = "";
    $fields = array("firstname", "name", "email", "phone", "message");
    
    foreach ($fields as $field) {
        if (empty($array[$field])) {
            $array[$field . "Error"] = "Le champ $field est obligatoire";
            $array["isSuccess"] = false;
        } else {
            $emailText .= ucfirst($field) . ": {$array[$field]}\n";
        }
    }
        

        
        
        if($array["isSuccess"])
        {
            $headers = "From: {$array["firstname"]} {$array["name"]} <{$array["email"]}>\r\nReply-To: {$array["email"]}\r\nX-Originating-IP: {$_SERVER['REMOTE_ADDR']}";
            mail($emailTo,"Un message de votre site www.dannacode.com", $emailText , $headers);
            

        }
        

        echo json_encode($array);
    
    
    function isPhone($var)
    {
        return preg_match("/^[0-9 ]*$/", $var);
    }

    function isEmail($var)
    {
        return filter_var($var, FILTER_VALIDATE_EMAIL);

    }
    // POUR SECURISER LE SITE

    function verifyInput($var)
    {
        return htmlspecialchars(stripslashes(trim($var)));
    }
?>
