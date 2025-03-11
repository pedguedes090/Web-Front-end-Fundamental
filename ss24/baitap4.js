let choice = 0;
let row;
let col;
let sum =0;
let arr = [];

do {
    console.log("1. Nhập mảng 2 chiều");
    console.log("2. Hiển thị mảng 2 chiều");
    console.log("3. Tính tổng các phần tử trong mảng");
    console.log("4. Tìm phần tử lớn nhất trong mảng và chỉ số của nó");
    console.log("5. Tính trung bình cộng các phần tử của một hàng cụ thể");
    console.log("6. Đảo ngược các hàng trong mảng");
    console.log("7. Thoát chương trình");
    choice = +prompt("Nhập vào lựa chọn của bạn:");

    switch (choice) {
        case 1:
            row = +prompt("Nhập vào số hàng:");
            col = +prompt("Nhập vào số cột:");
             

            for (let i = 0; i < row; i++) {
                let arrOfCol = [];
                for (let j = 0; j < col; j++) {
                    let number = +prompt(`Nhập vào phần tử`);
                    arrOfCol.push(number);
                }
                arr.push(arrOfCol);
            }
            break;
        case 2:
           console.log(arr);
            break;
        case 3:
             sum = 0;
            for (let i = 0; i < row; i++) {
                for (let j = 0; j < col; j++) {
                    sum += arr[i][j];
                }
            }
            console.log("Tổng các phần tử trong mảng là: " + sum);
            break;
        case 4:
            let max = arr[0][0];
            let maxIndex = [0, 0];
            for (let i = 0; i < row; i++) {
                for (let j = 0; j < col; j++) {
                    if (arr[i][j] > max) {
                        max = arr[i][j];
                        maxIndex = [i, j];
                    }
                }
            }
            console.log(`Phần tử lớn nhất là ${max} tại vị trí (${maxIndex[0]}, ${maxIndex[1]})`);
            break;
        case 5:
            sum = 0;
            let rowIndex = +prompt("Nhập vào hàng cần tính:");
            for (let j = 0; j < col; j++) {
                sum += arr[rowIndex][j];
            }
            let avg = sum / col;
            console.log(`Trung bình cộng các phần tử của hàng ${rowIndex} là: ${avg}`);
            break;
        case 6:
            console.log(arr.reverse());
            break;
    }
} while (choice !== 7);