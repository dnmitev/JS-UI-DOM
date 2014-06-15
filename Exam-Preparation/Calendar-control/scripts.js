function createCalendar(selector, events) {
    'use strict';

    var container = document.querySelector(selector),
        docFrag = document.createDocumentFragment(),
        box = document.createElement('div'),
        boxTitle = document.createElement('strong'),
        boxContent = document.createElement('div'),
        boxes = [],
        selectedBox = null;

    box.className += ' day-item';
    boxTitle.className += ' day-title';
    boxContent.className += ' day-content';

    box.appendChild(boxTitle);
    box.appendChild(boxContent);

    box.style.width = 100 / 7.5 + '%';
    box.style.height = '100px';
    box.style.border = '1px solid black';
    box.style.float = 'left';

    boxTitle.style.backgroundColor = 'darkgray';
    boxTitle.style.borderBottom = '1px solid black';
    boxTitle.style.textAlign = 'center';
    boxTitle.style.display = 'inline-block';
    boxTitle.style.width = '100%';

    for (var i = 1; i <= 30; i += 1) {
        var date = new Date(2014, 5, i);

        boxTitle.innerHTML = date.toDateString();

        boxes.push(box.cloneNode(true));
    }

    for (var i = 0, len = events.length; i < len; i += 1) {
        var event = events[i],
            content = boxes[event.date - 1].querySelector('.day-content');

        content.innerText = events[i].hour + ' ' + events[i].title;
    }

    for (var i = 0, len = boxes.length; i < len; i += 1) {
        docFrag.appendChild(boxes[i]);
        boxes[i].addEventListener('click', onBoxClick, true);
        boxes[i].addEventListener('mouseover', onBoxMouseover);
        boxes[i].addEventListener('mouseout', onBoxMouseout);
    }

    function onBoxClick(ev) {
        if (selectedBox) {
            selectedBox.style.backgroundColor = '';
        }

        if (selectedBox === this) {
            selectedBox = null;
        } else {
            this.style.backgroundColor = 'lightgray';
            selectedBox = this;
        }

        console.log(this);
    }

    function onBoxMouseover(ev) {
        if (selectedBox !== this) {
            this.style.backgroundColor = 'gray';
        }
    }

    function onBoxMouseout(ev) {
        if (selectedBox !== this) {
            this.style.backgroundColor = '';
        }
    }

    container.appendChild(docFrag);
}