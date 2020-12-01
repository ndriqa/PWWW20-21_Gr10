let slideObjects = [
    {
        image_path: "images/homepage/dish1.png",
        title: "Lazanje",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam volutpat commodo sed egestas egestas. Eleifend mi in nulla posuere sollicitudin. Dictum sit amet justo donec enim diam vulputate ut pharetra."
    },
    {
        image_path: "images/homepage/dish2.png",
        title: "Pite",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam volutpat commodo sed egestas egestas. Eleifend mi in nulla posuere sollicitudin. Dictum sit amet justo donec enim diam vulputate ut pharetra."
    },
    {
        image_path: "images/homepage/dish1.png",
        title: "Four Cheese Pasta",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam volutpat commodo sed egestas egestas. Eleifend mi in nulla posuere sollicitudin. Dictum sit amet justo donec enim diam vulputate ut pharetra."
    },
    {
        image_path: "images/homepage/dish2.png",
        title: "Flija",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam volutpat commodo sed egestas egestas. Eleifend mi in nulla posuere sollicitudin. Dictum sit amet justo donec enim diam vulputate ut pharetra."
    }
]


let slideIndex = 0;
showSlides(slideIndex);

function nextSlide(){
    if(slideIndex >= slideObjects.length-1){
        slideIndex = 0;
    } else {
        slideIndex++; 
    }
    showSlides()
}
function prevSlide(){
    if(slideIndex <= 0){
        slideIndex = slideObjects.length-1;
    } else {
        slideIndex--; 
    }
    showSlides();
}

function changeSlide(dot){
    slideIndex = dot;
    showSlides();
}

function showSlides() {
    document.getElementById("dish-image").src = slideObjects[slideIndex-1].image_path;
    document.getElementById("dish-name").innerHTML = slideObjects[slideIndex-1].title;
    document.getElementById("dish-description").innerHTML = slideObjects[slideIndex-1].description;
    let max = slideObjects.length-1
    if(slideIndex >= max){
        slideIndex = 0;
    } else {
        slideIndex++; 
    }
}
window.onload = function() {
    showSlides();
    setTimeout(showSlides, 1000);
}
