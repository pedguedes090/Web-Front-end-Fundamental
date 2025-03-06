let choice = 0;
let arr = [];
do{
    console.log("1.Nhập vào mảng");
    console.log("2.Hiển thị mảng");
    console.log("3.Thêm phần tử");
    console.log("4.Sửa phần tử");
    console.log("5.Xóa phần tử");
    console.log("6.Thoát");
    choice = +prompt("Nhập vào lựa chọn của bạn:"); 
    switch(choice){
        case 1:
            let arrLength = +prompt("Nhập vào số phần tử của mảng:");
            for(let i = 0; i < arrLength; i++){
                let element = +prompt(`Nhập vào phần tử thứ ${i+1}`);
                arr[i] = element;
            }
            break;
        case 2:
            for(let i = 0; i< arr.length; i++){
                console.log(arr[i]);
            }
            break;
        case 3:
            let element = +prompt("Nhập vào phần tử muốn thêm:");
            arr.push(element);
            break;
        case 4:
            let index = +prompt("Nhập vào vị trí muốn sửa:");
            let newValue = +prompt("Nhập vào giá trị mới:");
            arr[index] = newValue;
            break;
        case 5:
            let index1 = +prompt("Nhập vị trí muốn xóa: ");
            arr.splice(index1,1);
            break;
        default:
            cốnle.log("Vui lòng nhập lại")
    }
}while(choice !== 6);