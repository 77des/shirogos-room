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

const topPrevBttnMobile = document.querySelector('.list-title .prev-bttn');
const topNextBttnMobile = document.querySelector('.list-title .next-bttn');

topPrevBttnMobile.addEventListener('mouseover', function() {
    topPrevBttnMobile.src = "../../imgs/wiki-list/top-prev-bttn-hover.svg";
})
topNextBttnMobile.addEventListener('mouseover', function() {
    topPrevBttnMobile.src = "../../imgs/wiki-list/top-next-bttn-hover.svg";
})

topPrevBttnMobile.addEventListener('mouseout', function() {
    topPrevBttnMobile.src = "../../imgs/wiki-list/top-prev-bttn.svg";
})
topNextBttnMobile.addEventListener('mouseout', function() {
    topPrevBttnMobile.src = "../../imgs/wiki-list/top-next-bttn.svg";
})

if (window.matchMedia('(max-width: 1109px)').matches) {
    if (document.location.pathname.includes('hladberin')) {
        let hladberinTitle = document.querySelector('.hladberin-header .title');
        hladberinTitle.innerHTML = '<p>ПРАЗДНИЧНЫЙ<br> ОСТРОВ<br> ХЛАДБЕРИН</p>';
    }
    if (document.location.pathname.includes('unknown-lands')) {
        let membersListTitle = document.querySelector('.members-content .list-title h2');
        membersListTitle.innerHTML = 'Участники Мятежа';
    }
    if (document.location.pathname.includes('d-island-2')) {
        let valvsListTitle = document.querySelector('.valvs-content .list-title h2');
        valvsListTitle.innerHTML = 'Валвы <br><p>(эст., valvur - стражник)</p>';
    }
}