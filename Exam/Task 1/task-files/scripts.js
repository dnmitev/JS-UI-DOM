function createImagesPreviewer(selector, items) {
    'use strict';

    var container = document.querySelector(selector),
        preview = document.createElement('div'),
        menu = document.createElement('div'),
        list = document.createElement('ul'),
        itemElement = document.createElement('li'),
        allItems = [],
        image = document.createElement('img'),
        title = document.createElement('h3'),
        filterElement = document.createElement('input'),
        filterLabel = document.createElement('label'),
        previewTitle = document.createElement('h1'),
        previewImage = document.createElement('img');

    filterElement.setAttribute('type', 'text');
    filterElement.setAttribute('id', 'filter-input');

    filterElement.addEventListener('input', onFilterChange);

    filterLabel.setAttribute('for', 'filter-input');
    filterLabel.innerText = 'Filter';

    list.appendChild(filterLabel);
    list.appendChild(filterElement);

    // altering style
    container.style.height = '650px';
    container.style.padding = '0';

    list.style.listStyleType = 'none';
    list.style.height = '100%';
    list.style.overflowY = 'auto';
    list.style.margin = '0';

    image.style.width = '80%';
    image.style.borderRadius = '10px';
    image.style.margin = '0';

    preview.style.cssFloat = 'left';
    preview.style.width = '74%';
    preview.style.height = '600px';
    preview.style.textAlign = 'center';
    preview.style.margin = '0';

    previewImage.style.width = '70%';
    previewImage.style.borderRadius = '25px';

    menu.style.cssFloat = 'left';
    menu.style.width = '24%';
    menu.style.height = '650px';
    menu.style.textAlign = 'center';
    menu.style.margin = '0';

    title.style.margin = '0';

    filterElement.style.width = '80%';

    filterLabel.style.display = 'block';
    filterLabel.style.margin = '0';
    filterLabel.style.fontSize = '1.5em';

    for (var i = 0, len = items.length; i < len; i += 1) {
        // set image attributes
        image.setAttribute('src', items[i].url);
        image.setAttribute('alt', items[i].title);

        // get the item title
        title.innerText = items[i].title;

        // append the image and the title to the li element
        itemElement.appendChild(title);
        itemElement.appendChild(image);

        //list.appendChild(itemElement.cloneNode(true));
        allItems.push(itemElement.cloneNode(true));
    }

    for (var i = 0, len = allItems.length; i < len; i += 1) {
        allItems[i].addEventListener('click', onThumbnailClick);
        allItems[i].addEventListener('mouseover', onThumbnailMouseOver);
        allItems[i].addEventListener('mouseout', onThumbnailMouseOut);
        list.appendChild(allItems[i]);
    }

    var firstLiElement = list.querySelectorAll('li')[0];

    firstLiElement.className = 'current';

    previewTitle.innerText = items[0].title;
    previewImage.setAttribute('src', items[0].url);

    preview.appendChild(previewTitle);
    preview.appendChild(previewImage);

    function onThumbnailClick() {
        var target = this,
            currentElement = list.querySelector('.current');

        currentElement.classList.remove('current');

        if (target.classList.contains('current')) {
            target.classList.remove('current');
        } else {
            target.className = 'current';

            previewTitle.innerText = this.firstChild.innerText;
            previewImage.setAttribute('src', this.lastChild.src);
        }
    }

    function onThumbnailMouseOver() {
        this.style.backgroundColor = 'lightgray';
    }

    function onThumbnailMouseOut() {
        this.style.backgroundColor = '';
    }

    function onFilterChange() {
        var input = this.value.toLowerCase().trim();

        for (var i = 0, len = allItems.length; i < len; i += 1) {
            var title = allItems[i].querySelector('h3').innerText;

            title = title.toLowerCase();

            if (title.indexOf(input) == -1) {
                allItems[i].style.display = 'none';
            } else {
                allItems[i].style.display = 'block';
            }
        }
    }

    menu.appendChild(list);

    container.appendChild(preview);
    container.appendChild(menu);
}