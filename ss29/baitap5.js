const users = [];
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.(com|vn)$/;
    return emailRegex.test(email);
}
function validatePassword(password) {
    const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[a-z]).{6,}$/;
    return passwordRegex.test(password);
}
function registerUser(name, email, password) {
    if (!validateEmail(email)) {
        console.log("vui long nhap co chua '@' va ket thuc bang '.com' or '.vn'.");
        return;
    }
    if (!validatePassword(password)) {
        console.log("vui long nhap mat khau tren 6 ki tu trong do chua it nhat mot ki tu dac biet vaf it nhat mot chu hoa");
        return;
    }
    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
        console.log("email da ton tai");
        return;
    }
    const newUser = { name, email, password };
    users.push(newUser);
    console.log("dang ki thanh cong");
}

function loginUser(email, password) {
    const user = users.find(user => user.email === email && user.password === password);
    if (user) {
        console.log("dang nhap thanh cong");
        console.log("User Info:", user);
    } else {
        console.log("dang nhap that bai vui long kiem tra lai email hoac mat khau");
    }
}
let choice = 0;
do{
    choice = +prompt("1. dang ki\n2. dang nhap\n3. dang xuat\n4. thoat\nnhap lua chon cua ban");
    switch(choice){
        case 1:
            registerUser(prompt("nhap name"), prompt("nhap  email"), prompt("nhap password"));
            break;
        case 2:
            loginUser(prompt("nhap email"), prompt("nhap password"));
            break;
        case 3:
            console.log("dang xuat thanh cong");
            break;
        case 4:
            console.log("thoat");
            break;
        default:
            console.log("Invalid choice");
            break;
    }
}while(choice!=4)
