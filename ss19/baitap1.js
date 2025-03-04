let input = Number(prompt('moi nhap so'));
if(input == 1 || input == 3 || input == 5 || input == 7 || input == 8 || input == 10 || input == 12){
    console.log(`tháng ${input} tháng có 31 ngày `);
}
else if(input == 4 || input == 6 || input == 9 || input == 11){
    console.log( `tháng ${input} tháng có 30 ngày `);
}else if(input == 2){
    console.log('tháng 2 là tháng có 28 hoặc 29 ngày');
}
else{
    console.log('không phải tháng trong năm ');
}