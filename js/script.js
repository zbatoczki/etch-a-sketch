function createGrid()
{
	var grid = 256 //16x16 = 256
	var id = 1;
	for(var i = 0; i < 256; i++)
	{
		$(".sketchpad").append("<div class='square' id='" + id + "'></div>");
		id++;
	}
	
}

$(document).ready(function(){
	createGrid();
});