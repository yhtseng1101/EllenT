
const menuBtn = document.getElementsByClassName("menuBtn");

function checkUri () {
    if (location.hash.includes('#home') || location.hash.includes('#projects')) {
        console.log('its home or projects');
        for (let i = 0; i < menuBtn.length; i++) {
            menuBtn[i].style.color = 'white';
        }
    } else {
        console.log('its about or contact');
        for (let i = 0; i < menuBtn.length; i++) {
            menuBtn[i].style.color = 'black';
        }
    }
    
}

window.onhashchange = checkUri;
