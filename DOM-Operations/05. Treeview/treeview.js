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

            ul.className = "collapsed has-child"; // display property of the class is set in the CSS file

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

    var ulElements = document.getElementsByTagName("ul");

    for (var i = 0, len = ulElements.length; i < len; i += 1) {
        ulElements[i].addEventListener("click", showSubMenu);
    }

    function showSubMenu(ev) {
        if (ev.stopPropagation) {
            ev.stopPropagation();
        }

        if (ev.preventDefault) {
            ev.preventDefault();
        }

        var toChange = ev.target.firstElementChild;

        if (toChange != null) {
            if (toChange.style.display === "block") {
                toChange.style.display = "none";
            } else {
                toChange.style.display = "block";
            }
        }
    }
})();