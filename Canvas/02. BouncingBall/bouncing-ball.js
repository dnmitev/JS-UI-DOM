(function () {
    "use strict";

    var canvas = document.getElementById('canvas'),
        ctx = canvas.getContext('2d'),
        direction = {
            x: "right",
            y: "down",
        },
        directions = {
            "left": -1.2,
            "right": +1.5,
            "up": -0.9,
            "down": +0.5
        };

    function getRandomValue(min, max) {
        return (Math.random() * (max - min) + min) | 0;
    }

    function getRandomColor() {
        var red = getRandomValue(0, 255),
            green = getRandomValue(0, 255),
            blue = getRandomValue(0, 255);

        return "rgb(" + red + "," + green + "," + blue + ")";
    }

    function Ball(x, y, radius, speed, direction) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.speed = speed;
        this.direction = direction;
        this.fillColor = getRandomColor();
        this.strokeColor = getRandomColor();

        this.draw = function (ctx) {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
            ctx.fillStyle = this.fillColor;
            ctx.strokeStyle = this.strokeColor;
            ctx.fill();
            ctx.stroke();
        };

        this.move = function () {
            this.x += this.speed * directions[this.direction.x];
            this.y += this.speed * directions[this.direction.y];
        };

        this.bounce = function (limitX, limitY) {
            if (this.x < this.radius) {
                this.direction.x = "right";
            }

            if (this.x > limitX - this.radius) {
                this.direction.x = "left";
            }

            if (this.y < this.radius) {
                this.direction.y = "down";
            }

            if (this.y > limitY - this.radius) {
                this.direction.y = "up";
            }
        }; 
    }

    function getRandomBall() {
        var x = getRandomValue(0, ctx.canvas.width),
            y = getRandomValue(0, ctx.canvas.height),
            directionX = (getRandomValue(0, 2) % 2 === 0) ? "left" : "right",
            directionY = (getRandomValue(0, 2) % 2 === 0) ? "up" : "down",
            ball = new Ball(x, y, 20, 5, {
                x: directionX,
                y: directionY
            });

        return ball;
    }

    var myBall = getRandomBall();

    function animationFrame() {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

        myBall.bounce(ctx.canvas.width, ctx.canvas.height);
        myBall.move();
        myBall.draw(ctx);

        requestAnimationFrame(animationFrame);
    }

    animationFrame();
})();