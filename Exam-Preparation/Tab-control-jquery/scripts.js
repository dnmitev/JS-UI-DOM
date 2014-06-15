/// <reference path="../Scripts/_references.js" />
$.fn.tabs = function () {
    var $this = this,
        $parent = $this;

    $this.addClass('tabs-container');

    $this.find('.tab-item-content')
            .hide();

    $this.find('.tab-item-title').on('click', function () {
        var $this = $(this);

        $parent.find('.current')
                .removeClass('current');

        $parent.find('.tab-item-content')
                .hide();

        $this.parent()
                .addClass('current')
                    .find('.tab-item-content')
                        .show();
    });

    $this.find('.current .tab-item-title').click();

    return $this;
};