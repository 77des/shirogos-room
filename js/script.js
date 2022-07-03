//logo hover effect
let logoLink = document.querySelector('header .logo-link');
let logoImg = document.querySelector('header .logo-link img');

logoLink.addEventListener('mouseover', function() {
    logoImg.src = "./imgs/logohover.svg";
})
logoLink.addEventListener('mouseout', function() {
    logoImg.src = "./imgs/logo.svg";
})

//services buttons
let servicesTypes = document.querySelectorAll('.services-types>div');
let servicesInfo = document.querySelectorAll('.services-info>div');
let priceBttns = document.querySelectorAll('.services-content .price');
let titleBttns = document.querySelectorAll('.services-content .title');
let orderBttn = document.querySelector('.services .order-bttn button');
let activeType;
let activeInfo;

function switchServices(i) {
    if (servicesTypes[i].classList.contains('active')) {
        servicesTypes[i].classList.remove('active');
        servicesInfo[i].classList.remove('active');
        orderBttn.classList.remove('active');
    } else {
        if (activeType) {
            activeType.classList.remove('active');
        }
        servicesTypes[i].classList.add('active');
        activeType = servicesTypes[i];
        if (activeInfo) {
            activeInfo.classList.remove('active');
        }
        servicesInfo[i].classList.add('active');
        activeInfo = servicesInfo[i];
        if (!orderBttn.classList.contains('active')) {
            orderBttn.classList.add('active');
        }
    }
}

for (let i = 0; i < priceBttns.length; i++) {
    priceBttns[i].addEventListener('click', function() {
        switchServices(i);
    })
    titleBttns[i].addEventListener('click', function() {
        switchServices(i);
    })
}