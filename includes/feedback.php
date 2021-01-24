

			<form action="includes/mail.php" name="feedback" id="feedback_form" method="post">
			<table class="message-tab">
				<tr><td colspan="2"><h1>Форма заказа тура</h1></td></tr>
				<tr><td class="kuda">Тема:</td>
					<td><select name="delivery1" class="kuda-vibor" id="er1">
						<option> Форма заказа тура</option>
						</select>
					</td>
				</tr>
				<tr><td class="kuda">Страна для поездки:</td>
					<td><select name="delivery" class="kuda-vibor" id="er2">
						<option> Другое</option>
						<option> Египет</option>
						<option> Турция</option>
						<option> Таиланд</option>
						<option> ОАЕ</option>
						<option> Израиль</option>
						<option> Мальдивы</option>
						<option> Шри-Ланка</option>
						<option> Кения</option> 
						<option> Танзания</option>
						<option> Куба</option>
						<option> Мальдивы</option>
						<option> Доминикана</option>
						<option> Хорватия</option>
						</select>
					</td>
				</tr>
				
				<tr><td colspan="2">Пожелания к туру:</td></tr>
				<tr><td colspan="2"><textarea rows="8" cols="118" name="msg" class="hochu" placeholder="отель 5*, примерная стоимость, 2е взрослых и 1 ребенок, выезд с 18 января +-3дня, вернуться до 30января, питание завтраки, обязательно отель на берегу с водными горками для детей...ИЛИ ПРОСТО СКОПИРУЙТЕ КОД ИЛИ НАЗВАНИЕ ТУРА" id="er3"></textarea></td></tr>
				<tr><td>Ваше имя:</td><td><input type="text" class="kuda-vibor" autocomplete="off" name="nick" id="er4"></td></tr>
				<tr><td>Ваш тел.:</td><td><input type="text" class="kuda-vibor" autocomplete="off" name="tel" id="er5" placeholder="0671234567"></td></tr>
				<tr><td>Ваш е-mail:</td><td><input type="text" class="kuda-vibor" autocomplete="off" name="email" id="er6"></td></tr>
				<tr><td colspan="2"><input type="submit" class="bottom-zakaz" value="Заказать"></td></tr>
			</table>
			</form>