let btn =document.getElementsByClassName('btn');
let text =document.getElementById('text');
let a =0;
btn[0].onclick = function() {
    text.textContent = ++a;
}
