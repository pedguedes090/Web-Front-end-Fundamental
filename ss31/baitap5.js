const employees = [
    { id: 1, name: "John", age: 18, address: "New York" },
    { id: 2, name: "Mike", age: 22, address: "Canada" },
    { id: 3, name: "Linda", age: 19, address: "California" },
    { id: 4, name: "Peter", age: 25, address: "London" },
    { id: 5, name: "Tony", age: 17, address: "New York" }
];
let tbody = document.getElementsByClassName('tbody');
let tr = '';
employees.forEach(employee => {
    tr += `<tr>
    <td>${employee.id}</td>
    <td>${employee.name}</td>
    <td>${employee.age}</td>
    <td>${employee.address}</td>
    </tr>`;
});
tbody[0].innerHTML = tr;