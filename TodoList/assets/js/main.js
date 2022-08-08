// rgb(107, 27, 161)
const inputTask = document.querySelector('.input-new-task');
const btnAddTodo = document.querySelector('.btn-add-todo');
const tasks = document.querySelector('.tasks');


document.addEventListener('click', (event) => {
    if (!inputTask.value) return;
    const element = event.target;
    if (element.classList.contains('btn-add-task')) {
        createTask(inputTask.value);
        clearInput();
    }
});

document.addEventListener('keypress', (event) => {
    if (event.keyCode === 13) {
        if (!inputTask.value) return;
        createTask(inputTask.value);
    }
});

document.addEventListener('click', (event) => {
    const element = event.target;
    if (element.classList.contains('clear-task')) {
        // element.parentElement.remove();
        removeElement(element)
    }
});

function clearInput() {
    inputTask.focus();
    inputTask.value = ''; // zerar o campo
}

function createElement(el) {
    const element = document.createElement(el);
    return element;
}

function removeElement(el) {
    el.parentElement.remove();
    saveTasks();

}




function saveTasks() {
    const taskList = tasks.querySelectorAll('li');
    const todoList = [];

    for (const tasks of taskList) {
        let taskText = tasks.innerText;
        taskText = taskText.replace('Clear', '').trim();
        todoList.push(taskText);
    }
    const tasksJSON = JSON.stringify(todoList);
    localStorage.setItem('tasks', tasksJSON);
}

function addSaveTasks() {
    const tasks = localStorage.getItem('tasks');
    const taskList = JSON.parse(tasks);

    for (const task of taskList) {
        createTask(task);
    }
}
addSaveTasks();

function createBtnRemove(li) {
    li.innerText += ' ';
    const btnRemove = document.createElement('button');
    btnRemove.innerText = 'Clear';
    btnRemove.setAttribute('class', 'clear-task');
    btnRemove.setAttribute('title', 'clear this task');
    li.appendChild(btnRemove);
}

function createTask(inputText) {
    const iten = createElement('li');
    iten.innerText = inputText;
    tasks.appendChild(iten);
    createBtnRemove(iten);
    clearInput();
    saveTasks();
}