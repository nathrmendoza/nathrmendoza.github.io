(function ($) {
 
    $.fn.fadeInScroll = function( options ) {
    	
    	// VARIABLES ------------------------------------
    	var elements = $(this);
    	
 
        
        // SETTINGS ------------------------------------
        var settings = $.extend({
	        minDistance: 	70 * $(window).height() / 100   //Distance between the browser top scroll and the next element
        });
        
        
        
        // MAIN ------------------------------------
    	// Add sFade classes
		$(elements).each(function(){
		    $(this).css(options);
		});
		
		// Check the position of all the elemnents.
		CheckFades();
        
        
        
		// FUNCTIONS ------------------------------------
		function CheckFades(){
			
		
			//Get the top of the browser
			vWindowScrollTop = $(window).scrollTop();
		
		    //Test if the window TopScroll reachs the element TopScroll minus the minimun distance
		    $(elements).each(function(){
			    if( ( (vWindowScrollTop + parseInt(settings.minDistance)) >= $(this).offset().top) ){
					//$(this).animate({opacity:1,transform:translateX(0)});
					$(this).addClass('showcontent');
			    }
		    });
		}
		
		

        // EVENTS ------------------------------------
        $(window).scroll(function() {
		  CheckFades();
		});
    };
 
}( jQuery ));