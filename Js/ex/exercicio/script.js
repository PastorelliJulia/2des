
const submit = document.getElementById("submit");

submit.addEventListener("click", validate);

function validate(e) {
  e.preventDefault();

  const cargoField = document.getElementById("cargo");
  let valid = true;

  if(cargoField.value = "Analista" || "Tecnico"){
    window.location.href = "Pag2/index.html";
 
  } else if (cargoField.value = "Desenvolvedor"){
    console.log("Não")
  }
}