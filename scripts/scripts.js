/* WRITE YOUR JS HERE... YOU MAY REQUIRE MORE THAN ONE JS FILE. IF SO SAVE IT SEPARATELY IN THE SCRIPTS DIRECTORY */

$(document).ready(function () {
    $('.main').hide();
    $('#start-btn').on('click', function () {
      $('#welcome-page').fadeOut(500, function () {
        $('.main').fadeIn(500, function () {
            $(document).ready(function () {
                $('.slick-slider').slick({
                  dots: true,
                  infinite: false,      
                  speed: 500,             
                  slidesToShow: 1,         
                  slidesToScroll: 1,  
                });
                $('#scuba-btn').on('click', function () {
                  $('.slick-slider').slick('slickGoTo', 1);
                });  
                $('#free-btn').on('click', function () {
                  //$('.slick-slider .container:nth-of-type(2').hide ();
                  $('.slick-slider').slick('slickGoTo', 2);
              })   
            });
        });
      });
    });
  });



