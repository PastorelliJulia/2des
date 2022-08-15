fetch("https://jsonplaceholder.typicode.com/todos")
.then((response) => {
    return response.json();
})

.then((data) => {
    data.forEach((cliente) => {
    let id = document.createElement("h1");
    id.innerHTML = cliente.userId;
    let title = document.createElement("h1");
    title.innerHTML = cliente.title;
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    checkbox.checked = cliente.completed;
    document.querySelector("body").append(id, title, checkbox);
    })
});

