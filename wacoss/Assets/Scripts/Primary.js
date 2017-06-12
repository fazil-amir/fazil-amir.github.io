
/* ############################################################################################################################################### 
																										
	PRIMARY.JS
	The purpose of this document is to init the modules and run small tasks
																																			
################################################################################################################################################# */


$(document).ready(function(){

	Slider.init();                    	/* Call Slider */
	

	AddMore.init({ticketPrice: 195});	/* Call Ticket */


	var gotoPosition = function( pos ){

		$('html, body').animate({

	        scrollTop: pos

	    }, 1000);

	}


	$('.gotoAnchor').click(function(e){

		var loc = $( $(this).data('goto') ).offset().top;

		gotoPosition(loc);

		e.preventDefault();

	});


});