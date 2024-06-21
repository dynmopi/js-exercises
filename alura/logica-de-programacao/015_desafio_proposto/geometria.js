function area(altura, largura){
    let area = altura * largura;
    return area;
}

function perimetro(altura, largura){
    let perimetro = altura * 2 + largura * 2;
    return perimetro;
}


console.log("A área e o perímetro é respectivamente " + area(4, 5) + " e " + perimetro(4, 5))