let showhide = document.getElementsByClassName('showhide');
let password = document.getElementById('password');

showhide[0].addEventListener('click', function () {
    if (password.type === 'password') {
        password.type = 'text';
    } else {
        password.type = 'password';
    }
})