let choice = 0;
let inputString = "";
do {
    console.log("1. Nhập chuỗi");
    console.log("2. Hiển thị chuỗi");
    console.log("3. Loại bỏ các khoảng trắng ở đầu và cuối chuỗi");
    console.log("4. Đảo ngược chuỗi ký tự");
    console.log("5. Đếm số lượng từ trong chuỗi ký tự");
    console.log("6. Tìm kiếm và thay thế các ký tự trong chuỗi gốc");
    console.log("7. Thoát chương trình");
    choice = +prompt("Nhập vào lựa chọn của bạn:");
    switch (choice) {
        case 1:
            inputString = prompt("Nhập vào chuỗi:");
            break;
        case 2:
            console.log(inputString);
            break;
        case 3:
            inputString = inputString.trim();
            console.log(inputString);
            break;
        case 4:
            inputString = inputString.split("").reverse().join("");
            console.log(inputString);
            break;
        case 5:
            let wordCount = inputString.split(" ").length;
            console.log("Số lượng từ trong chuỗi: " + wordCount);
            break;
        case 6:
            let charToFind = prompt("Nhập ký tự cần tìm:");
            let charToReplace = prompt("Nhập ký tự thay thế:");
            inputString = inputString.split(charToFind).join(charToReplace);
            console.log(inputString);
            break;
        case 7:
            console.log("Thoát chương trình");
            break;
        default:
            console.log("Vui lòng nhập lại");
    }
} while (choice !== 7);
