function min(){
    let a=[];
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
    let min = a[0];
    for(let i = 0; i < number; i++){
        if(a[i] < min){
            min = a[i];
        }
    }
    console.log("Số nhỏ nhất trong mảng là: " + min);

}
min();