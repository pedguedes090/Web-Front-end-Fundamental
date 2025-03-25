let task = JSON.parse(localStorage.getItem('tasks')) || [];
        let tbody = document.querySelector('tbody');
        let content = document.getElementById('content');
        let date = document.getElementById('date');
        let status = document.getElementById('status');
        let userName = document.getElementById('userName');
        let submit = document.querySelector('.submit');
        let index = -1; 
        function render() {
            tbody.innerHTML = '';
            task.forEach((item, i) => {
                let tr = document.createElement('tr');
                tr.innerHTML = `
                <td>${i + 1}</td>
                <td>${item.content}</td>
                <td>${item.date}</td>
                <td>${item.status}</td>
                <td>${item.userName}</td>
                <td>
                    <button class="edit" data-index="${i}">Edit</button>
                    <button class="delete" data-index="${i}">Delete</button>
                </td>
                `;
                tbody.appendChild(tr);
            });
            attachEventListeners();
        }
        render();
        submit.onclick = () => {
            if (index === -1) {
                task.push({
                    content: content.value,
                    date: date.value,
                    status: status.value,
                    userName: userName.value
                });
            } else {
                task[index] = {
                    content: content.value,
                    date: date.value,
                    status: status.value,
                    userName: userName.value
                };
                index = -1; 
            }
            localStorage.setItem('tasks', JSON.stringify(task));
            content.value = '';
            date.value = '';
            status.value = 'pending';
            userName.value = '';
            render();
        }
        function attachEventListeners() {
            let delButtons = document.getElementsByClassName('delete');
            for (let btn of delButtons) {
                btn.onclick = function () {
                    index = this.getAttribute('data-index'); 
                    task.splice(index, 1);
                    localStorage.setItem('tasks', JSON.stringify(task));
                    render();
                };
            }        
            let editButtons = document.getElementsByClassName('edit');
            for (let btn of editButtons) {
                btn.onclick = function () {
                    index = this.getAttribute('data-index'); 
                    let item = task[index];
                    content.value = item.content;
                    date.value = item.date;
                    status.value = item.status;
                    userName.value = item.userName;                    
                };
            }
        }        
        function render() {
            tbody.innerHTML = '';
            task.forEach((item, i) => {
                let tr = document.createElement('tr');
                tr.innerHTML = `
                <td>${i + 1}</td>
                <td>${item.content}</td>
                <td>${item.date}</td>
                <td>${item.status}</td>
                <td>${item.userName}</td>
                <td>
                    <button class="edit" data-index="${i}">Edit</button>
                    <button class="delete" data-index="${i}">Delete</button>
                </td>
                `;
                tbody.appendChild(tr);
            });
            attachEventListeners();
        }