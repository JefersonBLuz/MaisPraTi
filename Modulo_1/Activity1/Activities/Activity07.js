const input = require('prompt-sync')()
const Question_7 = () => {
    console.log(`7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs compradas, calcule e escreva o valor total da compra.\n`)
    let amount = parseInt(input(`Informe quantas maçãs desejam comprar:`))
    if (amount < 12 && amount > 0) {
        console.log(`\nInfelizmente você não participou da promoção, valor unitário da maçã R$ 0,30.\nCompra:\n ${amount} x Maçã (s).\nTotal R$ ${(amount * 0.30).toFixed(2)}`)
    } else if (amount >= 12) {
        console.log(`\nParabéns você participou da promoaçõe, valor unitário da maça R$ 0,25.\nCompra:\n ${amount} x Maças.\nTotal R$ ${(amount * 0.25).toFixed(2)}`)
    } else {
        console.log(`\nError! Valor informado inconpatível`)
    }
}
module.exports = Question_7