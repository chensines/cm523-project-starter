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
                $('#prevBtn1').on('click', function () {
                  $('.slick-slider').slick('slickGoTo',0);
                })
                $('#nextBtn1').on('click', function () {
                  $('.slick-slider').slick('slickGoTo',3);
                })
                $('#prevBtn2').on('click', function () {
                  $('.slick-slider').slick('slickGoTo',0);
                })
                $('#nextBtn2').on('click', function () {
                  $('.slick-slider').slick('slickGoTo',3);
                })
            });
        });
      });
    });
  });
  
  
    // 监听 Slider 1 的跳转
    $('.container:first-of-type').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
      if (nextSlide === 2) { // 如果目标是跳到页面 3
        $('.container:nth-of-type(2)').hide(); // 隐藏页面 2
        $('.container:last-of-type').show(); // 显示页面 3
      } else {
        $('.container:nth-of-type(2)').show(); // 如果不是，恢复页面 2 的可见性
      }
    });
  
    // 如果需要直接在页面加载时隐藏某些 Slider
    $('.container:nth-of-type(2)').hide();
  

    console.log('Event triggered!');
console.log($('.container:nth-of-type(2)')); // 验证选择器
