$(document).ready(function() {
	
	/*
	          __                                 
	         /\ \                   __           
	  ___    \_\ \     __   __  __ /\_\     __   
	 / __`\  /'_` \  /'__`\/\ \/\ \\/\ \  /'__`\ 
	/\ \L\ \/\ \L\ \/\  __/\ \ \_/ |\ \ \/\  __/ 
	\ \____/\ \___,_\ \____\\ \___/  \ \_\ \____\
	 \/___/  \/__,_ /\/____/ \/__/    \/_/\/____/

	odevie.org
	Web agency
	*/

	var bgd = "/assets/home.jpg";
	
	$('#bgd').anystretch("/assets/home.jpg");


	$('#toggle').click(function (e) {
  		$('body').toggleClass('active');
  		e.preventDefault();
	});

});