let a = Number(prompt('moi nhap so a '));
let b = Number(prompt('moi nhap so b '));
let caoperation = prompt('moi nhap phep tính  +, -, *, / ');
switch (caoperation) {
    case '+':
        console.log(a + b);
        alert('kết quả của phép tính trên: a + b = ' + (a + b));
        break;
    case '-':
        console.log(a - b);
        alert('kết quả của phép tính trên: a - b = ' + (a - b));
        break;
    case '*':
        console.log(a * b);
        alert('kết quả của phép tính trên: a * b = ' + (a * b));    
        break;
    case '/':
        console.log(a / b);
        alert('kết quả của phép tính trên: a / b = ' + (a / b));
        break;
    default:
        console.log('phep toan khong hop le');
        break;
}