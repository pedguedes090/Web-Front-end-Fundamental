let input = prompt('Nhập vào dãy số bất kỳ, cách nhau bởi dấu cách:');
let arr = input.split(' ').map(Number);
let max = arr[0];
for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
}
console.log('Phần tử có giá trị lớn nhất trong mảng là:', max);
