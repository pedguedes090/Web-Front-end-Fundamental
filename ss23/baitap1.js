let numberArray = [1, 2, 3, 4, 5, 76, 7, 8, 21, 10];
let count = 0;
for(let i = 0;i<numberArray.length;i++){
    if(numberArray[i]>10){
        console.log(numberArray[i]);
        count++;
    }
}
if (count == 0) {
    console.log("Không có số lớn hơn 10");
    
}