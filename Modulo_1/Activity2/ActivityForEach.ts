import { Products,Films,Customers } from "./variables/ForEach";
/**7. Modificando Objetos em um Array
Objetivo: Crie um array de objetos produtos, onde cada objeto tem nome,
preco, e desconto. Use forEach para aplicar um desconto de 10% em todos
os produtos e exibir o novo preço. */
Products.forEach(element => { element.value*=0.9
    console.log(`${element.name}: R$ ${element.value.toFixed(2)}`)
});

/**8. Criando Novos Arrays a Partir de Objetos
Objetivo: Crie um array de objetos filmes, onde cada filme tem titulo,
diretor, e anoLancamento. Use forEach para criar um novo array
contendo apenas os títulos dos filmes.
 */
Films.forEach(element=>{
    console.log(element.title);
})

/*9. Contabilizando Elementos com uma Condição
Objetivo: Crie um array de objetos clientes, cada um com propriedades
nome, idade, e cidade. Use forEach para contar quantos clientes têm mais
de 30 anos.*/

let count: number =0
Customers.forEach(element =>{
    if (element.age>30) {
        count++
    }
})
console.log(`Possui ${count} clientes com mais de 30 anos.`)
