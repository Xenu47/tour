function mouseOver() {
	// статус "в движении", тогда при повторном нажатии он не прекратит работу
  if(document.getElementById("inv_val").innerHTML == "1"){
    return;
  }
	// статус "закрыт", задатся начальную позицию и скорость
	if(document.getElementById("inv_val").innerHTML == "0"){
		var i = -150;
		var step = 10;
	}
	// статус "открыт", задатся начальную позицию и скорость
	if(document.getElementById("inv_val").innerHTML == "2"){
		var i = 50;
		var step = -10;
	}

	document.getElementById("inv_val").innerHTML = "1";

	var start = 0; // начало, 0 итераций
	var timer = setInterval(function() {
		start+=1; // +1 итерация
		// если больше чем нужно - присваивается новый статус
		if (start >= 21) {
			if(step == 10){
				document.getElementById("inv_val").innerHTML = "2";
			}
			else{
				document.getElementById("inv_val").innerHTML = "0";
			}
			clearInterval(timer);
			return;
		}
		i = i + step; // новый отступ от верха
		dropdown(i); // применяется отсуп
	}, 10);
}

function dropdown(i){
	document.querySelector("#header-menu").setAttribute("style","top:"+i+"px");
	document.querySelector("#search-area").setAttribute("style","margin-top:"+(i+150)+"px");
}
