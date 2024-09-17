const input = require('prompt-sync')()
const Question_8 = ()=>{
    console.log(`8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais) e escreve-los em ordem crescente.\n`)
    let number = parseFloat(input(`Informe um valor: `))
    let number2 = parseFloat(input(`Informe outro valor: `))
    while(number == number2){
        console.log(`Números informados são iguais`)
        number2 = parseFloat(input(`Informe outro valor: `))
    }
    number < number2 ? console.log(`Valores informados:\n${number}\n${number2}`): console.log(`Valores informados:\n${number2}\n${number}`)
}
module.exports = Question_8