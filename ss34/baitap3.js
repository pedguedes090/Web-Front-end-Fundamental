let email = document.getElementById('email');
let password = document.getElementById('password');
let login = document.getElementById('btn');

function validateLogin() {
    if (email.value === '') {
        alert('Email không được để trống');
        return false;
    }
    if (password.value === '') {
        alert('Password không được để trống');
        return false;
    }

    let users = JSON.parse(localStorage.getItem('users')) || [];
    let user = users.find(user => user.email === email.value && user.password === password.value);

    if (!user) {
        alert('Email hoặc Password không đúng');
        return false;
    }

    return true;
}

login.addEventListener('click', function () {
    if (validateLogin()) {
        alert('Đăng nhập thành công');         
    }
});
