let main = document.getElementsByClassName('main');
let name = localStorage.getItem('inpt');
let inpt = document.getElementById('input-value').value;
if (!name == '') {
    main[0].innerHTML = '';
    main[0].innerHTML = `<h3>👋chào bạn, ${name}  là tôi  </h3>
        <button id ="btn2" onclick=removeitem() >Đổi tên </button>`
} else {
    
}
function render() {
    let inpt2 = document.getElementById('input-value').value;
    localStorage.setItem('inpt', inpt2);
    main[0].innerHTML = '';
    console.log("name");

    main[0].innerHTML = `<h3>👋chào bạn, ${inpt2}  là tôi  </h3>
        <button id="btn2"onclick=removeitem()>Đổi tên </button>`
};

let btn = document.getElementById('btn');
btn.onclick = function () {
    render();
}
function removeitem(){
    localStorage.removeItem('inpt');
    main[0].innerHTML=`<h3>Nhập tên của bạn </h3>
        <input type="text" id="input-value">
        <button id="btn" onclick =render()>lưu</button>`
}