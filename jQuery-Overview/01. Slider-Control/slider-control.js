/// <reference path="../Scripts/_references.js" />
(function () {
    "use strict";

    var $slides = $('.invisible'),
        $selectedSlide = $('.selected');

    $slides.hide(); // hide the slides that should be later showed

    $('#slider-content').append($selectedSlide.html()); // show just the current slide

    function onPreviousButtonClick() {
        var $selected = $('.selected');
        $('#slider-content').empty(); // delete #slide-content

        $selected.removeClass('selected');
        
        if ($selected.prev().length > 0) {
            $selected.prev().addClass('selected');
        } else {
            $('#slider-content').children(':first').addClass('selected');
        }

        $('#slider-content').append($('.selected').html()); // show just the current slide
    }

    function onNextButtonClick() {
        var $selected = $('.selected');

        $('#slider-content').empty();
        $selected.removeClass('selected');

        if ($selected.next().length > 0) {
            $selected.next().addClass('selected');
        } else {
            $('#slider-content').children(':last').addClass('selected');
        }

        $('#slider-content').append($('.selected').html()); // show just the current slide
    }

    $(document).ready(function () {
        $('#previous').on('click', onPreviousButtonClick);
        $('#next').on('click', onNextButtonClick);
    });
}());