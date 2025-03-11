let choice = 0;
let str;
let sum =0;

do {
    console.log("1. Nhập chuỗi");
    console.log("2. Hiển thị chuỗi");
    console.log("3. Tính độ dài của chuỗi");
    console.log("4. Đếm số lần xuất hiện của một ký tự (Người dùng nhập) trong chuỗi");
    console.log("5. Kiểm tra chuỗi có phải là chuỗi đối xứng không");
    console.log("6. Chuyển đổi chuỗi thành chữ in hoa các ký tự đầu tiên của từ");
    console.log("7. Thoát chương trình");
    choice = +prompt("Nhập vào lựa chọn của bạn:");

    switch (choice) {
        case 1:
        str = prompt("Nhập vào chuỗi:");
            break;
        case 2:
            console.log(str);
            break;   
        case 3:
            console.log(str.length);
            break;
        case 4:
            let char = prompt("Nhập vào ký tự cần đếm:");
            let count = 0;
            for(let i = 0; i < str.length; i++){
                if(str[i] === char){
                    count++;
                }
            }
            console.log(`Số lần xuất hiện của ${char} là: ${count}`);
            break; 
        case 5: 
        for(let i =0;i<str.length/2;i++){
            if(str[i]!==str[str.length-1-i]){
                console.log("Chuỗi không đối xứng");
                break;
            }else{
                console.log("Chuỗi đối xứng");
            }
        }
        break;  
        case 6:
            let strArr = str.split(" ");
            let result = "";
            for(let i = 0; i < strArr.length; i++){
                result += strArr[i].charAt(0).toUpperCase() + strArr[i].slice(1) + " ";
            }
            cốnlsole.log(result);

            break;          
    }
} while (choice !== 7);