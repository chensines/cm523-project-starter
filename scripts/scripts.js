let currentPage = 0;
const alertCounter = {};

$(document).ready(function () {
  $('.main').hide();
  $('#oceanCanvas').hide();

  // Start Button Click
  $('#start-btn').on('click', function () {
    $('#welcome-page').fadeOut(500, function () {
      $('.main').fadeIn(500);
      initializeSlider();
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

    // Update current page on slide change
    $('.slick-slider').on('afterChange', function (event, slick, currentSlide) {
      currentPage = currentSlide;

      // Show alert once per slide if equipment is not selected
      if ((currentPage === 1 || currentPage === 2) && !alertCounter[currentPage]) {
        alert('Choose all the equipment you need!');
        alertCounter[currentPage] = 1;
      }
    });

    setupButtonHandlers();
  }

  function setupButtonHandlers() {
    // Navigation Buttons
    $('#scuba-btn').on('click', () => $('.slick-slider').slick('slickGoTo', 1));
    $('#free-btn').on('click', () => $('.slick-slider').slick('slickGoTo', 2));
    $('#prevBtn1, #prevBtn2').on('click', () => $('.slick-slider').slick('slickGoTo', 0));

    // Next Button Logic
    $('#nextBtn1, #nextBtn2').on('click', function () {
      const currentPageCheckboxes = $('.slick-active input[type="checkbox"]');
      const allChecked = currentPageCheckboxes.length === currentPageCheckboxes.filter(':checked').length;

      if (allChecked) {
        $('.slick-slider').slick('slickGoTo', 3);
      } else {
        alert('Choose ALL the equipment you need!');
      }
    });

    // Simulation Page
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

let canvas = document.getElementById('oceanCanvas');
    let ctx = canvas.getContext('2d');

    // 設置 canvas 的寬高
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // 加載背景圖像
    let oceanBackground = new Image();
    oceanBackground.src = 'images/pngtree-deep-sea-plant-sea-water-cartoon-illustration-advertising-background-picture-image_2249598.jpg';

    // 加載潛水員圖像
    let diver = new Image();
    diver.src = 'images/diver.png'; // 確保圖片存在

    // 初始潛水員位置
    let diverPosition = { x: canvas.width / 2, y: canvas.height / 2 };

    // 背景圖大小
    let backgroundWidth = 1200; // 根據實際圖片調整
    let backgroundHeight = 2141;

    // 監聽鍵盤事件
    document.addEventListener('keydown', function (event) {
      if (event.key === 'ArrowUp') {
        diverPosition.y -= 10;
      } else if (event.key === 'ArrowDown') {
        diverPosition.y += 10;
      } else if (event.key === 'ArrowLeft') {
        diverPosition.x -= 10;
      } else if (event.key === 'ArrowRight') {
        diverPosition.x += 10;
      }
    });

    // 更新畫布
    function updateCanvas() {
      ctx.clearRect(0, 0, canvas.width, canvas.height); // 清空畫布

      // 計算背景滾動位置
      let backgroundX = Math.max(0, Math.min(diverPosition.x - canvas.width / 2, backgroundWidth - canvas.width));
      let backgroundY = Math.max(0, Math.min(diverPosition.y - canvas.height / 2, backgroundHeight - canvas.height));

      // 繪製背景
      ctx.drawImage(oceanBackground, backgroundX, backgroundY, canvas.width, canvas.height, 0, 0, canvas.width, canvas.height);

      // 繪製潛水員（固定在畫布中心）
      ctx.drawImage(diver, canvas.width / 2 - 25, canvas.height / 2 - 25, 50, 50); // 潛水員尺寸為 50x50

      requestAnimationFrame(updateCanvas); // 繼續動畫
    }

    // 確保圖片加載完成後開始動畫
    oceanBackground.onload = function () {
      diver.onload = function () {
        updateCanvas();
      };
    };