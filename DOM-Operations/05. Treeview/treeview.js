(function () {
    "use strict";

    var fragment = document.createDocumentFragment(),
        root = document.createElement("ul"),
        sublistCount = getRandomValue(5, 10);

    root.className += "expanded";

    createLiElements(root, sublistCount);
    fragment.appendChild(root);
    document.body.appendChild(fragment);

    for (var i = 0; i < sublistCount; i++) {
        if (i % 2 === 0) {
            var selector = ".list-item" + (i + 1),
                tempRoot = document.querySelector(selector),
                ul = document.createElement("ul");

            createLiElements(ul, sublistCount);

            tempRoot.appendChild(ul);
        }
    }


    function createLiElements(parent, count) {
        for (var i = 0; i < count; i += 1) {
            var li = document.createElement("li"),
                textNode = document.createTextNode("List Item #" + (i + 1));

            li.className += "list-item" + (i + 1);

            li.appendChild(textNode);
            parent.appendChild(li);
        }
    }

    function getRandomValue(min, max) {
        return (Math.random() * (max - min) + min) | 0;
    }
})();