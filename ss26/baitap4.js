function primeNumber(arr = []){
    let arrLength = +prompt("Nhập vào số phần tử của mảng:");
        for(let i = 0; i < arrLength; i++){
            let element = +prompt(`Nhập vào phần tử thứ ${i+1}`);
            arr[i] = element;
        }
    let prime = arr.filter((num) => {
        if (num < 2) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    });
    return prime;
}
console.log("Các số lớn hơn 10 trong mảng là: " + primeNumber());