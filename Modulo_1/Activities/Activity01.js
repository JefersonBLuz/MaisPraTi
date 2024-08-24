/** 1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar utilizando uma estrutura de controle if. */

const input = require('prompt-sync')()
const Question_1 = ()=>{
    console.log(`1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar utilizando uma estrutura de controle if.\n`);
    
    let number = String(input(`Informe um número: `))
    let msg = (number, validation) => {
        console.log(`O número: ${number} é um númer ${validation}`)
    }
    number % 2 === 1 ? msg(number, `Ímpar`) : number % 2 === 0 ? msg(number, `Par`) : console.log(`Valor informado não é número!`);
}
module.exports = Question_1