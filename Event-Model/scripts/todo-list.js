function onAddTaskBtnClick() {
    var section = document.getElementById("todo-list"),
        docFragment = document.createDocumentFragment(),
        fieldset = document.createElement("fieldset"),
        legend = document.createElement("legend"),
        title = document.getElementById("title-input").value,
        content = document.getElementById("task-notes").value,
        legendTextNode = document.createTextNode(title),
        contentTextNode = document.createTextNode(content),
        deleteTask = document.createElement("button"),
        deleteTextNode = document.createTextNode("X");

    legend.appendChild(legendTextNode);
    deleteTask.appendChild(deleteTextNode);
    fieldset.appendChild(deleteTask);
    fieldset.appendChild(legend);
    fieldset.appendChild(contentTextNode);

    deleteTask.className += " delete-btn";

    deleteTask.style.backgroundColor = "red";
    deleteTask.style.color = "white";
    deleteTask.style.text = "right";
    deleteTask.style.position = "relative";
    deleteTask.style.top = "-25px";
    deleteTask.style.right = "-10px";

    deleteTask.addEventListener("click", function () {
        var parent = deleteTask.parentNode;

        parent.parentNode.removeChild(parent);
    });

    docFragment.appendChild(fieldset);

    section.appendChild(docFragment);
}

function onHideBtnClick() {
    var todoList = document.getElementById("todo-list"),
        btn = document.getElementById("show-hide-btn");

    if (todoList.style.display === "none") {
        todoList.style.display = "";
        btn.innerText = "Hide";
    } else {
        todoList.style.display = "none";
        btn.innerText = "Show";
    }
}