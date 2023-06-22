let nameteacher = "Daniela";

// A ,MAYUSCULAS
console.log( nameteacher.toUpperCase());

let saludo = "HOLA MUNDO";

// A MINUSCULAS
console.log(saludo.toLowerCase());

// inicia con
console.log(saludo.startsWith("HOLA"));

//FINALIZA
console.log(saludo.endsWith("HOLA"));

// METODOS ANINDADOS
console.log(saludo.toLocaleLowerCase().startsWith("hola"));

//SUBSTR BTW NO SE DEBERIA USAR
console.log(saludo.substr(0,4));
console.log(saludo.substr(5,3)); //CUENTA 3 CARACTERES A IMPRIMIR

// SUBSTRING

console.log(saludo.substring(0,4));
console.log(saludo.substring(5,8)); // CUENTA HASTA DONDE SE QUIERE ANTES DE LA 8

//Reemplazar
saludo = saludo.replace("MUNDO", "GRUPOB3")
console.log(saludo);

//Incluye
console.log(saludo.includes("MUNDO"));