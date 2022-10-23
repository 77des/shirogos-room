//chapter dropdown desktop
let chapterSelect = document.querySelector('.header-content.desktop .chapter-menu .chapter-select');
let chapterDropdown = document.querySelector('.header-content.desktop .chapter-menu .chapter-dropdown');
let chapterMenu = document.querySelector('.header-content.desktop .chapter-menu');
let bottomArrow = document.querySelector('.header-content.desktop .chapter-menu .bottom-arrow');
let leftArrow = document.querySelector('.header-content.desktop .chapter-menu .left-arrow');


chapterSelect.addEventListener('click', function() {
    if (chapterDropdown.classList.contains('active')) {
        chapterDropdown.classList.remove('active');
        chapterMenu.style.background = '';
        chapterSelect.style.background = '';
        bottomArrow.style.opacity = '1';
        leftArrow.style.opacity = '0';
    } else {
        chapterDropdown.classList.add('active');
        chapterMenu.style.background = '#181818';
        chapterSelect.style.background = '#181818';
        bottomArrow.style.opacity = '0';
        leftArrow.style.opacity = '1';
    }
})


//chapter | pages dropdown mobile
let chapterSelectMobile = document.querySelector('.header-content.mobile .chapter-menu .chapter-select');
let chapterDropdownMobile = document.querySelector('.header-content.mobile .chapter-menu .chapter-dropdown');
let pagesSelectMobile = document.querySelector('.header-content.mobile .pages-menu .pages-select');
let pagesDropdownMobile = document.querySelector('.header-content.mobile .pages-menu .pages-dropdown');
let closeDropdownBttn = document.querySelector('.header-content.mobile .chapter-menu .chapter-dropdown .close-dropdown');
let pagesDropdownLinks = document.querySelectorAll('.header-content.mobile .pages-menu .pages-dropdown a');
let pages = document.querySelector('.pages');
let activeLink;

if (chapterSelectMobile) {
    chapterSelectMobile.addEventListener('click', function() {
        chapterDropdownMobile.classList.toggle('active');
        chapterSelectMobile.classList.toggle('active');
    })
}

if (pagesSelectMobile) {
    pagesSelectMobile.addEventListener('click', function() {
        pagesDropdownMobile.classList.toggle('active');
        pagesSelectMobile.classList.toggle('active');
    })
    for (let link of pagesDropdownLinks) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            updateURL(storyPages[Number(link.innerHTML)-1]);
            choosePageByURL();
            activeLink.classList.remove('active');
            activeLink = link;
            document.body.scrollTop = document.documentElement.scrollTop = 0;
        })
    }
    makeActiveLinkMobile();
}

if (closeDropdownBttn) {
    closeDropdownBttn.addEventListener('click', function(event) {
        event.preventDefault();
        chapterDropdownMobile.classList.remove('active');
        chapterSelectMobile.classList.remove('active');
    })
}

//pages nav
let pagesText = document.querySelectorAll('.pages-text');
let prevMangaBttn = document.querySelectorAll('.prev-bttn.manga-bttn');
let nextMangaBttn = document.querySelectorAll('.next-bttn.manga-bttn');
let prevStoryBttn = document.querySelectorAll('.prev-bttn.story-bttn');
let nextStoryBttn = document.querySelectorAll('.next-bttn.story-bttn');
let mangaPages = document.querySelectorAll('.manga-page');
let storyPages = document.querySelectorAll('.story-page');
let soonChapters = document.querySelectorAll('.chapter-dropdown a.soon');
let prevBttnImgs = document.querySelectorAll('.prev-bttn img');
let nextBttnImgs = document.querySelectorAll('.next-bttn img');
let backBttnArrows = document.querySelectorAll('.back-bttn>div');
let backBttn = document.querySelector('.back-bttn');

prevBttnImgs[0].addEventListener('mouseover', function() {
    prevBttnImgs[0].style.opacity = '0';
    prevBttnImgs[1].style.opacity = '1';
})

prevBttnImgs[0].addEventListener('mouseout', function() {
    prevBttnImgs[0].style.opacity = '1';
    prevBttnImgs[1].style.opacity = '0';
})

prevBttnImgs[2].addEventListener('mouseover', function() {
    prevBttnImgs[2].style.opacity = '0';
    prevBttnImgs[3].style.opacity = '1';
})

prevBttnImgs[2].addEventListener('mouseout', function() {
    prevBttnImgs[2].style.opacity = '1';
    prevBttnImgs[3].style.opacity = '0';
})

nextBttnImgs[0].addEventListener('mouseover', function() {
    nextBttnImgs[0].style.opacity = '0';
    nextBttnImgs[1].style.opacity = '1';
})

nextBttnImgs[0].addEventListener('mouseout', function() {
    nextBttnImgs[0].style.opacity = '1';
    nextBttnImgs[1].style.opacity = '0';
})

nextBttnImgs[2].addEventListener('mouseover', function() {
    nextBttnImgs[2].style.opacity = '0';
    nextBttnImgs[3].style.opacity = '1';
})

nextBttnImgs[2].addEventListener('mouseout', function() {
    nextBttnImgs[2].style.opacity = '1';
    nextBttnImgs[3].style.opacity = '0';
})

backBttn.addEventListener('mouseover', function() {
    backBttnArrows[0].style.opacity = '0';
    backBttnArrows[1].style.opacity = '1';
    backBttn.style.color = 'white';
})

backBttn.addEventListener('mouseout', function() {
    backBttnArrows[0].style.opacity = '1';
    backBttnArrows[1].style.opacity = '0';
    backBttn.style.color = '#DEDEDE';
})

for (let bttn of nextMangaBttn) {
    bttn.addEventListener('click', function(event) {
        event.preventDefault();
        toNextPage(mangaPages);
        if (hiStoryPages) {
            switchHistoryHeight();
        }
    })
}

for (let bttn of prevMangaBttn) {
    bttn.addEventListener('click', function(event) {
        event.preventDefault();
        toPrevPage(mangaPages);
        if (hiStoryPages) {
            switchHistoryHeight();
        }
    })
}
for (let bttn of nextStoryBttn) {
    bttn.addEventListener('click', function(event) {
        event.preventDefault();
        toNextPage(storyPages);
        if (iceflamePages) {
            switchPageHeight(iceflamePages, iceflameStoryPages);
        }
        if (mutinyPages) {
            switchPageHeight(mutinyPages, mutinyStoryPages);
        }
        makeActiveLinkMobile();
        })
}

for (let bttn of prevStoryBttn) {
    bttn.addEventListener('click', function(event) {
        event.preventDefault();
        toPrevPage(storyPages);
        if (iceflamePages) {
            switchPageHeight(iceflamePages, iceflameStoryPages);
        }
        if (mutinyPages) {
            switchPageHeight(mutinyPages, mutinyStoryPages);
        }
        makeActiveLinkMobile();
        })
}

for (let page of mangaPages) {
    page.addEventListener('click', function(event) {
        let pageWidth = document.documentElement.scrollWidth;
        if (event.clientX >= 0 && event.clientX <= (pageWidth/2)) {
            toPrevPage(mangaPages);
            if (hiStoryPages) {
                switchHistoryHeight();
            }
        } else {
            toNextPage(mangaPages);
            if (hiStoryPages) {
                switchHistoryHeight();
            }
        }
    })
}

for (let chapter of soonChapters) {
    chapter.addEventListener('click', function(event) {
        event.preventDefault();
        chapter.classList.add('warning');
        setTimeout(function() { chapter.classList.remove('warning'); }, 500);
    })
}

function toNextPage(smthPages) {
    for (let i = 0; i < smthPages.length; i++) {
        if (smthPages[i].classList.contains('active')) {
            let activePage = smthPages[i];
            if (pages.classList.contains('forlowers') && i == 17) {
                window.location.href = "./forlowers2.html";
                mangaPages[17].classList.add('active');
            }
            if (i != smthPages.length-1) {
                for (let text of pagesText) {
                    if (pages.classList.contains('forlowers') || pages.classList.contains('forlowers2')) {
                        text.innerHTML = smthPages[i+1].dataset.p + "/18"
                    } else if (pages.classList.contains('dandeathside')) {
                        text.innerHTML = smthPages[i+1].dataset.p + "/23"
                    } else if (pages.classList.contains('iceflame')) {
                        text.innerHTML = smthPages[i+1].dataset.p + "/26";
                    } else if (pages.classList.contains('hi-story')) {
                        text.innerHTML = smthPages[i+1].dataset.p + "/10";
                    } else if (pages.classList.contains('mutiny')) {
                        text.innerHTML = smthPages[i+1].dataset.p + "/22";
                    }
                }
                updateURL(smthPages[i+1]);
                smthPages[i+1].classList.add('active');
                activePage.classList.remove('active');
                document.body.scrollTop = document.documentElement.scrollTop = 0;
                break;
            }
            break;
        }
    }
}

function toPrevPage(smthPages) {
    for (let i = 0; i < smthPages.length; i++) {
        if (smthPages[i].classList.contains('active')) {
            let activePage = smthPages[i];
            if (pages.classList.contains('forlowers2') && i == 0) {
                window.location.href = "./forlowers.html?page=18";
                
            }
            if (i != 0) {
                for (let text of pagesText) {
                    if (pages.classList.contains('forlowers') || pages.classList.contains('forlowers2')) {
                        text.innerHTML = smthPages[i-1].dataset.p + "/18"
                    } else if (pages.classList.contains('dandeathside')) {
                        text.innerHTML = smthPages[i-1].dataset.p + "/23"
                    } else if (pages.classList.contains('iceflame')) {
                        text.innerHTML = smthPages[i-1].dataset.p + "/26";
                    } else if (pages.classList.contains('hi-story')) {
                        text.innerHTML = smthPages[i-1].dataset.p + "/10";
                    } else if (pages.classList.contains('mutiny')) {
                        text.innerHTML = smthPages[i-1].dataset.p + "/22";
                    }
                }
                updateURL(smthPages[i-1]);
                smthPages[i-1].classList.add('active');
                activePage.classList.remove('active');
                document.body.scrollTop = document.documentElement.scrollTop = 0;
                break;
            }
            break;
        }
    }
}

function updateURL(page) {
    if (history.pushState) {
        var baseUrl = window.location.protocol + "//" + window.location.host + window.location.pathname;
        var newUrl = baseUrl + '?page=' + page.dataset.p;
        history.pushState({page: newUrl}, null, newUrl);
    }
    else {
        console.warn('History API не поддерживает ваш браузер');
    }
}

//story-reader pages height
let iceflamePages = document.querySelector('.story-list .pages.iceflame');
let mutinyPages = document.querySelector('.story-list .pages.mutiny');
let iceflameStoryPages = document.querySelectorAll('.story-list .pages.iceflame .story-page');
let mutinyStoryPages = document.querySelectorAll('.story-list .pages.mutiny .story-page');

if (iceflamePages) {
    switchPageHeight(iceflamePages, iceflameStoryPages);
}
if (mutinyPages) {
    switchPageHeight(mutinyPages, mutinyStoryPages);
}

function switchPageHeight(pagesName, storyPage) {
    for (let i = 0; i < storyPage.length; i++) {
        if (storyPage[i].classList.contains('active')) {
            let computedPage = getComputedStyle(storyPage[i]);
            let pageHeight = parseInt(computedPage.height) + parseInt(computedPage.marginTop);
            pagesName.style.height = pageHeight + 'px';
        }
    }
}


//hi-story pages height
let hiStoryImgs = document.querySelectorAll('.pages.hi-story .manga-page img');
let hiStoryPages = document.querySelectorAll('.pages.hi-story .manga-page');
let hiStoryPageHeight = document.querySelector('.pages.hi-story');

if (window.matchMedia("(max-width: 1109px)").matches) {
    for (let i = 0; i < hiStoryImgs.length; i++) {
        let calculatedHeightMobile = parseInt(hiStoryImgs[i].style.height) / 1110 * 100;
        hiStoryImgs[i].style.height = `${calculatedHeightMobile}vw`;
        console.log(`${calculatedHeightMobile}vw`);
    }
}

if (hiStoryPages) {
    switchHistoryHeight();
}

function switchHistoryHeight() {
    for (let i = 0; i < hiStoryPages.length; i++) {
        if (hiStoryPages[i].classList.contains('active')) {
            let imgStyles = getComputedStyle(hiStoryImgs[i]);
            hiStoryPageHeight.style.height = imgStyles.height;
            hiStoryPages[i].style.height = imgStyles.height;
        }
    }
}

function choosePageByURL() {
    let params = document.location.search;
    let pageNumber = parseInt(params.match(/\d+/));
    if (isNaN(pageNumber)) {
        pageNumber = 1;
    } else if (pageNumber > pages.children.length) {
        pageNumber = pages.children.length;
    }
    if (pages.classList.contains('iceflame') || pages.classList.contains('mutiny')) {
        for (let i = 0; i < storyPages.length; i++) {
            if (storyPages[i].classList.contains('active')) {
                storyPages[i].classList.remove('active');
            }
        }
        storyPages[pageNumber-1].classList.add('active');
        pagesDropdownLinks[pageNumber-1].classList.add('active');
    } else {
        for (let i = 0; i < mangaPages.length; i++) {
            if (mangaPages[i].classList.contains('active')) {
                mangaPages[i].classList.remove('active');
            }
        }
        mangaPages[pageNumber-1].classList.add('active');
    }

    if (pages.classList.contains('hi-story')) {
        switchHistoryHeight();
    } else if (pages.classList.contains('mutiny')) {
        switchPageHeight(mutinyPages, mutinyStoryPages);
    } else if (pages.classList.contains('iceflame')) {
        switchPageHeight(iceflamePages, iceflameStoryPages);
    }
    
    for (let text of pagesText) {
        if (pages.classList.contains('forlowers') || pages.classList.contains('forlowers2')) {
            text.innerHTML = pageNumber + "/18"
        } else if (pages.classList.contains('dandeathside')) {
            text.innerHTML = pageNumber + "/23"
        } else if (pages.classList.contains('iceflame')) {
            text.innerHTML = pageNumber + "/26";
        } else if (pages.classList.contains('hi-story')) {
            text.innerHTML = pageNumber + "/10";
        } else if (pages.classList.contains('mutiny')) {
            text.innerHTML = pageNumber + "/22";
        }
    }
}

function makeActiveLinkMobile() {
    let params = document.location.search;
    let pageNumber = parseInt(params.match(/\d+/));
    if (isNaN(pageNumber)) {
        pageNumber = 1;
    } else if (pageNumber > pages.children.length) {
        pageNumber = pages.children.length;
    }
    if (activeLink) {
        activeLink.classList.remove('active');
    }
    pagesDropdownLinks[pageNumber-1].classList.add('active');
    activeLink = pagesDropdownLinks[pageNumber-1];
}

choosePageByURL();