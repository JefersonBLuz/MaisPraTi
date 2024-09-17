import { People,Students,Employees } from "./variables/ForOf";
/**4. Iterando Sobre Arrays de Objetos
Objetivo: Crie um array de objetos pessoas, onde cada objeto representa
uma pessoa com nome, idade, e cidade. Use for of para exibir as
informações de cada pessoa no console. 
 */
for (const element of People) {
    console.log(element);
}

/**5. Calculando Valores em Arrays de Objetos
Objetivo: Crie um array de objetos alunos, cada um com propriedades
nome, nota1, e nota2. Use for of para calcular a média das notas de cada
aluno e exibir o nome do aluno junto com sua média */
for (const element of Students) {
    let avg:number = (element.notice1 + element.notice2 + element.notice3)/3
    console.log(`Olá ${element.name} sua média é: ${avg.toFixed(2)}`
    );
}

/**6. Filtrando Arrays de Objetos
Objetivo: Crie um array de objetos funcionarios, onde cada objeto
contém informações como nome, cargo, e salario. Use for of para filtrar
e exibir apenas os funcionários cujo salário seja maior que um valor
específico.
 */
for(const element of Employees){
    if(element.wage>5000){
        console.log(`Sr. (a) ${element.name} cujo (a) trabalha como ${element.position} tem salário de R$ ${element.wage.toFixed(2)}`);
    }
}