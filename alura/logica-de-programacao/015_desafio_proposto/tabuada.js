function tabuada(numero){
    let c = 0;
    while (c < 10){
        c++
        let tab = numero * c
        console.log(`${numero} x ${c} = ${tab}`);
    }
}

tabuada(5)
