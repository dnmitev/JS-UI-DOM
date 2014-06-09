/// <reference path="../Scripts/_references.js" />
window.onload = function () {
    "use strict";

    var CONST = {
        dwarfStartX: 500,
        dwarfStartY: 400,
        dwarfImageWidth: 80,
        dwarfImageHeight: 100,
        rockImageWidth: 40,
        rockImageHeight: 40
    }

    var stage = new Kinetic.Stage({
        container: 'container',
        width: 960,
        height: 500
    });

    var layer = new Kinetic.Layer();

    // image objects
    var dwarfImageObj = new Image();
    // var rockImageObj = new Image();

    //function GameObject(x, y, image, width, height, isControllable) {
    //    this.isControllable = isControllable;

    //    this.imageObj = new Kinetic.Image({
    //        x: x,
    //        y: y,
    //        image: image,
    //        width: width,
    //        height: height
    //    });

    //    this.moveLeft = function () {
    //        this.imageObj.setX(this.imageObj.attrs.x -= 50);
    //    };

    //    this.moveRight = function () {
    //        this.imageObj.setX(this.imageObj.attrs.x += 50);
    //    };
    //}



    dwarfImageObj.onload = function () {
        //var dwarf = new GameObject(CONST.dwarfStartX, CONST.dwarfStartY, dwarfImageObj, CONST.dwarfImageWidth, CONST.dwarfImageWidth, true);
        //var rock = new GameObject(500, 50, rockImageObj, CONST.rockImageWidth, CONST.rockImageWidth);
        var dwarf = new Kinetic.Image({
            x: CONST.dwarfStartX,
            y: CONST.dwarfStartY,
            image: dwarfImageObj,
            width: CONST.dwarfImageWidth,
            height: CONST.dwarfImageHeight
        });

        //var rock = new Kinetic.Image({
        //    x: 500,
        //    y: 50,
        //    image: rockImageObj,
        //    width: CONST.rockImageWidth,
        //    height: CONST.rockImageHeight
        //});

        layer.add(dwarf);
        //layer.add(rock);

        stage.add(layer);

        //event listener to control the dwarf
        function onKeyDown(evt) {
            switch (evt.keyCode) {
                case 37:  // left arrow
                    //dwarf.moveLeft();
                    //dwarf.setX(dwarf.attrs.x -= 80);
                    dwarf.x(dwarf.x() - 80);
                    break;
                case 39:  // right arrow
                    //dwarf.moveRight();
                    //dwarf.setX(dwarf.attrs.x += 80);
                    dwarf.x(dwarf.x() + 80);
                    break;
            }
        }

        window.addEventListener('keydown', onKeyDown);
    }

    dwarfImageObj.src = "../images/dwarf.png";
    //rockImageObj.src = "../images/rock.png";
}