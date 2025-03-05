let a ="";
for(let i =0;i<5;i++){
    for(let j =0;j<10;j++){
        if(i==0||i==4||j==0||j==9){
            a+="*";
        }else{
            a+=" ";
        }
}
a+="\n";
}
console.log(a);