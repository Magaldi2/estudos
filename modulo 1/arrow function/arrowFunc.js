console.log("--> ARROW FUNCTIONS:")

const multe = function (n){
    n*=n
    return n
}
const mult = (n) => (n *= n)

console.log(mult(10))
console.log(multe(10))

//Explicação:
/*As duas funções sao identicas, porem elas sao escritas de formas diferentes.
As arrows functions servem para escrevermos funcoes mais enxutas onde a pouca
complexida nelas. Assim se tivermos apenas um parametro nao precisamos colocar o return.*/