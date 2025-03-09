let numberArray = [2,5,7,4,1,8,6,2,5,7];
let count =0;
let max = numberArray[0];
for(let i = 0;i < numberArray.length;i++){
    for(let j = 0;j < numberArray.length;j++){
        if(numberArray[i] == numberArray[j]){
            count ++;
        }
    }
    
}