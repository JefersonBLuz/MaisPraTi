const input = require('prompt-sync')()
const Question_5 = () =>{
    console.log(`5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade) utilizando if-else.\n`);
    let peso = input(`Informe seu peso em quilograma: `)
    peso = parseFloat(peso.replace(',','.'))
    let altura = input(`Informe sua altura em metros: `)
    altura = parseFloat(altura.replace(',','.'))
    let calculation = peso/altura**2
    if (calculation < 18.5) {
        console.log(`Seu IMC é: ${calculation.toFixed(2)}.\nCategoria: Baixo peso`);
    } else if(calculation <25){
        console.log(`Seu IMC é: ${calculation.toFixed(2)}.\nCategoria: Normal`);
    } else if(calculation <30){
        console.log(`Seu IMC é: ${calculation.toFixed(2)}.\nCategoria: Sobrepeso`);
    } else if(calculation <40){
        console.log(`Seu IMC é: ${calculation.toFixed(2)}.\nCategoria: Obesidade`);
    } else if(calculation >=40){
        console.log(`Seu IMC é: ${calculation.toFixed(2)}.\nCategoria: Obesidade Grave`);
    } else{
        console.log(`Error ! Algum dos dados foi informado de forma incorreta`)
    }
    
}
module.exports = Question_5