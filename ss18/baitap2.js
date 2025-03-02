let math = prompt('moi nhap so diem toan ');
let english = prompt('moi nhap so diem tieng anh ');
let literature = prompt('moi nhap so diem van ');
let average = (Number(math) + Number(english) + Number(literature)) / 3;
if (average >= 8) {
    alert('Hoc sinh gioi');
} else if (average >= 6.5) {
    alert('Hoc sinh kha');
} else if (average >= 5) {
    alert('Hoc sinh trung binh');
} else {
    alert('Hoc sinh yeu');
}