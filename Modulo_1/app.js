const input = require('prompt-sync')()
let key //Chave para validação no loop.

console.log(`Bem vindo ao formulário da atividade de JavaScrip!`)

let msgIntroduction = () => console.log('\nPara sair da atividade informe "Exit"\nInforme de 1 á 15 para verificar as atividades')
do {
    msgIntroduction()
    let question = String(input(`Informe: `)).trim()
    key = question
    console.clear()
    switch (question) {
        case '1': require('./Activities/Activity01')()
            break;
        case '2': require('./Activities/Activity02')()
            break;
        case '3': require('./Activities/Activity03')()
            break;
        case '4': require('./Activities/Activity04')()
            break;
        case '5': require('./Activities/Activity05')()
            break;
        case '6': require('./Activities/Activity06')()
            break;
        case '7': require('./Activities/Activity07')()
            break;
        case '8': require('./Activities/Activity08')()
            break;
        case '9': require('./Activities/Activity09')()
            break;
        case '10': require('./Activities/Activity10')()
            break;
        case 'Exit': console.log("Finalizado");
            break;
        default: console.log('Opção informada inexistente!');
            break;
    }
} while (key !== "Exit");
