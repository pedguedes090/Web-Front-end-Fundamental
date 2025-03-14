function menu() {
    let choice = 0;
    let a =0;
    let b=0;
    let r=0;
    let result = 0;
    do{
        choice = +prompt(`1.tính diện tích hình tròn
        2.tính chu vi hình tròn
        3.tính diện tích hình chữ nhật
        4.tính chu vi hình chữ nhật`)
        if(choice>0 && choice<3){
            r = +prompt('nhập bán kính kình tròn')
        }else if(choice>2 && choice<5){
            a = +prompt('nhập chiều dài');
            b = +prompt('nhập chiều rộng')
        }
        switch (choice) {
            case 1:
                result = Math.PI * r * r;
                console.log(result);
                break;
            case 2:
                result = 2 * Math.PI * r;
                console.log(result)
                break;
            case 3:
                result = a * b;
                console.log(result)
                break;
            case 4:
                result = 2 * (a + b);
                console.log(result)
                break;
            case 5:
                console.log('thoat')
            default:
                console.log('vui lòng chọn lại')
                break;
        }
    }while(choice!=5)

}
menu();