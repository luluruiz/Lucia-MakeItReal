// arreglos y objetos

let products = [
    { id: 1, name: "Leche", price: 120  , categories: ["familiar", "comida"] },
    { id: 2, name: "Arroz", price: 80  , categories: ["familiar", "comida"] },
    { id: 3, name: "Lavadora", price: 7800  , categories: ["electrodomestico", "comida"] },

]

for (let i = 0; i < products.length; i++) {
let product = products[i];

console.log("ID: " , product.id);
console.log("NAME: " , product.name);
console.log("CATEGORIES: " , product.categories);
console.log("PRICE: " , product.price);
}