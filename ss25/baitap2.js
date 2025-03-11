function min(){
    let a=[];
    let sum;
    let number = 2;
    for(let i = 0; i < number; i++){
        a[i] = +prompt("Nhập phần tử thứ " + i + " :");
        if(isNaN(a[i])){
            console.log("Vui lòng nhập số");
            i--;
        }
    }
    for(let i = 0; i < number; i++){
        sum += a[i];
    }
    console.log(sum);

}
min();