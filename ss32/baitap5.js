let input = document.getElementById('input');
let btn1 = document.getElementsByClassName('btn1');
let ul = document.getElementById('myUl');
let listHTML = "";
let btndelete=false;
btn1[0].onclick = function() {
    if (input.value == "") {
        alert("Vui lòng nhập tên môn học");
        return;
    }
    ul.innerHTML += `<li>${input.value} <button onclick="deleteItem(this)" id="deleteid", class="delete">X</button><hr></li> `;
    input.value = "";  
};
function deleteItem(value) {
    value.parentElement.remove();
}
let style = document.createElement('style');
style.innerHTML = `
    .delete {
        float: right;
        background-color: red;
        color: white;
        border: none;
        padding: 5px 10px;
        cursor: pointer;
    }
    .delete:hover {
        background-color: darkred;
    }
`;
document.head.appendChild(style);
