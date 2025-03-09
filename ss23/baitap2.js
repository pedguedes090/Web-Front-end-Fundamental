let numberArray = [1, 2, 3, 4, 5, 76, 7, 8, 21, 10];
let index = 0;
let count = 0;
let max = numberArray[0];
for (let i = 0; i < numberArray.length; i++) {
    if (numberArray[i] > max) {
        max = numberArray[i];
        index = i;
        count++;
    }
}
if (count == 0) {
    console.log("Không có số lớn nhất");
}
console.log(`Số lớn nhất: ${max} ở vị trí ${index}`);
