let body = document.getElementsByClassName('body')[0];

let btn = document.getElementsByClassName('dark-mode-toggle')[0];

btn.onclick = () =>{
    body.classList.toggle('dark-mode');
}