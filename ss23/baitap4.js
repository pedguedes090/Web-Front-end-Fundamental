let count = 0;
let number = +prompt("Nhập số phần tử ");
if(number<0){
    console.log("Số lượng phần tử không hợp lệ");
}
let numberArray = [];
for(let i = 0;i<number;i++){
    numberArray[i] = prompt("Nhập số thứ "+(i+1));
}
for(let i = 0;i<numberArray.length;i++){
    if(!isNaN(numberArray[i])){
        console.log(numberArray[i]);
        count++;     
    }
}
if(count==0){
    console.log('Không có ký tự số')
}