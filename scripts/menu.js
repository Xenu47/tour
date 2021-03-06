var body = document.body;
var html = document.documentElement;
var screenW = screen.width;
var pageHeight = 0; 
var heightDict = {};
var colHeightDict = {};

window.onload = function(){
	getPageHeight();
	
	let x = document.getElementsByClassName("inline-menu");
	for (let i = 0; i < x.length; i++) {
	  	heightDict[x[i].id] = x[i].offsetHeight;
	  	x[i].style.height = 0;
	}
	console.log(heightDict);

	let y = document.getElementsByClassName("collapsable");
	for (let i = 0; i < y.length; i++) {
	  	y[i].setAttribute("id", i);
	  	colHeightDict[y[i].id] = y[i].offsetHeight;
	  	y[i].classList.toggle("less");
	}
	console.log(colHeightDict);
	/*if (screenW < 720){*/
		newOsToggle(0);
	/*}*/
}

function getPageHeight() {
	body = document.body;
	html = document.documentElement;
	screenW = screen.width;
	pageHeight = Math.max( body.scrollHeight, body.offsetHeight, 
                       html.clientHeight, html.scrollHeight, html.offsetHeight );
	console.log("page h:", pageHeight, "\nscrren w:", screenW);
}

function newOsToggle(timeout){
	if(document.querySelector(".new_os")){	
		setTimeout(function(){
			document.querySelector(".new_os").classList.toggle("new_os_high");
		}, timeout)
	}
}

function openMenu(){
	getPageHeight();

	document.querySelector("#header-menu-button").setAttribute("onclick", "closeMenu()");
	document.querySelector("#header-menu-button").classList.toggle("change");
	/*if (screenW < 720){*/
		document.querySelector("menu").style.width = "70vw";
		document.querySelector("#brightness_block").style.opacity = "0.3";
		document.querySelector("#brightness_block").style.width = "30vw";
		document.querySelector("#brightness_block").style.pointerEvents = "all";
		document.querySelector("menu").style.height = pageHeight - 55;
		newOsToggle(0);
	/*}
	if (screenW >= 720){
		document.querySelector("menu").style.width = "auto";
		document.querySelector("menu").style.height = "auto";
		newOsToggle(0);
	}*/
}
function closeMenu(){
	document.querySelector("#header-menu-button").setAttribute("onclick", "openMenu()");
	document.querySelector("#header-menu-button").classList.toggle("change");
	/*if (screenW < 720){*/
		document.querySelector("menu").style.width = "0";
		document.querySelector("#brightness_block").style.opacity = "0";
		document.querySelector("#brightness_block").style.width = "100vw";
		document.querySelector("#brightness_block").style.pointerEvents = "none";
		newOsToggle(500);
	/*}
	if (screenW >= 720){
		document.querySelector("menu").style.width = "auto";
		document.querySelector("menu").style.height = "0";
		newOsToggle(0);
	}*/
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

function showMore(ele){
	let id = ele.previousSibling.id;
	ele.previousSibling.style.height = colHeightDict[id];
	ele.classList.toggle("less");
	ele.setAttribute("onclick", "showLess(this)");
}
function showLess(ele){
	ele.previousSibling.style.height = "92px";
	ele.previousSibling.scrollIntoView();
	ele.classList.toggle("less");
	ele.setAttribute("onclick", "showMore(this)");
}