/*identificadores usando o let
antes do ecmascript de 2015, não havia o let
o let foi implantado no global scope que antes não existia
*/
{
    let n = 4;
    console.log(n);
}

/*não é possível usar o identificador n fora desse bloco de cima*/

/*o var não tem block scope*/

{
    var m = 5;
    console.log(m);
}

console.log(m)// diferente do let, o var pode ser usado fora do bloco de cima

//de novo: não existe re-declaração para o let!

//existe um caso específico de redeclaração para o let

let x = 21

{
    let x = 10
    console.log(x) 
}

console.log(x)


