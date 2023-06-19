// Challenge 1 👩🏻‍💻 

function sumar (num1, num2) {
    return num1 + num2;
}
let sumaNumeros = sumar(40,60);
console.log("la suma de ambos numeros es :  " + sumaNumeros);

// Challenge 2 👩🏻‍💻 ciclos

for (let i = 1; i <= 50; i++) {
    console.log( i + " Estoy aprendiendo "  );
}

// Challenge 3 👩🏻‍💻 corrigiendo posiciones

let arr = ["Primero", "Segundo", "Tercero", "Cuarto", "Soy el último elemento"];

arr.splice( 4,0,"Quinto","Sexto");

for (let i = 0; i < arr.length; i++) {
    console.log( "Resultado : " + arr[i]);
}
