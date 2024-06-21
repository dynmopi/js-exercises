// é possível pegar elementos do document (html), e manipular no javascript. Isso é caracteristca dele

/*
let titulo = document.querySelector('h1'); // pegando elemento h1 e atribuindo para uma variavel
titulo.innerHTML = 'Jogo do número secreto'; // innerHTML escreve "dentro" do elemento html

let paragrafo = document.querySelector('p'); // pegando elemento p e atribuindo para uma variavel
paragrafo.innerHTML = 'Digite um número entre 1 a 10'; // innerHTML escreve "dentro" do elemento html
*/

let numeroSecreto = numero_secreto(); // chama a funcao para armazenar na variavel. É preciso do return
let tentativas = 1;

//para evitar código repetido :v
function exibirTexto(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto; 
}
// essas duas funções abaixo, chama afunção exibirTexto() com os respectivos parâmetros.
// lembre-se de funções compostas na matemática ;v

mensagemNaTela();

function verificarChute(){ // é ativado através do onclick

    // não se esqueça de colocar o ".value" para especificar que queres pegar somente o valor dentro do input do html
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto){
        exibirTexto('h1', 'Correto!');
        
        //concordância do português, caso for mais de uma tentativa, será "tentativas"
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você acertou o número secreto com ${tentativas} ${palavraTentativa}`;

        exibirTexto('p', mensagemTentativas);

        //se utilizasse o querySelector, ele selecionaria os dois buttons.
        document.getElementById('reiniciar').removeAttribute('disabled'); 

    } else {
        if (chute > numeroSecreto){
            exibirTexto('p', 'O número secreto é menor');
        } else {
            exibirTexto('p', 'O número secreto é maior');
        }
        
        tentativas++;
        limpar();
    }
}

function numero_secreto(){
    // retorna até aonde foi chamado
    return parseInt(Math.random() * 10 + 1); 
}

// serve para limpar o input
function limpar(){
    chute = document.querySelector('input');
    chute.value = '';
}

function mensagemNaTela(){
    exibirTexto('h1', 'Jogo do número secreto'); 
    exibirTexto('p', 'Digite um número entre 1 a 10');
}


function reiniciarJogo(){
    numeroSecreto = numero_secreto();
    limpar();
    tentativas = 1;

    mensagemNaTela();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}
// Nome de função não pode ser nome de variável!!