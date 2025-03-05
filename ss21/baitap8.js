for(let i =100;i<=999;i++){
    let a = Math.floor(i/100);
    let b = Math.floor((i%100)/10);
    let c = i%10;
    if(i === a*a*a + b*b*b + c*c*c){
        console.log(i);
    }
}