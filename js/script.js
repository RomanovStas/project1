var burgerMenu = document.getElementById('burger-menu');﻿
burgerMenu.onclick = function myFunction(){
	var x = document.getElementById("myTopnav")

	if(x.className === "topnav") {
		x.className += " responsive";
	} else {
		x.className = "topnav";
	}
}

