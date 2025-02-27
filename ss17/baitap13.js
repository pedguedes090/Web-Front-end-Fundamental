let monney = prompt('moi nhap so tien');
let month = prompt('moi nhap so thang');
let interest = 4.3/12/100;

alert('so tien lai la: '+(monney*(1+interest*month)).toLocaleString('vi-VN')+' VND');