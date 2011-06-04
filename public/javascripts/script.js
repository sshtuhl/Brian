$(document).ready(function()
	{
	alert('Welcome to My Jambalaya Page');
	

		$("button#bgcolor").click(function(){
		$("div#ingredients").css("background-color","yellow")
	});
	
		var bold=true;
	$("button#boldinst").click(function(){
	
		if (bold ==true)
		$("div#instructions").css("font-size", 22)
		else
		$("div#instructions").css("font-size", 16);
		bold = !bold
	});
	
	$("#link").mouseout(function(){
		$("p#exlink").css("color", "white");
	})
	$("#link").mouseover(function(){
		$("p#exlink").css("color", "black");
	});

})