let result = “javascript” + 5;
/*
Kết quả: "javascript5"
 Khi cộng chuỗi với số, JavaScript sẽ chuyển số thành chuỗi và nối chúng lại với nhau.
*/
let result = “javascript” - 1;
/*
Kết quả: NaN
Khi trừ một chuỗi không phải số từ một số, JavaScript không biết làm gì và trả về NaN (Not a Number).
*/
let result = “3” + 2;
/*
Kết quả: "32"
Chuỗi "3" được nối với số 2 để tạo thành chuỗi "32".
*/
let result = “5” - 4;
/*
Kết quả: 1
Chuỗi "5" được chuyển thành số 5 và sau đó trừ 4.
*/
let result =  isNaN( “123”);
/*
Kết quả: false
Hàm isNaN() kiểm tra xem giá trị có phải là NaN hay không. Trong trường hợp này, "123" không phải là NaN, vì vậy kết quả là false.
*/
let result = isNaN(“hello”);
/*
Kết quả: true
Hàm isNaN() kiểm tra xem giá trị có phải là NaN hay không. Trong trường hợp này, "hello" không phải là số, vì vậy kết quả là true.
*/
let result = Number.isNaN("123");
/*
Kết quả: false
Hàm Number.isNaN() kiểm tra xem giá trị có phải là NaN hay không. Trong trường hợp này, "123" không phải là NaN, vì vậy kết quả là false.
*/
let result = Number.isNaN(NaN);
/*
Kết quả: true
Hàm Number.isNaN() kiểm tra xem giá trị có phải là NaN hay không. Trong trường hợp này, NaN là NaN, vì vậy kết quả là true.
*/