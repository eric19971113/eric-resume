function topg(){
	$("body").stop().animate({
       scrollTop: $("#main").offset().top
    }, 400);
}

function topg1(){
	$("body").stop().animate({
       scrollTop: $("#abme").offset().top
    }, 400);
}
function topg2(){
	$("body").stop().animate({
       scrollTop: $("#ntu").offset().top
    }, 400);
}
function topg3(){
	$("body").stop().animate({
       scrollTop: $("#vol").offset().top
    }, 400);
}
function topg4(){
	$("body").stop().animate({
       scrollTop: $("#hack").offset().top
    }, 400);
}


var stickyOffset = $('.topic').offset().top;

$(window).scroll(function(){
  var sticky = $('.topic'),
      scroll = $(window).scrollTop();
  if (scroll >= stickyOffset) 
  	{
  		sticky.addClass('fixed');
  	}
  else sticky.removeClass('fixed');
});




