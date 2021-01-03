function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("image", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    let data = ev.dataTransfer.getData("image");
    ev.target.appendChild(document.getElementById(data));
    document.getElementById(ev.target.id).removeAttribute("ondrop");
    document.getElementById(ev.target.id).removeAttribute("ondragover");
    Array.prototype.slice.call(document.getElementById(ev.target.id).children).forEach(element => {
        element.removeAttribute("draggable");
        element.removeAttribute("ondragstart");
    });
}

const PHONE_REGEX_PATTERN = /^[+][/0-9]{8,12}$/gm;

function cashout() {   
    let name = document.getElementById("name").value; 
    let lname = document.getElementById("lname").value;
    let phone = document.getElementById("phone").value;
    console.log(phone);
    if (!name || !lname){
        window.alert("Please write first and last name")
    } else if (!PHONE_REGEX_PATTERN.test(phone)) {
        //qite naj pop-up qe gabim eshte numri i tel
        window.alert("The number should be of format: +123456789")
        throw new Error("Phone number not valid");
    } else {
        document.getElementById("perzgjedhja").style.display = "none";
        document.getElementById("intro").style.display = "block";
    }

}	
