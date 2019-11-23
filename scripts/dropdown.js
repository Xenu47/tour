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

	var start = Date.now(); // время начала
	var timer = setInterval(function() {
		var timePassed = Date.now() - start; // количество пройденного времени
		// если оно больше чем нужно - присваивается новый статус
		if (timePassed >= 210) {
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
}
