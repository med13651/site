$(document).ready(function(){

//fancy box
$(".flexslider2 .slides a").fancybox({
	padding: 0
});

//product slider
$('.flexslider2').flexslider({
	animation: "slide",
	slideshow: false, 
	direction: "vertical",
	directionNav: false,
	controlNav: "thumbnails",
	start: function(slider){
	  $('body').removeClass('loading');
	}
});
$('.flexslider2 .flex-control-nav li').first().addClass('active');
$('.flexslider2 .flex-control-nav li').click(function(){
	$(this).addClass('active').siblings('li').removeClass('active');
});

//slider
$('.flexslider').flexslider({
	animation: "slide",
	animationLoop: true,
	slideshow: true,                //Включание автопроигрывания слайдшоу (true/false)
	slideshowSpeed: 2000,           //Установка скорости переключения слайдов в слайдшоу, в миллисекундах
	animationDuration: 500,         //Скорость выполнения анимации, в миллисекундах
	directionNav: true,             //Включение навигации предыдущий/следующий (true/false)
	controlNav: false,               //Включение постраничной навигации (true/false)
	keyboardNav: true,              //Включение навигации с использованием клавиатуры(true/false)
	prevText: " ",           //Текст для пункта "предыдущий" directionNav
	nextText: " ", 
	start: function(slider){
	  $('body').removeClass('loading');
	}
});

//menu
$(".flexnav").flexNav();

//carusel
$('#carousel').carousel({
	itemWidth: 226, // The width of your images.
	itemHeight: 313, // The height of your images.
	distance: 15,
	selectedItemDistance: 50,
	unselectedItemAlpha: 0.7,
	topMargin: 25,
	enableMouseWheel: false,
	selectedItemDistance: 100,
	motionStartDistance: 300
});

//scroll pane
$('.scroll-pane').jScrollPane({
showArrows: true,
contentWidth: '0px'
});	

//masonary
$('.isotope').isotope({
	itemSelector : '.item',
	layoutMode: 'masonry',
	masonry: {

	}
});
var $container = $('.isotope').imagesLoaded( function() {
  $container.isotope({
    
  });
});

if(BrowserDetect.browser == "Safari"){
$('.scroll-pane').jScrollPan({
showArrows: false,
contentWidth: '0px'
});	
} 

//form styler
$('input, select').styler({
	selectSearch: true
});

});

