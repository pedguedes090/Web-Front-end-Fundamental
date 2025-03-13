function checkEmail() {
    let arr = [];
    let arrLength = +prompt("Mời nhập vào số phần tử của mảng:");
    for (let i = 0; i < arrLength; i++) {
        let element = prompt(`Nhập vào phần tử thứ ${i + 1}`);
        arr[i] = element;
    }
    const email = arr.filter(email => email.includes("@"));
    return email;
}
console.log("Các email trong mảng", checkEmail());