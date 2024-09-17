"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ActivityForOfVariables_1 = require("./ActivityForOfVariables");
/**4. Iterando Sobre Arrays de Objetos
Objetivo: Crie um array de objetos pessoas, onde cada objeto representa
uma pessoa com nome, idade, e cidade. Use for of para exibir as
informações de cada pessoa no console.
 */
for (var _i = 0, People_1 = ActivityForOfVariables_1.People; _i < People_1.length; _i++) {
    var element = People_1[_i];
    console.log(element);
}
/**5. Calculando Valores em Arrays de Objetos
Objetivo: Crie um array de objetos alunos, cada um com propriedades
nome, nota1, e nota2. Use for of para calcular a média das notas de cada
aluno e exibir o nome do aluno junto com sua média */
for (var _a = 0, Students_1 = ActivityForOfVariables_1.Students; _a < Students_1.length; _a++) {
    var element = Students_1[_a];
    var avg = (element.notice1 + element.notice2 + element.notice3) / 3;
    console.log("Ol\u00E1 ".concat(element.name, " sua m\u00E9dia \u00E9: ").concat(avg.toFixed(2)));
}
/**Filtrando Arrays de Objetos
Objetivo: Crie um array de objetos funcionarios, onde cada objeto
contém informações como nome, cargo, e salario. Use for of para filtrar
e exibir apenas os funcionários cujo salário seja maior que um valor
específico.
 */
for (var _b = 0, Employees_1 = ActivityForOfVariables_1.Employees; _b < Employees_1.length; _b++) {
    var element = Employees_1[_b];
    if (element.wage > 5000) {
        console.log("Sr. (a) ".concat(element.name, " cujo (a) trabalha como ").concat(element.position, " tem sal\u00E1rio de R$ ").concat(element.wage.toFixed(2)));
    }
}
