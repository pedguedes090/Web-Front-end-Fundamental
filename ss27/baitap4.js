function menu(){
    let choice = 0;
    let arr = [];
    let number = 0;
    do{
        choice = +prompt(`1. Nhập danh sách số nguyên
        2.Tính trung bình các số nguyên
        3.Tìm số chẵn lớn nhất
        4.Tìm số lẻ nhỏ nhất`);
        switch ( choice) {
            case 1:
                number = +prompt('mời nhập số lượng phần tử:')
                for(let i = 0; i<number; i++){
                    let num= parseInt(prompt('mời nhập số'));
                    arr.push(num);
                }
                break;
            case 2:
                let avg=0;
                for(let i = 0; i<arr.length; i++){
                    avg += arr[i];
                }
                avg = avg/arr.length;
                console.log(avg);
                break;
            case 3:
                let maxChan = 0;
                for(let i = 0; i<arr.length; i++){
                    if(arr[i]%2==0 && arr[i]>maxChan){
                        maxChan = arr[i];
                    }
                }
                if(maxChan==0){
                    console.log('không có số nào')
                }else{
                    console.log(maxChan);}
                break;
            case 4:
                let maxLe = 0;
                for(let i = 0; i<arr.length; i++){
                    if(arr[i]%2!=0 && arr[i]<maxLe){
                        maxLe = arr[i];
                    }
                }
                if(maxLe==0){
                    console.log('không có số nào ')
                }else {
                    console.log(maxLe);
                }
                break;
            case 5:
                console.log('thoat')

        }
    }while(choice !== 5);
}
menu();