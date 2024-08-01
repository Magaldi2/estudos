console.log("\n--> FUCTIONS:\n");

//Aqui declaramos o metodo function seguido do nome e seus parametros
function sayHello(name, lastName) {
  console.log(
    `Olá ${name} ${lastName}. Bem-vindo(a) aos estudos de JavaScript!`
  );
}
//Chamamos a funcao com os dois parametros declarados na funcao
console.log("SAÍDAS:");
sayHello("Lucas", "Magaldi");
sayHello("Paulo", "Silva");
