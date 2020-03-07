function mouseOver() {
	// статус "в движении", тогда при повторном нажатии он не прекратит работу
	var body = document.querySelector(body);
	var header_menu = document.querySelector('#header-menu');
	var element_count = header_menu.childElementCount;
	var element_height = header_menu.querySelector('#header-menu > a').clientHeight;
	var header_height = document.querySelector("header").offsetHeight;
	var menu_height = element_count*element_height;
	if(document.getElementById("inv_val").innerHTML == "1"){
	  return;
	}
	// статус "закрыт", задатся начальную позицию и скорость
	if(document.getElementById("inv_val").innerHTML == "0"){
		var i = 0;
		var step = 5 ;
	}
	// статус "открыт", задатся начальную позицию и скорость
	if(document.getElementById("inv_val").innerHTML == "2"){
		var i = 70;
		var step = -5;
	}

	document.getElementById("inv_val").innerHTML = "1";

	var start = 0; // начало, 0 итераций
	var timer = setInterval(function() {
		start+=1; // +1 итерация
		// если больше чем нужно - присваивается новый статус
		if (start >= 15) {
			if(step == 5){
				document.getElementById("inv_val").innerHTML = "2";
			}
			else{
				document.getElementById("inv_val").innerHTML = "0";
				document.querySelector("#brightness_block").style.display = 'none';
				document.querySelector("#header-menu").style.display = 'none';
			}
			clearInterval(timer);
			return;
		}
		i = i + step; // новый отступ от верха
		dropdown(i); // применяется отсуп
	}, 10);
}

function dropdown(i){
	document.querySelector("#header-menu").style.display = 'flex'; 
	document.querySelector("body").style.transform = "translateX(-"+(i)+"%)";
	document.querySelector("#brightness_block").style.opacity = (i/100)
	document.querySelector("#brightness_block").style.display = 'block';
}
