let sum = 0;
let count = 0;
let number = +prompt("Nhập số phần tử ");
if(number<0){
    console.log("Số lượng phần tử không được âm");
}
if(number==0){
    console.log("Mảng không có phần tử");
}
let numberArray = [];
for(let i = 0;i<number;i++){
    numberArray[i] = prompt("Nhập số thứ "+(i+1));
}
for(let i = 0;i<numberArray.length;i++){
    if(!isNaN(numberArray[i])){
        sum += +numberArray[i];     
    }
}
if(count==0){
    console.log('Không có phần tử nào là số')
}
console.log(sum);
