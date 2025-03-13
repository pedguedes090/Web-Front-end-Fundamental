function numberMax(){
    let numbers = [];
for (let i = 0; i < 10; i++) {
    numbers.push(+prompt(`Nhập phần tử thứ ${i + 1}:`));
}
let max = Math.max(...numbers);
let index = numbers.indexOf(max);
console.log(`Số lớn nhất là ${max} ở vị trí ${index}`);
}
numberMax();