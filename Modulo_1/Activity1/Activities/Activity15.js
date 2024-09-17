const input = require('prompt-sync')()
const Question_15 = ()=>{
    console.log(`15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de Fibonacci utilizando um loop for.`);
    let numbers = Array()
    numbers.push(1)
    numbers.push(1)
    for(let i=0;i<8;i++){
        numbers.push(numbers[i]+numbers[i+1])
    }
    numbers.forEach((index)=>console.log(index))
    
}
module.exports = Question_15