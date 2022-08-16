let botao = document.querySelector('#botao')

botao.addEventListener('click', function () {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then((resp) => {
            return resp.json();
})

.then((data) => {
    let email = document.querySelector("#Email").value
    let username = document.querySelector("#Username").value
    let acessando = false 
        data.forEach((users) => {
            if (email == users.email && username == users.username) {
                acessando = true

                let info = {
                    "nome" : users.name,
                    "id" : users.id
                }

                window.localStorage.setItem("userData", JSON.stringify(info))            } 
        })

        if (acessando) {window.location.replace("index2.html");}
    });
})
