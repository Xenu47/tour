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

		<div>
			<form method='POST' action='' id='form_lang'>
				<select name='lang' onchange='this.form.submit()'>
					<option value='ua' <?php if(isset($_SESSION['lang']) && $_SESSION['lang'] == 'ua'){ echo "selected"; } ?>>UA</option>
					<option value='ru' <?php if(isset($_SESSION['lang']) && $_SESSION['lang'] == 'ru'){ echo "selected"; } ?>>RU</option>
				</select>
			</form>
		</div>
	</div>
</header>