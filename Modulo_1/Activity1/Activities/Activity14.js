const input = require('prompt-sync')()
const Question_14 = ()=>{
    console.log(`14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário utilizando um loop for ou while.`);
    let numberInformation = input(`Informe um numero para informar o seu valor fatorial: `)
    console.log(numberInformation,'!');
    for (let index = numberInformation-1; index > 0; index--){
      numberInformation *= index
    }
    console.log(`Resultado=${numberInformation}`);
}
module.exports = Question_14