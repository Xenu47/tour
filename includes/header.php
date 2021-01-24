<header>
	<div id="header">
		<div id="header-menu-button" onclick="openMenu()">
			<div class="bar1"></div>
			<div class="bar2"></div>
			<div class="bar3"></div>
		</div>

		<div id="header-logo">
			<a href="/">
				<img src="../images/logo.gif">
			</a>
		</div>

		<script>
		function changeLang(){
			document.getElementById('form_lang').submit();
		}
		</script>
		<div>
			<form method='get' action='' id='form_lang' onchange='changeLang();' >
				<input type="radio" value="ua" name="lang" id="ua" class="sr-only" 
				<?php if(isset($_SESSION['lang']) && $_SESSION['lang'] == 'ua'){ echo "checked"; } ?>>
				<label for="ua"><img src="../images/flag_ua.png" height="40"></label>
				<input type="radio" value="ru" name="lang" id="ru" class="sr-only" 
				<?php if(isset($_SESSION['lang']) && $_SESSION['lang'] == 'ru'){ echo "checked"; } ?>>
				<label for="ru"><img src="../images/flag_ru.png" height="40"></label>
			</form>
		</div>
	</div>
</header>