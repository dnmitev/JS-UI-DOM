(function () {
    "use strict";

    var canvas = document.getElementById("canvas"),
        ctx = canvas.getContext();

    function getRandomValue(min, max) {
        return (Math.random() * (max - min) + min) | 0;
    }

    function getRandomColor() {
        var red = getRandomValue(0, 255),
            green = getRandomValue(0, 255),
            blue = getRandomValue(0, 255);

        return "rgb(" + red + "," + green + "," + blue + ")";
    }

    function Snake(x, y, speed, size) {
        this.x = x;
        this.y = y;

        this.draw = function (ctx) {
            // TODO: Implement
        };

        this.grow = function () {
            // TODO: Implement
        };

        this.moveLeft = function () {
            this.x -= speed;
        };

        this.moveRight = function () {
            this.x += speed;
        };

        this.moveUp = function () {
            this.y -= speed;
        };

        this.moveDown = function () {
            this.y += speed;
        };
    }

    function Rock(x, y) {
        this.x = x;
        this.y = y;

        this.draw = function (ctx) {
            // TODO:  Implement
        }
    }

    function Apple(x, y) {
        this.x = x;
        this.y = y;
        this.strokeColor = 'yellow';
        this.fillColor = 'red';

        this.draw = function (ctx) {
            // TODO: Implement
        }
    }

    var snake = new Snake(50, 50, 5, 5);

    document.body.addEventListener("keydown", function (e) {
        if (!e) {
            e = window.event;
        }

        switch (e.keyCode) {
            case 37:
                snake.moveLeft();
                break;
            case 38:
                snake.moveUp();
                break;
            case 39:
                snake.moveRight();
                break;
            case 40:
                snake.moveDown();
                break;
        }
    });

    function animationFrame() {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        snake.draw(ctx);
        requestAnimationFrame(animationFrame);
    }

    requestAnimationFrame(animationFrame);
})();