const input = require('prompt-sync')()
const Question_10 = ()=>{
    console.log(`10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.\n`)
    let valueInforation = parseInt(input(`Informe um número inteiro: `))
    while(valueInforation % valueInforation != 0){
        valueInforation = parseInt(input(`Valor informado incorreto, informe um inteiro: `))
    }
    for(let i = 10; i>0;i--){
        console.log(Math.round(valueInforation));
    }
}
module.exports = Question_10