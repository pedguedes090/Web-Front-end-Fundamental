let a = Number(prompt('moi nhap so a '));
let b = Number(prompt('moi nhap so b '));
let c = Number(prompt('moi nhap so c '));
if (a + b > c && a + c > b && b + c > a) {
    if (a == b && a == c) {
        alert('tam giac deu');
    } else if (a == b || a == c || b == c) {
        alert('tam giac can');
    } else if (a * a + b * b == c * c || a * a + c * c == b * b || b * b + c * c == a * a) {
        alert('tam giac vuong');
    } else {
        alert('tam giac thuong');
    }
} else {
    alert('khong phai tam giac');
}