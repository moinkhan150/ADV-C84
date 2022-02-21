// Create a reference for the canvas
canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

window.addEventListener("keydown", my_keydown);

img_width = 300;
img_height = 100;

var img_image;

img_x = 100;
img_y = 100;

function add() {
	img_imgTag = new Image(); //defining a variable with a new image
	img_imgTag.onload = uploadimg; // setting a function, onloading this variable
	img_imgTag.src = img_image;   // load image
}

function uploadimg() {

	ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}

//Write a code to grab the key-pressed event
function aplhabetkey()
{
	img_image="Alpkey.png";
	add();
}




function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
		if((keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=90))
		{
			function my_keydown(e)
			{
	keyPressed = e.keyCode;
	console.log(keyPressed);

	if((keyPressed >=97 && keyPressed<+122)|| (keyPressed >=65 && keyPressed <=90))
	{
		aplhabetkey();
		document.getElementById("di").innerHTML="you pressed Alphabet Key";
		console.log("alphabet key");
	}

			}
		}
		//write a code to check the type of key pressed
		else
		{
		otherkey();
		document.getElementById("d1").innerHTML="You pressed symbol or other key";
		}
}

function aplhabetkey()
{
	if((keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed <=90))
	{
		aplhabetkey();
		document.getElementById("di").innerHTML="you pressed Alphabet Key";
		console.log("alphabet key");
	}

}


function numberkey()
{
	if((keyPressed >=48 && keyPressed<=57))
	{
		numberkey();
		document.getElementById("di").innerHTML="you pressed Number Key";
		console.log("number key");
	}
	
}


function arrowkey()
{
	if((keyPressed >=37 && keyPressed<=40))
	{
		arrowkey();
		document.getElementById("di").innerHTML="you pressed Arrow Key";
		console.log("arrow key");
	}

}
function specialkey()
{
	if((keyPressed = 17 && keyPressed = 18 && keyPressed =27))
	{
		arrowkey();
		document.getElementById("di").innerHTML="you pressed Arrow Key";
		console.log("arrow key");
	}
	
}
function otherkey()
{
	img_image="otherkey.png";
	add();
}
	
