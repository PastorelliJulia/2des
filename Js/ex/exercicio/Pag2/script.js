var carrinho =[
	{
		"funcionario":"Sancho Cedraz",
		"cargo":{
			"nome":"Analista",
			"nivel":2
		},
		"autorizado":true
	},		
	{
		"funcionario":"Ionara Pederneiras",
		"cargo":{
			"nome":"Técnico",
			"nivel":2
		},
		"autorizado":true
	},
	{
		"funcionario":"Filipe Castanho",
		"cargo":{
			"nome":"Desenvolvedor",
			"nivel":1
		},
		"autorizado":false
	},
	{
		"funcionario":"Lívia Bicalho",
		"cargo":{
			"nome":"Analista",
			"nivel":3
		},
		"autorizado":true
	},
	{
		"funcionario":"Mauro Varanda",
		"cargo":{
			"nome":"Desenvolvedor",
			"nivel":3
		},
		"autorizado":false
	},	
	{
		"funcionario":"Sandro Rosário",
		"cargo":{
			"nome":"Técnico",
			"nivel":3
		},
		"autorizado":true
	}
]

var itemCarrinho = document.querySelector(".item-carrinho");

function carregar() { 
    carrinho.forEach(item => {
        let novoItem = itemCarrinho.cloneNode(true);

        novoItem.classList.remove("modelo");

        novoItem.querySelector("#img-item").src = "https://www.nicepng.com/png/detail/136-1366211_group-of-10-guys-login-user-icon-png.png";
        novoItem.querySelector("#nome-item").innerHTML = item.funcionario;
        novoItem.querySelector("#cargo").innerHTML = item.cargo.nome;

        //if verificando cargo e nivel ((analista || desenvolvedor) && nivel >=3)
        if((item.cargo.nome == "Analista" || "Desenvolvedor") && item.cargo.nivel === 3){
            console.log("Sim")
         
          } else { 
            console.log("Não")
          }

        document.querySelector(".carrinho").appendChild(novoItem);
    });
}

function removerItem(e) {
    e.parentNode.remove();
}

