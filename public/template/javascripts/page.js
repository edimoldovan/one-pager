/*jslint browser:true */
/*jslint nomen:true */
/*global console, alert*/

(function() {
	"use strict";
	var menu = document.getElementById("menu");

	if (menu) {
		menu.addEventListener("click", function(event) {
			event.preventDefault();
			alert("clicked");
		}, false);
	}
}());

