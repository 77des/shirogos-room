let loginLink = document.querySelector('.header-content .login a');

loginLink.addEventListener('click', function(event) {
  event.preventDefault();
})


//logo hover effect
let logoLink = document.querySelector("header .logo-link");
let logoImg = document.querySelector("header .logo-link img");

logoLink.addEventListener("mouseover", function () {
  logoImg.src = "./imgs/logohover.svg";
});
logoLink.addEventListener("mouseout", function () {
  logoImg.src = "./imgs/logo.svg";
});

//services buttons
let servicesTypes = document.querySelectorAll(".services-types>div");
let servicesInfo = document.querySelectorAll(".services-info>div");
let priceBttns = document.querySelectorAll(".services-content .price");
let titleBttns = document.querySelectorAll(".services-content .title");
let orderBttn = document.querySelector(".services .order-bttn button");
let activeType;
let activeInfo;

function switchServices(i) {
  if (servicesTypes[i].classList.contains("active")) {
    servicesTypes[i].classList.remove("active");
    servicesInfo[i].classList.remove("active");
    orderBttn.classList.remove("active");
  } else {
    if (activeType) {
      activeType.classList.remove("active");
    }
    servicesTypes[i].classList.add("active");
    activeType = servicesTypes[i];
    if (activeInfo) {
      activeInfo.classList.remove("active");
    }
    servicesInfo[i].classList.add("active");
    activeInfo = servicesInfo[i];
    if (!orderBttn.classList.contains("active")) {
      orderBttn.classList.add("active");
    }
  }
}

for (let i = 0; i < priceBttns.length; i++) {
  priceBttns[i].addEventListener("click", function () {
    switchServices(i);
  });
  titleBttns[i].addEventListener("click", function () {
    switchServices(i);
  });
}

//services buttons set margins
if (document.location.pathname == "/shirogos-room/butik.html") {
  let profileInfo = document.querySelector(".services .profile-info");
  let orderBttnDiv = document.querySelector(".services .order-bttn");
  let typesTopMargins = ["454px", "288px", "241px", "274px", "350px", "482px"];
  let accountInfoTopMargins = [
    "450px",
    "381px",
    "431px",
    "561px",
    "734px",
    "963px",
  ];  
  let prevActiveServiceType;

  if (window.matchMedia("(max-width: 768px)").matches) {
    for (let i = 0; i < servicesTypes.length - 1; i++) {
      servicesTypes[i].addEventListener("click", function () {
        if (prevActiveServiceType) {
          prevActiveServiceType.style.marginTop = "0";
        }
        if (servicesTypes[i].classList.contains("active")) {
          servicesTypes[i + 1].style.marginTop = typesTopMargins[i];
          profileInfo.style.top = accountInfoTopMargins[i];
          orderBttnDiv.style.top = accountInfoTopMargins[i];
          profileInfo.classList.add("active");
          orderBttnDiv.classList.add("active");
          prevActiveServiceType = servicesTypes[i + 1];
        } else {
          servicesTypes[i + 1].style.marginTop = "0";
          profileInfo.classList.remove("active");
          orderBttnDiv.classList.remove("active");
        }
      });
    }
    servicesTypes[servicesTypes.length - 1].addEventListener(
      "click",
      function () {
        if (prevActiveServiceType) {
          prevActiveServiceType.style.marginTop = "0";
        }
        if (
          servicesTypes[servicesTypes.length - 1].classList.contains("active")
        ) {
          profileInfo.style.top = "876px";
          orderBttnDiv.style.top = "876px";
          profileInfo.classList.add("active");
          orderBttnDiv.classList.add("active");
          prevActiveServiceType = servicesTypes[servicesTypes.length - 1];
        } else {
          profileInfo.classList.remove("active");
          orderBttnDiv.classList.remove("active");
        }
      }
    );
  }
}


//butik mobile links
if (window.matchMedia('(max-width: 768px)').matches) {
  let butikDangoImgs = document.querySelectorAll('.butik-content > div > img');

  for (let img of butikDangoImgs) {
    img.addEventListener('click', function() {
      window.open('https://imgur.com/a/CXpDWTO');
    })
  }
}