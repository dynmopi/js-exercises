// fatorial = n!
// n * (n - 1) * (n - 2) ... * 1
// só não rodou o codigo na primeira vez, porque a ide entrou em looping infinito
function fatorial(fat){
    let c = fat;
    
    while (c > 1){
        c--
        fat = fat * c;
    }
    return fat;
}
console.log(fatorial(5));

// codigo de um colega do discord
/*function fatorial(n) {
    let c = n;
    let fat = n;
    while (c > 1) {
        c--;
        fat = fat*c;
    }
    return fat;
}

console.log(fatorial(5));*/