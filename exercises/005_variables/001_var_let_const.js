/*declaração de variáveis é atraves de
    var: para navegadores antigos
    let: declaração comum
    const: para expressar uma constante.
*/
/*use o ponto e vírgula para não perder o costume*/

var n = 4;
let m = 2;
const pi = 3.14;

console.log(n);
console.log(m);
console.log(pi);

/*use o const para array e objects, pois o tipo não pode sofrer alteração*/

/*o sinal de igual no java script significa que é uma declaração. Caso queira usar o sinal de igual, é o == 
    por isso a confusão entre matemáticos e programadores

    x = x + 1 -> X recebe X + 1, ou seja, o novo valor de X será ele mais um
*/

let person = "danrley", height = 1.74, weight = "60Kg"; /*é possível declarar várias variaveis em uma linha só
sendo separadas por vírgulas
*/

console.log(person);
console.log(height);
console.log(weight);

/*se a variavel não receber valor nenhum, a mesma será considerada como undefined (indefinido)*/

let color;
console.log(color); //retorna undefined

/*re-declarações: é um caso específico de variaveis*/

var number = 2;
var number;

console.log(number); /*perceba que foi imprimido o numero 2*/

/*let numberlet = 2;
let numberlet; não dá para re-declarar usando o let ou const*/ 