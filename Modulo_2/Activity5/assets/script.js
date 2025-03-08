const bd = localStorage.getItem('bd') ? JSON.parse(localStorage.getItem('bd')) : [];
const form = document.querySelector('form');

function emailjs() {
    emailjs.init({
        publicKey: "YOUR_PUBLIC_KEY",
    });
}

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

document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTaskButton");
    const taskList = document.getElementById("taskList");

    // Carregar tarefas do localStorage
    const loadTasks = () => {
        taskList.innerHTML = "";
        const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        tasks.forEach((task, index) => addTaskToDOM(task, index));
    };

    // Adicionar tarefa ao DOM
    const addTaskToDOM = (task, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
            <span class="task-text">${task}</span>
            <button onclick="editTask(${index})">Editar</button>
            <button onclick="deleteTask(${index})">Excluir</button>
        `;
        taskList.appendChild(li);
    };

    // Salvar tarefas no localStorage
    const saveTasks = (tasks) => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    };

    // Adicionar nova tarefa
    addTaskButton.addEventListener("click", () => {
        const task = taskInput.value.trim();
        if (task) {
            const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
            tasks.push(task);
            saveTasks(tasks);
            loadTasks();
            taskInput.value = "";
        }
    });

    // Editar tarefa
    window.editTask = (index) => {
        const tasks = JSON.parse(localStorage.getItem("tasks"));
        const newTask = prompt("Edite a tarefa:", tasks[index]);
        if (newTask !== null) {
            tasks[index] = newTask;
            saveTasks(tasks);
            loadTasks();
        }
    };

    // Excluir tarefa
    window.deleteTask = (index) => {
        const tasks = JSON.parse(localStorage.getItem("tasks"));
        tasks.splice(index, 1);
        saveTasks(tasks);
        loadTasks();
    };

    // Carregar as tarefas ao iniciar
    loadTasks();
});
