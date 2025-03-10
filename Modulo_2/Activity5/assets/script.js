const bd = localStorage.getItem('bd') ? JSON.parse(localStorage.getItem('bd')) : localStorage.setItem('bd', JSON.stringify([]));
const displayTarefas = localStorage.getItem('display') ? JSON.parse(localStorage.getItem('display')) : localStorage.setItem('display', JSON.stringify([{exibir: true}]));

const tarefas = document.getElementById('tarefas')
const form = document.querySelector('form');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const nome = formData.get('name');
    bd.push({ nome: nome, feito: false });
    localStorage.setItem('bd', JSON.stringify(bd));
    form.reset();
    loadBd();
});

const loadBd = () => {
    tarefas.innerHTML = '';
    bd.forEach((Element, index) => {
        const li = `<div class="border border-white ${Element.feito ? 'bg-green-200' : 'bg-yellow-200'} p-2 grid grid-cols-10 items-center ${index === (bd.length - 1) ? 'rounded-b-2xl' : false}">
            <div class="col-span-7 h-auto ${Element.feito ? 'line-through' : false}">${Element.nome}</div>
            
            <div class="flex justify-center mx-2 cursor-pointer rounded-lg ${Element.feito ? 'hover:text-yellow-700 text-yellow-600':'hover:text-green-800 text-green-700'}" onclick="concluirTarefa(${index})"> ${
                Element.feito ? 
                '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><mask id="lineMdCloseCircleFilled0"><g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><path fill="#fff" fill-opacity="0" stroke-dasharray="64" stroke-dashoffset="64" d="M12 3c4.97 0 9 4.03 9 9c0 4.97 -4.03 9 -9 9c-4.97 0 -9 -4.03 -9 -9c0 -4.97 4.03 -9 9 -9Z"><animate fill="freeze" attributeName="fill-opacity" begin="0.27s" dur="0.225s" values="0;1"/><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.27s" values="64;0"/></path><path stroke="#000" stroke-dasharray="8" stroke-dashoffset="8" d="M12 12l4 4M12 12l-4 -4M12 12l-4 4M12 12l4 -4"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.495s" dur="0.09s" values="8;0"/></path></g></mask><rect width="24" height="24" fill="currentColor" mask="url(#lineMdCloseCircleFilled0)"/></svg>'
                :'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><mask id="lineMdCircleFilledToConfirmCircleFilledTransition0"><g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><path fill="#fff" d="M3 12c0 -4.97 4.03 -9 9 -9c4.97 0 9 4.03 9 9c0 4.97 -4.03 9 -9 9c-4.97 0 -9 -4.03 -9 -9Z"/><path stroke="#000" stroke-dasharray="14" stroke-dashoffset="14" d="M8 12l3 3l5 -5"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.28s" values="14;0"/></path></g></mask><rect width="24" height="24" fill="currentColor" mask="url(#lineMdCircleFilledToConfirmCircleFilledTransition0)"/></svg>'
            } </div>
            <div class="flex justify-center text-blue-600 mx-2 text-center cursor-pointer rounded-lg hover:text-blue-950" onclick="editarTarefa(${index})">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path stroke-dasharray="20" stroke-dashoffset="20" d="M3 21h18"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="20;0"/></path><path stroke-dasharray="48" stroke-dashoffset="48" d="M7 17v-4l10 -10l4 4l-10 10h-4"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.2s" dur="0.6s" values="48;0"/></path><path stroke-dasharray="8" stroke-dashoffset="8" d="M14 6l4 4"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.8s" dur="0.2s" values="8;0"/></path></g><path fill="currentColor" fill-opacity="0" d="M14 6l4 4L21 7L17 3Z"><animate fill="freeze" attributeName="fill-opacity" begin="1.1s" dur="0.5s" values="0;1"/></path></svg>
            </div>
            <div class="flex justify-center text-red-600 mx-2 text-center cursor-pointer rounded-lg hover:text-red-950" onclick="excluirTarefa(${index})"> 
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M7 21q-.825 0-1.412-.587T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.587 1.413T17 21zM17 6H7v13h10zM9 17h2V8H9zm4 0h2V8h-2zM7 6v13z"/></svg>
            </div>
        </div>`
        tarefas.innerHTML += li
    }
    );
}
const mostarTarefa = () => {
    const exibir = JSON.parse(localStorage.getItem('display'))
    const botao = document.getElementById('botaoMostrar')
    if (exibir[0].exibir){
        exibir[0].exibir = false
        localStorage.setItem('display', JSON.stringify(exibir))
        tarefas.classList = 'hidden'
        botao.innerText = 'Mostrar Tarefas'
    } else {
        exibir[0].exibir = true
        localStorage.setItem('display', JSON.stringify(exibir))
        tarefas.classList = 'text-black w-98/100 self-center rounded-b-lg'
        botao.innerText = 'Ocultar Tarefas'
    }
}

// Salvar tarefas no localStorage
const salvarTarefa = (tasks) => {
    localStorage.setItem("bd", JSON.stringify(tasks));
    loadBd()
};

const editarTarefa = async (index) => {
    const newTask = prompt("Edite a tarefa:", bd[index].nome);
    if (newTask !== null) {
        bd[index].nome = newTask;
        await salvarTarefa(bd);
    }
};
const concluirTarefa = async (index) => {
    await bd
    console.log(bd);
    console.log(bd[index]);
    if (bd[index].feito) {
        bd[index].feito = false
    } else {
        bd[index].feito = true;
    }

    salvarTarefa(bd)
};
const excluirTarefa = (index) => {
    bd.splice(index, 1);
    salvarTarefa(bd);
};

loadBd()
