let a = document.getElementsByClassName('a');
let b = document.getElementsByClassName('b');
let text = document.getElementById('text');

let side = 20;
a[0].onclick = function () {
    side ++;
    text.style.fontSize = side + 'px';
}
b[0].onclick = function () {
    side --;
    text.style.fontSize = side + 'px';
}