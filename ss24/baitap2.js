let choice = 0;
let numberArray = [];
do{
    console.log("1.Nhập vào mảng");
    console.log("2.Hiển thị mảng");
    console.log("3.Tìm các phần tử chẵn và lẻ");
    console.log("4.Tính trung bình cộng của mảng");
    console.log("5.Xóa phần tử tại vị trí chỉ định");
    console.log("6. Tìm phần tử lớn thứ hai trong mảng");
    console.log("7.Thoát");
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
            let chan=[];
            let le=[];
            for(let i = 0; i<numberArray.length; i++){
                if(numberArray[i]%2==0){
                    chan.push(numberArray[i]);
            }else{
                le.push(numberArray[i]);
                }
            }
            console.log("Số chẵn: "+chan);
            console.log("Số lẻ: "+le);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
            break;
        case 4:
            let sum = 0;
            for(let i = 0; i <numberArray.length; i++){
                sum += +numberArray[i];
            }
            let avg = sum/numberArray.length;
            console.log(avg)
            break;
        case 5:
            let deleteNumber = parseInt(prompt("Nhập vị trí cần xoá:"));
            numberArray.splice(deleteNumber,1);
            console.log(numberArray);
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
            console.log(numberArray[numberArray.length-2]);
            break;
        default:
            console.log("Vui lòng nhập lại")
    }
}while(choice !== 7);