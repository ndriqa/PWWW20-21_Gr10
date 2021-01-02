let slideObjects = [
    {
        image_path: "./Images/homepage/dish1.png",
        title: "Lazanje",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam volutpat commodo sed egestas egestas. Eleifend mi in nulla posuere sollicitudin. Dictum sit amet justo donec enim diam vulputate ut pharetra."
    },
    {
        image_path: "./Images/homepage/dish2.png",
        title: "Pite",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam volutpat commodo sed egestas egestas. Eleifend mi in nulla posuere sollicitudin. Dictum sit amet justo donec enim diam vulputate ut pharetra."
    },
    {
        image_path: "./Images/homepage/dish1.png",
        title: "Four Cheese Pasta",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam volutpat commodo sed egestas egestas. Eleifend mi in nulla posuere sollicitudin. Dictum sit amet justo donec enim diam vulputate ut pharetra."
    },
    {
        image_path: "./Images/homepage/dish2.png",
        title: "Flija",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam volutpat commodo sed egestas egestas. Eleifend mi in nulla posuere sollicitudin. Dictum sit amet justo donec enim diam vulputate ut pharetra."
    }
]


let slideIndex = 1;
let skip = false;

showSlides(slideIndex);

function forcedNext(){
    nextSlide();
    skip = true;
}
function forcedPrev(){
    prevSlide();
    skip = true;
}
function nextSlide(){
    if(slideIndex >= slideObjects.length){
        slideIndex = 1;
    } else {
        slideIndex++; 
    }
    showSlides()
}
function prevSlide(){
    if(slideIndex <= 1){
        slideIndex = slideObjects.length;
    } else {
        slideIndex--; 
    }
    showSlides();
}

function changeSlide(dot){
    slideIndex = dot;
    showSlides();
    skip = true;
}

function changeActiveDot(activeDot){
    let dots = document.getElementsByClassName("dot");
    let i;
    for(i = 0; i < dots.length; i++){
        dots[i].classList.remove("active")
    }
    dots[activeDot].classList.add("active")
}
function iterateSlides(){
    if(!skip){
        nextSlide();
    } else {
        skip = false;
    }
}
function showSlides() {
    document.getElementById("dish-image").src = slideObjects[slideIndex-1].image_path;
    document.getElementById("dish-name").innerHTML = slideObjects[slideIndex-1].title;
    document.getElementById("dish-description").innerHTML = slideObjects[slideIndex-1].description;
    changeActiveDot(slideIndex-1)
}
window.onload = function() {
    showSlides();
    setInterval(iterateSlides, 3000);
}
// function onPageChange(n){
//     let items = document.getElementsByClassName("nav-item");
//     let i;
//     for(i = 0; i<items.length; i++){
//         items[i].classList.remove("active");
//     }
//     items[i].classList.add("active");
// }