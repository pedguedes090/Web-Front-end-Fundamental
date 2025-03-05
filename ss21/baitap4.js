let a = parseInt(prompt('moi nhap so'));
console.log(a);
let b = parseInt(prompt('moi nhap so'));
let c = parseInt(prompt('moi nhap so'));
let deta = b*b - 4*a*c;
if(deta < 0){
    console.log('phuong trinh vo nghiem');
}else if(deta == 0){
    let x = -b/(2*a);
    console.log('phuong trinh co nghiem kep x1=x2='+x);
}else{
    let x1 = (-b + Math.sqrt(deta))/(2*a);
    let x2 = (-b - Math.sqrt(deta))/(2*a);
    console.log('phuong trinh co 2 nghiem phan biet x1='+x1+' x2='+x2);
}