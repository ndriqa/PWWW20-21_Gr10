function updateBackground() {
    var 
    hr = (new Date()).getHours(),
    body = document.body,
    bstyle = body.style,
    headertopstyle = document.querySelector('.social-top'),
    headertitle = document.querySelector('.homepage-description h1'),
    headerdescription = document.querySelector('.homepage-description p'),
    footer = document.querySelector('.main-footer');
    
    if (hr >= 18 || hr < 8) {
        document.querySelectorAll(".night-text").forEach(element => {
            element.style.color = "#fff";
        });
        document.querySelectorAll(".night-background").forEach(element => {
            element.style.color = "#000";
        });

    } else if (hr > 8 && hr < 19) {
        document.querySelectorAll(".night-text").forEach(element => {
            element.style.color = "#000";
        });
        document.querySelectorAll(".night-background").forEach(element => {
            element.style.color = "#fff";
        });
    }
}

setInterval(updateBackground, 1000 * 60);
updateBackground();
