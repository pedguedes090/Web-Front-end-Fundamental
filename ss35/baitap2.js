// let web = [
//     {
//         id : 1,
//         webname : 'google',
//         WebUrl : 'www.google.com'
        
//     },
//     {
//         id:2,
//         webname:'facebook',
//         WebUrl:'www.facebook.com'
//     },
//     {
//         id :3,
//         webname:'youtube',
//         WebUrl:'www.youtube.com'
//     }
// ];
// localStorage.setItem('web',JSON.stringify(web));
let webs = JSON.parse(localStorage.getItem('web')) || [];
function render(){
    let row = document.getElementById('row');
    row.innerHTML = '';
    webs.forEach((item, index)=>{
        row.innerHTML += `
            <div class="col">
                ${item.webname}
                <button class="btn btn-danger" onclick="deleteWeb(${index})">Xóa</button>
            </div>
        `;
    });
}

function deleteWeb(index){
    webs.splice(index, 1);
    localStorage.setItem('web', JSON.stringify(webs));
    render();
}

function addWeb(a){
    a.preventDefault();
    let newwebname = document.getElementById('webnamex').value;
    let newWebUrl = document.getElementById('webUrlx').value;
    if(newwebname === '' || newWebUrl === ''){
        alert('Please enter webname and WebUrl');
        return;
    }
    let newweb = {
        id: webs.length > 0 ? webs[webs.length - 1].id + 1 : 1,
        webname: newwebname,
        WebUrl: newWebUrl
    }
    webs.push(newweb);
    localStorage.setItem('web', JSON.stringify(webs));
    render();
}
render();