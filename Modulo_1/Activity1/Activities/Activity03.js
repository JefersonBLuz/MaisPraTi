const input = require('prompt-sync')()
const Question_3 = () =>{
    console.log(`3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.\n`);
    let valueNotice = parseFloat(input(`Informe sua nota: `))
    if (valueNotice <= 10 && valueNotice >= 7) {
        console.log(`Aprovado`)
    } else if(valueNotice >=5 && valueNotice <7){
        console.log(`Recuperação`)        
    } else if(valueNotice >= 0 && valueNotice <=5 ){
        console.log(`Reprovado`)
    } else {
        console.log(`Valor informado não é uma nota válida!`)
    }
}

module.exports = Question_3