let FistNumber = prompt('Nhập số thứ nhất: ');
let SecondNumber = prompt('Nhập số thứ hai: ');
let numberRandom = Math.floor(Math.random() * parseInt(SecondNumber))+parseInt(FistNumber);
alert(`Số ngẫu nhiên trong khoảng từ ${FistNumber} đến ${SecondNumber} là: ${numberRandom}`);
document.write(`Số ngẫu nhiên trong khoảng từ ${FistNumber} đến ${SecondNumber} là: ${numberRandom}`);