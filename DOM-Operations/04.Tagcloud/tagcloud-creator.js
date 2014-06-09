(function () {
    "use strict";

    var fragment = document.createDocumentFragment(),
        tags = ["cms", "javascript", "js",
                    "ASP.NET MVC", ".net", ".net", "css",
                    "wordpress", "xaml", "js", "http", "web",
                    "asp.net", "asp.net MVC", "ASP.NET MVC",
                    "wp", "javascript", "js", "cms", "html",
                    "javascript", "http", "http", "CMS",
                    "javascript", "http", "http", "CMS",
                    "javascript", "http", "http", "CMS"],
        differentTags = [],
        tagFrequency = [],
        count;

    for (count = 0; count < tags.length; count += 1) {
        for (var position = 0; position < differentTags.length; position++) {
            if (tags[count].toLowerCase() === differentTags[position]) {
                tagFrequency[position] += 1;
                break;
            }
        }

        if (position === differentTags.length) {
            differentTags.push(tags[count].toLowerCase());
            tagFrequency.push(1);
        }
    }

    var minFontSize = 10,
        maxFontSize = 72,
        fontDifference = maxFontSize - minFontSize,
        maxFrequency = Number.MIN_VALUE;

    for (count = 0; count < differentTags.length; count += 1) {
        if (tagFrequency[count] > maxFrequency) {
            maxFrequency = tagFrequency[count];
        }
    }

    for (count = 0; count < differentTags.length; count += 1) {
        var span = document.createElement("span"),
            textNode = document.createTextNode(differentTags[count]),
            spanSize = Math.floor(minFontSize + (tagFrequency[count] / maxFrequency) * fontDifference);

        span.appendChild(textNode);

        span.style.fontSize = spanSize + "px";
        span.style.color = getRandomColor();
        span.style.position = "absolute";
        span.style.top = getRandomValue(150, screen.height/2) +"px";
        span.style.left = getRandomValue(100, screen.width-200)+ "px";

        fragment.appendChild(span);
    }

    function getRandomValue(min, max) {
        return (Math.random() * (max - min) + min) | 0;
    }

    function getRandomColor() {
        var red = getRandomValue(0, 255),
            green = getRandomValue(0, 255),
            blue = getRandomValue(0, 255);

        return "rgb(" + red + "," + green + "," + blue + ")";
    }

    document.body.appendChild(fragment);
})();