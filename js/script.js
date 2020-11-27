let slideObjects = [
    {
        image: "images/homepage/dish1.png",
        title: "Lazanje",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam volutpat commodo sed egestas egestas. Eleifend mi in nulla posuere sollicitudin. Dictum sit amet justo donec enim diam vulputate ut pharetra."
    },
    {
        image: "images/homepage/dish2.png",
        title: "Pite",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam volutpat commodo sed egestas egestas. Eleifend mi in nulla posuere sollicitudin. Dictum sit amet justo donec enim diam vulputate ut pharetra."
    },
    {
        image: "images/homepage/dish1.png",
        title: "Pasul",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam volutpat commodo sed egestas egestas. Eleifend mi in nulla posuere sollicitudin. Dictum sit amet justo donec enim diam vulputate ut pharetra."
    },
    {
        image: "images/homepage/dish2.png",
        title: "Flija",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam volutpat commodo sed egestas egestas. Eleifend mi in nulla posuere sollicitudin. Dictum sit amet justo donec enim diam vulputate ut pharetra."
    }
]


let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(dot) {
    slideIndex = dot;
    document.getElementById("dish-image").src = slideObjects[slideIndex-1].image;
    document.getElementById("dish-name").innerHTML = slideObjects[slideIndex-1].title;
    document.getElementById("dish-description").innerHTML = slideObjects[slideIndex-1].description;
    let max = slideObjects.length
    if(slideIndex >= max){
        slideIndex = 0;
    } else {
        slideIndex++; 
    }

    setTimeout(showSlides, 3000)
}
