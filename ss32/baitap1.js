function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}

var color = random_rgba();

let btn = document.getElementsByClassName('container');

btn[0].onclick = function() {
    btn[0].style.backgroundColor = color;
    color = random_rgba();
}