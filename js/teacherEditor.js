window.onload = function () {
    let buttons = document.getElementsByClassName("edit");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", createEditor);
    }
}

function createEditor(event) {
    event.currentTarget.removeEventListener("click", createEditor);
    event.currentTarget.addEventListener("click", deleteEditor);
    event.currentTarget.innerText = "Valider";
    let fields = event.currentTarget.parentElement.childNodes;
    for (let i = 0; i < fields.length - 2; i++) {
        if (fields[i].tagName == "TD") {
            fields[i].innerHTML = "<input type='text' size='10' value='" + fields[i].innerText + "'>";
        }
    }
}

function deleteEditor(event) {
    event.currentTarget.removeEventListener("click", deleteEditor);
    event.currentTarget.addEventListener("click", createEditor);
    event.currentTarget.innerText = "Modifier";
    let fields = event.currentTarget.parentElement.childNodes;
    for (let i = 0; i < fields.length - 2; i++) {
        if (fields[i].tagName == "TD") {
            fields[i].innerText = fields[i].getElementsByTagName("INPUT")[0].value;
        }
    }
}