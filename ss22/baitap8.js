let numberArray = [2, 5, 7, 4, 1, 8, 6, 2, 5, 7];
let maxCount = 0;
let mostFrequent = numberArray[0];

for (let i = 0; i < numberArray.length; i++) {
    let count = 0;
    for (let j = 0; j < numberArray.length; j++) {
        if (numberArray[i] === numberArray[j]) {
            count++;
        }
    }
    if (count > maxCount) {
        maxCount = count;
        mostFrequent = numberArray[i];
    } else if (count === maxCount && numberArray[i] < mostFrequent) {
        mostFrequent = numberArray[i];
    }
}

console.log('Phần tử có số lần xuất hiện nhiều nhất là:', mostFrequent);