let input =document.getElementById('input');
let btn =document.getElementsByClassName('btn');
let ol =document.getElementById('myOl');
let listHTML="";
btn[0].onclick = function() {
    if(input.value==""){
        alert("vui long nhap ten mon hoc")
        return;
    }
    listHTML += `<li>${input.value}</li>`;
    ol.innerHTML = listHTML;
    input.value ="";
}