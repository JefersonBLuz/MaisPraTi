const input = require('prompt-sync')()
const Question_11 = ()=>{
    console.log(`11. Escreva um programa que solicita ao usuário 5 números e calcula a soma total utilizando um loop for.`)
    let userNotes = []
    for(i=1;i<=5;i++){
        userNotes.push(parseFloat(input(`Informe ${i} número: `)))
    }
    console.log(`A soma de todos os números é:`)
    for(i=0;i<userNotes.length;i++){
        console.log(userNotes[i])
    }
    console.log(`Total: ${userNotes.reduce((index,sum)=>{
        sum+= index
        return sum
    })}`)
}
module.exports = Question_11