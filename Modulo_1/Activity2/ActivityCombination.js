"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**10. Criando Relatórios com Objetos e Arrays
Objetivo: Crie um array de objetos vendas, onde cada objeto tem produto,
quantidade e valor. Use forEach para calcular o valor total de vendas de
todos os produtos. */
var Combination_1 = require("./variables/Combination");
var total = 0;
Combination_1.Sales.forEach(function (element) {
    total += (element.value * element.amount);
    console.table("".concat(element.amount, " x ").concat(element.name, ", pre\u00E7o unit\u00E1rio ").concat(element.value, ", valor: ").concat(element.value * element.amount, "\n        Subtotal: ").concat(total));
});
console.log(total);
/**11. Agrupando Elementos com forEach
Objetivo: Crie um array de objetos pedidos, onde cada pedido tem
cliente, produto, e quantidade. Use forEach para criar um objeto que
agrupa a quantidade total de produtos por cliente. */
Combination_1.Orders.forEach(function (element) {
    if (Combination_1.CustomersProducts[element.customer]) {
        Combination_1.CustomersProducts[element.customer] += element.amount;
    }
    else {
        Combination_1.CustomersProducts[element.customer] = element.amount;
    }
});
console.log(Combination_1.CustomersProducts);
/** 12. Atualizando um Array de Objetos
Objetivo: Crie um array de objetos estoque, onde cada objeto tem
produto, quantidade e minimo. Use forEach para atualizar a quantidade
dos produtos que estão abaixo do mínimo, duplicando suas quantidades.
*/
Combination_1.Stock.forEach(function (element) {
    if (element.amount > element.minimum) {
        console.log("Produto: ".concat(element.name, " tem valor em estoque(").concat(element.amount, ") superior ao m\u00EDnimo(").concat(element.minimum, ")"));
    }
    else {
        while (element.amount < element.minimum) {
            console.log("".concat(element.name, " estoque(").concat(element.amount, ") < ").concat(element.minimum));
            console.log("Estoque duplicado, valor atual \u00E9: ".concat(element.amount *= 2));
        }
    }
});
console.log('\n');
for (var key in Combination_1.Stock) {
    var element = Combination_1.Stock[key];
    console.log("".concat(element.name, ": Min:").concat(element.minimum, " | Qtd: ").concat(element.amount));
}
;
/**13. Implementando um Carrinho de Compras
Objetivo: Crie um objeto carrinho com uma propriedade itens, que é um
array de objetos. Cada objeto dentro de itens deve representar um
produto no carrinho, com nome, quantidade, e precoUnitario. Use forEach
para calcular o valor total do carrinho. */
var totalCart = 0;
var subTotalCart = [];
Combination_1.Cart.forEach(function (element) {
    subTotalCart.push((element.amount * element.unitPrice));
    totalCart += (element.amount * element.unitPrice);
});
console.table(Combination_1.Cart);
console.log(subTotalCart);
console.log("Total da compra: R$".concat(totalCart.toFixed(2)));
/**14. Manipulando Objetos Complexos
Objetivo: Crie um objeto empresa com uma propriedade departamentos,
que é um array de objetos. Cada departamento tem um nome e uma lista
de funcionarios. Use for in e for of para iterar sobre os departamentos
e seus funcionários, exibindo o nome de cada funcionário junto com o
departamento ao qual pertence*/
for (var key in Combination_1.Enterprise) {
    var information = Combination_1.Enterprise[key];
    console.log("Departamento: ".concat(information.name, "\nFuncion\u00E1rios:"));
    for (var _i = 0, _a = information.employees; _i < _a.length; _i++) {
        var element = _a[_i];
        console.log("".concat(information.name, ": ").concat(element.name));
    }
}
/**15. Filtrando e Somando Valores
Objetivo: Crie um array de objetos transacoes, onde cada transação tem
tipo (entrada ou saída) e valor. Use forEach para calcular o saldo final,
somando as entradas e subtraindo as saídas. */
var Totaly = 0;
Combination_1.Transactions.forEach(function (element) {
    if (element.transactionType) {
        console.log("Adicionado: R$".concat(element.value, ". Saldo: R$").concat(Totaly += element.value));
    }
    else {
        console.log("Retirado: R$".concat(element.value, ". Saldo: R$").concat(Totaly -= element.value));
    }
});
