<?php
    header('Content-Type: application/json');
    $array = array("firstname" => "", "name" => "", "email" => "", "phone" => "", "message" => "", "firstnameError" => "", "nameError" => "", "emailError" => "", "phoneError" => "", "messageError" => "", "isSuccess" => false);

    $emailTo = "contact@dannacode.com";
    
    if($_SERVER["REQUEST_METHOD"] == "POST")
    {
        $array["firstname"] = verifyInput($_POST["firstname"]);
        $array["name"] = verifyInput($_POST["name"]);
        $array["email"] = verifyInput($_POST["email"]);
        $array["phone"] = verifyInput($_POST["phone"]);
        $array["message"] = verifyInput($_POST["message"]);
        $array["isSuccess"] = true;
        $emailText = "";

        if(empty($array["firstname"]))
        {
            $array["firstnameError"] = "Je veux connaitre votre prénom !";
            $array["isSuccess"] = false;

        }
        else
            $emailText .= "Prénom:{$array["firstname"]}\n";

        if(empty($array["name"]))
        {
            $array["nameError"] = "Je veux connaitre votre nom !";
            $array["isSuccess"] = false;
            
        }
        else
            $emailText .= "Nom: {$array["name"]}\n";

        if(!isEmail($array["email"]))
        {
            $array["emailError"] = "J'ai besoin de votre email";
            $array["isSuccess"] = false;
                
        }
        else
        $emailText .= "Email: {$array["email"]}\n";
        
        if(!isPhone($array["phone"]))
        {
            $array["phoneError"] = "Que des chiffres et des espaces";
            $array["isSuccess"] = false;
        }
        else
        $emailText .= "Téléphone: {$array["phone"]}\n";

        if(empty($array["message"]))
        {
            $array["messageError"] = "Vous souhaitez me dire quoi ?";
            $array["isSuccess"] = false;
            
        }
        else
            $emailText .= "Message: {$array["message"]}\n";

        

        
        
        if($array["isSuccess"])
        {
            $headers = "From: {$array["firstname"]} {$array["name"]} <{$array["email"]}>\r\nReply-To: {$array["email"]}\r\nX-Originating-IP: {$_SERVER['REMOTE_ADDR']}";
            mail($emailTo,"Un message de votre site www.dannacode.com", $emailText , $headers);
            

        }
        

        echo json_encode($array);
        

    }
    
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
        $var = trim($var);
        $var = stripslashes($var);
        $var = htmlspecialchars($var);
        return $var;
    }
?>
