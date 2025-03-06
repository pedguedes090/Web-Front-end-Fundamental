let number = +prompt('Nhập số phần tử của mảng: ');
let arr = [];
for (let i = 0; i < number; i++) {
    let value;
    do {
        value = prompt('Nhập số: '); 
        if (isNaN(value)) {
            alert('Vui lòng nhập số hợp lệ');
        }
    } while (isNaN(value)); 
    arr.push(value); 
}
for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].split('').reverse().join('');
}
console.log('Mảng sau khi đảo ngược từng phần tử:', arr);
