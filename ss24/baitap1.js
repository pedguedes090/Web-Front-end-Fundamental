let choice = 0;
let numberArray = [];
do{
    console.log("1.Nhập vào mảng");
    console.log("2.Hiển thị mảng");
    console.log("3.Tìm phần tử lớn nhất và nhỏ nhất trong mảng");
    console.log("4.Tính tổng các phần tử trong mảng");
    console.log("5.Tìm số lần xuất hiện của một phần tử trong mảng");
    console.log("6.Sắp xếp mảng tăng dần");
    console.log("7.Thoát");
    choice = +prompt("Nhập vào lựa chọn của bạn:"); 
    switch(choice){
        case 1:
            let number = +prompt("Nhập vào số phần tử của mảng:");
            for(let i = 0;i<number;i++){
                numberArray[i] = prompt("Nhập số thứ "+(i+1));
            }
            break;
        case 2:
            for(let i = 0; i< numberArray.length; i++){
                console.log(numberArray[i]);
            }
            break;
        case 3:
            for(let i =0; i< numberArray.length; i++){
                for(let j = 0; j< numberArray.length; j++){
                    if(numberArray[i] < numberArray[j]){
                        let temp = numberArray[i];
                        numberArray[i] = numberArray[j];
                        numberArray[j] = temp;
                    }
                }
            }
            console.log(numberArray[0]);
            console.log(numberArray[numberArray.length-1]);
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
            break;
        case 4:
            let sum = 0;
            for(let i = 0; i <numberArray.length; i++){
                sum += +numberArray[i];
            }
            console.log(sum);
            break;
        case 5:
            let count= 0;
            let numberFine = +prompt("Nhập vào số cần tìm:");
            for(let i = 0;i <numberArray.length; i++){
                if(numberFine == numberArray[i]){
                    count++;
                    break;
                }
                console.log (count);
            }
            break;
            case 6:
                for(let i =0; i< numberArray.length; i++){
                    for(let j = 0; j< numberArray.length; j++){
                        if(numberArray[i] < numberArray[j]){
                            let temp = numberArray[i];
                            numberArray[i] = numberArray[j];
                            numberArray[j] = temp;
                        }
                    }
                }
            break;
        default:
            console.log("Vui lòng nhập lại")
    }
}while(choice !== 7);