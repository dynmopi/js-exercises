// é possível pegar elementos do document (html), e manipular no javascript. Isso é caracteristca dele

/*
let titulo = document.querySelector('h1'); // pegando elemento h1 e atribuindo para uma variavel
titulo.innerHTML = 'Jogo do número secreto'; // innerHTML escreve "dentro" do elemento html

let paragrafo = document.querySelector('p'); // pegando elemento p e atribuindo para uma variavel
paragrafo.innerHTML = 'Digite um número entre 1 a 10'; // innerHTML escreve "dentro" do elemento html
*/

let numeroSecreto = numero_secreto(); // chama a funcao para armazenar na variavel, é preciso do return

function exibirTexto(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto; 
}
// essas duas funções abaixo, chama afunção exibirTexto() com os respectivos parâmetros.
exibirTexto('h1', 'Jogo do número secreto'); // tag, texto
exibirTexto('p', 'Digite um número entre 1 a 10'); // tag, texto
// lembre-se de funções compostas na matemática

function verificarChute(){
    // não se esqueça de colocar o ".value" para especificar que queres pegar somente o valor dentro do input do html
    let chute = document.querySelector('input').value;
    console.log(chute == numeroSecreto);
}

function numero_secreto(){
    return parseInt(Math.random() * 10 + 1); // retorna até aonde foi chamado
}

// Nome de função não pode ser nome de variável!!