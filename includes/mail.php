
<?php
session_start();
if(isset($_SESSION['lang'])){
	include_once "../lang/lang_".$_SESSION['lang'].".php";
}else{
	include_once "../lang/lang_ua.php";
}
$url = "http://m.tourmix.com.ua/index.php"; //Ваша страница, где вы будете ставить форму обратной связи.
$title = $_SERVER['HTTP_REFERER']; //адрес вашего сайта
$subject = "Письмо со страницы $title"; //Тема отправляемых вам сообщений
$admail = "info@tourmix.com.ua"; //Ваш e-mail, на который будут отправляться письма
//$back = "<p><a href=\"javascript: history.back()\">Назад</a></p>";

$nick = $_POST['nick'];
$email = strtolower($_POST['email']);
$delivery = $_POST['delivery'];
$delivery1 = $_POST['delivery1'];
$msg = $_POST['msg'];
$tel = $_POST['tel'];
$name = '';
$content = '';

if($delivery1 == ''){
	$error = 'Убедитесь, что вы выбрали тему сообщения!';
	$name = 'delivery1';
}
else if($delivery == ''){
	$error = 'Убедитесь, что вы выбрали страну путешествия!';
	$name = 'delivery';
}
else if($msg == ''){
	$error = 'Убедитесь, что вы ввели текст сообщения!';
	$name = 'msg';
}
else if($nick == ''){
	$error = 'Убедитесь, что вы ввели свое имя!';
	$name = 'nick';
}
else if($tel == ''){
	$error = 'Убедитесь, что вы ввели свой номер телефона!';
	$name = 'tel';
}
else if(!preg_match("/[0-9]{7,10}/", $tel)){
	$error = "Убедитесь, что вы ввели корректный номер телефона!\nФормат написания номера мобильного или междугороднего телефона: 0672222222\nФормат написания номера прямого телефона: 2222222";
	$name = 'tel';
}
else if($email == ''){
	$error = 'Убедитесь, что вы ввели свой E-mail!';
	$name = 'email';
}
else if(!preg_match("/^[a-z0-9\._-]+@[a-z0-9\._-]+\.[a-z]{2,4}/", $email)){
	$error = 'Убедитесь, что вы ввели корректный E-mail!';
	$name = 'email';
}
else {
	$content = "\n   
Пользователь: $nick\n
Телефон: $tel\n
Адресс: $email\n
Отправил(а) вам письмо со страницы: $title\n
Тема: $delivery1\n
Направление: $delivery\n
Cодержание: $msg\n";
	if(!@mail($admail, $subject, $content)){
		$error = "Ошибка при отправке письма. Пожалуйста сообщите об этом администратору данного сайта, используя любой другой вид связи.";
	}
	else{
		$error = "Ваше сообщение успешно отправлено!\nВы получите ответ в ближайшее время ";
		$name = 'success';
	}
}


$array1 = array('content'=>$content,'error'=>$error,'name'=>$name);
echo json_encode($array1);

?>