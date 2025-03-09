let numberArray= [ "",false, 0, 5, 10, "Hello world"];
let arr=[];
for(let i = 0;i<numberArray.length;i++){
    if(numberArray[i]){
       arr.push(numberArray[i]); 
    }
}
console.log(arr);