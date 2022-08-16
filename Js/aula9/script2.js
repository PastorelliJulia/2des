let user = window.localStorage.getItem('userData');
let infoUser = JSON.parse(user);

fetch(`https://jsonplaceholder.typicode.com/posts?userid=${infoUser.id}`)
    .then((response) => {
        return response.json();
    })
    .then((data) => {

        data.forEach((item) => {
            let name = document.createElement("p");
            name.innerHTML = infoUser.nome;

            let catchPhrase = document.createElement("p");
            catchPhrase.innerHTML = item.title;
            console.log(item.title)

            document.querySelector("body").append(name, catchPhrase);
        })

    });

