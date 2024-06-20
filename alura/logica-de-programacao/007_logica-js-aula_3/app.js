alert('Boas vindas ao jogo do número secreto');
//indica a aleatoriedade do numero secreto
//parseInt = é para arredondar para um numero inteiro
let numeroSecreto = parseInt(Math.random() * 100 + 1);

console.log(numeroSecreto)
let chute;
let tentativas = 1;

// enquanto chute não for igual ao n.s.
while (chute != numeroSecreto) {
    chute = prompt('Escolha um número entre 1 e 100');
    // se chute for igual ao número secreto
    if (chute == numeroSecreto) {
       break; // ele para a estrutura de repetição por completo
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`)
        } else {
            alert(`O número secreto é maior que ${chute}`)
        }
        // tentativas = tentativas + 1
        tentativas++
    }
}
// operador ternario, se tentativas for maior que 1, entao recebe 'tentativas' se nao 'tentativa'

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'

alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);
