(function () {
    "use strict";
    
    var textarea = document.getElementById("text");

    textarea.style.width = "700px";
    textarea.style.height = "200px";
    
    function attachEventListener(selector, eventName, listener) {
        document.querySelector(selector).addEventListener(eventName, listener);
    }

    attachEventListener("#text-color", "change", function (e) {
        textarea.style.color = e.target.value;
    });

    attachEventListener("#bg-color", "change", function (e) {
        textarea.style.backgroundColor = e.target.value;
    });
})();