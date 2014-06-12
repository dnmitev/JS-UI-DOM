/// <reference path="../Scripts/_references.js" />
(function () {
    "use strict";

    var $color = $('#color-picker');

    $color.on('change', function () {
        var $this = this;

        $('body')[0].style.backgroundColor = $this.value;
    });
}());