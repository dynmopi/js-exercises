let h1 = document.querySelector('h1');
h1.innerHTML = 'Hora do desafio';

function back(){
    // cuidado com as palavras reservadas, no primeiro momento, o nome function console não deu certo
    console.log('O botão foi clicado'); 
}

function alerta(){
    alert('Eu amo JS');
}

function prompt_button(){
    let cidade = prompt('Digite um nome da cidade do Brasil');
    alert(`Estive em ${cidade} e lembrei de você`);
}

function soma(){
    alert("Digte dois valores respectivos para se obter a soma entre eles");
    let n1 = Number(prompt("Digite o primeiro valor: "));
    let n2 = Number(prompt("Digite o segundo valor: "));

    let soma = n1 + n2;
    alert(`A soma de ${n1} e ${n2} é de ${soma}`);
}