/// <reference path="../Scripts/_references.js" />
(function () {
    "use strict";

    var $root = $('#list'),
        $addBeforeButton = $('#add-before-btn'),
        $addAfterButton = $('#add-after-btn');

    $addAfterButton.on('click', function () {
        $root.append('<li>Item after</li>');
    });

    $addBeforeButton.on('click', function () {
        $root.prepend('<li>Item before</li>');
    });
}());