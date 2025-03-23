let textInput = document.getElementById('textInput');
let charCount = document.getElementById('charCount');
let check = document.getElementsByClassName('check');

check[0].onclick = function () {
    charCount.textContent = textInput.value.length;
};