/// <reference path="../Scripts/_references.js" />
window.onload = function () {
    "use strict";

    var CONST = {
        dwarfStartX: 500,
        dwarfStartY: 500,
        dwarfImageWidth: 80,
        dwarfImageHeight: 100,
        rockImageWidth: 40,
        rockImageHeight: 40
    }

    var stage = new Kinetic.Stage({
        container: 'container',
        width: 960,
        height: 640
    });

    var layer = new Kinetic.Layer();

    // image objects
    var dwarfImageObj = new Image(),
        rockImageObj = new Image();

    function GameObject(x, y, image, width, height, isControllable) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.image = image;
        this.isControllable = isControllable;

        this.imageObj =  new Kinetic.Image({
                x: this.x,
                y: this.y,
                image: this.image,
                width: this.width,
                height: this.height
            });

        this.moveLeft = function () {
            this.x -= this.width;
            this.draw();
        };

        this.moveRight = function () {
            this.x += this.width;
            this.draw();
        };

    }

    var dwarf = new GameObject(CONST.dwarfStartX, CONST.dwarfStartY, dwarfImageObj, CONST.dwarfImageWidth, CONST.dwarfImageWidth, true);
    var rock = new GameObject(500, 50, rockImageObj, CONST.rockImageWidth, CONST.rockImageWidth);

    layer.add(dwarf.imageObj);
    layer.add(rock.imageObj);

    stage.add(layer);
    //layer.draw();

    //var amplitude = 100;
    //var period = 2000; // in ms
    //var centerX = stage.width() / 2;
    //var centerY = stage.height() / 2;

    //var anim = new Kinetic.Animation(function (frame) {
    //    dwarf.imageObj.move(10);
    //}, layer);

    //anim.start();


    dwarfImageObj.src = "../images/dwarf.png";
    rockImageObj.src = "../images/rock.png";

    // event listener to control the dwarf
    document.body.addEventListener("keydown", function (e) {
        e = e || window.event;

        switch (e.keyCode) {
            case 37:
                dwarf.moveLeft();
                break;
            case 39:
                dwarf.moveRight();
                break;
        }

        stage.draw();
    });

}