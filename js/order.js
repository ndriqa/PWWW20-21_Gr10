let foodObjects = [
    {
        egg_and_bacon: "images/reservation/baconEgg.JPG",
        waffle: "images/reservation/waffle.jpg",
        bagel: "images/reservation/bagel.jpg",
        cereal: "images/reservation/cereal.jpg",
        ouatmeal: "images/reservation/oatmeal.jpg",
        strawberry_pancakes: "images/reservation/strawberrypancakes.jpg",
        toast: "images/reservation/toast.jpg",
        crepes: "images/reservation/crepes.jpg",
        oatmeal: "images/reservation/oatmeal.jpg",
        avocado_omlette: "images/reservation/avocadoomlette.jpg",
        vegetarian_omlette: "images/reservation/vegetarianomlette.jpg",
    },
    {
        egg_and_bacon: "images/reservation/baconEgg.JPG",
        waffle: "images/reservation/waffle.jpg",
        bagel: "images/reservation/bagel.jpg",
        cereal: "images/reservation/cereal.jpg",
        ouatmeal: "images/reservation/oatmeal.jpg",
        strawberry_pancakes: "images/reservation/strawberrypancakes.jpg",
        toast: "images/reservation/toast.jpg",
        crepes: "images/reservation/crepes.jpg",
        oatmeal: "images/reservation/oatmeal.jpg",
        avocado_omlette: "images/reservation/avocadoomlette.jpg",
        vegetarian_omlette: "images/reservation/vegetarianomlette.jpg",
    },
    {
        egg_and_bacon: "images/reservation/baconEgg.JPG",
        waffle: "images/reservation/waffle.jpg",
        bagel: "images/reservation/bagel.jpg",
        cereal: "images/reservation/cereal.jpg",
        ouatmeal: "images/reservation/oatmeal.jpg",
        strawberry_pancakes: "images/reservation/strawberrypancakes.jpg",
        toast: "images/reservation/toast.jpg",
        crepes: "images/reservation/crepes.jpg",
        oatmeal: "images/reservation/oatmeal.jpg",
        avocado_omlette: "images/reservation/avocadoomlette.jpg",
        vegetarian_omlette: "images/reservation/vegetarianomlette.jpg",
    },
    {
        egg_and_bacon: "images/reservation/baconEgg.JPG",
        waffle: "images/reservation/waffle.jpg",
        bagel: "images/reservation/bagel.jpg",
        cereal: "images/reservation/cereal.jpg",
        ouatmeal: "images/reservation/oatmeal.jpg",
        strawberry_pancakes: "images/reservation/strawberrypancakes.jpg",
        toast: "images/reservation/toast.jpg",
        crepes: "images/reservation/crepes.jpg",
        oatmeal: "images/reservation/oatmeal.jpg",
        avocado_omlette: "images/reservation/avocadoomlette.jpg",
        vegetarian_omlette: "images/reservation/vegetarianomlette.jpg",
    },
    {
        egg_and_bacon: "images/reservation/baconEgg.JPG",
        waffle: "images/reservation/waffle.jpg",
        bagel: "images/reservation/bagel.jpg",
        cereal: "images/reservation/cereal.jpg",
        ouatmeal: "images/reservation/oatmeal.jpg",
        strawberry_pancakes: "images/reservation/strawberrypancakes.jpg",
        toast: "images/reservation/toast.jpg",
        crepes: "images/reservation/crepes.jpg",
        oatmeal: "images/reservation/oatmeal.jpg",
        avocado_omlette: "images/reservation/avocadoomlette.jpg",
        vegetarian_omlette: "images/reservation/vegetarianomlette.jpg",
    }
]

function foodTypeChosen(){
    let foodParent = document.getElementById("ushqimet")
    let foodType = document.getElementById("foods");
    
    let foods = Object.keys(foodObjects[foodType.selectedIndex]);
    let keys = [];

    for(var i = 0; i < 10; i++){
        keys.push = ""+fixFoodName(foods[i]);
    }
}
function fixFoodName(s){
    let name = s.split("_");
    console.log(name);
}
function titleCase(str) { 
    var splitStr = str.toLowerCase().split(' '); 
}