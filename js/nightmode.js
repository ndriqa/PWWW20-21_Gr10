const MOON = '🌙';
const SUN = '☀️';
const DARK_MODE = 'dark';
const LIGHT_MODE = 'light';
const DEFAULT_MODE = LIGHT_MODE;

const btn = document.querySelector('#theme-switcher');

init();

function init() {
    let storedMode = sessionStorage.getItem('mode');
    if (!storedMode) {
        storedMode = DEFAULT_MODE;
        sessionStorage.setItem('mode', DEFAULT_MODE);
    }
    setMode(storedMode);
}

function setMode(mode = DEFAULT_MODE) {
    if (mode === DARK_MODE) {

    } else if (mode === LIGHT_MODE) {
        
    }
}

btn.addEventListener('click', function () {
    let mode = sessionStorage.getItem('mode');
    if (mode) {
        let newMode = mode == DARK_MODE ? LIGHT_MODE : DARK_MODE;
        setMode(newMode);
        sessionStorage.setItem('mode', newMode);
    }
});


function updateBackground() {
    var hr = (new Date()).getHours();
    let storedMode = sessionStorage.getItem('mode');

    if (hr >= 18 || hr < 8) {
        storedMode = DARK_MODE;
    } else if (hr > 8 && hr < 19) {
        storedMode = LIGHT_MODE;
    }

    setMode(storedMode);
}

setInterval(updateBackground, 1000 * 60);
updateBackground();