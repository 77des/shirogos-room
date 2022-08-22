//format buttons
const firstButtonFormats = document.querySelectorAll(
  ".formats .first-button div"
);
const secondButtonFormats = document.querySelectorAll(
  ".formats .second-button div"
);
const thirdButtonFormats = document.querySelectorAll(
  ".formats .third-button div"
);
let firstButton = document.querySelector(".formats .first-button .dan-button");
let secondButton = document.querySelector(
  ".formats .second-button .dan-button"
);
let thirdButton = document.querySelector(".formats .third-button .dan-button");

let firstActiveIndex = getRandomInt(0, 7);
let secondActiveIndex = getRandomInt(0, 7);
let thirdActiveIndex = getRandomInt(0, 7);

firstButtonFormats[firstActiveIndex].style.opacity = 1;
secondButtonFormats[secondActiveIndex].style.opacity = 1;
thirdButtonFormats[thirdActiveIndex].style.opacity = 1;

firstButton.addEventListener("click", function () {
  let newIndex =  firstActiveIndex;
  while (newIndex == firstActiveIndex) {
    newIndex = getRandomInt(0, 7);
  }
  firstSwitchFormats(firstButtonFormats, firstActiveIndex, newIndex);
});
secondButton.addEventListener("click", function () {
  let newIndex =  secondActiveIndex;
  while (newIndex == secondActiveIndex) {
    newIndex = getRandomInt(0, 7);
  }
  secondSwitchFormats(secondButtonFormats, secondActiveIndex, newIndex);
});
thirdButton.addEventListener("click", function () {
  let newIndex =  thirdActiveIndex;
  while (newIndex == thirdActiveIndex) {
    newIndex = getRandomInt(0, 7);
  }
  thirdSwitchFormats(thirdButtonFormats, thirdActiveIndex, newIndex);
});

function firstSwitchFormats(buttonFormats, activeIndex, newIndex) {
  buttonFormats[firstActiveIndex].style.opacity = 0;
  buttonFormats[newIndex].style.opacity = 1;
  firstActiveIndex = newIndex;
}

function secondSwitchFormats(buttonFormats, activeIndex, newIndex) {
  buttonFormats[secondActiveIndex].style.opacity = 0;
  buttonFormats[newIndex].style.opacity = 1;
  secondActiveIndex = newIndex;
}

function thirdSwitchFormats(buttonFormats, activeIndex, newIndex) {
  buttonFormats[thirdActiveIndex].style.opacity = 0;
  buttonFormats[newIndex].style.opacity = 1;
  thirdActiveIndex = newIndex;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}

//modal window
document.addEventListener("DOMContentLoaded", function () {
  var modalButtons = document.querySelectorAll(".js-open-modal"),
    overlay = document.querySelector("#overlay-modal"),
    closeButtons = document.querySelectorAll(".js-modal-close");

  /* открытие окон. */
  modalButtons.forEach(function (item) {
    item.addEventListener("click", function (e) {
      e.preventDefault();
      document.body.classList.add("disabled-onepage-scroll");

      var modalId = this.getAttribute("data-modal"),
        modalElem = document.querySelector(
          '.modal[data-modal="' + modalId + '"]'
        );

      modalElem.classList.add("active");
      overlay.classList.add("active");
    }); // end click
  }); // end foreach

  /* закрытие окон */
  closeButtons.forEach(function (item) {
    item.addEventListener("click", function (e) {
      var parentModal = this.closest(".modal");

      parentModal.classList.remove("active");
      overlay.classList.remove("active");
      document.body.classList.remove("disabled-onepage-scroll");
    });
    item.addEventListener("mouseover", function () {
      item.src = "./imgs/close-hover.svg";
    });
    item.addEventListener("mouseout", function () {
      item.src = "./imgs/close.svg";
    });
  }); // end foreach

  /* закрытие по ESC */
  // document.body.addEventListener(
  //   "keyup",
  //   function (e) {
  //     var key = e.keyCode;

  //     if (key == 27) {
  //       document.querySelector(".modal.active").classList.remove("active");
  //       document.querySelector(".overlay.active").classList.remove("active");
  //       document.body.classList.remove("disabled-onepage-scroll");
  //     }
  //   },
  //   false
  // );

  /* скрытие окна при клике на подложку */
  overlay.addEventListener("click", function () {
    document.querySelector(".modal.active").classList.remove("active");
    this.classList.remove("active");
  });
}); // end ready

//First-donaters modal window slider
let donSliderBttns = document.querySelectorAll(
  ".first-donaters .slider-imgs button"
);
let donImgs = document.querySelectorAll(".first-donaters .donaters-imgs img");

for (let i = 0; i < donImgs.length; i++) {
  if (donImgs[i].classList.contains("active")) {
    var prevImg = donImgs[i];
  }
  if (donSliderBttns[i].classList.contains("active")) {
    var prevBttn = donSliderBttns[i];
  }
  donSliderBttns[i].addEventListener("click", function () {
    prevImg.classList.remove("active");
    donImgs[i].classList.add("active");
    prevImg = donImgs[i];
    prevBttn.classList.remove("active");
    donSliderBttns[i].classList.add("active");
    prevBttn = donSliderBttns[i];
  });
}

//content-chronicles modal nav
let chronBttns = document.querySelectorAll(
  ".content-chronicles .content-bttns button"
);
let contentInfo = document.querySelectorAll(".content-info>div");

for (let i = 0; i < contentInfo.length; i++) {
  if (contentInfo[i].classList.contains("active")) {
    var prevInfo = contentInfo[i];
  }
  if (chronBttns[i].classList.contains("active")) {
    var prevChronBttn = chronBttns[i];
  }
  chronBttns[i].addEventListener("click", function () {
    prevInfo.classList.remove("active");
    contentInfo[i].classList.add("active");
    prevInfo = contentInfo[i];
    prevChronBttn.classList.remove("active");
    chronBttns[i].classList.add("active");
    prevChronBttn = chronBttns[i];
  });
}

//faction-tournament modal

//category buttons
let categoryBttns = document.querySelectorAll('.faction-tournament .main-content .left-bttns a');
let categoryContent = document.querySelectorAll('.faction-tournament .main-content .right-content');

for (let i = 0; i < categoryBttns.length; i++) {
  categoryBttns[i].addEventListener('click', function(event) {
    event.preventDefault();
    let activeCategoryBttn = document.querySelector('.faction-tournament .main-content .left-bttns a.active');
    let activeCategoryContent = document.querySelector('.faction-tournament .main-content .right-content.active');

    activeCategoryBttn.classList.remove('active');
    categoryBttns[i].classList.add('active');
    activeCategoryContent.classList.remove('active');
    categoryContent[i].classList.add('active');
  })
}

//weeks buttons
let weeksContent = document.querySelectorAll('.faction-tournament .main-content > div > div');
let weekBttns = document.querySelectorAll('.faction-tournament .week-dropdown a');
let weekDropdown = document.querySelector('.faction-tournament .week-dropdown');
let weekSelectBttn = document.querySelector('.faction-tournament .week-select');
let weekSelectBttnText = weekSelectBttn.querySelector('p');
let weekSelectArrow = weekSelectBttn.querySelector('div');

weekSelectBttn.addEventListener('click', function() {
  weekDropdown.classList.toggle('active');
  tourDropdown.classList.remove('active');
  if (weekDropdown.classList.contains('active')) {
    weekSelectArrow.classList.remove('arrow-bottom');
    weekSelectArrow.classList.add('arrow-left');
  } else {
    weekSelectArrow.classList.remove('arrow-left');
    weekSelectArrow.classList.add('arrow-bottom');
  }
  if (tourDropdown.classList.contains('active')) {
    tourSelectArrow.classList.remove('arrow-bottom');
    tourSelectArrow.classList.add('arrow-left');
  } else {
    tourSelectArrow.classList.remove('arrow-left');
    tourSelectArrow.classList.add('arrow-bottom');
  }
})


for (let i = 0; i < weekBttns.length; i++) {
  weekBttns[i].addEventListener('click', function(event) {
    event.preventDefault();
    let activeWeekBttn = document.querySelector('.faction-tournament .week-dropdown a.active');
    let activeWeekContent = document.querySelector('.faction-tournament .main-content > div > div.active');

    activeWeekBttn.classList.remove('active');
    weekBttns[i].classList.add('active');
    activeWeekContent.classList.remove('active');
    if (toursContent[0].classList.contains('active')) {
      weeksContent[i].classList.add('active');
      switchCategory(weeksContent[i]);
    } else if (toursContent[1].classList.contains('active')) {
      weeksContent[i+7].classList.add('active');
      switchCategory(weeksContent[i+7]);
    } else if (toursContent[2].classList.contains('active')) {
      weeksContent[i+14].classList.add('active');
      switchCategory(weeksContent[i+14]);
    } else if (toursContent[3].classList.contains('active')) {
      weeksContent[i+19].classList.add('active');
      switchCategory(weeksContent[i+19]);
    }
    weekDropdown.classList.remove('active');
    weekSelectArrow.classList.remove('arrow-left');
    weekSelectArrow.classList.add('arrow-bottom');
    weekSelectBttnText.innerHTML = weekBttns[i].innerHTML;
    if (weekSelectBttnText.innerHTML == 'Результаты') {
      weekSelectBttnText.classList.add('result-text');
    } else if (weekSelectBttnText.classList.contains('result-text')) {
      weekSelectBttnText.classList.remove('result-text');
    }
    if (weekSelectBttnText.innerHTML.includes('День')) {
      weekSelectBttnText.classList.add('day-text');
    } else if (weekSelectBttnText.classList.contains('day-text')) {
      weekSelectBttnText.classList.remove('day-text');
    }
  })
}

let toursContent = document.querySelectorAll('.faction-tournament .main-content > div');
let tourBttns = document.querySelectorAll('.faction-tournament .tournament-dropdown a');
let tourDropdown = document.querySelector('.faction-tournament .tournament-dropdown');
let tourSelectBttn = document.querySelector('.faction-tournament .tournament-select');
let tourSelectArrow = tourSelectBttn.querySelector('div');
let tourSelectBttnText = tourSelectBttn.querySelector('p');
let prevActiveTour = 1;

tourSelectBttn.addEventListener('click', function() {
  tourDropdown.classList.toggle('active');
  weekDropdown.classList.remove('active');
  if (weekDropdown.classList.contains('active')) {
    weekSelectArrow.classList.remove('arrow-bottom');
    weekSelectArrow.classList.add('arrow-left');
  } else {
    weekSelectArrow.classList.remove('arrow-left');
    weekSelectArrow.classList.add('arrow-bottom');
  }
  if (tourDropdown.classList.contains('active')) {
    tourSelectArrow.classList.remove('arrow-bottom');
    tourSelectArrow.classList.add('arrow-left');
  } else {
    tourSelectArrow.classList.remove('arrow-left');
    tourSelectArrow.classList.add('arrow-bottom');
  }
})

weekBttns[6].style.borderBottom = "3px solid #181818";

for (let i = 0; i < tourBttns.length; i++) {
  tourBttns[i].addEventListener('click', function(event) {
    event.preventDefault();
    let activeTourBttn = document.querySelector('.faction-tournament .tournament-dropdown a.active');
    let activeTourContent = document.querySelector('.faction-tournament .main-content > div.active');

    activeTourBttn.classList.remove('active');
    tourBttns[i].classList.add('active');
    activeTourContent.classList.remove('active');
    toursContent[i].classList.add('active');
    tourDropdown.classList.remove('active');
    tourSelectArrow.classList.remove('arrow-left');
    tourSelectArrow.classList.add('arrow-bottom');
    tourSelectBttnText.innerHTML = tourBttns[i].innerHTML;

    let prevActiveWeekBttn = document.querySelector('.faction-tournament .week-dropdown a.active');
    let prevActiveWeekContent = document.querySelector('.faction-tournament .main-content > div > div.active');
    let newActiveWeekBttn = document.querySelector('.faction-tournament .week-dropdown a:first-child')
    let newActiveWeekContent = toursContent[i].querySelector('div:first-child');

    prevActiveWeekBttn.classList.remove('active');
    newActiveWeekBttn.classList.add('active');
    prevActiveWeekContent.classList.remove('active');
    newActiveWeekContent.classList.add('active');
    weekSelectBttnText.innerHTML = weekBttns[0].innerHTML;
    if (weekSelectBttnText.classList.contains('result-text')) {
      weekSelectBttnText.classList.remove('result-text');
    }
    if (i == 3) {
      weekSelectBttnText.classList.add('day-text');
    } else if (weekSelectBttnText.classList.contains('day-text')) {
      weekSelectBttnText.classList.remove('day-text');
    }

    switchCategory(newActiveWeekContent);

    if (tourBttns[2].classList.contains('active')) {
      if (prevActiveTour == 4) {
        for (let i = 5; i <= 15; i++) {
          weekBttns[i].style.display = 'none';
        }
        for (let i = 1; i <= 4; i++) {
          weekBttns[i-1].innerHTML = 'Неделя ' + i;
        }
      } else if (prevActiveTour == 1 || prevActiveTour == 2) {
        weekBttns[5].style.display = 'none';
        weekBttns[6].style.display = 'none';
      }
      weekBttns[4].innerHTML = 'Результаты';
      weekBttns[4].style.borderBottom = "3px solid #181818";
      prevActiveTour = 3;
      weekSelectBttnText.innerHTML = 'Неделя 1';
    } else if (tourBttns[0].classList.contains('active') || tourBttns[1].classList.contains('active')) {
      if (prevActiveTour == 3) {
        weekBttns[5].style.display = 'block';
        weekBttns[6].style.display = 'block';
        weekBttns[4].innerHTML = 'Неделя 5';
        weekBttns[5].innerHTML = 'Неделя 6';
        weekBttns[6].innerHTML = 'Результаты';
        weekBttns[4].style.borderBottom = "none";
      } else if (prevActiveTour == 4) {
        for (let i = 7; i <= 15; i++) {
          weekBttns[i].style.display = 'none';
        }
        for (let i = 1; i <= 6; i++) {
          weekBttns[i-1].innerHTML = 'Неделя ' + i;
        }
        weekBttns[6].innerHTML = 'Результаты';
      }
      weekBttns[6].style.borderBottom = "3px solid #181818";
      prevActiveTour = 1;
      weekSelectBttnText.innerHTML = 'Неделя 1';
    } else if (tourBttns[3].classList.contains('active')) {
      if (prevActiveTour == 1 || prevActiveTour == 2) {
        for (let i = 7; i <= 15; i++) {
          weekBttns[i].style.display = 'block';
        }
        weekBttns[6].style.borderBottom = "none";
      } else if (prevActiveTour == 3) {
        for (let i = 5; i <= 15; i++) {
          weekBttns[i].style.display = 'block';
        }
        weekBttns[4].style.borderBottom = "none";
      }
      for (let i = 1; i <= 7; i++) {
        weekBttns[i-1].innerHTML = 'День ' + i;
      }
      weekBttns[15].style.borderBottom = "3px solid #181818";
      weekSelectBttnText.innerHTML = 'День 1';
      prevActiveTour = 4;
    }
  })
}

function switchCategory(newWeekContent) {
  let prevActiveCategoryBttn = document.querySelector('.faction-tournament .main-content .left-bttns a.active');
  let prevActiveCategoryContent = document.querySelector('.faction-tournament .main-content .right-content.active');
  let newActiveLeftBttns = newWeekContent.querySelectorAll('.left-bttns a');
  let newActiveCategoryContent = newWeekContent.querySelectorAll('.faction-tournament .right-content');

  prevActiveCategoryBttn.classList.remove('active');
  newActiveLeftBttns[0].classList.add('active');
  prevActiveCategoryContent.classList.remove('active');
  newActiveCategoryContent[0].classList.add('active');
}

//facttour img zoom-in
let allImgs = document.querySelectorAll('.faction-tournament .right-content img');
let zoomedImg = document.querySelector('#zoomed-img');
let overlayImg = document.querySelector('#overlay-img');

for (let img of allImgs) {
  img.addEventListener('click', function() {
    zoomedImg.src = img.src;
    zoomedImg.classList.add('active');
    overlayImg.classList.add('active');
  })
}

zoomedImg.addEventListener('click', function() {
  zoomedImg.classList.remove('active');
  overlayImg.classList.remove('active');
})

document.body.addEventListener(
  "keyup",
  function (e) {
    var key = e.keyCode;

    if (zoomedImg.classList.contains('active')) {
      if (key == 27) {
        zoomedImg.classList.remove("active");
        overlayImg.classList.remove("active");
      }
    } else {
      if (key == 27) {
        document.querySelector(".modal.active").classList.remove("active");
        document.querySelector(".overlay.active").classList.remove("active");
        document.body.classList.remove("disabled-onepage-scroll");
      }
    }
  },
  false
);

//dango-rating table
let topArrow = document.querySelector(".rating .rating-table .top-arrow img");
let bottomArrow = document.querySelector(
  ".rating .rating-table .bottom-arrow img"
);
let tables = document.querySelectorAll(".rating .rating-table table");
let activeTable;

bottomArrow.addEventListener("click", function () {
  setTimeout(function () {
    for (let i = 0; i < tables.length; i++) {
      if (tables[i].classList.contains("active") && i != tables.length - 1) {
        tables[i + 1].classList.add("active");
        tables[i].classList.remove("active");
        if (i + 2 == tables.length) {
          bottomArrow.src = "./imgs/bottom-table-arrow-disabled.svg";
          bottomArrow.classList.add("disabled");
        }
        topArrow.src = "./imgs/top-table-arrow.svg";
        topArrow.classList.remove("disabled");
        break;
      }
    }
  }, 1100);
});

topArrow.addEventListener("click", function () {
  setTimeout(function () {
    for (let i = 0; i < tables.length; i++) {
      if (tables[i].classList.contains("active") && i != 0) {
        tables[i - 1].classList.add("active");
        tables[i].classList.remove("active");
        bottomArrow.src = "./imgs/bottom-table-arrow.svg";
        bottomArrow.classList.remove("disabled");
        if (i - 1 == 0) {
          topArrow.src = "./imgs/top-table-arrow-disabled.svg";
          topArrow.classList.add("disabled");
        }
        break;
      }
    }
  }, 1100);
});

