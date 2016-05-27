<?php

$mailto = "eileencoyle1@gmail.com";

$author = $_POST['author'];
$fromaddress = $_POST['email'];
$phone = $_POST['phone'];
$date = $_POST['date'];
$location = $_POST['location'];
$source = $_POST['source'];
$body = $_POST['text'];

$message = $author." has sent an email:\r\n\r\n\r\nEmail:  ".$fromaddress."\r\n\r\nPhone:  ".$phone."\r\n\r\nDate:  ".$date."\r\n\r\nLocation:  ".$location.
"\r\n\r\nHow they heard about you:  ".$source.
"\r\n\r\nMessage:\r\n\r\n".
$body."\r\n";

$eol = "\r\n";

$headers .= 'From: '.$author.' <'.$fromaddress.'>'.$eol;
$headers .= 'Reply-To: '.$author.' <'.$fromaddress.'>'.$eol;
$headers .= 'Return-Path: '.$author.' <'.$fromaddress.'>'.$eol;
$headers .= "X-Mailer: PHP v".phpversion().$eol;
$headers .= 'MIME-Version: 1.0'.$eol;

ini_set(sendmail_from, $fromaddress);  // the INI lines are to force the From Address to be used !
$formsent = mail($mailto, 'Mail From EileenCoyle.com', $message, $headers);
ini_restore(sendmail_from);

if ($formsent) {
	echo "<h5>Thank you ".$author.",</h5><p>We have received your e-mail, and will respond promptly to your inquiry.</p>".'<img height="1" width="1" style="border-style:none;" alt="" src="//www.googleadservices.com/pagead/conversion/1000237847/?label=1moACMj-ulcQl9b53AM&amp;guid=ON&amp;script=0"/><br><a href="/">Go back to main site</a>';
}else{
	echo 'Sorry, there is a problem with your form. <a href="/contact.html">Please try again!.</a>';
	}
?>