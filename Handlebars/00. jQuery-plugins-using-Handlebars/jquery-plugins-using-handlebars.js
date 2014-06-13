/// <reference path="../Scripts/_references.js" />
(function () {
    'use strict';

    // define input data
    var books = {
        books: [{
            id: 1,
            title: 'JavaScript The Good Parts'
        }, {
            id: 2,
            title: 'Secrets of the JavaScript Ninja'
        }, {
            id: 3,
            title: 'Core HTML5 Canvas'
        }, {
            id: 4,
            title: 'JavaScript Patterns'
        }]
    },
        students = {
            students: [{
                name: 'Aletta Ocean',
                mark: 6
            }, {
                name: 'Christy Mack',
                mark: 6
            }, {
                name: 'Angelina Valentine',
                mark: 5
            }, {
                name: 'Teodora Andreeva',
                mark: 3
            }, {
                name: 'Cvetelina Yaneva',
                mark: 4
            }]
        };

    // do the jQuery plugin
    $.fn.listview = function (data) {
        var $this = $(this),
            templateId = $this.data('template'),
            template = $('#' + templateId).html(),
            templateCollection = Handlebars.compile(template);

        $this.html(templateCollection(data));

        return $this;
    }

    // call the newly added jQuery plugin to the corresponding ID's
    $('#books-list').listview(books);
    $('#students-table').listview(students);

}());