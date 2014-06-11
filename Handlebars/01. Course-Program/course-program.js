/// <reference path="../Scripts/_references.js" />
(function () {
    "use strict";

    var course = {
        lections: [{
            name: 'Course introduction',
            firstDate: 'Wed 18:00, 28-May-2014',
            secondDate: 'Thu 14:00, 29-May-2014'
        }, {
            name: 'Document Object Model',
            firstDate: 'Wed 18:00, 28-May-2014',
            secondDate: 'Thu 14:00, 29-May-2014'
        }, {
            name: 'HTML5 Canvas',
            firstDate: 'Wed 18:00, 29-May-2014',
            secondDate: 'Thu 14:00, 30-May-2014'
        }, {
            name: 'KineticJS Overview',
            firstDate: 'Wed 18:00, 29-May-2014',
            secondDate: 'Thu 14:00, 30-May-2014'
        }, {
            name: 'SVG And RaphaelJS',
            firstDate: 'Wed 18:00, 04-Jun-2014',
            secondDate: 'Thu 14:00, 05-Jun-2014'
        }, {
            name: 'Animations with Canvas and SVG',
            firstDate: 'Wed 18:00, 04-Jun-2014',
            secondDate: 'Thu 14:00, 05-Jun-2014'
        }, {
            name: 'DOM Operations',
            firstDate: 'Wed 18:00, 05-Jun-2014',
            secondDate: 'Thu 14:00, 06-Jun-2014'
        }, {
            name: 'Event Model',
            firstDate: 'Wed 18:00, 05-Jun-2014',
            secondDate: 'Thu 14:00, 06-Jun-2014'
        }, {
            name: 'jQuery overview',
            firstDate: 'Wed 18:00, 11-Jun-2014',
            secondDate: 'Thu 14:00, 12-Jun-2014'
        }, {
            name: 'HTML Templates',
            firstDate: 'Wed 18:00, 11-Jun-2014',
            secondDate: 'Thu 14:00, 12-Jun-2014'
        }, {
            name: 'Exam Preparation',
            firstDate: 'Wed 18:00, 12-Jun-2014',
            secondDate: 'Thu 14:00, 13-Jun-2014'
        }, {
            name: 'Exam',
            firstDate: 'Tue 10:00, 17-Jun-2014',
            secondDate: 'Thu 16:30, 17-Jun-2014'
        }, {
            name: 'Teamwork defense',
            firstDate: 'Wed 10:00, 19-Jun-2014',
            secondDate: 'Thu 10:00, 19-Jun-2014'
        }]
    },
        courseProgramTemplateHTML = document.getElementById('table-template').innerHTML,
        courseProgramTemplate = Handlebars.compile(courseProgramTemplateHTML);

    document.getElementsByTagName("body")[0].innerHTML = courseProgramTemplate({
        lections: course.lections
    });


}());