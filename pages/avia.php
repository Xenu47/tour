<!DOCTYPE html5>

<?php include_once ("includes/lang.php");
	if($_SESSION['lang'] == 'ua'){
		$link = 'https://agent.aviakassa.org.ua/uk/agencies/widget/174/best-offers=1/';
	} else {
		$link = 'https://agent.aviakassa.org.ua/agencies/widget/174/best-offers=1/';
	}
?>
<html>
	<head>
		<title>Tourmix</title>

		<?php include_once ("includes/meta.php");?>
	</head>
	<body>
		<?php include_once ("includes/header.php");?>
		<?php include_once ("includes/menu.php");?>
	<content>
		<div class="content_avia">
			<?php echo '<iframe id="avia" src="'.$link.'" frameborder="0" allowtransparency></iframe>' ?>
		</div>
	</content>
		<?php include_once ("includes/footer.php");?>
	</body>
</html>
