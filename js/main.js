$(function(){
	'use strict';
	var 
	winH     =$(window).height(),
	upperH   =$('.upper-bar').innerHeight(),
	navbarH  =$('.navbar').innerHeight();
	$('.slider, .carousel-item').height(winH - ( upperH + navbarH ));
	$('.featured-work ul li').on('click', function() {
     $(this).addClass('active').siblings().removeClass('active');
     if($(this).data('class') === 'All'){
     $('.shuffle-images .col-sm').css('opacity',1);
     }
    else{
    	$('.shuffle-images .col-sm').css('opacity', '.08');
    	$($(this).data('class')).parent().css('opacity', 1);
    }
	});

});