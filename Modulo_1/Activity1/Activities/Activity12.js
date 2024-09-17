const input = require('prompt-sync')()
const Question_12 = ()=>{
    console.log(`12. Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a 10) utilizando um loop for.`)
    let numberInformation = parseInt(input(`Informe o número que deseja que seja informado a tabuada de 1 á 10: `))
    for(let i=1;i<=10;i++){
        console.log(`${i} x ${numberInformation} = ${i*numberInformation}`);
    }
}
module.exports = Question_12