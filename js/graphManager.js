window.onload = function () {
    let listeners = document.getElementsByClassName("subNavElement");
    for (let i = 0; i < listeners.length; i++) {
        listeners[i].addEventListener("click", changeGraph);
    }
}


function changeGraph(event) {
    let newSource = event.currentTarget.getAttribute("source");
    newSource = "../img/" + newSource;
    document.getElementById("graphElement").setAttribute("src", newSource);
}