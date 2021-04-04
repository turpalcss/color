
(function($)
{
	"use strict";
	
	
	jQuery(window).on('load', function() {
		preloader();
		
		
		if(jQuery('.gallery-outer .gallery-items').length > 0){
			jQuery('.gallery-outer .gallery-items').filterizr();
		}
		jQuery('#filter-list li').on("click", function(){
			jQuery('#filter-list li').removeClass('active');
			jQuery(this).addClass('active');
		});
	});
	
	
	
	
	function preloader(){
		
		jQuery(".preloader").delay(200).fadeOut("slow").delay(200, function(){
			jQuery(this).remove();
		});
	}
	
	
	
})(jQuery);	

$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 100) {
    $('.logo').fadeOut();
  } else {
    $('.logo').fadeIn();
  }
});