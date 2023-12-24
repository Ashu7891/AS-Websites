// For Counter
$.fn.jQuerySimpleCounter = function( options ) {
    var settings = $.extend({
        start:  0,
        end:    100,
        easing: 'swing',
        duration: 400,
        complete: ''
    }, options );

    var thisElement = $(this);

    $({count: settings.start}).animate({count: settings.end}, {
        duration: settings.duration,
        easing: settings.easing,
        step: function() {
            var mathCount = Math.ceil(this.count);
            thisElement.text(mathCount);
        },
        complete: settings.complete
    });
};


$('#number1').jQuerySimpleCounter({end: 99,duration: 3000});
$('#number2').jQuerySimpleCounter({end: 25,duration: 3000});
$('#number3').jQuerySimpleCounter({end: 120,duration: 2000});
$('#number4').jQuerySimpleCounter({end: 5,duration: 2500});



  /* AUTHOR LINK */
 $('.about-me-img').hover(function(){
        $('.authorWindowWrapper').stop().fadeIn('fast').find('p').addClass('trans');
    }, function(){
        $('.authorWindowWrapper').stop().fadeOut('fast').find('p').removeClass('trans');
    });

// AOS Fade up
    AOS.init({
        duration: 1200,
      })


// For slick Slider
$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
    autoplay: true,
    dots: true,
    dotsEach: true,
    autoplaySpeed: 2000,
    loop:true,
    margin:0,
    // nav:true,
        responsive:{
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            },
        }
    })
})