const input = require('prompt-sync')()
const Question_4 = () =>{
    console.log(`4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções. Utilize switch-case para implementar a lógica de cada opção selecionada.\n`);
    let array = ['Morango','Gato','Azul']
    console.log(`Menu\n1 - Fruta\n2 - Animal\n3 - Cor`);
    let valueInformation = parseInt(input(`Informe: `))
    switch (valueInformation) {
        case 1:
            console.log(array[0]);
            break;
        case 2:
            console.log(array[1]);
            break;
        case 3:
            console.log(array[2]);
            break;
        default:
            console.log('Opção inválida!');
            break;
    }
    
    
}
module.exports = Question_4