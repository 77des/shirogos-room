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
    logoImg.src = "../imgs/logohover.svg";
})
logoLink.addEventListener('mouseout', function() {
    logoImg.src = "../imgs/logo.svg";
})

//islands hover effect
let islands = document.querySelectorAll('.wiki-content .dango-island-main>a');
let islandImgs = document.querySelectorAll('.wiki-content .dango-island-main>a img');
let islandDescs = document.querySelectorAll('.wiki-content .island-desc');

for (let i = 0; i < islandDescs.length; i++) {
    if (islandDescs[i].classList.contains('active')) {
        var activeDesc = islandDescs[i];
    }
}

for (let i = 0; i < islands.length; i++) {
    islands[i].addEventListener('mouseover', function() {
        if (i == 0) {
            islandImgs[i].src = '../imgs/wiki-map/dango-island/vanderland-hover.png';
        } else if (i == 2) {
            islandImgs[i].src = '../imgs/wiki-map/dango-island/valvurion-hover.png';
        } else if (i == 5) {
            islandImgs[i].src = '../imgs/wiki-map/dango-island/taytan-hover.png';
        }
        else {
            islandImgs[i].src = '../imgs/wiki-map/dango-island/island-hover.png'
        }
        activeDesc.classList.remove('active');
        islandDescs[i+1].classList.add('active');
        activeDesc = islandDescs[i+1];
        
    })
    islands[i].addEventListener('mouseout', function() {
        if (i == 0) {
            islandImgs[i].src = '../imgs/wiki-map/dango-island/vanderland.png';
        } else {
            islandImgs[i].src = '../imgs/wiki-map/dango-island/island.png'
        }
        activeDesc.classList.remove('active');
        islandDescs[0].classList.add('active');
        activeDesc = islandDescs[0]; 
    })
}