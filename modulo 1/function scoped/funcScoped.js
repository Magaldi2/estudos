// console.log(mult(10)) // não é possível executar devido ao Hoisting

const mult = function (n) {
  n *= n
  return n
}

/*No caso de funções atribuídas a variáveis (como const mult = function (...))
, você precisa garantir que a função seja chamada somente após sua declaração devido ao HOISTING*/
console.log(mult(10))