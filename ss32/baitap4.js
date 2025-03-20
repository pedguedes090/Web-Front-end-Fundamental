let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let input = document.getElementById('input');
let text = document.getElementById('text');
let btn = document.getElementsByClassName('btn');

btn[0].onclick = function () {
    if(regex.test(input.value)){
        text.style.color = "green";
        text.textContent = "Email hop le";
    }else{
        text.style.color = "red";
        text.textContent = "Email khong hop le";
    }
}