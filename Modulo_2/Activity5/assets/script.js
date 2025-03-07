const bd = localStorage.getItem('bd') ? JSON.parse(localStorage.getItem('bd')) : [];
const form = document.querySelector('form');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {
    };
    for (const [key, value] of formData) {
        data[key] = value;
        data['id'] = bd.length + 1;
        data['edit'] = document.createElement('button');
        data['edit'].textContent = 'Editar';
    }
    bd.push(data);
    localStorage.setItem('bd', JSON.stringify(bd));
    event.target.reset();
}
);
const tarefas = document.getElementById('tarefas');
bd.forEach(function (item) {
    const li = document.createElement('li');
    const button = document.createElement('button');
    button.textContent = 'Excluir';
    li.textContent = item.name + ' ';
    tarefas.appendChild(li);
    li.appendChild(button);
}
);