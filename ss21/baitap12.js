for(let i =0;i<10;i++){
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var a = 0; a < 6; a++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    console.log(`%cmau da duoc thay doi `, `color: ${color}`);
}