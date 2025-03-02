
let radius = Number(prompt("Nhập bán kính:"));
let height = Number(prompt("Nhập chiều cao:"));

let areaAround = 2 * Math.PI * radius * height;
console.log("diện tích xung quanh: " + areaAround);

let areaTotal = 2 * Math.PI * radius * (radius + height);
console.log("diện tích toàn phần: " + areaTotal);

let volume = Math.PI * radius * radius * height;
console.log("thể tích hình trụ: " + volume);

let perimeterBase = 2 * Math.PI * radius;
console.log("chu vi đáy: " + perimeterBase);