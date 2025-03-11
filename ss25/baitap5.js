function min(){
    let a=[];
    let count=0;
    let number = +prompt("Nhập số phần tử của mảng: ");
    if(number < 1){
        console.log("Vui lòng nhập số phần tử lớn hơn 0");
    }
    for(let i = 0; i < number; i++){
        a[i] = +prompt("Nhập phần tử thứ " + i + " :");
        if(isNaN(a[i])){
            console.log("Vui lòng nhập số");
            i--;
        }
    }
    for(let i = 0; i < number; i++){
        if(a[i]>0){
            count++;

        }
    }
    if(count>0){
        console.log(count);
    }else{
        console.log("Không có số dương nào trong mảng");
    }
}
min();