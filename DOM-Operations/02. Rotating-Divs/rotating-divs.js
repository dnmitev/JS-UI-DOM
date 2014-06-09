(function () {
    "use strict";

    function createDiv() {
        var div = document.createElement("div");

        div.style.width = "50px";
        div.style.height = "50px";

        div.style.backgroundColor = getRandomColor();

        div.style.position = "absolute";
        div.style.top = getRandomValue(0, 75) + "%";
        div.style.left = getRandomValue(0, 75) + "%";

        div.style.borderRadius = "50%";
        div.style.borderColor = getRandomColor();
        div.style.borderWidth = "2px";
        div.style.borderStyle = "solid";

        return div;
    }

    function Circle(x, y, r) {
        this.x = x;
        this.y = y;
        this.radius = r;

        this.element = document.createElement("div");

        this.element.style.width = r * 2 + "px";
        this.element.style.height = r * 2 + "px";

        this.element.style.position = "absolute";
        this.element.style.top = x - r + "px";
        this.element.style.left = y - r + "px";

        this.element.borderRadius = '50%';
        this.element.borderColor = 'black';
        this.element.borderWidth = '1px';
        this.element.borderStyle = 'solid';
    }

    Circle.prototype.drawAtDegrees = function (el, degrees) {
        var x = this.x + this.radius * Math.cos(degrees * Math.PI / 180),
            y = this.y + this.radius * Math.sin(degrees * Math.PI / 180);

        el.style.left = x - parseInt(el.style.width, 10) / 2 + 'px';
        el.style.top = y - parseInt(el.style.height, 10) / 2 + 'px';
    };

    var temporaryContainer = document.createDocumentFragment(),
        divList = [],
        divCount = 5,
        circle = new Circle(300, 300, 100);

    temporaryContainer.appendChild(circle.element);

    for (var i = 0; i < divCount; i += 1) {
        var div = createDiv();

        temporaryContainer.appendChild(div);
        divList.push(div);

        var degrees = i * 360 / divCount;

        div.setAttribute('data-degrees', degrees);
        circle.drawAtDegrees(div, degrees);
    }

    document.body.appendChild(temporaryContainer);

    setInterval(function () {
        for (var i = 0; i < divCount; i += 1) {
            div = divList[i];
            degrees = (parseFloat(div.getAttribute('data-degrees')) + 1) % 360;
            div.setAttribute('data-degrees', degrees);
            circle.drawAtDegrees(div, degrees);
        }
    }, 100);

    function getRandomValue(min, max) {
        return (Math.random() * (max - min) + min) | 0;
    }

    function getRandomColor() {
        var red = getRandomValue(0, 255),
            green = getRandomValue(0, 255),
            blue = getRandomValue(0, 255);

        return "rgb(" + red + "," + green + "," + blue + ")";
    }
})();
