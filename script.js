var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.getElementById("random");
var bgColor = "rgb(255,255,255)";

function random_bg_color() {
	//generate random numbers for rgb values
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
	var z = Math.floor(Math.random() * 256);
	var x1 = Math.floor(Math.random() * 256);
    var y1 = Math.floor(Math.random() * 256);
	var z1 = Math.floor(Math.random() * 256);
	//convert to hex and assign to color pickers
	color1.value = fullColorHex(x,y,z);
	color2.value = fullColorHex(x1,y1,z1);

	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value
	+ ", " 
	+ color2.value
	+ ")";

	css.textContent = body.style.background + ";";
    }

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

// https://campushippo.com/lessons/how-to-convert-rgb-colors-to-hexadecimal-with-javascript-78219fdb

var rgbToHex = function (rgb) { 
	var hex = Number(rgb).toString(16);
	if (hex.length < 2) {
		 hex = "0" + hex;
	}
	return hex;
  };

var fullColorHex = function(r,g,b) {   
	var red = rgbToHex(r);
	var green = rgbToHex(g);
	var blue = rgbToHex(b);
	return "#"+red+green+blue;
  };

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

random.addEventListener("click",random_bg_color);