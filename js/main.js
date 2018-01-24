
  ///////////////slider acces-direct/////////////////

 $(document).ready(function(){
// window.onload=function(){
//   $('.slider').slick({
//   autoplay:true,
//   autoplaySpeed:1500,
//   arrows:true,
//   prevArrow:'<button type="button" class="slick-prev"></button>',
//   nextArrow:'<button type="button" class="slick-next"></button>',
//   centerMode:true,
//   slidesToShow:3,
//   slidesToScroll:1
//   });
// };

$('.slider').slick({
  dots: false,
  infinite: false,
  arrows: true,
  speed: 300,
  slidesToShow: 6,
  slidesToScroll: 1,
  responsive: [
    {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
  ]
});



// Dropdown Menu Fade

    var body = $('body').innerWidth();
    $(".dropdown").hover(
        function() {
          $('.dropdown-menu', this).css('display','block');
          $('.mega-menu').css('width',(body));
          // $('.dropdown .drop_first a').css('background','red');
        },
        function() {
           $('.dropdown-menu', this).css('display','none');
    });



    //Scroll Menu
    $(window).on('scroll', function(){
      var header = $('#carousel-example-generic').innerHeight();

    	if( $(window).scrollTop()>header ){
    		$('#main').addClass('fixed-main').css('top', '0px');
    	} else{
    		$('#main').removeClass('fixed-main');
    	}

    });


});





$(window).resize(function(){
    var body = $('body').innerWidth();
    $(".dropdown").hover(
        function() { $('.dropdown-menu', this).fadeIn("fast");
          $('.mega-menu').css('width',(body));
        },
        function() { $('.dropdown-menu', this).fadeOut("fast");
    });
});
