let soNamKinhNghiem = Number(prompt("Nhập số năm kinh nghiệm:"));
if (soNamKinhNghiem < 1) {
    console.log('Mới vào nghề');
} else if (soNamKinhNghiem >= 1 && soNamKinhNghiem <= 3) {
    console.log('Nhân viên có kinh nghiệm');
} else if (soNamKinhNghiem >= 4 && soNamKinhNghiem <= 6) {
    console.log(' Chuyên viên');
} else {
    console.log('Quản lý')
}