//logo hover effect
let logoLink = document.querySelector('header .logo-link');
let logoImg = document.querySelector('header .logo-link img');

logoLink.addEventListener('mouseover', function() {
    logoImg.src = "../../imgs/logohover.svg";
})
logoLink.addEventListener('mouseout', function() {
    logoImg.src = "../../imgs/logo.svg";
})

//backbttn hover effect
let backBttn = document.querySelector('.back-bttn');
let backBttnImg = document.querySelector('.back-bttn img');

backBttn.addEventListener('mouseover', function() {
    backBttnImg.src = "../../imgs/wiki-reader/back-bttn-hover.svg";
})
backBttn.addEventListener('mouseout', function() {
    backBttnImg.src = "../../imgs/wiki-reader/back-bttn.svg";
})

//appears calc indent
let allAppearsRight = document.querySelector('.all-appears-right');

if (allAppearsRight) {
    let allAppearsText = document.querySelector('.all-appears-text');
    let indent = (parseInt(getComputedStyle(allAppearsRight).height) - parseInt(getComputedStyle(allAppearsText).height)) / 2;

    allAppearsText.style.paddingTop = indent + 'px';
}
