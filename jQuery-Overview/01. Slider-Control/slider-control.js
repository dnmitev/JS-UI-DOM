/// <reference path="../Scripts/_references.js" />
(function () {
    "use strict";

    var $slider = $('#slider-content');

    function onPreviousButtonClick() {
        var currentSlide = $slider.find('.selected');

        currentSlide.removeClass('selected');

        if (currentSlide.prev().length > 0) {
            currentSlide.prev().addClass('selected');
        } else {
            $slider.children(':last').addClass('selected');
        }
    }

    function onNextButtonClick() {
        var currentSlide = $slider.find('.selected');

        currentSlide.removeClass('selected');

        if (currentSlide.next().length > 0) {
            currentSlide.next().addClass('selected');
        } else {
            $slider.children(':first').addClass('selected');
        }
    }

    $(document).ready(function () {
        $('#previous').on('click', onPreviousButtonClick);
        $('#next').on('click', onNextButtonClick);
    });
}());