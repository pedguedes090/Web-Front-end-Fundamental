let input = +prompt('moi nhap so ');
let sum = 0;
if (isNaN(input)) {
    console.log('nhap lai so');    
}else{
    document.write(`Các số chia hết cho 5 từ 1 đến ${input} là: `);
    for (let i = 5; i <= input; i += 5) {
    document.write(`${i} `);
}   
}
