let regexPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/;
let regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let email = document.getElementById('email');
let password = document.getElementById('password');
let comfirmPassword = document.getElementById('confirmPassword');
let register = document.getElementById('register');
let flag = 0;

function validate() {
    if (email.value == '') {
        alert('Email không được để trống');
        flag = 1;
        return false;
    }
    if (password.value == '') {
        alert('Password không được để trống');
        flag = 1;
        return false;
    }
    if (comfirmPassword.value == '') {
        alert('Comfirm Password không được để trống');
        flag = 1;
        return false;
    }
    if (password.value !== comfirmPassword.value) {
        alert('Password không trùng khớp');
        flag = 1;
        return false;
    }
    if (!regexPass.test(password.value)) {
        alert('Password không đúng định dạng');
        flag = 1;
        return false;
    }
    if (!regexEmail.test(email.value)) {
        alert('Email không đúng định dạng');
        flag = 1;
        return false;
    }

    let users = JSON.parse(localStorage.getItem('users')) || [];
    if (users.some(user => user.email === email.value)) {
        alert('Email đã tồn tại');
        flag = 1;
        return false;
    }
    return true;
}

register.addEventListener('click', function () {
    validate();
    if (flag == 1) {
        return;
    }

    let users = JSON.parse(localStorage.getItem('users')) || [];
    users.push({ email: email.value, password: password.value });
    localStorage.setItem('users', JSON.stringify(users));

    alert('Đăng ký thành công');
});