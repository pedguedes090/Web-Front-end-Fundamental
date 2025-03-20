let textDiv = document.getElementsByClassName("container");
let btn1 = document.getElementsByClassName("btn");

btn1[0].onclick = function () {
    textDiv[0].classList.toggle("dark-mode");
}