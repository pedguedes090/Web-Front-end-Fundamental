let FistNumber = prompt('Nhập số thứ nhất: ');
let SecondNumber = prompt('Nhập số thứ hai: ');
let ThirdNumber = prompt('Nhập số thứ ba: ');
let temp = 0;
const MaxNumber=[
    FistNumber,
    SecondNumber,
    ThirdNumber,
];
temp = parseInt(FistNumber) ; 
for (let i = 0; i < 3; i++) {
    
    if (temp < parseInt(MaxNumber[i + 1])) {
        temp = parseInt(MaxNumber[i + 1]);
        
    }
}                                          
document.write(`Số lớn nhất là: ${temp}`);      