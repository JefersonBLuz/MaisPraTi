const input = require('prompt-sync')()
const Question_13 = ()=>{
    console.log(`13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer a média aritmética desses números.`);
    let numberInformation = []
    console.log(`Informe número, utilize 0 para parar o loop`);
    do {
        let temp = input(`Informe o ${numberInformation.length+1} número: `)
        temp.replace(',','.')
        numberInformation.push(parseFloat(temp))
    } while (numberInformation[numberInformation.length-1]);
    console.log(`Média aritimética: ${((numberInformation.reduce((index,sum)=> sum+= index))/numberInformation.length).toFixed(2)}`)
}
module.exports = Question_13