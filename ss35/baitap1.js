let currentPage = 1;
        let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        let page = JSON.parse(localStorage.getItem('tasks')) || [];

        window.onload = function () {
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
            let pageNumber = document.getElementsByClassName('pageNumber')[0];
            pageNumber.innerHTML = '';
            let totalPage = Math.ceil(tasks.length / 5);

            for (let i = 1; i <= totalPage; i++) {
                let span = document.createElement('span');
                span.textContent = i;
                span.style.border = "solid 1px #000";
                span.style.margin = "5px";
                if (i === currentPage) {
                    span.style.backgroundColor = "#000";
                    span.style.color = "#fff";
                }
                span.onclick = function () {
                    currentPage = i;
                    renderTasks();
                };
                pageNumber.appendChild(span);
            }

            let taskList = document.getElementById('taskList');
            taskList.innerHTML = '';
            let start = (currentPage - 1) * 5;
            let end = currentPage * 5;
            let paginatedTasks = tasks.slice(start, end);

            paginatedTasks.forEach((task, index) => {
                let li = document.createElement('li');
                li.innerHTML = `
            <span>${task}</span>
            <div>
                <button onclick="editTask(${start + index})">Sửa</button>
                <button onclick="deleteTask(${start + index})">Xóa</button>
            </div>
        `;
                taskList.appendChild(li);
            });

            document.querySelector('.previous').onclick = function () {
                if (currentPage > 1) {
                    currentPage--;
                    renderTasks();
                }
            };

            document.querySelector('.next').onclick = function () {
                if (currentPage < totalPage) {
                    currentPage++;
                    renderTasks();
                }
            };
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
