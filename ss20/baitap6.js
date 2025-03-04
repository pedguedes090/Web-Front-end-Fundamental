let input = +prompt('moi nhap so ');
let count = 0;
for(let i =0; i<=input; i++){
    if (input%i==0) {
        count++;        
    }
}
console.log(count);
if(count == 2) {
    console.log('la so nguyen to');
}
else{
    console.log('khong phai so nguyen to');
}