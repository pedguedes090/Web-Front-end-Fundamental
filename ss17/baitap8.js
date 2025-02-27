let date1= new Date(prompt('moi nhap nam thang ngay theo dinh dang yyyy-mm-dd'));
let date2= new Date(prompt('moi nhap nam thang ngay theo dinh dang yyyy-mm-dd'));
let lechdate = (Math.abs(date1 - date2))/ (1000 * 60 * 60 * 24);
console.log(lechdate);