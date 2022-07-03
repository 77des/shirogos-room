//logo hover effect
let logoLink = document.querySelector('header .logo-link');
let logoImg = document.querySelector('header .logo-link img');

logoLink.addEventListener('mouseover', function() {
    logoImg.src = "./imgs/logohover.svg";
})
logoLink.addEventListener('mouseout', function() {
    logoImg.src = "./imgs/logo.svg";
})

//island hover effects
let islandImgs = document.querySelectorAll('.wiki-content img');
let islandLinks = document.querySelectorAll('.wiki-content a');
let islandNames = document.querySelectorAll('.wiki-content p');
let islandDescs = document.querySelectorAll('.wiki-content .island-desc');

for (let i = 0; i < islandDescs.length; i++) {
    if (islandDescs[i].classList.contains('active')) {
        var activeDesc = islandDescs[i];
    }
}

document.body.addEventListener('mouseover', function() {
    document.body.classList.add('bg-hovered');
})

document.body.addEventListener('mouseout', function() {
    document.body.classList.remove('bg-hovered');
})

islandDescs[1].addEventListener('mouseover', function() {
    document.body.classList.add('bg-mouseout');
    islandDescs[0].classList.add('active');
    activeDesc = islandDescs[0];
})

islandDescs[0].addEventListener('mouseover', function() {
    document.body.classList.add('bg-mouseout');
    islandDescs[0].classList.add('active');
    activeDesc = islandDescs[0];
})

islandDescs[0].addEventListener('mouseout', function() {
    islandDescs[0].classList.remove('active');
    document.body.classList.remove('bg-mouseout');
})

for (let i = 0; i < islandLinks.length; i++) {
    islandLinks[i].addEventListener('mouseover', function() {
        if (i == 0) {
            islandImgs[i].src = "./imgs/wiki-map/undefined-island-hover.png";
            islandNames[i+1].classList.add('hovered');
            document.body.classList.add('bg-mouseout');
            if (activeDesc) {
                activeDesc.classList.remove('active');
            }
            islandDescs[2].classList.add('active');
            activeDesc = islandDescs[0];
        }
        else if (i == 1) {
            islandImgs[i].src = "./imgs/wiki-map/hladberin-island-hover.png";
            islandNames[i+1].classList.add('hovered');
            document.body.classList.add('bg-mouseout');
            if (activeDesc) {
                activeDesc.classList.remove('active');
            }
            islandDescs[3].classList.add('active');
            activeDesc = islandDescs[1];
        }
        else if (i == 2) {
            islandImgs[i].src = "./imgs/wiki-map/dango-island-hover.png";
            islandNames[i+1].classList.add('hovered');
            document.body.classList.add('bg-mouseout');
            if (activeDesc) {
                activeDesc.classList.remove('active');
            }
            islandDescs[4].classList.add('active');
            activeDesc = islandDescs[2];
        }
    })
    islandLinks[i].addEventListener('mouseout', function() {
        if (i == 0) {
            islandImgs[i].src = "./imgs/wiki-map/undefined-island.png";
            islandNames[i+1].classList.remove('hovered');
            document.body.classList.remove('bg-mouseout');
            islandDescs[2].classList.remove('active');
        }
        else if (i == 1) {
            islandImgs[i].src = "./imgs/wiki-map/hladberin-island.png";
            islandNames[i+1].classList.remove('hovered');
            document.body.classList.remove('bg-mouseout');
            islandDescs[3].classList.remove('active');
        }
        else if (i == 2) {
            islandImgs[i].src = "./imgs/wiki-map/dango-island.png";
            islandNames[i+1].classList.remove('hovered');
            document.body.classList.remove('bg-mouseout');
            islandDescs[4].classList.remove('active');
        }
    })
}
