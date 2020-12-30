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
        avocado_omlette: "images/reservation/avocadoomelette.jpg",
        vegetarian_omlette: "images/reservation/vegetarianomelette.jpg",
    },
    { //lunch
        sunday_roast: "images/reservation/Sunday Roast.jpg",
        chilli_con_carne: "images/reservation/chilli-con-corne.jpg",
        butter_chicken: "images/reservation/butterchichken.jpg",
        orange_chicken: "images/reservation/Orange Chicken.jpg",
        buffalo_wings: "images/reservation/Buffalo Wings.jpg",
        pot_roast: "images/reservation/Pot Roast.jpg",
        meatloaf: "images/reservation/meatloaf.jpeg",
        barbecue_ribs: "images/reservation/Barbecue Ribs.jpg",
        steak_tartare: "images/reservation/Steak tartare.jpg",
        salisbury_steak: "images/reservation/Salisbury Steak.jpg",
    },
    { //pizza and pasta
        margherita_pizza: "images/reservation/margheritapizza.jfif",
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
        surf_and_turf: "images/reservation/Surf and Turf.jpg",
        chicken_fried_steak: "images/reservation/Chicken Fried Steak.jpg",
        general_tsos_chicken: "images/reservation/general.jpg",
        chicken_parmigiana: "images/reservation/Chicken Parmigiana.jpg",
        chop_suey: "images/reservation/Chop Suey.jpg",
        four_cheese_pasta: "images/reservation/fourcheese.jpg",
        cheese_balls: "images/reservation/cheeseballs.jpg",
        pot_roast: "images/reservation/Pot Roast.jpg",
        salisbury_steak: "images/reservation/Salisbury Steak.jpg",
        chilli_con_carne: "images/reservation/chilli-con-corne.jpg",
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

let choosenFood = -1;
let choosenDrink = -1;

function foodTypeChosen(){
    let foodParent = document.getElementById("ushqimet")
    foodParent.innerHTML = "";
    let foodType = document.getElementById("foods");
    
    let keys = Object.keys(foodObjects[foodType.selectedIndex]);
    let images = Object.values(foodObjects[foodType.selectedIndex]);
    let foods = [];

    for(let i = 0; i < keys.length; i++){
        foods[i] = ""+fixFoodName(keys[i]);
    }

    for(let j = 0; j < foods.length; j++){
        var emri = document.createElement("h3");
        emri.classList.add("emri-ushqimit");
        emri.innerText = foods[j];

        var foto = document.createElement("img");
        foto.classList.add("foto-ushqimit");
        foto.src = images[j];

        var butoni = document.createElement("button");
        butoni.classList.add("zgjedh-ushqimin");
        butoni.innerText = "Zgjedh";
        butoni.onclick = function(){
            foodGotChosen(j);
        };

        var ushqimi = document.createElement("div");
        ushqimi.classList.add("ushqim");
        ushqimi.appendChild(emri);
        ushqimi.appendChild(foto);
        ushqimi.appendChild(butoni);

        foodParent.appendChild(ushqimi);
    }
    console.log(foods);
}
function foodGotChosen(a){
    choosenFood = a;
    console.log(a);
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