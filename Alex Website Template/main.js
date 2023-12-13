// For Headline
let yourtext = [
    ["Designer", "#ffd166"],
    ["Developer", "#7DE2D1"],
    ["Photographer", "#DE3C4B"]
  ];
  
  let x = 0;
  let y = 0;
  //how fast typing is
  let wait = 200;
  //how long you want to text stay before overwriting
  let additionalwait = 5;
  let txt = yourtext[0][0].split("");
  let out = "";
  let retyping = setInterval(function () {
    document.getElementById("changingText").innerHTML = out;
    if (x > txt.length - 1) {
    } else {
      out += txt[x];
    }
    x++;
    if (x == txt.length + 2 + additionalwait) {
      if (y == yourtext.length - 1) {
        y = 0;
        txt = yourtext[y][0].split("");
        out = "";
        document.getElementById("changingText").innerHTML = out;
        document.getElementById("changingText").style.color = yourtext[y][1];
        x = 0;
      } else {
        y += 1;
        txt = yourtext[y][0].split("");
        out = "";
        document.getElementById("changingText").innerHTML = out;
        document.getElementById("changingText").style.color = yourtext[y][1];
        x = 0;
      }
    }
  }, wait);


// For Counter Number
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


$('#number1').jQuerySimpleCounter({end: 232,duration: 3000});
$('#number2').jQuerySimpleCounter({end: 521,duration: 3000});
$('#number3').jQuerySimpleCounter({end: 1453,duration: 2000});
$('#number4').jQuerySimpleCounter({end: 32,duration: 2500});



  /* AUTHOR LINK */
   $('.about-me-img').hover(function(){
          $('.authorWindowWrapper').stop().fadeIn('fast').find('p').addClass('trans');
      }, function(){
          $('.authorWindowWrapper').stop().fadeOut('fast').find('p').removeClass('trans');
      });

  
// For Progress Bar
$(window).on('scroll',function(){
  let scroll = $(window).scrollTop();
  let oTop = $('.progress-bar').offset().top - window.innerHeight;
  if(scroll>oTop){
    $(".progress-bar").addClass("progressbar-active");
  }
  else{
    $(".progress-bar").removeClass("progressbar-active");
  }
});

// For Animation fade-up
AOS.init({
  offset: 200,
  duration: 600,
  easing: 'ease-in-sine',
  delay: 10,
});

// For Navbar
$(document).ready(function(){
  $(".slidebar").click(function(){
      $(".slidebar").toggleClass("active");
      $(".left-side").toggleClass("left");
  })
  $(".nav-link").click(function(){
    $(".slidebar").toggleClass("active");
      $(".left-side").toggleClass("left");
  })
})

// For Slick Slider
$(document).ready(function(){
  $(".testimonials > .container > .row").slick({
      Infinity: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      dots: true,
      autoplay: true,
      autoplaySpeed: 1200,
      responsive: [{
          breakpoint: 490,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
          }
      }]
  })
})