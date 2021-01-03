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
