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

let firstActiveIndex = getRandomInt(0, 6);
let secondActiveIndex = getRandomInt(0, 6);
let thirdActiveIndex = getRandomInt(0, 6);

firstButtonFormats[firstActiveIndex].style.opacity = 1;
secondButtonFormats[secondActiveIndex].style.opacity = 1;
thirdButtonFormats[thirdActiveIndex].style.opacity = 1;

firstButton.addEventListener("click", function () {
  let newIndex =  firstActiveIndex;
  while (newIndex == firstActiveIndex) {
    newIndex = getRandomInt(0, 6);
  }
  firstSwitchFormats(firstButtonFormats, firstActiveIndex, newIndex);
});
secondButton.addEventListener("click", function () {
  let newIndex =  secondActiveIndex;
  while (newIndex == secondActiveIndex) {
    newIndex = getRandomInt(0, 6);
  }
  secondSwitchFormats(secondButtonFormats, secondActiveIndex, newIndex);
});
thirdButton.addEventListener("click", function () {
  let newIndex =  thirdActiveIndex;
  while (newIndex == thirdActiveIndex) {
    newIndex = getRandomInt(0, 6);
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
  document.body.addEventListener(
    "keyup",
    function (e) {
      var key = e.keyCode;

      if (key == 27) {
        document.querySelector(".modal.active").classList.remove("active");
        document.querySelector(".overlay.active").classList.remove("active");
        document.body.classList.remove("disabled-onepage-scroll");
      }
    },
    false
  );

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

contentSwitch();

//faction-tournament modal left-bttns
function contentSwitch() {
  let currentTour = document.querySelector(
    ".faction-tournament .main-content>div.active"
  );
  let currentWeek = document.querySelector(
    ".faction-tournament ." + currentTour.classList[0] + ">div.active"
  );
  let leftBttns = document.querySelectorAll(
    "." +
      currentTour.classList[0] +
      " ." +
      currentWeek.classList[0] +
      " .left-bttns a"
  );
  let rightContent = document.querySelectorAll(
    "." +
      currentTour.classList[0] +
      " ." +
      currentWeek.classList[0] +
      " .right-content"
  );

  for (let i = 0; i < rightContent.length; i++) {
    if (rightContent[i].classList.contains("active")) {
      var prevContent = rightContent[i];
    }
    if (leftBttns[i].classList.contains("active")) {
      var prevLeftBttn = leftBttns[i];
    }
    leftBttns[i].addEventListener("click", function (event) {
      event.preventDefault();
      prevContent.classList.remove("active");
      rightContent[i].classList.add("active");
      prevContent = rightContent[i];
      prevLeftBttn.classList.remove("active");
      leftBttns[i].classList.add("active");
      prevLeftBttn = leftBttns[i];
    });
  }
}

//faction-tournament week-drowdown
let currentTour = document.querySelector(
  ".faction-tournament .main-content>div.active"
);
let currentWeek = document.querySelector(
  ".faction-tournament ." + currentTour.classList[0] + ">div.active"
);
let weekSelectBttn = document.querySelector(
  ".faction-tournament .select-bttns .week-select"
);
let weekDropdown = document.querySelector(".faction-tournament .week-dropdown");
let weekDropdownBttns = document.querySelectorAll(
  ".faction-tournament .week-dropdown a"
);
let allWeeks = document.querySelectorAll(
  ".faction-tournament ." + currentTour.classList[0] + ".first-tour>div"
);

weekSelectBttn.addEventListener("click", function () {
  if (weekDropdown.classList.contains("active")) {
    weekDropdown.classList.remove("active");
  } else {
    weekDropdown.classList.add("active");
  }
});

for (let i = 0; i < weekDropdownBttns.length; i++) {
  if (weekDropdownBttns[i].classList.contains("active")) {
    var activeWeek = weekDropdownBttns[i];
  }
  weekDropdownBttns[i].addEventListener("click", function (event) {
    event.preventDefault();
    console.log(allWeeks);
    currentWeek.classList.remove("active");
    allWeeks[i].classList.add("active");
    currentWeek = allWeeks[i];
    activeWeek.classList.remove("active");
    weekDropdownBttns[i].classList.add("active");
    activeWeek = weekDropdownBttns[i];
    weekSelectBttn.innerHTML =
      weekDropdownBttns[i].innerHTML + '<div class="arrow-bottom"></div>';
    weekDropdown.classList.remove("active");
  });
}

let tourSelectBttn = document.querySelector(
  ".faction-tournament .select-bttns .tournament-select"
);
let tourDropdown = document.querySelector(
  ".faction-tournament .tournament-dropdown"
);
let tourDropdownBttns = document.querySelectorAll(
  ".faction-tournament .tournament-dropdown a"
);
let allTours = document.querySelectorAll(
  ".faction-tournament .main-content>div"
);

tourSelectBttn.addEventListener("click", function () {
  if (tourDropdown.classList.contains("active")) {
    tourDropdown.classList.remove("active");
  } else {
    tourDropdown.classList.add("active");
  }
});

for (let i = 0; i < tourDropdownBttns.length; i++) {
  if (tourDropdownBttns[i].classList.contains("active")) {
    var activeTour = tourDropdownBttns[i];
  }
  tourDropdownBttns[i].addEventListener("click", function (event) {
    event.preventDefault();
    currentTour.classList.remove("active");
    allTours[i].classList.add("active");
    currentTour = allTours[i];
    activeTour.classList.remove("active");
    tourDropdownBttns[i].classList.add("active");
    activeTour = tourDropdownBttns[i];
    tourSelectBttn.innerHTML =
      tourDropdownBttns[i].innerHTML + '<div class="arrow-bottom"></div>';
    tourDropdown.classList.remove("active");
    contentSwitch();
  });
}

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
