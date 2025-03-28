let employees = JSON.parse(localStorage.getItem('employees')) || [];
let name = document.getElementById('name');
let position = document.getElementById('position');
let btn = document.getElementsByClassName('btn')[0];
let bodyTable = document.getElementsByClassName('body-table')[0];
let stt;
if (employees.length > 0) {
    stt = employees[employees.length - 1].id + 1;
} else {
    stt = 1;
}
let previous = document.getElementsByClassName('previous')[0];
let next = document.getElementsByClassName('next')[0];
let number = document.getElementsByClassName('number')[0];
let currentPage = 1;
let perPage = 3;
let totalPage = Math.ceil(employees.length / perPage);
let start = 0;
let end = perPage;
let render = () => {
    bodyTable.innerHTML = '';
    for (let i = start; i < end && i < employees.length; i++) {
        let tr = document.createElement('tr');
        tr.innerHTML = `
                    <td>${employees[i].id}</td>
                    <td>${employees[i].name}</td>
                    <td>${employees[i].position}</td>
                `;
        bodyTable.appendChild(tr);
    }
    number.innerHTML = '';
    for (let i = 1; i <= totalPage; i++) {
        let div = document.createElement('div');
        div.innerHTML = `<div class="number-page" style="margin: 5px; border: #000 1px solid; padding: 5px;" >${i}</div>`;
        div.onclick = () => {
            currentPage = i;
            start = (currentPage - 1) * perPage;
            end = currentPage * perPage;
            render();
        }
        number.appendChild(div);
    }
    let numberPages = document.getElementsByClassName('number-page');
    for (let i = 0; i < numberPages.length; i++) {
        if (i + 1 === currentPage) {
            numberPages[i].style.backgroundColor = 'blue';
            numberPages[i].style.color = 'white';
        } else {
            numberPages[i].style.backgroundColor = '';
        }
    }
}
render();
btn.onclick = () => {
    let employee = {
        id: stt,
        name: name.value,
        position: position.value
    }
    employees.push(employee);
    localStorage.setItem('employees', JSON.stringify(employees));
    stt++;
    totalPage = Math.ceil(employees.length / perPage);
    name.value='';
    position.value='';
    render();
}
previous.onclick = () => {
    if (currentPage > 1) {
        currentPage--;
        start = (currentPage - 1) * perPage;
        end = currentPage * perPage;
        render();
    }
}
next.onclick = () => {
    if (currentPage < totalPage) {
        currentPage++;
        start = (currentPage - 1) * perPage;
        end = currentPage * perPage;
        render();
    }
}