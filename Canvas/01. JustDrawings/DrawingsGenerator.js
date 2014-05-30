(function () {
    "use strict";

    var canvas = document.getElementById("canvas"),
        ctx = canvas.getContext('2d');

    // drawing the house 
    // first main body
    ctx.fillStyle = "#975B5B";
    ctx.strokeStyle = "#000";

    ctx.fillRect(10, 300, 260, 230);
    ctx.strokeRect(10, 300, 260, 230);

    // windows as recatangles
    ctx.fillStyle = "#000";

    ctx.fillRect(30, 350, 40, 25);
    ctx.fillRect(30, 378, 40, 25);
    ctx.fillRect(73, 350, 40, 25);
    ctx.fillRect(73, 378, 40, 25);

    ctx.fillRect(160, 350, 40, 25);
    ctx.fillRect(160, 378, 40, 25);
    ctx.fillRect(203, 350, 40, 25);
    ctx.fillRect(203, 378, 40, 25);

    ctx.fillRect(160, 430, 40, 25);
    ctx.fillRect(160, 458, 40, 25);
    ctx.fillRect(203, 430, 40, 25);
    ctx.fillRect(203, 458, 40, 25);

    // draw the door
    ctx.beginPath();
    ctx.moveTo(40, 530);
    ctx.lineTo(40, 450);
    ctx.moveTo(70, 530);
    ctx.lineTo(70, 435);
    ctx.moveTo(100, 530);
    ctx.lineTo(100, 450);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(65, 490, 2, 0, 2 * Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(75, 490, 2, 0, 2 * Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(40, 450);
    ctx.quadraticCurveTo(70, 420, 100, 450);
    ctx.stroke();

    // draw the roof
    ctx.beginPath();
    ctx.moveTo(10, 300);
    ctx.lineTo(135, 150);
    ctx.moveTo(135, 150);
    ctx.lineTo(180, 200);
    ctx.moveTo(180, 235);
    ctx.lineTo(180, 160);
    ctx.moveTo(200, 235);
    ctx.lineTo(200, 160);
    ctx.moveTo(200, 220);
    ctx.lineTo(270, 300);
    ctx.closePath();
    ctx.fillStyle = "#975B5B";
    ctx.fill();
    ctx.stroke();

    // draw the chimney
    ctx.beginPath();

    ctx.closePath()
    ctx.stroke();
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(180, 160);
    ctx.quadraticCurveTo(189, 150, 200, 160);
    ctx.moveTo(180, 160);
    ctx.quadraticCurveTo(189, 165, 200, 160);
    ctx.stroke();
    ctx.fill();

})();