alert("Bem vindo ao jogo do número secreto"); 
let numero_secreto = 29;

let chute = prompt("Digite o número entre 1 a 30");

if (chute == numero_secreto){
   alert("Número correto " + chute);
} else {
    alert("Você errou :(")
}