/*
 * Application
 *

 */

/*
 * require
 * 
=require ../vendor/bootstrap/bootstrap.min.js
=require ../vendor/freewall/freewall.js
 */
 

$(document).ready(function() {
	
	var temp = "<div class='cell' style='width:{width}px; height: {height}px; background:url(/themes/jacoweb-minify/assets/images/portfolio/{index}.jpg); background-size: cover;'></div>";
	var w = 200, h = 200, html = '', limitItem = 12;
	for (var i = 0; i < limitItem; ++i) {
		html += temp.replace(/\{height\}/g, h).replace(/\{width\}/g, w).replace("{index}", i + 1);
	}
	$("#portfolio").html(html);
	
	var wall = new freewall("#portfolio");
	
	wall.reset({
		selector: '.cell',
		animate: true,
		cellW: 200,
		cellH: 200,
		onResize: function() {
			wall.refresh();
		}
	});
	wall.fitWidth();
	$(window).trigger("resize");

});