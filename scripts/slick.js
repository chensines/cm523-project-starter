let nextButtonClicked = null;
let currentPage = 0;
const avatar = document.getElementsByClassName('avatar');
const equipmentChoice = document.getElementsByClassName('container');

$(document).ready(function () {
  $('.main').hide();
  $('#start-btn').on('click', function () {
    $('#welcome-page').fadeOut(500, function () {
      $('.main').fadeIn(500, function () {
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
          $('.slick-slider').slick('slickGoTo', 2);
        });

        $('#prevBtn1').on('click', function () {
          $('.slick-slider').slick('slickGoTo', 0);
        });

        $('#nextBtn1').on('click', function () {
          nextButtonClicked = 1; 
          $('.slick-slider').slick('slickGoTo', 3); 
        });

        $('#prevBtn2').on('click', function () {
          $('.slick-slider').slick('slickGoTo', 0);
        });
        
        $('#nextBtn2').on('click', function () {
          nextButtonClicked = 2;
          $('.slick-slider').slick('slickGoTo', 3);
        });

        $('#prevBtn3').on('click', function () {
          if (nextButtonClicked === 1) {
            $('.slick-slider').slick('slickGoTo', 1);
          } else if (nextButtonClicked === 2) {
            $('.slick-slider').slick('slickGoTo', 2);
          }
        });

        $('#nextBtn3').on('click', function () {
          $('.slick-slider').slick('slickGoTo', 4);
        });

        $('.slick-slider').on('afterChange', function (event, slick, currentSlide) {
          currentPage = currentSlide;

          // Trigger alert for specific slides
          if (currentPage ==1 || currentPage ==2) {
            alert('Choose all the equipment you need!');
          }
        });
      });
    });
  });
});