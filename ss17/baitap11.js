javascript
// Sử dụng hàm Math.abs()
let value1 = Math.abs(-5.5);
console.log(value1); // kết quả là 5.5
// Math.abs() trả về giá trị tuyệt đối, nên -5.5 trở thành 5.5.

let value2 = Math.abs(10);
console.log(value2); // Kết quả là 10
// Giá trị 10 là số dương, nên Math.abs() không thay đổi giá trị.


// Sử dụng hàm Math.ceil()
let value3 = Math.ceil(4.4);
console.log(value3); // Kết quả là 5
// Math.ceil() làm tròn lên đến số nguyên gần nhất, nên 4.4 trở thành 5.

let value4 = Math.ceil(5.8);
console.log(value4); // Kết quả là 6
// Tương tự, 5.8 cũng được làm tròn lên thành 6.


// Sử dụng hàm Math.floor()
let value5 = Math.floor(5.7);
console.log(value5); // Kết quả là 5
// Math.floor() làm tròn xuống, nên 5.7 trở thành 5.

let value6 = Math.floor(6.1);
console.log(value6); // Kết quả là 6
// 6.1 được làm tròn xuống thành 6, vì không vượt qua số nguyên tiếp theo.


// Sử dụng hàm Math.round()
let value7 = Math.round(10.1);
console.log(value7); // Kết quả là 10
// Math.round() làm tròn đến số nguyên gần nhất, 10.1 trở thành 10.

let value8 = Math.round(20.6);
console.log(value8); // Kết quả là 21
// 20.6 làm tròn lên thành 21 vì gần với 21 hơn là 20.