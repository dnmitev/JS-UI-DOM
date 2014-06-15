(function () {
    $.fn.tabStrip = function () {
        var selector = this.selector;

        function onTabBtnClick(ev) {
            $(selector + ' .current').removeClass('current');
            $(this).parent().addClass('current');

            if (ev.preventDefault) {
                ev.preventDefault();
            }

            return false;
        }

        $(selector + ' .tab-btn').on('click', onTabBtnClick);

        return this;
    };
})();