<script>
	var osGeo = 'Египет'; /* страна, курорт или отель по умолчанию в форме поиска */
	var osTarget = '/tour'; /* URL для отправки формы */
	var osContainer = null; /* Элемент DIV, в котором выводить результаты поиска */
	var osTourContainer = null; /* Элемент DIV, в котором выводить подробную информацию о туре */
	var osLang = "<?php echo $_SESSION['lang']; ?>"; /* Язык интерфейса (ru|ua) */
	var osTourTargetBlank = false; /* Открывать страницу тура в новом окне? */
	var osOrderUrl = null; /* Вместо формы заказа, переходить на указанный url */
</script>
<link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700&subset=cyrillic" rel="stylesheet">
<link rel="Stylesheet" href="https://export.otpusk.com/os/onsite/form.css" type="text/css" />
<link rel="Stylesheet" href="https://export.otpusk.com/os/onsite/result.css" type="text/css" />
<link rel="Stylesheet" href="https://export.otpusk.com/os/onsite/tour.css" type="text/css" />
<script src="https://export.otpusk.com/api/session?access_token=22608-bd8c8-f204d-6fd11-e8e67"></script>
<script src="https://export.otpusk.com/js/onsite/"></script>
<script src="https://export.otpusk.com/js/order"></script>