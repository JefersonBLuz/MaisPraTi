"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customers = exports.Films = exports.Products = void 0;
var Products = [
    { name: 'Arroz', value: 7.50 },
    { name: 'Feijão', value: 5.39 },
    { name: 'Sabão em pó', value: 10 },
    { name: 'Alface', value: 2 },
    { name: 'Tomage Kg.', value: 4 },
    { name: 'Picanha Kg.', value: 50 }
];
exports.Products = Products;
var Films = [
    { title: 'O Senhor dos Anéis 1', director: 'Peter Jackson', releaseyear: 2001 },
    { title: 'O Senhor dos Anéis 2', director: 'Peter Jackson', releaseyear: 2002 },
    { title: 'O Senhor dos Anéis 3', director: 'Peter Jackson', releaseyear: 2003 }
];
exports.Films = Films;
var ForOf_1 = require("./ForOf");
var Customers = ForOf_1.People;
exports.Customers = Customers;
