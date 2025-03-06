let input = Number(prompt('moi nhap so'));
if(input == 1,3,5,7,8,10,12){
    console.log('thang co 31 ngay');
}
else if(input == 4,6,9,11){
    console.log( `${input}thang co 30 ngay`);
}else if(input == 2){
    console.log('thang co 28 hoac 29 ngay');
}
else{
    console.log('khong phai thang trong nam');
}