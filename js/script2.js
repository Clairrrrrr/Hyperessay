$(document).ready(function() {
	
	var box1 = $("#box1");
	var box2 = $("#box2");
	var box3 = $("#box3");
	var box4 = $("#box4");
	var box5 = $("#box5");
	var box6 = $("#box6");
	var box7 = $("#box7");
	var box8 = $("#box8");
	var box9 = $("#box9");
	var box10= $("#box10");
	var mouseImg= document.getElementById("mouseImg");
	document.addEventListener('mousemove', function (e) {
	        var x = e.pageX;
	        var y = e.pageY;
	        mouseImg.style.left = x - 250 + 'px';
	        mouseImg.style.top = y - 250 + 'px';
	
	
	    });
 });