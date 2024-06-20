// é possível pegar elementos do document (html), e manipular no javascript. Isso é caracteristca dele


let titulo = document.querySelector('h1'); // pegando elemento h1 e atribuindo para uma variavel
titulo.innerHTML = 'Jogo do número secreto'; // innerHTML escreve "dentro" do elemento html

let paragrafo = document.querySelector('p'); // pegando elemento p e atribuindo para uma variavel
paragrafo.innerHTML = 'Digite um número entre 1 a 10'; // innerHTML escreve "dentro" do elemento html

function verificarChute(){
    console.log("clicou")
}