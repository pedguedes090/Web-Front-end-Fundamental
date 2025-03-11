function min(){
    let count = 0;
    let number = +prompt("nhập số:");
    if(number < 1){
        console.log("Vui lòng nhập số phần tử lớn hơn 0");
        return;
    }
    if(isNaN(number)){
        console.log("Vui lòng nhập số");
        return;
    }
    for(let i=0; i<=number; i++){
        if(number%i==0){
            count++;
        }    
    }
    if(count==2){
        console.log("là số nguyên tố");
    }else{
        console.log("không phải số nguyên tố");
    }
}
min();