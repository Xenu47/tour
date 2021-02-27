<?php
	if (session_status() == PHP_SESSION_NONE) {
		session_start();
	}

	if(isset($_POST['lang']) && !empty($_POST['lang'])){
		$_SESSION['lang'] = $_POST['lang'];

		if(isset($_SESSION['lang']) && $_SESSION['lang'] != $_POST['lang']){
			echo "<script type='text/javascript'> location.reload(); </script>";
		}
	}
	if(!isset($_SESSION['lang'])){
		$_SESSION['lang'] = 'ua';
	}

	//echo '<script type="text/javascript">alert("'.$_POST['lang'].'")</script>';


	function extract_domain($domain)
	{
		if(preg_match("/(?P<domain>[a-z0-9][a-z0-9\-]{1,63}\.[a-z\.]{2,6})$/i", $domain, $matches))
		{
			return $matches['domain'];
		} else {
			return $domain;
		}
	}

	function extract_subdomains($domain)
	{
		$subdomains = $domain;
		$domain = extract_domain($subdomains);

		$subdomains = rtrim(strstr($subdomains, $domain, true), '.');

		return $subdomains;
	}

	$dom = extract_domain($_SERVER['HTTP_HOST']);
	$subdom = extract_subdomains($_SERVER['HTTP_HOST']);

	echo '<script type="text/javascript">alert("Sess: '.$_SESSION['lang'].'; subd: '.$subdom.'; post: '.$_POST['lang'].'")</script>';
	if($_SESSION['lang'] == 'ua' && $subdom == 'ru' && isset($_POST['lang']) && !empty($_POST['lang'])){
		$subdom = '';
		header('Location: http://localhost');//.$dom.'/'.explode('/', $_SERVER['REQUEST_URI'])[1]);
	}
	if($_SESSION['lang'] == 'ru' && $subdom != 'ru' && isset($_POST['lang']) && !empty($_POST['lang'])){
		$subdom = 'ru';
		header('Location: http://ru.localhost');//.$subdom.'.'.$dom.'/'.explode('/', $_SERVER['REQUEST_URI'])[1]);
	}
?>
