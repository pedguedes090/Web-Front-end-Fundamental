let numberArray = [2,5,7,4,1,8,6,2,5,7];
let number = +prompt("Nhap so ");
let check =0;
for(let i = 0;i < numberArray.length;i++){
    if(numberArray[i] == number){
        check ++;
    }
}
if(check == 0){
    console.log(`${number} không có trong mảng`);
}else{
    console.log(`số ${number} suất hiện ${check} trong mảng`);
}