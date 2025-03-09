let count = 0;
let number = +prompt("Nhập số phần tử ");
if (number < 0) {
    console.log("Số lượng phần tử không được âm");
} else {
    let numberArray = [];
    for (let i = 0; i < number; i++) {
        numberArray[i] = +prompt("Nhập số thứ " + (i + 1));
    }
    if (numberArray.length < 3) {
        console.log("Dãy số quá ngắn để kiểm tra Fibonacci");
    } else {
        for (let i = 0; i < numberArray.length - 2; i++) {
            if (numberArray[i] + numberArray[i+1] !== numberArray[i+2]) {
                count++;
            }
        }
        if (count === 0) {
            console.log("Là dãy số Fibonacci");
        } else {
            console.log("Không phải dãy số Fibonacci");
        }
    }
}
