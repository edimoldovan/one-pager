/*jslint browser:true */
/*jslint nomen:true */
/*global console, alert*/

(function() {
	"use strict";
	var menuOpen = document.getElementById("menu-open"),
		menuClose = document.getElementById("menu-close");

	if (menuOpen) {
		menuOpen.addEventListener("click", function(event) {
			var sideMenu = document.getElementById("side-menu");
			
			event.preventDefault();
			sideMenu.classList.add("show");
			// sideMenu.classList.remove("hide");
		}, false);
	}

	if (menuClose) {
		menuClose.addEventListener("click", function(event) {
			var sideMenu = document.getElementById("side-menu");
			
			event.preventDefault();
			sideMenu.classList.remove("show");
		}, false);
	}
}());

