// pi = 3,14
// area de um círculo, pi * r²
// comprimento da circunferencia 2 * pi * r


const pi = 3.14;
let r = 4;


function area(r){
    let area = pi * r**2;
    return area;
}

function comprimento(r){
    let comprimento = 2 * pi * r;
    return comprimento;
}

console.log(area(r));
console.log(comprimento(r))

