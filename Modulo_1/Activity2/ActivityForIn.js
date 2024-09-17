/**1. Acessando Propriedades de Objetos
Objetivo: Crie um objeto carro com propriedades como marca, modelo,
ano, e cor. Use for in para iterar sobre as propriedades e exibir seus
valores no console.
 */
var car = { marca: 'Ferrari', ano: 2024, cor: 'red', modelo: 'Roma' };
for (var key in car) {
    // console.log(`${key}: ${car}`)
    console.log("".concat(key, ": ").concat(car[key]));
}
var Book = {
    title: "Harry Potter and the Philosopher's Stone",
    author: 'J. K. Rowling',
    year: 1997,
    color: 'Red'
};
var validation = true;
for (var key in Book) {
    if (key === 'publisher') {
        validation = false;
        break;
    }
}
if (validation) {
    Book['publisher'] = 'Bloomsbury';
}
var products = {
    sabao: 5.00,
    arroz: 7.00,
    feijao: 8.00,
    sabonete: 3.00,
    cafe: 4.30,
    papel: 3.80,
    tesoura: 2.50
};
var productPromo = {};
for (var key in products) {
    var element = products[key];
    if (element >= 5) {
        productPromo[key] = element;
    }
}
console.log(productPromo);
// const products: Array<productVadilation>=[
//     {name: 'arroz', 'arroz': 5}
// ]
