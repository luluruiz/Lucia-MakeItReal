// sintaxis corchetes y se separan con coma
// siempre en los arreglos la primera posicion es 0
// para tomar el ultimo valor del arreglo es ... array[array.length -1]
// para saber logitud array.length 



let array = [ 2, " piña 🍍 ", " peperoni 🥓", " queso", true ," 🍕 "]

const pos = array[2];
console.log ("ARRAY**", array);

console.log( "EL INGREDIENTE QUE QUIERO ES : " + pos);


// recorrer arreglos con FOR

for( let i = 0; i< array.length; i++ ) {
    console.log( "Lista de ingredientes " + i + array[i] );
}


// cambiar o reemplazar valores

array[4] = "champi 🍄";
console.log( "Array modificado: " + array  );
