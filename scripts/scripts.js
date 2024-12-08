let nextButtonClicked = null;
const avatar = document.getElementsByClassName('avatar');

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
          avatar.style.display = "block";
        });

        $('#free-btn').on('click', function () {
          $('.slick-slider').slick('slickGoTo', 2);
          avatar.style.display = "block";
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
      });
    });
  });
});

const bcdCheckbox = document.getElementById('bcd-checkbox');
const bcdDisplay = document.getElementById('bcd-display');


// Add an event listener to the checkbox to toggle visibility
bcdCheckbox.addEventListener('change', function () {
  if (bcdCheckbox.checked) {
    // If the checkbox is checked, show the element
    bcdDisplay.style.display = 'block';
  } else {
    // If the checkbox is unchecked, hide the element
    bcdDisplay.style.display = 'none';
  }
});
