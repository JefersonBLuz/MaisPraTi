const input = require('prompt-sync')()
const Question_9 = ()=>{
    console.log(`9. Implemente um programa que exibe uma contagem regressiva de 10 até 1 no console utilizando um loop for.\n`)
    for(let i = 10; i>0;i--){
        console.log(i);
    }
}
module.exports = Question_9