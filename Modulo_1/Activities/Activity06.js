const input = require('prompt-sync')()
const Question_6 = () =>{
    console.log(` 6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo: Isósceles, escaleno ou eqüilátero. Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C) Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C) Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)\n`);
    let lados = []
    for(let i=1; i<=3;i++){
        let value = input(`Informe o valor do ${i}º Lado do triangulo: `)
        lados.push(value.replace(',','.'))
    }
    if(!(lados[0] < (lados[1] + lados[2])) && !(lados[1] < (lados[0] + lados[2])) && !(slados[2] < (lados[0] + lados[1]))){
       console.log(`\nValores informados não é de valido de um poligno triangular`);
    } else {
        if(lados[0]===lados[1] || lados[0]===lados[2] || lados[2]===lados[1]){
            console.log(`\nValores informado é de um Triângulo isósceles`);
        }else if(lados[0]!==lados[1]!==lados[2]){
            console.log(`\nValores informado é de um Triângulo escaleno`);
        }else if(lados[0]===lados[1]===lados[2]){
            console.log(`\nValores informado é de um Triângulo eqüilátero`);
        }
    }
    
}
module.exports = Question_6