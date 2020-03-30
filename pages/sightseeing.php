<!DOCTYPE html5>
<html>
	<head>
		<title>Tourmix</title>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<link rel="stylesheet" href="../styles/mobile.css" />
		<!--
		<link rel="stylesheet" media="screen and (min-device-width: 768px)" href="../styles/pc.css" />
		<link rel="stylesheet" media="screen and (max-device-width: 768px)" href="../styles/mobile.css" />
		-->
		<script type="text/javascript" src="../scripts/menu.js"></script>
		<?php include_once ("includes/meta.php");?>
	</head>
	<body>
		<?php include_once ("includes/header.php");?>
		<?php include_once ("includes/menu.php");?>
<!--
		<div id="search-area">
			<div id="search-block"></div>
		</div>
-->
		<main>
			<?php include_once ("includes/sightseeing_tours.php");?>
			<?php include_once ("includes/footer.php");?>
		</main>
	</body>
</html>
