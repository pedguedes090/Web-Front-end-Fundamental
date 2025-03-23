let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

window.onload = function() {
  renderTasks();
};

function addTask() {
  let input = document.getElementById('taskInput'),
      taskValue = input.value.trim();
  if (taskValue === '') {
    alert('Vui lòng nhập công việc!');
    return;
  }
  tasks.push(taskValue);
  localStorage.setItem('tasks', JSON.stringify(tasks));
  input.value = '';
  renderTasks();
}

function renderTasks() {
  let taskList = document.getElementById('taskList');
  taskList.innerHTML = '';
  tasks.forEach((task, index) => {
    let li = document.createElement('li');
    li.innerHTML = `<span>${task}</span>
                    <div>
                      <button onclick="editTask(${index})">Sửa</button>
                      <button onclick="deleteTask(${index})">Xóa</button>
                    </div>`;
    taskList.appendChild(li);
  });
}

function deleteTask(index) {
  confirm('Bạn có chắc chắn muốn xóa công việc này không?') && (
    tasks.splice(index, 1),
    localStorage.setItem('tasks', JSON.stringify(tasks)),
    renderTasks()
  );
}

function editTask(index) {
  let newValue = prompt('Chỉnh sửa công việc:', tasks[index]);
  newValue !== null && newValue.trim() !== '' && (
    tasks[index] = newValue.trim(),
    localStorage.setItem('tasks', JSON.stringify(tasks)),
    renderTasks()
  );
}