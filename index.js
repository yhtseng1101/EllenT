const menuBtn = document.getElementsByClassName("menuBtn");

function checkUri () {
    if (location.hash.includes('#about') || location.hash.includes('#contact')) {
        for (let i = 0; i < menuBtn.length; i++) {
            menuBtn[i].style.color = 'black';
        }
    } else {
        for (let i = 0; i < menuBtn.length; i++) {
            menuBtn[i].style.color = 'white';
        }
    }
    
}

window.onhashchange = checkUri;
