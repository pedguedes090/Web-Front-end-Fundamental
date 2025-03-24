let dish = [
    { name: 'Rau sạch', category: 'Đồ ăn' },
    { name: 'Thịt lợn', category: 'Đồ ăn' },
    { name: 'Pepsi không calo', category: 'Nước' },
    { name: 'Cocacola', category: 'Nước' },
    { name: 'Cờ lê', category: 'Dụng cụ' },
    { name: 'Tuy vít', category: 'Dụng cụ' },
];
let categories = [];
let list = document.getElementsByClassName('list');
let myul = document.getElementsByClassName('myul');
myul[0].innerHTML = '';
for (let i = 0; i < dish.length; i++) {
    let li = document.createElement('li');
    li.textContent = `tên đồ ăn ${dish[i].name} danh mục ${dish[i].category}`;
    myul[0].appendChild(li);
}
for (let i = 0; i < dish.length; i++) {
    if (!categories.includes(dish[i].category)) {
        categories.push(dish[i].category);
    }
}
for (let i = 0; i < categories.length; i++) {
    let option = document.createElement('option');
    option.textContent = categories[i];
    list[0].appendChild(option);
}
function render() {
    myul[0].innerHTML = '';
    for (let i = 0; i < dish.length; i++) {
        if (list[0].value == dish[i].category) {
            let li = document.createElement('li');
            li.textContent = `tên đồ ăn ${dish[i].name} danh mục ${dish[i].category}`;
            myul[0].appendChild(li);
        }
    }
}
list[0].onchange = function () {
    render();
}
