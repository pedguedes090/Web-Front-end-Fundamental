let input = +prompt('moi nhap so ');
let sum = 0;
if (isNaN(input)) {
    console.log('nhap lai so');    
}else{
    for (let i = 0; i <= input; i++) {
        sum  +=i;
        console.log(sum);
    }
}   