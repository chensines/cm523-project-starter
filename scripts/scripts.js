let nextButtonClicked = null;
let currentPage = 0;
const alertCounter = {};
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
          $('input[type="checkbox"]').prop('checked', false);
        });

        $('#nextBtn1').on('click', function () {
          nextButtonClicked = 1; 
          if ('input[type="checkbox"]checked == true') {
            $('.slick-slider').slick('slickGoTo', 3);
          }
        });

        $('#prevBtn2').on('click', function () {
          $('.slick-slider').slick('slickGoTo', 0);
          $('input[type="checkbox"]').uncheck;
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

          if (!alertCounter[currentPage]) {
            alertCounter[currentPage] = 0;
          }

          if (currentPage === 1 || currentPage === 2) {
            if (alertCounter[currentPage] < 1) {
              alert('Choose all the equipment you need!');
              alertCounter[currentPage]++;
            }
          }
        });
      });
    });
  });
});

const bcdCheckbox = document.getElementById('bcd-checkbox');
const bcdDisplay = document.getElementById('bcd-display');
const bootiesCheckbox = document.getElementById('booties-checkbox');
const bootiesDisplay = document.getElementById('booties-display');
const maskCheckbox = document.getElementById('mask-checkbox');
const maskDisplay = document.getElementById('mask-display');
const shortFinsCheckbox = document.getElementById('shortFins-checkbox');
const shortFinsDisplay = document.getElementById('shortFins-display');
const snorkelCheckbox = document.getElementById('snorkel-checkbox');
const snorkelDisplay = document.getElementById('snorkel-display');
const weightCheckbox = document.getElementById('weight-checkbox');
const weightDisplay = document.getElementById('weight-display');
const surfaceCheckbox = document.getElementById('surface-checkbox');
const surfaceDisplay = document.getElementById('surface-display');
const regulatorCheckbox = document.getElementById('regulator-checkbox');
const regulatorDisplay = document.getElementById('regulator-display');
const diveComputerCheckbox = document.getElementById('diveComputer-checkbox');
const diveComputerDisplay = document.getElementById('diveComputer-display');


bcdCheckbox.addEventListener('change', function () {
  if (bcdCheckbox.checked) {
    bcdDisplay.style.display = 'block';
  } else {
    bcdDisplay.style.display = 'none';
}
});

bootiesCheckbox.addEventListener('change', function () {
  if (bootiesCheckbox.checked) {
    bootiesDisplay.style.display = 'block';
  }
  else {
  bootiesDisplay.style.display = 'none';
}
});

maskCheckbox.addEventListener('change', function () {
  if (maskCheckbox.checked) {
    maskDisplay.style.display = 'block';
  }
  else {
  maskDisplay.style.display = 'none';
}
});

shortFinsCheckbox.addEventListener('change', function () {
  if (shortFinsCheckbox.checked) {
    shortFinsDisplay.style.display = 'block';
  }
  else {
  shortFinsDisplay.style.display = 'none';
}
});

snorkelCheckbox.addEventListener('change', function () {
  if (snorkelCheckbox.checked) {
    snorkelDisplay.style.display = 'block';
  }
  else {
  snorkelDisplay.style.display = 'none';
}
});

weightCheckbox.addEventListener('change', function () {
  if (weightCheckbox.checked) {
    weightDisplay.style.display = 'block';
  }
  else {
  weightDisplay.style.display = 'none';
}
});

surfaceCheckbox.addEventListener('change', function () {
  if (surfaceCheckbox.checked) {
    surfaceDisplay.style.display = 'block';
  }
  else {
  surfaceDisplay.style.display = 'none';
}
});

regulatorCheckbox.addEventListener('change', function () {
  if (regulatorCheckbox.checked) {
    regulatorDisplay.style.display = 'block';
  }
  else {
  regulatorDisplay.style.display = 'none';
}
});

diveComputerCheckbox.addEventListener('change', function () {
  if (diveComputerCheckbox.checked) {
    diveComputerDisplay.style.display = 'block';
  }
  else {
  diveComputerDisplay.style.display = 'none';
}
});


const freemaskCheckbox = document.getElementById('freemask-checkbox');
const freemaskDisplay = document.getElementById('freemask-display');
const longFinsCheckbox = document.getElementById('longFins-checkbox');
const longFinsDisplay = document.getElementById('longFins-display');
const freesnorkelCheckbox = document.getElementById('freesnorkel-checkbox');
const freesnorkelDisplay = document.getElementById('freesnorkel-display');
const freeweightCheckbox = document.getElementById('freeweight-checkbox');
const freeweightDisplay = document.getElementById('freeweight-display');
const freediveComputerCheckbox = document.getElementById('freediveComputer-checkbox');
const freediveComputerDisplay = document.getElementById('freediveComputer-display');


freemaskCheckbox.addEventListener('change', function () {
  if (freemaskCheckbox.checked) {
    freemaskDisplay.style.display = 'block';
  }
  else {
  freemaskDisplay.style.display = 'none';
}
});

longFinsCheckbox.addEventListener('change', function () {
  if (longFinsCheckbox.checked) {
    longFinsDisplay.style.display = 'block';
  }
  else {
  longFinsDisplay.style.display = 'none';
}
});

freesnorkelCheckbox.addEventListener('change', function () {
  if (freesnorkelCheckbox.checked) {
    freesnorkelDisplay.style.display = 'block';
  }
  else {
  freesnorkelDisplay.style.display = 'none';
}
});

freeweightCheckbox.addEventListener('change', function () {
  if (freeweightCheckbox.checked) {
    freeweightDisplay.style.display = 'block';
  }
  else {
  freeweightDisplay.style.display = 'none';
}
});

freediveComputerCheckbox.addEventListener('change', function () {
  if (freediveComputerCheckbox.checked) {
    freediveComputerDisplay.style.display = 'block';
  }
  else {
  freediveComputerDisplay.style.display = 'none';
}
});