// formula  IMC = peso / (altura ˆ 2)   

function imc ( peso,altura ) {
    return peso / (altura ** 2 );
}

let imc_clase = imc (75, 1.66) ;
console.log ( "Tu indice de masa corporal es : " + imc_clase);
