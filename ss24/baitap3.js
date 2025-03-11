let choice = 0;
let numberArray = [];
do{
    console.log("1.Nhập vào mảng");
    console.log("2.Hiển thị mảng");
    console.log("3.Tìm phần tử lớn nhất trong mảng và in ra chỉ số của nó");
    console.log("4.Tính tổng và trung bình cộng của các số dương trong mảng");
    console.log("5.Đảo ngược mảng");
    console.log("6.Kiểm tra mảng có đối xứng không");
    console.log("7.Thoát chương trình");
    choice = +prompt("Nhập vào lựa chọn của bạn:"); 
    switch(choice){
        case 1:
            let number = +prompt("Nhập vào số phần tử của mảng:");
            for(let i = 0;i<number;i++){
                numberArray[i] = parseInt(prompt("Nhập số thứ "+(i+1)));
            }
            break;
        case 2:
            for(let i = 0; i< numberArray.length; i++){
                console.log(numberArray[i]);
            }
            break;
        case 3:
            let max;
            for(let i =0;i<numberArray.length;i++){
                if(max<numberArray[i]){
                    max = numberArray[i];
                }
            }
            console.log(max);
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
            break;
        case 4:
            let sum = 0;
            for(let i = 0; i <numberArray.length; i++){
                if(numberArray[i]>0){
                    sum += +numberArray[i];
                }
            }
            let avg = sum/numberArray.length;
            console.log(avg);
            break;
        case 5:
            numberArray.reverse();
            console.log(numberArray);
            break;
            case 6:
                for(let i =0; i<Math.floor(numberArray.length/2); i++){
                    if(numberArray[i] !== numberArray[numberArray.length-1-i]){
                        console.log("Mảng không đối xứng");
                        break;
                    }else{
                        console.log("Mảng đối xứng");
                        break;
                    }
                }
            break;
        default:
            console.log("Vui lòng nhập lại")
    }
}while(choice !== 7);