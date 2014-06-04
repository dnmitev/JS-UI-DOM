function familyTree(familyAsJSON) {
    var stage = setStage(),
        layer = setLayer(),
        people = parsePeople(familyAsJSON),
        root = findRoot(people),
        nodeWidth = 130,
        nodeHeight = 30,
        fontSize = 12,
        strokeColor = getRandomColor(),
        textPadding = 12,
        textColor = "black",
        widthSpace = nodeWidth + 10,
        heightSpace = nodeHeight + 30,
        drawer = new Drawer(layer, nodeWidth, nodeHeight, fontSize, strokeColor, textPadding, textColor);

    function setStage() {
        return new Kinetic.Stage({
            container: "container",
            width: 1920,
            height: 1080
        });
    }

    function setLayer() {
        return new Kinetic.Layer({
            draggable: true
        });
    }

    function Person(name) {
        this.name = name;
        this.children = [];

        this.hasOffspring = function () {
            if (this.children.length > 0) {
                return true;
            }
        };

        this.hasParents = function () {
            if (this.father || this.mother) {
                return true;
            }
        }

        this.isFemale = false;
    }

    function addNewPerson(name, people) {
        for (var i = 0; i < people.length; i += 1) {
            if (people[i].name === name) {
                return people[i];
            }
        }

        var newPerson = new Person(name);
        people.push(newPerson);

        return newPerson;
    }

    function parsePeople(familyAsJSON) {
        var people = [];

        for (var i = 0; i < familyAsJSON.length; i += 1) {
            var obj = familyAsJSON[i],
                mother = addNewPerson(obj.mother, people),
                father = addNewPerson(obj.father, people);

            mother.spouse = father;
            mother.isFemale = true;
            father.spouse = mother;

            for (var j = 0; j < obj.children.length; j += 1) {
                var child = addNewPerson(obj.children[j], people);

                mother.children.push(child);
                father.children.push(child);

                child.father = father;
                child.mother = mother;
            }
        }

        return people;
    }

    function findRoot(people) {
        for (var i = 0; i < people.length; i += 1) {
            if (!people[i].hasParents() && !people[i].spouse.hasParents()) {
                return people[i];
            }
        }
    }

    function getMinXCoordinate(people) {
        var current = Number.MAX_VALUE;

        for (var i = 0; i < people.length; i += 1) {
            if (people[i].x && people[i].x < current) {
                current = people[i].x;
            }
        }

        return current;
    }

    drawTree(root, drawer, 10, 10, true);
    layer.offsetX(getMinXCoordinate(people));
    stage.add(layer);

    function drawTree(currentNode, drawer, startX, startY) {
        var x = startX,
            y = startY;

        if (currentNode.spouse) {
            drawer.drawPerson(currentNode.spouse, x, y);
            x += widthSpace;
        }

        drawer.drawPerson(currentNode, x, y);

        x = startX;

        for (var i = 0; i < currentNode.children.length; i += 1) {
            if (i && currentNode.children[i - 1].spouse) {
                x += widthSpace;
            }

            drawTree(currentNode.children[i], drawer, x - widthSpace, y + heightSpace);
            x += widthSpace;
        }
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
}