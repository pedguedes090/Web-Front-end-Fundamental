let a = 0;
let b =""
for(let i =0;i<5;i++){
    for(let j=0;j<5-a;j++){
        b+="*";
    }
    b+="\n";
    a++;
}
console.log(b);