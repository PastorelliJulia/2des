//Atividade 4
function geraCpf(a, b) {
    return Math.floor(Math.random() * (b - a + 1)) + a
  }

  console.log([geraCpf(10000000000, 90000000000),
    geraCpf(10000000000, 90000000000),
    geraCpf(10000000000, 90000000000),
    geraCpf(10000000000, 90000000000),
    geraCpf(10000000000, 90000000000)])