let input = prompt('Nhập vào dãy số bất kỳ, cách nhau bởi dấu cách:');
let arr = input.split(' ').map(Number);

for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
    }
}

console.log('Dãy số sau khi sắp xếp là:', arr);
