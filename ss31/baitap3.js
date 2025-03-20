let text =document.getElementsByClassName("container");
let box1 = document.getElementsByClassName("box1");
let box2 = document.getElementsByClassName("box2");
let box3 = document.getElementsByClassName("box3");

box1 [0].onclick = function () {
    text[0].classList.toggle("green");
}
box2 [0].onclick = function () {
    text[0].classList.toggle("red");
}
box3 [0].onclick = function () {
    text[0].classList.toggle("pink");
}