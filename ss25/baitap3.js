function min(){
    let a=[];
    let number = +prompt("Nhập số phần tử của mảng: ");
    if(number < 1){
        console.log("Vui lòng nhập số phần tử lớn hơn 0");
    }
    for(let i = 0; i<number; i++){
       if(a[i]%2==0){
              console.log(a[i]);
       }
    }

}
min();