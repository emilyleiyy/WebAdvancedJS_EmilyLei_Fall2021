$(function(){
    showScroll();
    function showScroll(){
        $(window).scroll( function() { 
            var scrollValue=$(window).scrollTop();
            scrollValue > 100 ? $('div[class=scroll]').fadeIn():$('div[class=scroll]').fadeOut();
        } );	
        $('#scroll').click(function(){
            $("html,body").animate({scrollTop:0},200);	
        });	
    }
})



$(function(){
	$w = $('.projectImg').width();
	$h = $('.projectImg').height();
	$w2 = $w + 20;
	$h2 = $h + 20;

	$('.projectImg').hover(function(){
		 $(this).stop().animate({height:$h2,width:$w2,left:"-10px",top:"-10px"},500);
	},function(){
		 $(this).stop().animate({height:$h,width:$w,left:"0px",top:"0px"},500);
	});
});