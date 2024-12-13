let currentPage = 0;
const alertCounter = {};

$(document).ready(function () {
  $('.main').hide();

  $('#start-btn').on('click', function () {
    $('#welcome-page').fadeOut(500, function () {
      $('.main').fadeIn(500);
      initializeSlider();
      $('#simulation').hide();
    });
  });
  

  function initializeSlider() {
    $('.slick-slider').slick({
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            arrows: false, 
            adaptiveHeight: true,
          }
        }
      ]
    });

    $(window).on('resize', function () {
      $('.slick-slider').slick('setPosition');
      $('.slick-slide').css('overflow', 'hidden');
    });
    

    $('.slick-slider').on('afterChange', function (event, slick, currentSlide) {
      currentPage = currentSlide;

      if (currentPage === 1 && !alertCounter[currentPage]) {
        onForScuba();
        alertCounter[currentPage] = 1; 
      } else if (currentPage === 2 && !alertCounter[currentPage]) {
        onForFree();
        alertCounter[currentPage] = 1; 
      }
    });

    setupButtonHandlers();
  }

  function onForScuba() {
    document.getElementById('instructions-scuba').style.display = "block";
  }

  function onForFree() {
    document.getElementById('instructions-free').style.display = "block";
  }

  const gotcha1 = document.getElementById('gotcha1');
  gotcha1.addEventListener('click', function () {
    document.getElementById('instructions-scuba').style.display = "none";
  });

  const gotcha2 = document.getElementById('gotcha2');
  gotcha2.addEventListener('click', function () {
    document.getElementById('instructions-free').style.display = "none";
  });

  function setupButtonHandlers() {
    $('#scuba-btn').on('click', () => $('.slick-slider').slick('slickGoTo', 1));
    $('#free-btn').on('click', () => $('.slick-slider').slick('slickGoTo', 2));
    $('#prevBtn1, #prevBtn2').on('click', () => $('.slick-slider').slick('slickGoTo', 0));

    $('#nextBtn1, #nextBtn2').on('click', function () {
      const currentPageCheckboxes = $('.slick-active input[type="checkbox"]');
      const allChecked = currentPageCheckboxes.length === currentPageCheckboxes.filter(':checked').length;

      if (allChecked) {
        $('.slick-slider').slick('slickGoTo', 3);
      } else {
        on();
      }
    });

    function on() {
      document.getElementById("popup").style.display = "block";
    }

    const gotcha3 = document.getElementById('gotcha3');
    gotcha3.addEventListener('click', function () {
      document.getElementById("popup").style.display = "none";
    });

    $('#prevBtn3').on('click', function () {
      const previousPage = currentPage === 3 ? 1 : 2;
      $('.slick-slider').slick('slickGoTo', previousPage);
    });

    $('#dive').on('click', function () {
      $('.slick-slider').fadeOut(500, function () {
        $('#simulation').fadeIn(500);
      });
    });
  }
});





 //scuba diving equipment clicking settings//
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
    bcdCheckbox.parentElement.classList.add('checked');
  } else {
    bcdDisplay.style.display = 'none';
    bcdCheckbox.parentElement.classList.remove('checked');
}
});

bootiesCheckbox.addEventListener('change', function () {
  if (bootiesCheckbox.checked) {
    bootiesDisplay.style.display = 'block';
    bootiesCheckbox.parentElement.classList.add('checked');
  }
  else {
  bootiesDisplay.style.display = 'none';
  bootiesheckbox.parentElement.classList.remove('checked');
}
});

maskCheckbox.addEventListener('change', function () {
  if (maskCheckbox.checked) {
    maskDisplay.style.display = 'block';
    maskCheckbox.parentElement.classList.add('checked');
  }
  else {
  maskDisplay.style.display = 'none';
  maskCheckbox.parentElement.classList.remove('checked');
}
});

shortFinsCheckbox.addEventListener('change', function () {
  if (shortFinsCheckbox.checked) {
    shortFinsDisplay.style.display = 'block';
    shortFinsCheckbox.parentElement.classList.add('checked');

  }
  else {
  shortFinsDisplay.style.display = 'none';
  shortFinsCheckbox.parentElement.classList.remove('checked');
}
});

snorkelCheckbox.addEventListener('change', function () {
  if (snorkelCheckbox.checked) {
    snorkelDisplay.style.display = 'block';
    snorkelCheckbox.parentElement.classList.add('checked');

  }
  else {
  snorkelDisplay.style.display = 'none';
  snorkelCheckbox.parentElement.classList.remove('checked');

}
});

weightCheckbox.addEventListener('change', function () {
  if (weightCheckbox.checked) {
    weightDisplay.style.display = 'block';
    weightCheckbox.parentElement.classList.add('checked');
    
  }
  else {
  weightDisplay.style.display = 'none';
  weightCheckbox.parentElement.classList.remove('checked');
}
});

surfaceCheckbox.addEventListener('change', function () {
  if (surfaceCheckbox.checked) {
    surfaceDisplay.style.display = 'block';
    surfaceCheckbox.parentElement.classList.add('checked');
  }
  else {
  surfaceDisplay.style.display = 'none';
  surfaceCheckbox.parentElement.classList.remove('checked');
}
});

regulatorCheckbox.addEventListener('change', function () {
  if (regulatorCheckbox.checked) {
    regulatorDisplay.style.display = 'block';
    regulatorCheckbox.parentElement.classList.add('checked');
  }
  else {
  regulatorDisplay.style.display = 'none';
  regulatorCheckbox.parentElement.classList.remove('checked');
}
});

diveComputerCheckbox.addEventListener('change', function () {
  if (diveComputerCheckbox.checked) {
    diveComputerDisplay.style.display = 'block';
    diveComputerCheckbox.parentElement.classList.add('checked');
  }
  else {
  diveComputerDisplay.style.display = 'none';
  diveComputerCheckbox.parentElement.classList.remove('checked');
}
});

 //freediving equipment clicking settings//
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
    freemaskCheckbox.parentElement.classList.add('checked');
  } else {
    freemaskDisplay.style.display = 'none';
    freemaskCheckbox.parentElement.classList.remove('checked'); 
  }
});


longFinsCheckbox.addEventListener('change', function () {
  if (longFinsCheckbox.checked) {
    longFinsDisplay.style.display = 'block';
    longFinsCheckbox.parentElement.classList.add('checked');
  }
  else {
  longFinsDisplay.style.display = 'none';
  longFinsCheckbox.parentElement.classList.remove('checked');
}
});

freesnorkelCheckbox.addEventListener('change', function () {
  if (freesnorkelCheckbox.checked) {
    freesnorkelDisplay.style.display = 'block';
    freesnorkelCheckbox.parentElement.classList.add('checked');
  }
  else {
  freesnorkelDisplay.style.display = 'none';
  freesnorkelCheckbox.parentElement.classList.remove('checked');
}
});

freeweightCheckbox.addEventListener('change', function () {
  if (freeweightCheckbox.checked) {
    freeweightDisplay.style.display = 'block';
    freeweightCheckbox.parentElement.classList.add('checked');
  }
  else {
  freeweightDisplay.style.display = 'none';
  freeweightCheckbox.parentElement.classList.remove('checked')
}
});

freediveComputerCheckbox.addEventListener('change', function () {
  if (freediveComputerCheckbox.checked) {
    freediveComputerDisplay.style.display = 'block';
    freediveComputerCheckbox.parentElement.classList.add('checked');
  }
  else {
  freediveComputerDisplay.style.display = 'none';
  freediveComputerCheckbox.parentElement.classList.remove('checked');
}
});

 // diver movement settings//
const scubaIcon = document.getElementById('scubaicon');
const container = document.getElementById('simulation');
const up = document.getElementById('up-Btn');
const down = document.getElementById('down-Btn');
const right = document.getElementById('right-Btn');
const left = document.getElementById('left-Btn');


let positionX = 600;
let positionY = 200;
const step = 10;
let direction = 0;

function adjustForScreenSize() {
  const smallScreen = window.matchMedia('(max-width: 400px)');

  if (smallScreen.matches) {
    // For screens <= 400px
    positionX = 200; 
    positionY = 200; 
    scubaIcon.style.width = '80px'; 
    scubaIcon.style.height = 'auto';
  } else {
    // For larger screens
    positionX = 600;
    positionY = 200;
    scubaIcon.style.width = '150px'; 
    scubaIcon.style.height = 'auto';
  }

  updatePosition();
}


function updatePosition() {
  scubaIcon.style.left = `${positionX}px`;
  scubaIcon.style.top = `${positionY}px`;
  scubaIcon.style.transform = `translate(-50%, -50%) rotate(${direction}deg)`;
}

// Listen for keydown events //
document.addEventListener('keydown', (event) => {
  switch (event.key) {
    case 'ArrowUp':
      positionY = Math.max(0, positionY - step);
      direction = -90;
      break;
    case 'ArrowDown':
      positionY = Math.min(container.offsetHeight - scubaIcon.offsetHeight, positionY + step);
      direction = 90;
      break;
    case 'ArrowLeft':
      positionX = Math.max(0, positionX - step);
      direction = 180; 
      break;
    case 'ArrowRight':
      positionX = Math.min(container.offsetWidth - scubaIcon.offsetWidth, positionX + step);
      direction = 0;
      break;
    default:
      return;
  }
  updatePosition();
});

// Listen for button clicks //
up.addEventListener('click', function () {
  positionY = Math.max(0, positionY - step);
  direction = -90;
  updatePosition();
});

down.addEventListener('click', function () {
  positionY = Math.min(container.offsetHeight - scubaIcon.offsetHeight, positionY + step);
  direction = 90;
  updatePosition();
});

left.addEventListener('click', function () {
  positionX = Math.max(0, positionX - step);
  direction = 180; 
  updatePosition();
});

right.addEventListener('click', function () {
  positionX = Math.min(container.offsetWidth - scubaIcon.offsetWidth, positionX + step);
  direction = 0;
  updatePosition();
});

up.addEventListener('touchstart', moveUp);
down.addEventListener('touchstart', moveDown);
left.addEventListener('touchstart', moveLeft);
right.addEventListener('touchstart', moveRight);


adjustForScreenSize();
window.addEventListener('resize', adjustForScreenSize);





