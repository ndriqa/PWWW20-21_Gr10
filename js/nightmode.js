const MOON = '🌙';
const SUN = '☀️';
const DARK_MODE = 'dark';
const LIGHT_MODE = 'light';
const DEFAULT_MODE = LIGHT_MODE;

const btn = document.querySelector('#theme-switcher');

init();

function init() {
    let storedMode = localStorage.getItem('mode');
    if (!storedMode) {
        storedMode = DEFAULT_MODE;
        localStorage.setItem('mode', DEFAULT_MODE);
    }
    setMode(storedMode);
}

function setMode(mode = DEFAULT_MODE) {
    if (mode === DARK_MODE) {
        let bg = Array.prototype.slice(document.getElementsByClassName('.nm-bg'));
        console.log(bg);
    } else if (mode === LIGHT_MODE) {
        
    }
}

btn.addEventListener('click', function () {
    let mode = localStorage.getItem('mode');
    if (mode) {
        let newMode = mode == DARK_MODE ? LIGHT_MODE : DARK_MODE;
        setMode(newMode);
        localStorage.setItem('mode', newMode);
    }
});


function updateBackground() {
    var hr = (new Date()).getHours();
    let storedMode = localStorage.getItem('mode');

    if (hr >= 18 || hr < 8) {
        storedMode = DARK_MODE;
    } else if (hr > 8 && hr < 19) {
        storedMode = LIGHT_MODE;
    }

    setMode(storedMode);
}

setInterval(updateBackground, 1000 * 60);
updateBackground();
