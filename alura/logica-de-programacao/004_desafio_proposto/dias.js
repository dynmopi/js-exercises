/*Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".*/

let dia = "segunda" // aqui adentra o prompt do html.

//coloquei todas as possibilidades de caracteres
if (dia == "Sábado" || dia == "sábado" || dia =="sabado" || dia == "Domingo" || dia == "domingo"){
    console.log("Bom fim de semana!")
} else{
    console.log("Boa semana");
}