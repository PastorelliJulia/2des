//Atividade 3
function geraTelefones(a, b) {
    return Math.floor(Math.random() * (b - a + 1)) + a
  }

  console.log([geraTelefones(1000000000, 9000000000),
    geraTelefones(1000000000, 9000000000),
    geraTelefones(1000000000, 9000000000),
    geraTelefones(1000000000, 9000000000),
    geraTelefones(1000000000, 9000000000)])