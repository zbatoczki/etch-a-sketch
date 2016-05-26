function createGrid(size)
{
	$(".square").remove();

	var grid = 0;
	var defaultSize = 16;

	if(size === undefined)	
		grid = defaultSize * defaultSize; //16x16 = 256 default
	else
	{
		while(size < 10 || size > 50)
			size = prompt("You entered an incorrect size. Please eneter a size between 10 and 50...");
		defaultSize = size;
		grid = defaultSize * defaultSize;
	}
		


	var id = 1;
	for(var i = 0; i < grid; i++)
	{
		$(".sketchpad").append("<div class='square' id='" + id + "'></div>");
		id++;
	}

	$(".square").css("width", 640/defaultSize);
	$(".square").css("height", 640/defaultSize);

	$(".square").hover(
		function(){
			$(this).css("background-color", "red");
		}
	);
}

function clearGrid()
{
	$(".square").css("background-color", "none");
	console.log("clearGrid() CALLED");
	var response = prompt("Enter a new grid per size between 10 and 50...");
	console.log("User entered " + response);
	createGrid(response);
}

function randomColor()
{	
	$(".square").hover(
		function(){
			var random = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
			$(this).css("background-color", random);
		}
	);
}

function darken()
{
	createGrid();
	var opac = 0.0;
	$(".square").css('opacity', opac);
	$(".square").css('background-color', 'red');
	$(".square").mouseenter(function() {
			opac = parseFloat($(this).css('opacity'));
			console.log(opac);
			if(opac < 1)
				$(this).css('opacity', opac+0.1);					
		});
}

function trail()
{
	$(".square").mouseenter(function() {
			$(this).css("background-color", "red");
			$(this).css("opacity", "1");
					
		});
	$(".square").mouseleave(function() {
		$(this).fadeTo("slow", 0);	
	});
}

$(document).ready(function(){
	createGrid();	
});