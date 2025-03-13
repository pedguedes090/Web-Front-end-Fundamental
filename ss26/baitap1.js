let arr = [];
let number = prompt("mời nhập: ");
if(number ==0){
    console.log("không được để trống");
}else if(isNaN(number)){
    console.log("vui lòng nhập số");
}else{
for (let i = 0; i < number; i++) {
    arr[i] = +prompt("phần tử thứ " + (i + 1) + ": ");
    }
let a = arr.filter((item, index) =>  item >= 10);
    console.log(a);
}

    