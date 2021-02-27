<?php
	session_start();
	
	if(!isset($_SESSION['lang'])){
		$_SESSION['lang'] = 'ua';
	}
	include_once 'pages/main.php';
?>
