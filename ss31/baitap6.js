let username ='huanrose@gmail.com';
let password ='123456';
let login = document.getElementsByClassName('login');
login[0].onclick = function() {
    let usernameInput = document.getElementsByClassName('username')[0].value;
    let passwordInput = document.getElementsByClassName('password')[0].value;
    if(usernameInput === username && passwordInput === password) {
        alert('Login successfully');
    } else {
        alert('Login failed');
    }
}