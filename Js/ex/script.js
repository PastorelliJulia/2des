var carrinho = [
    {
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl8jVaXUJ1BE5Us0ivRr3DcXlbY551fjqKWQ&usqp=CAU",
        "nome": "Tênis Nike Air Jordan",
        "qntd": 2
    },
    {
        "img": "https://static.netshoes.com.br/produtos/chinelo-adidas-adilette-aqua-masculino/26/NQQ-0114-026/NQQ-0114-026_zoom1.jpg?ts=1583228509&ims=544x",
        "nome": "Chinelo Ardidas",
        "qntd": 1
    },
    {
        "img": "https://static.netshoes.com.br/produtos/short-puma-active-woven-5-masculino/06/2I3-2571-006/2I3-2571-006_zoom1.jpg?ts=1627300667&ims=544x",
        "nome": "Bermuda Pulma",
        "qntd": 3
    },
    {
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUVWScsK5Fqv0cjy3R5fvqWP_9PRIg-hIBN_XG5yTD1yW4NN2l1mbDNVpM7m-H6gR5bG0&usqp=CAU",
        "nome": "Camiseta Lacoste",
        "qntd": 5
    }
];

var itemCarrinho = document.querySelector(".item-carrinho");

function carregar() {
    carrinho.forEach(item => {
    let novoItem = itemCarrinho.cloneNode(true);

    novoItem.classList.remove("modelo");

        novoItem.querySelector("#img-item").src= item.img;
        novoItem.querySelector("#nome-item").innerHTML= item.nome;
        novoItem.querySelector("#qntd-item").value = item.qntd;

        document.querySelector(".carrinho").appendChild(novoItem);
    })
}

function removerItem(e) {
    e.parentNode.remove();
}