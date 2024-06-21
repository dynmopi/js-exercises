const linguagensDeProgramacao = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];
console.log(linguagensDeProgramacao)

linguagensDeProgramacao.push ('Java', 'Ruby', 'Golang');

console.log(linguagensDeProgramacao)

let c = 0

while (c < 2){
    console.log(linguagensDeProgramacao[c]);
    c++
}

console.log(linguagensDeProgramacao[linguagensDeProgramacao.length - 1]); // mostra o último elemento do array
