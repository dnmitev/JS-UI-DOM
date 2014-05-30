(function () {
    "use strict";

    if (!document.querySelectorAll) {
        // IE7 querySelector hack
        document.querySelectorAll = function (selector) {
            var head = document.documentElement.firstChild; // takes <head> tag
            var styleTag = document.createElement("STYLE"); // creates a new <style> tag

            head.appendChild(styleTag);
            document.arrayOfSelectorNodes = [];

            // the next line is the magic - so called IE5-IE7 CSS expressions:
            // the expression is executed on each HTML element that fulfils the selector  
            styleTag.styleSheet.cssText = selector + "{x:expression(document.arrayOfSelectorNodes.push(this))}";

            // the next line forces DOM tree to reload and and CCS to execute
            window.scrollBy(1, 0);

            // initially was implemented window.scrollBy(0, 0) but it seems to work only in Quirks mode or probably in "original" IE7
            // this double invoke of scrollBy has side effect of doubling the result, however it works!
            head.removeChild(styleTag);
            window.scrollBy(-1, 0);

            return document.arrayOfSelectorNodes;
        }
    }
})();