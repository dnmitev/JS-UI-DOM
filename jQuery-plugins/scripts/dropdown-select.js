/// <reference path="_references.js" />
(function () {
    'use strict';

    $.fn.dropdown = function () {
        var $this = this;

        $this.hide();

        //        <div class="dropdown-list-container">
        //          <ul class="dropdown-list-options">
        //              <li class="dropdown-list-option" data-value="0">One</li>
        //                  …
        //          </ul>
        //        </div>


        var $dropdownListCointainer = $('<div />').addClass('dropdown-list-container'),
            $listContainer = $('<ul />').addClass('dropdown-list-options'),
            $selectOptions = $('option');

        for (var i = 0, len = $selectOptions.length; i < len; i += 1) {
            var currentOptionValue = $selectOptions[i].value,
                currentOptionHtml = $selectOptions[i].innerHTML,
                $listItem = $('<li />')
                                .addClass('dropdown-list-option')
                                .html(currentOptionHtml)
                                .data('data-value', currentOptionValue)
                                .on('click', onListItemClick);

            $listContainer.append($listItem);
        }

        $dropdownListCointainer.append($listContainer);

        $this.after($dropdownListCointainer);

        function onListItemClick() {
            var self = this,
                dataValue = $(self).data('data-value'),
                selector = 'option[value=' + dataValue + ']';

            if ($('#dropdown').find(selector).attr('selected') === 'selected') {
                $('#dropdown').find(selector).removeAttr('selected', '');
                $(this).removeClass('dropdown-styled');
            } else {
                $('#dropdown').find(selector).attr('selected', 'selected');
                $(this).addClass('dropdown-styled');
            }
        }

        return $this;
    };

    $('#dropdown').dropdown();
}());