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
    ctx.lineTo(270, 300);
    ctx.fillStyle = "#975B5B";
    ctx.fill();
    ctx.stroke();

    // draw the chimney
    ctx.beginPath();
    ctx.lineTo(180, 200);
    ctx.moveTo(180, 235);
    ctx.lineTo(180, 160);
    ctx.moveTo(200, 235);
    ctx.lineTo(200, 160);
    ctx.fillRect(180, 160, 20, 75);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(180, 160);
    ctx.quadraticCurveTo(189, 150, 200, 160);
    ctx.moveTo(180, 160);
    ctx.quadraticCurveTo(189, 165, 200, 160);
    ctx.stroke();
    ctx.fill();



    // draw the bike
    // starts with the wheels
    ctx.beginPath();
    ctx.arc(400, 500, 25, 0, 2 * Math.PI);
    ctx.fillStyle = '#90CAD7';
    ctx.fill();
    ctx.strokeStyle = '#337D8F';
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(500, 500, 25, 0, 2 * Math.PI);
    ctx.fillStyle = '#90CAD7';
    ctx.fill();
    ctx.strokeStyle = '#337D8F';
    ctx.stroke();

    // draw the frame
    ctx.beginPath();
    ctx.moveTo(400, 500);
    ctx.lineTo(445, 500);
    ctx.lineTo(490, 465);
    ctx.lineTo(425, 465);
    ctx.closePath();
    ctx.strokeStyle = '#337D8F';
    ctx.stroke();

    // draw the steering system
    ctx.beginPath();
    ctx.moveTo(500, 500);
    ctx.lineTo(485, 440);
    ctx.lineTo(465, 450);
    ctx.moveTo(485, 440);
    ctx.lineTo(500, 420);
    ctx.strokeStyle = '#337D8F';
    ctx.stroke();

    // draw the seat
    ctx.beginPath();
    ctx.moveTo(445, 500);
    ctx.lineTo(415, 450);
    ctx.moveTo(405, 450);
    ctx.lineTo(430, 450);
    ctx.strokeStyle = '#337D8F';
    ctx.stroke();

    // draw the pedal system
    ctx.beginPath();
    ctx.arc(445, 500, 5, 0, 2 * Math.PI);
    ctx.strokeStyle = '#337D8F';
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(440, 495);
    ctx.lineTo(435, 490);
    ctx.moveTo(450, 505);
    ctx.lineTo(455, 510);
    ctx.strokeStyle = '#337D8F';
    ctx.stroke();



    // draw like a sir
    // lets start from the head
    ctx.beginPath();
    ctx.arc(500, 200, 50, 0, 2 * Math.PI);
    ctx.fillStyle = '#90CAD7';
    ctx.fill();
    ctx.strokeStyle = '#337D8F';
    ctx.stroke();

    // draw creepy face
    ctx.save();
    ctx.scale(1, 0.4);
    ctx.beginPath();
    ctx.arc(500, 580, 25, 0, 2 * Math.PI);
    ctx.restore();
    ctx.stroke();

    ctx.save();
    ctx.scale(1, 0.35);
    ctx.beginPath();
    ctx.arc(470, 540, 12, 0, 2 * Math.PI);
    ctx.restore();
    ctx.stroke();

    ctx.save();
    ctx.scale(1, 0.35);
    ctx.beginPath();
    ctx.arc(530, 540, 12, 0, 2 * Math.PI);
    ctx.restore();
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(470, 189, 3, 0, 2 * Math.PI);
    ctx.fillStyle = '#000';
    ctx.fill();

    ctx.beginPath();
    ctx.arc(530, 189, 3, 0, 2 * Math.PI);
    ctx.fillStyle = '#000';
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(500, 190);
    ctx.lineTo(485, 210);
    ctx.lineTo(500, 205);
    ctx.strokeStyle = '#000';
    ctx.stroke();

    // draw the hat - hopefully there is not a bunny inside
    ctx.save();
    ctx.scale(1, 0.3);
    ctx.beginPath();
    ctx.arc(500, 520, 60, 0, 2 * Math.PI);
    ctx.fillStyle = '#396693';
    ctx.fill();
    ctx.strokeStyle = '#000';
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(465, 500);
    ctx.lineTo(465, 250);
    ctx.moveTo(535, 500);
    ctx.lineTo(535, 250);
    ctx.fillStyle = '#396693';
    ctx.fillRect(465, 250, 70, 250);
    ctx.moveTo(465, 500);
    ctx.quadraticCurveTo(500, 550, 535, 500);
    ctx.strokeStyle = '#000';
    ctx.stroke();

    ctx.save();
    ctx.scale(1, 0.5);
    ctx.beginPath();
    ctx.arc(500, 500, 35, 0, 2 * Math.PI);
    ctx.strokeStyle = '#000';
    ctx.stroke();
    ctx.fillStyle = '#396693';
    ctx.fill();
})();