const input = require('prompt-sync')()
const Question_2 = () => {
    console.log('2. Crie um programa que classifica a idade de uma pessoa em categorias (criança,adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de controle if-else.\n')
    let idade = parseInt(input(`Informe sua idade: `))
    let msgInformation = (category)=> console.log(`Você é um (a) ${category}`);
    if(idade<12){
        msgInformation('Criança')
    } else if(idade<18){
        msgInformation('Adolescente')
    } else if(idade<64){
        msgInformation('Adulto')
    } else if(idade >=64){
        msgInformation('Idoso')
    } else{
        console.log(`Valor informado não é uma idade valida`)
    }
}
module.exports = Question_2