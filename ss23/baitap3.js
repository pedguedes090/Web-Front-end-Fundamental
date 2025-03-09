let count = 0;
let number = +prompt("Nhập số phần tử ");
if(number<0){
    console.log("Số lượng phần tử không hợp lệ");
}
let numberArray = [];
for(let i = 0;i<number;i++){
    numberArray[i] = +prompt("Nhập số thứ "+(i+1));
}
for(let i = 0;i<numberArray.length;i++){
    if(numberArray[i]<0 && numberArray[i]%1==0){
        count++;
    }
}
if(numberArray.length==0){
    console.log("Mảng không có phần tử ");
}
if(count==0){
    console.log("Không có số âm");
}
console.log(count);