function mouseOver() {
	// статус "в движении", тогда при повторном нажатии он не прекратит работу
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
		var i = menu_height*-1 + header_height;
		var step = menu_height/20;
	}
	// статус "открыт", задатся начальную позицию и скорость
	if(document.getElementById("inv_val").innerHTML == "2"){
		var i = header_height;
		var step = menu_height/-20;
	}

	document.getElementById("inv_val").innerHTML = "1";

	var start = 0; // начало, 0 итераций
	var timer = setInterval(function() {
		start+=1; // +1 итерация
		// если больше чем нужно - присваивается новый статус
		if (start >= 21) {
			if(step == menu_height/20){
				document.getElementById("inv_val").innerHTML = "2";
			}
			else{
				document.getElementById("inv_val").innerHTML = "0";
			}
			clearInterval(timer);
			return;
		}
		i = i + step; // новый отступ от верха
		dropdown(i, element_count, element_height, header_height); // применяется отсуп
	}, 10);
}

function dropdown(i, element_count, element_height, header_height){
	document.querySelector("#header-menu").setAttribute("style","top:"+i+"px");
	document.querySelector("main").setAttribute("style","margin-top:"+(i + element_count*element_height - header_height + 10)+"px");
}
