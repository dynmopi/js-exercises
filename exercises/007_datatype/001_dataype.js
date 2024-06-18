/*
existem 8 tipos de dado
string
number
bigint
boolean
undefined
null
symbol
object -> há uma gama de objetos que existe no js
*/

//numbers
let height = 30;
let length = 40;

//strings
let fruit = 'laranja';
let lastname = "maranhao";

//booleans (true and false)
let x = 5;
let y = 5;
let z = 10;

console.log(x == y); //true
console.log(x == z); //false

//object, nesse object há 2 propriedades, name e height
const person = {name:"danrley", height: 1.74};
console.log(person.name);

//array (object), o primeiro item é o [0]
const integers = [-3, -2, -1, 0, 1, 2, 3];
console.log(integers);
console.log(integers[0]); // mostra o -3

//date (object)
const date = new Date();
console.log(date)

//typeof, é um operador do javascript que consegue identificar o tipo de algum parâmetro
let parametro = typeof "ele vai falar desse tipo";
console.log(parametro) // string

//undefined é uma variavel sem valor
let nao_tem_valor;
console.log(nao_tem_valor)

//nao confunda o vazio com o indefinido!

