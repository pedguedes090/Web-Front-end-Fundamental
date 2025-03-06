let input = prompt('Nhập vào dãy số bất kỳ, cách nhau bởi dấu cách:');
let arr = input.split(' ').map(Number);
let chan = 0;
let le = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i]%2==0) {
        chan += arr[i];
    }else{
        le += arr[i];
    }
}
console.log('tổng các số chẵn là :', chan);
console.log('tổng các số lẻ là :', le);