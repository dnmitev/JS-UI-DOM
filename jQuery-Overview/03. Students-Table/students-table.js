/// <reference path="../Scripts/_references.js" />
(function () {
    "use strict";

    var students = [{
        firstName: 'Pepi',
        lastName: 'Peichev',
        grade: 12
    }, {
        firstName: 'Pesho',
        lastName: 'Goshev',
        grade: 12
    }, {
        firstName: 'Gosho',
        lastName: 'Peshev',
        grade: 11
    }, {
        firstName: 'Gubi',
        lastName: 'Buklik',
        grade: 2
    }, {
        firstName: 'Spindi',
        lastName: 'Spinderov',
        grade: 3
    }, {
        firstName: 'Jmirgoleta',
        lastName: 'Lozanova',
        grade: 1
    }],
        theadString = '<thead>' +
                            '<tr>' +
                                '<th>First Name</th>' +
                                '<th>Last Name</th>' +
                                '<th>Grade</th>' +
                            '</tr>' +
                      '</thead>',
        tbodyString = '<tbody>';
    //tbodyString = '<tbody><tr><td>.....</td></tr></tbody>';

    for (var i = 0, len = students.length; i < len; i += 1) {
        tbodyString += '<tr>' +
                            '<td>' + students[i].firstName + '</td>' +
                            '<td>' + students[i].lastName + '</td>' +
                            '<td>' + students[i].grade + '</td>' +
                        '</tr>';
    }

    $('#wrapper').append('<table id="students">' + theadString + tbodyString + '</table>');
}());