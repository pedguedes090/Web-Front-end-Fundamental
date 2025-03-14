function ad (arr,n){
    let a = Math.ceil(arr.length/n);
    let result = [];
    let start = 0;
    let end = 0;
    for(let i =0;i<a;i++){
        start = i*n;
        end = start + n;
        result.push(arr.slice(start,end));
    }
    console.log(result);
}
ad([1,2,3,4,5,6,7,8,9],3);