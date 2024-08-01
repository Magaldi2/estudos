console.log("--> VALOR x REFERENCIA:");

// Recebe por valor
function mult(n) {
  n *= n;
  return n;
}

//Por valor ele pode mudar o conteudo da memoria
let numVal = 10;
console.log(mult(numVal));
console.log(numVal);

// Recebe por referência nao muda o conteudo na memoria
function multObj(obj) {
  obj.value *= obj.value;
  return obj;
}

const numObj = { value: 10 };
console.log(multObj(numObj));
console.log(numObj);

console.log("--> EXPLICAÇÃO:\n-VALOR: Quando passamos uma VARIAVEL NORMAL por meio de uma função o retorno da função eh passada só o VALOR")
console.log("\nREFERENCIA: Quando passamos a variavel do TIPO OBJETO por uma função o retorno dela eh passado por meio de REFERENCIA")
