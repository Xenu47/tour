var heightDict = {};

window.onload = function(){
	let x = document.getElementsByClassName("inline-menu");
	for (let i = 0; i < x.length; i++) {
	  	heightDict[x[i].id] = x[i].offsetHeight;
	  	x[i].style.height = 0;
	}
}

function openMenu(){
	document.querySelector("#header-menu-button").setAttribute("onclick", "closeMenu()");
	document.querySelector("menu").style.width = "70vw";
	document.querySelector("#brightness_block").style.opacity = "0.3";
	document.querySelector("#brightness_block").style.pointerEvents = "all";
}
function closeMenu(){
	document.querySelector("#header-menu-button").setAttribute("onclick", "openMenu()");
	document.querySelector("menu").style.width = "0";
	document.querySelector("#brightness_block").style.opacity = "0";
	document.querySelector("#brightness_block").style.pointerEvents = "none";
}

function openInline(ele){
	let ref = ele.getAttribute("ref");
  	let height = heightDict[ref];
  	ele.classList.toggle("active");
	document.querySelector("#"+ref).style.height = height;
	ele.setAttribute("onclick", "closeInline(this)");
}
function closeInline(ele){
	let ref = ele.getAttribute("ref");
  	ele.classList.toggle("active");
	document.querySelector("#"+ref).style.height = "0";
	ele.setAttribute("onclick", "openInline(this)");
}