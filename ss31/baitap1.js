let text = document.getElementById("text");
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");

btn1.onclick = function () {
    console.log("Hello");
    text.style.display = "none";
}
btn2.onclick = function () {
    console.log("Hello");
    text.style.display = "block";
}