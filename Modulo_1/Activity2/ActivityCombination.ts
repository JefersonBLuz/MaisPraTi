/**10. Criando Relatórios com Objetos e Arrays
Objetivo: Crie um array de objetos vendas, onde cada objeto tem produto,
quantidade e valor. Use forEach para calcular o valor total de vendas de
todos os produtos. */
import { Sales, Orders, CustomersProducts, Stock, Cart, Enterprise, Transactions } from "./variables/Combination"
let total: number = 0
Sales.forEach(element => {
    total += (element.value * element.amount)
    console.table(`${element.amount} x ${element.name}, preço unitário ${element.value}, valor: ${element.value * element.amount}
        Subtotal: ${total}`);
})
console.log(total);

/**11. Agrupando Elementos com forEach
Objetivo: Crie um array de objetos pedidos, onde cada pedido tem
cliente, produto, e quantidade. Use forEach para criar um objeto que
agrupa a quantidade total de produtos por cliente. */

Orders.forEach(element => {
    if (CustomersProducts[element.customer]) {
        CustomersProducts[element.customer] += element.amount
    } else {
        CustomersProducts[element.customer] = element.amount
    }
})
console.log(CustomersProducts);
/** 12. Atualizando um Array de Objetos
Objetivo: Crie um array de objetos estoque, onde cada objeto tem
produto, quantidade e minimo. Use forEach para atualizar a quantidade
dos produtos que estão abaixo do mínimo, duplicando suas quantidades.
*/
Stock.forEach(element => {
    if (element.amount > element.minimum) {
        console.log(`Produto: ${element.name} tem valor em estoque(${element.amount}) superior ao mínimo(${element.minimum})`);
    } else {
        while (element.amount < element.minimum) {
            console.log(`${element.name} estoque(${element.amount}) < ${element.minimum}`)
            console.log(`Estoque duplicado, valor atual é: ${element.amount *= 2}`)
        }
    }
})
console.log('\n')
for (const key in Stock) {
        const element = Stock[key];
        console.log(`${element.name}: Min:${element.minimum} | Qtd: ${element.amount}`)
    
};
/**13. Implementando um Carrinho de Compras
Objetivo: Crie um objeto carrinho com uma propriedade itens, que é um
array de objetos. Cada objeto dentro de itens deve representar um
produto no carrinho, com nome, quantidade, e precoUnitario. Use forEach
para calcular o valor total do carrinho. */
let totalCart:number =0
let subTotalCart: number[] =[]
Cart.forEach(element=>{
    subTotalCart.push((element.amount * element.unitPrice))
    totalCart+= (element.amount * element.unitPrice)
})
console.table(Cart);
console.log(subTotalCart)
console.log(`Total da compra: R$${totalCart.toFixed(2)}`);

/**14. Manipulando Objetos Complexos
Objetivo: Crie um objeto empresa com uma propriedade departamentos,
que é um array de objetos. Cada departamento tem um nome e uma lista
de funcionarios. Use for in e for of para iterar sobre os departamentos
e seus funcionários, exibindo o nome de cada funcionário junto com o
departamento ao qual pertence*/

for (const key in Enterprise) {
        const information = Enterprise[key];
        console.log(`Departamento: ${information.name}\nFuncionários:`);
        for (const element of information.employees) {
            console.log(`${information.name}: ${element.name}`);
        }
}
/**15. Filtrando e Somando Valores
Objetivo: Crie um array de objetos transacoes, onde cada transação tem
tipo (entrada ou saída) e valor. Use forEach para calcular o saldo final,
somando as entradas e subtraindo as saídas. */
let Totaly: number = 0
Transactions.forEach(element=>{
    if(element.transactionType){
        console.log(`Adicionado: R$${element.value}. Saldo: R$${Totaly+=element.value}`)
    }else{
        console.log(`Retirado: R$${element.value}. Saldo: R$${Totaly-=element.value}`)
    }
})