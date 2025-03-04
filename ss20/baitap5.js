let a = +prompt('moi nhap so a');
let b = +prompt('moi nhap so b');
let temp = a;
for(let i =1; i<b; i++){
    temp = temp * a;
}
console.log(temp);