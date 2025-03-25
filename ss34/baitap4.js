let todoList = JSON.parse(localStorage.getItem(`todoList`)) || [];

let task = document.getElementById(`task`);



function render() {
    let taskList = document.getElementById(`taskList`);
    taskList.innerHTML = ``;
    todoList.forEach((item, index) => {
        taskList.innerHTML += `<li>${item}<button onclick="del(${index})" class="del">Xoá</button></li>
        
        `;


    });
}
function addTask(a) {
    a.preventDefault();

    let taskValue = task.value;
    if (taskValue === ``) {
        alert(`Please enter a task`);
        return;
    }
    todoList.push(taskValue);
    localStorage.setItem(`todoList`, JSON.stringify(todoList));
    render();
    resetForm();
}
function del(index) {
    todoList.splice(index, 1);
    localStorage.setItem(`todoList`, JSON.stringify(todoList));
    render();
}
function resetForm() {
    task.value = ``;
}
render();