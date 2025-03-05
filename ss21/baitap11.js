let input = +prompt('moi nhap so ');
let count = 0;
let count2 = 0;
let k = 2;
while(count2<input){
    count = 0;
    for( let i =1;i<=k; i++){
        if(k%i===0){
            count++;
        }
    }
    if(count===2){
        count2++;
        console.log(k);    
    }
    k++;
}