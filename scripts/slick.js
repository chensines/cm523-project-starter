$(document).ready(function () {
    $('.container').slick({
      dots: true, 
      infinite: false, 
      speed: 300, // Transition speed in ms
      slidesToShow: 1, // One slide at a time
      slidesToScroll: 1, // Scroll one slide at a time
    });
  
    // Example: Navigate to specific slides with buttons
    $('#scuba-btn').on('click', function () {
      $('.container').slick('slickGoTo', 0); 
  
    $('#free-btn').on('click', function () {
      $('.container').slick('slickGoTo', 1); 
    });
  });
  