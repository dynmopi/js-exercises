

//desafio da alura

let numeroDeVendas = 50;
let saldoDisponivel = 1000;
//
alert("Boas vindas ao site"); // apresentação do site

let nome = prompt("Digite o seu nome");
let idade = prompt("Digite a sua idade");

if (nome == 0 || idade == 0){ // condicional para verificar se caso o user não tenha preenchido.
    let mensagemDeErro = "Erro! preencha todos os campos.";
    alert(mensagemDeErro);
}else{
    if(idade >= 18){ // condicional para verificar a idade do user
        alert(`${nome}, você pode tirar a habilitação.`);
    }else{
        alert(`${nome}, você é menor de idade, não podes tirar a habilitação.`);
    }
}

