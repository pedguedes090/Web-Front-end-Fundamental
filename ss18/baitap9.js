let hour = Number(prompt('moi nhap so gio '));
let minnut = Number(prompt('moi nhap so phut '));
let second = Number(prompt('moi nhap so giay '));
let time = "0";
if (hour >= 0 && hour <= 23 && minnut >= 0 && minnut <= 59 && second >= 0 && second <= 59) {
    switch(hour){
        case 13:
            hour = 1;
            time = 'PM';
            break;
        case 14:
            hour = 2;
            time = 'PM';
            break;
        case 15:
            hour = 3;
            time = 'PM';
            break;
        case 16:
            hour = 4;
            time = 'PM';
            break;
        case 17:
            hour = 5;
            time = 'PM';
            break;
        case 18:
            hour = 6;
            time = 'PM';
            break;
        case 19:
            hour = 7;
            time = 'PM';
            break;
        case 20:
            hour = 8;
            time = 'PM';
            break;
        case 21:
            hour = 9;
            time = 'PM';
            break;
        case 22:
            hour = 10;
            time = 'PM';
            break;
        case 23:
            hour = 11;
            time = 'PM';
            break;
        case 0:
            hour = 12;
            time = 'AM';
            break;
        default:
            time = 'AM';
            break;
    }
} else {
    console.log('Thời gian không hợp lệ');
}
alert(hour + ':' + minnut + ':' + second + ' ' + time);