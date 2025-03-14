function menu() {
    let arr = [];
    let number = parseInt(prompt('Moi nhap so luong phan tu'), 10);
    if (isNaN(number) || number < 2) {
        console.log('So luong phan tu phai la mot so nguyen lon hon hoac bang 2');
        return false;
    }
    for (let i = 0; i < number; i++) {
        let element = +prompt(`Nhap phan tu thu ${i + 1}:`);
        if (isNaN(element)) {
            console.log('Vui long nhap mot so hop le.');
        }else{
            arr.push(element);
        }
    }
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] + 1 !== arr[i + 1]) {
            console.log(arr[i]+1);
            return;
        }
    }


}
menu();