function onCreateBtnClick() {
    var divFragment = document.createDocumentFragment(),
        divsCount = document.getElementById("number").value | 0,
        i;

    for (i = 0; i < divsCount; i += 1) {
        var div = document.createElement("div");
        divFragment.appendChild(div);
        appendStyleToDiv(div);
        insertStrongElementIntoDiv(div);
    }

    document.body.appendChild(divFragment);
}

function getRandomValue(min, max) {
    return (Math.random() * (max - min) + min) | 0;
}

function getRandomColor() {
    var red = getRandomValue(0, 255),
        green = getRandomValue(0, 255),
        blue = getRandomValue(0, 255);

    return "rgb(" + red + "," + green + "," + blue + ")";
}

function appendStyleToDiv(div) {
    div.style.width = getRandomValue(20, 100) + "px";
    div.style.height = getRandomValue(20, 100) + "px";
    div.style.backgroundColor = getRandomColor();
    div.style.position = "absolute";
    div.style.left = getRandomValue(0, screen.width) + "px";
    div.style.top = getRandomValue(280, screen.height) + "px"; 
    div.style.borderStyle = "solid";
    div.style.borderRadius = getRandomValue(0, 10) + "px";
    div.style.borderWidth = getRandomValue(0, 20) + "px";
    div.style.borderColor = getRandomColor();
    div.style.textAlign = "center"; 
}

function insertStrongElementIntoDiv(div) {
    var strong = document.createElement("strong"),
        textNode = document.createTextNode("div");

    strong.appendChild(textNode);

    div.appendChild(strong);
}