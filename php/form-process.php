<?php
$errorMSG = "";
// NAME
if (empty($_POST["name"])) {
    $errorMSG = "Name is required";
} else {
    $name = $_POST["name"];
}
// PHONE
if (empty($_POST["phone"])) {
    $errorMSG = "Phone Number is required";
} else {
    $phone = $_POST["phone"];
}
// EMAIL
if (empty($_POST["email"])) {
    $errorMSG = "Email is required";
} else {
    $email = $_POST["email"];
}

$EmailTo = "yourdomain@gmail.com";
$Subject = "New Message From Hightower";
// prepare email body text
$Body = "";
$Body .= "Name: ";
$Body .= $name;
$Body .= "\n";
$Body .= "Phone Number: ";
$Body .= $phone;
$Body .= "\n";
$Body .= "Email: ";
$Body .= $email;
$Body .= "\n";
$Body .= "Message: ";
$Body .= $message;
$Body .= "\n";
// send email
$success = mail($EmailTo, $Subject, $Body, "From:".$email);
// redirect to success page
if ($success && $errorMSG == ""){
   echo "success";
}else{
    if($errorMSG == ""){
        echo "Something went wrong :(";
    } else {
        echo $errorMSG;
    }
}
?>
