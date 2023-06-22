let humano = {
nombre: 'lucia',
apellido: 'ruiz',
edad : 35,
nombreDeGatos: 'Sia,Gordi y Vodka'
}
/*
console.log(humano) ;

console.log(humano.nombre) ;
console.log(humano.nombreDeGatos) ;
*/

humano.color = 'pink' ;
console.log(humano, "modificado") ; // se modifica con lo indicado en la linea 14


// RECORREIENDO OBJETO - USANDO METODOS ESPECIFICOS

for (let llave in humano) {
    if (humano.hasOwnProperty(llave)) {
        console.log(humano[llave]);
    }
}

// USANDO OBJECT.KEY
let llaves = Object.keys(humano);
console.log("LLAVES---", llaves);
for (let i = 0; i < llaves.length; i++) {
    let llave = llaves[i];
    console.log(humano[llave]);
}

