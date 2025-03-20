let close = document.getElementsByClassName('btn-close');
let layer = document.getElementsByClassName('layer2');
let open = document.getElementsByClassName('btn-open');
close[0].onclick = function () {
    layer[0].style.display = 'none';
}
open[0].onclick = function () {
    layer[0].style.display = 'flex';
}


