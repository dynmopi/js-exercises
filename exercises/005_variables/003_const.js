/*
use sempre o const se você sabe que a variável não pode mudar!
dicas para o uso do const
- array
- objects
- regexp
- function
*/
const pi = 3.14;

console.log(pi)

/*você pode criar um array com o valor constante*/
const cars = ["Honda", "BMW"];

console.log(cars);

//você pode alterar um ELEMENTO da matriz constante
cars[0] = "Chevrolet"; // a posicao 0 é a primeira posicao no mundo da programacao
console.log(cars)

//da para adicionar um elemento também
cars.push("Jaguar");
console.log(cars);

//não tem como alterar a array caso você utilize o const.

var caracteres = ["a", "b"];
console.log(caracteres);

var caracteres = ["1", "2"];
console.log(caracteres);
//por isso a recomendação em não utilizar o var para array

//como que o array é também um objeto, tudo que se aplica sobre o const nos objects
//se aplica também.



