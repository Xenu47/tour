function mouseOver() {

	var body = document.body,
    	html = document.documentElement,
    	header_menu = document.querySelector('#header-menu'),
    	element_count = header_menu.childElementCount,
    	element_height = header_menu.querySelector('#header-menu > a').clientHeight,
    	header_height = document.querySelector("header").offsetHeight,
    	menu_height = element_count*element_height;

	var menu_state = header_menu.classList.item(0);

	var height = Math.max( body.scrollHeight, body.offsetHeight, 
		html.clientHeight, html.scrollHeight, html.offsetHeight );

	// статус "в движении", тогда при повторном нажатии он не прекратит работу
	if(menu_state == "moving"){
	  return;
	}
	// статус "закрыт", задатся начальную позицию и скорость
	if(menu_state == "closed"){
		header_menu.classList.toggle("closed");
		window.scrollTo(0, 0);
		var i = 0;
		var step = 5 ;
	}
	// статус "открыт", задатся начальную позицию и скорость
	if(menu_state == "opened"){
		header_menu.classList.toggle("opened");
		var i = 70;
		var step = -5;
	}

	header_menu.classList.toggle("moving");

	var start = 0; // начало, 0 итераций
	var timer = setInterval(function() {
		start+=1; // +1 итерация
		// если больше чем нужно - присваивается новый статус
		if (start > 14) {
			if(step == 5){
				header_menu.classList.toggle("opened");
			}
			else{
				header_menu.classList.toggle("closed");
				document.querySelector("#brightness_block").style.display = 'none';
				document.querySelector("#header-menu").style.display = 'none';
			}
			header_menu.classList.toggle("moving");
			clearInterval(timer);
			return;
		}
		i = i + step; // новый отступ от верха
		dropdown(i, height); // применяется отсуп
	}, 10);
}

function dropdown(i, height){
	document.querySelector("#header-menu").style.height = height-50+"px";
	document.querySelector("#header-menu").style.display = 'flex';
	document.querySelector("#header-menu").style.left = 100-i+"%";
	document.querySelector("#brightness_block").style.opacity = (i/100)
	document.querySelector("#brightness_block").style.display = 'flex';
}


function inlineMenu(ele){
	var inline_menu_number = ele.id.slice(-1);
	var element_height = ele.clientHeight;
	var inline_menu_name = "#inline-menu-"+inline_menu_number;
	var inline_menu = document.querySelector(inline_menu_name);
	var child_count = document.querySelectorAll(inline_menu_name+" a").length;
	var inline_menu_state = inline_menu.classList.item(1);

	var triangle = ele.childNodes[3];
	var direction = 1;
	var height = 0;

	for (i = 1; i < child_count*2; i+=2) {
		height+=inline_menu.childNodes[i].offsetHeight;
	}

	// статус "в движении", тогда при повторном нажатии он не прекратит работу
	if(inline_menu_state == "moving"){
	  	return;
	}
	// статус "закрыт", задатся начальную позицию и скорость
	if(inline_menu_state == "closed"){
		inline_menu.classList.toggle("closed");
		direction = 1;
		var i = 0;
		var step = 10 ;
	}
	// статус "открыт", задатся начальную позицию и скорость
	if(inline_menu_state == "opened"){
		inline_menu.classList.toggle("opened");
		direction = -1;
		var i = 100;
		var step = -10;
	}

	inline_menu.classList.toggle("moving");

	var start = 0; // начало, 0 итераций
	var timer = setInterval(function() {
		start+=1; // +1 итерация
		// если больше чем нужно - присваивается новый статус
		if (start >= 11) {
			if(step == 10){
				inline_menu.classList.toggle("opened");
			}
			else{
				inline_menu.classList.toggle("closed");
			}
			inline_menu.classList.toggle("moving");
			clearInterval(timer);
			return;
		}
		i = i + step; // новый отступ от верха
		dropdownInline(i, height, inline_menu, triangle, direction); // применяется отсуп
	}, 10);
}

function dropdownInline(i, height, inline_menu, triangle, direction){
	inline_menu.style.height = height*i*0.01;
	triangle.style.transform = "rotate("+(i*1.80*direction + 180)+"deg)";
}