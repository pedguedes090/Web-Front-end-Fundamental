function menu() {
    let choice = 0;
    do {
        let a = 0;
        let b = 0;
        let result = 0;
        choice = +prompt(`1.Cộng hai số 
2.trừ hai số .
3.Nhân hai số.
4.Chia hai số.
5.Thoát
                    `)
        if (choice > 0 && choice < 5) {
            a = +prompt("Nhập số thứ nhất: ");
            b = +prompt("Nhập số thứ hai: ");
        }
        switch (choice) {
            case 1:
                result = a + b;
                console.log("Tổng hai số là: " + result);
                break;
            case 2:
                result = a - b;
                console.log("Hiệu hai số là: " + result);
                break;
            case 3:
                result = a * b;
                console.log("Tích hai số là: " + result);
                break;
            case 4:
                if (b == 0) {
                    console.log("không thể chia cho 0");
                } else {
                    result = a / b;
                    console.log("Thương hai số là: " + result);
                }
                break;
            case 5:
                console.log("Thoát");
                break;
            default:
                console.log("không có lựa chọn này");
                break;
        }
    } while (choice != 5);
}
menu();