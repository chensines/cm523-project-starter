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
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    });

    $('.slick-slider').on('afterChange', function (event, slick, currentSlide) {
      currentPage = currentSlide;

      if ((currentPage === 1 || currentPage === 2) && !alertCounter[currentPage]) {
        alert('Choose all the equipment you need!');
        alertCounter[currentPage] = 1;
      }
    });

    setupButtonHandlers();
  }

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
        alert('Choose ALL the equipment you need!');
      }
    });

    $('#prevBtn3').on('click', function () {
      const previousPage = currentPage === 3 ? 1 : 2;
      $('.slick-slider').slick('slickGoTo', previousPage);
    });

    $('#dive').on('click', function () {
      $('.slick-slider').fadeOut(500, function() {
        $('#simulation').fadeIn(500);
      });
    });    
  }
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

const scubaIcon = document.getElementById('scubaicon');
const container = document.getElementById('simulation');

// Initial position
let positionX = 600;
let positionY = 200;

const step = 20;

let direction = 0;

function updatePosition() {
    scubaIcon.style.left = `${positionX}px`;
    scubaIcon.style.top = `${positionY}px`;
    scubaIcon.style.transform = `translate(-50%, -50%) rotate(${direction}deg)`;
}

function updateAirPressure() {

}

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
    updateBar()
});


updatePosition();


document.addEventListener('DOMContentLoaded', () => {
  const countdownSeconds = 35;
  let timeRemaining = countdownSeconds;

  const timerBar = document.getElementById('timer-bar');
  timerBar.style.width = '100%';

  const interval = setInterval(() => {
    timeRemaining--;
    const widthPercentage = (timeRemaining / countdownSeconds) * 100;
    timerBar.style.width = `${widthPercentage}%`;

    if (timeRemaining <= 0) {
      clearInterval(interval);
      alert(`Time's Up!`);
    }
  }, 1000);
});
