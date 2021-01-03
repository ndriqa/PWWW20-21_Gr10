let foodObjects = [
    { //breakfast
        egg_and_bacon: "./Images/reservation/baconEgg.JPG",
        waffle: "./Images/reservation/waffle.jpg",
        bagel: "./Images/reservation/bagel.jpg",
        cereal: "./Images/reservation/cereal.jpg",
        ouatmeal: "./Images/reservation/oatmeal.jpg",
        strawberry_pancakes: "./Images/reservation/strawberrypancakes.jpg",
        toast: "./Images/reservation/toast.jpg",
        crepes: "./Images/reservation/crepes.jpg",
        avocado_omlette: "./Images/reservation/avocadoomelette.jpg",
        vegetarian_omlette: "./Images/reservation/vegetarianomelette.jpg",
    },
    { //lunch
        sunday_roast: "./Images/reservation/Sunday Roast.jpg",
        chilli_con_carne: "./Images/reservation/chilli-con-corne.jpg",
        butter_chicken: "./Images/reservation/butterchichken.jpg",
        orange_chicken: "./Images/reservation/Orange Chicken.jpg",
        buffalo_wings: "./Images/reservation/Buffalo Wings.jpg",
        pot_roast: "./Images/reservation/Pot Roast.jpg",
        meatloaf: "./Images/reservation/meatloaf.jpeg",
        barbecue_ribs: "./Images/reservation/Barbecue Ribs.jpg",
        steak_tartare: "./Images/reservation/Steak tartare.jpg",
        salisbury_steak: "./Images/reservation/Salisbury Steak.jpg",
    },
    { //pizza and pasta
        margherita_pizza: "./Images/reservation/margheritapizza.jfif",
        veggie_pizza: "./Images/reservation/veggiepizza.jpg",
        pepperoni_pizza: "./Images/reservation/pepperonipizza.webp",
        cheese_pizza: "./Images/reservation/cheesepizza.jpg",
        spaghetti_bolognese: "./Images/reservation/bolognese.jpg",
        lasagna: "./Images/reservation/lasagna.jpg",
        french_fries: "./Images/reservation/fries.jpg",
        chicken_satay: "./Images/reservation/chickensatay.jpg",
        four_cheese_pasta: "./Images/reservation/fourcheese.jpg",
        cheese_balls: "./Images/reservation/cheeseballs.jpg",
    },
    { //specials
        surf_and_turf: "./Images/reservation/Surf and Turf.jpg",
        chicken_fried_steak: "./Images/reservation/Chicken Fried Steak.jpg",
        general_tsos_chicken: "./Images/reservation/general.jpg",
        chicken_parmigiana: "./Images/reservation/Chicken Parmigiana.jpg",
        chop_suey: "./Images/reservation/Chop Suey.jpg",
        four_cheese_pasta: "./Images/reservation/fourcheese.jpg",
        cheese_balls: "./Images/reservation/cheeseballs.jpg",
        pot_roast: "./Images/reservation/Pot Roast.jpg",
        salisbury_steak: "./Images/reservation/Salisbury Steak.jpg",
        chilli_con_carne: "./Images/reservation/chilli-con-corne.jpg",
    },
    { //drinks
        fresh_juice: "./Images/reservation/juice.jfif",
        coffee: "./Images/reservation/coffee.jpg",
        lemonade: "./Images/reservation/lemonade.jfif",
        soda: "./Images/reservation/soda.jpg",
        milkshake: "./Images/reservation/milkshake.jpg",
        smoothie: "./Images/reservation/smoothie.jpg",
        frappe: "./Images/reservation/frappe.jpg",
        iced_coffe: "./Images/reservation/icedcoffe.jpg",
        hot_chocolate: "./Images/reservation/hotchocolate.jpg",
        coffe_milkshake: "./Images/reservation/milkshake.jpg",
        coctail: "./Images/reservation/coctail.jpg",
        beer: "./Images/reservation/beer.jpg",
        blody_mary: "./Images/reservation/blodymary.jpg",
        mimosa: "./Images/reservation/mimosa.jpg",
        champagne: "./Images/reservation/champagne.jpg",
    }
]
let fprice;
let dprice;
fprice = sessionStorage.getItem('food')
dprice = sessionStorage.getItem('drink')

if(!fprice){
    fprice = 5.00;
} else {}
if(!dprice){
    dprice = 3.00;
} else {}

const PHONE_REGEX_PATTERN = /^[+][/0-9]{8,12}$/gm;

let choosenFoodType = -1;
let choosenFood = -1;
let choosenDrink = -1;

document.getElementById("choose").onclick = foodTypeChosen;

function foodTypeChosen() {
    document.getElementById("intro").style.display = "none";

    let foodParent = document.getElementById("ushqimet")
    foodParent.innerHTML = "";

    document.getElementById("ushqimeParent").style.display = "block"

    let foodType = document.getElementById("foods");
    choosenFoodType = foodType.selectedIndex;

    let keys = Object.keys(foodObjects[choosenFoodType]);
    let images = Object.values(foodObjects[choosenFoodType]);
    let foods = [];

    for (let i = 0; i < keys.length; i++) {
        foods[i] = "" + fixFoodName(keys[i]);
    }

    for (let j = 0; j < foods.length; j++) {
        let emri = document.createElement("h3");
        emri.classList.add("emri-ushqimit");
        emri.innerText = foods[j];

        let foto = document.createElement("img");
        foto.classList.add("foto-ushqimit");
        foto.src = images[j];

        let butoni = document.createElement("button");
        butoni.classList.add("zgjedh-ushqimin");
        butoni.innerText = "Zgjedh";
        butoni.type = "button"
        butoni.onclick = function () {
            foodGotChosen(j);
        };

        let ushqimi = document.createElement("div");
        ushqimi.classList.add("ushqim");
        ushqimi.appendChild(emri);
        ushqimi.appendChild(foto);
        ushqimi.appendChild(butoni);

        foodParent.appendChild(ushqimi);
    }
}
function foodGotChosen(f) {
    choosenFood = f;

    document.getElementById("ushqimeParent").style.display = "none"
    document.getElementById("pijeParent").style.display = "block"


    let drinkParent = document.getElementById("pijet");
    drinkParent.innerHTML = "";

    let drinkKeys = Object.keys(foodObjects[4]);
    let drinkImages = Object.values(foodObjects[4]);
    let drinks = [];

    for (let i = 0; i < drinkKeys.length; i++) {
        drinks[i] = "" + fixFoodName(drinkKeys[i]);
    }

    for (let j = 0; j < drinks.length; j++) {
        let emri = document.createElement("h3");
        emri.classList.add("emri-ushqimit");
        emri.innerText = drinks[j];

        let foto = document.createElement("img");
        foto.classList.add("foto-ushqimit");
        foto.src = drinkImages[j];

        let butoni = document.createElement("button");
        butoni.classList.add("zgjedh-ushqimin");
        butoni.innerText = "Zgjedh";
        butoni.type = "button"
        butoni.onclick = function () {
            drinkGotChosen(j);
        };

        let ushqimi = document.createElement("div");
        ushqimi.classList.add("pije");
        ushqimi.appendChild(emri);
        ushqimi.appendChild(foto);
        ushqimi.appendChild(butoni);

        drinkParent.appendChild(ushqimi);
    }
}
function drinkGotChosen(d) {
    choosenDrink = d;
    document.getElementById("perzgjedhja").style.display = "flex"
    document.getElementById("pijeParent").style.display = "none"

    let foodKeys = Object.keys(foodObjects[choosenFoodType]);
    let foodValues = Object.values(foodObjects[choosenFoodType]);

    let foodImage = foodValues[choosenFood];
    let foodName = fixFoodName(foodKeys[choosenFood]);

    let drinkKeys = Object.keys(foodObjects[4]);
    let drinkValues = Object.values(foodObjects[4]);

    let drinkName = fixFoodName(drinkKeys[choosenDrink]);
    let drinkImage = drinkValues[choosenDrink];

    document.getElementById("chosen_food").src = foodImage;
    document.getElementById("chosen_drink").src = drinkImage;

    
    document.getElementById("food_name").innerText = foodName;
    document.getElementById("food_price").innerText = `${fprice}$`;
    document.getElementById("drink_name").innerText = drinkName;
    document.getElementById("drink_price").innerText = `${dprice}$`;

    document.getElementById("total_price").innerText = `${fprice+dprice}$`;
}
function cashout() {
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let phone = document.getElementById("num").value;
    console.log(phone);
    if (!fname || !lname){
        window.alert("Please write first and last name");
        throw new Error("First or last name not valid");
    } else if (!PHONE_REGEX_PATTERN.test(phone)) {
        //qite naj pop-up qe gabim eshte numri i tel
        window.alert("The number should be of format: +123456789");
        throw new Error("Phone number not valid");
    } else {
        document.getElementById("perzgjedhja").style.display = "none";
        document.getElementById("intro").style.display = "block";
        window.alert("Order has been made and will arrive shortly");
    }

}
function fixFoodName(s) {
    let nameParts = s.split("_");
    let name = "";
    for (let i = 0; i < nameParts.length; i++) {
        name = name + firstUpperLetter(nameParts[i]) + " ";
    }
    return name;
}
function firstUpperLetter(s) {
    return (s.charAt(0).toUpperCase() + s.slice(1));
}
