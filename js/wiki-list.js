let backBttn = document.querySelector('.back-bttn');
let nextBttn = document.querySelector('.next-bttn');
let prevBttn = document.querySelector('.prev-bttn');
let backBttnImg = document.querySelector('.back-bttn img');
let nextBttnImg = document.querySelector('.next-bttn img');
let prevBttnImg = document.querySelector('.prev-bttn img');

backBttn.addEventListener('mouseover', function() {
    backBttnImg.src = "../../imgs/wiki-list/back-bttn-hover.svg";
})
nextBttn.addEventListener('mouseover', function() {
    nextBttnImg.src = "../../imgs/wiki-list/next-bttn-hover.svg";
})
prevBttn.addEventListener('mouseover', function() {
    prevBttnImg.src = "../../imgs/wiki-list/prev-bttn-hover.svg";
})

backBttn.addEventListener('mouseout', function() {
    backBttnImg.src = "../../imgs/wiki-list/back-bttn.svg";
})
nextBttn.addEventListener('mouseout', function() {
    nextBttnImg.src = "../../imgs/wiki-list/next-bttn.svg";
})
prevBttn.addEventListener('mouseout', function() {
    prevBttnImg.src = "../../imgs/wiki-list/prev-bttn.svg";
})