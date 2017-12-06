$(window).scroll(function(){
	let wScroll = $(this).scrollTop();
	$('.download').css({
		'transform' : 'translate(0px, '+ wScroll /2 +'%)' 
	});
	$('.artist').css({
		'transform' : 'translate(0px, -'+ wScroll /30 +'%)' 
	});
	$('.header').css({
		'transform' : 'translate(0px, -'+ wScroll /20 +'%)' 
	});
});

$(document).ready(function(){
	$("#more").click(function(){
	    $(".show").fadeToggle();
	});
	
 });