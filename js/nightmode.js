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
        let bg = document.getElementsByClassName('nm-bg');
        Array.from(bg).forEach(element => {
            element.classList.add("dark-bg")
        });
    } else if (mode === LIGHT_MODE) {
        let bg = document.getElementsByClassName('nm-bg');
        Array.from(bg).forEach(element => {
            element.classList.remove("dark-bg")
        });
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
