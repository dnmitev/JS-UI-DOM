/// <reference path="../Scripts/_references.js" />
(function () {
    "use strict"

    var templateHTML = document.getElementById("dynamic-select-template").innerHTML,
        template = Handlebars.compile(templateHTML),
        items = [{
            value: 1,
            text: 'one',
            selected: true
        }, {
            value: 2,
            text: 'two'
        }, {
            value: 3,
            text: 'three'
        }, {
            value: 4,
            text: 'four'
        }, {
            value: 5,
            text: 'five'
        }, {
            value: 6,
            text: 'six'
        }, {
            value: 7,
            text: 'seven'
        }];

    document.getElementById("wrapper").innerHTML += template({
        items: items
    });
}());