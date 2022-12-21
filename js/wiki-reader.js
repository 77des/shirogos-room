let loginLinks = document.querySelectorAll('.header-content .login a');

for (let link of loginLinks) {
    link.addEventListener('click', function(event) {
        event.preventDefault();
    })
}

//logo hover effect
let logoLink = document.querySelector('header .logo-link');
let logoImg = document.querySelector('header .logo-link img');

logoLink.addEventListener('mouseover', function() {
    if (window.location.pathname.includes('chronicles')) {
        logoImg.src = "./imgs/logohover.svg";
    } else {
        logoImg.src = "../../imgs/logohover.svg";
    }
})
logoLink.addEventListener('mouseout', function() {
    if (window.location.pathname.includes('chronicles')) {
        logoImg.src = "./imgs/logo.svg";
    } else {
        logoImg.src = "../../imgs/logo.svg";
    }
})

//backbttn hover effect
let backBttn = document.querySelector('.back-bttn');
let backBttnImg = document.querySelector('.back-bttn img');

backBttn.addEventListener('mouseover', function() {
    if (window.location.pathname.includes('chronicles')) {
        backBttnImg.src = "./imgs/wiki-reader/back-bttn-hover.svg";
    } else {
        backBttnImg.src = "../../imgs/wiki-reader/back-bttn-hover.svg";
    }
})
backBttn.addEventListener('mouseout', function() {
    if (window.location.pathname.includes('chronicles')) {
        backBttnImg.src = "./imgs/wiki-reader/back-bttn.svg";
    } else {
        backBttnImg.src = "../../imgs/wiki-reader/back-bttn.svg";
    }
})

//appears calc indent
let allAppearsRight = document.querySelector('.all-appears-right');

if (allAppearsRight) {
    let allAppearsText = document.querySelector('.all-appears-text');
    let indent = (parseInt(getComputedStyle(allAppearsRight).height) - parseInt(getComputedStyle(allAppearsText).height)) / 2;

    allAppearsText.style.paddingTop = indent + 'px';
}

//spoiler disappear effect
let spoilers = document.querySelectorAll('.spoiler');

for (let spoiler of spoilers) {
    spoiler.addEventListener('click', function() {
        spoiler.classList.add('disappear');
        setTimeout(() => {
            spoiler.style.display = 'none';
        }, 500);
    })
}