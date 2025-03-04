let input = prompt('moi nhap so ');
let output = '';
for( i = input.length - 1, output = ''; i >= 0;) { 
    output += input[i--]
}
if (isNaN(input)) {
    console.log('nhap lai so');    
}
else if (output == input) {
    console.log('la so doi xung');
}
else{
    console.log('khong phai so doi xung');
}