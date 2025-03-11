function isPalindrome(){
    let number = prompt("Nhập số phần tử của mảng: ");
    
    for(let i =0;i<number.length/2;i++){
        if(number[i]!=number[number.length-1-i]){
            console.log("Không phải là chuoi đối xứng");
            break;
        }else{
            console.log("Là chuoi đối xứng");
            break;
        }
    }
   
}
isPalindrome();