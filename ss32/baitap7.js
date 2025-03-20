let img = document.getElementsByClassName('img');
img[0].onclick = function () {
    if (img[0].style.transform === 'scale(2)') {
        img[0].style.transform = 'scale(1)';
        img[0].style.cursor = 'zoom-in';
    } else {
        img[0].style.transform = 'scale(2)';
        img[0].style.cursor = 'zoom-out';
    }
};
document.addEventListener('click', function (event) {
    if (!img[0].contains(event.target)) {
        img[0].style.transform = 'scale(1)';
        img[0].style.cursor = 'zoom-in';
    }
});