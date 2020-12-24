let foodObjects = [
    { //breakfast
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
    { //lunch
        sunday_roast: "images/reservation/Sunday Roast.jpg",
        chilli_con_carne: "images/reservation/chilli-con-carne.jpg",
        butter_chicken: "images/reservation/butterchichken.jpg",
        orange_chicken: "images/reservation/Orange Chicken.jpg",
        buffalo_wings: "images/reservation/Buffalo Wings.jpg",
        pot_roast: "images/reservation/Pot Roast.jpg",
        meatloaf: "images/reservation/meatloaf.jpg",
        chop_suey: "images/reservation/Chop Suey.jpg",
        barbecue_ribs: "images/reservation/Barbecue Ribs.jpg",
        steak_tartare: "images/reservation/Steak tartare.jpg",
        salisbury_steak: "images/reservation/Salisbury Steak.jpg",
    },
    { //pizza and pasta
        margherita_pizza: "images/reservation/margheritapizza.jfif",
        bbq_chicken_pizza: "images/reservation/bbqpizza.jfif",
        veggie_pizza: "images/reservation/veggiepizza.jpg",
        pepperoni_pizza: "images/reservation/pepperonipizza.webp",
        cheese_pizza: "images/reservation/cheesepizza.jpg",
        spaghetti_bolognese: "images/reservation/bolognese.jpg",
        lasagna: "images/reservation/lasagna.jpg",
        french_fries: "images/reservation/fries.jpg",
        chicken_satay: "images/reservation/chickensatay.jpg",
        four_cheese_pasta: "images/reservation/fourcheese.jpg",
        cheese_balls: "images/reservation/cheeseballs.jpg",
    },
    { //specials
        food: "images/reservation/bagel.jpg",
        food: "images/reservation/bagel.jpg",
        food: "images/reservation/bagel.jpg",
        food: "images/reservation/bagel.jpg",
        food: "images/reservation/bagel.jpg",
        food: "images/reservation/bagel.jpg",
        food: "images/reservation/bagel.jpg",
        food: "images/reservation/bagel.jpg",
        food: "images/reservation/bagel.jpg",
        food: "images/reservation/bagel.jpg",
        food: "images/reservation/bagel.jpg",
    },
    { //drinks
        fresh_juice: "images/reservation/juice.jfif",
        coffee: "images/reservation/coffee.jpg",
        lemonade: "images/reservation/lemonade.jfif",
        soda: "images/reservation/soda.jpg",
        milkshake: "images/reservation/milkshake.jpg",
        smoothie: "images/reservation/smoothie.jpg",
        frappe: "images/reservation/frappe.jpg",
        iced_coffe: "images/reservation/icedcoffe.jpg",
        hot_chocolate: "images/reservation/hotchocolate.jpg",
        coffe_milkshake: "images/reservation/milkshake.jpg",
        coctail: "images/reservation/coctail.jpg",
        beer: "images/reservation/beer.jpg",
        blody_mary: "images/reservation/blodymary.jpg",
        mimosa: "images/reservation/mimosa.jpg",
        champagne: "images/reservation/champagne.jpg",
    }
]

function foodTypeChosen(){
    let foodParent = document.getElementById("ushqimet")
    let foodType = document.getElementById("foods");
    
    let keys = Object.keys(foodObjects[foodType.selectedIndex]);
    let foods = [];

    for(var i = 0; i < keys.length; i++){
        foods[i] = ""+fixFoodName(keys[i]);
    }
    console.log(foods);
}
function fixFoodName(s){
    let nameParts = s.split("_");
    let name = "";
    for(let i = 0; i < nameParts.length; i++){
        name = name + firstUpperLetter(nameParts[i]) + " "
    }
    return name;
}
 function firstUpperLetter(s){
    return (s.charAt(0).toUpperCase()+s.slice(1));
}