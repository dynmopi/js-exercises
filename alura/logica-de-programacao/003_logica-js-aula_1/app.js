alert('Boas vindas ao jogo do número secreto'); // comentários em js
let numeroSecreto = 5;
console.log(numeroSecreto);

let chute = prompt('Escolha um número entre 1 e 10');
console.log(`O chute foi de ${chute} e o numero secreto foi de ${numeroSecreto}`)

if (chute == numeroSecreto) {
    alert('Isso ai! Você descobriu o número secreto (5)');
} else{
    alert("Você errou :(");
    console.log(`O valor do número secreto é ${numeroSecreto}`);

}
